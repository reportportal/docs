"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3801],{12615:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>v,default:()=>A,frontMatter:()=>q,metadata:()=>f,toc:()=>I});var t=s(85893),n=s(11151),i=s(58219),r=s.n(i),m=(s(62316),s(51039)),l=s.n(m),o=(s(82723),s(9487)),c=s.n(o),p=s(41429),u=s.n(p),d=s(5397),h=s.n(d),y=s(4667),g=s.n(y),j=s(9472),x=s.n(j),b=(s(1176),s(12005),s(85162));const q={id:"synchronize-using-post",title:"Synchronizes logged-in GitHub user",description:"Synchronizes logged-in GitHub user",sidebar_label:"Synchronizes logged-in GitHub user",hide_title:!0,hide_table_of_contents:!0,api:"eJy9V01v2zAM/SsBj4NqZwV28WlBUWzFPlo06SnIQZFZW5ssqRLdNgvy3wfaaetkaZs53QIEjm29J5KPFJklkCwiZFMoNJX1/Aht7p22BDMBzmOQpJ09yyGDuLCqDM7qX3gVtS0uzscTEOBlkBUSBmZZgpUVQgbno5rK40u8qTFSIr0P7hZzEKAtZHBTY1iAgKhKrCRkS6CFZ9jcOYPSwmolnqOqqXRBk8Y4Hc4ebxevUkcK2hYvMBdBWprw4oOpAuY6oKKroN+C7DpgLN8gdmumifuJ9p94HV0dFJ7l8Q8yWhgGXLtQgQC898blCBmFGndsJUOQjaKEVdxlwks2eGcjskf/0wrOQ7SklaSeaf6Wia2MRkvn1ryO3mWKCpizM9L8GcJtvJv/QEUb8BxJ6n7Q5tLDYR+0VdpL02fTOmIYPemnnU0Ol/MZ0rdSeAf9gartYDxAyB1sPTSaCXgo6KYAj4dDvuQYVdCeWfkA+AIClLOElvjtu/QdXzqsmpqyP39oZyeu8gb51+UYxNauAnzgxscyMbrCGGWBO+ufPwJy9AHbTMmupYkotiwcP3XOODCuKDA/0nbwSdPnej7gUIGACql03Ge9i40VkkrIII3RpRWmbXtOO02YI4fh9qHx1sHw8jTHyiUBvQvEX2kS7dJaEnA0tb123ZBcNusumnWwbXb7ctC+HVyNJoPcqbpCS00U11GXqon6Wvdx7RnEp2slNVsU2ycft0yClQCjFdqIHfjIS1Xi4DgZrolOL76dHE3Gk66hH9HLKlGOz/DW65LIZ2l6d3eXyIYhcaFI1/Qx/Xp2cvp9fHp0nAx5Ww5Z6+GH5P379hkHvZK268k+om0E7DFBCO8p9UZqy9SNicu1nlOI0TVqg1iPXKxjR9WZgJIzIJvCcjmXEa+CWa34cVsvrHWuo5ybTr79xMVLQ9etNDUbBlyh+4GfP6v+nqw7Y/w9enOY6oN/mJ96Y5+dmPowdoekXviNAWcfhu1uti/mgATYmED2Aaw7/z5L9+jXB9C86vSMb4JmSsims5WAEmWOoanMlnqkFHrqoLgnMfDxkG/+PK1WvwGeq6Uj",sidebar_class_name:"post api-method",info_path:"api/service-uat/reportportal",custom_edit_url:null},v=void 0,f={id:"api/service-uat/synchronize-using-post",title:"Synchronizes logged-in GitHub user",description:"Synchronizes logged-in GitHub user",source:"@site/docs/api/service-uat/synchronize-using-post.api.mdx",sourceDirName:"api/service-uat",slug:"/api/service-uat/synchronize-using-post",permalink:"/docs/api/service-uat/synchronize-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"synchronize-using-post",title:"Synchronizes logged-in GitHub user",description:"Synchronizes logged-in GitHub user",sidebar_label:"Synchronizes logged-in GitHub user",hide_title:!0,hide_table_of_contents:!0,api:"eJy9V01v2zAM/SsBj4NqZwV28WlBUWzFPlo06SnIQZFZW5ssqRLdNgvy3wfaaetkaZs53QIEjm29J5KPFJklkCwiZFMoNJX1/Aht7p22BDMBzmOQpJ09yyGDuLCqDM7qX3gVtS0uzscTEOBlkBUSBmZZgpUVQgbno5rK40u8qTFSIr0P7hZzEKAtZHBTY1iAgKhKrCRkS6CFZ9jcOYPSwmolnqOqqXRBk8Y4Hc4ebxevUkcK2hYvMBdBWprw4oOpAuY6oKKroN+C7DpgLN8gdmumifuJ9p94HV0dFJ7l8Q8yWhgGXLtQgQC898blCBmFGndsJUOQjaKEVdxlwks2eGcjskf/0wrOQ7SklaSeaf6Wia2MRkvn1ryO3mWKCpizM9L8GcJtvJv/QEUb8BxJ6n7Q5tLDYR+0VdpL02fTOmIYPemnnU0Ol/MZ0rdSeAf9gartYDxAyB1sPTSaCXgo6KYAj4dDvuQYVdCeWfkA+AIClLOElvjtu/QdXzqsmpqyP39oZyeu8gb51+UYxNauAnzgxscyMbrCGGWBO+ufPwJy9AHbTMmupYkotiwcP3XOODCuKDA/0nbwSdPnej7gUIGACql03Ge9i40VkkrIII3RpRWmbXtOO02YI4fh9qHx1sHw8jTHyiUBvQvEX2kS7dJaEnA0tb123ZBcNusumnWwbXb7ctC+HVyNJoPcqbpCS00U11GXqon6Wvdx7RnEp2slNVsU2ycft0yClQCjFdqIHfjIS1Xi4DgZrolOL76dHE3Gk66hH9HLKlGOz/DW65LIZ2l6d3eXyIYhcaFI1/Qx/Xp2cvp9fHp0nAx5Ww5Z6+GH5P379hkHvZK268k+om0E7DFBCO8p9UZqy9SNicu1nlOI0TVqg1iPXKxjR9WZgJIzIJvCcjmXEa+CWa34cVsvrHWuo5ybTr79xMVLQ9etNDUbBlyh+4GfP6v+nqw7Y/w9enOY6oN/mJ96Y5+dmPowdoekXviNAWcfhu1uti/mgATYmED2Aaw7/z5L9+jXB9C86vSMb4JmSsims5WAEmWOoanMlnqkFHrqoLgnMfDxkG/+PK1WvwGeq6Uj",sidebar_class_name:"post api-method",info_path:"api/service-uat/reportportal",custom_edit_url:null},sidebar:"serviceUat",previous:{title:"github-endpoint",permalink:"/docs/api/service-uat/github-endpoint"},next:{title:"o-auth-configuration-endpoint",permalink:"/docs/api/service-uat/o-auth-configuration-endpoint"}},k={},I=[{value:"Request",id:"request",level:2}];function N(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Synchronizes logged-in GitHub user"})}),"\n",(0,t.jsx)(l(),{method:"post",path:"/sso/me/github/synchronize"}),"\n",(0,t.jsx)(a.p,{children:"Synchronizes logged-in GitHub user"}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Query Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{children:[(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.approved",in:"query",schema:{type:"boolean"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.authorities[0].authority",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.grantType",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.redirectUri",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.refresh",in:"query",schema:{type:"boolean"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.refreshTokenRequest.grantType",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.resourceIds",in:"query",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"OAuth2Request.responseTypes",in:"query",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"authenticated",in:"query",schema:{type:"boolean"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"authorities[0].authority",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"clientOnly",in:"query",schema:{type:"boolean"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"credentials",in:"query",schema:{type:"object"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"details",in:"query",schema:{type:"object"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"name",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"principal",in:"query",schema:{type:"object"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"userAuthentication.authenticated",in:"query",schema:{type:"boolean"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"userAuthentication.authorities[0].authority",in:"query",schema:{type:"string"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"userAuthentication.credentials",in:"query",schema:{type:"object"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"userAuthentication.details",in:"query",schema:{type:"object"}}}),(0,t.jsx)(u(),{className:"paramsItem",param:{name:"userAuthentication.principal",in:"query",schema:{type:"object"}}})]})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(r(),{label:void 0,id:void 0,children:(0,t.jsxs)(b.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,t.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function A(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(N,{...e})}):N(e)}}}]);