---
title: Data & Sync View
description: Detailed technical and user documentation for the Geova Data Management and Local Sync component.
---

# Data & Sync View: Exhaustive Documentation

## 1. Executive Overview
The **Data & Sync View** (`DataView.js`) is the nerve center for data inspection, mass ingestion, and secure offline field collaboration in the Geova platform. It delivers absolute visibility into massive datasets—such as millions of **Global Seismic Activity** points or sprawling **Global Deforestation** polygons. 

The view empowers administrators to ingest heavy GeoPackage (GPKG) files, export compressed KMZ archives seamlessly, and most critically, offers a **Local Sync** platform. Local Sync securely transfers geometries from standalone field devices direct to a local Field Server (Host) via WiFi without ever touching the cloud or cell networks.

---

## 2. UI/UX Breakdown (Microscopic)

### Dynamic Data Projection Table
- **Reactive Pagination:** Utilizes an efficient DOM Virtualization loader. Instead of crashing the browser by rendering 10,000 table rows, it loads in strict `PAGE_SIZE=50` chunks with an `expand_more` native button, seamlessly expanding the data manifest.
- **Storage Tier Badging:** Every layer card presents a status pill indicating its storage destination—`CLOUD` (Blue) or `OFFLINE` (Emerald).
- **Auto-Geometry Fields (Green Text):** Dynamic properties generated natively by `Turf.js` during render. For example, a **National Highway Network** LineString automatically displays its length (formatted dynamically as `m` or `km`), and a Polygon computes `ha` (hectares) or `km2` with a `monospace` high-visibility green aesthetic.
- **Asset Rendering:** If a field contains an image Base64 or Blob (`data:image`), the table instantly renders a secure `50px` rounded thumbnail preview. PDF attachments mount a contextual `View PDF` button.

### Smart Import/Export Console
- **Premium GPKG Gatekeeper:** Exporting heavy SQLite/GPKG archives initiates a conditional check against `PremiumService`.
- **Smart Progress Overlay:** Both Imports and Exports utilize `createExportOverlay()`. It drops a frosted-glass `backdrop-blur-md` modal atop the interface featuring an exact phase progression (e.g., "Packaging Images...", "Compressing Archive..."), complete with dynamic progress bars and CSS keyframe spinners.

### Local Sync Hub (Field Radar)
- **Host Session UI:** When triggered, Geova exposes a local socket server, explicitly printing the device's internal IP address (e.g., `192.168.43.1`) and Port (`8080`) in bold monospace. A rhythmic pulsing status orb signals that the WebServer is listening.
- **Join Session UI:** Offers a secure dual-input panel where field workers punch in the Host IP and select exactly which data chunks to beam over the local airwaves.

---

## 3. User Guide

### Step 1: Bulk Importing Spatial Data
If assigned to import regional **National Highway Networks**:
1. Tap the Emerald **Upload File** button. 
2. Select your `GeoJSON`, `KMZ`, or `GPKG` file.
3. If no active layer exists, Geova automatically creates a matched-geometry layer and synthesizes an intelligent form schema based on the dataset's internal property keys.
4. Watch the `Progress Overlay`. To prevent browser lockups, Geova utilizes chunked processing (`2500` records per frame) while gracefully projecting the file down to `WGS84`.

### Step 2: Auto-Geometry Inspection
When reviewing **Global Deforestation** polygons:
1. Expand the target layer data card.
2. Locate the far-right `Geometry` and `Auto-Geometry` property columns.
3. Observe how Geova has mathematically processed the raw coordinates into precise human-readable metrics (e.g., `14.25 ha` or `125 km2`).

### Step 3: Operating an Offline Air-Gap Sync
1. **The Host:** In a remote staging camp without cell connectivity, the Supervisor taps **Host Session**. Geova presents `192.168.43.12`.
2. **The Field Worker:** Returns from collecting metrics, taps **Join & Send**, types `192.168.43.12` into their device, and hits **Send**. All local SQLite vectors are tunneled instantly.

---

## 4. Technical Architecture (For Developers)

The `DataView.js` implementation tackles three primary Enterprise architectural hurdles: Memory Limits, Synchronous Blocking, and Wasm (WebAssembly) SQLite extraction.

### DOM Chunking & Asynchronous Yielding
Handling 10,000+ points on a mobile DOM instantly OOMs (Out-of-Memory) the WebView.
- The system heavily relies on `requestAnimationFrame()` to defer rendering off the critical path, injecting a transient skeleton layout (`animate-pulse`) so route transitions hit exactly `0ms`.
- Features process in `BATCH_SIZE = 2500` inside a `for` loop. The engine explicitly commands `await new Promise(r => requestAnimationFrame(r))` after every chunk, purposefully yielding the main thread to allow the UI to repaint the Import Progress bar.

### WASM GeoPackage Extractor (`initSqlJs`)
Android WebViews natively strip `.gpkg` extensions during intent passing.
- **Magic Bytes Validation:** `detectFileType` executes an `ArrayBuffer` slice looking for `0x53 0x51 0x4C` ("SQLite format 3") to natively assert file compliance.
- **WKB Binary Unpacking:** Geova manually traverses SQLite BLOB columns, peeling off the `GeoPackageHeader` (8 bytes + envelope padding) and executes a manual byte-shift traversal to reverse-engineer `WKB` (Well-Known Binary) `LittleEndian` points back into explicit GeoJSON without a dedicated third-party library. 

### Centralized Auto-Geometry Memoization
Parsing area calculations across a 5,000 polygon dataset (`Turf.area`) blocks the thread. The pipeline mitigates this via `_dataViewCache.autoGeomValues`:
- Calculates `Turf.length()` or `Turf.area()` explicitly on the *first* render pass.
- Memoizes the explicit string (e.g., `"45 km2"`) onto the immutable reference ID. Subsequent DOM paginations recall `O(1)` pre-computed strings, preserving 60FPS scrolling in heavy data tables.
