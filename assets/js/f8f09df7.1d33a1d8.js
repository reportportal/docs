"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65077],{40329:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"releases/Version24.2.0","title":"Version 24.2","description":"To ensure that asynchronous reporting works correctly, please make sure the correct feature flag is enabled in RabbitMQ.","source":"@site/docs/releases/Version24.2.0.md","sourceDirName":"releases","slug":"/releases/Version24.2.0","permalink":"/docs/releases/Version24.2.0","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/releases/Version24.2.0.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Version 24.2"},"sidebar":"docs","previous":{"title":"Version 24.2.2","permalink":"/docs/releases/Version24.2.2"},"next":{"title":"Version 24.1","permalink":"/docs/releases/Version24.1"}}');var t=r(74848),n=r(28453);const o={sidebar_position:2,sidebar_label:"Version 24.2"},a="Version 24.2",h={},d=[{value:"1. What&#39;s Changed:",id:"1-whats-changed",level:2},{value:"2. Technical improvements:",id:"2-technical-improvements",level:2},{value:"3. Bugs fixed:",id:"3-bugs-fixed",level:2},{value:"4. Enhancements Based on Community Feedback:",id:"4-enhancements-based-on-community-feedback",level:2},{value:"5. CVE addressed:",id:"5-cve-addressed",level:2},{value:"6. Released versions:",id:"6-released-versions",level:2},{value:"7. Migration Guide",id:"7-migration-guide",level:2}];function l(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{MediaViewer:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"version-242",children:"Version 24.2"})}),"\n",(0,t.jsx)(i,{src:r(55378),alt:"Version 24.2 of our test automation metrics dashboard"}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsx)(s.p,{children:"To ensure that asynchronous reporting works correctly, please make sure the correct feature flag is enabled in RabbitMQ.\nOpen RabbitMQ Management, go to the Admin tab -> Feature Flags -> message_containers_deaths_v2. If it's disabled, enable it."})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["Due to the transition to a new plugin mechanism when updating ReportPortal to version 24.2, all the plugins need to be reinstalled manually.\nCheck out the updated plugins ",(0,t.jsx)(s.a,{href:"/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide",children:"UI development guides"}),"."]})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["Double entry removed. Review changes by comparing GitHub releases in ",(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/compare/v24.1...v24.2",children:"Docker"})," or ",(0,t.jsx)(s.a,{href:"https://github.com/reportportal/kubernetes/compare/reportportal-24.1.0...reportportal-24.2.0",children:"Kubernetes"}),"."]})}),"\n",(0,t.jsx)(s.h2,{id:"1-whats-changed",children:"1. What's Changed:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"New features"})," - ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/configuration/LaunchesRetentionPolicy",children:"Extended launches retention policy"})}),": ",(0,t.jsx)("br",{}),"\nWe've introduced an extended launches retention policy to allow important launches to be preserved beyond the existing retention periods. Previously, all launches were automatically deleted after a set time to save storage. With this update, you can now mark specific launches as important, ensuring they are never deleted, as long as there is sufficient storage available. This feature is useful for retaining critical data for compliance, auditing, or historical analysis."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"New integrations"})," (Notifications) - ",(0,t.jsxs)(s.strong,{children:[(0,t.jsx)(s.a,{href:"/plugins/Slack",children:"Slack plugin"})," and redesigned Notifications page"]}),": ",(0,t.jsx)("br",{}),"\nTeams using Slack can now set up Slack integration to receive ReportPortal notifications on launch event right in their Slack channel.",(0,t.jsx)("br",{}),"\nMore details can be found in ",(0,t.jsx)(s.a,{href:"/plugins/Slack",children:"Slack user guide"})," and ",(0,t.jsx)(s.a,{href:"https://reportportal.io/blog/report-test-results-in-real-time-to-slack",children:"blog post"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"New integrations"})," (Bug Tracking Systems) - ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/plugins/Monday",children:"Monday plugin"})}),": ",(0,t.jsx)("br",{}),"\nTeams working with Monday as their BTS can now set up an integration to post and link issues from ReportPortal directly to Monday."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Import functionality moved to plugin"}),":  ",(0,t.jsx)("br",{}),"\nTo provide more flexibility for launch import, the feature has been moved from the core application to a plugin. Users can now choose between the Robot and JUnit import plugins developed by the ReportPortal team, or create their own plugins to import results from other test frameworks.",(0,t.jsx)("br",{}),"\nMore details about ",(0,t.jsx)(s.a,{href:"/plugins/JUnit",children:"JUnit import plugin"}),".",(0,t.jsx)("br",{}),"\nMore details about ",(0,t.jsx)(s.a,{href:"/plugins/RobotFramework",children:"Robot Framework import plugin"}),".",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"/developers-guides/PluginDevelopersGuide/DevelopACustomImportPlugin",children:"Guide on how to create import plugin"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Microseconds added to timestamps"})," for better test items sequence tracking:",(0,t.jsx)("br",{}),"\nMicroseconds have been added to timestamps to enable a more accurate sequence of logs, as some logs previously had identical timestamps at the millisecond level."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"LDAP integration improvements"}),":",(0,t.jsx)("br",{})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["PBKDF2 encryption has been added to the list of possible encryptions for LDAP.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(s.li,{children:"LDAP integration can now be created either with Full name attribute mode or with separate fields for First name and Last name."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"7",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsxs)(s.strong,{children:["Improved logic of ",(0,t.jsx)(s.a,{href:"/developers-guides/RerunDevelopersGuide",children:"launch rerun"})]}),":",(0,t.jsx)("br",{}),"\nUser can report rerun of the specified launch with no attributes and the attributes for the initial launch will remain. If user reports rerun of the specified launch with attributes, only new attributes will be added to the launch."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"New language introduced:"}),(0,t.jsx)("br",{}),"\nUsers can now utilize the interface in Spanish, and we encourage everyone to contribute to further translations or improve the existing ones.\nA special thank you to ",(0,t.jsx)(s.a,{href:"https://github.com/mg-diego",children:"@mg-diego"})," for his valuable contribution to the Spanish translation!"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"2-technical-improvements",children:"2. Technical improvements:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Analyzer"}),":",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Added:"}),(0,t.jsx)("br",{}),"\nMessage-through logging with Correlation ID, to ease debugging and understanding of logs.",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Updated:"}),(0,t.jsx)("br",{}),"\nRefactoring: data-preparation logic joined and put into common place.",(0,t.jsx)("br",{}),"\nRefactoring: model train logic standardised and prepared for future join.",(0,t.jsx)("br",{}),"\nLots of type annotations added.",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:"Fixed"}),(0,t.jsx)("br",{}),"\nRe-train logic. Custom re-trained models for big enough projects do not affect negatively auto-analysis now."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Asynchronous Reporting"}),":",(0,t.jsx)("br",{}),"\nReportPortal now features 2x faster reporting under full load, thanks to a new asynchronous reporting approach. A key update includes switching from a Direct exchange to a Consistent-hashing exchange. The retry mechanism was also revamped to focus on handling messages related to the reporting order.",(0,t.jsx)("br",{}),"\nRead our latest ",(0,t.jsx)(s.a,{href:"https://reportportal.io/blog/boost-asynchronous-test-reporting-speed-by-2x",children:"blog post"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["To ensure that asynchronous reporting works correctly, please make sure the correct feature flag is enabled in RabbitMQ.",(0,t.jsx)("br",{}),"\nOpen RabbitMQ Management, go to the Admin tab -> Feature Flags -> message_containers_deaths_v2. If it's disabled, enable it."]})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Updated React to version 18."}),"\n",(0,t.jsx)(s.li,{children:"PostgreSQL 16 support."}),"\n",(0,t.jsx)(s.li,{children:"Updated Java to version 21 (Service-uat)."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"3-bugs-fixed",children:"3. Bugs fixed:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Saucelabs"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Issue with Mobile tests videos (run on real devices in SauceLabs) is solved."}),"\n",(0,t.jsx)(s.li,{children:'Error when opening "Sauce Labs" tab from log view is fixed.'}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Jira Cloud"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Functionality to add Assignee for issue by typing its name or email (in case of full match) has been added."}),"\n",(0,t.jsx)(s.li,{children:'Bug with posting issue with "Parent" field is fixed.'}),"\n",(0,t.jsx)(s.li,{children:"Bug with saving multi-select field as empty is fixed."}),"\n",(0,t.jsx)(s.li,{children:"Bug with creating Integration without predefine Issue Type is fixed."}),"\n",(0,t.jsx)(s.li,{children:'Possibility to add "None" value for fields with predefined values has been added.'}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Quality Gates"}),":"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\u2018'In progress' QG status doesn't change for merged launches, when 'New errors' rule is applied and no unique errors identified' is fixed."}),"\n",(0,t.jsx)(s.li,{children:"'QG page is broken after editing Quality Gate, if it contains New failures/New error rules' is fixed."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'TypeError occurring when switching between "New errors" and "Known errors" options on "Unique errors" page is solved.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:'"Unique bugs table" widget is fixed.'}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Bug with Retry reported as a separate step is fixed."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Issue with Resize widget functionality is solved."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["We made some changes in how we handle Unique Errors. Thus behaviour on some stack traces might change.",(0,t.jsx)("br",{}),"\nWe are going to review it in the upcoming updates to make sure that all cases are covered."]})}),"\n",(0,t.jsx)(s.h2,{id:"4-enhancements-based-on-community-feedback",children:"4. Enhancements Based on Community Feedback:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/1914",children:"#1914"})," Ability to exclude Skipped tests from statistics was added for Component health check widget (table view) and Component health check widget (table view)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2168",children:"#2168"})," The limit for the dashboards per project has been increased to 3000 dashboards."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2219",children:"#2219"})," On the Unique Errors page, error clusters have been introduced and sorted by size, allowing users to address the most impactful errors first."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2249",children:"#2249"})," Email configuration has been improved taking into account possible ReportPortal deployment to a specified path ensuring that the links in notifications and other emails are correct."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2309",children:"#2309"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2245",children:"#2245"})," Logics of importing empty suites has been adjusted: Launches with empty suites can now be imported successfully. Empty suite has status 'Passed\u2019."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/1951",children:"#1951"})," The issue with the launch description not being updated upon launch finish (when launch reporting started with no description and finished with any description) is fixed."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2230",children:"#2230"})," Issue with parent nested step turning in failed status if child nested step processed after it's finished and has status 'skipped' is solved."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/2120",children:"#2120"})," Issue with broken links on filtered Launches page is solved."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/issues/1020",children:"#1020"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/reportportal/agent-js-jasmine/issues/36",children:"#36"})," Issue with logs sequence is solved."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"5-cve-addressed",children:"5. CVE addressed:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service auto-analyser:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mq29-j5xf-cjwr",children:"CVE-2023-45853"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-p6rw-gvvh-q8v4",children:"CVE-2023-6246"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-p5vr-h433-qhqr",children:"CVE-2023-6779"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-jjr8-97p7-vmmg",children:"CVE-2023-6780"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-6j48-hfg3-m4hg",children:"CVE-2023-49468"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-x895-cm39-f6wq",children:"CVE-2023-49467"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-xxjf-hhmr-jhmq",children:"CVE-2023-49465"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service-api:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24rp-q3w6-vc56",children:"CVE-2024-1597"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-rvm8-j2cp-j592",children:"CVE-2023-40827"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-cj8w-v588-p8wx",children:"CVE-2023-40828"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-3r28-rgp9-qgv4",children:"CVE-2023-40826"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-ccgv-vj62-xf9h",children:"CVE-2024-22243"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4jq9-2xhw-jpx7",children:"CVE-2023-5072"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-3vqj-43w4-2q58",children:"CVE-2022-45688"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-fccv-jmmp-qg76",children:"CVE-2023-46589"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7w75-32cg-r6g2",children:"CVE-2024-24549"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-v682-8vv8-vpwr",children:"CVE-2024-23672"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4g9r-vxhx-9pgx",children:"CVE-2024-25710"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4265-ccf5-phj5",children:"CVE-2024-26308"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24f5-5fmf-pwmc",children:"CVE-2023-34050"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-vmq6-5m68-f53m",children:"CVE-2023-6378"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gm62-rw4g-vrc4",children:"CVE-2023-6481"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-vmq6-5m68-f53m",children:"CVE-2023-6378"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gm62-rw4g-vrc4",children:"CVE-2023-6481"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-xf96-w227-r7c4",children:"CVE-2023-20883"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service-authorization:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7phw-cxx7-q9vq",children:"CVE-2023-20860"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24rp-q3w6-vc56",children:"CVE-2024-1597"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4jq9-2xhw-jpx7",children:"CVE-2023-5072"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-3vqj-43w4-2q58",children:"CVE-2022-45688"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-493p-pfq6-5258",children:"CVE-2023-1370"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-fccv-jmmp-qg76",children:"CVE-2023-46589"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7w75-32cg-r6g2",children:"CVE-2024-24549"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-v682-8vv8-vpwr",children:"CVE-2024-23672"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4g9r-vxhx-9pgx",children:"CVE-2024-25710"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4265-ccf5-phj5",children:"CVE-2024-26308"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24f5-5fmf-pwmc",children:"CVE-2023-34050"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-vmq6-5m68-f53m",children:"CVE-2023-6378"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gm62-rw4g-vrc4",children:"CVE-2023-6481"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-fjq5-5j5f-mvxh",children:"CVE-2015-7501"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7r6v-mxc2-pg49",children:"CVE-2015-4852"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service-metrics-gatherer:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mq29-j5xf-cjwr",children:"CVE-2023-45853"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service-jobs:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24rp-q3w6-vc56",children:"CVE-2024-1597"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-fccv-jmmp-qg76",children:"CVE-2023-46589"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-7w75-32cg-r6g2",children:"CVE-2024-24549"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-v682-8vv8-vpwr",children:"CVE-2024-23672"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-vmq6-5m68-f53m",children:"CVE-2023-6378"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gm62-rw4g-vrc4",children:"CVE-2023-6481"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-ccgv-vj62-xf9h",children:"CVE-2024-22243"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4g9r-vxhx-9pgx",children:"CVE-2024-25710"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-4265-ccf5-phj5",children:"CVE-2024-26308"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-24f5-5fmf-pwmc",children:"CVE-2023-34050"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-xf96-w227-r7c4",children:"CVE-2023-20883"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Service-ui:"}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-gh68-jm46-84rf",children:"CVE-2023-52425"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-mp2w-hjcj-f5g9",children:"CVE-2023-52426"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-x77r-6xxm-wjmx",children:"CVE-2024-25062"}),", ",(0,t.jsx)(s.a,{href:"https://github.com/advisories/GHSA-wf5p-g6vw-rhxx",children:"CVE-2023-45857"})]}),"\n",(0,t.jsx)(s.h2,{id:"6-released-versions",children:"6. Released versions:"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Service Name"}),(0,t.jsx)(s.th,{children:"Repository"}),(0,t.jsx)(s.th,{children:"Tag"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Index"}),(0,t.jsx)(s.td,{children:"reportportal/service-index"}),(0,t.jsx)(s.td,{children:"5.12.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Authorization"}),(0,t.jsx)(s.td,{children:"reportportal/service-authorization"}),(0,t.jsx)(s.td,{children:"5.12.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"UI"}),(0,t.jsx)(s.td,{children:"reportportal/service-ui"}),(0,t.jsx)(s.td,{children:"5.12.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"API"}),(0,t.jsx)(s.td,{children:"reportportal/service-api"}),(0,t.jsx)(s.td,{children:"5.12.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Jobs"}),(0,t.jsx)(s.td,{children:"reportportal/service-jobs"}),(0,t.jsx)(s.td,{children:"5.12.0"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Migrations"}),(0,t.jsx)(s.td,{children:"reportportal/migrations"}),(0,t.jsx)(s.td,{children:"5.12.1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Auto Analyzer"}),(0,t.jsx)(s.td,{children:"reportportal/service-auto-analyzer"}),(0,t.jsx)(s.td,{children:"5.12.0-r1"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Metrics Gatherer"}),(0,t.jsx)(s.td,{children:"reportportal/service-metrics-gatherer"}),(0,t.jsx)(s.td,{children:"5.12.0-r1"})]})]})]}),"\n",(0,t.jsxs)(s.h2,{id:"7-migration-guide",children:["7. ",(0,t.jsx)(s.a,{href:"https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.24.2",children:"Migration Guide"})]})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},55378:(e,s,r)=>{r.r(s),r.d(s,{default:()=>i});const i=r.p+"assets/images/24.2-a5eb54ffa099cf3c9f56929a364c3bee.png"}}]);