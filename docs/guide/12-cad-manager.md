---
title: CAD Manager (DXF Import & Export)
description: Import and export DXF data in Mapplex with CRS suggestions, UTM handling, and role-based access.
---

# Module 12: CAD Manager (DXF Import & Export)

> Use CAD Manager to import DXF drawings into a Mapplex project or export collected features as DXF files for engineering and drafting teams. Coordinate system selection is important: review the source CRS before importing and the target CRS before exporting.

---

## 1. Opening the CAD Manager

1. Navigate to the **Data & Sync** tab.
2. Tap the **CAD Manager** button (amber gradient with DXF badge).
3. The CAD Manager modal opens with two tabs: **Import DXF** and **Export DXF**.

> **Subscription:** CAD Manager is a **Pro** feature. Free-tier users see a lock icon on the button — tapping it opens the upgrade screen.

---

## 2. Importing DXF Files

### Step 1: Select the Source Coordinate System

Before loading a file, the CRS picker shows a single placeholder card: *"Select a DXF file to detect CRS..."*

After you load a DXF file (Step 2), the picker populates suggestions based on two sources:

| Source | What It Provides |
|--------|-----------------|
| **Coordinate Fingerprinting** | Analyzes sample entities in your DXF to classify coordinates as WGS84, UTM, Web Mercator, local grid, or projected |
| **Map Position** | Uses your last known map center (current session or saved from a previous session) to infer the nearest UTM zone |

The CRS picker organizes options into groups:

| Group | Icon | Description |
|-------|------|-------------|
| 🎯 **GPS Recommended** | `my_location` | Best match based on your map position — marked with a "Best" badge |
| 📡 **Auto-Detected** | `auto_fix_high` | CRS inferred from coordinate patterns in the DXF |
| 📍 **Nearby UTM Zones** | `near_me` | Adjacent UTM zones in case the recommended zone is off by one |
| 🌐 **Common** | `public` | Web Mercator (EPSG:3857) and other widely-used projections |
| ✏️ **Custom** | `edit` | Enter a custom proj4 string for proprietary or legacy coordinate systems |

Select a CRS card by tapping it. The selected card highlights in amber.

> **Tip:** If no GPS position is available, a hint appears: *"Open the Map tab first so Mapplex can suggest the correct UTM zone based on your location."* Open the Map tab near the project area before importing so zone suggestions are more useful.

### Step 2: Choose a DXF File

1. Tap the **Choose DXF File** button.
2. Select a `.dxf` file from your device.
3. The parser reads the file and displays:
   - **CRS detection hint** — e.g., *"📐 Coordinates look like UTM (Easting/Northing in meters). Select the correct UTM zone above."*
   - **Projected coordinates badge** — Shows easting/northing ranges when non-WGS84 coordinates are detected
   - **Layer preview table** — Lists every CAD layer with its entity types (LINE, CIRCLE, LWPOLYLINE, etc.) and entity count

### Step 3: Import

1. Review the preview table. The import button shows the exact number of convertible entities.
2. Tap **Import Convertible CAD Entities (N)**.
3. A **progress bar** appears showing import status:
   - Checking permissions...
   - Converting DXF to GeoJSON...
   - Importing layer 1/3 — "Roads LineString" — 247 features
   - Saving features...
   - Generating form fields...
   - Done! — 892 features imported

### Cancelling an Import

If a large file is taking too long, tap the **Cancel** button next to the progress bar. The import stops at the next checkpoint — any layers already fully saved remain in your project.

### What Happens After Import

- Each CAD layer becomes a separate Mapplex layer, **split by geometry type** (e.g., "Roads LineString", "Buildings Polygon")
- Form fields are auto-generated from the imported attributes
- The map view is automatically refreshed to show the new data
- You are navigated back to the Data tab to see the new layers

---

## 3. Exporting as DXF

### Selecting What to Export

1. Switch to the **Export DXF** tab.
2. Choose a scope from the dropdown:
   - **Entire Project** — All features from all layers
   - **Specific Layer** — Only features from one layer

### Generating the File

1. Select the target coordinate system for the exported DXF.
2. Tap **Export as DXF**.
3. The system converts your GeoJSON features to DXF format:
   - Points → DXF POINT entities
   - Lines → DXF POLYLINE entities
   - Polygons → DXF closed POLYLINE entities
   - Multi-geometries are expanded into individual entities
4. The `.dxf` file downloads automatically, named with the export date, for example `mapplex_export_YYYY-MM-DD.dxf`.

### Export Coordinate Systems

CAD Manager can export DXF coordinates in several target CRS options:

