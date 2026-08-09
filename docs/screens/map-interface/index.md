---
title: Map View
description: Use the map to draw, track, measure, and review spatial data.
---

---
title: Map Interface
description: The primary interactive GIS canvas for drawing, tracking, and AI analysis.
---

# Map Interface

## Overview
The **Map Interface** is the main workspace for drawing, tracking, measuring, and reviewing spatial data. It supports local collection and lets you compare temporary analysis results with the project layers on the map.

## Action Steps

### 1. Manual Feature Collection (Active Data Entry)
Instead of importing entire files in the Dashboard, you can draw geometry directly:
1. Select a layer via the top-center **Layer Pill** (for example, "Water Utility Assets").
2. Tap one of the blue **Draw** buttons on the left edge to drop a pin or trace a polygon.
3. Once placed, Geova immediately opens the layer's associated form so you can fill out the exact attributes.

### 2. Live Tracking via GPS pipelines
Are you driving or walking to map out long trails or roads?
1. Click the Red **Record button** (FAB on the right).
2. Set your distance or time intervals (e.g., drop a point every 10 meters).
3. Begin walking! Geova will chart a live dashed red trail behind you.
4. If you want to track silently without draining your battery drawing lines on the screen, tap the Amber **Silent Track** button instead.

### 3. Advanced Geometry Merging
Need to combine two adjacent service areas?
1. Tap the Indigo **Advanced Edit** button on the right.
2. Select **Merge**.
3. Tap 2 or more overlapping shape polygons.
4. Click **Execute**. Geova combines the selected polygons into one result.

## Pro-Tips
> 💡 **Tip:** Notice the **Ghost Layer** below your map? When Geova AI generates a new map visualization, the previous iteration remains as a "Ghost" at 40% opacity with a dashed purple line. Use this to easily compare temporal changes!

> 💡 **Tip:** Tap the emerald **Measure Tool** to instantly calculate perfect square-footage or linear distance without having to save any geometry to your database.

---

## Technical Architecture (For Developers)

`MapView.js` coordinates map state, event cleanup, GPS tracking, and layer visibility.

- **Event Lifecycle (`AbortController`):** Map event listeners are associated with an abort signal. When the view is reattached, the previous listeners are removed before new ones are registered.
- **GPS Background Gap Detection:** When the app returns to the foreground, Geova checks the elapsed time and distance since the last position. If the gap is too large, it skips the segment instead of drawing an unreliable straight line.
- **Layer Visibility Cache:** Toggling visibility uses the existing layer references rather than reloading the data from storage.
