---
title: Layer Manager
description: Organize spatial datasets, define geometries, and build advanced symbology logic.
order: 3
---

# Layer Manager (`LayersView.js`)

The Layer Manager is where technical teams structure their core datasets. Mapplex avoids flat schema chaos by forcing users to create explicitly typed Layers (Point, Line, Polygon).

![Layer Manager Placeholder](https://via.placeholder.com/800x400.png?text=Layer+Manager+Placeholder)

## Core Capabilities

### 1. Geometry Typing
When creating a Layer, the user locks the dataset to a specific geometry:
- **Point**: Opens options for Material Icon selection (e.g. `bolt`, `water_drop`) and Marker Color.
- **LineString**: Opens options for Stroke Color.
- **Polygon**: Opens options for Outline Color and Fill Color.

### 2. Advanced Symbology

Beyond static colors, Mapplex provides a powerful client-side symbology engine (`SymbologyUtils.js`):
- **Categorical**: Users can select a form field (e.g. "Condition") and automatically assign different colors to "Good", "Fair", and "Poor".
- **Graduated**: If the user selects a numeric field (e.g. "Voltage"), they can apply Quantile, Equal Interval, or Jenks (Natural Breaks) algorithms to automatically bucket features into standard Color Ramps (e.g. *Blues*, *YlOrRd*).

### 3. Smart Interactivity
Each layer card in the UI provides direct actions:
- **Toggle Visibility**: Triggers a global `layer-visibility-changed` event to hide/show the layer across the entire app.
- **Zoom to Layer**: Calculates the overall bounding box of all features within that layer via Turf.js and calls `mapInstance.flyToBounds()`.
