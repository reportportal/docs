---
title: FAQ
sidebar_position: 24
description: Find quick answers about installing, integrating, and using ReportPortal, from AI features and licenses to dashboards, integrations, and performance guidance.
---

# FAQ


On this page, we have put together a list of the most frequently asked questions. Here, you can find prompt responses.

1. [Does on-prem installed ReportPortal make any external calls? What are the content and nature of these calls?](/references/FAQ/#1-does-on-prem-installed-reportportal-make-any-external-calls-what-are-the-content-and-nature-of-these-calls)
2. [Assuming ReportPortal locally caches logs to understand their content, where are these stored, and what are the associated retention policies?](/references/FAQ/#2-assuming-reportportal-locally-caches-logs-to-understand-their-content-where-are-these-stored-and-what-are-the-associated-retention-policies)
3. [How is data encrypted in transit and at rest?](/references/FAQ/#3-how-is-data-encrypted-in-transit-and-at-rest)
4. [Does the containerized solution function as a standalone, or can it be integrated with K8S or other orchestration platforms? Is there a helm chart available?](/references/FAQ/#4-does-the-containerized-solution-function-as-a-standalone-or-can-it-be-integrated-with-k8s-or-other-orchestration-platforms-is-there-a-helm-chart-available)
5. [Is there any training available to use ReportPortal effectively?](/references/FAQ/#5-is-there-any-training-available-to-use-reportportal-effectively)
6. [Is there a demo available?](/references/FAQ/#6-is-there-a-demo-available)
7. [How can I begin using ReportPortal?](/references/FAQ/#7-how-can-i-begin-using-reportportal)
8. [Does the tool integrate with my existing test automation framework?](/references/FAQ/#8-does-the-tool-integrate-with-my-existing-test-automation-framework)
9. [What type of license does ReportPortal use?](/references/FAQ/#9-what-type-of-license-does-reportportal-use)
10. [Does ReportPortal have any paid features?](/references/FAQ/#10-does-reportportal-have-any-paid-features)
11. [Does ReportPortal use AI?](/references/FAQ/#11-does-reportportal-use-ai)
12. [Do we need specific infrastructure prerequisites to avoid performance problems?](/references/FAQ/#12-do-we-need-specific-infrastructure-prerequisites-to-avoid-performance-problems)
13. [What types of reports can I generate with the ReportPortal?](/references/FAQ/#13-what-types-of-reports-can-i-generate-with-the-reportportal)
14. [Can ReportPortal aggregate performance test results?](/references/FAQ/#14-can-reportportal-aggregate-performance-test-results)
15. [Does ReportPortal have integration with Jira?](/references/FAQ/#15-does-reportportal-have-integration-with-jira)
16. [How can I check the ReportPortal version?](/references/FAQ/#16-how-can-i-check-the-reportportal-version)
17. [How can I check if the ReportPortal API is working?](/references/FAQ/#17-how-can-i-check-if-the-reportportal-api-is-working)
18. [What are the application limits in ReportPortal?](/references/FAQ/#18-what-are-the-application-limits-in-reportportal)
19. [Does ReportPortal have any paid features?](/references/FAQ/#19-does-reportportal-have-any-paid-features)
20. [What is Organizations?](/references/FAQ/#20-what-is-organizations)
21. [What happens to my data during migration to a version with Organizations?](/references/FAQ/#21-what-happens-to-my-data-during-migration-to-a-version-with-organizations)
22. [How will the UI change for users after data migration to a version with Organizations?](/references/FAQ/#22-how-will-the-ui-change-for-users-after-data-migration-to-a-version-with-organizations)
23. [How will role-based access change with the introduction of Organizations?](/references/FAQ/#23-how-will-role-based-access-change-with-the-introduction-of-organizations)

#### 1. Does on-prem installed ReportPortal make any external calls? What are the content and nature of these calls?

All test results and testing data reside in-house, within your instance of ReportPortal. However, there are two types of external calls that ReportPortal makes. The first checks our status page for the latest version and informs users of it on the login page. The second sends anonymized data to [Google Analytics](/terms-and-conditions/GoogleAnalyticsUsageByReportPortal), helping us refine the user experience and better understand application usage. This can be toggled off if desired.

#### 2. Assuming ReportPortal locally caches logs to understand their content, where are these stored, and what are the associated retention policies?

ReportPortal utilizes PostgreSQL for its database, MinIO and the local system for file storage, and OpenSearch for log indexing and ML processes.

Retention policies can be set and adjusted within the application on a per-project basis.

#### 3. How is data encrypted in transit and at rest?

We use encryption in transit via SSL for our SaaS instances. For on-prem installation it depends on your LoadBalancer.

We use encryption at rest for our SaaS instances. It is provided by AWS and configured during VM provisioning. For on-prem installation it depends on your DevOps.

#### 4. Does the containerized solution function as a standalone, or can it be integrated with K8S or other orchestration platforms? Is there a helm chart available?

ReportPortal is containerized and can be orchestrated using either docker-compose or [Kubernetes](https://github.com/reportportal/kubernetes/tree/develop/reportportal).

#### 5. Is there any training available to use ReportPortal effectively?

Check our [Tutorial](/tutorial/) and read [blog post](https://reportportal.io/blog/Tips-to-get-ReportPortal-benefits) with tips to get ReportPortal benefits. We also recommend investigate [our documentation](https://reportportal.io/docs/) where you can find screenshots and video instructions on ReportPortal functionality.

#### 6. Is there a demo available?

You can explore ReportPortal without installation by visiting our [demo instance](https://demo.reportportal.io/) which offers:
* Free trial available indefinitely
* Data is flushed every 24 hours
* All enterprise features included

You can either join a shared project or create a personal one.

When a user visits the demo instance, they can log in using the default/pre-filled credentials. In this case, they will access a **shared project** that is available to everyone using the same demo account. This means that anything they report will be visible to all users and can be modified or managed by anyone.

<MediaViewer src={require('./img/DemoShared.png')} alt="Shared project on our test results reporting service" />

Alternatively, the user can log in via GitHub. In this case, a **personal project** and user account will be created just for them. Only that user will be able to view and manage the data reported within their personal project.

<MediaViewer src={require('./img/DemoPersonal.png')} alt="Personal project in our test automation reporting tool" />

If you need a personalized demo session, please leave your [contact details](https://reportportal.io/contact-us/general/). To get a quick overview, check out our [demo video](https://www.youtube.com/watch?v=AKA_O8lcIdc).

#### 7. How can I begin using ReportPortal?

The initial steps involve installing and configuring the tool. [Installation steps](/installation-steps) you can find in our documentation.

#### 8. Does the tool integrate with my existing test automation framework?

ReportPortal can be integrated with common testing frameworks and CI tools. Consult [this section](/log-data-in-reportportal/test-framework-integration) of the documentation for detailed information on test framework integration. And use following links for Integration with CI/CD: [Integration with GitLab CI](/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI/), [Integration with Jenkins](/quality-gates/IntegrationWithCICD/IntegrationWithJenkins/).

#### 9. What type of license does ReportPortal use?

ReportPortal is licensed under Apache v2.0, which means it’s free to use, comes with no liability and warranty, and there is no service and support included. And can be utilized even for commercial usage.

#### 10. Does ReportPortal have any paid features?

We offer several premium features:

- [Quality Gates](/getting-started/features/QualityGates) – a set of predefined criteria that must be met for a test run to be considered successful.
- [SCIM Server](/getting-started/features/SCIMServerFeature) – automates user management by syncing users and their access rights between your identity provider and ReportPortal.
- [Organizations](/getting-started/features/Organizations) – a scalable way to group and manage multiple projects, apply shared settings, and streamline permissions across teams or business units.
- [Test Executions](/getting-started/features/TestExecutions) – a unified view of all test results across launches, helping teams quickly find, filter, and analyze tests in one place without opening each launch separately.
- [Authorization Plugins](/integrations/authorization/) (LDAP, SAML) – enable centralized and secure user authentication by integrating ReportPortal with enterprise identity providers.
  - [LDAP](/integrations/authorization/LDAP) – enables authentication via directory services, allowing users to access ReportPortal using their domain credentials while simplifying user management through existing directory infrastructure.
  - [SAML](/integrations/authorization/SamlProviders/) – provides single sign-on (SSO) through providers like Azure or Okta, allowing users to log in with existing corporate credentials while ensuring secure and streamlined access management.

#### 11. Does ReportPortal use AI?

We provide ML-driven failure triage. Read [this article](https://reportportal.io/blog/How-we-use-AI) to know how we use AI.

#### 12. Do we need specific infrastructure prerequisites to avoid performance problems?

Look into [Hardware Requirements](/installation-steps/HardwareRequirements).

#### 13. What types of reports can I generate with the ReportPortal?

ReportPortal has a lot of widgets to visualize test results and understand the state of the product. Most popular our widgets: [Overall statistics chart](/dashboards-and-widgets/OverallStatistics), [Launch statistics chart](/dashboards-and-widgets/LaunchStatisticsChart), [Failed cases trend chart](/dashboards-and-widgets/FailedCasesTrendChart), [Launch execution and issue statistic](/dashboards-and-widgets/LaunchExecutionAndIssueStatistic), [Component health check](/dashboards-and-widgets/ComponentHealthCheck).

Depending on your needs, you can create either a report for a [single test run](/dashboards-and-widgets/PossibleDashboardsInReportPortal#report-for-one-tests-run-a-dashboard-for-an-engineer) or a [Build/Release/Sprint Report](/dashboards-and-widgets/PossibleDashboardsInReportPortal#build--release-sprint-report-a-dashboard-for-a-team-leads-pm-dm). ReportPortal also allows you to generate various types of [test automation reports](https://reportportal.io/blog/how-to-create-test-report-with-reportportal) using widgets, including:

* Summary Report
* Detailed Test Case Report
* Trend Analysis Report
* Failure Analysis Report
* Execution History Report

#### 14. Can ReportPortal aggregate performance test results?

We do not support direct integration with performance testing frameworks, but as a workaround you can [import performance test results](https://github.com/reportportal/reportportal/issues/1820) in JUnit format into ReportPortal.

#### 15. Does ReportPortal have integration with Jira?

Our test automation reporting dashboard have integration with following Bug Tracking Systems: [Jira Server](/plugins/bug-tracking/AtlassianJiraServer), [Jira Cloud](/plugins/bug-tracking/AtlassianJiraCloud), [Azure DevOps](/plugins/bug-tracking/AzureDevOps), [GitLab](/plugins/bug-tracking/GitLab), [Monday](/plugins/bug-tracking/Monday) and [Rally](/plugins/bug-tracking/Rally). 

#### 16. How can I check the ReportPortal version?

You can find the current version of ReportPortal on the login page. Simply hover your mouse over the ```i``` icon next to the "New versions are available" message to see the version details.

<MediaViewer src={require('./img/NewVersions.png')} alt="New versions in our test automation dashboard" />

#### 17. How can I check if the ReportPortal API is working?

Open your browser and go to the following URL: ```http://{your-hostname}/composite/info```. This page provides essential information about the API's status.

<MediaViewer src={require('./img/ApiService.png')} alt="Check ReportPortal's API Service" />

#### 18. What are the application limits in ReportPortal?

ReportPortal has defined application limits to maintain stable performance and consistent API behavior across all projects and endpoints. Below is the complete list of limits and recommendations:

**1. Pagination & Collections**

**Max page size: 300** items per page across collection endpoints:
- Launches
- Dashboards
- Filters
- Project members
- Suites / Tests / Steps / Logs
- Widgets

**2. Dashboards & Widgets**

- **Dashboards per project:** up to **3,000** (increased from 300 in version 24.2).
- **Dashboard name length: 3–55** characters, must be unique per user per project.
- **Widget fullscreen auto-refresh:** occurs every **30 seconds**.
- **Test Case Search widget results cap: 300** total cases (10 per page × 30 pages).

**3. Attributes & Text Fields**

- **Attribute key length:** up to **512** characters.
- **Attribute value length:** up to **512** characters.
- **Quality Gate name length** (Managed Plugin): **1–55** characters.

**4. Files, Uploads & Storage**

- **API attachment uploads:** default limit **64 MB** (configurable at the service-api level).
- **JUnit/Robot imports via UI:** up to **32 MB** per ZIP/XML file.
- **User avatars:**
   - Accepted formats: **JPEG, PNG, GIF**
   - Maximum size: **1 MB**
   - Maximum dimensions: **300×500 px**
- **RabbitMQ message size:** infrastructure-dependent; it’s recommended to keep log payloads reasonably sized, as very large logs may be rejected to process.

**5. API Behavior & Miscellaneous**

- **Rate limiting:** none built-in; throughput and concurrency depend on infrastructure capacity.
- **Import timeout UX:** works similar to ```/v2``` reporting, depends on infrastructure.

**6. Launch Merge**

- **No hard cap**, but treat **around 20 launches** per merge as a safe operational limit, unless you have tested higher based on your infrastructure size and data distribution.

:::note
All bulk operations triggered from the “Make decision” modal are limited to 300 test items per request.<br />
When more items are selected, the operation must be divided into multiple requests.
:::

#### 19. What is Organizations?

Organizations is our premium feature which lets you structure multiple projects in a clear and manageable way. An Organization is a higher-level space in ReportPortal that contains several projects. It helps centralize settings, manage permissions more easily, and keep complex testing environments organized as your team grows.

#### 20. What happens to my data during migration to a version with Organizations?

- **Open-Source (free):** Your instance will have one Organization created during migration. All existing Projects – including personal projects – are moved into it. You can create unlimited Projects within this Organization. Creating additional Organizations requires a paid subscription.

- **Enterprise (paid):** Each existing Project – including personal projects – will have a same-named Organization created above it and the Project will be placed inside. You can create unlimited new Projects within these Organizations and create additional Organizations on the instance, subject to your permissions.

#### 21. How will the UI change for users after data migration to a version with Organizations? 

Users will notice a new Organizations layer in the navigation, while project-level workflows will remain unchanged.

#### 22. How will role-based access change with the introduction of Organizations?

The access model is now more structured. There are two account types at the instance level — **Administrator** (full instance access) and **Regular user**. Within an Organization, users can be **Managers** or **Members**, and each Member has a project-level role: **Editor** or **Viewer**. This makes permissions clearer and easier to manage across multiple projects.
