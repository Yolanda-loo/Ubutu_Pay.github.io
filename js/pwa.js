/**
 * Progressive Web App (PWA) Module
 * Handles PWA installation, service worker registration, and offline support
 */

let deferredInstallPrompt = null;

/**
 * Initialize PWA installation
 */
function initializePWA() {
  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    DOM_ELEMENTS.installPwaBtn.classList.remove('hidden');
  });

  // Handle install button click
  if (DOM_ELEMENTS.installPwaBtn) {
    DOM_ELEMENTS.installPwaBtn.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredInstallPrompt = null;
        DOM_ELEMENTS.installPwaBtn.classList.add('hidden');
      }
    });
  }

  // Register service worker
  registerServiceWorker();
}

/**
 * Register service worker for offline functionality
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then(reg => {
          console.log('ServiceWorker registration successful.', reg);
        })
        .catch(err => {
          console.log('ServiceWorker registration failed:', err);
        });
    });
  }
}

/**
 * Check if the app is online
 * @returns {boolean} - True if online
 */
function isOnline() {
  return navigator.onLine;
}

/**
 * Handle online/offline status changes
 */
function initializeOnlineStatusHandling() {
  window.addEventListener('online', () => {
    console.log('App is now online');
    showNotification('Connection restored', 'success');
  });

  window.addEventListener('offline', () => {
    console.log('App is now offline');
    showNotification('You are offline. Some features may be limited.', 'warning');
  });
}
