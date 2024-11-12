"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[59543],{22053:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>D,frontMatter:()=>b,metadata:()=>a,toc:()=>v});const a=JSON.parse('{"id":"api/service-api/get-project-integrations","title":"Get available project integrations","description":"Get available project integrations","source":"@site/docs/api/service-api/get-project-integrations.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-project-integrations","permalink":"/docs/api/service-api/get-project-integrations","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-project-integrations","title":"Get available project integrations","description":"Get available project integrations","sidebar_label":"Get available project integrations","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v20gM/SsCTy0wsZJidw86rdsmrbfdxEhS7CHwgZZoe9qRZjpDOWsI+u8FR7ItfwAp4ossDik+vnkkG2BcBsieQFdMS4+sbXWR24q9NYY8zBRYR519UkAGS+Kpt98p58k+IoAChx5LYvLyuQYqLAkycJ3vrbwp0JWYkFegwNPPWnsqIGNfk4KQr6hEyBrgjZPQwF5XS2jbmTgHZ6tAQc7fXV7Ko6CQe+0kP2Rw9wUUCHCqWE7ROaPziC79HsSlOU2B3uNGcDGVYWC3cwEtRXmpnnWXWBcDn0gYeVCwsL5E7kx//QGt2lY9+V3/jqyTytXwVh7j2UsQ+dDrVUmpwrmhIfa5tYawkkOseXVj7PNppATWpWjpbvzt8TMoeD9+mHwABY93X65vQcHN3f2/oODrx/EUZq2C3FMs7SPyGSQDzAUyXbAuSRAsva3dERt78AUxanP2MrEotKRDMz3D2davbVsFrNmIbXLI/z0FW/ucjq5mOpD+69O+QHwky/qzRb+GyPNV7iuMP3XUZZ+IE1yjNgI06WWe6MNJUBKvbD8r4mDgFWSQrq/SgWPaB6fNYES0KRoDCgL59XaQ1N5ABk3sXWqzNG1WNnCbotNwDO+enPU8tZ7RJOPpJOk+BArW6LVgDrs5EInaKnbF7EDFR5CZV9ACayOMxZNWgSQ9nTqfbeBEGinBqkgkefJGL5KKqKDibWIXSQcp6THt8OwTFFTakY9eLjqNtBX2Z0JDXnvNm8jDnNCTH9dC5tNsePwQy4mVDZ12MuiL21bdO4Hq/9xsxfHPf49RFrpa2Bjey2PI6suUFzavS6o43nI/kzGP3PU74aF2EiMDo0Qttxs6y98nNCgwOqcq0CB87DBfUfJudAmqV4dUmKXp8/PzCOPpyPpl2oeG9Ovkw/Xtw/WFhLQKRFod+D9HV73N2cAlVoM0vyX1Ay52hDP9z6kzqGPjRohN3wZPsL6Cg+EBu3UBCrLDfSndMNtq7wmaZo6BvnnTtmL+WZMXbcz28o5KKXTo58gCTaATlLstCW/u+yX8NgF1Hv12U1ab2EWmljdQ8IM2R+u9lZG+IizIRxidxzjPyfEg9mQxi5R3I+PTtWjwF/TQ9E4=","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Test connection to the global integration","permalink":"/docs/api/service-api/test-integration-connection-1"},"next":{"title":"Get available project integrations for plugin","permalink":"/docs/api/service-api/get-project-integrations-1"}}');var n=i(74848),r=i(28453),o=i(57742),s=i.n(o),p=i(78178),c=i.n(p),l=i(19624),d=i.n(l),g=i(96226),m=i.n(g),j=(i(77675),i(19365),i(51107));const b={id:"get-project-integrations",title:"Get available project integrations",description:"Get available project integrations",sidebar_label:"Get available project integrations",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v20gM/SsCTy0wsZJidw86rdsmrbfdxEhS7CHwgZZoe9qRZjpDOWsI+u8FR7ItfwAp4ossDik+vnkkG2BcBsieQFdMS4+sbXWR24q9NYY8zBRYR519UkAGS+Kpt98p58k+IoAChx5LYvLyuQYqLAkycJ3vrbwp0JWYkFegwNPPWnsqIGNfk4KQr6hEyBrgjZPQwF5XS2jbmTgHZ6tAQc7fXV7Ko6CQe+0kP2Rw9wUUCHCqWE7ROaPziC79HsSlOU2B3uNGcDGVYWC3cwEtRXmpnnWXWBcDn0gYeVCwsL5E7kx//QGt2lY9+V3/jqyTytXwVh7j2UsQ+dDrVUmpwrmhIfa5tYawkkOseXVj7PNppATWpWjpbvzt8TMoeD9+mHwABY93X65vQcHN3f2/oODrx/EUZq2C3FMs7SPyGSQDzAUyXbAuSRAsva3dERt78AUxanP2MrEotKRDMz3D2davbVsFrNmIbXLI/z0FW/ucjq5mOpD+69O+QHwky/qzRb+GyPNV7iuMP3XUZZ+IE1yjNgI06WWe6MNJUBKvbD8r4mDgFWSQrq/SgWPaB6fNYES0KRoDCgL59XaQ1N5ABk3sXWqzNG1WNnCbotNwDO+enPU8tZ7RJOPpJOk+BArW6LVgDrs5EInaKnbF7EDFR5CZV9ACayOMxZNWgSQ9nTqfbeBEGinBqkgkefJGL5KKqKDibWIXSQcp6THt8OwTFFTakY9eLjqNtBX2Z0JDXnvNm8jDnNCTH9dC5tNsePwQy4mVDZ12MuiL21bdO4Hq/9xsxfHPf49RFrpa2Bjey2PI6suUFzavS6o43nI/kzGP3PU74aF2EiMDo0Qttxs6y98nNCgwOqcq0CB87DBfUfJudAmqV4dUmKXp8/PzCOPpyPpl2oeG9Ovkw/Xtw/WFhLQKRFod+D9HV73N2cAlVoM0vyX1Ay52hDP9z6kzqGPjRohN3wZPsL6Cg+EBu3UBCrLDfSndMNtq7wmaZo6BvnnTtmL+WZMXbcz28o5KKXTo58gCTaATlLstCW/u+yX8NgF1Hv12U1ab2EWmljdQ8IM2R+u9lZG+IizIRxidxzjPyfEg9mQxi5R3I+PTtWjwF/TQ9E4=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,u={},v=[];function N(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Get available project integrations"}),"\n",(0,n.jsx)(s(),{method:"get",path:"/v1/integration/project/{projectName}/all",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Get available project integrations"}),"\n",(0,n.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(c(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{id:{type:"integer",format:"int64"},projectId:{type:"integer",format:"int64"},name:{type:"string"},integrationType:{type:"object",properties:{type:{type:"integer",format:"int64"},name:{type:"string"},enabled:{type:"boolean"},authFlow:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]},creationDate:{type:"string",format:"date-time"},groupType:{type:"string"},details:{type:"object",additionalProperties:{type:"object"}}},title:"IntegrationTypeResource"},integrationParameters:{type:"object",additionalProperties:{type:"object"}},enabled:{type:"boolean"},creator:{type:"string"},creationDate:{type:"string",format:"date-time"}},title:"IntegrationResource"}}}}}}})]})}function D(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);