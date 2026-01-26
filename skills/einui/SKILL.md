---
name: einui
description: This skill should be used when the user asks to "add Ein UI components", "install glass card", "use liquid glass UI", "add frosted glass components", "set up Ein UI", "configure glass morphism", mentions "einui", "@einui", "glass-card", "glass-button", or discusses React/Next.js frosted glass component styling. Provides guidance for Ein UI library integration.
version: 2.0.0
---

# Ein UI Component Library Integration

Guide for adding liquid glass morphism components to React/Next.js projects using Ein UI, built on Shadcn/Radix UI primitives with Tailwind CSS v4.

## Overview

Ein UI provides frosted glass styled components with:
- Full TypeScript support
- Dark mode with CSS variables
- Accessibility via Radix UI primitives
- Tailwind CSS v4 integration
- Shadcn CLI installation (registry-based)

**Official Site:** https://ui.eindev.ir
**GitHub:** https://github.com/ehsanghaffar/einui
**Registry:** https://ui.eindev.ir/r/

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

### Single Component (Registry URL)
```bash
npx shadcn@latest add "https://ui.eindev.ir/r/glass-card.json"
```

### Multiple Components
```bash
npx shadcn@latest add "https://ui.eindev.ir/r/glass-card.json" "https://ui.eindev.ir/r/glass-button.json" "https://ui.eindev.ir/r/glass-input.json"
```

### Install All Core Components
```bash
npx shadcn@latest add \
  "https://ui.eindev.ir/r/glass-card.json" \
  "https://ui.eindev.ir/r/glass-button.json" \
  "https://ui.eindev.ir/r/glass-input.json" \
  "https://ui.eindev.ir/r/glass-dialog.json" \
  "https://ui.eindev.ir/r/glass-tabs.json" \
  "https://ui.eindev.ir/r/glass-select.json" \
  "https://ui.eindev.ir/r/glass-badge.json" \
  "https://ui.eindev.ir/r/glass-avatar.json"
```

## Component Categories

### Liquid Glass Core (23 components)
| Component | Install Command |
|-----------|-----------------|
| glass-card | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-card.json"` |
| glass-button | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-button.json"` |
| glass-input | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-input.json"` |
| glass-dialog | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-dialog.json"` |
| glass-tabs | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-tabs.json"` |
| glass-select | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-select.json"` |
| glass-badge | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-badge.json"` |
| glass-avatar | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-avatar.json"` |
| glass-progress | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-progress.json"` |
| glass-switch | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-switch.json"` |
| glass-slider | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-slider.json"` |
| glass-tooltip | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-tooltip.json"` |
| glass-textarea | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-textarea.json"` |
| glass-checkbox | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-checkbox.json"` |
| glass-radio | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-radio.json"` |
| glass-skeleton | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-skeleton.json"` |
| glass-table | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-table.json"` |
| glass-breadcrumb | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-breadcrumb.json"` |
| glass-sheet | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-sheet.json"` |
| glass-popover | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-popover.json"` |
| glass-alert-dialog | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-alert-dialog.json"` |
| glass-separator | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-separator.json"` |
| glass-scroll-area | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-scroll-area.json"` |

### Innovative Components (8)
| Component | Install Command |
|-----------|-----------------|
| glass-command-palette | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-command-palette.json"` |
| glass-notification | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-notification.json"` |
| glass-dock | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-dock.json"` |
| glass-gauge | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-gauge.json"` |
| glass-morph-card | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-morph-card.json"` |
| glass-ripple | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-ripple.json"` |
| glass-spotlight | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-spotlight.json"` |
| glass-timeline | `npx shadcn@latest add "https://ui.eindev.ir/r/glass-timeline.json"` |

### Widget Components (6)
| Component | Install Command |
|-----------|-----------------|
| base-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/base-widget.json"` |
| calendar-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/calendar-widget.json"` |
| clock-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/clock-widget.json"` |
| weather-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/weather-widget.json"` |
| stats-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/stats-widget.json"` |
| stock-widget | `npx shadcn@latest add "https://ui.eindev.ir/r/stock-widget.json"` |

