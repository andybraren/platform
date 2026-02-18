# User Guide

Welcome to the Ambient Code Platform User Guide.

## Getting Started

New to ACP? Follow the [Getting Started Guide](../getting-started.md) to set up your environment and create your first session.

## Core Concepts

### AgenticSession

An AgenticSession is a Kubernetes Custom Resource representing an AI-powered automation task. Each session:

- Executes a prompt using Claude Code CLI
- Can operate on one or multiple repositories
- Runs as a Kubernetes Job with an isolated workspace
- Supports interactive (long-running) and batch (headless) modes
- Tracks status, results, and per-repo outcomes

### Projects & Namespaces

The platform uses Kubernetes namespaces for multi-tenant isolation:

- Each project maps to a namespace
- RBAC controls who can create/view sessions
- ProjectSettings CR manages API keys and defaults

### Session Modes

**Batch Mode** (`interactive: false`): Single-prompt execution with timeout. Ideal for automation, CI/CD.

**Interactive Mode** (`interactive: true`): Long-running chat sessions using inbox/outbox files. Ideal for iterative development.

## Example Session

```yaml
apiVersion: vteam.ambient-code/v1alpha1
kind: AgenticSession
metadata:
  name: analyze-repo
  namespace: my-project
spec:
  prompt: "Analyze this codebase and generate comprehensive API documentation"
  repos:
    - input:
        url: https://github.com/myorg/myrepo
        branch: main
  interactive: false
  timeout: 3600
```

## Quick Navigation

- **Set up locally** — [Local Development](../guides/local-development.md)
- **Deploy to production** — [Deployment Guide](../guides/deployment.md)
- **Contribute** — [Contributing Guide](../../CONTRIBUTING.md)
- **Architecture** — [Architecture Overview](../architecture/README.md)
- **Reference** — [Glossary](../reference/glossary.md)
