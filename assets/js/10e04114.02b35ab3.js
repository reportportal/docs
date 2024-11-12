"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53157],{38567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"api/service-api/dashboard-controller","title":"dashboard-controller","description":"dashboard-controller","source":"@site/docs/api/service-api/dashboard-controller.tag.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/dashboard-controller","permalink":"/docs/api/service-api/dashboard-controller","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"dashboard-controller","title":"dashboard-controller","description":"dashboard-controller","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get list of fields required for posting ticket","permalink":"/docs/api/service-api/get-set-of-integration-system-fields-1"},"next":{"title":"Get specified dashboard by ID for specified project","permalink":"/docs/api/service-api/get-dashboard"}}');var s=r(74848),n=r(28453),o=r(3514),a=r(20239);const c={id:"dashboard-controller",title:"dashboard-controller",description:"dashboard-controller",custom_edit_url:null},l=void 0,d={},u=[];function p(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Dashboard Controller"}),"\n","\n",(0,s.jsx)(o.A,{items:(0,a.useCurrentSidebarCategory)().items})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>g});r(96540);var i=r(34164),s=r(26972),n=r(28774),o=r(53465),a=r(16654),c=r(21312),l=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(74848);function p(e){let{href:t,children:r}=e;return(0,u.jsx)(n.default,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:s,description:n}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),n&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const r=(0,s.Nr)(t),i=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,s.$S)();return(0,u.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const n=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",r),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},t)))})}}}]);