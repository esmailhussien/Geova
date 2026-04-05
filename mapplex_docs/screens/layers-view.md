---
title: Layers View
description: Detailed technical and user documentation for the Geova Layers Manager component.
---

# Layers View: Exhaustive Documentation

## 1. Executive Overview
The **Layers View** (`LayersView.js`) serves as the spatial schema definition and symbology command center for the Geova platform. It delivers immense business value by giving administrators and domain experts full control over how complex spatial feature collections are structured, visually categorized, and consumed by the field. 

Whether the user is mapping **Global Deforestation** boundaries, tracking **National Highway Networks**, or visualizing **Global Seismic Activity** epicenters across tectonic fault lines, the Layers Manager guarantees data consistency through its semantic dictionaries, precise geometry configurations, and dynamic graduated symbology rendering.

---

## 2. UI/UX Breakdown (Microscopic)

### Layer Manager Layout & Status Badging
- **Command Header:** Displays the current Active Project. A contextual pill badge flags whether the project execution environment is `Hosted` (Blue) or strictly `Offline` (Slate).
- **Empty State Zero-Data Fallback:** If a project has no layers, a dash-bordered dropzone container `layers_clear` encourages immediate creation, mitigating "blank screen" anxiety.
- **Reference KMZ Layers (Background Models):** 
  - Rendered with an ambient orange-tinted background `bg-orange-50/30` and orange `visibility` icons.
  - Automatically grouped by `source_layer`, establishing visual hierarchy between editable vectors and read-only foundational reference data.

### Layer Listing Cards & Micro-Interactions
- **Geometry Type & Form Association Badging:** Micro-labels visually designate layers as `Point`, `LineString`, or `Polygon`. A conditional `amber warning` signals if a layer has "No Form" attached, urging users to define data capture schemas.
- **Symbology Previews:** Each card features a miniature visual twin of its map appearance:
  - *Points:* Displays the selected material icon and marker color.
  - *Polygons:* Displays an outline bounding box alongside a fill color square (or "Hollow" indicator).
  - *LineStrings:* Displays a thick rectangular colored stroke line.
- **One-Click Actions:** Built into the upper right of the card:
  - *Visibility Toggle:* Changes instantly from `emerald text` to `dimmed opacity-50` via immediate optimistic UI updates without waiting for database saves.
  - *Zoom To Layer:* Dispatches a direct canvas route (`my_location`).
  - *Delete:* Triggers an aggressive red-tint hover phase culminating in an animated spinner overlay during bulk record destruction.

### Advanced Floating Modal Suite
- **Create / Edit Style Modal:**
  - **Custom Color Picker Ring:** A horizontal, snapping scroll-view featuring standard Geova palettes mapped to specific CSS gradients. If users select a custom HEX, a dynamic ring swaps absolute positioning to mimic a custom color lens using `mix-blend-difference drop-shadow-md`.
  - **Geometry Reactive Dropdowns:** If "Point" is chosen, the `Icon` picker animates into view. If "Polygon" is chosen, the "Fill Color & Hollow Checkbox" dynamically mount.
  - **Floating Portal Dropdowns:** Custom `div` dropdowns using `z-[10060]` fixed positioning to seamlessly break out of modal constraints, calculating offset geometry mathematically to open upwards or downwards depending on bottom-viewport space limits.

- **Semantic Data Dictionary Modal:**
  - Features a stunning `violet` premium UI focus.
  - Instantly scans all vectors within the DB (bypassing the form engine) to auto-detect unstructured data keys.
  - Binds "Aliases" and "Units" directly to DB keys, which immediately busts caching and updates the **Geova AI Context Builder**.

---

## 3. User Guide

### Step 1: Defining a Global Data Schema
1. Ensure your Enterprise Dashboard is set to a project—for instance, **"Global Seismic Activity"**.
2. Navigate to the Layers Manager and click the **New Layer** button.
3. Configure the geometry:
   - *Name:* "Tectonic Fault Lines"
   - *Geometry:* Line (Pipes, Roads, Cables)
   - *Color:* Diverging Red `#dc2626`.
4. Click **Create Layer**.

### Step 2: Modifying Symbology for Large Datasets
If you possess a vast Polygon layer for **"Global Deforestation Metrics"**:
1. Tap the **Style** (Palette Icon) button on your new card.
2. Under "Field-Based Symbology", select a numeric metric auto-detected from your features (e.g., `deforestation_severity_index`).
3. Switch the Symbology Type toggle from **Categorical** to **Graduated**.
4. Configure the Data Classification:
   - *Method:* Select **Natural Breaks (Jenks)** to group non-linear clusters.
   - *Color Ramp:* Select **Yellow-Orange-Red (Heat)**.
5. Click **Generate Bins**. Geova mathematically splits the numeric dataset into intelligent color gradients.
6. Check the **Completion Indicator** to dynamically turn successfully surveyed deforestation zones green.
7. Click **Save Style**.

### Step 3: Bridging Human Terminology to the AI
1. Tap the **Schema** (Dictionary Book Icon) on a layer.
2. Review the auto-discovered database properties. You might see a raw, ugly database key like `mag_pga_float_22`.
3. In the "Alias" field, type **Peak Ground Acceleration**. In the unit field, type **%g**.
4. Save the Semantic schema. The Geova AI chat will instantly begin referring to this field by its human-readable Alias.

---

## 4. Technical Architecture (For Developers)

The `LayersView` manages dense application logic requiring extremely responsive DOM manipulations against the asynchronous database API:

### MountManager: Atomic Lifecycle Eviction
Modern SPAs easily succumb to "zombie listeners", especially on rapidly accessed settings panes. `LayersView` instantiates `new MountManager('LayersView')`. Every `scroll`, `resize`, and `click` bound to the document is routed through `mm`. When the user navigates back to the Map View, `main.js` hits the returned `mm.cleanup()`, atomically destroying all DOM events originating from the Layers interface.

### Algorithmic Extrapolation (Symbology Yielding)
The Graduated Symbology engine intercepts heavy mathematical algorithms to calculate breaks. Selecting *Quantile* or *Jenks* executes mathematical matrix sorts against the database column data arrays in memory (fetching values natively from IndexedDB `STORES.FEATURES`). Geova calculates array thresholds client-side and translates these metrics into discrete styling rules bounded by `dataset.min` and `dataset.max`.

### Mobile-Native Touch Simulation (`bindLi`)
Standard fast-click libraries fail inside Capacitor WebViews when touching complex nested icon elements within absolutely positioned divs (like the floating portals). The system employs a custom `bindLi` utility using an 8px `MOVE_THRESHOLD`. 
- Listens to `touchstart`, `touchmove`, and `touchend`. 
- If touch coordinate translation exceeds 8 pixels, the interaction registers as a scroll and cancels the click execution, permitting flawless native-like scrolling behavior inside custom dropdown overlays on Android devices.

### Portal Position Calculations
Because dropdown `<ul>` tags placed inside CSS transform-scaled `<dialog>` panels are clipped by `overflow: hidden`, standard `<select>` aesthetics are destroyed. Geova's `positionFloatingPortalDropdown()` extracts the active target bounding box, queries `window.innerHeight`, calculates the vertical padding delta `availableBelow`, and dynamically flips the popover *upward* if height clearance is negative, assigning fixed coordinates to root `document.body`.
