---
title: Authentication & Login
description: Securely access your hosted GIS workspaces or continue local work when connectivity is unavailable.
---

# Authentication & Login

## Overview
The **Authentication View** is the entry point for Geova Cloud workspaces and local Guest Mode. It supports sign-in, account requests, password recovery, and local work when connectivity is unavailable.

## Action Steps

### 1. Sign In to Your Workspace
If you already have an account setup by your administrator:
1. Enter your registered email address and password.
2. Tap **Sign In**.
3. If successful, Mapplex opens the main Dashboard.

### 2. Request a New Account
If you are a new field engineer needing access:
1. Tap **Need an account? Sign Up**.
2. Input your `Full Name`, `Email Address`, and a strong `Password`.
3. Click **Create Account**.
4. You will see an `Account Pending` screen. Your administrator will need to approve your account before you can sync cloud data.

### 3. Deploy in Offline Guest Mode
Operating in a region with zero cellular connectivity?
1. At the bottom of the screen, tap the green **Continue as Guest (Local Offline)** button.
2. This drops you directly into the map interface without requiring a cloud connection. Note: All data collected here is stored locally on your device.

## Pro-Tips
> 💡 **Tip:** If you forget your password, simply tap **Forgot password?**. We will send a secure magic link straight to your email that allows you to reset it instantly without leaving the app.

> 💡 **Tip:** Pay attention to alerts! If you hit a device limit, a red banner will instruct you to deregister an old tablet before logging in on a new one.

---

## Technical Architecture (For Developers)

The `AuthView.js` manages sign-in, registration, password recovery, pending approval, and Guest Mode.

- **Session Handling:** Announces authentication changes through the app's `auth-change` event so dependent views can refresh their state.
- **Dynamic Route Hashing:** Intercepts password reset magic links directly from URL hashes (`#type=recovery`) to inject reset forms pre-flight, preventing unnecessary React DOM repaints.
- **Data Wipes:** Logging out executes `AuthManager.signOut()` and clears locally cached session data so the next user cannot reuse the previous session on the device.
