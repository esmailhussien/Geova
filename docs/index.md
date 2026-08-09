---
title: Mapplex Documentation
description: Master Index and Platform Architecture Philosophy.
order: 1
---

# Mapplex Documentation

Mapplex is built to solve one fundamental problem: **Off-grid spatial data collection**.

Unlike applications that depend on a continuous cloud connection, Mapplex follows a *local-first* model. Working data is stored on the device first and synchronized with Geova Cloud when connectivity is available.

## Platform Philosophy

1. **Local storage first**: Form entries, feature edits, and project settings are written to local device storage before synchronization.
2. **Background synchronization**: Pending changes are queued locally and sent to Geova Cloud when a usable connection is available.
3. **Offline continuity**: Collection and other supported local workflows remain available without a continuous internet connection. Cloud sync, team collaboration, and Geova AI require connectivity.

## Master Index

### 1. Platform & Core Engine
Deep dive into the underlying systems that power Mapplex's speed.
- [Offline Sync & Storage Engine](./core-engine/offline-sync.md)
- [Authentication & Device Identity](./core-engine/auth.md)

### 2. User Interfaces & Workflows
Screen-by-screen architectural breakdowns of the entire platform.
- [Dashboard & Project Manager](./screens/dashboard/index.md)
- [Map Interface & Tracking](./screens/map-interface/index.md)
- [Layer Manager](./screens/layers-view.md)
- [Form Builder & Smart Logic](./screens/forms-view.md)
- [Data & Offline Local Sync](./screens/data-sync.md)
- [Admin Dashboard](./screens/admin-view.md)

### 3. Geova AI (Spatial Compute Engine)
The autonomous analysis pipeline.
- [Geova Spatial DAG Engine](./geova-ai/interface.md)
