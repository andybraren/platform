# Local Development Guide

Run the Ambient Code Platform locally for development and testing.

> **TL;DR**: `make kind-up` → http://localhost:8080

## Kind (Recommended)

Kind (Kubernetes in Docker) is the recommended local development approach. It's fast, lightweight, and matches our CI/CD environment.

### Prerequisites

**macOS:**
```bash
brew install kind kubectl
# Docker Desktop must be running
```

**Linux:**
```bash
# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind

# Docker: https://docs.docker.com/engine/install/
```

**Verify:**
```bash
docker ps && kind --version && kubectl version --client
```

### Quick Start

```bash
# Start everything (cluster + components + port forwarding)
make kind-up

# Access at http://localhost:8080

# In another terminal, if port forwarding drops:
make kind-port-forward

# Run E2E tests
make test-e2e

# Stop and delete cluster
make kind-down
```

`make kind-up` creates a Kind cluster, deploys backend/frontend/operator, sets up networking, and starts port forwarding. Takes ~2 minutes on first run.

### Architecture Support

The platform auto-detects your host architecture:

- **Apple Silicon (M1/M2/M3):** `linux/arm64`
- **Intel/AMD:** `linux/amd64`

```bash
make check-architecture  # Verify native builds
```

### Vertex AI (Optional)

Use Google Cloud Vertex AI instead of direct Anthropic API:

```bash
make kind-up LOCAL_VERTEX=true
```

Requires `ANTHROPIC_VERTEX_PROJECT_ID` and `CLOUD_ML_REGION` environment variables and valid `gcloud auth application-default login` credentials.

### Configuration

Create `e2e/.env` to customize the deployment:

```bash
cp e2e/env.example e2e/.env
```

Available options:

```bash
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
IMAGE_BACKEND=quay.io/your-org/vteam_backend:custom-tag
IMAGE_FRONTEND=quay.io/your-org/vteam_frontend:custom-tag
CONTAINER_REGISTRY=quay.io/your-org
```

Apply changes with `make kind-down && make kind-up`.

### Common Commands

```bash
# View logs
kubectl logs -n ambient-code -l app=backend-api -f

# Restart a component
kubectl rollout restart -n ambient-code deployment/backend-api

# Check pod status
kubectl get pods -n ambient-code

# List sessions
kubectl get agenticsessions -A

# Delete cluster
make kind-down
```

### Troubleshooting

**Cluster won't start:**
```bash
docker ps              # Verify Docker is running
make kind-down         # Clean up any leftover state
make kind-up           # Recreate
```

**Pods not starting:**
```bash
kubectl get pods -n ambient-code
kubectl describe pod <pod-name> -n ambient-code
kubectl logs <pod-name> -n ambient-code
```

**Port 8080 already in use:**
```bash
lsof -i :8080          # Find what's using it
```

**Port forwarding stops working (Podman on macOS):**

Podman's gvproxy can become flaky. Switch to Docker:
```bash
make kind-down CONTAINER_ENGINE=podman
make kind-up CONTAINER_ENGINE=docker
```

**Build crashes with segmentation fault:**

Likely cross-compilation. Run `make check-architecture` and ensure native builds are enabled.

**Complete reset:**
```bash
kind delete cluster --name ambient-code
make kind-up
```

---

## For OpenShift Users: CRC

If you need OpenShift-specific features (Routes, BuildConfigs, OAuth), use OpenShift Local (CRC):

```bash
# Install
brew install crc

# Get pull secret from https://console.redhat.com/openshift/create/local

# Start
make dev-start

# Access at https://vteam-frontend-vteam-dev.apps-crc.testing
```

CRC provides a full OpenShift cluster locally. It requires more resources than Kind (minimum 9GB RAM, 4 CPUs) and takes longer to start.

See the [full CRC guide](../developer/local-development/crc.md) for detailed instructions.

---

## Why Kind?

| | Kind | Minikube | CRC |
|---|------|----------|-----|
| **Startup** | ~30 seconds | 2-3 minutes | 5+ minutes |
| **Memory** | Low | Medium | High (9GB+) |
| **CI match** | Yes | No | No |
| **OpenShift features** | No | No | Yes |
| **Recommendation** | **Default choice** | Legacy only | OpenShift dev only |

---

## See Also

- [E2E Testing Guide](../testing/e2e-guide.md)
- [Deployment Guide](deployment.md)
- [kind documentation](https://kind.sigs.k8s.io/)
