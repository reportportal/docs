---
title: Log data in ReportPortal
description: Discover how to efficiently import data, integrate test frameworks, and run your tests with our test reporting tool.
---

# Log data in ReportPortal

ReportPortal is a CI/CD agnostic tool. Therefore, you can continue using your favorite CI/CD tool (GitLab, Jenkins, GitHub, Azure DevOps, Bamboo) to send data to ReportPortal and get test results of execution.

The data transmission is regulated not by the CI/CD process, but by the test framework. The only requirement is to ensure that the machine where your CI/CD is located has access to the ReportPortal instance to which you are trying to send the data.

As for test frameworks, a generic approach is to set the address of ReportPortal and other data in your test framework via properties or a configuration file, and your test framework will start reporting data to ReportPortal.

ReportPortal supports various frameworks:
* [Java frameworks](./test-framework-integration/Java/index.md) ([TestNG](./test-framework-integration/Java/TestNG.md), [Jbehave](./test-framework-integration/Java/JBehave.md), etc.)
* [Python frameworks](./test-framework-integration/Python/index.md) ([Pytest](./test-framework-integration/Python/pytest.md), [Robot Framework](./test-framework-integration/Python/RobotFramework.md), etc.)
* [JavaScript frameworks](./test-framework-integration/JavaScript/index.md) ([Playwright](./test-framework-integration/JavaScript/Playwright.md), [Postman](./test-framework-integration/JavaScript/Postman.md), etc.)
* [.NET frameworks](./test-framework-integration/Net/index.md) ([NUnit](./test-framework-integration/Net/NUnit.md), [VSTest](./test-framework-integration/Net/VSTest.md), etc.).

Integration with ReportPortal is not dependent on the type of tests you run. It can be API tests, integration tests, or UI tests such as Selenium, Cypress, so, you can run different types of tests and get test results.

ReportPortal can be integrated with external services, enabling you to report test results from platforms like Browserstack, Sauce Labs, and other third-party services. For Sauce Labs integration, we have a [plugin](../plugins/other/SauceLabs.mdx).

import DocCardList from '@theme/DocCardList';

<DocCardList />
