# Ein UI Skill for Claude Code

Claude Code skill providing guidance for Ein UI, a liquid glass morphism component library for React/Next.js.

## What's New: OKLCH Color Palette System

This skill now enforces **custom OKLCH color palettes** derived from the user's brand/anchor color. No more generic cyan/purple "AI slop" — every project gets a unique, professional palette.

### How It Works

1. The skill prompts for the user's **anchor color** before any design work
2. A **7-color OKLCH palette** is generated using a chroma-varying algorithm
3. All components, glows, and backgrounds reference the palette via CSS variables (`--color-1` through `--color-7`)
4. Zero hardcoded colors — the entire theme changes by updating one anchor color

### Color Science

The palette uses **chroma tapering** — peak saturation at the anchor lightness, naturally fading toward light and dark extremes. This is the key difference between professional and AI-generated palettes.

```
Anchor: oklch(0.60 0.15 280)  →  Full chroma at mid-lightness
Light:  oklch(0.95 0.045 280) →  Subtle, not neon
Dark:   oklch(0.20 0.045 280) →  Rich, not muddy
```

Use the [OKLCH Color Palette Generator](https://gloss-modern-smile.figma.site/) or the built-in algorithm in the skill to generate palettes.

## Installation

### Option 1: Personal Skill (Recommended)

Install as a global skill available in all your projects:

```bash
# Clone and copy to Claude Code skills directory
git clone https://github.com/unobtuse/einui-claude-skill.git
mkdir -p ~/.claude/skills/einui
cp -r einui-claude-skill/skills/einui/* ~/.claude/skills/einui/
```

After installation, `/einui` will be available in Claude Code.

### Option 2: Local Plugin

Install as a Claude Code plugin:

```bash
# Clone to local plugins directory
mkdir -p ~/.claude/plugins/local
git clone https://github.com/unobtuse/einui-claude-skill.git ~/.claude/plugins/local/einui
```

Then enable in `~/.claude/settings.json`:

```json
{
  "enabledPlugins": {
    "einui@local": true
  }
}
```

### Option 3: Project-Level

For a single project only:

```bash
mkdir -p .claude/skills/einui
cp -r einui-claude-skill/skills/einui/* .claude/skills/einui/
```

## Features

- **OKLCH Color System** — Mandatory anchor-based palette generation with chroma tapering
- **Component Installation** — Registry-based install for all 42 Ein UI components
- **Theming Guide** — OKLCH-only CSS variable configuration
- **Dark Mode** — Built-in dark/light mode support via palette inversion
- **Palette Converter** — TypeScript script to generate CSS from OKLCH palettes
- **Usage Examples** — Dashboard, forms, command palette, and more

## Skill Triggers

This skill activates when users ask to:
- "add Ein UI components"
- "install glass card"
- "use liquid glass UI"
- "set up Ein UI"
- "configure glass morphism"
- Reference "@einui" or "einui"

## Documentation

- **Main Skill:** `skills/einui/SKILL.md`
- **Components Catalog:** `skills/einui/references/components-catalog.md`
- **Theming Guide:** `skills/einui/references/theming-guide.md`
- **Custom Themes:** `skills/einui/references/custom-themes.md`
- **Installation Patterns:** `skills/einui/references/installation-patterns.md`
- **Palette Converter:** `skills/einui/scripts/palette-to-einui.ts`

## Ein UI Resources

- Website: https://ui.eindev.ir
- GitHub: https://github.com/ehsanghaffar/einui
- OKLCH Palette Generator: https://gloss-modern-smile.figma.site/
- License: MIT

---

<div align="center">
<p><a href="https://gabemade.it"><img src="https://gabemade.it/images/logo-darkmode.svg" alt="GabeMade.it" style="max-width: 100%;"></a></p>
<p><strong>Made by <a href="https://gabemade.it">GabeMade.it</a> with ❤️</strong></p>
</div>
