---
sidebar_position: 30
sidebar_label: Version 4.0.0
---

# Version 4.0.0

Issues and features in [milestone 4.0](https://github.com/reportportal/reportportal/issues?q=is%3Aclosed+milestone%3A4.0)

## Migration Details

- MAKE BACKUP

- IF YOUR MONGO IS INSTALLED ON SEPARATE HOST, WE WOULD LIKE TO DRAW YOUR ATTENTION ON NEW URI FORMAT: RP_MONGO_URI=mongodb://localhost:27017. Please, refer to [MongoDB documentation](https://docs.mongodb.com/manual/reference/connection-string/) to get more details

- ElasticSearch has been introduced. Please, make sure `vm.max_map_count` kernel setting is defined as it's described in the [official ES guide](https://www.elastic.co/guide/en/elasticsearch/reference/6.1/docker.html#docker-cli-run-prod-mode) to prepare your environment
  Please, make sure you give right permissions to ES data folder (as described in the official guide)
```sh
mkdir data/elasticsearch
chmod g+rwx data/elasticsearch
chgrp 1000 data/elasticsearch
```
- Please, refer to the last version of docker-compose example for more details

## Agent Compatibility Details
- TestNG: Versions of TestNG framework below 6.10 are not supported
- JVM Clients v3 can be extended to support ReportPortal server v.4.

## New features

* New version of Auto Analyzer

[Ru Video](https://www.youtube.com/watch?v=GsmfLzQdgRs)

[En Video](https://www.youtube.com/watch?v=d2ekWI2exZ4)

- [#48](https://github.com/reportportal/reportportal/issues/48) IGNORE flag for AA to skip item next time;
- [#227](https://github.com/reportportal/reportportal/issues/227) Boost human priority;
- A label for auto-analysed test cases (AA) is added;
- An AA action is added to the test cases` history on a Log view;
- Added a filter for test items with a label AA
- Retries and Auto-Analyzer

* [#37](https://github.com/reportportal/reportportal/issues/37) Flaky test widget
* [#264](https://github.com/reportportal/reportportal/issues/264) Retry

## Improvements

### Github Improvements

* [#254](https://github.com/reportportal/reportportal/issues/254) Added possibility to post bug with a correct link based on Unique ID to test item
* [#238](https://github.com/reportportal/reportportal/issues/238) Added possibility to add a domain without a dot;
* [#230](https://github.com/reportportal/reportportal/issues/230) Escaped logs filter term after refresh
* [#141](https://github.com/reportportal/reportportal/issues/141) Added tags in e-mail body
* [#217](https://github.com/reportportal/reportportal/issues/217) Added possibility to print dashboards (print CSS)
* [#212](https://github.com/reportportal/reportportal/issues/212) Added search for "Add shared widget" window
* [#213](https://github.com/reportportal/reportportal/issues/213) Added possibility to add an own shared widget on an own dashboard
* [#105](https://github.com/reportportal/reportportal/issues/105) Changing a dropdown list on a slider to set a log level
* [#22](https://github.com/reportportal/reportportal/issues/22) Added a filter by a launch number
* [#276](https://github.com/reportportal/reportportal/issues/276) Keep logs and screenshots for a long period of time (forever)
* [#210](https://github.com/reportportal/reportportal/issues/210) Image viewer not close
* [#189](https://github.com/reportportal/reportportal/issues/189) Added feature "Copy result from previous run"
* [#133](https://github.com/reportportal/reportportal/issues/133) ALL DASHBOARDS: Added possibility for List view
* [#250](https://github.com/reportportal/reportportal/issues/250) Support for custom types of defects
* [#136](https://github.com/reportportal/reportportal/issues/136) Added a filter for linked bugs
* [#119](https://github.com/reportportal/reportportal/issues/119) Added test parameters on a Step and Log view
* [#26](https://github.com/reportportal/reportportal/issues/26) LDAPS protocol support
* [#270](https://github.com/reportportal/reportportal/issues/270) Report Portal Email Notification should have "link" configuration
* [#247](https://github.com/reportportal/reportportal/issues/247)  Get launch's URL using ReportPortal agent-java-testNG
* [#242](https://github.com/reportportal/reportportal/issues/242) "Replace Comments to All Selected Items" should be checked only after a comment is typed


### Widgets Improvements

**Widgets refactoring:**

* Launch execution & issue statistics widget refactoring with C3.js library;
* Launch statistics line chart refactoring with C3 library Investigated; percentage of launches refactoring with C3.js library;
* Different launches comparison chart refactoring with C3 library;
* Failed cases trend chart refactoring with C3 library;
* Non-Passed test-cases trend chart with C3 library;
* Test-Cases growth trend chart refactoring with C3 library;
* Launches duration chart refactoring with C3 library;
* Refactor charts for All launches & defect type page & launches table widget with refactoring with C3 library;
* Refactoring of charts on Project Info page;

**Line chart widget improvements:**

* Combine line chart and trend chart together;
* Added new zoom functionality on Line chart;
* [#232](https://github.com/reportportal/reportportal/issues/232) Added possibility to combine custom defects type on a Line chart widget;

**The most failed test cases widget:**

* Changing a design;
* Changing a mechanism of a results calculating (based on Unique ID);
* Added a name of chosen defect type on a widget view;

**Other widget improvements:**

[#174](https://github.com/reportportal/reportportal/issues/174) Widget silent update (save an actions with a legend after an auto-refresh);
Added test parameters separately from description;


### Improvements on ReportPortal

* Added Cheat Sheets to the documentation on ReportPortal (“Installation steps”);
* Added possibility to correct and improve documentation on reportportal.io by our Users;
* Added twitter widget;
* Added YouTube widget;
* Added a collapsing function for a documentation menu;
* Added new section for easy downloading ["Download"](http://reportportal.io/download)
* Added Docker-compose.yml generator
* Added extended scheme of agents` working

### Minor Improvements

* History table is grouping test items by Unique ID;
* Added ALL to multie drop-down list;
* Added clickable elements on Management board
* Remove match issue
* Added mechanism based on UID to Merge functionality
* Added"check All" to dropdown lists;


## Bug fixes

### Bugs

* [#249](https://github.com/reportportal/reportportal/issues/249) Notification rule for launch in Debug
* [#4](https://github.com/reportportal/plugin-jenkins/issues/4) Correct a link on Jenkins plugin
* [#268](https://github.com/reportportal/reportportal/issues/268) Warning about an outdated browser
* [#218](https://github.com/reportportal/reportportal/issues/218) system-out is not recognized when importing junit
* [#255](https://github.com/reportportal/reportportal/issues/255) Invalid link for the test in the "FOUND IN" column
* [#322](https://github.com/reportportal/reportportal/issues/322) Make startTestItemRQ in API 4.x case insensitive
* [#317](https://github.com/reportportal/reportportal/issues/317) Bad request. The importing file has invalid format. 'There are invalid xml files inside.
* [#314](https://github.com/reportportal/reportportal/issues/314) Set up different "superadmin" password
* [#307](https://github.com/reportportal/reportportal/issues/307) Cucumber Java Agent – Steps are sporadically missing from the test’s logs
* [#305](https://github.com/reportportal/reportportal/issues/305) JBehave NPE if givenStory=true for root story
* [#281](https://github.com/reportportal/reportportal/issues/281) system-out is not recognized when importing junit
* [#188](https://github.com/reportportal/reportportal/issues/188) Error Message: Start time of child ['Wed Jul 19 12:53:49 UTC 2017'] item should be same or later than start time ['Wed Jul 19 12:53:49 UTC 2017'] of the parent item/launch '596f565d2ab79c0007b48b46' Error Type: CHILD_START_TIME_EARLIER_THAN_PARENT


### Agent bugs

* [#220](https://github.com/reportportal/reportportal/issues/220) Cucumber-JVM: RP throws exception, when there is no features match the filter
* [#229](https://github.com/reportportal/reportportal/issues/229) Unable to view logs for some test items
* [#3](https://github.com/reportportal/logger-java-log4j/issues/3) Race condition failures: lost logs and failures
