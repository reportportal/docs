---
sidebar_position: 3
sidebar_label: TestNG
---

# ReportPortal TestNG Integration

There is an agent to integrate [TestNG](https://testng.org/#_testng_documentation) with ReportPortal.

TestNG provides support for attaching custom listeners, reporters, annotation transformers and method interceptors to your tests.

TestNG agent can handle next events:

- Start launch
- Finish launch
- Start suite
- Finish suite
- Start test
- Finish test
- Start test step
- Successful finish of test step
- Fail of test step
- Skip of test step
- Start configuration (All «before» and «after» methods)
- Fail of configuration
- Successful finish of configuration
- Skip configuration

[Installation guide](https://github.com/reportportal/agent-java-testNG#readme)

[Examples](https://github.com/reportportal/examples-java/tree/master/example-testng-fork-execution)
