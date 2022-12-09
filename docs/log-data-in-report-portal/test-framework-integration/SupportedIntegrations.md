---
sidebar_label: Supported Integrations
---

# Supported Integrations

If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self.
Choose which combination of agent, client, and logger you need, and then follow the instructions provided for each agent.

## Java

All agents use [client-java](https://github.com/reportportal/client-java) to communicate with ReportPortal API and as common code library. Also you can use any combination of agent and logger.

**Test Framework Integration (agents):**

- [JUnit5](https://github.com/reportportal/agent-java-junit5)
- [JUnit4](https://github.com/reportportal/agent-java-junit)
- [TestNG](https://github.com/reportportal/agent-java-testNG)
- [Cucumber (the first version)](https://github.com/reportportal/agent-java-cucumber)
- [Cucumber 2](https://github.com/reportportal/agent-java-cucumber2)
- [Cucumber 3](https://github.com/reportportal/agent-java-cucumber3)
- [Cucumber 4](https://github.com/reportportal/agent-java-cucumber4)
- [Cucumber 5](https://github.com/reportportal/agent-java-cucumber5)
- [Cucumber 6, 7](https://github.com/reportportal/agent-java-cucumber6)
- [JBehave](https://github.com/reportportal/agent-java-jbehave)
- [Spock](https://github.com/reportportal/agent-java-spock)
- [SoapUI (outdated)](https://github.com/reportportal/agent-java-soapui)

**Loggers:**

- [Logback](https://github.com/reportportal/logger-java-logback)
- [Log4J](https://github.com/reportportal/logger-java-log4j)
- [Rest Assured](https://github.com/reportportal/logger-java-rest-assured)
- [Selenide](https://github.com/reportportal/logger-java-selenide)
- [OkHttp3](https://github.com/reportportal/logger-java-okhttp3)
- [Apache HttpComponents](https://github.com/reportportal/logger-java-httpcomponents)

## JavaScript

**Test Framework Integration (agents):**

All agents use [client-javascript](https://github.com/reportportal/client-javascript) to communicate with ReportPortal API.

- [Playwright](https://github.com/reportportal/agent-js-playwright)
- [CucumberJS](https://github.com/reportportal/agent-js-cucumber)
- [Codecept](https://github.com/reportportal/agent-js-codecept)
- [WebdriverIO](https://github.com/reportportal/agent-js-webdriverio)
- [Postman](https://github.com/reportportal/agent-js-postman)
- [Cypress](https://github.com/reportportal/agent-js-cypress)
- [Mocha](https://github.com/reportportal/agent-js-mocha)
- [Jest](https://github.com/reportportal/agent-js-jest)
- [TestCafe](https://github.com/reportportal/agent-js-testcafe)
- [Jasmine](https://github.com/reportportal/agent-js-jasmine)
- [Nightwatch](https://github.com/reportportal/agent-js-nightwatch)

Each agent can be installed from [npm](https://www.npmjs.com/settings/reportportal/packages?page=1&perPage=10) or [GitHub packages](https://github.com/orgs/reportportal/packages?ecosystem=npm) registry.

## .Net

User can use any combination of client/agent/logger.

**Clients:**

- [Rest api client](https://github.com/reportportal/client-net)
- [Multi-threaded client](https://github.com/reportportal/commons-net)

**Test Framework Integration (agents):**

- [NUnit](https://github.com/reportportal/agent-net-nunit)
- [VSTest](https://github.com/reportportal/agent-net-vstest)
- [SpecFlow](https://github.com/reportportal/agent-net-specflow)
- [xUnit](https://github.com/reportportal/agent-net-xunit)

**Loggers:**

- [Serilog](https://github.com/reportportal/logger-net-serilog)
- [Log4Net](https://github.com/reportportal/logger-net-log4net)
- [NLog](https://github.com/reportportal/logger-net-nlog)
- [TraceListener](https://github.com/reportportal/logger-net-tracelistener)

## Python

All agents use [client-python](https://github.com/reportportal/client-Python).

**Test Framework Integration (agents):**

- [pytest](https://github.com/reportportal/agent-python-pytest)
- [Robot Framework](https://github.com/reportportal/agent-Python-RobotFramework)
- [behave](https://github.com/reportportal/agent-python-behave)
- [nosetests](https://github.com/reportportal/agent-python-nosetests)

## PHP

**Test Framework Integration (agents):**

All agents use [client-php](https://github.com/reportportal/client-php).

- [PHPUnit](https://github.com/reportportal/agent-php-PHPUnit)
- [Behat](https://github.com/reportportal/agent-php-Behat)
- [Codeception](https://github.com/reportportal/agent-php-Codeception)

Please find the full list of available integrations with test frameworks in our [GitHub repositories](https://github.com/reportportal).

If you need further guidelines, you can explore our [Developers guides](/category/developers-guides).

What you can do if you can not find your Test Framework?
You can create custom integrations. To get started, please look at our [Implement own Integration](/log-data-in-report-portal/ImplementOwnIntegration) page.

>**Note:**
> We offer paid support for new or existing integrations. If you need more details, please send an email to support@reportportal.io.
