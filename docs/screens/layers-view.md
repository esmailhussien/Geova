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
The **Layers Manager** organizes project layers and controls how their features appear on the map. Use it to create layers, change styles, and review the schema used by forms and Geova AI.

## Action Steps

### 1. Define a Global Data Schema Layer
1. Ensure you have an active project open (for example, "Water Utility Survey").
2. Navigate to the Layers Manager and click **New Layer**.
3. Configure the geometry:
   - *Name:* "Tectonic Fault Lines"
   - *Geometry:* Line (Pipes, Roads, Cables)
   - *Color:* Diverging Red `#dc2626`.
4. Click **Create Layer**.

### 2. Modifying Symbology 
Need to color-code your regions dynamically based on the data inside them?
1. Tap the **Style** (Palette Icon) button on your new layer card.
2. Under **Field-Based Symbology**, select a numeric field from your features (for example, `inspection_score`).
3. Switch the toggle from **Categorical** to **Graduated**.
4. Configure the Data Classification:
   - Make sure your Color Ramp is set to a heatmap style (Yellow-Orange-Red).
5. Click **Generate Bins**. Geova creates the style ranges from the selected field values.

### 3. Translate Databases to AI English
If your imported data has ugly, impossible-to-read database keys:
1. Tap the **Schema** (Dictionary Book Icon) on a layer.
2. Review the discovered properties (for example, `inspection_score`).
3. In the **Alias** field, type **Inspection Score**. Add a unit when one applies.
4. Save the schema. The alias is then available to people using the project and to Geova AI when it interprets requests.

## Pro-Tips
> 💡 **Tip:** Need to isolate a problem on the map immediately? Tap the `my_location` crosshair button on any layer card to instantly fire a Canvas Zoom event right to the exact geographical center of that layer!

> 💡 **Tip:** Be mindful of the orange warning badges. If an Amber Warning appears indicating "No Form", it means your field workers have no way to attach structured data to this geometry yet. Fix it in the Forms Builder.

---

## Technical Architecture (For Developers)

The `LayersView` manages dense application logic requiring extremely responsive DOM manipulations against the asynchronous database API.

- **MountManager Atomic Eviction:** Modern SPAs easily succumb to "zombie listeners". `LayersView` instantiates `new MountManager()`. Every `scroll`, `resize`, and `click` bound to the document is routed through it. When the user leaves the Layers screen, `mm.cleanup()` safely detonates all DOM hooks preventing overlap.
- **Algorithmic Extrapolation:** The Graduated Symbology engine intercepts heavy mathematical algorithms to calculate breaks. Selecting *Quantile* or *Jenks* executes mathematical matrix sorts against IndexedDB `STORES.FEATURES` in memory, deriving thresholds client-side without locking the thread.
- **Mobile-Native Touch Simulation:** The system employs a custom `bindLi` utility wrapping a native click to tolerate an 8px `MOVE_THRESHOLD`. This prevents Capacitor WebViews from incorrectly executing clicks when users are just trying to aggressively scroll through their layer settings.
