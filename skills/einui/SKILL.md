---
name: einui
description: This skill should be used when the user asks to "add Ein UI components", "install glass card", "use liquid glass UI", "add frosted glass components", "set up Ein UI", "configure glass morphism", mentions "einui", "@einui", "glass-card", "glass-button", or discusses React/Next.js frosted glass component styling. Provides guidance for Ein UI library integration.
version: 1.0.0
---

# Ein UI Component Library Integration

Guide for adding liquid glass morphism components to React/Next.js projects using Ein UI, built on Shadcn/Radix UI primitives with Tailwind CSS v4.

## Overview

Ein UI provides frosted glass styled components with:
- Full TypeScript support
- Dark mode with CSS variables
- Accessibility via Radix UI primitives
- Tailwind CSS v4 integration
- Shadcn CLI installation

**Official Site:** https://ui.eindev.ir
**GitHub:** https://github.com/ehsanghaffar/einui

## Prerequisites

Before installing Ein UI components, verify the project has:

1. **Next.js 14+** (App Router recommended)
2. **Tailwind CSS v4** configured
3. **Shadcn UI initialized** (`npx shadcn@latest init` if not present)

Check prerequisites:
```bash
# Verify package.json has required dependencies
cat package.json | grep -E '"next"|"tailwindcss"|"@radix-ui"'

# Check for shadcn configuration
ls components.json 2>/dev/null || echo "Shadcn not initialized"
```

## Installation

### Single Component
```bash
npx shadcn@latest add @einui/glass-card
```

### Multiple Components
```bash
npx shadcn@latest add @einui/glass-button @einui/glass-input @einui/glass-dialog
```

## Component Categories

### Core Components
| Component | Install Command |
|-----------|-----------------|
| Glass Card | `npx shadcn@latest add @einui/glass-card` |
| Glass Button | `npx shadcn@latest add @einui/glass-button` |
| Glass Input | `npx shadcn@latest add @einui/glass-input` |
| Glass Dialog | `npx shadcn@latest add @einui/glass-dialog` |
| Glass Tabs | `npx shadcn@latest add @einui/glass-tabs` |
| Badge | `npx shadcn@latest add @einui/badge` |
| Avatar | `npx shadcn@latest add @einui/avatar` |
| Progress | `npx shadcn@latest add @einui/progress` |
| Switch | `npx shadcn@latest add @einui/switch` |
| Slider | `npx shadcn@latest add @einui/slider` |
| Tooltip | `npx shadcn@latest add @einui/tooltip` |

### Form Components
- Select, Textarea, Checkbox, Radio

### Widgets
- Weather, Calendar, Clock, Stocks, Stats

### Innovative Components
- Command Palette, Morph Card, Dock, Gauge, Notification, Ripple, Timeline

### Pre-built Blocks
- Sign Up, Login, Forgot Password, Pricing, Admin Panel

See `references/components-catalog.md` for the complete component list with descriptions.

## Theming with CSS Variables

Add glass effect variables to `globals.css`:

```css
:root {
  /* Glass Effects */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-blur: 16px;

  /* Glow Colors */
  --glow-cyan: rgba(6, 182, 212, 0.3);
  --glow-purple: rgba(147, 51, 234, 0.3);
  --glow-pink: rgba(236, 72, 153, 0.3);

  /* Text Colors */
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.5);
}
```

### Glow Effect Utility

```css
.glass-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(135deg,
    rgba(6, 182, 212, 0.3),
    rgba(147, 51, 234, 0.3)
  );
  border-radius: inherit;
  opacity: 0.7;
  z-index: -1;
  filter: blur(8px);
}
```

See `references/theming-guide.md` for complete theming documentation.

## Dark Mode

Ein UI components support dark mode through CSS variables. The dark theme activates automatically with the `dark` class on the `<html>` element.

### Next.js App Router Setup

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Install next-themes
```bash
npm install next-themes
```

## Usage Pattern

After installation, import and use components:

```tsx
import { GlassCard } from '@/components/liquid-glass/glass-card'
import { GlassButton } from '@/components/liquid-glass/glass-button'

export default function Page() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-xl font-semibold">Frosted Glass Card</h2>
      <p className="text-muted-foreground">
        Beautiful liquid glass effect
      </p>
      <GlassButton variant="glow">Get Started</GlassButton>
    </GlassCard>
  )
}
```

## Color Schemes

Three built-in palettes:

| Scheme | Colors | Use Case |
|--------|--------|----------|
| Ocean | Cyan, Blue | Tech, SaaS |
| Aurora | Purple, Pink | Creative, Design |
| Forest | Emerald, Teal | Nature, Wellness |

## Implementation Workflow

When adding Ein UI to a project:

1. **Verify prerequisites** - Check Next.js, Tailwind v4, Shadcn
2. **Initialize Shadcn** if needed - `npx shadcn@latest init`
3. **Install components** - Use `npx shadcn@latest add @einui/[component]`
4. **Add CSS variables** - Configure theming in globals.css
5. **Set up dark mode** - Install next-themes, configure ThemeProvider
6. **Import and use** - Components available in `@/components/liquid-glass/`

## Troubleshooting

### Component Not Found
Verify Shadcn is initialized and components.json exists.

### Blur Effect Not Working
Ensure Tailwind CSS v4 is properly configured with backdrop-blur utilities.

### Dark Mode Not Switching
Check ThemeProvider wraps the application and `attribute="class"` is set.

## Additional Resources

### Reference Files
- **`references/components-catalog.md`** - Complete component documentation
- **`references/theming-guide.md`** - CSS variables and customization
- **`references/installation-patterns.md`** - Project setup patterns

### Example Files
- **`examples/glass-card-usage.tsx`** - Card component examples
- **`examples/dark-mode-setup.md`** - Dark mode configuration
