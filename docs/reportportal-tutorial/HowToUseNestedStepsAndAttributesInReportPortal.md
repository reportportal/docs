---
sidebar_position: 15
sidebar_label: 14. How to use nested steps and attributes in ReportPortal
---

# 14. How to use nested steps and attributes in ReportPortal

Usually, you see the results of automation as a carpet of error logs, and only an automation engineer can understand what is happening inside. Adding nested steps ([Java](https://github.com/reportportal/client-java/wiki/Nested-steps), [Python](https://github.com/reportportal/client-Python/wiki/Nested-steps)) allows applying a one-time change in the test code to make a logical grouping of steps and make these error logs more readable for the whole team.

<media-view src={require('./img/NestedSteps.png')} alt="Nested Steps example" />

You can also use [attributes](https://github.com/reportportal/client-java/wiki/Test-item-attributes) on any level (launch/suite/test/step) to provide more contextual information.

<media-view src={require('./img/TestAttributes.png')} alt="Test Attributes on any level" />