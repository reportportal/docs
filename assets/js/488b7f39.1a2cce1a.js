"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7030],{15033:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>B,contentTitle:()=>N,default:()=>K,frontMatter:()=>v,metadata:()=>r,toc:()=>b});const r=JSON.parse('{"id":"api/service-api/restore-password","title":"Create a restore password request","description":"Create a restore password request","source":"@site/docs/api/service-api/restore-password.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/restore-password","permalink":"/docs/api/service-api/restore-password","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"restore-password","title":"Create a restore password request","description":"Create a restore password request","sidebar_label":"Create a restore password request","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVMFu2zAM/RWBpw1Q467ALj4tKzqs27BmSYcdihwYm0nU2ZJKyc0Cw/8+UHYSdwW65mKF4hMfyUe2EHETIL+DJhCfFc5GdlVFDEsNzhNjNM5el5ADU4iOaYYh7ByXoIHpoaEQP7pyD3kLAiYb5YjeV6ZI2Ow+OCu2UGypRjkJzjCVEpZqNJUEi3tPkINb3VMRQYNnCR8NBYH0bnl7cAuRjd1A12mIJlZimj/lN/8BnVyfgkVuKBmCdzb0716cn8unpFCw8cIXcrj5Cvr12bxMvKYQcEMvU785FPrS1b4iOc0XQl+cnnK7ZMJICtXQDuWHfNXQDdBQU9w6aZl36b/HuIUcMmlxyA6AbHgBNATiR2KRQQsNV5BDm/KjLs+ydutC7DL0Bv4lMyfvOM4cR6zUdHat+odAwyOywVXV16B/K7XRNrV0fRujB50+QZpf0hqbKkLe33QaJOjzznx2ISqLNSm0pZLg6o1ZK0tUUvlWubXqKamB05HPKUBJtZtw8vLJaWKclHopZSgaNnGf6rAiZOJpI6W7W46vFymdlNnY6djgIblD1oMT6OHwyXGNwuTLr9ukApHU/DRKV39QRDBS/VEyGoxduxTqKPpTB/7fntIVTU02Jq0NGsci1VmKCjksGi8Y0KfYveXDs5JpqExBNtAIPvVYbEldTM5BD0qSauRZttvtJphuJ4432QAN2bfry6vvi6szgXQaRIY9+feTd4NNVFyjHYV5zRA8KcWxN5H+xMxXaKy8nBi2w3z0KzCkeRmtuH5GlgdF3kHbrjDQT666TswPDbEoZnkSfRKMhi1hSZzE9Jv2QrtfKWe3wkXcq0Y4PVsvnT4gpkVBPr7ouxzN++xmcSs6GxZy7UrBMO4kE9xBDiBbXdBJvsnWQoV206QlBf2b8vsLrMAfQw==","sidebar_class_name":"post api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Activate invitation and create user in system","permalink":"/docs/api/service-api/create-user"},"next":{"title":"Reset password","permalink":"/docs/api/service-api/reset-password"}}');var a=t(74848),i=t(28453),o=t(57742),p=t.n(o),n=t(78178),d=t.n(n),c=t(19624),l=t.n(c),u=t(96226),m=t.n(u),w=(t(77675),t(19365),t(51107));const v={id:"restore-password",title:"Create a restore password request",description:"Create a restore password request",sidebar_label:"Create a restore password request",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVMFu2zAM/RWBpw1Q467ALj4tKzqs27BmSYcdihwYm0nU2ZJKyc0Cw/8+UHYSdwW65mKF4hMfyUe2EHETIL+DJhCfFc5GdlVFDEsNzhNjNM5el5ADU4iOaYYh7ByXoIHpoaEQP7pyD3kLAiYb5YjeV6ZI2Ow+OCu2UGypRjkJzjCVEpZqNJUEi3tPkINb3VMRQYNnCR8NBYH0bnl7cAuRjd1A12mIJlZimj/lN/8BnVyfgkVuKBmCdzb0716cn8unpFCw8cIXcrj5Cvr12bxMvKYQcEMvU785FPrS1b4iOc0XQl+cnnK7ZMJICtXQDuWHfNXQDdBQU9w6aZl36b/HuIUcMmlxyA6AbHgBNATiR2KRQQsNV5BDm/KjLs+ydutC7DL0Bv4lMyfvOM4cR6zUdHat+odAwyOywVXV16B/K7XRNrV0fRujB50+QZpf0hqbKkLe33QaJOjzznx2ISqLNSm0pZLg6o1ZK0tUUvlWubXqKamB05HPKUBJtZtw8vLJaWKclHopZSgaNnGf6rAiZOJpI6W7W46vFymdlNnY6djgIblD1oMT6OHwyXGNwuTLr9ukApHU/DRKV39QRDBS/VEyGoxduxTqKPpTB/7fntIVTU02Jq0NGsci1VmKCjksGi8Y0KfYveXDs5JpqExBNtAIPvVYbEldTM5BD0qSauRZttvtJphuJ4432QAN2bfry6vvi6szgXQaRIY9+feTd4NNVFyjHYV5zRA8KcWxN5H+xMxXaKy8nBi2w3z0KzCkeRmtuH5GlgdF3kHbrjDQT666TswPDbEoZnkSfRKMhi1hSZzE9Jv2QrtfKWe3wkXcq0Y4PVsvnT4gpkVBPr7ouxzN++xmcSs6GxZy7UrBMO4kE9xBDiBbXdBJvsnWQoV206QlBf2b8vsLrMAfQw==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},N=void 0,B={},b=[];function f(e){const s={p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w.default,{as:"h1",className:"openapi__heading",children:"Create a restore password request"}),"\n",(0,a.jsx)(p(),{method:"post",path:"/users/password/restore",context:"endpoint"}),"\n",(0,a.jsx)(s.p,{children:"Create a restore password request"}),"\n",(0,a.jsx)(w.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(d(),{parameters:void 0}),"\n",(0,a.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{required:["email"],type:"object",properties:{email:{type:"string"}},title:"RestorePasswordRQ"}}},required:!0}}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function K(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);