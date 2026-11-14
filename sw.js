/* Minha Carteira — uso sem internet.
   Guarda o app no aparelho. Os dados continuam no Firebase (que tem cache próprio)
   ou no aparelho, no modo sem conta. Suba a versão abaixo ao mudar a lista de arquivos. */
const V = "mc-v1";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/logo-light.png", "icons/logo-dark.png", "icons/icon-192.png", "icons/icon-512.png"];
const EXT = [
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js",
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js",
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
];
const HOSTS = ["www.gstatic.com", "fonts.googleapis.com", "fonts.gstatic.com"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await Promise.all(SHELL.map(u => c.add(u).catch(() => {})));
    await Promise.all(EXT.map(u => fetch(u, { mode: "no-cors" }).then(r => c.put(u, r)).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  const mine = u.origin === location.origin;
  if (!mine && !HOSTS.includes(u.hostname)) return; // Firestore, login do Google etc. seguem direto para a rede

  if (r.mode === "navigate") {
    // página: tenta a rede (para pegar versão nova) e cai no guardado se estiver sem internet
    e.respondWith((async () => {
      const c = await caches.open(V);
      try {
        const net = await Promise.race([fetch(r), new Promise((_, no) => setTimeout(no, 4000))]);
        if (net && net.ok) c.put("index.html", net.clone());
        return net;
      } catch (_) {
        return (await c.match("index.html")) || (await c.match("./")) || Response.error();
      }
    })());
    return;
  }

  // demais arquivos: responde do guardado e atualiza em segundo plano
  e.respondWith((async () => {
    const c = await caches.open(V);
    const hit = await c.match(r);
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(r, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || Response.error();
  })());
});
