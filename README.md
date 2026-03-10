# Nova Dseign System (NDS)
Nova Design System (NDS) is a lightweight, responsive, and secure UI library built with **Svelte 5**. While developed primarily for personal projects, it is public and open for anyone to use or contribute to.

## Features
- Responsive by design: Components are built to look great on any screen size.
- Security first: No use of unsafe practices; built-in protection against common vulnerabilities.
- Dark mode reaady: Automatic theme switching with a dedicated toggle function.
- Type safe: Built with TypeScript

## Status: Alpha
NDS is currently under developpment in **ALPHA**. The following components will be available:
- Button
- Checkbox
- Dropdown
- Toggle
- Search Bar
- Radio
- Select
- Badge
- Table
- Row
- Cell
- Tooltip
- Paginating
- Notifications
- Loading Bar

## Installation 
_coming soon_
```bash
npm install --
```

## Usage
### Basic component example
```html
<script>
  import { Notification } from 'nova-design-system';
</script>

<Notification type="warning">
  This is a warning message.
</Notification>
```

**Dev Note:** Within the NDS ecosystem, we never override variables locally. All tokens must be registered in the core system to maintain integrity.

## Coming - Phase: Beta
- Redefined Color Palette & Palette expansion.
- Audit of sizing tokens (padding, radius, margins).
- additional component variants.
- Custom Icons: Introduction of a personal, unique icon set.

## Contributing
contributions are welcome! Wether it's a bug report, a new component, or an icon, feel free to open a Pull Request.

### Icon Contribution Policy
By contributing a custom icon to NDS, you grant all users the right to use it freely in their projects. **No mandatory attribution to the creator is required** for end-users, ensuring a seamless experience for developers.

## Documentation
Currently, the documentation is available via Storybook within the repository
1. Clone the repo
2. Run `npm install`
3. Run `npm run storybook`

_A public URL for documentation will be available in the Beta phase.