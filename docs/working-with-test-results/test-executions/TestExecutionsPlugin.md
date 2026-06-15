---
sidebar_position: 1
sidebar_label: Test executions plugin
description: Learn how to install, enable, upgrade and uninstall ReportPortal Test Executions plugin.
---

# Test executions plugin

The Test Executions is our [premium feature](/getting-started/features/TestExecutions).

It introduces a flat, searchable view of test cases with advanced filtering and customization — offering a faster, clearer way to explore test execution data beyond the traditional launch view.

## Deploy logstash

A Helm chart for deploying Logstash with JDBC input (PostgreSQL) and OpenSearch output for ReportPortal test execution indexing.

### Features

- **JDBC Input**: Polls PostgreSQL for test execution data
- **OpenSearch Output**: Indexes data to OpenSearch/Elasticsearch
- **Persistent State**: JDBC checkpoint files survive pod restarts
- **Health Checks**: Liveness, readiness, and startup probes via Logstash monitoring API
- **Flexible Credentials**: Plain text values or existing Kubernetes secrets
- **Optional Log4j2 Config**: Custom logging configuration via ConfigMap

### Prerequisites

- Kubernetes 1.34
- Helm 3.0+
- PostgreSQL database with ReportPortal schema
- OpenSearch/Elasticsearch cluster

In addition, we also support docker-compose.

### Installation

```bash
# Install with default values
helm install logstash ./helm/logstash -n <namespace>

# Install with custom values file
helm install logstash ./helm/logstash -n <namespace> -f values-production.yaml

# Install with inline overrides
helm install logstash ./helm/logstash -n <namespace> \
  --set database.endpoint=postgres.example.com \
  --set database.user=myuser \
  --set database.password=mypassword \
  --set database.dbName=reportportal \
  --set searchengine.endpoint=opensearch.example.com
```

## Upload plugin

The Test Executions plugin is a premium ReportPortal feature. It introduces a flat, searchable view of test cases with advanced filtering and customization — offering a faster, clearer way to explore test execution data beyond the traditional launch view.

**Upload plugin**

1. Log in to ReportPortal as Admin.
2. Navigate to the **Plugins** page.
3. Click the **Upload** button at the top of the page.
4. Add the `.jar` file and click the **Upload** button.

## Upgrading

```bash
helm upgrade logstash ./helm/logstash -n <namespace> -f values.yaml
```

## Uninstalling

```bash
helm uninstall logstash -n <namespace>
```

:::note
By default, the PVC has `helm.sh/resource-policy: keep` annotation and will NOT be deleted on uninstall to preserve JDBC state.
:::
