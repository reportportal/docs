"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38764],{64954:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>v,contentTitle:()=>f,default:()=>S,frontMatter:()=>m,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"api/service-api/versions/5.11/test-integration-connection-using-get-1","title":"Test connection to the integration through the project config","description":"Test connection to the integration through the project config","source":"@site/docs/api/service-api/versions/5.11/test-integration-connection-using-get-1.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/test-integration-connection-using-get-1","permalink":"/docs/api/service-api/versions/5.11/test-integration-connection-using-get-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"test-integration-connection-using-get-1","title":"Test connection to the integration through the project config","description":"Test connection to the integration through the project config","sidebar_label":"Test connection to the integration through the project config","hide_title":true,"hide_table_of_contents":true,"api":"eJylVE1v2zAM/SsCT22hxk2x7eDTgiLogg1d0Y9TEAyKzdjabEmV6HSF4f8+0HYSJ2k3oPPFFsWP5/dI1kAqCxDPQRvCzCvS1pwn1pC3RYEeFhKsw84+SyEGwkCzne+VNQYT/noM2mTX04cfY5DglFclEnrOXYNRJUI8rDFLQYI2EINTlIOEFEPiteO7Vzw9PlXaYwox+QolhCTHUkFcA724bWr0IGFlfamoM336AE0jt/Wdtz8xoRs+/a36vt8/awfy2mTQNAt2Ds6agIHvLy8u+LWf/PtXkMAMoyG+PYvO+HWUdWltgcpAww8jdB4TRYxjpYqAh6AfMJBItnIIsoJyFAMmBeXeVlne2vt/5IiVzkBCiZRbVjhDahWkHGKI1uNokCKqB9w0Ub2nUxPtykfcJyAhoF9vuqDyBcTAGcgmtmjiKKpVRbn1ml6aSDl9pMQdOuvp1npShehygYS18loti47kTbqO6ZWqChY/J3LhKN3txlcCmqrkvmdHkL3/opGwRXQs3RcbSHAvCWVSwcjEiV4Jg5hieirsSnR4xSHgHa4USzvyrZdrnUbassQLpiqpurrzGpaoPPpJxSLMF3ytzcq27aGpwANq3uBtg2NyOxOpTaoSDbVa9R2okrYD++m4rxwHMTel0ixV6Cyfj/BKKHSCJuAgfOJUkqO4HF2A7KVmUuMoen5+Hqn2dmR9FvWhIfo2u5re3E/POaSRwH3Sof84Go87m7OBSmUGZf63zfd42g4b4W+KXKG04aot+rofgTmsx+222BYACfH+iogP99UOIMh2ZfIizW0gzlfXSxXw0RdNw+anCj2Lvtg1dtsCqQ78/ca817sdAid3/Yo6FYdAXv2/3qjMSztMRcUnkPALX452L6/PdyHZZ+gdOIYJGp7MHFWKvuWm85gkCToaxPIu5VnZ7rLr6QM0zR9C8GUu","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Delete project integration instance","permalink":"/docs/api/service-api/versions/5.11/delete-project-integration-using-delete"},"next":{"title":"Execute command to the integration instance","permalink":"/docs/api/service-api/versions/5.11/execute-integration-command-using-put"}}');var o=n(74848),r=n(28453),a=n(57742),s=n.n(a),c=n(78178),p=n.n(c),g=n(19624),d=n.n(g),h=n(96226),l=n.n(h),u=(n(77675),n(19365),n(51107));const m={id:"test-integration-connection-using-get-1",title:"Test connection to the integration through the project config",description:"Test connection to the integration through the project config",sidebar_label:"Test connection to the integration through the project config",hide_title:!0,hide_table_of_contents:!0,api:"eJylVE1v2zAM/SsCT22hxk2x7eDTgiLogg1d0Y9TEAyKzdjabEmV6HSF4f8+0HYSJ2k3oPPFFsWP5/dI1kAqCxDPQRvCzCvS1pwn1pC3RYEeFhKsw84+SyEGwkCzne+VNQYT/noM2mTX04cfY5DglFclEnrOXYNRJUI8rDFLQYI2EINTlIOEFEPiteO7Vzw9PlXaYwox+QolhCTHUkFcA724bWr0IGFlfamoM336AE0jt/Wdtz8xoRs+/a36vt8/awfy2mTQNAt2Ds6agIHvLy8u+LWf/PtXkMAMoyG+PYvO+HWUdWltgcpAww8jdB4TRYxjpYqAh6AfMJBItnIIsoJyFAMmBeXeVlne2vt/5IiVzkBCiZRbVjhDahWkHGKI1uNokCKqB9w0Ub2nUxPtykfcJyAhoF9vuqDyBcTAGcgmtmjiKKpVRbn1ml6aSDl9pMQdOuvp1npShehygYS18loti47kTbqO6ZWqChY/J3LhKN3txlcCmqrkvmdHkL3/opGwRXQs3RcbSHAvCWVSwcjEiV4Jg5hieirsSnR4xSHgHa4USzvyrZdrnUbassQLpiqpurrzGpaoPPpJxSLMF3ytzcq27aGpwANq3uBtg2NyOxOpTaoSDbVa9R2okrYD++m4rxwHMTel0ixV6Cyfj/BKKHSCJuAgfOJUkqO4HF2A7KVmUuMoen5+Hqn2dmR9FvWhIfo2u5re3E/POaSRwH3Sof84Go87m7OBSmUGZf63zfd42g4b4W+KXKG04aot+rofgTmsx+222BYACfH+iogP99UOIMh2ZfIizW0gzlfXSxXw0RdNw+anCj2Lvtg1dtsCqQ78/ca817sdAid3/Yo6FYdAXv2/3qjMSztMRcUnkPALX452L6/PdyHZZ+gdOIYJGp7MHFWKvuWm85gkCToaxPIu5VnZ7rLr6QM0zR9C8GUu",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},f=void 0,v={},x=[];function j(t){const e={p:"p",...(0,r.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Test connection to the integration through the project config"}),"\n",(0,o.jsx)(s(),{method:"get",path:"/v1/integration/{projectName}/{integrationId}/connection/test",context:"endpoint"}),"\n",(0,o.jsx)(e.p,{children:"Test connection to the integration through the project config"}),"\n",(0,o.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(p(),{parameters:[{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,o.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"boolean"}}}}}})]})}function S(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(j,{...t})}):j(t)}}}]);