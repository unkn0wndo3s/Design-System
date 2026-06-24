# Attribution

This file lists all third-party assets used within Nova Design System (NDS) that are not proprietary to the project, as referenced in `LICENSE.md` (section 4.1).

## Icons

As of version `1.00.3`, NDS no longer ships a custom set of per-icon SVG wrapper components. All icons rendered inside NDS components (e.g. `Select`, `Avatar`, `Notification`, `numericStepper`, `Modal`) are sourced directly from the **[Lucide](https://lucide.dev/)** icon set via the **[`@lucide/astro`](https://www.npmjs.com/package/@lucide/astro)** package (license: **ISC** — no attribution required, commercial use allowed).

This means there is no longer a per-component mapping to maintain here: any icon visible in NDS is a Lucide icon, used directly through `@lucide/astro`. The previous standalone `Icons` component family (`Arrow2Icon`, `BinIcon`, `BurgerIcon`, `SortIcon`, `UploadIcon`, etc.) has been removed from the package.

## Custom Assets

Any icon or asset **not covered above** is created specifically for NDS and falls under section 4.2 of `LICENSE.md` instead. At the time of writing, there are no remaining custom (non-Lucide) icons in the project.

## Notes

- The Lucide icon set is released under the ISC license, which permits commercial use without requiring attribution. This file is maintained anyway for transparency and traceability.
- This file must be kept up to date whenever a new third-party icon set or asset is added to NDS.