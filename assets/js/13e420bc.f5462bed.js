"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78775],{79192:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>y,frontMatter:()=>b,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"id":"api/service-api/versions/5.11/delete-test-items-using-delete","title":"Delete test items by specified ids","description":"Delete test items by specified ids","source":"@site/docs/api/service-api/versions/5.11/delete-test-items-using-delete.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/delete-test-items-using-delete","permalink":"/docs/api/service-api/versions/5.11/delete-test-items-using-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-test-items-using-delete","title":"Delete test items by specified ids","description":"Delete test items by specified ids","sidebar_label":"Delete test items by specified ids","hide_title":true,"hide_table_of_contents":true,"api":"eJydlU1v4jAQhv+KNae2ckmpdveQ06IWadFWbdWPE+JgkoF4N7Fde0KLovz31eSDBmilarkEnHfGj2deDxWQWgeI50AY6FwTFueJNeRtnqOHhQTr0CvS1sxSiCHFHAmfMNCMsAjPQZv19fRm+jQFCU55VSCh54QVGFUgxKDTABK0gRheSvRbkJBiSLx2nHUn8PhSao8pxORLlBBom3P4yvoCJOCby22Ku7dJhoWCuALaOpYp7xWn5hOEwbo2hGv0IJtEitqlH9+grmu5Y3Te/sGEbvlXx+oUZUeo+7oj5EOoQF6bNdT1gsXBWROwgbu8uODHfvK73yCBi4+G+O1ZdMaPLxxVU1Oqu75VV7ZwOfK3h0eQfZxdMjv3yXNTSbcsBYag1vgRdvvhIjiPiSI+6krlAQ/rct3YQrCHRIMlllsRHCZ6pTEVbYcLpMy+m6gxDGUQQ7QZR9WgtHXEOUBCQL/p3VT6HGJgGdnE5nUcRZUqKbNe07aOlNNH3XpAZz3dW08qF20ukLBRXqtl3h6+T9d2Y6XKnB2SEblwlO6+10pAUxZ8aVgIstMvagk7ouP2/rKBBPtNKJMKJhMneiUMYorpqbAr0fKKQ+B3rhQLO/KNyjWikbbcpgWXKinbfecVLFF59JOSqztf8GttVnZolWFpPqlbzzG5n4nUJmWBhhp3dS5VSePS7gY9lo6DuDaF0tyq0K78POKVkOsETcBB+MSpJENxOboA2bWaixpH0evr60g1b0fWr6MuNEQ3s6vp7eP0nENqCeyTlv77aDxu15wNVCgz2OZLPt0rxu5SEL5R5HKlDaduEKvOwHPYjEFCfDBF2MMLCZkNxJqqWqqAzz6va15uZyF3K9WB/fjJ3areRwKcPHQT57RD/ZDtL253U3Wj8pIVwCbonf//u+6f8MPd+yFltsPte6phgpovTIYqRd8QtYpJkqCjQSyPQabfjY/u/6au/wGfz074","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Start a root test item","permalink":"/docs/api/service-api/versions/5.11/start-root-item-using-post-1"},"next":{"title":"Get all unique attribute keys of specified launch","permalink":"/docs/api/service-api/versions/5.11/get-attribute-keys-using-get-1"}}');var a=i(74848),n=i(28453),d=i(57742),r=i.n(d),p=i(78178),o=i.n(p),l=i(19624),c=i.n(l),u=i(96226),v=i.n(u),m=(i(77675),i(19365),i(51107));const b={id:"delete-test-items-using-delete",title:"Delete test items by specified ids",description:"Delete test items by specified ids",sidebar_label:"Delete test items by specified ids",hide_title:!0,hide_table_of_contents:!0,api:"eJydlU1v4jAQhv+KNae2ckmpdveQ06IWadFWbdWPE+JgkoF4N7Fde0KLovz31eSDBmilarkEnHfGj2deDxWQWgeI50AY6FwTFueJNeRtnqOHhQTr0CvS1sxSiCHFHAmfMNCMsAjPQZv19fRm+jQFCU55VSCh54QVGFUgxKDTABK0gRheSvRbkJBiSLx2nHUn8PhSao8pxORLlBBom3P4yvoCJOCby22Ku7dJhoWCuALaOpYp7xWn5hOEwbo2hGv0IJtEitqlH9+grmu5Y3Te/sGEbvlXx+oUZUeo+7oj5EOoQF6bNdT1gsXBWROwgbu8uODHfvK73yCBi4+G+O1ZdMaPLxxVU1Oqu75VV7ZwOfK3h0eQfZxdMjv3yXNTSbcsBYag1vgRdvvhIjiPiSI+6krlAQ/rct3YQrCHRIMlllsRHCZ6pTEVbYcLpMy+m6gxDGUQQ7QZR9WgtHXEOUBCQL/p3VT6HGJgGdnE5nUcRZUqKbNe07aOlNNH3XpAZz3dW08qF20ukLBRXqtl3h6+T9d2Y6XKnB2SEblwlO6+10pAUxZ8aVgIstMvagk7ouP2/rKBBPtNKJMKJhMneiUMYorpqbAr0fKKQ+B3rhQLO/KNyjWikbbcpgWXKinbfecVLFF59JOSqztf8GttVnZolWFpPqlbzzG5n4nUJmWBhhp3dS5VSePS7gY9lo6DuDaF0tyq0K78POKVkOsETcBB+MSpJENxOboA2bWaixpH0evr60g1b0fWr6MuNEQ3s6vp7eP0nENqCeyTlv77aDxu15wNVCgz2OZLPt0rxu5SEL5R5HKlDaduEKvOwHPYjEFCfDBF2MMLCZkNxJqqWqqAzz6va15uZyF3K9WB/fjJ3areRwKcPHQT57RD/ZDtL253U3Wj8pIVwCbonf//u+6f8MPd+yFltsPte6phgpovTIYqRd8QtYpJkqCjQSyPQabfjY/u/6au/wGfz074",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},f=void 0,h={},g=[];function x(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete test items by specified ids"}),"\n",(0,a.jsx)(r(),{method:"delete",path:"/v1/{projectName}/item",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Delete test items by specified ids"}),"\n",(0,a.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(o(),{parameters:[{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(v(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);