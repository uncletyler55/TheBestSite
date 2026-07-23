/* J.A.R.V.I.S. — service worker
   Caches the app shell so it launches offline and installs as an app.
   Bump CACHE whenever assets change to push an update to installed devices. */
const CACHE = "jarvis-v3";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-180.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512-maskable.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => { if (e.data === "skipWaiting") self.skipWaiting(); });

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Any third-party host (weather, news, geocode, Wikipedia, web lookups, …):
  // always go straight to the network and never cache — J.A.R.V.I.S. stays live.
  if (url.origin !== self.location.origin) {
    e.respondWith(fetch(req).catch(() => new Response("", { status: 503 })));
    return;
  }

  // App shell (same-origin): network-first so pushed updates land, cache offline.
  e.respondWith(
    fetch(req)
      .then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return resp;
      })
      .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
  );
});
