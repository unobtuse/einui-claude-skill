# Ein UI Components Catalog

Complete reference for all Ein UI liquid glass components.

## Core Components (11)

### Glass Card
**Install:** `npx shadcn@latest add @einui/glass-card`

Frosted glass container with backdrop blur and subtle borders. Supports variants: default, glow, solid.

```tsx
import { GlassCard } from '@/components/liquid-glass/glass-card'

<GlassCard variant="glow" className="p-6">
  <h3>Card Title</h3>
  <p>Card content with glass effect</p>
</GlassCard>
```

### Glass Button
**Install:** `npx shadcn@latest add @einui/glass-button`

Interactive button with glass morphism styling. Variants: default, glow, outline, ghost.

```tsx
import { GlassButton } from '@/components/liquid-glass/glass-button'

<GlassButton variant="glow" size="lg">
  Click Me
</GlassButton>
```

### Glass Input
**Install:** `npx shadcn@latest add @einui/glass-input`

Text input with frosted glass background and focus glow effects.

```tsx
import { GlassInput } from '@/components/liquid-glass/glass-input'

<GlassInput placeholder="Enter email..." type="email" />
```

### Glass Dialog
**Install:** `npx shadcn@latest add @einui/glass-dialog`

Modal dialog with glass backdrop and animated entrance.

```tsx
import {
  GlassDialog,
  GlassDialogTrigger,
  GlassDialogContent
} from '@/components/liquid-glass/glass-dialog'

<GlassDialog>
  <GlassDialogTrigger>Open</GlassDialogTrigger>
  <GlassDialogContent>
    <h2>Dialog Title</h2>
  </GlassDialogContent>
</GlassDialog>
```

### Glass Tabs
**Install:** `npx shadcn@latest add @einui/glass-tabs`

Tab navigation with glass-styled indicators.

### Badge
**Install:** `npx shadcn@latest add @einui/badge`

Status indicators with glass styling. Variants: default, secondary, destructive, outline.

### Avatar
**Install:** `npx shadcn@latest add @einui/avatar`

User avatars with glass border effects.

### Progress
**Install:** `npx shadcn@latest add @einui/progress`

Progress bars with animated glass fill.

### Switch
**Install:** `npx shadcn@latest add @einui/switch`

Toggle switches with glass morphism.

### Slider
**Install:** `npx shadcn@latest add @einui/slider`

Range sliders with glass track and thumb.

### Tooltip
**Install:** `npx shadcn@latest add @einui/tooltip`

Hover tooltips with glass background.

---

## Form Components (4)

### Select
**Install:** `npx shadcn@latest add @einui/select`

Dropdown select with glass-styled options panel.

### Textarea
**Install:** `npx shadcn@latest add @einui/textarea`

Multi-line text input with glass styling.

### Checkbox
**Install:** `npx shadcn@latest add @einui/checkbox`

Checkbox inputs with glass check indicator.

### Radio
**Install:** `npx shadcn@latest add @einui/radio`

Radio button groups with glass styling.

---

## Data Display Components (4)

### Skeleton
**Install:** `npx shadcn@latest add @einui/skeleton`

Loading placeholders with glass shimmer effect.

### Table
**Install:** `npx shadcn@latest add @einui/table`

Data tables with glass headers and row styling.

### Separator
**Install:** `npx shadcn@latest add @einui/separator`

Visual dividers with glass gradient.

### Scroll Area
**Install:** `npx shadcn@latest add @einui/scroll-area`

Custom scrollbar with glass styling.

---

## Overlay Components (3)

### Alert Dialog
**Install:** `npx shadcn@latest add @einui/alert-dialog`

Confirmation dialogs with glass backdrop.

### Sheet
**Install:** `npx shadcn@latest add @einui/sheet`

Slide-out panels with glass morphism.

### Popover
**Install:** `npx shadcn@latest add @einui/popover`

Floating popovers with glass background.

---

## Widget Components (5)

### Weather Widget
**Install:** `npx shadcn@latest add @einui/weather`

Weather display card with glass styling and animated icons.

### Calendar Widget
**Install:** `npx shadcn@latest add @einui/calendar`

Date picker calendar with glass day cells.

### Clock Widget
**Install:** `npx shadcn@latest add @einui/clock`

Analog/digital clock with glass face.

### Stocks Widget
**Install:** `npx shadcn@latest add @einui/stocks`

Stock ticker with glass card styling.

### Stats Widget
**Install:** `npx shadcn@latest add @einui/stats`

Statistics display with glass containers.

---

## Innovative Components (7)

### Command Palette
**Install:** `npx shadcn@latest add @einui/command`

Keyboard-navigable command menu with glass styling.

```tsx
import { Command } from '@/components/liquid-glass/command'

<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandItem>Action 1</CommandItem>
    <CommandItem>Action 2</CommandItem>
  </CommandList>
</Command>
```

### Morph Card
**Install:** `npx shadcn@latest add @einui/morph-card`

Card with morphing animation effects on hover/interaction.

### Dock
**Install:** `npx shadcn@latest add @einui/dock`

macOS-style dock with glass background and magnification.

### Gauge
**Install:** `npx shadcn@latest add @einui/gauge`

Circular progress gauge with glass styling.

### Notification
**Install:** `npx shadcn@latest add @einui/notification`

Toast notifications with glass background.

### Ripple
**Install:** `npx shadcn@latest add @einui/ripple`

Click ripple effect component.

### Timeline
**Install:** `npx shadcn@latest add @einui/timeline`

Vertical timeline with glass nodes.

---

## Pre-built Blocks (5)

### Sign Up Block
**Install:** `npx shadcn@latest add @einui/signup-block`

Complete registration form with glass styling.

### Login Block
**Install:** `npx shadcn@latest add @einui/login-block`

Authentication form with glass morphism.

### Forgot Password Block
**Install:** `npx shadcn@latest add @einui/forgot-password-block`

Password reset flow with glass components.

### Pricing Block
**Install:** `npx shadcn@latest add @einui/pricing-block`

Pricing table with glass tier cards.

### Admin Panel Block
**Install:** `npx shadcn@latest add @einui/admin-block`

Dashboard layout with glass sidebar and panels.
