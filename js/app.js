/**
 * Main Application Module
 * Entry point for the UbuntuPay application
 * Initializes all modules and sets up event listeners
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize DOM references
  initializeDOMReferences();

  // Initialize PWA
  initializePWA();
  initializeOnlineStatusHandling();

  // ============================================
  // AUTHENTICATION EVENT LISTENERS
  // ============================================

  document.getElementById('show-login-btn')?.addEventListener('click', () => showView('login'));
  document.getElementById('show-register-btn')?.addEventListener('click', () => showView('register'));

  // Login form
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleLoginSuccess();
  });

  // Biometric login
  document.getElementById('biometric-login-btn')?.addEventListener('click', () => {
    handleBiometricLogin();
  });

  // Registration form
  document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegistration();
  });

  // Logout
  document.getElementById('logout-btn')?.addEventListener('click', () => {
    handleLogout();
  });

  // ============================================
  // ONBOARDING EVENT LISTENERS
  // ============================================

  document.getElementById('begin-verification-btn')?.addEventListener('click', () => {
    showView('idVerification');
  });

  document.getElementById('id-front-upload')?.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      document.getElementById('id-front-feedback').innerHTML = 
        '<i class="fas fa-check-circle text-3xl text-green-500"></i>';
    }
  });

  document.getElementById('id-back-upload')?.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      document.getElementById('id-back-feedback').innerHTML = 
        '<i class="fas fa-check-circle text-3xl text-green-500"></i>';
    }
  });

  document.getElementById('submit-id-btn')?.addEventListener('click', () => {
    handleIDVerification();
  });

  document.getElementById('id-success-continue-btn')?.addEventListener('click', () => {
    showView('faceRegistration');
  });

  document.getElementById('start-face-scan-btn')?.addEventListener('click', () => {
    handleFaceRegistration();
  });

  document.getElementById('face-success-continue-btn')?.addEventListener('click', () => {
    showView('onboardingComplete');
  });

  document.getElementById('go-to-dashboard-btn')?.addEventListener('click', () => {
    completeOnboarding();
  });

  // ============================================
  // NAVIGATION EVENT LISTENERS
  // ============================================

  const navActions = {
    'logo-link': 'dashboard',
    'action-send-money': 'checkout',
    'action-transactions': 'transactions',
    'action-settings': 'settings',
    'action-deposit': 'deposit',
    'action-withdraw': 'withdraw'
  };

  Object.keys(navActions).forEach(id => {
    document.getElementById(id)?.addEventListener('click', (e) => {
      e.preventDefault();
      if (APP_STATE.isLoggedIn) {
        showView(navActions[id]);
      }
    });
  });

  // ============================================
  // SEND MONEY FLOW
  // ============================================

  document.getElementById('send-money-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSendMoney();
  });

  document.getElementById('back-to-amount-btn')?.addEventListener('click', () => {
    document.getElementById('auth-step').classList.add('hidden');
    document.getElementById('amount-entry-step').classList.remove('hidden');
  });

  document.getElementById('face-auth-btn')?.addEventListener('click', () => {
    handleFaceAuthPayment();
  });

  document.getElementById('fingerprint-auth-btn')?.addEventListener('click', () => {
    handleFingerprintAuthPayment();
  });

  // ============================================
  // DEPOSIT FLOW
  // ============================================

  document.getElementById('deposit-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleDeposit();
  });

  // ============================================
  // WITHDRAW FLOW
  // ============================================

  document.getElementById('withdraw-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleWithdrawal();
  });

  document.getElementById('back-to-withdraw-amount-btn')?.addEventListener('click', () => {
    document.getElementById('withdraw-auth-step').classList.add('hidden');
    document.getElementById('withdraw-amount-step').classList.remove('hidden');
  });

  document.getElementById('withdraw-face-auth-btn')?.addEventListener('click', () => {
    handleFaceAuthWithdrawal();
  });

  document.getElementById('withdraw-fingerprint-auth-btn')?.addEventListener('click', () => {
    handleFingerprintAuthWithdrawal();
  });

  // ============================================
  // MODAL MANAGEMENT
  // ============================================

  document.getElementById('close-payment-modal')?.addEventListener('click', () => {
    hidePaymentSuccessModal();
    showView('dashboard');
    resetTransactionForms();
  });

  document.getElementById('view-receipt-btn')?.addEventListener('click', () => {
    hidePaymentSuccessModal();
    showView('transactions');
  });

  // ============================================
  // SETTINGS/PROFILE MANAGEMENT
  // ============================================

  document.getElementById('manage-biometrics-btn')?.addEventListener('click', () => {
    manageBiometrics();
  });

  ['firstname', 'lastname', 'cell', 'secretcode', 'email'].forEach(field => {
    document.getElementById(`settings-${field}`)?.addEventListener('input', e => {
      updateProfileSetting(field, e.target.value);
    });
  });

  // ============================================
  // INITIALIZE APP VIEW
  // ============================================

  setAppShellVisibility(false);
  showView('landing');
});
