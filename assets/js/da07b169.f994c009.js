"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[75197],{4806:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>g,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"api/service-api/versions/5.10/get-attribute-values-using-get","title":"Get all unique attribute values of project launches","description":"Get all unique attribute values of project launches","source":"@site/docs/api/service-api/versions/5.10/get-attribute-values-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-attribute-values-using-get","permalink":"/docs/api/service-api/versions/5.10/get-attribute-values-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-attribute-values-using-get","title":"Get all unique attribute values of project launches","description":"Get all unique attribute values of project launches","sidebar_label":"Get all unique attribute values of project launches","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1P3DAQ/SvWnAC5CSD1klNXFaKIiiIovaz2YJLZjVvHNvZk6SrKf68myX4GCmIvUeL5ePPm+W0DpBYRsikYVdu8/JQ7S8EZgwFmEpzHoEg7e1VABgukCVHQjzXhL2VqjA9R28XlxU+Q4FVQFRIGrtaAVRVCBnNtCEOSW0rUXipI0BYyeKoxrEBCgTEP2nOvN9ICPtU6YAEZhRolxLzESkHWAK0894wUtF1A28pDGPi0LXeNq3dhGOe8p6EP7jfmdMNvQxevqBw12Y97/2gzDo7e2YiRz89PT/mxX/zHNUjghaIlPj1JT/gxqqpCUB0ZhFV8qRv/GLkPmCtifHNlIh4Oc4kklDGitvqpRrGhTSw7sQg3F8O8olcbRpBQIZVukFenIyohg3R5ljY77LRpn5JuqqZ9VV4IhuVad3UwkAFnksudabM0bVRNpQuaVm2qvB7t4A69C3TrAikj+logYamCVo+mp3ddrud4rmpDkEFJ5OOo3O06VgLauuK7xYEgh/hZK2GDaLy0by6SYBUJZQvByMSRnguLWGBxzBz2eMUh4C2uAiuXhC7Kd0GJdrzFGVOV133faQOPqAKGSc2ET2e7x/cskX703aCNMoaBOiXxex/ENwC0nbsuUpPBA3ZfoX49yuT2ShQuryu01LnOIF+Vd/IdrtZ97TmJ6a2U5m3H/suX0cgSjM7RRtxJn3iVlyjOk1OQg1p4mixNn5+fE9WdJi4s0iE1pt+vvl7c3F984pRWAkutR/85OTtNzvibd5EqZXfafOwu7LGzYZvwL6XeKG25V4e5Ge7JFJZnICHb95G+IkjYtO0E3V2XmYTSReLUpnlUER+CaVv+3NsgC6PQkaX/yj1vtp4CR3eDZR2L/3n2i4P8wdUbVt9BhgyAnfX9oF517rdhjHO2GGZbU/g4S/uLehHQ2pXtXvs10N0CLXtJiarA0CHqIyZ5jp52ctn3Gf3Gafkfu23/AUg9xsc=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get all unique attribute keys of project launches","permalink":"/docs/api/service-api/versions/5.10/get-attribute-keys-using-get"},"next":{"title":"Create launch clusters","permalink":"/docs/api/service-api/versions/5.10/create-clusters-using-post"}}');var s=i(74848),u=i(28453),n=i(57742),r=i.n(n),l=i(78178),o=i.n(l),p=i(19624),c=i.n(p),d=i(96226),v=i.n(d),h=(i(77675),i(19365),i(51107));const g={id:"get-attribute-values-using-get",title:"Get all unique attribute values of project launches",description:"Get all unique attribute values of project launches",sidebar_label:"Get all unique attribute values of project launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P3DAQ/SvWnAC5CSD1klNXFaKIiiIovaz2YJLZjVvHNvZk6SrKf68myX4GCmIvUeL5ePPm+W0DpBYRsikYVdu8/JQ7S8EZgwFmEpzHoEg7e1VABgukCVHQjzXhL2VqjA9R28XlxU+Q4FVQFRIGrtaAVRVCBnNtCEOSW0rUXipI0BYyeKoxrEBCgTEP2nOvN9ICPtU6YAEZhRolxLzESkHWAK0894wUtF1A28pDGPi0LXeNq3dhGOe8p6EP7jfmdMNvQxevqBw12Y97/2gzDo7e2YiRz89PT/mxX/zHNUjghaIlPj1JT/gxqqpCUB0ZhFV8qRv/GLkPmCtifHNlIh4Oc4kklDGitvqpRrGhTSw7sQg3F8O8olcbRpBQIZVukFenIyohg3R5ljY77LRpn5JuqqZ9VV4IhuVad3UwkAFnksudabM0bVRNpQuaVm2qvB7t4A69C3TrAikj+logYamCVo+mp3ddrud4rmpDkEFJ5OOo3O06VgLauuK7xYEgh/hZK2GDaLy0by6SYBUJZQvByMSRnguLWGBxzBz2eMUh4C2uAiuXhC7Kd0GJdrzFGVOV133faQOPqAKGSc2ET2e7x/cskX703aCNMoaBOiXxex/ENwC0nbsuUpPBA3ZfoX49yuT2ShQuryu01LnOIF+Vd/IdrtZ97TmJ6a2U5m3H/suX0cgSjM7RRtxJn3iVlyjOk1OQg1p4mixNn5+fE9WdJi4s0iE1pt+vvl7c3F984pRWAkutR/85OTtNzvibd5EqZXfafOwu7LGzYZvwL6XeKG25V4e5Ge7JFJZnICHb95G+IkjYtO0E3V2XmYTSReLUpnlUER+CaVv+3NsgC6PQkaX/yj1vtp4CR3eDZR2L/3n2i4P8wdUbVt9BhgyAnfX9oF517rdhjHO2GGZbU/g4S/uLehHQ2pXtXvs10N0CLXtJiarA0CHqIyZ5jp52ctn3Gf3Gafkfu23/AUg9xsc=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},m=void 0,b={},f=[];function V(e){const t={p:"p",...(0,u.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get all unique attribute values of project launches"}),"\n",(0,s.jsx)(r(),{method:"get",path:"/v1/{projectName}/launch/attribute/values",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get all unique attribute values of project launches"}),"\n",(0,s.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(o(),{parameters:[{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}},{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(v(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function j(e={}){const{wrapper:t}={...(0,u.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(V,{...e})}):V(e)}}}]);