# Module 06: Geova AI Chat

> Geova AI is Mapplex's conversational spatial intelligence engine. Ask questions about your GIS data in plain English and receive instant answers — SQL queries are generated, executed locally on your device, and results are rendered with interactive visualizations.

---

## 1. Opening Geova AI

Tap **Geova AI** in the bottom navigation or the AI icon. The chat interface opens with:

- **Header** — Shows the Geova AI logo, "Geova Network Active" status, and the currently active project name + record/layer count.
- **Message Area** — A scrollable chat history
- **Suggestion Bar** — Smart, contextual query chips based on your project's data schema
- **Input Area** — Text input for typing queries, with `@` and `#` mention support

---

## 2. Asking Your First Question

### Typing a Query

1. Type a question in the input area:
   > *"How many manholes are in Zone A?"*
2. Tap the **Send** button (or press Enter).
3. A **3-phase loading skeleton** animates while the AI processes:
   - 🧠 **Analyzing query structure…**
   - 🌐 **Running spatial analysis…**
   - 📊 **Building response…**
4. The AI responds with a formatted answer, often including record counts, tables, and maps.

### Using Smart Suggestions

The **Suggestion Bar** at the bottom displays dynamically generated query chips based on your project's schema. For example, if you have a layer called "Fire Hydrants" with fields like "Condition" and "Flow Rate":
- *"Count all Fire Hydrants"*
- *"What is the average Flow Rate?"*
- *"Group Fire Hydrants by Condition"*

Tap any chip to auto-send the query.

### Welcome Screen

If no messages exist, the **Empty State** shows:
- Welcome message: *"Ask Me Anything"*
- Privacy badges: **BYOK key stays on device**, **Limited samples may be sent**, **1 credit per useful answer**
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

The AI automatically selects the best display layout based on the query intent:

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

Every response includes a collapsible **"View SQL Query"** section showing the exact SQL that was executed:
```sql
SELECT * FROM "Fire_Hydrants" WHERE "Condition" = 'Poor'
```
This is for transparency — you can verify exactly what the AI did.

### Mini-Map

When results contain geographic features, an **inline mini-map** renders directly in the chat bubble, showing the spatial distribution of results. Below the map:
- Feature count indicator
- **"Open Full Map"** button to view results on the main map

---

## 5. Action Buttons

Each AI response with data includes an **action bar** with powerful tools:

| Button | Action |
|--------|--------|
| **📊 Records** | Shows the total record count |
| **🔍 Go Deeper** | Re-runs the query using a structured DAG template for more accurate results |
| **📄 PDF** | Generates a professional PDF report of the results |
| **⬇️ GeoJSON** | Exports results as a GeoJSON file |
| **📋 CSV** | Exports results as a CSV spreadsheet |
| **🌍 KML** | Exports results as KML for Google Earth |
| **💾 Add to Mapplex** | Saves AI results as a permanent layer in your project |
| **🗺️ Preview** | Shows results on the main map with AI preview overlay |
| **🔗 Dissolve** | Merges overlapping polygons in DAG results |

### Committing Results as a Layer

Tap **"Add to Mapplex"** to save AI query results as a permanent project layer. This converts temporary analysis results into editable GIS features.

### Exporting Results

Export buttons download the result data immediately in the chosen format — no additional steps needed.

---

## 6. Session Management

### Per-Project Sessions

Each project has its own chat session. When you switch projects, the chat session switches automatically — your conversation history is preserved separately for each project.

### Clearing History

Tap the **🗑️ Clear** button (top-right) to delete all chat history for the current project. This requires confirmation.

### Credit System

- Each **useful** AI answer costs **1 credit**
- Clarification questions and system failures are **not billed**
- Credit usage is displayed in the input area

---

## 7. DAG Orchestration (Behind the Scenes)

For complex spatial queries, the AI uses a **DAG (Directed Acyclic Graph)** orchestration engine:

1. **Query Parsing** — The AI parses your natural language into structured intent
2. **Template Matching** — Matches the query to a pre-built spatial analysis template
3. **DAG Execution** — Runs a multi-step pipeline (fetch → filter → transform → aggregate)
4. **Progress Tracking** — A live progress bar shows DAG node execution

When the AI suggests **"Go Deeper"**, it re-routes through the template DAG engine for higher accuracy.

### Offline Templates

Some common queries work **entirely offline** using pre-built templates that don't require an API call.

---

## 8. Error Handling

| Error Type | What You See | What to Do |
|------------|-------------|------------|
| **No Data Found** | Amber clarification bubble | Rephrase the query or verify your data |
| **Auth Error** | Red bubble with key icon | Check your API key in settings |
| **Out of Credits** | Red bubble with credit warning | Purchase more credits |
| **Network Error** | Red bubble with retry button | Tap "Try Again" |

---

## 9. Privacy & Data Safety

- **BYOK (Bring Your Own Key)** — Your API key stays on your device
- **Minimal Data Sent** — Only limited schema details and sample field values are sent to improve AI accuracy
- **No Full Datasets** — Geometries, coordinates, and full datasets are **never** sent automatically
- **Local Execution** — SQL queries run locally on your device's IndexedDB

---

> **Next:** Proceed to [Module 07: Team & Collaboration](./07-team-view.md) to manage team members and monitor field performance.
