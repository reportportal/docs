---
sidebar_position: 3
sidebar_label: AI capabilities
description: How ReportPortal uses ML, MCP, and agentic reporting together — from test design and execution to failure analysis and release decisions.
---

# AI capabilities

Built-in ML triage detects failure patterns and root causes automatically, while AI agents connected via [MCP](/integrations/ai-agents/MCPServer) extend that work across the pipeline — from test design to a release decision.

ReportPortal does not treat AI as a single analyzer step. It supports the whole testing cycle: suggesting and organizing cases in the [Test Management System](/test-management-system/), executing and monitoring runs (including [agentic test results](/test-results-reporting/AgenticTestResults)), classifying failures, and helping teams make go / no-go decisions with evidence in one place.

**Failure analysis on reported results**

Daily regressions produce more failures than a team can review by hand. [AI-based failure reason detection](/getting-started/features/AIFailureReasonDetection) is the built-in layer: [Auto-Analysis](/analysis/AutoAnalysisOfLaunches) assigns defect types from historical investigations, [Unique Error](/analysis/UniqueErrorAnalysis) groups identical messages, and [ML suggestions](/analysis/MLSuggestions) reuse comments and bug-tracker links from similar items.

Saved classifications become training data, so the next similar failure is more likely to be labeled without a person opening every log. Use this when the question is *why this run failed* and what to fix first.

**AI tools connected to ReportPortal**

The MCP Server is a bridge to assistants such as Cursor, Copilot, or Claude. Those tools can query launches, logs, and attachments, suggest defect types, and trigger analysis or [quality gates](/getting-started/features/QualityGates) after you confirm the action.

When TMS is in the same project, the assistant is not limited to “what failed.” It can work with **what should be tested** (library, folders, plans, milestones) and **what actually ran**. Typical flows:

* draft or organize cases from specs, then keep the library as the source of truth
* compare planned cases to executions and list what is missing or failed — see [AI Analysis](/analysis/AIAnalysis)
* apply an approved defect type so Auto-Analysis can learn from it

That is how design and planning stay connected to reporting: the agent does not replace TMS or Launches; it operates on the same objects your team already uses.

**Results from AI agents**

Agentic testing is a different source of data. An agent explores the product, decides what to check, and reports a session with steps, logs, and attachments. ReportPortal stores those [agentic launches](/test-results-reporting/AgenticTestResults) in the same project as scripted suites, with a distinct launch type so they stay comparable rather than mixed into one unlabeled pile.

During execution you still get [real-time](/getting-started/features/RealTimeReporting) progress. For release, [Quality Gates](/getting-started/features/QualityGates) can use the analyzed project data — including agentic runs — as the automated GO / NO-GO in CI/CD.

In short: MCP is how *your* AI tools talk to ReportPortal. Agentic reporting is how *testing agents* send results in. ML triage is what ReportPortal does with failures once they are there. You do not have to adopt all three at once, but they share one record of what was tested and what blocked the release.

To set up a connection, start with [MCP Server](/integrations/ai-agents/MCPServer). For cases and plans, see [Test Management System](/test-management-system/). To report agent sessions, see [Agentic test results](/test-results-reporting/AgenticTestResults).
