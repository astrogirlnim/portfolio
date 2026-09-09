# Nataly.Dev

Portfolio site for Nataly Smith. Static Next.js export, deployed to GitHub Pages.

Live site: https://astrogirlnim.github.io/portfolio/

## Development

Prerequisites: Node.js 18+, npm.

```bash
npm install
npm run dev
npm run build
```

Dev server: http://localhost:3000

## Structure

```
app/                 Next.js App Router pages
components/          React components
lib/                 Shared helpers and content
public/              Static assets
.github/workflows/   GitHub Pages deploy
```

## Notes

- Static export is set in `next.config.mjs` (`output: 'export'`)
- Production uses `basePath: /portfolio` for GitHub Pages
- Content for the resume companion source lives in `NMM_Resume_Software_Latest.tex`
