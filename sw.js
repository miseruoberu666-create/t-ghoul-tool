const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './icon.png'
];

// ※もし外部のCSSやJSファイルを分けている場合は、上記の一覧に './style.css' や './script.js' のように追加してください。

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});