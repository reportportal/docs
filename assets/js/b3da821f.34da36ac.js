"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26752],{72439:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>y,default:()=>U,frontMatter:()=>l,metadata:()=>s,toc:()=>v});const s=JSON.parse('{"id":"api/service-api/versions/5.11/update-dashboard-using-put","title":"Update specified dashboard for specified project","description":"Update specified dashboard for specified project","source":"@site/docs/api/service-api/versions/5.11/update-dashboard-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/update-dashboard-using-put","permalink":"/docs/api/service-api/versions/5.11/update-dashboard-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-dashboard-using-put","title":"Update specified dashboard for specified project","description":"Update specified dashboard for specified project","sidebar_label":"Update specified dashboard for specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1z2zYQ/SucPSUZSJTdjwNPcV3P1NPWdux4mo5GB4hYiUhJAgFAyyqH/72zACWSohy51kkEHnbfLnYftgbH1xaSOQhus6XiRkxSVTqj8hwNLBgojYY7qcprAQlUWnCHv+6wj1aW67vHz8BAc8MLdGjIWg0lLxCSzuq1AAayhAQ0dxkwEGhTIzVZHuEMfqukQQGJMxUysGmGBYekBrfVZFaWDtdogMFKmYK7sPTzj9A0bO9bG/UVU3dDX9/zPcSd9G2dkeUammYRwGjdL0psCTG0G3J1/wkYUEqxdIThWucy9RmNv1oC1n0f0uXk5HGYZ2+kYzYPIS7YjpNaUgR0C4buy0m0Iz6jAFibqCMbgfpfUqzR2R6CG8O3lEyHhe3zDdBbT+NPJTCHU9w2/gQV1StulbXwm5cIh+1bH2qf8HHnzf7EnbJyn542lv3aqRB0C/xyMoYfzonkDv/3q/AdyQf5L/YJ+u9T5DKU68y9ktlGCpf9T1afPXTcFuF32Eh+wWpV2kDvfDYbd8zt78Ne+RB/ON4etztRulSFzpH+3T+cTEmB1vL1y6RJGLTBlDtiveK5RQbPk1QJXGM5aZt9slRiO2k1ptfjw1BCA0dWYypXEkW0V7hopUxvvVUfYIDPDksbCnhewz+4heS77hk88bwa0CBRKtBlisRaVz4HpHkJxE9ncd2TuibeM4rrnvw2wMCiedoJeWVySIBOOpWqvEniuOaVy5SRbtvEXMtR7PeolXF3yjieR8GW52okX+Zt67TmQg2seJVTjWXOaTsyd7fDMsCyKkj+CAisxS8aBntG46L6TVkXUb4iXoqImEXv5CoqEQWK95FaRYFvdEi44yWwUFPjUdqDplJR0SwoVWkV/M5rWCI3aC4qSvh8Qduk8PfdI3H1zKlexyTbQtxJcvd9oMTzvnDOhrLYHTpUw6Ny11Ov2UCbZiPh2WnJbK8UswMZ2HcSXYYsV6rfrf16eKFYdsm/uLuOhEqrAkvHWxEmQeCpF4Q2Ow+VpkNUEAWXVJ82rHwcXRKDXKZYWuwdv9A8zTA6n84owb6+qZKSON5sNlPud6fKrOP2qI3/uL68unm4mtCRhgE1R2D/0/TsLKxpZV3By56bN0jA8Qfb4bOLdc5l6d9m47smtPUcns6AQTKcYfaOaKs/Wi0YZMo6OlfXS27x0eRNQ8vfKjRUxIuuUX21CWnpf6eHBxT3ag3v7lvBfx8Np7mjUewGinLbkzFgrer1DdBE9yYWw5y8gUXfgC/sDLlA01Pny+B34pugszCa8SiGcOIiTVG7HpbeuIFqh3F62Y6UhRKEMnxDEyDfBH6qG3T8Wg05L9eVf9wgeKTff0vrGmU=","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get specified dashboard by ID for specified project","permalink":"/docs/api/service-api/versions/5.11/get-dashboard-using-get"},"next":{"title":"Delete specified dashboard by ID for specified project","permalink":"/docs/api/service-api/versions/5.11/delete-dashboard-using-delete"}}');var d=i(74848),a=i(28453),p=i(57742),r=i.n(p),o=i(78178),n=i.n(o),c=i(19624),f=i.n(c),u=i(96226),b=i.n(u),h=(i(77675),i(19365),i(51107));const l={id:"update-dashboard-using-put",title:"Update specified dashboard for specified project",description:"Update specified dashboard for specified project",sidebar_label:"Update specified dashboard for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1z2zYQ/SucPSUZSJTdjwNPcV3P1NPWdux4mo5GB4hYiUhJAgFAyyqH/72zACWSohy51kkEHnbfLnYftgbH1xaSOQhus6XiRkxSVTqj8hwNLBgojYY7qcprAQlUWnCHv+6wj1aW67vHz8BAc8MLdGjIWg0lLxCSzuq1AAayhAQ0dxkwEGhTIzVZHuEMfqukQQGJMxUysGmGBYekBrfVZFaWDtdogMFKmYK7sPTzj9A0bO9bG/UVU3dDX9/zPcSd9G2dkeUammYRwGjdL0psCTG0G3J1/wkYUEqxdIThWucy9RmNv1oC1n0f0uXk5HGYZ2+kYzYPIS7YjpNaUgR0C4buy0m0Iz6jAFibqCMbgfpfUqzR2R6CG8O3lEyHhe3zDdBbT+NPJTCHU9w2/gQV1StulbXwm5cIh+1bH2qf8HHnzf7EnbJyn542lv3aqRB0C/xyMoYfzonkDv/3q/AdyQf5L/YJ+u9T5DKU68y9ktlGCpf9T1afPXTcFuF32Eh+wWpV2kDvfDYbd8zt78Ne+RB/ON4etztRulSFzpH+3T+cTEmB1vL1y6RJGLTBlDtiveK5RQbPk1QJXGM5aZt9slRiO2k1ptfjw1BCA0dWYypXEkW0V7hopUxvvVUfYIDPDksbCnhewz+4heS77hk88bwa0CBRKtBlisRaVz4HpHkJxE9ncd2TuibeM4rrnvw2wMCiedoJeWVySIBOOpWqvEniuOaVy5SRbtvEXMtR7PeolXF3yjieR8GW52okX+Zt67TmQg2seJVTjWXOaTsyd7fDMsCyKkj+CAisxS8aBntG46L6TVkXUb4iXoqImEXv5CoqEQWK95FaRYFvdEi44yWwUFPjUdqDplJR0SwoVWkV/M5rWCI3aC4qSvh8Qduk8PfdI3H1zKlexyTbQtxJcvd9oMTzvnDOhrLYHTpUw6Ny11Ov2UCbZiPh2WnJbK8UswMZ2HcSXYYsV6rfrf16eKFYdsm/uLuOhEqrAkvHWxEmQeCpF4Q2Ow+VpkNUEAWXVJ82rHwcXRKDXKZYWuwdv9A8zTA6n84owb6+qZKSON5sNlPud6fKrOP2qI3/uL68unm4mtCRhgE1R2D/0/TsLKxpZV3By56bN0jA8Qfb4bOLdc5l6d9m47smtPUcns6AQTKcYfaOaKs/Wi0YZMo6OlfXS27x0eRNQ8vfKjRUxIuuUX21CWnpf6eHBxT3ag3v7lvBfx8Np7mjUewGinLbkzFgrer1DdBE9yYWw5y8gUXfgC/sDLlA01Pny+B34pugszCa8SiGcOIiTVG7HpbeuIFqh3F62Y6UhRKEMnxDEyDfBH6qG3T8Wg05L9eVf9wgeKTff0vrGmU=",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},y=void 0,m={},v=[];function g(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Update specified dashboard for specified project"}),"\n",(0,d.jsx)(r(),{method:"put",path:"/v1/{projectName}/dashboard/{dashboardId}",context:"endpoint"}),"\n",(0,d.jsx)(t.p,{children:"Update specified dashboard for specified project"}),"\n",(0,d.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,d.jsx)(n(),{parameters:[{name:"dashboardId",in:"path",description:"dashboardId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,d.jsx)(f(),{title:"Body",body:{description:"updateRQ",content:{"application/json":{schema:{title:"UpdateDashboardRQ",required:["name"],type:"object",properties:{description:{type:"string"},name:{type:"string"},updateWidgets:{type:"array",items:{title:"WidgetObjectModel",type:"object",properties:{widgetId:{type:"integer",format:"int64"},widgetName:{type:"string"},widgetOptions:{type:"object",properties:{}},widgetPosition:{title:"Position",type:"object",properties:{positionX:{type:"integer",format:"int32"},positionY:{type:"integer",format:"int32"}}},widgetSize:{title:"Size",type:"object",properties:{height:{type:"integer",format:"int32"},width:{type:"integer",format:"int32"}}},widgetType:{type:"string"}}}}}}}},required:!0}}),"\n",(0,d.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function U(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(g,{...e})}):g(e)}}}]);