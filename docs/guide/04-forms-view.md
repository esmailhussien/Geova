---
title: Forms & Smart Logic
description: Build Mapplex forms with required fields, Lexicon picklists, spatial auto-fill, attachments, and conditional rules.
---

# Module 04: Forms & Smart Logic

> Forms define the attributes collected for each layer. When a user draws or edits a feature, the related form appears for data entry. This module covers field setup, schema import, spatial auto-fill, Lexicon picklists, and Smart Logic rules.

---

## 1. Navigating to the Form Builder

1. Tap **Forms** in the bottom navigation.
2. The **Form Builder** screen opens with a layer selector at the top.
3. Select a layer from the **"Select mapped Layer to configure"** dropdown. The builder loads all existing fields for that layer.

> You must create at least one layer in the Layer Manager before you can build a form. If no layers exist, you'll see a prompt to navigate to the Layer Manager.

---

## 2. Field Types

Tap **+ Add Field** to open the **Configure New Field** dialog. The following field types are available:

| Type | Icon | Description |
|------|------|-------------|
| **Text (Single Line)** | 📝 | Free-text input for names, descriptions, IDs |
| **Number** | 🔢 | Numeric-only input for measurements, counts, ratings |
| **Dropdown (Manual Options)** | 📋 | A picklist with comma-separated values you define (e.g., "Good, Fair, Poor") |
| **Lexicon Picklist** | 📖 | A shared, reusable picklist from the project-wide Lexicon registry *(Pro)* |
| **Date Picker** | 📅 | Calendar date selector |
| **Checkbox (True/False)** | ☑️ | Boolean toggle for yes/no questions |
| **Photo (Camera)** | 📷 | Single photo capture using the device camera |
| **Gallery (Multiple Images)** | 🖼️ | Multi-photo gallery with carousel support *(Pro)* |
| **Attachment (PDF/File)** | 📎 | File attachment support for documents |
| **Auto-Geometry** | 🌐 | Automatically computed from the feature's geometry: coordinates (for points), length (for lines), or area (for polygons) — no manual input needed |

### Configuring a Field

For each field, you can set:

- **Field Label** — The visible name shown during data entry (e.g., "Asset Condition")
- **Data Type** — Selected from the table above
- **Required** — Check "This field is strictly required" to prevent saving a feature without this value
- **Dropdown Options** — For Dropdown type: enter comma-separated values (e.g., "Good, Fair, Poor")

> **Data Type Lock:** Once a field has collected data, its data type is locked to protect existing data integrity. You'll see a lock icon and a message. To change the type, delete and recreate the field.

---

## 3. Spatial Auto-Fill (Reference Layers)

Spatial Auto-Fill populates a field value by comparing the collected feature with another reference layer. In practice, Mapplex looks up the reference polygon that contains the feature location and copies one property from that polygon into the form.

This means the reference is another layer in the project, not a new overlay layer created by the form. For example, a streetlight point can copy `district_name` from the district polygon that contains it.

1. In the Add Field dialog, check **"Auto-calculate from Spatial Reference"**.
2. Two new dropdowns appear:
   - **Reference Layer** — Select a polygon layer that contains background zones (e.g., "Zoning Districts", "Soil Types").
   - **Extract Property** — Select which property from the reference layer to extract (e.g., "Zone_Name", "Soil_Class").

When a field worker draws a point inside a reference polygon, the form auto-fills with the matching property value. For line and polygon features, Mapplex uses the feature centroid for the lookup, so the value comes from the reference polygon containing the feature's center.

> **Example:** A project includes parcel polygons with a `Zone_Name` attribute. When a field worker places an inspection point inside a parcel, the "Zoning District" field fills with the matching zone value.

> **Important:** Spatial Auto-Fill is a form lookup, not a full overlay analysis. It does not split geometry or calculate intersection area; it copies the selected attribute from the matching reference feature.

---

## 4. Importing a Schema

Instead of building a form from scratch, import an existing schema:

