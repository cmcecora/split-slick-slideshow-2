# Medical Tests Explorer

React/Vite app that explores medical tests by body part with a split-view slideshow showcase.

## Stack
- React 19, TypeScript 5.8, Vite 6
- Styling: vanilla CSS modules per feature (MedicalExplorer.css, SplitSlideshow.css) plus global theme in `src/index.css`
- Icons: `lucide-react`
- Data: static TypeScript dataset in `src/data/testData.ts` (body systems/categories, ~700 tests, image mappings)

## App flow
- `src/App.tsx` toggles between two views:
  - **MedicalExplorer**: two-column UI to search/select body parts and see tests. Includes tab navigation (non-tests tabs are placeholders), imaging/lab filters, and slideshow shortcut.
  - **SplitSlideshow**: animated split-screen vertical slider (React rewrite of the original slick/jQuery demo) with wheel/drag navigation.
- Entry: `src/main.tsx`; HTML shell `index.html` loads Space Grotesk + JetBrains Mono.
- Assets expected in `public/images` (body-part PNGs, procedure images, per-test placeholders).

## Key files
- `src/components/MedicalExplorer/*`: Body part panels, accordions, search, tabs, test cards, and styling.
- `src/hooks/useMedicalExplorer.ts`: Encapsulates explorer state logic (currently unused; state is kept locally in `MedicalExplorer`).
- `src/components/Slideshow/SplitSlideshow.tsx`: Split slider logic; styles in `SplitSlideshow.css`.
- `src/data/testData.ts`: Body systems/categories, body-part image map, test list, helpers (`getTestsForBodyPart`, `getTestImage`, etc.).
- Legacy artifacts from the CodePen demo (`src/script.js`, `src/style.scss`, root README) remain but are not used by the React app.

## Scripts
- `npm run dev` — start Vite dev server.
- `npm run build` — type-check via `tsc -b` then `vite build`.
- `npm run preview` — preview production build.

## Notes for contributors
- Tabs other than “Tests” in the explorer are UI-only; no content yet.
- Data file is large and eagerly imported; consider code-splitting/lazy loading if this grows.
- The slideshow uses a fixed slide array with remote images; swap `slides` in `SplitSlideshow.tsx` for project data.
