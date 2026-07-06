# Mapplex User Guide

> **Mapplex** - field mapping, data collection, and geospatial reporting
> **Geova AI** - optional assistant for querying project data

---

Welcome to the **Mapplex User Guide**. This guide explains how to install Mapplex, create projects, collect data in the field, manage layers and forms, import and export GIS files, and produce map reports.

Mapplex is an **offline-first geospatial operations platform** for teams that need dependable field workflows. It supports solo work, small survey teams, and larger organizations that manage multiple projects, roles, and data sources from one application.

---

## Who Is This Guide For?

This guide is written for the people who set up, collect, review, and report field data:

| Role | What You'll Learn |
|------|-------------------|
| **Field Collector** | Collect points, lines, and polygons; complete forms; attach photos; work offline |
| **Supervisor / Editor** | Review submissions, correct attributes, edit geometries, and export progress reports |
| **GIS Analyst** | Import GIS files, manage coordinate systems, classify layers, and run data queries |
| **Admin / Program Manager** | Manage workspaces, roles, subscriptions, devices, and team visibility |

---

## Common Workflows

These examples show how Mapplex is typically used in the field. They are intentionally practical: each one starts with a common operational need and points to the modules that support it.

### 1. Storm Damage Assessment

**Situation:** A public works team needs to inspect damaged roads and structures in an area with limited connectivity.

**The Workflow:**
- Before leaving, supervisors download offline map tiles for the inspection area
- Field staff collect point and line features with photos, damage categories, and notes
- Devices exchange updates using local peer-to-peer sync when internet service is unavailable
- Back at the office, the supervisor exports a CSV or PDF map for the daily situation report

---

### 2. Municipal Asset Inspection

**Situation:** A municipality needs contractors to inspect streetlights without giving them permission to delete records.

**The Workflow:**
- The project owner invites contractors as **Collectors**
- The layer form records asset ID, condition, repair priority, photo, and inspection date
- Smart Logic shows repair fields only when an asset is marked as damaged
- At the end of the week, the supervisor reviews contributor activity and exports a PDF map with a legend and notes

---

### 3. Environmental Compliance Survey

**Situation:** A consultant needs every observation point tagged with the correct management zone.

**The Workflow:**
- The analyst imports zone boundaries as a spatial reference layer
- A form field is configured to auto-fill the zone name from the polygon that contains the observation
- Field staff collect observations without manually checking boundary maps
- The reviewer exports the final dataset as GeoJSON, CSV, or GeoPackage for submission

---

### 4. Planning Review

**Situation:** A planner needs to compare candidate sites against zoning, access, and parcel constraints.

**The Workflow:**
- The planner imports parcels, zoning boundaries, and road access data
- Graduated or categorical symbology highlights relevant attributes
- The dashboard query tools filter parcels by area, zone type, or other stored fields
- The team reviews candidate sites on the map and exports a report for discussion

---

### 5. Public Health Field Follow-Up

**Situation:** A health department needs to track follow-up visits and review case distribution over time.

**The Workflow:**
- Staff collect visit locations, dates, case status, and notes
- Analysts filter records by date range and status in the dashboard
- The map time slider helps review changes over the reporting period
- Summary exports support internal review while keeping source data under the team's control

---

## Quick Features Worth Knowing

These features often save the most time once a project is already set up:

| Feature | What It Helps With | Where to Learn More |
|---------|--------------------|---------------------|
| **Quick Capture** | Create point records at the current GPS location with fewer taps during repetitive field collection | [Map View](./03-map-view.md) and [Capability Reference](./15-capability-reference.md) |
| **AI-Assisted SQL / Filters** | Turn plain-language questions into reviewable dashboard filters or Geova AI results | [Dashboard](./01-dashboard-view.md) and [Geova AI](./06-geova-ai-chat.md) |
| **Lexicon Picklists** | Keep names, categories, and codes consistent across projects and teams | [Forms & Smart Logic](./04-forms-view.md) |
| **Spatial Auto-Fill** | Look up another reference layer by location and copy a matching polygon attribute into the form, such as district, parcel, or management area | [Forms & Smart Logic](./04-forms-view.md) and [Data & Sync](./05-data-view.md) |
| **Auto Geometry Fields** | Store coordinates, length, area, or perimeter values from the feature geometry | [Forms & Smart Logic](./04-forms-view.md) |
| **Offline Field Checklist** | Prepare devices, maps, roles, GPS, and sync before field deployment | [Capability Reference](./15-capability-reference.md) |

