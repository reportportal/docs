---
sidebar_position: 16
sidebar_label: 15. How to evaluate product health with ReportPortal
---


# 15. How to evaluate product health with ReportPortal

You can create a [“Component health check”](/dashboards-and-widgets/ComponentHealthCheck) widget based on attributes to understand which components do not work well, and which areas we need to pay more attention to.

**Use case 1**

**Goal:** define which features are affected by failed scenarios.

<media-view src={require('./img/UseCase1-1.png')} alt="Define features which affected by failed scenarios" />

You can see scenarios on the first screenshot.

<media-view src={require('./img/UseCase1-2.png')} alt="Scenarios" />

Select failed scenario to see which features were affected.

<media-view src={require('./img/UseCase1-3.png')} alt="Features" />

Finally, let’s see what is the priority of the failed test cases.

<media-view src={require('./img/UseCase1-4.png')} alt="Priority of the failed test cases" />

**Use case 2**

**Goal:** define the priority of failed test cases.

<media-view src={require('./img/UseCase2-1.png')} alt="Define the priority of failed test cases" />

You can see that failures occurred in test cases with critical priority.

<media-view src={require('./img/UseCase2-2.png')} alt="Test cases with critical priority" />

Select Critical to understand which operating system is having problems.

<media-view src={require('./img/UseCase2-3.png')} alt="Operating system which is having problems" />

Next, select Android to see the list of features that need more attention.

<media-view src={require('./img/UseCase2-4.png')} alt="List of features" />

**Use case 3**

**Goal:** define state of test cases on mobile devices.

<media-view src={require('./img/UseCase3-1.png')} alt="Define state of test cases on mobile devices" />

On the screenshot below you can see that our trouble spot is Android.

<media-view src={require('./img/UseCase3-2.png')} alt="Trouble spot" />

You can go to the test cases level and see what problems they had.

<media-view src={require('./img/UseCase3-3.png')} alt="Test cases level" />