"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21999],{69970:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>y,frontMatter:()=>b,metadata:()=>a,toc:()=>q});const a=JSON.parse('{"id":"api/service-api/get-attribute-values-2","title":"Get all unique attribute values of specified launch","description":"Get all unique attribute values of specified launch","source":"@site/docs/api/service-api/get-attribute-values-2.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-attribute-values-2","permalink":"/docs/api/service-api/get-attribute-values-2","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-attribute-values-2","title":"Get all unique attribute values of specified launch","description":"Get all unique attribute values of specified launch","sidebar_label":"Get all unique attribute values of specified launch","hide_title":true,"hide_table_of_contents":true,"api":"eJytVMlu2zAQ/RViTgnAWEnQ9qBTjSJN0xZt0HQ5BEbBSGObKUUy5MipIejfi6FkeUubbr5IFmd58+bxNUBqFiG/BsJIR5qwOiqcpeCMwQATCc5jUKSdvSghhxnSmCjom5rwszI1xq+nIMGroCokDFyqAasqhBym2hCGUWFppLaSQIK2kMNdjWEJEgLe1TpgCTmFGiXEYo6VgrwBWnquFCloO4O2lbvF8W5d+w0uf155qkz8zdJG1baY/zFIbQlnGEDC1IVKUffp2ZOt2j64WyzoHf/rG3hF8z8iYcLB0TsbMfL56fExP0qMRdCedwU5vH8DEniVaIlPlfdGF2mT2W3kkGa/hQpBJQ4Jq/hQa/7JnU7nSEIZI2qr72oUwzrEIglEuKmIHgs91ViKgdsKae56SSUF0RxyyBYnWbPBUZsxlGyomXU1QULEsFjprQ4GcmjSONjmWdbMXaQ2U17DLtoP6F2gSxdIGTG+vBBdIZCwUEGrG9Nx2tXiN7R1xRdkTuRBpkfki1HiVNWGt5xOWgncdH8Rr1wkwdsXypaCm4sDPRUWscTykNnpIIke04Bn3aDEyo1CivIpaKQdL2PCNBR10LRMPNygChjGNVN5Pdk8vkrjpMk2g4YF98Otpu6DQPYvL1eCfv3lI8sZtJ26lK7J4A6rj1NeuqKu0FJSYy9TVSTu+mtyVXvOAQlYKc3bjd2X53s0SDC6QBtxI33sVTFHcTo6BtmrgyfMs+z+/n6k0unIhVnWp8bs7cWLs3dXZ0ec0kpgaXXgn45O+m/eRaqU3Wjzd8rfImfYAOF3yrxR2nKvhLnpb8U1LE5AQr7jHYQVSBiaJgWnyzFZSfEamuZGRfwUTNvy587LWCqljqz1tTHuoBqcAw4+9MZ0KEA+jPYbLh+x+4QMcgC2wr3eW/n7jv7r5H8HPmxm3WiytoP/T9fKbO3WcCs0m1tuJ2wrqEoMCUYXMS4K9LSRu+ftjH8w2PMzvrM/AOCiuLc=","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Load history of test items","permalink":"/docs/api/service-api/get-items-history"},"next":{"title":"Get all unique attribute keys of specified launch","permalink":"/docs/api/service-api/get-attribute-keys-2"}}');var s=i(74848),n=i(28453),r=i(57742),u=i.n(r),l=i(78178),p=i.n(l),c=i(19624),d=i.n(c),o=i(96226),f=i.n(o),m=(i(77675),i(19365),i(51107));const b={id:"get-attribute-values-2",title:"Get all unique attribute values of specified launch",description:"Get all unique attribute values of specified launch",sidebar_label:"Get all unique attribute values of specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJytVMlu2zAQ/RViTgnAWEnQ9qBTjSJN0xZt0HQ5BEbBSGObKUUy5MipIejfi6FkeUubbr5IFmd58+bxNUBqFiG/BsJIR5qwOiqcpeCMwQATCc5jUKSdvSghhxnSmCjom5rwszI1xq+nIMGroCokDFyqAasqhBym2hCGUWFppLaSQIK2kMNdjWEJEgLe1TpgCTmFGiXEYo6VgrwBWnquFCloO4O2lbvF8W5d+w0uf155qkz8zdJG1baY/zFIbQlnGEDC1IVKUffp2ZOt2j64WyzoHf/rG3hF8z8iYcLB0TsbMfL56fExP0qMRdCedwU5vH8DEniVaIlPlfdGF2mT2W3kkGa/hQpBJQ4Jq/hQa/7JnU7nSEIZI2qr72oUwzrEIglEuKmIHgs91ViKgdsKae56SSUF0RxyyBYnWbPBUZsxlGyomXU1QULEsFjprQ4GcmjSONjmWdbMXaQ2U17DLtoP6F2gSxdIGTG+vBBdIZCwUEGrG9Nx2tXiN7R1xRdkTuRBpkfki1HiVNWGt5xOWgncdH8Rr1wkwdsXypaCm4sDPRUWscTykNnpIIke04Bn3aDEyo1CivIpaKQdL2PCNBR10LRMPNygChjGNVN5Pdk8vkrjpMk2g4YF98Otpu6DQPYvL1eCfv3lI8sZtJ26lK7J4A6rj1NeuqKu0FJSYy9TVSTu+mtyVXvOAQlYKc3bjd2X53s0SDC6QBtxI33sVTFHcTo6BtmrgyfMs+z+/n6k0unIhVnWp8bs7cWLs3dXZ0ec0kpgaXXgn45O+m/eRaqU3Wjzd8rfImfYAOF3yrxR2nKvhLnpb8U1LE5AQr7jHYQVSBiaJgWnyzFZSfEamuZGRfwUTNvy587LWCqljqz1tTHuoBqcAw4+9MZ0KEA+jPYbLh+x+4QMcgC2wr3eW/n7jv7r5H8HPmxm3WiytoP/T9fKbO3WcCs0m1tuJ2wrqEoMCUYXMS4K9LSRu+ftjH8w2PMzvrM/AOCiuLc=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},h=void 0,v={},q=[];function g(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Get all unique attribute values of specified launch"}),"\n",(0,s.jsx)(u(),{method:"get",path:"/v1/{projectName}/item/attribute/values",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Get all unique attribute values of specified launch"}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(p(),{parameters:[{name:"filter.cnt.attributeValue",in:"query",required:!0,schema:{type:"string"}},{name:"filter.eq.attributeKey",in:"query",required:!1,schema:{type:"string"}},{name:"launch",in:"query",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);