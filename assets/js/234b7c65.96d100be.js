"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11825],{61098:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>C,frontMatter:()=>g,metadata:()=>a,toc:()=>v});const a=JSON.parse('{"id":"api/service-api/versions/5.10/create-pattern-template-using-post","title":"Create pattern template for items\' log messages pattern analysis","description":"Create pattern template for items\' log messages pattern analysis","source":"@site/docs/api/service-api/versions/5.10/create-pattern-template-using-post.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/create-pattern-template-using-post","permalink":"/docs/api/service-api/versions/5.10/create-pattern-template-using-post","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-pattern-template-using-post","title":"Create pattern template for items\' log messages pattern analysis","description":"Create pattern template for items\' log messages pattern analysis","sidebar_label":"Create pattern template for items\' log messages pattern analysis","hide_title":true,"hide_table_of_contents":true,"api":"eJytVk1v4zYQ/SvCXLq7oK140e5Bp6ZBgAYotq6dPRk+jKWxzC1FckkqjiHovxdD0bYcO+2lupmcjzcz7w3dQcDaQ7EC68x3KsPEUwhS135SGh2cUYocrAUYSw6DNPqpggJKRxhojiGQ08/UWIWBvnmp6/mfy2cQYNFhQ4Ecx+5AY0NQHHN85V8CpOYjDDsQUJEvnbSc4MrO0Y9WOqqgCK4lAb7cUYNQdBAOlsP64KSuoe/XgzH58JupDmxxGfcm7MVfIICLJR3YBa1Vsoy15t89+3XjlDIozvnwbqgEymy4BG6F494FSZ79SeNGcS0n9BtjFKGGXqQ2XdV1jHnj4gVVe+uGv7ediwfeGu0HKJ/vZtctGuqqLlvyKf90uwuPOrhDclks/7N4Oa5b6kA1ORCwNa7BMBx9+XkAz/Arso7KCKfYovIk4HVSmopq0pM06MnGVIdJ4tf7871VZGYHwywky2xrXCYDNf6nTJk6a8h7rMmfDFGjOnjpQQC9BtJeGj0Q/G86QPGv6E6zehcl07ehsDOsMGt87B/Lo4D8ZZZ3I1X0+VGmecIGAjy5l6PgWqegAHYJpjSqL/K8wzbsjJPh0Odo5VVTFmSNC3PjAqpsiBVBO8mMjfM7hhtos8VW8dR2IVh/FW5+tBVAum14xbAhiGS/7gWcEF3z8HfjQ8aNy1BXGSPLPshtpokqqj5mZpsNeLO3gM+4KmrM1EUrG42m0jC51tyqsh3yrjrYEDpy9y13erUeXy+Z8EPpY6MThVNBURdRytEImLu8ORbnXfT4io1VdLEBhm2WqJuEK94I+cyas+al3pqxCMeDe2eqxy7dz5+yypRtQzrEDZd0jmXUecKybC078eQalEwkP5z8etVNAUqWpD2N3O8tljvKPk/vQCQicqOKPN/v91OMt1Pj6jy5+vyPp4fHr8vHCbvwUiPnB/S/TGd30xmfsR4a1KM0/4OIL1p1mmqg15BbhTLu5FhAl4S4gpcZCCguH6ijFge9RjWuBexYwcUKum6Dnr451fd8/KMlx7xbn7UVWVhJn3iRVt0bcKd1DB8Waa1/zC5x3MSfDlEfRmQCkTbWOEDPktwRVuRGO+1hyDt55jjnCFevZC+OHvdlSTaMbPn5uFhu6U/CJj3SjanYzOGeX3vcDwBNLD2KL551oFDXLdZsO6Tk7x/gcg0P","sidebar_class_name":"post api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get project specific issue sub-types","permalink":"/docs/api/service-api/versions/5.10/get-project-settings-using-get"},"next":{"title":"Update pattern template for items\' log messages pattern analysis","permalink":"/docs/api/service-api/versions/5.10/update-pattern-template-using-put"}}');var r=s(74848),p=s(28453),n=s(57742),i=s.n(n),o=s(78178),l=s.n(o),c=s(19624),m=s.n(c),d=s(96226),u=s.n(d),j=(s(77675),s(19365),s(51107));const g={id:"create-pattern-template-using-post",title:"Create pattern template for items' log messages pattern analysis",description:"Create pattern template for items' log messages pattern analysis",sidebar_label:"Create pattern template for items' log messages pattern analysis",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v4zYQ/SvCXLq7oK140e5Bp6ZBgAYotq6dPRk+jKWxzC1FckkqjiHovxdD0bYcO+2lupmcjzcz7w3dQcDaQ7EC68x3KsPEUwhS135SGh2cUYocrAUYSw6DNPqpggJKRxhojiGQ08/UWIWBvnmp6/mfy2cQYNFhQ4Ecx+5AY0NQHHN85V8CpOYjDDsQUJEvnbSc4MrO0Y9WOqqgCK4lAb7cUYNQdBAOlsP64KSuoe/XgzH58JupDmxxGfcm7MVfIICLJR3YBa1Vsoy15t89+3XjlDIozvnwbqgEymy4BG6F494FSZ79SeNGcS0n9BtjFKGGXqQ2XdV1jHnj4gVVe+uGv7ediwfeGu0HKJ/vZtctGuqqLlvyKf90uwuPOrhDclks/7N4Oa5b6kA1ORCwNa7BMBx9+XkAz/Arso7KCKfYovIk4HVSmopq0pM06MnGVIdJ4tf7871VZGYHwywky2xrXCYDNf6nTJk6a8h7rMmfDFGjOnjpQQC9BtJeGj0Q/G86QPGv6E6zehcl07ehsDOsMGt87B/Lo4D8ZZZ3I1X0+VGmecIGAjy5l6PgWqegAHYJpjSqL/K8wzbsjJPh0Odo5VVTFmSNC3PjAqpsiBVBO8mMjfM7hhtos8VW8dR2IVh/FW5+tBVAum14xbAhiGS/7gWcEF3z8HfjQ8aNy1BXGSPLPshtpokqqj5mZpsNeLO3gM+4KmrM1EUrG42m0jC51tyqsh3yrjrYEDpy9y13erUeXy+Z8EPpY6MThVNBURdRytEImLu8ORbnXfT4io1VdLEBhm2WqJuEK94I+cyas+al3pqxCMeDe2eqxy7dz5+yypRtQzrEDZd0jmXUecKybC078eQalEwkP5z8etVNAUqWpD2N3O8tljvKPk/vQCQicqOKPN/v91OMt1Pj6jy5+vyPp4fHr8vHCbvwUiPnB/S/TGd30xmfsR4a1KM0/4OIL1p1mmqg15BbhTLu5FhAl4S4gpcZCCguH6ijFge9RjWuBexYwcUKum6Dnr451fd8/KMlx7xbn7UVWVhJn3iRVt0bcKd1DB8Waa1/zC5x3MSfDlEfRmQCkTbWOEDPktwRVuRGO+1hyDt55jjnCFevZC+OHvdlSTaMbPn5uFhu6U/CJj3SjanYzOGeX3vcDwBNLD2KL551oFDXLdZsO6Tk7x/gcg0P",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},y=void 0,h={},v=[];function f(e){const t={p:"p",...(0,p.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Create pattern template for items' log messages pattern analysis"}),"\n",(0,r.jsx)(i(),{method:"post",path:"/v1/{projectName}/settings/pattern",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Create pattern template for items' log messages pattern analysis"}),"\n",(0,r.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:[{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(m(),{title:"Body",body:{description:"createPatternTemplateRQ",content:{"application/json":{schema:{title:"CreatePatternTemplateRQ",type:"object",properties:{enabled:{type:"boolean"},name:{type:"string"},type:{type:"string"},value:{type:"string"}}}}},required:!0}}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"*/*":{schema:{title:"EntryCreatedRS",type:"object",properties:{id:{type:"integer",format:"int64"}}}}}}}})]})}function C(e={}){const{wrapper:t}={...(0,p.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}}}]);