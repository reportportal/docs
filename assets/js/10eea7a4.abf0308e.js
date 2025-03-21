"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[589],{10735:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"external-integrations/UserProvisioning/index","title":"User Provisioning","description":"The User Provisioning category describes the process of creating, updating, and managing user accounts and groups in ReportPortal through external identity providers. It includes Just-in-Time (JIT) provisioning, which creates users on first login via SAML, and SCIM provisioning, which syncs users and groups from SCIM-compliant identity providers.","source":"@site/docs/external-integrations/UserProvisioning/index.md","sourceDirName":"external-integrations/UserProvisioning","slug":"/external-integrations/UserProvisioning/","permalink":"/docs/external-integrations/UserProvisioning/","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/external-integrations/UserProvisioning/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"External Integrations","permalink":"/docs/external-integrations/"},"next":{"title":"Overview","permalink":"/docs/external-integrations/UserProvisioning/overview"}}');var i=r(74848),s=r(28453),o=r(3514);const c={},a="User Provisioning",l={},d=[];function u(e){const n={h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"user-provisioning",children:"User Provisioning"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"User Provisioning"})," category describes the process of creating, updating, and managing user accounts and groups in ReportPortal through external identity providers. It includes ",(0,i.jsx)(n.strong,{children:"Just-in-Time (JIT) provisioning"}),", which creates users on first login via SAML, and ",(0,i.jsx)(n.strong,{children:"SCIM provisioning"}),", which syncs users and groups from SCIM-compliant identity providers."]}),"\n",(0,i.jsx)(n.p,{children:"Proper user provisioning ensures seamless access management, enhances security, and simplifies identity administration across multiple platforms."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configuration Overview"})}),"\n",(0,i.jsx)(n.p,{children:"To enable user provisioning, organizations need to:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"For JIT provisioning:"})," Configure SAML authentication in ReportPortal."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"For SCIM provisioning:"})," Enable SCIM in the identity provider, set up the SCIM API connection, and configure attribute mappings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Test the connection"})," to ensure proper synchronization."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Manage roles and groups"})," to streamline user access."]}),"\n"]}),"\n","\n",(0,i.jsx)(o.A,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3514:(e,n,r)=>{r.d(n,{A:()=>v});r(96540);var t=r(34164),i=r(44718),s=r(28774),o=r(53465),c=r(16654),a=r(21312),l=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function p(e){let{href:n,children:r}=e;return(0,u.jsx)(s.A,{href:n,className:(0,t.A)("card padding--lg",d.cardContainer),children:r})}function g(e){let{href:n,icon:r,title:i,description:s}=e;return(0,u.jsxs)(p,{href:n,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,t.A)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),s&&(0,u.jsx)("p",{className:(0,t.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:n}=e;const r=(0,i.Nr)(n),t=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return r?(0,u.jsx)(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??t(n.items.length)}):null}function m(e){let{item:n}=e;const r=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.cC)(n.docId??void 0);return(0,u.jsx)(g,{href:n.href,icon:r,title:n.label,description:n.description??t?.description})}function f(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(m,{item:n});case"category":return(0,u.jsx)(h,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const r=(0,i.$S)();return(0,u.jsx)(v,{items:r.items,className:n})}function v(e){const{items:n,className:r}=e;if(!n)return(0,u.jsx)(x,{...e});const s=(0,i.d1)(n);return(0,u.jsx)("section",{className:(0,t.A)("row",r),children:s.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},n)))})}},53465:(e,n,r)=>{r.d(n,{W:()=>l});var t=r(96540),i=r(44586);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const i=r.select(n),s=r.pluralForms.indexOf(i);return t[Math.min(s,t.length-1)]}(r,n,e)}}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);