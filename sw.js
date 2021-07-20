const CACHE_VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache());
});

async function precache(){
    const cache = await caches.open(CACHE_VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/src/index.js',
        // '/src/js/MediaPlayer.js',
        // '/src/js/pluggins/AutoPlay.js',
        // '/src/js/pluggins/AutoPause.js',
        // '/src/styles/main.css',
        // '/assets/BigBuckBunny.mp4'
    ]);
}

self.addEventListener('fetch', event => {
    const request = event.request;
    if(request.method !== 'GET'){
        return;
    }

    // look in cache
    event.respondWith(cachedResponse(request));

    //cache and network
    event.waitUntil(updateCache(request));
});

async function cachedResponse(request){
    const cache = await caches.open(CACHE_VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request){
    const cache = await caches.open(CACHE_VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

