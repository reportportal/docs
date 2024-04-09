"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52553],{25053:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>y,contentTitle:()=>k,default:()=>G,frontMatter:()=>x,metadata:()=>N,toc:()=>Q});var r=s(85893),i=s(11151),d=s(58219),t=s.n(d),n=(s(62316),s(51039)),l=s.n(n),o=(s(82723),s(9487)),c=s.n(o),p=s(41429),m=s.n(p),h=s(5397),j=s.n(h),f=s(4667),u=s.n(f),g=s(9472),v=s.n(g),b=(s(1176),s(12005),s(85162));const x={id:"create-dashboard-using-post",title:"Create dashboard for specified project",description:"Create dashboard for specified project",sidebar_label:"Create dashboard for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVU2P2zgM/SsGT22hxJNi24NPOzs7QAdYdGeT9pTmwFhMrNaWVEmeTGD4vy9oKYkznv3IKaafyPeoR7qDgHsPxRok+mpr0MlZaXRwpq7JwUaAseQwKKMfJBRQOsJAv5+wX73S+8c/V19AgEWHDQVynK4DjQ1BAdaZ71SGz/wkQGkOYahAgCRfOmU59QTn6GerHEkogmtJgC8rahCKDsLRclofnNJ76PtNBJMPvxl5ZMR13kh4+RcIYF2kA2PQ2lqVg6z8u2dgN66hQs1F7q7FDkkuzNZR4kacOJktK+BOOG5aUOQnfCYCRGrUVFnf9y8bMQS8NdrH1O9vFlPFkbW8Fvwuf/e6xnsd3DEdWa7gv8QoOaKqdKA9ORCwM67BEEMff4nkmb4k66gc6BQ7rD0JeJ6VRtKe9Czd22xr5HGW7DK6rtdUZWeXZjvjMm+pVDtFMkv2AQH0HEh7ZXS04Q86QvGvRQU8Yd1eFWdXNRQqw5a3xg99YNcWkD8t8m5k1j4/UwIBntzTaQBaV0MBjA2mNHVf5HmHbaiMU+HY52jVROSSrHHh0biAdRZzDfScwm0dL+CULt77Dtua216FYP0k3eMJK4B027BlGQgi4Te9gDOjqZE+GR8yblGGWmbMLHujdpkmkiTfZmaXRb7ZS8IXXpIaM3cDyg6guTLsjg23qmxj3XUHW0JH7rblFq8349crdmyUPgadPZgEDcbm5wgCNh8P9vKyG+6fsbE1TXWmiTtN4mg0ld6Z8bCM7+cfLu/UjNvHh0yasm1Ih2HPpHnEcpjHVGrVWj7EF9SgYr/4GPl10jQBtSpJexodv7VYVpS9n9+ASH7jfhR5fjgc5ji8nRu3z9NRn//xcHf/eXU/4yO9ADZrZP9hvriZLzjGfm9Qj8r879l7fdUFeg65rVFpTj/Q7NI4reFpAQKK6+1/maiNgIrHr1hD123R01dX9z2Hf7bk2Duby3wMTpLK8//LvnnB6bwT4c0y7da32XX5V2mnIOrjaGGASPtlnKDnsaoIJbnRBrqLdWdfOM8lw+RD1IvTiduyJBtGWN7hV5spfXi36cPXGMkwhwf+TuEBCvgG35ikGeQPQzTEO6hR71vcMz6W5d/fi7bIsg==",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},k=void 0,N={id:"api/service-api/versions/5.10/create-dashboard-using-post",title:"Create dashboard for specified project",description:"Create dashboard for specified project",source:"@site/docs/api/service-api/versions/5.10/create-dashboard-using-post.api.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/create-dashboard-using-post",permalink:"/docs/api/service-api/versions/5.10/create-dashboard-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-dashboard-using-post",title:"Create dashboard for specified project",description:"Create dashboard for specified project",sidebar_label:"Create dashboard for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVU2P2zgM/SsGT22hxJNi24NPOzs7QAdYdGeT9pTmwFhMrNaWVEmeTGD4vy9oKYkznv3IKaafyPeoR7qDgHsPxRok+mpr0MlZaXRwpq7JwUaAseQwKKMfJBRQOsJAv5+wX73S+8c/V19AgEWHDQVynK4DjQ1BAdaZ71SGz/wkQGkOYahAgCRfOmU59QTn6GerHEkogmtJgC8rahCKDsLRclofnNJ76PtNBJMPvxl5ZMR13kh4+RcIYF2kA2PQ2lqVg6z8u2dgN66hQs1F7q7FDkkuzNZR4kacOJktK+BOOG5aUOQnfCYCRGrUVFnf9y8bMQS8NdrH1O9vFlPFkbW8Fvwuf/e6xnsd3DEdWa7gv8QoOaKqdKA9ORCwM67BEEMff4nkmb4k66gc6BQ7rD0JeJ6VRtKe9Czd22xr5HGW7DK6rtdUZWeXZjvjMm+pVDtFMkv2AQH0HEh7ZXS04Q86QvGvRQU8Yd1eFWdXNRQqw5a3xg99YNcWkD8t8m5k1j4/UwIBntzTaQBaV0MBjA2mNHVf5HmHbaiMU+HY52jVROSSrHHh0biAdRZzDfScwm0dL+CULt77Dtua216FYP0k3eMJK4B027BlGQgi4Te9gDOjqZE+GR8yblGGWmbMLHujdpkmkiTfZmaXRb7ZS8IXXpIaM3cDyg6guTLsjg23qmxj3XUHW0JH7rblFq8349crdmyUPgadPZgEDcbm5wgCNh8P9vKyG+6fsbE1TXWmiTtN4mg0ld6Z8bCM7+cfLu/UjNvHh0yasm1Ih2HPpHnEcpjHVGrVWj7EF9SgYr/4GPl10jQBtSpJexodv7VYVpS9n9+ASH7jfhR5fjgc5ji8nRu3z9NRn//xcHf/eXU/4yO9ADZrZP9hvriZLzjGfm9Qj8r879l7fdUFeg65rVFpTj/Q7NI4reFpAQKK6+1/maiNgIrHr1hD123R01dX9z2Hf7bk2Duby3wMTpLK8//LvnnB6bwT4c0y7da32XX5V2mnIOrjaGGASPtlnKDnsaoIJbnRBrqLdWdfOM8lw+RD1IvTiduyJBtGWN7hV5spfXi36cPXGMkwhwf+TuEBCvgG35ikGeQPQzTEO6hR71vcMz6W5d/fi7bIsg==",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get all permitted dashboard resources for specified project",permalink:"/docs/api/service-api/versions/5.10/get-all-dashboards-using-get"},next:{title:"Get specified dashboard by ID for specified project",permalink:"/docs/api/service-api/versions/5.10/get-dashboard-using-get"}},y={},Q=[{value:"Request",id:"request",level:2}];function R(e){const a={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(a.p,{children:"Create dashboard for specified project"})}),"\n",(0,r.jsx)(l(),{method:"post",path:"/v1/{projectName}/dashboard"}),"\n",(0,r.jsx)(a.p,{children:"Create dashboard for specified project"}),"\n",(0,r.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(a.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsx)(c(),{className:"openapi-tabs__mime",children:(0,r.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(a.p,{children:"Body"})}),(0,r.jsx)("strong",{className:"openapi-schema__required",children:(0,r.jsx)(a.p,{children:"required"})})]}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,r.jsx)(a.p,{children:"createRQ"})})}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)(u(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(t(),{label:void 0,id:void 0,children:(0,r.jsxs)(b.default,{label:"201",value:"201",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Created"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})})]})}),(0,r.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(j(),{responseExample:'{\n  "id": 0\n}',language:"json"})})]})})})})]})})})})]})}function G(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(R,{...e})}):R(e)}}}]);