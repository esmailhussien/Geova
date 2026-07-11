---
title: Authentication
description: Mapplex Auth flows, offline guest fallback, and Geova Cloud integration.
order: 6
---

# Authentication (`AuthView.js`)

The `AuthView` module handles Geova Cloud session management alongside local Guest Mode access.



## Authentication States

1. **Sign In**: Standard email/password verification via Geova Cloud. Upon success, an event is dispatched to trigger `DashboardView` caching logic.
2. **Sign Up**: Registers the user and sends a confirmation email.
3. **Pending Approval**: If a user is registered but requires an admin to unlock their Organization tenant, they are shown a persistent `renderPendingView` screen preventing platform access.
4. **Forgot Password**: The standard password reset loop, utilizing window hash fragments to intercept Geova Cloud reset tokens on callback.
5. **Guest Mode (Local Offline)**: Field workers can opt to "Continue as Guest". This locks the app exclusively to the IndexedDB (Device) storage tier. `AuthManager` drops any active Geova Cloud JWTs. To prevent data leakage, guests cannot pull down company Cloud projects.
