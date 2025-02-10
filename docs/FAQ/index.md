---
sidebar_position: 23
sidebar_label: FAQ
---

# FAQ

On this page, we have put together a list of the most frequently asked questions. Here, you can find prompt responses.

**1. Does on-prem installed ReportPortal make any external calls? What are the content and nature of these calls?**

All test results and testing data reside in-house, within your instance of ReportPortal. However, there are two types of external calls that ReportPortal makes. The first checks our status page for the latest version and informs users of it on the login page. The second sends anonymized data to [Google Analytics](/terms-and-conditions/GoogleAnalyticsUsageByReportPortal), helping us refine the user experience and better understand application usage. This can be toggled off if desired.

**2. Assuming ReportPortal locally caches logs to understand their content, where are these stored, and what are the associated retention policies?**

ReportPortal utilizes PostgreSQL for its database, MinIO and the local system for file storage, and OpenSearch for log indexing and ML processes.

Retention policies can be set and adjusted within the application on a per-project basis.

**3. How is data encrypted in transit and at rest?**

We use encryption in transit via SSL for our SaaS instances. For on-prem installation it depends on your LoadBalancer.

We use encryption at rest for our SaaS instances. It is provided by AWS and configured during VM provisioning. For on-prem installation it depends on your DevOps.

**4. Does the containerized solution function as a standalone, or can it be integrated with K8S or other orchestration platforms? Is there a helm chart available?**

ReportPortal is containerized and can be orchestrated using either docker-compose or [Kubernetes](https://github.com/reportportal/kubernetes/tree/develop/reportportal).

**5. Is there any training available to use ReportPortal effectively?**

Check our [Tutorial](/tutorial/) and read [blog post](https://reportportal.io/blog/Tips-to-get-ReportPortal-benefits) with tips to get ReportPortal benefits. We also recommend investigate [our documentation](https://reportportal.io/docs/) where you can find screenshots and video instructions on ReportPortal functionality.

**6. Is there a demo available?**

You can explore ReportPortal without installation by visiting our [demo instance](https://demo.reportportal.io/). Also, check out our [demo video](https://www.youtube.com/watch?v=AKA_O8lcIdc). If you need a demo session, leave your [contact details](https://reportportal.io/contact-us/general/).

**7. How can I begin using ReportPortal?**

The initial steps involve installing and configuring the tool. [Installation steps](/installation-steps) you can find in our documentation.

**8. Does the tool integrate with my existing test automation framework?**

ReportPortal can be integrated with common testing frameworks and CI tools. Consult [this section](/log-data-in-reportportal/test-framework-integration) of the documentation for detailed information on test framework integration. And use following links for Integration with CI/CD: [Integration with GitLab CI](/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI/), [Integration with Jenkins](/quality-gates/IntegrationWithCICD/IntegrationWithJenkins/).

**9. What type of license does ReportPortal use?**

ReportPortal is licensed under Apache v2.0, which means it’s free to use, comes with no liability and warranty, and there is no service and support included. And can be utilized even for commercial usage.

**10. Does ReportPortal have any paid features?**

At that moment, we offer the only premium feature – [Quality Gates](/quality-gates). It is a set of predefined criteria that must be satisfied for a run to be deemed successful.

**11. Does ReportPortal use AI?**

We provide ML-driven failure triage. Read [this article](https://reportportal.io/blog/How-we-use-AI) to know how we use AI.

**12. Do we need specific infrastructure prerequisites to avoid performance problems?**

Look into [Hardware Requirements](/installation-steps/HardwareRequirements).

**13. What types of reports can I generate with the ReportPortal?**

ReportPortal has a lot of widgets to visualize test results and understand the state of the product. Most popular our widgets: [Overall statistics chart](/dashboards-and-widgets/OverallStatistics), [Launch statistics chart](/dashboards-and-widgets/LaunchStatisticsChart), [Failed cases trend chart](/dashboards-and-widgets/FailedCasesTrendChart), [Launch execution and issue statistic](/dashboards-and-widgets/LaunchExecutionAndIssueStatistic), [Component health check](/dashboards-and-widgets/ComponentHealthCheck).

**14. Can ReportPortal aggregate performance test results?**

We do not support direct integration with performance testing frameworks, but as a workaround you can [import performance test results](https://github.com/reportportal/reportportal/issues/1820) in JUnit format into ReportPortal.

**15. Does ReportPortal have integration with Jira?**

Our test automation reporting dashboard have integration with following Bug Tracking Systems: [Jira Server](/plugins/AtlassianJiraServer), [Jira Cloud](/plugins/AtlassianJiraCloud), [Azure DevOps](/plugins/AzureDevOps), and [Rally](/plugins/Rally). 
