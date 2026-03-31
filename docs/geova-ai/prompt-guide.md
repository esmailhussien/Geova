---
title: Geova AI Prompt Guide
description: Master the 40+ spatial capabilities of Geova AI utilizing optimized natural language prompting.
---

# Geova AI Prompt Guide

Geova seamlessly bridges natural language and advanced Geographic Information Systems. The underlying client-side DAG Compute Engine natively supports over 40 distinct spatial operations.

To yield deterministic, high-fidelity spatial analytics, it is critical to structure your queries clearly. Below is a comprehensive guide to prompting the Geova AI system, categorized by major GIS operations with practical global scenarios.

---

## 1. Proximity & Buffer Analysis

Calculate definitive relationships between features utilizing physical radii and proximity.

**Triggered Operations:** `CREATE_BUFFER`, `MULTI_RING_BUFFER`, `FIND_NEAREST`

> **Sample Query 1**  
> *"Map all electric vehicle charging stations located within a 5km radius of downtown Silicon Valley."*

> **Sample Query 2**  
> *"Identify the 3 closest emergency response centers to the primary hospital cluster in Tokyo."*

---

## 2. Containment & Spatial Joins

Isolate features strictly based on their geometric intersection or absolute containment within administrative boundaries or custom polygonal zones.

**Triggered Operations:** `SPATIAL_JOIN`, `BOOLEAN_INTERSECT`, `BOOLEAN_DIFFERENCE`

> **Sample Query 1**  
> *"Show me all commercial real estate properties situated inside the Manhattan high-density zoning boundaries."*

> **Sample Query 2**  
> *"Calculate the exact spatial intersection between projected flood zones and the residential land parcels of Miami."*

---

## 3. Spatial Aggregation & Clustering

Condense massive, noisy point datasets into immediate, insightful summarizations to visualize operational density.

**Triggered Operations:** `SPATIAL_GROUP_BY`, `GENERATE_GRID`, `SPATIAL_CLUSTER`

> **Sample Query 1**  
> *"Generate a 500-meter hexagon grid over London and calculate the total number of reported traffic incidents within each cell."*

> **Sample Query 2**  
> *"Cluster the historical crime dataset in Chicago into 5 distinct high-risk zones utilizing K-Means algorithms."*

---

## 4. Gap & Coverage Analysis

Uncover hidden vulnerabilities, blind spots in critical service networks, or delineate complex service territories mathematically.

**Triggered Operations:** `COMPUTE_GAP_ANALYSIS`, `GENERATE_VORONOI`, `AREAL_INTERPOLATION`

> **Sample Query 1**  
> *"Show me the coverage blind spots where residential neighborhoods in Central London have no fire stations within a 2-kilometer radius."*

> **Sample Query 2**  
> *"Generate Voronoi mathematical partitions around all active cell network towers in California to delineate distinct service catchment areas."*

---

## 5. True Network Routing & Travel Dynamics

Execute complex time/distance algorithms utilizing authentic street network topography (via OpenStreetMap) rather than linear straight-line estimations.

**Triggered Operations:** `COMPUTE_SERVICE_AREA`, `COMPUTE_OD_MATRIX`

> **Sample Query 1**  
> *"Compute an Origin-Destination (OD) travel cost matrix from our 5 regional distribution centers to all major retail store locations in Paris."*

> **Sample Query 2**  
> *"Calculate the true 15-minute drive-time service coverage area (Isochrone) radiating out from the central emergency hospital facility."*

---

## 6. Complex Chained Queries (Multi-Step DAG Execution)

The defining advantage of Geova AI lies in its sophisticated ability to sequence multiple spatial operations securely into a continuous pipeline via the DAG Compute Engine. Users can execute profound, compound procedures via a single conversational instruction.

**Triggered Operations:** Full Autonomous Analytical Pipelines

> **Sample Query 1**  
> *"Create a 2km buffer around all subway stations in New York, THEN intersect those buffers with high-density residential zones, and FINALLY aggregate the total population within those intersections."*

> **Sample Query 2**  
> *"Extract all accessible green spaces in Toronto, find the nearest 3 schools to each individual space, and export the resulting table."*

---

## 7. Visual Styling & Render Directives

Beyond pure spatial calculus, the Geova AI engine grants users direct control over output rendering. You can command the engine to dynamically stylize, color-code, or transform geometries prior to rendering them onto the active workspace.

**Triggered Capabilities:** Dynamic Visualization, Heatmaps, Custom Cartography Styling

> **Sample Query**  
> *"Calculate the spatial density of historic landmarks in Rome and render the output as a dynamic heatmap."*

---

## 8. Schema Tolerance & Fuzzy Matching

Enterprise databases invariably utilize dense, technically rigorous nomenclature (e.g., `public_health_fac_v2`). The Geova AI Orchestrator functions as an intelligent semantic bridge, eliminating the prerequisite to accurately memorize database layer terminology.

**Triggered Capabilities:** Semantic Resolution, NLP Layer Mapping, Fuzzy Schema Matching

> **How it Works**  
> You can simply employ conversational terminology such as *"clinics"*, *"hospitals"*, or *"healthcare networks"*. The semantic engine will automatically and accurately resolve your natural phrasing against the definitive architectural constraints of the underlying spatial schema.
