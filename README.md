# Deepak Nunnagoppala — Personal Portfolio

A premium, fully responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript (plus Bootstrap 5). It showcases my projects, skills, experience, and certifications, and is designed to help me land Software Engineering internships and entry-level developer roles.

**Live demo:** https://deepaknunnagoppala.github.io/portfolio/

---

## Project Overview

This is a single-page, recruiter-friendly portfolio with:

- A hero section with a rotating role title (Frontend Developer / Java Developer / AI Enthusiast), resume download, and quick links
- About, Skills, Projects, Experience, Education, Certifications, and Contact sections
- A dark/light theme toggle, sticky navbar, scroll animations, and a working contact form
- No build tools or frameworks required — open `index.html` directly, or deploy as-is to GitHub Pages

## Features

- ⚡ **Zero build step** — plain HTML/CSS/JS, works by opening `index.html`
- 🌗 **Dark / light mode** with `localStorage` persistence and OS preference detection
- 🧭 **Sticky, responsive navbar** with active-section highlighting and a mobile menu
- 🎬 **Scroll animations** via [AOS](https://michalsnik.github.io/aos/)
- ⌨️ **Typed.js** rotating role titles in the hero
- 💌 **EmailJS**-powered contact form (no backend required)
- 🔝 **Scroll-to-top** button and animated page loader
- 📱 **Mobile-first, fully responsive** layout (tested down to ~360px)
- ♿ **Accessible** — semantic landmarks, skip link, visible focus states, `prefers-reduced-motion` support, labelled icon buttons
- 🔍 **SEO-optimized** — meta description/keywords, Open Graph & Twitter cards, canonical URL, `Person` JSON-LD structured data
- 🚀 **Fast loading** — CDN-hosted libraries, SVG placeholder assets, no heavy JS bundles

## Technologies Used

| Category | Stack |
|---|---|
| Markup / Styling | HTML5, CSS3 (custom properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES5+, no framework) |
| UI Framework | Bootstrap 5 (grid & utility resets) |
| Icons | Font Awesome 6 |
| Animation | AOS (Animate On Scroll) |
| Hero text effect | Typed.js |
| Contact form | EmailJS |
| Hosting | GitHub Pages |

All third-party libraries are loaded via CDN — there is nothing to `npm install`.

## Folder Structure

```
portfolio/
│
├── index.html                 # Single-page site — all sections
├── README.md                  # You are here
├── LICENSE                    # MIT License
├── .gitignore
│
├── assets/
│   ├── css/
│   │   └── style.css          # All site styles (design tokens, layout, components, responsive)
│   ├── js/
│   │   └── main.js            # Loader, theme toggle, nav, Typed.js, AOS, EmailJS, scroll-to-top
│   ├── images/                # SVG placeholder images (avatar, project previews, OG image)
│   ├── icons/                 # Favicon
│   └── resume/                # Drop your resume.pdf here (see resume/README.txt)
│
└── screenshots/                # Add site screenshots here for this README
```

## Installation

No installation or dependencies required — this is a static site.

```bash
git clone https://github.com/<your-username>/portfolio.git
cd portfolio
```

## How to Run Locally

**Option 1 — Just open it**

Double-click `index.html`, or open it directly in your browser:

```bash
open index.html        # macOS
start index.html        # Windows
xdg-open index.html     # Linux
```

**Option 2 — Local server (recommended for accurate relative-path behavior)**

```bash
# Using Python 3
python3 -m http.server 5500

# Using Node (npx, no install needed)
npx serve .

# Using VS Code
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:5500` in your browser.

## Before You Deploy — Personalize It

1. **Resume** — add your PDF as `assets/resume/resume.pdf` (the Download Resume button already points here).
2. **Contact form** — in `assets/js/main.js`, set your `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` from [emailjs.com](https://www.emailjs.com/). Until configured, submissions are safely no-op'd with a console warning instead of failing silently.
3. **Photo** — replace `assets/images/avatar-placeholder.svg` with a real photo (`assets/images/avatar.jpg`) and update the `src` in `index.html`.
4. **Email address** — replace `deepak.nunnagoppala@example.com` throughout `index.html` with your real email.
5. **Project links** — swap the `#` placeholders in the Projects section's "Live Demo" / "Source Code" links with your real URLs.
6. **Project screenshots** — replace the SVGs in `assets/images/project-*.svg` with real screenshots (`.png`/`.jpg`) and update the `src` attributes.

## GitHub Pages Deployment

1. Push this repository to GitHub (see commands below).
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the **`main`** branch and **`/ (root)`** folder, then click **Save**.
5. Wait 1–2 minutes for GitHub to build and publish the site.
6. Your live site will be available at:

```
https://<your-username>.github.io/portfolio/
```

No configuration files, build steps, or base-path changes are needed — the project works as-is once pushed.

## Screenshots

> Add screenshots to the `screenshots/` folder after deploying, then reference them here:

```
screenshots/hero.png
screenshots/projects.png
screenshots/skills.png
screenshots/contact.png
```

## Live Demo

🔗 **https://deepaknunnagoppala.github.io/portfolio/**

## Contact Information

- **Email:** deepak.nunnagoppala@example.com
- **GitHub:** [github.com/deepaknunnagoppala](https://github.com/deepaknunnagoppala)
- **LinkedIn:** [linkedin.com/in/deepak-nunnagoppala](https://www.linkedin.com/in/deepak-nunnagoppala-8a3865293/)

## License

This project is licensed under the [MIT License](LICENSE) — feel free to fork it and adapt it for your own portfolio.
