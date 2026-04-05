---
title: Map View (Enterprise GIS Space)
description: Exhaustive technical and user documentation for the Geova Map View component.
---

# Map View: Exhaustive Documentation

## 1. Executive Overview
The **Map View** (`MapView.js`) is the defining core of the Geova platform—the theater where all spatial data, user tracking, and AI insights converge. It delivers immense business value by acting as a high-performance vector rendering engine capable of rendering 10,000+ features concurrently without locking the main thread. 

Whether field teams are tracking **National Highway Networks** offline via GPS, analysts are merging complex **Global Deforestation** boundaries, or engineers are querying **Global Seismic Activity** epicenters via the AI Ghost Layer, the Map View guarantees military-grade stability, sub-second responsiveness, and completely seamless offline capabilities.

---

## 2. UI/UX Breakdown (Microscopic)

### Contextual Command Centers
- **Workspace Layer Pill (Top-Center):** A floating dropdown pill `map-layer-select-container`. It actively displays the chosen layer and a real-time count of features. It dynamically hides options based on what is active in the visibility pane.
- **Floating Status Toast (Bottom-Center):** Uses specific color tones (`muted`, `blue`, `indigo`, `emerald`) to guide user workflow during geoman drawing, measuring, and advanced editing operations.

### Floating Action Buttons (FABs)
Located strictly on the right viewport edge `end-3`:
- **Layer Panel Toggle (layers icon):** Opens the Visibility Drawer. Drops from the bottom-left of its button constraint.
- **GPS Record Tool (red manual_record):** Toggles active visual tracking. Throbs red when active.
- **Silent Track Tool (amber explore):** Throbs amber when active. Used for headless background tracking.
- **Measure Tool (emerald square_foot):** Activates Turf-powered vertex distance calculations.
- **Advanced Edit Tool (indigo auto_fix_high):** Opens the Split/Merge interface.

### The Ghost Layer Panel (Feature 8)
- **Ghost Layer Pill (Bottom-Left):** Appears conditionally when **Geova AI** replaces a preview visual with a new query. The previous result becomes a "Ghost"—rendered at 40% opacity with a dashed `#a78bfa` stroke to allow comparative temporal analysis.

---

## 3. User Guide

### Step 1: Manual Feature Collection (Active Data Entry)
Instead of importing large files, users can explicitly draw map geometry.
1. Select a layer via the Top-Center layer pill (e.g., "Global Seismic Activity" Point layer).
2. Tap the blue Geoman layout buttons (left edge) to drop a pin.
3. Automatically triggers the `feature-data-modal` injection to populate database schema attributes.

### Step 2: Live Tracking via GPS Pipelines
For massive pathing efforts like tracing **National Highway Networks**:
- **Active Record:** Click the Red Record button. Set your distance/time intervals (e.g., drop point every 50 meters or 10 seconds). You will see a live dashed red trail.
- **Silent Track:** Click the Amber Explore button. The trail will record utterly invisibly without cluttering the screen or demanding rendering cycles. When finished, you may choose to compile the trail into a single `MultiLineString`. 

### Step 3: Advanced Turfed-Editing
When managing contiguous large geometries (such as adjacent **Global Deforestation** clear-cut polygons):
1. Tap the Indigo **Advanced Edit** button.
2. Select **Merge**. The instruction banner pulses `indigo`.
3. Tap 2 or more overlapping deforestation polygons.
4. Click **EXECUTE`. Geova harnesses `Turf.js` to mathematically `turf.union` the geometric structures and merge their active metadata properties.

---

## 4. Technical Architecture (For Developers)

`MapView.js` contains the most intense state-management architectures in the Geova ecosystem, guarding against aggressive memory leaks and DOM desynchronization.

### Anti-Ghosting Lifecycle Architecture (`AbortController`)
Leaflet historically struggles inside Single Page Applications (SPAs). Geova implements `destroyMap()` heavily:
- **`_mapEventsAbort = new AbortController();`** Every time `attachMapEvents()` fires, the previous abort signal is killed. This guarantees all `document.addEventListener` global hooks (like dropdown closures) instantly unbind, preventing exponential click multiplication.
- **Module-Scope Layer Overlays:** Transient elements like the `_previewLayerGroup` and `_measureLayerGroup` are hoisted to the module scope so `destroyMap` can explicitly trap and `.removeLayer()` them before destroying the Leaflet parent Canvas.

### Smart GPS Background Gap Detection
When devices sleep, the OS aggressively kills GPS sensors. Geova relies on:
- **Screen Wake-Lock API:** Explicitly acquires `navigator.wakeLock.request('screen')` during active path recording.
- **Rubber-Band Prevention Logic:** When the App foregrounds, Geova evaluates the time `GAP_TIME_THRESHOLD_MS` (30s) and distance `GAP_DISTANCE_THRESHOLD_M` (50m) delta. If the device jumped significantly while asleep, Geova skips the current line segment and creates a new coordinate array, preserving true geospatial data structures without drawing a false straight traverse across buildings or oceans.

### Lightning Layer-Vis Mutation
Toggling Layer Visibility doesn't execute a database re-fetch.
- **Module Weak-Cache `leafletLayerMap`:** The DOM specifically intercepts eye-toggles, scans the `leafletLayerMap`, manually pulls the specific matching Canvas clusters out of the renderer (`mapInstance.removeLayer(l)`), and saves them into the `hiddenLayers` cache module map. 
- Fast toggling easily handles 10,000+ points synchronously at 60 FPS.

### Component Reintegration via ResizeObserver
To combat grey-screen Canvas detachments common in hidden SPA DOM manipulations, Geova leverages a `ResizeObserver` connected to `map-container`. It waits strictly for real `contentRect` width logic before firing `mapInstance.invalidateSize()`.
