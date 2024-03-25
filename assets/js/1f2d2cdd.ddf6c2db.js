"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57434],{1266:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=i(85893),c=i(11151),n=i(52991),s=i(53438);const o={id:"activity-controller",title:"activity-controller",description:"activity-controller",custom_edit_url:null},a=void 0,l={id:"api/service-api/activity-controller",title:"activity-controller",description:"activity-controller",source:"@site/docs/api/service-api/activity-controller.tag.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/activity-controller",permalink:"/docs/api/service-api/activity-controller",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"activity-controller",title:"activity-controller",description:"activity-controller",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Introduction",permalink:"/docs/api/service-api/reportportal"},next:{title:"Get activities for test item",permalink:"/docs/api/service-api/get-test-item-activities-using-get"}},d={},u=[];function p(t){const e={p:"p",...(0,c.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Activity Controller"}),"\n","\n","\n",(0,r.jsx)(n.Z,{items:(0,s.jA)().items})]})}function m(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},52991:(t,e,i)=>{i.d(e,{Z:()=>x});i(67294);var r=i(90512),c=i(53438),n=i(33692),s=i(13919),o=i(95999),a=i(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(85893);function u(t){let{href:e,children:i}=t;return(0,d.jsx)(n.default,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:i})}function p(t){let{href:e,icon:i,title:c,description:n}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:c,children:[i," ",c]}),n&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:n,children:n})]})}function m(t){let{item:e}=t;const i=(0,c.LM)(e);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const i=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(e.docId??void 0);return(0,d.jsx)(p,{href:e.href,icon:i,title:e.label,description:e.description??r?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(t){let{className:e}=t;const i=(0,c.jA)();return(0,d.jsx)(x,{items:i.items,className:e})}function x(t){const{items:e,className:i}=t;if(!e)return(0,d.jsx)(v,{...t});const n=(0,c.MN)(e);return(0,d.jsx)("section",{className:(0,r.Z)("row",i),children:n.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}}}]);