---

## When to Use Which Feature

Use this table when you are deciding how to set up a workflow:

| Need | Use | Why |
|------|-----|-----|
| **Collect many new point records quickly** | Quick Capture | Best for repeated GPS-based point collection after the active layer and form are ready |
| **Place one point carefully** | GPS Pin or manual coordinate entry | Better when the user needs to confirm location, wait for GPS accuracy, or enter known coordinates |
| **Fill a form value from another layer by location** | Spatial Auto-Fill | Copies a selected attribute from the matching reference polygon, such as district, parcel, or zone |
| **Calculate coordinates, length, area, or perimeter from the feature itself** | Auto Geometry field | Stores geometry-derived values without manual typing |
| **Reuse the same controlled list across forms or projects** | Lexicon Picklist | Keeps values consistent and easier to update than separate dropdown lists |
| **Show fields only when they are relevant** | Smart Logic | Keeps forms shorter and reduces irrelevant entries |
| **Find records with plain language** | AI-assisted SQL / filters | Drafts a reviewable filter for incomplete work, urgent repairs, missing photos, or other QA checks |
| **Run spatial questions like nearest, buffer, join, or summarize by zone** | Geova AI spatial analysis | Produces result tables, map previews, exports, or temporary layers for review |
| **Import operational GIS data** | GeoJSON, KMZ/KML, GeoPackage, CSV/Excel | Good for existing GIS files, spreadsheets, and field-ready point datasets |
| **Import engineering or formal GIS exchange files** | CAD Manager or SHP Manager | Use DXF for CAD drawings and SHP for shapefile packages from GIS teams |
| **Prepare work with no reliable internet** | Offline map tiles and local/P2P workflow | Download basemaps first and confirm sync or handoff method before fieldwork |
| **Explain why a feature is locked** | Capability Reference | Check the required plan, role, setting, network, and device support |

---

## The Complete Guide

Follow the modules in order for a full walkthrough, or jump directly to the section you need:

| # | Module | What You'll Learn |
|---|--------|-------------------|
| [**00**](./00-getting-started.md) | **Getting Started & Onboarding** | Installing the PWA, signing in (Email / Guest / Pending), multi-device limits |
| [**01**](./01-dashboard-view.md) | **The Project Dashboard** | Creating projects, hosted vs. local storage, sync status, AI SQL Query Engine |
| [**02**](./02-layers-view.md) | **Layers & Symbology** | Geometry types, styling, categorical/graduated classification, completion tracking, Data Dictionary |
| [**03**](./03-map-view.md) | **Map View** | Drawing tools, GPS tracking, auto-track, offline tiles, measurements, split/merge, sketch mode |
| [**04**](./04-forms-view.md) | **Forms & Smart Logic** | 10 field types, spatial auto-fill, schema import, Lexicon picklists, AI-assisted conditional rules |
| [**05**](./05-data-view.md) | **Data & Sync** | Export formats and entitlements, file signature detection, spreadsheet wizard, P2P sync, reference zones |
| [**06**](./06-geova-ai-chat.md) | **Geova AI Assistant** | Natural language queries, prompt cookbook, @mention layers, display modes, export/commit results |
| [**07**](./07-team-view.md) | **Team & Collaboration** | Performance KPIs, sparkline charts, leaderboards, member roster, invite system, role management |
| [**08**](./08-settings.md) | **Settings, Account & Workspace** | 15 app settings, device management, workspace switcher, offline maps, subscriptions & entitlements |
| [**09**](./09-slope-profiler.md) | **Slope Profiler** | Digital clinometer HUD, cross-section profiles, calibration, severity-coded readings |
| [**10**](./10-map-pdf-export.md) | **Map PDF Export** | Page layout, title/notes, legend with classification expansion, print-quality generation |
| [**11**](./11-troubleshooting.md) | **Troubleshooting & FAQ** | Common issues, GPS tips, import/export debugging, AI accuracy, performance optimization |
| [**12**](./12-cad-manager.md) | **CAD Manager (DXF)** | Import DXF files with CRS suggestions, export features as DXF, UTM zone handling, Pro feature |
| [**13**](./13-engineering-drawing-export.md) | **Engineering Drawing Export** | Technical schematics with dimension lines, vertex labels, angles, area/perimeter summaries |
| [**14**](./14-shp-manager.md) | **Shp Manager (SHP)** | Import/export ESRI Shapefiles with auto CRS from .prj, multi-SHP ZIP, DBF schema preview |
| [**15**](./15-capability-reference.md) | **Capability Reference** | Feature requirements, role/plan boundaries, offline checklist, and format support |
| [**16**](./16-sample-project-municipal-asset-inspection.md) | **Sample Project: Municipal Asset Inspection** | End-to-end setup, field collection, QA, AI review, export, and handoff workflow |
| [**17**](./17-glossary-key-concepts.md) | **Glossary & Key Concepts** | Plain-language definitions for Mapplex, GIS, form, CRS, sync, and AI terms |

