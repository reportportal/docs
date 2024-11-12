"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10768],{1091:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>v,contentTitle:()=>h,default:()=>Q,frontMatter:()=>u,metadata:()=>a,toc:()=>g});const a=JSON.parse('{"id":"api/service-api/versions/5.11/delete-dashboard-using-delete","title":"Delete specified dashboard by ID for specified project","description":"Delete specified dashboard by ID for specified project","source":"@site/docs/api/service-api/versions/5.11/delete-dashboard-using-delete.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/delete-dashboard-using-delete","permalink":"/docs/api/service-api/versions/5.11/delete-dashboard-using-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-dashboard-using-delete","title":"Delete specified dashboard by ID for specified project","description":"Delete specified dashboard by ID for specified project","sidebar_label":"Delete specified dashboard by ID for specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v2zAM/SsCT2uhxk2x7eDTgibAghVt0a6nIAfFZmJttqRKdLrA8H8f6I/EadoNaC62xa+nx0emAlKbAPECUhWylVU+vUisIW/zHD0sJViHXpG2Zp5CDCnmSDjtfZ+CNpvp7Gb2cwYSnPKqQELPCSswqkAO6Z3nKUjQBmJwijKQkGJIvHac/MTP43OpPaYQky9RQkgyLBTEFdDOcVptCDfoQcLa+kJRe/T1M9S13Nd23v7ChG7561+1j/3+WzuQ12YDdb1k5+CsCRjYfnV5yY/j5Hc/QAKTiobYeh6d82OQVVPOae96qq9t4XLkt4dHkH1Vu2KMzLPnppBuaxYYgtrgW/CaH9/VeUwU8Y3WKg/4+vrTpqsiOEz0WmMq9r0Qq52YT8Xa+oG1YwskFEiZPeii0QBlEEO0HUfVgNU62qeMqkGna5AQ0G97zZQ+hxg4kmxi8zqOokqVlFmvaVdHyumT3j2gs57urSeVizYXSNgqr9Uqbynq07W9WasyZ7lkRC6cpLvvfSWgKQseDXYE2fkvawl7RKfN/m4DCVafUCYVjEx80mthEFNMz4RdixaveA34gCvFwo584+Uap5G23MwlU5WUbd1FBStUHv2kZMIXSzZrs7ZDQQ2peYe3Hsfkfi5Sm5QFGmo02GlWJY1mu3l6LB0HMTeF0tyq0J58O8ErIdcJmoCD8IlTSYbianQJsms1kxpH0cvLy0g11pH1m6gLDdHN/Hp2+zi74JBaAuukRf9lNB63Z84GKpQZlPmwnI8I2o8T4R+KXK604XIN7KrT+QK2Y5AQH++PfTk2DdfaUkJmA3FcVa1UwCef1zUfP5fouavLg3KbHqc68Ps7g1sd1gp8eui21pk43qRv3qI7VGbXzEpe8hdI+I27V6uYt+mHUBxz8gEUwwQ1j12GKkXf8NJ6TJIEHQ1iebXyIOz3UvffVNd/ARvEYMQ=","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Update specified dashboard for specified project","permalink":"/docs/api/service-api/versions/5.11/update-dashboard-using-put"},"next":{"title":"Add widget to specified dashboard","permalink":"/docs/api/service-api/versions/5.11/add-widget-using-put"}}');var d=s(74848),t=s(28453),r=s(57742),p=s.n(r),o=s(78178),n=s.n(o),c=s(19624),l=s.n(c),f=s(96226),b=s.n(f),m=(s(77675),s(19365),s(51107));const u={id:"delete-dashboard-using-delete",title:"Delete specified dashboard by ID for specified project",description:"Delete specified dashboard by ID for specified project",sidebar_label:"Delete specified dashboard by ID for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zAM/SsCT2uhxk2x7eDTgibAghVt0a6nIAfFZmJttqRKdLrA8H8f6I/EadoNaC62xa+nx0emAlKbAPECUhWylVU+vUisIW/zHD0sJViHXpG2Zp5CDCnmSDjtfZ+CNpvp7Gb2cwYSnPKqQELPCSswqkAO6Z3nKUjQBmJwijKQkGJIvHac/MTP43OpPaYQky9RQkgyLBTEFdDOcVptCDfoQcLa+kJRe/T1M9S13Nd23v7ChG7561+1j/3+WzuQ12YDdb1k5+CsCRjYfnV5yY/j5Hc/QAKTiobYeh6d82OQVVPOae96qq9t4XLkt4dHkH1Vu2KMzLPnppBuaxYYgtrgW/CaH9/VeUwU8Y3WKg/4+vrTpqsiOEz0WmMq9r0Qq52YT8Xa+oG1YwskFEiZPeii0QBlEEO0HUfVgNU62qeMqkGna5AQ0G97zZQ+hxg4kmxi8zqOokqVlFmvaVdHyumT3j2gs57urSeVizYXSNgqr9Uqbynq07W9WasyZ7lkRC6cpLvvfSWgKQseDXYE2fkvawl7RKfN/m4DCVafUCYVjEx80mthEFNMz4RdixaveA34gCvFwo584+Uap5G23MwlU5WUbd1FBStUHv2kZMIXSzZrs7ZDQQ2peYe3Hsfkfi5Sm5QFGmo02GlWJY1mu3l6LB0HMTeF0tyq0J58O8ErIdcJmoCD8IlTSYbianQJsms1kxpH0cvLy0g11pH1m6gLDdHN/Hp2+zi74JBaAuukRf9lNB63Z84GKpQZlPmwnI8I2o8T4R+KXK604XIN7KrT+QK2Y5AQH++PfTk2DdfaUkJmA3FcVa1UwCef1zUfP5fouavLg3KbHqc68Ps7g1sd1gp8eui21pk43qRv3qI7VGbXzEpe8hdI+I27V6uYt+mHUBxz8gEUwwQ1j12GKkXf8NJ6TJIEHQ1iebXyIOz3UvffVNd/ARvEYMQ=",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},h=void 0,v={},g=[];function k(e){const i={p:"p",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete specified dashboard by ID for specified project"}),"\n",(0,d.jsx)(p(),{method:"delete",path:"/v1/{projectName}/dashboard/{dashboardId}",context:"endpoint"}),"\n",(0,d.jsx)(i.p,{children:"Delete specified dashboard by ID for specified project"}),"\n",(0,d.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,d.jsx)(n(),{parameters:[{name:"dashboardId",in:"path",description:"dashboardId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,d.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,d.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function Q(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(k,{...e})}):k(e)}}}]);