"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50284],{7992:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>f,contentTitle:()=>v,default:()=>G,frontMatter:()=>g,metadata:()=>a,toc:()=>j});const a=JSON.parse('{"id":"api/service-api/versions/5.10/get-all-launch-names-using-get","title":"Get launch names of project","description":"Get launch names of project","source":"@site/docs/api/service-api/versions/5.10/get-all-launch-names-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-all-launch-names-using-get","permalink":"/docs/api/service-api/versions/5.10/get-all-launch-names-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-all-launch-names-using-get","title":"Get launch names of project","description":"Get launch names of project","sidebar_label":"Get launch names of project","hide_title":true,"hide_table_of_contents":true,"api":"eJydVctu2zAQ/BVhT0nASHaAXnSqUQRp0CANkuZk+EBLa4stRTLkyqkh6N+LFWVHjp2iqC+GyeHs7OzDLZBcB8jnoGVjiuqysIa81Ro9LARYh16Ssua2hBzWSDOt73rgvawxPAdl1jfXP0CAk17WSOiZrAUja4QcVkoT+rQwlPYnApSBHF4a9FsQUGIovHIc4CTY40ujPJaQk29QQCgqrCXkLdDWMX8gr8wauk7sQzpvf2JB96NwTlJ1FO0Q9++RFgwOzpqAge+vJhP+OiT//g0EsJVoiG8vsgv+OmKV3ks2QhHW4VQ0/rBy57GQxPpWUgd8n8wNUhILmLANIbGrZEgQBNRIlR0K2JeKKsgh20yzduRCl0WGrGcAAQH9ZlfPxmvIgeFkC6u7PMta2VBlvaJtl0mnjgx+RGc9PVhPUieRCwRspFdyqaN3O7po4Eo2miCHisiFI7qHHVYAmqbmlmUgiAG/6ATsFR1X5KsN1HuTSFMmrCw5U6vEIJZYnrNfUW/yXvCbrhJrm/oe5XpQqiyXaMFWFU2MO29hidKjnzXs8nwxvn7i+sfUx6B92YeE+jbh3xHE7Q3KrGyPVKTxnbsfWL9LZfZwm5S2aGo01A/z0Juy6HtzmJunxvEjtreWiqsd4snno5QFaFWgCTh6PnOyqDC5Sicghm7hbPIse319TWV/m1q/zoanIbu7/XJ9/3R9yU86AdxqUf2ndDpJp3zmbKBamlGYvzf6gQt7Vwl/U+a0VIY5e23tMARz2ExBQH64DGIAEBAnYSGgsoEY3bZLGfDZ667j47jHuOalCtzVH8xn+7YL4OxxWDXnyfHCO6n4F25PbseN1A2jgVtsN1f/r+bQg5NKdlvLbMfhdwrHBB2PY4WyRN8riohZUaCj0Vvei6x+v6H4z6Tr/gAVmkNk","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get launches of specified project from DEBUG mode","permalink":"/docs/api/service-api/versions/5.10/get-debug-launches-using-get"},"next":{"title":"Get all unique owners of project launches","permalink":"/docs/api/service-api/versions/5.10/get-all-owners-using-get"}}');var t=s(74848),i=s(28453),r=s(57742),o=s.n(r),l=s(78178),c=s.n(l),p=s(19624),u=s.n(p),m=s(96226),d=s.n(m),h=(s(77675),s(19365),s(51107));const g={id:"get-all-launch-names-using-get",title:"Get launch names of project",description:"Get launch names of project",sidebar_label:"Get launch names of project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVctu2zAQ/BVhT0nASHaAXnSqUQRp0CANkuZk+EBLa4stRTLkyqkh6N+LFWVHjp2iqC+GyeHs7OzDLZBcB8jnoGVjiuqysIa81Ro9LARYh16Ssua2hBzWSDOt73rgvawxPAdl1jfXP0CAk17WSOiZrAUja4QcVkoT+rQwlPYnApSBHF4a9FsQUGIovHIc4CTY40ujPJaQk29QQCgqrCXkLdDWMX8gr8wauk7sQzpvf2JB96NwTlJ1FO0Q9++RFgwOzpqAge+vJhP+OiT//g0EsJVoiG8vsgv+OmKV3ks2QhHW4VQ0/rBy57GQxPpWUgd8n8wNUhILmLANIbGrZEgQBNRIlR0K2JeKKsgh20yzduRCl0WGrGcAAQH9ZlfPxmvIgeFkC6u7PMta2VBlvaJtl0mnjgx+RGc9PVhPUieRCwRspFdyqaN3O7po4Eo2miCHisiFI7qHHVYAmqbmlmUgiAG/6ATsFR1X5KsN1HuTSFMmrCw5U6vEIJZYnrNfUW/yXvCbrhJrm/oe5XpQqiyXaMFWFU2MO29hidKjnzXs8nwxvn7i+sfUx6B92YeE+jbh3xHE7Q3KrGyPVKTxnbsfWL9LZfZwm5S2aGo01A/z0Juy6HtzmJunxvEjtreWiqsd4snno5QFaFWgCTh6PnOyqDC5Sicghm7hbPIse319TWV/m1q/zoanIbu7/XJ9/3R9yU86AdxqUf2ndDpJp3zmbKBamlGYvzf6gQt7Vwl/U+a0VIY5e23tMARz2ExBQH64DGIAEBAnYSGgsoEY3bZLGfDZ667j47jHuOalCtzVH8xn+7YL4OxxWDXnyfHCO6n4F25PbseN1A2jgVtsN1f/r+bQg5NKdlvLbMfhdwrHBB2PY4WyRN8riohZUaCj0Vvei6x+v6H4z6Tr/gAVmkNk",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},v=void 0,f={},j=[];function A(e){const n={p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get launch names of project"}),"\n",(0,t.jsx)(o(),{method:"get",path:"/v1/{projectName}/launch/names",context:"endpoint"}),"\n",(0,t.jsx)(n.p,{children:"Get launch names of project"}),"\n",(0,t.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsx)(c(),{parameters:[{name:"filter.cnt.name",in:"query",description:"filter.cnt.name",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,t.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,t.jsx)(d(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function G(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(A,{...e})}):A(e)}}}]);