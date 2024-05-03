"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3703],{45174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(85893),r=t(11151);const i={sidebar_position:2,sidebar_label:"Version 23.2"},a="Version 23.2",o={id:"releases/Version23.2",title:"Version 23.2",description:"1. What's Changed:",source:"@site/docs/releases/Version23.2.md",sourceDirName:"releases",slug:"/releases/Version23.2",permalink:"/docs/releases/Version23.2",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/releases/Version23.2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Version 23.2"},sidebar:"docs",previous:{title:"Version 24.1",permalink:"/docs/releases/Version24.1"},next:{title:"Version 23.1",permalink:"/docs/releases/Version23.1"}},l={},d=[{value:"1. What&#39;s Changed:",id:"1-whats-changed",level:2},{value:"2. Small updates:",id:"2-small-updates",level:2},{value:"3. Technical Improvements:",id:"3-technical-improvements",level:2},{value:"4. Enhancements Based on Community Feedback:",id:"4-enhancements-based-on-community-feedback",level:2},{value:"5. Released versions",id:"5-released-versions",level:2},{value:"6. Migration guide",id:"6-migration-guide",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"version-232",children:"Version 23.2"}),"\n",(0,s.jsx)(n.h2,{id:"1-whats-changed",children:"1. What's Changed:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["New feature - ",(0,s.jsx)(n.a,{href:"/admin-panel/EventMonitoring",children:"Monitoring"}),":"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A new Event Monitoring interface has been introduced, providing administrators with a convenient means to review all activities at the Project level through the Search & Filter functionality within the Admin panel. Events at the instance level are not visible on the UI, but they are securely stored in the database. This data can be easily transmitted to SIEM systems for future monitoring and analysis."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"/dashboards-and-widgets/ProjectActivityPanel",children:"Project Activity Panel"})," Adjustments:"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The list of project activities displayed in the Project Activity Panel has been expanded."}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsx)(n.p,{children:"Please take into account that starting from this point forward, all events will have a new format for their storing in the database. Consequently, all events which have been stored prior to version 23.2 will be deleted."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["New feature \u2013 ",(0,s.jsx)(n.a,{href:"/user-account/DeleteAccount",children:"Delete Account"}),":"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now instance administrators can empower users to delete their accounts and obfuscate associated personal data."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["New feature \u2013 Personal ",(0,s.jsx)(n.a,{href:"/user-account/DataRetentionProcedure",children:"Data Retention policy"}),":"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"ReportPortal now offers the option to set a retention period for collected personal data during instance configuration."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Please note that Features 3 and 4 are configurable, giving you the flexibility to decide whether you want to use these features or not. If you choose to utilize them, you can configure them using environmental variables. Further details can be found in the respective documentation."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:["New feature \u2013 ",(0,s.jsx)(n.a,{href:"/reportportal-configuration/HowToGetAnAccessTokenInReportPortal#2-authorization-with-users-api-key-for-agents",children:"API Key"}),":"]})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can now generate as many API Keys as you need. You also have the ability to keep track of the creation date of API Keys and revoke any that are unused. Old tokens will still continue to function. Additionally, easy identification of the purpose of API Keys is facilitated through the use of prefixes."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"/quality-gates/IntegrationWithCICD/IntegrationWithGitLabCI",children:"Gitlab CI integration"})," Workaround:"]})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-small-updates",children:"2. Small updates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u201cLoad current step\u201d functionality adjustments:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:'Minor refinements have been applied to the "Load current step" functionality. Now, you can access the "Load current step" feature by hovering over a step.'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Download file name changes:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Attachment details and download format have been revised: files are now downloaded with the real file names."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Configuration examples updates:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Configuration examples on the user profile page have been updated."}),"\n",(0,s.jsx)(n.h2,{id:"3-technical-improvements",children:"3. Technical Improvements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Storage layer now supports S3 storage, allowing data consolidation into a single bucket for the entire instance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We\u2019ve added postfix for bucket names in binary storage."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We\u2019ve updated dependencies with security fixes: service-auto-analyzer and service-metrics-gatherer."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The issue of slow Log View loading when STEP has a complex structure of the nested steps nesting and count of them has been resolved and now up to 7x faster."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Service-jobs stability is improved during the reporting logs with the large stack traces."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We\u2019ve optimized the attachments cleaning mechanism that allows us to increase the default value of the chunk_size by 20 times: from 1000 to 20000 in the docker compose and Kubernetes deployments."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Content Security Policy has been extended by adding the .browserstack.com. Now you can embed videos as a markdown from BrowserStack in order to ease failed tests troubleshooting."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Job for Flushing Demo data works as expected thanks to sql error fix."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We\u2019ve updated react to version 17 and its dependencies to reduce the number of vulnerabilities and have a smooth transition to version 18."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Issues arising when service-api is starting (connected to bucket structure update or the binary storage type update) while there are integrations to external services like Jira have been resolved. Old logic for migrating integration salt has been removed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Launches import via API is possible with additional parameters: name, description, attributes."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Rename notIssue parameter for import launch : For the end-point POST/v1 /{projectName} /launch /import parameter notIssue is renamed to skippedIsNotIssue. Logic remains the same."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-enhancements-based-on-community-feedback",children:"4. Enhancements Based on Community Feedback:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1815",children:"#1815"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1795",children:"#1795"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/957",children:"#957"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1644",children:"#1644"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1590",children:"#1590"}),". All ReportPortal images now support multiple platforms: linux/amd64"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/issues/1970",children:"#1970"}),". Deserialization issue has been fixed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-released-versions",children:"5. Released versions"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Service Name"}),(0,s.jsx)(n.th,{children:"Repository"}),(0,s.jsx)(n.th,{children:"Tag"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Index"}),(0,s.jsx)(n.td,{children:"reportportal/service-index"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Authorization"}),(0,s.jsx)(n.td,{children:"reportportal/service-authorization"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UI"}),(0,s.jsx)(n.td,{children:"reportportal/service-ui"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"API"}),(0,s.jsx)(n.td,{children:"reportportal/service-api"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Jobs"}),(0,s.jsx)(n.td,{children:"reportportal/service-jobs"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Migrations"}),(0,s.jsx)(n.td,{children:"reportportal/migrations"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Auto Analyzer"}),(0,s.jsx)(n.td,{children:"reportportal/service-auto-analyzer"}),(0,s.jsx)(n.td,{children:"5.10.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Metrics Gatherer"}),(0,s.jsx)(n.td,{children:"reportportal/service-metrics-gatherer"}),(0,s.jsx)(n.td,{children:"5.10.0"})]})]})]}),"\n",(0,s.jsxs)(n.h2,{id:"6-migration-guide",children:["6. ",(0,s.jsx)(n.a,{href:"https://github.com/reportportal/reportportal/wiki/Migration-to-ReportPortal-v.23.2",children:"Migration guide"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);