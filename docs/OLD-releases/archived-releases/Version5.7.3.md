---
sidebar_position: 4
sidebar_label: Version 5.7.3
description: "Explore ReportPortal Version 5.7.3: enhanced error log navigation, improved lazy loading, and optimized Elasticsearch performance for better test analysis."
---

# Version 5.7.3

## Features:

- Implemented functionality to find Next and Previous Error Logs.
  Buttons “Show”, “Next” and “Previous” error logs minimize user’s efforts of scrolling across all the available logs.
- Improved lazy loading: the number of pre-loaded logs is 300 which helps to get a better understanding of preconditions to a certain error. What is more, now it’s possible to load 300 more logs or load all the current step at once.
- “Stack trace” in log messages now loads all the Error Logs.
  Besides, with the help of “Jump to” button on the Error Log it’s possible to switch to this Error Log displayed in the “All Logs” view.

## Small and nice updates:

[#3109](https://github.com/reportportal/service-ui/pull/3109) Launch and test item description limits have been increased to 2048. Improved description view on all the “Launches” pages means that now even more useful links, artifacts, OKRs, etc can be stored in the description.

## Bugfixing:
We have refactored logs double-entry saving to Elasticsearch by changing index type: now logs are saved in indexes per project instead of indexes per launch. It helps us to save the performance of Elasticsearch considering other operations and the data which we have processed via Elastic.
More details can be found via the [link](https://reportportal.io/blog/performance-improvements-in-5-7-3).

## Technical updates:

- Updated RabbitMQ to 3.10.7.
- Environment variable added for Service Jobs to configure http/https usage (added to values.yaml for RabbitMQ as well).
- Added the logics of logs deletion (by jobs): when the logs are deleted by jobs from PostgreSQL, they are also deleted from ElasticSearch.

## CVE addressed:

- [CVE-2017-18640](https://github.com/advisories/GHSA-rvwf-54qp-4r6v)
- [CVE-2020-17527](https://github.com/advisories/GHSA-vvw4-rfwf-p6hx)
- [CVE-2020-25032](https://github.com/advisories/GHSA-xc3p-ff3m-f46v)
- [CVE-2020-25638](https://github.com/advisories/GHSA-j8jw-g6fq-mp7h)
- [CVE-2021-22112](https://github.com/advisories/GHSA-gq28-h5vg-8prx)
- [CVE-2021-22118](https://github.com/advisories/GHSA-gfwj-fwqj-fp3v)
- [CVE-2021-22119](https://github.com/advisories/GHSA-w9jg-gvgr-354m)
- [CVE-2021-25122](https://github.com/advisories/GHSA-j39c-c8hj-x4j3)
- [CVE-2021-25329](https://github.com/advisories/GHSA-jgwr-3qm3-26f3)
- [CVE-2021-29510](https://github.com/advisories/GHSA-5jqp-qgf6-3pvh)
- [CVE-2021-33503](https://github.com/advisories/GHSA-q2q7-5pp4-w6pg)
- [CVE-2021-35515](https://github.com/advisories/GHSA-7hfm-57qf-j43q)
- [CVE-2021-35516](https://github.com/advisories/GHSA-crv7-7245-f45f)
- [CVE-2021-35517](https://github.com/advisories/GHSA-xqfj-vm6h-2x34)
- [CVE-2021-36090](https://github.com/advisories/GHSA-mc84-pj99-q6hh)
- [CVE-2022-21724](https://github.com/advisories/GHSA-v7wg-cpwc-24m4)
- [CVE-2022-22970](https://github.com/advisories/GHSA-hh26-6xwr-ggv7)
- [CVE-2022-22978](https://github.com/advisories/GHSA-hh32-7344-cg2f)
- [CVE-2022-24761](https://github.com/advisories/GHSA-4f7p-27jc-3c36)
- [CVE-2022-25857](https://github.com/advisories/GHSA-3mc7-4q67-w48m)
- [CVE-2022-27772](https://github.com/advisories/GHSA-cm59-pr5q-cw85)

