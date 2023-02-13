---
sidebar_position: 1
sidebar_label: Reducing regression time by 50%
---


# Reducing regression time by 50%

EPAM helps a Canadian retail company to reverse-engineer their legacy IBM-based store management system to a modern tech stack. As part of this project, ReportPortal was deployed as a centralized test reporting system.

**Challenges**

- Unavailble environments (15VMs) blocked by aggregation scripts
- High risk of aggregation fail: 1 in 10 aggregations fails. In case of a fail, the whole regression should be re-run.
- Constant regression fails move weekly releases for 1 day
- Lack of information for investigation: no screenshots/no history/no structure/no all info
- Duplicated analysis efforts: missing history of test cases and known issues

**Highlights**

- Simplified test run reporting by integrating the test framework with ReportPortal.io
- Distributed test execution data for root cause analysis: logs/screenshots/ attachments
- Provided a possibility to triage failed items (AI-based and manual)
- Provided clear reporting for non-technical stakeholders
- Real-time reporting
- Save on early reaction: team result analysis right after execution started in real time
- Collaborative results analysis
- Test Case History helped to identify flaky test cases
- Extended ML Analyzer

<media-view src={require('./img/CaseStudy1.png')} alt="Case Study Reducing regression time by 50%" />