---
title: Layers View
description: Detailed technical and user documentation for the Geova Layers Manager component.
---

---
title: Layers Manager
description: Group and stylize your geospatial feature collections for the map view.
---

# Layers Manager

## Overview
The **Layers Manager** is the styling and organization hub for your map. Whether you're configuring a simple grouping of Point Drops or setting up complex dynamic heat-scales for deforestation boundaries, this screen gives you total control over how data looks on the canvas. 

## Action Steps

### 1. Define a Global Data Schema Layer
1. Ensure you have an Active Project open (e.g. "Global Seismic Activity").
2. Navigate to the Layers Manager and click **New Layer**.
3. Configure the geometry:
   - *Name:* "Tectonic Fault Lines"
   - *Geometry:* Line (Pipes, Roads, Cables)
   - *Color:* Diverging Red `#dc2626`.
4. Click **Create Layer**.

### 2. Modifying Symbology 
Need to color-code your regions dynamically based on the data inside them?
1. Tap the **Style** (Palette Icon) button on your new layer card.
2. Under "Field-Based Symbology", select a numeric metric auto-detected from your features (e.g., `deforestation_severity`).
3. Switch the toggle from **Categorical** to **Graduated**.
4. Configure the Data Classification:
   - Make sure your Color Ramp is set to a heatmap style (Yellow-Orange-Red).
5. Click **Generate Bins**. Geova mathematically splits the data into intelligent color gradients automatically.

### 3. Translate Databases to AI English
If your imported data has ugly, impossible-to-read database keys:
1. Tap the **Schema** (Dictionary Book Icon) on a layer.
2. Review the auto-discovered database properties (e.g. `mag_pga_float_22`).
3. In the "Alias" field, type **Peak Ground Acceleration**. In the unit field, type **%g**.
4. Save the Semantic schema. Both your human users and the Geova AI will instantly begin referring to this field playfully by its human Alias.

## Pro-Tips
> 💡 **Tip:** Need to isolate a problem on the map immediately? Tap the `my_location` crosshair button on any layer card to instantly fire a Canvas Zoom event right to the exact geographical center of that layer!

> 💡 **Tip:** Be mindful of the orange warning badges. If an Amber Warning appears indicating "No Form", it means your field workers have no way to attach structured data to this geometry yet. Fix it in the Forms Builder.

---

## Technical Architecture (For Developers)

The `LayersView` manages dense application logic requiring extremely responsive DOM manipulations against the asynchronous database API.

- **MountManager Atomic Eviction:** Modern SPAs easily succumb to "zombie listeners". `LayersView` instantiates `new MountManager()`. Every `scroll`, `resize`, and `click` bound to the document is routed through it. When the user leaves the Layers screen, `mm.cleanup()` safely detonates all DOM hooks preventing overlap.
- **Algorithmic Extrapolation:** The Graduated Symbology engine intercepts heavy mathematical algorithms to calculate breaks. Selecting *Quantile* or *Jenks* executes mathematical matrix sorts against IndexedDB `STORES.FEATURES` in memory, deriving thresholds client-side without locking the thread.
- **Mobile-Native Touch Simulation:** The system employs a custom `bindLi` utility wrapping a native click to tolerate an 8px `MOVE_THRESHOLD`. This prevents Capacitor WebViews from incorrectly executing clicks when users are just trying to aggressively scroll through their layer settings.
