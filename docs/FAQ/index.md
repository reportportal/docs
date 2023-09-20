---
sidebar_position: 21
sidebar_label: FAQ
---

# FAQ

On this page, we have put together a list of the most frequently asked questions. Here, you can find prompt responses.

**1. Does the ReportPortal tool make any external calls? If so, what is the content and nature of them?**

ReportPortal doesn't transmit your data externally. All data remains yours, within your instance of ReportPortal. However, we do some service request, related to versions checks on the login page to identify outdated services. We also utilize [Google Analytics](/terms-and-conditions/GoogleAnalyticsUsageByReportPortal) to gauge global usage patterns of ReportPortal. We track general usage trends without identifying specific users. This helps us prioritize the development of frequently used features and test frameworks. For instance, we noticed a rise in launches using JS test frameworks a few years ago and subsequently expanded our support for these frameworks.

**2. Assuming that ReportPortal makes a local copy/cache of the logs to build an understanding of their contents, where is that stored and what are the retention policies?**

We store data in PostgreSQL, MiniIO and ElasticSearch. Retention policies defined in the application on per project basis.

**3. How is data encrypted in transit and at rest?**

We use encryption in transit via SSL for our SaaS instances. For on-prem installation it depends on your LoadBalancer.

We use encryption at rest for our SaaS instances. It is provided by AWS and configured during VM provisioning. For on-prem installation it depends on your DevOps.

**4. Is there any training available to use ReportPortal effectively?**

Check our [Tutorial](/reportportal-tutorial/) and read [blog post](https://reportportal.io/blog/Tips-to-get-ReportPortal-benefits) with tips to get ReportPortal benefits. We also recommend investigate [our documentation](https://reportportal.io/docs/) where you can find screenshots and video instructions on ReportPortal functionality.

**5. Is there a demo available?**

For sure, you can explore ReportPortal [without installation](/reportportal-tutorial/#how-to-explore-reportportal-without-installation) visiting our Demo instance.

**6. How can I begin using ReportPortal?**

The initial steps involve installing and configuring the tool. [Installation steps](/category/installation-steps) you can find in our documentation.

**7. Does the tool integrate with my existing test automation framework?**

ReportPortal can be integrated with common testing frameworks and CI tools. Consult [this section](/log-data-in-reportportal/test-framework-integration) of the documentation for detailed information on test framework integration. And use following links for Integration with CI/CD: [Integration with GitLab CI](/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI/), [Integration with Jenkins](/quality-gates/IntegrationWithCICD/IntegrationWithJenkins/).

**8. What type of license does ReportPortal use?**

ReportPortal is licensed under Apache v2.0, which means it’s free to use, comes with no liability and warranty, and there is no service and support included. And can be utilized even for commercial usage.

**9. Does ReportPortal have any paid features?**

At that moment, we offer the only premium feature – [Quality Gates](/category/quality-gates). It is a set of predefined criteria that must be satisfied for a run to be deemed successful.

**10. Does ReportPortal use AI?**

We provide ML-driven failure triage. Read [this article](https://reportportal.io/blog/How-we-use-AI) to know how we use AI.

**11. Do we need specific infrastructure prerequisites to avoid performance problems?**

Look into [Optimal Performance Hardware setup](/installation-steps/OptimalPerformanceHardwareSetup).

**12. What types of reports can I generate with the ReportPortal?**

ReportPortal has a lot of widgets to visualize test results and understand the state of the product. Most popular our widgets: [Overall statistics chart](/dashboards-and-widgets/OverallStatistics), [Launch statistics chart](/dashboards-and-widgets/LaunchStatisticsChart), [Failed cases trend chart](/dashboards-and-widgets/FailedCasesTrendChart), [Launch execution and issue statistic](/dashboards-and-widgets/LaunchExecutionAndIssueStatistic), [Component health check](/dashboards-and-widgets/ComponentHealthCheck).

**13. Can Report Portal aggregate performance test results?**

We do not support direct integration with performance testing frameworks, but as a workaround you can import performance test results in JUnit format into ReportPortal. Further information on this topic can be found [here](https://github.com/reportportal/reportportal/issues/1820).

**14. Does ReportPortal have integration with Jira?**

Our test automation reporting dashboard have integration with following Bug Tracking Systems: [Jira Server](/plugins/AtlassianJiraServer), [Jira Cloud](/plugins/AtlassianJiraCloud), [Azure DevOps](/plugins/AzureDevOpsBTS), and [Rally](/plugins/Rally). 
