````markdown
# UbuntuPay - Offline-First Biometric Payment PWA

UbuntuPay is a fully interactive, offline-first Progressive Web App (PWA) that demonstrates a secure, modern biometric payment flow. This project simulates the entire user journey, from registration and identity verification to making payments in South African Rands (ZAR) authenticated by Face ID or Fingerprint scanning.

Built with modular vanilla JavaScript, HTML, and Tailwind CSS, UbuntuPay focuses on delivering a realistic financial user experience with a resilient offline-first architecture.

## 🎯 Project Status

**Version:** 2.0 (Refactored)  
**Status:** ✅ Active Development  
**Last Updated:** June 10, 2026

### Recent Improvements (v2.0)
- ✅ **Code Organization** - Modular JavaScript architecture
- ✅ **CSS Extraction** - Separated styles to `css/style.css`
- ✅ **Configuration Management** - Centralized app config
- ✅ **Enhanced Error Handling** - Input validation & user feedback
- ✅ **Documentation** - Comprehensive guides added

See [REFACTORING_GUIDE.md](./REFACTORING_GUIDE.md) for detailed improvements.

## ✨ Key Features

UbuntuPay provides a feature-rich simulation of a fintech application, emphasizing usability, security, and offline capabilities.

### Authentication & Security

- **Dual Login Methods** - Email/password or one-touch Biometric Login (simulated)
- **New User Registration** - Streamlined registration form
- **Mandatory Onboarding Flow** - Guided verification process:
  - ID Verification: Upload government-issued ID (simulated)
  - Face Registration: Set up Face ID for payments (simulated)
- **Profile Management** - Update name, contact details, security code
- **Security Alerts** - Enable SMS/email notifications (simulated)

### Core Financial Features

- **Live Dashboard** - Personalized greeting and real-time balance in ZAR
- **Send Money** - Send custom amounts to recipients with biometric auth
- **Deposit & Withdraw** - Simple forms to manage account balance
- **Transaction History** - Real-time updates with transaction details
- **Input Validation** - Email, amount, and fund availability checks

### Biometric Integration

- **In-App Payment Authentication** - Biometric verification for sensitive transactions
- **Biometric Login** - Fast, secure access with Face ID or Fingerprint
- **Simulated Scanning** - Realistic Face ID and Fingerprint animations

### Offline-First PWA

- **Offline Functionality** - Full app access without internet after first visit
- **Service Worker Caching** - Intelligent caching strategy
- **Installable** - "Add to Home Screen" on mobile or desktop
- **Online/Offline Detection** - Status awareness and user notifications

## 📁 Project Structure

```
UbuntuPay/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All application styles
├── js/
│   ├── config.js           # Configuration & constants
│   ├── ui.js               # UI management & rendering
│   ├── auth.js             # Authentication flows
│   ├── biometric.js        # Biometric scanning
│   ├── transactions.js     # Payment operations
│   ├── pwa.js              # PWA features
│   └── app.js              # Main entry point & events
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── readme.dm               # Original documentation
├── REFACTORING_GUIDE.md    # Code organization guide
├── CONTRIBUTING.md         # Contribution guidelines
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Code editor (VS Code recommended)
- Local web server (for service worker support)

### Installation & Setup

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/Yolanda-loo/Ubutu_Pay.github.io.git
   cd Ubutu_Pay.github.io
   ```

2. **Run with Live Server (VS Code)**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - App opens at `http://127.0.0.1:5500`

3. **Or Use Node.js HTTP Server**
   ```bash
   npm install -g http-server
   http-server -p 8080
   ```
   Then visit `http://localhost:8080`

4. **Verify Files**
   - ✅ `index.html` - Main app
   - ✅ `css/style.css` - Styles
   - ✅ `js/` - All JavaScript modules
   - ✅ `manifest.json` - PWA metadata
   - ✅ `sw.js` - Service worker

## 📖 How to Use the Application

### New User Onboarding

1. Click **Register** on the homepage
2. Fill in your details (first name, last name, email, phone)
3. Complete mandatory verification:
   - **Step 1:** Upload ID images (front and back)
   - **Step 2:** Perform face scan for Face ID setup
4. Directed to dashboard upon completion

### Returning User Login

- **Biometric:** Select "Login with Biometrics" → Fingerprint scan
- **Password:** Use `john.doe@example.com` / `password`

### Making a Transaction

