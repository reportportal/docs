"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83352],{72591:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>y,default:()=>B,frontMatter:()=>f,metadata:()=>N,toc:()=>w});var i=s(85893),r=s(11151),t=s(58219),n=s.n(t),l=(s(62316),s(51039)),c=s.n(l),o=(s(82723),s(9487)),p=s.n(o),d=s(41429),m=s.n(d),h=s(5397),u=s.n(h),j=s(4667),g=s.n(j),x=s(9472),v=s.n(x),b=(s(1176),s(12005),s(85162));const f={id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zgQ/RVhTklBW2mAvejUNAiwwRZNEKcnwwhoaiyxpUiWHDlrCPr3YiTZli0XrU4S9fjmzcwbsgGSRYRsCcYVMxl3Vs2UsxScMRhgJcB5DJK0s485ZKACSsIvrvgWtS2enxavIMDLICskDEzUgJUVQgY+uO+o6Ct/CdCWlySVICDHqIL2TDrBBfxZ64A5ZBRqFBBViZWErAHaeaaNFLQtoG1XPRgjfXb5jhEsHC3xa1Ub0l4GSjcuVLNcUsdxZDvGWcL36OzbwPXGmzjvIZxbszhOMnAlSGPk7dMtWXOW1xTS8nOeYrcQvbOxZ769uZlyPf0HYpzeh/TDaTqkybDcz5JUuZBbfOrbZouXBfwpmZP4A1SGIHfcN8IqTiI8GKzQ0n3nhvwvQuj8QgsFVBijLPDiv0hS/XgNUl36fXjYTT6gYh2QbaSJeG6wXmViXJFcrVm9tkVysPU1sAwqHdvbu9hpZ59mkG5v02ZkzzY1rgABEcN2b/Y6GMiAUeSUM22Wpo2sqXRB065NpdcTw7+gd4GeXSBpkp4LBGxl0HJt+nLt6XonbGRtCDIoiXyc0D3vsQLQ1hUbmoEgBvyqFXBQNLXWvy5SwiObSJsnrCy50pvEIuaYXyduk/R6k3PBR105Vm4eOpTvQHPtuEUrLpWq+7jLBtYoA4a7mou7XI1/L9jIfepj0KHtQ0Kd3/m7BwG3X9uNG/tzXN3flH6fyt3zY5I7VbOVOy8MQyZVN2TDObaoPW/i8lZSc7djv/JpkrIAoxXaiKPtd16qEpPb+Q2IwS2cTZam7+/vc9n9nbtQpMPWmH55vH/4uniY8ZZWAFutV//P/OPN/COvsU8raUdh/mzyk0ocKkv4P6XeSG2Zt9PXDP5fwvYWBGSnBzSPwEpAyZOSLaFp1jLit2Dalpd/1hi42aujobvW5zry+29GdHR0w9XLcDxeJ6eBLwren1Z2142QqfkLBPzA3dnV0vIclChzDJ2iHnHfx529Ms+R4dL10Yr9pjul0NMIzscx2/lwjgwX43q4mCqXM4y5OipxfOVBaNtflfScVw==",sidebar_class_name:"post api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},y=void 0,N={id:"api/service-api/5.10/create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",source:"@site/docs/api/service-api/5.10/create-log-using-post.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/create-log-using-post",permalink:"/docs/api/service-api/5.10/create-log-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-using-post",title:"Create log (batching operation)",description:"Create log (batching operation)",sidebar_label:"Create log (batching operation)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVcFu2zgQ/RVhTklBW2mAvejUNAiwwRZNEKcnwwhoaiyxpUiWHDlrCPr3YiTZli0XrU4S9fjmzcwbsgGSRYRsCcYVMxl3Vs2UsxScMRhgJcB5DJK0s485ZKACSsIvrvgWtS2enxavIMDLICskDEzUgJUVQgY+uO+o6Ct/CdCWlySVICDHqIL2TDrBBfxZ64A5ZBRqFBBViZWErAHaeaaNFLQtoG1XPRgjfXb5jhEsHC3xa1Ub0l4GSjcuVLNcUsdxZDvGWcL36OzbwPXGmzjvIZxbszhOMnAlSGPk7dMtWXOW1xTS8nOeYrcQvbOxZ769uZlyPf0HYpzeh/TDaTqkybDcz5JUuZBbfOrbZouXBfwpmZP4A1SGIHfcN8IqTiI8GKzQ0n3nhvwvQuj8QgsFVBijLPDiv0hS/XgNUl36fXjYTT6gYh2QbaSJeG6wXmViXJFcrVm9tkVysPU1sAwqHdvbu9hpZ59mkG5v02ZkzzY1rgABEcN2b/Y6GMiAUeSUM22Wpo2sqXRB065NpdcTw7+gd4GeXSBpkp4LBGxl0HJt+nLt6XonbGRtCDIoiXyc0D3vsQLQ1hUbmoEgBvyqFXBQNLXWvy5SwiObSJsnrCy50pvEIuaYXyduk/R6k3PBR105Vm4eOpTvQHPtuEUrLpWq+7jLBtYoA4a7mou7XI1/L9jIfepj0KHtQ0Kd3/m7BwG3X9uNG/tzXN3flH6fyt3zY5I7VbOVOy8MQyZVN2TDObaoPW/i8lZSc7djv/JpkrIAoxXaiKPtd16qEpPb+Q2IwS2cTZam7+/vc9n9nbtQpMPWmH55vH/4uniY8ZZWAFutV//P/OPN/COvsU8raUdh/mzyk0ocKkv4P6XeSG2Zt9PXDP5fwvYWBGSnBzSPwEpAyZOSLaFp1jLit2Dalpd/1hi42aujobvW5zry+29GdHR0w9XLcDxeJ6eBLwren1Z2142QqfkLBPzA3dnV0vIclChzDJ2iHnHfx529Ms+R4dL10Yr9pjul0NMIzscx2/lwjgwX43q4mCqXM4y5OipxfOVBaNtflfScVw==",sidebar_class_name:"post api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"log-async-controller",permalink:"/docs/api/service-api/5.10/log-async-controller"},next:{title:"Create log",permalink:"/docs/api/service-api/5.10/create-log-entry-using-post"}},_={},w=[{value:"Request",id:"request",level:2}];function X(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log (batching operation)"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v2/{projectName}/log"}),"\n",(0,i.jsx)(a.p,{children:"Create log (batching operation)"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!1,name:"json_request_part",required:!0,schemaName:"",qualifierMessage:void 0,schema:{description:"json_request_part"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"responses"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"stackTrace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "responses": [\n    {\n      "id": "string",\n      "message": "string",\n      "stackTrace": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]})})})})]})}function B(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(X,{...e})}):X(e)}}}]);