# Nova Design System (NDS)

Nova Design System (NDS) is a lightweight, responsive, and secure UI library built with **Svelte**.
It is developed primarily for internal and personal projects and is available publicly for reference, testing, and contributions.

---

## Table of Contents
1. [Overview](#overview)
2. [Project Status](#project-status)
3. [Core Principles](#core-principles)
4. [Available Components](#available-components)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Theming and Variables](#theming-and-variables)
8. [Contributing](#contributing)
9. [Development and Documentation](#development-and-documentation)
10. [License](#license)

---

## Overview
NDS aims to provide a robust set of reusable UI components that are easy to integrate while maintaining consistency, responsiveness, and a strong focus on safety and maintainability.

## Project Status
**Current Phase: ALPHA**

The library is still under active development. Component APIs, styling structure, and internal architecture may change before the Beta release.

## Core Principles
- **Responsive Architecture:** Components are built with a mobile-first mindset and are expected to behave correctly across modern screen sizes.
- **Security-Centric:** Unsafe patterns are avoided, especially anything that could introduce injection or untrusted rendering issues.
- **Native Theming:** Styling is based on centralized design tokens and supports Light and Dark themes.
- **Type Safety:** The library is written in TypeScript for stronger reliability and a better developer experience.
- **Consistency First:** Shared tokens, naming conventions, and reusable patterns take priority over one-off styling.

## Available Components
The following components are currently exported by the library:

### Actions
- `Button`
- `Toggle`
- `Paginate`
- `PaginationNumber`

### Form Inputs
- `Checkbox`
- `Radio`
- `Select`
- `SelectOption`
- `Search`
- `Textarea`

### Feedback
- `Notification`
- `LoadingBar`
- `Tooltip`

### Data Display
- `Badge`

Additional components and variants will be introduced progressively during the Alpha and Beta phases.

## Installation
Install the package with npm:

```bash
npm install @unkn0wn-pkgs/nds
```

No extra Vite de-optimization configuration is required anymore.

## Usage
### Basic Component Example
```svelte
<script lang="ts">
  import { Notification } from '@unkn0wn-pkgs/nds';
</script>

<Notification type="warning">
  This is a warning message.
</Notification>
```

### Another Example
```svelte
<script lang="ts">
  import { Button } from '@unkn0wn-pkgs/nds';
</script>

<Button>
  Click me
</Button>
```

## Theming and Variables
NDS relies on a centralized Design Token system.
All styling is controlled through CSS custom properties prefixed with `--nds-`.

### Rules
- Do not hardcode colors, spacing, or radii directly inside component styles when a design token exists.
- Do not override tokens locally in isolated component scopes unless the system explicitly supports it.
- Keep all global token changes inside the core styling system to preserve consistency.

## Contributing
Contributions are welcome.
If you want to report a bug, suggest a feature, or submit a Pull Request, follow the repository contribution rules and templates.

Please read the contribution guide before opening a PR.

### Icon Contribution Policy
By contributing a custom icon to NDS, you agree that the icon may be used inside the design system according to the repository license and contribution policy.

## Development and Documentation
Documentation is managed with **Storybook**.

### Clone the repository
```bash
git clone https://github.com/unkn0wndo3s/Design-System.git
```

### Install dependencies
```bash
npm install
```

### Launch Storybook
```bash
npm run storybook
```

### Useful scripts
```bash
npm run check
npm run lint
npm run format
npm run build
npm run build-storybook
```

## License
This project is **not distributed under a standard open-source license**.
Usage, redistribution, commercial use, and derivative work rules are defined in `LICENSE.md`.
Read that file carefully before using the library in a product or service.
