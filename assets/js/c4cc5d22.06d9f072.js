"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29728],{32640:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>q,default:()=>k,frontMatter:()=>y,metadata:()=>f,toc:()=>Q});var i=a(85893),r=a(11151),t=a(58219),n=a.n(t),l=(a(62316),a(51039)),d=a.n(l),o=(a(82723),a(9487)),c=a.n(o),p=a(41429),m=a.n(p),h=a(5397),g=a.n(h),u=a(4667),x=a.n(u),j=a(9472),v=a.n(j),b=(a(1176),a(12005),a(85162));const y={id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAWbZ3e4hOdbdbdIEg3drrSx2joKWxxIQiFZKy1xD078VQsiWvnMYnixrOvBm+98QaHM8sxBuQOgsTrZzRUqKBLQNdouFOaPWUQgyJQe7wk84elTOntRUqe/5r9fLvDBiU3PACHRrKVIPiBUIMpdFfMXGf6YmBULTEXQ4MUrSJESXlHsUZ/F4JgynEzlTIwCY5FhziGtyppLTWGaEyaJptG4zW/abTE0Vc570gXv4NDKg3VI7CeFlKkfjWoq+WYuthGeEk1Vnxw2VzD2oDklcqydeVSIGBEwXSrDpseked0EQMTc8JtJRyLyhjn/oPev7ZpnaK47YbBsJh4QGMXr+d7Xr99Hug94FD6wLaFuijwjRwubCB1Bk0bNjQuBwDiQeUtyqhqgoaCBqjDTA4cqP8Qe+1x7GrKMoZnlCze+64BAaV+qb0UcG2YVCgtTy71WU32RtV99oU3EEMKXcY+qiGQXUbfePHdU0pv2BLrWw75/l0NubOg+dOes2bD9GH21Txkui2LOxJJcvVT4/3h3gJcYqlwcQjiPdcWmTwGiY6xQxV2JE+3On0FHZau+b6rV78aTPAV4fKCq1aqX7DE8T/m5vBgcvqbQ0SX4Eu12QNpba+PxJ3DNFhFtUDTTeR1FmENCJgYNEczj5RGQkxUKzTiZZNHEU1r1yujXCnJuKlGPWyxFIb96yN4zJoc3mERvCdbAd7Ttce6p5XktiSO1faUbrnc2zPZgoE1sUTSS+Ixiz5U1sX0JQCrtKAkAXvxD5QiCmm70l3Ld7gLeAeV4qFnhgfVfqgidDEgy2NKqnaupsadsgNmkVFI95sh69XRMe29WHQhVtdQ5619NwGAdGMzG/ZW+jjKy/K1qnOjtXRq5dlbz29JIcGMlhtfeNiDxex9yGtxmE+nd+H0/tw+vFldh/P7+K7+eTj3fQfOOt6WJ/cZSC9ISF+wJbz9BfPT0Gqk6pA5bz5d+rmiRu0uqpK2kSMKLigBmy78uvolBhIkaCyw0ktSp7kGMwnU0LvCU4HEEfR8XiccP92ok0WdVtt9Onp4fHz6jGkLQ0DUkeL/pfJbDqZ0RoJrOBqUOZK01dNX87d4auLSsmF8gZpvCBajW7gQJ/t+PrL2xmEF+qWQU6qjjdQ1ztucW1k09Dy9woNUXLby84TNBWW/veG9QbVxUfh3bLz4/fBNYCbwLtFrk4DKwLWOdcwQUNqzZGnaAbe9tDWDV8oT59hdAdo2HnHIkmwdINY8v0rw6OLDzDYddeOQqcUZviRrgr8CDF8gS8EUvv2vTb9eg2Sq6xqZdCWpd9/1+pAZA==",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},q=void 0,f={id:"api/service-api/versions/5.10/create-log-entry-using-post-1",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/versions/5.10/create-log-entry-using-post-1.api.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/create-log-entry-using-post-1",permalink:"/docs/api/service-api/versions/5.10/create-log-entry-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAWbZ3e4hOdbdbdIEg3drrSx2joKWxxIQiFZKy1xD078VQsiWvnMYnixrOvBm+98QaHM8sxBuQOgsTrZzRUqKBLQNdouFOaPWUQgyJQe7wk84elTOntRUqe/5r9fLvDBiU3PACHRrKVIPiBUIMpdFfMXGf6YmBULTEXQ4MUrSJESXlHsUZ/F4JgynEzlTIwCY5FhziGtyppLTWGaEyaJptG4zW/abTE0Vc570gXv4NDKg3VI7CeFlKkfjWoq+WYuthGeEk1Vnxw2VzD2oDklcqydeVSIGBEwXSrDpseked0EQMTc8JtJRyLyhjn/oPev7ZpnaK47YbBsJh4QGMXr+d7Xr99Hug94FD6wLaFuijwjRwubCB1Bk0bNjQuBwDiQeUtyqhqgoaCBqjDTA4cqP8Qe+1x7GrKMoZnlCze+64BAaV+qb0UcG2YVCgtTy71WU32RtV99oU3EEMKXcY+qiGQXUbfePHdU0pv2BLrWw75/l0NubOg+dOes2bD9GH21Txkui2LOxJJcvVT4/3h3gJcYqlwcQjiPdcWmTwGiY6xQxV2JE+3On0FHZau+b6rV78aTPAV4fKCq1aqX7DE8T/m5vBgcvqbQ0SX4Eu12QNpba+PxJ3DNFhFtUDTTeR1FmENCJgYNEczj5RGQkxUKzTiZZNHEU1r1yujXCnJuKlGPWyxFIb96yN4zJoc3mERvCdbAd7Ttce6p5XktiSO1faUbrnc2zPZgoE1sUTSS+Ixiz5U1sX0JQCrtKAkAXvxD5QiCmm70l3Ld7gLeAeV4qFnhgfVfqgidDEgy2NKqnaupsadsgNmkVFI95sh69XRMe29WHQhVtdQ5619NwGAdGMzG/ZW+jjKy/K1qnOjtXRq5dlbz29JIcGMlhtfeNiDxex9yGtxmE+nd+H0/tw+vFldh/P7+K7+eTj3fQfOOt6WJ/cZSC9ISF+wJbz9BfPT0Gqk6pA5bz5d+rmiRu0uqpK2kSMKLigBmy78uvolBhIkaCyw0ktSp7kGMwnU0LvCU4HEEfR8XiccP92ok0WdVtt9Onp4fHz6jGkLQ0DUkeL/pfJbDqZ0RoJrOBqUOZK01dNX87d4auLSsmF8gZpvCBajW7gQJ/t+PrL2xmEF+qWQU6qjjdQ1ztucW1k09Dy9woNUXLby84TNBWW/veG9QbVxUfh3bLz4/fBNYCbwLtFrk4DKwLWOdcwQUNqzZGnaAbe9tDWDV8oT59hdAdo2HnHIkmwdINY8v0rw6OLDzDYddeOQqcUZviRrgr8CDF8gS8EUvv2vTb9eg2Sq6xqZdCWpd9/1+pAZA==",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/versions/5.10/create-log-using-post-1"},next:{title:"Get next or previous log in test item",permalink:"/docs/api/service-api/versions/5.10/get-error-page-using-get"}},N={},Q=[{value:"Request",id:"request",level:2}];function U(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Create log"})}),"\n",(0,i.jsx)(d(),{method:"post",path:"/v1/{projectName}/log/entry"}),"\n",(0,i.jsx)(s.p,{children:"Create log"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(x(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(b.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(g(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(U,{...e})}):U(e)}}}]);