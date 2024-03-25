"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27943],{23785:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>k,contentTitle:()=>y,default:()=>_,frontMatter:()=>f,metadata:()=>N,toc:()=>q});var s=i(85893),n=i(11151),l=i(58219),t=i.n(l),r=(i(62316),i(51039)),o=i.n(r),c=(i(82723),i(9487)),d=i.n(c),p=i(41429),m=i.n(p),g=i(5397),u=i.n(g),h=i(4667),j=i.n(h),b=i(9472),x=i.n(b),v=(i(1176),i(12005),i(85162));const f={id:"get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",sidebar_label:"Get available global integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv2zgQ/ivCnNqCsZJidw861dumqdFuYuRxCnwYS2ObuxTJkiNnDUH/vRhJtuXYCVIfLIjz4DffvFQD4zJC9gjaMi0Dsnb2LHeWgzOGAswUOE/d+aSADJbEV8bN0Uz2BvEharu8urwHBR4DlsQUxGsNFkuCDLypltpey4sCbeUEeQUKCop50F68PFcL9LPSgQrIOFSkIOYrKhGyGnjjxWnkoO0SmmYmytE7GymK/OP5uTwOfd98BwUSGVkW6Yf0gzyOvGIIuBGUTGXrjTUbEQwCvqXoqpALyt7Kzf+lnCX+IHyx7pDkgVqDL8h0jFzBwoUSGTIokOmMdUnQqM7KhROhKiCLcyOk7GRz5wyhFaEenrcZpTC8RVv+649WcR/LdJCw+vVwmkPL+1b3JEEiejNJWPHqq3FPpwgiW5VSnjfjh/tvoODv8d3kMyi4v/l+eQ0Kvt7c/gMKfnwZT2G2pe63CS+IUZu3EfBqApbBVX7Hy/Pcdc1wQsCHFi9nrnnNiw9OQE/eVgT9T4L3gXJkiWmBJtLzrrwiTnCN2kjgybLt/mRQBzFZuJB0vQsKSuKV60dFOxB4BRmk64t0YJN2blI0Jq33bd+AgkhhvR0fVTCQQe2DY5c702RpWku5uKB506To9dEMuSXvAk9dYDRJ5wsUrDFogd/meOuuGxILrIzwsmL28cjddKu7r0VRBNXrS9HtEB1PnW8uciIZS9AWiSBL3ulFYokKKt4nbpF0eJPngPe4CirdKLRavlUaaSfpmwlVedXd+1jDnDBQGFdC9+NMxNou3LBBh9S8wNsWx3g6SQqXVyVZbhPWD0/M2+HZj/W7youRcFOillTF7uTTEV4FRudkIw3Mxx7zFSUfR+eg+lQLqVmaPj09jbCVjlxYpr1pTH9MPl9e312eiUmjQOqkQ//n6OKiO/Mucol2cM1v1u8BLbtGYvqfU29Qt33egq372n6E9QUcTEZQ0F0DCtDIfzZYbTMFKxdZDOt6jpEegmkaOf5ZUZBkzvYF26a20LEfOqcatN6vNXh322/N98nBMj0ZxXbj2U3bIaaSN1DwH20Ol3EjVb4iLCi0eDqFcZ6T54GprFSpu90EkE+CpvkFInjiWg==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,N={id:"api/service-api/get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",source:"@site/docs/api/service-api/get-global-integrations-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-global-integrations-using-get",permalink:"/docs/api/service-api/get-global-integrations-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",sidebar_label:"Get available global integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv2zgQ/ivCnNqCsZJidw861dumqdFuYuRxCnwYS2ObuxTJkiNnDUH/vRhJtuXYCVIfLIjz4DffvFQD4zJC9gjaMi0Dsnb2LHeWgzOGAswUOE/d+aSADJbEV8bN0Uz2BvEharu8urwHBR4DlsQUxGsNFkuCDLypltpey4sCbeUEeQUKCop50F68PFcL9LPSgQrIOFSkIOYrKhGyGnjjxWnkoO0SmmYmytE7GymK/OP5uTwOfd98BwUSGVkW6Yf0gzyOvGIIuBGUTGXrjTUbEQwCvqXoqpALyt7Kzf+lnCX+IHyx7pDkgVqDL8h0jFzBwoUSGTIokOmMdUnQqM7KhROhKiCLcyOk7GRz5wyhFaEenrcZpTC8RVv+649WcR/LdJCw+vVwmkPL+1b3JEEiejNJWPHqq3FPpwgiW5VSnjfjh/tvoODv8d3kMyi4v/l+eQ0Kvt7c/gMKfnwZT2G2pe63CS+IUZu3EfBqApbBVX7Hy/Pcdc1wQsCHFi9nrnnNiw9OQE/eVgT9T4L3gXJkiWmBJtLzrrwiTnCN2kjgybLt/mRQBzFZuJB0vQsKSuKV60dFOxB4BRmk64t0YJN2blI0Jq33bd+AgkhhvR0fVTCQQe2DY5c702RpWku5uKB506To9dEMuSXvAk9dYDRJ5wsUrDFogd/meOuuGxILrIzwsmL28cjddKu7r0VRBNXrS9HtEB1PnW8uciIZS9AWiSBL3ulFYokKKt4nbpF0eJPngPe4CirdKLRavlUaaSfpmwlVedXd+1jDnDBQGFdC9+NMxNou3LBBh9S8wNsWx3g6SQqXVyVZbhPWD0/M2+HZj/W7youRcFOillTF7uTTEV4FRudkIw3Mxx7zFSUfR+eg+lQLqVmaPj09jbCVjlxYpr1pTH9MPl9e312eiUmjQOqkQ//n6OKiO/Mucol2cM1v1u8BLbtGYvqfU29Qt33egq372n6E9QUcTEZQ0F0DCtDIfzZYbTMFKxdZDOt6jpEegmkaOf5ZUZBkzvYF26a20LEfOqcatN6vNXh322/N98nBMj0ZxXbj2U3bIaaSN1DwH20Ol3EjVb4iLCi0eDqFcZ6T54GprFSpu90EkE+CpvkFInjiWg==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get available global integrations",permalink:"/docs/api/service-api/get-global-integrations-using-get-1"},next:{title:"Get available project integrations",permalink:"/docs/api/service-api/get-project-integrations-using-get-1"}},k={},q=[{value:"Request",id:"request",level:2}];function w(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get available global integrations for plugin"})}),"\n",(0,s.jsx)(o(),{method:"get",path:"/v1/integration/global/all/{pluginName}"}),"\n",(0,s.jsx)(a.p,{children:"Get available global integrations for plugin"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(m(),{className:"paramsItem",param:{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(t(),{label:void 0,id:void 0,children:(0,s.jsxs)(v.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)(j(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(j(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(j(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(j(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(j(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(j(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(j(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(u(),{responseExample:'[\n  {\n    "creationDate": "2024-03-25T10:12:46.617Z",\n    "creator": "string",\n    "enabled": true,\n    "id": 0,\n    "integrationParameters": {},\n    "integrationType": {\n      "authFlow": "OAUTH",\n      "creationDate": "2024-03-25T10:12:46.617Z",\n      "details": {},\n      "enabled": true,\n      "groupType": "string",\n      "name": "string",\n      "type": 0\n    },\n    "name": "string",\n    "projectId": 0\n  }\n]',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}}}]);