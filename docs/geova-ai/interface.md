---
title: Geova AI Capabilities & Orchestration
description: Conversational spatial analysis, structured requests, and reviewable map results.
order: 1
---

---
title: Geova AI Protocol
description: Interact conversationally with your maps using the Geova AI spatial assistant.
---

# Geova AI Protocol

## Overview
**Geova AI** is a conversational spatial analysis assistant. You can describe a filter, proximity check, or other supported operation in plain language, then review the generated query and map result before saving it.

## Action Steps

### 1. Execute a Natural Language Query
1. Open the Chat Interface on the right side of your dashboard.
2. Type a command focused on the data you want to analyze. For example:
   *"Find all hydrants within 500 meters of a school and show the results on the map."*
3. Geova AI will parse your intent, query the exact layer, and render the results directly onto the map as a new "Ghost Layer".

### 2. Reviewing Healed Results
Sometimes a specific query might return no results. In that case:
1. Review the generated query and confirm that the layer, field values, and distance are correct.
2. Broaden the distance or adjust the filter yourself, then run the revised request.

## Pro-Tips
> **Tip:** Use the layer and field names shown in the app. For example, name the inspection layer and the inspection status value you want to find.

> 💡 **Tip:** Notice the dashed purple outlines around your results? That is the Ghost Layer—it persists non-destructively so you can compare the AI's calculation against your original raw data.

---

## Technical Architecture (For Developers)

Geova separates intent parsing from mathematical execution natively inside the browser context.

- **Dynamic Precision Tools (`toolDefinitionGenerator.js`):** The active layers and field types are used to constrain generated requests to the current project context.
- **Result Recovery (`agenticFallback.js`):** When an operation fails or produces no results, the workflow can report the issue and suggest a revised request. The user reviews any broader filter or distance before running it.
