"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91260],{16592:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>R,contentTitle:()=>v,default:()=>f,frontMatter:()=>m,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/service-api/versions/5.10/create-user-bid-using-post","title":"Register invitation for user who will be created","description":"Register invitation for user who will be created","source":"@site/docs/api/service-api/versions/5.10/create-user-bid-using-post.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/create-user-bid-using-post","permalink":"/docs/api/service-api/versions/5.10/create-user-bid-using-post","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-user-bid-using-post","title":"Register invitation for user who will be created","description":"Register invitation for user who will be created","sidebar_label":"Register invitation for user who will be created","hide_title":true,"hide_table_of_contents":true,"api":"eJydVcFu2zAM/RWBp61w4mbALj6tLQqsQLFlzXoKcpAlJtYqS5okJw0M//tAy0mcpduA+ZRIpPj49B7VQuSbAMUSmoB+IqyJ3mqNHlYZWIeeR2XNg4QChEce8Tmgv1XyOSizmX9dfIcMPP5sMMRbK/dQtCAxCK8c5Z1lPX2DDKgAmkhx3DmtRH9+/iNQcAtBVFhz+hVV1AgF3J3nUy3lURJiiWve6Dj39geKCBlgzZWmIKuR8Me9oyNsOew7Tx1FhSHhPEunmik+RK/MBrrDgW/t9CUuN+gbg4y+wX4hOGtCqvvhenZJU2pTnjN0lV/9i5RbJZ8W8K9WSy5eHpV5ebOVUsk312sMgW/+1CX1KdF5FD3uYs11wAxeJ8JK3KCZDKqYlFbuJ4bXeCmGcwqecKNCRM+U2arY64KtrWckTLarLNsprVmJTBy5wteIJihrSMEtvOAeir9CyGDLdXMBpVtRu7GypHNnQ88gjxUUkG9nOSHIiaYMAvot+lSu8RoKaJ230QqruyLPW97EynoV913OnXqjR2d9nFsfuWbprB6TV7zU6a4Ox40kCgVUMbpwcdz8EJsBmqYmU1AgZEP8qsvgiOhSdJ9tiIx4YdxIRsjYO7VmBlGifM/smiW87HfAJ1wSazv1fZTrg6bKkkBWRJVoUt1lCyVyj/6mIU6Xq/H2gtQ9yHQUdBTd0FBvAvqfgoD0R1Pj6TR87l957ZItf/f2QbpHS58WkpNHuldmbcdmG9/ZHy70QNDN/IFJK5oaTRLw4Gee5svggkXjKGkMJq18uiAyA60EmoCj9BvHRYXsw/QaskGDxFGR57vdbsr73an1m3xIDfnjw939l8X9hFK6DEjACf3H6ex6OqM1En3NzajMf9jxjJrjBUZ8jbnTXBkq1ANuB3ctYTujJkKvKnLYKoOK/FcsoW1LHvDZ666j5Z8NetLS6uSXXkoZVMgl+tEEuEsjdPKdAJwsf/HgdNkh40YIdHEUS6P3bCoMb105PHK1lRTm+Y4kxHdQANCDGdMwatNaC5qbTdNPUUgl6fsFqziUbw==","sidebar_class_name":"post api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Return information about all users","permalink":"/docs/api/service-api/versions/5.10/get-users-using-get"},"next":{"title":"Exports information about all users","permalink":"/docs/api/service-api/versions/5.10/export-using-get"}}');var r=i(74848),o=i(28453),n=i(57742),a=i.n(n),d=i(78178),l=i.n(d),p=i(19624),c=i.n(p),u=i(96226),g=i.n(u),b=(i(77675),i(19365),i(51107));const m={id:"create-user-bid-using-post",title:"Register invitation for user who will be created",description:"Register invitation for user who will be created",sidebar_label:"Register invitation for user who will be created",hide_title:!0,hide_table_of_contents:!0,api:"eJydVcFu2zAM/RWBp61w4mbALj6tLQqsQLFlzXoKcpAlJtYqS5okJw0M//tAy0mcpduA+ZRIpPj49B7VQuSbAMUSmoB+IqyJ3mqNHlYZWIeeR2XNg4QChEce8Tmgv1XyOSizmX9dfIcMPP5sMMRbK/dQtCAxCK8c5Z1lPX2DDKgAmkhx3DmtRH9+/iNQcAtBVFhz+hVV1AgF3J3nUy3lURJiiWve6Dj39geKCBlgzZWmIKuR8Me9oyNsOew7Tx1FhSHhPEunmik+RK/MBrrDgW/t9CUuN+gbg4y+wX4hOGtCqvvhenZJU2pTnjN0lV/9i5RbJZ8W8K9WSy5eHpV5ebOVUsk312sMgW/+1CX1KdF5FD3uYs11wAxeJ8JK3KCZDKqYlFbuJ4bXeCmGcwqecKNCRM+U2arY64KtrWckTLarLNsprVmJTBy5wteIJihrSMEtvOAeir9CyGDLdXMBpVtRu7GypHNnQ88gjxUUkG9nOSHIiaYMAvot+lSu8RoKaJ230QqruyLPW97EynoV913OnXqjR2d9nFsfuWbprB6TV7zU6a4Ox40kCgVUMbpwcdz8EJsBmqYmU1AgZEP8qsvgiOhSdJ9tiIx4YdxIRsjYO7VmBlGifM/smiW87HfAJ1wSazv1fZTrg6bKkkBWRJVoUt1lCyVyj/6mIU6Xq/H2gtQ9yHQUdBTd0FBvAvqfgoD0R1Pj6TR87l957ZItf/f2QbpHS58WkpNHuldmbcdmG9/ZHy70QNDN/IFJK5oaTRLw4Gee5svggkXjKGkMJq18uiAyA60EmoCj9BvHRYXsw/QaskGDxFGR57vdbsr73an1m3xIDfnjw939l8X9hFK6DEjACf3H6ex6OqM1En3NzajMf9jxjJrjBUZ8jbnTXBkq1ANuB3ctYTujJkKvKnLYKoOK/FcsoW1LHvDZ666j5Z8NetLS6uSXXkoZVMgl+tEEuEsjdPKdAJwsf/HgdNkh40YIdHEUS6P3bCoMb105PHK1lRTm+Y4kxHdQANCDGdMwatNaC5qbTdNPUUgl6fsFqziUbw==",sidebar_class_name:"post api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},v=void 0,R={},h=[];function j(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Register invitation for user who will be created"}),"\n",(0,r.jsx)(a(),{method:"post",path:"/v1/user/bid",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Register invitation for user who will be created"}),"\n",(0,r.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(l(),{parameters:void 0}),"\n",(0,r.jsx)(c(),{title:"Body",body:{description:"createUserRQ",content:{"application/json":{schema:{title:"CreateUserRQ",required:["defaultProject","email","role"],type:"object",properties:{defaultProject:{type:"string"},email:{type:"string"},role:{type:"string"}}}}},required:!0}}),"\n",(0,r.jsx)(g(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"*/*":{schema:{title:"CreateUserBidRS",type:"object",properties:{backLink:{type:"string"},bid:{type:"string"},message:{type:"string"}}}}}}}})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);