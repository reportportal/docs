"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86254],{33021:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"log-data-in-reportportal/test-framework-integration/Java/index","title":"Java","description":"To integrate your Java test framework with ReportPortal, you need to create a file named reportportal.properties in your in your Java project in a source folder src/main/resources or src/test/resources (depending on where your tests are located):","source":"@site/docs/log-data-in-reportportal/test-framework-integration/Java/index.md","sourceDirName":"log-data-in-reportportal/test-framework-integration/Java","slug":"/log-data-in-reportportal/test-framework-integration/Java/","permalink":"/docs/log-data-in-reportportal/test-framework-integration/Java/","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/log-data-in-reportportal/test-framework-integration/Java/index.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Test Framework Integration","permalink":"/docs/log-data-in-reportportal/test-framework-integration/"},"next":{"title":"JUnit5","permalink":"/docs/log-data-in-reportportal/test-framework-integration/Java/JUnit5"}}');var n=t(74848),a=t(28453);const i={sidebar_position:1},s="Java",c={},d=[];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"java",children:"Java"})}),"\n",(0,n.jsxs)(r.p,{children:["To integrate your Java test framework with ReportPortal, you need to create a file named ",(0,n.jsx)(r.code,{children:"reportportal.properties"})," in your in your Java project in a source folder ",(0,n.jsx)(r.code,{children:"src/main/resources"})," or ",(0,n.jsx)(r.code,{children:"src/test/resources"})," (depending on where your tests are located):"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"reportportal.properties"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"rp.endpoint={RP_SERVER_URL}\n\nrp.api.key={YOUR_TOKEN}\n\nrp.project={YOUR_PROJECT}\n\nrp.launch={NAME_OF_YOUR_LAUNCH}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Property description"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rp.endpoint"})," - the URL for the report portal server (actual link)."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rp.api.key"})," - an access token for Report Portal which is used for user identification. It can be found on your report portal user profile page."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rp.project"})," - a project code on which the agent will report test launches. Must be set to one of your assigned projects."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"rp.launch"})," - a user-selected identifier of test launches."]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["Starting from the Service Release 23.1++, ",(0,n.jsx)(r.code,{children:"rp.uuid"})," was renamed to ",(0,n.jsx)(r.code,{children:"rp.api.key"}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["This set of properties will allow you to report your tests. And there are more ",(0,n.jsx)(r.a,{href:"https://github.com/reportportal/client-java#property-file",children:"properties"})," available for fine grain tuning of integration."]}),"\n",(0,n.jsx)(r.p,{children:"If you need a sophisticated and full-featured integration with a test framework, you can configure it by your self."}),"\n",(0,n.jsxs)(r.p,{children:["All agents use ",(0,n.jsx)(r.a,{href:"https://github.com/reportportal/client-java",children:"client-java"})," to communicate with ReportPortal API and as common code library. Also you can use any combination of agent and logger."]})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}}}]);