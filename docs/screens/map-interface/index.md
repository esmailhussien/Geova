---
title: Map Interface
description: Full technical documentation of the Leaflet-based main map view.
order: 2
---

# Map Interface (`MapView.js`)

The Map Interface is the primary spatial collection engine in Mapplex. It wraps Leaflet and Geoman (`@geoman-io/leaflet-geoman-free`) in a performance-tuned React-like architecture (using vanilla JS Event Listeners). 

![Map View Placeholder](https://via.placeholder.com/800x400.png?text=Map+View+Placeholder)

## Core Tools & Floating Action Buttons (FABs)

The map implements multiple Floating Action Buttons heavily inspired by modern mobile mapping apps.

### 1. GPS Path Recorder

The `fiber_manual_record` FAB allows field workers to record physical GPS tracks. 
- It tracks the device's exact location, automatically connecting dots into a `LineString`.
- **Background Support**: Because mobile WebViews freeze DOM timers in the background, `visibilitychange` listeners catch the app re-entering the foreground, instantly forcing a `navigator.wakeLock.request('screen')` and recalibrating the GPS watch.
- **Gap Detection**: If the device wakes up 30 seconds later and 50 meters away (a gap from the app sleeping), it *breaks* the line segment to prevent false straight lines from shooting across the map, instead starting a new `_recordCoordinates` segment.

### 2. Silent Track

The `explore` (amber) FAB enables **Silent Tracking**. This is an advanced workflow where the GPS records invisibly in the background while the user focuses on drawing polygons or forms.
- Once stopped, the entire session is compiled into a single Layer automatically.
- Survives app closes/crashes via `localStorage.setItem('_silentTrack')` persistence.

### 3. Advanced Edit (Modify Tools)

The `auto_fix_high` FAB opens a contextual panel that allows complex topological edits without a server:
- **Split**: Cut polygons or lines via `turf.lineSplit`.
- **Merge**: Union overlapping polygons or join matching linestrings into MultiGeometries via `turf.union`.

## Geoman Integration

Mapplex uses Geoman for drawing primitives (Points, Lines, Polygons). 
When a user clicks "Finish" on a Geoman polygon, the map intercepts `pm:create`.
It immediately strips the volatile Leaflet element, parses it into GeoJSON, injects it into the active layer's memory cache, and spawns the `feature-data-modal` popup so the user can fill out the form for the geometry they just drew.

## Memory Leak Prevention

When the `MapView` is unmounted (e.g., navigating back to the Dashboard):
1. `destroyMap()` fires.
2. The exact map bounds/zoom are captured to `geova_map_state_{projectId}`.
3. Over 20+ global event listeners and Geolocation Watches (`_mapplexGpsIndicatorWatchId`) are cleared to prevent infinite zombie loops.
