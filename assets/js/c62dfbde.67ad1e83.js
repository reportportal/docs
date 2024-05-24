"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94986],{61157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=r(85893),n=r(11151),c=r(52991),o=r(53438);const s={id:"project-controller",title:"project-controller",description:"project-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/versions/5.10/project-controller",title:"project-controller",description:"project-controller",source:"@site/docs/api/service-api/versions/5.10/project-controller.tag.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/project-controller",permalink:"/docs/api/service-api/versions/5.10/project-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"project-controller",title:"project-controller",description:"project-controller",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Execute command to the plugin instance",permalink:"/docs/api/service-api/versions/5.10/execute-plugin-command-using-put"},next:{title:"Create new project",permalink:"/docs/api/service-api/versions/5.10/create-project-using-post"}},d={},p=[];function u(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Project Controller"}),"\n","\n",(0,i.jsx)(c.Z,{items:(0,o.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},52991:(e,t,r)=>{r.d(t,{Z:()=>v});r(67294);var i=r(90512),n=r(53438),c=r(33692),o=r(88824),s=r(13919),a=r(95999),l=r(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=r(85893);function u(e){let{href:t,children:r}=e;return(0,p.jsx)(c.default,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:c}=e;return(0,p.jsxs)(u,{href:t,children:[(0,p.jsxs)(l.default,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:n,children:[r," ",n]}),c&&(0,p.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function j(e){let{item:t}=e;const r=(0,n.LM)(t),i=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,p.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.xz)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(f,{item:t});case"category":return(0,p.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,n.jA)();return(0,p.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,p.jsx)(x,{...e});const c=(0,n.MN)(t);return(0,p.jsx)("section",{className:(0,i.Z)("row",r),children:c.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(h,{item:e})},t)))})}}}]);