# Module 05: Data & Sync

> The Data & Sync module is your hub for exporting collected data, importing new datasets, managing reference zones, performing local P2P synchronization, and reviewing all features in tabular format.

---

## 1. Module Overview

The Data & Sync screen is divided into four sections:

1. **Export Data** — Download your project in multiple formats
2. **Import Features** — Upload geographic files or spreadsheets into your project
3. **Spatial Reference Zones** — Upload background polygons for spatial auto-fill
4. **Field Gathering (Local Sync)** — Peer-to-peer data synchronization between devices
5. **Collected Features Table** — Browse and inspect all data in tabular format

---

## 2. Exporting Data

### Selecting What to Export

Use the **export layer dropdown** at the top to choose:
- **Entire Project** — Exports all features across all layers
- **Specific Layer** — Exports only the features from one layer (shows feature count)

### Export Formats

| Format | Button | Description |
|--------|--------|-------------|
| **JSON (GeoJSON)** | `JSON` | Standard GeoJSON format. Universally compatible with QGIS, ArcGIS, Mapbox, and web applications |
| **KMZ** | `KMZ` | Compressed KML for Google Earth and Google Maps. Includes styling and descriptions |
| **GPKG (GeoPackage)** | `GPKG` | SQLite-based OGC standard. Ideal for desktop GIS software and large datasets |
| **CSV** | `CSV` | Tabular comma-separated values. Opens in Excel, Google Sheets, and databases. Includes coordinates as columns |

Tap the desired format button and the file downloads immediately.

> **Example:** A supervisor needs to submit weekly inspection progress to the city planning office. She selects the "Hydrant Inspections" layer → taps **CSV** → opens the file in Excel → emails it as an attachment. Total time: 30 seconds.

---

## 3. Importing Features

### Geographic Vector Files

1. Tap the **GeoJSON / KMZ / GPKG** import button.
2. Select a file from your device.
3. The system auto-detects the file type using **magic byte analysis** — no need for correct file extensions:
   - **ZIP header** (PK) → treated as KMZ
   - **SQLite header** → treated as GeoPackage
   - **XML header** (`<`) → treated as KML
   - **Otherwise** → treated as GeoJSON
4. Features are parsed, converted to the internal format, and added to the currently selected layer.
5. A progress indicator shows import status for large files.

For large GeoPackage files (50MB+), a warning appears before processing.

### Spreadsheet Import (CSV / Excel)

1. Tap the **CSV / Excel** import button.
2. Select a `.csv`, `.xlsx`, or `.xls` file.
3. The **Spreadsheet Import Wizard** launches — a three-step process:

#### Step 1: Column Mapping
The wizard scans your columns and auto-detects which contain **latitude** and **longitude** values. You can override the mapping manually.

#### Step 2: CRS Verification
The system detects the Coordinate Reference System:
- **WGS84** (EPSG:4326) — Standard GPS coordinates
- **UTM** — Universal Transverse Mercator projections
- **Web Mercator** (EPSG:3857) — Used by web maps

Verify or manually select the correct CRS.

#### Step 3: Import Preview
A preview shows the first few rows mapped to geographic points on a mini-map. Confirm to import, or go back to adjust mappings.

---

## 4. Spatial Reference Zones

Reference zones are background polygon layers used by the **Spatial Auto-Fill** feature in Forms.

### Uploading Reference Data

1. In the **Spatial Reference Zones** section, tap **Upload Reference**.
2. Select a KMZ, KML, or GeoJSON file containing polygon zones (e.g., zoning districts, soil types, administrative boundaries).
3. You'll be prompted to name the reference layer.
4. The file is parsed and stored locally. Reference polygons appear on the map with an orange theme.

### Managing Reference Layers

Uploaded reference layers appear as tagged chips showing the source layer name. Each chip has a **🗑️ Delete** button to remove the reference layer.

> **How Auto-Fill Works:** When you draw a point inside a reference polygon, form fields configured for Spatial Auto-Fill extract and auto-populate the matching attribute from the reference zone. See [Module 04: Forms](./04-forms-view.md) for configuration details.

---

## 5. Field Gathering (Local P2P Sync)

Synchronize data between devices on the same Wi-Fi network — **no internet required**. This is designed for field teams working in remote areas.

### Hosting a Session

1. Tap **Host Session**.
2. The sync modal opens showing:
   - **Device IP Address** — Displayed in large monospaced font for easy reading across the room
   - **Port** — Default: 8080
   - **Status** — "Starting server…" → "Listening for connections"
3. Share the IP address with team members.
4. As team members connect and send data, the **host log** shows incoming feature counts.
5. Tap **Stop Server** to end the session.

### Joining & Sending Data

1. Tap **Join & Send**.
2. Enter the **Host IP Address** (e.g., `192.168.43.1`).
3. Enter the **Port** (default: 8080).
4. Select **Which Layers to Send** — "All Layers" or a specific layer.
5. Tap **Send Features to Host**.
6. The status panel shows transfer progress.

> **Example:** A field team of 5 workers collects hydrant data independently throughout the day. At the end of the shift, the supervisor opens "Host Session" on their tablet. Each worker connects via Wi-Fi hotspot and taps "Join & Send" — all data flows into the supervisor's device in under a minute. No cell signal needed.

---

## 6. The Collected Features Table

Below the import/export controls, all collected features are displayed as **expandable layer cards**:

### Layer Card

Each card shows:
- **Layer name** with a geometry icon (📍 Point, 📏 Line, ⬠ Polygon)
- **Feature count** (e.g., "347 Features Collected")
- **Storage badge** — ☁️ `CLOUD` or 📱 `OFFLINE`
- **Expand arrow** — Tap to reveal the data table

### Data Table

When expanded, a **scrollable, paginated table** appears with:
- **Row numbers** (sticky left column)
- **Geometry type** column
- **Added Date** column
- **Form field columns** — All attributes from the form schema appear as columns
- **Auto-Geometry column** — Shows computed values (coordinates, length, area) in a green monospace font
- **Photo/PDF columns** — Inline thumbnail previews and "View PDF" buttons

### Pagination

The table loads **50 rows at a time**. For large datasets, a **"Load More (+50)"** button appears at the bottom. This DOM virtualization approach keeps the browser responsive even with thousands of features.

### Image & File Display

| Data Type | How It Displays |
|-----------|----------------|
| **Photo / Image** | Clickable thumbnail that opens full-size in a new tab |
| **PDF** | Red "View PDF" button that opens the document |
| **Attachment** | Blue "View File" button for generic file download |

---

## 7. Role-Based Access

| Role | Export | Import Features | Import Reference | Host/Join Sync |
|------|--------|----------------|-----------------|----------------|
| **Owner** | ✅ | ✅ | ✅ | ✅ |
| **Admin** | ✅ | ✅ | ✅ | ✅ |
| **Editor** | ✅ | ✅ | ✅ | ✅ |
| **Collector** | ✅ | ✅ | ❌ | ✅ |
| **Viewer** | ✅ | ❌ | ❌ | ✅ |

> **Note:** Viewers can export and participate in sync sessions but cannot import new features or reference layers.

---

> **Next:** Proceed to [Module 06: Geova AI Chat](./06-geova-ai-chat.md) to ask spatial questions and generate automated analysis reports.
