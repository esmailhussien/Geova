# 🌍 Mapplex User Guide

> **Mapplex** — *Mapping & Beyond*
> **Geova AI** — *Your Spatial Intelligence Co-Pilot*

---

Welcome to the official **Mapplex User Guide** — your complete reference to mastering the platform from first login to advanced spatial analytics powered by Geova AI.

Mapplex is an **offline-first geospatial operations platform** built for teams that collect, manage, analyze, and report field data. Whether you're a solo environmental researcher mapping endangered habitats or a municipal enterprise managing 50 field inspectors across an entire city — Mapplex gives you the tools to do it all from a single application, online or off.

---

## Who Is This Guide For?

This guide is written for **everyone** on your team, regardless of technical background:

| Role | What You'll Learn |
|------|-------------------|
| 📍 **Field Collector** | How to collect points/lines/polygons, attach photos, fill forms, and work completely offline |
| ✏️ **Supervisor / Editor** | How to review collected data, edit geometries, merge/split shapes, and export reports |
| 📊 **GIS Analyst** | How to import shapefiles, run spatial queries, use data-driven symbology, and leverage Geova AI |
| 🔑 **Admin / Program Manager** | How to manage teams, assign roles, monitor KPIs, handle billing, and configure workspaces |

---

## Five Real-World Workflows to Inspire You

Before diving into the modules, here are five practical scenarios that show how Mapplex works end-to-end:

### 🌪️ 1. Disaster Response & Recovery

> **The Situation:** A hurricane has knocked out cell towers. Field teams need to assess building damage in an area with zero connectivity.

**The Workflow:**
- Before leaving base, supervisors use the **Map View** to download offline tiles of the impact zone
- In the field, workers use the **Form Builder** to log damaged structures with photos and severity ratings
- Because cell towers are down, they use **Local Peer-to-Peer Sync** to share data with nearby colleagues over a portable Wi-Fi router — no internet needed
- Back at base, the commander asks **Geova AI**: *"Draw 1km and 5km blast radii around the impact site and calculate total affected acreage"*

---

### 🏙️ 2. Smart City Asset Management

> **The Situation:** A municipality needs to track street-light inspections by 30 contractors while preventing data deletion.

**The Workflow:**
- The city manager invites contractors as **Collectors** via the **Team View**, blocking delete permissions
- Using **Smart Logic** in the Form Builder, an inspection form auto-triggers a cost formula when a light is marked "Broken"
- The **Performance Dashboard** shows each contractor's completion rate and the **Leaderboard** identifies top performers
- At the end of the week, the manager exports a **Map PDF** with legend, scale bar, and north arrow for the city council meeting

---

### 🌱 3. Environmental Audits & Compliance

> **The Situation:** An agency needs every wildlife sighting automatically tagged with its political district — without requiring field workers to know district borders.

**The Workflow:**
- The agency imports district boundary polygons into the **Data View** as a **Spatial Reference Layer**
- Using **Auto-Calculate from Spatial Reference** in the Form Builder, every new point is automatically tagged with the district it falls inside
- When the audit is complete, they ask **Geova AI**: *"Analyze the logs, detect anomalies, and export a PDF report"*

---

### 🏗️ 4. Urban Planning & Site Selection

> **The Situation:** A city planner needs to find the optimal location for a new public library.

**The Workflow:**
- The planner imports demographic shapefiles and wetland boundaries via the **Data View**
- They apply **Graduated Symbology** in the **Layers View** to color-code neighborhoods by population density
- They ask **Geova AI**: *"Find optimal construction sites that are > 5km from wetlands, < 1km from highways, and inside high-density neighborhoods"*
- The AI clusters results and generates **Voronoi catchment polygons** for the proposed sites

---

### 🏥 5. Public Health & Outbreak Tracking

> **The Situation:** Epidemiologists need to track a disease outbreak's geographic spread over six months.

**The Workflow:**
- Using the **Dashboard SQL Engine**, researchers filter case data by symptoms and date ranges
- They activate the **Time Slider** in the Map View to animate the outbreak's geographic movement
- They ask **Geova AI**: *"Analyze the outbreak dataset"* — the AI proactively flags a 300% infection spike in a rural zone and recommends medical team dispatch

