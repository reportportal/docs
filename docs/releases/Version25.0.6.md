---
sidebar_position: 5
sidebar_label: Version 25.0.6
---

# Version 25.0.6

## 1. **New features:**
- **[Test case search widget](/dashboards-and-widgets/TestCaseSearch):**<br />
  New widget enables searching test cases by name or attribute across all launches in a project.

- **[Inactivity timeout](/admin-panel/ServerSettings/#inactivity-timeout):**<br />
  Admins can now set user session timeouts under Server Settings. Users will be logged out after inactivity timeout.

## 2. **Bugs fixed:**
Resolved an issue where the "Slack" and "Telegram" notification toggles did not retain their state after page reload on a newly created project.

## 3. **Security updates:**
- **Updates in password policy for user registration and password changes:**<br />
  New passwords must be at least 8 characters long and include at least one digit, one special character, one uppercase letter, and one lowercase letter. Existing users can continue logging in with their current passwords, but any password updates will need to comply with the new requirements.

- **CVE addressed:**<br />

    - Service-api:<br />
      [CVE-2024-50379](https://nvd.nist.gov/vuln/detail/cve-2024-50379), [CVE-2024-56337](https://nvd.nist.gov/vuln/detail/CVE-2024-56337), [CVE-2025-24813](https://nvd.nist.gov/vuln/detail/CVE-2025-24813)

    - Service-ui:<br />
      [CVE-2024-45296](https://www.cve.org/CVERecord?id=CVE-2024-45296), [CVE-2025-27152](https://www.cve.org/CVERecord?id=CVE-2025-27152), [CVE-2025-26791](https://www.cve.org/CVERecord?id=CVE-2025-26791), [CVE-2024-53382](https://www.cve.org/CVERecord?id=CVE-2024-53382)

## 4. **Technical updates:**
Removed Service Metrics Gatherer.

## 5. **Released services:**
|Plugin Name|Repository|Tag|
|---|---| --- |
|API|reportportal/service-api|5.13.5|
|UI|reportportal/service-ui|5.12.5|
|Jobs|reportportal/service-jobs|5.13.2|
|Authorization|reportportal/service-authorization|5.13.2|
|Migrations|reportportal/migrations|5.13.2| 
|Index|reportportal/service-index|5.13.1|

**Rest of services and plugins have the same version as before:**
|Service Name|Repository|Tag|
|---|---| --- |
|Auto-Analyzer|reportportal/service-auto-analyzer|5.13.2|

|Plugin Name|Repository|Tag|
|---|---| --- |
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.12.1|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.0.1|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.0.2|
|Monday|reportportal/plugin-bts-monday|1.0.1|
|Slack|reportportal/plugin-slack|1.0.1|
|Azure|reportportal/plugin-bts-azure|5.12.1|
|Jira|reportportal/plugin-bts-jira|5.12.1|
|Jira Cloud|reportportal/plugin-bts-jira-cloud|5.12.1|
|Saucelabs|reportportal/plugin-saucelabs|5.12.1|
|Rally|reportportal/plugin-bts-rally|5.12.2||
|Telegram|reportportal/plugin-telegram|1.0.0||
