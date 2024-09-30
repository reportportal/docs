"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71292],{85175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),c=n(11151),o=n(52991);const i={title:"User account",description:"Manage your ReportPortal user account for an efficient real time dashboard open source."},s="User account",a={id:"user-account/index",title:"User account",description:"Manage your ReportPortal user account for an efficient real time dashboard open source.",source:"@site/docs/user-account/index.md",sourceDirName:"user-account",slug:"/user-account/",permalink:"/docs/user-account/",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/user-account/index.md",tags:[],version:"current",frontMatter:{title:"User account",description:"Manage your ReportPortal user account for an efficient real time dashboard open source."},sidebar:"docs",previous:{title:"Launches retention policy",permalink:"/docs/configuration/LaunchesRetentionPolicy"},next:{title:"Edit personal information",permalink:"/docs/user-account/EditPersonalInformation"}},u={},l=[];function d(e){const t={h1:"h1",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"user-account",children:"User account"}),"\n","\n",(0,r.jsx)(o.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(90512),c=n(53438),o=n(33692),i=n(88824),s=n(13919),a=n(95999),u=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.default,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:c,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(u.default,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:c,children:[n," ",c]}),o&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(e){let{item:t}=e;const n=(0,c.LM)(t),r=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,a.translate)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,c.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,c.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}}}]);