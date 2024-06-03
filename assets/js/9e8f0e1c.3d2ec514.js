"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60369],{30586:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>b,contentTitle:()=>N,default:()=>L,frontMatter:()=>y,metadata:()=>k,toc:()=>q});var i=s(85893),r=s(11151),n=s(58219),l=s.n(n),t=(s(62316),s(51039)),d=s.n(t),p=(s(82723),s(9487)),c=s.n(p),o=s(41429),m=s.n(o),h=s(5397),u=s.n(h),g=s(4667),x=s.n(g),j=s(9472),v=s.n(j),f=(s(1176),s(12005),s(85162));const y={id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2kYQ/RVVn2zXCLEkTsU6hWw2la1yORtYLsEcGqkRY49m5JkRLEXp31M9EkgsOOYErZ7u1z3vPXEEj4WDdAnKFDG6g87izGhvjVJkYSXAVGTRS6Mfc0ghs4SePpriQXt7WDipi6e/588goEKLJXmyXO0IGkuCFCprvlDmP/EvAVJzCP0WBOTkMisrrnyVZ+lbLS3lkHpbkwCXbalESI/gDxWXdd5KXUDTrNpkcv53kx8447LuGe/sHxDAk5H2nIZVpWQWBku+OM49DttIr7jPHHfnwz2oJSisdbZd1DIHAV6WxJvqsJk1T8Ibsbw7L8lxyY3kin3pP/n3jw61W7weuxEgPZUBwNXj17tdLB7/iMwm8uR8xMcis9eUR34rXaRMAY0YDnTdToCiHalbnUjXJS+ErDUWBOzR6nDRGxNwrGvO8hYzHnaDHhUIqPVXbfYaVo2AkpzD4taU3WZvdN0YW6KHFHL0FIesRkB9G30T1nVJqRBwldGu3fNkfHfNnfvAnfySN++Sd7epEgTRHZmyjmbzH17vd/Ey4pwqS1lAkG5QORLwEmcmp4J03JE+Xpv8EHdau+T6rVnCbQugF0/aSaNbqX6lA6T/W1vADlX9ugeLryS/NWwMlXFhPhZ3CslukhwHmm4SZYqEeEUgwJHdnXyitgpS4FxvMqOaNEmOWPutsdIfmgQreTXLjCpj/ZOxHlXU1goIrcS1ahd7Ktde6gZrxWzZel+5q3JPp9yezZwIostnkp4RXbPkL+N8xFuKUOcRI4veyE2kiXLK37LuWrzRa8A9rpxKM7IhqwpJI2mYByteVVa3fZdHWBNastOaV7xc8WN2rlnvfw8vWFatzZzspuNGr6neN3o9DdU/iLaiP2v7rNQ+pRUoTMaTn+PxL/H4p+e7u3Q8SSfvRx8+/PovnEQ57M/WMNDN8Da/c9Wn1U2fHqPcZHVJ2gfn7qSJmR+MOq8rPsTXWaLkAVwb+e1qxQKUzEi74aamFWZbiiajMaMP7GQepEmy3+9HGJ6OjC2S7qhLPj7eP3yaP8R8pBHA1G7Rvx/d3bUxVkeJetDmQpAXQ58NwdOLTyqFUgd3s4HNrcCWsJuAgPTytdmpO6hsJWDLkkyXcDyu0dHCqqbh8LeaLPNp1WsmsCuXjr/3bvMK1dkE4c2sM9O30SWAm8C7IOrDwEdAdLYzLNCw1LaEOdmBMd23feNnrtNXuHqBN+J0YpplVPlBLpv2hVt1/1nW3X+G0uScZnHP73ncQwqf4TODNGH84CkhfgSFuqhbGbRt+fMfiiMqtA==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},N=void 0,k={id:"api/service-api/create-log-entry-using-post",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post",permalink:"/docs/api/service-api/create-log-entry-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2kYQ/RVVn2zXCLEkTsU6hWw2la1yORtYLsEcGqkRY49m5JkRLEXp31M9EkgsOOYErZ7u1z3vPXEEj4WDdAnKFDG6g87izGhvjVJkYSXAVGTRS6Mfc0ghs4SePpriQXt7WDipi6e/588goEKLJXmyXO0IGkuCFCprvlDmP/EvAVJzCP0WBOTkMisrrnyVZ+lbLS3lkHpbkwCXbalESI/gDxWXdd5KXUDTrNpkcv53kx8447LuGe/sHxDAk5H2nIZVpWQWBku+OM49DttIr7jPHHfnwz2oJSisdbZd1DIHAV6WxJvqsJk1T8Ibsbw7L8lxyY3kin3pP/n3jw61W7weuxEgPZUBwNXj17tdLB7/iMwm8uR8xMcis9eUR34rXaRMAY0YDnTdToCiHalbnUjXJS+ErDUWBOzR6nDRGxNwrGvO8hYzHnaDHhUIqPVXbfYaVo2AkpzD4taU3WZvdN0YW6KHFHL0FIesRkB9G30T1nVJqRBwldGu3fNkfHfNnfvAnfySN++Sd7epEgTRHZmyjmbzH17vd/Ey4pwqS1lAkG5QORLwEmcmp4J03JE+Xpv8EHdau+T6rVnCbQugF0/aSaNbqX6lA6T/W1vADlX9ugeLryS/NWwMlXFhPhZ3CslukhwHmm4SZYqEeEUgwJHdnXyitgpS4FxvMqOaNEmOWPutsdIfmgQreTXLjCpj/ZOxHlXU1goIrcS1ahd7Ktde6gZrxWzZel+5q3JPp9yezZwIostnkp4RXbPkL+N8xFuKUOcRI4veyE2kiXLK37LuWrzRa8A9rpxKM7IhqwpJI2mYByteVVa3fZdHWBNastOaV7xc8WN2rlnvfw8vWFatzZzspuNGr6neN3o9DdU/iLaiP2v7rNQ+pRUoTMaTn+PxL/H4p+e7u3Q8SSfvRx8+/PovnEQ57M/WMNDN8Da/c9Wn1U2fHqPcZHVJ2gfn7qSJmR+MOq8rPsTXWaLkAVwb+e1qxQKUzEi74aamFWZbiiajMaMP7GQepEmy3+9HGJ6OjC2S7qhLPj7eP3yaP8R8pBHA1G7Rvx/d3bUxVkeJetDmQpAXQ58NwdOLTyqFUgd3s4HNrcCWsJuAgPTytdmpO6hsJWDLkkyXcDyu0dHCqqbh8LeaLPNp1WsmsCuXjr/3bvMK1dkE4c2sM9O30SWAm8C7IOrDwEdAdLYzLNCw1LaEOdmBMd23feNnrtNXuHqBN+J0YpplVPlBLpv2hVt1/1nW3X+G0uScZnHP73ncQwqf4TODNGH84CkhfgSFuqhbGbRt+fMfiiMqtA==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post"},next:{title:"log-controller",permalink:"/docs/api/service-api/log-controller"}},b={},q=[{value:"Request",id:"request",level:2}];function w(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log"})}),"\n",(0,i.jsx)(d(),{method:"post",path:"/v2/{projectName}/log/entry"}),"\n",(0,i.jsx)(a.p,{children:"Create log"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(x(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function L(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);