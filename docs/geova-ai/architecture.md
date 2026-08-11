---
title: Geova AI Architecture
description: How Geova AI combines local spatial processing with Geova Cloud assistance.
---

# Geova AI Architecture

## Overview
Geova AI combines a conversational planning layer with local geospatial processing. The AI service receives the limited context needed to interpret a request, such as schema details, sample field values, and relevant location context. Full datasets and geometries are not uploaded automatically for ordinary chat planning.

## Action Steps

### 1. Working Offline
1. Mapplex data collection, form entry, drawing, and other supported local workflows continue without an internet connection.
2. Geova AI chat requires a signed-in session, network access, and available workspace credits.

### 2. Ensuring Data Privacy
1. When a request is sent, review the context shown by the app and avoid including sensitive values in the prompt itself.
2. Where the operation is supported locally, the spatial calculation runs in the browser. The app does not automatically upload the full project dataset or all geometries for ordinary chat planning.

## Pro-Tips
> **Tip:** Review the generated query and map result before saving it as a project layer. Large layers or complex operations may take longer to complete.

---

## Technical Architecture (For Developers)

Geova AI separates intent parsing from spatial execution so each step can be reviewed and validated.

- **AI Orchestrator**: The semantic brain. Responsible for conversational intent detection and extracting multi-step variables.
- **DAG Compute Engine**: A Web Worker-compatible execution layer that receives structured operation requests and applies supported spatial functions.
- **DAG Result Validator**: Checks result variables for invalid coordinates, empty results, and other conditions before the map is updated.
- **Topological Sorting**: Temporary Spatial Directed Acyclic Graphs compile dependencies (e.g. `Step 1 (Buffer)` logically types into `Step 2 (Intersect)`), mapping the execution path so that overlapping geographic logic executes without infinite loops or race-conditions.
