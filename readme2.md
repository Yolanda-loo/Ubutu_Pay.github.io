Here is the full, updated version of your `README.md` file incorporating all the latest details, correct project structure, and the instructions for your new features.

You can copy and paste this directly into your **[README.md](https://github.com/Yolanda-loo/Ubutu_Pay.github.io)** file on GitHub:

```markdown
# UbuntuPay - Offline-First Biometric Payment PWA

UbuntuPay is a fully interactive, offline-first Progressive Web App (PWA) that demonstrates a secure, modern biometric payment flow. This project simulates the entire user journey, from registration and identity verification to making payments in South African Rands (ZAR) authenticated by Face ID or Fingerprint scanning.

Built as a single-page application using vanilla JavaScript, HTML, and Tailwind CSS, UbuntuPay focuses on delivering a realistic financial user experience with a resilient offline-first architecture.

---

## ✨ Key Features

UbuntuPay provides a feature-rich simulation of a fintech application, emphasizing usability, security, and offline capabilities.

### Authentication & Security
* **Dual Login Methods:** Log in using email/password or one-touch Biometric Login (simulated).
* **New User Registration:** Streamlined registration form for new users.
* **Mandatory Onboarding Flow:** New users complete a guided verification process:
  * **ID Verification:** Upload front and back of a government-issued ID (simulated).
  * **Face Registration:** Set up Face ID for in-app payments (simulated).
  * **Profile Management:** Update name, contact details, and a secret recovery code.
  * **Security Alerts:** Enable simulated SMS/email notifications for suspicious activity.

### Core Financial & UI Features
* **Live Dashboard:** Displays a personalized greeting and real-time account balance in ZAR.
* **Send Money:** Send custom amounts to specified recipients with a dynamic flow.
* **Deposit & Withdraw:** Simple forms to add or remove funds from the account.
* **Transaction History:** Instantly updates with details of payments, deposits, or withdrawals.
* **Custom Toast Notifications:** Replaced traditional browser alerts with modern, animated floating popups for cleaner user feedback.

### Biometric Integration
* **In-App Payment Authentication:** Sensitive transactions (e.g., sending money, withdrawals) require biometric approval via simulated Face ID or Fingerprint modals.
* **Biometric Login:** Fast, secure access for returning users without a password.

### Offline-First PWA
* **Offline Functionality:** Service worker caching ensures full functionality without an internet connection after the first visit.
* **Installable:** Web manifest enables "Add to Home Screen" on mobile devices or desktop installation for a native-like experience.

---

## 🚀 Getting Started

To run UbuntuPay locally, you need to serve the files via a local web server, as service workers require a secure context (`http://` or `https://`).

### Prerequisites
* A modern web browser (e.g., Chrome, Firefox, Edge).
* A code editor like Visual Studio Code.
* (Optional) Node.js for alternative server setups.

### Installation & Setup
1. **Clone or Download the Repository:**
   ```bash
   git clone [https://github.com/Yolanda-loo/Ubutu_Pay.github.io.git](https://github.com/Yolanda-loo/Ubutu_Pay.github.io.git)
   cd Ubutu_Pay.github.io

```

2. **Run with a Local Server:**
* **Using VS Code Live Server:** Install the Live Server extension, right-click `index.html`, and select **Open with Live Server**.
* **Using Node.js:**
```bash
npx http-server -p 8080

```


Then navigate to `http://localhost:8080` in your browser.



---

## 📁 Project Structure

```text
Ubutu_Pay.github.io/
├── css/             # Modular stylesheets
├── js/              # Modular application scripts
├── index.html       # Main application entry point
├── manifest.json    # PWA manifest for app metadata and icons
└── sw.js            # Service worker for offline caching

```

---

## 🛠️ Additional Notes

* **Browser Compatibility:** Tested on modern browsers (Chrome, Firefox, Edge, Safari). Ensure your browser supports service workers for offline functionality.
* **Security:** This is a simulation; no real biometric data or financial transactions are processed.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## 🙋 FAQ

* **Q: Can I use real biometric data with UbuntuPay?**
A: No, UbuntuPay is a simulation. All biometric interactions (Face ID, Fingerprint) are mocked for demonstration purposes.
* **Q: Does the app work offline?**
A: Yes, after the first visit, the service worker caches the app, enabling full functionality offline.
* **Q: How do I install the app?**
A: On mobile, use your browser’s "Add to Home Screen" option. On desktop, use the browser’s install prompt (if supported).

---

## 📬 Contact

For questions or feedback, reach out to the project maintainer:

* **GitHub:** [Yolanda-loo](https://github.com/Yolanda-loo)
* **Email:** londie970918@gmail.com

```

```
