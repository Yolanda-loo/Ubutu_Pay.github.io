# UbuntuPay - Offline-First Biometric Payment PWA

UbuntuPay is a fully interactive, offline-first Progressive Web App (PWA) that demonstrates a secure, modern biometric payment flow.
This project simulates the entire user journey, from registration and identity verification to making payments in South African Rands (R) authenticated by
Face ID or Fingerprint scanning.

This application is built as a single-page experience using vanilla JavaScript, HTML, and Tailwind CSS, focusing on a realistic user
flow and a resilient offline-first architecture.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Key Features

This application is a feature-rich simulation designed to showcase a complete financial tech user experience.

#### **Authentication & Security**
- **Dual Login Methods:** Users can log in using a traditional email/password form or with a one-touch **Biometric Login** (simulated).
- **New User Registration:** A clean registration form for new users.
- **Mandatory Onboarding Flow:** New users are guided through a mandatory verification process before accessing the app:
  1.  **ID Verification:** Upload front and back of a government-issued ID.
  2.  **Face Registration:** Set up Face ID for in-app payments.
- **Enhanced Profile Settings:** Users can manage their name, contact info, and a secret recovery code.
- **Security Alerts:** A setting to enable simulated SMS/Email alerts for suspicious activity.

#### **Core Financial Features**
- **Live Dashboard:** A central hub that greets the user by name and displays their **real-time account balance** in Rands (R).
- **Send Money:** A dynamic flow to send a custom amount to a specified recipient.
- **Deposit & Withdraw:** Simple forms to add or remove funds from the account balance.
- **Live Transaction History:** The transaction list updates instantly after any successful payment, deposit, or withdrawal.

#### **Biometric Integration**
- **In-App Payment Authentication:** All sensitive transactions (sending money, withdrawing) require biometric approval, with realistic simulation modals for both **Face ID** and **Fingerprint** scanning.
- **Biometric Login:** Fast and secure access for returning users without needing a password.

#### **Offline-First PWA**
- **Offline Functionality:** Thanks to a service worker, the application is cached on the first visit and works perfectly without an internet connection on subsequent visits.
- **Installable:** The app includes a web manifest, allowing users to "Add to Home Screen" on mobile devices or install it as a desktop app for a native-like experience.

---

## 🚀 Getting Started

To run this project locally, you must serve the files from a local web server. This is because service workers (for offline functionality) require a secure `http://` 
or `https://` context.

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge).
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).

### Installation & Setup

1.  **Clone or Download the Repository:**
    ```bash
    git clone https://github.com/yoland-loo/ubuntupay-app.git
    cd ubuntupay-app
    ```

2.  **Ensure Project Structure:**
    Your folder should contain the following three files:
    - `index.html`
    - `manifest.json`
    - `sw.js`

3.  **Run with a Local Server (Recommended):**
    The easiest way to run the project is with the **Live Server** extension in VS Code.
    - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from the VS Code marketplace.
    - Right-click on the `index.html` file in your VS Code explorer.
    - Select **"Open with Live Server"**.
    - Your browser will automatically open the application at a local address like `http://127.0.0.1:5500`.

---

## 📖 How to Use the Application

#### **New User Onboarding**
1.  Click the **Register** button.
2.  Fill in your details and click **Create Account**.
3.  You will be guided through the mandatory verification process:
    - **Step 1:** Upload simulated front and back ID images.
    - **Step 2:** Complete the simulated face scan.
4.  After finishing the setup, you will be taken to the main dashboard.

#### **Returning User Login**
- **Biometric Login:** Click **"Login with Biometrics"**. After the fingerprint simulation, you will be logged in.
- **Password Login:** Enter the default credentials (`john.doe@example.com` / `password`) and log in.

#### **Making a Transaction**
1.  From the dashboard, choose **Send Money**, **Deposit**, or **Withdraw**.
2.  Enter the required details (e.g., recipient and amount).
3.  For sending or withdrawing money, choose either **Face ID** or **Fingerprint** to approve the transaction.
4.  Observe the realistic simulation modal.
5.  Upon success, your dashboard balance will update, and the new transaction will appear at the top of your **History**.

---

## 📁 Project Structure

```
/
├── index.html       # The main application file containing all HTML, CSS, and JS logic.
├── manifest.json    # The PWA manifest for app properties and icons.
└── sw.js            # The service worker script for offline caching.

