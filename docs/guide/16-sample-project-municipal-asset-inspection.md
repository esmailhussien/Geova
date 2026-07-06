# Module 16: Sample Project - Municipal Asset Inspection

> This walkthrough shows how a supervisor can set up a realistic municipal inspection project, send collectors into the field, review the data, and export results. It is written as an example workflow, so adapt the names, fields, and roles to your organization.

---

## 1. Scenario

A municipality needs to inspect streetlights across several districts. Field collectors must record condition, repair priority, photos, notes, and inspection status. Supervisors need to review incomplete records, create exports for weekly reporting, and keep contractors from deleting project data.

### Project Outcome

By the end of this workflow, the project will include:

- A hosted or local Mapplex project
- A point layer for streetlights
- An optional polygon reference layer for districts
- A structured inspection form
- Controlled values for condition, priority, and status
- Offline map preparation for field teams
- A review process for missing or high-priority records
- Exportable CSV, GeoJSON, KMZ, PDF, and, where entitled, GeoPackage outputs

---

## 2. Requirements

| Item | Minimum Requirement | Notes |
|------|---------------------|-------|
| **Project setup** | Owner, Admin, or Editor | Needed to create layers and forms |
| **Field collection** | Collector or higher | Collectors can add records to existing layers |
| **Hosted collaboration** | Signed-in account and cloud workspace | Use Local project if the work stays on one device |
| **Offline maps** | Internet before fieldwork | Tiles must be downloaded before losing connectivity |
| **Smart Logic** | Smart Logic entitlement | Optional, but useful for repair-specific fields |
| **Lexicons** | Lexicon entitlement | Optional, but improves value consistency |
| **Geova AI review** | Geova AI entitlement, credits, and network | Optional decision-support step |
| **PDF / GeoPackage export** | Export entitlement | Use CSV, GeoJSON, or KMZ if these are not available |

---

## 3. Quick Features Used in This Workflow

This sample project uses several Mapplex shortcuts that are worth calling out before setup begins:

| Feature | How It Applies to This Project |
|---------|--------------------------------|
| **Quick Capture** | Collectors can add a missing streetlight point at their current GPS location with fewer taps once the `Streetlights` layer is active |
| **AI-assisted SQL / filters** | Supervisors can ask for incomplete inspections, urgent repairs, or missing photos and then review the generated filter or result table |
| **Lexicon picklists** | Shared condition, priority, or district values can stay consistent across contractors and inspection cycles |
| **Spatial Auto-Fill** | A collected streetlight can automatically inherit the district or maintenance zone by matching its location against a reference polygon layer |
| **Auto Geometry** | The form can store coordinates for point assets, and other workflows can calculate length, area, or perimeter for line and polygon layers |

These features are optional, but they make the workflow faster and reduce cleanup after field collection.

---

## 4. Create the Project

1. Open the **Dashboard**.
2. Tap **+ New Project**.
3. Use a clear project name, for example:
   ```
   Streetlight Inspection - North District
   ```
4. Choose storage:
   - **Hosted (Cloud)** if several people need to collaborate and sync.
   - **Local (Offline)** if one device will collect and export the data.
5. Add a short description:
   ```
   Weekly condition inspection for municipal streetlights in the North District.
   ```
6. Tap **Create Project**.

### Good Setup Practice

Use a project name that includes the asset type, area, and time period. This makes exports, dashboard lists, and reports easier to identify later.

---

## 5. Create the Asset Layer

1. Open **Layers**.
2. Create a new layer named:
   ```
   Streetlights
   ```
3. Set the geometry type to **Point**.
4. Choose a marker color that stands out on the basemap.
5. Enable labels if you have an asset ID or pole number field.

### Suggested Layer Style

| Setting | Recommendation |
|---------|----------------|
| **Geometry** | Point |
| **Marker color** | Amber or yellow for streetlight assets |
| **Label field** | Asset ID or Pole Number |
| **Clustering** | Enabled for dense urban areas |
| **Completion indicator** | Enabled where entitled, using `Inspection Status` |

---

## 6. Build the Inspection Form

Open **Forms**, select the `Streetlights` layer, and create the form fields below.

| Field | Type | Example Values | Purpose |
|-------|------|----------------|---------|
| **Asset ID** | Text | `SL-10482` | Links the inspection to the municipal asset register |
| **Pole Number** | Text | `P-17-042` | Field-visible identifier |
| **Condition** | Dropdown | Good, Fair, Poor, Damaged, Not Found | Standard condition rating |
| **Repair Priority** | Dropdown | None, Low, Medium, High, Urgent | Helps supervisors triage work |
| **Lamp Working** | Checkbox | Checked / unchecked | Quick operational status |
| **Inspection Status** | Dropdown | Not Started, In Progress, Complete, Needs Review | Supports completion tracking |
| **Inspection Date** | Date | Current date | Required for reporting |
| **Photo** | Photo | Site photo | Evidence of condition |
| **Notes** | Text | Free text | Field observations |
| **Auto Geometry** | Auto geometry | Coordinates | Records location details |

