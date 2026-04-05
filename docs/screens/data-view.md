---
title: Data & Sync View
description: Detailed technical and user documentation for the Geova Data Management and Local Sync component.
---

---
title: Data Table View
description: Inspect and manage massive geospatial arrays directly via an optimized tabular interface.
---

# Data Table View

## Overview
The **Data Table** is the nerve center for data inspection and mass ingestion. It allows you to view millions of complex polygons (like global deforestation areas) or thousands of points without ever crashing your browser. This screen is your primary tool for examining the raw data properties behind your geometric shapes.

## Action Steps

### 1. Bulk Import Spatial Data
Have a massive dataset you need to bring into the application?
1. Click the Emerald **Upload File** button.
2. Select your `GeoJSON`, `KMZ`, or `GPKG` file.
3. If no matching layer exists, Geova automatically creates one and synthesizes an intelligent form schema based on the dataset's internal property keys!
4. Watch the Progress Overlay—Geova processes data in chunks so your browser never locks up.

### 2. Inspect Auto-Geometry Metrics
Want to know the exact size of a polygon without running an external tool?
1. Expand any data layer in the view.
2. Locate the far-right **Geometry** and **Auto-Geometry** columns.
3. Observe the green numbers—Geova mathematically processes raw coordinates into precise human-readable metrics instantly (e.g., `14.25 ha` for areas, or `45 km` for distances).

### 3. Review Embedded Dashcam or PDF Attachments
1. If your field workers attached JPEGs or PDFs to a point, the table instantly renders a secure thumbnail preview.
2. Click the thumbnail or the **View PDF** button to preview field evidence natively.

## Pro-Tips
> 💡 **Tip:** The Data View seamlessly handles massive tables. You can click **Load More** as many times as you want without crashing your mobile device, thanks to underlying DOM Virtualization.

> 💡 **Tip:** Notice the status pills on the rows? They indicate if your data is safely backed up to the `CLOUD` (Blue) or stranded `OFFLINE` (Emerald).

---

## Technical Architecture (For Developers)

The `DataView.js` implementation tackles primary Enterprise architectural hurdles: Memory Limits and Synchronous Blocking.

- **DOM Chunking & Asynchronous Yielding:** Handling 10,000+ points on a mobile DOM instantly OOMs (Out-of-Memory) the WebView. The system defers rendering off the critical path, processing features in `BATCH_SIZE = 2500` inside a `for` loop, yielding to the main thread via `await new Promise(r => requestAnimationFrame(r))` to maintain progress bar fluidity.
- **WASM GeoPackage Extractor:** Android WebViews natively strip `.gpkg` extensions during intent passing. `detectFileType` executes an `ArrayBuffer` slice looking for `0x53 0x51 0x4C` (SQLite magic bytes). The system then peels off the `GeoPackageHeader` manually and reverse-engineers WKB binaries into GeoJSON natively.
- **Centralized Auto-Geometry Memoization:** Parsing area calculations across a 5,000 polygon dataset (`Turf.area`) blocks the thread. The pipeline calculates it exactly once and memoizes the string (`45 km2`) ensuring subsequent paginations recall the baseline `O(1)` pre-computed string.
