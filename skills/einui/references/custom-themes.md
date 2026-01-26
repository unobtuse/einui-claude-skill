# Ein UI Custom Themes from OKLCH Palettes

Create custom Ein UI color themes using palettes from the OKLCH Color Palette Generator.

## Quick Start

### 1. Generate a Palette

Visit [OKLCH Color Palette Generator](https://gloss-modern-smile.figma.site/) and:

1. Set your **anchor color** (the primary brand color)
2. Adjust **lightness range** (0.05-1.00 recommended)
3. Set **number of colors** (12 recommended)
4. Click **Export Palette** → **Download JSON**

### 2. Convert to Ein UI Theme

Run the converter script:

```bash
npx ts-node scripts/palette-to-einui.ts my-palette.json > my-theme.css
```

### 3. Add to Your Project

Import the generated CSS in your `globals.css`:

```css
@import './my-theme.css';
```

---

## Palette JSON Formats

### Full Format (from OKLCH Generator)

```json
{
  "name": "ocean",
  "anchor": {
    "hex": "#0f74c5",
    "oklch": { "l": 0.55, "c": 0.15, "h": 250 }
  },
  "colors": [
    { "index": 0, "hex": "#000008", "oklch": { "l": 0.05, "c": 0.05, "h": 250 } },
    { "index": 1, "hex": "#000017", "oklch": { "l": 0.08, "c": 0.08, "h": 250 } },
    { "index": 2, "hex": "#000035", "oklch": { "l": 0.14, "c": 0.12, "h": 250 } },
    { "index": 3, "hex": "#001354", "oklch": { "l": 0.22, "c": 0.13, "h": 250 } },
    { "index": 4, "hex": "#00337b", "oklch": { "l": 0.33, "c": 0.14, "h": 250 } },
    { "index": 5, "hex": "#005caa", "oklch": { "l": 0.47, "c": 0.15, "h": 250 } },
    { "index": 6, "hex": "#2f8add", "oklch": { "l": 0.62, "c": 0.15, "h": 250 } },
    { "index": 7, "hex": "#56b2ff", "oklch": { "l": 0.75, "c": 0.16, "h": 250 } },
    { "index": 8, "hex": "#6fd3ff", "oklch": { "l": 0.85, "c": 0.17, "h": 250 } },
    { "index": 9, "hex": "#98ecff", "oklch": { "l": 0.92, "c": 0.14, "h": 250 } },
    { "index": 10, "hex": "#d9faff", "oklch": { "l": 0.97, "c": 0.06, "h": 250 } },
    { "index": 11, "hex": "#e5ffff", "oklch": { "l": 1.00, "c": 0.05, "h": 250 } }
  ],
  "settings": {
    "colorCount": 12,
    "lightnessRange": { "min": 0.05, "max": 1.00 },
    "curveType": "quadratic",
    "direction": "ease-out"
  }
}
```

### Simple Format (Auto-generates palette)

For quick theming, just provide a primary color:

```json
{
  "name": "brand",
  "primary": "#6366f1"
}
```

The converter will auto-generate a full palette from this single color.

---

## Output: Generated CSS Variables

The converter generates CSS variables that map to Ein UI's theming system:

```css
/* Ein UI Theme: ocean */
/* Generated from OKLCH palette */

:root {
  /* Default to dark theme */
  --glass-bg: rgba(0, 0, 8, 0.3);
  --glass-bg-light: rgba(0, 0, 8, 0.15);
  --glass-bg-solid: rgba(0, 0, 8, 0.5);
  --glass-border: rgba(229, 255, 255, 0.1);
  --glass-border-hover: rgba(229, 255, 255, 0.2);
  --glass-blur: 16px;
  --glass-blur-light: 12px;
  --glass-blur-heavy: 20px;
  --glow-primary: rgba(47, 138, 221, 0.3);
  --glow-secondary: rgba(86, 178, 255, 0.3);
  --glow-accent: rgba(15, 116, 197, 0.3);
  --text-primary: rgba(229, 255, 255, 0.95);
  --text-secondary: rgba(229, 255, 255, 0.7);
  --text-muted: rgba(229, 255, 255, 0.5);
  --text-disabled: rgba(229, 255, 255, 0.3);
  --accent: #0f74c5;
  --accent-foreground: #e5ffff;
}

.dark {
  /* Same as :root */
}

.light {
  --glass-bg: rgba(0, 0, 8, 0.03);
  --glass-bg-light: rgba(0, 0, 8, 0.02);
  --glass-bg-solid: rgba(0, 0, 8, 0.08);
  --glass-border: rgba(0, 0, 8, 0.08);
  --glass-border-hover: rgba(0, 0, 8, 0.15);
  --glow-primary: rgba(47, 138, 221, 0.15);
  --glow-secondary: rgba(86, 178, 255, 0.15);
  --glow-accent: rgba(15, 116, 197, 0.15);
  --text-primary: rgba(0, 0, 8, 0.9);
  --text-secondary: rgba(0, 0, 8, 0.6);
  --text-muted: rgba(0, 0, 8, 0.4);
  --text-disabled: rgba(0, 0, 8, 0.25);
  --accent: #0f74c5;
  --accent-foreground: #e5ffff;
}
```

---

## Variable Mapping

| Palette Color | Ein UI Variable | Usage |
|---------------|-----------------|-------|
| Darkest (L ~0.05) | `--glass-bg` | Background for glass cards |
| Lightest (L ~1.0) | `--text-primary` | Primary text color |
| Most saturated (L 0.4-0.7) | `--glow-primary` | Primary glow effect |
| Mid-light (L ~0.65) | `--glow-secondary` | Secondary glow |
| Anchor color | `--accent` | Buttons, links, accents |

---

## OKLCH Color Space

OKLCH is a perceptually uniform color space:

- **L (Lightness)**: 0 = black, 1 = white
- **C (Chroma)**: 0 = gray, higher = more saturated
- **H (Hue)**: 0-360 degrees (red=0, yellow=60, green=120, cyan=180, blue=240, magenta=300)

Benefits:
- Colors with same L value appear equally bright
- Smooth gradients without muddy middle colors
- Better for accessibility (predictable contrast ratios)

---

## Example Themes

### Sunset (Warm)

```json
{
  "name": "sunset",
  "anchor": { "hex": "#f97316", "oklch": { "l": 0.65, "c": 0.2, "h": 45 } },
  "colors": [
    { "index": 0, "hex": "#1a0500", "oklch": { "l": 0.05, "c": 0.03, "h": 45 } },
    { "index": 5, "hex": "#f97316", "oklch": { "l": 0.65, "c": 0.2, "h": 45 } },
    { "index": 11, "hex": "#fff7ed", "oklch": { "l": 0.98, "c": 0.02, "h": 45 } }
  ]
}
```

### Forest (Cool Green)

```json
{
  "name": "forest",
  "anchor": { "hex": "#10b981", "oklch": { "l": 0.65, "c": 0.17, "h": 165 } },
  "colors": [
    { "index": 0, "hex": "#001a0d", "oklch": { "l": 0.05, "c": 0.04, "h": 165 } },
    { "index": 5, "hex": "#10b981", "oklch": { "l": 0.65, "c": 0.17, "h": 165 } },
    { "index": 11, "hex": "#ecfdf5", "oklch": { "l": 0.98, "c": 0.02, "h": 165 } }
  ]
}
```

### Violet (Purple)

```json
{
  "name": "violet",
  "anchor": { "hex": "#8b5cf6", "oklch": { "l": 0.55, "c": 0.2, "h": 280 } },
  "colors": [
    { "index": 0, "hex": "#0d001a", "oklch": { "l": 0.05, "c": 0.05, "h": 280 } },
    { "index": 5, "hex": "#8b5cf6", "oklch": { "l": 0.55, "c": 0.2, "h": 280 } },
    { "index": 11, "hex": "#f5f3ff", "oklch": { "l": 0.98, "c": 0.02, "h": 280 } }
  ]
}
```

---

## Programmatic Usage

```typescript
import { 
  convertPaletteToEinUI, 
  generateCSS,
  createPaletteFromSimple 
} from './scripts/palette-to-einui'

// From full palette
const palette = JSON.parse(fs.readFileSync('palette.json', 'utf8'))
const theme = convertPaletteToEinUI(palette)
const css = generateCSS(theme)

// From simple input
const simplePalette = createPaletteFromSimple({
  name: 'brand',
  primary: '#6366f1'
})
const brandTheme = convertPaletteToEinUI(simplePalette)
```

---

## Integrating with Next.js

### 1. Create theme file

```bash
npx ts-node scripts/palette-to-einui.ts brand-palette.json > app/themes/brand.css
```

### 2. Import in layout

```tsx
// app/layout.tsx
import './themes/brand.css'
import './globals.css'
```

### 3. Theme switching

```tsx
// components/theme-switcher.tsx
'use client'
import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}
```

---

## Tips

1. **Use 12 colors** - Provides enough range for all UI needs
2. **Keep anchor at L=0.5-0.6** - Best for primary buttons/accents
3. **Test both themes** - Light mode needs different saturation
4. **Check contrast** - Ensure text is readable (4.5:1 minimum)
5. **Consider colorblind users** - Don't rely on hue alone for meaning
