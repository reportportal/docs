---
sidebar_position: 1
sidebar_label: Version 26.0.7
last_update:
  date: '2026-10-26'
---

# Version 26.0.7

![Component Update 26 0 7 (1)](https://github.com/user-attachments/assets/5fe40292-b38a-4a11-b3dc-b857e630dbdf)

## 1. Performance improvements:

**Launch merge (DEEP)**  
* Improved `POST /launch/merge` with `mergeStrategyType: "DEEP"` for large launches. Moving test items to the merged launch now uses bulk SQL updates instead of loading each item and updating it row-by-row via Hibernate, and the `merge_launch` database function was rewritten to use set-based operations instead of per-item cursor loops. This cuts deep merge time significantly when combining launches with tens of thousands of items (previously could take tens of minutes to hours).

## 2. Helm Chart Changes 

### New ReportPortal Prime Features

Added support for ReportPortal Prime features in the Helm chart:
* **Test Executions** — Flat searchable test-execution indexing via `prime.testExecutions.*` parameters. [Learn more about Test Executions →](/test-executions/)
* **SCIM Bridge** — Automated user provisioning via `prime.scim.*` parameters. [Learn more about SCIM Bridge →](/external-integrations/UserProvisioning/Scim/)

Both features are controlled by the `prime.enabled` master switch and require private container images. See the [Prime Features Guide](https://github.com/reportportal/kubernetes/wiki/ReportPortal-Prime-Features) for configuration details.

**Ready to upgrade your ReportPortal experience?** [Contact us](https://reportportal.io/contact-us/general/) to learn more about ReportPortal Prime.

### Dependency update

| Helm Chart name | Helm Chart version  | App version    |
| ------------ | ------------------------ | ------ |
| PostgreSQL | `0.21.2` | `18.6` |
| RabbitMQ | `0.21.32` | `4.4.0-management`|
| OpenSearch | `3.9.0`| `3.9.0` |

## 3. Released services and plugins:

| Service Name | Repository               | Tag    |
| ------------ | ------------------------ | ------ |
| API          | reportportal/service-api | 5.15.6 |
| Migrations   | reportportal/migrations  | 5.15.6 |

Rest of services and plugins have the same version as in 26.0.6:

| Service Name  | Repository                         | Tag    |
| ------------- | ---------------------------------- | ------ |
| Authorization | reportportal/service-authorization | 5.15.2 |
| Jobs          | reportportal/service-jobs          | 5.15.3 |
| UI            | reportportal/service-ui            | 5.15.6 |
| Index         | reportportal/service-index         | 5.15.2 |
| Auto Analyzer | reportportal/service-auto-analyzer | 5.15.6 |

| Plugin Name                    | Repository                         | Tag    |
| ------------------------------ | ---------------------------------- | ------ |
| Test Executions                | Premium feature                    | 1.0.5  |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot   | 1.1.4  |
| Import Plugin (JUnit)          | reportportal/plugin-import-junit   | 1.1.2  |
| Jira Cloud                     | reportportal/plugin-bts-jira-cloud | 5.13.10 |
| Gitlab Plugin                  | reportportal/plugin-bts-gitlab     | 5.13.2 |
| Rally                          | reportportal/plugin-bts-rally      | 5.13.1 |
| Monday                         | reportportal/plugin-bts-monday     | 1.1.1  |
| Azure                          | reportportal/plugin-bts-azure      | 5.13.2 |
| Jira                           | reportportal/plugin-bts-jira       | 5.15.0 |
| Telegram                       | reportportal/plugin-telegram       | 1.1.0  |
| Slack                          | reportportal/plugin-slack          | 1.1.2  |
| Sauce Labs                     | reportportal/plugin-saucelabs      | 5.13.1 |
