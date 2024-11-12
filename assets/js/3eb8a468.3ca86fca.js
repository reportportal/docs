"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[97412],{14027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>N,frontMatter:()=>g,metadata:()=>i,toc:()=>k});const i=JSON.parse('{"id":"api/service-api/versions/5.11/compare-launches-using-get","title":"Compare launches","description":"Compare launches","source":"@site/docs/api/service-api/versions/5.11/compare-launches-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/compare-launches-using-get","permalink":"/docs/api/service-api/versions/5.11/compare-launches-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"compare-launches-using-get","title":"Compare launches","description":"Compare launches","sidebar_label":"Compare launches","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1v1DAQ/SvRnACZTVs+DjlRVRVUIKgonFZ7mI1nN4bENvakZYny39Ek2SXbFBqxl2jtN88vz/ORBhi3EbIllFjbvHieO8vBlSUFWClwngKycfZKQwa5qzwG+tAhKX6Nxm7fXn4BBR4DVsQUhKoBixVBBkZHUGAsZPCjprADBZpiHowXygMg0I/aBNKQcahJQeRdKeEbFypQQD996TQddvOCKoSsAd55gWEIKNSGqYqjdWOZthRAdUTI/dLrl9C2rTpo9MF9o5w/yr9Bq0cuJlKPcRPJ90VFDsZuoW1XAo7e2UiduLOTE3kck396DwrEebIsu8/SZ/KYsLq1aAAFqLWRWCyvg9wRG4r/tMRwZ+lFgYFvGNlENnm8GI5UkwP8Ea3Rs3xVg6kTFxTYulpTeJTlxZmAI2PgL2agGqTL/8hY+UfVamSaeZLG3Uxk4erweHb12MrYmmk22lkuZmItWjeXN1LurJ6LZlM9blp/yQL95Sx92mwi8Uz+HeG8629bBbdY1kf+zU38Q9ntf1LGPlCOLMW6wTLS/cq+6LtaUg5tDRRUxIWTjrelLr2kIWSQ3p6mzagPtGkfkg59EcTzcLtvgnUoIQMJYJe7ss3StMGaCxcM79oUvZk0mc/kXeBrFxjLpOcCcSMYXJf9i+7p+iaywboU7wpmHyd013usArJ1JV1egKAG/KpVcFA07UrvXOREKjpBqxNRljwxm8QSadJPE7dJer3JfcF/dGmq3CJ0KN+BFsbJ7ay69Kz7c5cNrAkDhfNafF6uZNvYjRuX/9iav/i213F+fZVol9cVWe6G19BcMe+SdWj8N7WXIPGmQiNXFfuVNxO9CkqTk400Cj/3mBeUnC1OQA1XLaZmaXp3d7fAbnfhwjYdQmP64eri8uPN5XMJkRynEHv1rxanp/2ad5ErtKNjHkjOo1c/ZD7TT059icYKUSeoGRJ3CbenoCA7HmE9Y2dNn70raXKRBd80a4z0NZRtK8v98JZ70iZKJv6llJo/MwyefB5G5NOkn/IP6vxOu8NnQFf0kAHI9e9z/v9PPX7bB0/fT0u7Gx+/VzUmaKVUCkItM2zZDIjzPCfPo1iZ26L+0D/k66htfwOkpTIn","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get all index clusters of the launch","permalink":"/docs/api/service-api/versions/5.11/get-clusters-using-get"},"next":{"title":"Import junit xml report","permalink":"/docs/api/service-api/versions/5.11/import-launch-using-post"}}');var r=a(74848),n=a(28453),s=a(57742),o=a.n(s),p=a(78178),c=a.n(p),l=a(19624),m=a.n(l),d=a(96226),u=a.n(d),f=(a(77675),a(19365),a(51107));const g={id:"compare-launches-using-get",title:"Compare launches",description:"Compare launches",sidebar_label:"Compare launches",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v1DAQ/SvRnACZTVs+DjlRVRVUIKgonFZ7mI1nN4bENvakZYny39Ek2SXbFBqxl2jtN88vz/ORBhi3EbIllFjbvHieO8vBlSUFWClwngKycfZKQwa5qzwG+tAhKX6Nxm7fXn4BBR4DVsQUhKoBixVBBkZHUGAsZPCjprADBZpiHowXygMg0I/aBNKQcahJQeRdKeEbFypQQD996TQddvOCKoSsAd55gWEIKNSGqYqjdWOZthRAdUTI/dLrl9C2rTpo9MF9o5w/yr9Bq0cuJlKPcRPJ90VFDsZuoW1XAo7e2UiduLOTE3kck396DwrEebIsu8/SZ/KYsLq1aAAFqLWRWCyvg9wRG4r/tMRwZ+lFgYFvGNlENnm8GI5UkwP8Ea3Rs3xVg6kTFxTYulpTeJTlxZmAI2PgL2agGqTL/8hY+UfVamSaeZLG3Uxk4erweHb12MrYmmk22lkuZmItWjeXN1LurJ6LZlM9blp/yQL95Sx92mwi8Uz+HeG8629bBbdY1kf+zU38Q9ntf1LGPlCOLMW6wTLS/cq+6LtaUg5tDRRUxIWTjrelLr2kIWSQ3p6mzagPtGkfkg59EcTzcLtvgnUoIQMJYJe7ss3StMGaCxcM79oUvZk0mc/kXeBrFxjLpOcCcSMYXJf9i+7p+iaywboU7wpmHyd013usArJ1JV1egKAG/KpVcFA07UrvXOREKjpBqxNRljwxm8QSadJPE7dJer3JfcF/dGmq3CJ0KN+BFsbJ7ay69Kz7c5cNrAkDhfNafF6uZNvYjRuX/9iav/i213F+fZVol9cVWe6G19BcMe+SdWj8N7WXIPGmQiNXFfuVNxO9CkqTk400Cj/3mBeUnC1OQA1XLaZmaXp3d7fAbnfhwjYdQmP64eri8uPN5XMJkRynEHv1rxanp/2ad5ErtKNjHkjOo1c/ZD7TT059icYKUSeoGRJ3CbenoCA7HmE9Y2dNn70raXKRBd80a4z0NZRtK8v98JZ70iZKJv6llJo/MwyefB5G5NOkn/IP6vxOu8NnQFf0kAHI9e9z/v9PPX7bB0/fT0u7Gx+/VzUmaKVUCkItM2zZDIjzPCfPo1iZ26L+0D/k66htfwOkpTIn",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},h=void 0,v={},k=[];function y(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Compare launches"}),"\n",(0,r.jsx)(o(),{method:"get",path:"/v1/{projectName}/launch/compare",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Compare launches"}),"\n",(0,r.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",additionalProperties:{type:"array",items:{title:"ChartStatisticsContent",type:"object",properties:{id:{type:"integer",format:"int64"},name:{type:"string"},number:{type:"integer",format:"int32"},startTime:{title:"Timestamp",type:"object",properties:{date:{type:"integer",format:"int32"},day:{type:"integer",format:"int32"},hours:{type:"integer",format:"int32"},minutes:{type:"integer",format:"int32"},month:{type:"integer",format:"int32"},nanos:{type:"integer",format:"int32"},seconds:{type:"integer",format:"int32"},time:{type:"integer",format:"int64"},timezoneOffset:{type:"integer",format:"int32"},year:{type:"integer",format:"int32"}}},values:{type:"object",additionalProperties:{type:"string"}}}}}}}}}}})]})}function N(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(y,{...e})}):y(e)}}}]);