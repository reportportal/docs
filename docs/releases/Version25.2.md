---
sidebar_position: 2
sidebar_label: Version 25.2
---

# Version 25.2

## 1. What's Changed:

**1. [Premium feature](/terms-and-conditions/PremiumFeatures) (Subscribers-only): [Test Executions page](/features/TestExecutions)**<br />
View and manage individual test cases across multiple launches in one flat list — no need to drill through launch hierarchy. Includes launch-level filters, test-level search & rich filters and customizable columns.

**2. [Improved Log experience](/configuration/ProjectSettings#log-types)**<br />
The Log view is now more powerful and customizable:
- Added per-user appearance settings (full-width layout, colorized backgrounds based on Log Types, disable log collapsing, adjustable log size, toggle pagination / infinite scroll).
- Navigation is faster with error log jumping (Prev/Next) and search + “jump to” highlighting across pages.
- Expanded Log Types management in Project Settings: create/edit/delete custom types and configure up to 6 types in the log filter slider.

**3. Minimum password length setting**<br />
Added server setting + UI validation updates across registration, user creation, and password change flows (admin-only).

## 2. Bugs fixed:

**1. Project Settings - Notifications**<br />
Updated “All Notifications” toggle description; prevented adding attributes with empty Value.

**2. UI loaders**<br />
Fixed vertical loader alignment for Export Report (Include Attachments) and Demo Data generation (now horizontal).

**3. Server Settings UI**<br />
Fixed Backspace editing in Password length field.

**4. Make decision modal**<br />
Fixed logs background color (no red background).

**5. Backend performance**<br />
Sped up finish test_item path query by adding ti.launch_id (significant execution time reduction).

**6. Jobs**<br />
Fixed InterruptBrokenLaunchesJob (job execution, replica concurrency/locks, null counter handling); added missing “finish” log entry; reduced irrelevant ERROR logs when email server isn’t configured.

**7. Auth/API**<br />
Removed GET /api/v1/user/registration/info endpoint and related UI validation.

**8. Swagger Logs API**<br />
Fixed 500 error on log creation; endpoints now return 201 Created.

**9. Jira Server**<br />
Fixed Labels field to save multiple values (not just the first).

**10. DeleteExpiredUsers job**<br />
Now deletes empty Personal projects correctly and avoids index deletion errors.

## 3. CVE addressed:

**Service-api**<br />
[CVE-2025-55752](https://github.com/advisories/GHSA-wmwf-9ccg-fff5), [CVE-2025-49124](https://github.com/advisories/GHSA-42wg-hm62-jcwg), [CVE-2025-48988](https://github.com/advisories/GHSA-h3gc-qfqq-6h8f), [CVE-2025-53506](https://github.com/advisories/GHSA-25xr-qj8w-c4vf), [CVE-2025-48989](https://github.com/advisories/GHSA-gqp3-2cvr-x8m3), [CVE-2025-52520](https://github.com/advisories/GHSA-wr62-c79q-cv37), [CVE-2025-61795](https://github.com/advisories/GHSA-hgrr-935x-pq79), [CVE-2025-55668](https://github.com/advisories/GHSA-23hv-mwm6-g8jf), [CVE-2025-49125](https://github.com/advisories/GHSA-wc4r-xq3c-5cf3), [CVE-2025-58056](https://github.com/advisories/GHSA-fghv-69vj-qj49), [CVE-2025-58057](https://github.com/advisories/GHSA-3p8m-j85q-pgmj), [CVE-2025-55163](https://github.com/advisories/GHSA-prj3-ccx8-p6x4), [CVE-2025-53864](https://github.com/advisories/GHSA-xwmg-2g98-w7v9), [CVE-2025-48924](https://github.com/advisories/GHSA-j288-q9x7-2f5v), [CVE-2025-49146](https://github.com/advisories/GHSA-hq9p-pm7w-8p54), [CVE-2025-59952](https://github.com/advisories/GHSA-h7rh-xfpj-hpcm), [CVE-2025-41249](https://github.com/advisories/GHSA-jmp9-x22r-554x), [CVE-2025-41248](https://github.com/advisories/GHSA-8v5q-rhf3-jphm), [CVE-2025-41242](https://github.com/advisories/GHSA-r936-gwx5-v52f), [CVE-2025-41234](https://github.com/advisories/GHSA-6r3c-xf4w-jxjm), [CVE-2025-7962](https://github.com/advisories/GHSA-9342-92gg-6v29), [CVE-2025-11226](https://github.com/advisories/GHSA-25qh-j22f-pwp8)

**Service-authorization**<br />
[CVE-2025-55752](https://github.com/advisories/GHSA-wmwf-9ccg-fff5), [CVE-2025-49124](https://github.com/advisories/GHSA-42wg-hm62-jcwg), [CVE-2025-48988](https://github.com/advisories/GHSA-h3gc-qfqq-6h8f), [CVE-2025-53506](https://github.com/advisories/GHSA-25xr-qj8w-c4vf), [CVE-2025-48989](https://github.com/advisories/GHSA-gqp3-2cvr-x8m3), [CVE-2025-52520](https://github.com/advisories/GHSA-25xr-qj8w-c4vf), [CVE-2025-61795](https://github.com/advisories/GHSA-hgrr-935x-pq79), [CVE-2025-55668](https://github.com/advisories/GHSA-23hv-mwm6-g8jf), [CVE-2025-49125](https://github.com/advisories/GHSA-wc4r-xq3c-5cf3), [CVE-2025-58056](https://github.com/advisories/GHSA-fghv-69vj-qj49), [CVE-2025-58057](https://github.com/advisories/GHSA-3p8m-j85q-pgmj),[CVE-2025-55163](https://github.com/advisories/GHSA-prj3-ccx8-p6x4), [CVE-2025-48924](https://github.com/advisories/GHSA-j288-q9x7-2f5v), [CVE-2025-41249](https://github.com/advisories/GHSA-jmp9-x22r-554x), [CVE-2025-41248](https://github.com/advisories/GHSA-8v5q-rhf3-jphm), [CVE-2025-41242](https://github.com/advisories/GHSA-r936-gwx5-v52f), [CVE-2025-41234](https://github.com/advisories/GHSA-6r3c-xf4w-jxjm), [CVE-2025-11226](https://github.com/advisories/GHSA-25qh-j22f-pwp8)

**Service-jobs**<br />
[CVE-2025-55752](https://github.com/advisories/GHSA-wmwf-9ccg-fff5), [CVE-2025-49124](https://github.com/advisories/GHSA-42wg-hm62-jcwg), [CVE-2025-48988](https://github.com/advisories/GHSA-h3gc-qfqq-6h8f), [CVE-2025-53506](https://github.com/advisories/GHSA-25xr-qj8w-c4vf), [CVE-2025-48989](https://github.com/advisories/GHSA-gqp3-2cvr-x8m3), [CVE-2025-52520](https://github.com/advisories/GHSA-25xr-qj8w-c4vf), [CVE-2025-61795](https://github.com/advisories/GHSA-hgrr-935x-pq79), [CVE-2025-55668](https://github.com/advisories/GHSA-23hv-mwm6-g8jf), [CVE-2025-49125](https://github.com/advisories/GHSA-wc4r-xq3c-5cf3), [CVE-2025-58056](https://github.com/advisories/GHSA-fghv-69vj-qj49), [CVE-2025-58057](https://github.com/advisories/GHSA-3p8m-j85q-pgmj),[CVE-2025-55163](https://github.com/advisories/GHSA-prj3-ccx8-p6x4), [CVE-2025-48924](https://github.com/advisories/GHSA-j288-q9x7-2f5v), [CVE-2025-41249](https://github.com/advisories/GHSA-jmp9-x22r-554x), [CVE-2025-41242](https://github.com/advisories/GHSA-r936-gwx5-v52f), [CVE-2025-41234](https://github.com/advisories/GHSA-6r3c-xf4w-jxjm), [CVE-2025-11226](https://github.com/advisories/GHSA-25qh-j22f-pwp8)

**Service-migrations**<br />
[CVE-2025-30204](https://github.com/advisories/GHSA-mh63-6h87-95cp), [CVE-2025-22868](https://github.com/advisories/GHSA-6v2p-p543-phr9)

# 4. **Released services:**
|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.15.0|
|Authorization|reportportal/service-authorization|5.15.0|
|UI|reportportal/service-ui|5.15.0|
|API|reportportal/service-api|5.15.0|
|Jobs|reportportal/service-jobs|5.15.0|
|Migrations|reportportal/migrations|5.15.0|
|Auto Analyzer|reportportal/service-auto-analyzer|5.15.0|

**Released plugins:**
|Plugin Name|Repository|Tag|
|---|---| --- |
|Jira|reportportal/plugin-bts-jira|5.15.0|

**Rest of services and plugins have the same version as before:**
|Plugin Name|Repository|Tag|
|---|---| --- |
|Rally|reportportal/plugin-bts-rally|5.13.1|
|Monday|reportportal/plugin-bts-monday|1.1.1|
|Azure|reportportal/plugin-bts-azure|5.13.2|
|Import Plugin (JUnit)|reportportal/plugin-import-robot|1.1.0|
|Telegram|reportportal/plugin-telegram|1.1.0|
|Gitlab Plugin|reportportal/plugin-bts-gitlab|5.13.1|
|Sauce Labs|reportportal/plugin-saucelabs|5.13.1|
|Slack|reportportal/plugin-slack|1.1.2|
|Import Plugin (RobotFramework)|reportportal/plugin-import-robot|1.1.1|

# 5. Migration Guide.
[How to migrate to Reportportal v25.2.](https://github.com/reportportal/reportportal/wiki/Migration-v25)
