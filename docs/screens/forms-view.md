---
title: Form Builder
description: Design dynamic data entry templates with Smart Logic and auto-calculating spatial configurations.
order: 4
---

# Form Builder (`FormsView.js`)

The Form Builder replaces traditional paper forms by allowing users to create dynamic schema templates and attach them directly to spatial Layers. 

![Form Builder Placeholder](https://via.placeholder.com/800x400.png?text=Form+Builder+Placeholder)

## Schema Definition

Users can add multiple varying fields. To prevent database crashes, **Field Types are strictly enforced**:
- **Text / Number**: Standard scalar values.
- **Dropdown / Checkboxes**: For categorical data.
- **Photos / Galleries**: Taps directly into Capacitor device camera arrays on mobile platforms.
- **Auto-Geometry (Read Only)**: A dynamic field that displays Turf.js calculated metrics (e.g., automatically calculating Polygon Area in sq meters).

### Spatial Mapping

One of Mapplex's most powerful field features is *Spatial Mapping*. 
Instead of forcing field workers to type in "Zone A" manually, the Form Builder allows an admin to link a form field dynamically to an intersecting layer.

If an admin sets:
`Field: Zip_Code -> Auto-Calculate from Background Layer -> Extract Property "ZIP"`
When a field worker drops a pin, Mapplex runs a `booleanPointInPolygon` check silently, extracts "ZIP", and auto-fills the form before the user even sees it.

## Smart Logic (Rule Engine)

Located at the bottom of the Form Builder, Smart Logic allows field dependencies:
- **Ex:** `IF [Status] EQUALS 'Damaged' THEN SHOW 'Repair Cost'`
- **Ex:** `IF [Tree_Species] EQUALS 'Oak' THEN REQUIRE 'Trunk_Diameter'`

These rules are parsed dynamically when the exact form is opened in the Map Interface by `renderDynamicFormHTML.js`.
