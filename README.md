# Ein UI Plugin for Claude Code

Claude Code plugin providing guidance for Ein UI, a liquid glass morphism component library for React/Next.js.

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

- Component installation guidance
- Theming and CSS variables documentation
- Dark mode setup patterns
- Complete component catalog reference
- Usage examples

## Skill Triggers

This plugin's skill activates when users ask to:
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
- **Installation Patterns:** `skills/einui/references/installation-patterns.md`

## Ein UI Resources

- Website: https://ui.eindev.ir
- GitHub: https://github.com/ehsanghaffar/einui
- License: MIT
