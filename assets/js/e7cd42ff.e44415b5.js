"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75739],{74848:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>I,default:()=>R,frontMatter:()=>w,metadata:()=>f,toc:()=>q});var i=s(85893),a=s(11151),n=s(58219),r=s.n(n),l=(s(62316),s(51039)),d=s.n(l),o=(s(82723),s(9487)),c=s.n(o),u=s(41429),h=s.n(u),p=s(5397),m=s.n(p),x=s(4667),g=s.n(x),v=s(9472),j=s.n(v),y=(s(1176),s(12005),s(85162));const w={id:"delete-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",sidebar_label:"Retrieves auth settings",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VEFu2zAQ/IqwpyRgLDdoe9CpRmqgQYM2iJOT4QMtrSy2EsmQq6SGoL8XS8qyHLcnUdTMcjg72g6MRSdJGX1XQAYF1ki4QiKldx4EWOlkg4TOQ7buQGnIwEqqQICWDUIGShPuxhICHL60ymEBGbkWBfi8wkZC1gHt7UhABwJK4xpJcevzR+j7DdO9NdqjZ8bNfM6P3GhCTby8Sq/4cVbUbH9hTizY8Y1IxQINei93OAF6ckrvoO8FkKKat34eLLg1ja2RV48r6BlSoM+dsrzFwO+RJ3fsBsiWquvc6FLt2ljgGnVhjdIEm/fcRySn8BV9wrTEHy1ukCpzND+YThVkkB5AKVPS7sTpHgR4dK+HzrSuhgw66wyZ3NR9lqYd04xTtO/TVrI57yVZ4+jBOJJ18rx4SmI9EPAqnZLbOnp4KMnrAkvZ1tyyisj6s5IPB6wA1G3DLjEQxIDf9AJGVbHglP7NeEo4V4nURcLqkgtVJhqxwOIyMWUSNSeD6FHwUVeBjZm5gLIBNFOGe7lhu/I2nrvuYIvSoVu07PR6M/284mzFq09BY4KGC4UI8nsEhWQoXZqAHJI1dRhEyLHMQ46xkYob5lvLkC/vFY+/1yoC4CyMp05w+wqTtw1qCgkBAbXKUfsQ/qHYwsq8wuRmNgcxJIZvk6Xp29vbTIavM+N26UD16f3d7fLHannNlF4Axy0e/2n2YR73rPHUSD055v9ZP7nC6CjhH0ptLZXmekFXN/wEa5iwuRoIyE5HzkZAZTwxtuu20uOzq/uet19adNztzTHRofeF8rwuICtl7fFM1jhv4OJxmGaXCYh/yx02pd6HH6du+Q0E/Mb92XTsOf8VygJdEBIxizxHSxM2DzlO5DgZvi7vl09L6Pu/VW32mA==",sidebar_class_name:"delete api-method",info_path:"api/service-uat/5.10/reportportal",custom_edit_url:null},I=void 0,f={id:"api/service-uat/5.10/delete-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",source:"@site/docs/api/service-uat/5.10/delete-settings.api.mdx",sourceDirName:"api/service-uat/5.10",slug:"/api/service-uat/5.10/delete-settings",permalink:"/docs/api/service-uat/5.10/delete-settings",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-settings",title:"Retrieves auth settings",description:"Retrieves auth settings",sidebar_label:"Retrieves auth settings",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VEFu2zAQ/IqwpyRgLDdoe9CpRmqgQYM2iJOT4QMtrSy2EsmQq6SGoL8XS8qyHLcnUdTMcjg72g6MRSdJGX1XQAYF1ki4QiKldx4EWOlkg4TOQ7buQGnIwEqqQICWDUIGShPuxhICHL60ymEBGbkWBfi8wkZC1gHt7UhABwJK4xpJcevzR+j7DdO9NdqjZ8bNfM6P3GhCTby8Sq/4cVbUbH9hTizY8Y1IxQINei93OAF6ckrvoO8FkKKat34eLLg1ja2RV48r6BlSoM+dsrzFwO+RJ3fsBsiWquvc6FLt2ljgGnVhjdIEm/fcRySn8BV9wrTEHy1ukCpzND+YThVkkB5AKVPS7sTpHgR4dK+HzrSuhgw66wyZ3NR9lqYd04xTtO/TVrI57yVZ4+jBOJJ18rx4SmI9EPAqnZLbOnp4KMnrAkvZ1tyyisj6s5IPB6wA1G3DLjEQxIDf9AJGVbHglP7NeEo4V4nURcLqkgtVJhqxwOIyMWUSNSeD6FHwUVeBjZm5gLIBNFOGe7lhu/I2nrvuYIvSoVu07PR6M/284mzFq09BY4KGC4UI8nsEhWQoXZqAHJI1dRhEyLHMQ46xkYob5lvLkC/vFY+/1yoC4CyMp05w+wqTtw1qCgkBAbXKUfsQ/qHYwsq8wuRmNgcxJIZvk6Xp29vbTIavM+N26UD16f3d7fLHannNlF4Axy0e/2n2YR73rPHUSD055v9ZP7nC6CjhH0ptLZXmekFXN/wEa5iwuRoIyE5HzkZAZTwxtuu20uOzq/uet19adNztzTHRofeF8rwuICtl7fFM1jhv4OJxmGaXCYh/yx02pd6HH6du+Q0E/Mb92XTsOf8VygJdEBIxizxHSxM2DzlO5DgZvi7vl09L6Pu/VW32mA==",sidebar_class_name:"delete api-method",info_path:"api/service-uat/5.10/reportportal",custom_edit_url:null},sidebar:"service-uat-5.10",previous:{title:"Update auth integration",permalink:"/docs/api/service-uat/5.10/update-auth-integration"},next:{title:"github-endpoint",permalink:"/docs/api/service-uat/5.10/github-endpoint"}},b={},q=[{value:"Request",id:"request",level:2}];function k(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(t.p,{children:"Retrieves auth settings"})}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/settings/auth/{integrationId}"}),"\n",(0,i.jsx)(t.p,{children:"Retrieves auth settings"}),"\n",(0,i.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(t.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(h(),{className:"paramsItem",param:{in:"path",name:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(r(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(t.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(t.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function R(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);