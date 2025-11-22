# GitHub Actions Workflows

This directory contains automated workflows for the Cinematic Portfolio project.

## Available Workflows

### CI/CD Pipeline (`ci.yml`)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

**What it does:**
1. **Multi-version testing**: Tests on Node.js 18.x and 20.x
2. **Dependency installation**: Installs all npm packages
3. **TypeScript check**: Validates TypeScript code (non-blocking)
4. **Build verification**: Builds the project and verifies output
5. **Artifact upload**: Saves build artifacts for 7 days
6. **Build summary**: Provides detailed build information

**Benefits:**
- ✅ Catches build errors before deployment
- ✅ Ensures code compiles on multiple Node versions
- ✅ Provides build artifacts for debugging
- ✅ Automated quality checks on every push

## Workflow Status

You can view workflow runs at:
https://github.com/Ashborn-047/Personal-Portfolio-v1.2/actions

## Adding More Workflows

To add additional workflows (e.g., testing, linting, deployment):
1. Create a new `.yml` file in this directory
2. Define triggers and jobs
3. Commit and push to GitHub

## Example: Adding ESLint Check

```yaml
name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - run: npm ci
      - run: npm run lint
```

---

**Note**: Workflows run automatically on GitHub's servers. No local setup required!
