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
  `weather in Israel`, `time in Tehran`, `focus Kyiv`, `brief Iran`, `help`
- 🕐 **Live clocks** for your location plus world theaters
- ⛅ **Live weather** for Germantown, MD (keyless [Open-Meteo](https://open-meteo.com))

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
