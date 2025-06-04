# Nataly.Dev

*Portfolio website showcasing professional experience and skills*

I specialize in full-stack app development, mathematical modeling, with expertise in cloud technologies/infrastructure and pipeline architecture. This is my portfolio website!

## Overview

This is a modern portfolio website built with Next.js, designed to showcase professional experience and skills. The site is configured for static export and can be automatically deployed to GitHub Pages.

## 🚀 GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

The development server will be available at `http://localhost:3000` (or next available port).

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── public/             # Static assets
├── styles/             # Global styles
├── .github/workflows/  # GitHub Actions for deployment
└── out/                # Static export output (generated)
```

## 🔧 Configuration

- **Static Export**: Configured in `next.config.mjs` with `output: 'export'`
- **GitHub Actions**: Automated deployment workflow in `.github/workflows/deploy.yml`
- **Styling**: Tailwind CSS with custom configurations

## 📋 Features

- ✅ Static site generation for GitHub Pages compatibility
- ✅ Responsive design with Tailwind CSS
- ✅ Modern React components with TypeScript
- ✅ Automated deployment with GitHub Actions
- ✅ SEO optimized
- ✅ Fast loading and optimized assets

## 📝 Customization

The site content is based on the resume information in `NMM_Resume_Software_Latest.tex`. To update:

1. Modify the content in the React components
2. Update styling in the Tailwind classes
3. Add new sections or pages as needed
4. Push changes to automatically redeploy

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome via issues and pull requests.
