"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75324],{3479:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"analysis/PatternAnalysis","title":"Pattern Analysis","description":"Pattern Analysis is a feature that helps you to speed up test failure analysis by finding common patterns in error logs.","source":"@site/docs/analysis/PatternAnalysis.mdx","sourceDirName":"analysis","slug":"/analysis/PatternAnalysis","permalink":"/docs/analysis/PatternAnalysis","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/analysis/PatternAnalysis.mdx","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_label":"Pattern Analysis"},"sidebar":"docs","previous":{"title":"Manual Analysis","permalink":"/docs/analysis/ManualAnalysis"},"next":{"title":"Immediate Pattern Analysis","permalink":"/docs/analysis/ImmediatePatternAnalysis"}}');var a=t(74848),r=t(28453);const l={sidebar_position:7,sidebar_label:"Pattern Analysis"},i="Pattern Analysis",o={},d=[{value:"How to run Pattern Analysis",id:"how-to-run-pattern-analysis",level:2},{value:"How to create rules for Pattern Analysis",id:"how-to-create-rules-for-pattern-analysis",level:2},{value:"Types of Pattern Analysis rules",id:"types-of-pattern-analysis-rules",level:2},{value:"Use case 1",id:"use-case-1",level:2},{value:"Use case 2",id:"use-case-2",level:2}];function c(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components},{MediaViewer:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"pattern-analysis",children:"Pattern Analysis"})}),"\n",(0,a.jsx)(s.p,{children:"Pattern Analysis is a feature that helps you to speed up test failure analysis by finding common patterns in error logs."}),"\n",(0,a.jsx)(s.h2,{id:"how-to-run-pattern-analysis",children:"How to run Pattern Analysis"}),"\n",(0,a.jsx)(s.p,{children:"You can run Pattern Analysis automatically or manually."}),"\n",(0,a.jsxs)(s.p,{children:["To run Pattern Analysis ",(0,a.jsx)(s.strong,{children:"automatically"}),":"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Go to the Project Settings."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Open Pattern-Analysis tab."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:'Check the "Auto Pattern-Analysis" checkbox.'}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Create rule."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Run a launch."}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"After launch finish, automatic Pattern Analysis will occur."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n,{src:t(12870),alt:"Run Pattern Analysis automatically"}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"Automatic Pattern Analysis is activated by default."})}),"\n",(0,a.jsxs)(s.p,{children:["In case automatic Pattern Analysis is turned off, you can run ",(0,a.jsx)(s.strong,{children:"manually"})," from the menu next to a particular launch:"]}),"\n",(0,a.jsx)(n,{src:t(94077),alt:"Run Pattern Analysis manually"}),"\n",(0,a.jsx)(s.p,{children:"If we have Auto-Analysis enabled together with Pattern Analysis, Pattern Analysis starts before Auto-Analysis: in this case, ReportPortal first identifies known patterns, and then the Analyzer assigns defect types and links issues in the BTS, if available.\nAs a result, when both Auto-Analysis and Auto Pattern Analysis occur, a test item will have two labels: AA and PA."}),"\n",(0,a.jsx)(n,{src:t(12317),alt:"Both Auto-Analysis and Auto Pattern Analysis occurred"}),"\n",(0,a.jsx)(s.h2,{id:"how-to-create-rules-for-pattern-analysis",children:"How to create rules for Pattern Analysis"}),"\n",(0,a.jsx)(s.p,{children:"To create rule:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Go to the Project Settings."}),"\n",(0,a.jsx)(s.li,{children:"Open Pattern Analysis tab."}),"\n",(0,a.jsx)(s.li,{children:"Click \u2018Create Pattern\u2019 button."}),"\n",(0,a.jsx)(s.li,{children:"Fill in the form."}),"\n",(0,a.jsx)(s.li,{children:"Create \u2018Create\u2019 button."}),"\n"]}),"\n",(0,a.jsx)(n,{src:t(77396),alt:"Create Pattern button"}),"\n",(0,a.jsx)(n,{src:t(49688),alt:"Creating Pattern Analysis rule"}),"\n",(0,a.jsx)(s.h2,{id:"types-of-pattern-analysis-rules",children:"Types of Pattern Analysis rules"}),"\n",(0,a.jsx)(s.p,{children:"There are two types of Pattern Analysis rules:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"String \u2013 any problem phrase."}),"\n"]}),"\n",(0,a.jsx)(n,{src:t(6178),alt:"String Pattern Analysis rule"}),"\n",(0,a.jsx)(n,{src:t(62265),alt:"Example of String Pattern Analysis rule"}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Regex \u2013 regular expression."}),"\n"]}),"\n",(0,a.jsx)(n,{src:t(56016),alt:"Regex Pattern Analysis rule"}),"\n",(0,a.jsx)(n,{src:t(75927),alt:"Example of Regex Pattern Analysis rule"}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"It would be better to use STRING rule instead of REGEX rule in all possible cases to speed up the Pattern Analysis processing in the database. As a result, you can get your analysis completed faster using the STRING patterns rather than REGEX and reduce the database workload."})}),"\n",(0,a.jsx)(s.h2,{id:"use-case-1",children:"Use case 1"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Problem:"}),(0,a.jsx)("br",{}),"\nA user is aware of several common reasons why test cases fail. During a test run, many tests have failed, and the user needs to check the logs to identify the reasons behind the failures."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Solution:"}),(0,a.jsx)("br",{}),"\nCreate pattern rules for all common failure reasons, which include specific problem phrases (e.g., ",(0,a.jsx)(s.code,{children:"Expected status code <404> but was <500>"})," or ",(0,a.jsx)(s.code,{children:"Null response"}),") or use Regex queries (e.g., ",(0,a.jsx)(s.code,{children:"java:[0-9]*"}),"). Enable pattern analysis and launch a test run. This way, the ReportPortal system can identify all failed items that match known patterns in the error logs and label them with the corresponding pattern name. To find all items that failed for the same reason, apply a filter by \u2018Pattern Name\u2019 in the Step view. Additionally, add a \u2018Most Popular Pattern\u2019 widget to track the top 20 most frequent reasons for test failures in the build."]}),"\n",(0,a.jsx)(n,{src:t(30350),alt:"Pattern Name filter"}),"\n",(0,a.jsx)(n,{src:t(74836),alt:"Select pattern name"}),"\n",(0,a.jsx)(s.h2,{id:"use-case-2",children:"Use case 2"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Problem:"}),(0,a.jsx)("br",{}),"\nThe test run has finished, and the user notices that more than three items have failed for the same reason. The user wants to find all such items."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Solution:"}),(0,a.jsx)("br",{}),"\nCreate a new pattern rule in the Project Settings. Manually launch a pattern analysis for a specific test run. Use the \u2018Pattern Name\u2019 filter in the Step view to find all items that failed for the same reason."]}),"\n",(0,a.jsx)(n,{src:"https://youtu.be/W7qMwhLpIFI",alt:"Pattern Analysis launched Manually",type:"video"})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},12870:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis1-b07cee104b4c6f9225a6895ddfaa1844.png"},74836:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis10-b9e82570d814dfdceb86c9cf82f11d0a.png"},12317:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis11-09c7bccd68e1411f0ae5c753a49ee110.png"},94077:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis2-b43797267e3aef31f4055fdb36227e6f.png"},77396:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis3-2496d1a7ee7ec77275d68f3036842bdd.png"},49688:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis4-a478bcea4f282bc4cb4e2040b10d53d7.png"},6178:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis5-4c074d82fe3c756a13d1c32bd9458675.png"},62265:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis6-951c48f2644dc91f5eeaebb0782d00bc.png"},56016:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis7-595fcb49416ebba9bfc6ec85cf2b1ffb.png"},75927:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis8-eb566a39770dd7121d83f755094a8d0f.png"},30350:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});const n=t.p+"assets/images/PatternAnalysis9-4e69a713477debc211badaf35f003d77.png"}}]);