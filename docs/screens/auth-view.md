---
title: Authentication View (AuthView)
description: Technical and user documentation covering the Enterprise Authentication Layer and isolated Offline Guest operations.
---

---
title: Authentication & Login
description: Securely access your hosted GIS workspaces or deploy instantly to the field in Offline Mode.
---

# Authentication & Login

## Overview
The **Authentication View** is your secure entryway into the Geova platform. Whether you are syncing massive datasets over gigabit fiber in the office, or running completely disconnected deep in the field, this screen ensures your data is protected and available when you need it.

## Action Steps

### 1. Sign In to Your Workspace
If you already have an account setup by your administrator:
1. Enter your registered email address and password.
2. Tap **Sign In**.
3. If successful, you will instantly drop into the main Dashboard. 

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

The `AuthView.js` manages identity assertion securely using isolated zero-trust cloud pipelines. 

- **Session Handling:** Bypasses heavy complex routers by relying purely on rapid JavaScript event delegation (`document.dispatchEvent(new CustomEvent('auth-change'))`) to shift the DOM instantly, saving mobile battery.
- **Dynamic Route Hashing:** Intercepts password reset magic links directly from URL hashes (`#type=recovery`) to inject reset forms pre-flight, preventing unnecessary React DOM repaints.
- **Data Wipes:** Logging out physically executes `AuthManager.signOut()`, securely destroying locally cached JSON Web Tokens (JWT) so the next user handling the iPad cannot access previous session states.
