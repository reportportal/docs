"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8606],{80932:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>h,frontMatter:()=>b,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"api/service-api/versions/5.11/get-project-integrations-using-get","title":"Get available project integrations for plugin","description":"Get available project integrations for plugin","source":"@site/docs/api/service-api/versions/5.11/get-project-integrations-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-project-integrations-using-get","permalink":"/docs/api/service-api/versions/5.11/get-project-integrations-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-project-integrations-using-get","title":"Get available project integrations for plugin","description":"Get available project integrations for plugin","sidebar_label":"Get available project integrations for plugin","hide_title":true,"hide_table_of_contents":true,"api":"eJydVktzm0gQ/itUn5LUWNip3T1wWm3iJKpkbZUfJ5cOLWhJkx1myEwjr4riv6cakABLcZxwoZh+zNdfv6iAcR0geQBtmdYeWTt7ljrL3hlDHhYKXEHt+SyDBNbEc+++Usqz3iLcB23XHy/vQEGBHnNi8uK2Aos5QQKFKdfaXsmHAm3lBHkDCjIKqdeFeHmq5ulbqT1lkLAvSUFIN5QjJBXwrhCngb22a6hr1d/TYvv5RSO9l9+0EOVQOBsoiPzt+bm8xs6vP4MCIZEsi/RN/EZeR17Re9wJTKa88caajQgG1N5QcKVPBWVn5ZaCXJj2khrWLZLUU2PwHpmOkStYOZ8jQwIZMp2xzglq1Vo5fyJUBWRxaYSUg2zpnCG0ItTD86Z4yA9v0Zb/+qNR7GOZD0qjej6cemx51+ieJEhELyYJS958MO7xFEFky1w64Xp6f/cJFPwzvZ29AwV3158vr0DBh+ubf0HBl/fTOSz21P0y4RkxavMyAp5NwNq7sjjw8jR3bTucEPDY4seZq5/z0rXP7GVF0D0SfOEpRZaYVmgCPW3Lj8QRblEbCTzqbokGhRCilfNROyZAQU68cd1YamYPbyCBeHsRD2zizk9cDbq+jtGYuOoHTg0KAvntfnCV3kACYsIudaZO4riS8nFe866OsdBHQ+WGCud57jyjiVpfoGCLXks4Tc737tqhscLSCE8b5iIcuZvvdfvaFEVQnb4U4QHR8RT65AJHksEIbRYJsuiVXkWWKKPsdeRWUYs3egq4x5VR7ia+0SoapYl2ks6FUJWW7b0PFSwJPflpKew/LESs7coNG3ZIzQ942+OYzmdR5tIyJ8tN/rphimkzTLtBf1sWYiTc5KglVaE9+fsIrwKjU7KBBubTAtMNRW8n56C6VAupSRw/Pj5OsJFOnF/HnWmIv8zeXV7dXp6JSa1A6qRF/+fk4qI9K1zgHO3gml+t5xEvh85i+p/jwqBuGr9BW3W1/gDbCxiNSjh0JyhIxnsOjWkO+y27ULBxgcVRVS0x0L03dS3H30rykt1FX8FNrjMduql0qoOrfu/Bq5turb6ORnv9ZFT7lWh3TcuYUr5AwX+0G/8XyLL/PQwjKn4HxMBBLc23IczIN6y0GtM0pYIHtrL5pR0Oc0r+ker6Ow7qQbg=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get available project integrations","permalink":"/docs/api/service-api/versions/5.11/get-project-integrations-using-get-1"},"next":{"title":"Get global Report Portal integration instance","permalink":"/docs/api/service-api/versions/5.11/get-global-integration-using-get"}}');var a=i(74848),n=i(28453),s=i(57742),o=i.n(s),p=i(78178),c=i.n(p),l=i(19624),g=i.n(l),d=i(96226),u=i.n(d),j=(i(77675),i(19365),i(51107));const b={id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktzm0gQ/itUn5LUWNip3T1wWm3iJKpkbZUfJ5cOLWhJkx1myEwjr4riv6cakABLcZxwoZh+zNdfv6iAcR0geQBtmdYeWTt7ljrL3hlDHhYKXEHt+SyDBNbEc+++Usqz3iLcB23XHy/vQEGBHnNi8uK2Aos5QQKFKdfaXsmHAm3lBHkDCjIKqdeFeHmq5ulbqT1lkLAvSUFIN5QjJBXwrhCngb22a6hr1d/TYvv5RSO9l9+0EOVQOBsoiPzt+bm8xs6vP4MCIZEsi/RN/EZeR17Re9wJTKa88caajQgG1N5QcKVPBWVn5ZaCXJj2khrWLZLUU2PwHpmOkStYOZ8jQwIZMp2xzglq1Vo5fyJUBWRxaYSUg2zpnCG0ItTD86Z4yA9v0Zb/+qNR7GOZD0qjej6cemx51+ieJEhELyYJS958MO7xFEFky1w64Xp6f/cJFPwzvZ29AwV3158vr0DBh+ubf0HBl/fTOSz21P0y4RkxavMyAp5NwNq7sjjw8jR3bTucEPDY4seZq5/z0rXP7GVF0D0SfOEpRZaYVmgCPW3Lj8QRblEbCTzqbokGhRCilfNROyZAQU68cd1YamYPbyCBeHsRD2zizk9cDbq+jtGYuOoHTg0KAvntfnCV3kACYsIudaZO4riS8nFe866OsdBHQ+WGCud57jyjiVpfoGCLXks4Tc737tqhscLSCE8b5iIcuZvvdfvaFEVQnb4U4QHR8RT65AJHksEIbRYJsuiVXkWWKKPsdeRWUYs3egq4x5VR7ia+0SoapYl2ks6FUJWW7b0PFSwJPflpKew/LESs7coNG3ZIzQ942+OYzmdR5tIyJ8tN/rphimkzTLtBf1sWYiTc5KglVaE9+fsIrwKjU7KBBubTAtMNRW8n56C6VAupSRw/Pj5OsJFOnF/HnWmIv8zeXV7dXp6JSa1A6qRF/+fk4qI9K1zgHO3gml+t5xEvh85i+p/jwqBuGr9BW3W1/gDbCxiNSjh0JyhIxnsOjWkO+y27ULBxgcVRVS0x0L03dS3H30rykt1FX8FNrjMduql0qoOrfu/Bq5turb6ORnv9ZFT7lWh3TcuYUr5AwX+0G/8XyLL/PQwjKn4HxMBBLc23IczIN6y0GtM0pYIHtrL5pR0Oc0r+ker6Ow7qQbg=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},m=void 0,v={},f=[];function y(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Get available project integrations for plugin"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/v1/integration/project/{projectName}/all/{pluginName}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Get available project integrations for plugin"}),"\n",(0,a.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(c(),{parameters:[{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"IntegrationResource",type:"object",properties:{creationDate:{type:"string",format:"date-time"},creator:{type:"string"},enabled:{type:"boolean"},id:{type:"integer",format:"int64"},integrationParameters:{type:"object",properties:{}},integrationType:{title:"IntegrationTypeResource",type:"object",properties:{authFlow:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]},creationDate:{type:"string",format:"date-time"},details:{type:"object",properties:{}},enabled:{type:"boolean"},groupType:{type:"string"},name:{type:"string"},type:{type:"integer",format:"int64"}}},name:{type:"string"},projectId:{type:"integer",format:"int64"}}}}}}}}})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);