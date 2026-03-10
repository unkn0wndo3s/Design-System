# Contributing to Nova Design System (NDS)

First of all, thank you for considering contributing to NDS! This document provides guidelines and workflows to ensure the library remains secure, consistent, and maintainable.

---

## Table of Contents
1. [Communication Channels](#1-communication-channels)
2. [How to Contribute](#2-how-to-contribute)
3. [Branching Strategy](#3-branching-strategy)
4. [Development Standards](#4-development-standards)
5. [Icon Contributions](#5-icon-contributions)
6. [Testing Requirements](#6-testing-requirements)

---

## 1. Communication Channels
All discussions, feature requests, and bug reports must be handled via **GitHub Issues**. 
- **Non-contributors:** Please open an issue to discuss proposed changes or report problems before starting any work.
- **Contributors:** For any major changes, an issue should be linked to your Pull Request.

## 2. How to Contribute
1. Fork the repository (if you are not a direct contributor).
2. Create a new branch according to the naming convention.
3. Commit your changes.
4. Open a **Pull Request (PR)** against the `main` branch.

**Note:** Only the project owner can push directly to `main`. Every contribution must pass through a PR and receive explicit approval from the project owner.

## 3. Branching Strategy
Please use the following naming conventions for your branches:
- `feature/[component-name]`: Adding a new component and its story.
- `fix/[component-name]`: Fixing a bug within an existing component.
- `update/[component-name]`: Updating or modifying a component's behavior.

## 4. Development Standards

### Backward Compatibility
- **Stability First:** All updates to existing components **must remain backward compatible** with previous versions. 
- **Exceptions:** Breaking changes are strictly limited and must be justified and discussed in an issue before any implementation.

### Code Quality
- **Linter & Formatter:** Ensure all code passes ESLint and Prettier checks. Git hooks are active and will prevent commits that do not meet these standards.
- **Language:** All documentation, JSDoc, and code comments must be written in **English**.

### Styling & CSS Variables
- **No Hardcoded Values:** Fixed values (hex colors, pixels for spacing) are strictly forbidden in component files.
- **Design Tokens:** Use only `--nds-` variables for all properties.
- **Dimensions:** Use dynamic units (percentage, `fit-content`, etc.). Fixed values are only allowed for properties like `max-height` or `max-width` where necessary.

### Stories
- Every new component **must** include a corresponding `.stories.svelte` file.

## 5. Icon Contributions
Until the new icon system is implemented, icons are handled as SVG files.
- **SVG Requirements:** Icons must use `currentColor` for fills/strokes to ensure theme compatibility.
- **Visual Consistency:** Submissions must follow the NDS design language (e.g., if existing icons use rounded corners, square-cornered icons will be rejected).
- **Licensing:** By contributing an icon, you agree to the Icon Contribution Policy stated in the README.

## 6. Testing Requirements
We strongly encourage contributors to write tests for every new feature:
- **Unit Tests:** For component logic.
- **E2E Tests:** For complex interactions.
Make sure all existing tests pass before submitting your PR.

### Policy on Templates
Please note that all Issues and Pull Requests must strictly follow the provided templates. **Any Pull Request or Issue that does not respect the template will be automatically rejected or closed without review.**

---
Thank you for helping us make Nova Design System more robust!
