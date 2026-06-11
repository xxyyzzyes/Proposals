const CACHE_NAME = 'sos-memorial-v5';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Check if it's a page navigation or resource request for index.html / manifest
  const isHtmlOrManifest = 
    event.request.mode === 'navigate' ||
    url.pathname.endsWith('/') || 
    url.pathname.endsWith('/index.html') || 
    url.pathname.endsWith('/manifest.json');

  if (isHtmlOrManifest) {
    // Network-First strategy for pages/manifest to ensure they get updates immediately
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(event.request) || caches.match('./index.html'))
    );
  } else {
    // Cache-First strategy for assets like icons
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(netResponse => {
          if (netResponse.status === 200) {
            const responseClone = netResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
          return netResponse;
        });
      })
    );
  }
});
