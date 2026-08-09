---
title: Offline Synchronization Engine
description: Exhaustive documentation of the Mapplex local-first sync architecture.
order: 1
---

# Offline Synchronization Engine (`db.js`)

Mapplex is built entirely on a **local-first** architecture. Whether using it on the web via IndexedDB or via Android native using SQLite, the platform acts as if the local database *is* the source of truth, queuing network changes asynchronously.

## Dual-Backend Storage

The `db.js` layer automatically intercepts `Capacitor.isNativePlatform()` checks:
- **Web / Development:** Uses IndexedDB (`idb` wrapper).
- **Native Android / iOS:** Dynamically loads `@capacitor-community/sqlite` and instantiates a true SQLite connection.

All consumers (`MapView`, `ProjectManager`, etc.) use a unified `dbAPI` interface and have no knowledge of whether they're writing to IDB or SQLite.

## 1. The Offline Fast-Path (`put` & `putBatch` operations)

Whenever data is inserted or updated via `dbAPI.put` or `putBatch` targeting a hosted project, the system performs a critical connectivity check:

If `!navigator.onLine` is true:
1. The system **bypasses ALL Geova Cloud API calls** completely. This prevents blocking UI threads during mobile network timeouts (which can sometimes hang for up to 30 seconds on 3G networks).
2. The data is written to the local store (IDB/SQLite).
3. A sync operation is added to the `STORES.PENDING_SYNC` table with the action `upsert`.
4. A UI event (`sync-status-change`) is emitted, instantly updating the Dashboard/Cloud icons to reflect offline pending states.

## 2. Mutex Locks & Transaction Handling

A critical architectural component in native mobile is the `_sqliteTxMutex`. 

```javascript
let release;
const acquired = new Promise(resolve => { release = resolve; });
const prev = _sqliteTxMutex;
_sqliteTxMutex = acquired;

// Wait for all previous batches to finish before opening our transaction
await prev;
```

**Why is it needed?**
On Android, if you attempt to call `beginTransaction()` on a SQLite connection when one is already actively running, the Capacitor Plugin crashes aggressively with `"Failed in beginTransaction: Already in transaction"`. Because Mapplex performs massive asynchronous batch inserts (e.g., parsing a 5MB GeoJSON directly into `putBatch` while background workers might be updating cache layers), the Mutex lock forces a strict single-file queue. 

By executing all batch rows in a single atomic `executeSet()` instruction within this Mutex, Mapplex guarantees that partial inserts never occur and the DB remains perfectly serialized.

## 3. The "Fake Online" Captive Portal Trap

Mobile browsers and Android WebViews notoriously emit the `'online'` event as soon as the WiFi interface connects to a router—even if that router is a Captive Portal (like an airport or hotel) that prevents actual internet access.

If Mapplex were to flush its offline queue the moment `'online'` fired, all network requests would fail or timeout, potentially corrupting the sync state.

To counteract this, the `db.js` restoration lifecycle implements a **"Fake Online" Trap**:

1. Listen for `'online'` event.
2. Initialize a `3000ms` stabilization debounce (Wait for the device IP to settle).
3. Execute a fast, lightweight ping race:
   ```javascript
   const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('API Ping Timeout')), 2500));
   const pingResult = await Promise.race([
       authManager.getCurrentSession(),
       timeoutPromise
   ]);
   ```
4. If the explicit API call succeeds within 2500ms, the system is truly online, and the background queue is flushed. If it timeouts, the Trap catches it, aborts the auto-sync, and logs an aborted sync warning.

## 4. Pending Sync Deduplication

When offline changes pile up for the same feature (e.g., a user dragging a geometry point 50 times while in airplane mode), the `queueOrUpdatePendingUpsert` smart queue prevents explosive queue length:

Instead of creating 50 network requests, it searches the `STORES.PENDING_SYNC` table for the existing `record_id`. If found, it merely *overwrites* the payload with the newest geometry. When connectivity is restored, only **1** API call is executed.
