# Rocket Engine Startup - Design System & Style Rules

This document defines the design language for a cutting-edge rocket engine startup.
The aesthetic should be **Industrial, Future-Tech, and High-Performance**.
Think SpaceX, Relativity Space, or futuristic aerospace interfaces (HUDs).

## 1. Core Design Philosophy
- **Aerospace Industrialality**: Clean, precise, and engineered. Form follows function.
- **High Contrast & Tech-Focused**: Dark themes predominate (Space), with bright energetic accents (Propulsion).
- **Precision**: Use thin lines, technical markers, and data-visualization-inspired elements.
- **Motion**: Interactions should feel like actuating a switch or igniting a thruster—instant and powerful.

## 2. Color Palette
The palette mimics the environment of space and the energy of combustion.

- **Primary Brand Color**: `hsl(210, 100%, 50%)` (Electric Blue) - Represents ionization, electricity, clear skies.
- **Secondary Brand Color**: `hsl(25, 100%, 50%)` (Ignition Orange) - Represents propulsion, heat, warning.
- **Backgrounds**:
  - **Dark Mode (Default)**: `hsl(220, 20%, 8%)` (Deep Void) - Not pure black, but deep charcoal blue.
  - **Surface**: `hsl(220, 15%, 14%)` (Engine Metal)
- **Text**:
  - **Primary**: `hsl(0, 0%, 96%)` (Titanium White)
  - **Secondary**: `hsl(210, 10%, 60%)` (Oxidized Metal)
- **Status Indigo**:
  - **Success/Nominal**: `hsl(140, 80%, 45%)` (Green Light)
  - **Critical/Abort**: `hsl(0, 80%, 55%)` (Red Alert)

## 3. Typography
A mix of technical display fonts and readable functional sans-serifs.

- **Display Font (Headers)**: "Rajdhani", "Orbitron", or "Barlow Condensed".
  - Uppercase often used for subheaders to mimic technical labels.
- **Body Font**: "Inter", "Roboto Mono" (for data), or "Share Tech Mono".
- **Scale**:
  - H1: 4rem (64px) / Bold / Uppercase / Tech-spacing (2px).
  - H2: 2.5rem (40px) / SemiBold / Uppercase.
  - Mono Label: 0.75rem (12px) / Uppercase / Tracking 1px (Use for button labels, captions).

## 4. Components & UI Elements

### Buttons (The "Ignition" Switch)
- **Primary**:
  - Bg: `linear-gradient(135deg, hsl(210, 100%, 50%), hsl(230, 80%, 45%))` or Solid Electric Blue.
  - Border: None.
  - Shape: Sharp corners or slightly angled (chamfered) edges.
  - Hover: Glow effect (`box-shadow: 0 0 15px hsl(210, 100%, 50%)`).
- **Secondary (Technical)**:
  - Transparent bg, 1px solid `hsla(0, 0%, 100%, 0.3)`.
  - Text: White.
  - Hover: Border becomes Electric Blue.

### Cards & HUD Elements
- **Glass/Metal Look**: Semi-transparent dark backgrounds with background-blur.
  - `background: rgba(30, 35, 45, 0.7); backdrop-filter: blur(10px);`
- **Borders**: Thin, precise borders. `1px solid hsla(0, 0%, 100%, 0.1)`.
- **Decorators**: Corner brackets, technical crosshairs, or "screws" in corners to simulate a mounted panel.

### Forms & Inputs
- **Style**: Dark backgrounds, bottom border only or full thin border.
- **Active State**: Neon glow focus ring.
- **Font**: Monospace input text looks very "terminal/console".

## 5. Layout & Imagery
- **Hero Sections**: Large, cinematic imagery of engines, exhaust plumes, or space.
- **Grid lines**: Subtle grid lines overlaying the background (opacity 5%) to give a blueprint feel.
- **Parallax**: Subtle movement of starry backgrounds or floating engine components.

## 6. CSS Tech Stack (Recommendations)
- **Framework**: TailwindCSS (recommended for rapid utility usage) or Vanilla CSS Variables.
- **Effects**:
  - `backdrop-filter` for glassmorphism.
  - `mix-blend-mode` for overlaying text on fire/engine images.
  - CSS `clip-path` for chamfered (angled) corners.

---
*Use these rules to build a UI that feels like the control panel of a next-gen launch vehicle.*
