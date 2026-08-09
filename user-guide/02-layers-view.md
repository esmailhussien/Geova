---
title: Layers & Symbology
description: Create Mapplex layers, manage geometry types, apply data-driven styles, and configure the Data Dictionary.
---

# Module 02: Layers & Symbology

> Layers organize spatial data by theme. Each layer has a geometry type, visual style, and optional form schema. This module covers creating layers, styling them, labeling features, and applying field-based symbology.

---

## 1. Creating a New Layer

1. Navigate to the **Layer Manager** (tap "Layers" in the bottom navigation).
2. Tap the **+ New Layer** button (top-right).
3. Fill in the **Define New Layer** dialog:
   - **Layer Name** — A descriptive name (e.g., "Street Lights", "Water Pipes").
   - **Geometry Type** — Choose one from the dropdown:
     - **Point** *(pins, assets, trees)* — For discrete single-location features.
     - **Line** *(pipes, roads, cables)* — For continuous linear features.
     - **Polygon** *(areas, parcels, zones)* — For enclosed boundaries.
   - **Marker Color** — Select from the curated palette (11 colors), or tap the **+** ring to pick any custom color using the color wheel.
   - **Polygon Fill Color** *(Polygon type only)* — Choose an internal area color. Toggle the **Hollow** checkbox to make the polygon transparent (outline only).
   - **Marker Icon** *(Point type only)* — Tap to open the **Icon Picker** with searchable categories: Location, Nature, Infrastructure, Transport, Emergency, Buildings, and more.
4. Tap **Create Layer**.

The new layer appears in the Layer Manager with its geometry type, style preview, and form status.

> **Example:** A fiber survey project might use three layers: "Splice Enclosures" as points, "Fiber Routes" as lines, and "Service Areas" as polygons. Keeping these themes separate makes forms, styling, and exports easier to manage.

---

## 2. Layer Card Interface

Each layer card displays:

| Element | Description |
|---------|-------------|
| **Layer Name** | Tap to select this layer and jump to the Map View for drawing |
| **Geometry Badge** | Shows `Point`, `LineString`, or `Polygon` |
| **Form Badge** | Green ✅ `Form` if a form is attached; amber ⚠️ `No Form` if not |
| **Symbology Preview** | Visual swatch showing current marker/line/polygon style |
| **Visibility Toggle** | Show or hide the layer on the map |
| **Zoom to Layer** | Move the map to the layer's feature extent |
| **Style** | Open the Edit Layer Style modal |
| **Schema** | Open the Data Dictionary modal |
| **Delete** | Remove the layer and all its features after confirmation |

### Reference Layers

Reference layers are imported background polygons used for spatial auto-fill. They support visibility toggling and deletion, but they are not drawing layers.

---

## 3. Editing Visual Styles

1. Tap the **🎨 Style** button on any layer card.
2. The **Edit Layer Style** modal opens with these options:

### Marker / Line Color

Select from the palette or use a custom color via the **+** ring.

### Polygon Fill Color

*(Polygon layers only)* Set an internal area color, or check **Hollow** for a transparent outline.

### Marker Icon

*(Point layers only)* Tap to open the searchable Icon Picker. Browse categories like Nature (trees, water), Infrastructure (power, construction), Buildings, Transportation, and Hazards.

---

## 4. Completion Indicator

The **Completion Indicator** toggle is inside the Edit Layer Style modal.

When enabled, the map engine evaluates every feature against its attached form schema. Features where **all required form fields are filled** turn green on the map. Features with missing required data keep their original color.

> **Example:** A supervisor enables the Completion Indicator on a hydrant inspection layer. Hydrants with complete required fields turn green; hydrants missing a required inspection value remain in the layer's normal color.

### How to Enable

1. Open the **Edit Layer Style** modal.
2. Scroll to **Completion Indicator**.
3. Toggle the switch: *"Turn features green when all form fields are filled."*
4. Tap **Save Style**.

---

## 5. Text Labels on the Map

Display selected attribute values directly on the map so users do not need to tap every feature to identify it.

### How to Enable

