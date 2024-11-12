"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96710],{17041:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>w,frontMatter:()=>g,metadata:()=>s,toc:()=>f});const s=JSON.parse('{"id":"api/api-design/activities-search","title":"Search activities by complex criteria","description":"[GET with body payload](https://opensource.zalando.com/restful-api-guidelines/#get-with-body)","source":"@site/docs/api/api-design/activities-search.api.mdx","sourceDirName":"api/api-design","slug":"/api/api-design/activities-search","permalink":"/docs/api/api-design/activities-search","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"activities-search","title":"Search activities by complex criteria","description":"[GET with body payload](https://opensource.zalando.com/restful-api-guidelines/#get-with-body)","sidebar_label":"Search activities by complex criteria","hide_title":true,"hide_table_of_contents":true,"api":"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","sidebar_class_name":"post api-method","info_path":"api/api-design/reportportal-api","custom_edit_url":null},"sidebar":"apiDesign","previous":{"title":"Activities","permalink":"/docs/api/api-design/activities"},"next":{"title":"Projects","permalink":"/docs/api/api-design/projects"}}');var r=i(74848),a=i(28453),n=i(57742),o=i.n(n),p=i(78178),d=i.n(p),l=i(19624),c=i.n(l),m=i(96226),h=i.n(m),u=(i(77675),i(19365),i(51107));const g={id:"activities-search",title:"Search activities by complex criteria",description:"[GET with body payload](https://opensource.zalando.com/restful-api-guidelines/#get-with-body)",sidebar_label:"Search activities by complex criteria",hide_title:!0,hide_table_of_contents:!0,api:"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",sidebar_class_name:"post api-method",info_path:"api/api-design/reportportal-api",custom_edit_url:null},j=void 0,y={},f=[];function x(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Search activities by complex criteria"}),"\n",(0,r.jsx)(o(),{method:"post",path:"/activities/searches",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://opensource.zalando.com/restful-api-guidelines/#get-with-body",children:"GET with body payload"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"no resources created:\nReturns all activities matching the query passed as request input payload."}),"\n"]}),"\n",(0,r.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{schema:{type:"string"},in:"query",name:"limit",description:"The limit used for this page of results. This will be the same as the limit query parameter unless it exceeded the maximum value allowed for this API endpoint"},{schema:{type:"string"},in:"query",name:"offset",description:"The offset used for this page of results"},{schema:{type:"string"},in:"query",name:"sort",description:"Indicate sort by field"},{schema:{type:"string",enum:["ASC","DESC"]},in:"query",name:"order",description:"Indicate sorting direction"}]}),"\n",(0,r.jsx)(c(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{search_criterias:{type:"array",items:{title:"SearchCriteria",type:"object",properties:{filter_key:{type:"string",description:"search by field"},operation:{type:"string",enum:["EQ","NE","CNT","NON_CNT","BTW","IN"],description:"operation to perform for the filter"},value:{type:"string",description:"search value"}},required:["filter_key","value"]}}},required:["search_criterias"]},examples:{"Example 1":{value:{search_criterias:[{filter_key:"predefinedFilter",value:"test"},{filter_key:"projectName",operation:"EQ",value:"test"},{filter_key:"eventName",operation:"IN",value:"createDashboard,deleteWidget"},{filter_key:"createdAt",operation:"BTW",value:"0;1440;+0300"},{filter_key:"objectType",operation:"IN",value:"DEFECT_TYPE,LAUNCH"},{filter_key:"objectName",operation:"CNT",value:"test"},{filter_key:"subjectType",operation:"IN",value:"USER,RULE"},{filter_key:"subjectName",operation:"IN",value:"superadmin,user"}]}}}}}}}),"\n",(0,r.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{allOf:[{type:"object","x-stoplight":{id:"a779774cbed57"},title:"Offset-based",description:"Offset-based pagination",properties:{offset:{type:"integer",description:"The offset used for this page of results.",minimum:0,"x-stoplight":{id:"z9jg7o4fe4jkn"}},limit:{type:"integer",description:"The limit used for this page of results. This will be the same as the limit query parameter unless it exceeded the maximum value allowed for this API endpoint.",minimum:0,"x-stoplight":{id:"i0krz9nwy1ndt"}},total_count:{type:"integer",description:"One greater than the offset of the last item in the entire collection. The total number of items in the collection may be less than total_count.",minimum:0,"x-stoplight":{id:"e0em1vnu8tj4a"}},sort:{type:"string",description:"Field to define the sort field.","x-stoplight":{id:"7oyq1tomalge1"}},order:{type:"string",description:"To indicate sorting direction. Ascending or Descending.",enum:["ASC","DESC"],"x-stoplight":{id:"77qo4i7sq47x6"}},items:{type:"array",items:{"x-stoplight":{id:"dsgodc8fbfyfo"}},"x-stoplight":{id:"qkgi498bvvex6"}}},required:["offset","limit","total_count","items"]},{type:"object",properties:{items:{type:"array",items:{title:"Activity",type:"object",description:"activity details",properties:{id:{type:"integer",format:"int64",minimum:1},created_at:{type:"string",format:"date-time"},event_name:{type:"string"},object_id:{type:"integer",exclusiveMinimum:!1,exclusiveMaximum:!1,format:"int64",minimum:1},object_name:{type:"string"},object_type:{type:"string"},project_id:{type:"integer",format:"int64",exclusiveMinimum:!1,minimum:1},project_name:{type:"string"},subject_name:{type:"string"},subject_type:{type:"string"},details:{type:"object",properties:{history:{type:"array",items:{title:"HistoryField",type:"object",properties:{field:{type:"string"},old_value:{type:"string"},new_value:{type:"string"}}}}}}}}}}}]}}}}}})]})}function w(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);