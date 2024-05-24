"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35692],{68420:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var i=n(85893),r=n(11151),s=n(52991),o=n(53438);const a={id:"auth-configuration-endpoint",title:"auth-configuration-endpoint",description:"auth-configuration-endpoint",custom_edit_url:null},c=void 0,u={id:"api/service-uat/versions/5.10/auth-configuration-endpoint",title:"auth-configuration-endpoint",description:"auth-configuration-endpoint",source:"@site/docs/api/service-uat/versions/5.10/auth-configuration-endpoint.tag.mdx",sourceDirName:"api/service-uat/versions/5.10",slug:"/api/service-uat/versions/5.10/auth-configuration-endpoint",permalink:"/docs/api/service-uat/versions/5.10/auth-configuration-endpoint",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"auth-configuration-endpoint",title:"auth-configuration-endpoint",description:"auth-configuration-endpoint",custom_edit_url:null},sidebar:"service-uat-5.10",previous:{title:"Introduction",permalink:"/docs/api/service-uat/versions/5.10/reportportal"},next:{title:"Retrieves auth settings",permalink:"/docs/api/service-uat/versions/5.10/get-settings"}},d={},l=[];function p(t){const e={p:"p",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Auth Configuration Endpoint"}),"\n","\n",(0,i.jsx)(s.Z,{items:(0,o.jA)().items})]})}function f(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},52991:(t,e,n)=>{n.d(e,{Z:()=>v});n(67294);var i=n(90512),r=n(53438),s=n(33692),o=n(88824),a=n(13919),c=n(95999),u=n(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(85893);function p(t){let{href:e,children:n}=t;return(0,l.jsx)(s.default,{href:e,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function f(t){let{href:e,icon:n,title:r,description:s}=t;return(0,l.jsxs)(p,{href:e,children:[(0,l.jsxs)(u.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),s&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(t){let{item:e}=t;const n=(0,r.LM)(e),i=function(){const{selectMessage:t}=(0,o.c)();return e=>t(e,(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?(0,l.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??i(e.items.length)}):null}function m(t){let{item:e}=t;const n=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(e.docId??void 0);return(0,l.jsx)(f,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function g(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(m,{item:e});case"category":return(0,l.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,r.jA)();return(0,l.jsx)(v,{items:n.items,className:e})}function v(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(x,{...t});const s=(0,r.MN)(e);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:s.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:t})},e)))})}}}]);