---
title: Data & Sync
description: Import and export GeoJSON, KMZ, GeoPackage, File Geodatabase, CSV, and Excel data, including relationships and attachments.
---

# Module 05: Data & Sync

> The Data & Sync module is where you export project data, import datasets, manage reference zones, run local peer-to-peer sync, and review collected features in table form.

---

## 1. Module Overview

The Data & Sync screen is divided into five sections:

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
| **GPKG (GeoPackage)** | `GPKG` | SQLite-based OGC standard. Ideal for desktop GIS software and large datasets. Requires an entitlement that includes GeoPackage export |
| **File Geodatabase (GDB)** | `GDB` | Geodatabase package for exchanging feature layers, related records, and supported attachments |
| **CSV** | `CSV` | Tabular comma-separated values. Opens in Excel, Google Sheets, and databases. Includes coordinates as columns |

Tap the desired format button and the file downloads immediately.

Use **GDB** when the handoff needs more than geometry and attributes. A GDB export can include the supported relationships between feature layers and related records, together with supported attachments.

> **Example:** A supervisor needs to send weekly hydrant inspection progress to a client. She selects the "Hydrant Inspections" layer, exports CSV, checks the file in Excel, and attaches it to the weekly report.

---

## 3. Importing Features

### Geographic Vector Files

1. Tap the **GeoJSON / KMZ / GPKG / GDB** import button.
2. Select a file from your device.
3. The system checks the file signature to detect the format, even if the file extension is incorrect:
   - **ZIP header** (PK) → treated as KMZ
   - **SQLite header** → treated as GeoPackage
   - **XML header** (`<`) → treated as KML
   - **Otherwise** → treated as GeoJSON
4. Features are parsed, converted to the internal format, and added to the currently selected layer.
5. A progress indicator shows import status for large files.

For large GeoPackage files (50MB+), a warning appears before processing.

### File Geodatabase Import (GDB)

Use GDB import when the source package contains feature classes together with related tables or attachments.

1. Select the **GDB** import option.
2. Choose the File Geodatabase package from your device.
3. Review the available layers and related records in the import preview.
4. Confirm the relationship fields and select the target project or layers.
5. Start the import and wait for the progress indicator to finish.

Mapplex preserves supported relationships and attachments during the import. If the source relationship key is missing or inconsistent, the records may import without a link, so review the preview and the resulting tables before field use.

### Spreadsheet Import (CSV / Excel)

Spreadsheet import creates point features from coordinate columns. It is available when your workspace includes the spreadsheet import entitlement.

1. Select a **Point** layer as the target layer.
2. Tap the **CSV / Excel** import button.
3. Select a `.csv`, `.xlsx`, or `.xls` file.
4. The **Spreadsheet Import Wizard** launches — a three-step process:

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

Reference zones are background polygon layers used by **Spatial Auto-Fill** in Forms.

Reference zone management requires a workspace entitlement that includes reference imports and a project role with data-management access.

### Uploading Reference Data

1. In the **Spatial Reference Zones** section, tap **Upload Reference**.
2. Select a KMZ, KML, or GeoJSON file containing polygon zones (e.g., zoning districts, soil types, administrative boundaries).
3. You'll be prompted to name the reference layer.
4. The file is parsed and stored locally. Reference polygons appear on the map with an orange theme.

### Managing Reference Layers

Uploaded reference layers appear as tagged chips showing the source layer name. Each chip has a **Delete** button to remove the reference layer.

> **How Auto-Fill Works:** When you draw a feature, Mapplex checks the configured reference polygon layer and copies the selected attribute from the matching zone into the form. Points are matched by their location; lines and polygons use their centroid for the lookup. See [Module 04: Forms](./04-forms-view.md) for configuration details.

---

## 5. Field Gathering (Local P2P Sync)

Synchronize data between devices on the same Wi-Fi network. This is useful when field teams need to exchange collected records before cloud connectivity is available.

Local P2P sync depends on native local-network support and device permissions. It works best on supported mobile builds or controlled field networks where both devices are on the same Wi-Fi or hotspot.

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

> **Example:** Five inspectors collect hydrant records throughout the day. At the end of the shift, the supervisor hosts a local sync session from a tablet. Each inspector joins the hotspot and sends their records to the host device for review.

---

## 6. The Collected Features Table

Below the import/export controls, all collected features are displayed as **expandable layer cards**:

### Layer Card

Each card shows:
- **Layer name** with a geometry type indicator
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

The table loads **50 rows at a time**. For large datasets, a **"Load More (+50)"** button appears at the bottom to keep the browser responsive.

### Image & File Display

| Data Type | How It Displays |
|-----------|----------------|
| **Photo / Image** | Clickable thumbnail that opens full-size in a new tab |
| **PDF** | Red "View PDF" button that opens the document |
| **Attachment** | Blue "View File" button for generic file download |

### Related Records and Attachments

When a project contains related records, open the parent feature first and review the linked records from its relationship panel. This is useful for workflows such as a streetlight with several inspection visits or a work order linked to one municipal asset.

Attachments remain associated with the record they belong to. Use the photo, PDF, or file controls to review evidence before exporting. When the project is exchanged as GDB, supported relationships and attachments are included in the handoff.

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

> **Note:** Collectors can import records into an existing target layer. Creating new project data structures, such as reference layers, CAD layers, or SHP layers, requires Owner, Admin, or Editor access.

---

> **Next:** Proceed to [Module 06: Geova AI Chat](./06-geova-ai-chat.md) to ask spatial questions and generate automated analysis reports.
