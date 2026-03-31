---
title: Dashboard JavaScript Mechanics
description: Technical deep dive into Mapplex's 0ms render SWR architecture, vanilla JS hydration, and storage quota logic.
order: 1
---

# Dashboard Mechanics (`DashboardView.js`)

The `DashboardView` is the landing page of the entire Mapplex Single-Page Application (SPA). Unlike traditional React/Vue applications that rely on Virtual DOM diffing, Mapplex uses a highly optimized **Vanilla JS String-to-DOM** rendering lifecycle combined with a custom SWR (Stale-While-Revalidate) caching mechanism to achieve a guaranteed 0ms initial paint.

## 1. SWR (Stale-While-Revalidate) Implementation

When `renderDashboardView()` is invoked by the router, it immediately builds an HTML string using synchronous cache lookups and paints to the screen before the browser's next frame.

```javascript
// 0ms Render Phase
const pendingSyncCount = parseInt(localStorage.getItem('swr_sync_count') || '0', 10);
const storageUsedMb = parseFloat(localStorage.getItem('swr_storage_used_mb') || '0');

// Off-thread asynchronous hydration
setTimeout(() => streamHeavyDashboardData(isGuest, projects), 0);
```

While the user is looking at the cached dashboard, `streamHeavyDashboardData()` wakes up in the background and pings Supabase and the local IndexedDB. If an discrepancy is found:
1. It updates the `localStorage` SWR keys.
2. It silently recursively calls `renderDashboardView()` again.
3. It uses `innerHTML` to overwrite the current DOM, and strictly calls `attachDashboardEvents()` to re-bind the new DOM nodes without flickering.

## 2. Storage Quota API 

A common approach in PWAs is to use the native `navigator.storage.estimate()` API. However, Mapplex **does not use this native API** for the dashboard UI storage bar. 

### Why avoid `navigator.storage.estimate()`?
The native API calculates total browser allocation (which varies wildly between Safari on iOS and Chrome on Android) and includes cached service worker assets, making it useless for reporting actual *spatial user data*.

### The Mapplex Hardware Abstraction
Instead, the Storage Bar relies strictly on authoritative backend data:
```javascript
// streamHeavyDashboardData() background fetch
const { data: prof } = await supabase.from('profiles').select('storage_used_bytes, storage_limit_mb').eq('id', session.user.id).single();

const limitMb = isPro ? (prof?.storage_limit_mb || 50) : 5;
const usedMb = (((prof?.storage_used_bytes) ?? 0) / (1024 * 1024)).toFixed(4);
```

For **Local-Only projects**, Mapplex calculates size purely mathematically via `ProjectManager.getProjectSize(id)`, assigning static coefficients to geometries: `(numFeatures * 0.5KB) + (numLayers * 2KB)`.

## 3. Network State Reactivity

Mapplex strictly guards against executing hardware-heavy migrations or cloud database requests if the device loses connection.

When a user clicks "Upload to Cloud" inside `DashboardView.js`, or attempts to create a "Hosted" project, the javascript performs a hard check against the browser's hardware indicator:
```javascript
if (!navigator.onLine) {
    showToast("Cloud migrations require an internet connection.", "warning", 4000);
    return; // Hard stop
}
```
*Note: Due to the aggressive Service Worker cache, listening for standard `window.addEventListener('online')` is handled globally at the `db.js` initialization level for the Sync Engine, while the UI relies on point-in-time checks of `navigator.onLine` to lock or disable form buttons dynamically during interaction.*

## 4. Click Hydration & Routing Memory

There is a distinct javascript separation between "Viewing" a project and "Activating" a project for mapping.

### A. Clicking the Project Card (Analytics Hydration)
When the user clicks the physical `.project-card` body, it **does not route to the map**. Instead, the script extracts `data-id`, parses the IndexedDB to calculate layer counts, and hydrates the `document.querySelector('#project-detail-modal')`. It then invokes the native `pdModal.showModal()` to display the Spatial SQL engine popup.

### B. Clicking 'Activate' (Routing Context)
When the `.activate-btn` is clicked, the routing lifecycle begins:
```javascript
ProjectManager.setActiveProject(e.currentTarget.dataset.id);
document.dispatchEvent(new CustomEvent('navigate', { detail: 'dashboard' }));
```
1. `ProjectManager.setActiveProject` caches the ID into `localStorage('activeProjectId')`.
2. It asynchronously pre-warms the internal `_roleCache` map (checking if the user is a `viewer`, `editor`, or `admin`).
3. It dispatches a global `project-changed` CustomEvent, prompting the navigation router to reset.

## 5. Vanilla DOM Manipulation

Because Mapplex does not use React, it avoids heavy Virtual DOM memory footprints. When a project is deleted, the dashboard avoids re-rendering the entire project list:

```javascript
// Stuck Spinner Fix & DOM GC
const card = btn.closest('.project-card');
if (card) {
    // 1. Instantly swap delete icon to an animate-spin refresh icon
    // 2. Add pointer-events-none to prevent double clicks
    card.classList.add('opacity-50', 'pointer-events-none');
}

await ProjectManager.deleteProject(id);

// 3. Immediately destroy the DOM node from the local branch to Garbage Collect
if (card) card.remove();
```
This precise, surgical DOM removal ensures the UI responds in `<16ms` (1 visual frame), even before the IndexedDB confirms the complex cascading deletion of child geometries and forms.
