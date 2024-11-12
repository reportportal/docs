"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57214],{20543:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/service-api/versions/5.11/plugin-public-controller","title":"plugin-public-controller","description":"plugin-public-controller","source":"@site/docs/api/service-api/versions/5.11/plugin-public-controller.tag.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/plugin-public-controller","permalink":"/docs/api/service-api/versions/5.11/plugin-public-controller","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"plugin-public-controller","title":"plugin-public-controller","description":"plugin-public-controller","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Execute command to the plugin instance","permalink":"/docs/api/service-api/versions/5.11/execute-plugin-command-using-put"},"next":{"title":"Get all available public plugins","permalink":"/docs/api/service-api/versions/5.11/get-plugins-using-get-1"}}');var r=i(74848),c=i(28453),s=i(3514),l=i(20239);const o={id:"plugin-public-controller",title:"plugin-public-controller",description:"plugin-public-controller",custom_edit_url:null},a=void 0,u={},p=[];function d(e){const t={p:"p",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Plugin Public Controller"}),"\n","\n",(0,r.jsx)(s.A,{items:(0,l.useCurrentSidebarCategory)().items})]})}function m(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>b});i(96540);var n=i(34164),r=i(26972),c=i(28774),s=i(53465),l=i(16654),o=i(21312),a=i(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=i(74848);function d(e){let{href:t,children:i}=e;return(0,p.jsx)(c.default,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:c}=e;return(0,p.jsxs)(d,{href:t,children:[(0,p.jsxs)(a.default,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[i," ",r]}),c&&(0,p.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:c,children:c})]})}function g(e){let{item:t}=e;const i=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,p.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const i=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(f,{item:t});case"category":return(0,p.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,p.jsx)(b,{items:i.items,className:t})}function b(e){const{items:t,className:i}=e;if(!t)return(0,p.jsx)(x,{...e});const c=(0,r.d1)(t);return(0,p.jsx)("section",{className:(0,n.A)("row",i),children:c.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(h,{item:e})},t)))})}}}]);