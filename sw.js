// İnternet yokken de açılsın diye dosyaları telefonda saklar
const AD = 'elci-kartli-v4';
const DOSYALAR = ['./', 'index.html', 'manifest.json', 'ikon-192.png', 'ikon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(AD).then(c => c.addAll(DOSYALAR))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== AD).map(x => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { const k = r.clone(); caches.open(AD).then(c => c.put(e.request, k)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match('index.html'))));
});

