# Ein UI Theming Guide

Complete CSS variable configuration and customization reference.

## CSS Variables

### Glass Effect Variables

```css
:root {
  /* Background opacity */
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-bg-light: rgba(255, 255, 255, 0.02);
  --glass-bg-solid: rgba(255, 255, 255, 0.1);

  /* Border styling */
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-border-hover: rgba(255, 255, 255, 0.2);

  /* Blur intensity */
  --glass-blur: 16px;
  --glass-blur-light: 12px;
  --glass-blur-heavy: 20px;
}
```

### Glow Effect Variables

```css
:root {
  /* Primary glow colors */
  --glow-cyan: rgba(6, 182, 212, 0.3);
  --glow-purple: rgba(147, 51, 234, 0.3);
  --glow-pink: rgba(236, 72, 153, 0.3);

  /* Secondary glow colors */
  --glow-blue: rgba(59, 130, 246, 0.3);
  --glow-emerald: rgba(16, 185, 129, 0.3);
  --glow-amber: rgba(245, 158, 11, 0.3);
}
```

### Text Color Variables

```css
:root {
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.7);
  --text-muted: rgba(255, 255, 255, 0.5);
  --text-disabled: rgba(255, 255, 255, 0.3);
}
```

## Color Schemes

### Ocean Theme

```css
:root {
  --glow-primary: var(--glow-cyan);
  --glow-secondary: var(--glow-blue);
  --accent: 186 100% 50%; /* cyan-400 */
}
```

### Aurora Theme

```css
:root {
  --glow-primary: var(--glow-purple);
  --glow-secondary: var(--glow-pink);
  --accent: 280 100% 60%; /* purple-500 */
}
```

### Forest Theme

```css
:root {
  --glow-primary: var(--glow-emerald);
  --glow-secondary: rgba(20, 184, 166, 0.3); /* teal */
  --accent: 160 84% 39%; /* emerald-500 */
}
```

## Glass Effect Utilities

### Base Glass Class

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 12px;
}
```

### Glow Effect Class

```css
.glass-glow {
  position: relative;
}

.glass-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: linear-gradient(
    135deg,
    var(--glow-primary),
    var(--glow-secondary)
  );
  border-radius: inherit;
  opacity: 0.7;
  z-index: -1;
  filter: blur(8px);
  transition: opacity 0.3s ease;
}

.glass-glow:hover::before {
  opacity: 1;
}
```

### Animated Glow Pulse

```css
@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.glass-glow-animated::before {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

## Dark Mode Configuration

### Variable Overrides

```css
.dark {
  --glass-bg: rgba(0, 0, 0, 0.3);
  --glass-border: rgba(255, 255, 255, 0.08);
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.7);
}

.light {
  /* Subtle glass effect for light backgrounds */
  --glass-bg: rgba(0, 0, 0, 0.03);
  --glass-border: rgba(0, 0, 0, 0.08);
  --text-primary: rgba(0, 0, 0, 0.9);
  --text-secondary: rgba(0, 0, 0, 0.6);
  
  /* Softer glows for light mode */
  --glow-cyan: rgba(6, 182, 212, 0.15);
  --glow-purple: rgba(147, 51, 234, 0.15);
}
```

## Tailwind CSS v4 Integration

### Custom Utilities

```css
/* tailwind.css */
@theme {
  --color-glass-bg: var(--glass-bg);
  --color-glass-border: var(--glass-border);
  --blur-glass: var(--glass-blur);
}
```

### Usage with Tailwind Classes

```tsx
<div className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-xl">
  Glass container
</div>
```

## Customization Examples

### Custom Glow Color

```css
.glass-custom-glow::before {
  background: linear-gradient(
    135deg,
    rgba(255, 87, 51, 0.3),  /* orange */
    rgba(255, 189, 89, 0.3)  /* gold */
  );
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .glass-glow::before,
  .glass-glow-animated::before {
    animation: none;
    transition: none;
  }
}
```
