---
sidebar_position: 5
sidebar_label: Deploy with Kubernetes
---

# Deploy with Kubernetes

## Prerequisites

:::note
The minimal requirements for a ReportPortal 1-node solution are 2 CPUs and 6Gi of memory.
:::
* Kubernetes v1.26+
* Helm Package Manager v3.4+

## Installing the Chart

Add the official ReportPortal Helm Chart repository:

```bash
helm repo add reportportal https://reportportal.io/kubernetes && helm repo update reportportal
```

Install the chart:

```bash
helm install my-release --set uat.superadminInitPasswd.password="MyPassword" reportportal/reportportal
```
:::note
Upon the initial installation and the first login of the SuperAdmin, they will be required to create a unique initial password, distinct from the default password provided in the ReportPortal installation documentation. Failure to do so will result in the Auth service not starting.
:::
## Uninstalling the Chart

```bash
helm uninstall my-release 
```

## Configuration

### Install the chart with dependencies

ReportPortal relies on several essential dependencies, without which it cannot function properly. It is feasible to substitute these dependencies with available On-Premise or Cloud alternatives.

The following table lists the configurable parameters of the chart and their default values

|Parameter|Description|Default|
|-|-|-|
|`postgresql.install`|Allow PostgreSQL Bitnami Helm Chart to be installed as a dependency|`true`|
|`rabbitmq.install`|Allow RabbitmQ Helm Bitnami Chart to be installed as a dependency|`true`|
|`opensearch.install`|Allow Open Search Helm Chart to be installed as a dependency|`true`|
|`minio.install`|Allow MinIO Helm Chart to be installed as a dependency|`true`|

These dependencies are integrated into the distribution by default. To deactivate them, specify each parameter using the --set key=value[,key=value] argument to helm install. For example:

```bash
helm install my-release \
  --set postgresql.install=false \
  --set database.endpoint=my-postgresql.host.local \
  --set database.port=5432 \
  --set database.user=my-user \
  --set database.password=my-password \
  reportportal/reportportal
```
:::note
If you disable install dependencies, you must provide new values (e.g., host, port, username, etc) for your predeployed dependencies.
:::
All configuration variables are presented in the [value.yaml](https://github.com/reportportal/kubernetes/blob/master/values.yaml) file.

### Install from sources

For fetching chart dependencies, use the command:

```bash
helm dependency build .
```

> This command fetches all the dependencies [required](https://github.com/reportportal/kubernetes/blob/master/Chart.yaml) by the chart.

To install the chart directly from local sources, use:


```bash
helm install my-release --set uat.superadminInitPasswd.password="MyPassword" ./reportportal
```

### Install specific version

To search for available versions of a chart, use:

```bash
helm search repo reportportal --versions
```

To install a specific version of a chart, use:

```bash
helm install my-release \
  --set uat.superadminInitPasswd.password="MyPassword" \
  reportportal/reportportal \
  --version 23.2
```

