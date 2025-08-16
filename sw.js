const CACHE_NAME = 'ubuntupay-v1';
const urlsToCache = [
  './',
  './index.html', // Caching the main HTML file
  './manifest.json' // Caching the manifest
  // Note: External resources like CDN links are often best left to the browser's regular cache.
  // Caching them here can be complex due to opaque responses.
];

// Install event: cache the core app shell files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Failed to cache files during install:', err);
      })
  );
});

// Fetch event: serve from cache first, then fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - go to network
        return fetch(event.request);
      }
    )
  );
});

// Activate event: clean up old caches to save space
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
