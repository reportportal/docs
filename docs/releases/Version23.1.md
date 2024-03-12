---
sidebar_position: 3
sidebar_label: Version 23.1
---

# Version 23.1

## 1. What's Changed:

- **New ReportPortal logo**
  We are thrilled to unveil our refreshed brand identity with a brand-new logo for ReportPortal. As part of our ongoing commitment to innovation and evolution, we have embarked on a rebranding and redesign process to give our product a fresh, modern look and align with the exciting changes ahead.

- **Enhanced permissions:**
  Unlock the power of collaboration with limitless access to project filters, widgets, and dashboards for every project member. Now it will be simpler.

- **Rally/Jira Server effortless Integration:**  
  Post issues from ReportPortal to Jira and Rally seamlessly, without manual credentials.

- **Updated widget validation**:
  Easily create widgets with identical names across multiple dashboards.

- **Launch import improvements:**
  Get enhanced flexibility with the possibility to upload launches as both .ZIP and .XML files.

- **Attributes logics improvement:**
  No more need for creating separate rules for each attribute. Save your time with the integrated option to select either 'All' or 'Any' attributes when creating a Notification rule.

- **Additional email notification on password change:**
  Email notifications will always be sent to you whenever your password is changed so that you could promptly take action in case any unauthorized changes are made by third parties.


## 2. Technical Improvements:

- **Initial Admin Passwords updates:**
  We’ve adjusted the existing approach: upon the initial installation and the first login of the SuperAdmin, they will be required to create a unique initial password, distinct from the default password provided in the ReportPortal installation documentation. Failure to do so will result in the Auth service not starting.

- **Removal of Sure Python dependency:**
  To ensure compatibility with the Apache2 license, we have eliminated Sure Python dependency from ReportPortal.

- **Updated RabbitMQ image**
  RabbitMQ image updated to `bitnami/rabbitmq:3.10.8-debian-11-r7`

- **Services health checks**
  Added health checks for API, Jobs, and UAT services

- **New environments variables for Double Entry that processes logs by Jobs service**
  `RP_PROCESSING_LOG_MAXBATCHSIZE` and `RP_PROCESSING_LOG_MAXBATCHTIMEOUT`

## 3. Enhancements Based on Community Feedback:

