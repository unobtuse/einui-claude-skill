/**
 * OKLCH Palette to Ein UI Theme Converter
 * 
 * Converts color palettes from the OKLCH Color Palette Generator
 * (https://gloss-modern-smile.figma.site/) to Ein UI CSS variables.
 * 
 * Usage:
 *   npx ts-node palette-to-einui.ts palette.json > theme.css
 *   
 * Or import and use programmatically:
 *   import { convertPaletteToEinUI } from './palette-to-einui'
 */

// =============================================================================
// Types
// =============================================================================

export interface OKLCHColor {
  index: number
  hex: string
  oklch: {
    l: number  // Lightness: 0-1
    c: number  // Chroma: 0-0.4 (saturation)
    h: number  // Hue: 0-360 degrees
  }
  rgba?: {
    r: number
    g: number
    b: number
    a: number
  }
}

export interface OKLCHPalette {
  name?: string
  anchor: {
    hex: string
    oklch: {
      l: number
      c: number
      h: number
    }
  }
  colors: OKLCHColor[]
  settings?: {
    colorCount: number
    lightnessRange: { min: number; max: number }
    chromaRange?: { min: number; max: number }
    curveType?: 'linear' | 'quadratic' | 'cubic'
    direction?: 'ease-in' | 'ease-out' | 'ease-in-out'
  }
}

export interface EinUITheme {
  name: string
  dark: Record<string, string>
  light: Record<string, string>
}

// =============================================================================
// Utility Functions
// =============================================================================

function hexToRgba(hex: string): { r: number; g: number; b: number; a: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) {
    return { r: 0, g: 0, b: 0, a: 1 }
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 1
  }
}

