# Contributing to @soilhat/react-components

Thank you for your interest in contributing! This guide will help you get started.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-components.git
   cd react-components
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Soilhat/react-components.git
   ```

## Development Setup

```bash
# Install dependencies
npm install

# This will also set up Husky hooks for commit validation
```

## Making Changes

### 1. Create a Branch

```bash
git checkout -b feat/my-feature
# or
git checkout -b fix/my-bug-fix
```

### 2. Make Your Changes

- Edit files as needed
- Follow the existing code style and patterns
- Add or update storybook tests as needed

### 3. Validate Your Work

Before committing, run:

```bash
# Format code
npm run format:fix

# Lint and fix issues
npm run lint:fix

# Run tests
npm run test

# Build the library
npm run build
```

### 4. Commit Your Changes

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. This is enforced by Husky and Commitlint.

**Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Examples:**

```bash
# New feature
git commit -m "feat(card): add shadow prop for custom styling"

# Bug fix
git commit -m "fix(modal): prevent scroll when modal is open"

# Documentation
git commit -m "docs(readme): add installation instructions"

# Multiple lines (editor will open)
git commit
# In editor:
# feat(calendar): add week view support
#
# Added a new week view to the Calendar component with proper
# date navigation and event display.
```

**Commit Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `ci`: CI/CD configuration changes
- `chore`: Other changes (dependencies, build, etc.)

**Breaking Changes:**
If your change is a breaking change, include it in the commit footer:

```bash
git commit -m "feat(modal): redesign api

BREAKING CHANGE: Modal component API has changed.
Old: <Modal isOpen={true} />
New: <Modal open={true} />"
```

## Submitting a Pull Request

1. **Sync your fork** with upstream:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Push your branch**:

   ```bash
   git push origin feat/my-feature
   ```

3. **Open a Pull Request** on GitHub:
   - Title: Brief description of changes
   - Description: More detailed explanation, related issues, etc.
   - Link any related issues

4. **CI Pipeline** will automatically run:
   - Linting and formatting checks
   - Storybook tests
   - Coverage reports

5. **Address feedback** if any and push updates to the same branch

6. **Merge** once all checks pass and are approved

## Component Development

### Creating a New Component

1. Create component in `lib/ComponentName/`:

   ```
   lib/ComponentName/
   ├── ComponentName.tsx
   ├── index.ts
   └── ComponentName.module.css (optional)
   ```

2. Create a story in `src/ComponentName/`:

   ```
   src/ComponentName/
   └── ComponentName.stories.tsx
   ```

3. Export from `lib/main.ts`:

   ```typescript
   export { default as ComponentName } from './ComponentName/ComponentName';
   ```

4. Write Storybook tests

### Component Guidelines

- **Accessibility**: Use semantic HTML, ARIA labels, keyboard navigation
- **Styling**: Use Tailwind CSS, support dark mode via `dark:` classes
- **Props**: Be explicit with types, use optional props with sensible defaults
- **Composition**: Consider compound components for complex UIs
- **Documentation**: Include JSDoc comments and Storybook stories

## Testing

```bash
# Run Storybook tests
npm run test

# Run Storybook tests with coverage
npm run test:coverage
```

## Code Style

The project uses:

- **ESLint**: For code quality and style
- **Prettier**: For code formatting

```bash
# Check both
npm run lint
npm run format:check

# Auto-fix
npm run lint:fix
npm run format:fix
```

## Questions or Issues?

- Check existing [Issues](https://github.com/Soilhat/react-components/issues)
- Open a new issue with detailed description
- Join discussions for feature requests

## Release Process

This is handled automatically! When your PR is merged to `main`:

1. Commits are analyzed
2. Version is bumped automatically
3. `CHANGELOG.md` is updated
4. Package is published to npm
5. GitHub release is created

No manual action needed!

---

**Thank you for contributing!** 🎉
