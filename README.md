# City of San Clemente — Homepage Concept

A functional, responsive homepage concept for the City of San Clemente, built from the
[Figma design](https://www.figma.com/design/63HNp0fvBtZErbl6zQDo7D/City-of-San-Clemente) and the
design-system reference in `guidelines/`.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- No component library — per `guidelines/design.md`, the `CityOfSanClemente` kit ships tokens and
  typography classes only; every element is raw HTML styled with `src/CityOfSanClemente/styles.css`.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

- `src/CityOfSanClemente/styles.css` — design tokens (color, spacing, radius) and typography classes.
- `src/styles/` — font import, Tailwind entry, and the top-level stylesheet that wires them together.
- `src/components/` — homepage sections (Header, Hero, QuickLinks, VideoSection, EventsCalendar,
  NewsPromo, MiscLinks, Footer) and a small set of inline SVG icons.
- `guidelines/` — the design-system reference docs this build follows.

## Notes on this concept pass

- The hero, video-thumbnail, and promo photography are placeholder gradients — the Figma file's
  image/icon assets are hosted on Figma's CDN, which wasn't reachable from this build environment's
  network policy. Swap in the real exported photography/icons from Figma whenever convenient; the
  layout and aspect ratios are already sized for them.
- Icons are hand-drawn inline SVGs standing in for the exact Figma icon set, using the same token
  colors.
- The events calendar is live (shows the real current month/date and lets you page months); the
  meeting/event list content is placeholder copy from the design.
