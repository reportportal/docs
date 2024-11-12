"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7184],{42681:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>j,contentTitle:()=>m,default:()=>A,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"api/service-api/versions/5.10/get-global-integration-using-get","title":"Get global Report Portal integration instance","description":"Get global Report Portal integration instance","source":"@site/docs/api/service-api/versions/5.10/get-global-integration-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-global-integration-using-get","permalink":"/docs/api/service-api/versions/5.10/get-global-integration-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-global-integration-using-get","title":"Get global Report Portal integration instance","description":"Get global Report Portal integration instance","sidebar_label":"Get global Report Portal integration instance","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVktv2zAM/isGT1uhxm2x7eDTsj6DPRr0cSpyUGwm1iZLmkS3Kwz/94GykzhNVnS5BBH5UeTHj1QaILkMkD2AMoRLL0lZc5hbQ95qjR5mAqzD7nxSQAZLpEtt51JPNoD7oMzy8vwOBDjpZYWEnoM2YGSFkA2DTwoQoAxk4CSVIKDAkHvl2LbH0+PvWnksICNfo4CQl1hJyBqgZ7cOjR4ELKyvJHVHnz5A284YHpw1AQMjTo6O+Gv7wuuvIIALRkNsPUgP+GtwjyLNFw3qvcFga58jiFUWdv4Tc+L6PdNFqrsx9xgBZ5JwkHMgr8xymHIhCQ9JVQit6FDW7wJaAWjkXDMda9vcWo3SsFEVbyJGDFmeDhrWvF5Ou428i757CWLTm0mSNZUX2j7tIwhNXbE6r8f3d1cg4Mv4dnIKAu6uv57/AAEX1zffQcC3s/EUZivq/pvwAkkq/TYCXm3A0tvarXl52btuGPYYaBvxiqRfi+K85aQnbxNB9+HancdcEpe0kDrgy4m8REqWceKTG3TWUzK1nqROBlJIlAkkTWx2hVTaflPEhUAlZJA+HqcDQNpsDXoLAgL6x9XaqL2GDBrnLdnc6jZL04ZlYr2i5zaVTu0sji63PrUuFgh4lF5xv2JvV+G6JbCQtWY+SiIXdsJNV74bDbIjiN6fxbbOaHerXNlACXcqkaZIImvv1CIxiAUW7xO7eMHlOuFNXgVWduSjl4tOI2W5bTOmKq+7ex8amKP06Mc10/wwG5pveYd1pQ+d1uLoC4qrLgo5OkE35gs7nO0hu/+gflXKeDpJCpvXFRqK7e33q8zjfu1fhNvaMYjpraTibofu5PNOyQK0ytEEHMDHTuYlJiejIxC9WriaLE2fnp5GMlpH1i/THhrSb5PT8x+354cMaQWw1LrsP46Oj0bHcYBsoEqawTX/q/0tXtY8E/6h1Gmp4o6I2Tb9XDzA4zFsbVUQkG0/gjMBpQ3Ezk0zlwHvvW5bPv5do2cRzDZCj5IoVOiX1L6JbjbPHby76d/X98nLl3dv8v2hNM9xuHTNv0DAL3zeebxbnpESZYE+ZtX5jPMcHQ3Q/OCyatd7g/9ItO1fqfH2HA==","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get available project integrations for plugin","permalink":"/docs/api/service-api/versions/5.10/get-project-integrations-using-get"},"next":{"title":"Update global Report Portal integration instance","permalink":"/docs/api/service-api/versions/5.10/update-global-integration-using-put"}}');var a=i(74848),o=i(28453),r=i(57742),s=i.n(r),l=i(78178),p=i.n(l),g=i(19624),c=i.n(g),d=i(96226),v=i.n(d),b=(i(77675),i(19365),i(51107));const u={id:"get-global-integration-using-get",title:"Get global Report Portal integration instance",description:"Get global Report Portal integration instance",sidebar_label:"Get global Report Portal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVktv2zAM/isGT1uhxm2x7eDTsj6DPRr0cSpyUGwm1iZLmkS3Kwz/94GykzhNVnS5BBH5UeTHj1QaILkMkD2AMoRLL0lZc5hbQ95qjR5mAqzD7nxSQAZLpEtt51JPNoD7oMzy8vwOBDjpZYWEnoM2YGSFkA2DTwoQoAxk4CSVIKDAkHvl2LbH0+PvWnksICNfo4CQl1hJyBqgZ7cOjR4ELKyvJHVHnz5A284YHpw1AQMjTo6O+Gv7wuuvIIALRkNsPUgP+GtwjyLNFw3qvcFga58jiFUWdv4Tc+L6PdNFqrsx9xgBZ5JwkHMgr8xymHIhCQ9JVQit6FDW7wJaAWjkXDMda9vcWo3SsFEVbyJGDFmeDhrWvF5Ou428i757CWLTm0mSNZUX2j7tIwhNXbE6r8f3d1cg4Mv4dnIKAu6uv57/AAEX1zffQcC3s/EUZivq/pvwAkkq/TYCXm3A0tvarXl52btuGPYYaBvxiqRfi+K85aQnbxNB9+HancdcEpe0kDrgy4m8REqWceKTG3TWUzK1nqROBlJIlAkkTWx2hVTaflPEhUAlZJA+HqcDQNpsDXoLAgL6x9XaqL2GDBrnLdnc6jZL04ZlYr2i5zaVTu0sji63PrUuFgh4lF5xv2JvV+G6JbCQtWY+SiIXdsJNV74bDbIjiN6fxbbOaHerXNlACXcqkaZIImvv1CIxiAUW7xO7eMHlOuFNXgVWduSjl4tOI2W5bTOmKq+7ex8amKP06Mc10/wwG5pveYd1pQ+d1uLoC4qrLgo5OkE35gs7nO0hu/+gflXKeDpJCpvXFRqK7e33q8zjfu1fhNvaMYjpraTibofu5PNOyQK0ytEEHMDHTuYlJiejIxC9WriaLE2fnp5GMlpH1i/THhrSb5PT8x+354cMaQWw1LrsP46Oj0bHcYBsoEqawTX/q/0tXtY8E/6h1Gmp4o6I2Tb9XDzA4zFsbVUQkG0/gjMBpQ3Ezk0zlwHvvW5bPv5do2cRzDZCj5IoVOiX1L6JbjbPHby76d/X98nLl3dv8v2hNM9xuHTNv0DAL3zeebxbnpESZYE+ZtX5jPMcHQ3Q/OCyatd7g/9ItO1fqfH2HA==",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},m=void 0,j={},h=[];function x(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get global Report Portal integration instance"}),"\n",(0,a.jsx)(s(),{method:"get",path:"/v1/integration/{integrationId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Get global Report Portal integration instance"}),"\n",(0,a.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,a.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(v(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"IntegrationResource",type:"object",properties:{creationDate:{type:"string",format:"date-time"},creator:{type:"string"},enabled:{type:"boolean"},id:{type:"integer",format:"int64"},integrationParameters:{type:"object",properties:{}},integrationType:{title:"IntegrationTypeResource",type:"object",properties:{authFlow:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]},creationDate:{type:"string",format:"date-time"},details:{type:"object",properties:{}},enabled:{type:"boolean"},groupType:{type:"string"},name:{type:"string"},type:{type:"integer",format:"int64"}}},name:{type:"string"},projectId:{type:"integer",format:"int64"}}}}}}}})]})}function A(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);