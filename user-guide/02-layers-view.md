# Module 02: Layers & Symbology Management

> Layers are the foundation of your spatial data. Each layer represents a distinct theme (streetlights, parcels, pipelines) with its own geometry type, visual style, and form schema. This module covers creating, styling, and classifying layers.

---

## 1. Creating a New Layer

1. Navigate to the **Layer Manager** (tap "Layers" in the bottom navigation).
2. Tap the **+ New Layer** button (top-right).
3. Fill in the **Define New Layer** dialog:
   - **Layer Name** — A descriptive name (e.g., "Street Lights", "Water Pipes").
   - **Geometry Type** — Choose one from the dropdown:
     - **Point** *(Pins, Items, Trees)* — For discrete single-location assets.
     - **Line** *(Pipes, Roads, Cables)* — For continuous linear features.
     - **Polygon** *(Areas, Parcels, Zones)* — For enclosed boundaries.
   - **Marker Color** — Select from the curated palette (11 colors), or tap the **+** ring to pick any custom color using the color wheel.
   - **Polygon Fill Color** *(Polygon type only)* — Choose an internal area color. Toggle the **Hollow** checkbox to make the polygon transparent (outline only).
   - **Marker Icon** *(Point type only)* — Tap to open the **Icon Picker** with searchable categories: Location, Nature, Infrastructure, Transport, Emergency, Buildings, and more.
4. Tap **Create Layer**.

The new layer instantly appears in the Layer Manager with a card showing its geometry type, symbology preview, and whether a form is attached.

> **Example:** A telecom company creates three layers: "Splice Enclosures" (Point with an electrical icon), "Fiber Cables" (Line in blue), and "Service Areas" (Polygon with transparent purple fill).

---

## 2. Layer Card Interface

Each layer card displays:

| Element | Description |
|---------|-------------|
| **Layer Name** | Tap to select this layer and jump to the Map View for drawing |
| **Geometry Badge** | Shows `Point`, `LineString`, or `Polygon` |
| **Form Badge** | Green ✅ `Form` if a form is attached; amber ⚠️ `No Form` if not |
| **Symbology Preview** | Visual swatch showing current marker/line/polygon style |
| **👁️ Visibility Toggle** | Show/hide the layer on the map |
| **📍 Zoom to Layer** | Fly the map to the bounding extent of this layer's features |
| **🎨 Style** | Open the Edit Layer Style modal |
| **📖 Schema** | Open the Data Dictionary modal |
| **🗑️ Delete** | Remove the layer and all its features (with confirmation) |

### Reference Layers

Reference layers (imported background polygons used for spatial auto-fill) appear with an orange theme and a "Background KMZ" badge. They support visibility toggling and deletion but don't accept new feature drawing.

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

When enabled, the map engine evaluates every geometry against its attached form schema. Features where **all form fields are filled** turn green on the map. Features with missing data keep their original color.

> **Example:** A supervisor activates the Completion Indicator on a fire hydrant layer. During inspections, any hydrant point that still appears gray means the field crew forgot to log the water pressure reading. The supervisor can scan the map at a glance and identify incomplete work.

### How to Enable

1. Open the **Edit Layer Style** modal.
2. Scroll to **Completion Indicator**.
3. Toggle the switch: *"Turn features green when all form fields are filled."*
4. Tap **Save Style**.

---

## 5. Text Labels on the Map

Display readable text directly on map features — no need to tap each one to see its name.

### How to Enable

1. Open the **Edit Layer Style** modal.
2. Scroll to **Show Feature Labels**.
3. Toggle the switch on.
4. A **Label Field** dropdown appears. Select which attribute to render (e.g., `Shelter_Name`, `Road_ID`). Choose **Auto-detect** to let the engine pick the best field.
5. Tap **Save Style**.

> **Example:** In a disaster shelter map, enabling labels on the `Shelter_Name` field renders "Northside Red Cross" directly above each pin — dispatchers can read locations without clicking.

---

## 6. Field-Based Symbology (Classification)

Classification transforms a generic single-color map into a data-driven visual story. Instead of all features being the same color, the engine reads a property value and assigns colors dynamically.

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

> **Example:** A tax assessor uses Graduated classification on `Tax_Value`:
> - Pale green = parcels under $100K
> - Dark green = parcels over $5M
>
> Instantly, the map tells a visual story of property wealth distribution.

---

## 7. Data Dictionary (Schema)

The **Schema** button on each layer card opens the **Data Dictionary** modal. This is where you teach the AI and analytics engine about your field names.

For each field in your layer's schema, you can configure:

| Setting | Purpose |
|---------|---------|
| **Alias** | Human-readable name for the field (e.g., `field_abc123` → "Tree Height") |
| **Unit** | Measurement unit (e.g., "meters", "PSI", "hectares") |
| **Role** | Semantic category: Name, Category, Population, Area, Capacity, Date, Status, Slope, Amount, Identifier, Code, Notes |
| **Type Hint** | Data type override: Auto, Text, Number, Date, Category, Yes/No |

A **Readiness Score** at the top shows what percentage of fields have been configured (e.g., "8/12 fields taught — 67%"). Technical fields like `fid`, `objectid`, and `sys_` prefixes are automatically excluded from teaching.

> **Why does this matter?** When you ask Geova AI *"Show me all trees with height > 10"*, the AI needs to know that your database field `field_x47` actually means "Tree Height" and is measured in meters. The Data Dictionary provides this mapping.

---

## 8. Case Study: Annual Fire Hydrant Inspections

**Challenge:** A municipal water department needs to inspect 5,000 fire hydrants. Field crews are prone to skipping the flow-rate reading. The supervisor needs real-time visibility into progress.

**Solution using Mapplex Layers:**

1. **Create the Layer:** A **Point** layer named "Hydrants 2026" — points are ideal for exact curb locations.

2. **Style the Baseline:** Open Style → select the **Water Drop** icon → set marker color to faint gray.

3. **Enable Labels:** Toggle on **Show Feature Labels** → target the `Cross_Street` field. The map now reads "Main & 5th" directly over each pin.

4. **Force Compliance:** Activate the **Completion Indicator**, tying it to the mandatory "Flow Rate (PSI)" form field. If a worker flushes the hydrant but forgets the PSI, the icon stays gray. Once entered, it turns green.

5. **Find Problems:** Switch symbology to **Graduated** → target `Flow_Rate_PSI` → select **Red-Yellow-Green** ramp → Generate Bins. Any point below 20 PSI glows red. A cluster of red dots in one neighborhood reveals a probable water main leak.

---

> **Next:** Proceed to [Module 03: The Map Engine](./03-map-view.md) to start drawing, measuring, and collecting data on the map.
