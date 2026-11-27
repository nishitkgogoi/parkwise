const CACHE_NAME = 'parkwise-cp6-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './public/images/campus-pathway.jpg',
  './public/images/zone-tokens.jpg',
  './public/images/attendant-keys.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
