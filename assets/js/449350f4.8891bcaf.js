"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50064],{27418:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(85893),n=s(11151);const o={sidebar_position:6,sidebar_label:"Investigation of failure"},r="Investigation of failure",a={id:"work-with-reports/InvestigationOfFailure",title:"Investigation of failure",description:"Set defect type",source:"@site/docs/work-with-reports/InvestigationOfFailure.mdx",sourceDirName:"work-with-reports",slug:"/work-with-reports/InvestigationOfFailure",permalink:"/docs/work-with-reports/InvestigationOfFailure",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/work-with-reports/InvestigationOfFailure.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Investigation of failure"},sidebar:"docs",previous:{title:"System attributes",permalink:"/docs/work-with-reports/SystemAttributes"},next:{title:"History of launches",permalink:"/docs/work-with-reports/HistoryOfLaunches"}},c={},l=[{value:"Set defect type",id:"set-defect-type",level:2},{value:"How to create a custom defect type?",id:"how-to-create-a-custom-defect-type",level:2},{value:"Post bug to Bug Tracking System",id:"post-bug-to-bug-tracking-system",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components},{MediaViewer:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"investigation-of-failure",children:"Investigation of failure"}),"\n",(0,i.jsx)(t.h2,{id:"set-defect-type",children:"Set defect type"}),"\n",(0,i.jsx)(t.p,{children:"ReportPortal provides the possibility for test failure analysis of your runs. The investigation includes setting the appropriate defect type of failed items, posting a defect for them or linking the ID of a defect that is already created in the bug tracking system."}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"/analysis/ManualAnalysis#make-decision-modal-redesign",children:"\u201cMake decision\u201d modal"}),", you can choose the real reason of your failure and provide a comment for this fail."]}),"\n",(0,i.jsx)(t.p,{children:"When a defect is found in a test, the bug triage should be performed and proper defect type should be assigned to it, in order to have accurate test runs statistics. You will be able to change a defect type for a test and mark it as a Product Bug/Automation Bug/System Issue/No Defect at any time."}),"\n",(0,i.jsx)(t.p,{children:"The available defect types are described below:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u201cTo investigate\u201d"})})," means that no investigation has been made on this defect yet."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u201cProduct bug\u201d"})})," means that the defect was investigated and a production bug found as the reason for the failure of this test."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u201cAutomation bug\u201d"})})," means that the defect was investigated and the automation test is not correct."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u201cSystem issue\u201d"})})," means that the defect was investigated and it turns out that a system-level issue, like an app crash, caused the test to fail."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"\u201cNo defect\u201d"})})," means that the defect was investigated and was defined to be not a defect."]}),"\n",(0,i.jsx)(t.p,{children:"You can successfully work with basic defect types, or you can also create up to 70 custom defect types. Moreover, it is possible to have all custom groups of issues under 1 default defect type (if needed)."}),"\n",(0,i.jsx)(t.h2,{id:"how-to-create-a-custom-defect-type",children:"How to create a custom defect type?"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open Project Settings"}),"\n",(0,i.jsx)(t.li,{children:"Navigate to \u201cDefect Types\u201d tab"}),"\n",(0,i.jsx)(t.li,{children:"Click \u201cCreate Defect Type\u201d button at the top of the page or click the icon near the defect type group"}),"\n",(0,i.jsx)(t.li,{children:"Select the Defect Type Group"}),"\n",(0,i.jsx)(t.li,{children:"Fill the \u201cDefect Type Name\u201d and the \u201cAbbreviation\u201d fields"}),"\n",(0,i.jsx)(t.li,{children:"Select a color in the \u201cColor of Defect\u201d section (you can select any color from the color picker)"}),"\n"]}),"\n",(0,i.jsx)(o,{src:s(52091),alt:"Create a custom defect types in our test results dashboard"}),"\n",(0,i.jsx)(t.p,{children:"Thanks to custom defect types, you can get the following benefits:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"More specific defect types to identify the most problematic product area"}),"\n",(0,i.jsx)(t.li,{children:"The ability to prioritize bugs based on more specific types of defects"}),"\n",(0,i.jsx)(t.li,{children:"A possibility to assign people / teams"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For example, there can be following custom defect types that are created on the project:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Product Bug Group"})," \u2013 Billing feature, Backend bug, UI issue, Not implemented feature"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Automation Bug Group"})," \u2013 Test data issue, Timeout issue"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"System Issue Group"})," \u2013 Permission issue, Environment issue"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"No Defect Group"})," \u2013 New feature, Manually passed, Fixed (if the bug is fixed, but auto tests are not fixed yet)"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"There is also To Investigate Group for the defects that have not been sorted out yet."})}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsx)(t.p,{children:"A small life hack: you can identify defects by the name of the team and, in doing so, assign them to the appropriate team. This method can be applied within any defect type group."})}),"\n",(0,i.jsx)(o,{src:s(47954),alt:"Custom defect types in our test automation dashboard"}),"\n",(0,i.jsx)(o,{src:s(98674),alt:"Example of using custom defect types in our test automation results dashboard"}),"\n",(0,i.jsx)(t.h2,{id:"post-bug-to-bug-tracking-system",children:"Post bug to Bug Tracking System"}),"\n",(0,i.jsx)(t.p,{children:"ReportPortal allows to connect some popular bug tracking systems with our test automation reporting platform and post a bug to them or link the ticket ID of the already posted defect to the test item in ReportPortal."}),"\n",(0,i.jsx)(t.p,{children:"Before posting/linking a bug, make sure that the bug tracking systems are connected to the project on the project settings page. To check it, please, find the user guides below:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/plugins/AtlassianJiraServer",children:"Atlassian Jira Server"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/plugins/AtlassianJiraCloud",children:"Atlassian Jira Cloud"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/plugins/AzureDevOps",children:"Azure DevOps"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/plugins/Rally",children:"Rally"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/plugins/GitLab",children:"GitLab"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},52091:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i=s.p+"assets/images/CustomDefectTypes1-ae7e814b5918f804ce432e2440e981ad.png"},47954:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i=s.p+"assets/images/CustomDefectTypes2-b743c91796b3a04ef6cd73f8294e8ef0.png"},98674:(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});const i=s.p+"assets/images/CustomDefectTypes3-0c7d5f4919097f0145c02fb4fd888c04.png"}}]);