---

## The Complete Guide

Follow the modules in order for a full walkthrough, or jump directly to the section you need:

| # | Module | What You'll Learn |
|---|--------|-------------------|
| [**00**](./00-getting-started.md) | **Getting Started & Onboarding** | Installing the PWA, signing in (Email / Guest / Pending), multi-device limits |
| [**01**](./01-dashboard-view.md) | **The Project Dashboard** | Creating projects, hosted vs. local storage, sync status, AI SQL Query Engine |
| [**02**](./02-layers-view.md) | **Layers & Symbology** | Geometry types, styling, categorical/graduated classification, completion tracking, Data Dictionary |
| [**03**](./03-map-view.md) | **The Map Engine** | Drawing tools, GPS tracking, auto-track, offline tiles, measurements, split/merge, sketch mode |
| [**04**](./04-forms-view.md) | **Forms & Smart Logic** | 10 field types, spatial auto-fill, schema import, Lexicon picklists, AI-assisted conditional rules |
| [**05**](./05-data-view.md) | **Data & Sync** | Export (JSON/KMZ/GPKG/CSV), import with magic byte detection, spreadsheet wizard, P2P sync, reference zones |
| [**06**](./06-geova-ai-chat.md) | **Geova AI Assistant** | Natural language queries, @mention layers, display modes, DAG orchestration, export/commit results |
| [**07**](./07-team-view.md) | **Team & Collaboration** | Performance KPIs, sparkline charts, leaderboards, member roster, invite system, role management |
| [**08**](./08-settings.md) | **Settings, Account & Workspace** | 14 app settings, device management, workspace switcher, offline maps, subscriptions & entitlements |
| [**09**](./09-slope-profiler.md) | **Slope Profiler** | Digital clinometer HUD, cross-section profiles, calibration, severity-coded readings |
| [**10**](./10-map-pdf-export.md) | **Map PDF Export** | Page layout, title/notes, legend with classification expansion, print-quality generation |
| [**11**](./11-troubleshooting.md) | **Troubleshooting & FAQ** | Common issues, GPS tips, import/export debugging, AI accuracy, performance optimization |
| [**12**](./12-cad-manager.md) | **CAD Manager (DXF)** | Import DXF files with smart CRS detection, export features as DXF, UTM zone intelligence, Pro feature |
| [**13**](./13-engineering-drawing-export.md) | **Engineering Drawing Export** | Technical schematics with dimension lines, vertex labels, angles, area/perimeter summaries |
| [**14**](./14-shp-manager.md) | **Shp Manager (SHP)** | Import/export ESRI Shapefiles with auto CRS from .prj, multi-SHP ZIP, DBF schema preview |

---

## Quick-Start Cheat Sheet

Already comfortable and just need a refresher? Here are the most common tasks at a glance:

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
| Export a PDF map | [Module 10](./10-map-pdf-export.md) |
| Import a CAD / DXF drawing | [Module 12](./12-cad-manager.md) |
| Export features as DXF | [Module 12 → Section 3](./12-cad-manager.md) |
| Generate engineering survey drawings | [Module 13](./13-engineering-drawing-export.md) |
| Import a Shapefile (.shp) | [Module 14](./14-shp-manager.md) |
| Export features as SHP | [Module 14 → Section 3](./14-shp-manager.md) |
| Invite a team member | [Module 07 → Section 3](./07-team-view.md) |
| Measure a distance on the map | [Module 03 → Section 5](./03-map-view.md) |
| Sync data between devices offline | [Module 05 → Section 5](./05-data-view.md) |
| Measure terrain slope | [Module 09](./09-slope-profiler.md) |
| Configure map settings | [Module 08 → Section 3](./08-settings.md) |

---

## Language Support

Mapplex is fully bilingual:
- 🇬🇧 **English** — Default interface language
- 🇸🇦 **Arabic (العربية)** — Full RTL support with dialect-aware AI processing

The interface language adapts automatically based on your device settings, or can be manually toggled in **Settings → Language**.

---

*Mapplex v1.0.0 — Modern Spatial Infrastructure — Powered by Geova AI*
