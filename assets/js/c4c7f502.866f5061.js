"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90761],{8198:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"api/service-uat/versions/5.10/github-endpoint","title":"github-endpoint","description":"github-endpoint","source":"@site/docs/api/service-uat/versions/5.10/github-endpoint.tag.mdx","sourceDirName":"api/service-uat/versions/5.10","slug":"/api/service-uat/versions/5.10/github-endpoint","permalink":"/docs/api/service-uat/versions/5.10/github-endpoint","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"github-endpoint","title":"github-endpoint","description":"github-endpoint","custom_edit_url":null},"sidebar":"service-uat-5.10","previous":{"title":"Retrieves auth settings","permalink":"/docs/api/service-uat/versions/5.10/delete-settings"},"next":{"title":"Synchronizes logged-in GitHub user","permalink":"/docs/api/service-uat/versions/5.10/synchronize"}}');var s=i(74848),r=i(28453),c=i(3514),o=i(20239);const a={id:"github-endpoint",title:"github-endpoint",description:"github-endpoint",custom_edit_url:null},d=void 0,l={},u=[];function p(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Github Endpoint"}),"\n","\n",(0,s.jsx)(c.A,{items:(0,o.useCurrentSidebarCategory)().items})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(34164),s=i(26972),r=i(28774),c=i(53465),o=i(16654),a=i(21312),d=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(74848);function p(e){let{href:t,children:i}=e;return(0,u.jsx)(r.default,{href:t,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function h(e){let{href:t,icon:i,title:s,description:r}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(d.default,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:s,children:[i," ",s]}),r&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const i=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,u.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const i=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const i=(0,s.$S)();return(0,u.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,u.jsx)(v,{...e});const r=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",i),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}}}]);