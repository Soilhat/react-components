# @soilhat/react-components

A collection of reusable, accessible React components built with TypeScript and Tailwind CSS. Designed for backend developers who need a consistent, well-styled component library for rapid UI development.

[![CI](https://github.com/Soilhat/react-components/actions/workflows/ci.yml/badge.svg)](https://github.com/Soilhat/react-components/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@soilhat/react-components.svg)](https://www.npmjs.com/package/@soilhat/react-components)

## 🎨 Features

- **Reusable Components**: Pre-built, customizable UI components (Buttons, Cards, Modals, Forms, Calendars, etc.)
- **Tailwind CSS**: Modern styling with full dark mode support
- **TypeScript**: Full type safety and autocomplete support
- **Accessible**: Built with accessibility in mind (keyboard navigation, ARIA labels, semantic HTML)
- **Documented**: Storybook with interactive examples and documentation
- **Automatic Versioning**: Semantic versioning based on conventional commits
- **CI/CD Ready**: GitHub Actions for linting, testing, and deployment

## 📦 Installation

### From GitHub (Recommended)

Install directly from GitHub:

```bash
npm install github:Soilhat/react-components
# or with a specific version/tag
npm install github:Soilhat/react-components#v1.0.0
```

### From npm (When Published)

```bash
npm install @soilhat/react-components
```

### Local Development

Clone and install for local development:

```bash
git clone https://github.com/Soilhat/react-components.git
cd react-components
npm install
npm run build
```

## 🚀 Quick Start

### 1. Setup Tailwind CSS

Add the library as a source in your Tailwind config:

```css
/* src/styles/globals.css */
@import 'tailwindcss';
@source "../node_modules/@soilhat/react-components";
```

### 2. Import and Use Components

```jsx
import { Button, Card, Modal } from '@soilhat/react-components';
import { useState } from 'react';

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card>
        <Card.Header>
          <h2>Welcome</h2>
        </Card.Header>
        <p>This is a sample card component.</p>
        <Card.Footer>
          <Button onClick={() => setOpen(true)}>Open Modal</Button>
        </Card.Footer>
      </Card>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>Modal Title</h3>
        <p>Modal content goes here.</p>
        <Modal.Footer>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
```

## 📚 Available Components

- **Elements**: Button
- **Layout**: Card, Container, Divider, Heading
- **Forms**: Form, Input, Textarea
- **Data Display**: Calendar, StackedList
- **Navigation**: Navbar
- **Overlays**: Modal
- **Feedback**: Toast, ToastProvider

Full interactive documentation is available in our [Storybook](#-storybook).

## 📖 Storybook

Explore components interactively:

- **Live Demo**: [https://soilhat.github.io/react-components](https://soilhat.github.io/react-components)
- **Local**: Run `npm run storybook` (opens at http://localhost:6006)

## 🤝 Contributing

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a feature branch: `git checkout -b feat/my-feature`

### Development Workflow

```bash
# Start Storybook for component development
npm run storybook

# Run storybook tests
npm run test

# Format code
npm run format:fix

# Lint and fix issues
npm run lint:fix
```

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Commits are validated automatically using Husky and Commitlint.

**Commit format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `ci`: CI/CD configuration changes
- `chore`: Other changes (dependencies, build, etc.)

**Examples:**

```bash
git commit -m "feat(calendar): add week view support"
git commit -m "fix(modal): prevent backdrop click propagation"
git commit -m "docs(readme): add installation instructions"
```

### Pull Request

1. Push your branch: `git push origin feat/my-feature`
2. Create a Pull Request on GitHub
3. The CI pipeline will run tests, linting, and coverage checks
4. Merge once all checks pass

## 🔄 Versioning & Releases

This project uses [semantic-release](https://semantic-release.gitbook.io/) for automatic versioning and publishing.

**Version bumping is based on commit types:**

- `feat:` → Minor version bump (e.g., 1.0.0 → 1.1.0)
- `fix:` → Patch version bump (e.g., 1.0.0 → 1.0.1)
- Breaking changes (footer: `BREAKING CHANGE:`) → Major version bump

**Automatic on merge to main:**

1. Version is calculated from commits since last release
2. `CHANGELOG.md` is generated/updated
3. Git tag is created (e.g., `v1.2.0`)
4. Package is published to npm
5. Release notes are posted on GitHub

No manual versioning required!

## 🧪 Testing

```bash
# Test Storybook stories
npm run test
```

## 🔍 Code Quality

```bash
# Lint TypeScript and TSX
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Check code formatting
npm run format:check

# Auto-format code
npm run format

# Build the library
npm run build
```

## 📋 CI/CD Pipeline

The project includes automated workflows:

- **CI** (on push/PR): Linting, formatting, testing, and coverage
- **Release** (on merge to main): Automatic version bump, changelog, npm publish
- **Storybook Deploy** (on merge to main): Deploy to GitHub Pages

## 📄 License

MIT

## 🙏 Acknowledgments

Built with [React](https://react.dev), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com), and [Storybook](https://storybook.js.org/).
