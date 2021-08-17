/*
* ServiceWorker to make site function as a PWA (Progressive Web App)
* 
* Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
*/

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pwa-assets").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"     
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
