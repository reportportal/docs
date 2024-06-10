"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37354],{56486:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>b,default:()=>O,frontMatter:()=>v,metadata:()=>S,toc:()=>q});var i=s(85893),r=s(11151),t=s(58219),l=s.n(t),n=(s(62316),s(51039)),c=s.n(n),o=(s(82723),s(9487)),d=s.n(o),p=s(41429),m=s.n(p),h=s(5397),u=s.n(h),j=s(4667),f=s.n(j),x=s(9472),y=s.n(x),g=(s(1176),s(12005),s(85162));const v={id:"start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVlFv2zYQ/ivCPbUFbdlu1g16mptkW4CgzWL7Za4x0NLZZieRKknFMQT99+FIypZtrV2eYup49/Hu+z6yBsu3BpIl5LyS6W6QKmm1ynPUsGKgStTcCiUfMkjAWK7to4tbGCG3T59n87/HwKDkmhdoUVOmGiQvEBIotfqKqf1EvxgISUvc7oBBhibVoqTEV3Eav1VCYwaJ1RUyMOkOCw5JDfZQokOhhdxC06x8MBr7UWUHijjPOyO4kT9XFCKjNYUyoGOitLSJl2UuUnfK+KuhnXW3qLA5tsn82Z//PIO59Odlvj1zUSB1LoBVazoatUhTL61A42paq8W6sv5XiOVac8ImLBamW/vBYjE97nDlv5/+Hzz0NIyBORiLRefTWqkcuQQG+MqLkqpteG6wYfDC8wr72t40FwPsKVSorGcvA5RVQR27u/9tunicA4O7+4+L32HVsMCanmQadSV7QLefPm/6Sp1zYbF4uIvUJsrQ0NRaVlgV+exNd3w92TZKF9xCAhm3OLAU1fhWnPPVLZhSSeMnMRmNr4l5q5FbzM5p+C5+92PmzX44epH19lBWxRp155OQFreou0cT0n648cfyMy41pg6oJwWD10GqMtyiHAQ5DUhOg6B3cyGRHjWatvEbpSNTYio2ArMoOICjoUVphJLeSRyRv1v2SNSL8uQOBdqdIuMqlXGdIvdJIH4Zx3XHdJrYgyIJo35pXazSOSRAgValKm+SOK55ZXdKC3toYl6KqzM+Y6m0fVLa8jzyuRxALfg69/Np03lWbHiVU+t31pbmKt1TG3sSDgUCC/GkmiOia5r9oYyNqEkRl1lEyKI3YhNJxAyzt6QGjze6BHzClWGhhtpFlS5oKBQxZEWtSitfd1nDGrlGPa2ov8sVfSYnfT65831rL+fedxzxUWitRQXGnYbrmby67NFxo7ecjrMcWRkCgo34W+VoHJ3KJ/3DZDS5GYw+DMaj+fh98n6c3PwynPx88xdJSciN6uqzO/T/YETb4enTQ5SptCpQWnfhBAvgqbOAgHhWlbSJpl5wQSQ0fuXXq0kwyEWK0mBn+7Tk6Q6jyXAELJCY6JLE8X6/H3L3daj0Ng5bTfz4cHv/aXY/oC3k/KiNR//TcDz2a6Sggssuyv+l5/6LwuKrjcucC2e8DmMd1LmEF3pRJOePgiDQFYMdSTlZQl2vucGFzpuGlr9VqImKq5PcHLsyYej/k4VdADoaMLx5Dkb+Njqv3Yu5vbLloeNAwAKbuwkaUukOeUb2e+T7ra87mFOeU4art0jD2h3TNMXSdmLpwjhzOXqOAYN1eAwFQWi+J/LzPSTwBb4QSOWO7+zIrdeQc7mt+JbifVn6+xd5LHfd",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,S={id:"api/service-api/start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",source:"@site/docs/api/service-api/start-launch-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/start-launch-using-post-1",permalink:"/docs/api/service-api/start-launch-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-launch-using-post-1",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVlFv2zYQ/ivCPbUFbdlu1g16mptkW4CgzWL7Za4x0NLZZieRKknFMQT99+FIypZtrV2eYup49/Hu+z6yBsu3BpIl5LyS6W6QKmm1ynPUsGKgStTcCiUfMkjAWK7to4tbGCG3T59n87/HwKDkmhdoUVOmGiQvEBIotfqKqf1EvxgISUvc7oBBhibVoqTEV3Eav1VCYwaJ1RUyMOkOCw5JDfZQokOhhdxC06x8MBr7UWUHijjPOyO4kT9XFCKjNYUyoGOitLSJl2UuUnfK+KuhnXW3qLA5tsn82Z//PIO59Odlvj1zUSB1LoBVazoatUhTL61A42paq8W6sv5XiOVac8ImLBamW/vBYjE97nDlv5/+Hzz0NIyBORiLRefTWqkcuQQG+MqLkqpteG6wYfDC8wr72t40FwPsKVSorGcvA5RVQR27u/9tunicA4O7+4+L32HVsMCanmQadSV7QLefPm/6Sp1zYbF4uIvUJsrQ0NRaVlgV+exNd3w92TZKF9xCAhm3OLAU1fhWnPPVLZhSSeMnMRmNr4l5q5FbzM5p+C5+92PmzX44epH19lBWxRp155OQFreou0cT0n648cfyMy41pg6oJwWD10GqMtyiHAQ5DUhOg6B3cyGRHjWatvEbpSNTYio2ArMoOICjoUVphJLeSRyRv1v2SNSL8uQOBdqdIuMqlXGdIvdJIH4Zx3XHdJrYgyIJo35pXazSOSRAgValKm+SOK55ZXdKC3toYl6KqzM+Y6m0fVLa8jzyuRxALfg69/Np03lWbHiVU+t31pbmKt1TG3sSDgUCC/GkmiOia5r9oYyNqEkRl1lEyKI3YhNJxAyzt6QGjze6BHzClWGhhtpFlS5oKBQxZEWtSitfd1nDGrlGPa2ov8sVfSYnfT65831rL+fedxzxUWitRQXGnYbrmby67NFxo7ecjrMcWRkCgo34W+VoHJ3KJ/3DZDS5GYw+DMaj+fh98n6c3PwynPx88xdJSciN6uqzO/T/YETb4enTQ5SptCpQWnfhBAvgqbOAgHhWlbSJpl5wQSQ0fuXXq0kwyEWK0mBn+7Tk6Q6jyXAELJCY6JLE8X6/H3L3daj0Ng5bTfz4cHv/aXY/oC3k/KiNR//TcDz2a6Sggssuyv+l5/6LwuKrjcucC2e8DmMd1LmEF3pRJOePgiDQFYMdSTlZQl2vucGFzpuGlr9VqImKq5PcHLsyYej/k4VdADoaMLx5Dkb+Njqv3Yu5vbLloeNAwAKbuwkaUukOeUb2e+T7ra87mFOeU4art0jD2h3TNMXSdmLpwjhzOXqOAYN1eAwFQWi+J/LzPSTwBb4QSOWO7+zIrdeQc7mt+JbifVn6+xd5LHfd",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get list of project launches by filter",permalink:"/docs/api/service-api/get-project-launches-using-get"},next:{title:"Delete specified launches by ids",permalink:"/docs/api/service-api/delete-launches-using-delete"}},N={},q=[{value:"Request",id:"request",level:2}];function L(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Starts launch for specified project"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v1/{projectName}/launch"}),"\n",(0,i.jsx)(a.p,{children:"Starts launch for specified project"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"Start launch request body"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"Array ["})})}),(0,i.jsx)(f(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,i.jsx)(f(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(a.p,{children:"]"})})})]})]})}),(0,i.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `DEBUG`]",schema:{type:"string",enum:["DEFAULT","DEBUG"]}}),(0,i.jsx)(f(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"rerun",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(f(),{collapsible:!1,name:"rerunOf",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of desired launch to rerun"}}),(0,i.jsx)(f(),{collapsible:!1,name:"startTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(g.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(f(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(f(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function O(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}}}]);