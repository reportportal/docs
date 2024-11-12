"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71633],{51112:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>h,default:()=>y,frontMatter:()=>b,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"api/service-api/get-project-subject-name","title":"Load project activities subjectNames by filter","description":"Only for current project","source":"@site/docs/api/service-api/get-project-subject-name.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-project-subject-name","permalink":"/docs/api/service-api/get-project-subject-name","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-project-subject-name","title":"Load project activities subjectNames by filter","description":"Only for current project","sidebar_label":"Load project activities subjectNames by filter","hide_title":true,"hide_table_of_contents":true,"api":"eJytVE1v2zAM/SsCTy2gxm2BXXxaMXRbt6Irmg07BDkoNpOosyWVotMZhv/7QNtJ3GTrMGC+yBC/Hp8e2QCbVYR0BiZju7Fcn+EGHZ9l3jH5okCCuYYcY0Y2sPUOUvjiilotPamsIkLHKpB/xIxBgw9IRtxuckhhhXzfm6bVQo47UyJoCIZMiYwklRtwcpvC0haMNMkcT+ILdytFnyqkGjQQPlWWMIeUqUINMVtjaSBtgOsgaSKTdStoW73LPOAbpwuG1/+UbS7OMXgXMYr98vxcjgNmPoMGoQ4di9WEUNisIyR5jOLSHJcwREY6s4xl/F1p+TSUyGs/sNpxyGtIIdlcJMPTWYxJM2q1TV7SGJE2W8orKiCFpsOCbZokzdpHbhMTLBw+9wMGT3zviU2hru5vVJ8INGwMWbMoekL6XPKHripFUmvmALo7Yq+ipakKhrS3tBqk6DGLH31kJU+njMuVFFcndqkcYo75qfJL1UNSA6Ydnn2BHEs/oc4rdE4T64XJudCQVWS57nhYoCGkq0q4nM3H5mnXTtfZ2Gn3OkNz264HJ9DDz3tPpREkn75/FS2CdUvfhVsu8IDVv1Oe+6wq0XEnpUFjJuu4GzQ+rYLEgAYsjZXXjf3N2yMaNBQ2QxdxFH4VTLZGdTk5Bz2oQzpMk+T5+XliOuvE0yoZQmNye/Pu+m56fSYhrQaRVg/+zeRiuAs+cmncqMytN/l2Xai9btVIqVEtatXvgkNemv1svbaEhhdi/MlJKIx1gqXrqRnGZgabC9CwBwAa0pdbYjw7861SZ9A0CxPxGxVtK9f9VhIl5TbKKOSQLk0R8RXkJw/D0jlVfwL7A+vXFuLGFJUEgQh2O4T/H8V2P7l6XHOLbkxXO5dhRpMjdTB6j6ssw8Cj2KN1KPh3e+3DtUzKLx2ZRNI=","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get activities by search criteria","permalink":"/docs/api/service-api/get-activities"},"next":{"title":"bug-tracking-system-controller","permalink":"/docs/api/service-api/bug-tracking-system-controller"}}');var a=i(74848),r=i(28453),c=i(57742),o=i.n(c),n=i(78178),p=i.n(n),d=i(19624),l=i.n(d),u=i(96226),j=i.n(u),m=(i(77675),i(19365),i(51107));const b={id:"get-project-subject-name",title:"Load project activities subjectNames by filter",description:"Only for current project",sidebar_label:"Load project activities subjectNames by filter",hide_title:!0,hide_table_of_contents:!0,api:"eJytVE1v2zAM/SsCTy2gxm2BXXxaMXRbt6Irmg07BDkoNpOosyWVotMZhv/7QNtJ3GTrMGC+yBC/Hp8e2QCbVYR0BiZju7Fcn+EGHZ9l3jH5okCCuYYcY0Y2sPUOUvjiilotPamsIkLHKpB/xIxBgw9IRtxuckhhhXzfm6bVQo47UyJoCIZMiYwklRtwcpvC0haMNMkcT+ILdytFnyqkGjQQPlWWMIeUqUINMVtjaSBtgOsgaSKTdStoW73LPOAbpwuG1/+UbS7OMXgXMYr98vxcjgNmPoMGoQ4di9WEUNisIyR5jOLSHJcwREY6s4xl/F1p+TSUyGs/sNpxyGtIIdlcJMPTWYxJM2q1TV7SGJE2W8orKiCFpsOCbZokzdpHbhMTLBw+9wMGT3zviU2hru5vVJ8INGwMWbMoekL6XPKHripFUmvmALo7Yq+ipakKhrS3tBqk6DGLH31kJU+njMuVFFcndqkcYo75qfJL1UNSA6Ydnn2BHEs/oc4rdE4T64XJudCQVWS57nhYoCGkq0q4nM3H5mnXTtfZ2Gn3OkNz264HJ9DDz3tPpREkn75/FS2CdUvfhVsu8IDVv1Oe+6wq0XEnpUFjJuu4GzQ+rYLEgAYsjZXXjf3N2yMaNBQ2QxdxFH4VTLZGdTk5Bz2oQzpMk+T5+XliOuvE0yoZQmNye/Pu+m56fSYhrQaRVg/+zeRiuAs+cmncqMytN/l2Xai9btVIqVEtatXvgkNemv1svbaEhhdi/MlJKIx1gqXrqRnGZgabC9CwBwAa0pdbYjw7861SZ9A0CxPxGxVtK9f9VhIl5TbKKOSQLk0R8RXkJw/D0jlVfwL7A+vXFuLGFJUEgQh2O4T/H8V2P7l6XHOLbkxXO5dhRpMjdTB6j6ssw8Cj2KN1KPh3e+3DtUzKLx2ZRNI=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},h=void 0,v={},k=[];function M(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Load project activities subjectNames by filter"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/v1/activities/{projectName}/subjectName",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Only for current project"}),"\n",(0,a.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[{name:"filter.cnt.subjectName",in:"query",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(j(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(M,{...e})}):M(e)}}}]);