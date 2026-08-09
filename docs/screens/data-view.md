---
title: Data & Sync View
description: Detailed technical and user documentation for the Geova Data Management and Local Sync component.
---

---
title: Data Table View
description: Inspect and manage feature data in a tabular interface.
---

# Data Table View

## Overview
The **Data Table** is used to inspect feature attributes, import files, review attachments, and monitor local or cloud sync status. Large datasets may be processed in batches, so the time required depends on the file and device.

## Action Steps

### 1. Bulk Import Spatial Data
To bring spatial data into the application:
1. Click the Emerald **Upload File** button.
2. Select your `GeoJSON`, `KMZ`, or `GPKG` file.
3. If no matching layer exists, Geova can create one and use the dataset's property keys to begin the form schema.
4. Watch the Progress Overlay while the file is processed in batches.

### 2. Inspect Auto-Geometry Metrics
Want to know the exact size of a polygon without running an external tool?
1. Expand any data layer in the view.
2. Locate the **Geometry** and **Auto-Geometry** columns.
3. Review the calculated values, such as area or length, when they are available for the feature.

### 3. Review Embedded Dashcam or PDF Attachments
1. If your field workers attached JPEGs or PDFs to a point, the table instantly renders a secure thumbnail preview.
2. Click the thumbnail or the **View PDF** button to preview field evidence natively.

## Pro-Tips
> **Tip:** Use **Load More** to review additional rows. Very large tables may take longer to render, especially on mobile devices.

> 💡 **Tip:** Notice the status pills on the rows? They indicate if your data is safely backed up to the `CLOUD` (Blue) or stranded `OFFLINE` (Emerald).

---

## Technical Architecture (For Developers)

The `DataView.js` implementation uses batching and memoization to keep table rendering responsive while data is loaded and calculated.

- **DOM Chunking & Asynchronous Yielding:** Features are rendered in batches and the main thread is given time between batches so larger imports do not block the interface for the entire operation.
- **WASM GeoPackage Extractor:** Android WebViews natively strip `.gpkg` extensions during intent passing. `detectFileType` executes an `ArrayBuffer` slice looking for `0x53 0x51 0x4C` (SQLite magic bytes). The system then peels off the `GeoPackageHeader` manually and reverse-engineers WKB binaries into GeoJSON natively.
- **Centralized Auto-Geometry Memoization:** Parsing area calculations across a 5,000 polygon dataset (`Turf.area`) blocks the thread. The pipeline calculates it exactly once and memoizes the string (`45 km2`) ensuring subsequent paginations recall the baseline `O(1)` pre-computed string.
