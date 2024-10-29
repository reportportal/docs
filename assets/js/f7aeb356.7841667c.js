"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67689],{50760:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>S,contentTitle:()=>y,default:()=>D,frontMatter:()=>q,metadata:()=>b,toc:()=>N});var a=s(85893),n=s(11151),l=s(58219),r=s.n(l),t=(s(62316),s(51039)),c=s.n(t),p=(s(82723),s(9487)),d=s.n(p),o=s(41429),h=s.n(o),m=s(5397),u=s.n(m),x=s(4667),f=s.n(x),j=s(9472),g=s.n(j),v=(s(1176),s(12005),s(85162));const q={id:"finish-launch-using-put-1",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVm1v2zYQ/ivCfWoL2XK8dED0aV7mYEaDxLUdDFhqDLR0ttlKJEtSSQxB/304krLl2MuK+pNMPvfC5+4esgbLNgbSRyhYJbJtL5PCalkUqGEZg1SomeVSTHJIYc0FN9tbB3wwXGymD4t/LiAGxTQr0aImTzUIViKkweMkhxi4gBQUs1uIIUeTaa7I6zFI4/eKa8whtbrCGEy2xZJBWoPdKXJorOZiA00T72MoLb9iZu/o31thjnE/HmnpwWjs7zLfEeLYb5eS2WeIgfhDYQnJlCp45uhLvhqC191I3BYU6sZ5GL9gVhHSOTnk9wgo8gUvkaoRkpMrOgrRrqk+lqNx4azVfFVZ/y9gmdZsR8xYLE037MRiOdpbuKhvu/+GuzMExWB2xmLZ2VpJWSATEAO+sFJRtDUrDDYxPLGiwnM0N82rgp0J1BJxshfDWuqSWUghZxZ7llCUmWW2MufwKKqSuJ2O5vPxHxDDzWhy6z7mi/vp1H99moSvyd1iPJs9TBfu3/Xo7np8ext2bu4hhr9GsztYNv4Yx73lFoySwngWh4PBaRPdfzpunA/Jh7d6JXTb/H9LxvOzRBZcfDu7IapyhbqzxYXFDeouw1zYXy9dxULRlMaMWTqvq3IML71M5rhB0QuT01vJfNcLA3syMMdU+BNGXhWitdSRUZjxNcc8CjPsGsuiMFwKrzeuNd+Mu2+91/FpwEu0W0n6pirHIelHCsnTRVJ3ZKNJfFJJ3UpWk3hnEINB/dSqX6ULSIFMrcxk0aRJUrPKbqXmdtckTPGTU89QSW2nUltWRN6XS1lztip8LVt3vnvWrCqoGltrlTlxN22xh04nIMQBv2xi2Gd02o5/SmMjoi1iIo8os+gdX0cCMcf8fSTXkc83ep3wIa8cS9nXDqUcqM8lNc2SqMoqH/exhhUyjXpUEeOPS9omoZwdFHfcSsixvu2Lvh/pVoZCE7blbpt7+ZqjjhYEWYHhYHjZuxj0hleLwVX68Zf0cti/Gl78DQcpaRWjobtmLbuz2a3hfxS4JWw0nUS5zKoShXXXQxh/lrnxD5MyrxQZUYol49RTxq/8dkIszXSGwmDHfKRYtsVo2B9AHHqSqp8myfPzc5+53b7UmySYmuR2cj2+m497ZEJijdr47D/2Ly78mpLGlkx0wvzYwJ7XdosvNlEF44J8uxzrMH6P8EQPi/T43vZRaL3zbAhDuIxhK40l07peMYMPumgaWv5eoaZ2Wx5GynVQzg19H5TrVZZ7RYZ3syDq76NO4LOnaO9dseuIDsShXffW9IT5qfjHhPxECl0HDSnBFllOqr+fqWsft7cgPwcPJ88ZOoO3GGUZKtvB0g12JK3ThwXEsApvqFLmhNLsmR477BlS+AJfKEfpTu8Uz63XUDCxqdiG8D4q/f4FUqKl+g==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,b={id:"api/service-api/finish-launch-using-put-1",title:"Finish launch for specified project",description:"Finish launch for specified project",source:"@site/docs/api/service-api/finish-launch-using-put-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/finish-launch-using-put-1",permalink:"/docs/api/service-api/finish-launch-using-put-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"finish-launch-using-put-1",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVm1v2zYQ/ivCfWoL2XK8dED0aV7mYEaDxLUdDFhqDLR0ttlKJEtSSQxB/304krLl2MuK+pNMPvfC5+4esgbLNgbSRyhYJbJtL5PCalkUqGEZg1SomeVSTHJIYc0FN9tbB3wwXGymD4t/LiAGxTQr0aImTzUIViKkweMkhxi4gBQUs1uIIUeTaa7I6zFI4/eKa8whtbrCGEy2xZJBWoPdKXJorOZiA00T72MoLb9iZu/o31thjnE/HmnpwWjs7zLfEeLYb5eS2WeIgfhDYQnJlCp45uhLvhqC191I3BYU6sZ5GL9gVhHSOTnk9wgo8gUvkaoRkpMrOgrRrqk+lqNx4azVfFVZ/y9gmdZsR8xYLE037MRiOdpbuKhvu/+GuzMExWB2xmLZ2VpJWSATEAO+sFJRtDUrDDYxPLGiwnM0N82rgp0J1BJxshfDWuqSWUghZxZ7llCUmWW2MufwKKqSuJ2O5vPxHxDDzWhy6z7mi/vp1H99moSvyd1iPJs9TBfu3/Xo7np8ext2bu4hhr9GsztYNv4Yx73lFoySwngWh4PBaRPdfzpunA/Jh7d6JXTb/H9LxvOzRBZcfDu7IapyhbqzxYXFDeouw1zYXy9dxULRlMaMWTqvq3IML71M5rhB0QuT01vJfNcLA3syMMdU+BNGXhWitdSRUZjxNcc8CjPsGsuiMFwKrzeuNd+Mu2+91/FpwEu0W0n6pirHIelHCsnTRVJ3ZKNJfFJJ3UpWk3hnEINB/dSqX6ULSIFMrcxk0aRJUrPKbqXmdtckTPGTU89QSW2nUltWRN6XS1lztip8LVt3vnvWrCqoGltrlTlxN22xh04nIMQBv2xi2Gd02o5/SmMjoi1iIo8os+gdX0cCMcf8fSTXkc83ep3wIa8cS9nXDqUcqM8lNc2SqMoqH/exhhUyjXpUEeOPS9omoZwdFHfcSsixvu2Lvh/pVoZCE7blbpt7+ZqjjhYEWYHhYHjZuxj0hleLwVX68Zf0cti/Gl78DQcpaRWjobtmLbuz2a3hfxS4JWw0nUS5zKoShXXXQxh/lrnxD5MyrxQZUYol49RTxq/8dkIszXSGwmDHfKRYtsVo2B9AHHqSqp8myfPzc5+53b7UmySYmuR2cj2+m497ZEJijdr47D/2Ly78mpLGlkx0wvzYwJ7XdosvNlEF44J8uxzrMH6P8EQPi/T43vZRaL3zbAhDuIxhK40l07peMYMPumgaWv5eoaZ2Wx5GynVQzg19H5TrVZZ7RYZ3syDq76NO4LOnaO9dseuIDsShXffW9IT5qfjHhPxECl0HDSnBFllOqr+fqWsft7cgPwcPJ88ZOoO3GGUZKtvB0g12JK3ThwXEsApvqFLmhNLsmR477BlS+AJfKEfpTu8Uz63XUDCxqdiG8D4q/f4FUqKl+g==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Delete specified launch by ID",permalink:"/docs/api/service-api/delete-launch-using-delete"},next:{title:"Export specified launch",permalink:"/docs/api/service-api/get-launch-report-using-get"}},S={},N=[{value:"Request",id:"request",level:2}];function L(e){const i={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(i.p,{children:"Finish launch for specified project"})}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v1/{projectName}/launch/{launchId}/finish"}),"\n",(0,a.jsx)(i.p,{children:"Finish launch for specified project"}),"\n",(0,a.jsx)(i.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(i.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(h(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}}}),(0,a.jsx)(h(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)(d(),{className:"openapi-tabs__mime",children:(0,a.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(i.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(i.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(i.p,{children:"finishLaunchRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(i.p,{children:"attributes"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(i.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(i.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,a.jsx)(f(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(i.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"endTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,a.jsx)(f(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSED`, `FAILED`, `STOPPED`, `SKIPPED`, `INTERRUPTED`, `CANCELLED`, `INFO`, `WARN`]",schema:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(r(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(i.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(i.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"link",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "link": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function D(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(L,{...e})}):L(e)}}}]);