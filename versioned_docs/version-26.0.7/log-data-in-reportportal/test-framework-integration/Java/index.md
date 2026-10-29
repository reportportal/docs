---
sidebar_label: Java
sidebar_position: 1
description: Enhance your test automation with advanced Java reporting in ReportPortal.
---

# Java

To integrate your Java test framework with ReportPortal, you need to create a file named `reportportal.properties` in your in your Java project in a source folder `src/main/resources` or `src/test/resources` (depending on where your tests are located):

**reportportal.properties**

```
rp.endpoint={RP_SERVER_URL}

rp.api.key={YOUR_TOKEN}

rp.project={YOUR_PROJECT}

rp.launch={NAME_OF_YOUR_LAUNCH}
```

**Property description**

`rp.endpoint` - the URL for the report portal server (actual link).

`rp.api.key` - an access token for Report Portal which is used for user identification. It can be found on your report portal user profile page.

`rp.project` - a project code on which the agent will report test launches. Must be set to one of your assigned projects.

`rp.launch` - a user-selected identifier of test launches.

:::note
Starting from the Service Release 23.1++, `rp.uuid` was renamed to `rp.api.key`. 
:::

This set of properties will allow you to report your tests. And there are more [properties](https://github.com/reportportal/client-java#property-file) available for fine grain tuning of integration.

If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self.

All agents use [client-java](https://github.com/reportportal/client-java) to communicate with ReportPortal API and as common code library. Also you can use any combination of agent and logger.

Advance your Java reporting with ReportPortal!
