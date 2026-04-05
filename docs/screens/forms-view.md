---
title: Forms View (Schema Builder)
description: Exhaustive technical and user documentation for the Geova GIS Forms Builder component.
---

---
title: Forms Builder
description: Exhaustive technical and user documentation for the Geova GIS Forms Builder component.
---

# Forms Builder

## Overview
The **Forms Builder** is your specialized schema designer. Instead of asking your database administrators to write complicated SQL schemas, you interact with an intuitive drag-and-drop React interface. Whether you are building a damage-collection form for disaster zones or a tree-health matrix for global forestry tracking, this screen guarantees your field workers collect exactly the structure of data you require.

## Action Steps

### 1. Generate a New Database Schema
1. Select your target mapped layer (e.g., "Global Seismic Point Tracker").
2. Tap the blue **Add Field** button. 
3. Name the field: *Richter Scale*.
4. Lock the **Data Type** to `Number`. 
5. Select the **Checkbox** to strictly require the field. Field workers will be unable to save geometry until this is filled.

### 2. Fast-Track Import from Spreadsheets
If your project comes with a pre-defined CSV spreadsheet of `150` expected column headers:
1. Click the indigo **Import Schema** button.
2. Upload the `.csv` or `.json` file.
3. Geova silently extracts all the headers, ignores duplicates, and injects the new schema sequentially, saving hours of manual labor!

### 3. Inject Conditional Routing (Smart Logic)
Need a dynamic form that reacts to field answers?
1. Add a `Dropdown` field called *Tree Condition* (Options: *Good, Fair, Dead*).
2. Add a `Photo` field called *Evidence*.
3. Click **Add Rule** under Smart Logic.
4. Set the Condition Rule: **IF** `Tree Condition` == `Dead` **THEN** target `Evidence` and enforce `Required = True`.

## Pro-Tips
> 💡 **Tip:** Need a field property automatically calculated based on geography? Toggle **Auto-calculate from Spatial Reference**. When your field worker drops a pin, Geova will look at intersecting polygons (like "Municipal Borders") and automatically fill the form for them!

> 💡 **Tip:** You can reorder fields intuitively by clicking the Up/Down arrows next to any field block to control what your field operators see first.

---

## Technical Architecture (For Developers)

`FormsView.js` replaces brute-force `innerHTML` re-renders with surgical DOM mutation to preserve mobile battery life.

- **DOM Thrashing Eradication & Event Delegation:** Iterating 100 fields and attaching native DOM listeners instantly crashed Capacitor WebViews. The `#fields-list` uses native Event Delegation (`e.target.closest('button')`). When shifting rows natively via "Move Up", Geova executes `insertBefore` natively at a C++ browser level avoiding memory reallocation.
- **4D Temporal Data Isolation (`visibleIndexMap`):** Geova AI tracks unseen background properties (`_wasReprojected`). A runtime loop maps a `visibleIndexMap` so that developers can track systemic logic while allowing users to safely delete visual fields without causing strict-schema mismatches internally.
- **Portal Extinction:** The dropdown elements break CSS clip chains using `.portal`. If a Single Page App unmounts suddenly, portals become global memory leaks. The `teardownFormsView` traps all global hooks (Resize, Scroll) in `localCleanups` detaching them safely during route navigation.
