/* Plumita · service worker
   Estrategia: red primero y caché como respaldo, así siempre ves la versión nueva
   cuando hay internet y la app sigue funcionando sin conexión.
   Sube el número de VERSION en cada release para limpiar cachés viejos. */
const VERSION = 'plumita-v5';
const CORE = [
  './', './index.html', './plumita.html', './site.webmanifest', './favicon.ico',
  './assets/icon-192.png', './assets/icon-512.png', './assets/icon-maskable-512.png', './assets/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(r)
      .then(res => {
        if (res.ok) { const copia = res.clone(); caches.open(VERSION).then(c => c.put(r, copia)); }
        return res;
      })
      .catch(() =>
        caches.match(r).then(m => m || (r.mode === 'navigate'
          ? caches.match('./index.html').then(x => x || caches.match('./'))
          : undefined))
      )
  );
});
