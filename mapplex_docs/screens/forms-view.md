---
title: Forms View (Schema Builder)
description: Exhaustive technical and user documentation for the Geova GIS Forms Builder component.
---

# Forms View: Exhaustive Documentation

## 1. Executive Overview
The **Forms View** (`FormsView.js`) is Geova's specialized Schema Builder. It allows Database Administrators and Field Managers to map strictly-typed data collection interfaces to any instantiated GIS layer.

Instead of writing SQL schemas, administrators interact with a highly optimized, drag-and-drop React-style DOM interface. Whether building a damage-collection form for **Global Seismic Activity** or a tree-health matrix for **Global Deforestation**, the Forms View guarantees military-grade data integrity, dynamic Smart Logic routing, and automatic spatial reference correlation.

---

## 2. UI/UX Breakdown (Microscopic)

### Form Builder Workspace
- **Layer Select Dropdown (Top):** Utilizes Geova's "Portal" architecture. It breaks out of `overflow: hidden` bounding boxes by mounting floating drop-downs directly to the document body, immune to CSS clipping.
- **Configured Fields List (`#fields-list`):** A vertically stacked array of property cards (e.g., *Label: Magnitude*, *Type: Number*). Each row sports:
  - **Visibility Eye:** Toggles whether field workers see the field, or if it remains hidden as an internal tracker.
  - **Vertical Reorder Carrots:** Enables `O(1)` node-shifting (moves elements Up/Down).
  - **Edit (Pencil) / Delete (Trash):** Exposes conditional destructive workflows, wrapped in a frosted-glass confirmation modal to prevent accidental data-loss.

### Smart Logic & Auto-Geometry Panel
- **Smart Logic Button (Indigo):** Injects Mapbox GL-expressions into the form. (e.g., *IF `Magnitude` > 7.0 THEN `Require Photo` = True*). An active logic-badge counter renders in Violet on the button.
- **Auto-Geometry Integration:** A toggle on the field modal (`Auto-calculate from Spatial Reference`). If a field worker drops a pin near **National Highway Networks**, Geova queries a background spatial polygon layer (e.g., "Municipal Borders") and automatically maps the exact intersection property directly into the form field, skipping manual entry.

---

## 3. User Guide

### Step 1: Generating a New Data Schema
1. Select a mapped layer (e.g., "Global Seismic Point Tracker").
2. Tap the blue **Add Field** modal. 
3. Name the field: *Richter Scale*.
4. Lock the **Data Type** to `Number`. 
5. Select the **Checkbox** to strictly require the field.

### Step 2: Injecting Conditional Form Routing (Smart Logic)
When tracking **Global Deforestation**:
1. Add a `Dropdown (Options)` field called *Tree Condition* (Options: *Good, Fair, Dead*).
2. Add a `Photo (Camera)` field called *Evidence*.
3. Click **Add Rule** under Smart Logic.
4. Set the Condition Rule: **IF** `Tree Condition` == `Dead` **THEN** target `Evidence` and enforce `Required = True`.
5. Geova enforces a strictly validated pre-flight check. If the rule is saved with blank target drop-downs, the form blocks the save and alerts the user `Smart Logic Rule 1 is incomplete`.

### Step 3: Advanced Smart Logic Routing Examples (All Paths)
Smart Logic supports complex Mapbox GL conditional trees. Below are examples of all supported conditional routing paths:

1. **Single Route (`IF`)**
   - *Scenario:* **Global Seismic Activity** 
   - *Logic:* `IF "Magnitude" > 7.0 THEN "Emergency Response Dispatched" (Hide = False)`
2. **AND Route (`&&` - Multi-conditional Gating)**
   - *Scenario:* **National Highway Networks**
   - *Logic:* `IF "Surface Type" == 'Gravel' && "Speed Limit" > 80 THEN "Risk Warning Flag" (Set Value = 'High Risk')`
3. **OR Route (`||` - Fallback Branching)**
   - *Scenario:* **Global Deforestation**
   - *Logic:* `IF "Canopy Cover %" < 10 || "Burn Scar Detected" == True THEN "Requires Satellite Verification" (Required = True)`
4. **Nested Route (Combined `&&` / `||`)**
   - *Scenario:* **Global Oceanic Spills**
   - *Logic:* `IF "Spill Volume (Barrels)" > 10000 && ("Wind Speed (Knots)" > 30 || "Current Proximity to Shore (Nm)" < 5) THEN "Mobilize Fleet" (Required = True)`

### Step 4: Fast-Track Imports
If a project comes with a pre-defined CSV spreadsheet of `150` expected column headers:
1. Click the indigo **Import Schema** button.
2. Upload the `.csv` or `.json`.
3. Geova silently extracts the headers, avoids duplicating any existing fields by using Label collision-detection, and injects the new types sequentially.

---

## 4. Technical Architecture (For Developers)

`FormsView.js` replaces brute-force `innerHTML` re-renders with surgical DOM mutation to preserve mobile battery life.

### 1. DOM Thrashing Eradication & Event Delegation
Previously, iterating 100 fields and attaching `addEventListener` instantly crashed capacitor mobile web-views.
- **Single Parent Listener:** The `#fields-list` uses native Event Delegation (`e.target.closest('button[data-index]')`).
- **DOM Reordering:** When clicking "Move Up", Geova does *not* wipe the UI. It runs `[fields[idx-1], fields[idx]] = [fields[idx], fields[idx-1]];` then executes a highly performant `fieldsList.insertBefore(row, prevRow)` to naturally shift the DOM node at a C++ browser level without memory reallocation.

### 2. 4D Temporal Data Isolation (`visibleIndexMap`)
Geova AI tracks background analytics (e.g., `_wasReprojected` boolean properties). These properties are stored in the schema but must stay hidden from Form Builders.
- A runtime loop strips out system flags (`f.isSystem`), returning `visibleFields`.
- Crucially, it maps `visibleIndexMap` so if a user clicks "Delete Rule 2 (visually)", the engine mathematically traces backward through the map to correctly splice `Rule 3` from the actual strict `currentFields` data payload.

### 3. Ghost Portal Extinction (DOM cleanup)
Single Page Applications (SPAs) notoriously stack global window event hooks on dropdown portal elements.
- The `teardownFormsView` architecture tracks all globally affixed scrolling window calculations (Resize, Scroll, Escape presses) inside a module-level `localCleanups` array. 
- When the Route Manager unmounts the form, every global watcher mathematically detonates, preventing overlapping portal zombies from leaking into the Dashboard.