function rgbaString(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgba(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function findColorByLightness(colors: OKLCHColor[], targetL: number): OKLCHColor {
  return colors.reduce((closest, color) => {
    const closestDiff = Math.abs(closest.oklch.l - targetL)
    const currentDiff = Math.abs(color.oklch.l - targetL)
    return currentDiff < closestDiff ? color : closest
  })
}

function findMostSaturated(colors: OKLCHColor[]): OKLCHColor {
  return colors.reduce((most, color) => {
    return color.oklch.c > most.oklch.c ? color : most
  })
}

// =============================================================================
// Main Converter
// =============================================================================

export function convertPaletteToEinUI(palette: OKLCHPalette): EinUITheme {
  const { colors, anchor, name = 'custom' } = palette
  
  // Sort colors by lightness
  const sortedByLight = [...colors].sort((a, b) => a.oklch.l - b.oklch.l)
  
  // Find key colors
  const darkest = sortedByLight[0]
  const lightest = sortedByLight[sortedByLight.length - 1]
  const midColor = findColorByLightness(colors, 0.5)
  const primaryColor = findMostSaturated(colors.filter(c => c.oklch.l > 0.4 && c.oklch.l < 0.7))
  const secondaryColor = findColorByLightness(colors, 0.65)
  
  // Dark theme: use dark backgrounds, light text, vibrant glows
  const dark: Record<string, string> = {
    // Glass effect backgrounds
    '--glass-bg': rgbaString(darkest.hex, 0.3),
    '--glass-bg-light': rgbaString(darkest.hex, 0.15),
    '--glass-bg-solid': rgbaString(darkest.hex, 0.5),
    
    // Borders
    '--glass-border': rgbaString(lightest.hex, 0.1),
    '--glass-border-hover': rgbaString(lightest.hex, 0.2),
    
    // Blur (unchanged, not color-dependent)
    '--glass-blur': '16px',
    '--glass-blur-light': '12px',
    '--glass-blur-heavy': '20px',
    
    // Glow colors (use the most vibrant colors)
    '--glow-primary': rgbaString(primaryColor.hex, 0.3),
    '--glow-secondary': rgbaString(secondaryColor.hex, 0.3),
    '--glow-accent': rgbaString(anchor.hex, 0.3),
    
    // Text colors
    '--text-primary': rgbaString(lightest.hex, 0.95),
    '--text-secondary': rgbaString(lightest.hex, 0.7),
    '--text-muted': rgbaString(lightest.hex, 0.5),
    '--text-disabled': rgbaString(lightest.hex, 0.3),
    
    // Accent color (for buttons, links, etc.)
    '--accent': anchor.hex,
    '--accent-foreground': lightest.hex,
  }
  
  // Light theme: lighter backgrounds, dark text, softer glows
  const light: Record<string, string> = {
    // Glass effect backgrounds (inverted for light mode)
    '--glass-bg': rgbaString(darkest.hex, 0.03),
    '--glass-bg-light': rgbaString(darkest.hex, 0.02),
    '--glass-bg-solid': rgbaString(darkest.hex, 0.08),
    
    // Borders
    '--glass-border': rgbaString(darkest.hex, 0.08),
    '--glass-border-hover': rgbaString(darkest.hex, 0.15),
    
    // Blur
    '--glass-blur': '16px',
    '--glass-blur-light': '12px',
    '--glass-blur-heavy': '20px',
    
    // Glow colors (softer for light mode)
    '--glow-primary': rgbaString(primaryColor.hex, 0.15),
    '--glow-secondary': rgbaString(secondaryColor.hex, 0.15),
    '--glow-accent': rgbaString(anchor.hex, 0.15),
    
    // Text colors
    '--text-primary': rgbaString(darkest.hex, 0.9),
    '--text-secondary': rgbaString(darkest.hex, 0.6),
    '--text-muted': rgbaString(darkest.hex, 0.4),
    '--text-disabled': rgbaString(darkest.hex, 0.25),
    
    // Accent color
    '--accent': anchor.hex,
    '--accent-foreground': lightest.hex,
  }
  
  return { name, dark, light }
}

// =============================================================================
// CSS Output Generator
// =============================================================================

export function generateCSS(theme: EinUITheme): string {
  const lines: string[] = [
    `/* Ein UI Theme: ${theme.name} */`,
    `/* Generated from OKLCH palette */`,
    '',
    ':root {',
    '  /* Default to dark theme */',
  ]
  
  for (const [key, value] of Object.entries(theme.dark)) {
    lines.push(`  ${key}: ${value};`)
  }
  
  lines.push('}')
  lines.push('')
  lines.push('.dark {')
  
  for (const [key, value] of Object.entries(theme.dark)) {
    lines.push(`  ${key}: ${value};`)
  }
  
  lines.push('}')
  lines.push('')
  lines.push('.light {')
  
  for (const [key, value] of Object.entries(theme.light)) {
    lines.push(`  ${key}: ${value};`)
  }
  
  lines.push('}')
  
  return lines.join('\n')
}

// =============================================================================
// Tailwind Config Generator
// =============================================================================

export function generateTailwindConfig(theme: EinUITheme): string {
  return `// Tailwind CSS v4 theme extension for ${theme.name}
// Add to your tailwind.css or globals.css

@theme {
  --color-glass-bg: var(--glass-bg);
  --color-glass-border: var(--glass-border);
  --color-glow-primary: var(--glow-primary);
  --color-glow-secondary: var(--glow-secondary);
  --color-accent: var(--accent);
  --blur-glass: var(--glass-blur);
}
`
}

// =============================================================================
// Simple Palette Format (for easy manual creation)
// =============================================================================

export interface SimplePalette {
  name: string
  primary: string      // Main brand color (hex)
  secondary?: string   // Secondary color (hex), defaults to shifted hue
}

export function createPaletteFromSimple(simple: SimplePalette): OKLCHPalette {
  const { r, g, b } = hexToRgba(simple.primary)
  
  // Approximate OKLCH from RGB (simplified)
  const max = Math.max(r, g, b) / 255
  const min = Math.min(r, g, b) / 255
  const l = (max + min) / 2
  const c = max - min
  
  // Calculate hue
  let h = 0
  if (c !== 0) {
    if (max === r / 255) h = ((g - b) / 255 / c) % 6
    else if (max === g / 255) h = (b - r) / 255 / c + 2
    else h = (r - g) / 255 / c + 4
    h = Math.round(h * 60)
    if (h < 0) h += 360
  }
  
  // Generate 12 colors across lightness range
  const colors: OKLCHColor[] = []
  for (let i = 0; i < 12; i++) {
    const lightness = 0.05 + (0.95 * i / 11)
    const chroma = c * (1 - Math.abs(lightness - 0.5) * 0.5)
    
    // Convert back to hex (simplified)
    const shade = Math.round(lightness * 255)
    const hex = `#${shade.toString(16).padStart(2, '0').repeat(3)}`
    
    colors.push({
      index: i,
      hex: i === 5 ? simple.primary : hex, // Keep primary at middle
      oklch: { l: lightness, c: chroma, h }
    })
  }
  
  return {
    name: simple.name,
    anchor: {
      hex: simple.primary,
      oklch: { l, c, h }
    },
    colors
  }
}

// =============================================================================
// CLI Runner
// =============================================================================

if (require.main === module) {
  const fs = require('fs')
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.log(`
OKLCH Palette to Ein UI Theme Converter

Usage:
  npx ts-node palette-to-einui.ts <palette.json> [--tailwind]

Example palette.json (from OKLCH generator):
{
  "name": "ocean",
  "anchor": { "hex": "#0f74c5", "oklch": { "l": 0.55, "c": 0.15, "h": 250 } },
  "colors": [
    { "index": 0, "hex": "#000008", "oklch": { "l": 0.05, "c": 0.05, "h": 250 } },
    ...
  ]
}

Simple format (auto-generates palette):
{
  "name": "brand",
  "primary": "#0f74c5"
}
`)
    process.exit(0)
  }
  
  const inputFile = args[0]
  const includeTailwind = args.includes('--tailwind')
  
  try {
    const input = JSON.parse(fs.readFileSync(inputFile, 'utf8'))
    
    let palette: OKLCHPalette
    if (input.colors) {
      palette = input as OKLCHPalette
    } else if (input.primary) {
      palette = createPaletteFromSimple(input as SimplePalette)
    } else {
      throw new Error('Invalid palette format')
    }
    
    const theme = convertPaletteToEinUI(palette)
    console.log(generateCSS(theme))
    
    if (includeTailwind) {
      console.log('')
      console.log(generateTailwindConfig(theme))
    }
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}
