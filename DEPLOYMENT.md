# Deployment & CI/CD Setup Summary

This document outlines the complete workflow implemented for @soilhat/react-components.

## 📋 What's Been Configured

### 1. ✅ Husky + Commitlint

- **File**: `.commitlintrc.cjs`, `.husky/commit-msg`
- **Purpose**: Enforce conventional commits on all commits
- **Setup**: Run `npm run prepare` or `npm install` (runs automatically)
- **Behavior**: Commits that don't follow the format are rejected

### 2. ✅ Code Quality Tools

- **Prettier**: Code formatter (`.prettierrc.json`)
- **ESLint**: Linting (existing `.eslintrc`)
- **Scripts Added**:
  - `npm run format` - Format all files
  - `npm run format:check` - Check if formatting is needed
  - `npm run lint:fix` - Fix linting issues
  - `npm run test` - Run storybook tests

### 3. ✅ GitHub Actions Workflows

#### CI Pipeline (`.github/workflows/ci.yml`)

Runs on: `push` and `pull_request` on main/develop branches

- **Lint**: ESLint + Prettier check
- **Storybook Tests**: Test stories with Vitest (including coverage)

#### Release Pipeline (`.github/workflows/release.yml`)

Runs on: `push` to main branch only

- Uses **semantic-release** for automatic versioning
- Analyzes commits to determine version bump
- Updates `CHANGELOG.md`
- Creates git tags
- Publishes to npm
- Creates GitHub releases

#### Storybook Deploy (`.github/workflows/storybook-deploy.yml`)

Runs on: `push` to main branch

- Builds Storybook
- Deploys to GitHub Pages
- **URL**: `https://soilhat.github.io/react-components`

### 4. ✅ Semantic Versioning

- **File**: `.releaserc.json`
- **Based on commit types**:
  - `feat:` → Minor version (1.0.0 → 1.1.0)
  - `fix:` → Patch version (1.0.0 → 1.0.1)
  - `BREAKING CHANGE:` → Major version (1.0.0 → 2.0.0)
- **Automatic**: No manual versioning needed!

### 5. ✅ Documentation

- **README.md**: Complete setup guide, installation, usage, contributing
- **CONTRIBUTING.md**: Detailed contribution guidelines
- **Component examples**: Full Storybook documentation

## 🚀 How It Works

### For Contributors

1. **Clone & Setup**

   ```bash
   git clone https://github.com/Soilhat/react-components.git
   cd react-components
   npm install  # Sets up Husky hooks
   ```

2. **Create Feature Branch**

   ```bash
   git checkout -b feat/my-feature
   ```

3. **Make Changes**

   ```bash
   npm run format:fix      # Format code
   npm run lint:fix        # Fix linting
   npm run test  # Run storybook tests
   npm run build           # Build the library
   ```

4. **Commit with Conventional Format**

   ```bash
   # Husky + Commitlint will validate automatically
   git commit -m "feat(button): add disabled state variant"
   ```

5. **Push & Create PR**
   ```bash
   git push origin feat/my-feature
   ```

### Automatic CI/CD

When PR is created:

- ✅ Linting check runs
- ✅ Tests run
- ✅ Coverage uploaded
- ✅ Storybook tests run

When merged to main:

- ✅ Version is calculated (e.g., 1.0.1)
- ✅ CHANGELOG.md is generated
- ✅ Git tag created (v1.0.1)
- ✅ Package published to npm
- ✅ GitHub release created
- ✅ Storybook deployed to GitHub Pages

## 📦 Installation Methods

### From GitHub

```bash
npm install github:Soilhat/react-components
npm install github:Soilhat/react-components#v1.0.0  # With version tag
```

### From npm (after first release)

```bash
npm install @soilhat/react-components
```

## 🔐 GitHub Secrets Required

For the release workflow to work, configure these secrets in GitHub:

1. **GITHUB_TOKEN** - Created automatically by GitHub (already available)
2. **NPM_TOKEN** - (Optional) If publishing to npm registry
   - Get from https://npmjs.com settings
   - Add as `NPM_TOKEN` secret in GitHub repo settings

## ✨ Key Features

- ✅ **Conventional Commits**: Enforced locally with Husky + Commitlint
- ✅ **Automatic Versioning**: Semantic versioning based on commit analysis
- ✅ **Auto Changelog**: Generated from commits with detailed notes
- ✅ **Auto Tagging**: Git tags created automatically
- ✅ **Auto Publishing**: Published to npm automatically
- ✅ **Code Quality**: Linting, formatting, tests in CI
- ✅ **Storybook Docs**: Auto-deployed to GitHub Pages
- ✅ **Test Coverage**: Tracked with Codecov integration (optional)

## 📝 Commit Examples

```bash
# New feature
git commit -m "feat(calendar): add week view support"

# Bug fix
git commit -m "fix(modal): prevent backdrop click propagation"

# Documentation
git commit -m "docs(readme): update installation instructions"

# Performance improvement
git commit -m "perf(calendar): optimize date calculations"

# Breaking change
git commit -m "feat(modal): redesign api

BREAKING CHANGE: Modal component API has changed.
Old: <Modal isOpen={true} />
New: <Modal open={true} />"
```

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Release Docs](https://semantic-release.gitbook.io/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Husky Docs](https://typicode.github.io/husky/)
- [Commitlint Docs](https://commitlint.js.org/)

---
