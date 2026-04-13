# Module 02: Layers & Symbology Management

Welcome to the Layer Engine. If the Dashboard is your command center, the Layers Manager is your artistic and organizational palette. Managing spatial data requires breaking the real world down into logical, stylized themes (Layers) so that complex environments can be modeled, queried, and understood at a glance.

---

## 1. Creating New Layers (Point, Line, Polygon)

Before importing heavy datasets, you often need to define explicit, empty schemas ready for field data collection. Choosing the correct intrinsic geometry type is the foundational step of any GIS project.

### The "Why": Real-World Value
Imagine a telecommunication firm building a fiber-optic network across a city. The network relies on strict topological rules. You need "Points" to represent individual splice enclosures and junction boxes. You need "Lines" to represent the actual fiber optic cables running cleanly down streets. You need "Polygons" to represent the service boundary of a cell tower. If a field technician attempts to map a linear road using a single point, routing calculations and distance algorithms will immediately break. Selecting the correct geometry ensures architectural integrity.

### The "How": Step-by-Step
1. Navigate to the **Layers Manager** pane on the left-hand side of your interface.
2. Click the **[+] Add Layer** or **Create Layer** button to open the initialization dialog.
3. Choose your Geometry Type:
   - **Point:** For discrete, single-location assets with exact coordinates (e.g., streetlights, manholes, trees).
   - **Line (Polyline):** For continuous linear infrastructure (e.g., pipelines, roads, utility cables).
   - **Polygon:** For areas, boundaries, and zoning enclosed by perimeters (e.g., land parcels, flood zones, forestry plots).
4. Provide a distinct layer name and click to instantiate it. It will instantly mount to your active project’s layer stack.

---

## 2. Styling Tools: Editing Visual Styles

A map filled with unstyled data is chaotic and unreadable. You must assign distinct visual grammar to your vectors so end-users can process spatial realities instantaneously.

### The "Why": Real-World Value
If you are managing a municipal water grid with 10,000 underground pipes, a map of uniform black lines tells you nothing. By assigning precise styling, you dictate that fresh drinking water is a thick blue line, gravity-fed wastewater is an orange dashed line, and pressurized reclaimed water is purple. Instantly, an engineer can look at the chaotic map and identify critical bypass routes or vulnerability zones without clicking a single feature.

### The "How": Step-by-Step
1. On the specific layer card in the **Layers Manager**, click the **Style** button (look for the palette icon).
2. The **Edit Layer Style Modal** will appear.
3. Depending on your geometry type, you can configure:
   - **Marker Color:** Choose custom colors using the color ring or select from the curated palette.
   - **Polygon Fill:** Set an internal area color, or toggle the **Hollow** checkbox to create transparent boundary outlines.
   - **Marker Icon:** For point layers, select from an extensive library including Location Pins, Trees, Water Drops, Buildings, or Hazards.

---

## 3. Advanced Visuals: Displaying Text Labels

Colors and shapes are powerful, but sometimes you need explicit, readable text directly on the map canvas to prevent users from constantly opening popup menus.

### The "Why": Real-World Value
In a frantic disaster response scenario, a map of hurricane evacuation shelters isn't optimal if emergency dispatchers can't read the shelter's name and capacity directly on the map. Text labels prevent dispatchers from having to click every single dot to find the "Northside Red Cross" location. Rendering labels straight to the canvas saves critical seconds when lives are on the line.

### The "How": Step-by-Step
1. Inside the **Edit Layer Style Modal**, scroll down to the **Show Feature Labels** section.
2. Toggle the switch to activate on-map text rendering.
3. A new **Label Field** dropdown will dynamically appear.
4. Open the dropdown to select which specific tabular attribute from your Data Dictionary you want rendered (e.g., selecting the `Shelter_Name` column). The engine can also auto-detect the best field.

---

## 4. Data Quality: Completion Indicator

Field data collection is notorious for missing variables. You need an automated visual mechanism to ensure surveyors are actually filling out their digital forms before they leave the site. 

### The "Why": Real-World Value
Imagine sending 100 inspectors into the field to survey damaged buildings. If 50% of the points come back missing critical variables, your database is compromised. The **Completion Indicator** automatically turns features green on the map *only* when all linked form fields are successfully filled out. A project manager can instantly scan the map from a bird's-eye view; any dots that aren't green require immediate correction by the field crew.

