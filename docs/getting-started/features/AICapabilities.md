---
sidebar_position: 3
sidebar_label: AI capabilities
description: How ReportPortal uses ML, MCP, and agentic reporting together — from test design and execution to failure analysis and release decisions.
---

# AI capabilities for the full testing lifecycle

ReportPortal leverages AI assistants via [MCP](/integrations/ai-agents/MCPServer) to accelerate testing at every stage of the lifecycle. The ReportPortal MCP Server connects AI clients such as Claude, Cursor, and GitHub Copilot using the Model Context Protocol (MCP). These assistants can help teams create test cases, organize plans, and review reported results.

## Design: AI-assisted test case creation

AI assistants connected via the ReportPortal MCP Server can generate, review, and refine test cases directly in the [Test Management System](/test-management-system/). Instead of writing every scenario from scratch, QA teams can prompt AI to create [test cases](/test-management-system/test-case-library/TestCases) based on requirements — then review and refine them in ReportPortal.

*Example:* A QA lead provides a feature specification to AI. AI generates test cases for the happy path and error handling, formats them in ReportPortal, and the team refines them.

## Plan: Manage test structure with AI

MCP tools enable AI to create and manage [test folders](/test-management-system/test-case-library/Folders), [milestones](/test-management-system/milestones/), and [test plans](/test-management-system/milestones/TestPlan). AI can help structure test work efficiently, while teams keep control over strategy and prioritization.

*Example:* AI helps organize a release test suite by creating milestones for different test stages and populating test plans with relevant test cases.

## Execute: Unified test reporting

ReportPortal [consolidates results](/getting-started/features/UnifiedTestReporting) from automated tests, [agentic QA tests](/test-results-reporting/AgenticTestResults), and manual testing in one place. All test execution data — [logs, screenshots, and other artifacts](/getting-started/features/RichArtifactsInTestReports) — is available for analysis and investigation. AI assistants can access that context through MCP.

*Example:* Your CI/CD pipeline reports automated test results. In parallel, agentic QA tests explore the application autonomously. Manual testers verify critical flows. All results appear in ReportPortal with full context and are accessible to AI assistants for analysis through MCP.

## Analyze: AI-powered failure investigation

ReportPortal's [Unique Error Analysis](/analysis/UniqueErrorAnalysis) and [Auto-Analysis](/analysis/AutoAnalysisOfLaunches) automatically group related failures and suggest root causes. Instead of manually reviewing hundreds of logs, AI surfaces the signal: 20 failures might be grouped into 3 unique errors. [ML suggestions](/analysis/MLSuggestions) can auto-classify defect types based on historical patterns. For an overview of this built-in layer, see [AI-based failure reason detection](/getting-started/features/AIFailureReasonDetection).

*Example:* 200 test failures appear. Unique Error Analysis groups them: 150 from timeout (infrastructure issue), 40 from a UI change (test maintenance), 10 from data setup. The team fixes 3 root causes instead of investigating 200 items separately.

## Visualize: Build custom dashboards in your AI tool

Using the [MCP Server](/integrations/ai-agents/MCPServer), AI assistants in Claude, Cursor, and other tools can build custom dashboards and widgets directly in your AI client. Pull live test data from ReportPortal and create tailored visualizations for your team's needs — without leaving the development environment.

You can also track the same metrics in ReportPortal with [dashboards and widgets](/dashboards-and-widgets/).

*Example:* In Cursor, you configure the ReportPortal MCP connector. You then ask the AI to create a dashboard showing test pass rates by feature, failure trends, and critical defects — and the dashboard appears in the editor for real-time monitoring.

## Release: Quality Gates for automated decision-making

[Quality Gates](/quality-gates/) evaluate test launches against configured rules: pass rate, number of defects by type, test count, and new failures compared to baselines. Teams set criteria like "block release if more than 5 Product Bugs are found" or "pass rate must be > 95%." Quality Gates integrate with CI/CD pipelines to enforce consistent, automated release decisions.

*Example:* A release candidate passes a Quality Gate automatically: 96.5% pass rate, 2 Product Bugs (threshold is 5), zero new failures. The gate turns green; CI/CD proceeds. If it fails, the gate shows exactly which rule blocked the release.

## Why it matters

Manual testing processes are slow and do not scale. By integrating AI across the testing lifecycle, ReportPortal helps teams:

- Reduce analysis time by automatically grouping failures and suggesting defect types
- Enforce consistent quality standards through automated Quality Gates
- Make data-driven release decisions without manual spreadsheets
- Use AI as a seamless part of the test workflow via MCP

By integrating AI across every stage of testing, ReportPortal helps turn QA from a bottleneck into a competitive advantage.

To connect an assistant, start with [MCP Server](/integrations/ai-agents/MCPServer). For cases and plans, see [Test Management System](/test-management-system/). To report agent sessions, see [Agentic test results](/test-results-reporting/AgenticTestResults).
