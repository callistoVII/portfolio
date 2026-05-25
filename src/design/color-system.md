# Portfolio Color System

This document defines the official color palette for my portfolio, including usage rules and accessibility notes.

---

## Core Palette

### **Primary**

- **Primary 900**: #070301 — "Pitch Black" Body text, headings, high-contrast elements.
- **Primary 600**: #25150F — "Rich Mahogany" Section headers, accent-adjacent roles.
- **Primary 300**: rgb(41, 66, 70) — "Freinacht Black" Subtle dividers, muted text

### **Accent**

- **Accent 700**: #E48D49 — "Caffeinated Cinnamon" Borders, decorative elements.
- **Accent 500**: #4A261A — "Mule Fawn" Buttons, links, highlights
- **Accent 300**: #4E544F — "Irish Fog" Hover states
- **Accent 100**: #DEC6BA — "Cotton & Flax" Light backgrounds, cards

### **Surface**

- **Surface 100**: #f8f6f2 — "Woven Cashmere" Main content background
- **Surface 200**: #A18375 — "Brownish" Panels, cards
- **Surface 300**: #452F29 - "English Walnut"

---

## Usage Rules

### **Text**

- Use **Primary 900** for body text
- Use **Primary 600** for headings
- Never use accent colors for long paragraphs

### **Buttons & Links**

- Default: **Accent 500**
- Hover: **Accent 700**
- Active/Focus: underline + 2px focus ring

### **Backgrounds**

- Main background: **Surface 100**
- Section backgrounds: **Surface 200**
- Cards/panels: **Surface 300**

---

## Accessibility Notes

### Contrast Requirements

- Body text must meet **WCAG AA (4.5:1)**
- Large text (18px+ or bold 14px+) must meet **3:1**
- Interactive elements must have a **visible focus state**

### Focus Styles

- Use a **2px solid outline** in Accent 300 or a high‑contrast color
- Never remove `outline` in CSS

### Motion

- Avoid animations faster than 100ms
- Avoid flashing or strobing effects

---

## Optional: Dark Mode Tokens (future)

- Background: #0F0C0B
- Surface: #714C45, #E48D49
- Text: #E3D9D5, #CAB9B4
- Accent: same vibes as light mode
 