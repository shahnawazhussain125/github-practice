var cachename =  [
    '/',
    '/index.html',
    '/src/scripts/app.js'
];

self.addEventListener('install', function(e)
{
    console.log("[Service Worker] is installed....", e);
    e.waitUntil(
        caches.open('test')
        .then(function(cache){
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(cachename);
        })
    )
});

self.addEventListener('activate', function(event){
    console.log("[Service Worker] is activated....", event);
    event.waitUntil(
        caches.keys()
        .then(function(keyList){
            console.log(keyList);
            return Promise.all(keyList.map(function(key){
                if(key !== cachename)
                {
                    return caches.delete(key);
                }
            }));
        })
    )
    return self.clients.claim();
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(fetch.respond).then
    )
})