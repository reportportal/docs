"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91857],{36140:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>y,contentTitle:()=>j,default:()=>M,frontMatter:()=>h,metadata:()=>a,toc:()=>E});const a=JSON.parse('{"id":"api/service-api/add-user-preference","title":"Edit logged-in user preferences","description":"Only for logged-in user","source":"@site/docs/api/service-api/add-user-preference.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/add-user-preference","permalink":"/docs/api/service-api/add-user-preference","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"add-user-preference","title":"Edit logged-in user preferences","description":"Only for logged-in user","sidebar_label":"Edit logged-in user preferences","hide_title":true,"hide_table_of_contents":true,"api":"eJy9VMFu2zAM/RWBpxZQ47bYdvBpQdFh2YY2aFbsEOSg2HSiTpZUSU4XGP73gbKSeMnWYZflEpkiRb7HR7YQxMpDPgfrzBMW4aIwOjijFDpYcCjRF07aII2GHO612rLKOKbMaoXlhdSs8eiAg7HoBHlNSshBlOWjRzd1WKFDXSBwsMKJGgM6ytaCFjVCDpVUAd2kBA6SMlgR1sDB4XMjHZaQB9cgB1+ssRaQtxC2luKkDriKmSvjahF607s30HV8/3iCdEdf//i+D07qFXTdgpy9Ndqjp/vry0v6O+LlM3Ag4lAHuhXWKllEPrInTy7taQqzpOKIGUfsBdknqNF7scLf1cIhyKDIdL+j+8bUViGdHmbQ0Y9DjWFtqA22ic8T5ByyzVWWCMnaATNdZvdtytpdPzrg4NFtdu1qnIIc2ggCuzzL2rXxocuElXCskge0xoWpcUEoNp5OWP8QcNgIJ8VS9UD7t+iEuqlJgusQLPD453vxVaJR1Nt403GgpKf0fzQ+MOo5E7pklJydyYppxBLLc2Yq1pfEUk37eg4JSqzNyEUvG51G0hCfC6KhaJwM28jDEoVDN26I0vlieD2LcCKyodO+iwncDnVyAp4OH3Yy/vTta2y11JWJ4anlQ1b/TnlpiqZGHaJIkjhFEblLwzFrLMUAB6yFpO763vL+hAYOShaoPQ7Cx1YUa2TXo0vgSR2EMM+yl5eXkYi3I+NWWQr12ZfJze3d7PaCQjoOJK2++Lejq2Szxoda6EGa21KGo23DDnr1x0S0hyl8ZVmljgT8ETKrhNSUO2Jo07TMYXPVT2aa0fzXXWKHmy3fL7HFTqFzaNul8PjoVNeR+blBRwpaHIYg6qmUns4l5JVQHl+Bc/aQdtY5+xOEZBR6G2dNNfQFHL7jdrhqaUP+x7xD5roFDTGKEl2E33uMiwJtGMSe7E8atP1amz7ShPwEcEBO+Q==","sidebar_class_name":"put api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Unassign users","permalink":"/docs/api/service-api/unassign-project-users"},"next":{"title":"Delete logged-in user preferences","permalink":"/docs/api/service-api/remove-user-preference"}}');var t=i(74848),s=i(28453),n=i(57742),p=i.n(n),d=i(78178),l=i.n(d),o=i(19624),c=i.n(o),u=i(96226),g=i.n(u),f=(i(77675),i(19365),i(51107));const h={id:"add-user-preference",title:"Edit logged-in user preferences",description:"Only for logged-in user",sidebar_label:"Edit logged-in user preferences",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu2zAM/RWBpxZQ47bYdvBpQdFh2YY2aFbsEOSg2HSiTpZUSU4XGP73gbKSeMnWYZflEpkiRb7HR7YQxMpDPgfrzBMW4aIwOjijFDpYcCjRF07aII2GHO612rLKOKbMaoXlhdSs8eiAg7HoBHlNSshBlOWjRzd1WKFDXSBwsMKJGgM6ytaCFjVCDpVUAd2kBA6SMlgR1sDB4XMjHZaQB9cgB1+ssRaQtxC2luKkDriKmSvjahF607s30HV8/3iCdEdf//i+D07qFXTdgpy9Ndqjp/vry0v6O+LlM3Ag4lAHuhXWKllEPrInTy7taQqzpOKIGUfsBdknqNF7scLf1cIhyKDIdL+j+8bUViGdHmbQ0Y9DjWFtqA22ic8T5ByyzVWWCMnaATNdZvdtytpdPzrg4NFtdu1qnIIc2ggCuzzL2rXxocuElXCskge0xoWpcUEoNp5OWP8QcNgIJ8VS9UD7t+iEuqlJgusQLPD453vxVaJR1Nt403GgpKf0fzQ+MOo5E7pklJydyYppxBLLc2Yq1pfEUk37eg4JSqzNyEUvG51G0hCfC6KhaJwM28jDEoVDN26I0vlieD2LcCKyodO+iwncDnVyAp4OH3Yy/vTta2y11JWJ4anlQ1b/TnlpiqZGHaJIkjhFEblLwzFrLMUAB6yFpO763vL+hAYOShaoPQ7Cx1YUa2TXo0vgSR2EMM+yl5eXkYi3I+NWWQr12ZfJze3d7PaCQjoOJK2++Lejq2Szxoda6EGa21KGo23DDnr1x0S0hyl8ZVmljgT8ETKrhNSUO2Jo07TMYXPVT2aa0fzXXWKHmy3fL7HFTqFzaNul8PjoVNeR+blBRwpaHIYg6qmUns4l5JVQHl+Bc/aQdtY5+xOEZBR6G2dNNfQFHL7jdrhqaUP+x7xD5roFDTGKEl2E33uMiwJtGMSe7E8atP1amz7ShPwEcEBO+Q==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},j=void 0,y={},E=[];function m(e){const r={p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Edit logged-in user preferences"}),"\n",(0,t.jsx)(p(),{method:"put",path:"/v1/project/{projectName}/preference/{filterId}",context:"endpoint"}),"\n",(0,t.jsx)(r.p,{children:"Only for logged-in user"}),"\n",(0,t.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsx)(l(),{parameters:[{name:"filterId",in:"path",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,t.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,t.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function M(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);