"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37432],{48242:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>R,contentTitle:()=>f,default:()=>Z,frontMatter:()=>S,metadata:()=>n,toc:()=>L});const n=JSON.parse('{"id":"api/service-api/finish-launch","title":"Finish Launch","description":"Finish launch for specified project","source":"@site/docs/api/service-api/finish-launch.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/finish-launch","permalink":"/docs/api/service-api/finish-launch","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"finish-launch","title":"Finish Launch","description":"Finish launch for specified project","sidebar_label":"Finish Launch","hide_title":true,"hide_table_of_contents":true,"api":"eJy9Vttu4zYQ/RVhnnYB2rLdZLPVU93UQd01Etd2sEANP9DS2OauRCoklcQQ9O+LIWlbuTQNiqJ6ES9z55xD1mD51kCyhJxXMt11uNnLtJMqabXKc9SwYpChSbUorVASErgSUphd5OWjjdKRKTEVG4FZVGr1DVMLDFSJmpPGOIMENk5n4lSAQck1L9CiJs81SF4gJCGCcQYMBDkquSVhjXeV0JhBYnWFDEy6w4JDUoPdl6RnrBZyC03DjqZCHNc0+7fWVl4Yjf1VZXuSoKqgtDTkZZmL1CUYfzNUl7pl6uRkCSizhSiQ6hg8qHWoUampSlagcSat1WJdWT8r+OPYYmEgGZx/YlAIGaY9BpUUdxWGuU8jmOZa8z1l7PeeRnLP8+odcXzH/SvlYEHdhzZBubU7SAb9s4uzzz99OrtwIR6W++ylutkbi0XL8lqpHLkEBvjIizJHSDY8N9g0DKywNAfKcXisy+xPOuRjRV8EyWCjdMEtJJBxix1LUuTacluZ1+RRVgWVZjqcz0e/sehqOJ7Qf764mU7d4MvYD8bXi9Fsdjtd0ORyeH05mkz8+tUNi74OZ9ewap5B5ZUOPWbmUTR6xLQiYZda87w93YIplTT+aAa9Hv2e4vHmC7D3t+bbZy+yV49eVsUadWtLSItb1O2KC2k/nZFwLuT39+Tu2WA2p8Rpt0C7U0QWZeUCI7wmEN8P4roF5yb2NBHXB7poYs8uwMCgvj+QSqVzSKB2mWOTxHG9U8Y2MS8FPKe0GZZK26nSlufRcDqOvCGgpteCr3NfHW+LRoe+2VlbAnM/45lyw6ucyuF2Ggbk9OWZ/a6MjYirIi6ziJxHH8QmkogZZh8jtYl8SFGI6RjPyUGGhepqJ1U6oa5QVMoVlSGttLB7V4c1co16WFE1l6v29tyl4zJrCx1PLiR3yDoIAQuDq8PJ//F14Y6Xmm12YszRAdVPqW0ZGOYEwkAsp4UDVXg6WLUQD4Pe4KzTu+gMfl70z5PzfjL43O1d9P+CE8r/GzA/b5ETGITcKFel0M3t5vnnzspUWhUorcNnAC5PXYuEu2telaRD7FRwQU1s/MovL06bwJaiNNhSH5Y83WE06PaABRDQQSZx/PDw0OVut6v0Ng6qJp6ML0fX81GHVIjnURsf/Hm3H9ZKZWzBZctNeAUcr/RnxHfko3c+F0LLWXy0cZlzIcmri74OTLCE+wEwSJ5e7fnBf9J6PQQ+WB3Qt4S6XnODtzpvGlq+q1ATOlYngLvGzIShcRZa742sPswCUX+M/i76w5Us960eBxa6/xguvVr+R7/t8jV0Y+2QZ8TtR1xeemedBdk5WXhxrVDgXmOYpljaN2VXLX6f3i6IRMKjqlAZqWj+QK8z/uCDVS53/4ShtRpyLrcV35KsN0nfD2ZQoBk=","sidebar_class_name":"put api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"launch-async-controller","permalink":"/docs/api/service-api/launch-async-controller"},"next":{"title":"Starts launch for specified project","permalink":"/docs/api/service-api/start-launch"}}');var a=i(74848),s=i(28453),r=i(57742),c=i.n(r),p=i(78178),l=i.n(p),u=i(19624),o=i.n(u),d=i(96226),h=i.n(d),m=(i(77675),i(19365),i(51107));const S={id:"finish-launch",title:"Finish Launch",description:"Finish launch for specified project",sidebar_label:"Finish Launch",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vttu4zYQ/RVhnnYB2rLdZLPVU93UQd01Etd2sEANP9DS2OauRCoklcQQ9O+LIWlbuTQNiqJ6ES9z55xD1mD51kCyhJxXMt11uNnLtJMqabXKc9SwYpChSbUorVASErgSUphd5OWjjdKRKTEVG4FZVGr1DVMLDFSJmpPGOIMENk5n4lSAQck1L9CiJs81SF4gJCGCcQYMBDkquSVhjXeV0JhBYnWFDEy6w4JDUoPdl6RnrBZyC03DjqZCHNc0+7fWVl4Yjf1VZXuSoKqgtDTkZZmL1CUYfzNUl7pl6uRkCSizhSiQ6hg8qHWoUampSlagcSat1WJdWT8r+OPYYmEgGZx/YlAIGaY9BpUUdxWGuU8jmOZa8z1l7PeeRnLP8+odcXzH/SvlYEHdhzZBubU7SAb9s4uzzz99OrtwIR6W++ylutkbi0XL8lqpHLkEBvjIizJHSDY8N9g0DKywNAfKcXisy+xPOuRjRV8EyWCjdMEtJJBxix1LUuTacluZ1+RRVgWVZjqcz0e/sehqOJ7Qf764mU7d4MvYD8bXi9Fsdjtd0ORyeH05mkz8+tUNi74OZ9ewap5B5ZUOPWbmUTR6xLQiYZda87w93YIplTT+aAa9Hv2e4vHmC7D3t+bbZy+yV49eVsUadWtLSItb1O2KC2k/nZFwLuT39+Tu2WA2p8Rpt0C7U0QWZeUCI7wmEN8P4roF5yb2NBHXB7poYs8uwMCgvj+QSqVzSKB2mWOTxHG9U8Y2MS8FPKe0GZZK26nSlufRcDqOvCGgpteCr3NfHW+LRoe+2VlbAnM/45lyw6ucyuF2Ggbk9OWZ/a6MjYirIi6ziJxHH8QmkogZZh8jtYl8SFGI6RjPyUGGhepqJ1U6oa5QVMoVlSGttLB7V4c1co16WFE1l6v29tyl4zJrCx1PLiR3yDoIAQuDq8PJ//F14Y6Xmm12YszRAdVPqW0ZGOYEwkAsp4UDVXg6WLUQD4Pe4KzTu+gMfl70z5PzfjL43O1d9P+CE8r/GzA/b5ETGITcKFel0M3t5vnnzspUWhUorcNnAC5PXYuEu2telaRD7FRwQU1s/MovL06bwJaiNNhSH5Y83WE06PaABRDQQSZx/PDw0OVut6v0Ng6qJp6ML0fX81GHVIjnURsf/Hm3H9ZKZWzBZctNeAUcr/RnxHfko3c+F0LLWXy0cZlzIcmri74OTLCE+wEwSJ5e7fnBf9J6PQQ+WB3Qt4S6XnODtzpvGlq+q1ATOlYngLvGzIShcRZa742sPswCUX+M/i76w5Us960eBxa6/xguvVr+R7/t8jV0Y+2QZ8TtR1xeemedBdk5WXhxrVDgXmOYpljaN2VXLX6f3i6IRMKjqlAZqWj+QK8z/uCDVS53/4ShtRpyLrcV35KsN0nfD2ZQoBk=",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},f=void 0,R={},L=[];function U(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Finish Launch"}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v2/{projectName}/launch/{launchId}/finish",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Finish launch for specified project"}),"\n",(0,a.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"launchId",in:"path",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(o(),{title:"Body",body:{content:{"application/json":{schema:{required:["endTime"],type:"object",properties:{attributes:{maxItems:256,minItems:0,uniqueItems:!0,type:"array",items:{required:["value"],type:"object",properties:{key:{type:"string"},value:{maxLength:2147483647,minLength:1,type:"string"},system:{type:"boolean",example:!1}},title:"ItemAttributesRQ"}},endTime:{type:"string",format:"date-time"},status:{type:"string",enum:["PASSED, FAILED, STOPPED, SKIPPED, INTERRUPTED, CANCELLED, INFO, WARN"]},description:{type:"string"}},title:"FinishExecutionRQ"}}},required:!0}}),"\n",(0,a.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},number:{type:"integer",format:"int64"},link:{type:"string"}},title:"FinishLaunchRS"}}}}}})]})}function Z(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(U,{...e})}):U(e)}}}]);