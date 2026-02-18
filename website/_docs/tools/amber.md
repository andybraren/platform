# Amber: Codebase Intelligence Agent

[**Amber**](https://github.com/ambient-code/amber) is an AI-powered codebase intelligence agent for the Ambient Code Platform. It provides autonomous code maintenance, issue triage, and development assistance.

Amber runs as a standalone service and can be deployed via Docker or Kubernetes. See the [Amber repository](https://github.com/ambient-code/amber) for full documentation, installation, and usage.

### Key Capabilities

- **On-Demand Consultation** — Interactive Q&A about your codebase
- **Background Agent** — Autonomous issue triage and PR creation
- **Scheduled Health Checks** — Dependency scans, sprint planning
- **Webhook Integration** — Reactive intelligence for GitHub events
- **Constitution Compliance** — Automatic enforcement of project standards

---

## GitHub Actions Integration (This Repo)

This repository also includes a lightweight GitHub Actions workflow that triggers Amber-style automation directly from GitHub Issues — no separate service required.

### Quick Start

1. Add `ANTHROPIC_API_KEY` to GitHub Secrets
2. Enable Actions write permissions (**Settings → Actions → General → Workflow permissions**)
3. Create an issue using an Amber template and apply a label

### Available Workflows

| Workflow | Label | Use Case |
|----------|-------|----------|
| **Auto-Fix** | `amber:auto-fix` | Code formatting, linting, trivial fixes |
| **Refactoring** | `amber:refactor` | Break large files, extract patterns |
| **Test Coverage** | `amber:test-coverage` | Add missing tests |

### How It Works

```
Create Issue → Add Label → GitHub Actions triggers →
Analyzes & makes changes → PR created → Review & merge
```

The workflow (`.github/workflows/amber-issue-handler.yml`) executes via the Claude Code SDK, analyzes the issue, makes changes on a branch, and opens a pull request linked to the original issue.

### Configuration

Automation policies in `.claude/amber-config.yml`:

```yaml
max_auto_prs_per_day: 5
require_tests_pass: true
never_push_to_main: true
always_create_branch: true
```

### Monitoring

```bash
gh pr list --label amber-generated
gh run list --workflow=amber-issue-handler.yml
```

### Troubleshooting

**Workflow not triggering:**
```bash
gh workflow view amber-issue-handler.yml    # Check it's enabled
gh secret list | grep ANTHROPIC_API_KEY     # Check secret exists
```

**Error comment on issue:** Click the workflow run link, review logs with `gh run view <run-id> --log`.

### Security

- API key stored as encrypted GitHub secret
- Never pushes directly to `main` (creates feature branches)
- All changes go through PR review with CI checks
- Minimal permissions (contents:write, issues:write, pull-requests:write)
