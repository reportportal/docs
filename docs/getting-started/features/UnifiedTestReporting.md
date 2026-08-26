---
sidebar_position: 1
sidebar_label: Unified test reporting
description: Unify automation, agentic, and manual test results in one place. Streamline collaboration, real-time insights, and quality gates from a single source of truth.
---

# Single-entry point and unified test reporting

ReportPortal was created to be a single tool where teams acquire, aggregate, and analyze test results for a project. All test results can be accessed, reviewed, and analyzed in one place. Unified reporting covers classic [automation](/log-data-in-reportportal/test-framework-integration/), [agentic](/log-data-in-reportportal/AgenticTestResults) runs from AI agents, and [manual](/test-management-system/) executions from the built-in Test Management System.

In a typical QA setup, those sources used to live in different tools: framework reports, a separate Test Management System, spreadsheets, and agent sessions that never reached the same dashboard. Before every release, somebody had to combine all that information manually. ReportPortal removes that manual work. It is a single-entry point for all test reports, so the record of what was tested, by whom or by what, and with what evidence stays in one project.

**Unification and Standardization**

ReportPortal unifies reports from various [test frameworks](/log-data-in-reportportal/test-framework-integration/) and languages — API tests, integration tests, and end-to-end tests — and presents them in a standardized format that QA engineers, developers, and DevOps teams can all read. The same view also accepts [agentic launches](/log-data-in-reportportal/AgenticTestResults) and [manual launches](/test-management-system/manual-launches/). Sources stay distinguishable on the [Launches](/work-with-reports/ViewLaunches#launches-tab) page and on [Manual launches](/test-management-system/manual-launches/), so unification does not mean mixing everything into one indistinguishable pile. Results stay associated with the same test case across automated, agentic, and manual runs, which keeps history and coverage comparable. Engineers no longer need to search across multiple platforms for separate reports.

**Streamlined Collaboration**

With a single link, you can send team members to a central location where results are collected and analyzed. QA leads see coverage across automation, agentic, and manual work without exporting from three systems. Managers get a release-readiness picture from one project. The same shared view also supports "Shift Left" testing, where developers can inspect test feedback earlier in the cycle, not only QA engineers.

**Immediate Feedback and Quality Gate Integration**

For automated pipelines, [quality gates](/quality-gates/) can give an immediate GO / NO-GO verdict on whether code changes have passed the required checks. On failure, [auto-analysis](/analysis/AutoAnalysisOfLaunches) helps pinpoint the cause. This real-time, automated feedback is invaluable in modern DevOps pipelines. Agentic and manual results land in the same project and history, so evidence from those runs is available next to automation, while quality gates remain the automated decision layer in CI/CD.

In summary, ReportPortal’s single-entry point consolidates, standardizes, and analyzes test data from automation, agentic, and manual testing in one location. That unified record simplifies the testing process, improves collaboration, and supports more confident release decisions.
