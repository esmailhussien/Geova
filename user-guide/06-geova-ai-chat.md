# Module 06: Geova AI Chat

> Geova AI helps you query project data in plain language. It can draft SQL filters, summarize records, prepare exports, and preview spatial results. Review generated queries and results before using them for decisions.

---

## 1. Opening Geova AI

Tap **Geova AI** in the bottom navigation or the AI icon. The chat interface opens with:

- **Header** — Shows the Geova AI logo, "Geova Network Active" status, and the currently active project name + record/layer count.
- **Message Area** — A scrollable chat history
- **Suggestion Bar** — Query suggestions based on your project's layer and field schema
- **Input Area** — Text input for typing queries, with `@` and `#` mention support

---

## 2. Asking Your First Question

### Typing a Query

1. Type a question in the input area:
   > *"How many manholes are in Zone A?"*
2. Tap the **Send** button (or press Enter).
3. A loading state appears while the request is processed.
4. Geova AI responds with a formatted answer, often including record counts, tables, or map previews.

### Using Query Suggestions

The **Suggestion Bar** displays query chips based on your project's schema. For example, if you have a layer called "Fire Hydrants" with fields like "Condition" and "Flow Rate":
- *"Count all Fire Hydrants"*
- *"What is the average Flow Rate?"*
- *"Group Fire Hydrants by Condition"*

Tap any chip to auto-send the query.

### Welcome Screen

If no messages exist, the **Empty State** shows:
- Welcome message: *"Ask Me Anything"*
- Privacy badges: **Managed workspace credits**, **Limited samples may be sent**, **1 credit per useful answer**
- Suggested Queries based on your project data

---

## 3. Mentions: @Layers and #Columns

### Mentioning a Layer

Type `@` in the input field to open the **Layer Mentions Dropdown**. This shows all layers in the active project. Select a layer to reference it in your query:
> *"Show all records in @Fire_Hydrants where Condition is Poor"*

### Mentioning a Column

Type `#` to open the **Column Mentions Dropdown**. This lists all form fields across your layers. Use it for precision:
> *"What is the average #Flow_Rate in @Fire_Hydrants?"*

The mentions system uses keyboard navigation (↑/↓ arrows, Enter to select, Escape to dismiss).

---

## 4. Understanding AI Responses

### Response Types

Geova AI selects a display layout based on the query intent:

| Intent | Display Mode | Example |
|--------|-------------|---------|
| **COUNT** | Scalar Count | *"How many? → 347 records"* |
| **SUM / AVG** | Scalar Value | *"Average flow rate? → 42.7 GPM"* |
| **GROUP_BY** | Group Table | *"Group by condition → Good: 120, Fair: 85, Poor: 42"* |
| **COMPARE** | Comparison Table | *"Compare Zone A vs Zone B"* |
| **TREND_ANALYSIS** | Temporal Insight | *"Inspection trend over 6 months"* |
| **MAX / MIN** | Hero with Context | *"Oldest hydrant? → ID: H-0047, installed 1987"* |
| **General Query** | Full Data Table | *"Show all hydrants near the river"* |

### SQL Transparency

Many tabular responses include a collapsible **"View SQL Query"** section showing the filter or query logic that was executed:
```sql
SELECT * FROM "Fire_Hydrants" WHERE "Condition" = 'Poor'
```
Use this section to review what was executed and confirm that the filter matches your intent.

### Mini-Map

When results contain geographic features, an **inline mini-map** renders directly in the chat bubble, showing the spatial distribution of results. Below the map:
- Feature count indicator
- **"Open Full Map"** button to view results on the main map

### What Geova AI Can Help With

Geova AI is strongest when your project has clear layer names, field names, and Data Dictionary entries. It can assist with:

| Category | Typical Use |
|----------|-------------|
| **Counts, filters, and summaries** | Count records, filter by status, group by category, calculate totals or averages |
| **Proximity analysis** | Find nearest features, build buffers, compare features inside or outside a distance |
| **Overlay and joins** | Join points to zones, clip features by boundary, compare two layers |
| **Service areas and access** | Estimate catchments or reachable areas when the analysis template is available |
| **Planning support** | Rank candidate sites, identify gaps, compare scenarios, prepare exportable result layers |
| **Reports and exports** | Generate result tables, map previews, GeoJSON/CSV/KML exports, or PDF summaries |

AI results are decision support, not a replacement for professional review. For engineering, regulatory, safety, or legal work, confirm the layer schema, coordinate system, and generated filters before acting on the output.

---

## 5. AI Prompt Cookbook

Use these examples as starting points. Replace layer and field names with your own, or use `@Layer` and `#Column` mentions so Geova AI can target the right data.

