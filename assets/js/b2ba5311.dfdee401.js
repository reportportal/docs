"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13354],{56313:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>w,contentTitle:()=>f,default:()=>v,frontMatter:()=>m,metadata:()=>t,toc:()=>g});const t=JSON.parse('{"id":"api/service-api/versions/5.10/is-restore-password-bid-exist-using-get","title":"Check if a restore password bid exists","description":"Check if a restore password bid exists","source":"@site/docs/api/service-api/versions/5.10/is-restore-password-bid-exist-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/is-restore-password-bid-exist-using-get","permalink":"/docs/api/service-api/versions/5.10/is-restore-password-bid-exist-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"is-restore-password-bid-exist-using-get","title":"Check if a restore password bid exists","description":"Check if a restore password bid exists","sidebar_label":"Check if a restore password bid exists","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMFu2zAM/RWBp7ZQ47bALj4tK4qt2NAFyXoYghwUm4m12pIq0UkDw/8+ULYTt12B5ZJEIp8eHx/ZAKltgHQJdUB/mVlD3pYlelhJsA69Im3NfQ4p6DDHQNbjTIWwtz7/ovO7Fx3oMWiz/Xr3CyQ45VWFhJ4hGzCqQkihrnUOErSBFJyiAiTkGDKvHYOfAjw+19pjDin5GiWErMBKQdoAHRwDBfLabKFtVxwcnDUBA9/fXF3x12vUn99BAleEhvj2IrngrxGqppJhf2N4sPMFyOEdu/6DGXE9njUg3b2iw4jL2toSlYG2+3BJzmOmiPlvVBnwbZW3BWZPQm+EEr5TUrheSrHWuUAWM4CECqmwLPkWIwmWLIVkd51wk5IhKfEYkJKG1WtBQkC/G5SvfQkpNM5bspkt2zRJGlVTYb2mQ5sop981YY7OeppZT6oUHRZI2Cmv1brsBBjgOq03qi4JUiiIXHgHNxtiJaCpK7YYB4Ls41ethCOj9837ZgMJ9o9QJhfMTJzpjTCIOebnwm5Ex1e8JXzilWNlJz5GuRg00ZbbtWKpsrp7d9nAGpVHP61Z5eVqfL1gq3Slj4OOHugLio6KnohBwG7QZmPHHhur+4H0QynT2b3IbVZXaCiOX29jlUUb90O1qB0nsbyV0tzt0J18fleyhFJnaAKO0qdOZQWKm8kVyN4tXE2aJPv9fqLi7cT6bdKnhuTH/e3dw+LuklNaCWy1jv2nyfXV5JrPnA1UKTN65r89/0qQo8CEL5S4UmnD8JFm08/DEnbXTD3Erg+gcYuEODZp3CorCYUNxPFNs1YBH33Ztnz8XKNnA6xOJo92yHXg3x9McXPaKHA27xfWueg32D9p94fKHOI8lTX/AwlPeBh2X8vTUKDK0UcO3dU0y9DRKIk3GPvzuCB467btX81i+yM=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Reset password","permalink":"/docs/api/service-api/versions/5.10/reset-password-using-post"},"next":{"title":"Create a restore password request","permalink":"/docs/api/service-api/versions/5.10/restore-password-using-post"}}');var r=i(74848),o=i(28453),n=i(57742),a=i.n(n),p=i(78178),d=i.n(p),l=i(19624),c=i.n(l),u=i(96226),b=i.n(u),h=(i(77675),i(19365),i(51107));const m={id:"is-restore-password-bid-exist-using-get",title:"Check if a restore password bid exists",description:"Check if a restore password bid exists",sidebar_label:"Check if a restore password bid exists",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zAM/RWBp7ZQ47bALj4tK4qt2NAFyXoYghwUm4m12pIq0UkDw/8+ULYTt12B5ZJEIp8eHx/ZAKltgHQJdUB/mVlD3pYlelhJsA69Im3NfQ4p6DDHQNbjTIWwtz7/ovO7Fx3oMWiz/Xr3CyQ45VWFhJ4hGzCqQkihrnUOErSBFJyiAiTkGDKvHYOfAjw+19pjDin5GiWErMBKQdoAHRwDBfLabKFtVxwcnDUBA9/fXF3x12vUn99BAleEhvj2IrngrxGqppJhf2N4sPMFyOEdu/6DGXE9njUg3b2iw4jL2toSlYG2+3BJzmOmiPlvVBnwbZW3BWZPQm+EEr5TUrheSrHWuUAWM4CECqmwLPkWIwmWLIVkd51wk5IhKfEYkJKG1WtBQkC/G5SvfQkpNM5bspkt2zRJGlVTYb2mQ5sop981YY7OeppZT6oUHRZI2Cmv1brsBBjgOq03qi4JUiiIXHgHNxtiJaCpK7YYB4Ls41ethCOj9837ZgMJ9o9QJhfMTJzpjTCIOebnwm5Ex1e8JXzilWNlJz5GuRg00ZbbtWKpsrp7d9nAGpVHP61Z5eVqfL1gq3Slj4OOHugLio6KnohBwG7QZmPHHhur+4H0QynT2b3IbVZXaCiOX29jlUUb90O1qB0nsbyV0tzt0J18fleyhFJnaAKO0qdOZQWKm8kVyN4tXE2aJPv9fqLi7cT6bdKnhuTH/e3dw+LuklNaCWy1jv2nyfXV5JrPnA1UKTN65r89/0qQo8CEL5S4UmnD8JFm08/DEnbXTD3Erg+gcYuEODZp3CorCYUNxPFNs1YBH33Ztnz8XKNnA6xOJo92yHXg3x9McXPaKHA27xfWueg32D9p94fKHOI8lTX/AwlPeBh2X8vTUKDK0UcO3dU0y9DRKIk3GPvzuCB467btX81i+yM=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},f=void 0,w={},g=[];function x(e){const s={p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Check if a restore password bid exists"}),"\n",(0,r.jsx)(a(),{method:"get",path:"/v1/user/password/reset/{uuid}",context:"endpoint"}),"\n",(0,r.jsx)(s.p,{children:"Check if a restore password bid exists"}),"\n",(0,r.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{name:"uuid",in:"path",description:"uuid",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"YesNoRS",type:"object",properties:{is:{type:"boolean"}}}}}}}})]})}function v(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);