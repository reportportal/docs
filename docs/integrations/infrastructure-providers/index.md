---
sidebar_label: Infrastructure providers
description: Enrich ReportPortal test results via infrastructure providers like Sauce Labs with videos, logs and full execution environment context.
---

# Infrastructure providers

Infrastructure providers allow you to connect ReportPortal with external execution environments where your automated tests actually run. These integrations create a direct link between test results and the underlying infrastructure, giving teams better visibility into execution details without leaving the reporting platform.

By integrating with infrastructure providers such as Sauce Labs, you can enrich test results with additional context like execution metadata, environment details, and artifacts such as videos or logs. For example, video recordings of test runs can be accessed directly from ReportPortal, helping engineers quickly understand what happened during execution.

Integrations can be configured at both global and project levels, allowing organizations to define shared settings while maintaining flexibility for specific teams or environments. This makes it easier to manage infrastructure connections across multiple projects.

Once configured, test executions are linked to external jobs using identifiers (such as job IDs passed as attributes). This ensures that each test result in ReportPortal is connected to its corresponding execution in the infrastructure provider.

This approach simplifies debugging, improves traceability, and reduces the need to switch between tools. By integrating infrastructure providers like Sauce Labs, ReportPortal delivers a more complete and centralized view of your test automation process.

import DocCardList from '@theme/DocCardList';

<DocCardList />
