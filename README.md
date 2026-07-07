# Nova Design System — Vue 3

Vue 3 + TypeScript port of the Nova Design System (Astro). Same tokens, same BEM SCSS, but all interactivity relies on Vue's reactivity: `v-model`, `defineModel`, `provide`/`inject`, named slots — zero `document.querySelector`, zero custom elements.

---

## Table of Contents

1. [Overview](#user-content-overview)
2. [Project Status](#user-content-project-status)
3. [Core Principles](#user-content-core-principles)
4. [Available Components](#user-content-available-components)
5. [Design Tokens](#user-content-design-tokens)
6. [Installation](#user-content-installation)
7. [Usage](#user-content-usage)
8. [Interactive Components API](#user-content-interactive-components-api)
9. [Named Slots](#user-content-named-slots)
10. [Differences from the Astro version](#user-content-differences-from-the-astro-version)
11. [Development](#user-content-development)
12. [License](#user-content-license)

---

## Overview

This package is the Vue 3 port of the Nova Design System, distributed **on the same npm package** as the Astro version (`@unkn0wndo3s/nova-design-system`), under the `vue` dist-tag. Design tokens, SCSS/BEM naming, and the visual component API remain identical across versions; only the interactivity layer changes paradigm.

## Project Status

> **ALPHA** — The port is under active development. Current version: `1.2.1-vue` (based on Astro version `1.2.1`). Component APIs, token naming, and internal architecture may change before a stable release.

## Core Principles

- **Responsive Architecture:** Components are built mobile-first and work correctly across modern screen sizes.
- **Security-Centric:** Unsafe patterns (injection, untrusted rendering) are avoided by design.
- **Native Theming:** All styling relies on centralized design tokens and supports Light and Dark modes.
- **Type Safety:** Written in TypeScript for stronger reliability and a better developer experience.
- **Consistency First:** Shared tokens, naming conventions, and reusable patterns take priority over one-off styles.

## Available Components

Interactive components with Vue-managed state:

| Component | Category |
|---|---|
| `Button` | Actions |
| `Toggle` | Actions |
| `NumericStepper` | Actions |
| `Select` / `SelectOption` | Actions |
| `TextField` | Forms |
| `Checkbox` | Forms |
| `Radio` | Forms |
| `Tab` / `TabItem` / `TabContent` | Navigation |
| `Pagination` / `PaginationNumber` | Navigation |
| `Sidebar` / `SidebarItem` | Navigation |
| `Navbar` | Navigation |
| `Card` | Data Display |
| `Modal` | Overlay |
| `Notification` | Feedback |

> Icons come from **[`lucide-vue-next`](https://www.npmjs.com/package/lucide-vue-next)**, the Vue equivalent of `@lucide/astro` used on the Astro side. See `ATTRIBUTION.md` for the full mapping.

## Design Tokens

Tokens are strictly shared with the Astro version (same SCSS files, same `--nds-*` variables):

| File | Contents |
|---|---|
| `_colors.scss` | Color palette and semantic colors (`success`, `warning`, `error`, `info`) |
| `_spacing.scss` | Spacing scale, border radius, border width |
| `_typography.scss` | Font families, sizes, weights |

**Rules:**

- Never hardcode a color, spacing, or radius when a token exists.
- Never override a token locally unless explicitly supported.
- Any global token change goes through the central styling system (shared with Astro).

## Installation

Requires **Node.js >= 22.12.0**.

```bash
npm install @unkn0wndo3s/nova-design-system@vue
```

```ts
// main.ts
import '@unkn0wndo3s/nova-design-system/style.css'; // if styles are exported separately
```

## Usage

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { Select, SelectOption, Toggle, Modal, Button } from '@unkn0wndo3s/nova-design-system';

const country = ref('fr');
const enabled = ref(false);
const open = ref(false);
</script>

<template>
  <Toggle v-model="enabled" id="notif" />

  <Select v-model="country" @change="({ value, label }) => console.log(value, label)">
    <SelectOption value="fr">France</SelectOption>
    <SelectOption value="be">Belgium</SelectOption>
  </Select>

  <Button @click="open = true">Open</Button>
  <Modal v-model:open="open" title="Confirmation">
    Content
    <template #footer>
      <Button type="secondary" @click="open = false">Close</Button>
    </template>
  </Modal>
</template>
```

## Interactive Components API

| Component | v-model | Events | Notes |
|---|---|---|---|
| `Toggle` | `v-model` (boolean) | — | keyboard accessible (`role="switch"`) |
| `Checkbox` | `v-model` (boolean) | — | |
| `Radio` | `v-model` (string) | — | shared `v-model` per group, `value` per button |
| `TextField` | `v-model` (string) | — | reactive character counter if `max` + `type="textarea"` |
| `NumericStepper` | `v-model` (number) | — | `min` / `max` / `step`, automatic clamping |
| `Select` | `v-model` (string) | `@change({ value, label })` | options via slot + `SelectOption`, closes on outside click / Escape |
| `Tab` | `v-model:active` (string) | `@change(itemId)` | falls back to `defaultActive`, otherwise the first `TabItem` |
| `Pagination` | `v-model` (number) | `@change(page)` | `PaginationNumber` takes a `page` prop |
| `Modal` | `v-model:open` (boolean) | — | closes on Escape, overlay click, close button; `#footer` slot |
| `Notification` | — | `@close` | removes itself from the DOM on close-button click |

## Named Slots

- `Button`: `#icon-left`, default, `#icon-right`
- `Card` / `Modal`: `#footer` (conditionally rendered via `$slots.footer`)
- `Sidebar`: default + `#footer`; `SidebarItem`: `#icon`
- `Navbar`: default + `#right`

## Differences from the Astro version

- Custom elements (`nds-select`, `nds-modal`, `toggle-switch`) and all DOM `<script>` tags are replaced by Vue state.
- `Select`/`SelectOption`, `Tab`/`TabItem`/`TabContent`, and `Pagination`/`PaginationNumber` communicate via typed `provide`/`inject` (`InjectionKey`) instead of custom DOM events.
- `PaginationNumber` takes an explicit `page` prop instead of reading `textContent`.
- `TabContent` no longer needs the group's `id` (handled by context), only `item-id`.
- Icons: `@lucide/astro` → `lucide-vue-next`.
- The SCSS (tokens + BEM components) is reused as-is.
- Publishing: same npm package as the Astro version, distinguished by dist-tag (`latest` = Astro, `vue` = Vue) and a version suffix (`-vue`).

## Development

### Clone the repository

```bash
git clone https://git.novaprojects.dev/unkn0wn/nova-design-system.git
git checkout main-vue
```

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev        # demo in src/demo/App.vue
```

### Useful scripts

```bash
npm run typecheck  # vue-tsc
npm run build
```

## Contributing

Contributions are welcome. To report a bug, suggest a feature, or open a Pull Request, follow the repository's contribution rules and templates.

## License

This project is **not distributed under a standard open-source license**. Usage, redistribution, commercial use, and derivative work rules are defined in `LICENSE.md` (shared with the Astro version). Read that file carefully before using the library in a product or service.