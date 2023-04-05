
self.addEventListener('install', evt =>{ console.log('service worker is registered')
});

self.addEventListener('activate', evt =>{ console.log('service worker is activated')
7
});

self.addEventListener('fetch', evt =>{ console.log('service worker is fetched')
});