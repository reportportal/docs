---
sidebar_position: 14
sidebar_label: Version 5.3.3
---

# Version 5.3.3

## New features

- Increased number of launches for Cumulative trend chart from 600 to 10 000 launches

## Small and nice updates

- Added expanded failed items by default. Improved an alignment of arrows and step names on Log view
- Launches. Log view. Attachment section. Gallery improvement for reducing the number of clicks
- Added a possibility to add attributes to refine rather than replace them
- [UI] Show first 5 lines for defect comment instead of 2 first lines on Step view and on Log view
- Increased a description for widgets/dashboards/filters to 1500 symbols

## Analyzer improvements
- Analyzer. Add more options for log lines in settings
- Added a boosting feature for the similarity between log lines with more important namespaces

## Bugfixing
- Fixed: [#867](https://github.com/reportportal/reportportal/issues/867) Very poor scroll performance
- Fixed: [#1128](https://github.com/reportportal/reportportal/issues/1128) Wrong password in the email letter when adding a new user
- Fixed: [#1182](https://github.com/reportportal/reportportal/issues/1182) Year in footer copyright text is not up to date
- Fixed [#857](https://github.com/reportportal/reportportal/issues/857) Total Failed count is not matched with Test cases after Merging the multiple Launches [ deep merge]
- Fixed: [#911](https://github.com/reportportal/reportportal/issues/911) Widget table column width (Unique bugs table)
- Fixed: [#871](https://github.com/reportportal/reportportal/issues/871) Launch duration chart label "seconds"
- Fixed: [#1050](https://github.com/reportportal/reportportal/issues/1050) Add UUID data to TestItem Controller when querying using filters
- Fixed: [#1184](https://github.com/reportportal/reportportal/issues/1184) No history of test-items with defect
- Fixed: History. Compare functionality. The custom column has items from 1st execution instead of the latest one
- Fixed: 'Add new widget' from Launches page in case no dashboards on the project
- Fixed:  Only one attribute is returned for the launches in  'Launches table' widget
- Fixed: Only the first 12 attachments are displayed in 'Attachments' section
- [Performance] Issue with DB CPU utilization of "Flaky" widget query
- Fixed unclassified errors from inserts of issues for failed items