---

## Quick-Start Cheat Sheet

Use this table when you already know what you want to do:

| I want to... | Go here |
|-------------|---------|
| Install Mapplex on my phone | [Module 00 → Section 1](./00-getting-started.md) |
| Create a new map project | [Module 01 → Section 1](./01-dashboard-view.md) |
| Draw a point / line / polygon | [Module 03 → Section 2](./03-map-view.md) |
| Download maps for offline use | [Module 08 → Section 5](./08-settings.md) |
| Import a GeoJSON / KMZ file | [Module 05 → Section 3](./05-data-view.md) |
| Import a CSV spreadsheet | [Module 05 → Section 3](./05-data-view.md) |
| Build a data collection form | [Module 04 → Section 2](./04-forms-view.md) |
| Color-code my map by data values | [Module 02 → Section 5](./02-layers-view.md) |
| Ask the AI a spatial question | [Module 06 → Section 2](./06-geova-ai-chat.md) |
| Find realistic AI prompt examples | [Module 06 → Section 5](./06-geova-ai-chat.md) |
| Export a PDF map | [Module 10](./10-map-pdf-export.md) |
| Import a CAD / DXF drawing | [Module 12](./12-cad-manager.md) |
| Export features as DXF | [Module 12 → Section 3](./12-cad-manager.md) |
| Generate engineering drawing pages | [Module 13](./13-engineering-drawing-export.md) |
| Import a Shapefile (.shp) | [Module 14](./14-shp-manager.md) |
| Export features as SHP | [Module 14 → Section 3](./14-shp-manager.md) |
| Invite a team member | [Module 07 → Section 3](./07-team-view.md) |
| Measure a distance on the map | [Module 03 → Section 5](./03-map-view.md) |
| Sync data between devices offline | [Module 05 → Section 5](./05-data-view.md) |
| Measure terrain slope | [Module 09](./09-slope-profiler.md) |
| Configure map settings | [Module 08 → Section 3](./08-settings.md) |
| Check what a feature requires | [Module 15](./15-capability-reference.md) |
| Prepare devices for offline fieldwork | [Module 15 → Section 12](./15-capability-reference.md) |
| Follow a complete sample project | [Module 16](./16-sample-project-municipal-asset-inspection.md) |
| Understand a Mapplex or GIS term | [Module 17](./17-glossary-key-concepts.md) |

---

## Language Support

Mapplex supports:
- **English** - default interface language
- **Arabic (العربية)** - RTL interface support

The interface language adapts automatically based on your device settings, or can be manually toggled in **Settings → Language**.

---

*Mapplex v1.0.0*
