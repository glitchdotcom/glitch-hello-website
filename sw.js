/*
 ServiceWorker to make site function as a PWA (Progressive Web App)
 
 Heavily inspired by https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
*/

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pwa-assets").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2Fillustration.svg?v=1618177344016",
        "https://cdn.glitch.com/605e2a51-d45f-4d87-a285-9410ad350515%2FLogo_Color.svg?v=1618199565140"
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
