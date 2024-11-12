"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24350],{26403:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/service-api/versions/5.11/plugin-controller","title":"plugin-controller","description":"plugin-controller","source":"@site/docs/api/service-api/versions/5.11/plugin-controller.tag.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/plugin-controller","permalink":"/docs/api/service-api/versions/5.11/plugin-controller","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"plugin-controller","title":"plugin-controller","description":"plugin-controller","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Return onboarding information for page if available, -1 otherwise","permalink":"/docs/api/service-api/versions/5.11/on-boarding-using-get"},"next":{"title":"Get all available plugins","permalink":"/docs/api/service-api/versions/5.11/get-plugins-using-get"}}');var r=i(74848),s=i(28453),o=i(3514),c=i(20239);const l={id:"plugin-controller",title:"plugin-controller",description:"plugin-controller",custom_edit_url:null},a=void 0,u={},d=[];function p(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Plugin Controller"}),"\n","\n",(0,r.jsx)(o.A,{items:(0,c.useCurrentSidebarCategory)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(34164),r=i(26972),s=i(28774),o=i(53465),c=i(16654),l=i(21312),a=i(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function p(e){let{href:t,children:i}=e;return(0,d.jsx)(s.default,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const i=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(v,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);