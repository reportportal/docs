---
sidebar_position: 1
sidebar_label: Version 26.1
last_update:
  date: '2026-11-20'
---

# Version 26.1

![Release 16 1 Thumbnails](https://github.com/user-attachments/assets/e6c7f45f-a104-453b-8d0f-f31551bbc330)

> [!IMPORTANT]
> ## Upgrading Docker Compose from 26.0? Read the migration guide first
> **Do not start 26.1 with the 26.0.7 storage settings left in place.** Storage variables move into `x-storage`, `minio` and `s3` are no longer valid types, and in `multi` mode 26.1 does not read the old per-project buckets. Attachments, avatars, plugins, and the integration salt become unreachable.
>
> - **[Migration from ReportPortal 26.0 to 26.1](https://github.com/reportportal/reportportal/wiki/Migration-v26.1)** covers filesystem storage, S3-compatible storage, and Amazon S3.


## 1. Breaking changes:

**1. Roles and permissions model**  
Project roles **Project Manager**, **Member**, **Customer**, and **Operator** are replaced by a three-level access model: **Instance → Organization → Project**.

| Level | Roles / permissions |
| ----- | ------------------- |
| Instance | **Administrator**, **Regular user** |
| Organization | **Manager**, **Member** |
| Project | **Editor**, **Viewer** |

Automatic migration mapping:

| Before 26.1 | After 26.1 |
| ----------- | ---------- |
| Project Manager / Member / Customer | Organization **Member** + project **Editor** |
| Operator | Organization **Member** + project **Viewer** |

Migration can **increase or reduce** project access. Before upgrade: identify users who should not become Editors, Operators who still need Editor rights, and who should get organization **Manager**. After upgrade: review organization roles and project permissions.

**2. Organizations as a required structural level**  

* **Launches retention policy** — configured at organization level as a **ceiling**; projects can be stricter, not looser  
* **Email server integration** — can be configured at organization level and reused by projects  

Other integrations and **notification rules** remain at **project** level in this release. Open-source instances keep one default organization; multiple organizations are a premium capability.

**3. Authentication packaging**  
**SSO** and **LDAP** are **Enterprise** features in 26.1. **Built-in** and **GitHub** authentication remain part of the **open-source** edition.

**4. Users now sign in with email**  
Login uses the user **email** (instead of the previous username-based login where applicable). Update bookmarks, SSO mappings, and any automation that authenticates with a username.

**5. Platform / deployment**  
* **Java 25** runtime for backend services (was Java 21).  
* **service-authorization** is merged into **service-api** (single API process; update compose/Helm accordingly).  
* File storage moves from **Jclouds** to **Apache OpenDAL** (filesystem / S3). Validate attachments, avatars, and plugin upload after upgrade.
* Database structure rework and related migrations (including attributes / auth integration migration). Plan downtime and backup.  
* RabbitMQ declarations updated for **RabbitMQ 4.3+** compatibility.  
* Custom / third-party **plugins** must be rebuilt against the 26.1 Plugin API (Organizations-aware endpoints, project key usage where applicable).

**6. API clients and integrations**  
Clients, reporters, and automation should use the Organizations-era API surface (organization-scoped resources, **project key** where previously only project name was used).  

For **existing projects**, nothing changes after migration: the current identifier keeps working, and users do not need to update integrations. For **new projects**, use the **project key**. Review plugin command endpoints (e.g. Test Executions) if you call them directly.

**7. Docker Compose**  
Details and step-by-step procedures are in the [migration guide](https://github.com/reportportal/reportportal/blob/26.1/MIGRATION-DOCKER-26.1.md).

* **Storage settings moved to `x-storage`.** In 26.0.7, `DATASTORE_*` lived in `x-environment` (API, Jobs, UAT) and again in `x-analyzer-environment`. 26.1 reads them from `x-storage` only. A value left in the old block is not applied.
* **`DATASTORE_TYPE: minio` and `s3` are no longer valid.** Use `s3-compatible` (MinIO, SeaweedFS, Ceph RGW, and other S3 APIs) or `aws-s3`. `filesystem` is unchanged. The 26.0.7 example spelling `DATASTORE_SECRETSKEY` must be `DATASTORE_SECRETKEY`, or the secret is ignored.
* **The `multi` object layout changed.** 26.0 used one bucket per project (`prj-<id>`). 26.1 keeps those names as folders in the default bucket (`rp-bucket/prj-<id>/`), so existing objects must be copied. Filesystem storage and `RP_FEATURE_FLAGS: singleBucket` need no copy. Docker Compose does not copy objects and does not rewrite paths in PostgreSQL.
* **`DATASTORE_PATH` is for API and Jobs only** (`/data/storage`). The analyzer ignores it. Filesystem models stay at `FILESYSTEM_DEFAULT_PATH` (`/data/storage/analyzer`). `ANALYZER_BINARYSTORE_TYPE` is deprecated in service-auto-analyzer 6.0.0: remove it. The analyzer reads `DATASTORE_TYPE` and logs a warning if the old variable is still set.
* **The commented MinIO secret default is now `rppassword`** (was `miniopassword`). A value set in `STORAGE_SECRETKEY` still wins. Write the password you use today into `DATASTORE_SECRETKEY`.
* **`service-authorization` (UAT) and `service-index` are removed.** Start with `docker compose up -d --remove-orphans`. The token endpoint moves from `/uat/sso/oauth/token` to `/api/sso/oauth/token`.
* **The built-in `superadmin` login becomes `admin@reportportal.internal`.**

## 2. What's new:

**1. Organizations**  
A new level above projects for portfolio-scale administration:

* All Organizations view; drill-down into organization projects  
* Organization Managers see all org projects; Members see only assigned projects  
* Create projects and manage user assignments (org role + Editor/Viewer) in one place  
* Organization settings in 26.1: **Launches retention policy** limit and **Email server** integration shared across projects  
* Notification rules and other integrations stay on the **project** for now  

Portfolio dashboards in the UI are planned for a **later** release; cross-project views are already possible via the ReportPortal **MCP** server.

**2. Test Management System (Beta)**  
> **Beta.** TMS in 26.1 is a **foundational / beta** release. It may contain issues and incomplete edge cases; fixes and polish will continue in upcoming releases. Please share feedback from real usage.

TMS adds a connected workflow for authoring, planning, and **manual** execution inside ReportPortal:

**Test Case Library**  

* Folders and subfolders  
* **Text** and **Steps** test case templates  
* Priority, tags, search and filters  
* Bulk actions; import via supported migration flows  
* Add cases to Test Plans or Manual Launches; change history  

**Test Plans and Milestones**  

* Create / edit / duplicate / delete Test Plans; plan coverage  
* Add or remove library cases (including bulk)  
* Milestones (release, sprint, feature, etc.) with dates and statuses (**Scheduled** → **Testing** → **Completed**)  
* Organize plans under a milestone and track coverage  

**Manual Launches**  
* Launch list with progress; search and filters  
* Execute tests; statuses **Passed** / **Failed** / **Skipped** / **In Progress**  
* Comments as evidence; link failures to configured BTS  

**Connected flow in 26.1**  

1. Build cases in the library → 2. Scope them in test plans → 3. Organize by milestone → 4. Run and track in manual launches  

In 26.1, milestone coverage is closed primarily by **manual** executions. Linking automated and agentic results into the same milestone coverage view is planned as a **next** step.

**3. Identity and access management**  
Simplified roles (see Breaking changes), organization-aware assignment management, and auth-plugin updates aligned with the new model. **SAML** and **LDAP** authentication are **Enterprise** features in 26.1. **Built-in** and **GitHub** authentication remain part of the **open-source** edition.

**4. ReportPortal MCP server**  
AI agents can work with ReportPortal through MCP — including TMS lifecycle actions (create cases, plans, milestones, manual launches) and organization-wide quality signals.

**5. Plugin and product ecosystem updates**  
Organization-aware plugin, **Microsoft Teams** notifications plugin, **Mobitru** (cloud devices) integration.

## 4. Released services and plugins:

| Service Name | Repository | Tag |
| ------------ | ---------- | --- |
| API | reportportal/service-api | 6.0.0 |
| UI | reportportal/service-ui | 6.0.0 |
| Migrations | reportportal/migrations | 6.0.0 |
| Jobs | reportportal/service-jobs | 6.0.0 |
| Auto Analyzer | reportportal/service-auto-analyzer | 6.0.0 |

> **Note:** `service-authorization` and `service-index` are no longer separate deployable services in 26.1 (`service-authorization` is merged into API; `service-index` is removed). Drop both from compose/Helm when upgrading.

| Plugin Name | Repository | Tag |
| ----------- | ---------- | --- |
| Import Plugin (JUnit) | reportportal/plugin-import-junit | 6.0.0 |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot | 6.0.0 |
| Jira | reportportal/plugin-bts-jira | 6.0.0 |
| Jira Cloud | reportportal/plugin-bts-jira-cloud | 6.0.0 |
| Gitlab Plugin | reportportal/plugin-bts-gitlab | 6.0.0 |
| Azure | reportportal/plugin-bts-azure | 6.0.0 |
| Rally | reportportal/plugin-bts-rally | 6.0.0 |
| Monday | reportportal/plugin-bts-monday | 6.0.0 |
| Slack | reportportal/plugin-slack | 6.0.0 |
| Telegram | reportportal/plugin-telegram | 6.0.0 |
| Sauce Labs | reportportal/plugin-saucelabs | 6.0.0 |
| Mobitru | reportportal/plugin-mobitru | 6.0.0 |
| GitHub Auth | reportportal/plugin-auth-github | 6.0.0 |
| LDAP | Premium feature | 6.0.0 |
| SAML | Premium feature | 6.0.0 |
| Teams | Premium feature | 6.0.0 |
| Quality Gates | Premium feature | 6.0.0 |
| Test Executions | Premium feature | 6.0.0 |
| Organizations | Premium feature | 6.0.0 |

---

### Upgrade checklist (admins)

* [ ] Backup DB and storage  
* [ ] Read role migration mapping; plan Manager / Editor / Viewer adjustments  
* [ ] Drop standalone `service-authorization` and `service-index`; point traffic to API
* [ ] Confirm Java 25-compatible images / runtime  
* [ ] Read the [Docker Compose migration guide](https://github.com/reportportal/reportportal/blob/26.1/MIGRATION-DOCKER-26.1.md) before `docker compose up`
* [ ] Move `DATASTORE_*` into `x-storage` and remove `ANALYZER_BINARYSTORE_TYPE`
* [ ] For `multi` object storage, copy project buckets into folders in the default bucket before startup
* [ ] Re-validate S3/MinIO/filesystem after the OpenDAL move
* [ ] Sign in as `admin@reportportal.internal`
* [ ] Rebuild/upgrade all plugins to 26.1-compatible builds  
* [ ] Smoke-test login, reporting, attachments, orgs, and TMS (if used)  