| Goal | Example Prompt | What to Review |
|------|----------------|----------------|
| **Count incomplete work** | *"Count records in @Hydrant_Inspections where #Status is not Complete"* | Confirm the status field values match your form options |
| **Find high-priority repairs** | *"Show @Streetlights where #Condition is Poor or #Repair_Priority is High"* | Check whether the logic should be OR or AND |
| **Group records by category** | *"Group @Road_Defects by #Defect_Type and show counts by district"* | Confirm district values are present and standardized |
| **Find missing evidence** | *"List @Damage_Assessments where the photo field is empty"* | Review whether the photo field is single photo or gallery |
| **Use current location** | *"Find the 10 nearest hydrants to my current location"* | Confirm device GPS accuracy before using the result |
| **Check distance from another layer** | *"Find assets within 100 meters of @Road_Closures"* | Confirm the distance unit and source layer |
| **Join points to zones** | *"Assign each @Inspection_Point to the containing @Management_Zone and summarize counts by zone"* | Review the zone layer and any points outside all zones |
| **Compare two areas** | *"Compare open repairs in Zone A and Zone B by priority"* | Confirm zone names and priority values |
| **Prepare a result layer** | *"Create a result layer for poor-condition assets inspected this month"* | Preview the map result before tapping Add to Mapplex |
| **Build an export** | *"Export all incomplete inspections as CSV with asset ID, condition, inspector, and date"* | Check selected columns and date range |
| **Screen candidate sites** | *"Rank candidate parcels by area, zoning type, and distance to main roads"* | Confirm required fields/layers exist and review ranking assumptions |
| **Find service gaps** | *"Identify neighborhoods more than 500 meters from a clinic"* | Confirm clinic and neighborhood layers, and whether straight-line distance is acceptable |

### Prompting Tips

- Name the layer and field whenever possible.
- Use the same wording that appears in your form choices, such as `Good`, `Fair`, `Poor`, `Open`, or `Complete`.
- Ask one operational question at a time, then refine the result.
- Review the SQL, result table, and map preview before exporting or saving a layer.
- For location-sensitive prompts, wait for GPS accuracy to stabilize first.

---

## 6. Action Buttons

Each Geova AI response with data includes an **action bar**:

| Button | Action |
|--------|--------|
| **📊 Records** | Shows the total record count |
| **🔍 Go Deeper** | Re-runs the query through a structured analysis template when available |
| **📄 PDF** | Generates a PDF report of the results |
| **⬇️ GeoJSON** | Exports results as a GeoJSON file |
| **📋 CSV** | Exports results as a CSV spreadsheet |
| **🌍 KML** | Exports results as KML for Google Earth |
| **💾 Add to Mapplex** | Saves AI results as a permanent layer in your project |
| **🗺️ Preview** | Shows results on the main map with AI preview overlay |
| **🔗 Dissolve** | Merges overlapping polygons in DAG results |

### Committing Results as a Layer

Tap **"Add to Mapplex"** to save AI query results as a project layer. This converts temporary result features into editable Mapplex features.

### Exporting Results

Export buttons download the result data immediately in the chosen format — no additional steps needed.

---

## 7. Session Management

### Per-Project Sessions

Each project has its own chat session. When you switch projects, the chat session switches automatically — your conversation history is preserved separately for each project.

### Clearing History

Tap the **🗑️ Clear** button (top-right) to delete all chat history for the current project. This requires confirmation.

### Credit System

- Each **useful** AI answer costs **1 credit**
- Clarification questions and system failures are **not billed**
- Credit usage is displayed in the input area

---

## 8. DAG Orchestration (Behind the Scenes)

For complex spatial queries, Geova AI may use a **DAG (Directed Acyclic Graph)** orchestration engine:

1. **Query Parsing** — The AI parses your natural language into structured intent
2. **Template Matching** — Matches the query to a pre-built spatial analysis template
3. **DAG Execution** — Runs a multi-step pipeline (fetch → filter → transform → aggregate)
4. **Progress Tracking** — A live progress bar shows DAG node execution

When Geova AI suggests **"Go Deeper"**, it re-runs the request through a structured template designed for that type of analysis.

### Local and Online Processing

The chat service requires a signed-in session, network access, and available workspace credits. After a request is planned, many filters and spatial operations are executed against the project data in the browser so you can inspect the SQL, map preview, and result layer before committing anything back to the project.

---

## 9. Error Handling

| Error Type | What You See | What to Do |
|------------|-------------|------------|
| **No Data Found** | Amber clarification bubble | Rephrase the query or verify your data |
| **Auth Error** | Red bubble with sign-in warning | Sign in again or refresh your session |
| **Out of Credits** | Red bubble with credit warning | Recharge workspace credits or ask an admin to upgrade |
| **Network Error** | Red bubble with retry button | Tap "Try Again" |

---

## 10. Privacy & Data Safety

- **Managed AI service** — AI requests are routed through the Mapplex backend and charged against workspace credits
- **Limited Context** — Layer names, field names, Data Dictionary details, and sample field values may be sent so the model can understand your project
- **Location Context When Relevant** — Your current location may be used when you ask location-based questions such as "nearest to me"
- **No Automatic Full Dataset Upload** — Full datasets and geometries are not sent automatically for ordinary chat planning
- **Local Execution Where Possible** — Filters and many spatial operations run against local project data after the AI plan is prepared

---

> **Next:** Proceed to [Module 07: Team & Collaboration](./07-team-view.md) to manage team members and monitor field performance.
