# Module 14: SHP Manager (Shapefile Import & Export)

> Import and export ESRI Shapefiles (`.shp` / `.zip`) with coordinate system handling and multi-shapefile ZIP support. SHP Manager is a **Pro** feature.

---

## 1. Opening SHP Manager

1. Navigate to the **Data & Sync** view from the sidebar.
2. Tap the **Shp Manager** button below CAD Manager.
3. The modal opens with **Import SHP** and **Export SHP** tabs.

> **Pro Feature:** Shp Manager requires a Pro or Team subscription. Free-tier users see a locked button with a "PRO" badge and are prompted to upgrade.

---

## 2. Importing Shapefiles

### Step 1: Select a ZIP or Shapefile Components

Tap **"Choose SHP / ZIP File"** and select either:

- A `.zip` archive containing one or more shapefiles
- Loose shapefile component files, such as `.shp`, `.shx`, `.dbf`, `.prj`, and `.cpg`

A shapefile is actually a group of files sharing the same base name:

| File | Purpose | Required? |
|------|---------|-----------|
| `.shp` | Geometry data (shapes) | ✅ Yes |
| `.shx` | Spatial index | ✅ Yes |
| `.dbf` | Attribute table (field data) | ✅ Yes |
| `.prj` | Coordinate system definition | Recommended |
| `.cpg` | Text encoding specification | Optional |

### Step 2: Preview Shapefiles Found

After parsing, SHP Manager shows a table listing **every shapefile** found in the selected ZIP or component-file set:

| ☑ | Shapefile | Type | Fields | Features | CRS |
|---|-----------|------|--------|----------|-----|
| ✅ | parcels | Polygon | 12 | 847 | 🟢 UTM 36N (from .prj) |
| ✅ | roads | LineString | 8 | 234 | 🟢 UTM 36N (from .prj) |
| ☐ | buildings | Polygon | 6 | 1,203 | 🟡 No .prj — manual CRS |

- **Checkboxes** let you select which shapefiles to import (all checked by default).
- **Green badge (🟢)** means the CRS was auto-detected from the `.prj` file.
- **Amber badge (🟡)** means no `.prj` was found. You need to choose the CRS manually.

### Step 3: CRS (Coordinate System) Handling

**When `.prj` exists:**
The system reads the WKT definition and auto-detects the EPSG code. Common formats recognized:
- WGS 84 (EPSG:4326)
- UTM Zones 1-60 N/S (EPSG:326xx / 327xx)
- Web Mercator (EPSG:3857)

No manual CRS selection is needed when the `.prj` is recognized. Coordinates are reprojected to WGS84 during import.

**When `.prj` is missing:**
A CRS picker appears with radio cards:
- ⭐ **GPS-recommended zone** — based on your device's current location
- Nearby UTM zones (±2 zones from GPS)
- Web Mercator
- Custom proj4 string (for advanced users)

> **Tip:** Each shapefile in a multi-SHP ZIP can have a **different CRS**. SHP Manager handles each one independently, but you should still confirm CRS settings when files come from different sources.

### Step 4: Import

Tap the **Import** button. For each selected shapefile:
1. Coordinates are reprojected to WGS84 (if needed)
2. A new Mapplex layer is created, named after the shapefile
3. Features are saved to IndexedDB
4. Form fields are auto-generated from the DBF schema

A progress bar tracks the import with a **Cancel** button to abort mid-import.

---

## 3. Exporting as Shapefile

1. Switch to the **Export SHP** tab.
2. Choose a layer or "Entire Project" from the dropdown.
3. Tap **"Export as SHP"**.
4. A `.zip` file downloads containing `.shp`, `.shx`, and `.dbf` files.

> **Note:** Exported coordinates are in WGS84 (EPSG:4326). If the receiving GIS software expects a different CRS, use its built-in reprojection tools.

---

## 4. Multi-Shapefile ZIP Archives

Government agencies and GIS departments commonly bundle multiple shapefiles in a single ZIP:

```
city_data_2026.zip
├── parcels.shp / .shx / .dbf / .prj
├── roads.shp / .shx / .dbf / .prj
├── buildings.shp / .shx / .dbf / .prj
└── utilities.shp / .shx / .dbf
```

SHP Manager detects all shapefiles automatically and lets you:
- Preview each one separately
- Select/deselect individual shapefiles
- See per-file CRS status
- Import them as separate Mapplex layers

---

## 5. Role-Based Access

| Role | Import SHP | Export SHP |
|------|-----------|-----------|
| Owner | ✅ | ✅ |
| Admin | ✅ | ✅ |
| Editor | ✅ | ✅ |
| Collector | ❌ | ✅ |
| Viewer | ❌ | ✅ |

---

## 6. Tips for Best Results

- **Always include the `.prj` file** — without it, the system must guess the CRS. If you created the shapefile in QGIS or ArcGIS, the `.prj` is generated automatically.
- **Keep related files together** — a ZIP is easiest for handoff, but you can also select the loose component files together when importing.
- **Name your files clearly** — the shapefile base name becomes the Mapplex layer name.
- **DBF field name limit** — Shapefile attribute field names are limited to 10 characters by the format specification. Longer names are truncated.
- **Check encoding** — if Arabic or special characters appear garbled, the original shapefile may lack a `.cpg` encoding file.

---

## 7. Comparison: SHP Manager vs CAD Manager

| Feature | SHP Manager | CAD Manager |
|---------|------------|-------------|
| **Format** | ESRI Shapefile (.shp/.zip) | AutoCAD DXF |
| **CRS Detection** | Auto from `.prj` file | Manual (fingerprint + GPS) |
| **Multi-file ZIP** | ✅ Multiple shapefiles per ZIP | Single DXF per file |
| **Attribute Data** | Full DBF schema with types | Limited (layer names only) |
| **Geometry Types** | Point, Line, Polygon, Multi* | Point, Line, Polyline, Circle, Arc, Ellipse |
| **Export** | ZIP with .shp/.shx/.dbf | Single .dxf text file |

---

> **Previous:** [Module 13: Engineering Drawing Export](./13-engineering-drawing-export.md)
> **Next:** Return to the [User Guide Overview](./README.md)
