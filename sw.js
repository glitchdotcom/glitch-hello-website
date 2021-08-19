/*
* ServiceWorker to make site function as a PWA (Progressive Web App)
* 
* Based on https://glitch.com/~pwa by https://glitch.com/@PaulKinlan
*/

// Specify the files we want to cache
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("hello-website-pwa").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js"     
      ]);
    })
  );
});

// Cache falling back to network approach 
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
