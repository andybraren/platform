# Ambient Code Platform

**Orchestrate AI-powered development sessions on Kubernetes — from analysis and research to code generation and content creation.**

Ambient Code Platform (ACP) lets your team run intelligent, multi-agent AI sessions as first-class Kubernetes workloads. Point it at your repos, describe what you want, and ACP handles the rest: spinning up isolated runner pods, coordinating multiple AI agents, and delivering results through a modern web UI.

<!-- TODO: Add screenshot/GIF of the UI here -->
<!-- TODO: Add link to live demo if available -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/ambient-code/platform)](https://github.com/ambient-code/platform/stargazers)
[![Contributors](https://img.shields.io/github/contributors/ambient-code/platform)](https://github.com/ambient-code/platform/graphs/contributors)

---

## What is Ambient Code Platform?

ACP is a Kubernetes-native platform that turns AI interactions into manageable, repeatable infrastructure. Instead of running AI tools ad-hoc on your laptop, ACP lets you:

- **Submit tasks through a web UI** — describe what you need in natural language
- **Run sessions as Kubernetes Jobs** — isolated, auditable, with proper resource limits
- **Coordinate multiple AI agents** — specialized agents collaborate on complex tasks (PM, Architect, Engineer, etc.)
- **Work across multiple repos** — sessions can span several repositories simultaneously
- **Integrate with your Git workflow** — automatic branching, commits, and PR creation

ACP is built for teams that want the power of AI-assisted development with the governance and observability of production infrastructure.

## Quick Start

**Prerequisites:** Docker and kubectl installed.

```bash
# Clone the repo
git clone https://github.com/ambient-code/platform.git
cd platform

# Start everything (Kind cluster + all components)
make kind-up

# Open http://localhost:8080
```

That's it. The command creates a Kind cluster, deploys all components, and sets up port forwarding. Takes about 2 minutes on first run.

**Next steps after setup:**
1. Create a project in the UI
2. Add your Anthropic API key in Project Settings
3. Create your first agentic session

## How It Works

```
User creates session → Backend creates CR → Operator spawns Job →
Runner pod executes AI → Results stored in CR → UI displays progress
```

| Component | Technology | Role |
|-----------|------------|------|
| **Frontend** | Next.js + Shadcn | Web UI for managing sessions |
| **Backend API** | Go + Gin | REST API managing Kubernetes Custom Resources |
| **Operator** | Go | Watches CRs, creates and monitors Jobs |
| **Runner** | Python + Claude Code CLI | Executes AI tasks in isolated pods |

## Documentation

### I want to...

- **Get running locally** — You're already here! See [Quick Start](#quick-start) above
- **Deploy to a real cluster** — [Deployment Guide](docs/guides/deployment.md)
- **Contribute code** — [Contributing Guide](CONTRIBUTING.md)
- **Understand the architecture** — [Architecture Overview](docs/architecture/)
- **Report a bug or request a feature** — [GitHub Issues](https://github.com/ambient-code/platform/issues)

## Community

- **Discussions**: [GitHub Discussions](https://github.com/ambient-code/platform/discussions)
- **Issues**: [GitHub Issues](https://github.com/ambient-code/platform/issues)
- **Blog**: [ambient-code.ai](https://ambient-code.ai/)

## Contributing

We welcome contributions of all sizes — from fixing a typo to adding a major feature. Every contributor gets a review within 48 hours.

- [**Contributing Guide**](CONTRIBUTING.md) — How to get started
- [**Good First Issues**](https://github.com/ambient-code/platform/labels/good%20first%20issue) — Curated issues for newcomers
- [**Architecture Decisions**](docs/architecture/decisions/) — Understand why things are built this way

## Components

Each component has its own detailed README:

- [Frontend](components/frontend/) — Next.js web application
- [Backend](components/backend/) — Go REST API
- [Operator](components/operator/) — Kubernetes controller
- [Runners](components/runners/) — AI execution pods
- [Manifests](components/manifests/) — Kubernetes deployment resources

## Related Projects

- [**Amber**](https://github.com/ambient-code/amber) — AI-powered codebase intelligence agent for autonomous code maintenance, issue triage, and development assistance. Runs as a standalone service alongside ACP.
- [**Workflows**](https://github.com/ambient-code/workflows) — Out-of-the-box workflow templates and agent personas for ACP. Includes structured workflows (bugfix, triage, spec-kit, PRD/RFE) that appear by default in the platform UI.

## License

MIT — see [LICENSE](LICENSE).

---

_This project was formerly known as "vTeam". Some internal artifacts (image names, namespaces, API groups) still use this name for backward compatibility._
