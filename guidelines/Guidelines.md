# Design System

This project uses the following design system packages. Please read them before anything else.

**MUST READ IN FULL**

- [Design System Reference](./design.md) — tokens, typography, spacing, color, and agent rules
- [CityOfSanClemente Guidelines](../src/CityOfSanClemente/guidelines/Guidelines.md) - City of San Clemente guidelines

## Before applying styles

Before hardcoding a color, spacing, radius, font-size, or any other style
value, check the kit's stylesheet (imported per `setup.md`) for a CSS
custom property that fits — e.g. `--primary-button`, `--text-default`,
`--spacer-md`. Use the property via `var(--name)` (or the matching
Tailwind utility, if the kit defines one) rather than a raw hex / px /
rem value. Hardcoded values bypass the kit's theming and break dark mode,
re-skinning, and any future token changes.
