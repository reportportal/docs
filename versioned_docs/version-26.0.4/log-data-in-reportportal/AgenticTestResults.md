---
sidebar_position: 4
sidebar_label: Agentic test results
description: Learn how to report AI agentic test results to ReportPortal to get a unified view of your testing pipeline, verify AI agent work with evidence, and make informed release decisions.
---

# Agentic test results

As AI-driven testing becomes a core part of modern quality engineering, ReportPortal provides first-class support for **agentic test results** — outcomes produced by autonomous AI agents rather than traditional scripted test automation.

Starting from version [26.0.3](https://github.com/reportportal/reportportal/releases/tag/26.0.3), ReportPortal can receive and display results from AI agentic testing pipelines alongside classic automation results. This gives teams a **unified view** of their entire testing landscape — human-authored tests, automated regression suites, and AI agent sessions — in one place.

## Why report agentic results to ReportPortal?

- **Full testing picture.** Consolidate results from AI agents and traditional automation into a single dashboard to support confident release decisions.
- **Evidence-based verification.** Capture logs, attachments, and step-level details from agent sessions so you can review exactly what each AI agent tested and why it passed or failed.
- **Traceability.** Distinguish agentic runs from classic launches at a glance in the ReportPortal UI, making it easy to track coverage and trends over time.

## How to report agentic results

To integrate your AI testing workflows with ReportPortal, choose one of the following approaches.

### Programmatically

Use ReportPortal [integration guides](./ImplementOwnIntegration.md) and [reporting SDKs](./ReportingSDK.md) for various programming languages to send results from your agent pipeline via the ReportPortal API.

### Using agent skills

Coming soon.

In the meantime, you can explore and experiment with the [goRP CLI skill](https://github.com/reportportal/goRP/blob/master/.cursor/skills/reportportal/SKILL.md) to report results directly from an AI agent session.

:::tip Mark your launches as agentic
To [distinguish](/work-with-reports/ViewLaunches#launches-tab) agentic launches from classic automation in the ReportPortal UI, include the following system attribute when starting a launch:

```json
{
  "key": "isAgentic",
  "value": true,
  "system": true
}
```

This attribute is hidden from end users but is used by ReportPortal to apply the agentic visual indicator on the Launches page along with extended filtering options.
:::

## Integration showcase

The [AgenticQA](https://test.io/ai-in-qa/agentic-qa) testing platform integrates with ReportPortal out of the box, streaming evidence from AI agent test sessions in real time.
