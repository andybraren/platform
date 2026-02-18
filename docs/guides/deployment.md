# Deployment Guide

Deploy the Ambient Code Platform to a production Kubernetes or OpenShift cluster.

## Prerequisites

- Kubernetes 1.24+ or OpenShift 4.12+ cluster with admin access
- `kubectl` or `oc` CLI configured
- Container registry access (or use default images from `quay.io/ambient_code`)
- Anthropic API key (or Vertex AI credentials)

## Quick Deploy

```bash
# Prepare environment
cp components/manifests/env.example components/manifests/.env
# Edit .env — set ANTHROPIC_API_KEY at minimum

# Deploy to default namespace (ambient-code)
make deploy

# Verify
kubectl get pods -n ambient-code
```

This deploys all components (frontend, backend, operator) using pre-built images from `quay.io/ambient_code`.

## Configuration

### Custom Namespace

```bash
make deploy NAMESPACE=my-namespace
```

### Custom Images

Build and push your own images:

```bash
make build-all CONTAINER_ENGINE=podman
make push-all REGISTRY=quay.io/your-username
make deploy CONTAINER_REGISTRY=quay.io/your-username
```

### Environment Variables

Edit `components/manifests/.env`:

```bash
ANTHROPIC_API_KEY=sk-ant-...          # Required
CONTAINER_REGISTRY=quay.io/your-org   # Optional: custom registry
NAMESPACE=ambient-code                 # Optional: target namespace
```

## OpenShift-Specific

### Deploy to OpenShift

```bash
# Using oc CLI
make deploy

# Verify routes
oc get routes -n ambient-code
```

### OAuth Authentication

For production OpenShift deployments with OAuth:

1. See [OpenShift OAuth Guide](../deployment/OPENSHIFT_OAUTH.md) for setup
2. Configure OAuth proxy for the frontend
3. Backend uses user tokens for RBAC enforcement

### Routes

```bash
# Get frontend URL
oc get route frontend-route -n ambient-code -o jsonpath='{.spec.host}'
```

## Post-Deployment

### 1. Create a Project

Access the frontend UI and create your first project.

### 2. Configure API Keys

Navigate to **Project Settings → API Keys** and add your Anthropic API key.

### 3. Git Authentication (Optional)

Configure Git credentials for repository operations:
- [Git Authentication Guide](../deployment/git-authentication.md)
- [GitHub App Setup](../integrations/GITHUB_APP_SETUP.md)
- [GitLab Integration](../integrations/gitlab-integration.md)

### 4. Observability (Optional)

Deploy Langfuse for LLM observability:

```bash
./e2e/scripts/deploy-langfuse.sh --openshift  # or --kubernetes
```

See [Langfuse Guide](../deployment/langfuse.md) for configuration details.

## Security

### Authentication & RBAC

- **Production**: OpenShift OAuth with namespace-scoped RBAC
- **Local dev**: Authentication disabled with mock tokens
- Backend always uses user tokens for K8s operations (never service account)
- See [ADR-0002: User Token Authentication](../architecture/decisions/0002-user-token-authentication.md)

### Secrets Management

- API keys stored in Kubernetes Secrets via ProjectSettings CR
- Git credentials as per-project secrets
- OAuth tokens managed by OpenShift OAuth provider

## Monitoring

### Health Checks

```bash
curl https://<backend-route>/health
kubectl get pods -n ambient-code
```

### Logs

```bash
kubectl logs -n ambient-code deployment/backend-api -f
kubectl logs -n ambient-code deployment/frontend -f
kubectl logs -n ambient-code deployment/agentic-operator -f
```

## Cleanup

```bash
# Remove platform
make clean

# Remove CRDs (if needed)
kubectl delete crd agenticsessions.vteam.ambient-code
kubectl delete crd projectsettings.vteam.ambient-code
kubectl delete crd rfeworkflows.vteam.ambient-code
```

## Troubleshooting

**Pods not starting:**
```bash
kubectl get pods -n ambient-code
kubectl describe pod <pod-name> -n ambient-code
kubectl logs <pod-name> -n ambient-code
```

**Image pull errors:**
```bash
kubectl get events -n ambient-code --field-selector reason=Failed
```

**Operator not creating jobs:**
```bash
kubectl logs -n ambient-code deployment/agentic-operator -f
kubectl get crd agenticsessions.vteam.ambient-code
```

## See Also

- [Local Development](local-development.md) — Development environments
- [Architecture Overview](../architecture/) — System design
- [Testing Guide](../testing/) — Test suite documentation
