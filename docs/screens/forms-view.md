---
title: Forms Builder
description: Build structured forms for spatial data collection.
---

# Forms Builder

## Overview
The **Forms Builder** lets you define the fields and rules used when collecting data. Create a form for an inspection, inventory, survey, or other field workflow, then control which values are required and when fields appear.

## Action Steps

### 1. Generate a New Database Schema
1. Select your target mapped layer (for example, "Water Valve Inspections").
2. Tap the blue **Add Field** button. 
3. Name the field: *Inspection Pressure*.
4. Lock the **Data Type** to `Number`. 
5. Select the **Checkbox** to strictly require the field. Field workers will be unable to save geometry until this is filled.

### 2. Fast-Track Import from Spreadsheets
If your project already has a CSV or JSON schema definition:
1. Click the indigo **Import Schema** button.
2. Upload the `.csv` or `.json` file.
3. Geova silently extracts all the headers, ignores duplicates, and injects the new schema sequentially, saving hours of manual labor!

### 3. Inject Conditional Routing (Smart Logic)
Need a dynamic form that reacts to field answers?
1. Add a `Dropdown` field called *Tree Condition* (Options: *Good, Fair, Dead*).
2. Add a `Photo` field called *Evidence*.
3. Click **Add Rule** under Smart Logic.
4. Set the condition: **IF** `Inspection Status` == `Needs repair` **THEN** show `Evidence` and make it required.

## Pro-Tips
> 💡 **Tip:** Need a field property automatically calculated based on geography? Toggle **Auto-calculate from Spatial Reference**. When your field worker drops a pin, Geova will look at intersecting polygons (like "Municipal Borders") and automatically fill the form for them!

> 💡 **Tip:** You can reorder fields intuitively by clicking the Up/Down arrows next to any field block to control what your field operators see first.

---

## Technical Architecture (For Developers)

`FormsView.js` manages field editing, ordering, conditional visibility, and cleanup as the form changes.

- **Event Delegation:** The fields list uses event delegation so controls continue to work as fields are added, removed, or reordered.
- **Field Index Mapping (`visibleIndexMap`):** The form keeps the displayed field order separate from internal field data so fields can be reordered without losing their definitions.
- **Cleanup:** Dropdown and resize/scroll listeners are registered with local cleanup handlers and removed when the view is closed.
