---
title: Mapplex Documentation
description: Master Index and Platform Architecture Philosophy.
order: 1
---

# Mapplex Documentation

Mapplex is built to solve one fundamental problem: **Off-grid spatial data collection**.

Unlike traditional web applications that rely on constant internet connectivity to fetch datasets from a centralized PostgreSQL/PostGIS database, Mapplex operates on a *Local-First* methodology. The device itself is the primary source of truth.

## Platform Philosophy

Mapplex forces the browser into behaving like a native desktop application. 

1. **Storage First, Cloud Second**: Every geometry, every form entry, and every style configuration is immediately committed to an embedded local client database (either IndexedDB or SQLite WASM). 
2. **Synchronous Speed, Asynchronous Sync**: Because operations hit local storage first, rendering is instantaneous. A background Mutex-locked queue quietly negotiates with Supabase when cell connectivity is restored.
3. **No Blank Screens**: An aggressive Service Worker intercepts all static assets. Mapplex literally never shows a Chrome "No Internet" dinosaur; the UX always functions flawlessly.

## Master Index

### 1. Platform & Core Engine
Deep dive into the underlying systems that power Mapplex's speed.
- [Offline Sync & Storage Engine](./core-engine/offline-sync.md)
- [Authentication & Device Identity](./core-engine/auth.md)

### 2. User Interfaces & Workflows
Screen-by-screen architectural breakdowns of the entire platform.
- [Dashboard & Project Manager](./screens/dashboard/index.md)
- [Map Interface & Tracking](./screens/map-interface/index.md)
- [Layer Manager](./screens/layers-view.md)
- [Form Builder & Smart Logic](./screens/forms-view.md)
- [Data & Offline Local Sync](./screens/data-sync.md)
- [Admin Dashboard](./screens/admin-view.md)

### 3. Geova AI (Spatial Compute Engine)
The autonomous analysis pipeline.
- [Geova Spatial DAG Engine](./geova-ai/interface.md)
