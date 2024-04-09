"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90095],{58270:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>y,contentTitle:()=>b,default:()=>K,frontMatter:()=>F,metadata:()=>N,toc:()=>E});var a=i(85893),n=i(11151),l=i(58219),r=i.n(l),t=(i(62316),i(51039)),c=i.n(t),p=(i(82723),i(9487)),d=i.n(p),m=i(41429),o=i.n(m),h=i(5397),u=i.n(h),x=i(4667),j=i.n(x),f=i(9472),v=i.n(f),g=(i(1176),i(12005),i(85162));const F={id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4jgQ/leiedpdBULZ3kmbp+N6VIe2ajmgOum6PJhkAO8mttd2SlGU//00tgOhcL3V8hTsb374m5nPrsGyjYH0CQpWiWzbY2Yvsl4mhdWyKFDDMgapUDPLpZjkkMKaC262dw7+aLjYTB8XEINimpVoUZO3GgQrEdLgdZJDDFxACorZLcSQo8k0V+TzFKTxe8U15pBaXWEMJttiySCtwe4VOTRWc7GBpokPMZSWXzGz9/TvrTCnuB+PtPRgNPZ3me8Jceq3S8jsL4iB2ENhCcmUKnjmyEu+GoLX3UjcFhTq1nkYv2BWEdI5Oeb3BCjyBS+RahGSkys6CtGuqTqWo3HhrNV8VVn/L2CZ1mxPzFgsTTfsxGI5Oli4qG+7/4b7CwTFYPbGYtnZWklZIBMQA76wUlG0NSsMNjE8s6LCSzQ3zauCXQjUEnG2F8Na6pJZSCFnFnuWUJSZZbYyl/AoqpK4nY7m8/EfEMPtaHLnPuaLh+nUf32ehK/J/WI8mz1OF+7fzej+Znx3F3ZuHyCGv0eze1g2/hinveUWjJLCeBaHg8F5Ez18Pm2cD8mHt3oldNv8f0vG84tEFlx8u7ghqnKFurPFhcUN6i7DXNhfr13FQtGUxoxZOq+rcgwvvUzmuEHRC5PTW8l83wsDezYwp1T4E0ZeFaK11JFRmPE1xzwKM+way6IwXAqvN64134x7aL3X8WnAS7RbSeqmKsch6UcKyfMwqTuy0SQ+qaRuJatJvDOIwaB+btWv0gWkQKZWZrJo0iSpWWW3UnO7bxKm+NmpZ6iktlOpLSsi78ulrDlbFb6WrTvfPWtWFVSNrbXKnLmbtthjpxMQ4oBfNjEcMjpvxz+lsRHRFjGRR5RZ9I6vI4GYY/4+kuvI5xu9TviYV46l7GuHUg7U55KaZklUZZWP+1TDCplGPaqI8aclbZNQzo6KO24l5FTfDkU/jHQrQ6EJ23K3zb18zVFHC4KswHAwvO4NrnuDT4ur63T4Mf046H+6Hv4DRylpFaOhu2Ytu7PZreF/FLglbDSdRLnMqhKFdddDGH+WufEPkzKvFBlRiiXj1FPGr/x2RizNdIbCYMd8pFi2xWjYH0AcepKqnybJbrfrM7fbl3qTBFOT3E1uxvfzcY9MSKxRG5/9L/2rK7+mpLElE50wPzawl7Xd4otNVMG4IN8uxzqM3xM8DyGG9PTe9lFovfNsCEO4jGErjSXTul4xg4+6aBpa/l6hpnZbHkfKdVDODX0fletVlgdFhnezIOrvo07gi6do712x74gOxKFdD9b0hPmp+KeE/EQKXQcNKcEWWU6qf5ipGx+3tyA/Rw9nzxk6g7cYZRkq28HSDXYirf6duApvqFLmhNJsR48dtoMUvsAXylG60zvFc+s1FExsKrYhvI9Kv38BxZ2nsQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,N={id:"api/service-api/finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",source:"@site/docs/api/service-api/finish-launch-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/finish-launch-using-put",permalink:"/docs/api/service-api/finish-launch-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v4jgQ/leiedpdBULZ3kmbp+N6VIe2ajmgOum6PJhkAO8mttd2SlGU//00tgOhcL3V8hTsb374m5nPrsGyjYH0CQpWiWzbY2Yvsl4mhdWyKFDDMgapUDPLpZjkkMKaC262dw7+aLjYTB8XEINimpVoUZO3GgQrEdLgdZJDDFxACorZLcSQo8k0V+TzFKTxe8U15pBaXWEMJttiySCtwe4VOTRWc7GBpokPMZSWXzGz9/TvrTCnuB+PtPRgNPZ3me8Jceq3S8jsL4iB2ENhCcmUKnjmyEu+GoLX3UjcFhTq1nkYv2BWEdI5Oeb3BCjyBS+RahGSkys6CtGuqTqWo3HhrNV8VVn/L2CZ1mxPzFgsTTfsxGI5Oli4qG+7/4b7CwTFYPbGYtnZWklZIBMQA76wUlG0NSsMNjE8s6LCSzQ3zauCXQjUEnG2F8Na6pJZSCFnFnuWUJSZZbYyl/AoqpK4nY7m8/EfEMPtaHLnPuaLh+nUf32ehK/J/WI8mz1OF+7fzej+Znx3F3ZuHyCGv0eze1g2/hinveUWjJLCeBaHg8F5Ez18Pm2cD8mHt3oldNv8f0vG84tEFlx8u7ghqnKFurPFhcUN6i7DXNhfr13FQtGUxoxZOq+rcgwvvUzmuEHRC5PTW8l83wsDezYwp1T4E0ZeFaK11JFRmPE1xzwKM+way6IwXAqvN64134x7aL3X8WnAS7RbSeqmKsch6UcKyfMwqTuy0SQ+qaRuJatJvDOIwaB+btWv0gWkQKZWZrJo0iSpWWW3UnO7bxKm+NmpZ6iktlOpLSsi78ulrDlbFb6WrTvfPWtWFVSNrbXKnLmbtthjpxMQ4oBfNjEcMjpvxz+lsRHRFjGRR5RZ9I6vI4GYY/4+kuvI5xu9TviYV46l7GuHUg7U55KaZklUZZWP+1TDCplGPaqI8aclbZNQzo6KO24l5FTfDkU/jHQrQ6EJ23K3zb18zVFHC4KswHAwvO4NrnuDT4ur63T4Mf046H+6Hv4DRylpFaOhu2Ytu7PZreF/FLglbDSdRLnMqhKFdddDGH+WufEPkzKvFBlRiiXj1FPGr/x2RizNdIbCYMd8pFi2xWjYH0AcepKqnybJbrfrM7fbl3qTBFOT3E1uxvfzcY9MSKxRG5/9L/2rK7+mpLElE50wPzawl7Xd4otNVMG4IN8uxzqM3xM8DyGG9PTe9lFovfNsCEO4jGErjSXTul4xg4+6aBpa/l6hpnZbHkfKdVDODX0fletVlgdFhnezIOrvo07gi6do712x74gOxKFdD9b0hPmp+KeE/EQKXQcNKcEWWU6qf5ipGx+3tyA/Rw9nzxk6g7cYZRkq28HSDXYirf6duApvqFLmhNJsR48dtoMUvsAXylG60zvFc+s1FExsKrYhvI9Kv38BxZ2nsQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Merge set of specified launches in common one",permalink:"/docs/api/service-api/merge-launches-using-post"},next:{title:"launch-controller",permalink:"/docs/api/service-api/launch-controller"}},y={},E=[{value:"Request",id:"request",level:2}];function q(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Finish launch for specified project"})}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v2/{projectName}/launch/{launchId}/finish"}),"\n",(0,a.jsx)(s.p,{children:"Finish launch for specified project"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(o(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}}}),(0,a.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)(d(),{className:"openapi-tabs__mime",children:(0,a.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(s.p,{children:"finishLaunchRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"attributes"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,a.jsx)(j(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"endTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,a.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSED`, `FAILED`, `STOPPED`, `SKIPPED`, `INTERRUPTED`, `CANCELLED`, `INFO`, `WARN`]",schema:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(r(),{label:void 0,id:void 0,children:(0,a.jsxs)(g.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"link",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(j(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,a.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "link": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function K(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}}}]);