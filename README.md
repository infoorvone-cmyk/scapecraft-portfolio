# ScapeCraft & Muhammad Huzaifah — Architectural Portfolio Website

An ultra-premium, modern architecture portfolio and design studio web experience representing **Muhammad Huzaifah** (Principal Architect, Urban Designer, DAAD Scholar at BTU Cottbus-Senftenberg, Germany) and **ScapeCraft** (established in 2017).

Live Firm Site Reference: [www.scape-craft.com](https://www.scape-craft.com)  
Architect LinkedIn: [Muhammad Huzaifah](https://www.linkedin.com/in/muhammad-huzaifah-508375203)

---

## 🌟 Key Features

1. **Editorial Architectural Aesthetic**:
   - Dark Obsidian luxury color palette (`#0a0c10`) accented with warm champagne gold (`#cfa86e`) and frosted glassmorphism elements.
   - Dual theme support: Architectural Dark Mode & Contemporary Gallery Light Mode with instant toggle and local storage persistence.
   - Precision typography using Google Fonts `Syne`, `Plus Jakarta Sans`, and `Space Grotesk`.

2. **Curated Selected Works Gallery**:
   - Real-world delivered projects across USA, Europe, the Middle East, and Asia.
   - Interactive category filtering: *All*, *Architecture*, *Urban Design*, *Landscape*, *Interior*, and *3D & VR Lab*.
   - Interactive Project Detail Drawer / Lightbox displaying high-resolution renders, site metrics, design brief, delivered scope, and software stack.

3. **Interactive 3D & VR Lab Simulator**:
   - Live architectural digital twin lighting simulator: switch dynamically between *Zenith Noon*, *Golden Hour Dusk*, and *Night Luminaire*.
   - Geometry rendering modes: *Photorealistic Render*, *BIM Wireframe Geometry*, and *Clay Model*.

4. **Principal Architect Showcase**:
   - Highlights Muhammad Huzaifah's background as a DAAD Scholar at Brandenburgische Technische Universität Cottbus-Senftenberg (BTU Cottbus, Germany), researcher at COSIMENA Winter School (in partnership with Bauhaus-Universität Weimar & Alexandria University), and Director at Scape Craft Ltd. (London, UK) & Scape Craft LLC (USA).
   - Direct LinkedIn connection badge and capability deck download triggers.

5. **Interactive Project Scope & Budget Calculator**:
   - Enables clients to configure project typologies (Residential, Commercial, Hospitality, Masterplan, Landscape, Interior), adjust square footage scale sliders, and select service tiers to generate instant timeline and preliminary budget frameworks.
   - One-click auto-fill to contact inquiry form.

6. **Full-Lifecycle Architectural Services**:
   - Comprehensive breakdown of architectural design, masterplanning, landscape architecture, interior architecture, 3D cinematics, and BIM LOD 300–350 coordination.

7. **Client Endorsements & Global Hubs**:
   - Authentic stakeholder reviews (Brian Moten, Aiden, Matthew Smith).
   - Global presence cards for Berlin/Cottbus, Sheridan WY (USA), London (UK), Dubai (UAE), and Islamabad/Lahore (Pakistan).

---

## 📁 Repository Structure

```
scapecraft-portfolio/
├── index.html                   # Semantic HTML5 with Schema.org & OpenGraph tags
├── README.md                    # Project documentation
├── .gitignore                   # Standard clean gitignore
└── assets/
    ├── css/
    │   └── styles.css           # Complete vanilla CSS design system & responsive layout
    ├── js/
    │   └── main.js              # Projects data store, filtering, modal, calculator & 3D lab
    └── images/                  # High-resolution architectural renders & verified assets
        ├── muhammad-huzaifah.jpg
        ├── scapecraft-logo.png
        ├── the-heights.jpg
        ├── hospital-ssm.jpg
        ├── urban-civic.jpg
        ├── luxury-interior.jpg
        ├── backyard-oasis.jpg
        ├── highcourt-facade.jpg
        ├── nashville-coworking.jpg
        ├── icb-building.jpg
        ├── cabn-eco.jpg
        ├── cairo-tower.jpg
        ├── gilgit-resort.jpg
        └── modern-residence.jpg
```

---

## 🚀 Running Locally

Because this project is built with zero-dependency modern HTML5, CSS3, and ES6 JavaScript:

### Option 1: Direct File Opening
Double-click `index.html` or open it directly in any modern browser (Chrome, Safari, Firefox, Edge).

### Option 2: Local HTTP Server (Python)
```bash
cd scapecraft-portfolio
python3 -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

### Option 3: Local HTTP Server (Node.js npx)
```bash
cd scapecraft-portfolio
npx serve .
```

---

## 📦 Git Repository Initialization & Pushing

This project has been initialized with its own standalone Git repository:

```bash
cd /Users/inamullahnoori/Desktop/Telecom-Sites/scapecraft-portfolio

# Check status
git status

# To connect to your GitHub / GitLab / Bitbucket remote:
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploying to the Web

- **GitHub Pages**: Push this repository to GitHub, go to `Settings -> Pages`, and select the `main` branch root (`/`). It will be live instantly with a free SSL certificate.
- **Vercel / Netlify**: Simply drag and drop the `scapecraft-portfolio` folder or connect the GitHub repository for automatic continuous deployment.

---

© 2017–2026 ScapeCraft Ltd. & Muhammad Huzaifah. All rights reserved.
