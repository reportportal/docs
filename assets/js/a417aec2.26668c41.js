"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6940],{21024:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>b,contentTitle:()=>N,default:()=>I,frontMatter:()=>y,metadata:()=>q,toc:()=>A});var t=a(85893),s=a(11151),r=a(58219),n=a.n(r),l=(a(62316),a(51039)),c=a.n(l),d=(a(82723),a(9487)),p=a.n(d),o=a(41429),m=a.n(o),h=a(5397),g=a.n(h),j=a(4667),v=a.n(j),u=a(9472),x=a.n(u),f=(a(1176),a(12005),a(85162));const y={id:"get-activity-using-get",title:"getActivity",description:"getActivity",sidebar_label:"getActivity",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v2zYQ/leEe2oLxkqKbQ96mjEEXbCtDZL2yfADI50tdhLJkidnhsD/fThStqnY3YL6RaLu93f3HT0Cya2HagWyJrVTtL+qjSZnug4drAUYi06SMvqugQq2SMtJ74tXevvh9jMIsNLJHgkdOxpByx6hOjq8a0CA0lCBldSCgAZ97ZRlpy/VHH4blMMGKnIDCvB1i72EagTaW3aqNOEWHQjYGNdLSp9++QlCEMfI1pmvWNNHPv1X6Lne/8b25JTeQghrVvbWaI+e5e+vr/kxd/7pDxDAWKImlr4r3/Ej86qoY7cHQB/Qm8HV81RSX4z+zCkIUAxSJz39ZRq1URiPZrvF5tMTlxJBNPF1sphqjILBp55O9SS9pGPRkUrVZAHPa2cISarOZ7LLfkKI6b6mdS9KOouaWTSS8IpUj9FqXvnrQqVsY88vlZeBd0l8gvN10fIRu+QvtuTCiMUfg20d1pIYlY3sPL4c4YyQIKBHas3E08hLaqGCcndTjlkioTxwrhxP7AsgwKPbHVg8uA4qYDsytelCVZajHKg1TtE+lNKqMz49oDWO7o0j2RXJFwjYSafkU5eG6+Au8WUjh47haomsP3N3f9AVgHromQysCGLSXwcBx4zOCfi78VTwRiikbgrOrHijNoVGbLB5W5hNkfItXiZ8yqvB3ixc1LJRaaEMN2fNUNVDirsa4QmlQ7ccGO7VOhc/Mt1T6bnSseFTQXEr8DkpQSSP3ph8T+Tofgf6QynL+7uiMfXQo6a4vKdVJOu4iqY1+ThYNmJ4e6m42z59+fWsZAGdqlF7zMyXVtYtFu8X17xa4rRwNVVZPj8/L2SULozblpOpL/+8++324+PtFZsEATxqKfufFzfXi5vIF+OplzoLM5/wWdVHFAn/odJ2UunIKRfHK03/CnY3IKCa73p58lhlF9BaQGs8sdU4PkmPX1wXAn/+NqDjXq9P8xw73yjP79+h53i6AODNw7TU3xazK+9iCdNHqfeRQN3AJxDwN+7nVybfej+UwxyPH0gidxCYii3KhpfZapw0lnWNljJbvgKZHMc1xX8fQvgX5Ers2A==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},N=void 0,q={id:"api/service-api/5.10/get-activity-using-get",title:"getActivity",description:"getActivity",source:"@site/docs/api/service-api/5.10/get-activity-using-get.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-activity-using-get",permalink:"/docs/api/service-api/5.10/get-activity-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-activity-using-get",title:"getActivity",description:"getActivity",sidebar_label:"getActivity",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v2zYQ/leEe2oLxkqKbQ96mjEEXbCtDZL2yfADI50tdhLJkidnhsD/fThStqnY3YL6RaLu93f3HT0Cya2HagWyJrVTtL+qjSZnug4drAUYi06SMvqugQq2SMtJ74tXevvh9jMIsNLJHgkdOxpByx6hOjq8a0CA0lCBldSCgAZ97ZRlpy/VHH4blMMGKnIDCvB1i72EagTaW3aqNOEWHQjYGNdLSp9++QlCEMfI1pmvWNNHPv1X6Lne/8b25JTeQghrVvbWaI+e5e+vr/kxd/7pDxDAWKImlr4r3/Ej86qoY7cHQB/Qm8HV81RSX4z+zCkIUAxSJz39ZRq1URiPZrvF5tMTlxJBNPF1sphqjILBp55O9SS9pGPRkUrVZAHPa2cISarOZ7LLfkKI6b6mdS9KOouaWTSS8IpUj9FqXvnrQqVsY88vlZeBd0l8gvN10fIRu+QvtuTCiMUfg20d1pIYlY3sPL4c4YyQIKBHas3E08hLaqGCcndTjlkioTxwrhxP7AsgwKPbHVg8uA4qYDsytelCVZajHKg1TtE+lNKqMz49oDWO7o0j2RXJFwjYSafkU5eG6+Au8WUjh47haomsP3N3f9AVgHromQysCGLSXwcBx4zOCfi78VTwRiikbgrOrHijNoVGbLB5W5hNkfItXiZ8yqvB3ixc1LJRaaEMN2fNUNVDirsa4QmlQ7ccGO7VOhc/Mt1T6bnSseFTQXEr8DkpQSSP3ph8T+Tofgf6QynL+7uiMfXQo6a4vKdVJOu4iqY1+ThYNmJ4e6m42z59+fWsZAGdqlF7zMyXVtYtFu8X17xa4rRwNVVZPj8/L2SULozblpOpL/+8++324+PtFZsEATxqKfufFzfXi5vIF+OplzoLM5/wWdVHFAn/odJ2UunIKRfHK03/CnY3IKCa73p58lhlF9BaQGs8sdU4PkmPX1wXAn/+NqDjXq9P8xw73yjP79+h53i6AODNw7TU3xazK+9iCdNHqfeRQN3AJxDwN+7nVybfej+UwxyPH0gidxCYii3KhpfZapw0lnWNljJbvgKZHMc1xX8fQvgX5Ers2A==",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get activities for test item",permalink:"/docs/api/service-api/5.10/get-test-item-activities-using-get"},next:{title:"activity-event-controller",permalink:"/docs/api/service-api/5.10/activity-event-controller"}},b={},A=[{value:"Request",id:"request",level:2}];function L(e){const i={h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:a}=i;return a||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(i.p,{children:"getActivity"})}),"\n",(0,t.jsx)(c(),{method:"get",path:"/v1/{projectName}/activity/{activityId}"}),"\n",(0,t.jsx)(i.p,{children:"getActivity"}),"\n",(0,t.jsx)(i.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(i.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(m(),{className:"paramsItem",param:{name:"activityId",in:"path",description:"activityId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,t.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(n(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(i.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(i.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(v(),{collapsible:!1,name:"actionType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(i.p,{children:"details"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(i.p,{children:"object"})})]})}),(0,t.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,t.jsx)(v(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,t.jsx)(v(),{collapsible:!1,name:"lastModified",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,t.jsx)(v(),{collapsible:!1,name:"loggedObjectId",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,t.jsx)(v(),{collapsible:!1,name:"objectName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"objectType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"projectId",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,t.jsx)(v(),{collapsible:!1,name:"projectName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(v(),{collapsible:!1,name:"user",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(g(),{responseExample:'{\n  "actionType": "string",\n  "details": {},\n  "id": 0,\n  "lastModified": "2024-03-25T10:12:48.788Z",\n  "loggedObjectId": 0,\n  "objectName": "string",\n  "objectType": "string",\n  "projectId": 0,\n  "projectName": "string",\n  "user": "string"\n}',language:"json"})})]})})})})]})})})})]})}function I(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(L,{...e})}):L(e)}}}]);