1. From dashboard, select **Send Money**, **Deposit**, or **Withdraw**
2. Enter required details (recipient, amount)
3. For send/withdraw, authenticate using Face ID or Fingerprint
4. Confirm transaction - balance updates instantly
5. View in Transaction History

### Settings & Profile

- Update personal information
- Manage biometric authentication
- View security status

## 🔧 Module Overview

### `config.js`
Centralized configuration for the entire application
- App constants and timeouts
- Application state management
- DOM element references
- Global initialization

### `ui.js`
User interface management and utilities
- View switching logic
- Dashboard updates
- Form validation
- UI helper functions

### `auth.js`
Authentication and onboarding flows
- User registration
- Login/logout
- ID verification
- Face registration

### `biometric.js`
Biometric authentication simulation
- Face ID scanning
- Fingerprint scanning
- Biometric login/payment auth

### `transactions.js`
Payment and financial operations
- Send money
- Deposits
- Withdrawals
- Transaction history
- Profile updates

### `pwa.js`
Progressive Web App features
- PWA installation
- Service worker registration
- Online/offline detection
- Offline support

### `app.js`
Main application entry point
- Module initialization
- Event listener setup
- Application flow orchestration

## 🧪 Testing

### Manual Testing Checklist

- [ ] All views render correctly
- [ ] Authentication flows work
- [ ] Transactions update balance
- [ ] Biometric modals display
- [ ] Offline mode functions
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] Keyboard navigation works
- [ ] No console errors

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📚 Documentation

- **[REFACTORING_GUIDE.md](./REFACTORING_GUIDE.md)** - Code organization & roadmap
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines
- **[readme.dm](./readme.dm)** - Original documentation

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for:
- Code standards
- Development workflow
- Pull request process
- Testing guidelines

**Quick Start:**
```bash
git checkout -b feature/your-feature-name
# Make changes
git commit -m "feat: Description"
git push origin feature/your-feature-name
# Create pull request on GitHub
```

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - JavaScript & Web APIs
- [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers)
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [WebAuthn/Biometric API](https://webauthn.me/)

## 🛠️ Future Improvements

See [REFACTORING_GUIDE.md](./REFACTORING_GUIDE.md) for the full roadmap including:

1. **Backend Integration** - Connect to real API
2. **Unit Testing** - Jest/Vitest test suite
3. **TypeScript** - Type-safe codebase
4. **Real Biometrics** - WebAuthn API integration
5. **Analytics** - Error tracking with Sentry
6. **Accessibility** - WCAG 2.1 AA compliance
7. **Performance** - Code splitting & optimization
8. **CI/CD** - GitHub Actions pipeline

## ⚠️ Disclaimer

**This is a simulation.** UbuntuPay does not:
- Process real biometric data
- Execute actual financial transactions
- Store real user information
- Connect to banking systems

It's designed for educational and demonstration purposes only.

## 📄 License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) file for details.

## ❓ FAQ

**Q: Can I use real biometric data with UbuntuPay?**  
A: No, all biometric interactions are simulated. Real integration would require WebAuthn API implementation.

**Q: Does the app work offline?**  
A: Yes, after the first visit, the service worker caches the app for full offline functionality.

**Q: How do I install the app?**  
A: On mobile, use "Add to Home Screen" in your browser. On desktop, use the browser's install prompt (if supported).

**Q: Can I deploy this to production?**  
A: Yes, it's a static site compatible with GitHub Pages, Netlify, Vercel, etc.

**Q: How do I reset the app data?**  
A: Open browser DevTools → Application → Clear all data → Refresh page

## 📸 Screenshots

**Landing Page**
- Welcome screen with login/register options

**Login & Registration**
- Email/password or biometric login
- Streamlined registration form

**Onboarding**
- ID verification with file upload
- Face registration flow

**Dashboard**
- Account balance display
- Quick action buttons
- Transaction history
- Security status

**Transactions**
- Send money with biometric auth
- Deposit funds
- Withdraw balance
- Complete transaction history

## 📞 Contact & Support

For questions or feedback:

- **GitHub Issues** - Report bugs or suggest features
- **Email:** londie970918@gmail.com
- **GitHub:** [@Yolanda-loo](https://github.com/Yolanda-loo)

## 🙏 Acknowledgments

- Built with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ by Yolanda Loo**

*Last Updated: June 10, 2026*  
*Version: 2.0 (Refactored)*
````
