"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31624],{79501:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>k,frontMatter:()=>v,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"api/service-api/get-global-integration","title":"Get global ReportPortal integration instance","description":"Get global ReportPortal integration instance","source":"@site/docs/api/service-api/get-global-integration.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-global-integration","permalink":"/docs/api/service-api/get-global-integration","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-global-integration","title":"Get global ReportPortal integration instance","description":"Get global ReportPortal integration instance","sidebar_label":"Get global ReportPortal integration instance","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v20gM/SsCTy0wsZJiuwed1m2T1NuPGEmKHgIfaIm2px3NTGeoZANB/33BsWzLsYG0Ocnmh/j49Ei2wLiMUNyBtkzLgKydPSmd5eCMoQAzBc7T2j6poIAl8aVxczSTXQIo8BiwJqYgL2vBYk1QDF86qUCBtlCAR16BgkC/Gh2ogoJDQwpiuaIaoWiBH/02mQIoWLhQI69Nf/8FXTeT9OidjRQl483pqTwqimXQPkEq4OoTKJBWyLJ40XujywQm/xElpD0s6uY/qGRpKEjfrNcFdPVbwFKavGDyu/FrorahkYO2S3EMqLtNvucg8n7Ui4qSxbmhIfa5c4bQihMbXl0Y93CYKYlNLSq6Gn+7/QgK3o1vJu9Bwe3Vp/OvoODi6voLKPj8YTyFWaegDJRa+4B8BMkAc4VMJ6xrEgTL4Br/hI0d+IoYtYnHmMKq0lIOzfQIZ5u4rusUsGYjtsk+/9cUXRNKevJppgPZv7zsM8Qnslw42vRLiDze5a7DLhGxP0yXxNkyzX12Td4FnrrAaLIBF5m2kdGWBApq4pXr10XaDryCAvL7s3yQkLd7+6EDBZHC/WaHNMFAAW0aUeqKPG9XLnKXo9fwFN4epvF0kq1fBAruMWjhNm7HPfG0EeyK2YNKjyjLrqIFNkYIS55OgRQ9XC4fXeRM5ihDW2VSPHulF5klqqh6nblFT1PWY9ri2RWoqHajkKJ8ChppJ+TPhIayCZofEw9zwkBh3AiFd7Oh+ya1kzobBm1V0De36boPAtX/uNho49/vt0kV2i5cSu/VMWT1ecorVzY1Wd6cBFm9WCbu+nNw03jJkX1Ro5avG9eWfw5oUGB0STbSIH3ssVxR9mZ0CqpXh3RY5PnDw8MIk3fkwjLvU2P+efL+/OvN+YmkdApEWmvwb0dnvc27yDXaQZk/lPoeK1vqmf7j3BvUaYIT2LYfgzu4P4O9LQIKiv1TOdvo7g7ado6RvgXTdWL+1VAQXcx20k4qqXTsV8gCTaQDXNtDCK+u+8v7OgN1HG9vRPuYJsg08g8U/KTHg6veyT5fEVYUEpB1zLgsyfMg++D6ipC3a+LyXBT4P1vm8ck=","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Execute command to the integration instance","permalink":"/docs/api/service-api/execute-integration-command"},"next":{"title":"Update global ReportPortal integration instance","permalink":"/docs/api/service-api/update-global-integration"}}');var o=i(74848),n=i(28453),r=i(57742),s=i.n(r),p=i(78178),l=i.n(p),g=i(19624),c=i.n(g),d=i(96226),m=i.n(d),u=(i(77675),i(19365),i(51107));const v={id:"get-global-integration",title:"Get global ReportPortal integration instance",description:"Get global ReportPortal integration instance",sidebar_label:"Get global ReportPortal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v20gM/SsCTy0wsZJiuwed1m2T1NuPGEmKHgIfaIm2px3NTGeoZANB/33BsWzLsYG0Ocnmh/j49Ei2wLiMUNyBtkzLgKydPSmd5eCMoQAzBc7T2j6poIAl8aVxczSTXQIo8BiwJqYgL2vBYk1QDF86qUCBtlCAR16BgkC/Gh2ogoJDQwpiuaIaoWiBH/02mQIoWLhQI69Nf/8FXTeT9OidjRQl483pqTwqimXQPkEq4OoTKJBWyLJ40XujywQm/xElpD0s6uY/qGRpKEjfrNcFdPVbwFKavGDyu/FrorahkYO2S3EMqLtNvucg8n7Ui4qSxbmhIfa5c4bQihMbXl0Y93CYKYlNLSq6Gn+7/QgK3o1vJu9Bwe3Vp/OvoODi6voLKPj8YTyFWaegDJRa+4B8BMkAc4VMJ6xrEgTL4Br/hI0d+IoYtYnHmMKq0lIOzfQIZ5u4rusUsGYjtsk+/9cUXRNKevJppgPZv7zsM8Qnslw42vRLiDze5a7DLhGxP0yXxNkyzX12Td4FnrrAaLIBF5m2kdGWBApq4pXr10XaDryCAvL7s3yQkLd7+6EDBZHC/WaHNMFAAW0aUeqKPG9XLnKXo9fwFN4epvF0kq1fBAruMWjhNm7HPfG0EeyK2YNKjyjLrqIFNkYIS55OgRQ9XC4fXeRM5ihDW2VSPHulF5klqqh6nblFT1PWY9ri2RWoqHajkKJ8ChppJ+TPhIayCZofEw9zwkBh3AiFd7Oh+ya1kzobBm1V0De36boPAtX/uNho49/vt0kV2i5cSu/VMWT1ecorVzY1Wd6cBFm9WCbu+nNw03jJkX1Ro5avG9eWfw5oUGB0STbSIH3ssVxR9mZ0CqpXh3RY5PnDw8MIk3fkwjLvU2P+efL+/OvN+YmkdApEWmvwb0dnvc27yDXaQZk/lPoeK1vqmf7j3BvUaYIT2LYfgzu4P4O9LQIKiv1TOdvo7g7ado6RvgXTdWL+1VAQXcx20k4qqXTsV8gCTaQDXNtDCK+u+8v7OgN1HG9vRPuYJsg08g8U/KTHg6veyT5fEVYUEpB1zLgsyfMg++D6ipC3a+LyXBT4P1vm8ck=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,b={},h=[];function f(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Get global ReportPortal integration instance"}),"\n",(0,o.jsx)(s(),{method:"get",path:"/v1/integration/{integrationId}",context:"endpoint"}),"\n",(0,o.jsx)(t.p,{children:"Get global ReportPortal integration instance"}),"\n",(0,o.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(l(),{parameters:[{name:"integrationId",in:"path",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,o.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,o.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"},projectId:{type:"integer",format:"int64"},name:{type:"string"},integrationType:{type:"object",properties:{type:{type:"integer",format:"int64"},name:{type:"string"},enabled:{type:"boolean"},authFlow:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]},creationDate:{type:"string",format:"date-time"},groupType:{type:"string"},details:{type:"object",additionalProperties:{type:"object"}}},title:"IntegrationTypeResource"},integrationParameters:{type:"object",additionalProperties:{type:"object"}},enabled:{type:"boolean"},creator:{type:"string"},creationDate:{type:"string",format:"date-time"}},title:"IntegrationResource"}}}}}})]})}function k(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}}}]);