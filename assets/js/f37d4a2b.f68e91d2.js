"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61385],{22923:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=i(85893),n=i(11151),r=i(52991),c=i(53438);const o={id:"suggestions",title:"Suggestions",description:"Suggestions",custom_edit_url:null},a=void 0,l={id:"api/api-design/suggestions",title:"Suggestions",description:"Suggestions",source:"@site/docs/api/api-design/suggestions.tag.mdx",sourceDirName:"api/api-design",slug:"/api/api-design/suggestions",permalink:"/docs/api/api-design/suggestions",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"suggestions",title:"Suggestions",description:"Suggestions",custom_edit_url:null},sidebar:"apiDesign",previous:{title:"Get project suggestions",permalink:"/docs/api/api-design/get-project-suggestions"},next:{title:"Get project suggestions",permalink:"/docs/api/api-design/get-project-suggestions"}},d={},u=[];function g(e){return(0,s.jsx)(r.Z,{items:(0,c.jA)().items})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g()}},52991:(e,t,i)=>{i.d(t,{Z:()=>x});i(67294);var s=i(90512),n=i(53438),r=i(33692),c=i(88824),o=i(13919),a=i(95999),l=i(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=i(85893);function g(e){let{href:t,children:i}=e;return(0,u.jsx)(r.default,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:n,description:r}=e;return(0,u.jsxs)(g,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:n,children:[i," ",n]}),r&&(0,u.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function m(e){let{item:t}=e;const i=(0,n.LM)(t),s=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,u.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const i=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.xz)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const i=(0,n.jA)();return(0,u.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,u.jsx)(j,{...e});const r=(0,n.MN)(t);return(0,u.jsx)("section",{className:(0,s.Z)("row",i),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}}}]);