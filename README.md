# BSIT Student Portfolio

A responsive, dark-first developer portfolio with a quiet futuristic background (canvas network mesh, floating code fragments, grid and light sweep).

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`), lucide-react. No backend.

## Run
```bash
npm install
npm run dev      # local development
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
```

## Update your information
Everything editable is in `src/data/portfolio.ts`: name, initials, email, `github` / `linkedin` URLs (icons and buttons appear only when set), About text, skills, education, and projects. Search for `PLACEHOLDER`.

## Add a project
Append an object to `projects` in `src/data/portfolio.ts`. Put a screenshot in `public/images/` and set `image: '/images/name.png'`; without one, a replaceable placeholder shows. Only list tags and statuses that are true.

## Adjust the background
`src/components/AnimatedBackground.tsx`: node count (`count`), link distance (`LINK`), speed (`vx`/`vy`), pixel-ratio cap (`1.5`), and the `FRAGMENTS` list. Colors come from `--node-rgb` in `src/index.css`. With `prefers-reduced-motion: reduce`, the canvas draws one static frame and CSS animations are disabled. Theme tokens live at the top of `src/index.css`.

## Deploy to Vercel
Push to GitHub, import the repo at vercel.com, framework preset **Vite**, build command `npm run build`, output directory `dist`. No environment variables are needed.

## Troubleshooting
- Blank page after deploy: confirm output directory is `dist`.
- Styles missing: `@import "tailwindcss"` must be in `src/index.css` and `tailwindcss()` in `vite.config.ts`.
- Fonts not loading: the site falls back to system fonts; Inter loads from Google Fonts.
- GitHub/LinkedIn icons missing: set the URLs in `portfolio.ts`.
- Node errors: use Node 20.19+ or 22.12+.
