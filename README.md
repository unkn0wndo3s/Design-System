# Nova Design System (NDS)

Nova Design System (NDS) is a lightweight, responsive, and secure UI library built with **Svelte**. While developed primarily for internal and personal projects, the library is open-source and welcomes community contributions.

---

## Table of Contents
1. [Overview](#overview)
2. [Project Status](#project-status)
3. [Core Principles](#core-principles)
4. [Component Roadmap](#component-roadmap)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Theming and Variables](#theming-and-variables)
8. [Contributing](#contributing)
9. [Development and Documentation](#development-and-documentation)

---

## Overview
NDS aims to provide a robust set of components that are easy to implement while maintaining high security standards and full responsiveness across all modern web platforms.

## Project Status
**Current Phase: ALPHA (In Development)** The library is currently undergoing heavy development. APIs and component structures are subject to change until the Beta release.

## Core Principles
* **Responsive Architecture:** All components are built with a mobile-first approach to ensure compatibility across various devices.
* **Security-Centric:** NDS strictly avoids unsafe practices (such as raw HTML injection without sanitization) to protect applications from common vulnerabilities.
* **Native Theming:** Features a built-in theme management system for seamless transitions between Light and Dark modes.
* **Type Safety:** Fully written in TypeScript to provide an excellent developer experience and catch errors at compile time.

## Component Roadmap

### Alpha Components (Available or in progress)
* **Actions:** Button, Dropdown, Search Bar, Toggle.
* **Form Inputs:** Checkbox, Radio, Select.
* **Data Display:** Badge, Table, Row, Cell, Tooltip, Paginating.
* **Feedback:** Notifications, Loading Bar.

### Beta Phase Objectives
* **Palette Refinement:** Comprehensive review and expansion of the brand and functional color systems.
* **Token Audit:** Standardization of sizing tokens including padding, radius, and margins.
* **Component Variants:** Introduction of multiple size and emphasis variations for existing components.
* **Custom Iconography:** Release of a proprietary, custom-designed icon set.

## Installation
The package is currently in private Alpha. Public installation will be enabled soon.
```bash
npm install @unkn0wn-pkgs/nds
```
### vite configuration
Due to the library being in Alpha, you need to prevent Vite from pre-bundling the package to avoid resolution issues with Svelte components and SCSS:
```ts
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    exclude: ['@unkn0wn-pkgs/nds']
  }
});
```

## Usage
### Basic Component Implementation
```html
<script lang="ts">
  import { Notification } from 'nova-design-system';
</script>

<Notification type="warning">
  This is a warning message.
</Notification>
```
## Theming and Variables
NDS relies on a centralized Design Token system. All styling is controlled through CSS variables (custom properties) prefixed with `--nds-`.

**Implementation Rule**: To maintain design integrity, developers should never override variables locally within a component's scope. All modifications must be registered within the core system to ensure global consistency.

## Contributing
Contributions are welcome. Whether you are reporting a bug, suggesting a feature, or submitting a Pull Request, please follow the project's coding standards.

### Icon Contribution Policy
By contributing a custom icon to NDS, you grant all users the right to use it freely in their projects. No mandatory attribution to the creator is required for end-users.

## Development and Documentation
Documentation is managed via Storybook. To browse the component library locally:

1. **Clone the repository:**
```bash
git clone https://github.com/unkn0wndo3s/Design-System.git
```

2. **Install dependacies:**
```bash
npm install
```

3. **Launch Storybook:**
```bash
npm run storybook
```

_Note: A public documentation URL will be hosted alongside the Beta release._