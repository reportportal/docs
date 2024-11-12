"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90244],{36741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>j,default:()=>k,frontMatter:()=>g,metadata:()=>i,toc:()=>v});const i=JSON.parse('{"id":"api/service-api/versions/5.10/execute-integration-command-using-put","title":"Execute command to the integration instance","description":"Execute command to the integration instance","source":"@site/docs/api/service-api/versions/5.10/execute-integration-command-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/execute-integration-command-using-put","permalink":"/docs/api/service-api/versions/5.10/execute-integration-command-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"execute-integration-command-using-put","title":"Execute command to the integration instance","description":"Execute command to the integration instance","sidebar_label":"Execute command to the integration instance","hide_title":true,"hide_table_of_contents":true,"api":"eJydVlFv20YM/isCn9ribCXFtgc9LQ0CzNjQGUnzFPjhfKKta6W76x0VxxD03wfeybZkd+mWPMX0R/Ij+ZHnDkhuAxRPoA3h1kvS1syUNeRtXaOHlQDrMNkXJRSAL6hawsUJfmubRpryMWizXT5+AQFOetkgoefIHRjZIBSgEg4EaAMFOEkVCCgxKK8dB5pgPH5vtccSCvItCgiqwkZC0QHtHYcL5LXZQt+LY4ZRDYvX85wjf5otOqAHARvrG0nJ9Nsvk/zO26+o6DN/ei37FPffK10lMAb6ZMs9I6Zx02y0NUseQAABPEk0xFDpXK1VLDn/GhjfXaayayYGfd+f84qG4KwJGNjh49XVJYG//5zm/JB/+EkaTlSi86gkcaqNrAMKeJkpW+IWzWwoeLa25X429PmyzimNu6TRbFBTRjajCrPR0DNtAkmjuP/4QmiCtiap9RvuoXiVgIBnWbc/IsITapAqy5viWoq7QBUUkD9f56P8eTfSQJ93Ez32eTcw70FAQP982KTW11AA+5JVtu6LPO9kS5X1mvZ9Lp2+6MU9OutpaT3JOkuxYgFey3WdRnkIl+a5kW3N8q6I3GVrlwesADRtw5eDgSAG/KoXcGR0KZA/bKCMm5jxXJhZ9k5vMoNYYvk+s5ss8c3OCZ94ldjYuY8oF0FzbVlJK26ValPepw7WKD36m5bb/7Qaf/3Ackylj0FHdQ4FRdXy5wTiTQdenPvTCt69yMbVCEXX875vbIyiiU2Tzv/LWA5l3iwXWWlV26ChKIJhjaSKazTI/qF17MStb6RmJYRk+f2iHQJqrdAEHLnfOKkqzD7Or0AMSuJKizzf7XZzGb+dW7/NB9eQ/7W4vfv8cDdjl14AyzCx/3V+fTW/ZpuzgRppRmn+3/JNunKcAOEL5a6W2nCOyLUbNukJnq/jcT2GAwHF9KIW5+e9OLwrKwGVDcRhum4tAz76uu/Z/L1Fz8JZnZYjyqjUgf8/naYzxsdrB+/uh4P5Pjs9Yz8saDBKsx/dEhDD6Tk488Pypuzn1b+BwzTEm5lMx/IGHuMAPd+WCmWJfnSob1Pe2ReOc4pw8dpxDcnjRil0NMLyKzW53OlXzHp4YxtbMsrLHT/Wcpf42Vh5PCLR1kEtzbaVW8amjPz3DyA7QXw=","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Test connection to the integration through the project config","permalink":"/docs/api/service-api/versions/5.10/test-integration-connection-using-get-1"},"next":{"title":"Create project Report Portal integration instance","permalink":"/docs/api/service-api/versions/5.10/create-project-integration-using-post"}}');var a=n(74848),o=n(28453),s=n(57742),c=n.n(s),r=n(78178),p=n.n(r),d=n(19624),u=n.n(d),m=n(96226),l=n.n(m),h=(n(77675),n(19365),n(51107));const g={id:"execute-integration-command-using-put",title:"Execute command to the integration instance",description:"Execute command to the integration instance",sidebar_label:"Execute command to the integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVlFv20YM/isCn9ribCXFtgc9LQ0CzNjQGUnzFPjhfKKta6W76x0VxxD03wfeybZkd+mWPMX0R/Ij+ZHnDkhuAxRPoA3h1kvS1syUNeRtXaOHlQDrMNkXJRSAL6hawsUJfmubRpryMWizXT5+AQFOetkgoefIHRjZIBSgEg4EaAMFOEkVCCgxKK8dB5pgPH5vtccSCvItCgiqwkZC0QHtHYcL5LXZQt+LY4ZRDYvX85wjf5otOqAHARvrG0nJ9Nsvk/zO26+o6DN/ei37FPffK10lMAb6ZMs9I6Zx02y0NUseQAABPEk0xFDpXK1VLDn/GhjfXaayayYGfd+f84qG4KwJGNjh49XVJYG//5zm/JB/+EkaTlSi86gkcaqNrAMKeJkpW+IWzWwoeLa25X429PmyzimNu6TRbFBTRjajCrPR0DNtAkmjuP/4QmiCtiap9RvuoXiVgIBnWbc/IsITapAqy5viWoq7QBUUkD9f56P8eTfSQJ93Ez32eTcw70FAQP982KTW11AA+5JVtu6LPO9kS5X1mvZ9Lp2+6MU9OutpaT3JOkuxYgFey3WdRnkIl+a5kW3N8q6I3GVrlwesADRtw5eDgSAG/KoXcGR0KZA/bKCMm5jxXJhZ9k5vMoNYYvk+s5ss8c3OCZ94ldjYuY8oF0FzbVlJK26ValPepw7WKD36m5bb/7Qaf/3Ackylj0FHdQ4FRdXy5wTiTQdenPvTCt69yMbVCEXX875vbIyiiU2Tzv/LWA5l3iwXWWlV26ChKIJhjaSKazTI/qF17MStb6RmJYRk+f2iHQJqrdAEHLnfOKkqzD7Or0AMSuJKizzf7XZzGb+dW7/NB9eQ/7W4vfv8cDdjl14AyzCx/3V+fTW/ZpuzgRppRmn+3/JNunKcAOEL5a6W2nCOyLUbNukJnq/jcT2GAwHF9KIW5+e9OLwrKwGVDcRhum4tAz76uu/Z/L1Fz8JZnZYjyqjUgf8/naYzxsdrB+/uh4P5Pjs9Yz8saDBKsx/dEhDD6Tk488Pypuzn1b+BwzTEm5lMx/IGHuMAPd+WCmWJfnSob1Pe2ReOc4pw8dpxDcnjRil0NMLyKzW53OlXzHp4YxtbMsrLHT/Wcpf42Vh5PCLR1kEtzbaVW8amjPz3DyA7QXw=",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},j=void 0,f={},v=[];function x(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Execute command to the integration instance"}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v1/integration/{projectName}/{integrationId}/{command}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Execute command to the integration instance"}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[{name:"command",in:"path",description:"command",required:!0,schema:{type:"string"}},{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(u(),{title:"Body",body:{description:"executionParams",content:{"application/json":{schema:{type:"object"}}},required:!0}}),"\n",(0,a.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object"}}}}}})]})}function k(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);