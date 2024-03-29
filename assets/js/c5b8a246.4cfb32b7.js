"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5278],{88587:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>y,default:()=>N,frontMatter:()=>g,metadata:()=>S,toc:()=>Q});var i=a(85893),r=a(11151),l=a(58219),n=a.n(l),t=(a(62316),a(51039)),c=a.n(t),p=(a(82723),a(9487)),o=a.n(p),d=a(41429),m=a.n(d),h=a(5397),u=a.n(h),j=a(4667),x=a.n(j),f=a(9472),b=a.n(f),v=(a(1176),a(12005),a(85162));const g={id:"start-launch-using-post",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVsFy2zYQ/RXOnpIMKcqqkk54qmKrrWc8iWtZlyo6QORKQkoCDABa1nD4750FQIqS2KQ+WcBi92H3vQfWYNhOQ7KCnFUi3UdMH0UapVIYJfMcFaxDkCUqZrgU9xkkoA1T5sFGLzUXu8cvi2cIoWSKFWhQUbYaBCsQEiiV/Iap+Uy/QuCClpjZQwgZ6lTxktJexSn8XnGFGSRGVRiCTvdYMEhqMMcSLQbFxQ6aZu2CUZtPMjtSxHneBYEN3N0CHxlsKDQEuiQKQ4dYWeY8tXeMv2k6WfeLcpNjm8zd/OmvM5grd9/QNeeZF0h982Dlhq5GLVLUScNR25rGKL6pjPvlY5lSjLBxg4Xu1743WMy6E7b8j9P/g8eBhoWgj9pg0dvaSJkjExACvrKipGpblmtsQnhheYVDbW+aiwEOFCpkNnA2BBRVQR27m/8+Wz4Qde7mn5Z/wLoJPWsGkilUlRgA3W592Q6VOufCcnl/F8htkKGmqbWsMDJw2Zv++AaybaUqmIEEMmYwMhTVuFac89Uu6FIK7SYxGd9cE/NWITOYndPwXfzu58xb/HT0PBvsoaiKDareFhcGd6j6V+PCfJi6a7kZlwpTC9SRIoTXKJUZ7lBEXk4RySnyetcXEhlQo24bv5Uq0CWmfMsxC7wDWBoaFJpL4ZzEEvmHZTuiXpQndyjQ7CXZVim17RS5TwLxyySue6bTxA4USRjVS+tilcohAQo0MpV5k8RxzSqzl4qbYxOzkl/d8QlLqcyjVIblgctlASrONrmbT5vOsWLLqpxavzem1FfpHtvYk3AoEEIfT6rpEF3T7E+pTUBNCpjIAkIWvOHbQCBmmL0lNTi8wSXgE64MCzlSNqq0QSMuiSFralVaubqrGjbIFKpZRf1drWmbnPTp5M7z1l7Ova8bcSe01qI8407DdUxeX/aoO+gsp+csHSt9gLcR96p0xtGrfNI/TMaTaTT+JZp8fB7/mkw/JO+no+nHyd8kJS62sq/P/tD/gxFth2eP90Em06pAYeyD4y2ApdYCPOJFVdIhmnrBOJFQu5XfriYRQs5TFBp7x2clS/cYTEZjCD2JiS5JHB8OhxGzuyOpdrE/quOH+9v558U8oiPk/Ki0Q/9+dHPj1khBBRN9lP9Lz8MPhcFXE5c549Z4Lcbaq3MFLxMIITn/KPACXYewJyknK6jrDdO4VHnT0PL3ChVRcX2Sm2VXxjX9f7KwC0CdAcObJ2/kb4Pz2oOY2ydbHHsOBKFncz9BQyrdI8vIfju+37q60TPlOWW4+hZpwvbELE2xNL1YejDOXM5/jG38x5AXhGIHIj87QAJf4SuBlPb61o7seg05E7uK7SjelaW/fwEhPXmp",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,S={id:"api/service-api/start-launch-using-post",title:"Starts launch for specified project",description:"Starts launch for specified project",source:"@site/docs/api/service-api/start-launch-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/start-launch-using-post",permalink:"/docs/api/service-api/start-launch-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-launch-using-post",title:"Starts launch for specified project",description:"Starts launch for specified project",sidebar_label:"Starts launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVsFy2zYQ/RXOnpIMKcqqkk54qmKrrWc8iWtZlyo6QORKQkoCDABa1nD4750FQIqS2KQ+WcBi92H3vQfWYNhOQ7KCnFUi3UdMH0UapVIYJfMcFaxDkCUqZrgU9xkkoA1T5sFGLzUXu8cvi2cIoWSKFWhQUbYaBCsQEiiV/Iap+Uy/QuCClpjZQwgZ6lTxktJexSn8XnGFGSRGVRiCTvdYMEhqMMcSLQbFxQ6aZu2CUZtPMjtSxHneBYEN3N0CHxlsKDQEuiQKQ4dYWeY8tXeMv2k6WfeLcpNjm8zd/OmvM5grd9/QNeeZF0h982Dlhq5GLVLUScNR25rGKL6pjPvlY5lSjLBxg4Xu1743WMy6E7b8j9P/g8eBhoWgj9pg0dvaSJkjExACvrKipGpblmtsQnhheYVDbW+aiwEOFCpkNnA2BBRVQR27m/8+Wz4Qde7mn5Z/wLoJPWsGkilUlRgA3W592Q6VOufCcnl/F8htkKGmqbWsMDJw2Zv++AaybaUqmIEEMmYwMhTVuFac89Uu6FIK7SYxGd9cE/NWITOYndPwXfzu58xb/HT0PBvsoaiKDareFhcGd6j6V+PCfJi6a7kZlwpTC9SRIoTXKJUZ7lBEXk4RySnyetcXEhlQo24bv5Uq0CWmfMsxC7wDWBoaFJpL4ZzEEvmHZTuiXpQndyjQ7CXZVim17RS5TwLxyySue6bTxA4USRjVS+tilcohAQo0MpV5k8RxzSqzl4qbYxOzkl/d8QlLqcyjVIblgctlASrONrmbT5vOsWLLqpxavzem1FfpHtvYk3AoEEIfT6rpEF3T7E+pTUBNCpjIAkIWvOHbQCBmmL0lNTi8wSXgE64MCzlSNqq0QSMuiSFralVaubqrGjbIFKpZRf1drWmbnPTp5M7z1l7Ova8bcSe01qI8407DdUxeX/aoO+gsp+csHSt9gLcR96p0xtGrfNI/TMaTaTT+JZp8fB7/mkw/JO+no+nHyd8kJS62sq/P/tD/gxFth2eP90Em06pAYeyD4y2ApdYCPOJFVdIhmnrBOJFQu5XfriYRQs5TFBp7x2clS/cYTEZjCD2JiS5JHB8OhxGzuyOpdrE/quOH+9v558U8oiPk/Ki0Q/9+dHPj1khBBRN9lP9Lz8MPhcFXE5c549Z4Lcbaq3MFLxMIITn/KPACXYewJyknK6jrDdO4VHnT0PL3ChVRcX2Sm2VXxjX9f7KwC0CdAcObJ2/kb4Pz2oOY2ydbHHsOBKFncz9BQyrdI8vIfju+37q60TPlOWW4+hZpwvbELE2xNL1YejDOXM5/jG38x5AXhGIHIj87QAJf4SuBlPb61o7seg05E7uK7SjelaW/fwEhPXmp",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"launch-async-controller",permalink:"/docs/api/service-api/launch-async-controller"},next:{title:"Merge set of specified launches in common one",permalink:"/docs/api/service-api/merge-launches-using-post"}},q={},Q=[{value:"Request",id:"request",level:2}];function k(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Starts launch for specified project"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v2/{projectName}/launch"}),"\n",(0,i.jsx)(s.p,{children:"Starts launch for specified project"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Start launch request body"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"attributes"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,i.jsx)(x(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"mode",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`DEFAULT`, `DEBUG`]",schema:{type:"string",enum:["DEFAULT","DEBUG"]}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"rerun",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(x(),{collapsible:!1,name:"rerunOf",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of desired launch to rerun"}}),(0,i.jsx)(x(),{collapsible:!1,name:"startTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(n(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);