---
sidebar_position: 3
sidebar_label: Deploy with Docker
description: Make your test automation reporting more portable. Reduce the risk of configuration issues with your test reporting tool using Docker.
---

# Deploy with Docker

## Installation Guide for ReportPortal

This concise, step-by-step guide will help you deploy ReportPortal using Docker Compose (version ≥2.2). It covers prerequisites, configuration, deployment, and verification to ensure anyone can set up the application quickly.

### Prerequisites

1. **Operating System**

    * **Linux** (Ubuntu 20.04+ or equivalent).
    * **macOS** (Apple Silicon and Intel-based supported).
    * **Windows** (64-bit Windows 11 Pro or higher)

2. **Docker & Docker Compose**. [Install the latest Docker Engine](https://docs.docker.com/engine/install/) and Docker Compose plugin

3. **System Resources**

    * At least 2 CPU cores
    * Minimum 6GB RAM allocated to Docker
    * Swap or storage: ≥20GB free space for Docker images and data

:::note
For production, deploy on a Linux-based server or cloud instance. Adjust resource limits according to expected load.
[See advanced deployment recommendations](/installation-steps/HardwareRequirements).
:::

### Step 1: Prepare the Environment

1. **Verify Docker & Compose Installation**

   ```bash
   docker --version
   docker compose version
   ```

2. **Adjust Docker Resources (Desktop Users)**

    * Open Docker Desktop settings.
    * Allocate at least 2 CPUs and 6GB RAM under **Resources**.

### Step 2: Obtain the Docker Compose File

1. **Download the Official `docker-compose.yml`**

   ```bash
   curl -LO https://raw.githubusercontent.com/reportportal/reportportal/master/docker-compose.yml
   ```

2. **Review and Customize Environment Variables**

    * Open `docker-compose.yml` in your editor.
    * Locate the `RP_INITIAL_ADMIN_PASSWORD` variable under the `uat-service` (or equivalent) section.

      ```yaml
      services:
        uat:
          environment:
            RP_INITIAL_ADMIN_PASSWORD: "ChangeMe123"
      ```
    * Replace `ChangeMe123` with a secure password of your choice.
    * (Optional) Adjust other variables such as database credentials or ports if needed.

### Step 3: Deploy ReportPortal

1. **Launch Containers**

   ```bash
   docker compose -p reportportal up -d --force-recreate
   ```

    * `-p reportportal`: Prefixes container names with `reportportal_`.
    * `up -d`: Creates and starts services in detached mode.
    * `--force-recreate`: Ensures containers are recreated, applying any changes.

2. **Monitor Startup Logs**

    * View combined logs:

      ```bash
      docker compose logs -f
      ```

    * View logs for a specific container:

      ```bash
      docker logs reportportal_uat
      ```

3. **Cleanup**

    * To stop and remove all ReportPortal containers:

      ```bash
      docker compose down --volumes --remove-orphans
      ```

## Tips and Best Practices

* **Use External Volumes**: Mount host volumes for data persistence (`/var/lib/reportportal`).
* **Secure Secrets**: Store sensitive environment variables (e.g., DB passwords) in a `.env` file and reference them in `docker-compose.yml`.
* **Use Docker Networks**: Isolate ReportPortal on its own network for enhanced security.
* **Scale Services**: For high availability, consider using [Kubernetes](https://github.com/reportportal/kubernetes) with multiple replicas.
* **Backups**: Schedule periodic backups of the PostgreSQL database and Storage. [How to backup ReportPortal guide](/installation-steps-advanced/BackupRestoreGuide/)
