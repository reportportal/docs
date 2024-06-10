---
sidebar_position: 7
sidebar_label: Deploy with Minikube
---

## Prerequisites

- [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Helm](https://helm.sh/docs/intro/install/)

## Installation

### Overview

In this guide, we will install ReportPortal on Minikube using Helm with
ReportPortal's services and the following dependencies:

- PostgreSQL
- OpenSearch
- RabbitMQ

Instead of Minio, we will use a Persistent Volume as a filesystem storage.

### Start Minikube

```bash
minikube start --cpus 4 --memory 8192 --addons ingress
```

### Set up hostnames

Add the following line to your `/etc/hosts` file:

```bash
echo "$(minikube ip) minikube.local" | sudo tee -a /etc/hosts
```

### Install ReportPortal

#### Install from Helm repo

```bash
helm repo add reportportal https://reportportal.io/kubernetes && helm repo update reportportal
```

```bash
export SUPERADMIN_PASSWORD=superadmin

helm install reportportal \
  reportportal/reportportal \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  --set storage.type=filesystem \
  --set minio.install=false
```

If you want to use Minio as a storage:

```bash
export SUPERADMIN_PASSWORD=superadmin

helm install reportportal \
  reportportal/reportportal \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD}
```

#### Install from GitHub repo

Call the following commands from the downloaded
[kubernetes](https://github.com/reportportal/kubernetes/) repository.

```bash
# Download the chart dependencies
helm dependency build ./reportportal 
```

```bash
# Install ReportPortal from ./reportportal/Chart.yaml
export SUPERADMIN_PASSWORD=superadmin

helm install reportportal \
  ./reportportal \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  --set storage.type=filesystem \
  --set minio.install=false
```

If you want to use Minio as a storage:

```bash
helm install reportportal \
  ./reportportal \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD}
```

### Access ReportPortal

Open your browser and navigate to [http://reportportal.local](http://minikube.local).

## Clean up

```bash
helm uninstall reportportal
```

```bash
minikube stop && minikube delete
```
