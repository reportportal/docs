"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33814],{44988:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>k,contentTitle:()=>v,default:()=>N,frontMatter:()=>D,metadata:()=>b,toc:()=>q});var r=i(85893),a=i(11151),n=i(58219),t=i.n(n),l=(i(62316),i(51039)),o=i.n(l),c=(i(82723),i(9487)),d=i.n(c),p=i(41429),u=i.n(p),m=i(5397),g=i.n(m),h=i(4667),E=i.n(h),j=i(9472),x=i.n(j),f=(i(1176),i(12005),i(85162));const D={id:"get-user-bid-info-using-get",title:"Get user's registration info (DEPRECATED)",description:"Get user's registration info (DEPRECATED)",sidebar_label:"Get user's registration info (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsCL2sLNW4K7OLTsjbogg1bkLanIAfFZmJttqRKdLrA8H8faDmN27SH+WJA/Hrke2QDpLYB0iXk6DxmijC/rAP6y8wa8rYs0cNKgnXoFWlrZjmksEV6DOi/6nxmNvYxaLO9mz6ABKe8qpDQc8oGjKoQUqhrnYMEbSCFpxr9HiTkGDKvHac8enh8qrXHHFLyNUoIWYGVgrQB2jvOFMhrs4W2XbFzcNYEDGy/vrri3+usv76DBO4DDbH1Irng3yCrppLT9s0s7kEeKtn1b8yIW/LcO+lYByuly3cASdBhkpHe4cC4trZEZdjaNfhOH90nB8OHdKPKgG8HdIckmJZPQXjc6kCRDaHNxoqz2+l8Mb2ZPExvz0FChVTYnqaOEyoghWQ3TjhDMowHCQH97sBX7UtIoXHeks1s2aZJ0qiaCus17dtEOX3C3AKd9TS3nlQpYi6QsFNeq3UZZ3ZIFwnaqLokSKEgcuEk3fzgKwFNXbEw2RFk779qJbwgOmX8mw0kWHVCmVwwMnGmN8Ig5pifC7sREa94C/iIK8fKjnzn5TqnkbZM1IpHldWx7rKBNSqPflLzcJcrNjMXQ1UNR/PB3A44JvOZyG1WV2joQAwLV2WdcPs9uq8dB/FsogwhxJcvJ3gllDpDE3AQPnEqK1Bcj65A9lTzUNMkeX5+HqnOOrJ+m/ShIfkxu5n+vJ9eckgrgXUS0X8ejcfxzdlAlTKDMv8j1VczedkOwr+UuFLpuDq+U06U8RJ2Y0YfOtZeSXklobCB2Kdp1irgoy/blp/jzWHSch1Ylh9sWXM8FnC26G/RueiP07vg/uD+eL52qqzZBVgNhxXo1CGhQJWj70DEmEmWoaNBFF8nDnxZXz6pbfsPROLs5w==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,b={id:"api/service-api/get-user-bid-info-using-get",title:"Get user's registration info (DEPRECATED)",description:"Get user's registration info (DEPRECATED)",source:"@site/docs/api/service-api/get-user-bid-info-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-user-bid-info-using-get",permalink:"/docs/api/service-api/get-user-bid-info-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-bid-info-using-get",title:"Get user's registration info (DEPRECATED)",description:"Get user's registration info (DEPRECATED)",sidebar_label:"Get user's registration info (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1v2zAM/SsCL2sLNW4K7OLTsjbogg1bkLanIAfFZmJttqRKdLrA8H8faDmN27SH+WJA/Hrke2QDpLYB0iXk6DxmijC/rAP6y8wa8rYs0cNKgnXoFWlrZjmksEV6DOi/6nxmNvYxaLO9mz6ABKe8qpDQc8oGjKoQUqhrnYMEbSCFpxr9HiTkGDKvHac8enh8qrXHHFLyNUoIWYGVgrQB2jvOFMhrs4W2XbFzcNYEDGy/vrri3+usv76DBO4DDbH1Irng3yCrppLT9s0s7kEeKtn1b8yIW/LcO+lYByuly3cASdBhkpHe4cC4trZEZdjaNfhOH90nB8OHdKPKgG8HdIckmJZPQXjc6kCRDaHNxoqz2+l8Mb2ZPExvz0FChVTYnqaOEyoghWQ3TjhDMowHCQH97sBX7UtIoXHeks1s2aZJ0qiaCus17dtEOX3C3AKd9TS3nlQpYi6QsFNeq3UZZ3ZIFwnaqLokSKEgcuEk3fzgKwFNXbEw2RFk779qJbwgOmX8mw0kWHVCmVwwMnGmN8Ig5pifC7sREa94C/iIK8fKjnzn5TqnkbZM1IpHldWx7rKBNSqPflLzcJcrNjMXQ1UNR/PB3A44JvOZyG1WV2joQAwLV2WdcPs9uq8dB/FsogwhxJcvJ3gllDpDE3AQPnEqK1Bcj65A9lTzUNMkeX5+HqnOOrJ+m/ShIfkxu5n+vJ9eckgrgXUS0X8ejcfxzdlAlTKDMv8j1VczedkOwr+UuFLpuDq+U06U8RJ2Y0YfOtZeSXklobCB2Kdp1irgoy/blp/jzWHSch1Ylh9sWXM8FnC26G/RueiP07vg/uD+eL52qqzZBVgNhxXo1CGhQJWj70DEmEmWoaNBFF8nDnxZXz6pbfsPROLs5w==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create a restore password request (DEPRECATED)",permalink:"/docs/api/service-api/restore-password-using-post"},next:{title:"Activate invitation and create user in system (DEPRECATED)",permalink:"/docs/api/service-api/create-user-using-post"}},k={},q=[{value:"Request",id:"request",level:2}];function C(e){const s={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(s.p,{children:"Get user's registration info (DEPRECATED)"})}),"\n",(0,r.jsx)(o(),{method:"get",path:"/v1/user/registration"}),"\n",(0,r.jsx)(s.p,{children:"Get user's registration info (DEPRECATED)"}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Query Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(u(),{className:"paramsItem",param:{name:"uuid",in:"query",description:"uuid",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(t(),{label:void 0,id:void 0,children:(0,r.jsxs)(f.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(E(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(E(),{collapsible:!1,name:"isActive",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,r.jsx)(E(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(g(),{responseExample:'{\n  "email": "string",\n  "isActive": true,\n  "uuid": "string"\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}}}]);