const CACHE_NAME = 'wtkl-offline-cdn-v2';
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
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