- [#41](https://github.com/reportportal/plugin-bts-jira/issues/41). JIRA integration throws errors while setting up.
- [#243](https://github.com/reportportal/service-authorization/issues/243). Email not synchronized after change.
- [#287](https://github.com/reportportal/kubernetes/issues/287). Serviceui securityContext issue:
  The release UI image is now based on the non-root nginx image, which is more secure.
- [#1013](https://github.com/reportportal/reportportal/issues/1013). Display more results in Flaky/Most Failed test case tables:
  The number of items in Most failed test-cases table (TOP-20) has been increased from 20 to 50.
- [#1618](https://github.com/reportportal/reportportal/issues/1618). [v5] Okta SSO login is not possible.
- [#1790](https://github.com/reportportal/reportportal/issues/1790). URL links to dashboard are not loading the widgets.
- [#1868](https://github.com/reportportal/reportportal/issues/1868). Client exception with client-javascript, Request failed with status code 400:
  The maximum length of Attribute Key and Value has been increased to 512 characters.
- [#1891](https://github.com/reportportal/reportportal/issues/1891). Cannot report test results to the project with "demo" name.
- [#1912](https://github.com/reportportal/reportportal/issues/1912). Cloud Jira Integration Post Issue is not Coming.
- [#3132](https://github.com/reportportal/service-ui/issues/3132). Component Health Check - Needs to wrap text:
  The table now includes a new column named 'Name'. Hovering over the value in the table will display a tooltip with the full text of the value.

## 4. CVE addressed:

- [CVE-2018-10237](https://github.com/advisories/GHSA-mvr2-9pj6-7w5j), [CVE-2018-12022](https://github.com/advisories/GHSA-cjjf-94ff-43w7), [CVE-2018-12023](https://github.com/advisories/GHSA-6wqp-v4v6-c87c), [CVE-2018-14718](https://github.com/advisories/GHSA-645p-88qh-w398), [CVE-2018-14719](https://github.com/advisories/GHSA-4gq5-ch57-c2mg), [CVE-2018-14720](https://github.com/advisories/GHSA-x2w5-5m2g-7h5m), [CVE-2018-14721](https://github.com/advisories/GHSA-9mxf-g3x6-wv74), [CVE-2018-19360](https://github.com/advisories/GHSA-f9hv-mg5h-xcw9), [CVE-2018-19361](https://github.com/advisories/GHSA-mx9v-gmh4-mgqw), [CVE-2018-19362](https://github.com/advisories/GHSA-c8hm-7hpq-7jhg), [CVE-2019-11254](https://github.com/advisories/GHSA-wxc4-f4m6-wwqv), [CVE-2019-12814](https://github.com/advisories/GHSA-cmfg-87vq-g5g4), [CVE-2019-14892](https://github.com/advisories/GHSA-cf6r-3wgc-h863), [CVE-2019-14893](https://github.com/advisories/GHSA-qmqc-x3r4-6v39), [CVE-2019-16335](https://github.com/advisories/GHSA-85cw-hj65-qqv9), [CVE-2019-16942](https://github.com/advisories/GHSA-mx7p-6679-8g3q), [CVE-2019-16943](https://github.com/advisories/GHSA-fmmc-742q-jg75), [CVE-2019-17267](https://github.com/advisories/GHSA-f3j5-rmmp-3fc5), [CVE-2019-17531](https://github.com/advisories/GHSA-gjmw-vf9h-g25v), [CVE-2019-20330](https://github.com/advisories/GHSA-gww7-p5w4-wrfv), [CVE-2020-10650](https://github.com/advisories/GHSA-rpr3-cw39-3pxh), [CVE-2020-10672](https://github.com/advisories/GHSA-95cm-88f5-f2c7), [CVE-2020-10673](https://github.com/advisories/GHSA-fqwf-pjwf-7vqv), [CVE-2020-10968](https://github.com/advisories/GHSA-rf6r-2c4q-2vwg), [CVE-2020-10969](https://github.com/advisories/GHSA-758m-v56v-grj4), [CVE-2020-11111](https://github.com/advisories/GHSA-v3xw-c963-f5hc), [CVE-2020-11112](https://github.com/advisories/GHSA-58pp-9c76-5625), [CVE-2020-11619](https://github.com/advisories/GHSA-27xj-rqx5-2255), [CVE-2020-11620](https://github.com/advisories/GHSA-h4rc-386g-6m85), [CVE-2020-13956](https://github.com/advisories/GHSA-7r82-7xv7-xcpj), [CVE-2020-14040](https://github.com/advisories/GHSA-5rcv-m4m3-hfh7), [CVE-2020-14060](https://github.com/advisories/GHSA-j823-4qch-3rgm), [CVE-2020-14061](https://github.com/advisories/GHSA-c2q3-4qrh-fm48), [CVE-2020-14062](https://github.com/advisories/GHSA-c265-37vj-cwcc), [CVE-2020-15138](https://github.com/advisories/GHSA-wvhm-4hhf-97x9), [CVE-2020-24750](https://github.com/advisories/GHSA-qjw2-hr98-qgfh), [CVE-2020-25649](https://github.com/advisories/GHSA-288c-cq4h-88gq), [CVE-2020-29652](https://github.com/advisories/GHSA-3vm4-22fp-5rfm), [CVE-2020-35728](https://github.com/advisories/GHSA-5r5r-6hpj-8gg9), [CVE-2020-36179](https://github.com/advisories/GHSA-9gph-22xh-8x98), [CVE-2020-36180](https://github.com/advisories/GHSA-8c4j-34r4-xr8g), [CVE-2020-36181](https://github.com/advisories/GHSA-cvm9-fjm9-3572), [CVE-2020-36182](https://github.com/advisories/GHSA-89qr-369f-5m5x), [CVE-2020-36183](https://github.com/advisories/GHSA-9m6f-7xcq-8vf8), [CVE-2020-36184](https://github.com/advisories/GHSA-m6x4-97wx-4q27), [CVE-2020-36185](https://github.com/advisories/GHSA-8w26-6f25-cm9x), [CVE-2020-36186](https://github.com/advisories/GHSA-v585-23hc-c647), [CVE-2020-36187](https://github.com/advisories/GHSA-r695-7vr9-jgc2), [CVE-2020-36188](https://github.com/advisories/GHSA-f9xh-2qgp-cq57), [CVE-2020-36189](https://github.com/advisories/GHSA-vfqx-33qm-g869), [CVE-2020-36518](https://github.com/advisories/GHSA-57j2-w4cx-62h2), [CVE-2020-7746](https://github.com/advisories/GHSA-h68q-55jf-x68w), [CVE-2020-8840](https://github.com/advisories/GHSA-4w82-r329-3q67), [CVE-2021-20190](https://github.com/advisories/GHSA-5949-rw7g-wx7w), [CVE-2021-22060](https://github.com/advisories/GHSA-6gf2-pvqw-37ph), [CVE-2021-22096](https://github.com/advisories/GHSA-rfmp-97jj-h8m6), [CVE-2021-23341](https://github.com/advisories/GHSA-h4hr-7fg3-h35w), [CVE-2021-30640](https://github.com/advisories/GHSA-36qh-35cm-5w2w), [CVE-2021-32723](https://github.com/advisories/GHSA-gj77-59wh-66hg), [CVE-2021-33037](https://github.com/advisories/GHSA-4vww-mc66-62m6), [CVE-2021-3801](https://github.com/advisories/GHSA-hqhp-5p83-hx96), [CVE-2021-38561](https://github.com/advisories/GHSA-ppp9-7jff-5vj2), [CVE-2021-41079](https://github.com/advisories/GHSA-59g9-7gfx-c72p), [CVE-2021-4235](https://github.com/advisories/GHSA-r88r-gmrh-7j83), [CVE-2021-4279](https://github.com/advisories/GHSA-8gh8-hqwg-xf34), [CVE-2022-22950](https://github.com/advisories/GHSA-558x-2xjg-6232), [CVE-2022-22965](https://github.com/advisories/GHSA-36p3-wjmg-h94x), [CVE-2022-22969](https://github.com/advisories/GHSA-c2cp-3xj9-97w9), [CVE-2022-23181](https://github.com/advisories/GHSA-9f3j-pm6f-9fm5), [CVE-2022-24785](https://github.com/advisories/GHSA-8hfj-j24r-96c4), [CVE-2022-24999](https://github.com/advisories/GHSA-hrpp-h998-j3pp), [CVE-2022-27191](https://github.com/advisories/GHSA-8c26-wmh5-6g9v), [CVE-2022-28948](https://github.com/advisories/GHSA-hp87-p4gw-j4gq), [CVE-2022-31129](https://github.com/advisories/GHSA-wc69-rhjr-hc9g), [CVE-2022-32149](https://github.com/advisories/GHSA-69ch-w2m2-3vjp), [CVE-2022-40150](https://github.com/advisories/GHSA-x27m-9w8j-5vcw), [CVE-2022-40152](https://github.com/advisories/GHSA-3f7h-mf4q-vrm4), [CVE-2022-42003](https://github.com/advisories/GHSA-jjjh-jjxp-wpff), [CVE-2022-42004](https://github.com/advisories/GHSA-rgv9-q543-rqg4), [CVE-2022-42252](https://github.com/advisories/GHSA-p22x-g9px-3945), [CVE-2022-45685](https://github.com/advisories/GHSA-7rf3-mqpx-h7xg).

## 5. Link to Migration guide:
https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.23.1

## 6. Released versions

|Service Name|Repository|Tag|
|---|---| --- |
|Index|reportportal/service-index|5.8.0|
|Authorization|reportportal/service-authorization|5.8.0|
|UI|reportportal/service-ui|5.8.0|
|API|reportportal/service-api|5.8.0|
|Jobs|reportportal/service-jobs|5.8.0|
|Migrations|reportportal/migrations|5.8.0|
|Auto Analyzer|reportportal/service-auto-analyzer|5.7.5|
|Metrics Gatherer|reportportal/service-metrics-gatherer|5.7.4|
