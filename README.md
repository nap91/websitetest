# Personal Portfolio Website

A clean, modern multi-page personal portfolio built with pure HTML, CSS, and JavaScript.

## Pages
- `index.html` (Home)
- `about.html`
- `projects.html`
- `contact.html`

## Features
- Responsive navigation menu
- Dark mode toggle with `localStorage` persistence
- Contact form validation with success feedback
- Mobile responsive layout
- SEO-friendly page titles and descriptions
- Simple static structure ready for GitHub Pages

## Project Structure
```text
.
├── about.html
├── contact.html
├── css/
│   └── styles.css
├── index.html
├── js/
│   └── main.js
├── projects.html
└── README.md
```

## Run Locally
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Deploy to GitHub Pages
1. Push this repository to GitHub.
2. In repository settings, open **Pages**.
3. Set source to the main branch (root).
4. Save, then open the generated Pages URL.
