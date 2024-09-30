"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95400],{52445:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(85893),a=s(11151);const i={sidebar_position:24,sidebar_label:"Component health check",description:"Generate a detailed test automation report with passing rate of the application components."},r="Component health check",o={id:"dashboards-and-widgets/ComponentHealthCheck",title:"Component health check",description:"Generate a detailed test automation report with passing rate of the application components.",source:"@site/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",sourceDirName:"dashboards-and-widgets",slug:"/dashboards-and-widgets/ComponentHealthCheck",permalink:"/docs/dashboards-and-widgets/ComponentHealthCheck",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/dashboards-and-widgets/ComponentHealthCheck.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,sidebar_label:"Component health check",description:"Generate a detailed test automation report with passing rate of the application components."},sidebar:"docs",previous:{title:"Most popular pattern table (TOP-20)",permalink:"/docs/dashboards-and-widgets/MostPopularPatternTableTop20"},next:{title:"Table Component health check",permalink:"/docs/dashboards-and-widgets/TableComponentHealthCheck"}},l={},d=[{value:"Widget&#39;s parameters:",id:"widgets-parameters",level:2},{value:"Widget view",id:"widget-view",level:2},{value:"Widget section",id:"widget-section",level:2},{value:"Widget legend",id:"widget-legend",level:2},{value:"Use case",id:"use-case",level:2}];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{MediaViewer:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"component-health-check",children:"Component health check"}),"\n",(0,n.jsx)(t.p,{children:"The widget shows the passing rate of the application components, indicated by the attributes specified for test cases."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"For using this widget you need to report (or add manually) attributes to test items."})}),"\n",(0,n.jsx)(t.h2,{id:"widgets-parameters",children:"Widget's parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Filter"}),"\n",(0,n.jsx)(t.li,{children:"Parameters: All Launches/Latest Launches"}),"\n",(0,n.jsx)(t.li,{children:"Checkbox 'Exclude Skipped Tests from Statistics'. Default state of checkbox: unselected."}),"\n",(0,n.jsx)(t.li,{children:"Minimum allowable passing rate for the component: Possible value ranges from 50% to 100%. The default value is 100%."}),"\n",(0,n.jsx)(t.li,{children:"Attribute Key for the First Level (mandatory)"}),"\n",(0,n.jsx)(t.li,{children:"Attribute Key for the 2nd to 10th Levels (optional)"}),"\n"]}),"\n",(0,n.jsx)(i,{src:s(19900),alt:"Component Health Check Creation"}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.strong,{children:"checkbox 'Exclude Skipped tests from statistics' is selected"}),", the passing rate is calculated based on the total number of test cases, excluding the skipped tests."]}),"\n",(0,n.jsxs)(t.p,{children:["When the ",(0,n.jsx)(t.strong,{children:"checkbox 'Exclude Skipped tests from statistics' is not selected"}),", the passing rate is calculated based on the total number of test cases, including the skipped tests."]}),"\n",(0,n.jsx)(t.h2,{id:"widget-view",children:"Widget view"}),"\n",(0,n.jsx)(t.p,{children:"The Component Health Check widget is multi-level (up to 10 level) with the ability to drill down to the list of test cases included in the corresponding group at each attribute key level."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u2018ALL LAUNCHES\u2019 option"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"For the first level"}),", system applies chosen filter to all the launches in ReportPortal and analyzes the last 600 launches\nfrom the filter. After combining all the tests cases from these launches, the system searches for the test cases\nwith the attribute key specified for the first widget level (e.g., attribute key ",(0,n.jsx)(t.strong,{children:"\u2018function\u2019"}),") and groups the found test cases\naround unique attribute values (order, team, configure, administrate). The system then calculates the passing rate for each group."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"For the second level"}),", the system again analyzes the 600 launches from the filter and searches\nfor the test cases with 1st level attribute key plus value for chosen group (e.g., ",(0,n.jsxs)(t.strong,{children:["function",":order"]}),")\nand also attribute key specified for the second widget level (e.g., ",(0,n.jsx)(t.strong,{children:"type"}),").\nThe found tests cases are grouped around unique attribute values (backend, API, Unit, UI).\nThe system again calculates the passing rate for each group."]}),"\n",(0,n.jsx)(t.p,{children:"The same flow is applied to the other levels of the widget."}),"\n",(0,n.jsx)(i,{src:s(24358),alt:"All launches in ReportPortal"}),"\n",(0,n.jsx)(i,{src:s(51898),alt:"Take launches from the filter"}),"\n",(0,n.jsx)(i,{src:s(91864),alt:"Combine all test cases"}),"\n",(0,n.jsx)(i,{src:s(73011),alt:"Leave test cases with attributes key for 1 level"}),"\n",(0,n.jsx)(i,{src:s(27377),alt:"Group by unique attribute with attributes key for 1 level"}),"\n",(0,n.jsx)(i,{src:s(76025),alt:"Calculated a passing rate for each group"}),"\n",(0,n.jsx)(i,{src:s(51887),alt:"Choose one group"}),"\n",(0,n.jsx)(i,{src:s(40730),alt:"Leave test cases with attributes key for 2 level"}),"\n",(0,n.jsx)(i,{src:s(69263),alt:"Group by unique attribute with attributes key for 2 level"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"\u2018LATEST LAUNCH\u2019 option"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"For the first level"}),", the flow is almost the same as for the \u2018ALL LAUNCHES\u2019 option.\nHowever, after the test cases are grouped around unique values for the attribute key, system only leaves the tests cases\nfrom latest launches executions for each selection."]}),"\n",(0,n.jsx)(t.p,{children:"For example, if you have Launch A with executions #1 and #2 and Launch B with executions #1 and #2\nand they correspond to the applied filter, then building the widget based on \u201cLATEST LAUNCHES\u2019 parameter\nwill take into account only the test cases from Launch A executions #2 and Launch B executions #2."}),"\n",(0,n.jsx)(t.h2,{id:"widget-section",children:"Widget section"}),"\n",(0,n.jsx)(t.p,{children:"The widget is divided into two sections: Passed and Failed."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Failed section"})," includes all groups (test cases with the same attribute) that have a passing rate lower than the passing rate specified in the widget wizard."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"The Passed section"})," includes all groups that have a passing rate higher than the rate specified in the widget wizard."]}),"\n",(0,n.jsx)(i,{src:s(34964),alt:"Component Health Check widget: Passed and Failed sections"}),"\n",(0,n.jsx)(t.p,{children:"Each group on the widget has:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"name"}),", which is equivalent to attribute value"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"passing rate"}),", calculated as (the number of passed test cases in the group)/(total number of test cases in the group)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"the number of test cases"})," in the group"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"a color line"}),", which depends on the passing rate (see section Widget legend)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Users can drill down to view the list of test cases included in the group, filtered by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"test method:"})," Test"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"status:"})," Passed, Failed, Skipped, Interrupted"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"attributes"})," (key=Key for corresponding level, value=group name)"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"Each subsequent level should contain the attributes of previous levels."})}),"\n",(0,n.jsx)(t.p,{children:"When you click on the arrow on the component and the 'Exclude Skipped tests' toggle is OFF,\nthe system redirects you to the test item view. Test items with statuses Passed, Failed, Interrupted, and Skipped are displayed."}),"\n",(0,n.jsx)(i,{src:s(83582),alt:"Component Health Check widget: Passed and Failed sections"}),"\n",(0,n.jsx)(i,{src:s(63465),alt:"Component Health Check widget: Passed and Failed sections"}),"\n",(0,n.jsx)(t.p,{children:"When you click on the arrow on the component and the 'Exclude Skipped tests' toggle is ON,\nthe system redirects you to the test item view. Test items with statuses Passed, Failed, and Interrupted are displayed."}),"\n",(0,n.jsx)(i,{src:s(90492),alt:"Component Health Check widget: Passed and Failed sections"}),"\n",(0,n.jsx)(t.h2,{id:"widget-legend",children:"Widget legend"}),"\n",(0,n.jsx)(t.p,{children:"The widget legend has two lines - Passed and Failed."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Failed"})}),"\n",(0,n.jsx)(t.p,{children:"The failed line has four colors:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"light red"}),"\n",(0,n.jsx)(t.li,{children:"regular red"}),"\n",(0,n.jsx)(t.li,{children:"strong red"}),"\n",(0,n.jsx)(t.li,{children:"dark red"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"It represents values that are less than the rate specified in the widget minus 1."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Passed"})}),"\n",(0,n.jsx)(t.p,{children:"The passing line has only two colors:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"slightly green"}),"\n",(0,n.jsx)(t.li,{children:"green"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"And have values - from specified on widget wizard to 100%. Depending on this color scheme each group on the widget has its own color."}),"\n",(0,n.jsx)(t.p,{children:"Let's say we set 'The min allowable passing rate for the component' to be 90%. The tests cases will be grouped in following color groups:"}),"\n",(0,n.jsxs)(t.p,{children:["green: tests with passing rate equals to 100%",(0,n.jsx)("br",{}),"\nslightly green: greater than or equal to 90% (specified on widget wizard) and less than 100%",(0,n.jsx)("br",{}),"\nlight red: greater than or equal to 67,5% (calculated as (",(0,n.jsx)(t.code,{children:"90%/4*3"}),")) and less than 90%",(0,n.jsx)("br",{}),"\nstrong red: greater than or equal to 45% (calculated as (",(0,n.jsx)(t.code,{children:"90%/4*2"}),")) and less than 67,5%",(0,n.jsx)("br",{}),"\nregular red: greater than or equal to 22,5% (calculated as (",(0,n.jsx)(t.code,{children:"90%/4"}),")) and less than 45%",(0,n.jsx)("br",{}),"\ndark red: less than 22,5%"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"The widget doesn't contain 'IN PROGRESS\" launches."})}),"\n",(0,n.jsx)(i,{src:"https://youtu.be/feb-sfi476g",alt:"Component Health Check Widget Video",type:"video"}),"\n",(0,n.jsx)(t.h2,{id:"use-case",children:"Use case"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Situation:"}),(0,n.jsx)("br",{}),"\nAs a Project Manager or Test Lead, I want to identify the most unstable areas in my product (application)."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Solution:"}),(0,n.jsx)("br",{}),"\nLet\u2019s build Component Health Check Widget based on a particular filter for the launches and the following attributes for test cases:"]}),"\n",(0,n.jsxs)(t.p,{children:["1st level: ",(0,n.jsx)(t.strong,{children:"key: function"}),", possible ",(0,n.jsx)(t.strong,{children:"values"}),": order, team, configure, administrate",(0,n.jsx)("br",{}),"\n2nd level: ",(0,n.jsx)(t.strong,{children:"key: type"}),", possible ",(0,n.jsx)(t.strong,{children:"values"}),": backend, API, Unit, UI",(0,n.jsx)("br",{}),"\n3d level: ",(0,n.jsx)(t.strong,{children:"key: market state"}),", possible ",(0,n.jsx)(t.strong,{children:"values"}),": open, close",(0,n.jsx)("br",{}),"\n4th level: ",(0,n.jsx)(t.strong,{children:"key: role"}),", possible ",(0,n.jsx)(t.strong,{children:"values"}),": Project Manager, Member, Admin"]}),"\n",(0,n.jsxs)(t.p,{children:["On the first level of the widget, the user will only see the test cases with attribute key ",(0,n.jsx)(t.strong,{children:"\u2018function\u2019"}),".",(0,n.jsx)("br",{}),"\nThe test cases will be grouped by attribute ",(0,n.jsx)(t.strong,{children:"value"}),": order, team, configure, administrate.",(0,n.jsx)("br",{}),"\nBy clicking on one of the groups (e.g., order), the user will see the second level of the widget.",(0,n.jsx)("br",{}),"\nIt will contain only test cases that have attribute ",(0,n.jsx)(t.strong,{children:"function: order"})," and attribute key ",(0,n.jsx)(t.strong,{children:"\u2018type\u2019"}),".",(0,n.jsx)("br",{}),"\nTest cases will be grouped by attribute value available for attribute key ",(0,n.jsx)(t.strong,{children:"\u2018type\u2019"})," which are: backend, API, Unit, UI."]}),"\n",(0,n.jsx)(t.p,{children:"1st LEVEL"}),"\n",(0,n.jsx)(i,{src:s(66536),alt:"First level of Component Health Check widget in our qa metrics dashboard"}),"\n",(0,n.jsx)(t.p,{children:"2nd LEVEL"}),"\n",(0,n.jsx)(i,{src:s(12688),alt:"Second level of Component Health Check widget in our test reporting tool"})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},83582:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckArrow-b738f2e250a1b246a330dece059794ec.png"},19900:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckCreation-a7081e80049f643f540b56a0f39d8a36.png"},66536:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckFirstLevel-5f38bfa586ebd6ac32bf0dbf5ddd035f.png"},34964:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckPassedFailed-3852cc81fe884ce22d6ee4992e45d657.png"},24358:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme1-3a71761b014a7ac1762bf24682a0abe5.png"},51898:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme2-8a8c43efeddeaac22eaa77989bc207cc.png"},91864:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme3-79df7fad9ba68dce72fd7be92136a2e8.png"},73011:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme4-5775aae8aa5e555137b1e40a96e3183b.png"},27377:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme5-9114a37c7eb48d687e34ad69004682d6.png"},76025:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme6-afabc68a007cb329da34a2ef276c54af.png"},51887:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme7-7257e471d1dc56d8edf622604fbe4fa8.png"},40730:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme8-c5d37d8f47bb9e2e792ab734875f67c9.png"},69263:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckScheme9-d771099d41244ebb60c00694c7639e42.png"},12688:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckSecondLevel-848ed841e7801a8d83b4d86ecd761a17.png"},63465:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckTests1-c73d3dcbb2bd193d74d475b54613b187.png"},90492:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});const n=s.p+"assets/images/ComponentHealthCheckTests2-1bc448e1c69402e65499f881de9306a9.png"}}]);