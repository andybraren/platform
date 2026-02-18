---
---
# Getting Started with Ambient Code Platform

Welcome to the Ambient Code Platform! This guide will get you from zero to running your first AI-powered agentic session.

## 1. Set Up a Local Environment

The fastest way to try ACP is with Kind (Kubernetes in Docker):

```bash
git clone https://github.com/ambient-code/platform.git
cd platform
make kind-up
```

This creates a local Kubernetes cluster with all platform components deployed. Access the UI at **http://localhost:8080**.

For detailed setup options, see the [Local Development Guide](guides/local-development.md).

## 2. Create a Project

1. Open http://localhost:8080 in your browser
2. Click **Create Project**
3. Give it a name (e.g., "my-first-project")

Projects provide isolated namespaces for your agentic sessions.

## 3. Configure Your API Key

1. Navigate to your project's **Settings**
2. Under **API Keys**, add your Anthropic API key (`sk-ant-...`)
3. Save

## 4. Create Your First Session

1. Click **New Session** in your project
2. Enter a prompt describing what you want the AI to do
3. Optionally configure:
   - **Repository**: Point to a Git repo for code-related tasks
   - **Model**: Choose the AI model
   - **Timeout**: Set a time limit
4. Click **Create**

The platform will:
- Create a Kubernetes Job with an AI runner pod
- Execute your prompt using Claude Code CLI
- Stream results back to the UI in real-time

## 5. Monitor Progress

Watch your session in the UI:
- **Status**: Pending → Running → Completed
- **Logs**: Real-time output from the AI runner
- **Results**: Final output, including any code changes

## What's Next?

- **Deploy to a real cluster**: [Deployment Guide](guides/deployment.md)
- **Understand the architecture**: [Architecture Overview](architecture/)
- **Contribute**: [Contributing Guide](../CONTRIBUTING.md)
- **Try Amber automation**: [Amber Guide](tools/amber.md)

## Need Help?

- [GitHub Discussions](https://github.com/ambient-code/platform/discussions) for questions
- [GitHub Issues](https://github.com/ambient-code/platform/issues) for bugs
