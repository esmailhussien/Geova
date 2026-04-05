---
title: Map View (Enterprise GIS Space)
description: Exhaustive technical and user documentation for the Geova Map View component.
---

---
title: Map Interface
description: The primary interactive GIS canvas for drawing, tracking, and AI analysis.
---

# Map Interface

## Overview
The **Map Interface** is the central theater of the Geova platform. This isn't just a basic map—it is a high-performance vector engine capable of smoothly rendering 10,000+ features concurrently without freezing your device. Whether you are tracking Highway Networks offline via GPS or querying Global Deforestation lines using the AI Ghost Layer, this is where your data comes to life.

## Action Steps

### 1. Manual Feature Collection (Active Data Entry)
Instead of importing entire files in the Dashboard, you can draw geometry directly:
1. Select a layer via the Top-Center **Layer Pill** (e.g., "Global Seismic Activity").
2. Tap one of the blue **Draw** buttons on the left edge to drop a pin or trace a polygon.
3. Once placed, Geova immediately opens the layer's associated form so you can fill out the exact attributes.

### 2. Live Tracking via GPS pipelines
Are you driving or walking to map out long trails or roads?
1. Click the Red **Record button** (FAB on the right).
2. Set your distance or time intervals (e.g., drop a point every 10 meters).
3. Begin walking! Geova will chart a live dashed red trail behind you.
4. If you want to track silently without draining your battery drawing lines on the screen, tap the Amber **Silent Track** button instead.

### 3. Advanced Geometry Merging
Need to combine two adjacent deforestation zones?
1. Tap the Indigo **Advanced Edit** button on the right.
2. Select **Merge**.
3. Tap 2 or more overlapping shape polygons.
4. Click **EXECUTE**. Geova will mathematically stitch them together into one unified mega-polygon.

## Pro-Tips
> 💡 **Tip:** Notice the **Ghost Layer** below your map? When Geova AI generates a new map visualization, the previous iteration remains as a "Ghost" at 40% opacity with a dashed purple line. Use this to easily compare temporal changes!

> 💡 **Tip:** Tap the emerald **Measure Tool** to instantly calculate perfect square-footage or linear distance without having to save any geometry to your database.

---

## Technical Architecture (For Developers)

`MapView.js` contains intense state-management architectures guarding against memory leaks and DOM desync.

- **Anti-Ghosting Lifecycle Architecture (`AbortController`):** Leaflet generally struggles inside SPAs. Geova implements `_mapEventsAbort = new AbortController();`. Every time `attachMapEvents()` fires, the previous abort signal is killed, guaranteeing all hooks magically unbind preventing exponential memory duplication.
- **Smart GPS Background Gap Detection:** Mobile OS's aggressively kill GPS sensors. When the App comes back to the foreground, Geova evaluates the time (`GAP_TIME_THRESHOLD_MS`) and distance (`GAP_DISTANCE_THRESHOLD_M`). If the device "jumped" significantly (e.g., you drove through a tunnel out of app), Geova skips the segment, preserving true geospatial context instead of incorrectly drawing a straight line across mountains.
- **Lightning Layer-Vis Mutation:** Toggling visibility doesn't trigger database requests. A custom Weak-Cache called `leafletLayerMap` traps eye-toggles, explicitly running `mapInstance.removeLayer(l)`, caching it to RAM. It easily cycles 10,000+ points synchronously at 60 FPS.
