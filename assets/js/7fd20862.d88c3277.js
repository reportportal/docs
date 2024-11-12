"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87438],{60938:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>A,frontMatter:()=>g,metadata:()=>r,toc:()=>v});const r=JSON.parse('{"id":"api/service-api/remove-user-preference","title":"Delete logged-in user preferences","description":"Only for logged-in user","source":"@site/docs/api/service-api/remove-user-preference.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/remove-user-preference","permalink":"/docs/api/service-api/remove-user-preference","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"remove-user-preference","title":"Delete logged-in user preferences","description":"Only for logged-in user","sidebar_label":"Delete logged-in user preferences","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VE1v2zAM/SsGTy2gxm2x7eDTijbDshVt0Q/sUOSg2nSiTpZUSk4XGP7vA2Ul9Zqtwy7LJTJFinyPj+wgyIWH4h4c2Ucsw0FpTSCrNRLMBVToS1IuKGuggEuj11ltKdN2scDqQJms9UggwDokyV6zCgogbOwK7zzSFWGNhKZEEOAkyQYDEifswMgGoYBa6YA0q0CA4iROhiUIIHxqFWEFRaAWBfhyiY2EooOwdhynTMBFTF5bamQYTB/eQd+L7eMJ1QV//eP7PpAyC+j7OTt7Z41Hz/fHh4f894qaryCAuUMT+FY6p1UZKckfPbt0uynsAxfHzBATGNSQoEHv5QJ/V4uAoIJm0+WG8VPbOI18ur6Bnn8CGgxLy52oUGMYuA9LKCBfHeWJk7wbkdPnbtupvNu0pAcBHmm16VhLGgroIg7sizzvltaHPpdOwWutXKOzFK4sBamzk6tZNjwEAlaSlHzQA9bhLT6haRsW4jIEByL++UGCtWw1tzfe9AI46W4HPlsfMm57Jk2VcfJsT9WZQayw2s9snQ0lZammbT0vCSps7ISil4tOE2WZ0jnTULakwjry8ICSkE5apvR+Pr6+iXAisrHTtpEJ3AZ1cgKRDp82Sv7y7TZ2W5naxvDU9TGrf6e8smXboAlRJ0mfsozcpfm4aR3HgABspOLu+sHycYcGAVqVaDyOwk+cLJeYHU8OQSR1MMIiz5+fnycy3k4sLfIU6vPz2en04mZ6wCG9AJbWUPz7yVGyOetDI80ozVlU8autk70o1r+monsZxTeWVupJwB8hd1oqw9kjii7Nyz2sjobxTINa/LpQ3Hi9FdtNNt9o9B667kF6vCPd92x+apFYQ/OXMYiKqpTncwVFLbXHN+DsXafFtZ/9CUIySrOO06Zb/gIB33E93re8Jv9j3jFz/ZzHGGWFFOEPHidliS6MYneWKI/adredTc+nt1Po+5/ndlL/","sidebar_class_name":"delete api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Edit logged-in user preferences","permalink":"/docs/api/service-api/add-user-preference"},"next":{"title":"Update project notifications configuration","permalink":"/docs/api/service-api/update-project-notification-config"}}');var s=i(74848),n=i(28453),a=i(57742),o=i.n(a),p=i(78178),c=i.n(p),l=i(19624),d=i.n(l),u=i(96226),f=i.n(u),m=(i(77675),i(19365),i(51107));const g={id:"remove-user-preference",title:"Delete logged-in user preferences",description:"Only for logged-in user",sidebar_label:"Delete logged-in user preferences",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1v2zAM/SsGTy2gxm2x7eDTijbDshVt0Q/sUOSg2nSiTpZUSk4XGP7vA2Ul9Zqtwy7LJTJFinyPj+wgyIWH4h4c2Ucsw0FpTSCrNRLMBVToS1IuKGuggEuj11ltKdN2scDqQJms9UggwDokyV6zCgogbOwK7zzSFWGNhKZEEOAkyQYDEifswMgGoYBa6YA0q0CA4iROhiUIIHxqFWEFRaAWBfhyiY2EooOwdhynTMBFTF5bamQYTB/eQd+L7eMJ1QV//eP7PpAyC+j7OTt7Z41Hz/fHh4f894qaryCAuUMT+FY6p1UZKckfPbt0uynsAxfHzBATGNSQoEHv5QJ/V4uAoIJm0+WG8VPbOI18ur6Bnn8CGgxLy52oUGMYuA9LKCBfHeWJk7wbkdPnbtupvNu0pAcBHmm16VhLGgroIg7sizzvltaHPpdOwWutXKOzFK4sBamzk6tZNjwEAlaSlHzQA9bhLT6haRsW4jIEByL++UGCtWw1tzfe9AI46W4HPlsfMm57Jk2VcfJsT9WZQayw2s9snQ0lZammbT0vCSps7ISil4tOE2WZ0jnTULakwjry8ICSkE5apvR+Pr6+iXAisrHTtpEJ3AZ1cgKRDp82Sv7y7TZ2W5naxvDU9TGrf6e8smXboAlRJ0mfsozcpfm4aR3HgABspOLu+sHycYcGAVqVaDyOwk+cLJeYHU8OQSR1MMIiz5+fnycy3k4sLfIU6vPz2en04mZ6wCG9AJbWUPz7yVGyOetDI80ozVlU8autk70o1r+monsZxTeWVupJwB8hd1oqw9kjii7Nyz2sjobxTINa/LpQ3Hi9FdtNNt9o9B667kF6vCPd92x+apFYQ/OXMYiKqpTncwVFLbXHN+DsXafFtZ/9CUIySrOO06Zb/gIB33E93re8Jv9j3jFz/ZzHGGWFFOEPHidliS6MYneWKI/adredTc+nt1Po+5/ndlL/",sidebar_class_name:"delete api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,h={},v=[];function T(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete logged-in user preferences"}),"\n",(0,s.jsx)(o(),{method:"delete",path:"/v1/project/{projectName}/preference/{filterId}",context:"endpoint"}),"\n",(0,s.jsx)(t.p,{children:"Only for logged-in user"}),"\n",(0,s.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(c(),{parameters:[{name:"filterId",in:"path",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,s.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,s.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function A(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(T,{...e})}):T(e)}}}]);