// Be Whole: lets the voice engine use several processor cores on hosts that can't set special headers
// (like GitHub Pages). It adds the "cross-origin isolation" headers to the page itself, and makes
// script tags from other sites (the voice engine on jsDelivr) loadable under them. It stores nothing.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  const r = e.request;
  const sameOrigin = new URL(r.url).origin === self.location.origin;
  const isPage = r.mode === "navigate";
  const isForeignScript = !sameOrigin && r.mode === "no-cors";
  if (!isPage && !isForeignScript) return;   // everything else goes straight to the network, untouched
  e.respondWith((async () => {
    let res;
    try { res = await fetch(isForeignScript ? new Request(r.url, { mode: "cors", credentials: "omit" }) : r); }
    catch (err) { if (isForeignScript) return fetch(r); throw err; }
    if (!res || res.status === 0 || res.type === "opaqueredirect") return res;
    const h = new Headers(res.headers);
    if (isPage) {
      h.set("Cross-Origin-Embedder-Policy", "require-corp");
      h.set("Cross-Origin-Opener-Policy", "same-origin");
    }
    h.set("Cross-Origin-Resource-Policy", "cross-origin");
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  })());
});