1. Tap the **Import Schema** button (top-right of the Form Builder).
2. Select a file:
   - `.json` / `.geojson` — Extracts property keys as fields
   - `.csv` — Uses column headers as fields
   - `.kmz` / `.kml` — Extracts attribute fields from KML data
   - `.gpkg` — Reads columns from a GeoPackage table
3. The system parses the file, generates form fields matching the source schema, and loads them into the builder.

---

## 5. Managing Fields

Once fields are created, they appear as cards in the **Configured Fields** list. Each card shows:

- Field label and data type
- Required badge (red asterisk) if the field is strictly required
- **Edit** — Modify the field's label, options, or settings
- **Delete** — Remove the field (with confirmation)

### Auto-Save

The Form Builder auto-saves changes after a short delay. A status message shows:
- **"Unsaved changes"** — A change is waiting to be saved
- **"Saving..."** — Save in progress
- **"All changes saved"** — The latest changes were saved

---

## 6. The Lexicon Panel (Project-Wide Picklists)

The **Lexicon** panel appears above the form builder. It's a project-wide registry of reusable dropdown lists (coded domains).

### Why Use Lexicons?

If three layers all need a "Material Type" dropdown with the same options, create one Lexicon and link it to each field. Updating the Lexicon updates the linked picklists.

### Linking a Field to a Lexicon

When creating a **Dropdown** field, you'll see a toggle: **"Link to Lexicon"**:

1. Toggle it ON.
2. Select a Lexicon from the **Select Lexicon** dropdown.
3. A preview of the Lexicon's values appears.
4. Save the field — it now pulls its options from the Lexicon registry.

### Lexicon Suggestions

When a field label matches an existing Lexicon name, a suggestion banner appears:
> **"Building Type"** - 12 items - Linked to 2 fields
> **[Link it]**

Tap **Link it** to connect the field to the matching Lexicon.

### Upgrade to Lexicon

If you have an existing text field and want to convert it to a Lexicon picklist, the **"Upgrade to Lexicon Picklist"** button appears. This is a safe upgrade — existing text values are preserved as picklist selections.

---

## 7. Smart Logic (Conditional Rules)

Smart Logic creates conditional form behavior — showing or hiding fields based on another field's value.

### Mode Toggle

At the top of the Smart Logic panel, toggle between:
- **Simple** — AI-assisted natural language rule creation
- **Advanced** — Manual rule configuration

### Simple Mode: AI-Assisted Rules

1. Type a rule in plain English in the prompt bar:
   > *"If Building Type is Residential, show the Number of Floors field"*
2. Tap **Generate** (costs **1 AI credit**).
3. Geova AI drafts the conditional rule and adds it to the rules list.
4. Review and adjust if needed.

### Advanced Mode: Manual Rules

1. Tap **+ Rule** to add a new rule.
2. Configure:
   - **Source Field** — The field to watch for changes (e.g., "Building Type")
   - **Condition** — The matching condition (equals, not equals, etc.)
   - **Target Field** — The field to show/hide when the condition is met
   - **Action** — Show or hide the target field

### How It Works in the Field

When a field worker fills out a form, Smart Logic evaluates the rules as values change. Fields appear or disappear based on the worker's selections, keeping the form shorter and more relevant.

> **Example:** A utility inspection form includes fields for both gas and water assets. Smart Logic can show gas-specific fields only when "Gas" is selected and water-specific fields only when "Water" is selected.

---

## 8. Role-Based Access

Form editing is restricted by role:

| Role | Can Edit Forms? | Can View Forms? |
|------|----------------|-----------------|
| **Owner** | ✅ | ✅ |
| **Admin** | ✅ | ✅ |
| **Editor** | ✅ | ✅ |
| **Collector** | ❌ | ✅ (read-only) |
| **Viewer** | ❌ | ✅ (read-only) |

Read-only users see the form structure but all editing controls (Add Field, Import Schema, Smart Logic) are hidden.

---

> **Next:** Proceed to [Module 05: Data & Sync](./05-data-view.md) to export, import, and synchronize your collected data.
