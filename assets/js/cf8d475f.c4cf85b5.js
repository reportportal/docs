"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87698],{9518:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>g,contentTitle:()=>v,default:()=>x,frontMatter:()=>m,metadata:()=>t,toc:()=>b});const t=JSON.parse('{"id":"api/service-api/versions/5.10/change-password-using-post","title":"Change own password","description":"Change own password","source":"@site/docs/api/service-api/versions/5.10/change-password-using-post.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/change-password-using-post","permalink":"/docs/api/service-api/versions/5.10/change-password-using-post","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"change-password-using-post","title":"Change own password","description":"Change own password","sidebar_label":"Change own password","hide_title":true,"hide_table_of_contents":true,"api":"eJyFVU1v2zAM/SsGT1uhxE2BXXxaVhRYsWHNku4U5KDYTKxOllRJzgcM//eBkt26ddv5ZEv8eCTfoxvwfO8gW0Pt0E5yrbzVUqKFDQNt0HIvtLotIIO85GqPC+7cUdvijxNqv7hb3QMDi481Ov9NF2fIGijQ5VYYchy5LX8DA8qCypMtN0aKPCRJHxw5NODyEitOb154iZDB9TiGPxu60dsHzD0wMJbQeoGOHBUee+sQJxo7b4XaQ8tAy+KDe3piVcJiAZm3NYYDZ7RyMcPV5eW41rsfL6u7SC/eLuiu7+y1roxEeluu/ltVhc7xPb6DmDAXaCzm3BPqHZcOGZwmuS5wj2rSjWmy1cV5oniFb0/nZUmx9Yk+qsT0HWOAJ4/KCa2IOg38xTNkH2ZicOCyfjNju2FQoS81kcxoF+rmvoQM0sMsJV6mfeo0egMDh/aANqavrYQMGmO117mWbZamDa99qa3w5zblRozKWqLR1i+09VwmMVbAaAXfytjtPlwc847X0kMGpffGjcItelsGqOqK9ESGwDr7TcvgCdGYN9+18wn1KeGqSAhZ8knsEoVYYPE50bsk4k1eA37GVWClpzZYmWA0FZp4saFW5XXMu25gi9yindfU3/VmeL0ilsbSh0ZPXOsKCmSm72gERDtS7vJ5CdycOLF6JMSerq/0N9ClUDs91MlwTO/MsO/JfHGbFDqvK1Q+SKuTIs+DFDu+r2pDTjSniguijYsnX0e9YyBFjsrhwH1ueF5icjW9BNbRjtqSpenxeJzycDvVdp92ri79eXt982t1MyGXlgFxNqL/Mp1dTmd0RpyvuBqkeVt0L6p/GovHk0+N5EJRrICp6fSzhsOMcLrAlUGkTkUbBiXpLVtD02y5wz9Wti0dP9ZoiS+bZ00EujAokRdoB6q/jutuck9wnmU+Wuwt6z3meY7GD2xpTb7YAt1/Zdv9UCpdkJnlR/rZ8CNkQBwKnQh8DWcNSK72dViQEFPS8w+Uc2S2","sidebar_class_name":"post api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Exports information about all users","permalink":"/docs/api/service-api/versions/5.10/export-using-get"},"next":{"title":"Reset password","permalink":"/docs/api/service-api/versions/5.10/reset-password-using-post"}}');var o=i(74848),a=i(28453),n=i(57742),r=i.n(n),p=i(78178),d=i.n(p),c=i(19624),l=i.n(c),u=i(96226),w=i.n(u),h=(i(77675),i(19365),i(51107));const m={id:"change-password-using-post",title:"Change own password",description:"Change own password",sidebar_label:"Change own password",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVU1v2zAM/SsGT1uhxE2BXXxaVhRYsWHNku4U5KDYTKxOllRJzgcM//eBkt26ddv5ZEv8eCTfoxvwfO8gW0Pt0E5yrbzVUqKFDQNt0HIvtLotIIO85GqPC+7cUdvijxNqv7hb3QMDi481Ov9NF2fIGijQ5VYYchy5LX8DA8qCypMtN0aKPCRJHxw5NODyEitOb154iZDB9TiGPxu60dsHzD0wMJbQeoGOHBUee+sQJxo7b4XaQ8tAy+KDe3piVcJiAZm3NYYDZ7RyMcPV5eW41rsfL6u7SC/eLuiu7+y1roxEeluu/ltVhc7xPb6DmDAXaCzm3BPqHZcOGZwmuS5wj2rSjWmy1cV5oniFb0/nZUmx9Yk+qsT0HWOAJ4/KCa2IOg38xTNkH2ZicOCyfjNju2FQoS81kcxoF+rmvoQM0sMsJV6mfeo0egMDh/aANqavrYQMGmO117mWbZamDa99qa3w5zblRozKWqLR1i+09VwmMVbAaAXfytjtPlwc847X0kMGpffGjcItelsGqOqK9ESGwDr7TcvgCdGYN9+18wn1KeGqSAhZ8knsEoVYYPE50bsk4k1eA37GVWClpzZYmWA0FZp4saFW5XXMu25gi9yindfU3/VmeL0ilsbSh0ZPXOsKCmSm72gERDtS7vJ5CdycOLF6JMSerq/0N9ClUDs91MlwTO/MsO/JfHGbFDqvK1Q+SKuTIs+DFDu+r2pDTjSniguijYsnX0e9YyBFjsrhwH1ueF5icjW9BNbRjtqSpenxeJzycDvVdp92ri79eXt982t1MyGXlgFxNqL/Mp1dTmd0RpyvuBqkeVt0L6p/GovHk0+N5EJRrICp6fSzhsOMcLrAlUGkTkUbBiXpLVtD02y5wz9Wti0dP9ZoiS+bZ00EujAokRdoB6q/jutuck9wnmU+Wuwt6z3meY7GD2xpTb7YAt1/Zdv9UCpdkJnlR/rZ8CNkQBwKnQh8DWcNSK72dViQEFPS8w+Uc2S2",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},v=void 0,g={},b=[];function D(e){const s={p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Change own password"}),"\n",(0,o.jsx)(r(),{method:"post",path:"/v1/user/password/change",context:"endpoint"}),"\n",(0,o.jsx)(s.p,{children:"Change own password"}),"\n",(0,o.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,o.jsx)(d(),{parameters:void 0}),"\n",(0,o.jsx)(l(),{title:"Body",body:{description:"changePasswordRQ",content:{"application/json":{schema:{title:"ChangePasswordRQ",type:"object",properties:{newPassword:{type:"string"},oldPassword:{type:"string"}}}}},required:!0}}),"\n",(0,o.jsx)(w(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function x(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(D,{...e})}):D(e)}}}]);