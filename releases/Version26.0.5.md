---
sidebar_position: 1
sidebar_label: Version 26.0.5
last_update:
  date: '2026-08-14'
---

# Version 26.0.5

![Component Update 26 0 5](https://github.com/user-attachments/assets/a6ca3552-ed26-4bb2-a19a-874197ebd6f6)

## ⚠️ Breaking Changes 

- **PostgreSQL:** Switched to official `postgres:18.4` image. Direct volume re-use from older/Bitnami versions is **not supported** due to major PostgreSQL version and data directory layout changes.
- **RabbitMQ:** Switched to `rabbitmq:4.3.4-management` with required configuration mounts (`deprecated_features.permit.queue_master_locator = true`).
- **OpenSearch:** Upgraded to `opensearchproject/opensearch:3.8.0`.
- **Analyzer** non-root image. Added an init container and a new volume configuration section.

Follow the [Migration guide](https://github.com/reportportal/reportportal/wiki/Migration-v26) to ensure a smooth transition from Bitnami to CloudPirates dependencies

## 1. What's new:

**Robot Framework import: structured tag attributes**  
The Robot Framework import plugin now supports an optional `key` attribute on `<tag>` elements, so tags are imported as proper key–value attributes in ReportPortal (useful for tools that expect separate keys and values). Existing plain tags keep the previous behaviour; blank tag values are skipped.
A special thank you to [@Pdangova](https://github.com/Pdangova) for the valuable contribution to key-value tag attribute support in the Robot Framework import plugin!

## 2. Performance improvements:

**Log queries under heavy load**  
Reduced database overload caused by high `LWLock:BufferMapping` contention on the `public.log` table when loading nested test item logs (large launches / high concurrency).

## 3. Bugs fixed:

1. **Jira Server integration** — Increased the **BTS password / API Token** field limit from 55 to **512** characters so long API tokens can be saved ([GitHub #5563](https://github.com/reportportal/service-ui/issues/5563)).

## 4. Released services and plugins:

| Service Name  | Repository                         | Tag    |
| ------------- | ---------------------------------- | ------ |
| API           | reportportal/service-api           | 5.15.4 |
| Migrations    | reportportal/migrations            | 5.15.4 |
| UI            | reportportal/service-ui            | 5.15.5  |

| Plugin Name                    | Repository                         | Tag  |
| ------------------------------ | ---------------------------------- | ---- |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot   | 1.1.3  |

Rest of services and plugins have the same version as in 26.0.4:

| Service Name  | Repository                         | Tag    |
| ------------- | ---------------------------------- | ------ |
| Authorization | reportportal/service-authorization | 5.15.1 |
| Jobs          | reportportal/service-jobs          | 5.15.2 |
| Index         | reportportal/service-index         | 5.15.1 |
| Auto Analyzer | reportportal/service-auto-analyzer | 5.15.5 |

| Plugin Name     | Repository      | Tag   |
| --------------- | --------------- | ----- |
| Test Executions | Premium feature | 1.0.4 |
| Jira Cloud      | reportportal/plugin-bts-jira-cloud | 5.15.10 |
| Gitlab Plugin   | reportportal/plugin-bts-gitlab     | 5.13.2  |
| Rally           | reportportal/plugin-bts-rally      | 5.13.1  |
| Monday          | reportportal/plugin-bts-monday     | 1.1.1   |
| Azure           | reportportal/plugin-bts-azure      | 5.13.2  |
| Jira            | reportportal/plugin-bts-jira       | 5.15.0  |
| Import Plugin (JUnit) | reportportal/plugin-import-robot | 1.1.0 |
| Telegram        | reportportal/plugin-telegram       | 1.1.0   |
| Slack           | reportportal/plugin-slack          | 1.1.2   |
| Sauce Labs      | reportportal/plugin-saucelabs      | 5.13.1  |

---
