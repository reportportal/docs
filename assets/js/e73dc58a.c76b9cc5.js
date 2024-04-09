"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18494],{48946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(85893),i=n(11151),c=n(52991),s=n(53438);const o={id:"launch-controller",title:"launch-controller",description:"launch-controller",custom_edit_url:null},l=void 0,a={id:"api/service-api/versions/5.10/launch-controller",title:"launch-controller",description:"launch-controller",source:"@site/docs/api/service-api/versions/5.10/launch-controller.tag.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/launch-controller",permalink:"/docs/api/service-api/versions/5.10/launch-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"launch-controller",title:"launch-controller",description:"launch-controller",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Finish launch for specified project",permalink:"/docs/api/service-api/versions/5.10/finish-launch-using-put"},next:{title:"Get list of project launches by filter",permalink:"/docs/api/service-api/versions/5.10/get-project-launches-using-get"}},u={},d=[];function p(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Launch Controller"}),"\n","\n","\n",(0,r.jsx)(c.Z,{items:(0,s.jA)().items})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>j});n(67294);var r=n(90512),i=n(53438),c=n(33692),s=n(13919),o=n(95999),l=n(92503);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(85893);function d(e){let{href:t,children:n}=e;return(0,u.jsx)(c.default,{href:t,className:(0,r.Z)("card padding--lg",a.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:c}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(l.default,{as:"h2",className:(0,r.Z)("text--truncate",a.cardTitle),title:i,children:[n," ",i]}),c&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",a.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(m,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const c=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}}}]);