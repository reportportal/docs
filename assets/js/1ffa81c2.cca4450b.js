"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36020],{75311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=r(85893),n=r(11151),c=r(52991),s=r(53438);const o={id:"deprecated-user-controller",title:"deprecated-user-controller",description:"deprecated-user-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/deprecated-user-controller",title:"deprecated-user-controller",description:"deprecated-user-controller",source:"@site/docs/api/service-api/deprecated-user-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/deprecated-user-controller",permalink:"/docs/api/service-api/deprecated-user-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"deprecated-user-controller",title:"deprecated-user-controller",description:"deprecated-user-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"generate",permalink:"/docs/api/service-api/generate-using-post"},next:{title:"Return information about current logged-in user (DEPRECATED)",permalink:"/docs/api/service-api/get-myself-using-get"}},d={},u=[];function p(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Deprecated UserController"}),"\n","\n",(0,i.jsx)(c.Z,{items:(0,s.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>j});r(67294);var i=r(90512),n=r(53438),c=r(33692),s=r(88824),o=r(13919),a=r(95999),l=r(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(85893);function p(e){let{href:t,children:r}=e;return(0,u.jsx)(c.default,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:c}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n,children:[r," ",n]}),c&&(0,u.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function f(e){let{item:t}=e;const r=(0,n.LM)(t),i=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,u.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,n.jA)();return(0,u.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,u.jsx)(x,{...e});const c=(0,n.MN)(t);return(0,u.jsx)("section",{className:(0,i.Z)("row",r),children:c.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}}}]);