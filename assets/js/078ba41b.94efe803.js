"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12532],{89683:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>g,contentTitle:()=>b,default:()=>D,frontMatter:()=>h,metadata:()=>t,toc:()=>x});const t=JSON.parse('{"id":"api/service-api/versions/5.11/delete-user-using-delete-1","title":"Delete specified user","description":"Delete specified user","source":"@site/docs/api/service-api/versions/5.11/delete-user-using-delete-1.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/delete-user-using-delete-1","permalink":"/docs/api/service-api/versions/5.11/delete-user-using-delete-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-user-using-delete-1","title":"Delete specified user","description":"Delete specified user","sidebar_label":"Delete specified user","hide_title":true,"hide_table_of_contents":true,"api":"eJx1VE1P20AQ/SvWnAAtMaC2B58aQaSiooKgOaGo2ngn8bb27jI7hkaW/3s1XocEUnyxPTsfb968nQ5YryMUj9BGpNPSOyZf10iwUOADkmbr3bWBAgzWyDiPSPNo3fpqdjP7Oft1DgqCJt0gI0miDpxuEAqwBhRYBwUEzRUoMBhLskESbo8Jn1pLaKBgalFBLCtsNBQd8CYMSRzjGgkUrDw1mpPpyyfo+4WEx+BdxCgRF2dn8npb5fY7KJCu0LGcnuQn8tqrY7mWQrfbXi99E2qUr/sHUFscfvkbS5ZeSVhhm2o2GKNe4x7gyGTdGvr0SNOBsNQsPa50HfE9D1cDrVkMWNqVRZPJIEBBg1z5He8DzVxBAbk4xLyzpgcFEel5S3xLNRTQBfLsS1/3RZ53uuXKk+VNn+tgD6Zwj8ET33liXWcpFyh41mT1sk49btMlcle6rWUKFXOIB+nutr4K0LWN6EocQY3+i17BK6LDaX3zkTORT6adyQRZdmRXmUM0aI4zv8oS3uw94B0ug42f0OAVBqeJ9TKNhVBVtqnuYwdL1IQ0bYXSx4UcW7fy+4rYp+YD3rY4pnfXmfFl26DjQUSj6HQ5iG68EA9tkCDhptFWRhWT5esBXgW1LdFF3AufBl1WmF1MzkCNoxZSizx/eXmZ6OF04mmdj6Exv7m+nP14mJ1KSK9AdJLQf56cnydb8JEb7fbKfKTHN/2/yp3xL+eh1tZJtgFVNwo1rRTRSGGNrJPKRxZz1y11xDnVfS/mpxZJZrLY6W6YkLFRvj+4N93uVsPR/bhGjrNhq/wX22jUbjMIvG7lDxT8wU3aRr2Is0JtkIb66WBalhh4L0Q2iMjl9X6mRQh9/w/Mis8D","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"findUsers","permalink":"/docs/api/service-api/versions/5.11/find-users-using-get-1"},"next":{"title":"Return information about specified user","permalink":"/docs/api/service-api/versions/5.11/get-user-using-get-1"}}');var r=s(74848),n=s(28453),a=s(57742),d=s.n(a),p=s(78178),o=s.n(p),l=s(19624),c=s.n(l),u=s(96226),f=s.n(u),m=(s(77675),s(19365),s(51107));const h={id:"delete-user-using-delete-1",title:"Delete specified user",description:"Delete specified user",sidebar_label:"Delete specified user",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VE1P20AQ/SvWnAAtMaC2B58aQaSiooKgOaGo2ngn8bb27jI7hkaW/3s1XocEUnyxPTsfb968nQ5YryMUj9BGpNPSOyZf10iwUOADkmbr3bWBAgzWyDiPSPNo3fpqdjP7Oft1DgqCJt0gI0miDpxuEAqwBhRYBwUEzRUoMBhLskESbo8Jn1pLaKBgalFBLCtsNBQd8CYMSRzjGgkUrDw1mpPpyyfo+4WEx+BdxCgRF2dn8npb5fY7KJCu0LGcnuQn8tqrY7mWQrfbXi99E2qUr/sHUFscfvkbS5ZeSVhhm2o2GKNe4x7gyGTdGvr0SNOBsNQsPa50HfE9D1cDrVkMWNqVRZPJIEBBg1z5He8DzVxBAbk4xLyzpgcFEel5S3xLNRTQBfLsS1/3RZ53uuXKk+VNn+tgD6Zwj8ET33liXWcpFyh41mT1sk49btMlcle6rWUKFXOIB+nutr4K0LWN6EocQY3+i17BK6LDaX3zkTORT6adyQRZdmRXmUM0aI4zv8oS3uw94B0ug42f0OAVBqeJ9TKNhVBVtqnuYwdL1IQ0bYXSx4UcW7fy+4rYp+YD3rY4pnfXmfFl26DjQUSj6HQ5iG68EA9tkCDhptFWRhWT5esBXgW1LdFF3AufBl1WmF1MzkCNoxZSizx/eXmZ6OF04mmdj6Exv7m+nP14mJ1KSK9AdJLQf56cnydb8JEb7fbKfKTHN/2/yp3xL+eh1tZJtgFVNwo1rRTRSGGNrJPKRxZz1y11xDnVfS/mpxZJZrLY6W6YkLFRvj+4N93uVsPR/bhGjrNhq/wX22jUbjMIvG7lDxT8wU3aRr2Is0JtkIb66WBalhh4L0Q2iMjl9X6mRQh9/w/Mis8D",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},b=void 0,g={},x=[];function B(e){const i={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete specified user"}),"\n",(0,r.jsx)(d(),{method:"delete",path:"/users/{id}",context:"endpoint"}),"\n",(0,r.jsx)(i.p,{children:"Delete specified user"}),"\n",(0,r.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(o(),{parameters:[{name:"id",in:"path",description:"id",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,r.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function D(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(B,{...e})}):B(e)}}}]);