# Ankit Vyas Analytics Portfolio

## Overview

This repository contains the source code for a professional portfolio website for
**Ankit Vyas**, a business, data and marketing analyst. Built with
[React](https://react.dev/), [Vite](https://vitejs.dev/) and
[Tailwind CSS](https://tailwindcss.com/), the site is fast, modern and
responsive. It showcases skills, experience, education, certifications and
portfolio projects and provides a downloadable CV and contact links.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v9 or later)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/ankit-vyas-analytics-portfolio.git
cd ankit-vyas-analytics-portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

This will run the site locally. Open your browser and navigate to
`http://localhost:5173` to view the website.

### Build for Production

To build the site for production, run:

```bash
npm run build
```

The static files will be generated in the `dist` directory. You can preview
the production build using:

```bash
npm run serve
```

## Deployment on Vercel

You can deploy this site directly to [Vercel](https://vercel.com). Create a
new project in Vercel and connect it to your GitHub repository. Vercel
automatically detects Vite projects. Ensure the **Build Command** is
`npm run build` and the **Output Directory** is `dist`.

To enable proper routing for a Single Page Application, add a `vercel.json`
file with a rewrite rule:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

According to Vercel’s official documentation, this rewrite allows deep
linking in SPA Vite apps【676853413552510†L145-L162】. After pushing your
repository to GitHub, import it into Vercel and deploy. Vercel will
provide a public URL.

## Customisation

### Adding Your Real CV

Replace the file at `public/Ankit_Vyas_CV.pdf` with your actual CV file.
Keep the same filename so that the download buttons continue to work.

### Updating Links

Update `src/components/Contact.jsx` and `src/components/Projects.jsx` to
replace the placeholder values (`ADD_LINKEDIN_URL`, `ADD_GITHUB_URL`,
`CASE_STUDY_LINK`, `GITHUB_LINK`, `DASHBOARD_LINK`) with your actual
LinkedIn profile URL, GitHub profile URL, portfolio link and project links.

### Tailwind Configuration

The Tailwind configuration (`tailwind.config.js`) defines custom colours and
enables dark mode. You can modify the colours under `theme.extend.colors`
to match your personal branding.

## References

- **Tailwind installation with Vite**: the official guide explains how to set
  up Tailwind as a Vite plugin by installing `tailwindcss` and
  `@tailwindcss/vite` and configuring the plugin【931179158965798†L289-L315】.
- **Vercel deployment for Vite apps**: Vercel documentation recommends adding
  a `vercel.json` file with rewrite rules to enable deep linking for
  Single Page Applications【676853413552510†L145-L162】.

---

© 2026 Ankit Vyas. All rights reserved.