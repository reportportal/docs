"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71660],{74147:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=s(85893),i=s(11151),n=s(52991);const o={title:"Developers guides",description:"Enhance your test results dashboard with ReportPortal's comprehensive Developers' guides."},c="Developers guides",d={id:"developers-guides/index",title:"Developers guides",description:"Enhance your test results dashboard with ReportPortal's comprehensive Developers' guides.",source:"@site/docs/developers-guides/index.md",sourceDirName:"developers-guides",slug:"/developers-guides/",permalink:"/docs/developers-guides/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/developers-guides/index.md",tags:[],version:"current",frontMatter:{title:"Developers guides",description:"Enhance your test results dashboard with ReportPortal's comprehensive Developers' guides."},sidebar:"docs",previous:{title:"Other",permalink:"/docs/log-data-in-reportportal/test-framework-integration/Other/"},next:{title:"API differences between v4 and v5",permalink:"/docs/developers-guides/APIDifferencesBetweenV4AndV5"}},a={},l=[];function u(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"developers-guides",children:"Developers guides"}),"\n","\n",(0,r.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},52991:(e,t,s)=>{s.d(t,{Z:()=>x});s(67294);var r=s(90512),i=s(53438),n=s(33692),o=s(88824),c=s(13919),d=s(95999),a=s(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(85893);function p(e){let{href:t,children:s}=e;return(0,u.jsx)(n.default,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:s})}function h(e){let{href:t,icon:s,title:i,description:n}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(a.default,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[s," ",i]}),n&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const s=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,d.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const s=(0,i.jA)();return(0,u.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(v,{...e});const n=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",s),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}}}]);