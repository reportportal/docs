"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32309],{36580:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=s(85893),n=s(11151);const o={sidebar_position:3,sidebar_label:"Tutorial",description:"ReportPortal guide. How to do test failure analysis, how to create dashboard to manage test results and use capabilities of continuous testing platform."},i="Tutorial",r={id:"tutorial/index",title:"Tutorial",description:"ReportPortal guide. How to do test failure analysis, how to create dashboard to manage test results and use capabilities of continuous testing platform.",source:"@site/docs/tutorial/index.mdx",sourceDirName:"tutorial",slug:"/tutorial/",permalink:"/docs/tutorial/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/tutorial/index.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Tutorial",description:"ReportPortal guide. How to do test failure analysis, how to create dashboard to manage test results and use capabilities of continuous testing platform."},sidebar:"docs",previous:{title:"REST API",permalink:"/docs/features/RESTAPI"},next:{title:"Installation Steps",permalink:"/docs/installation-steps/"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"How to explore ReportPortal without installation",id:"how-to-explore-reportportal-without-installation",level:2},{value:"How to deploy ReportPortal instance",id:"how-to-deploy-reportportal-instance",level:2},{value:"How to invite Team to ReportPortal",id:"how-to-invite-team-to-reportportal",level:2},{value:"How to generate first data in ReportPortal",id:"how-to-generate-first-data-in-reportportal",level:2},{value:"How to triage test failures with ReportPortal",id:"how-to-triage-test-failures-with-reportportal",level:2},{value:"How to filter test executions in ReportPortal",id:"how-to-filter-test-executions-in-reportportal",level:2},{value:"How to add more attributes for filtering launches in ReportPortal",id:"how-to-add-more-attributes-for-filtering-launches-in-reportportal",level:2},{value:"How to visualize test results in ReportPortal",id:"how-to-visualize-test-results-in-reportportal",level:2},{value:"How to use ML power of ReportPortal",id:"how-to-use-ml-power-of-reportportal",level:2},{value:"How to use Pattern Analysis",id:"how-to-use-pattern-analysis",level:2},{value:"How to run Auto-Analysis in ReportPortal",id:"how-to-run-auto-analysis-in-reportportal",level:2},{value:"How to see the historical trend of the causes of falls",id:"how-to-see-the-historical-trend-of-the-causes-of-falls",level:2},{value:"How to make automated test results part of my pipeline",id:"how-to-make-automated-test-results-part-of-my-pipeline",level:2},{value:"How to use nested steps and attributes in ReportPortal",id:"how-to-use-nested-steps-and-attributes-in-reportportal",level:2},{value:"How to evaluate product health with ReportPortal",id:"how-to-evaluate-product-health-with-reportportal",level:2},{value:"How to add test results to ReportPortal",id:"how-to-add-test-results-to-reportportal",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{MediaViewer:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"tutorial",children:"Tutorial"}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"The goal of this tutorial is to introduce all ReportPortal capabilities. Along the way, you'll learn how to use ReportPortal features and how to get the most out of them, as well as expert tips for using our test automation results dashboard."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-explore-reportportal-without-installation",children:"How to explore ReportPortal without installation"}),"\n",(0,a.jsx)(t.p,{children:"One day you found ReportPortal which promises to simplify the analysis of failed tests and bring many more benefits."}),"\n",(0,a.jsx)(t.p,{children:"\u201cReally? I don\u2019t believe it\u201d, \u2013 your first reaction."}),"\n",(0,a.jsxs)(t.p,{children:["Do you just want to see how ReportPortal works to make sure you need it? It is easy! Just visit our ",(0,a.jsx)(t.a,{href:"https://demo.reportportal.io/ui/",children:"Demo instance"})," and use default credentials for login:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"login: default\n\npassword: 1q2w3e\n"})}),"\n",(0,a.jsx)(t.p,{children:'Or you can use a button "Login with GitHub" to login.'}),"\n",(0,a.jsx)(t.h2,{id:"how-to-deploy-reportportal-instance",children:"How to deploy ReportPortal instance"}),"\n",(0,a.jsx)(t.p,{children:"You tried the demo session. You are impressed with ReportPortal features / possibilities and decided to install a ReportPortal. Excellent! Visit our detailed documentation on how deploy ReportPortal:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/installation-steps/DeployWithKubernetes",children:"with Kubernetes"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/installation-steps/DeployWithDocker",children:"with Docker"})}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Please also check the ",(0,a.jsx)(t.a,{href:"/installation-steps/HardwareRequirements",children:"technical requirements for your system"})]}),"\n",(0,a.jsxs)(t.p,{children:["If you don\u2019t want to deal with technical details, we will be happy to ",(0,a.jsx)(t.a,{href:"https://reportportal.io/pricing/saas",children:"assist you"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-invite-team-to-reportportal",children:"How to invite Team to ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"Finally, you logged into ReportPortal. And you see just empty tabs... Looks confusing for the first step. What can we do to get started?"}),"\n",(0,a.jsx)(t.p,{children:"Let\u2019s start by inviting your team members. You can also do it as a final step, but it would be nice to investigate ReportPortal together."}),"\n",(0,a.jsxs)(t.p,{children:["In order to add other users to ReportPortal you can send invitations via email. To make sure that the Email service is configured, please follow the next steps (as an admin user): ",(0,a.jsx)(t.a,{href:"/plugins/EmailServer",children:"E-mail server configuration"}),". Once emailing is configured, you can either ",(0,a.jsx)(t.a,{href:"/configuration/CreationOfProjectAndAddingUsers#invite-a-user-to-a-project",children:"invite new users"})," or ",(0,a.jsx)(t.a,{href:"/configuration/CreationOfProjectAndAddingUsers#add-users-to-project",children:"create a new user"})," in the project."]}),"\n",(0,a.jsx)(t.p,{children:"After this step you will have emailing capabilities enabled, and several more users invited to ReportPortal."}),"\n",(0,a.jsx)(o,{src:s(40338),alt:"Invite Users to our test automation reporting dashboard"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-generate-first-data-in-reportportal",children:"How to generate first data in ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"The main section for work with ReportPortal is Launches tab in the left menu. But Launches table is empty and it\u2019s hard to understand what ReportPortal can do and what to do next."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/configuration/ProjectConfiguration#demo-data",children:"Generate demo data"})," feature can help you with this, by generating a set of demo launches (test executions), filters and dashboards."]}),"\n",(0,a.jsx)(o,{src:s(9977),alt:"Generate First Data in our open source test reporting tool"}),"\n",(0,a.jsx)(t.p,{children:"Once generated, you will see 5 launches (each Launch is equivalent to a testing session, or testing execution, or one Jenkins job). On the Filters tab you will find 1 filter. And Dashboards will have a Demo dashboard with visualizations/widgets built on top of the data from launches."}),"\n",(0,a.jsxs)(t.p,{children:["Let\u2019s understand how ReportPortal works based on demo data, and later we can return to the upload of your actual data from your testing frameworks. You can ",(0,a.jsx)(t.a,{href:"/tutorial/#how-to-add-test-results-to-reportportal",children:"navigate to this section"})," right now if you wish."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-triage-test-failures-with-reportportal",children:"How to triage test failures with ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"So far you have Demo launches in ReportPortal. You see the list of test executions on the Launches page with Total/Passed/Failed/Skipped numbers of test cases, and some of the issues are already sorted: Product Bug, Auto Bug, System Issue. But some issues required the attention of engineers, and they are marked with the \u201cTo Investigate\u201d flag."}),"\n",(0,a.jsx)(o,{src:s(48361),alt:"Triage Test Failures"}),"\n",(0,a.jsxs)(t.p,{children:["The next step and the main goal for QA engineers is defect triage. This means opening each test case, identifying the root of the failure reason, and categorizing/associating it with a particular defect type. We call this action ",(0,a.jsx)(t.a,{href:"/analysis/ManualAnalysis",children:"\u201cMake decision\u201d"}),"."]}),"\n",(0,a.jsx)(o,{src:s(3925),alt:"Test failure analysis and Make Decision modal"}),"\n",(0,a.jsx)(t.p,{children:"Based on test results, you can make decisions on further steps to improve your product. For example, you can arrange a call with a Development Team Leader to discuss bug fixing, if you have a lot of Product Bugs."}),"\n",(0,a.jsx)(t.p,{children:"In case of a large number of System Issues, you can ask a DevOps engineer to fix the environment or to review the testing infrastructure. Thus, you won\u2018t waste your team's effort and time by receiving failed reports due to an inconsistent environment."}),"\n",(0,a.jsx)(t.p,{children:"If you have a lot of Automation Bugs, put more effort into the test cases stabilization, and convert test automation (flaky) fails into valuable test cases, which will test your application for real."}),"\n",(0,a.jsx)(t.p,{children:"Moreover, you can post and link issues in just a few clicks using Bug Tracking System plugins:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/plugins/AtlassianJiraServer",children:"Atlassian Jira Server"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/plugins/AtlassianJiraCloud",children:"Atlassian Jira Cloud"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/plugins/AzureDevOps",children:"Azure DevOps"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/plugins/Rally",children:"Rally"})}),"\n",(0,a.jsx)(o,{src:s(41877),alt:"Post and Link issue"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-filter-test-executions-in-reportportal",children:"How to filter test executions in ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"To distinguish executions by type and focus only on required or related to your team today, you can use filters. Filters have \u201ctab\u201d capabilities, so you can easily navigate between different selections. You can filter by different criteria like launch name, description, number of failed or passed test cases, attributes, etc."}),"\n",(0,a.jsx)(o,{src:s(7163),alt:"Filter Test Executions"}),"\n",(0,a.jsx)(o,{src:s(52947),alt:"Created Filters"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-add-more-attributes-for-filtering-launches-in-reportportal",children:"How to add more attributes for filtering launches in ReportPortal"}),"\n",(0,a.jsxs)(t.p,{children:["There is also a possibility to filter by attributes. You can find an example of setting attributes in your ",(0,a.jsx)(t.a,{href:"/user-account/EditPersonalInformation",children:"profile"}),". You can include them in the parameters of automation, then additional attributes will appear under the Launch name, and you can filter test executions by these attributes as well."]}),"\n",(0,a.jsx)(o,{src:s(26308),alt:"Attributes in Profile"}),"\n",(0,a.jsx)(o,{src:s(98233),alt:"Attributes for the Launch"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-visualize-test-results-in-reportportal",children:"How to visualize test results in ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"So, you\u2019ve separated your own test data from others. Now let\u2019s visualize our test results. Navigate to the Dashboards tab and open the Demo Dashboard. Here you can see basic visualizations that will help you understand the state of the product."}),"\n",(0,a.jsxs)(t.p,{children:["You can also create new Dashboards. Since managers love charts, let\u2019s practice building some self-updated charts! And let them see the actual statistics and value of your test automation along with you, at any given moment of the time, since dashboards and widgets will be updated in real-time.\nThe best widget to start from is ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/InvestigatedPercentageOfLaunches",children:"Investigated percentage of launches"})," which shows how well the QA team analyzes failures."]}),"\n",(0,a.jsx)(o,{src:s(32965),alt:"Create Investigated percentage of launches widget"}),"\n",(0,a.jsx)(o,{src:s(27328),alt:"Example of dashboard to manage test results: Investigated percentage of launches"}),"\n",(0,a.jsxs)(t.p,{children:["Once QA team categorized all issues, we can understand why automation tests fail. Create ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/LaunchStatisticsChart",children:"Launch statistics chart"})," widget for that. It shows the reasons of failures, for example, broken environment, outdated tests, product bugs."]}),"\n",(0,a.jsx)(o,{src:s(82167),alt:"Create Launch statistics chart widget"}),"\n",(0,a.jsx)(o,{src:s(52691),alt:"Example of dashboard for QA automation: Launch statistics chart example"}),"\n",(0,a.jsxs)(t.p,{children:["The next step can be creating the ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/OverallStatistics",children:"Overall statistics chart"})," to define the Total test cases number and how many of them are Passed/Failed/Skipped. This widget can be applied for all launches or for the latest launches only."]}),"\n",(0,a.jsx)(o,{src:s(45413),alt:"Create Overall statistics chart widget"}),"\n",(0,a.jsx)(o,{src:s(44257),alt:"Overall statistics chart example"}),"\n",(0,a.jsxs)(t.p,{children:["We've reviewed basic widgets. How can I get some insights from launches? Our suggestion is to create a ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/FlakyTestCasesTableTop50",children:"Flaky test cases"})," table to find tests that often change status from passed to failed in different launches. These unstable tests do not give any confidence. The widget allows you to identify them so that you can pay special attention to them and fix them faster."]}),"\n",(0,a.jsx)(o,{src:s(91035),alt:"Create Flaky test cases widget"}),"\n",(0,a.jsx)(o,{src:s(80223),alt:"Flaky test cases example"}),"\n",(0,a.jsxs)(t.p,{children:["Next, you might want to understand how long it takes to pass each test case. ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/MostTimeConsumingTestCasesWidgetTop20",children:"Most time-consuming test cases"})," widget helps to find the longest scenarios."]}),"\n",(0,a.jsx)(o,{src:s(99619),alt:"Create Most time-consuming test cases widget"}),"\n",(0,a.jsx)(o,{src:s(44063),alt:"Most time-consuming test cases example"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-ml-power-of-reportportal",children:"How to use ML power of ReportPortal"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/analysis/MLSuggestions",children:"ML suggestions"})," feature prompts similar tests and defect types they have. In this way we don\u2019t waste time re-reading the log but use ML hints instead."]}),"\n",(0,a.jsx)(t.p,{children:'ML suggestions analysis is running every time you enter "Make decision" editor. ML suggestions are executed for all test items no matter what defect type they currently have.'}),"\n",(0,a.jsx)(o,{src:s(79050),alt:"ML suggestions example"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-pattern-analysis",children:"How to use Pattern Analysis"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/analysis/PatternAnalysis",children:"Pattern Analysis"})," feature helps to find static repeating patterns within automation. For example, you know that a 404 error in your application might be caused by a specific product bug. Create the rule with a problem phrase, launch a test run, and Pattern Analysis will find all failed items which have known patterns in error logs. This allows you to draw a quick conclusion."]}),"\n",(0,a.jsx)(o,{src:s(38189),alt:"Create Pattern rule"}),"\n",(0,a.jsx)(o,{src:s(36780),alt:"Enable Pattern rule"}),"\n",(0,a.jsx)(o,{src:s(13819),alt:"Run Pattern Analysis for specific Launch"}),"\n",(0,a.jsx)(o,{src:s(43511),alt:"Choose launches and test items to analyze"}),"\n",(0,a.jsx)(o,{src:s(53748),alt:"Pattern Analysis is running"}),"\n",(0,a.jsx)(o,{src:s(98623),alt:"Pattern Analysis results"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-run-auto-analysis-in-reportportal",children:"How to run Auto-Analysis in ReportPortal"}),"\n",(0,a.jsxs)(t.p,{children:["ReportPortal has ",(0,a.jsx)(t.a,{href:"/analysis/AutoAnalysisOfLaunches",children:"Auto-Analysis"})," feature which makes it possible for the application to independently check and perform some of the routine tasks."]}),"\n",(0,a.jsxs)(t.p,{children:["When you have test executions on the Launches page, you might need to analyze them automatically using ML. You can ",(0,a.jsx)(t.strong,{children:"switch ON Auto-Analysis in the settings"})," \u2013 then it will start as soon as any launch finishes. Auto-Analysis takes a part of your routine work and defines the reason for the test item failure based on the previous launches and sets: a defect type; a link to BTS (in case it exists); comment (in case it exists). As a result, you save time, and you can create new test cases instead of analyzing test results."]}),"\n",(0,a.jsx)(o,{src:s(25040),alt:"Auto-Analysis is ON"}),"\n",(0,a.jsxs)(t.p,{children:["You can ",(0,a.jsx)(t.strong,{children:"run Auto-Analysis manually"})," as well."]}),"\n",(0,a.jsx)(o,{src:s(13215),alt:"Run Auto-Analysis manually"}),"\n",(0,a.jsx)(o,{src:s(33510),alt:"Auto-Analysis is running"}),"\n",(0,a.jsx)(t.p,{children:"When the test item is analyzed by ReportPortal, a label \u201cAA\u201d is set on the test item on a Step Level."}),"\n",(0,a.jsx)(o,{src:s(97396),alt:"AI-based defects triage"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-see-the-historical-trend-of-the-causes-of-falls",children:"How to see the historical trend of the causes of falls"}),"\n",(0,a.jsx)(t.p,{children:"And now let's build a more detailed \u201cLaunch statistics chart\u201d widget with the historical changes in tests results. So, I can see how the results of my launches have changed over time."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Use case"})}),"\n",(0,a.jsx)(t.p,{children:"Goal: Create a widget to show historical changes in Passed/Failed test cases in my API tests."}),"\n",(0,a.jsxs)(t.p,{children:["Follow the instructions below to create this ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/LaunchStatisticsChart",children:"Launch statistics chart"}),"."]}),"\n",(0,a.jsx)(o,{src:s(74895),alt:"Configure Launch statistics chart"}),"\n",(0,a.jsx)(t.p,{children:"Here you can see the historical distribution of your test results: there are Passed or Failed tests."}),"\n",(0,a.jsx)(o,{src:s(6667),alt:"Historical distribution of your test results"}),"\n",(0,a.jsx)(t.p,{children:"Instead of just Failed tests, you can see the dynamics of the total number of Product bugs, Automation bugs, System issues and No Defect."}),"\n",(0,a.jsx)(o,{src:s(88110),alt:"Failed test cases in details"}),"\n",(0,a.jsx)(t.p,{children:"In this way, you see the historical trend of the causes of falls."}),"\n",(0,a.jsx)(o,{src:s(23226),alt:"Historical trend of the causes of falls"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-make-automated-test-results-part-of-my-pipeline",children:"How to make automated test results part of my pipeline"}),"\n",(0,a.jsxs)(t.p,{children:["ReportPortal supports Continuous Testing with built-in functionality \u2013 ",(0,a.jsx)(t.a,{href:"/quality-gates",children:"Quality Gates"})," (premium feature). Quality Gate is a set of predefined criteria that should be met in order launch run to be considered as successful."]}),"\n",(0,a.jsx)(t.p,{children:"Firstly, navigate to Project settings and create a Quality Gate with the rules which will be applied to a specific launch that matches the conditions."}),"\n",(0,a.jsx)(o,{src:s(87400),alt:"Create Quality Gate"}),"\n",(0,a.jsx)(o,{src:s(30104),alt:"Quality Gate parameters for our continuous testing platform"}),"\n",(0,a.jsx)(o,{src:s(36260),alt:"Run Quality Gate for specific launch"}),"\n",(0,a.jsx)(o,{src:s(26232),alt:"Quality Gate in progress"}),"\n",(0,a.jsx)(o,{src:s(63106),alt:"Quality Gate failed"}),"\n",(0,a.jsxs)(t.p,{children:["Finally, configure ",(0,a.jsx)(t.a,{href:"/quality-gates/IntegrationWithCICD",children:"integration with CI/CD"})," to send results to the pipeline."]}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-nested-steps-and-attributes-in-reportportal",children:"How to use nested steps and attributes in ReportPortal"}),"\n",(0,a.jsxs)(t.p,{children:["Usually, you see the results of automation as a carpet of error logs, and only an automation engineer can understand what is happening inside. Adding nested steps (",(0,a.jsx)(t.a,{href:"https://github.com/reportportal/client-java/wiki/Nested-steps",children:"Java"}),", ",(0,a.jsx)(t.a,{href:"https://github.com/reportportal/client-Python/wiki/Nested-steps",children:"Python"}),") allows applying a one-time change in the test code to make a logical grouping of steps and make these error logs more readable for the whole team."]}),"\n",(0,a.jsx)(o,{src:s(53654),alt:"Nested Steps example"}),"\n",(0,a.jsxs)(t.p,{children:["You can also use ",(0,a.jsx)(t.a,{href:"https://github.com/reportportal/client-java/wiki/Test-item-attributes",children:"attributes"})," on any level (launch/suite/test/step) to provide more contextual information."]}),"\n",(0,a.jsx)(o,{src:s(75204),alt:"Test Attributes on any level"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-evaluate-product-health-with-reportportal",children:"How to evaluate product health with ReportPortal"}),"\n",(0,a.jsxs)(t.p,{children:["You can create a ",(0,a.jsx)(t.a,{href:"/dashboards-and-widgets/ComponentHealthCheck",children:"\u201cComponent health check\u201d"})," widget based on attributes to understand which components do not work well, and which areas we need to pay more attention to."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Use case 1"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Goal:"})," define which features are affected by failed scenarios."]}),"\n",(0,a.jsx)(o,{src:s(79736),alt:"Define features which affected by failed scenarios"}),"\n",(0,a.jsx)(t.p,{children:"You can see scenarios on the first screenshot."}),"\n",(0,a.jsx)(o,{src:s(36491),alt:"Scenarios"}),"\n",(0,a.jsx)(t.p,{children:"Select failed scenario to see which features were affected."}),"\n",(0,a.jsx)(o,{src:s(21083),alt:"Features"}),"\n",(0,a.jsx)(t.p,{children:"Finally, let\u2019s see what is the priority of the failed test cases."}),"\n",(0,a.jsx)(o,{src:s(1740),alt:"Priority of the failed test cases"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Use case 2"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Goal:"})," define the priority of failed test cases."]}),"\n",(0,a.jsx)(o,{src:s(71958),alt:"Define the priority of failed test cases"}),"\n",(0,a.jsx)(t.p,{children:"You can see that failures occurred in test cases with critical priority."}),"\n",(0,a.jsx)(o,{src:s(98126),alt:"Test cases with critical priority"}),"\n",(0,a.jsx)(t.p,{children:"Select Critical to understand which operating system is having problems."}),"\n",(0,a.jsx)(o,{src:s(89605),alt:"Operating system which is having problems"}),"\n",(0,a.jsx)(t.p,{children:"Next, select Android to see the list of features that need more attention."}),"\n",(0,a.jsx)(o,{src:s(76817),alt:"List of features"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Use case 3"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Goal:"})," define state of test cases on mobile devices."]}),"\n",(0,a.jsx)(o,{src:s(72365),alt:"Define state of test cases on mobile devices"}),"\n",(0,a.jsx)(t.p,{children:"On the screenshot below you can see that our trouble spot is Android."}),"\n",(0,a.jsx)(o,{src:s(8523),alt:"Trouble spot"}),"\n",(0,a.jsx)(t.p,{children:"You can go to the test cases level and see what problems they had."}),"\n",(0,a.jsx)(o,{src:s(34180),alt:"Test cases level"}),"\n",(0,a.jsx)(t.h2,{id:"how-to-add-test-results-to-reportportal",children:"How to add test results to ReportPortal"}),"\n",(0,a.jsx)(t.p,{children:"You have checked demo test results, dashboards and widgets. And now you want to see your real data in ReportPortal."}),"\n",(0,a.jsxs)(t.p,{children:["ReportPortal is a TestOps service that integrates with your Test Framework, listens to events and visualizes test results. You cannot execute results right from ReportPortal, but you can ",(0,a.jsx)(t.a,{href:"/log-data-in-reportportal/test-framework-integration/",children:"integrate ReportPortal with a Test Framework"})," or ",(0,a.jsx)(t.a,{href:"/log-data-in-reportportal/ImplementOwnIntegration",children:"Implement own integration"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},98233:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/Attributes-d5f83a56c5ff34fcdd7b7b68cf5c014c.png"},25040:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/AutoAnalysis1-11db15753e362df625b43a0416b9f1b7.png"},13215:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/AutoAnalysis2-c135ab8b1411d4cd2b2e002379ef2b01.png"},33510:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/AutoAnalysis3-79c55ff89f84a8c783593808ce5e52fa.png"},97396:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/AutoAnalysis4-ed43998488d14ede5480533b6f1dd2d6.png"},7163:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/FilterTestExecutions-68c96e25bce321b06e254d54e68c2c89.png"},52947:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/Filters-a13889b9388f182e1b78c3ffbfd27626.png"},91035:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/FlakyTests1-27b3dd816561ae0fd14ca071745077e8.png"},80223:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/FlakyTests2-cdf978810e68610dfeac4fe21a8ccd46.png"},9977:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/GenerateFirstData-1dd627821163c21bd512bb01658f379a.png"},74895:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/HistoricalTrends1-2495cdd8459e0558f87107b63a742b1a.png"},6667:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/HistoricalTrends2-6f4eca134279efa422bb8dd7f26a2365.png"},88110:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/HistoricalTrends3-c18a3f3d2cdbea433aa6dffe97d5057a.png"},23226:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/HistoricalTrends4-4655e16809cf8ffb99a75f0bbf5823a7.png"},32965:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/InvestigatedPercentage1-b97af872833f45d40de98002120af1e6.png"},27328:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/InvestigatedPercentage2-fc39ff077c318c9129e6dca9c9585a62.png"},40338:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/InviteUsers-8ef155f094fabc2c879ad72cf632d32c.png"},82167:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/LaunchStatisticsChart1-d2b5ed5068121b4a63bbb4d87389cf04.png"},52691:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/LaunchStatisticsChart2-3c5d43873524023d1bba3dd0469a0662.png"},79050:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/MLSuggestions-8b507fbfe0d6d38f856e03d2d2c98bbc.png"},3925:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/MakeDecision-b333dce619c4b29886d456be4a25150c.png"},99619:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/MostTime1-e2edb8383c7fee5ac15ea212ed1bab1f.png"},44063:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/MostTime2-6f767d8cd65dc393a66f47a23a5240ea.png"},53654:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/NestedSteps-a950331db3a29bcc0e688e8bff9c8651.png"},45413:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/OverallStatistics1-8564b401c8cc831fb8a9f61fa98e6ba8.png"},44257:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/OverallStatistics2-aae9a2734e319f0aa4225b0357c16688.png"},38189:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis1-8bd25d555d9089eeeb6df2d0d2158661.png"},36780:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis2-4e4f092018867ae3746dad8bd5b38ea7.png"},13819:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis3-0cd4321313ebe4b79e243d932d3a61f0.png"},43511:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis4-fa59e8d5a0104d4a183619de1294db91.png"},53748:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis5-463a7abd9cb5a314c4f0b959f2667fc2.png"},98623:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PatternAnalysis6-ab01eb703f3aaf86067db71f88932b32.png"},41877:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/PostLink-25fa7bc4c356252faf91b8408d2b1d0e.png"},26308:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/ProfileAttributes-6708922cfe1ca23711926cda7e30b24f.png"},87400:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGate1-995b5943d1b9f85da16d2d8d62242ae2.png"},30104:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGate2-70d4a9e278ef4c7a5a128782dcd5aec2.png"},36260:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGate3-2908f945a5236f35adcffb8205f16f78.png"},26232:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGate4-06ad4a256d078d4c8f4e98e5407f0638.png"},63106:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGate5-ce6c128ca3f9d3f22edf5aeff9084237.png"},75204:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/TestAttributes-eae9e722cc650b72f5a0afc492901ef9.png"},48361:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/TriageTestFailures-a11378bdf1391b5ce6843a1a1a68229f.png"},79736:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase1-1-00131ef93813e190e32591932cf1578d.png"},36491:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase1-2-e81b286f3bd64aed93da637432b3496e.png"},21083:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase1-3-b9f336946f30fc4bd4ed728f8a128dd1.png"},1740:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase1-4-f144021b1e0ed757ec3aef53ae6cf1f4.png"},71958:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase2-1-2cf85bae0b6bb7f7ddb89e13712e302c.png"},98126:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase2-2-b85b947764258a42dbd784d02d5b00b1.png"},89605:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase2-3-a34b9466f6a82397c77025b21f858788.png"},76817:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase2-4-3a3a9cbdb749c799904adcfd226b8748.png"},72365:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase3-1-e5e833c996f291213ba0e78787929d01.png"},8523:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase3-2-80643debed54dd23d0c445a620658552.png"},34180:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/UseCase3-3-f8b78881d5445518a23c3b132ef593b7.png"}}]);