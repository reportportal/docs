"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7455],{9874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/service-api/launch-async-controller","title":"launch-async-controller","description":"launch-async-controller","source":"@site/docs/api/service-api/launch-async-controller.tag.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/launch-async-controller","permalink":"/docs/api/service-api/launch-async-controller","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"launch-async-controller","title":"launch-async-controller","description":"launch-async-controller","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Delete all global integrations by type","permalink":"/docs/api/service-api/delete-all-integrations"},"next":{"title":"Finish Launch","permalink":"/docs/api/service-api/finish-launch"}}');var c=n(74848),i=n(28453),s=n(3514),a=n(20239);const l={id:"launch-async-controller",title:"launch-async-controller",description:"launch-async-controller",custom_edit_url:null},o=void 0,u={},d=[];function p(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"Launch Async Controller. Puts events to the queues"}),"\n","\n",(0,c.jsx)(s.A,{items:(0,a.useCurrentSidebarCategory)().items})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var r=n(34164),c=n(26972),i=n(28774),s=n(53465),a=n(16654),l=n(21312),o=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(i.default,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:c,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const n=(0,c.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,c.$S)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,c.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(y,{item:e})},t)))})}}}]);