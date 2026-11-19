# Aniruddha Rai — Portfolio

A premium, minimal, single-page portfolio for AI/ML Engineer and Python Developer opportunities.

Built with React, TypeScript, Tailwind CSS, and Lucide icons. Dark/light mode with localStorage persistence, smooth-scroll navigation, and fully centralized content.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Replace your profile picture

1. Add your photo as `public/profile.jpg` (square 1:1 image, ~400x400px or larger).
2. If you use a different file name or an external URL, update `image` in `src/data/portfolio.ts` under `profile`.

The photo is displayed as a circle with a subtle border. Until you add your own file, the site shows a fallback placeholder block.

## Add your resume PDF

1. Add your resume as `public/Aniruddha_Rai_Resume.pdf`.
2. If you rename it, update `resume` in `src/data/portfolio.ts` under `profile`.

The "Download CV" and "Download Resume" buttons point to this file.

## Update project URLs and screenshots

Everything lives in `src/data/portfolio.ts`:

- Each project has `liveUrl` and `githubUrl`. Set them to your real deployed site and repository URLs. If either is `null`, that button is hidden automatically.
- Each project has an `image` field for the screenshot/thumbnail. Use a local path like `/projects/jarvic.jpg` (place the file in `public/`) or any image URL. A 16:9 landscape image looks best.

Also update `profile.email`, `profile.github`, and `profile.linkedin` with your real links.

## Contact form

The form currently shows an honest notice instead of faking a successful send. To make it work, connect it to a backend (e.g. Supabase, Formspree, or an email API) in `src/components/Contact.tsx`.

## Edit other content

All text (about, skills, experience, achievements, tagline) lives in `src/data/portfolio.ts`. The Achievements section stays hidden while the `achievements` list is empty.

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Accept defaults (build command `npm run build`, output `dist`) and deploy.
4. Add your custom domain in Vercel's project settings if you have one.

## Build

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```
