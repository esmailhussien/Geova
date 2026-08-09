---
title: Map View
description: Use Mapplex to draw features, capture GPS locations, measure geometry, track movement, and work with offline tiles.
---

# Module 03: Map View

> The Map View is where users draw features, collect GPS locations, measure distances and areas, edit geometries, cache offline tiles, and review spatial results.

---

## 1. Map Interface Overview

When you open the Map View, the map fills the screen and shows controls around the edges:

| Control | Position | Purpose |
|---------|----------|---------|
| **Layer Selector Pill** | Top-center | Switch the active drawing layer |
| **Offline Map** | Top-right | Download tiles for offline use |
| **Basemap Toggle** | Top-right | Switch between Satellite and Street map |
| **Layer Visibility** | Right side | Show or hide individual layers |
| **Measure Tool** | Right side | Enter measurement mode for distance and area |
| **Record GPS Path** | Right side | Auto-record points as you walk *(requires GPS Tools setting)* |
| **Silent Track** | Right side | Record GPS movement in the background *(requires GPS Tools setting)* |
| **Advanced Edit** | Right side | Split and merge polygon tools *(requires Advanced Edit setting)* |
| **Sketch Mode** | Right side / drawing tools | Freehand drawing support *(requires Sketch Mode setting)* |
| **GPS Pin** | Bottom-right | Capture your current GPS location and place a point |
| **Quick Capture** | Bottom-right / GPS tools | Create a point at your current GPS location with fewer taps *(requires Quick Capture entitlement and setting)* |
| **Status Bar** | Bottom-center | Shows current mode (Idle, Drawing, Measuring, Editing, etc.) |
| **AI Preview Pill** | Bottom-left | Shows/hides Geova AI spatial query results on the map |

---

## 2. Selecting a Layer & Drawing

### Selecting the Active Layer

1. Tap the **Layer Selector Pill** at the top of the map.
2. A dropdown lists all layers in the active project with their geometry icon and color badge.
3. Tap a layer to make it active. The drawing toolbar adapts to the layer's geometry type.

### Drawing Features

Once a layer is selected, the **Geoman Toolbar** appears at the left side of the map. The available tools depend on the geometry type:

| Geometry | Available Drawing Tools |
|----------|------------------------|
| **Point** | Marker placement (tap to drop a pin) |
| **LineString** | Line drawing (tap vertices, double-tap to finish) |
| **Polygon** | Polygon drawing (tap vertices, close the shape to finish), Rectangle tool |

After drawing, a **Bottom Sheet** popup appears with the form for that layer. Fill in attributes, attach photos, and save.

### Snap Engine

When drawing, the **Snap Engine** can align your cursor or finger to nearby vertices and edges. This helps users connect lines and polygons cleanly, which is useful for utility networks, parcel boundaries, and other datasets where shared edges matter.

---

## 3. GPS Features

### Grabbing Your GPS Location

Tap the **GPS Pin** button (bottom-right). The map:

1. Activates your device's GPS.
2. Displays a blue pulsing dot at your location.
3. Shows a **GPS Accuracy Indicator** — long-press the GPS button for detailed accuracy info (horizontal accuracy in meters, satellite status).
4. Zooms the map to your current position.

If an active drawing layer is selected, the GPS point is captured as a new feature on that layer.

### Quick Capture

When **Quick Capture** is enabled and your workspace includes the feature, tapping GPS can create a point feature at your current location with fewer steps. Use it for repetitive point collection where the active layer and form schema are already prepared.

### Recording a GPS Path (Auto-Track)

For surveys where you walk along a road, trail, or pipeline:

1. Tap the **Record Path** button (right side).
2. A dialog appears: **"Auto-Record GPS Path"**
   - **Min Distance (Meters)** — Minimum movement before a new point is recorded (default: 2m).
   - **Min Time (Seconds)** — Minimum time between recordings (default: 3s).
3. Tap **Start Tracking**. The app drops points automatically as you walk.
4. Tap the button again (now pulsing red) to stop recording.

> **Example:** A pipeline inspector walks along a mapped route and records a GPS path at set distance and time intervals. The resulting points can be reviewed as a path record without requiring the inspector to tap the screen at every location.

### Silent Track

Silent Track records your GPS movement without drawing visible collection points on the active layer. Use it when you need a device path for review but do not want to add point features at every interval.

---

## 4. Manual Coordinate Entry

For precision placement (e.g., known survey coordinates):

1. Use the manual coordinate entry option.
2. A dialog opens: **"Enter Coordinates"**
3. Type latitude and longitude separated by a comma:
   ```
   31.2001, 29.9187
   ```
4. Tap **Place Point**. A marker appears at the exact location.

When precision placement tools are enabled, the map can also show a center crosshair to help position a feature before confirming placement. This is useful on tablets where dragging the map is easier than tapping an exact coordinate.

---

## 5. Measurement Tools

Tap the **Measure Tool** button on the right side. The map enters **Measure Mode**:

### Simple Distance (2 points)

Tap two points on the map. A distance label appears at the midpoint showing the measurement.

### Multi-Segment (3+ points)

Tap more than two points. The system displays:
- **Individual segment labels** between each pair of vertices (shown in indigo badges)
- **Running total distance** at the final vertex (shown in green)
- Units: **Metric** (meters/km) or **Imperial** (feet/miles) based on settings

### Area Measurement (Closed Shape)

