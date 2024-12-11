const CACHE_VERSION = 'v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/styles.css',
                '/app.js',
                '/images/logo.png',
            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    // Delete old caches
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName !== CACHE_VERSION;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
