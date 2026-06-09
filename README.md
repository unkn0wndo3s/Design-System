# Nova Design System (NDS)

Nova Design System (NDS) is a lightweight, responsive UI component library built with **Astro**. It is developed primarily for internal and personal projects, and is publicly available for reference and contributions.

---

## Table of Contents

1. [Overview](#overview)
2. [Project Status](#project-status)
3. [Core Principles](#core-principles)
4. [Available Components](#available-components)
5. [Design Tokens](#design-tokens)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Development](#development)
9. [License](#license)

---

## Overview

NDS provides a focused set of reusable Astro components with centralized design tokens, light/dark theming, and a strong focus on consistency and maintainability. The component documentation and showcase are also built with Astro.

## Project Status

> **ALPHA** — The library is under active development. Current version: `0.03.0`. Component APIs, token naming, and internal architecture may change before a stable release.

## Core Principles

- **Responsive Architecture:** Components are built mobile-first and work correctly across modern screen sizes.
- **Security-Centric:** Unsafe patterns (injection, untrusted rendering) are avoided by design.
- **Native Theming:** All styling relies on centralized design tokens and supports Light and Dark modes.
- **Type Safety:** Written in TypeScript for stronger reliability and a better developer experience.
- **Consistency First:** Shared tokens, naming conventions, and reusable patterns take priority over one-off styles.

## Available Components

These are the components currently implemented in `src/components/`:

| Component | Category |
|---|---|
| `Button` | Actions |
| `Toggle` | Actions |
| `NumericStepper` | Actions |
| `Tab` / `TabItem` / `TabContent` | Navigation |
| `Link` | Layout |
| `ListItem` / `ListItemTitle` / `ListItemSubtitle` | Data Display |
| `Notification` | Feedback |
| `LoadingBar` | Feedback |
| `Icons` | Utility |

> Components such as Navbar, Sidebar, Card, and Modal are planned but not yet implemented.

## Design Tokens

All styling is controlled via CSS custom properties prefixed with `--nds-`, defined in `src/styles/tokens/`:

| File | Contents |
|---|---|
| `_colors.scss` | Color palette and semantic colors (`success`, `warning`, `error`, `info`) |
| `_spacing.scss` | Base spacing scale, border radius, and border width |
| `_typography.scss` | Font families, sizes, and weights |

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

```
src/
├── components/           # Astro components
│   ├── Button/
│   ├── Icons/
│   ├── Link/
│   ├── ListItem/
│   ├── LoadingBar/
│   ├── Notifications/
│   ├── Tabs/
│   ├── Toggle/
│   ├── numericStepper/
│   └── index.ts
├── layouts/              # Astro layouts
├── pages/                # Documentation pages
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

**Icon Contribution Policy:** By contributing a custom icon to NDS, you agree that it may be used within the design system under the repository license and contribution policy.

## License

This project is **not distributed under a standard open-source license**. Usage, redistribution, commercial use, and derivative work rules are defined in `LICENSE.md`. Read that file carefully before using the library in a product or service.