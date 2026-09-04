# Samuel Evans Personal Website

This repository contains a minimal static personal website for Samuel Evans. Home and About are combined into a single page.

**Live Site:** [https://samuel-evan-s.github.io/portfolio/](https://samuel-evan-s.github.io/portfolio/)

## Local development

From the project root, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Navigation Structure

- Wordmark: `samuel.evans`
- Menu: `home   projects   work   education`

## Repository structure

```text
/
├── index.html          # Combined Home + About
├── projects.html
├── work.html
├── education.html
├── project/
│   ├── diabetes-risk.html
│   ├── brain-tumor-classification.html
│   └── document-intelligence.html
├── work/
│   ├── savannah-informatics.html
│   ├── outamation.html
│   └── letsrise.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── resume/
│   └── resume.pdf
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
└── .nojekyll
```

## Adding projects

1. Create a new project detail page in the `project/` folder.
2. Add a card for it on `projects.html`.
3. Link the project from the homepage or other relevant pages.

## Updating the résumé

Replace the placeholder file in `resume/resume.pdf` with your actual résumé PDF.

## Deployment

The site is hosted on GitHub Pages at:
[https://samuel-evan-s.github.io/portfolio/](https://samuel-evan-s.github.io/portfolio/)
