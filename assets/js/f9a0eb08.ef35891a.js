"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26638],{74316:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>b,frontMatter:()=>K,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/service-api/update-user-filters","title":"Update list of user filters","description":"Update list of user filters","source":"@site/docs/api/service-api/update-user-filters.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/update-user-filters","permalink":"/docs/api/service-api/update-user-filters","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-user-filters","title":"Update list of user filters","description":"Update list of user filters","sidebar_label":"Update list of user filters","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVk1v2zgQ/SvCnFqAsexsul3otKmRYLNbNKmTYA+GD4w0ttlSJENSSQxD/30xJG3JH02yvlgkZ4ZvHmceuQbPFw6KKTQO7clcSI/2pNTKWy0lWpgx0AYt90KrqwoKaEzFPd47tJfB2AEDwy2vMQyK6RoUrxEKMFb/wNJ/oxEDoWiK+yUwsPjYCIsVFN42yMCVS6w5FGvwK0OuzluhFtC2s2iMzn/R1YosCBsqT5/cGCnKAC3/4bSiuS5Ut8kUUGKNyjtKJ22hHwgcgbeUoBfoyGtr2YHh1vIVZeCxdvuRS60qQQiIB1EBi9kz0LaK5IQob+5boSutMBSJhjV/+Ypq4ZdQjD4NhwxqoTYTQ7ZPU9r0kL+N5f4CA1RNTfglb1S5ZJlH5ylBlkm9gFnL+plFQFcx/9OIJo1GDBolHhtM43ig/4s5YBDrTqjFpUBJJD5x2byDtT2/YwR02xxbjfscKTwGXnhJU12pj7ehaD0d8C43o7PPZ3/89vvZ5z2O3kOIcOeuBAZOWy/UYqxlU6u3Odg1P5ZkDNytPGgtkaudLK8pmzAjjvHYs/zSyJ/3QQQiK5Pv0PbXxyQcZSicyfdfGe8qQJhwRisXUzodDg96Aq7/Afb+7v8V4a9zWaNzfPFGQVxv9HCsayORvia3lFbIbBd0zD2TwvlMzzMS2Wy+1c0a/VKTqJomYCF1LCB/GuXrnni2efSg0kD7tFHZxkooYB1SxrbI8/VSO9/m3AjYhzFBo62/0dZzmZ3fXGUxUGg0K/iDTKUUYgUZTPKw9N4AC39BPCuc80Z6KOJKy4A2PTysv7TzGYlSxlWV0ebZBzHPFGKF1UeiIkLKEqYtnm6DCms9sMHKBKOB0MTyjGgoGyv8KvDwgNyiPW+Iu+msv3wb0gmZ9Y22Z5uS22SdjIClj0tta05I/v73LhQAVdmku40uXjid/+6tMd1nYqu46VbcjhOI4wK8K7/TQ6Xr4vQErptMurYt31mnV9MDyejcklKEnpxFKehCkDaouQ4Eplbo19XbRVfpsiGaeFJ9amZehupJ5Nw2hnzofqq5oPp2cebPg0JgIEWJymHP/dzwconZ6WAILPUHnXGR58/PzwMeVgfaLvLk6vKvV+OLb7cXJ+RC1wFaF8F/GozSnNHO11z1tnm9qfdu8nTMHl98biQXimIGbOvU8FN4GgGDYve9lHp+tumwKazXD9zhvZVtS9OPDVrqgFnXxLH8hKPvCoo5lw4PAG0lFD5Mkgp/zLp63AW6kVG16hUVMPiJq70XXqiPJXK6RghGtBjHzU7uKE4X4UC7W7bxOC9LNP5V21lPOW/u76hh0+Ow1hW5WP5Mr0z+HMFqs33GhLk1SK4WTRB6iCHp9x8Fic74","sidebar_class_name":"put api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get filters","permalink":"/docs/api/service-api/get-all-filters"},"next":{"title":"Create user filter","permalink":"/docs/api/service-api/create-filter"}}');var r=i(74848),o=i(28453),a=i(57742),l=i.n(a),n=i(78178),p=i.n(n),d=i(19624),u=i.n(d),c=i(96226),m=i.n(c),f=(i(77675),i(19365),i(51107));const K={id:"update-user-filters",title:"Update list of user filters",description:"Update list of user filters",sidebar_label:"Update list of user filters",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVk1v2zgQ/SvCnFqAsexsul3otKmRYLNbNKmTYA+GD4w0ttlSJENSSQxD/30xJG3JH02yvlgkZ4ZvHmceuQbPFw6KKTQO7clcSI/2pNTKWy0lWpgx0AYt90KrqwoKaEzFPd47tJfB2AEDwy2vMQyK6RoUrxEKMFb/wNJ/oxEDoWiK+yUwsPjYCIsVFN42yMCVS6w5FGvwK0OuzluhFtC2s2iMzn/R1YosCBsqT5/cGCnKAC3/4bSiuS5Ut8kUUGKNyjtKJ22hHwgcgbeUoBfoyGtr2YHh1vIVZeCxdvuRS60qQQiIB1EBi9kz0LaK5IQob+5boSutMBSJhjV/+Ypq4ZdQjD4NhwxqoTYTQ7ZPU9r0kL+N5f4CA1RNTfglb1S5ZJlH5ylBlkm9gFnL+plFQFcx/9OIJo1GDBolHhtM43ig/4s5YBDrTqjFpUBJJD5x2byDtT2/YwR02xxbjfscKTwGXnhJU12pj7ehaD0d8C43o7PPZ3/89vvZ5z2O3kOIcOeuBAZOWy/UYqxlU6u3Odg1P5ZkDNytPGgtkaudLK8pmzAjjvHYs/zSyJ/3QQQiK5Pv0PbXxyQcZSicyfdfGe8qQJhwRisXUzodDg96Aq7/Afb+7v8V4a9zWaNzfPFGQVxv9HCsayORvia3lFbIbBd0zD2TwvlMzzMS2Wy+1c0a/VKTqJomYCF1LCB/GuXrnni2efSg0kD7tFHZxkooYB1SxrbI8/VSO9/m3AjYhzFBo62/0dZzmZ3fXGUxUGg0K/iDTKUUYgUZTPKw9N4AC39BPCuc80Z6KOJKy4A2PTysv7TzGYlSxlWV0ebZBzHPFGKF1UeiIkLKEqYtnm6DCms9sMHKBKOB0MTyjGgoGyv8KvDwgNyiPW+Iu+msv3wb0gmZ9Y22Z5uS22SdjIClj0tta05I/v73LhQAVdmku40uXjid/+6tMd1nYqu46VbcjhOI4wK8K7/TQ6Xr4vQErptMurYt31mnV9MDyejcklKEnpxFKehCkDaouQ4Eplbo19XbRVfpsiGaeFJ9amZehupJ5Nw2hnzofqq5oPp2cebPg0JgIEWJymHP/dzwconZ6WAILPUHnXGR58/PzwMeVgfaLvLk6vKvV+OLb7cXJ+RC1wFaF8F/GozSnNHO11z1tnm9qfdu8nTMHl98biQXimIGbOvU8FN4GgGDYve9lHp+tumwKazXD9zhvZVtS9OPDVrqgFnXxLH8hKPvCoo5lw4PAG0lFD5Mkgp/zLp63AW6kVG16hUVMPiJq70XXqiPJXK6RghGtBjHzU7uKE4X4UC7W7bxOC9LNP5V21lPOW/u76hh0+Ow1hW5WP5Mr0z+HMFqs33GhLk1SK4WTRB6iCHp9x8Fic74",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,v={},h=[];function g(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Update list of user filters"}),"\n",(0,r.jsx)(l(),{method:"put",path:"/v1/{projectName}/filter",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Update list of user filters"}),"\n",(0,r.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(p(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(u(),{title:"Body",body:{content:{"application/json":{schema:{required:["elements"],type:"object",properties:{elements:{type:"array",items:{required:["conditions","id","name","orders","type"],type:"object",properties:{description:{maxLength:1500,minLength:0,type:"string"},name:{type:"string"},type:{type:"string",enum:["launch, testitem, log"]},conditions:{maxItems:20,minItems:1,uniqueItems:!0,type:"array",items:{required:["condition","filteringField","value"],type:"object",properties:{filteringField:{type:"string"},condition:{type:"string"},value:{type:"string"}},title:"UserFilterCondition"}},orders:{maxItems:2147483647,minItems:1,type:"array",items:{required:["isAsc","sortingColumn"],type:"object",properties:{sortingColumn:{type:"string"},isAsc:{type:"boolean"}},title:"Order"}},id:{type:"string"}},title:"BulkUpdateFilterRQ"}}},title:"CollectionsRQBulkUpdateFilterRQ"}}},required:!0}}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}}})]})}function b(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}}}]);