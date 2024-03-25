"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25966],{77021:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>q,contentTitle:()=>y,default:()=>R,frontMatter:()=>v,metadata:()=>N,toc:()=>k});var s=i(85893),t=i(11151),n=i(58219),r=i.n(n),l=(i(62316),i(51039)),c=i.n(l),o=(i(82723),i(9487)),p=i.n(o),m=i(41429),d=i.n(m),h=i(5397),j=i.n(h),g=i(4667),u=i.n(g),x=i(9472),b=i.n(x),f=(i(1176),i(12005),i(85162));const v={id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktzm0gQ/itUn5LUWNip3T1wWm3iJKpkbZUfJ5cOLWhJkx1myEwjr4riv6cakABLcZxwoZh+zNdfv6iAcR0geQBtmdYeWTt7ljrL3hlDHhYKXEHt+SyDBNbEc+++Usqz3iLcB23XHy/vQEGBHnNi8uK2Aos5QQKFKdfaXsmHAm3lBHkDCjIKqdeFeHmq5ulbqT1lkLAvSUFIN5QjJBXwrhCngb22a6hr1d/TYvv5RSO9l9+0EOVQOBsoiPzt+bm8xs6vP4MCIZEsi/RN/EZeR17Re9wJTKa88caajQgG1N5QcKVPBWVn5ZaCXJj2khrWLZLUU2PwHpmOkStYOZ8jQwIZMp2xzglq1Vo5fyJUBWRxaYSUg2zpnCG0ItTD86Z4yA9v0Zb/+qNR7GOZD0qjej6cemx51+ieJEhELyYJS958MO7xFEFky1w64Xp6f/cJFPwzvZ29AwV3158vr0DBh+ubf0HBl/fTOSz21P0y4RkxavMyAp5NwNq7sjjw8jR3bTucEPDY4seZq5/z0rXP7GVF0D0SfOEpRZaYVmgCPW3Lj8QRblEbCTzqbokGhRCilfNROyZAQU68cd1YamYPbyCBeHsRD2zizk9cDbq+jtGYuOoHTg0KAvntfnCV3kACYsIudaZO4riS8nFe866OsdBHQ+WGCud57jyjiVpfoGCLXks4Tc737tqhscLSCE8b5iIcuZvvdfvaFEVQnb4U4QHR8RT65AJHksEIbRYJsuiVXkWWKKPsdeRWUYs3egq4x5VR7ia+0SoapYl2ks6FUJWW7b0PFSwJPflpKew/LESs7coNG3ZIzQ942+OYzmdR5tIyJ8tN/rphimkzTLtBf1sWYiTc5KglVaE9+fsIrwKjU7KBBubTAtMNRW8n56C6VAupSRw/Pj5OsJFOnF/HnWmIv8zeXV7dXp6JSa1A6qRF/+fk4qI9K1zgHO3gml+t5xEvh85i+p/jwqBuGr9BW3W1/gDbCxiNSjh0JyhIxnsOjWkO+y27ULBxgcVRVS0x0L03dS3H30rykt1FX8FNrjMduql0qoOrfu/Bq5turb6ORnv9ZFT7lWh3TcuYUr5AwX+0G/8XyLL/PQwjKn4HxMBBLc23IczIN6y0GtM0pYIHtrL5pR0Oc0r+ker6Ow7qQbg=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,N={id:"api/service-api/get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",source:"@site/docs/api/service-api/get-project-integrations-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-project-integrations-using-get",permalink:"/docs/api/service-api/get-project-integrations-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktzm0gQ/itUn5LUWNip3T1wWm3iJKpkbZUfJ5cOLWhJkx1myEwjr4riv6cakABLcZxwoZh+zNdfv6iAcR0geQBtmdYeWTt7ljrL3hlDHhYKXEHt+SyDBNbEc+++Usqz3iLcB23XHy/vQEGBHnNi8uK2Aos5QQKFKdfaXsmHAm3lBHkDCjIKqdeFeHmq5ulbqT1lkLAvSUFIN5QjJBXwrhCngb22a6hr1d/TYvv5RSO9l9+0EOVQOBsoiPzt+bm8xs6vP4MCIZEsi/RN/EZeR17Re9wJTKa88caajQgG1N5QcKVPBWVn5ZaCXJj2khrWLZLUU2PwHpmOkStYOZ8jQwIZMp2xzglq1Vo5fyJUBWRxaYSUg2zpnCG0ItTD86Z4yA9v0Zb/+qNR7GOZD0qjej6cemx51+ieJEhELyYJS958MO7xFEFky1w64Xp6f/cJFPwzvZ29AwV3158vr0DBh+ubf0HBl/fTOSz21P0y4RkxavMyAp5NwNq7sjjw8jR3bTucEPDY4seZq5/z0rXP7GVF0D0SfOEpRZaYVmgCPW3Lj8QRblEbCTzqbokGhRCilfNROyZAQU68cd1YamYPbyCBeHsRD2zizk9cDbq+jtGYuOoHTg0KAvntfnCV3kACYsIudaZO4riS8nFe866OsdBHQ+WGCud57jyjiVpfoGCLXks4Tc737tqhscLSCE8b5iIcuZvvdfvaFEVQnb4U4QHR8RT65AJHksEIbRYJsuiVXkWWKKPsdeRWUYs3egq4x5VR7ia+0SoapYl2ks6FUJWW7b0PFSwJPflpKew/LESs7coNG3ZIzQ942+OYzmdR5tIyJ8tN/rphimkzTLtBf1sWYiTc5KglVaE9+fsIrwKjU7KBBubTAtMNRW8n56C6VAupSRw/Pj5OsJFOnF/HnWmIv8zeXV7dXp6JSa1A6qRF/+fk4qI9K1zgHO3gml+t5xEvh85i+p/jwqBuGr9BW3W1/gDbCxiNSjh0JyhIxnsOjWkO+y27ULBxgcVRVS0x0L03dS3H30rykt1FX8FNrjMduql0qoOrfu/Bq5turb6ORnv9ZFT7lWh3TcuYUr5AwX+0G/8XyLL/PQwjKn4HxMBBLc23IczIN6y0GtM0pYIHtrL5pR0Oc0r+ker6Ow7qQbg=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get available project integrations",permalink:"/docs/api/service-api/get-project-integrations-using-get-1"},next:{title:"Get global Report Portal integration instance",permalink:"/docs/api/service-api/get-global-integration-using-get"}},q={},k=[{value:"Request",id:"request",level:2}];function _(e){const a={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get available project integrations for plugin"})}),"\n",(0,s.jsx)(c(),{method:"get",path:"/v1/integration/project/{projectName}/all/{pluginName}"}),"\n",(0,s.jsx)(a.p,{children:"Get available project integrations for plugin"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)(d(),{className:"paramsItem",param:{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}}}),(0,s.jsx)(d(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(r(),{label:void 0,id:void 0,children:(0,s.jsxs)(f.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)(u(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(u(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(u(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(u(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(u(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(u(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(u(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(u(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(u(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(j(),{responseExample:'[\n  {\n    "creationDate": "2024-03-25T10:12:46.619Z",\n    "creator": "string",\n    "enabled": true,\n    "id": 0,\n    "integrationParameters": {},\n    "integrationType": {\n      "authFlow": "OAUTH",\n      "creationDate": "2024-03-25T10:12:46.619Z",\n      "details": {},\n      "enabled": true,\n      "groupType": "string",\n      "name": "string",\n      "type": 0\n    },\n    "name": "string",\n    "projectId": 0\n  }\n]',language:"json"})})]})})})})]})})})})]})}function R(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}}}]);