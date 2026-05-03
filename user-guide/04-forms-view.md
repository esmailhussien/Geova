# Module 04: Forms & Smart Logic

> Forms define what data each layer collects. Every time you draw a feature on the map, the form's fields appear for data entry. This module covers building schemas, importing them, and creating Smart Logic rules.

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

This powerful feature auto-populates a field value based on the spatial location of the drawn feature.

1. In the Add Field dialog, check **"Auto-calculate from Spatial Reference"**.
2. Two new dropdowns appear:
   - **Reference Layer** — Select a polygon layer that contains background zones (e.g., "Zoning Districts", "Soil Types").
   - **Extract Property** — Select which property from the reference layer to extract (e.g., "Zone_Name", "Soil_Class").

When a field worker draws a point inside a reference polygon, the form auto-fills with the matching property value.

> **Example:** Your project has a reference layer of land parcels with a `Zone_Name` property. When a field worker places a point inside a parcel, the "Zoning District" form field auto-fills with "Residential Zone A" — no manual lookup needed.

---

## 4. Importing a Schema

Instead of building a form from scratch, import an existing schema:

1. Tap the **📤 Import Schema** button (top-right of the Form Builder).
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

The Form Builder uses an **auto-save engine** with a 1.5-second debounce. Every change you make (adding, editing, deleting, or reordering fields) is automatically saved. A floating status pill at the bottom shows:
- ✏️ **"Unsaved changes"** — You've made changes (amber)
- 🔄 **"Saving…"** — Save in progress (blue spinner)
- ✅ **"All changes saved"** — Confirmation (green, fades after 2.5s)

---

## 6. The Lexicon Panel (Project-Wide Picklists)

The **Lexicon** panel appears above the form builder. It's a project-wide registry of reusable dropdown lists (coded domains).

### Why Use Lexicons?

If three layers all need a "Material Type" dropdown with the same options (PVC, Steel, HDPE, Cast Iron), creating a Lexicon once and linking it to all three fields keeps them synchronized. Change the list in one place, it updates everywhere.

### Linking a Field to a Lexicon

When creating a **Dropdown** field, you'll see a toggle: **"Link to Lexicon"**:

1. Toggle it ON.
2. Select a Lexicon from the **Select Lexicon** dropdown.
3. A preview of the Lexicon's values appears.
4. Save the field — it now pulls its options from the Lexicon registry.

### Proactive Lexicon Suggestion

When typing a field label that matches an existing Lexicon name, a suggestion banner appears:
> 💡 **"Building Type"** — 12 items · Linked to 2 fields
> **[Link it]**

Tap **Link it** to instantly connect the field to the matching Lexicon.

### Upgrade to Lexicon

If you have an existing text field and want to convert it to a Lexicon picklist, the **"Upgrade to Lexicon Picklist"** button appears. This is a safe upgrade — existing text values are preserved as picklist selections.

---

## 7. Smart Logic (Conditional Rules)

Smart Logic creates conditional form behavior — showing or hiding fields based on another field's value.

### Mode Toggle

At the top of the Smart Logic panel, toggle between:
- **Simple** — AI-assisted natural language rule creation
- **Advanced** — Manual rule configuration

### Simple Mode: AI-Generated Rules

1. Type a rule in plain English in the **Magic Prompt Bar**:
   > *"If Building Type is Residential, show the Number of Floors field"*
2. Tap **Generate** (costs **1 AI credit**).
3. The AI creates the conditional rule and adds it to the rules list.
4. Review and adjust if needed.

### Advanced Mode: Manual Rules

1. Tap **+ Rule** to add a new rule.
2. Configure:
   - **Source Field** — The field to watch for changes (e.g., "Building Type")
   - **Condition** — The matching condition (equals, not equals, etc.)
   - **Target Field** — The field to show/hide when the condition is met
   - **Action** — Show or hide the target field

### How It Works in the Field

When a field worker fills out a form, Smart Logic evaluates the rules in real-time. Fields appear or disappear based on the worker's selections, keeping the form clean and relevant.

> **Example:** A utility inspection form has 20 fields, but only 8 apply to gas mains and a different 8 apply to water mains. Smart Logic hides irrelevant fields based on the "Utility Type" selection, preventing confusion and data entry errors.

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
