---
sidebar_position: 1
sidebar_label: Version 26.0.8
last_update:
  date: '2026-11-26'
---

# Version 26.0.8

![image (32)](https://github.com/user-attachments/assets/19fb9508-383d-4884-ad0b-34f9aeec60e0)

## 1. CVE addressed:

[CVE-2026-114938](https://explore.alas.aws.amazon.com/CVE-2026-114938.html) (Java4Shell) — updated Amazon Corretto base images for API, Jobs, and Authorization services.<br />
[CVE-2026-97205](https://nvd.nist.gov/vuln/detail/CVE-2026-97205), [CVE-2026-15176](https://nvd.nist.gov/vuln/detail/CVE-2026-15176), [CVE-2026-93479](https://nvd.nist.gov/vuln/detail/CVE-2026-93479) — updated nginx base image to **1.30.6** in service-ui.


## 2. Released services and plugins:

| Service Name | Repository | Tag |
| ------------ | ---------- | --- |
| API | reportportal/service-api | 5.15.7 |
| UI | reportportal/service-ui | 5.15.7 |
| Jobs | reportportal/service-jobs | 5.15.4 |
| Authorization | reportportal/service-authorization | 5.15.3 |

Rest of services and plugins have the same version as in 26.0.7:

| Service Name | Repository | Tag |
| ------------ | ---------- | --- |
| Migrations | reportportal/migrations | 5.15.6 |
| Index | reportportal/service-index | 5.15.2 |
| Auto Analyzer | reportportal/service-auto-analyzer | 5.15.6 |

| Plugin Name | Repository | Tag |
| ----------- | ---------- | --- |
| Test Executions | Premium feature | 1.0.5 |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot | 1.1.4 |
| Import Plugin (JUnit) | reportportal/plugin-import-junit | 1.1.2 |
| Jira Cloud | reportportal/plugin-bts-jira-cloud | 5.13.10 |
| Gitlab Plugin | reportportal/plugin-bts-gitlab | 5.13.2 |
| Rally | reportportal/plugin-bts-rally | 5.13.1 |
| Monday | reportportal/plugin-bts-monday | 1.1.1 |
| Azure | reportportal/plugin-bts-azure | 5.13.2 |
| Jira | reportportal/plugin-bts-jira | 5.15.0 |
| Telegram | reportportal/plugin-telegram | 1.1.0 |
| Slack | reportportal/plugin-slack | 1.1.2 |
| Sauce Labs | reportportal/plugin-saucelabs | 5.13.1 |
