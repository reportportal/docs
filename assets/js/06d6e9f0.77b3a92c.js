"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29219],{61261:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"plugins/authorization/SamlProviders/index","title":"SAML Providers","description":"The SAML Providers category in ReportPortal enables efficient and secure user authentication using popular SAML providers like Azure SAML and Okta SAML. These services allow ReportPortal to connect seamlessly with existing identity management frameworks, making login processes faster and more reliable while meeting enterprise-grade security standards.","source":"@site/docs/plugins/authorization/SamlProviders/index.md","sourceDirName":"plugins/authorization/SamlProviders","slug":"/plugins/authorization/SamlProviders/","permalink":"/docs/plugins/authorization/SamlProviders/","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/plugins/authorization/SamlProviders/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/docs/plugins/authorization/LDAP"},"next":{"title":"Overview","permalink":"/docs/plugins/authorization/SamlProviders/Overview"}}');var n=i(74848),s=i(28453),a=i(3514);const o={},c="SAML Providers",l={},d=[];function u(e){const t={h1:"h1",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"saml-providers",children:"SAML Providers"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"SAML Providers"})," category in ReportPortal enables efficient and secure user authentication using popular SAML providers like Azure SAML and Okta SAML. These services allow ReportPortal to connect seamlessly with existing identity management frameworks, making login processes faster and more reliable while meeting enterprise-grade security standards."]}),"\n",(0,n.jsx)(t.p,{children:"When using Azure SAML as an authentication provider, users can log in with the credentials they already use within their organization. This setup offers a single sign-on (SSO) experience, making access management more efficient and reducing the need for password resets. Similarly, Okta SAML leverages Okta\u2019s identity management platform to facilitate secure and simple login. With Okta SAML, ReportPortal users can also enjoy SSO functionality, boosting productivity and providing robust identity verification for consistent security."}),"\n",(0,n.jsx)(t.p,{children:"Setting up SAML-based authentication in ReportPortal is simple, with dedicated configuration options for Azure and Okta in the settings menu. Each guide offers step-by-step instructions to ensure a quick and accurate setup, allowing teams to link their ReportPortal accounts with their chosen provider easily. This flexibility in choosing an SSO provider simplifies access to the platform and reduces administrative overhead."}),"\n",(0,n.jsx)(t.p,{children:"By using SAML Providers like Azure SAML and Okta SAML, organizations can ensure that access to their test reporting and analytics remains secure, streamlined, and aligned with existing identity management policies, ultimately providing a more cohesive and productive user experience."}),"\n","\n",(0,n.jsx)(a.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var r=i(34164),n=i(26972),s=i(28774),a=i(53465),o=i(16654),c=i(21312),l=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(74848);function p(e){let{href:t,children:i}=e;return(0,u.jsx)(s.default,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:i})}function h(e){let{href:t,icon:i,title:n,description:s}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const i=(0,n.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,u.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const i=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const i=(0,n.$S)();return(0,u.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,u.jsx)(v,{...e});const s=(0,n.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",i),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}}}]);