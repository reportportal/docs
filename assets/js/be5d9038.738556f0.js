"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96736],{20298:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=s(85893),r=s(11151),n=s(52991),c=s(53438);const o={id:"settings-controller",title:"settings-controller",description:"settings-controller",custom_edit_url:null},l=void 0,a={id:"api/service-api/versions/5.10/settings-controller",title:"settings-controller",description:"settings-controller",source:"@site/docs/api/service-api/versions/5.10/settings-controller.tag.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/settings-controller",permalink:"/docs/api/service-api/versions/5.10/settings-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"settings-controller",title:"settings-controller",description:"settings-controller",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Delete custom project specific issue sub-type",permalink:"/docs/api/service-api/versions/5.10/delete-project-issue-sub-type-using-delete"},next:{title:"Get server settings",permalink:"/docs/api/service-api/versions/5.10/get-server-settings-using-get"}},d={},u=[];function p(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Settings Controller"}),"\n","\n",(0,i.jsx)(n.Z,{items:(0,c.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},52991:(e,t,s)=>{s.d(t,{Z:()=>x});s(67294);var i=s(90512),r=s(53438),n=s(33692),c=s(88824),o=s(13919),l=s(95999),a=s(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(85893);function p(e){let{href:t,children:s}=e;return(0,u.jsx)(n.default,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:r,description:n}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(a.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),n&&(0,u.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:n,children:n})]})}function g(e){let{item:t}=e;const s=(0,r.LM)(t),i=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const s=(0,r.jA)();return(0,u.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(v,{...e});const n=(0,r.MN)(t);return(0,u.jsx)("section",{className:(0,i.Z)("row",s),children:n.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(h,{item:e})},t)))})}}}]);