### Human-Friendly Field Names

Use labels that field teams already understand. For example, `Lamp Working` is clearer in the field than `Operational Boolean`, and `Repair Priority` is clearer than `Severity Code`.

---

## 7. Add Controlled Values

Controlled values reduce cleanup later. Use one of these approaches:

| Approach | When to Use |
|----------|-------------|
| **Dropdown fields** | Small fixed lists such as condition and priority |
| **Lexicon picklists** | Shared values used across many projects or layers |
| **Data Dictionary aliases** | When imported field names are technical or abbreviated |

### Recommended Value Lists

**Condition**

- Good
- Fair
- Poor
- Damaged
- Not Found

**Repair Priority**

- None
- Low
- Medium
- High
- Urgent

**Inspection Status**

- Not Started
- In Progress
- Complete
- Needs Review

---

## 8. Configure Smart Logic

Smart Logic is optional, but it makes the form easier for collectors.

### Example Rule

If `Condition` is `Poor` or `Damaged`, show:

- `Repair Priority`
- `Photo`
- `Notes`

If `Condition` is `Good`, keep the form shorter and require only the standard inspection fields.

### Why This Helps

Collectors see repair fields only when they are relevant. Supervisors receive more consistent details for assets that actually need attention.

> **Note:** AI-assisted Smart Logic generation requires Geova AI credits. You can also configure rules manually where Smart Logic is available.

---

## 9. Import Existing Asset Data

If the municipality already has streetlight locations, import them before field collection.

| Source File | Best Import Path | Notes |
|-------------|------------------|-------|
| **CSV / Excel** | Data & Sync -> CSV / Excel import | Use when the file has coordinate columns. Target layer must be Point |
| **GeoJSON / KMZ / KML** | Data & Sync -> geographic vector import | Good for existing GIS exports |
| **GeoPackage** | Data & Sync -> geographic vector import | Useful for GIS teams and larger datasets |
| **Shapefile** | SHP Manager | Requires SHP entitlement and Owner/Admin/Editor role |
| **DXF** | CAD Manager | Use when asset locations come from CAD drawings |

### Import Check

After importing:

1. Open the **Map View**.
2. Confirm points appear in the expected district.
3. Open the **Collected Features Table**.
4. Check that Asset ID, Pole Number, and other fields imported correctly.
5. If imported points appear in the wrong place, review the source CRS.

---

## 10. Add District Reference Zones

Reference zones are useful when each inspection should inherit a district, maintenance area, or contractor zone.

1. Open **Data & Sync**.
2. Upload district polygons as a KMZ, KML, or GeoJSON reference layer.
3. Name the reference layer, for example:
   ```
   Maintenance Districts
   ```
4. Configure Spatial Auto-Fill in Forms so new streetlight inspections can store the district name.

### Example Auto-Fill Field

| Form Field | Reference Layer | Reference Attribute |
|------------|-----------------|---------------------|
| **District** | Maintenance Districts | `district_name` |

When a collector saves a streetlight point inside a district polygon, Mapplex can populate the `District` field from the matching polygon attribute. For line or polygon collection workflows, the lookup uses the collected feature's centroid.

### When to Skip This Step

Skip reference zones if district information already exists in the imported asset table or if the project does not need zone-based reporting.

---

## 11. Prepare Field Devices

Before the team leaves:

1. Open the project on each device.
2. Confirm each collector can see the `Streetlights` layer and form.
3. Download offline map tiles for the inspection area.
4. Confirm GPS permission is enabled.
5. Enable required field tools in **Settings**:
   - GPS Accuracy Indicator
   - GPS Recording Tools if teams will record movement
   - Quick Capture if the workflow uses fast point collection
   - Keep Screen Awake for long field sessions
6. Confirm the sync method:
   - Cloud sync if internet is expected.
   - Local P2P sync if devices will consolidate data on the same Wi-Fi or hotspot.

### Field Briefing

Give collectors a short instruction such as:

> Inspect only assigned streets. Capture or update each streetlight point, complete the condition fields, attach a photo for damaged assets, and mark the record Complete only after reviewing the form.

---

## 12. Collect Records in the Field

Collectors should follow a consistent pattern:

1. Open **Map View**.
2. Select the `Streetlights` layer.
3. Tap an existing asset point, or use GPS capture to add a missing asset.
4. Fill the inspection form.
5. Add a photo when the asset is damaged, obstructed, missing, or needs repair.
6. Set `Inspection Status` to `Complete` when all required fields are entered.
7. Save the record before moving to the next asset.

### Using Quick Capture for Missing Assets

If a collector finds a streetlight that is not already on the map:

