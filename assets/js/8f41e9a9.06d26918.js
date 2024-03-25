"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54022],{83221:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>R,contentTitle:()=>v,default:()=>k,frontMatter:()=>E,metadata:()=>D,toc:()=>C});var r=a(85893),i=a(11151),t=a(58219),n=a.n(t),l=(a(62316),a(51039)),d=a.n(l),o=(a(82723),a(9487)),p=a.n(o),c=a(41429),m=a.n(c),h=a(5397),u=a.n(h),x=a(4667),g=a.n(x),y=a(9472),j=a.n(y),f=(a(1176),a(12005),a(85162));const E={id:"create-api-key-using-post",title:"Create new Api Key for current user (DEPRECATED)",description:"Create new Api Key for current user (DEPRECATED)",sidebar_label:"Create new Api Key for current user (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk2P2zYQ/SvEXLIbUFYctD3oVHdjYBdpWte7udQxFrQ4tplIJENS6xUE/fdiKNmW7U2aVieDnI83M+8N3UAQGw/ZAiRah7kIKJPKo0tyo4MzRYEOlhyMRSeCMvpOQga5QxFwYtV7rD96pTezP+8fgIMVTpQY0FHEBrQoETKgcHcSOCgNGVgRtsBBos+dshRyaOLwa6UcSsiCq5CDz7dYCsgaCLWlYEoH3KADDmvjShG6o19+grZddu7ow29G1uRzmkREvPO/gAMVhzqQjbC2UHmsLf3sybAZZlWhoLSTo+8R4qKrcMn34MzqM+aBGuGoYUGhpyBdHw4l+OCU3kBL33nF8cBbo33n+vbN+LKQm9h+eVrH6/T1d6Hfn0FX5B+R8dj+RyX/vRJh1eMXrF8ohvekkI8iXF5zwGdR2oinrus6+fAhkfLVw6vb26wsM+//pghK/tCgORTCh8fK/6dk5PeNQRwb8EM86wd3FAxka1F45PCc5EbiBnXSEzFZGVknvQ4G/Htpnkzjjk2sYu+xZmvjWF45hzowAseu3k1n8+nN5GH67jpWGFB7ZXSntDiT76bn8CSK6gQGCabEsDUkaWt8HDepM4P0aZxS2rTplNmmwqrkC9YeOHh0T3uJV66ADBrrTDC5KdosTRtRha1xKtTR66LaOVrjwsy4IArWxYronBKroqPZPlxH/bWoCur/NgTrL8LN9rYcUFclUZsMgff2y5bDAdGllm6ND4w6xISWjJCxK7VmGlGivGZmzTq87BzwEZfE0oxctLLRaKQM0WRJrcqrLu+igRUKh25SUYcXS7qmfTM/rqzpnraH1XlkqNJrM1T1sIvfaPEe8mR2x6TJqxJ1iHuuXxwiD4NU95UlJ2pjKRRN1Xcnv16UxqFQOWo/RDqxIt8iezt6Q/sksoL6n6XpbrcbiXg7Mm6T9q4+/f3uZvrH/TQhl5YDUapD//NoPO7OiJSl0IM0/0MqJ6056Dvgc0htIZSO+neRax37F/A07pcicMgOb9NBAksOW5JLtoCmWQmPH13RtnT8tUJHw14eCR1HL5Wn38dNcQbqsMfhat7v6Gt2SPwi5P5Q6HqgbeD9Kuh9W2L/FoVEN9gTN1225IFCDBfD2UvY8r3HJM/RhoEtvTYn+6P/B7DqX97SSDJzYkfPjthBBp/gE+Ezsego83jeQCH0phIbsu/S0vcPYF3tZg==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,D={id:"api/service-api/create-api-key-using-post",title:"Create new Api Key for current user (DEPRECATED)",description:"Create new Api Key for current user (DEPRECATED)",source:"@site/docs/api/service-api/create-api-key-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-api-key-using-post",permalink:"/docs/api/service-api/create-api-key-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-api-key-using-post",title:"Create new Api Key for current user (DEPRECATED)",description:"Create new Api Key for current user (DEPRECATED)",sidebar_label:"Create new Api Key for current user (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk2P2zYQ/SvEXLIbUFYctD3oVHdjYBdpWte7udQxFrQ4tplIJENS6xUE/fdiKNmW7U2aVieDnI83M+8N3UAQGw/ZAiRah7kIKJPKo0tyo4MzRYEOlhyMRSeCMvpOQga5QxFwYtV7rD96pTezP+8fgIMVTpQY0FHEBrQoETKgcHcSOCgNGVgRtsBBos+dshRyaOLwa6UcSsiCq5CDz7dYCsgaCLWlYEoH3KADDmvjShG6o19+grZddu7ow29G1uRzmkREvPO/gAMVhzqQjbC2UHmsLf3sybAZZlWhoLSTo+8R4qKrcMn34MzqM+aBGuGoYUGhpyBdHw4l+OCU3kBL33nF8cBbo33n+vbN+LKQm9h+eVrH6/T1d6Hfn0FX5B+R8dj+RyX/vRJh1eMXrF8ohvekkI8iXF5zwGdR2oinrus6+fAhkfLVw6vb26wsM+//pghK/tCgORTCh8fK/6dk5PeNQRwb8EM86wd3FAxka1F45PCc5EbiBnXSEzFZGVknvQ4G/Htpnkzjjk2sYu+xZmvjWF45hzowAseu3k1n8+nN5GH67jpWGFB7ZXSntDiT76bn8CSK6gQGCabEsDUkaWt8HDepM4P0aZxS2rTplNmmwqrkC9YeOHh0T3uJV66ADBrrTDC5KdosTRtRha1xKtTR66LaOVrjwsy4IArWxYronBKroqPZPlxH/bWoCur/NgTrL8LN9rYcUFclUZsMgff2y5bDAdGllm6ND4w6xISWjJCxK7VmGlGivGZmzTq87BzwEZfE0oxctLLRaKQM0WRJrcqrLu+igRUKh25SUYcXS7qmfTM/rqzpnraH1XlkqNJrM1T1sIvfaPEe8mR2x6TJqxJ1iHuuXxwiD4NU95UlJ2pjKRRN1Xcnv16UxqFQOWo/RDqxIt8iezt6Q/sksoL6n6XpbrcbiXg7Mm6T9q4+/f3uZvrH/TQhl5YDUapD//NoPO7OiJSl0IM0/0MqJ6056Dvgc0htIZSO+neRax37F/A07pcicMgOb9NBAksOW5JLtoCmWQmPH13RtnT8tUJHw14eCR1HL5Wn38dNcQbqsMfhat7v6Gt2SPwi5P5Q6HqgbeD9Kuh9W2L/FoVEN9gTN1225IFCDBfD2UvY8r3HJM/RhoEtvTYn+6P/B7DqX97SSDJzYkfPjthBBp/gE+Ezsego83jeQCH0phIbsu/S0vcPYF3tZg==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get List of users Api Keys (DEPRECATED)",permalink:"/docs/api/service-api/get-users-api-keys-using-get"},next:{title:"Delete specified Api Key (DEPRECATED)",permalink:"/docs/api/service-api/delete-api-key-using-delete"}},R={},C=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(s.p,{children:"Create new Api Key for current user (DEPRECATED)"})}),"\n",(0,r.jsx)(d(),{method:"post",path:"/v1/user/{userId}/api-keys"}),"\n",(0,r.jsx)(s.p,{children:"Create new Api Key for current user (DEPRECATED)"}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(m(),{className:"paramsItem",param:{name:"userId",in:"path",description:"userId",required:!0,schema:{type:"integer",format:"int64"}}})})})]}),"\n",(0,r.jsx)(p(),{className:"openapi-tabs__mime",children:(0,r.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(s.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(s.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(s.p,{children:"apiKeyRQ"})})}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(g(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(n(),{label:void 0,id:void 0,children:(0,r.jsxs)(f.default,{label:"201",value:"201",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Created"})}),(0,r.jsx)("div",{children:(0,r.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(g(),{collapsible:!1,name:"api_key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"yyyy-MM-dd'T'HH:mm:ssZ"}}),(0,r.jsx)(g(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,r.jsx)(g(),{collapsible:!1,name:"last_used_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"yyyy-MM-dd"}}),(0,r.jsx)(g(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(g(),{collapsible:!1,name:"user_id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,r.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(u(),{responseExample:'{\n  "api_key": "string",\n  "created_at": "yyyy-MM-dd\'T\'HH:mm:ssZ",\n  "id": 0,\n  "last_used_at": "yyyy-MM-dd",\n  "name": "string",\n  "user_id": 0\n}',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);