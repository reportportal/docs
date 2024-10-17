"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90095],{58143:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>G,contentTitle:()=>N,default:()=>F,frontMatter:()=>y,metadata:()=>b,toc:()=>q});var a=s(85893),n=s(11151),r=s(58219),l=s.n(r),t=(s(62316),s(51039)),c=s.n(t),p=(s(82723),s(9487)),d=s.n(p),o=s(41429),m=s.n(o),h=s(5397),u=s.n(h),j=s(4667),f=s.n(j),x=s(9472),g=s.n(x),v=(s(1176),s(12005),s(85162));const y={id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4jgQ/leiedpdBQJcd0/K03E9qkNbtRxQnXRdHkwygHcT22s7bVGU//00tgOhcL3V8hTsb374m5nPrsGyrYH0EQpWiWzXY2Yvsl4mhdWyKFDDKgapUDPLpZjmkMKGC252tw7+YLjYzh6WEINimpVoUZO3GgQrEdLgdZpDDFxACorZHcSQo8k0V+TzFKTxe8U15pBaXWEMJtthySCtwe4VOTRWc7GFpokPMZSWXzGzd/TvrTCnuB+PtPJgNPZ3me8Jceq3S8j8L4iB2ENhCcmUKnjmyEu+GoLX3UjcFhTqxnmYvGBWEdI5Oeb3CCjyJS+RahGSk2s6CtGuqTqWo3HhrNV8XVn/L2CZ1mxPzFgsTTfs1GI5Pli4qG+7/4b7CwTFYPbGYtnZWktZIBMQA76wUlG0DSsMNjE8saLCSzQ3zauCXQjUEnG2F8NG6pJZSCFnFnuWUJSZZbYyl/AoqpK4nY0Xi8kfEMPNeHrrPhbL+9nMf32ehq/p3XIynz/Mlu7f9fjuenJ7G3Zu7iGGv8fzO1g1/hinveUWjJLCeBZHg8F5E91/Pm2cD8mHt3oldNvif0vG84tEFlx8u7ghqnKNurPFhcUt6i7DXNhPV65ioWhKY8YsnddVOYaXXiZz3KLohcnprWW+74WBPRuYUyr8CSOvCtFG6sgozPiGYx6FGXaNZVEYLoXXG9eab8Y9tN7r+DTgJdqdJHVTleOQ9COF5GmU1B3ZaBKfVFK3ktUk3hnEYFA/tepX6QJSIFMrM1k0aZLUrLI7qbndNwlT/OzUc1RS25nUlhWR9+VS1pytC1/L1p3vng2rCqrGzlplztzNWuyx0wkIccCvmhgOGZ2345/S2Ihoi5jII8osesc3kUDMMX8fyU3k841eJ3zMK8dS9rVDKQfqc0lNsyKqssrHfaxhjUyjHlfE+OOKtkko50fFnbQScqpvh6IfRrqVodCEbbnb5l695qijBUFWYDQYXfWGg97w1+XwYzoaple/9Aefrv6Bo5S0itHQXbOR3dns1vA/CtwSNp5No1xmVYnCuushjD/L3PiHSVlUiowoxZJx6injV347I5ZmOkNhsGM+VizbYTTqDyAOPUnVT5Pk+fm5z9xuX+ptEkxNcju9ntwtJj0yIbFGbXz2H/vDoV9T0tiSiU6YHxvYy9pu8cUmqmBckG+XYx3G7xGeRhBDenpv+yi03nk2hCFcxbCTxpJpXa+ZwQddNA0tf69QU7utjiPlOijnhr6PyvUqy4Miw7t5EPX3USfwxVO0967Yd0QH4tCuB2t6wvxU/FNCfiKFroOGlGCHLCfVP8zUtY/bW5Kfo4ez5wydwVuMswyV7WDpBjuRVv9OXIc3VClzQmn2TI8d9gwpfIEvlKN0p3eK59ZrKJjYVmxLeB+Vfv8Cr+Gnqw==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},N=void 0,b={id:"api/service-api/finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",source:"@site/docs/api/service-api/finish-launch-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/finish-launch-using-put",permalink:"/docs/api/service-api/finish-launch-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4jgQ/leiedpdBQJcd0/K03E9qkNbtRxQnXRdHkwygHcT22s7bVGU//00tgOhcL3V8hTsb374m5nPrsGyrYH0EQpWiWzXY2Yvsl4mhdWyKFDDKgapUDPLpZjmkMKGC252tw7+YLjYzh6WEINimpVoUZO3GgQrEdLgdZpDDFxACorZHcSQo8k0V+TzFKTxe8U15pBaXWEMJtthySCtwe4VOTRWc7GFpokPMZSWXzGzd/TvrTCnuB+PtPJgNPZ3me8Jceq3S8j8L4iB2ENhCcmUKnjmyEu+GoLX3UjcFhTqxnmYvGBWEdI5Oeb3CCjyJS+RahGSk2s6CtGuqTqWo3HhrNV8XVn/L2CZ1mxPzFgsTTfs1GI5Pli4qG+7/4b7CwTFYPbGYtnZWktZIBMQA76wUlG0DSsMNjE8saLCSzQ3zauCXQjUEnG2F8NG6pJZSCFnFnuWUJSZZbYyl/AoqpK4nY0Xi8kfEMPNeHrrPhbL+9nMf32ehq/p3XIynz/Mlu7f9fjuenJ7G3Zu7iGGv8fzO1g1/hinveUWjJLCeBZHg8F5E91/Pm2cD8mHt3oldNvif0vG84tEFlx8u7ghqnKNurPFhcUt6i7DXNhPV65ioWhKY8YsnddVOYaXXiZz3KLohcnprWW+74WBPRuYUyr8CSOvCtFG6sgozPiGYx6FGXaNZVEYLoXXG9eab8Y9tN7r+DTgJdqdJHVTleOQ9COF5GmU1B3ZaBKfVFK3ktUk3hnEYFA/tepX6QJSIFMrM1k0aZLUrLI7qbndNwlT/OzUc1RS25nUlhWR9+VS1pytC1/L1p3vng2rCqrGzlplztzNWuyx0wkIccCvmhgOGZ2345/S2Ihoi5jII8osesc3kUDMMX8fyU3k841eJ3zMK8dS9rVDKQfqc0lNsyKqssrHfaxhjUyjHlfE+OOKtkko50fFnbQScqpvh6IfRrqVodCEbbnb5l695qijBUFWYDQYXfWGg97w1+XwYzoaple/9Aefrv6Bo5S0itHQXbOR3dns1vA/CtwSNp5No1xmVYnCuushjD/L3PiHSVlUiowoxZJx6injV347I5ZmOkNhsGM+VizbYTTqDyAOPUnVT5Pk+fm5z9xuX+ptEkxNcju9ntwtJj0yIbFGbXz2H/vDoV9T0tiSiU6YHxvYy9pu8cUmqmBckG+XYx3G7xGeRhBDenpv+yi03nk2hCFcxbCTxpJpXa+ZwQddNA0tf69QU7utjiPlOijnhr6PyvUqy4Miw7t5EPX3USfwxVO0967Yd0QH4tCuB2t6wvxU/FNCfiKFroOGlGCHLCfVP8zUtY/bW5Kfo4ez5wydwVuMswyV7WDpBjuRVv9OXIc3VClzQmn2TI8d9gwpfIEvlKN0p3eK59ZrKJjYVmxLeB+Vfv8Cr+Gnqw==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Merge set of specified launches in common one",permalink:"/docs/api/service-api/merge-launches-using-post"},next:{title:"launch-controller",permalink:"/docs/api/service-api/launch-controller"}},G={},q=[{value:"Request",id:"request",level:2}];function C(e){const i={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(i.p,{children:"Finish launch for specified project"})}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v2/{projectName}/launch/{launchId}/finish"}),"\n",(0,a.jsx)(i.p,{children:"Finish launch for specified project"}),"\n",(0,a.jsx)(i.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(i.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(m(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}}}),(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)(d(),{className:"openapi-tabs__mime",children:(0,a.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(i.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(i.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(i.p,{children:"finishLaunchRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(i.p,{children:"attributes"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(i.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(i.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,a.jsx)(f(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(i.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"endTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,a.jsx)(f(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSED`, `FAILED`, `STOPPED`, `SKIPPED`, `INTERRUPTED`, `CANCELLED`, `INFO`, `WARN`]",schema:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(i.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(i.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"link",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "link": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function F(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(C,{...e})}):C(e)}}}]);