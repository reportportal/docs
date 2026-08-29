---
title: Test Management System
description: Manage manual testing in a structured way — from creating reusable test cases to executing tests and analyzing results.
---

# Test Management System

The Test Management System (TMS) helps teams manage manual testing in a structured way — from creating reusable test cases to executing tests and analyzing results.

:::note
The Test Management System is available at the project level and can be accessed from the project sidebar.
:::

## How TMS works

The TMS guides teams through a complete testing workflow. Each component plays a specific role in this cycle:

* **Test Case Library** — the foundation. Create and organize reusable test cases that teams can reuse across multiple testing cycles.
* **Test Plans** — define what you're testing. Select specific test cases and establish the scope of testing for a release, feature, sprint, or regression.
* **Milestones** — add context to when and why you're testing. Connect Test Plans to releases, sprints, or other project timelines.
* **Manual Launches** — execute the tests. Turn planned test cases into active executions that testers can run and track.
* **Review outcomes** — analyze results. Identify failed executions, track progress, and make decisions based on testing data.

The workflow repeats — insights from each cycle feed back into the next one.

## TMS Components

| Component | Purpose | Key Capabilities | Dependencies |
| --- | --- | --- | --- |
| **Test Case Library** | Stores and manages reusable manual test cases. | Folders and subfolders, priority, tags, descriptions, test scenarios. | Independent component |
| **Test Plans** | Defines the scope of testing for a specific release, feature, or testing activity. | Selected test cases, ability to add or remove tests, bulk updates. | Uses test cases from Test Case Library |
| **Milestones** | Adds planning and timeline context to testing activities. | Start and end dates, status tracking (Scheduled, Testing, Completed), association with Test Plans. | Can be linked to one or multiple Test Plans |
| **Manual Launches** | Provides a place to execute tests and track execution results. | Test executions, statuses (Passed, Failed, Skipped, In Progress), comments, bug tracking links. | Can be created from Test Plans or selected test cases from Test Case Library |

import DocCardList from '@theme/DocCardList';

<DocCardList />
