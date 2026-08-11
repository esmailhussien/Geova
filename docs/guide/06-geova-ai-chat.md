---
title: Geova AI Chat
description: Use Geova AI for whole-layer spatial queries, field intelligence, evidence grades, guarded form actions, and reviewed exports.
---

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
- Zero-credit data helpers: **Explore Data**, **Layers**, **Fields**, and **Spatial**
- Suggested Queries based on your project data

Use **Explore Data** when you are not sure what to ask. Geova AI lists the layers, record counts, useful fields, and example questions it can answer from the active project.

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

### Query Scope: Entire Layers by Default

Unless you explicitly request a smaller scope, Geova AI evaluates the complete referenced layer or project dataset available to your workspace. It does **not** limit a count, group, filter, or spatial analysis to features currently visible on the map simply because the map is zoomed in.

- Use `@Layer` and `#Column` mentions to identify the intended complete layer and field.
- Say **"within the current map view"** only when you deliberately want the current map extent to be a filter.
- Say **"the selected features"** when you want only the current selection.
- A mini-map is a result preview; it does not change the analytical scope by itself.

Always check the response scope, record count, SQL, and provenance before saving or exporting a result.

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

### Field Intelligence and Evidence Grades

Geova can run deterministic, read-only field checks without calling the language model or consuming an AI credit. Try requests such as:

- *“Check data quality for this layer.”*
- *“Show required-field completeness for the visible layers.”*
- *“Summarize conflicts in this layer.”*
- *“Which visible layers intersect the selected features?”*
- *“Create an inspection handover report.”*

These checks use the active form, Smart Logic, current lexicons/domains, geometry validity, field types, and synchronization state. They do not change records.

For these questions, **visible layers means all records in those enabled layers**, not only features currently visible inside the map screen. A viewport filter is used only when you explicitly say *“on screen,” “in this map area,”* or similar wording. Selected-feature requests are limited to the current selection.

Evidence badges mean:

| Badge | Meaning |
|---|---|
| **Decision-grade** | Exact and complete deterministic evidence met the configured freshness, warning, and exclusion thresholds |
| **Review required** | The result is exact but has a warning, freshness concern, or excluded-data concern |
| **Advisory only** | The result is sampled, approximate, fallback, unknown, incomplete, or failed a validation gate |

The grade describes the data path, not professional approval. Always review safety-, engineering-, legal-, or regulatory-critical results.

### Focused Form Co-Pilot and Controlled Field Actions

When Geova has context for one focused feature and form field, it can suggest a value from that field's current Lexicon or fixed options. It does not invent a new controlled value when the available choices are unknown, ambiguous, hidden by Smart Logic, or incompatible with the form.

A supported suggestion remains a draft until you review a one-field card showing the current and proposed values, source, confidence, and relevant rule effects. **Apply** requires explicit confirmation and rechecks the current record, form rules, domain version, project, workspace, role, and ownership. **Undo** is offered only while the applied value and record revision are still safe to reverse.

- Viewer and other read-only roles cannot apply a suggestion.
- Resolve unsaved edits in an already-open form before applying an AI field action.
- A hosted offline field action is blocked unless the device has valid offline authorization. Normal manual offline drafts continue to work.
- Bulk field mutation is not enabled; each proposal affects one feature and one field.

### Area-Scoped Questions: Field or Boundary Layer

Questions like *"How many fire hydrants are in Toronto?"* can be answered in two practical ways:

| Available Data | How Geova Should Handle It | Example |
|----------------|----------------------------|---------|
| **A section/city field on the target table** | Use a normal tabular filter first | `Fire Hydrants.City = Toronto` |
| **A polygon section/boundary layer** | Use a spatial containment query | Count hydrants inside the `Toronto` feature from a sections/cities layer |
| **Both are available** | Prefer the table field for simple counts; use the polygon layer when the user asks for *inside*, *within*, *boundary*, or spatial containment | *"Count hydrants inside the Toronto boundary"* |
| **Neither is available** | Ask for the missing data instead of guessing | Add a section/city/district field, or add a polygon layer for sections/cities |

For working projects, the target table should either include a clear area field such as **Section**, **City**, **District**, or **Municipality**, or the project should include a polygon layer representing those sections.

### When Geova Needs More Detail

If Geova AI cannot safely understand the question, it should not guess. It shows a clarification or recovery card with actions such as:

| Situation | What Geova Shows | Useful Next Action |
|-----------|------------------|--------------------|
| **Unclear question** | A short note explaining that it needs a map, layer, field, or report question | Tap **Explore Data**, or add an `@Layer` / `#Field` mention |
| **Multiple possible layers** | A prompt explaining that more than one layer could match | Tap **Choose Layer** or **Show Layers** |
| **No table records matched** | What was checked and why the filter may be too narrow | Tap **Broaden Search** or check field values |
| **No spatial features matched** | A note about overlap, distance, filters, or coordinate systems | Tap **Guided Pass** or **Check Layers** |
| **Fallback method used** | A warning that the result used an estimated method | Review the notes before using the result operationally |

Clarifications, system failures, and unconfirmed empty results are not billed as useful answers.

For spatial analyses, the recovery guidance checks the details relevant to the requested operation: distance and units for buffers; overlap, geometry, filters, and CRS for joins or clips; origin, destination, GPS, and routing fallback for nearest analysis; and suitable numeric fields, sample density, boundaries, or grid settings for density and interpolation.

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

- **Managed AI service** — Requests are routed through the Geova backend and may be processed by the configured provider, currently OpenAI or Google Gemini.
- **Minimum relevant context** — Layer names, schemas, Data Dictionary details, domain or lexicon values, selected records, sample field values, spatial scope, and derived statistics may be sent when needed to interpret your request.
- **Location only when relevant** — Current location may be included when you intentionally ask a location-based question such as "nearest to me."
- **No automatic full-dataset upload for ordinary planning** — Full datasets and geometries are not automatically sent merely by opening chat. The context used depends on the request you choose to run.
- **Project and workspace isolation** — Queries must stay within the active authorized project/workspace. Verify the project name and scope shown in the response.
- **Local execution where possible** — Filters and many spatial operations run against authorized project data after the plan is prepared.
- **User responsibility** — Do not submit sensitive, regulated, or personal content unless your organization permits it. AI output is decision support and should be reviewed before operational, engineering, safety, legal, or regulatory use.

See the [Mapplex Privacy Policy](https://geova.net/privacy) for provider, retention, deletion, and data-transfer details. Account deletion requests are available at [geova.net/account-deletion](https://geova.net/account-deletion).

---

> **Next:** Proceed to [Module 07: Team & Collaboration](./07-team-view.md) to manage team members and monitor field performance.
