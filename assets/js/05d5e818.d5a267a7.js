"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87495],{20943:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>b,contentTitle:()=>N,default:()=>x,frontMatter:()=>m,metadata:()=>a,toc:()=>T});const a=JSON.parse('{"id":"api/service-uat/versions/5.11/update-auth-integration-using-put","title":"Update auth integration","description":"Update auth integration","source":"@site/docs/api/service-uat/versions/5.11/update-auth-integration-using-put.api.mdx","sourceDirName":"api/service-uat/versions/5.11","slug":"/api/service-uat/versions/5.11/update-auth-integration-using-put","permalink":"/docs/api/service-uat/versions/5.11/update-auth-integration-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-auth-integration-using-put","title":"Update auth integration","description":"Update auth integration","sidebar_label":"Update auth integration","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1v2zgQ/SvCnNqCttJgdw861RsE2GC/vIl9CnwYi2ObXYlkSaqOIei/F0PKtmQ3KVAfR/PxZua9oVsIuPVQPAM2YTcpjd6obeMwKKMnpKU1SgdYCTCWkvVBQgGNlRho1oTdgw60TV+WXuntfLkAARYd1hTIceoWNNYERSyxOFgCAUpDARbDDgRI8qVTllOMnRx9aZQjCUVwDQnw5Y5qhKKFwA4F+OCU3oIA0k0dm5AgoJJoQYDHuoJV14lTfXXG+iDfBHHp+UMkMYAcCNgYV2NIpt9+ga5bpXDy4XcjDxwzrtV/BAGl0YF0YBe0tlJlBJB/9uzXDouqUHHV5WkNj/+BOGIx689Ucj7reGtBkecg0riuuIUT6LUxFaGGTgwbng92176ds4u/y/FEg7dG+1T49ubmuut//xw3/CH/8P0eZ2sfHJYhdkneNK6kH/aavl7ypDvilWQdlRgY8QYrTwJeJqWRtCU96fcxWRt5mPTMOe9o3EVaQMaczQYjZEa+BNJeGZ0U8D8doHiziICvWDXDYsycmsLOsOJsE7tkshaQewpB6a3PuXLeHjXT5e2IuR3LgNzXow4bV0EBrXUmmNJUXZGnWONUOHR5g9cdPpI1LsyNC1hly9kiS/kiXKeYUXHgx5Rp0RtsKpbALgTrr1LOj75n3bIjiN5/1Qk4obpmzh/Gh4xHlqGWGaPL3qlNpokkyfeZ2WQJc9aDPgE+45JUm6mLXjY6TZVhdqwEsNgez3K9f8HaVjTSTzoBrymmi2ramCGHh0N8ZcLZYMTSlE1NOhy5xDLBMsqk5+NTYzmIJ1ij4qX6ZPl01ZWASpWkPQ3CZxbLHWW305s+0f3877vJ4mkxBPqJLNbT0tQgeuLweoo83+/3U4wZpsZt8z69z/96uLv/5+l+cju94bLMutThr9OPH5PNGh9q1AMorytoNKWTlAO9hNxWqOLZirjaXhbPcJQFJAKBgGLwnBTjq74SsDM+cFzbrtHT0lVdx+YvDbkDFM+rM8mjfKTyPQX6o3EB8XTO4N1jfxHfZwMA322hN6I+DE4AiP5inKL5Gfup+pdP2U+AGKfoWJ87QklucNruUu1J3+oxx9U7xn2kiFlZkg0DX34CRjcv/ZdY969mbWS8jrjnBxn3CaGJ3ccbFG0tVKi3DW7ZN1Xk3zcqWxi4","sidebar_class_name":"put api-method","info_path":"api/service-uat/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-uat-5.11","previous":{"title":"Create new auth integration","permalink":"/docs/api/service-uat/versions/5.11/create-auth-integration-using-post"},"next":{"title":"Retrieves auth settings","permalink":"/docs/api/service-uat/versions/5.11/delete-settings-using-delete"}}');var n=i(74848),s=i(28453),r=i(57742),o=i.n(r),u=i(78178),p=i.n(u),d=i(19624),c=i.n(d),l=i(96226),g=i.n(l),h=(i(77675),i(19365),i(51107));const m={id:"update-auth-integration-using-put",title:"Update auth integration",description:"Update auth integration",sidebar_label:"Update auth integration",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvCnNqCttJgdw861RsE2GC/vIl9CnwYi2ObXYlkSaqOIei/F0PKtmQ3KVAfR/PxZua9oVsIuPVQPAM2YTcpjd6obeMwKKMnpKU1SgdYCTCWkvVBQgGNlRho1oTdgw60TV+WXuntfLkAARYd1hTIceoWNNYERSyxOFgCAUpDARbDDgRI8qVTllOMnRx9aZQjCUVwDQnw5Y5qhKKFwA4F+OCU3oIA0k0dm5AgoJJoQYDHuoJV14lTfXXG+iDfBHHp+UMkMYAcCNgYV2NIpt9+ga5bpXDy4XcjDxwzrtV/BAGl0YF0YBe0tlJlBJB/9uzXDouqUHHV5WkNj/+BOGIx689Ucj7reGtBkecg0riuuIUT6LUxFaGGTgwbng92176ds4u/y/FEg7dG+1T49ubmuut//xw3/CH/8P0eZ2sfHJYhdkneNK6kH/aavl7ypDvilWQdlRgY8QYrTwJeJqWRtCU96fcxWRt5mPTMOe9o3EVaQMaczQYjZEa+BNJeGZ0U8D8doHiziICvWDXDYsycmsLOsOJsE7tkshaQewpB6a3PuXLeHjXT5e2IuR3LgNzXow4bV0EBrXUmmNJUXZGnWONUOHR5g9cdPpI1LsyNC1hly9kiS/kiXKeYUXHgx5Rp0RtsKpbALgTrr1LOj75n3bIjiN5/1Qk4obpmzh/Gh4xHlqGWGaPL3qlNpokkyfeZ2WQJc9aDPgE+45JUm6mLXjY6TZVhdqwEsNgez3K9f8HaVjTSTzoBrymmi2ramCGHh0N8ZcLZYMTSlE1NOhy5xDLBMsqk5+NTYzmIJ1ij4qX6ZPl01ZWASpWkPQ3CZxbLHWW305s+0f3877vJ4mkxBPqJLNbT0tQgeuLweoo83+/3U4wZpsZt8z69z/96uLv/5+l+cju94bLMutThr9OPH5PNGh9q1AMorytoNKWTlAO9hNxWqOLZirjaXhbPcJQFJAKBgGLwnBTjq74SsDM+cFzbrtHT0lVdx+YvDbkDFM+rM8mjfKTyPQX6o3EB8XTO4N1jfxHfZwMA322hN6I+DE4AiP5inKL5Gfup+pdP2U+AGKfoWJ87QklucNruUu1J3+oxx9U7xn2kiFlZkg0DX34CRjcv/ZdY969mbWS8jrjnBxn3CaGJ3ccbFG0tVKi3DW7ZN1Xk3zcqWxi4",sidebar_class_name:"put api-method",info_path:"api/service-uat/versions/5.11/reportportal",custom_edit_url:null},N=void 0,b={},T=[];function k(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Update auth integration"}),"\n",(0,n.jsx)(o(),{method:"put",path:"/settings/auth/{authType}/{integrationId}",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"Update auth integration"}),"\n",(0,n.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[{name:"authType",in:"path",description:"authType",required:!0,schema:{type:"string",enum:["ad","ldap","saml"]}},{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,n.jsx)(c(),{title:"Body",body:{description:"request",content:{"application/json":{schema:{title:"UpdateAuthRQ",type:"object",properties:{enabled:{type:"boolean"},integrationParameters:{type:"object",properties:{}}}}}},required:!0}}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"AbstractAuthResource",type:"object",properties:{type:{type:"string"}}}}}}}})]})}function x(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(k,{...t})}):k(t)}}}]);