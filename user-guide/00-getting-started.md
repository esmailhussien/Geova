# Module 00: Getting Started & Onboarding

> This module walks you through installing Mapplex, signing in, and creating your first workspace — step by step.

---

## 1. Installing Mapplex (Progressive Web App)

Mapplex is deployed as a **Progressive Web App (PWA)**. You install it once from your browser and it runs like a native app — no App Store required. Once installed, the app and your cached data work even without an internet connection.

### On iOS / Safari

1. Open Safari and navigate to your Mapplex URL.
2. Tap the **Share** button (the square with an upward arrow).
3. Scroll down and tap **Add to Home Screen**.
4. Confirm the name "Mapplex" and tap **Add**.
5. Close Safari. Tap the new Mapplex icon on your home screen to launch in full-screen.

### On Android / Chrome

1. Open Chrome and navigate to your Mapplex URL.
2. A banner usually appears at the bottom: **"Add Mapplex to Home screen"** — tap it.
3. If no banner appears, tap the **three-dot menu** (⋮) in the upper right.
4. Select **Install App** or **Add to Home Screen**.
5. Launch directly from your device's app drawer.

> **Why a PWA?** App Store installs restrict deep local cache access and can force unwanted updates. A PWA locks the application payload to your device, guaranteeing that your offline map tiles and local databases launch reliably even in a dead-zone forest.

---

## 2. Authentication

Mapplex offers three ways to access the platform. When you first launch, you'll see the Auth View with the Mapplex logo.

### Option A: Sign In with Email & Password

1. Enter your **Email Address** in the email field.
2. Enter your **Password**.
3. Tap **Sign In**.

The system remembers your last email for faster subsequent logins.

### Option B: Create an Account (Sign Up)

1. On the Sign In screen, tap **"Need an account? Sign Up"** at the bottom.
2. Enter your **Full Name**, **Email Address**, and **Password** (minimum 6 characters).
3. Confirm your password in the second password field.
4. Tap **Create Account**.
5. Check your inbox for a confirmation link — click it to activate your account.

> **Note:** After creating an account, your administrator may need to approve your access. If your account is pending, you will see an **"Account Pending"** screen informing you that administrator approval is required.

### Option C: Continue as Guest (Local Offline)

If you don't want to create an account yet, tap **"Continue as Guest (Local Offline)"** at the bottom of the Auth screen. Guest mode stores all data locally on your device — no cloud sync, no team features.

> **⚠️ Guest Limitation:** Guest data lives only on your device. If you lose your device, the data is gone. Create an account to back up to the cloud.

### Forgot Your Password?

1. On the Sign In screen, tap **"Forgot password?"** (located next to the Password label).
2. Enter your account email.
3. Tap **Send Reset Link**.
4. Open the link from your inbox — you'll be prompted to enter and confirm a new password.

### Device Limit

Your account supports up to **2 active devices**. If you see a "Device Limit Reached" error, you must log out of another device or de-register it from the Mapplex Settings panel before signing in here.

---

## 3. Creating Your First Workspace

In Mapplex, user accounts don't hold data — **Workspaces** do. A Workspace is a secure, isolated container that holds billing configuration, team members, and all geographic projects underneath it.

After your first login (or immediately as a guest), the system routes you to the **Dashboard View** where you can create your very first project.

> **Example:** A freelance GIS consultant might work for "Miami City Planning" on Monday and "Global Telecom Solutions" on Tuesday. They have one user account that switches between two isolated Workspaces, ensuring Miami's data never leaks into the Telecom database.

> **Next:** Proceed to [Module 01: The Project Dashboard](./01-dashboard-view.md) to create your first project.
