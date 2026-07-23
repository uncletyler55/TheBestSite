# J.A.R.V.I.S. — Global Crisis Monitor

A sci-fi "Iron Man" style dashboard: a live rotating 3D globe with glowing
crisis hotspots, clickable location dossiers, an interactive J.A.R.V.I.S.
console, plus live local time and weather for **Germantown, MD**.

It's built as a **Progressive Web App (PWA)**, so you can install it on an
**iPhone or Android** phone (and desktop) and run it full-screen like a native
app. It also works offline and auto-updates whenever new changes are deployed.

## Features
- 🌍 **Rotating globe** with continent outlines, graticule grid and a radar sweep
- 🔴 **Crisis hotspots** — Iran & Israel (critical), Lebanon, Kyiv, Washington DC
  (high), plus New York, Los Angeles, Riyadh, Beijing (watch)
- 👆 **Fully clickable** — tap any hotspot *or anywhere on the globe* to open a
  dossier with coordinates, local time, live weather and an intel brief
  (unknown points are reverse-geocoded on the fly)
- 🗣️ **J.A.R.V.I.S. console** — type or tap commands: `status`, `threats`,
  `news in Iran`, `weather in Israel`, `time in Tehran`, `focus Kyiv`, `help`
- 🌐 **Ask anything (live web)** — general questions are answered from the live
  [Wikipedia](https://www.wikipedia.org) API (e.g. “what is quantum computing”,
  “who is Ada Lovelace”), with built-in math (“15% of 240”) and a web-search
  fallback (DuckDuckGo/Google/Wikipedia) it opens for anything else
- 🎙️ **Two-way voice** — tap 🎤 to speak (Chrome/Android); 🔊 VOICE speaks replies
- 🕐 **Live clocks** — main clock follows the **device's own timezone**
- ⛅ **Live weather** for Germantown, MD (keyless [Open-Meteo](https://open-meteo.com))
- 📰 **Live news** from the keyless [GDELT](https://www.gdeltproject.org) index

### About the "ask anything" brain
J.A.R.V.I.S. reaches the internet through **keyless, browser-accessible APIs**
(Wikipedia, GDELT news, Open-Meteo weather, BigDataCloud geocoding). It is *not*
a large language model — a static site can't safely hold a paid AI API key. It
answers factual questions from Wikipedia and, when it can't answer directly,
opens a live web search so you can surf to the result yourself. To wire in a
true conversational LLM you'd add a small backend (or serverless function) that
holds the API key and proxies requests — happy to set that up if you want it.

## Install on your phone

The app must be served over **HTTPS**. The easiest free option is **GitHub Pages**:

1. Push this repo to GitHub (this branch or `master`).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch**, pick the branch and `/ (root)`, then **Save**.
3. Wait ~1 minute; GitHub gives you a URL like
   `https://<user>.github.io/<repo>/`.
4. Open that URL on your phone:
   - **iPhone (Safari):** tap **Share ⬆ → Add to Home Screen**. (The app also
     shows a hint button with these steps.)
   - **Android (Chrome):** tap the **⬇ Install App** button, or **⋮ menu → Add
     to Home screen / Install app**.

The J.A.R.V.I.S. icon then appears on your home screen and launches full-screen.

## Updating
Deploy new changes (push to the Pages branch). The service worker
(`service-worker.js`) fetches the latest version on next launch and refreshes
automatically. If you change cached assets, bump the `CACHE` version string in
`service-worker.js` to force installed devices to update.

## Files
- `index.html` — the entire app (UI, globe, console, weather, PWA logic)
- `manifest.webmanifest` — PWA metadata (name, icons, theme, standalone display)
- `service-worker.js` — offline cache + auto-update
- `icons/` — app icons (192/512 + maskable + apple-touch)

## Note
The crisis list is illustrative for the J.A.R.V.I.S. aesthetic — it is not a
live intelligence feed. Time and weather **are** live.
