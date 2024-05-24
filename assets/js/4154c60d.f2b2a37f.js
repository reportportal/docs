"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21857],{94382:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=s(85893),o=s(11151),r=s(52991);const n={title:"Issues Troubleshooting",description:"Utilize ReportPortal's Issues Troubleshooting guide for improved test report generation and effective bug triage."},c="Issues Troubleshooting",l={id:"issues-troubleshooting/index",title:"Issues Troubleshooting",description:"Utilize ReportPortal's Issues Troubleshooting guide for improved test report generation and effective bug triage.",source:"@site/docs/issues-troubleshooting/index.md",sourceDirName:"issues-troubleshooting",slug:"/issues-troubleshooting/",permalink:"/docs/issues-troubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/issues-troubleshooting/index.md",tags:[],version:"current",frontMatter:{title:"Issues Troubleshooting",description:"Utilize ReportPortal's Issues Troubleshooting guide for improved test report generation and effective bug triage."},sidebar:"docs",previous:{title:"User role guides",permalink:"/docs/user-role-guides/"},next:{title:"Tuning CI tool",permalink:"/docs/issues-troubleshooting/TuningCITool"}},a={},u=[];function d(e){const t={h1:"h1",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"issues-troubleshooting",children:"Issues Troubleshooting"}),"\n","\n",(0,i.jsx)(r.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},52991:(e,t,s)=>{s.d(t,{Z:()=>x});s(67294);var i=s(90512),o=s(53438),r=s(33692),n=s(88824),c=s(13919),l=s(95999),a=s(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(85893);function h(e){let{href:t,children:s}=e;return(0,d.jsx)(r.default,{href:t,className:(0,i.Z)("card padding--lg",u.cardContainer),children:s})}function g(e){let{href:t,icon:s,title:o,description:r}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:o,children:[s," ",o]}),r&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const s=(0,o.LM)(t),i=function(){const{selectMessage:e}=(0,n.c)();return t=>e(t,(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,d.jsx)(g,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function m(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return(0,d.jsx)(g,{href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(m,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const s=(0,o.jA)();return(0,d.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(b,{...e});const r=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",s),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);