Tap 3+ vertices and bring the final point close to the first point. A **magnetic snap zone** (glowing green circle) appears around the first vertex:
- When you're close enough, the circle enlarges and pulses with a glow animation
- Snap to it to close the polygon
- The system calculates and displays both **Perimeter** and **Area**

### Drafting Controls

While measuring, the toolbar provides:
- **Clear** — Clear current measurement and start fresh (stays in measure mode)
- **Close Shape** — Force-close the polygon to calculate area
- **Undo** — Remove the last placed vertex
- Tap the measure button again to **exit** measure mode and clean up all overlays

---

## 6. Basemap Switching

Tap the **🗺️ Basemap Toggle** button (top-right) to switch between:
- **Satellite imagery** — High-resolution aerial photography
- **Street map** — Standard road and place names

The current basemap persists across sessions.

---

## 7. Offline Map Caching

Work in areas with no internet? Download the tiles beforehand:

1. Navigate the map to the area you need.
2. Tap the **☁️↓ Offline Map** button (top-right).
3. The system caches all visible tiles at the current zoom level and several levels above/below.
4. A progress indicator shows download status.
5. Once cached, tiles load from local storage — no internet required.

Cached tiles are stored in the browser's Cache API and persist across sessions.

---

## 8. Clustering & Performance

### Smart Clustering

When enabled (default), features that are close together visually cluster into numbered bubbles at lower zoom levels. Tap a cluster to zoom in and reveal individual features. This prevents visual overload when your project has thousands of features.

### Overlapping Cluster Expansion

When clustered features overlap at the same location, tapping the cluster can expand the points so you can select individual features.

### Canvas Rendering & Viewport Culling

For projects with many features, Mapplex uses optimized rendering techniques:
- **Canvas rendering** — Draws large point sets more efficiently than individual HTML markers.
- **Viewport culling** — Keeps off-screen features out of the active rendering area.
- **Dynamic loading** — For very large projects, loads data for the current viewport instead of drawing the full dataset at once.

---

## 9. Feature Popups & Editing

### Viewing a Feature

Tap any feature on the map to open its **popup**. The popup shows:
- All form field values
- Photos (with gallery navigation)
- Computed geometry info (coordinates, area, perimeter)
- Action buttons: **Edit**, **Delete**, and **History** where available (based on your role and workspace entitlement)

### Editing a Feature's Attributes

1. Tap a feature to open its popup.
2. Tap **Edit**.
3. The form opens in a bottom sheet. Make your changes.
4. Tap **Save**.

### Editing a Feature's Geometry

1. Tap a feature and select **Edit Geometry** from the popup.
2. The feature enters edit mode — vertex handles appear on the shape.
3. Drag vertices to adjust the shape.
4. Tap **Save** to commit or **Discard** to cancel.

For point features, you can drag the marker to a new position directly.

---

## 10. Advanced Editing: Split & Merge

*(Requires the **Advanced Edit** setting to be enabled. Available to project Owners and Admins only.)*

### Splitting a Polygon

1. Tap the **Advanced Edit** button. The Advanced Edit panel appears.
2. Tap **Split Polygon** (scissors icon).
3. Draw a line **across** the polygon you want to divide. The split line must enter on one side and exit on the other.
4. When the line is complete, the polygon is divided into two separate features, each inheriting the original's attributes.

> **Example:** A parcel boundary needs to be split after an approved subdivision. Draw the split line across the parcel; Mapplex creates two polygon features that can be reviewed and edited separately.

### Merging Polygons

1. Tap the **Advanced Edit** button. The Advanced Edit panel appears.
2. Tap **Merge Polygons** (join icon).
3. Tap two or more adjacent polygons. Selected polygons highlight in red.
4. The state indicator shows "SELECTED: 2" (or more).
5. Tap **Finish** to merge them into a single feature.

> **Note:** Merged polygons must be from the **same layer**. The merged feature inherits the properties of the first selected polygon.

### Radial Command Palette

Long-press on any polygon to open the **Radial Command Palette** — a contextual ring menu with quick actions including Split and Merge, accessible without opening the Advanced Edit panel.

---

## 11. Layer Visibility Panel

Tap the **👁️ Layers** button on the right side to toggle the **Layer Visibility Panel**. This floating panel lists all layers with eye-toggle switches:

- Toggle individual layers on/off without leaving the map
- Reference layers (imported KMZ backgrounds) are listed separately
- Changes apply without reloading the map

---

## 12. Time Slider (4D Temporal Playback)

For datasets with temporal attributes, Mapplex can animate features across time:

1. The **Temporal Playback Manager** activates when your layer has date/time fields.
2. A time slider appears at the bottom of the map.
3. Drag the slider to filter features by date range.
4. Press play to animate the progression over time.

> **Example:** A public health team can filter visit records by date to review how follow-up activity changed over a reporting period.

---

## 13. Geova AI Preview Layer

When Geova AI runs a spatial analysis (from the Chat module), results can be projected onto the map:

- The **AI Preview Pill** (bottom-left) shows "AI Result" with show/hide and clear controls.
- A **Ghost Layer Pill** shows previous AI query results for comparison.
- These are visual overlays only — they don't modify your project data.

---

## 14. Map State Persistence

When you navigate away from the Map View and return, the map restores your last position (center and zoom level) automatically. This state is saved per-project so switching between projects doesn't lose your viewport.

---

> **Next:** Proceed to [Module 04: Forms & Smart Logic](./04-forms-view.md) to build data collection schemas for your layers.
