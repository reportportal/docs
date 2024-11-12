"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27856],{67508:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"quality-gates/AssessmentOfTestResultsUsingQualityGates","title":"Assessment of test results using Quality Gates","description":"Now the system is preconfigured, and you can start using Quality Gates Analysis.","source":"@site/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates.mdx","sourceDirName":"quality-gates","slug":"/quality-gates/AssessmentOfTestResultsUsingQualityGates","permalink":"/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/quality-gates/AssessmentOfTestResultsUsingQualityGates.mdx","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Assessment of test results using Quality Gates"},"sidebar":"docs","previous":{"title":"Delete Quality Gates","permalink":"/docs/quality-gates/DeleteQualityGates"},"next":{"title":"Integration with CI/CD","permalink":"/docs/quality-gates/IntegrationWithCICD/"}}');var l=s(74848),n=s(28453);const i={sidebar_position:8,sidebar_label:"Assessment of test results using Quality Gates"},r="Assessment of test results using Quality Gates",u={},o=[{value:"Quality Gate Analysis",id:"quality-gate-analysis",level:2},{value:"How to run Quality Gates Manually",id:"how-to-run-quality-gates-manually",level:2},{value:"How to recalculate Quality Gates",id:"how-to-recalculate-quality-gates",level:2},{value:"How to run Quality Gates Automatically",id:"how-to-run-quality-gates-automatically",level:2},{value:"Quality Gate Status and Timeout",id:"quality-gate-status-and-timeout",level:2},{value:"Timeout",id:"timeout",level:3},{value:"Quality Gate Report",id:"quality-gate-report",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{MediaViewer:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"assessment-of-test-results-using-quality-gates",children:"Assessment of test results using Quality Gates"})}),"\n",(0,l.jsx)(t.p,{children:"Now the system is preconfigured, and you can start using Quality Gates Analysis."}),"\n",(0,l.jsx)(t.p,{children:"Quality Gates plugin can be used with CI/CD tools - in this case, and Quality Gate status will be sent to CI/CD pipeline.\nBut also, Quality Gates can be used just as a way of test results analysis."}),"\n",(0,l.jsx)(t.p,{children:"First, let's discuss how ReportPortal assesses a test run quality and provides a full report with real time test results.\nSecond, let's check how to send assessment results to CI/CD."}),"\n",(0,l.jsx)(t.h2,{id:"quality-gate-analysis",children:"Quality Gate Analysis"}),"\n",(0,l.jsx)(t.h2,{id:"how-to-run-quality-gates-manually",children:"How to run Quality Gates Manually"}),"\n",(0,l.jsx)(t.p,{children:'By default, all launches have "N\\A" status. It means that Quality Gate analysis has not been run for these launches.'}),"\n",(0,l.jsx)(t.p,{children:'If you want to run Quality Gate analysis manually, click on the label "N/A" and click on the "Run Quality Gate" in the opened pop-up.'}),"\n",(0,l.jsx)(t.h2,{id:"how-to-recalculate-quality-gates",children:"How to recalculate Quality Gates"}),"\n",(0,l.jsx)(t.p,{children:"If you want to recalculate Quality Gate status for a launch, just perform next actions:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["click on ",(0,l.jsx)(t.code,{children:"the label with a status"})," of a launch"]}),"\n",(0,l.jsxs)(t.li,{children:["click on the ",(0,l.jsx)(t.code,{children:'"Recalculate"'})," in the opened pop-up"]}),"\n"]}),"\n",(0,l.jsx)(a,{src:s(93605),alt:"How to recalculate Quality Gates in our test automation dashboard"}),"\n",(0,l.jsx)(t.p,{children:"Quality Gates can not be run for launches in progress."}),"\n",(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsx)(t.p,{children:"If Quality Gate status has been already sent to CI/CD, a status can not be recalculated for a such launch."})}),"\n",(0,l.jsx)(a,{src:s(92613),alt:"Report That Is Already Sent"}),"\n",(0,l.jsx)(t.h2,{id:"how-to-run-quality-gates-automatically",children:"How to run Quality Gates Automatically"}),"\n",(0,l.jsx)(t.p,{children:"You can configure Auto Quality Gate Analysis on the Project Settings. If you switch Quality Gate Analysis ON, the system will start QG analysis on the launch finish."}),"\n",(0,l.jsx)(a,{src:s(17374),alt:"Quality Gate Analysis ON"}),"\n",(0,l.jsx)(t.h2,{id:"quality-gate-status-and-timeout",children:"Quality Gate Status and Timeout"}),"\n",(0,l.jsx)(t.p,{children:"When a launch finishes, the system starts Quality Gate Analysis."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"First,"})," the system checks if there Quality Gate for a launch under analysis. If there is no, such Quality Gate, the system shows error message.\n",(0,l.jsx)(t.strong,{children:"Second,"})," if Quality Gates is found, the systems checks all rules in Quality Gate one by one and define a status for each rule\n",(0,l.jsx)(t.strong,{children:"Third,"})," if all rules are done, the system defines the status of a whole Quality Gate."]}),"\n",(0,l.jsx)(t.p,{children:"How is status calculated:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Status"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Calculation"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Meaning"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Passed"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"All rules in a Quality Gate have status PASSED"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Quality Assessment passed, a test run matches specified quality criteria"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Undefined"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"If Quality Gate does not have FAILED, IN PROGRESS rules, but at least one rule has status Undefined"}),(0,l.jsxs)(t.td,{style:{textAlign:"center"},children:["Quality Assessment can not be finished ","\u2753"]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"In Progress"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"If Quality Gate does not have FAILED rules, but at least one rule in a Quality Gate has status IN PROGRESS"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Quality Assessment is in progress"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Failed"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"At least one rule in a Quality Gate has status FAILED"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"Quality Assessment failed, a test run does not match specified quality criteria"})]})]})]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Forth,"})," if there is an integration with CI/CD, the system sends status to CI/CD tools to a pipeline."]}),"\n",(0,l.jsxs)(t.p,{children:["\u2753"," The reasons why Quality Gates can get a status ",(0,l.jsx)(t.strong,{children:"Undefined"}),":"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:'For "Amount of issues" rule: if a number of To Investigate issues in the analyzed launch is more than allowable To Investigate level'}),"\n",(0,l.jsx)(t.li,{children:'For "New Failure": if a baseline is not found in the system'}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["If you get this status, you can proceed with launch analysis (or choose another baseline) and rerun Quality Gates. For that check the section ",(0,l.jsx)(t.a,{href:"/quality-gates/AssessmentOfTestResultsUsingQualityGates#how-to-recalculate-quality-gates",children:"How to recalculate Quality Gates"}),"."]}),"\n",(0,l.jsx)(t.h3,{id:"timeout",children:"Timeout"}),"\n",(0,l.jsxs)(t.p,{children:["Specially for integration with CI\\CD, Quality Gates has parameter ",(0,l.jsx)(t.code,{children:"Timeout"}),". If a launch whose status should be sent to a pipeline, gets UNDEFINED status, the system uses a value from ",(0,l.jsx)(t.code,{children:"Timeout"}),". Default ",(0,l.jsx)(t.code,{children:"Timeout"})," equals to 2 hours. It means, that after 2 hours after launch finish, the system force recaluculats Quality Gate Status and defined status."]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Jenkins Job Status"}),(0,l.jsx)(t.th,{style:{textAlign:"center"},children:"Quality Gate Status"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"SUCCESS"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"PASSED"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"All Rulles Passed"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FAILED"}),(0,l.jsx)(t.td,{style:{textAlign:"center"},children:"FAILED"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"At least one rule does not pass"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"If you want to choose other options for a timeout, you can do it:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Login ReportPortal as Project Manager or Admin"}),"\n",(0,l.jsxs)(t.li,{children:["Open ",(0,l.jsx)(t.code,{children:"Project Settings> Quality Gates"})]}),"\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:"the pencil"})," on the Quality Gate rule"]}),"\n",(0,l.jsxs)(t.li,{children:["Click on ",(0,l.jsx)(t.code,{children:'"Edit Details."'})]}),"\n",(0,l.jsxs)(t.li,{children:["Choose needed option in a dropdown ",(0,l.jsx)(t.code,{children:'"Timeout"'})]}),"\n",(0,l.jsx)(t.li,{children:"Save a Quality Gate"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"If there is no needed option in the dropdown, you can specify custom value via API."}),"\n",(0,l.jsx)(t.h2,{id:"quality-gate-report",children:"Quality Gate Report"}),"\n",(0,l.jsx)(t.p,{children:"A Quality Gate report is a full report that shows information on Quality gate results. This is a table that shows:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"all rules in a Quality Gate"}),"\n",(0,l.jsxs)(t.li,{children:["rule status: ",(0,l.jsx)(t.code,{children:"Passed/Failed/Skipped"})]}),"\n",(0,l.jsx)(t.li,{children:"expected results"}),"\n",(0,l.jsx)(t.li,{children:"actual results"}),"\n"]}),"\n",(0,l.jsx)(a,{src:s(93605),alt:"Quality Gates Report"}),"\n",(0,l.jsx)(t.p,{children:"All actual results are clickable in the report except New Failure. A clickable area for New failure will be available in the version 5.7. So user can drill down and investigate items, that became a reason of build failure."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},17374:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGatesAuto-69e0342c645671385d681f98f46d65f0.png"},93605:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/QualityGatesReport-dc809fd1e22481ecc66296cba213c5e5.png"},92613:(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});const a=s.p+"assets/images/ReportThatIsAlreadySent-2320cb3a4598c53376d2fce436432362.png"}}]);