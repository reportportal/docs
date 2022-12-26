# ReportPortal Glossary

## Agent

As was said, Agents are direct test framework integrations. If you integrate your tests with an agent then you don’t need to do anything, except adding properties and test metadata. Basically, each agent has the same naming convention: agent-{ language }-{ framework }. E.G. “agent-python-pytest”. The best way to see which agents we do have and check out the latest documentation for them is to go on ReportPortal organization page on GitHub and start searching.

[ ![ImageName](Images/Glossary/Glossary1.png) ](Images/Glossary/Glossary1.png)

Each agent project contains a README with the latest installation instructions. Agent pages usually are being updated along with the agent code. If you found any issue with the documentation you are free to correct it with a PR or post an issue.

Agents are complete and self-sufficient integrations, all you need is to provide correct properties and optionally test metadata (like attributes and steps).

## Client

Clients are basically interfaces for our Rest API, like agents they have its naming convention: client-{ language }. E.G. “client-java”. And like agents the best way to find the latest library version and documentation is to find it on GitHub.

[ ![ImageName](Images/Glossary/Glossary2.png) ](Images/Glossary/Glossary2.png)

Unlike agents, Clients are not self-sufficient. They provide convenient way to call ReportPortal API, but you must do this in your code. It is also your part of responsibility which metadata you send to ReportPortal if you decided to use a Client.

## Logger

Loggers are special type of libraries which a responsible for saving logs into ReportPortal. They can be attached to logging framework or a test tool, E.G. Selenide, to report steps and log records. Basically, you can report logs yourself with certain methods inside Clients, but Loggers do this for you.

Here is an example of how OkHttp3 logger works:

[ ![ImageName](Images/Glossary/Glossary3.png) ](Images/Glossary/Glossary3.png)

Like agents and clients, loggers have their own naming pattern: logger-{ language }-{ framework / tool }.

## Plugin

Plugins are co-applications which add additional functionality to ReportPortal. We have separate examples and development guide for our users. You are free to extend ReportPortal as you wish, we don’t limit or obligate our users with any clauses. ReportPortal provides some plugins for free like Jira and Rally integrations but also has closed plugins, which we provide only with our paid plans, e.g., “Quality Gates” plugin:

[ ![ImageName](Images/Glossary/Glossary4.png) ](Images/Glossary/Glossary4.png)

## Launch

The first reporting-related word in our list. The Launch is a collection of all reported tests which were run at single test execution. Launches allows you to monitor your application-under-test state. The idea is that you take certain number of tests and test suites and run them periodically on different environments and our widgets draws you the picture of your application health from launch to launch. You are not obligated to stop adding new test reports into a launch after the launch finish, you are free to add more data. Or, for example, you can create several Launches and merge them into one. Or run your tests in a distributed way and report everything into a single Launch. The key concept here is that Launch is the biggest data point on our widgets, everything else is up to you.

[ ![ImageName](Images/Glossary/Glossary5.png) ](Images/Glossary/Glossary5.png)

## Suite

For the convenience of locating and navigating data, you can put your tests into test suites. Features, Stories, Suites, Test Classes, Test (sic!), etc., they are all Suites from ReportPortal view, just with different names. Suites are hierarchical, to put one Suite inside another you should specify Parent Suite UUID. Also, as a limitation, child Suite and Items start time should not be earlier than Parent Suite start time due to Database limitations, please keep that in mind.

[ ![ImageName](Images/Glossary/Glossary6.png) ](Images/Glossary/Glossary6.png)

## Step

Step is the only entity with statistics in ReportPortal. Every time you report a step, ReportPortal adds 1 to test count and every time a Step fails it counts it as a test failure.

[ ![ImageName](Images/Glossary/Glossary7.png) ](Images/Glossary/Glossary7.png)

## Nested step

Nested steps are like suites but located as child step elements. They are like containers for test logs and represented as dropdown lists inside Log View. On the screen below Nested step is the first entity.

[ ![ImageName](Images/Glossary/Glossary3.png) ](Images/Glossary/Glossary3.png)

## Log

Logs are textual data necessary for debugging and problem solving. Our Analyzer uses them in the same way. Logs should be neat and informative, but not too much verbose. Tons of logs usually the same problem as their full absence.

[ ![ImageName](Images/Glossary/Glossary8.png) ](Images/Glossary/Glossary8.png)

## Test Case ID

The ID which is used along with Steps. It is unique signature of tests by which we build test history. In general, you don’t need to manipulate these IDs, since every agent usually generates them with Code reference and parameters. But if you want to customize your history view this is the first point where to look. Agents usually generate Test Case IDs based on code reference and have a way to customize it.

[ ![ImageName](Images/Glossary/Glossary9.png) ](Images/Glossary/Glossary9.png)