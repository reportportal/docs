"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91815],{28813:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>j,default:()=>w,frontMatter:()=>b,metadata:()=>r,toc:()=>N});const r=JSON.parse('{"id":"api/service-api/create-project-integration","title":"Create project ReportPortal integration instance","description":"Create project ReportPortal integration instance","source":"@site/docs/api/service-api/create-project-integration.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/create-project-integration","permalink":"/docs/api/service-api/create-project-integration","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-project-integration","title":"Create project ReportPortal integration instance","description":"Create project ReportPortal integration instance","sidebar_label":"Create project ReportPortal integration instance","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VU2P2zYQ/SvCnBKAa2WDNgedslls0S2K1LE3yGHhw1ga20wpkiGpdQxB/z0YirapOGmBJqgvtofz8ebNG7KHgFsP1SNIHWjrMEijr2qjgzNKkYOVAGNptN83UEHtCAPNnflIdbg/B4EAiw5bCuQ4YQ8aW4IKrOq2Ur/lPwKkZguGHQhw9KmTjhqogutIgK931CJUPYSD5UgfnNRbGAZxTjbW/aFsq9GZfHhjmgN7cL+kA/9Ea5WsY0flR2802y5SmTWD4I4dkxMkeT4dMV4UFDm384yjy3zYNJK9UM0nmad+wyCANK4Vd3s6XBujCHU8DTIotmXzWbyDgY+mPEWDt0b7sdDLF9f81ZCvnbRxrhXcxpE3IH4WUTLHHckhBwI2xrUYRtOrXyaN3OngDgnHYsmd8Om3YBZJIsWCrHFhblxAVWQTKKT2AXXNAmop7Ayr2hofYbKWKiifrsssouwz2Q1lf1b0AAI8uaej5DunoII+8kBDVZb9zvgwlGglfA13gu9mfl+MiUDAEzrJ0/UnTqOsSHctb+ouBAsifnnez4Y22CnmLZ4MArjo5Rh/Nz4UrNECdVNw8eKZ3BSaqKHmeWE2ibIiYTrhORdoqDUzF71sdJpJw8NYMQ1152Q4RB7WhI7cTcdsPq7y42VsJ3aWO53UkJo7dp2cQKQfvx0l8seHhygQlt7ivM13n7G1is7beNzC7y9hvkxpJaTemIgpqS8f1b/PsTF115IOx2uRlwbrkGFadpZjQAC1KFkyfrS8vuBWgJI1aZ+3dGOx3lHxcvYCRJIc01aV5X6/n2E8nRm3LVOoL/+8v717u7y74pBBAOt1BP/r7DrZeANa1FmZ/7BPE2ZOMw30OZRWodRcKALu06o9wtP1dDYgoJre8lX2gqyO4n6Evl+jp/dODQObP3XkWHyr8/5EKTbSp+FuUHm6wHi60uDZIl2NzwsQ38aejKgPcU1Vx/9AwN90mL50/GT9n5UzwoYV3wCEDblIwOhxOxa7euA85wwXtzgDHyNu6pps+EffVXaDzv9aPvCapie1NQ3HONzz24z7Ea2Jzcftj7YeFOpth1v2HXPy5wsZdPrM","sidebar_class_name":"post api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Delete global integration instance","permalink":"/docs/api/service-api/delete-global-integration"},"next":{"title":"Create global ReportPortal integration instance","permalink":"/docs/api/service-api/create-global-integration"}}');var i=a(74848),n=a(28453),o=a(57742),s=a.n(o),p=a(78178),c=a.n(p),l=a(19624),d=a.n(l),g=a(96226),m=a.n(g),u=(a(77675),a(19365),a(51107));const b={id:"create-project-integration",title:"Create project ReportPortal integration instance",description:"Create project ReportPortal integration instance",sidebar_label:"Create project ReportPortal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU2P2zYQ/SvCnBKAa2WDNgedslls0S2K1LE3yGHhw1ga20wpkiGpdQxB/z0YirapOGmBJqgvtofz8ebNG7KHgFsP1SNIHWjrMEijr2qjgzNKkYOVAGNptN83UEHtCAPNnflIdbg/B4EAiw5bCuQ4YQ8aW4IKrOq2Ur/lPwKkZguGHQhw9KmTjhqogutIgK931CJUPYSD5UgfnNRbGAZxTjbW/aFsq9GZfHhjmgN7cL+kA/9Ea5WsY0flR2802y5SmTWD4I4dkxMkeT4dMV4UFDm384yjy3zYNJK9UM0nmad+wyCANK4Vd3s6XBujCHU8DTIotmXzWbyDgY+mPEWDt0b7sdDLF9f81ZCvnbRxrhXcxpE3IH4WUTLHHckhBwI2xrUYRtOrXyaN3OngDgnHYsmd8Om3YBZJIsWCrHFhblxAVWQTKKT2AXXNAmop7Ayr2hofYbKWKiifrsssouwz2Q1lf1b0AAI8uaej5DunoII+8kBDVZb9zvgwlGglfA13gu9mfl+MiUDAEzrJ0/UnTqOsSHctb+ouBAsifnnez4Y22CnmLZ4MArjo5Rh/Nz4UrNECdVNw8eKZ3BSaqKHmeWE2ibIiYTrhORdoqDUzF71sdJpJw8NYMQ1152Q4RB7WhI7cTcdsPq7y42VsJ3aWO53UkJo7dp2cQKQfvx0l8seHhygQlt7ivM13n7G1is7beNzC7y9hvkxpJaTemIgpqS8f1b/PsTF115IOx2uRlwbrkGFadpZjQAC1KFkyfrS8vuBWgJI1aZ+3dGOx3lHxcvYCRJIc01aV5X6/n2E8nRm3LVOoL/+8v717u7y74pBBAOt1BP/r7DrZeANa1FmZ/7BPE2ZOMw30OZRWodRcKALu06o9wtP1dDYgoJre8lX2gqyO4n6Evl+jp/dODQObP3XkWHyr8/5EKTbSp+FuUHm6wHi60uDZIl2NzwsQ38aejKgPcU1Vx/9AwN90mL50/GT9n5UzwoYV3wCEDblIwOhxOxa7euA85wwXtzgDHyNu6pps+EffVXaDzv9aPvCapie1NQ3HONzz24z7Ea2Jzcftj7YeFOpth1v2HXPy5wsZdPrM",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},j=void 0,h={},N=[];function f(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Create project ReportPortal integration instance"}),"\n",(0,i.jsx)(s(),{method:"post",path:"/v1/integration/{projectName}/{pluginName}",context:"endpoint"}),"\n",(0,i.jsx)(t.p,{children:"Create project ReportPortal integration instance"}),"\n",(0,i.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(c(),{parameters:[{name:"pluginName",in:"path",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,i.jsx)(d(),{title:"Body",body:{content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},integrationParameters:{type:"object",additionalProperties:{type:"object"}},enabled:{type:"boolean"}},title:"IntegrationRQ"}}},required:!0}}),"\n",(0,i.jsx)(m(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"}},title:"EntryCreatedRS"}}}}}})]})}function w(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);