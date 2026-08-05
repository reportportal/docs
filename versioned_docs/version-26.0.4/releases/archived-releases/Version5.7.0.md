---
sidebar_position: 7
sidebar_label: Version 5.7.0
description: ReportPortal v5.7.0 archived release notes with new features.
---

# Version 5.7.0

## New Features:
A possibility to see all unique errors for a launch  
[#1268](https://github.com/reportportal/reportportal/issues/1268). Support of Azure SAML authorization


## New Plugins:

- [Jira Cloud](https://github.com/reportportal/plugin-bts-jira-cloud/packages/1366483) plugin for posting new bugs
- [Azure DevOps](https://github.com/reportportal/plugin-bts-azure/packages/1366495) plugin for posting new bugs

## Small and Nice Updates:

- New design for Make decision modal
- Help & Support functionality for newly deployed instances
- Additional configuration for Similar “To Investigate” functionality (“Min Should Match”)
- Default State for Auto-Analysis is ON

## Bugfixing:

- New logic for removing widget has been implemented (deleting a parent widget doesn’t delete the child widget)
- [#1603](https://github.com/reportportal/reportportal/issues/1603). Attributes. Error on cancel edit common attributes in "Edit items" modal
- [#1181](https://github.com/reportportal/reportportal/issues/1181). Most Failed Tests and Most Flaky Tests widgets: wrong time is shown
- [#1606](https://github.com/reportportal/reportportal/issues/1606). Component Health Check Widget not working after Upgrade
- [#1616](https://github.com/reportportal/reportportal/issues/1616). Component health check (table view) widget for HotProd filter does not load results and keeps spinning


## Performance Improvements:

- 3x improved performance of project index generation for Auto-Analysis
- Refactored and optimized retry items processing
- Increased Auto-Analysis performance by updating the communicating interface between API and ANALYZERS
