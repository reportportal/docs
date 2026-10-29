---
sidebar_position: 2
sidebar_label: Version 26.0.6
last_update:
  date: '2026-10-13'
---

# Version 26.0.6

![Component Update 26 0 6](https://github.com/user-attachments/assets/32f8a1cf-d836-4ab1-b6c6-2836ac5e9166)

## 1. What's new:

**Import into an existing launch (API)**  
CI/automation can import JUnit or Robot Framework results into an existing launch by **UUID** — repeatedly while the launch is **IN_PROGRESS**, and also after it is finished (finished-launch import does not change the launch finish time). Launch name, description, and attributes set at start are preserved. **No UI changes** for this flow.

## 2. Performance improvements:

**InterruptBrokenLaunchesJob**<br />
Reworked in service-api so each broken launch is interrupted in its own transaction instead of one long sweep transaction. This reduces DB lock contention and API replica CPU spikes when many broken launches accumulate ([GitHub #2702](https://github.com/reportportal/reportportal/issues/2702)).

## 3. Small improvements:

**LDAP field limits**  
Increased **User search filter** and **Group search filter** limits to **1024** characters ([GitHub #2698](https://github.com/reportportal/reportportal/issues/2698)).

**Export engine**  
Upgraded JasperReports to **7.0.8** (launch / user / project exports).

## 4. Bugs fixed:

1. **Launches** — Fixed delete failure (`TransientObjectException`) for specific launches.
2. **SAML** — Hardened SAML XML parsing against DOCTYPE / XXE-style payloads.
3. **Launches filters** — Fixed incorrect **Start time** date range when the browser had been opened with a different system date ([GitHub #2700](https://github.com/reportportal/reportportal/issues/2700)).
4. **Test Executions** — Fixed Custom Attribute column creation in **Customize Columns** (suggestion selection / accept).
5. **Activity** — `deleteExpiredUsers` now records a user-deleted activity event.

## 5. CVE addressed:

### Service-api

[CVE-2026-54512](https://nvd.nist.gov/vuln/detail/CVE-2026-54512), [CVE-2026-54513](https://nvd.nist.gov/vuln/detail/CVE-2026-54513), [CVE-2026-54515](https://nvd.nist.gov/vuln/detail/CVE-2026-54515), [CVE-2026-68494](https://nvd.nist.gov/vuln/detail/CVE-2026-68494), [CVE-2026-77310](https://nvd.nist.gov/vuln/detail/CVE-2026-77310),  
[CVE-2026-47838](https://nvd.nist.gov/vuln/detail/CVE-2026-47838), [CVE-2026-13006](https://nvd.nist.gov/vuln/detail/CVE-2026-13006), [CVE-2026-54291](https://nvd.nist.gov/vuln/detail/CVE-2026-54291), [CVE-2026-9563](https://nvd.nist.gov/vuln/detail/CVE-2026-9563), [CVE-2026-54428](https://nvd.nist.gov/vuln/detail/CVE-2026-54428),  
[CVE-2026-71290](https://nvd.nist.gov/vuln/detail/CVE-2026-71290), [CVE-2026-68525](https://nvd.nist.gov/vuln/detail/CVE-2026-68525), [CVE-2026-8763](https://nvd.nist.gov/vuln/detail/CVE-2026-8763)

### Service-authorization

[CVE-2026-59901](https://nvd.nist.gov/vuln/detail/CVE-2026-59901), [CVE-2026-75595](https://nvd.nist.gov/vuln/detail/CVE-2026-75595), [CVE-2026-56819](https://nvd.nist.gov/vuln/detail/CVE-2026-56819), [CVE-2026-71290](https://nvd.nist.gov/vuln/detail/CVE-2026-71290),  
[CVE-2026-53434](https://nvd.nist.gov/vuln/detail/CVE-2026-53434), [CVE-2026-55955](https://nvd.nist.gov/vuln/detail/CVE-2026-55955), [CVE-2026-8763](https://nvd.nist.gov/vuln/detail/CVE-2026-8763), [CVE-2026-54291](https://nvd.nist.gov/vuln/detail/CVE-2026-54291),  
[CVE-2026-9828](https://nvd.nist.gov/vuln/detail/CVE-2026-9828), [CVE-2026-54512](https://nvd.nist.gov/vuln/detail/CVE-2026-54512), [CVE-2026-54513](https://nvd.nist.gov/vuln/detail/CVE-2026-54513), [CVE-2026-68494](https://nvd.nist.gov/vuln/detail/CVE-2026-68494)

### Service-jobs

[CVE-2026-9828](https://nvd.nist.gov/vuln/detail/CVE-2026-9828), [CVE-2026-54512](https://nvd.nist.gov/vuln/detail/CVE-2026-54512), [CVE-2026-54513](https://nvd.nist.gov/vuln/detail/CVE-2026-54513), [CVE-2026-68494](https://nvd.nist.gov/vuln/detail/CVE-2026-68494),  
[CVE-2026-59901](https://nvd.nist.gov/vuln/detail/CVE-2026-59901), [CVE-2026-75595](https://nvd.nist.gov/vuln/detail/CVE-2026-75595), [CVE-2026-56819](https://nvd.nist.gov/vuln/detail/CVE-2026-56819), [CVE-2026-41850](https://nvd.nist.gov/vuln/detail/CVE-2026-41850), [CVE-2026-41851](https://nvd.nist.gov/vuln/detail/CVE-2026-41851),  
[CVE-2026-53434](https://nvd.nist.gov/vuln/detail/CVE-2026-53434), [CVE-2026-55955](https://nvd.nist.gov/vuln/detail/CVE-2026-55955), [CVE-2026-54291](https://nvd.nist.gov/vuln/detail/CVE-2026-54291)

### Migrations

[CVE-2026-14456](https://nvd.nist.gov/vuln/detail/CVE-2026-14456), [CVE-2026-14457](https://nvd.nist.gov/vuln/detail/CVE-2026-14457), [CVE-2026-54874](https://nvd.nist.gov/vuln/detail/CVE-2026-54874), [CVE-2026-63075](https://nvd.nist.gov/vuln/detail/CVE-2026-63075), [CVE-2026-18798](https://nvd.nist.gov/vuln/detail/CVE-2026-18798),  
[CVE-2026-63073](https://nvd.nist.gov/vuln/detail/CVE-2026-63073), [CVE-2026-75803](https://nvd.nist.gov/vuln/detail/CVE-2026-75803), [CVE-2026-63074](https://nvd.nist.gov/vuln/detail/CVE-2026-63074), [CVE-2026-63072](https://nvd.nist.gov/vuln/detail/CVE-2026-63072), [CVE-2026-63076](https://nvd.nist.gov/vuln/detail/CVE-2026-63076)

### Service-ui

[CVE-2025-62718](https://nvd.nist.gov/vuln/detail/CVE-2025-62718), [CVE-2026-40175](https://nvd.nist.gov/vuln/detail/CVE-2026-40175), [CVE-2026-42033](https://nvd.nist.gov/vuln/detail/CVE-2026-42033), [CVE-2026-42034](https://nvd.nist.gov/vuln/detail/CVE-2026-42034), [CVE-2026-42035](https://nvd.nist.gov/vuln/detail/CVE-2026-42035), [CVE-2026-42036](https://nvd.nist.gov/vuln/detail/CVE-2026-42036),  
[CVE-2026-42037](https://nvd.nist.gov/vuln/detail/CVE-2026-42037), [CVE-2026-42038](https://nvd.nist.gov/vuln/detail/CVE-2026-42038), [CVE-2026-42039](https://nvd.nist.gov/vuln/detail/CVE-2026-42039), [CVE-2026-42040](https://nvd.nist.gov/vuln/detail/CVE-2026-42040), [CVE-2026-42041](https://nvd.nist.gov/vuln/detail/CVE-2026-42041), [CVE-2026-42042](https://nvd.nist.gov/vuln/detail/CVE-2026-42042),  
[CVE-2026-42044](https://nvd.nist.gov/vuln/detail/CVE-2026-42044), [CVE-2026-42264](https://nvd.nist.gov/vuln/detail/CVE-2026-42264), [CVE-2026-44486](https://nvd.nist.gov/vuln/detail/CVE-2026-44486), [CVE-2026-44487](https://nvd.nist.gov/vuln/detail/CVE-2026-44487), [CVE-2026-44488](https://nvd.nist.gov/vuln/detail/CVE-2026-44488), [CVE-2026-44490](https://nvd.nist.gov/vuln/detail/CVE-2026-44490),  
[CVE-2026-44492](https://nvd.nist.gov/vuln/detail/CVE-2026-44492), [CVE-2026-44494](https://nvd.nist.gov/vuln/detail/CVE-2026-44494), [CVE-2026-44495](https://nvd.nist.gov/vuln/detail/CVE-2026-44495), [CVE-2026-44496](https://nvd.nist.gov/vuln/detail/CVE-2026-44496), [CVE-2026-67312](https://nvd.nist.gov/vuln/detail/CVE-2026-67312), [CVE-2026-67313](https://nvd.nist.gov/vuln/detail/CVE-2026-67313),  
[CVE-2026-67314](https://nvd.nist.gov/vuln/detail/CVE-2026-67314), [CVE-2026-67316](https://nvd.nist.gov/vuln/detail/CVE-2026-67316), [CVE-2026-67317](https://nvd.nist.gov/vuln/detail/CVE-2026-67317), [CVE-2026-67318](https://nvd.nist.gov/vuln/detail/CVE-2026-67318), [CVE-2026-67319](https://nvd.nist.gov/vuln/detail/CVE-2026-67319), [CVE-2026-67320](https://nvd.nist.gov/vuln/detail/CVE-2026-67320),  
[CVE-2026-67321](https://nvd.nist.gov/vuln/detail/CVE-2026-67321), [CVE-2026-41238](https://nvd.nist.gov/vuln/detail/CVE-2026-41238), [CVE-2026-41239](https://nvd.nist.gov/vuln/detail/CVE-2026-41239), [CVE-2026-41240](https://nvd.nist.gov/vuln/detail/CVE-2026-41240), [CVE-2026-49458](https://nvd.nist.gov/vuln/detail/CVE-2026-49458), [CVE-2026-49459](https://nvd.nist.gov/vuln/detail/CVE-2026-49459),  
[CVE-2026-49978](https://nvd.nist.gov/vuln/detail/CVE-2026-49978), [CVE-2026-65898](https://nvd.nist.gov/vuln/detail/CVE-2026-65898), [CVE-2026-65899](https://nvd.nist.gov/vuln/detail/CVE-2026-65899), [CVE-2026-65900](https://nvd.nist.gov/vuln/detail/CVE-2026-65900), [CVE-2026-65901](https://nvd.nist.gov/vuln/detail/CVE-2026-65901), [CVE-2026-65902](https://nvd.nist.gov/vuln/detail/CVE-2026-65902),  
[CVE-2026-65903](https://nvd.nist.gov/vuln/detail/CVE-2026-65903), [CVE-2026-65904](https://nvd.nist.gov/vuln/detail/CVE-2026-65904), [CVE-2026-65911](https://nvd.nist.gov/vuln/detail/CVE-2026-65911), [CVE-2026-66010](https://nvd.nist.gov/vuln/detail/CVE-2026-66010), [CVE-2026-75838](https://nvd.nist.gov/vuln/detail/CVE-2026-75838),  
[CVE-2026-8723](https://nvd.nist.gov/vuln/detail/CVE-2026-8723), [CVE-2026-82562](https://nvd.nist.gov/vuln/detail/CVE-2026-82562), [CVE-2026-82417](https://nvd.nist.gov/vuln/detail/CVE-2026-82417), [CVE-2026-53550](https://nvd.nist.gov/vuln/detail/CVE-2026-53550), [CVE-2026-59869](https://nvd.nist.gov/vuln/detail/CVE-2026-59869), [CVE-2026-84375](https://nvd.nist.gov/vuln/detail/CVE-2026-84375),  
[CVE-2026-45149](https://nvd.nist.gov/vuln/detail/CVE-2026-45149), [CVE-2026-13149](https://nvd.nist.gov/vuln/detail/CVE-2026-13149), [CVE-2026-14257](https://nvd.nist.gov/vuln/detail/CVE-2026-14257), [CVE-2026-69152](https://nvd.nist.gov/vuln/detail/CVE-2026-69152),  
[CVE-2026-34601](https://nvd.nist.gov/vuln/detail/CVE-2026-34601), [CVE-2026-41672](https://nvd.nist.gov/vuln/detail/CVE-2026-41672), [CVE-2026-41673](https://nvd.nist.gov/vuln/detail/CVE-2026-41673), [CVE-2026-41674](https://nvd.nist.gov/vuln/detail/CVE-2026-41674), [CVE-2026-41675](https://nvd.nist.gov/vuln/detail/CVE-2026-41675), [CVE-2026-83605](https://nvd.nist.gov/vuln/detail/CVE-2026-83605),  
[CVE-2026-83606](https://nvd.nist.gov/vuln/detail/CVE-2026-83606), [CVE-2026-83607](https://nvd.nist.gov/vuln/detail/CVE-2026-83607), [CVE-2026-83608](https://nvd.nist.gov/vuln/detail/CVE-2026-83608), [CVE-2026-83610](https://nvd.nist.gov/vuln/detail/CVE-2026-83610), [CVE-2026-83611](https://nvd.nist.gov/vuln/detail/CVE-2026-83611), [CVE-2026-83613](https://nvd.nist.gov/vuln/detail/CVE-2026-83613),  
[CVE-2026-83614](https://nvd.nist.gov/vuln/detail/CVE-2026-83614), [CVE-2026-83615](https://nvd.nist.gov/vuln/detail/CVE-2026-83615), [CVE-2026-83616](https://nvd.nist.gov/vuln/detail/CVE-2026-83616), [CVE-2026-83619](https://nvd.nist.gov/vuln/detail/CVE-2026-83619),  
[CVE-2025-13465](https://nvd.nist.gov/vuln/detail/CVE-2025-13465), [CVE-2026-2950](https://nvd.nist.gov/vuln/detail/CVE-2026-2950), [CVE-2021-23337](https://nvd.nist.gov/vuln/detail/CVE-2021-23337), [CVE-2026-4800](https://nvd.nist.gov/vuln/detail/CVE-2026-4800), [CVE-2026-12143](https://nvd.nist.gov/vuln/detail/CVE-2026-12143), [CVE-2026-40895](https://nvd.nist.gov/vuln/detail/CVE-2026-40895)

## 6. Released services and plugins:

| Service Name  | Repository                         | Tag |
| ------------- | ---------------------------------- | --- |
| API           | reportportal/service-api           | 5.15.5 |
| Authorization | reportportal/service-authorization | 5.15.2 |
| Jobs          | reportportal/service-jobs          | 5.15.3 |
| UI            | reportportal/service-ui            | 5.15.6 |
| Migrations    | reportportal/migrations            | 5.15.5 |
| Index         | reportportal/service-index         | 5.15.2 |
| Auto Analyzer | reportportal/service-auto-analyzer | 5.15.6 |

| Plugin Name                    | Repository                       | Tag |
| ------------------------------ | -------------------------------- | --- |
| Import Plugin (RobotFramework) | reportportal/plugin-import-robot | 1.1.4 |
| Import Plugin (JUnit)          | reportportal/plugin-import-junit | 1.1.2 |
| Test Executions                | Premium feature                  | 1.0.5 |

Rest of services and plugins have the same version as in 26.0.5:

| Plugin Name | Repository                         | Tag     |
| ----------- | ---------------------------------- | ------- |
| Jira Cloud  | reportportal/plugin-bts-jira-cloud | 5.13.10 |
| Gitlab Plugin | reportportal/plugin-bts-gitlab   | 5.13.2  |
| Rally       | reportportal/plugin-bts-rally      | 5.13.1  |
| Monday      | reportportal/plugin-bts-monday     | 1.1.1   |
| Azure       | reportportal/plugin-bts-azure      | 5.13.2  |
| Jira        | reportportal/plugin-bts-jira       | 5.15.0  |
| Telegram    | reportportal/plugin-telegram       | 1.1.0   |
| Slack       | reportportal/plugin-slack          | 1.1.2   |
| Sauce Labs  | reportportal/plugin-saucelabs      | 5.13.1  |
