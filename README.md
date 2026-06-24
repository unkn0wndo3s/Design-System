# Nova Design System (NDS)

Nova Design System (NDS) is a lightweight, responsive UI component library built with **Astro**. It is developed primarily for internal and personal projects, and is publicly available for reference and contributions.

---

## Table of Contents

1. [Overview](#user-content-overview)
2. [Project Status](#user-content-project-status)
3. [Core Principles](#user-content-core-principles)
4. [Available Components](#user-content-available-components)
5. [Design Tokens](#user-content-design-tokens)
6. [Installation](#user-content-installation)
7. [Usage](#user-content-usage)
8. [Development](#user-content-development)
9. [License](#user-content-license)

---

## Overview

NDS provides a focused set of reusable Astro components with centralized design tokens, light/dark theming, and a strong focus on consistency and maintainability. The component documentation and showcase are also built with Astro.

## Project Status
> **ALPHA** — The library is under active development. Current version: `1.2.1`. Component APIs, token naming, and internal architecture may change before a stable release.

## Core Principles

- **Responsive Architecture:** Components are built mobile-first and work correctly across modern screen sizes.
- **Security-Centric:** Unsafe patterns (injection, untrusted rendering) are avoided by design.
- **Native Theming:** All styling relies on centralized design tokens and supports Light and Dark modes.
- **Type Safety:** Written in TypeScript for stronger reliability and a better developer experience.
- **Consistency First:** Shared tokens, naming conventions, and reusable patterns take priority over one-off styles.

## Available Components

These are the components currently exported from the package (`src/components/index.ts`):

| Component                                         | Category     |
| -------------------------------------------------- | ------------ |
| `Button`                                           | Actions      |
| `Toggle`                                           | Actions      |
| `NumericStepper`                                   | Actions      |
| `Select` / `SelectOption`                          | Actions      |
| `TextField`                                        | Forms        |
| `Checkbox`                                         | Forms        |
| `Radio`                                            | Forms        |
| `Tab` / `TabItem` / `TabContent`                   | Navigation   |
| `Link`                                             | Navigation   |
| `Breadcrumb` / `BreadcrumbItem`                    | Navigation   |
| `Pagination` / `PaginationNumber`                  | Navigation   |
| `Navbar`                                           | Navigation   |
| `Sidebar` / `SidebarItem`                          | Navigation   |
| `Avatar`                                           | Data Display |
| `Badge`                                            | Data Display |
| `Card`                                             | Data Display |
| `ListItem` / `ListItemTitle` / `ListItemSubtitle`  | Data Display |
| `Notification`                                     | Feedback     |
| `LoadingBar`                                       | Feedback     |
| `Tooltip`                                          | Feedback     |
| `Modal`                                            | Overlay      |

> Icons are no longer shipped as standalone NDS components. As of `1.00.3`, all icons used internally (e.g. in `Select`, `Avatar`, `Notification`, `numericStepper`) come directly from the **[`@lucide/astro`](https://www.npmjs.com/package/@lucide/astro)** package. See `ATTRIBUTION.md` for details.

## Design Tokens

All styling is controlled via CSS custom properties prefixed with `--nds-`, defined in `src/styles/tokens/`:

| File               | Contents                                                                  |
| ------------------ | ------------------------------------------------------------------------- |
| `_colors.scss`     | Color palette and semantic colors (`success`, `warning`, `error`, `info`) |
| `_spacing.scss`    | Base spacing scale, border radius, and border width                       |
| `_typography.scss` | Font families, sizes, and weights                                         |

**Rules:**

- Never hardcode colors, spacing, or radii in component styles when a token exists.
- Never override tokens locally in component scope unless explicitly supported.
- All global token changes must go through the core styling system.

## Installation

Requires **Node.js >= 22.12.0**.

```bash
npm install @unkn0wndo3s/nova-design-system
```

No extra Vite de-optimization configuration is required.

## Usage

Import components directly from the package:

```astro
---
import { Button } from '@unkn0wndo3s/nova-design-system';
---

<Button>Click me</Button>
```

```astro
---
import { Notification } from '@unkn0wndo3s/nova-design-system';
---

<Notification type="warning">
  This is a warning message.
</Notification>
```

```astro
---
import { Modal } from '@unkn0wndo3s/nova-design-system';
---

<Modal>
  This is a modal dialog.
</Modal>
```

```astro
---
import { Breadcrumb, BreadcrumbItem } from '@unkn0wndo3s/nova-design-system';
---

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
</Breadcrumb>
```

## Development

### Clone the repository

```bash
git clone https://git.novaprojects.dev/unkn0wn/nova-design-system.git
```

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

### Useful scripts

```bash
npm run build    # Build the project
npm run preview  # Preview the production build
```

### Project Structure

```text
src/
├── components/            # Astro components
│   ├── Avatar/
│   ├── Badge/
│   ├── Breadcrumb/
│   ├── Button/
│   ├── Card/
│   ├── Checkbox/
│   ├── Link/
│   ├── ListItem/
│   ├── LoadingBar/
│   ├── Modal/
│   ├── Navbar/
│   ├── Notifications/
│   ├── numericStepper/
│   ├── pagination/
│   ├── Radio/
│   ├── Select/
│   ├── Sidebar/
│   ├── Tabs/
│   ├── textField/
│   ├── Toggle/
│   ├── Tooltip/
│   └── index.ts
├── layouts/                # Astro layouts
├── pages/                  # Documentation pages
├── styles/
│   ├── tokens/
│   │   ├── _colors.scss
│   │   ├── _spacing.scss
│   │   └── _typography.scss
│   └── index.scss
└── index.ts
```

## Contributing

Contributions are welcome. To report a bug, suggest a feature, or open a Pull Request, follow the repository contribution rules and templates.

NDS no longer maintains a custom set of icon components — icons are sourced from the **[Lucide](https://lucide.dev/)** icon set via `@lucide/astro`. If a needed icon isn't in Lucide, open an issue to discuss it before adding any new icon dependency.

## License

This project is **not distributed under a standard open-source license**. Usage, redistribution, commercial use, and derivative work rules are defined in `LICENSE.md`. Read that file carefully before using the library in a product or service.