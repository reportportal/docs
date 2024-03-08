"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79356],{13256:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>q,contentTitle:()=>b,default:()=>V,frontMatter:()=>y,metadata:()=>N,toc:()=>E});var r=s(85893),i=s(11151),t=s(58219),n=s.n(t),l=(s(62316),s(51039)),c=s.n(l),o=(s(82723),s(9487)),d=s.n(o),p=s(41429),m=s.n(p),h=s(5397),u=s.n(h),g=s(4667),j=s.n(g),x=s(9472),v=s.n(x),f=(s(1176),s(12005),s(85162));const y={id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAW7abRVud6m636AJBurHXlzpGQUtjiQlFKiRlryHo34uhZEtaOY1PFjWceTN874kVOJ5aiLYgdTqJtXJGS4kGdgx0gYY7odVjAhHEBrnDDzp9UM6cN1ao9Onv9fO/c2BQcMNzdGgoUwWK5wgRFEZ/wdh9pCcGQtESdxkwSNDGRhSUexRn8FspDCYQOVMiAxtnmHOIKnDngtJaZ4RKoa53TTBa97tOzhQxzHtFvPoEDKg3VI7CeFFIEfvWwi+WYqt+GeEk1Vnz43VzB2oLkpcqzjalSICBEznSrFpsek+d0EQMTc8JtJTyIChjl/pPev7RpmaK47ZrBsJh7gGMXr+e7Wbz+EegD4FD6wLaFuiTwiRwmbCB1CnUrN/QuBwDiUeUtyqhKnMaCBqjDTA4caP8QR+0x7EvKcoZHlOzB+64BAal+qr0ScGuZpCjtTy91WU72RtVD9rk3EEECXc48VE1g/I2+tqPa0gpv2ALrWwz58VsPubOvedOMuTNu/Ddbap4SbRblvas4tX6h8f7XbyEOMHCYOwRRAcuLTJ4mcQ6wRTVpCX9ZK+T86TV2pDrt3rxp80AXxwqK7RqpPoVzxD9b24GRy7L1zVIfDm6TJM1FNr6/kjcEYTHeVj1NF2HUqch0oiAgUVzvPhEaSREQLFOx1rWURhWvHSZNsKd65AXYtTLCgtt3JM2jsugyeURGsH3shnsJV1zqAdeSmJL5lxhR+meLrEdmykQWBtPJL0iGrPkL21dQFMKuEoCQha8EYdAISaYvCXdNXiD14A7XAnmemp8VOGDpkITD3Y0qrhs6m4r2CM3aJYljXi7679eEx2b1vtBV261DXnW0nMTBEQzMr9VZ6EPLzwvGqe6OFZLr06WnfV0kuwbSG+18Y2rPVzF3oU0GofFbPF+MvtpMvvleb6IZr9G7++mi5/v/oGLrvv1yV160hsM+Dt0uYx/+fQYJDouc1TOu38rbx67Xq/rsqBNRImcC+rANiu/jY6JgRQxKtsf1bLgcYbBYjoj+J7hdAJRGJ5Opyn3b6fapGG71YYfHu8fPq4fJrSlZkDyaNDfTeez6ZzWSGE5V70yA1EPmr4evMMXFxaSC+Ud0nhFNCLdwpG+29Hw09s6hFfqjkFGso62UFV7bnFjZF3T8rcSDXFy1+nOMzQRlv53jvUK1dVI4c2qNeS3wRDATeDtIlfnnhcBa62rn6AmuWbIEzQ9c7tv6k6eKU+XYXQJqNllxzKOsXC9WDL+gePRzQcY7Nt7R64TCjP8RHcFfoIIPsNnAql9+16cfr0CyVVaNjpoytLvP5eHQIo=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},b=void 0,N={id:"api/service-api/create-log-entry-using-post-1",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post-1",permalink:"/docs/api/service-api/create-log-entry-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGO2zYQ/RVhTklAW7abRVud6m636AJBurHXlzpGQUtjiQlFKiRlryHo34uhZEtaOY1PFjWceTN874kVOJ5aiLYgdTqJtXJGS4kGdgx0gYY7odVjAhHEBrnDDzp9UM6cN1ao9Onv9fO/c2BQcMNzdGgoUwWK5wgRFEZ/wdh9pCcGQtESdxkwSNDGRhSUexRn8FspDCYQOVMiAxtnmHOIKnDngtJaZ4RKoa53TTBa97tOzhQxzHtFvPoEDKg3VI7CeFFIEfvWwi+WYqt+GeEk1Vnz43VzB2oLkpcqzjalSICBEznSrFpsek+d0EQMTc8JtJTyIChjl/pPev7RpmaK47ZrBsJh7gGMXr+e7Wbz+EegD4FD6wLaFuiTwiRwmbCB1CnUrN/QuBwDiUeUtyqhKnMaCBqjDTA4caP8QR+0x7EvKcoZHlOzB+64BAal+qr0ScGuZpCjtTy91WU72RtVD9rk3EEECXc48VE1g/I2+tqPa0gpv2ALrWwz58VsPubOvedOMuTNu/Ddbap4SbRblvas4tX6h8f7XbyEOMHCYOwRRAcuLTJ4mcQ6wRTVpCX9ZK+T86TV2pDrt3rxp80AXxwqK7RqpPoVzxD9b24GRy7L1zVIfDm6TJM1FNr6/kjcEYTHeVj1NF2HUqch0oiAgUVzvPhEaSREQLFOx1rWURhWvHSZNsKd65AXYtTLCgtt3JM2jsugyeURGsH3shnsJV1zqAdeSmJL5lxhR+meLrEdmykQWBtPJL0iGrPkL21dQFMKuEoCQha8EYdAISaYvCXdNXiD14A7XAnmemp8VOGDpkITD3Y0qrhs6m4r2CM3aJYljXi7679eEx2b1vtBV261DXnW0nMTBEQzMr9VZ6EPLzwvGqe6OFZLr06WnfV0kuwbSG+18Y2rPVzF3oU0GofFbPF+MvtpMvvleb6IZr9G7++mi5/v/oGLrvv1yV160hsM+Dt0uYx/+fQYJDouc1TOu38rbx67Xq/rsqBNRImcC+rANiu/jY6JgRQxKtsf1bLgcYbBYjoj+J7hdAJRGJ5Opyn3b6fapGG71YYfHu8fPq4fJrSlZkDyaNDfTeez6ZzWSGE5V70yA1EPmr4evMMXFxaSC+Ud0nhFNCLdwpG+29Hw09s6hFfqjkFGso62UFV7bnFjZF3T8rcSDXFy1+nOMzQRlv53jvUK1dVI4c2qNeS3wRDATeDtIlfnnhcBa62rn6AmuWbIEzQ9c7tv6k6eKU+XYXQJqNllxzKOsXC9WDL+gePRzQcY7Nt7R64TCjP8RHcFfoIIPsNnAql9+16cfr0CyVVaNjpoytLvP5eHQIo=",sidebar_class_name:"post api-method",info_path:"api/service-api/report-portal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post-1"},next:{title:"Get next or previous log in test item",permalink:"/docs/api/service-api/get-error-page-using-get"}},q={},E=[{value:"Request",id:"request",level:2}];function R(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(a.p,{children:"Create log"})}),"\n",(0,r.jsx)(c(),{method:"post",path:"/v1/{projectName}/log/entry"}),"\n",(0,r.jsx)(a.p,{children:"Create log"}),"\n",(0,r.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(a.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsx)(d(),{className:"openapi-tabs__mime",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(a.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(a.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(a.p,{children:"createLogRQ"})})}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(a.p,{children:"file"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(a.p,{children:"object"})})]})}),(0,r.jsx)("div",{style:{marginLeft:"1rem"},children:(0,r.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(j(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,r.jsx)(j(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,r.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(j(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,r.jsx)(j(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(n(),{label:void 0,id:void 0,children:(0,r.jsxs)(f.default,{label:"201",value:"201",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Created"})}),(0,r.jsx)("div",{children:(0,r.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(u(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function V(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(R,{...e})}):R(e)}}}]);