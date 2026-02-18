---
permalink: /docs/
---

# Ambient Code Platform Documentation

The **Ambient Code Platform** orchestrates AI-powered development sessions on Kubernetes. Submit tasks through a web UI, and ACP handles the rest: spinning up isolated runner pods, coordinating AI agents, and delivering results.

## Quick Start

```bash
git clone https://github.com/ambient-code/platform.git
cd platform
make kind-up
# Open http://localhost:8080
```

See the [Getting Started Guide](getting-started.md) for a complete walkthrough.

## I want to...

| Goal | Guide |
|------|-------|
| **Try it locally** | [Getting Started](getting-started.md) |
| **Set up a dev environment** | [Local Development](guides/local-development.md) |
| **Deploy to production** | [Deployment Guide](guides/deployment.md) |
| **Contribute code** | [Contributing](../CONTRIBUTING.md) |
| **Understand the architecture** | [Architecture Overview](architecture/README.md) |
| **Use Amber automation** | [Amber Guide](tools/amber.md) |

## Documentation Map

### Guides
- [Local Development](guides/local-development.md) — Kind setup, CRC for OpenShift
- [Deployment](guides/deployment.md) — Production Kubernetes/OpenShift deployment
- [Integrations](integrations/) — GitHub, GitLab, Google Workspace setup

### Architecture
- [Overview](architecture/README.md) — System design and component interaction
- [Diagrams](architecture/diagrams/) — Visual architecture references
- [Decisions (ADRs)](architecture/decisions/) — Why we built it this way

### Testing
- [Testing Overview](testing/README.md) — Test types and strategy
- [E2E Testing](testing/e2e-guide.md) — Cypress end-to-end tests

### Reference
- [Glossary](reference/glossary.md) — Key terms and concepts
- [Model Pricing](reference/model-pricing.md) — AI model cost reference

### Tools
- [Amber](tools/amber.md) — Automated issue-to-PR agent

### Deployment Details
- [OpenShift Deployment](deployment/OPENSHIFT_DEPLOY.md)
- [OpenShift OAuth](deployment/OPENSHIFT_OAUTH.md)
- [Git Authentication](deployment/git-authentication.md)
- [Langfuse Observability](deployment/langfuse.md)

## Getting Help

- [GitHub Discussions](https://github.com/ambient-code/platform/discussions) — Questions and ideas
- [GitHub Issues](https://github.com/ambient-code/platform/issues) — Bug reports and feature requests
- [Contributing Guide](../CONTRIBUTING.md) — How to contribute
