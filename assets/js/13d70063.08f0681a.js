"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93149],{92039:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>U,contentTitle:()=>h,default:()=>x,frontMatter:()=>g,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"api/service-api/versions/5.10/save-analytics-settings-using-post","title":"Update analytics settings","description":"Update analytics settings","source":"@site/docs/api/service-api/versions/5.10/save-analytics-settings-using-post.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/save-analytics-settings-using-post","permalink":"/docs/api/service-api/versions/5.10/save-analytics-settings-using-post","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"save-analytics-settings-using-post","title":"Update analytics settings","description":"Update analytics settings","sidebar_label":"Update analytics settings","hide_title":true,"hide_table_of_contents":true,"api":"eJyFVU1v2zAM/SsGT1uhxO2AXXxaVhRYsWEtmvUU5MDITKJOljRJThoY/u8DZTtxmn34ZEj8eCTfoxqIuAlQLCBQjMpswkRaE73VmjwsBVhHHqOy5r6EAgLuaGZQH6KSYd57PAdlNo8P8x8gwNOvmkL8bMsDFA2UFKRXjv2hGC5BAOcgE9kEndNKphT5S2C7BoLcUoX8F1XUBAUckz5RsLWXBALiwfGVXb2Q5KDOM9ioKLAnGVxpKlOQznBlrSY00A6ux5sQvTIbaPnralCeXaOvKR0EZ03o4n64vr6s7OHreVFX+dWf63gY2nlrK6eJ/57m/62lohBw8zfEjLkk50liZNRr1IEEvE6kLWlDZtL3fbKy5WFisKKzWZxX8uxKjJTh0O9s4AUIoNdIJihrmDAN/KQDFP9MI2CHuh6na5cCKopby2xyNgFwGLdQQL67yYdk+TE/CAjkd+S7nLXXUEDjvI1WWt0Wed5gHbfWq3hoc3TqoqInctbHR+sj6qyLlYB5xQRJ/R3CdYNdY60jFLCN0YWLcI+DrQAydcXSYUMQvf2yFXBEdMmULzbEjJuToSkzRpa9U+vMEJVUvs/sOuvwZm8Bn3CVVNmpT1YuGU2VZSYsuVWy7vIuGlgRevKzmru7WI6v58zLrvSx0ZFdfUGJvkk5yQiYaCzRp5PI716ReXwmOFaNeEtUAcqs7VgK47n8ZWhDE2aP91lpZV2RiUk9vdpQJrX1lJ7Xjp14MBUq5knoTj5dNEuAVpJMoJH7zKHcUvZheg2i5xn3ocjz/X4/xXQ7tX6T964h/3Z/e/d9fjdhl1YAk7RD/3F6cz294TOmeIVmlOZfAjvrwXEakV5j7jSqtLoSsqYXzQJ2N0khxxAn4SwFbFlgxQKaZoWBnr1uWz7+VZNniixPMkgMEbAlLMmP1H3b7bTJD4ZykvPF0m7F4DGTklwc2fIuPJN9/1Ss+jeismXaELjn9wP3UADwuxO7RdN0Zw1oNJs6bUHoUvL3GzV1Wb0=","sidebar_class_name":"post api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Update analytics settings","permalink":"/docs/api/service-api/versions/5.10/save-analytics-settings-using-put"},"next":{"title":"test-item-async-controller","permalink":"/docs/api/service-api/versions/5.10/test-item-async-controller"}}');var n=t(74848),a=t(28453),o=t(57742),r=t.n(o),l=t(78178),p=t.n(l),c=t(19624),d=t.n(c),v=t(96226),u=t.n(v),m=(t(77675),t(19365),t(51107));const g={id:"save-analytics-settings-using-post",title:"Update analytics settings",description:"Update analytics settings",sidebar_label:"Update analytics settings",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVU1v2zAM/SsGT1uhxO2AXXxaVhRYsWEtmvUU5MDITKJOljRJThoY/u8DZTtxmn34ZEj8eCTfoxqIuAlQLCBQjMpswkRaE73VmjwsBVhHHqOy5r6EAgLuaGZQH6KSYd57PAdlNo8P8x8gwNOvmkL8bMsDFA2UFKRXjv2hGC5BAOcgE9kEndNKphT5S2C7BoLcUoX8F1XUBAUckz5RsLWXBALiwfGVXb2Q5KDOM9ioKLAnGVxpKlOQznBlrSY00A6ux5sQvTIbaPnralCeXaOvKR0EZ03o4n64vr6s7OHreVFX+dWf63gY2nlrK6eJ/57m/62lohBw8zfEjLkk50liZNRr1IEEvE6kLWlDZtL3fbKy5WFisKKzWZxX8uxKjJTh0O9s4AUIoNdIJihrmDAN/KQDFP9MI2CHuh6na5cCKopby2xyNgFwGLdQQL67yYdk+TE/CAjkd+S7nLXXUEDjvI1WWt0Wed5gHbfWq3hoc3TqoqInctbHR+sj6qyLlYB5xQRJ/R3CdYNdY60jFLCN0YWLcI+DrQAydcXSYUMQvf2yFXBEdMmULzbEjJuToSkzRpa9U+vMEJVUvs/sOuvwZm8Bn3CVVNmpT1YuGU2VZSYsuVWy7vIuGlgRevKzmru7WI6v58zLrvSx0ZFdfUGJvkk5yQiYaCzRp5PI716ReXwmOFaNeEtUAcqs7VgK47n8ZWhDE2aP91lpZV2RiUk9vdpQJrX1lJ7Xjp14MBUq5knoTj5dNEuAVpJMoJH7zKHcUvZheg2i5xn3ocjz/X4/xXQ7tX6T964h/3Z/e/d9fjdhl1YAk7RD/3F6cz294TOmeIVmlOZfAjvrwXEakV5j7jSqtLoSsqYXzQJ2N0khxxAn4SwFbFlgxQKaZoWBnr1uWz7+VZNniixPMkgMEbAlLMmP1H3b7bTJD4ZykvPF0m7F4DGTklwc2fIuPJN9/1Ss+jeismXaELjn9wP3UADwuxO7RdN0Zw1oNJs6bUHoUvL3GzV1Wb0=",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},h=void 0,U={},j=[];function y(s){const e={p:"p",...(0,a.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Update analytics settings"}),"\n",(0,n.jsx)(r(),{method:"post",path:"/v1/settings/analytics",context:"endpoint"}),"\n",(0,n.jsx)(e.p,{children:"Update analytics settings"}),"\n",(0,n.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:void 0}),"\n",(0,n.jsx)(d(),{title:"Body",body:{description:"request",content:{"application/json":{schema:{title:"AnalyticsResource",type:"object",properties:{enabled:{type:"boolean"},type:{type:"string"}}}}},required:!0}}),"\n",(0,n.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function x(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(y,{...s})}):y(s)}}}]);