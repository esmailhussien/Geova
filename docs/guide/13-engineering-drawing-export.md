---
title: Engineering Drawing Export
description: Export engineering drawing pages from Mapplex with dimensions, vertex labels, angles, area, and perimeter.
---

# Module 13: Engineering Drawing Export

> Engineering Drawing Export adds schematic pages to a Map PDF for visible polygon and line features. These pages show scaled outlines, dimensions, vertex labels, angles, and area or length summaries for review and documentation.

---

## 1. What Is an Engineering Drawing?

An Engineering Drawing is an **additional page** appended to your standard Map PDF export. It renders each polygon or line feature as a scaled technical schematic for review, handover notes, and field documentation.

Each drawing page includes:

| Element | Description |
|---------|-------------|
| **Scaled Outline** | The polygon/line shape drawn proportionally on the page |
| **Dimension Lines** | Red lines outside each edge showing the side length in meters |
| **Vertex Labels** | Green circled numbers (1, 2, 3...) at each corner |
| **Interior Angles** | Red arc indicators with degree labels at each vertex |
| **Summary Card** | Area (m² and hectares), perimeter, vertex count, and side count |
| **Coordinate Table** | WGS84 coordinates for each vertex in compact format |

> **Example:** A field engineer marks a building footprint with 5 vertices. With Engineering Drawing enabled, the PDF includes the map page plus a schematic page showing the footprint outline, side lengths, angle labels, and a summary of area, perimeter, and vertex count.

---

## 2. How to Enable Engineering Drawings

1. Navigate to the **Map View**.
2. Open the **Export Map PDF** dialog (Print/PDF button in the toolbar).
3. In the **Map Elements** section, check the **Engineering Drawing** toggle.
   - The toggle shows: `🏗 Engineering Drawing` with a subtitle: *"Side lengths, coordinates & area"*
4. Configure your other settings (layout, title, legend, etc.) as usual.
5. Tap **Generate PDF**.

> **Note:** The Engineering Drawing toggle is unchecked by default. You need to explicitly enable it when you want technical schematics.

---

## 3. What Gets Drawn

### Feature Selection

The system automatically selects features based on these rules:

| Rule | Detail |
|------|--------|
| **Geometry types** | Only Polygons, MultiPolygons, LineStrings, and MultiLineStrings are included |
| **Visibility** | Only features from **visible layers** are eligible |
| **Viewport** | Only features inside the **current map viewport** are processed |
| **Maximum** | Up to **10 features** per export (to keep the PDF manageable) |

If more than 10 eligible features exist in the viewport, a warning toast appears:
> *"Engineering Drawing: showing first 10 of 47 features. Zoom in for fewer features."*

**Tip:** Zoom into the area of interest and hide irrelevant layers before exporting to control which features appear on the drawing.

### One Page Per Feature

Each qualifying feature gets its **own dedicated page** in the PDF. A 5-polygon building complex generates 5 engineering pages after the map page.

---

## 4. Reading the Drawing

### Shape Outline

The polygon or line is drawn at the center of the page, **scaled to fit** within the drawing area. The aspect ratio is preserved — shapes are never distorted.

- **Polygons:** Drawn as closed outlines with slate-colored strokes
- **Lines:** Drawn as open polylines

### Dimension Lines (Red)

For shapes with 30 or fewer vertices, **dimension lines** appear along each edge:

- Red offset lines run parallel to each edge, positioned outward from the shape center
- **Extension lines** connect each vertex to the dimension line
- **Tick marks** appear at both ends of each dimension line
- The **length in meters** is printed beside each dimension line, rotated to align with the edge
- Values ≥ 100m show 1 decimal place; smaller values show 2 decimal places

### Vertex Labels (Green)

Each vertex has:
- A **green dot** at the exact vertex location
- A **circled number** (1, 2, 3...) offset outward from the shape center
- Numbers are ordered sequentially around the shape

### Interior Angles (Red)

For polygons with 3+ vertices and ≤ 30 vertices:
- A small **red arc** is drawn at each vertex showing the interior angle
- The **angle in degrees** is printed near the arc (e.g., "90°", "135°")

### Summary Card

A light-blue summary card appears at the bottom of each page:

**For Polygons:**

| Metric | Format |
|--------|--------|
| Perimeter | meters (2 decimal places) |
| Area | m² (2 decimal places) |
| Vertices | count |
| Hectares | shown when area > 10,000 m² |

**For Lines:**

| Metric | Format |
|--------|--------|
| Total Length | meters (2 decimal places) |
| Kilometers | shown when length > 1,000 m |
| Vertices | count |
| Segments | count |

### Coordinate Reference

Below the summary metrics, a compact row lists the WGS84 coordinates of the first 6 vertices:
```
(1) 24.713400, 46.675200   (2) 24.713500, 46.675300   ... +4 more
```

---

## 5. Page Header

Each engineering page includes a header:

| Element | Position |
|---------|----------|
| **"ENGINEERING SURVEY DRAWING"** | Title (bold, top-left) |
| **Feature name — Layer name** | Subtitle showing which feature and layer |
| **WGS 84 · Meters** | Coordinate reference (top-right) |
| **Sheet N** | Page number within the engineering section |
| **Gradient accent bar** | Cyan-to-violet brand stripe across the top |

The feature name is auto-resolved from properties. The system checks for `name`, `title`, `label`, `اسم`, `الاسم`, `description` fields first, then falls back to the first short string property, then to "Feature N".

---

## 6. Complete PDF Structure

When Engineering Drawing is enabled, the final PDF contains:

```
Page 1:  Map View  (satellite image + legend + scale bar + north arrow)
Page 2:  Engineering Drawing — Building A  (polygon schematic)
Page 3:  Engineering Drawing — Building B  (polygon schematic)
Page 4:  Engineering Drawing — Road Segment  (line schematic)
...
```

Each page includes the standard Mapplex footer with generation date and page numbering.

---

## 7. Tips for Best Results

- **Zoom to the target area** — Only viewport-visible features are included. Zoom into the specific parcel, building, or road segment you need.
- **Hide unnecessary layers** — Turn off background layers (reference zones, basemap overlays) so only the relevant polygons/lines appear.
- **Use Landscape orientation** — Wider shapes render better in landscape mode, giving more horizontal drawing space.
- **Keep shapes simple** — Shapes with more than 30 vertices skip dimension lines and angle arcs (the outline and summary card still render). Simplify complex shapes before export.
- **Name your features** — Features with a `name` or `title` property get meaningful page headers instead of "Feature 1".
- **Check the summary card** — Area and perimeter values are calculated from the stored geometry. Verify critical measurements with approved survey methods.

---

## 8. Limitations

| Limitation | Detail |
|-----------|--------|
| **Point geometries** | Not supported — points have no edges or area to draw |
| **Max 10 features** | To keep PDF size reasonable. Zoom in to reduce the count |
| **Vertex limit** | Shapes with > 30 vertices render outlines only (no dimension lines or angle arcs) |
| **Coordinate system** | Calculations assume WGS84 input. CAD-imported features must be reprojected correctly first |
| **Multi-geometries** | Only the first ring/part of MultiPolygon or MultiLineString is drawn |
| **Legal/survey use** | Use as documentation support, not as a substitute for certified survey drawings |

---

> **Previous:** [Module 12: CAD Manager](./12-cad-manager.md) — Import and export DXF files
> **Next:** Return to the [User Guide Overview](./README.md)
