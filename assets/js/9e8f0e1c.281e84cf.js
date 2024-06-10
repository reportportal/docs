"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60369],{30586:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>Z,contentTitle:()=>v,default:()=>q,frontMatter:()=>b,metadata:()=>N,toc:()=>w});var i=s(85893),l=s(11151),r=s(58219),t=s.n(r),n=(s(62316),s(51039)),c=s.n(n),o=(s(82723),s(9487)),d=s.n(o),m=s(41429),p=s.n(m),h=s(5397),u=s.n(h),g=s(4667),j=s.n(g),f=s(9472),x=s.n(f),y=(s(1176),s(12005),s(85162));const b={id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2jgQ/RVXn5KUjIFksymflp2drZ2qVHbCzFxCODR2Y5TIkiPJMBTlf99q2WAzkA0naLe6X7fee+YAHgsH6QKUKWJ0e53FmdHeGqXIwlKAqciil0bf5ZBCZgk9fTTFrfZ2/+SkLu7/fXgEARVaLMmT5WoH0FgSpFBZ840y/4l/CZCaQ+g3ICAnl1lZceWLPEs/amkph9TbmgS4bEMlQnoAv6+4rPNW6gKaZtkmk/N/mnzPGed1T3jnn0EAT0bacxpWlZJZGCz55jj3MGwjveI+D7g9He5BLUBhrbPNUy1zEOBlSbypDptZ8SS8Ecu785Icl1xLrtiX/pt//+pQu8XLsRsB0lMZAFw8frnbp6e7vyKzjjw5H/GxyOw05ZHfSBcpU0AjhgNdthOgaEvqWifSdckLIWuNBQE7tDpc9NoEHKuas7zFjIddo0cFAmr9XZudhmUjoCTnsLg2ZbfZK13XxpboIYUcPcUhqxFQX0ffhHWdUyoEXGW0a/c8HU8uuXMTuJOf8+ZN8uY6VYIguiMz1tH84ZfX+1O8jDinylIWEKRrVI4EPMeZyakgHXekj1cm38ed1s65fm2WcNsC6NmTdtLoVqrfaQ/p/9YWsEVVv+zB4ivJbwwbQ2VcmI/FnUKynSaHgaabRJkiIV4RCHBkt0efqK2CFDjXm8yoJk2SA9Z+Y6z0+ybBSl7MMqfKWH9vrEcVtbUCQitxpdrFHsu1l7rGWjFbNt5X7qLc/TG3ZzMngujymaQnRJcs+cc4H/GWItR5xMiiV3IdaaKc8tesuxZv9BJwjyun0oxsyKpC0kga5sGSV5XVbd/FAVaEluys5hUvlvyYnWve+9/tM5ZVazNHu+m40Wuq941eT0P1D6Kt6E/aPim1T2kFCtPx9F08fh9Pxo+Tt+nbSfruw2j6+/svcBTlsD9bw0A3w9v8yVUfVze7v4tyk9UlaR+cu5MmZn4w6kNd8SG+zhIlD+DayB8XKxagZEbaDTc1qzDbUDQdjRl9YCfzIE2S3W43wvB0ZGyRdEdd8vHu5vbTw23MRxoBTO0W/W+jyaSNsTpK1IM2Z4I8G/pkCJ6efVIplDq4mw1sbgW2gO0UBKTnr81O3UFlSwEblmS6gMNhhY6erGoaDv+oyTKflr1mArty6fh77zYvUJ1MEF7NOzN9HZ0DuAq8C6LeD3wERGc7wwINS21DmJMdGNNN2zd+5Dp9hYsXeCOOJ2ZZRpUf5LJpn7lV959l1f1nKE3OaRZ3/J7HHaTwFb4ySBPGD54S4gdQqIu6lUHblj//AX6JKrA=",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,N={id:"api/service-api/create-log-entry-using-post",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post",permalink:"/docs/api/service-api/create-log-entry-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2jgQ/RVXn5KUjIFksymflp2drZ2qVHbCzFxCODR2Y5TIkiPJMBTlf99q2WAzkA0naLe6X7fee+YAHgsH6QKUKWJ0e53FmdHeGqXIwlKAqciil0bf5ZBCZgk9fTTFrfZ2/+SkLu7/fXgEARVaLMmT5WoH0FgSpFBZ840y/4l/CZCaQ+g3ICAnl1lZceWLPEs/amkph9TbmgS4bEMlQnoAv6+4rPNW6gKaZtkmk/N/mnzPGed1T3jnn0EAT0bacxpWlZJZGCz55jj3MGwjveI+D7g9He5BLUBhrbPNUy1zEOBlSbypDptZ8SS8Ecu785Icl1xLrtiX/pt//+pQu8XLsRsB0lMZAFw8frnbp6e7vyKzjjw5H/GxyOw05ZHfSBcpU0AjhgNdthOgaEvqWifSdckLIWuNBQE7tDpc9NoEHKuas7zFjIddo0cFAmr9XZudhmUjoCTnsLg2ZbfZK13XxpboIYUcPcUhqxFQX0ffhHWdUyoEXGW0a/c8HU8uuXMTuJOf8+ZN8uY6VYIguiMz1tH84ZfX+1O8jDinylIWEKRrVI4EPMeZyakgHXekj1cm38ed1s65fm2WcNsC6NmTdtLoVqrfaQ/p/9YWsEVVv+zB4ivJbwwbQ2VcmI/FnUKynSaHgaabRJkiIV4RCHBkt0efqK2CFDjXm8yoJk2SA9Z+Y6z0+ybBSl7MMqfKWH9vrEcVtbUCQitxpdrFHsu1l7rGWjFbNt5X7qLc/TG3ZzMngujymaQnRJcs+cc4H/GWItR5xMiiV3IdaaKc8tesuxZv9BJwjyun0oxsyKpC0kga5sGSV5XVbd/FAVaEluys5hUvlvyYnWve+9/tM5ZVazNHu+m40Wuq941eT0P1D6Kt6E/aPim1T2kFCtPx9F08fh9Pxo+Tt+nbSfruw2j6+/svcBTlsD9bw0A3w9v8yVUfVze7v4tyk9UlaR+cu5MmZn4w6kNd8SG+zhIlD+DayB8XKxagZEbaDTc1qzDbUDQdjRl9YCfzIE2S3W43wvB0ZGyRdEdd8vHu5vbTw23MRxoBTO0W/W+jyaSNsTpK1IM2Z4I8G/pkCJ6efVIplDq4mw1sbgW2gO0UBKTnr81O3UFlSwEblmS6gMNhhY6erGoaDv+oyTKflr1mArty6fh77zYvUJ1MEF7NOzN9HZ0DuAq8C6LeD3wERGc7wwINS21DmJMdGNNN2zd+5Dp9hYsXeCOOJ2ZZRpUf5LJpn7lV959l1f1nKE3OaRZ3/J7HHaTwFb4ySBPGD54S4gdQqIu6lUHblj//AX6JKrA=",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post"},next:{title:"log-controller",permalink:"/docs/api/service-api/log-controller"}},Z={},w=[{value:"Request",id:"request",level:2}];function k(e){const a={h2:"h2",p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v2/{projectName}/log/entry"}),"\n",(0,i.jsx)(a.p,{children:"Create log"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(j(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function q(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);