| Option | When to Use |
|--------|-------------|
| **WGS84 (EPSG:4326)** | GPS longitude/latitude workflows or GIS systems that expect decimal degrees |
| **Qatar National / Qatar 1974 grids** | Qatar-based engineering or municipal workflows that require these projected systems |
| **GPS-derived UTM** | Field projects where the app can infer the likely UTM zone from the current map position |
| **Custom proj4** | Projects using a local grid, legacy survey system, or organization-specific projection |

Confirm the receiving CAD team's expected CRS before sharing the export.

### Compatibility

The exported DXF file is designed for common CAD/GIS tools that support DXF, including:
- AutoCAD
- Civil 3D
- BricsCAD
- QGIS
- MicroStation
- Any software supporting DXF R12/R14

> **Note:** DXF files do not always carry enough CRS metadata for downstream software to infer the coordinate system. Include the selected CRS in your handoff notes when sending the file to a CAD or survey team.

---

## 4. Supported DXF Entities

### Import (DXF → GeoJSON)

| DXF Entity | Converts To | Notes |
|-----------|-------------|-------|
| **POINT** | Point | Direct coordinate mapping |
| **LINE** | LineString | 2-vertex line |
| **LWPOLYLINE** | LineString or Polygon | Closed polylines become Polygons |
| **POLYLINE** | LineString or Polygon | Handles 2D vertex-based polylines |
| **CIRCLE** | Polygon | Approximated with 64 segments |
| **ARC** | LineString | Approximated with segments |
| **ELLIPSE** | Polygon | Approximated with segments |
| **SPLINE** | LineString | Uses control/fit points |
| **SOLID** | Polygon | 3/4-vertex filled regions |
| **3DFACE** | Polygon | 3D triangular/quad faces |
| **INSERT** | — | Block references (not yet expanded) |

### Export (GeoJSON → DXF)

| GeoJSON Type | DXF Entity | Notes |
|-------------|-----------|-------|
| **Point** | POINT | |
| **MultiPoint** | Multiple POINTs | |
| **LineString** | POLYLINE | |
| **MultiLineString** | Multiple POLYLINEs | |
| **Polygon** | Closed POLYLINE | Outer ring only |
| **MultiPolygon** | Multiple closed POLYLINEs | |

---

## 5. Understanding Coordinate Systems

Most CAD drawings use **local or projected coordinates** rather than GPS coordinates. Here's how to identify and handle each type:

| Coordinate Type | Typical Values | How to Identify | What to Select |
|----------------|---------------|-----------------|----------------|
| **WGS84 (GPS)** | Lng: -180 to 180, Lat: -90 to 90 | Small decimal values | "Do not reproject" |
| **UTM** | E: 100,000–900,000, N: 0–10,000,000 | Large 6-7 digit easting values | The correct UTM zone (auto-suggested) |
| **Web Mercator** | X/Y: -20M to 20M | Very large values | Web Mercator (EPSG:3857) |
| **Local Grid** | X/Y: 0–10,000 | Small metric values, no clear pattern | Custom proj4 string from your surveyor |

> **Example:** You receive a DXF from a civil engineer. The coordinates show easting values near 500,000 and northing values in the millions, which usually indicates UTM. If the map was last viewed near the project area, CAD Manager can suggest the likely UTM zone. Confirm the CRS with the CAD source when possible before importing.

---

## 6. Role-Based Access

| Role | Import DXF | Export DXF |
|------|-----------|-----------|
| **Owner** | ✅ | ✅ |
| **Admin** | ✅ | ✅ |
| **Editor** | ✅ | ✅ |
| **Collector** | ❌ | ✅ |
| **Viewer** | ❌ | ✅ |

> **Note:** DXF import creates new project layers, which requires write access. All roles can export.

---

## 7. Tips for Best Results

- **Ask your CAD source for the CRS** — If the DXF uses a custom or country-specific projection, get the exact proj4 string from your surveyor or engineer.
- **Open the Map tab before importing** — Even briefly viewing the map saves your position, enabling automatic UTM zone suggestions.
- **Review the preview table** — Not all DXF entities convert to GeoJSON. The import button shows the exact count of convertible features.
- **Split large DXF files** — Files with 100,000+ entities may take longer. The progress bar and cancel button let you manage large imports.
- **Check layer names after import** — CAD layers with mixed geometry types are automatically split (e.g., "Survey Points" and "Survey LineString") to maintain valid Mapplex layer types.

---

> **Next:** Proceed to [Module 13: Engineering Drawing Export](./13-engineering-drawing-export.md) to learn how to export schematic drawing pages with your map PDF.
