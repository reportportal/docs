"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[18664],{58669:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>v,contentTitle:()=>E,default:()=>D,frontMatter:()=>f,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"api/service-api/versions/5.10/bulk-force-finish-using-put","title":"Force finish launch","description":"Force finish launch","source":"@site/docs/api/service-api/versions/5.10/bulk-force-finish-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/bulk-force-finish-using-put","permalink":"/docs/api/service-api/versions/5.10/bulk-force-finish-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"bulk-force-finish-using-put","title":"Force finish launch","description":"Force finish launch","sidebar_label":"Force finish launch","hide_title":true,"hide_table_of_contents":true,"api":"eJyFVsFu2zgQ/RVhTm1BW0mBXnSqm3WwRgPHtR3sIfCBlsY2G4lUyFESQ9AX7SfsrV+2GEqyJdttdKLI4cybmTdPKoHk1kH0CKksdLwbxEaTNWmKFlYCTI5WkjJ6kkAE6yJ9ujU2xlullds9OKW3s4clCMillRkSWnZVgpYZQgS5NT8xpim/CVCatyTtQECCLrYqZ89ndhafC2UxgYhsgQJcvMNMQlQC7XN268gqvYWqWtXG6OibSfZs0fdrn0EAJ4Sa+FTmeapin0/407FJ2fWuKGX334r0af7j17+p0VtRZzp+w7jga/Mfv/7rQXwE1KRIoeNyNQDNmtPhslguoD+NyqPlMZWDpUwSxQFkOuvdaUGd4ThDkSxVhu+DkERWrQvqwZDWyj23iDDrhZ0QZqPDDR/1z+6fcH+hUwLc3hFmnaO1MSlKDQLwTWY5R9vI1GEl4EWmBV7qd1WdMOdCoLYQZ2cCNsZmkiCCRBIOiK0YGUkq3CV71EXGtZ2NFovxXyDgdjS584vF8n42q1ffJ81qMl2O5/OH2dK/3YymN+O7u+bk9h4E/DOaT2FVNc8pz/2Gy412dSE/X12dE/r+e5/Qn8JPJxx+p5/37TzfGK65p9Li3aZm6Jzc/qYlbVtyi7EkTsf3UcDbIDYJblEPmiEdrE2yHzTa4Gezn52XlmDjmR7UcuTpQaidMrqWFk+wP/o+EIhjsEZkSDvD+pUXPjeWoAjCl+uw7ChPFdYhQ0cmBwEO7UurZ4VNIQK2JhObtIrCsJQF7YxVtK9CmauzZOaYG0szY0mmQe3LI7NKrtO6rK27us8bWaRMzh1R7s7czVrbIy3ZEERjv6oEHBCdE+dv4yjg6gRSJwEjCz6oTaARE0w+BmYT1HiDU8BHXAlmZmi9Ve6NhsowAVZcqrio4z6WsEZp0Y4KLvLjqnu8YJrWqXeNDqRqEvJs9hLhjYDpxWo9P0r9uJWMnqiyodIb0yV8tw2/6VGb82g2CRITFxlq8jPSzJqM/aw1vF0UOV/iPmRSMS1cvfP1rDYCUhWjdti5PsplvMPg8/AKREMrTjsKw9fX16H0p0Njt2Fz1YV3k5vxdDEe8BUWR7SuRv9leH01vOa93DjKpO6EuTxKl7WT8I3CPJVKsy+PqWyG5BFerkFA1P9AH/z5SVkJ2BlHbFyWa+nwwaZVxdvPBVrmxOrIe8+QRDleH5XiBNdB4ODDvNHIj0EfwkXorfjpfUcDQDSS0XVQ8bjsUCZoO6JyU8cdLNnP0cPZX0Ml2hujOMacOrYsyD3JqX+P1s3vSWYSr0vylT/f8rXGZ3zmfi78Xgmp1NvCKy7UEfn5H0fkU2c=","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"getStatuses","permalink":"/docs/api/service-api/versions/5.10/get-statuses-using-get"},"next":{"title":"Updates launches for specified project","permalink":"/docs/api/service-api/versions/5.10/update-launches-using-put"}}');var r=t(74848),n=t(28453),a=t(57742),p=t.n(a),o=t(78178),c=t.n(o),l=t(19624),d=t.n(l),u=t(96226),h=t.n(u),m=(t(77675),t(19365),t(51107));const f={id:"bulk-force-finish-using-put",title:"Force finish launch",description:"Force finish launch",sidebar_label:"Force finish launch",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsFu2zgQ/RVhTm1BW0mBXnSqm3WwRgPHtR3sIfCBlsY2G4lUyFESQ9AX7SfsrV+2GEqyJdttdKLI4cybmTdPKoHk1kH0CKksdLwbxEaTNWmKFlYCTI5WkjJ6kkAE6yJ9ujU2xlullds9OKW3s4clCMillRkSWnZVgpYZQgS5NT8xpim/CVCatyTtQECCLrYqZ89ndhafC2UxgYhsgQJcvMNMQlQC7XN268gqvYWqWtXG6OibSfZs0fdrn0EAJ4Sa+FTmeapin0/407FJ2fWuKGX334r0af7j17+p0VtRZzp+w7jga/Mfv/7rQXwE1KRIoeNyNQDNmtPhslguoD+NyqPlMZWDpUwSxQFkOuvdaUGd4ThDkSxVhu+DkERWrQvqwZDWyj23iDDrhZ0QZqPDDR/1z+6fcH+hUwLc3hFmnaO1MSlKDQLwTWY5R9vI1GEl4EWmBV7qd1WdMOdCoLYQZ2cCNsZmkiCCRBIOiK0YGUkq3CV71EXGtZ2NFovxXyDgdjS584vF8n42q1ffJ81qMl2O5/OH2dK/3YymN+O7u+bk9h4E/DOaT2FVNc8pz/2Gy412dSE/X12dE/r+e5/Qn8JPJxx+p5/37TzfGK65p9Li3aZm6Jzc/qYlbVtyi7EkTsf3UcDbIDYJblEPmiEdrE2yHzTa4Gezn52XlmDjmR7UcuTpQaidMrqWFk+wP/o+EIhjsEZkSDvD+pUXPjeWoAjCl+uw7ChPFdYhQ0cmBwEO7UurZ4VNIQK2JhObtIrCsJQF7YxVtK9CmauzZOaYG0szY0mmQe3LI7NKrtO6rK27us8bWaRMzh1R7s7czVrbIy3ZEERjv6oEHBCdE+dv4yjg6gRSJwEjCz6oTaARE0w+BmYT1HiDU8BHXAlmZmi9Ve6NhsowAVZcqrio4z6WsEZp0Y4KLvLjqnu8YJrWqXeNDqRqEvJs9hLhjYDpxWo9P0r9uJWMnqiyodIb0yV8tw2/6VGb82g2CRITFxlq8jPSzJqM/aw1vF0UOV/iPmRSMS1cvfP1rDYCUhWjdti5PsplvMPg8/AKREMrTjsKw9fX16H0p0Njt2Fz1YV3k5vxdDEe8BUWR7SuRv9leH01vOa93DjKpO6EuTxKl7WT8I3CPJVKsy+PqWyG5BFerkFA1P9AH/z5SVkJ2BlHbFyWa+nwwaZVxdvPBVrmxOrIe8+QRDleH5XiBNdB4ODDvNHIj0EfwkXorfjpfUcDQDSS0XVQ8bjsUCZoO6JyU8cdLNnP0cPZX0Ml2hujOMacOrYsyD3JqX+P1s3vSWYSr0vylT/f8rXGZ3zmfi78Xgmp1NvCKy7UEfn5H0fkU2c=",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},E=void 0,v={},y=[];function j(e){const i={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Force finish launch"}),"\n",(0,r.jsx)(p(),{method:"put",path:"/v1/{projectName}/launch/stop",context:"endpoint"}),"\n",(0,r.jsx)(i.p,{children:"Force finish launch"}),"\n",(0,r.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(d(),{title:"Body",body:{description:"rq",content:{"application/json":{schema:{title:"BulkRQ\xablong,FinishExecutionRQ\xbb",required:["entities"],type:"object",properties:{entities:{type:"object",additionalProperties:{title:"FinishExecutionRQ",required:["endTime"],type:"object",properties:{attributes:{type:"array",items:{title:"ItemAttributesRQ",type:"object",properties:{key:{type:"string"},system:{type:"boolean",example:!1},value:{type:"string"}}}},description:{type:"string"},endTime:{type:"string",format:"date-time"},status:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}}}}}}}},required:!0}}),"\n",(0,r.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}}})]})}function D(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);