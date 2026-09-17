# City of San Clemente — Design System Reference

This document is the authoritative reference for agents generating UI in this project.
Read it before writing any component, choosing any color, or setting any spacing value.

---

## Kit identity

- **Kit name**: CityOfSanClemente
- **Kit path**: `src/CityOfSanClemente/`
- **Stylesheet**: `src/CityOfSanClemente/styles.css` (auto-imported via `src/styles/index.css`)
- **No React components ship with this kit** — the kit is token + typography classes only.
  Use raw HTML elements styled exclusively with the tokens and classes documented here.

---

## Setup

`src/styles/index.css` already imports the kit in the correct order:

```css
@import './fonts.css';        /* Google Fonts: Signika + Arimo */
@import './tailwind.css';
@import '../CityOfSanClemente/styles.css';
```

`src/styles/fonts.css` must include:

```css
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@400;600;700&family=Arimo:wght@400;700&display=swap');
```

No additional npm packages or providers are required.

---

## Color palette

All color tokens are CSS custom properties on `:root`. Use `var(--token)` directly or via Tailwind's
`[color:var(--token)]` escape — never use raw hex.

### Primary (navy blue)

| Token | Value |
|---|---|
| `--primary/100` | `#DCE1E8` |
| `--primary/300` | `#7199C9` |
| `--primary/500` | `#0B366A` |
| `--primary/700` | `#07192E` |
| `--primary/900` | `#03080E` |

### Secondary (warm tan / stone)

| Token | Value |
|---|---|
| `--secondary/100` | `#F1F0EF` |
| `--secondary/300` | `#D2D0C6` |
| `--secondary/500` | `#AFA683` |
| `--secondary/700` | `#524D37` |
| `--secondary/900` | `#1B1913` |

### Accent (ocean blue)

| Token | Value |
|---|---|
| `--accent/100` | `#E9EEF0` |
| `--accent/300` | `#A7CFDC` |
| `--accent/500` | `#24B6E5` |
| `--accent/700` | `#115166` |
| `--accent/900` | `#071A20` |

### Status

| Token | Value |
|---|---|
| `--danger/100` | `#EFE9E8` |
| `--danger/500` | `#D93025` |
| `--success/100` | `#E0E9E5` |
| `--success/500` | `#1A8754` |
| `--warning/100` | `#F0ECE7` |
| `--warning/500` | `#E8890C` |

### Neutral

| Token | Value |
|---|---|
| `--neutral/white` | `#FFF` |
| `--neutral/black` | `#000` |

---

## Semantic tokens

These are the tokens to reach for first — they carry intent and adapt to future re-theming.

### Text

| Token | Resolves to |
|---|---|
| `--text/primary` | `--primary/700` (dark navy) |
| `--text/secondary` | `--secondary/700` (dark tan) |
| `--text/on-primary` | `--neutral/white` |
| `--text/on-accent` | `--neutral/white` |
| `--text/link` | `--accent/500` (ocean blue) |
| `--text/muted` | `--secondary/500` |

### Surface

| Token | Resolves to / Value |
|---|---|
| `--surface/background` | `#F6E8CF` (warm parchment — page background) |
| `--surface/white` | `--neutral/white` |
| `--surface/primary` | `--primary/500` (navy) |
| `--surface/dark` | `--primary/700` (deep navy) |
| `--surface/card` | `--secondary/100` (light stone) |
| `--surface/accent` | `--accent/500` (ocean blue) |
| `--surface/accent-subtle` | `--accent/100` |
| `--surface/warm` | `#F4D193` (golden warm) |

### Border

| Token | Resolves to |
|---|---|
| `--border/default` | `--secondary/300` |
| `--border/subtle` | `--secondary/100` |
| `--border/strong` | `--secondary/500` |

### Interactive

| Token | Resolves to | When to use |
|---|---|---|
| `--interactive/default` | `--accent/500` | Link / icon-button default |
| `--interactive/hover` | `--accent/700` | Link / icon-button hover |
| `--interactive/primary` | `--primary/500` | Primary CTA default |
| `--interactive/primary-hover` | `--primary/700` | Primary CTA hover |

### Status (semantic)

| Token | Resolves to |
|---|---|
| `--status/error` | `--danger/500` |
| `--status/error-subtle` | `--danger/100` |
| `--status/success` | `--success/500` |
| `--status/success-subtle` | `--success/100` |
| `--status/warning` | `--warning/500` |
| `--status/warning-subtle` | `--warning/100` |

---

## Typography

### Fonts

| Role | Family | Weights |
|---|---|---|
| Headings | **Signika** | 400, 600 (SemiBold), 700 (Bold) |
| Body / UI text | **Arimo** | 400 (Regular), 700 (Bold) |

Never use `font-sans`, `font-serif`, or generic system fonts. Always apply one of the classes below.

### Typography classes

Apply these CSS classes to the element — do not replicate their values with inline styles or Tailwind utilities.

#### Headings (Signika)

