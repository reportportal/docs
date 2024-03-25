"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36390],{67498:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>M,contentTitle:()=>f,default:()=>S,frontMatter:()=>y,metadata:()=>N,toc:()=>_});var s=i(85893),n=i(11151),l=i(58219),t=i.n(l),r=(i(62316),i(51039)),o=i.n(r),c=(i(82723),i(9487)),d=i.n(c),m=i(41429),p=i.n(m),g=i(5397),h=i.n(g),u=i(4667),v=i.n(u),x=i(9472),b=i.n(x),j=(i(1176),i(12005),i(85162));const y={id:"get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",sidebar_label:"Get available global integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv2zgQ/ivCnNqCsZJidw861dumqdFuYuRxCnwYS2ObuxSpkiNnDUH/vRhKtuXYCVIfLIjz4HzfvNQA4zJA9gjaMi09snb2LHeWvTOGPMwUuIq680kBGSyJr4ybo5nsDcJD0HZ5dXkPCir0WBKTF68NWCwJMqhMvdT2Wl4UaCsnyCtQUFDIva7Ey3M1Tz9r7amAjH1NCkK+ohIha4A3lTgN7LVdQtvORDlUzgYKIv94fi6PQ98330GBICPLIv2QfpDHkVf0HjcSJVMZvbFmI4IB4FsKrva5RNlbufm/lLPg98IX6y6S3FM0+IJMx5ErWDhfIkMGBTKdsS4JWtVZOX8CqgKyODdCyk42d84QWhHq4XnMKPnhLdryX39ExT2W6SBhzetw2kPL+6h7kiARvZkkrHn11binUwSRrUspz5vxw/03UPD3+G7yGRTc33y/vAYFX29u/wEFP76MpzDbUvfbhBfEqM3bCHg1AUvv6mrHy/Pcdc1wQsCHFi9nrn3NS+WdBD15WxH0PwFfecqRBdMCTaDnXXlFnOAatRHgyTJ2fzKog5AsnE+63gUFJfHK9aMiDgReQQbp+iId2KSdmxSNSZt927egIJBfb8dH7Q1k0FTescudabM0baRcnNe8aVOs9NEMuaXKeZ46z2iSzhcoWKPXEn7M8dZdNyQWWBvhZcVchSN3063uvhZFEVSvL0W3i+h46nxzgRPJWIK2SCSy5J1eJJaooOJ94hZJF2/yPOB9XAWVbuSjVhWVRtpJ+mZCVV539z42MCf05Me10P04G4rvZMZ10IdKuyLpAcVRGAs6KkHX7gs37PEhuy9Qv4Uynk6SwuV1SZZjzvv5i3mcv/1muKsrMRJ6S9SS7dCdfDqCrMDonGyggfm4wnxFycfROai+WgRNlqZPT08jjNKR88u0Nw3pj8nny+u7yzMxaRVIqXXR/zm6OB9dxEZygUu0g2t+swUOaNnRzPQ/p5VBHUdFDLbp2+MR1hdwMFxBQXcNKEAj/9lgO84UrFxgMWyaOQZ68KZt5fhnTV7qYbav+VgdhQ793DrV481+M8K7237xvk8O9vFJFNulaTexyUwtb6DgP9oc7vNWGmVFWJCP8XQK4zynigemspWldHdDRL4q2vYX36H5zQ==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},f=void 0,N={id:"api/service-api/5.10/get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",source:"@site/docs/api/service-api/5.10/get-global-integrations-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-global-integrations-using-get",permalink:"/docs/api/service-api/5.10/get-global-integrations-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-global-integrations-using-get",title:"Get available global integrations for plugin",description:"Get available global integrations for plugin",sidebar_label:"Get available global integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv2zgQ/ivCnNqCsZJidw861dumqdFuYuRxCnwYS2ObuxSpkiNnDUH/vRhKtuXYCVIfLIjz4HzfvNQA4zJA9gjaMi09snb2LHeWvTOGPMwUuIq680kBGSyJr4ybo5nsDcJD0HZ5dXkPCir0WBKTF68NWCwJMqhMvdT2Wl4UaCsnyCtQUFDIva7Ey3M1Tz9r7amAjH1NCkK+ohIha4A3lTgN7LVdQtvORDlUzgYKIv94fi6PQ98330GBICPLIv2QfpDHkVf0HjcSJVMZvbFmI4IB4FsKrva5RNlbufm/lLPg98IX6y6S3FM0+IJMx5ErWDhfIkMGBTKdsS4JWtVZOX8CqgKyODdCyk42d84QWhHq4XnMKPnhLdryX39ExT2W6SBhzetw2kPL+6h7kiARvZkkrHn11binUwSRrUspz5vxw/03UPD3+G7yGRTc33y/vAYFX29u/wEFP76MpzDbUvfbhBfEqM3bCHg1AUvv6mrHy/Pcdc1wQsCHFi9nrn3NS+WdBD15WxH0PwFfecqRBdMCTaDnXXlFnOAatRHgyTJ2fzKog5AsnE+63gUFJfHK9aMiDgReQQbp+iId2KSdmxSNSZt927egIJBfb8dH7Q1k0FTescudabM0baRcnNe8aVOs9NEMuaXKeZ46z2iSzhcoWKPXEn7M8dZdNyQWWBvhZcVchSN3063uvhZFEVSvL0W3i+h46nxzgRPJWIK2SCSy5J1eJJaooOJ94hZJF2/yPOB9XAWVbuSjVhWVRtpJ+mZCVV539z42MCf05Me10P04G4rvZMZ10IdKuyLpAcVRGAs6KkHX7gs37PEhuy9Qv4Uynk6SwuV1SZZjzvv5i3mcv/1muKsrMRJ6S9SS7dCdfDqCrMDonGyggfm4wnxFycfROai+WgRNlqZPT08jjNKR88u0Nw3pj8nny+u7yzMxaRVIqXXR/zm6OB9dxEZygUu0g2t+swUOaNnRzPQ/p5VBHUdFDLbp2+MR1hdwMFxBQXcNKEAj/9lgO84UrFxgMWyaOQZ68KZt5fhnTV7qYbav+VgdhQ793DrV481+M8K7237xvk8O9vFJFNulaTexyUwtb6DgP9oc7vNWGmVFWJCP8XQK4zynigemspWldHdDRL4q2vYX36H5zQ==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get available global integrations",permalink:"/docs/api/service-api/5.10/get-global-integrations-using-get-1"},next:{title:"Get available project integrations",permalink:"/docs/api/service-api/5.10/get-project-integrations-using-get-1"}},M={},_=[{value:"Request",id:"request",level:2}];function q(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get available global integrations for plugin"})}),"\n",(0,s.jsx)(o(),{method:"get",path:"/v1/integration/global/all/{pluginName}"}),"\n",(0,s.jsx)(a.p,{children:"Get available global integrations for plugin"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(p(),{className:"paramsItem",param:{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(t(),{label:void 0,id:void 0,children:(0,s.jsxs)(j.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)(v(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(v(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(v(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(v(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(v(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(v(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(v(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(v(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(v(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(v(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(v(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(v(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(h(),{responseExample:'[\n  {\n    "creationDate": "2024-03-25T10:12:48.739Z",\n    "creator": "string",\n    "enabled": true,\n    "id": 0,\n    "integrationParameters": {},\n    "integrationType": {\n      "authFlow": "OAUTH",\n      "creationDate": "2024-03-25T10:12:48.739Z",\n      "details": {},\n      "enabled": true,\n      "groupType": "string",\n      "name": "string",\n      "type": 0\n    },\n    "name": "string",\n    "projectId": 0\n  }\n]',language:"json"})})]})})})})]})})})})]})}function S(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(q,{...e})}):q(e)}}}]);