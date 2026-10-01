================================================================================
SAMUEL ANDREW — PERSONAL PORTFOLIO WEBSITE
AI Video Creator & Social Media Marketer
Contact Email: ghousraza5254@gmail.com
================================================================================

1. OVERVIEW
-----------
This is a Vite-bundled portfolio website for Samuel Andrew. The semantic
portfolio markup remains in index.html, while src/main.tsx bundles the shared
stylesheet and script so the same video and interaction behavior works in
development and production builds.

The website strictly showcases Samuel Andrew as an individual professional:
- AI Video Creation
- Social Media Marketing
- Real portfolio projects with optimized MP4 videos and poster thumbnails
- Authentic creative process and service breakdowns
- Netlify Forms-compatible inquiry form


2. DIRECTORY STRUCTURE
----------------------
/
├── index.html       -> Primary entry point and complete semantic markup
├── style.css        -> Custom styling (dark #080808 theme, responsive layout)
├── script.js        -> Interactive logic, 3D Canvas visual, video modal, filters
├── /videos          -> AI video project files (MP4 format, h.264 encoded)
│   ├── project-01.mp4
│   ├── project-02.mp4
│   ├── ...
│   └── project-10.mp4
├── /images          -> Poster thumbnails and portraits (JPG format)
│   ├── project-01.jpg
│   ├── ...
│   ├── project-10.jpg
│   └── samuel-andrew.jpg
└── README.txt       -> This guide


3. HOW TO REPLACE OR ADD NEW VIDEOS
------------------------------------
All video projects are managed in a single, clean data array located at the
top of `script.js`:

```javascript
const projects = [
  {
    id: "project-01",
    title: "Split-Screen Room Transformation",
    category: "AI Animation & Story",
    filterCategory: "animation", // 'noir', 'animation', 'scifi', 'commercial'
    description: "Brief summary of project objectives and visual style.",
    video: "videos/project-01.mp4",
    poster: "images/project-01.jpg",
    ratio: "ratio-portrait",     // or 'ratio-landscape'
    duration: "0:04"
  },
  // Add new projects here...
];
```

To update a video:
1. Place your new MP4 video in the `/public/videos` directory.
2. Place your poster image in the `/public/images` directory.
3. Update the matching entry in `script.js` with your title, category, and file paths.


4. HOW TO UPDATE CONTACT INFORMATION
---------------------------------------
- Email: ghousraza5254@gmail.com (updated across index.html)
- Phone / WhatsApp: Currently placeholder `+92 XXX XXXXXXX`.
  Search for `+92 XXX XXXXXXX` in `index.html` to insert your active number.


5. NETLIFY DEPLOYMENT & EMAIL NOTIFICATIONS SETUP
------------------------------------------------
To deploy to Netlify and receive email notifications:
1. Connect the repository to Netlify.
2. Use `npm run build` as the build command and `dist` as the publish directory.
3. The contact form is pre-configured with:
   `<form name="contact" method="POST" action="/" data-netlify="true" netlify netlify-honeypot="bot-field" id="contact-form">`
   The local Vite preview does not send email; test submissions on the deployed Netlify URL.
4. HOW TO RECEIVE SUBMISSIONS TO YOUR EMAIL (ghousraza5254@gmail.com):
   In your Netlify Dashboard for this site:
   - Go to: Site configuration (or Site settings) -> Notifications
   - Click "Add notification" -> "Email notification"
   - Under "Event", select: "New form submission"
   - Under "Form", select: "contact"
   - Under "Email to notify", enter: ghousraza5254@gmail.com
   - Click "Save"
   Whenever a visitor submits the inquiry form on your live site, Netlify will instantly email all submitted details (Full Name, Email, Phone/WhatsApp, Service, Project Details) straight to your inbox!


6. TECH STACK & COMPATIBILITY
-----------------------------
- Pure HTML5, CSS3, ES6+ JavaScript.
- Lightweight interactive HTML5 Canvas 3D particle sphere (no external CDN risks).
- Responsive across all viewports (360px mobile up to 1920px 4K desktop).
- Accessibility: ARIA labels, semantic markup, prefers-reduced-motion support.

© 2026 Samuel Andrew. All rights reserved.
