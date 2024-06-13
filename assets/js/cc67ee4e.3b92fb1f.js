"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33421],{6954:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>N,contentTitle:()=>b,default:()=>_,frontMatter:()=>v,metadata:()=>q,toc:()=>k});var a=i(85893),t=i(11151),r=i(58219),n=i.n(r),l=(i(62316),i(51039)),d=i.n(l),m=(i(82723),i(9487)),o=i.n(m),c=i(41429),p=i.n(c),u=i(5397),h=i.n(u),g=i(4667),f=i.n(g),x=i(9472),j=i.n(x),y=(i(1176),i(12005),i(85162));const v={id:"get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",sidebar_label:"Get list of fields required for posting ticket",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk2P2zYQ/SvEnJJAtnaDtgedagSb1GixWWSTXgwfaGkksUuRDDnarSHovxejD1u25W6KngRwvh7fvBmqAZJFgGQDu7pYkJfpkzLFIuwDYbVIrSFvtUYP2wisQy9JWbPOIIEC6RHpc742hEV//thFfVSos/AtKFN8uvsKETjpZYWEnus0YGSFkIA6xq0ziEAZSMBJKiGCDEPqlWPbjKfH77XymEFCvsYIQlpiJSFpgPbukBo9RJBbX0nqj375Cdo2OtYPocavHDDU/l6j318Wn7i9WjiQV6aAtt2yc3DWBAxsf39zw5/T1J9/hwiYYjTE1nfxO/5cZJXeSwamCKsuGynSbHiwgT5a3zN+gm8D6uRgG43J7O4vTIm74rmfpHqAqa0qabL7jpuL+zApuTKY/Sl13Qe8hm2ltX0ZAuC16s/sxaqaqdzZruBq2/asXzMJcmbn6sU6a9ffOauax8QSGq72A1TcH71fI+Kk3nUZR4OI5wk5yuBg31mrUZoDn/8K+yJlOxLtPKaSOHMudcDzWfmEJLQKJGwuOl6DGLGI3HrhbCBlCkEqfUK+fIVU2mGZdIuCSkggfr6NdxTi5mTw27hPuQidb0D/PG6U2mtIoHHekk2tbpM4bmRNpfWK9m0snboY6y/orKcH60lq0ecC5sYrudN9L8Z0/eDmstbcgZLIhYt0D6NvBGjqigeQHSEa/LdtBAdEl5vgNxtIcEuFNJlgZOKNyoVBzDB7y3T2eMU54COuDCu79J2X65yWynLztkxVWvd1Nw3sUHr0q5qZ3mzZrExup3KdUnOFtxHH6mEtMpvWFRrq2jQsNJl2C23YtI+14yDmppKKWxX6k18v8EagVYom4CR85WRaoni/vIFoaDWTmsTxy8vLUnbWpfVFPISG+I/1h7v7x7sFh7Di0Yce/c/L29v+jKVYSTMp85/FO793CP+m2GmpumHr4DaDsDfwfAsR7Ij1k5y/ahN1byMobSCOaJqdDPjN67bl4/6N4j5mKrBSr4xic3xX4M2X4RpvxfQxm8X7hPuzN29YFwAslXE+/geCs1vPohg3k9lPARzQnaRoebRKlBn6DlXvs0pTdDSJ5reVb3DYOPxr0rb/AFScGg8=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,q={id:"api/service-api/get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",source:"@site/docs/api/service-api/get-set-of-integration-system-fields-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-set-of-integration-system-fields-using-get",permalink:"/docs/api/service-api/get-set-of-integration-system-fields-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",sidebar_label:"Get list of fields required for posting ticket",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk2P2zYQ/SvEnJJAtnaDtgedagSb1GixWWSTXgwfaGkksUuRDDnarSHovxejD1u25W6KngRwvh7fvBmqAZJFgGQDu7pYkJfpkzLFIuwDYbVIrSFvtUYP2wisQy9JWbPOIIEC6RHpc742hEV//thFfVSos/AtKFN8uvsKETjpZYWEnus0YGSFkIA6xq0ziEAZSMBJKiGCDEPqlWPbjKfH77XymEFCvsYIQlpiJSFpgPbukBo9RJBbX0nqj375Cdo2OtYPocavHDDU/l6j318Wn7i9WjiQV6aAtt2yc3DWBAxsf39zw5/T1J9/hwiYYjTE1nfxO/5cZJXeSwamCKsuGynSbHiwgT5a3zN+gm8D6uRgG43J7O4vTIm74rmfpHqAqa0qabL7jpuL+zApuTKY/Sl13Qe8hm2ltX0ZAuC16s/sxaqaqdzZruBq2/asXzMJcmbn6sU6a9ffOauax8QSGq72A1TcH71fI+Kk3nUZR4OI5wk5yuBg31mrUZoDn/8K+yJlOxLtPKaSOHMudcDzWfmEJLQKJGwuOl6DGLGI3HrhbCBlCkEqfUK+fIVU2mGZdIuCSkggfr6NdxTi5mTw27hPuQidb0D/PG6U2mtIoHHekk2tbpM4bmRNpfWK9m0snboY6y/orKcH60lq0ecC5sYrudN9L8Z0/eDmstbcgZLIhYt0D6NvBGjqigeQHSEa/LdtBAdEl5vgNxtIcEuFNJlgZOKNyoVBzDB7y3T2eMU54COuDCu79J2X65yWynLztkxVWvd1Nw3sUHr0q5qZ3mzZrExup3KdUnOFtxHH6mEtMpvWFRrq2jQsNJl2C23YtI+14yDmppKKWxX6k18v8EagVYom4CR85WRaoni/vIFoaDWTmsTxy8vLUnbWpfVFPISG+I/1h7v7x7sFh7Di0Yce/c/L29v+jKVYSTMp85/FO793CP+m2GmpumHr4DaDsDfwfAsR7Ij1k5y/ahN1byMobSCOaJqdDPjN67bl4/6N4j5mKrBSr4xic3xX4M2X4RpvxfQxm8X7hPuzN29YFwAslXE+/geCs1vPohg3k9lPARzQnaRoebRKlBn6DlXvs0pTdDSJ5reVb3DYOPxr0rb/AFScGg8=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"bug-tracking-system-controller",permalink:"/docs/api/service-api/bug-tracking-system-controller"},next:{title:"Get list of existed issue types in bts",permalink:"/docs/api/service-api/get-allowable-issue-types-using-get"}},N={},k=[{value:"Request",id:"request",level:2}];function D(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Get list of fields required for posting ticket"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/v1/bts/{integrationId}/fields-set"}),"\n",(0,a.jsx)(s.p,{children:"Get list of fields required for posting ticket"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(p(),{className:"paramsItem",param:{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(p(),{className:"paramsItem",param:{name:"issueType",in:"query",description:"issueType",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(y.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"commandName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"definedValues"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"valueId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"valueName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"fieldName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"fieldType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"namedValue"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(f(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(f(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(f(),{collapsible:!1,name:"required",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(f(),{collapsible:!1,name:"value",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'[\n  {\n    "commandName": "string",\n    "definedValues": [\n      {\n        "valueId": "string",\n        "valueName": "string"\n      }\n    ],\n    "description": "string",\n    "fieldName": "string",\n    "fieldType": "string",\n    "id": "string",\n    "namedValue": [\n      {\n        "id": 0,\n        "name": "string"\n      }\n    ],\n    "required": true,\n    "value": [\n      "string"\n    ]\n  }\n]',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(D,{...e})}):D(e)}}}]);