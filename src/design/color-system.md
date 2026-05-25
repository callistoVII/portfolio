# Portfolio Design System

This document defines the current design tokens, typography, glyphs, textures, and accessibility rules used across the portfolio. It reflects the actual implemented system in the codebase as of 2026.

---

# 1. Color System

## Core Palette

### **Primary**

- **Primary 900**: `#070301` — “Pitch Black”  
  Body text, headings, high‑contrast elements.

- **Primary 600**: `#25150F` — “Rich Mahogany”  
  Section headers, accent‑adjacent roles.

- **Primary 300**: `#294246` — “Freinacht Black”  
  Subtle dividers, muted text.

---

### **Accent**

- **Accent 700**: `#F78358` — “Caffeinated Cinnamon”  
  Borders, hover states, decorative warmth.

- **Accent 500**: `#00FF88` — “Signal Green (Light Mode)”  
  Buttons, links, highlights, glyph accents.

- **Accent 100**: `#FFE3D3` — “Cotton & Flax”  
  Light backgrounds, cards.

---

### **Surface**

- **Surface 100**: `#F8F6F2` — “Woven Cashmere”  
  Main content background.

- **Surface 200**: `#A18375` — “Brownish”  
  Panels, section backgrounds.

- **Surface 300**: `#452F29` — “English Walnut”  
  Deep UI layers, cards.

---

## Dark Mode Tokens

Dark mode uses a warm ember‑lit palette inspired by ink vellum and ember‑gold.

### **Surfaces**

- `#130D0D` — Deep vellum
- `#0A0502` — Inkstone
- `#2A1E18` — Burnt umber

### **Text**

- `#F2E7DF` — Primary
- `#E4D4C9` — Secondary
- `#BBA79D` — Muted

### **Accents**

- `#FFB286` — Warm ember gold
- `#DD7057` — Ember rose
- `#00FF88` — Signal Green (same as light mode)

---

# 2. Typography System

## Font Families

- **Display**: _IM Fell DW Pica_ — Headings, editorial text
- **Accent**: _Amarante_ — Subheadings, labels, nav
- **Body**: _Cutive Mono_ — Body text, UI text
- **Hero**: _Staatliches_ — Hero titles, large display text

---

## Type Scale

- `--font-size-xs`: 0.75rem
- `--font-size-sm`: 0.875rem
- `--font-size-base`: 1.25rem
- `--font-size-md`: 1.35rem
- `--font-size-lg`: 1.563rem
- `--font-size-xl`: 1.953rem
- `--font-size-2xl`: 2.441rem
- `--font-size-3xl`: 3.052rem

---

## Line Heights

- Tight: 1.1
- Normal: 1.4
- Relaxed: 1.6

---

## Letter Spacing

- Tight: -0.01em
- Normal: 0
- Wide: 0.03em

---

# 3. Glyph System

These symbols are part of the portfolio’s visual language.
🜁 — Dark Mode Toggle + Landing page top accent
✶ — Heading Accent (About + Resume)
✧ — Heading Accent (alternate)
✦ — Divider accent + Carousel inactive indicator
🜃 — Carousel active indicator + Landing page bottom accent

---

# 4. Texture & Asset Usage

Textures reinforce the parchment/ink vellum aesthetic.

## Light Mode

- `parchment-texture.png` — global background
- `pale-stone-texture.png` — About card backgrounds
- `logo-submark-light.svg` — watermarks & submarks

## Dark Mode

- `stone-texture.png` — dark card backgrounds
- `logo-submark-dark.svg` — watermarks & submarks

### Important Path Rule

GitHub Pages requires **relative** asset paths:
url("assets/...") ← correct
url("/assets/...") ← incorrect

---

# 5. Usage Rules

## Text

- Use **Primary 900** for body text
- Use **Primary 600** for headings
- Avoid accent colors for long‑form text

---

## Buttons & Links

- Default: **Accent 500**
- Hover: **Accent 700**
- Active/Focus: underline + 2px focus ring

---

## Backgrounds

- Main background: **Surface 100**
- Section backgrounds: **Surface 200**
- Cards/panels: **Surface 300**

---

# 6. Accessibility

## Contrast Requirements

- Body text must meet **WCAG AA (4.5:1)**
- Large text must meet **3:1**
- Interactive elements must have a visible focus state

---

## Focus Styles

- Use a **2px solid outline** in Accent 700 or Signal Green
- Never remove `outline`

---

## Motion

- Avoid animations faster than 100ms
- Avoid flashing or strobing effects

---

# 7. Theming Architecture

The site supports two themes:

### **Light Mode**

- Parchment aesthetic
- Warm accents
- High‑contrast ink

### **Dark Mode**

- Ink vellum aesthetic
- Ember‑gold accents
- Softened text tones

Theme switching is handled via:
body.dark { ... }

---

# 8. File Structure Notes

- Global tokens live in `styles.css`
- Component styles live in their respective `.component.css` files
- Textures and submarks live in `assets/`
- GitHub Pages deployment uses `docs/browser/`
