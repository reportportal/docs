"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95472],{56556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>S,frontMatter:()=>f,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"api/service-api/versions/5.11/index-project-data-using-put","title":"Starts reindex all project data in ML","description":"Starts reindex all project data in ML","source":"@site/docs/api/service-api/versions/5.11/index-project-data-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/index-project-data-using-put","permalink":"/docs/api/service-api/versions/5.11/index-project-data-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"index-project-data-using-put","title":"Starts reindex all project data in ML","description":"Starts reindex all project data in ML","sidebar_label":"Starts reindex all project data in ML","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMFu2zAM/RWBp7VQ46bALj4t6AqsWNcG7XoKcmBsJtEmS6pEpw0M//tA22nTpAXmi22Jenp8fGQDjKsE+QxC9H+o4LPCO47eWoow1+ADRWTj3XUJORhX0su0D/yOjI/JuNX08TdoCBixIqYoYA04rAjyHeit/GkwTpaQ16ChpFREEwT6KC7SU20ilZBzrElDKtZUIeQN8DYIbOJo3Aradi7BKXiXKMn+xfm5vN6D3/0EDZIWOZbd0+xUXnuohq3A3u2SvfRVsCRf9w+gd7f6hXCUXKPIwqa/s6KUcEUf0eseyTVEKpAloyXaRIfpPzBGTipSJ7BCa9WgiCqRURmnft2Ahop47aUQoe54iJQ5ZJtxNoRnzZ6SbdbBgYZEcbOrTB0t5CBx7Atv2zzLGqx57aPhbZthMEfVuafgI099ZLSqxwING4wGF7YXYQfXq7/E2jLksGYO6QhuuovVQK6uxHwSCHqIn7caXhkdl/OHT6zEXwpdqYSZ+mKWyhGVVJ4ov1Q9X3VI+I1XSZUfxS4qdEEj46Vcc5GqqPt7Zw0sCCPFSS0yz+aybdzS71tmX5pPdNvxmEyvVemLuiLHncsGV2LRuXLomIc6yCHRpkIjpUr9yrcjvhqsKcgl2js+CVisSV2MzkEPpRZR8yx7fn4eYbc78nGVDUdTdnN9eXX7cHUmR1oN4pOe/dfReNyvBZ+4QrfP8j8N+06P1/5geuEsWDRO0DuWzWDmGWzGfYcNvZYfjhBx9FzD2ieW8KZZYKLHaNtWlp9qilK7+Zs/u0qWJsn3Jw3YvI0H+HI/TJ8T9f7qD8kPi+i2XUfYWv5Aw1/aHoy1Vmy9Jiwpdoz6iElRUOC9szKcxGivrS7jtW3/AaVp8xE=","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Load users which can be assigned to specified project","permalink":"/docs/api/service-api/versions/5.11/get-users-for-assign-using-get"},"next":{"title":"Delete project index from ML","permalink":"/docs/api/service-api/versions/5.11/delete-project-index-using-delete"}}');var s=i(74848),n=i(28453),r=i(57742),p=i.n(r),o=i(78178),d=i.n(o),c=i(19624),l=i.n(c),u=i(96226),x=i.n(u),j=(i(77675),i(19365),i(51107));const f={id:"index-project-data-using-put",title:"Starts reindex all project data in ML",description:"Starts reindex all project data in ML",sidebar_label:"Starts reindex all project data in ML",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zAM/RWBp7VQ46bALj4t6AqsWNcG7XoKcmBsJtEmS6pEpw0M//tA22nTpAXmi22Jenp8fGQDjKsE+QxC9H+o4LPCO47eWoow1+ADRWTj3XUJORhX0su0D/yOjI/JuNX08TdoCBixIqYoYA04rAjyHeit/GkwTpaQ16ChpFREEwT6KC7SU20ilZBzrElDKtZUIeQN8DYIbOJo3Aradi7BKXiXKMn+xfm5vN6D3/0EDZIWOZbd0+xUXnuohq3A3u2SvfRVsCRf9w+gd7f6hXCUXKPIwqa/s6KUcEUf0eseyTVEKpAloyXaRIfpPzBGTipSJ7BCa9WgiCqRURmnft2Ahop47aUQoe54iJQ5ZJtxNoRnzZ6SbdbBgYZEcbOrTB0t5CBx7Atv2zzLGqx57aPhbZthMEfVuafgI099ZLSqxwING4wGF7YXYQfXq7/E2jLksGYO6QhuuovVQK6uxHwSCHqIn7caXhkdl/OHT6zEXwpdqYSZ+mKWyhGVVJ4ov1Q9X3VI+I1XSZUfxS4qdEEj46Vcc5GqqPt7Zw0sCCPFSS0yz+aybdzS71tmX5pPdNvxmEyvVemLuiLHncsGV2LRuXLomIc6yCHRpkIjpUr9yrcjvhqsKcgl2js+CVisSV2MzkEPpRZR8yx7fn4eYbc78nGVDUdTdnN9eXX7cHUmR1oN4pOe/dfReNyvBZ+4QrfP8j8N+06P1/5geuEsWDRO0DuWzWDmGWzGfYcNvZYfjhBx9FzD2ieW8KZZYKLHaNtWlp9qilK7+Zs/u0qWJsn3Jw3YvI0H+HI/TJ8T9f7qD8kPi+i2XUfYWv5Aw1/aHoy1Vmy9Jiwpdoz6iElRUOC9szKcxGivrS7jtW3/AaVp8xE=",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},m=void 0,v={},h=[];function X(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Starts reindex all project data in ML"}),"\n",(0,s.jsx)(p(),{method:"put",path:"/v1/project/{projectName}/index",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Starts reindex all project data in ML"}),"\n",(0,s.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(d(),{parameters:[{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(x(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function S(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(X,{...e})}):X(e)}}}]);