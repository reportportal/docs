---
sidebar_label: Quick Start Guide for Google Cloud Platform GKE
description: Deploy ReportPortal on Google Cloud Platform GKE for scalable test automation reporting tools with Kubernetes orchestration.
---

# Quick Start Guide for Google Cloud Platform GKE

## Prerequisites

Before you begin, you need to have a Google Cloud account, a project and install the following
tools:

- [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl) 1.28 or later
- [Helm](https://helm.sh/docs/intro/install/) 3.11 or later
- [google-cloud-cli](https://cloud.google.com/sdk/docs/install-sdk)
- [gke-gcloud-auth-plugin](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_plugin)

:::note
For some operation systems we recommend install `google-cloud-sdk` package instead of `google-cloud-cli`.
:::

## Initialize the gcloud CLI

[Perform initial setup tasks](https://cloud.google.com/sdk/docs/initializing) and set up your default project:

```bash
gcloud init
```

## Set up Environment Variables

Set up environment variables:

```bash
export REPO_LOCATION=us-central1
export CLUSTER_LOCATION=us-central1-a
export PROJECT_ID={your_project_id}
export CLUSTER_NAME={reportportal_cluster_name}
export REPO_NAME={reportportal_helm_repo_name}
export RELEASE_NAME={reportportal_release_name}
export VERSION={current_chart_version}
export SUPERADMIN_PASSWORD={your_superadmin_password}
```

:::note
Here and below we use `us-central1` region as a location for GKE cluster.<br />
However, you can use any other region.
:::

## Set up gcloud credential helper

If you have Docker, you can use the Docker credential helper to authenticate to Artifact Registry.

Just perform the following commands:

```bash
gcloud auth login
gcloud auth configure-docker ${REPO_LOCATION}-docker.pkg.dev
```

You can find more information about [gcloud credential helper](https://cloud.google.com/artifact-registry/docs/docker/authentication#gcloud-helper).

## Adjust Google Cloud IAM

Installation of ReportPortal requires setting up access to your GKE cluster for creating
a service account in GKE and providing permissions for some services to access Kubernetes API.

For adjusting access, you can do it using [both Identity and Access Management (IAM)
and Kubernetes RBAC](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control#iam-interaction).

You can use [Predefined GKE Roles](https://cloud.google.com/kubernetes-engine/docs/how-to/iam#predefined) and update
your account role. To set a service account on nodes, you must also have the Service Account User role (roles/iam.serviceAccountUser).

:::important
We recommend to create a separate [IAM Service Account](https://cloud.google.com/iam/docs/service-accounts-create) for working with GKE cluster.
:::

## Create a GKE cluster

:::important
All GKE clusters are created as public clusters by default.
:::

You can create [two types](https://cloud.google.com/kubernetes-engine/docs/concepts/types-of-clusters#modes)
of GKE clusters:

- [Autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [Standard](https://cloud.google.com/kubernetes-engine/docs/concepts/choose-cluster-mode#why-standard)

:::note
We recommend to use Autopilot mode.<br />
It is a managed Kubernetes environment that reduces the operational cost.
:::

### Create a cluster in Autopilot mode

It's pretty simple to create a cluster in Autopilot mode:

```bash
gcloud container clusters create-auto ${CLUSTER_NAME} \
  --location=${REPO_LOCATION}
```

:::note
You can use the Google Filestore CSI driver for the Autopilot cluster.<br />
It is enabled by default.<br />
Minimal storage size for Google Filestore is 1 TB.<br />
Check the [pricing](https://cloud.google.com/filestore/pricing).
:::

More information about [creating a cluster in Autopilot mode](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-an-autopilot-cluster).

### Create a cluster in Standard mode

For a standard cluster you need to specify a machine type and a number of nodes.

ReportPortal requires at least 3 nodes with 4 vCPU and 6 GB memory for each in
the Kubernetes with infrastructure dependencies.
We recommend using `custom-4-6144` machine type with 4 vCPU and 6 GB memory
as a minimal configuration.

If you want avoid using MinIO or Google Cloud Storage, you can use a filesystem storage type
and Google Filestore as a storage class.

For this, you need to enable the `Google Filestore CSI driver` when creating a cluster:

```bash
export MACHINE_TYPE=custom-4-6144

gcloud container clusters create ${CLUSTER_NAME} \
  --addons=GcpFilestoreCsiDriver \
  --zone=${ZONE} \
  --machine-type=${MACHINE_TYPE}
```

or you can enable it after the cluster creation:

```bash
gcloud container clusters update ${CLUSTER_NAME} \
  --update-addons=GcpFilestoreCsiDriver=ENABLED
```

:::note
Minimal storage size for Google Filestore is 1 TB.<br />
Check the [pricing](https://cloud.google.com/filestore/pricing).
:::

More information about creating a [cluster in Standard mode](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster#gcloud).

### Get cluster credentials for kubectl

```bash
gcloud container clusters get-credentials ${CLUSTER_NAME} \
  --location=${CLUSTER_LOCATION}
```

### Verify the cluster mode

You can verify the cluster:

```bash
gcloud container clusters describe ${CLUSTER_NAME} \
  --location=${CLUSTER_LOCATION}
```

## Prepare Helm package for installation

At the current moment, you can install ReportPortal on GKE cluster via Helm chart only from
develop branch.

### Create a repository

Create a repository in Artifact Registry for ReportPortal Helm charts:

```bash
gcloud artifacts repositories create ${REPO_NAME} --repository-format=docker \
  --location=${REPO_LOCATION} --description="ReportPortal Helm repository"
```

More information about [Store Helm charts in the Artifact Registry](https://cloud.google.com/artifact-registry/docs/helm/store-helm-charts).

Verify that the repository was created:

```bash
gcloud artifacts repositories list
```

### Authenticate with the repository

```bash
gcloud auth print-access-token | helm registry login -u oauth2accesstoken \
  --password-stdin https://${REPO_LOCATION}-docker.pkg.dev
```

### Build and push Helm chart

Add GitHub repository on your local machine:

```bash
git clone https://github.com/reportportal/kubernetes.git
```

Build and push the Helm chart to Artifact Registry using actual helm chart version
and your project id:

```bash
cd kubernetes/reportportal
helm dependency update
helm package .
helm push reportportal-${VERSION}.tgz oci://${REPO_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}
```

## Install ReportPortal from Artifact Registry

### Install Helm chart on GKE Autopilot Cluster

By default, ReportPortal Helm chart install with infrastructure dependencies in GKE Autopilot Cluster:

- PostgreSQL
- OpenSearch
- RabbitMQ
- MinIO

You can disable an installation of some components via Helm chart values, but you have to provide
new credentials for your standalone components.

More information about [Installing the chart with dependencies](https://github.com/reportportal/kubernetes#install-the-chart-with-dependencies).

For installing ReportPortal on GKE Autopilot Cluster, you need to set the:

- ingress controller as a `gce`
- superadmin password
- resources requests for api, uat, and analyzer services

```bash
helm install \
  --set ingress.class="gce" \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  --set uat.resources.requests.memory="1Gi" \
  --set serviceapi.resources.requests.cpu="1000m" \
  --set serviceapi.resources.requests.memory="2Gi" \
  --set serviceanalyzer.resources.requests.memory="1Gi" \
  ${RELEASE_NAME} \
  oci://${REPO_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/reportportal \
  --version ${VERSION}
```

If you want to use Google Filestore instead of MinIO, you need to set
the `storage.type` to `filesystem`, `storage.volume.storageClassName`
to `standard-rwx`, and disable MinIO installation:

```bash
helm install \
  --set ingress.class="gce" \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  --set uat.resources.requests.memory="1Gi" \
  --set serviceapi.resources.requests.cpu="1000m" \
  --set serviceapi.resources.requests.memory="2Gi" \
  --set serviceanalyzer.resources.requests.memory="1Gi" \
  --set storage.type="filesystem" \
  --set storage.volume.storageClassName="standard-rwx" \
  --set minio.install=false \
  ${RELEASE_NAME} \
  oci://${REPO_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/reportportal \
  --version ${VERSION}
```

:::note
Minimal storage size for Google Filestore is 1 TB.<br />
Check the [pricing](https://cloud.google.com/filestore/pricing).
:::
> 
### Install Helm chart on GKE Standard Cluster

For installing ReportPortal on GKE Standard Cluster you need to set:

- ingress controller as a `gce`
- superadmin password

```bash
helm install \
  --set ingress.class="gce" \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  ${RELEASE_NAME} \
  oci://${REPO_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/reportportal \
  --version ${VERSION}
```

If you want to use Google Filestore instead of MinIO, you need to set
the `storage.type` to `filesystem`, `storage.volume.storageClassName`
to `standard-rwx`, and disable MinIO installation:

```bash
helm install \
  --set ingress.class="gce" \
  --set uat.superadminInitPasswd.password=${SUPERADMIN_PASSWORD} \
  --set storage.type="filesystem" \
  --set storage.volume.storageClassName="standard-rwx" \
  --set minio.install=false \
  ${RELEASE_NAME} \
  oci://${REPO_LOCATION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/reportportal \
  --version ${VERSION}
```

:::note
Minimal storage size for Google Filestore is 1 TB.<br />
Check the [pricing](https://cloud.google.com/filestore/pricing).
:::
 
## Ingress configuration

You can add custom gce ingress annotations via `ingress.annotations.gce` parameter:

```bash
helm install \
...
  --set-json='ingress.annotations.gce={"key1":"value1","key2":"value2"}'
...
```

If you have some domain name, set this FQDN to `ingress.hosts`:

```bash
helm install \
...
  --set ingress.hosts[0].reportportal.k8.com
...
```

## Certificate Management

### Google-managed SSL certificates

:::note
This is recommended approach for using SSL certificates in GKE.
:::

You can use Google-managed SSL certificates for your domain name:

```bash
helm install \
...
  --set ingress.tls.certificate.gcpManaged=true
  --set ingress.hosts\[0\]="example.com"
...

```

### Cert-Manager

You can use [Cert-Manager](https://github.com/reportportal/kubernetes/blob/master/docs/cert-manager-config.md) to manage certificates for your domain name.

## Clean up

To delete the cluster:

```bash
gcloud container clusters delete ${CLUSTER_NAME} --location=${CLUSTER_LOCATION}
```

To delete the artifacts repository:

```bash
gcloud artifacts repositories delete ${CLUSTER_NAME} --location=${REPO_LOCATION}
```

### Disable HTTP Load Balancing

If you want to disable HTTP Load Balancing, you can do it after the certificate
is attached to the Ingress resource:

```bash
kubectl annotate ingress ${APP_NAME}-gateway-ingress kubernetes.io/ingress.allow-http: "false"
```
