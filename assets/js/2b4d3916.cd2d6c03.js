"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86307],{64280:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>b,contentTitle:()=>k,default:()=>N,frontMatter:()=>g,metadata:()=>v,toc:()=>w});var s=n(85893),i=n(11151),t=n(58219),r=n.n(t),l=(n(62316),n(51039)),c=n.n(l),d=(n(82723),n(9487)),o=n.n(d),m=n(41429),p=n.n(m),h=n(5397),u=n.n(h),x=(n(4667),n(9472)),j=n.n(x),f=(n(1176),n(12005),n(85162));const g={id:"get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",sidebar_label:"Get launch names of project",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1P20AQ/SvWnAAtNkHqxadGFaKoiCIopyiHwZ7E2653l91xaGT5v1djOyEhAam+WNp98+btm48WGJcR8hkYbGxRnRfOcnDGUIC5AucpIGtnb0rIYUk8Nea2B95hTfEparu8vvoFCjwGrIkpCFkLFmuCHBbaMIW0sJz2Jwq0hRxeGgprUFBSLIL2kuAoOBYV1Qh5C7z2whc5aLuErlPbFD6431Tw3Q69R64O2PdxgV4aHaiEnENDn2WaCzh6ZyNFub+8uJDfPvnPH6BArCPLcnuWncnvgBVDQHm4ZqrjsWzyiXIfqEAWfQs0kd4/5po4GQqWiA0xcYtkfCAoqIkrNxasLw1XkEO2mmTtjgtdNjBkPYO4TWG1qV8TDOQgcHaFM12eZS02XLmged1l6PWBwQ/kXeB7FxhNMnCBghUGjc9m8G5DNxi4wMYw5FAx+3hAd7/BKiDb1NKiAgQ14uedgq2iw4p8d5F7bxK0ZSLKkhO9SCxRSeWp+DXoTd4LftNVUu3S0KN8D0q1kxLNxaqiGfLOWngmDBSmjbg8m8u1tgvXV1ezoXfWfODbRsf0/iYpXdHUZLmfvLGxsOgba2z6x8ZLkHhTo5ZSxeHk64FeBUYXZCPthE89FhUll+kFqLHUYmqeZa+vryn2t6kLy2wMjdntzberu8ercwnpFEifDOq/pJPJcOZd5BrtTprPu3TPhe0kMP3lzBvUVjh7be3YwTNYTUBBvj/JQwJQMLTxXEHlIgu6bZ8x0lMwXSfHw9KRgpU6Skt+MFzt2yAfWUlHZf6h9VHwCk0jaJCm2EzCf0o4eRhX1Wmy//CjSjZ7xq53028U7hJ0MkAVYUmhVzQgpkVBnndiZZOJ+u1OkXXfdf8AvpYidA==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},k=void 0,v={id:"api/service-api/get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",source:"@site/docs/api/service-api/get-all-launch-names-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-all-launch-names-using-get",permalink:"/docs/api/service-api/get-all-launch-names-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",sidebar_label:"Get launch names of project",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVE1P20AQ/SvWnAAtNkHqxadGFaKoiCIopyiHwZ7E2653l91xaGT5v1djOyEhAam+WNp98+btm48WGJcR8hkYbGxRnRfOcnDGUIC5AucpIGtnb0rIYUk8Nea2B95hTfEparu8vvoFCjwGrIkpCFkLFmuCHBbaMIW0sJz2Jwq0hRxeGgprUFBSLIL2kuAoOBYV1Qh5C7z2whc5aLuErlPbFD6431Tw3Q69R64O2PdxgV4aHaiEnENDn2WaCzh6ZyNFub+8uJDfPvnPH6BArCPLcnuWncnvgBVDQHm4ZqrjsWzyiXIfqEAWfQs0kd4/5po4GQqWiA0xcYtkfCAoqIkrNxasLw1XkEO2mmTtjgtdNjBkPYO4TWG1qV8TDOQgcHaFM12eZS02XLmged1l6PWBwQ/kXeB7FxhNMnCBghUGjc9m8G5DNxi4wMYw5FAx+3hAd7/BKiDb1NKiAgQ14uedgq2iw4p8d5F7bxK0ZSLKkhO9SCxRSeWp+DXoTd4LftNVUu3S0KN8D0q1kxLNxaqiGfLOWngmDBSmjbg8m8u1tgvXV1ezoXfWfODbRsf0/iYpXdHUZLmfvLGxsOgba2z6x8ZLkHhTo5ZSxeHk64FeBUYXZCPthE89FhUll+kFqLHUYmqeZa+vryn2t6kLy2wMjdntzberu8ercwnpFEifDOq/pJPJcOZd5BrtTprPu3TPhe0kMP3lzBvUVjh7be3YwTNYTUBBvj/JQwJQMLTxXEHlIgu6bZ8x0lMwXSfHw9KRgpU6Skt+MFzt2yAfWUlHZf6h9VHwCk0jaJCm2EzCf0o4eRhX1Wmy//CjSjZ7xq53028U7hJ0MkAVYUmhVzQgpkVBnndiZZOJ+u1OkXXfdf8AvpYidA==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Get launches of specified project from DEBUG mode",permalink:"/docs/api/service-api/get-debug-launches-using-get"},next:{title:"Get all unique owners of project launches",permalink:"/docs/api/service-api/get-all-owners-using-get"}},b={},w=[{value:"Request",id:"request",level:2}];function y(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get launch names of project"})}),"\n",(0,s.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/names"}),"\n",(0,s.jsx)(a.p,{children:"Get launch names of project"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsxs)(n,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Path Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,s.jsxs)(n,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,s.jsx)(a.p,{children:"Query Parameters"})})}),(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:(0,s.jsx)(p(),{className:"paramsItem",param:{name:"filter.cnt.name",in:"query",description:"filter.cnt.name",schema:{type:"string"}}})})})]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(r(),{label:void 0,id:void 0,children:(0,s.jsxs)(f.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(n,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,s.jsx)(a.p,{children:"string"})}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(u(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}}}]);