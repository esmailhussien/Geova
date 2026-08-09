---
title: Authentication View (AuthView)
description: Technical and user documentation covering the Enterprise Authentication Layer and isolated Offline Guest operations.
---

# Authentication View: Exhaustive Documentation

## 1. Executive Overview
The **Authentication View** (`AuthView.js`) serves as the strict security gatekeeper for the Geova GIS Enterprise platform. It manages identity assertion, password life-cycles, and cloud-hosted data authorization boundaries. 

Beyond standard authentication, it accommodates extreme field workflows by offering a dedicated **Offline Guest Mode**. Whether teams are syncing heavy Topographical Hosted Data over gigabit fiber, or operating completely disconnected while conducting **Arctic Ice Measurements**, the Auth View routes the topological capabilities appropriately.

---

## 2. UI/UX Breakdown (Microscopic)

### The Cloud Identity Gateway
- **Dynamic Header Hierarchy:** The central title algorithmically shifts between *Sign in to access your field data* vs *Sign up to request access to the workspace*, providing immediate context.
- **Visual Feedback Engine:** All submit buttons (`Sign In`, `Create Account`, `Send Reset Link`) feature a rigid state-machine. Clicking instantly disables the button, dims the opacity, shifts the inner-text (e.g. to "Signing In..."), and reveals a fluid CSS-keyframe SVG spinner. This prevents server-spamming if a spatial engineer has poor connectivity.
- **Hosted Data Integration:** User identities map directly to hosted cloud databases, guaranteeing zero-trust isolation between workspaces.

### Security Warning Architecture
- **Error Injection Banners:** If authentication logic fails (e.g., incorrect passwords, or connection drops), a highly visible red banner (`bg-red-50 text-red-600`) injects directly above the submit button without shifting layout dimensions unpredictably.
- **Device Limit Interception:** The UI features a specialized edge-case interception alert. If a worker attempts to log in but hits the server's strict device quota, a unique `devices_off` Material Icon renders alongside a specific "Device Limit Reached" sub-warning, instructing the user to deregister a device.

### The Isolated Edge Workflow
- **Continue as Guest (Local Offline):** At the absolute bottom of the boundary, a distinct Emerald-colored `public` orb signifies the Air-Gapped mode. This enables pure `sessionStorage` local caching, cutting off all cloud-hosted data requests and letting field workers gather vectors (e.g., **Deep Jungle Biosphere Scans**) completely offline.

---

## 3. User Guide

### Step 1: Requesting Hosted Cloud Access
If you are joining an active project logging **Global Oceanic Spills**:
1. Open the Sign In view and tap **Need an account? Sign Up**.
2. Input your `Full Name`, `Email Address`, and a strong `Password`, then confirm it.
3. Click **Create Account**.
4. The system validates the length of the string, bounces it against the cloud data server, and visually pushes you to an `Account Pending` screen until the workspace administrator formally unlocks your tier.

### Step 2: Emergency Recovery (Forgot Password)
If a field commander forgets their credential hash:
1. Tap the Indigo **Forgot password?** link.
2. The UI flips to a `lock_reset` specialized interface without losing window context. 
3. After submitting the email, the worker will receive a specialized magic link from the cloud server.
4. Clicking the magic link from their inbox routes them back natively into Geova with the hash `#type=recovery`. The `AuthView` detects this hash upon render and dynamically shifts into "Set New Password" mode directly.

### Step 3: Engaging Offline Deployment
If you are deploying to a region with absolutely zero cellular connectivity to track **Arid Desertification Boundaries**:
1. Boot the application.
2. Tap the bottom **Continue as Guest (Local Offline)** button.
3. The Auth Engine sets an explicit `guestMode = true` flag in your device cache and unlocks the Map Interface. No hosted data is fetched; all drawings are stored tightly to the local device's internal SQLite instance.

---

## 4. Technical Architecture (For Developers)

The `AuthView.js` bypasses heavy framework routers, relying purely on JavaScript event delegation (`document.dispatchEvent(new CustomEvent('auth-change'))`) to rapidly shift DOM trees, conserving mobile battery life.

### Dynamic Route Hashing
- Historically, single-page apps (SPAs) struggled with routing during email-based password resets because the server has to reload the entire index DOM.
- Geova leverages a pre-flight hook: `window.location.hash.includes('type=recovery')`. Before the AuthView ever mounts the login HTML, it sniffs the browser's raw URL payload. If it detects a magic-link signature, it intercepts the render pipeline entirely and instantly injects the `renderResetPasswordView()` function instead.

### Destructive Memory Overrides
When an active session clicks `Sign Out` from the **Pending View**, the engine executes `AuthManager.signOut()` and clears the local session state, so the next user on the tablet cannot reuse the previous user's hosted workspace session.
