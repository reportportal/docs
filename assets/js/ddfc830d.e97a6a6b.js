"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50901],{69616:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>v,contentTitle:()=>m,default:()=>D,frontMatter:()=>E,metadata:()=>i,toc:()=>C});const i=JSON.parse('{"id":"api/service-api/versions/5.11/get-user-projects-using-get","title":"Get user\'s projects (DEPRECATED)","description":"Get user\'s projects (DEPRECATED)","source":"@site/docs/api/service-api/versions/5.11/get-user-projects-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-user-projects-using-get","permalink":"/docs/api/service-api/versions/5.11/get-user-projects-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-user-projects-using-get","title":"Get user\'s projects (DEPRECATED)","description":"Get user\'s projects (DEPRECATED)","sidebar_label":"Get user\'s projects (DEPRECATED)","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMFu2zAM/RWBl7WFGjcFdvFpQRt0xYYuSNtTkINiMbE2W1IlOl1g+N8H2k7qNC2wXOyI5PMT3yNrILWJkC5Aow+YKUJ9WUUMl5mzFFxRYIClBOcxKDLO3mtIYYP0HDHMgvuNGcXnaOzmbvoEErwKqkTCwJg1WFUipMCAD/wqwVhIwSvKQYLGmAXjGfY4KeBLZQJqSClUKCFmOZYK0hpo5xkwUjB2A02z5OTonY0YOX59dcWPY+RfP0AC3wctcfQiueDHCapb8XVAgtLacK0qZoFvTqZDJ0MFJ05iNBuLum8AyBMEf1SHlsLuqU05uUKby1VzV3wU739yIBCka1VEfN/AOyTBTfwSRQ8ZxdntdDaf3kyeprfnIKFEyl2vYKsW5ZBCsh0nXJjUew2aZI8AEiKG7V7QKhSQQu2DI5e5okmTpFYV5S4Y2jWJ8uZE1zl6F2jmAqlCdFggYauCUaui688erpNuraqCIIWcyMcTuNk+VwLaqmTrciLIPn/ZSDgwOvXCdxdJsC2FslowM3Fm1sIiatTnwq1Fx1e8J/zGS2PpRqHN8m3SyDjWacmtyqruu4saVqgChknFPV4sOWzs2g19NGzNJ33b85jM7oV2WVWipXYQe0urrLV0P2iPleci7k2pDEsVu5NvJ3wlFCZDG3FQPvEqy1Fcj65A9lJzU9MkeX19Hak2OnJhk/SlMfl5fzN9eJxeckkjgX3Ssf86Go+7M+8ilcoOPvMfRj1qxWEmCP9S4gtlLAO3BOvexAvYjpl0bMVKB8vk4OSlhNxF4ty6XqmIz6FoGj5+qTCwZss3X7YKahP5/ZOBq992CpzN+5V1Lgaf/pB2f6jsrh2DouJ/IOEP7oZbsGEj56g0hpZLF55kGXoaFPIuY2sdJpv3cNP8A0dpASI=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Delete specified Api Key (DEPRECATED)","permalink":"/docs/api/service-api/versions/5.11/delete-api-key-using-delete"},"next":{"title":"file-storage-controller","permalink":"/docs/api/service-api/versions/5.11/file-storage-controller"}}');var r=t(74848),a=t(28453),o=t(57742),p=t.n(o),n=t(78178),c=t.n(n),l=t(19624),u=t.n(l),d=t(96226),j=t.n(d),g=(t(77675),t(19365),t(51107));const E={id:"get-user-projects-using-get",title:"Get user's projects (DEPRECATED)",description:"Get user's projects (DEPRECATED)",sidebar_label:"Get user's projects (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zAM/RWBl7WFGjcFdvFpQRt0xYYuSNtTkINiMbE2W1IlOl1g+N8H2k7qNC2wXOyI5PMT3yNrILWJkC5Aow+YKUJ9WUUMl5mzFFxRYIClBOcxKDLO3mtIYYP0HDHMgvuNGcXnaOzmbvoEErwKqkTCwJg1WFUipMCAD/wqwVhIwSvKQYLGmAXjGfY4KeBLZQJqSClUKCFmOZYK0hpo5xkwUjB2A02z5OTonY0YOX59dcWPY+RfP0AC3wctcfQiueDHCapb8XVAgtLacK0qZoFvTqZDJ0MFJ05iNBuLum8AyBMEf1SHlsLuqU05uUKby1VzV3wU739yIBCka1VEfN/AOyTBTfwSRQ8ZxdntdDaf3kyeprfnIKFEyl2vYKsW5ZBCsh0nXJjUew2aZI8AEiKG7V7QKhSQQu2DI5e5okmTpFYV5S4Y2jWJ8uZE1zl6F2jmAqlCdFggYauCUaui688erpNuraqCIIWcyMcTuNk+VwLaqmTrciLIPn/ZSDgwOvXCdxdJsC2FslowM3Fm1sIiatTnwq1Fx1e8J/zGS2PpRqHN8m3SyDjWacmtyqruu4saVqgChknFPV4sOWzs2g19NGzNJ33b85jM7oV2WVWipXYQe0urrLV0P2iPleci7k2pDEsVu5NvJ3wlFCZDG3FQPvEqy1Fcj65A9lJzU9MkeX19Hak2OnJhk/SlMfl5fzN9eJxeckkjgX3Ssf86Go+7M+8ilcoOPvMfRj1qxWEmCP9S4gtlLAO3BOvexAvYjpl0bMVKB8vk4OSlhNxF4ty6XqmIz6FoGj5+qTCwZss3X7YKahP5/ZOBq992CpzN+5V1Lgaf/pB2f6jsrh2DouJ/IOEP7oZbsGEj56g0hpZLF55kGXoaFPIuY2sdJpv3cNP8A0dpASI=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},m=void 0,v={},C=[];function F(e){const s={p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get user's projects (DEPRECATED)"}),"\n",(0,r.jsx)(p(),{method:"get",path:"/v1/user/{userName}/projects",context:"endpoint"}),"\n",(0,r.jsx)(s.p,{children:"Get user's projects (DEPRECATED)"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"userName",in:"path",description:"userName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(j(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",additionalProperties:{title:"AssignedProject",type:"object",properties:{entryType:{type:"string"},projectRole:{type:"string"}}}}}}}}})]})}function D(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(F,{...e})}):F(e)}}}]);