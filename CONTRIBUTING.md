# Contributing to Ambient Code Platform

## Welcome!

We're glad you're here. Contributing to ACP should feel straightforward: you'll have a running environment in 2 minutes, a mentor if you need one, and your PR reviewed within 48 hours. Whether you're fixing a typo or adding a feature, we appreciate every contribution.

## Your First Contribution

### Quick Wins (10 minutes)

The fastest way to contribute is to fix something small:

1. Find a typo, unclear doc, or minor issue
2. Fork and clone:
   ```bash
   git clone https://github.com/YOUR_USERNAME/platform.git
   cd platform
   ```
3. Make the fix on a branch:
   ```bash
   git checkout -b fix/my-improvement
   ```
4. Open a PR — we'll take it from there!

### Good First Issues

Browse our [good first issues](https://github.com/ambient-code/platform/labels/good%20first%20issue) for curated tasks designed for newcomers. Each one has:

- A clear description of what to change
- Which files to look at
- A mentor who can help

### Full Development Setup (2 minutes)

**Prerequisites:** Docker, kubectl, Kind, Git

```bash
# One command to start everything
make kind-up

# Access at http://localhost:8080
```

Full development workflow:

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR_USERNAME/platform.git
cd platform
git remote add upstream https://github.com/ambient-code/platform.git

# Create a feature branch
git checkout -b feature/my-change

# Start local environment
make kind-up

# Make changes, test, then submit PR
git push origin feature/my-change
```

## Types of Contributions

### Fix a Bug

1. Check [existing issues](https://github.com/ambient-code/platform/issues) first
2. Create an issue describing the bug if none exists
3. Include: steps to reproduce, expected vs. actual behavior, environment details
4. Reference the issue in your PR

### Add a Feature

1. Propose your idea via [GitHub Discussions](https://github.com/ambient-code/platform/discussions) or an Issue first
2. Get buy-in from a maintainer before investing time
3. Implement on a feature branch
4. Include tests and documentation updates

### Improve Documentation

Documentation lives alongside the code it describes:

- **Repo root**: `README.md`, `CONTRIBUTING.md`
- **Component docs**: `components/*/README.md`
- **Guides**: `docs/guides/`
- **Architecture**: `docs/architecture/`

To preview the MkDocs site locally:

```bash
pip install -r requirements-docs.txt
mkdocs serve
# Open http://127.0.0.1:8000
```

### Frontend Development

```bash
cd components/frontend
npm install
npm run dev     # Start dev server
npm run lint    # Check code quality
npm run build   # Verify production build
```

Key rules: zero `any` types, Shadcn UI components only, React Query for all data fetching. See [DESIGN_GUIDELINES.md](components/frontend/DESIGN_GUIDELINES.md) for full standards.

### Backend / Operator Development

```bash
cd components/backend  # or components/operator

# Format and lint
gofmt -w .
go vet ./...
golangci-lint run

# Run tests
go test ./... -v
```

Key rules: always use user-scoped K8s clients for API operations, never panic in production code, never log tokens. See the [backend context](.claude/context/backend-development.md) for full patterns.

### Python Runner Development

```bash
cd components/runners/claude-code-runner

python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Format and lint
black .
isort .
flake8
```

## Development Workflow

### Branch Naming

- `feature/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation changes
- `refactor/` — Code refactoring
- `test/` — Test improvements

### Commit Messages

Use [conventional commits](https://www.conventionalcommits.org/):

```
feat: add multi-repo session support
fix: resolve PVC mounting issue
docs: update local development guide
test: add integration tests for operator
refactor: extract session handler into modules
```

### Pull Request Process

1. Run quality checks for the components you modified
2. Ensure tests pass locally
3. Update documentation if you changed functionality
4. Rebase on latest `main` to avoid merge conflicts

Your PR should include:

- Clear title describing the change
- Description of what changed and why
- Related issues (use "Fixes #123" or "Relates to #123")
- How you tested the changes
- Screenshots if UI changed

### Review Timeline

- Issues triaged within **24 hours**
- PRs receive first review within **48 hours**
- Good-first-issue PRs reviewed within **24 hours**

## Code Standards (Brief)

| Language | Formatter | Linter | Key Rules |
|----------|-----------|--------|-----------|
| **Go** | `gofmt` | `golangci-lint` | Explicit errors, no panic, user-scoped K8s clients |
| **TypeScript** | Prettier | ESLint | No `any`, Shadcn only, React Query for data |
| **Python** | `black` | `flake8` | Type hints, isort for imports |

For comprehensive standards, see component-specific docs or the AI assistant standards in `CLAUDE.md`.

## Getting Help

- **Stuck on setup?** — Open a [GitHub Discussion](https://github.com/ambient-code/platform/discussions)
- **Not sure where to start?** — Browse [good first issues](https://github.com/ambient-code/platform/labels/good%20first%20issue)
- **Want to discuss an idea?** — [GitHub Discussions](https://github.com/ambient-code/platform/discussions)
- **Found a bug?** — [GitHub Issues](https://github.com/ambient-code/platform/issues)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect:

- Respectful and constructive communication
- Welcoming and inclusive behavior
- Focus on what is best for the community
- Empathy towards other community members

## License

By contributing to Ambient Code Platform, you agree that your contributions will be licensed under the [MIT License](LICENSE).
