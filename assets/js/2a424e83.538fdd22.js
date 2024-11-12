"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33496],{93446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"quality-gates/QualityRulesConfiguration","title":"Quality Rules Configuration","description":"Now let\'s configure the Quality rule, which will be used for launch quality assessment.","source":"@site/docs/quality-gates/QualityRulesConfiguration.mdx","sourceDirName":"quality-gates","slug":"/quality-gates/QualityRulesConfiguration","permalink":"/docs/quality-gates/QualityRulesConfiguration","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/quality-gates/QualityRulesConfiguration.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Quality Rules Configuration"},"sidebar":"docs","previous":{"title":"Upload Quality Gate to ReportPortal","permalink":"/docs/quality-gates/UploadQualityGateToReportPortal"},"next":{"title":"Quality Gate Edit","permalink":"/docs/quality-gates/QualityGateEdit"}}');var i=n(74848),l=n(28453);const a={sidebar_position:5,sidebar_label:"Quality Rules Configuration"},r="Quality Rules Configuration",o={},h=[{value:"Quality Gate creation",id:"quality-gate-creation",level:2},{value:"Quality Gate ordering",id:"quality-gate-ordering",level:2},{value:"Quality Gate rules",id:"quality-gate-rules",level:2},{value:"Amount of tests in the run",id:"amount-of-tests-in-the-run",level:3},{value:"Failure rate of the run",id:"failure-rate-of-the-run",level:3},{value:"Amount of issues in the run",id:"amount-of-issues-in-the-run",level:3},{value:"Allowable level of To investigate",id:"allowable-level-of-to-investigate",level:4},{value:"New failures in the run",id:"new-failures-in-the-run",level:3},{value:"How does the rule works",id:"how-does-the-rule-works",level:4},{value:"How to choose a Baseline for the &quot;New failures&quot; rule",id:"how-to-choose-a-baseline-for-the-new-failures-rule",level:4},{value:"New errors in the run",id:"new-errors-in-the-run",level:3}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{MediaViewer:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"quality-rules-configuration",children:"Quality Rules Configuration"})}),"\n",(0,i.jsx)(t.p,{children:"Now let's configure the Quality rule, which will be used for launch quality assessment."}),"\n",(0,i.jsx)(t.h2,{id:"quality-gate-creation",children:"Quality Gate creation"}),"\n",(0,i.jsx)(t.p,{children:"Quality Gates can be configured on the Project Settings on the tab Quality Gate."}),"\n",(0,i.jsx)(t.p,{children:"The Project Manager or Admin can create several rules for one project."}),"\n",(0,i.jsx)(t.p,{children:"For Quality Gate creation Project Manager or Admin should:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the ",(0,i.jsx)(t.code,{children:"Create Gate"})," button"]}),"\n",(0,i.jsxs)(t.li,{children:["In ",(0,i.jsx)(t.code,{children:"Create Quality Gate"})," fill in the form"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the button ",(0,i.jsx)(t.code,{children:'"Save"'})]}),"\n",(0,i.jsx)(t.li,{children:"A Quality Gate is created successfully"}),"\n",(0,i.jsx)(t.li,{children:"Quality Gate is added to the Quality Gate List"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-groovy",children:"Quality Gate Name: (Min length 1 - max length 55) A name that will be added to the Quality Gate report on All launches\nAnalyzed Launch: Launch Name of a launch that should be analyzed   \nAttributes: key: value AND key:value AND key:value (example = build: 5.0 AND device: MacOS AND test plan: Regression) \n"})}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/dXp3Lf9bI30",alt:"Quality Gate Creation in our real time dashboard open source",type:"video"}),"\n",(0,i.jsx)(t.h2,{id:"quality-gate-ordering",children:"Quality Gate ordering"}),"\n",(0,i.jsx)(t.h2,{id:"quality-gate-rules",children:"Quality Gate rules"}),"\n",(0,i.jsx)(t.p,{children:"When Quality Gate is created, you can fill your gate with quality rules."}),"\n",(0,i.jsx)(t.p,{children:"There are four types of Quality Gate rules:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Amount of tests"}),"\n",(0,i.jsx)(t.li,{children:"Amount of issues"}),"\n",(0,i.jsx)(t.li,{children:"Percent"}),"\n",(0,i.jsx)(t.li,{children:"New failures"}),"\n",(0,i.jsx)(t.li,{children:"New errors (from version 5.7)"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"amount-of-tests-in-the-run",children:"Amount of tests in the run"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case:"})," Regression suite has 224 tests. You want to track that all tests should be run every time."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/TC0J8BV_XBY",alt:"Rule: Amount of All Tests in the launch",type:"video"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of the rule is to block a run that contains not all tests so that you can define the minimum number of tests that should be in the run."}),"\n",(0,i.jsx)(t.p,{children:"For adding this rule Project Manager or Admin should:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"Amount"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"All tests"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a number of min allowable amount of tests in the launch - ",(0,i.jsx)(t.code,{children:"N"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Now the system will automatically analyze a launch and compare the number of tests in the analyzed launch with the number in the "amount" rule in the Quality Gate. If the number of tests in the launch is less than in the rule, the system fails the rule and Quality Gate.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'You can add only 1 "All tests amount" rule to 1 Quality Gate.'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Amount of tests in a component/feature/etc"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case:"})," Regression suite contains 24 tests with critical priority. You want to track if these tests are executed every time."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/EwsG7RcmcDs",alt:"Rule: Amount of Tests with attributes in the launch",type:"video"}),"\n",(0,i.jsx)(t.p,{children:"You can also track the number of tests that belong to a feature, component, priority or others in a launch.\nFor that, tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others)."}),"\n",(0,i.jsx)(t.p,{children:'Then you need to add an "amount" rule with an attribute option:'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"Amount"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose option ",(0,i.jsx)(t.code,{children:'"Tests with attributes"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a number of min allowable amount of tests for the component, feature etc. - ",(0,i.jsx)(t.code,{children:"N"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Now the system will automatically analyze a launch and compare the number of tests with specified attributes in the analyzed launch with a number in the "amount" rule in the Quality Gate. If the number of tests is less than in the rule, the system fails the rule and Quality Gate.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'You can add several "Tests with attribute amount" rules to the Quality Gate. But it is impossible to create duplicates.'})}),"\n",(0,i.jsx)(t.h3,{id:"failure-rate-of-the-run",children:"Failure rate of the run"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 1:"})," You want to track that the passing rate for regression suite should be no more than 20%."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 2:"})," You want to track that all critical tests in regression suite are always passed."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/bSO21gtT82E",alt:"Failure Rate",type:"video"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of the rule is to block a run that has a not allowable passing rate so that you can define the minimum failure rate for the run."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Launch Failure rate"})}),"\n",(0,i.jsx)(t.p,{children:"For adding this rule Project Manager or Admin should:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"Percent"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"All tests"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a % of min allowable failure rate - ",(0,i.jsx)(t.code,{children:"N%"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'On the finish, the system will automatically analyze a launch and compare failure rate in the analyzed launch with % in the "failure per cent" rule in the Quality Gate. If the failure rate in the launch is more than in the rule, the system fails the rule and Quality Gate.'}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["How a failure rate is calculated ",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.code,{children:"Failure rate"})," = items with type STEP with status FAILED / ALL items with type STEP in the analyzed launch"]})}),"\n",(0,i.jsx)(t.p,{children:'You can add only 1 "All tests failure rate" rule to 1 Quality Gate.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Failure rate in a component/feature/etc"})}),"\n",(0,i.jsx)(t.p,{children:"You can also track the failure rate of tests that belong to a feature, component, priority or others in a launch.\nFor that, tests in the analyzed launch should have attributes (f.i. feature: Payment, or component: Payment, or priority: critical, or any others)."}),"\n",(0,i.jsx)(t.p,{children:'Then you need to add an "amount" rule with an attribute option:'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"Percent"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose option ",(0,i.jsx)(t.code,{children:'"Tests with attributes"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a % of min allowable failure rate - ",(0,i.jsx)(t.code,{children:"N%"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this case, on the finish, the system will automatically analyze a launch and compare the failure rate of tests with a specified attribute in the analyzed launch with failure rate from the rule in the Quality Gate. If the failure rate is more than specified in the rule, the system fails the rule and Quality Gate."}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["How a failure rate is calculated",(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Failure rate for tests with a attribute"})," = items with type STEP with status FAILED and with a specified attribut / ALL items with type STEP in the analyzed launch and with a specified attribut"]})]}),"\n",(0,i.jsx)(t.p,{children:'You can add several "Tests with attribute percent" rules to the Quality Gate. But it is impossible to create duplicates.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Not passing rate in the launch or a component/feature/etc."})}),"\n",(0,i.jsxs)(t.p,{children:['You can use the "Percent rule" in several options: ',(0,i.jsx)(t.code,{children:"Failure /Not passed"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The failure rule is described in the previous sections."}),"\n",(0,i.jsx)(t.p,{children:'If you choose the "Not passed" option, the system will use another calculation method.'}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["How a notpassed rate is calculated",(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Not passed rate"})," = items with type STEP with status FAILED and SKIPPED / ALL items with type STEP in the analyzed launch",(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"Not passed rate for tests with a attribute"})," = items with type STEP with status FAILED and SKIPPED  and with a specified attribut / ALL items with type STEP > in the analyzed launch and with a specified attribut"]})]}),"\n",(0,i.jsx)(t.h3,{id:"amount-of-issues-in-the-run",children:"Amount of issues in the run"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 1:"})," You want to track that the regression suite run should not have a critical issue or Product bugs."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 2:"})," Regression suite contains 500 tests with critical priority. You want to track that the run should not have critical issues or Product bugs (or any other) in these 500 tests."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/ajIvWB83bGg",alt:"Rule: Issues in the run",type:"video"}),"\n",(0,i.jsx)(t.p,{children:'Amount of issues also has 2 options "All tests" and "Tests with the attribute". The purpose of the rule is to limit the number of unwanted defects in the run. With the option "All tests", you can restrict issues for all tests in the launch.'}),"\n",(0,i.jsx)(t.p,{children:'With the option "Test with attributes", you can limit issues in the critical features, components, etc.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Ammount of issues in the launch"})}),"\n",(0,i.jsx)(t.p,{children:"For adding this rule Project Manager or Admin should:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"Amount of issues"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"All tests"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose a defect type: ",(0,i.jsx)(t.code,{children:'"Total Defect Types"'})," or ",(0,i.jsx)(t.code,{children:'"Defect Type"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Add a number of min allowable issues - ",(0,i.jsx)(t.code,{children:"N%"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'On the finish, the system will automatically analyze a launch and compare a number of specified defects in the analyzed launch with a issues numbers in the "amount issues" rule in the Quality Gate. If the a number of issues in the launch is more than in the rule, the system fails the rule and Quality Gate.'}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["How a number of issues is calculated",(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:['if in the rule specified "Total Defect type"',(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"A number of issues in the test run"})," = SUM of items with defect types which belong to the Defect type group",(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:['if in the rule specified "Defect type"',(0,i.jsx)("br",{})]}),(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"A number of issues in the test run"})," = number of items with specified defect types"]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Ammount of issues in tests with attribute"})}),"\n",(0,i.jsxs)(t.p,{children:["For this rule a user can choose an option ",(0,i.jsx)(t.code,{children:'Tests with an attribute"'}),'. The logic for this rule is the same as for rule "Amount of tests with an attribute".']}),"\n",(0,i.jsx)(t.h4,{id:"allowable-level-of-to-investigate",children:"Allowable level of To investigate"}),"\n",(0,i.jsxs)(t.p,{children:["When you choose a rule ",(0,i.jsx)(t.code,{children:'"Amount of issues"'}),", the system automatically adds a parameter ",(0,i.jsx)(t.code,{children:'"Allowable To investigate level"'})," to the Quality Gate."]}),"\n",(0,i.jsx)(t.p,{children:"What does this parameter mean?"}),"\n",(0,i.jsx)(t.p,{children:'The purpose of the rule is a check and a guarantee that the run does not contain specified issues. But if a launch includes "To investigate", the system can not make an analysis of the system and guarantee that the forbidden problems are absent in a launch.'}),"\n",(0,i.jsxs)(t.p,{children:["For this reason, we have added the parameter ",(0,i.jsx)(t.code,{children:'"Allowable To investigate level"'}),". By default, this parameter equals 0. But you can change this parameter and set your custom value."]}),"\n",(0,i.jsx)(t.p,{children:"For this Project Manager or Admin can edit Quality Gate:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the button ",(0,i.jsx)(t.code,{children:'"Edit Details"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Change value in the field ",(0,i.jsx)(t.code,{children:'"Allowable TI"'})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the button ",(0,i.jsx)(t.code,{children:'"Save"'})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"new-failures-in-the-run",children:"New failures in the run"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 1:"})," Regression suite has 1000 tests. In the last released version, five tests failed in a regression suite. You want to track that the regression runs on the version in development should not have new failures."]}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Case 2:"})," Regression suite contains 500 tests with critical priority. In the last released version 1 test with critical priority failed. You want to track that critical tests in the regression run on the version in development should not have new failures."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/W05N7DQkalg",alt:"Rule: New Failure",type:"video"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of the rule is to block a run that has new failures compared to a chosen baseline."}),"\n",(0,i.jsx)(t.p,{children:'New failures also have 2 options "All tests" and "Tests with an attribute". The purpose of the rule is to block a run that has new failures compared to a chosen baseline.'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gate"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on the drop-down: ",(0,i.jsx)(t.code,{children:'"Add a new rule."'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"New failure."'})]}),"\n",(0,i.jsxs)(t.li,{children:["Choose the option ",(0,i.jsx)(t.code,{children:'"All tests"/"Test with attributes."'})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the tick"})]}),"\n",(0,i.jsx)(t.li,{children:"The rule is added to the Quality Gate"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this case, on the finish, the system will automatically analyze a launch and compare failed tests /or failed tests with the specified attribute in the analyzed launch with tests in the baseline. It fails a rule if the system detects a new failure in the launch or in tests with specified attributes."}),"\n",(0,i.jsx)(t.h4,{id:"how-does-the-rule-works",children:"How does the rule works"}),"\n",(0,i.jsxs)(t.p,{children:["For defining test uniqueness, our continuous testing platform uses ",(0,i.jsx)(t.a,{href:"/work-with-reports/TestCaseId",children:"Test Case ID principles"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"For now, ReportPortal can not process items with the same Test Case ID correctly."})}),"\n",(0,i.jsx)(t.h4,{id:"how-to-choose-a-baseline-for-the-new-failures-rule",children:'How to choose a Baseline for the "New failures" rule'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Default Baseline"})}),"\n",(0,i.jsxs)(t.p,{children:["By default, a system will use ",(0,i.jsx)(t.code,{children:"a previous launch"}),' for comparison. For example, for "Launch A #3", the system will use "Launch A #2" as a baseline. If there is no "Launch A #2" (f.e. this launch has been deleted by retention job) in the system, the system will use "Launch A #1".']}),"\n",(0,i.jsx)(t.p,{children:'If there is no fitting launch in the system, the "New failure" rule will get the status "Undefine".'}),"\n",(0,i.jsx)(s,{src:n(89930),alt:"Rule: Baseline Latest"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Customized Baseline"})}),"\n",(0,i.jsx)(t.p,{children:"If you want to choose other options for a baseline, you can do it:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Login ReportPortal as Project Manager or Admin"}),"\n",(0,i.jsxs)(t.li,{children:["Open ",(0,i.jsx)(t.code,{children:"Project Settings> Quality Gates"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"the pencil"})," on the Quality Gate rule"]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:'"Edit Details."'})]}),"\n",(0,i.jsxs)(t.li,{children:["Unclick a checkbox on ",(0,i.jsx)(t.code,{children:'"Choose a previous launch as a baseline."'})]}),"\n",(0,i.jsx)(t.li,{children:"The system activates fields for baseline configuration"}),"\n"]}),"\n",(0,i.jsx)(s,{src:n(23890),alt:"Rule: Baseline Custom"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Case"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Fileds configuration"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"You want to specify a static launch that should always be used"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Select launch name and add launch number in the baseline section"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"You want to specify dynamic launcg"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:['Select launch name and check a button "Latest" ',"\u2753"]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["\u2753",' When you use "latest", the system will use the latest launch with a specified launch name, which has been run before the analyzed launch.\nIf you want to specify a baseline, you also can add launch attributes. In this case, the system will use the latest launch with specified launch name and attributes, which have been run before the analyzed launch.']}),"\n",(0,i.jsx)(t.h3,{id:"new-errors-in-the-run",children:"New errors in the run"}),"\n",(0,i.jsxs)(t.p,{children:["\u201cUnique errors\u201d functionality with a new Quality Gates rule \u2013 New Errors \u2013 was implemented in version 5.7. This feature saves your time for searching and analyzing repeated errors in launches. ",(0,i.jsx)(t.strong,{children:"\u201cNew Errors\u201d rule"})," will help to group errors into new and known ones and, for example, fail build if there are new error not seen previously."]}),"\n",(0,i.jsx)(t.p,{children:"To begin using this functionality, you need to create a Quality Gate and add the \u201cNew Errors\u201d rule. Please follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Log in to ReportPortal as Admin/PM."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.code,{children:"Project Settings"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Select ",(0,i.jsx)(t.code,{children:"Quality Gates"})," section."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Create Quality Gate"})," button."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s,{src:n(55020),alt:"Create Quality Gate button"}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsxs)(t.li,{children:["Enter ",(0,i.jsx)(t.code,{children:"Quality Gate Name"})," and ",(0,i.jsx)(t.code,{children:"Analyzed Launch"}),", then click ",(0,i.jsx)(t.code,{children:"Save"})," button."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:n(23495),alt:"Quality Gate Name"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["if you want the Quality Gate not to run for all launches, you can adjust it only for the launches with specific attributes. Click ",(0,i.jsx)(t.code,{children:"Add attribute"})," and specify value and key, e.g., browser."]})}),"\n",(0,i.jsx)(s,{src:n(35806),alt:"Quality Gate for the launth with attributes"}),"\n",(0,i.jsxs)(t.p,{children:["On the example in the screenshot above Quality Gate will run for launches with name ",(0,i.jsx)(t.strong,{children:"\u201cTest\u201d"})," with attributes ",(0,i.jsx)(t.em,{children:"Browser Chrome"}),", ",(0,i.jsx)(t.em,{children:"Feature Reporting"}),", ",(0,i.jsx)(t.em,{children:"Device MacBook"}),"."]}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsxs)(t.li,{children:["Click on the ",(0,i.jsx)(t.code,{children:"Add a new rule"})," dropdown and select ",(0,i.jsx)(t.code,{children:"New Errors"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Click the ",(0,i.jsx)(t.strong,{children:"\u201cconfirm\u201d"})," icon."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Please, note that \u201cNew Errors\u201d rule can be created with ",(0,i.jsx)(t.strong,{children:"\u201cAll tests\u201d"})," condition only."]})}),"\n",(0,i.jsx)(s,{src:n(88273),alt:"Add a new rule dropdown"}),"\n",(0,i.jsx)(s,{src:n(48328),alt:"Create Quality Gate rule New errors in the run"}),"\n",(0,i.jsxs)(t.p,{children:["Before running automation tests, make sure that ",(0,i.jsx)(t.strong,{children:"\u201cQuality Gates\u201d"})," feature is ON."]}),"\n",(0,i.jsx)(s,{src:n(85187),alt:"Quality Gates feature is ON"}),"\n",(0,i.jsx)(t.p,{children:"Now everything is ready to use."}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Go to automation testing tool."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Run autotests."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Go to ReportPortal."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open the ",(0,i.jsx)(t.code,{children:"Launches"})," section and click the ",(0,i.jsx)(t.code,{children:"Refresh"})," button at the top."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s,{src:n(63610),alt:"Refresh button on the Launches section"}),"\n",(0,i.jsxs)(t.ol,{start:"11",children:["\n",(0,i.jsx)(t.li,{children:"Verify the Quality Gates' status."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Passed"})})," - there are no failures."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"Failed"})})," - there are new errors."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"N/A"})})," - appears if the quality gate was created after a launch was finished, or there is no quality gate for this launch. If the status is Not Available, click on the \u201cN/A\u201d and then click \u201cRun Quality Gate\u201d button (+ \u201cRefresh\u201d)."]}),"\n",(0,i.jsx)(s,{src:n(67469),alt:"Quality Gates' status"}),"\n",(0,i.jsxs)(t.ol,{start:"12",children:["\n",(0,i.jsxs)(t.li,{children:["To look at the failed test results, click on the ",(0,i.jsx)(t.code,{children:"Failed"})," status and then click on the number under ",(0,i.jsx)(t.code,{children:"Current"})," column."]}),"\n"]}),"\n",(0,i.jsx)(s,{src:n(24964),alt:"Failed test results"}),"\n",(0,i.jsxs)(t.p,{children:["You will be redirected to the ",(0,i.jsx)(t.code,{children:"Unique errors"})," tab with a list of all new error logs of the launch. If you want to see known issues as well, open the ",(0,i.jsx)(t.code,{children:"All Unique Errors"})," dropdown at the top and click the ",(0,i.jsx)(t.code,{children:"Known Errors"})," checkbox."]}),"\n",(0,i.jsx)(s,{src:n(13238),alt:"All Unique Errors"}),"\n",(0,i.jsx)(s,{src:"https://youtu.be/sfEk9DuuEVQ",alt:"Defining New Errors in the run in our test automation dashboard",type:"video"}),"\n",(0,i.jsxs)(t.p,{children:["By default, ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"a previous launch execution"})})," is used as a Baseline Launch for the Quality Gate. Besides, you can as well define any other launch by specifying its name and sequence number or select ",(0,i.jsx)(t.code,{children:"Latest"})," for the prior run of the specified launch to be used as a baseline."]}),"\n",(0,i.jsxs)(t.p,{children:["To make these changes, click ",(0,i.jsx)(t.code,{children:"Edit Details"})," on the Quality Gate page and uncheck the ",(0,i.jsx)(t.code,{children:"Choose a previous launch as a baseline"})," checkbox."]}),"\n",(0,i.jsx)(s,{src:n(93215),alt:"Define Baseline Launch for the Quality Gate"}),"\n",(0,i.jsx)(s,{src:n(54916),alt:"Choose a previous launch as a baseline checkbox"}),"\n",(0,i.jsx)(t.p,{children:"Follow the steps below depending on the preferable settings for the Baseline Launch."}),"\n",(0,i.jsx)(s,{src:n(94861),alt:"Specific Launch as a Baseline Launch"}),"\n",(0,i.jsx)(s,{src:n(22354),alt:"Latest Launch as a Baseline Launch"}),"\n",(0,i.jsx)(t.p,{children:"In this way you can compare analyzed launch not only with its previous execution but also with another launch."})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},89930:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/BaselineLatest-61dfb4e4fd170476d8b3e601dd7d5a23.png"},23890:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/CustomBaseline-65c3f7ecd33a074eaa6cad99c22c0856.png"},55020:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors1-89dc705724687ade0e357b31dbbb2072.png"},13238:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors10-34036fa8325bdb4acccb6e4b68adbd49.png"},93215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors11-f6af4387bf83e0705706de5dadebe2d8.png"},54916:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors12-c73ffc06e76b1403d7a2be310418053a.png"},94861:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors13-03e74847b050c550be601719e78dc8de.png"},22354:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors14-deb5c131ae67dd42873b881122190a98.png"},23495:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors2-c5cc33ab011b883bab11918ee9fd9d74.png"},35806:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors3-9d89d0e6c8b49e7aee10a6a0174dbf42.png"},88273:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors4-79b1154c407165acdee980b9d36305bf.png"},48328:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors5-3c29d33fae43c25906845af81597f487.png"},85187:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors6-7a8583e64423385c8d3f0c9e88ebfea4.png"},63610:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors7-f67830e455e476d945bfea5f99dea64e.png"},67469:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors8-d3eb57abc8a0cba3f79a22673dd539b4.png"},24964:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});const s=n.p+"assets/images/NewErrors9-e925eb8e279247668f121c39728b7cc9.png"}}]);