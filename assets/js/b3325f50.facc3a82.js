"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28147],{51824:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>G,frontMatter:()=>f,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get-1","title":"Get list of fields required for posting ticket in concrete integration","description":"Get list of fields required for posting ticket in concrete integration","source":"@site/docs/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get-1.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get-1","permalink":"/docs/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-set-of-integration-system-fields-using-get-1","title":"Get list of fields required for posting ticket in concrete integration","description":"Get list of fields required for posting ticket in concrete integration","sidebar_label":"Get list of fields required for posting ticket in concrete integration","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU2P2zYQ/SvEnJJAtnaDtgedYhSbrZEgWcSbXAyjoKWRxC5FKuRot4ag/x4MJduS7U2CtCdB5Hy8Gb430wLJwkOyhm1TzMjJ9EGZYuZ3nrCapdaQs1qjg00EtkYnSVmzzCCBAmmF9DFfGsKiP18Fr7cKdeY/e2WK25v7v68hglo6WSGh40wtGFkhJKCOnssMIlAGEqgllRBBhj51qua7C5YOvzbKYQYJuQYj8GmJlYSkBdrVh9DoIILcukpSf/THb9B10TG/9w3es8OQ+2uDbneefGT2w8SenDLFJE3t7D+Y0gf++16RU7ufz7RhY19b49Hz/eurK/5Mg398BxHwc6Ihvn0Vv+LPWVTpnOQWKMIqRCNFmi/urKe31vWvO8G3BjU5iOBR6gaZMUNQu+XCmAeOOUSqB5phrgxmX9ja/wyGhdb2aXCAH0UPIJipZx0bAIZGX+hn10WQc5XPGAy3gRGXbtXlnMeGHS631mqU5oDouz04Q9n1UDOsHaaSOHIutcdTXt0iCa08CZuLgNyLPRaRWydq60mZQpBKH5CEMiK1JnVIKEa6gwgqpNIO0g+iphISiB+v4y35uB3xt4vbiWS7uE8888HTo3vcz4LGaUiAncmmVndJHLeyodI6RbsulrU6E8onrK2jO+tIatHHCqRzSm51//j7cAPNZKN5BJREtT8Ld7e3jQBNUzGh2RCiwX7TRXBAdK6sv6wnwVIX0mSCkYkXKhcGMcPsJTe9xytOAR9xZVjZuQtWdTCaK8tPvOFWpU2fd93CFqVDt2i47+vN+HrFOu5LHxsdaDMUFOQemBeMeEyBMrkdi2zc3Wdavy9lcbcUmU2bCg3tScIzRqZhxgzzb9XU7MTtraTi1/b9yZuzkiPQKkXjceS+qGVaong9v4JoYAtXk8Tx09PTXIbbuXVFPLj6+P3yz5sPq5sZu7C00Pke/e/z66v5NZ8x5ytpRmn+N5VMGnZ4AMJ/Ka61VEHtoYx2UNAaHnlHbompmUy3QHK6+UY62kRQWk8coG230uNnp7uOj/s9xozJlGdNPDMa2uNGgBefhmpfivHCuwj/AXcne3EYXwBMyr0S/wOCk6ovothPSrMbAzigm4TgdfxLSKbP8Qs4xgE6HiUlygxd6E1vsUhTrGnky7uZ+3iYt7c399B13wCgr1gI","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get ticket from the bts integration","permalink":"/docs/api/service-api/versions/5.10/get-ticket-using-get"},"next":{"title":"Get list of allowable issue types for bug tracking system","permalink":"/docs/api/service-api/versions/5.10/get-allowable-issue-types-using-get-1"}}');var s=i(74848),r=i(28453),o=i(57742),a=i.n(o),d=i(78178),c=i.n(d),p=i(19624),g=i.n(p),u=i(96226),l=i.n(u),m=(i(77675),i(19365),i(51107));const f={id:"get-set-of-integration-system-fields-using-get-1",title:"Get list of fields required for posting ticket in concrete integration",description:"Get list of fields required for posting ticket in concrete integration",sidebar_label:"Get list of fields required for posting ticket in concrete integration",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU2P2zYQ/SvEnJJAtnaDtgedYhSbrZEgWcSbXAyjoKWRxC5FKuRot4ag/x4MJduS7U2CtCdB5Hy8Gb430wLJwkOyhm1TzMjJ9EGZYuZ3nrCapdaQs1qjg00EtkYnSVmzzCCBAmmF9DFfGsKiP18Fr7cKdeY/e2WK25v7v68hglo6WSGh40wtGFkhJKCOnssMIlAGEqgllRBBhj51qua7C5YOvzbKYQYJuQYj8GmJlYSkBdrVh9DoIILcukpSf/THb9B10TG/9w3es8OQ+2uDbneefGT2w8SenDLFJE3t7D+Y0gf++16RU7ufz7RhY19b49Hz/eurK/5Mg398BxHwc6Ihvn0Vv+LPWVTpnOQWKMIqRCNFmi/urKe31vWvO8G3BjU5iOBR6gaZMUNQu+XCmAeOOUSqB5phrgxmX9ja/wyGhdb2aXCAH0UPIJipZx0bAIZGX+hn10WQc5XPGAy3gRGXbtXlnMeGHS631mqU5oDouz04Q9n1UDOsHaaSOHIutcdTXt0iCa08CZuLgNyLPRaRWydq60mZQpBKH5CEMiK1JnVIKEa6gwgqpNIO0g+iphISiB+v4y35uB3xt4vbiWS7uE8888HTo3vcz4LGaUiAncmmVndJHLeyodI6RbsulrU6E8onrK2jO+tIatHHCqRzSm51//j7cAPNZKN5BJREtT8Ld7e3jQBNUzGh2RCiwX7TRXBAdK6sv6wnwVIX0mSCkYkXKhcGMcPsJTe9xytOAR9xZVjZuQtWdTCaK8tPvOFWpU2fd93CFqVDt2i47+vN+HrFOu5LHxsdaDMUFOQemBeMeEyBMrkdi2zc3Wdavy9lcbcUmU2bCg3tScIzRqZhxgzzb9XU7MTtraTi1/b9yZuzkiPQKkXjceS+qGVaong9v4JoYAtXk8Tx09PTXIbbuXVFPLj6+P3yz5sPq5sZu7C00Pke/e/z66v5NZ8x5ytpRmn+N5VMGnZ4AMJ/Ka61VEHtoYx2UNAaHnlHbompmUy3QHK6+UY62kRQWk8coG230uNnp7uOj/s9xozJlGdNPDMa2uNGgBefhmpfivHCuwj/AXcne3EYXwBMyr0S/wOCk6ovothPSrMbAzigm4TgdfxLSKbP8Qs4xgE6HiUlygxd6E1vsUhTrGnky7uZ+3iYt7c399B13wCgr1gI",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},y=void 0,v={},h=[];function b(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Get list of fields required for posting ticket in concrete integration"}),"\n",(0,s.jsx)(a(),{method:"get",path:"/v1/bts/{projectName}/{integrationId}/fields-set",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get list of fields required for posting ticket in concrete integration"}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}},{name:"issueType",in:"query",description:"issueType",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"PostFormField",required:["id","required","value"],type:"object",properties:{definedValues:{type:"array",items:{title:"AllowedValue",type:"object",properties:{valueId:{type:"string"},valueName:{type:"string"}}}},fieldName:{type:"string"},fieldType:{type:"string"},id:{type:"string"},required:{type:"boolean"},value:{type:"array",items:{type:"string"}}}}}}}}}})]})}function G(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}}}]);