UbuntuPay - Offline-First Biometric Payment PWA
UbuntuPay is a fully interactive, offline-first Progressive Web App (PWA) that demonstrates a secure, modern biometric payment flow. 
This project simulates the entire user journey, from registration and identity verification to making payments in South African Rands (ZAR) authenticated by Face ID or
Fingerprint scanning.
Built as a single-page application using vanilla JavaScript, HTML, and Tailwind CSS, UbuntuPay focuses on delivering a realistic financial user experience with a 
resilient offline-first architecture.


✨ Key Features
UbuntuPay provides a feature-rich simulation of a fintech application, emphasizing usability, security, and offline capabilities.
Authentication & Security

Dual Login Methods: Log in using email/password or one-touch Biometric Login (simulated).
New User Registration: Streamlined registration form for new users.
Mandatory Onboarding Flow: New users complete a guided verification process:

ID Verification: Upload front and back of a government-issued ID (simulated).
Face Registration: Set up Face ID for in-app payments (simulated).


Profile Management: Update name, contact details, and a secret recovery code.
Security Alerts: Enable simulated SMS/email notifications for suspicious activity.

Core Financial Features

Live Dashboard: Displays a personalized greeting and real-time account balance in ZAR.
Send Money: Send custom amounts to specified recipients with a dynamic flow.
Deposit & Withdraw: Simple forms to add or remove funds from the account.
Transaction History: Instantly updates with details of payments, deposits, or withdrawals.

Biometric Integration

In-App Payment Authentication: Sensitive transactions (e.g., sending money, withdrawals) require biometric approval via simulated Face ID or Fingerprint modals.
Biometric Login: Fast, secure access for returning users without a password.

Offline-First PWA

Offline Functionality: Service worker caching ensures full functionality without an internet connection after the first visit.
Installable: Web manifest enables "Add to Home Screen" on mobile devices or desktop installation for a native-like experience.


🚀 Getting Started
To run UbuntuPay locally, you need to serve the files via a local web server, as service workers require a secure http:// or https:// context.
Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
A code editor like Visual Studio Code.
(Optional) Node.js for alternative server setups.

Installation & Setup


Clone or Download the Repository:
bashgit clone https://github.com/yoland-loo/ubuntupay-app.git
cd ubuntupay-app


Verify Project Structure:
Ensure the following files are present:

index.html: Main application file with HTML, CSS, and JS.
manifest.json: PWA manifest for app metadata and icons.
sw.js: Service worker for offline caching.



Run with a Local Server:
The easiest method is using the Live Server extension in VS Code:

Install the Live Server extension.
Right-click index.html in VS Code and select "Open with Live Server".
The app will open in your browser at http://127.0.0.1:5500.

Alternatively, use a simple Node.js server:
bashnpm install -g http-server
http-server -p 8080
Then navigate to http://localhost:8080 in your browser.



📖 How to Use the Application
New User Onboarding

Click Register on the homepage.
Fill in your details and click Create Account.
Complete the mandatory verification process:

Step 1: Upload simulated front and back ID images.
Step 2: Perform a simulated face scan for Face ID setup.


After verification, you’ll be directed to the main dashboard.

Returning User Login

Biometric Login: Select "Login with Biometrics" and complete the simulated fingerprint scan.
Password Login: Use default credentials (john.doe@example.com / password) to log in.

Making a Transaction

From the dashboard, select Send Money, Deposit, or Withdraw.
Enter required details (e.g., recipient and amount for sending money).
For secure transactions (send/withdraw), authenticate using simulated Face ID or Fingerprint.
Upon successful authentication, the dashboard balance updates, and the transaction appears in the History section.


📁 Project Structure
text/ubuntupay-app
├── index.html       # Main application file (HTML, CSS, JS).
├── manifest.json    # PWA manifest for app metadata and icons.
└── sw.js            # Service worker for offline functionality.

🛠️ Additional Notes

Browser Compatibility: Tested on modern browsers (Chrome, Firefox, Edge, Safari). Ensure your browser supports service workers for offline functionality.
Security: This is a simulation; no real biometric data or financial transactions are processed.
Customization: Modify index.html to adjust the UI or logic, or update manifest.json for app metadata (e.g., icons, name).


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Please ensure your code follows the existing style and includes appropriate comments.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙋 FAQ
Q: Can I use real biometric data with UbuntuPay?
A: No, UbuntuPay is a simulation. All biometric interactions (Face ID, Fingerprint) are mocked for demonstration purposes.
Q: Does the app work offline?
A: Yes, after the first visit, the service worker caches the app, enabling full functionality offline.
Q: How do I install the app?
A: On mobile, use your browser’s "Add to Home Screen" option. On desktop, use the browser’s install prompt (if supported).

📸 Screenshots
(Optional: Add screenshots of the app’s dashboard, biometric modals, or transaction flows to visually showcase the app. If you’d like, I can guide you on how to include them.)

📬 Contact
For questions or feedback, reach out to the project maintainer:

GitHub: yoland-loo
Email: londie970918@gmail.com
