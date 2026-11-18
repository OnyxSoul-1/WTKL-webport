const CACHE_NAME = 'wtkl-offline-cdn-v1';

// Notice the CDN links here!
const CDN_URL = 'https://cdn.jsdelivr.net/gh/OnyxSoul-1/WTKL-webport@main/';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  CDN_URL + 'War%20The%20Knights%20Battle%20Arena%20Swords%203D.loader.js',
  CDN_URL + 'War%20The%20Knights%20Battle%20Arena%20Swords%203D.data.unityweb',
  CDN_URL + 'War%20The%20Knights%20Battle%20Arena%20Swords%203D.framework.js.unityweb',
  CDN_URL + 'War%20The%20Knights%20Battle%20Arena%20Swords%203D.wasm.unityweb'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // If the file is in the cache, serve it (works offline).
      // If not, fetch it from the internet (CDN).
      return response || fetch(e.request);
    })
  );
});
