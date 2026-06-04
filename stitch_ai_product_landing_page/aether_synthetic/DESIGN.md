---
name: Aether Synthetic
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#dcbed4'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a4899d'
  outline-variant: '#564052'
  surface-tint: '#ffabf3'
  primary: '#ffabf3'
  on-primary: '#5b005b'
  primary-container: '#ff00ff'
  on-primary-container: '#510051'
  inverse-primary: '#a900a9'
  secondary: '#d3fbff'
  on-secondary: '#00363a'
  secondary-container: '#00eefc'
  on-secondary-container: '#00686f'
  tertiary: '#bfd043'
  on-tertiary: '#2d3400'
  tertiary-container: '#8a9a00'
  on-tertiary-container: '#282d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd7f5'
  primary-fixed-dim: '#ffabf3'
  on-primary-fixed: '#380038'
  on-primary-fixed-variant: '#810081'
  secondary-fixed: '#7df4ff'
  secondary-fixed-dim: '#00dbe9'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f54'
  tertiary-fixed: '#daed5c'
  tertiary-fixed-dim: '#bfd043'
  on-tertiary-fixed: '#1a1e00'
  on-tertiary-fixed-variant: '#434b00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  terminal-black: '#0A0A0B'
  surface-raised: '#161618'
  magenta-glow: rgba(255, 0, 255, 0.15)
  border-muted: '#2D2D30'
  text-dim: '#8E8E93'
typography:
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for the high-performance developer, prioritizing speed, precision, and technical sophistication. It evokes the feeling of a next-generation terminal interface—where logic meets elegance.

The aesthetic follows a **"Hyper-Modern Developer"** style, blending **Minimalism** with subtle **Vaporwave** influences. It utilizes deep, "terminal-black" surfaces contrasted with high-energy neon accents. The interface should feel like a specialized tool: lean, efficient, and technologically superior. Visual interest is generated through precise geometry, intentional use of "code-as-art," and high-contrast typography rather than decorative imagery.

## Colors

The palette is rooted in the "Absolute Dark" ethos of modern IDEs. 

- **Primary (Magenta):** A vibrant, high-saturation magenta used for primary actions, focus states, and key brand moments. It represents the "AI pulse" within the system.
- **Secondary (Cyan):** A sharp cyan used sparingly for success states, code syntax highlighting, and secondary technical data.
- **Neutral (Terminal-Black):** The foundation of the UI. Backgrounds use a pure, deep charcoal that minimizes eye strain and provides a canvas for neon accents.
- **Typography:** Use pure white (#FFFFFF) for primary headings and "Off-White" (#E4E4E5) for body text to ensure maximum legibility against the dark background.

## Typography

This design system utilizes a dual-font strategy to balance corporate professionalism with technical utility.

- **Geist Sans:** Used for all high-level UI elements, headings, and descriptive text. Its geometric precision fits the "Developer-first" aesthetic while remaining highly readable.
- **JetBrains Mono:** The workhorse for all code-related content, input fields, labels, and metadata. It signals to the user that they are in a coding environment.

**Key Rule:** Labels and small metadata should often be set in All-Caps using JetBrains Mono to mimic terminal header styles.

## Layout & Spacing

The layout follows a **Rigid Grid** philosophy based on 4px increments. The interface should feel "docked" and modular.

- **Grid:** Use a 12-column system for desktop and a 4-column system for mobile. 
- **Density:** High density is preferred. Information should be packed efficiently, using clear borders rather than large gaps of whitespace to define sections.
- **Structure:** Content is housed in modular containers. Sidebars should be collapsible to maximize the "Code Canvas" area.
- **Breakpoints:**
  - Mobile: < 768px (single column vertical stack)
  - Desktop: 768px+ (multi-pane dashboard style)

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Accents** rather than traditional drop shadows.

- **Surface Levels:** The base background is `terminal-black`. Elevated elements (cards, menus) use `surface-raised` with a 1px solid border in `border-muted`.
- **Glow Effects:** Use "Synthetic Glows" for active states. This involves a primary magenta outer glow with a very low spread and high blur (e.g., `0 0 15px rgba(255, 0, 255, 0.3)`).
- **Glassmorphism:** Contextual menus and overlays should use a background blur (12px) with a semi-transparent `terminal-black` fill to maintain context of the code beneath.

## Shapes

The shape language is **Precise and Technical**. 

- **Corners:** Use a consistent `0.25rem` (4px) radius for most UI components (buttons, input fields, cards). This provides a slight "software" feel while maintaining the sharpness of a CLI.
- **Interactive Elements:** Buttons and tags should be rectangular with minimal rounding. Circular shapes should only be used for status indicators or user avatars.
- **Borders:** All containers must feature a 1px solid border. Inactive borders are subtle; active borders are "lit" with the primary magenta.

## Components

### Buttons
- **Primary:** Magenta background, white text (JetBrains Mono), 1px border. On hover, apply a soft magenta glow.
- **Ghost:** No background, 1px `border-muted`, cyan or white text. On hover, the border turns cyan.

### Input Fields (Terminal Style)
- Inputs should resemble a CLI prompt. Use a ">" prefix (magenta) and a blinking block cursor. 
- Background is a slightly darker shade than the surface, with a 1px bottom-border only.

### Cards & Modules
- Use `surface-raised` for the background.
- Include a "Header" section with a 1px bottom border and a label in `label-caps`.
- Code snippets inside cards should use a background of `#000000` to distinguish them from the UI.

### Chips & Tags
- Small, rectangular blocks with `code-sm` typography.
- Use primary magenta for active filters and secondary cyan for status tags (e.g., "Ready", "Running").

### Code Blocks
- Full syntax highlighting using the neon palette. 
- Include a "Copy" button in the top-right corner that only appears on hover.
- Use JetBrains Mono exclusively.