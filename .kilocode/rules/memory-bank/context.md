# Context

- Date: 2026-03-04
- Updated hero image in `src/app/page.tsx` to use a local static asset import.
- Added new asset file: `src/assets/student-with-laptop.png`.
- Hero section no longer depends on the external Unsplash image URL.
- Navbar now becomes transparent on `lg` screens while the hero section (`#home`) is active, and returns to white after scrolling past hero.
- Hero floating icon animations were made explicit with full animation shorthands, and additional keyframes were added in `src/app/globals.css` to ensure visible motion.