| Class | Size / Line-height / Letter-spacing | Weight |
|---|---|---|
| `.heading-display` | 72px / 80px / -1.5px | Bold 700 |
| `.heading-h1` | 56px / 64px / -1px | Bold 700 |
| `.heading-h2` | 40px / 48px / -0.5px | Bold 700 |
| `.heading-h3` | 32px / 40px / 0px | SemiBold 600 |
| `.heading-h4` | 24px / 32px / 0px | SemiBold 600 |
| `.heading-h5` | 20px / 28px / +0.15px | SemiBold 600 |
| `.heading-h6` | 16px / 24px / +0.15px | SemiBold 600 |

#### Body (Arimo)

| Class | Size / Line-height / Letter-spacing | Weight |
|---|---|---|
| `.body-body-lg` | 18px / 28px / +0.15px | Regular 400 |
| `.body-body` | 16px / 26px / +0.25px | Regular 400 |
| `.body-body-bold` | 16px / 26px / +0.25px | Bold 700 |
| `.body-body-sm` | 14px / 22px / +0.25px | Regular 400 |
| `.body-caption` | 12px / 18px / +0.4px | Regular 400 |
| `.body-overline` | 11px / 16px / +1.5px | Bold 700 |
| `.body-event-time` | 15px / 22px / 0px | Bold 700 |
| `.body-event-description` | 15px / 22px / 0px | Regular 400 |

**Usage example:**
```tsx
<h2 className="heading-h2" style={{ color: 'var(--text/primary)' }}>
  City Services
</h2>
<p className="body-body" style={{ color: 'var(--text/secondary)' }}>
  Find the service you need below.
</p>
```

> Note: the theme.css base layer sets generic `h1`–`h4` sizes. Explicitly applying a `.heading-*`
> class overrides those defaults, which is always required.

---

## Spacing

Spacing tokens are unitless integers in CSS (representing px). Apply them as `calc(var(--space/N) * 1px)`
or via inline style / Tailwind arbitrary value `[gap:calc(var(--space/6)*1px)]`.

### Raw scale

| Token | px |
|---|---|
| `--space/0` | 0 |
| `--space/1` | 2 |
| `--space/2` | 4 |
| `--space/3` | 6 |
| `--space/4` | 8 |
| `--space/5` | 12 |
| `--space/6` | 16 |
| `--space/7` | 20 |
| `--space/8` | 24 |
| `--space/9` | 32 |
| `--space/10` | 40 |
| `--space/11` | 48 |
| `--space/12` | 64 |
| `--space/13` | 80 |
| `--space/14` | 96 |
| `--space/15` | 128 |

### Semantic aliases (preferred)

| Token | Raw value | Use for |
|---|---|---|
| `--gap/none` | 0 | No gap |
| `--gap/tight` | 4px | Icon + label, inline chips |
| `--gap/default` | 8px | Form field rows, list items |
| `--gap/relaxed` | 16px | Card internals |
| `--gap/loose` | 24px | Section content blocks |
| `--gap/section` | 40px | Between distinct sections |
| `--gap/between-sections` | 48px | Page-level section separators |
| `--padding/none` | 0 | — |
| `--padding/tight` | 4px | Badge, tag, chip |
| `--padding/default` | 8px | Button, input |
| `--padding/comfortable` | 16px | Card |
| `--padding/spacious` | 24px | Panel, modal |
| `--padding/page` | 96px | Page horizontal margin |
| `--margin/none` | 0 | — |
| `--margin/tight` | 8px | Tight stacked elements |
| `--margin/default` | 16px | Standard paragraph margin |
| `--margin/relaxed` | 24px | Between form sections |
| `--margin/spacious` | 48px | Large content block separation |

---

## Border radius

| Token | Value | Use for |
|---|---|---|
| `--radius/none` | 0 | Hard-edged UI (tables, image crops) |
| `--radius/sm` | 4px | Badges, tags, small chips |
| `--radius/md` | 8px | Buttons, inputs, cards |
| `--radius/lg` | 16px | Modal, panel, hero card |
| `--radius/xl` | 24px | Feature card, large callout |
| `--radius/full` | 9999px | Pills, avatar circles |

---

## Visual identity notes

- **Page background** is always `--surface/background` (`#F6E8CF`) — a warm parchment, not white.
- **Primary brand color** is navy (`--primary/500`). Use it for headers, footers, primary CTAs.
- **Accent** is ocean blue (`--accent/500`). Use it for links, interactive icons, highlights.
- **Secondary** is warm stone/tan. Use it for card surfaces, dividers, muted text.
- The palette evokes a coastal California municipality: navy, warm sand, ocean blue. Avoid adding
  colors outside this set.

---

## Rules for agents

1. **No raw hex values.** Every color must come from a `var(--token)` listed above.
2. **No raw px/rem for spacing.** Use the spacing tokens or their semantic aliases.
3. **No `font-size`, `font-weight`, or `font-family` inline values.** Apply a `.heading-*` or
   `.body-*` class instead.
4. **No Tailwind color utilities** like `text-blue-600` or `bg-gray-100`. The kit's color space
   is separate from Tailwind's default palette.
5. **Override `theme.css` base typography defaults** by explicitly applying the kit's typography
   classes — the `h1`–`h4` base layer styles do not match the kit.
6. Since the kit ships no React components, every element is a raw HTML primitive — that is
   expected and correct for this kit. There is no component recovery cascade needed.
