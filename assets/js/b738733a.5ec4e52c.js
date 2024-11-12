"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28445],{90026:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"log-data-in-reportportal/index","title":"Log data in ReportPortal","description":"Discover how to efficiently import data, integrate test frameworks, and run your tests with our test reporting tool.","source":"@site/docs/log-data-in-reportportal/index.md","sourceDirName":"log-data-in-reportportal","slug":"/log-data-in-reportportal/","permalink":"/docs/log-data-in-reportportal/","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/log-data-in-reportportal/index.md","tags":[],"version":"current","frontMatter":{"title":"Log data in ReportPortal","description":"Discover how to efficiently import data, integrate test frameworks, and run your tests with our test reporting tool."},"sidebar":"docs","previous":{"title":"Data retention procedure","permalink":"/docs/user-account/DataRetentionProcedure"},"next":{"title":"Implement own integration","permalink":"/docs/log-data-in-reportportal/ImplementOwnIntegration"}}');var o=r(74848),n=r(28453),i=r(3514);const s={title:"Log data in ReportPortal",description:"Discover how to efficiently import data, integrate test frameworks, and run your tests with our test reporting tool."},l="Log data in ReportPortal",c={},d=[];function p(t){const e={a:"a",h1:"h1",header:"header",p:"p",...(0,n.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"log-data-in-reportportal",children:"Log data in ReportPortal"})}),"\n",(0,o.jsx)(e.p,{children:"ReportPortal is a CI/CD agnostic tool. Therefore, you can continue using your favorite CI/CD tool (GitLab, Jenkins, GitHub, Azure DevOps, Bamboo) to send data to ReportPortal and get test results of execution."}),"\n",(0,o.jsx)(e.p,{children:"The data transmission is regulated not by the CI/CD process, but by the test framework. The only requirement is to ensure that the machine where your CI/CD is located has access to the ReportPortal instance to which you are trying to send the data."}),"\n",(0,o.jsx)(e.p,{children:"As for test frameworks, a generic approach is to set the address of ReportPortal and other data in your test framework via properties or a configuration file, and your test framework will start reporting data to ReportPortal."}),"\n",(0,o.jsxs)(e.p,{children:["ReportPortal supports various frameworks. For example, we have integration with ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Java/",children:"Java frameworks"})," (",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Java/TestNG",children:"TestNG"}),", ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Java/JBehave",children:"Jbehave"}),", etc.), ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Python/",children:"Python frameworks"})," (",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Python/pytest",children:"Pytest"}),", ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Python/RobotFramework",children:"Robot Framework"}),", etc.), ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/JavaScript/",children:"JavaScript frameworks"})," (",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/JavaScript/Playwright",children:"Playwright"}),", ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/JavaScript/Postman",children:"Postman"}),", etc.), ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Net/",children:".NET frameworks"})," (",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Net/NUnit",children:"NUnit"}),", ",(0,o.jsx)(e.a,{href:"/log-data-in-reportportal/test-framework-integration/Net/VSTest",children:"VSTest"}),", etc.)."]}),"\n",(0,o.jsx)(e.p,{children:"Integration with ReportPortal is not dependent on the type of tests you run. It can be API tests, integration tests, or UI tests such as Selenium, Cypress, so, you can run different types of tests and get test results."}),"\n",(0,o.jsxs)(e.p,{children:["ReportPortal can be integrated with external services, enabling you to report test results from platforms like Browserstack, Sauce Labs, and other third-party services. For Sauce Labs integration, we have a ",(0,o.jsx)(e.a,{href:"/plugins/SauceLabs",children:"plugin"}),"."]}),"\n","\n",(0,o.jsx)(i.A,{})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},3514:(t,e,r)=>{r.d(e,{A:()=>x});r(96540);var a=r(34164),o=r(26972),n=r(28774),i=r(53465),s=r(16654),l=r(21312),c=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=r(74848);function h(t){let{href:e,children:r}=t;return(0,p.jsx)(n.default,{href:e,className:(0,a.A)("card padding--lg",d.cardContainer),children:r})}function u(t){let{href:e,icon:r,title:o,description:n}=t;return(0,p.jsxs)(h,{href:e,children:[(0,p.jsxs)(c.default,{as:"h2",className:(0,a.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),n&&(0,p.jsx)("p",{className:(0,a.A)("text--truncate",d.cardDescription),title:n,children:n})]})}function f(t){let{item:e}=t;const r=(0,o.Nr)(e),a=function(){const{selectMessage:t}=(0,i.W)();return e=>t(e,(0,l.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,p.jsx)(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??a(e.items.length)}):null}function m(t){let{item:e}=t;const r=(0,s.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.cC)(e.docId??void 0);return(0,p.jsx)(u,{href:e.href,icon:r,title:e.label,description:e.description??a?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,p.jsx)(m,{item:e});case"category":return(0,p.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function w(t){let{className:e}=t;const r=(0,o.$S)();return(0,p.jsx)(x,{items:r.items,className:e})}function x(t){const{items:e,className:r}=t;if(!e)return(0,p.jsx)(w,{...t});const n=(0,o.d1)(e);return(0,p.jsx)("section",{className:(0,a.A)("row",r),children:n.map(((t,e)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(g,{item:t})},e)))})}}}]);