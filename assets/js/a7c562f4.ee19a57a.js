"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79645],{58267:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"api/api-design/activities","title":"Activities","description":"Activities","source":"@site/docs/api/api-design/activities.tag.mdx","sourceDirName":"api/api-design","slug":"/api/api-design/activities","permalink":"/docs/api/api-design/activities","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"activities","title":"Activities","description":"Activities","custom_edit_url":null},"sidebar":"apiDesign","previous":{"title":"Introduction","permalink":"/docs/api/api-design/reportportal-api"},"next":{"title":"Search activities by complex criteria","permalink":"/docs/api/api-design/activities-search"}}');var n=i(74848),r=i(28453),c=i(3514),a=i(20239);const o={id:"activities",title:"Activities",description:"Activities",custom_edit_url:null},l=void 0,d={},u=[];function p(t){return(0,n.jsx)(c.A,{items:(0,a.useCurrentSidebarCategory)().items})}function m(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p()}},3514:(t,e,i)=>{i.d(e,{A:()=>v});i(96540);var s=i(34164),n=i(26972),r=i(28774),c=i(53465),a=i(16654),o=i(21312),l=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(74848);function p(t){let{href:e,children:i}=t;return(0,u.jsx)(r.default,{href:e,className:(0,s.A)("card padding--lg",d.cardContainer),children:i})}function m(t){let{href:e,icon:i,title:n,description:r}=t;return(0,u.jsxs)(p,{href:e,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),r&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function f(t){let{item:e}=t;const i=(0,n.Nr)(e),s=function(){const{selectMessage:t}=(0,c.W)();return e=>t(e,(0,o.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return i?(0,u.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??s(e.items.length)}):null}function h(t){let{item:e}=t;const i=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.cC)(e.docId??void 0);return(0,u.jsx)(m,{href:e.href,icon:i,title:e.label,description:e.description??s?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const i=(0,n.$S)();return(0,u.jsx)(v,{items:i.items,className:e})}function v(t){const{items:e,className:i}=t;if(!e)return(0,u.jsx)(x,{...t});const r=(0,n.d1)(e);return(0,u.jsx)("section",{className:(0,s.A)("row",i),children:r.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:t})},e)))})}}}]);