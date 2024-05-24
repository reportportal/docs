"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95730],{40925:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=s(85893),i=s(11151),r=s(52991);const a={title:"Analysis",description:"Deep into ReportPortal's advanced analysis methods for robust test automation metrics & efficient defect triaging."},c="Analysis",o={id:"analysis/index",title:"Analysis",description:"Deep into ReportPortal's advanced analysis methods for robust test automation metrics & efficient defect triaging.",source:"@site/docs/analysis/index.md",sourceDirName:"analysis",slug:"/analysis/",permalink:"/docs/analysis/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/analysis/index.md",tags:[],version:"current",frontMatter:{title:"Analysis",description:"Deep into ReportPortal's advanced analysis methods for robust test automation metrics & efficient defect triaging."},sidebar:"docs",previous:{title:"Unique ID",permalink:"/docs/work-with-reports/UniqueId"},next:{title:"Auto-Analysis of launches",permalink:"/docs/analysis/AutoAnalysisOfLaunches"}},l={},d=[];function u(t){const e={h1:"h1",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"analysis",children:"Analysis"}),"\n","\n",(0,n.jsx)(r.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u(t)}},52991:(t,e,s)=>{s.d(e,{Z:()=>g});s(67294);var n=s(90512),i=s(53438),r=s(33692),a=s(88824),c=s(13919),o=s(95999),l=s(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(85893);function m(t){let{href:e,children:s}=t;return(0,u.jsx)(r.default,{href:e,className:(0,n.Z)("card padding--lg",d.cardContainer),children:s})}function f(t){let{href:e,icon:s,title:i,description:r}=t;return(0,u.jsxs)(m,{href:e,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:i,children:[s," ",i]}),r&&(0,u.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:r,children:r})]})}function p(t){let{item:e}=t;const s=(0,i.LM)(e),n=function(){const{selectMessage:t}=(0,a.c)();return e=>t(e,(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return s?(0,u.jsx)(f,{href:s,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function h(t){let{item:e}=t;const s=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(e.docId??void 0);return(0,u.jsx)(f,{href:e.href,icon:s,title:e.label,description:e.description??n?.description})}function x(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y(t){let{className:e}=t;const s=(0,i.jA)();return(0,u.jsx)(g,{items:s.items,className:e})}function g(t){const{items:e,className:s}=t;if(!e)return(0,u.jsx)(y,{...t});const r=(0,i.MN)(e);return(0,u.jsx)("section",{className:(0,n.Z)("row",s),children:r.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:t})},e)))})}}}]);