<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Samuel Andrew Portfolio

Portfolio site for Samuel Andrew, focused on AI video creation and social media marketing. The active page is the existing semantic HTML portfolio bundled through Vite; `src/main.tsx` imports the shared stylesheet and portfolio interaction script.

## Run locally

Prerequisite: Node.js

```bash
npm install
npm run dev
```

The development server runs on port `3000` when available. Use `npm run build` to create the production bundle and `npm run preview` to serve it locally.

## Media assets

Video files and poster images are served from `public/videos` and `public/images`. Keep the paths used by `index.html` and `script.js` under those public URLs so featured, grid, and modal players work in both development and production builds.
