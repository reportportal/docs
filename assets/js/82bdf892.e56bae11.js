"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91376],{37089:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>h,frontMatter:()=>b,metadata:()=>s,toc:()=>V});const s=JSON.parse('{"id":"api/service-api/versions/5.10/delete-test-items-using-delete","title":"Delete test items by specified ids","description":"Delete test items by specified ids","source":"@site/docs/api/service-api/versions/5.10/delete-test-items-using-delete.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/delete-test-items-using-delete","permalink":"/docs/api/service-api/versions/5.10/delete-test-items-using-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-test-items-using-delete","title":"Delete test items by specified ids","description":"Delete test items by specified ids","sidebar_label":"Delete test items by specified ids","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1P40AM/SuRT4CGpkW7e8hpK6i01SJAFE5VD9PEbWY3mRlmnEIV5b+vnC/SFiS0vaSZebaf7WenBJJbD9ESCD1dKsL8MjaanMkydLASYCw6ScroeQIRJJgh4RN6mhPm/tkrvb2Z3c6eZiDASidzJHTssAQtc4QIVOJBgNIQwUuBbg8CEvSxU5a99gCHL4VymEBErkABnvYZm2+My0EAvtnMJNjfxinmEqISaG8ZJp2T7Joz8INzpQm36EDUjiQ1Rz++QVVVoudonfmDMd3xW8vVSkpPqB7iTigfk/LklN5CVa0Y7K3RHmtyV+MxPw6d3/8GAVx81MS3F+EFP76QqqK6VPddq65NbjPkf48LEJ2dWTN37pPjppJquOTovdziR7SbHxfBOowlcaobmXk8rstNLYuANRTUtIL1PvAWY7VRmARNh3Ok1LyLqBYMpRBBuJuE5aC0Vcg+QIBHt+vUVLgMImAYmdhkVRSGpSwoNU7RvgqlVSfdekRrHD0YRzILGl8gYCedkuusSb5z13RjI4uMFZISWX/i7qHDCkBd5Dw0DATR4leVgJ7RaXt/GU8B6y2QOgmYWXCmNoFGTDA5D8wmaPgGx4TfeSWYm5GrUbYGjZThNq24VHHRxF2WsEbp0E0Lru5yNbxesJia1IegvvVtQrXm+L0BAYtA6Y0Zqm1Y3U9K36UyfZgHiYmLHDXVAm2FLuNa6O0QLgrLRlzeXCrutm9Ofp6kLCBTMWqPA/OplXGKwdVoDKJVC2cTheHr6+tI1rcj47Zha+rD2/n17G4xu2STSgBLrWH/fTQZjyZ8Zo2nXOpBmC9J/aAYfXEJ3yi0mVSaXdcUy3YGlrCbgIDoaBHxGKwEpMYTY8pyLT0+u6yq+LhZp9zwRHmW9CfjWb5vFTh7bJfWeUv1Q25/cd8v5p3MCkYA66gbnv+Pepjhh9G7Paf3w/Adq6GDimcuRZmgqxk1iGkco6WBLW9SZt9voPaTVVX/AEz+Zms=","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Start a root test item","permalink":"/docs/api/service-api/versions/5.10/start-root-item-using-post-1"},"next":{"title":"Get all unique attribute keys of specified launch","permalink":"/docs/api/service-api/versions/5.10/get-attribute-keys-using-get-1"}}');var a=i(74848),d=i(28453),r=i(57742),n=i.n(r),p=i(78178),o=i.n(p),m=i(19624),l=i.n(m),c=i(96226),u=i.n(c),v=(i(77675),i(19365),i(51107));const b={id:"delete-test-items-using-delete",title:"Delete test items by specified ids",description:"Delete test items by specified ids",sidebar_label:"Delete test items by specified ids",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1P40AM/SuRT4CGpkW7e8hpK6i01SJAFE5VD9PEbWY3mRlmnEIV5b+vnC/SFiS0vaSZebaf7WenBJJbD9ESCD1dKsL8MjaanMkydLASYCw6ScroeQIRJJgh4RN6mhPm/tkrvb2Z3c6eZiDASidzJHTssAQtc4QIVOJBgNIQwUuBbg8CEvSxU5a99gCHL4VymEBErkABnvYZm2+My0EAvtnMJNjfxinmEqISaG8ZJp2T7Joz8INzpQm36EDUjiQ1Rz++QVVVoudonfmDMd3xW8vVSkpPqB7iTigfk/LklN5CVa0Y7K3RHmtyV+MxPw6d3/8GAVx81MS3F+EFP76QqqK6VPddq65NbjPkf48LEJ2dWTN37pPjppJquOTovdziR7SbHxfBOowlcaobmXk8rstNLYuANRTUtIL1PvAWY7VRmARNh3Ok1LyLqBYMpRBBuJuE5aC0Vcg+QIBHt+vUVLgMImAYmdhkVRSGpSwoNU7RvgqlVSfdekRrHD0YRzILGl8gYCedkuusSb5z13RjI4uMFZISWX/i7qHDCkBd5Dw0DATR4leVgJ7RaXt/GU8B6y2QOgmYWXCmNoFGTDA5D8wmaPgGx4TfeSWYm5GrUbYGjZThNq24VHHRxF2WsEbp0E0Lru5yNbxesJia1IegvvVtQrXm+L0BAYtA6Y0Zqm1Y3U9K36UyfZgHiYmLHDXVAm2FLuNa6O0QLgrLRlzeXCrutm9Ofp6kLCBTMWqPA/OplXGKwdVoDKJVC2cTheHr6+tI1rcj47Zha+rD2/n17G4xu2STSgBLrWH/fTQZjyZ8Zo2nXOpBmC9J/aAYfXEJ3yi0mVSaXdcUy3YGlrCbgIDoaBHxGKwEpMYTY8pyLT0+u6yq+LhZp9zwRHmW9CfjWb5vFTh7bJfWeUv1Q25/cd8v5p3MCkYA66gbnv+Pepjhh9G7Paf3w/Adq6GDimcuRZmgqxk1iGkco6WBLW9SZt9voPaTVVX/AEz+Zms=",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},f=void 0,g={},V=[];function y(e){const t={p:"p",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Delete test items by specified ids"}),"\n",(0,a.jsx)(n(),{method:"delete",path:"/v1/{projectName}/item",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Delete test items by specified ids"}),"\n",(0,a.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(o(),{parameters:[{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}}})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);