### Pre-built Blocks (5)
| Block | Install Command | Target |
|-------|-----------------|--------|
| admin-panel | `npx shadcn@latest add "https://ui.eindev.ir/r/admin-panel.json"` | `app/admin/page.tsx` |
| login-page | `npx shadcn@latest add "https://ui.eindev.ir/r/login-page.json"` | `app/auth/login/page.tsx` |
| signup-page | `npx shadcn@latest add "https://ui.eindev.ir/r/signup-page.json"` | `app/auth/signup/page.tsx` |
| forgot-password-page | `npx shadcn@latest add "https://ui.eindev.ir/r/forgot-password-page.json"` | `app/auth/forgot-password/page.tsx` |
| pricing-page | `npx shadcn@latest add "https://ui.eindev.ir/r/pricing-page.json"` | `app/pricing/page.tsx` |

See `references/components-catalog.md` for the complete component list with usage examples.

## Required Dependencies

Many Ein UI components require these peer dependencies:

```bash
# Core dependencies (install as needed)
npm install framer-motion lucide-react class-variance-authority

# Radix UI primitives (installed automatically by shadcn)
npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-select
```

| Dependency | Required By |
|------------|-------------|
| `framer-motion` | glass-tabs, glass-textarea, glass-checkbox, glass-radio, glass-skeleton, base-widget |
| `lucide-react` | glass-dialog, glass-select, glass-checkbox, glass-breadcrumb, glass-sheet, glass-command-palette, glass-notification, all widgets, all blocks |
| `class-variance-authority` | glass-badge, glass-button, glass-sheet |

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

Ein UI components are designed for dark mode by default. Configure with next-themes:

### Install next-themes
```bash
npm install next-themes
```

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

## Usage Pattern

After installation, import and use components:

```tsx
import { GlassCard, GlassCardHeader, GlassCardTitle, GlassCardContent } from '@/components/liquid-glass/glass-card'
import { GlassButton } from '@/components/liquid-glass/glass-button'

export default function Page() {
  return (
    <GlassCard className="p-6">
      <GlassCardHeader>
        <GlassCardTitle>Welcome</GlassCardTitle>
      </GlassCardHeader>
      <GlassCardContent>
        <p className="text-white/70">Beautiful liquid glass effect</p>
        <GlassButton variant="primary" className="mt-4">
          Get Started
        </GlassButton>
      </GlassCardContent>
    </GlassCard>
  )
}
```

## Import Paths

Components install to these directories:

| Type | Install Path |
|------|--------------|
| Core components | `@/components/liquid-glass/` |
| Innovative components | `@/components/innovative/` |
| Widgets | `@/components/widgets/` |
| Blocks | `app/` directory (pages) |

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
3. **Install peer dependencies** - `npm install framer-motion lucide-react class-variance-authority`
4. **Install components** - Use registry URL: `npx shadcn@latest add "https://ui.eindev.ir/r/[component].json"`
5. **Add CSS variables** - Configure theming in globals.css
6. **Set up dark mode** - Install next-themes, configure ThemeProvider
7. **Import and use** - Components available at their respective import paths

## Troubleshooting

### Component Not Found
Verify Shadcn is initialized and components.json exists. Use full registry URLs.

### Blur Effect Not Working
Ensure Tailwind CSS v4 is properly configured with backdrop-blur utilities.

### Dark Mode Not Switching
Check ThemeProvider wraps the application and `attribute="class"` is set.

### Missing Peer Dependencies
Many components need framer-motion, lucide-react, or class-variance-authority. Check console errors.

## Additional Resources

### Reference Files
- **`references/components-catalog.md`** - Complete component documentation with all 42 components
- **`references/component-api.md`** - TypeScript interfaces and props reference
- **`references/theming-guide.md`** - CSS variables and customization
- **`references/installation-patterns.md`** - Project setup patterns
- **`references/blocks-guide.md`** - Pre-built page blocks documentation

### Example Files
- **`examples/form-patterns.tsx`** - Complete form examples
- **`examples/dashboard-layout.tsx`** - Dashboard with widgets
- **`examples/command-palette-setup.tsx`** - Command palette integration
- **`examples/dark-mode-setup.md`** - Dark mode configuration
