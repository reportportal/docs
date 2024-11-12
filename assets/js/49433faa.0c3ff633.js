"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45036],{70270:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>v,frontMatter:()=>b,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"api/service-api/versions/5.11/get-launch-using-get","title":"Get specified launch by ID","description":"Get specified launch by ID","source":"@site/docs/api/service-api/versions/5.11/get-launch-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-launch-using-get","permalink":"/docs/api/service-api/versions/5.11/get-launch-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-launch-using-get","title":"Get specified launch by ID","description":"Get specified launch by ID","sidebar_label":"Get specified launch by ID","hide_title":true,"hide_table_of_contents":true,"api":"eJytVktv40YM/isCT7sLxUrSx0Gnuk2aGk13g2RzMnygNbQ1rTSjneEkMQT994KSbEtrbZAuepI9Q3I+fnzWwLj1kC6hwGCy/Cyzhp0tCnKwisFW5JC1NQsFKWyJb1upR6/N9ub6M8RQocOSmJwYqcFgSZD2xhYKYtAGUqiQc4hBkc+crsTgWMjRl6AdKUjZBYrBZzmVCGkNvKvEoGenzRaaJj68UTn7N2X8Uf699sxY7u0vrUTYV9Z48nJ/eX4un7HxT39CDMIZGZbbD8kH+Qysai7EbEfcPXkbXDYGsgQtHJgOoAnlmhzE4Bkdf9btoWfk4CGGELSSwPRg7VpckzA4CRXrDioaLHYSo4Ff6BzuhCim0k8yC1hVzr7oEpmuQhf3geAB2Ma6EhlSUDasCwLRZHZ6HZj8qy/2XCyYyvleY0DJ6079Q7sJ2DE8YRFoyiFxaRStCWUyqqX45G7oJjKdsUg1MeTo74mdHnm6trYgNHKv1eBcG6btmDNt+OcfRbBAz39ZpTea1NufL4lRIQ8Tdpoucb60atIzMqGUtLu6/n3+eCtVfHX96+MNrJo+C6eY6sP/NufssxnJHs04csFMU3dM+DfTIXWhPetslF8Ph9M3J5eiDWXsp2hFpbTkDxZ3I5X/KDdN1w+X0OYpvVAWRPv/Nt0cmsdUNNp2Mlk6ffVUjjJkydANFp6+7q03xJGvKGuzOOoaerTeRYsraHM1t/3caCcF55BC8nSR1IOe3CSdWlLv50EjDY/c036mBFdACqLDNrNFkyZJjYFz6zTvmgQrfdLz76myju+sYyyizhZIp3Aa10XH3d5cH30MhfCWM1f+xNzdXvZYOyIIcS8vhXNAdDok/rCeIymsCI2KBFn0Tm8iQ6RIvY/sJurwRl8DPuJSVNqZa6WqVmimrcRpJVRloXt3WcOa0JGbB6F6uZJrbTZ2WBxDar7B2x7H/G4RKZuFkgx306CbdZi1s66fww+hEiXhpkQtofLdyS8neGModEbG00B9XmGWU3Q5O5fx1oZaSE2T5Pn5eYbt7cy6bdKr+uR28dv1x4frM1GR/k/Od+h/ml1cdGeV9VyiGTzzaqZOTwmmF06qAnXbnVpodZ/FS3i6gBjS8W7RWZXzw2qziiG3nkWjrtfo6dEVTSPHXwI5idnqmJdtBJX28vsbFVcflw14d9+vEO+jwSo1CX4/kc0ODgMTIO5m6nERk+3qu94f8/AdEIYGGimnnFDJCFn2gx/mWUYVD3Rl1ZIEP7QZWUib5l8o3bTn","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get specified launch by UUID","permalink":"/docs/api/service-api/versions/5.11/get-launch-by-uuid-using-get"},"next":{"title":"Delete specified launch by ID","permalink":"/docs/api/service-api/versions/5.11/delete-launch-using-delete"}}');var n=i(74848),a=i(28453),r=i(57742),c=i.n(r),o=i(78178),d=i.n(o),p=i(19624),u=i.n(p),l=i(96226),m=i.n(l),y=(i(77675),i(19365),i(51107));const b={id:"get-launch-using-get",title:"Get specified launch by ID",description:"Get specified launch by ID",sidebar_label:"Get specified launch by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktv40YM/isCT7sLxUrSx0Gnuk2aGk13g2RzMnygNbQ1rTSjneEkMQT994KSbEtrbZAuepI9Q3I+fnzWwLj1kC6hwGCy/Cyzhp0tCnKwisFW5JC1NQsFKWyJb1upR6/N9ub6M8RQocOSmJwYqcFgSZD2xhYKYtAGUqiQc4hBkc+crsTgWMjRl6AdKUjZBYrBZzmVCGkNvKvEoGenzRaaJj68UTn7N2X8Uf699sxY7u0vrUTYV9Z48nJ/eX4un7HxT39CDMIZGZbbD8kH+Qysai7EbEfcPXkbXDYGsgQtHJgOoAnlmhzE4Bkdf9btoWfk4CGGELSSwPRg7VpckzA4CRXrDioaLHYSo4Ff6BzuhCim0k8yC1hVzr7oEpmuQhf3geAB2Ma6EhlSUDasCwLRZHZ6HZj8qy/2XCyYyvleY0DJ6079Q7sJ2DE8YRFoyiFxaRStCWUyqqX45G7oJjKdsUg1MeTo74mdHnm6trYgNHKv1eBcG6btmDNt+OcfRbBAz39ZpTea1NufL4lRIQ8Tdpoucb60atIzMqGUtLu6/n3+eCtVfHX96+MNrJo+C6eY6sP/NufssxnJHs04csFMU3dM+DfTIXWhPetslF8Ph9M3J5eiDWXsp2hFpbTkDxZ3I5X/KDdN1w+X0OYpvVAWRPv/Nt0cmsdUNNp2Mlk6ffVUjjJkydANFp6+7q03xJGvKGuzOOoaerTeRYsraHM1t/3caCcF55BC8nSR1IOe3CSdWlLv50EjDY/c036mBFdACqLDNrNFkyZJjYFz6zTvmgQrfdLz76myju+sYyyizhZIp3Aa10XH3d5cH30MhfCWM1f+xNzdXvZYOyIIcS8vhXNAdDok/rCeIymsCI2KBFn0Tm8iQ6RIvY/sJurwRl8DPuJSVNqZa6WqVmimrcRpJVRloXt3WcOa0JGbB6F6uZJrbTZ2WBxDar7B2x7H/G4RKZuFkgx306CbdZi1s66fww+hEiXhpkQtofLdyS8neGModEbG00B9XmGWU3Q5O5fx1oZaSE2T5Pn5eYbt7cy6bdKr+uR28dv1x4frM1GR/k/Od+h/ml1cdGeV9VyiGTzzaqZOTwmmF06qAnXbnVpodZ/FS3i6gBjS8W7RWZXzw2qziiG3nkWjrtfo6dEVTSPHXwI5idnqmJdtBJX28vsbFVcflw14d9+vEO+jwSo1CX4/kc0ODgMTIO5m6nERk+3qu94f8/AdEIYGGimnnFDJCFn2gx/mWUYVD3Rl1ZIEP7QZWUib5l8o3bTn",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},h=void 0,f={},g=[];function G(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get specified launch by ID"}),"\n",(0,n.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/{launchId}",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Get specified launch by ID"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(d(),{parameters:[{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"LaunchResource",required:["id","name","number","startTime","status","uuid"],type:"object",properties:{analysing:{type:"array",items:{type:"string"}},approximateDuration:{type:"number",format:"double"},attributes:{type:"array",items:{title:"ItemAttributeResource",type:"object",properties:{key:{type:"string"},value:{type:"string"}}}},description:{type:"string"},endTime:{type:"string",format:"date-time"},hasRetries:{type:"boolean"},id:{type:"integer",format:"int64"},lastModified:{type:"string",format:"date-time"},metadata:{type:"object",properties:{}},mode:{type:"string",enum:["DEFAULT","DEBUG"]},name:{type:"string"},number:{type:"integer",format:"int64"},owner:{type:"string"},rerun:{type:"boolean"},startTime:{type:"string",format:"date-time"},statistics:{title:"StatisticsResource",type:"object",properties:{defects:{type:"object",additionalProperties:{type:"object",additionalProperties:{type:"integer",format:"int32"}}},executions:{type:"object",additionalProperties:{type:"integer",format:"int32"}}}},status:{type:"string"},uuid:{type:"string"}}}}}}}})]})}function v(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(G,{...e})}):G(e)}}}]);