1. Confirm the active layer is `Streetlights`.
2. Wait for GPS accuracy to stabilize.
3. Use **Quick Capture** if it is enabled, or tap the GPS pin to place the point.
4. Fill the form immediately, including Asset ID or Pole Number if visible on site.
5. Add a note such as `New asset found in field` if the asset needs office verification.

### When GPS Is Inaccurate

If the GPS accuracy indicator is poor:

- Wait for the signal to stabilize.
- Move away from tall buildings or heavy tree cover if possible.
- Use manual coordinate entry only when the team has reliable source coordinates.
- Add a note if the location needs office review.

---

## 13. Review Data During or After Collection

Open **Data & Sync** and expand the `Streetlights` layer in the collected features table.

Check for:

- Empty Asset ID or Pole Number values
- Records still marked `Not Started` or `In Progress`
- Damaged assets without photos
- High or Urgent repair priority without notes
- Duplicate points at the same location
- Records outside the expected district

### Useful Dashboard Filters

In the Dashboard project detail modal, use Guided Builder or Raw SQL filters such as:

```sql
inspection_status != 'Complete'
```

```sql
repair_priority = 'Urgent'
```

```sql
condition = 'Damaged' AND photo IS NULL
```

Enter only the filter expression. Do not include `SELECT` or `WHERE`.

> **Tip:** Use the field chips in the Dashboard query panel to insert the exact field names from your layer. Imported datasets often use different names, such as `status`, `insp_stat`, or `repair_pri`.

---

## 14. Use Geova AI for Review

If Geova AI is available, use it to speed up review. Keep prompts specific and review the result before exporting or saving.

| Review Goal | Prompt |
|-------------|--------|
| Find incomplete records | *"Show streetlight inspections where Inspection Status is not Complete"* |
| Triage urgent repairs | *"List streetlights where Repair Priority is Urgent, grouped by district"* |
| Check missing photos | *"Find damaged streetlights that do not have a photo"* |
| Summarize progress | *"Count completed and incomplete inspections by district"* |
| Prepare a supervisor layer | *"Create a result layer for urgent streetlight repairs inspected this week"* |
| Draft a dashboard filter | *"Create a filter for damaged streetlights with missing photos"* |

### Review Before Acting

Before sharing AI results:

1. Expand the SQL or query details when available.
2. Check the result count.
3. Open the map preview and confirm the locations make sense.
4. Export or save the result only after review.

---

## 15. Export the Weekly Report

Choose the export format based on the recipient.

| Recipient | Recommended Export | Why |
|-----------|--------------------|-----|
| **Supervisor** | CSV | Easy to review in Excel or Google Sheets |
| **GIS team** | GeoJSON or GeoPackage | Preserves geometry for GIS workflows |
| **Contractor** | CSV plus PDF map | Clear list of work plus visual reference |
| **Public meeting / briefing** | PDF map | Good for presentation and printed review |
| **Google Earth review** | KMZ | Easy visual handoff |

### Suggested Export Package

For a weekly municipal inspection handoff:

1. CSV of all urgent and high-priority repairs.
2. PDF map showing inspected assets and priority categories.
3. GeoJSON or GeoPackage for GIS archive.
4. Photo attachments retained in the project for evidence review.

---

## 16. Sync and Handoff

### If Using Hosted Projects

1. Return to the Dashboard when internet is available.
2. Check the sync status.
3. Wait until pending syncs clear.
4. Ask the supervisor to review the hosted project before exporting final files.

### If Using Local Projects

1. Export CSV and GeoJSON backups.
2. Use local P2P sync if multiple field devices need to consolidate records.
3. Upload the local project to hosted storage if collaboration becomes necessary.

---

## 17. Common Variations

| Variation | How to Adapt the Workflow |
|-----------|---------------------------|
| **Hydrant inspection** | Replace Lamp Working with Flow Rate, Accessibility, and Hydrant Type |
| **Road defect survey** | Use a point layer for potholes or a line layer for damaged road segments |
| **Sign inventory** | Add fields for sign type, reflectivity, mounting condition, and replacement priority |
| **Park asset audit** | Use layers for benches, lights, trees, and facilities |
| **Storm damage assessment** | Add fields for damage category, accessibility, safety risk, and follow-up status |

---

## 18. What Makes This Workflow Reliable

- Clear roles prevent accidental schema changes or deletions.
- Dropdowns and Lexicons reduce inconsistent field values.
- Smart Logic keeps forms shorter while still collecting repair details.
- Offline tile preparation avoids field delays.
- Data review happens before export, not after the report is sent.
- AI is used for review and summarization, with human confirmation before action.

---

> **Previous:** [Module 15: Capability Reference](./15-capability-reference.md)
> **Next:** [Module 17: Glossary & Key Concepts](./17-glossary-key-concepts.md)
