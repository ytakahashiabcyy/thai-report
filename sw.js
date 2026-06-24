const CACHE = 'thai-report-v1';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html']))));
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).then(r => { let rc = r.clone(); caches.open(CACHE).then(c => c.put(e.request, rc)); return r; })
  .catch(() => caches.match(e.request))
));