1. Open the **Edit Layer Style** modal.
2. Scroll to **Show Feature Labels**.
3. Toggle the switch on.
4. A **Label Field** dropdown appears. Select which attribute to render (e.g., `Shelter_Name`, `Road_ID`). Choose **Auto-detect** to let the engine pick the best field.
5. Tap **Save Style**.

> **Example:** On an inspection map, labeling the `Asset_ID` field lets reviewers identify hydrants, poles, or valves without opening each feature popup.

---

## 6. Field-Based Symbology (Classification)

Classification styles features by attribute values. Instead of showing a layer in one color, Mapplex reads a selected field and applies colors based on the configured rules.

### Selecting a Classification Field

1. In the **Edit Layer Style** modal, scroll to **Field-Based Symbology**.
2. Open the **Color by Field** dropdown.
3. Select a property from your layer's schema (e.g., `Zoning_Type`, `Pressure_PSI`).

### Choosing a Symbology Type

A toggle switch appears with two options:

#### Categorical (Qualitative)

Best for **text/string** properties. The system scans all unique values and generates a color rule for each:

- `Residential` → Yellow
- `Commercial` → Red
- `Industrial` → Purple

You can manually add rules with the **+ Add Rule** button and customize each rule's value and color.

#### Graduated (Quantitative)

Best for **numeric** data. Configure:

| Setting | Options |
|---------|---------|
| **Method** | **Quantile** (equal feature count per bin), **Equal Interval** (consistent numeric steps), **Natural Breaks / Jenks** (clusters around natural data gaps) |
| **Classes** | Number of bins (2–10) |
| **Color Ramp** | Blues, Reds, Greens, Yellow-Orange-Red (Heat), Red-Yellow-Green (Diverging) |

Tap **Generate Bins** to auto-compute the classification rules.

### Hide Unclassified

Toggle **Hide Unclassified** to remove features from the map that don't match any classification rule. Useful for cleaning up noise when you only care about specific categories.

> **Example:** A water utility uses Graduated classification on `Flow_Rate_PSI`:
> - Red = low pressure
> - Yellow = expected range
> - Green = high or acceptable pressure
>
> This helps reviewers spot pressure issues without opening each record.

---

## 7. Data Dictionary (Schema)

The **Schema** button on each layer card opens the **Data Dictionary** modal. Use it to document what each field means so filters, reports, and Geova AI queries are easier to interpret.

For each field in your layer's schema, you can configure:

| Setting | Purpose |
|---------|---------|
| **Alias** | Human-readable name for the field (e.g., `field_abc123` → "Tree Height") |
| **Unit** | Measurement unit (e.g., "meters", "PSI", "hectares") |
| **Role** | Semantic category: Name, Category, Population, Area, Capacity, Date, Status, Slope, Amount, Identifier, Code, Notes |
| **Type Hint** | Data type override: Auto, Text, Number, Date, Category, Yes/No |

A **Readiness Score** at the top shows what percentage of fields have been configured, such as "8/12 fields configured - 67%". Technical fields like `fid`, `objectid`, and `sys_` prefixes are automatically excluded.

> **Why does this matter?** Imported files often use short or unclear field names such as `field_x47` or `ht_m`. The Data Dictionary lets you record that the field means "Tree Height" and uses meters, which improves filtering, reporting, and AI-assisted queries.

---

## 8. Example: Annual Fire Hydrant Inspections

**Need:** A municipal water department needs to inspect hydrants and make sure each record includes a flow-rate reading.

**Solution using Mapplex Layers:**

1. **Create the Layer:** A **Point** layer named "Hydrants 2026" — points are ideal for exact curb locations.

2. **Style the Baseline:** Open Style, select a water-related icon, and set the marker color to gray.

3. **Enable Labels:** Toggle on **Show Feature Labels** and target the `Cross_Street` field. The map shows labels such as "Main & 5th" over each point.

4. **Track Completion:** Mark "Flow Rate (PSI)" as required in the form and enable the **Completion Indicator**. Points remain gray until required values are entered.

5. **Review Results:** Switch symbology to **Graduated**, target `Flow_Rate_PSI`, select a red-yellow-green ramp, and generate bins. Low-pressure points stand out for follow-up review.

---

> **Next:** Proceed to [Module 03: Map View](./03-map-view.md) to start drawing, measuring, and collecting data on the map.
