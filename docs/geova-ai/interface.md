---
title: Geova AI Capabilities & Orchestration
description: Exhaustive documentation regarding Geova AI's orchestration logic, Tool Generation, and Self-Healing Error Recovery networks.
order: 1
---

---
title: Geova AI Protocol
description: Interact conversationally with your maps using the autonomous artificial intelligence spatial agent.
---

# Geova AI Protocol

## Overview
**Geova AI** is your dedicated, autonomous spatial orchestrator. Instead of clicking through twenty different menus to measure proximity or filter dense features, you can simply type your request in plain English. The AI understands complex geographic relationships and will immediately generate real-time visual results on your map.

## Action Steps

### 1. Execute a Natural Language Query
1. Open the Chat Interface on the right side of your dashboard.
2. Type a command focused on the data you want to analyze. For example:
   *"Visualize all points losing more than 5 meters of coastline per year."*
3. Geova AI will parse your intent, query the exact layer, and render the results directly onto the map as a new "Ghost Layer".

### 2. Reviewing Healed Results
Sometimes, a highly specific query (e.g., *"Show me all Emergency Shelters within 2 km"*) might return absolutely 0 results. Instead of failing silently:
1. Geova AI will proactively and autonomously expand its search parameters (e.g., expanding the search to 50 km).
2. Look at the data table—you will see a subtle system notification detailing exactly how the AI "self-healed" the query to ensure you got actionable data!

## Pro-Tips
> 💡 **Tip:** Be as specific as possible with layer names! If you're analyzing a layer called "Carbon Sequestration Regions", use those exact words so the AI can match your intent flawlessly to the database schema.

> 💡 **Tip:** Notice the dashed purple outlines around your results? That is the Ghost Layer—it persists non-destructively so you can compare the AI's calculation against your original raw data.

---

## Technical Architecture (For Developers)

Geova separates intent parsing from mathematical execution natively inside the browser context.

- **Dynamic Precision Tools (`toolDefinitionGenerator.js`):** LLMs historically hallucinate database keys. Geova AI mitigates this by silently scanning the active `DataView` layers every single prompt. It reads the specific types (`FLOAT`, `VARCHAR`) and synthesizes specialized JSON-RPC tool schemas dynamically. The AI is structurally prohibited from hallucinating parameter keys because its tool-set is transient and scoped exclusively to the active layer.
- **Self-Healing Error Recovery (`agenticFallback.js`):** Geova implements explicit Semantic Triggers that capture topological crashes or Null Island errors mid-flight. For example, if a `turf.intersect` executes but returns an empty array, `FIND_NEAREST_EMPTY_TARGET` fires inside the Fallback module, dynamically expanding Buffer properties by an exponential multiplier and recursively executing the DAG to force geometric coverage.