### The "How": Step-by-Step
1. Inside the **Edit Layer Style Modal**, locate the **Completion Indicator** section.
2. Toggle the switch to "Turn features green when all form fields are filled".
3. Once you save the style, the map's rendering engine evaluates every geometry against its attached data schema. As workers finish filling out their forms, you will watch the map organically turn green, verifying project completeness in real-time.

---

## 5. Classification Systems: Quantitative vs. Qualitative

When a layer carries deep tabular data, applying a single universal color wastes potential. Classification engines evaluate the background data and dynamically render colors based on data values, turning a generic map into a profound analytical story.

### The "Why": Real-World Value
Consider two different city agencies looking at the exact same parcel of land polygons:
*   **Qualitative (Categorical):** The Zoning Board uses Qualitative classification on the "Zoning_Type" field. The engine reads categorical text, painting Residential lots yellow, Commercial lots red, and Industrial lots purple to show strict boundaries.
*   **Quantitative (Numeric):** Meanwhile, the Tax Assessor's office uses Quantitative classification on the "Tax_Asset_Value" field. The engine reads numeric ranges, applying a graduated color scale where pale green represents parcels under $100k, and deep dark green represents parcels over $5M. 

### The "How": Step-by-Step
1. Inside the **Edit Layer Style Modal**, locate the **Field-Based Symbology** section.
2. Select your target property from the **Color by Field** dropdown.
3. Choose your Symbology Type using the toggle switch:
   - **Categorical (Qualitative):** Best for text properties. The system automatically scans unique string values and generates distinct color rules for each category.
   - **Graduated (Quantitative):** Best for numeric data. Define the number of visual 'classes' (bins) and choose a statistical method: **Quantile**, **Equal Interval**, or **Natural Breaks**. Then, select a sequential color ramp (like 'Blues', 'Reds', or 'Red-Yellow-Green').
4. You can also toggle **Hide Unclassified** to clean the map of any geometries that don't match your new rules.
5. Click **Save Style** to publish the dynamic rendering rules.

---

## 6. Case Study: Everyday Field Workflow

To truly understand the practicality of the Layer Engine, let’s look at a gritty, everyday scenario: **Annual Fire Hydrant Inspections**.

**The Challenge:**
A municipal water department needs to inspect and test 5,000 fire hydrants. The work is repetitive, field crews are tired, and paperwork often comes back with missing flow-rate metrics. The supervisor needs a foolproof way to track progress and identify broken hydrants instantly.

**The Solution using Geova Layers:**

1. **Creating the Layer:**
   The supervisor creates a **Point** geometry layer named *Hydrants 2026*. Points are perfect for logging the exact curb location.

2. **Styling Tools (The Visual Baseline):**
   They open the Style Configuration, select the **Water Drop Icon**, and set the base marker color to a faint gray.

3. **Advanced Visuals (Immediate Reading):**
   To help the crew in the truck navigate quickly, the supervisor toggles on **Show Feature Labels** and targets the `Cross_Street` attribute. Now, instead of guessing, the map explicitly reads "*Main & 5th*" over the pin.

4. **Data Quality (Forcing Compliance):**
   In the past, workers forgot to log the physical water pressure. The supervisor activates the **Completion Indicator**, tying it to the "Flow Rate (PSI)" mandatory form field. If a worker flushes the hydrant but forgets to type in the PSI on their tablet, the icon stays gray. Once the PSI is entered, the icon turns bright green. The supervisor can now glance at the dashboard and know every green dot is a *100% completed* job.

5. **Quantitative Classification (Finding the Problem):**
   At the end of the week, the supervisor needs to dispatch the heavy maintenance crew to fix broken hydrants. They switch the Symbology Type to **Graduated**, targeting the `Flow_Rate_PSI` numeric field. They select a **Red-Yellow-Green** color ramp. 
   
   Instantly, any map points where the pressure fell below 20 PSI glow bright red. The supervisor immediately sees a visual cluster of red dots in a single neighborhood, realizing a localized water main is probably leaking. They bypass the spreadsheet entirely and send a repair truck directly to the anomaly.
