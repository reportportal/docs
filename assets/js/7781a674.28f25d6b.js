"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84348],{13626:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"api/service-api/test-item-async-controller","title":"test-item-async-controller","description":"test-item-async-controller","source":"@site/docs/api/service-api/test-item-async-controller.tag.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/test-item-async-controller","permalink":"/docs/api/service-api/test-item-async-controller","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"test-item-async-controller","title":"test-item-async-controller","description":"test-item-async-controller","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get server settings","permalink":"/docs/api/service-api/get-server-settings"},"next":{"title":"Finish Test Item","permalink":"/docs/api/service-api/finish-test-item"}}');var s=i(74848),n=i(28453),c=i(3514),a=i(20239);const o={id:"test-item-async-controller",title:"test-item-async-controller",description:"test-item-async-controller",custom_edit_url:null},l=void 0,d={},m=[];function u(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Test Item Async Controller"}),"\n","\n",(0,s.jsx)(c.A,{items:(0,a.useCurrentSidebarCategory)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>g});i(96540);var r=i(34164),s=i(26972),n=i(28774),c=i(53465),a=i(16654),o=i(21312),l=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=i(74848);function u(e){let{href:t,children:i}=e;return(0,m.jsx)(n.default,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:s,description:n}=e;return(0,m.jsxs)(u,{href:t,children:[(0,m.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[i," ",s]}),n&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e;const i=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,m.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(h,{item:t});case"category":return(0,m.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,s.$S)();return(0,m.jsx)(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return(0,m.jsx)(y,{...e});const n=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",i),children:n.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(x,{item:e})},t)))})}}}]);