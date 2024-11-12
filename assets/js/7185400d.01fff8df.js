"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73906],{84745:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>j,contentTitle:()=>f,default:()=>M,frontMatter:()=>m,metadata:()=>t,toc:()=>v});const t=JSON.parse('{"id":"api/service-api/create-dashboard","title":"Create dashboard for specified project","description":"Create dashboard for specified project","source":"@site/docs/api/service-api/create-dashboard.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/create-dashboard","permalink":"/docs/api/service-api/create-dashboard","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-dashboard","title":"Create dashboard for specified project","description":"Create dashboard for specified project","sidebar_label":"Create dashboard for specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVU1v2zgQ/SvCnFqAseyg7UGnzaZZbBZFm9pZ7MHQYSyObWYlkiWpOIag/14MRcVKXLT1xdRwPt4bviE7CLjzUKxBot9vDDp5URkdnKlrclAKMJYcBmX0rYQCKkcY6OPoCwIsOmwokOMsHWhsCAqwzjxQFT7zlwCl2YRhDwIcfWuVIwlFcC0J8NWeGoSig3C0HOqDU3oHfV8OzuTDn0Ye2YORkQ68RGtrVUVg+YM3mm2nVKci6wFRKcb0ZsPAGLhjakGR5whJvnLKcj7+bPDpE+ld2EOxeD+fC2iUHg1z8RqqSLTPOQgIKtRsun7ZueVX6Hn7ZTuiwVuj/YDqcr44A5cyce9/ux8/567kxEfpQDtyIGBrXINhMH1494LMjQ7umHAsV8yEd38EM3vWVbY1LvOWKrVVJLOkEBDQUNgbFpc1PoJjoRSQPy7ybqKjPpcT2Xlyj6PmWldDAV2kS32R593e+NDnaBW8RrUka1y4My5gnV3d3WZDIhDwiE7hph5aMuTiFem2YRntQ7Ag4p9nOUnaYltze+JOL4CLnp/W38aHjOWRoZYZF8/eqG2miSTJt5nZZgOkLGF6xnMqIKkxMxe9bHSaKcM9L7kNVetUOMY+bAgduauW27cup9urSCcymzo9H3oiN7JOTiDS4q9RCf/8dx91wApbnmbz5gkbW9M5+TQH43xMBkbprYkAkqKm5/LrQ5OmahvSIeo9DQJWsfup0qq1HAMCqEHF+vCD5Y+zRgqoVUXa0yT8ymK1p+xyNgeR9MU9KvL8cDjMMO7OjNvlKdTnn26vbz6vbi44pBfA4hzAv58tko313aCelPntGXl1PaVjC/QUcluj0pw+wuzS+KzhcQECipcX8WmCylGva+i6DXr619V9z+ZvLTnWU3kaiaguqTyvJRRbrD2dYXq+jODNMl1qbzMQP8aajKiPcfLqlr9AwP90fPV69CWPFqEkF2EMHtdDsYt7znPKcHYL9mKMuKoqsuGnvuXkLrr7srpn/aeXpzGSYxwe+AnDw4DWRPJxrKKtgxr1rsUd+w45+fcdirSMaA==","sidebar_class_name":"post api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get all permitted dashboard resources for specified project","permalink":"/docs/api/service-api/get-all-dashboards"},"next":{"title":"Remove widget from specified dashboard","permalink":"/docs/api/service-api/remove-widget"}}');var i=r(74848),s=r(28453),o=r(57742),n=r.n(o),p=r(78178),c=r.n(p),d=r(19624),l=r.n(d),u=r(96226),b=r.n(u),h=(r(77675),r(19365),r(51107));const m={id:"create-dashboard",title:"Create dashboard for specified project",description:"Create dashboard for specified project",sidebar_label:"Create dashboard for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVU1v2zgQ/SvCnFqAseyg7UGnzaZZbBZFm9pZ7MHQYSyObWYlkiWpOIag/14MRcVKXLT1xdRwPt4bviE7CLjzUKxBot9vDDp5URkdnKlrclAKMJYcBmX0rYQCKkcY6OPoCwIsOmwokOMsHWhsCAqwzjxQFT7zlwCl2YRhDwIcfWuVIwlFcC0J8NWeGoSig3C0HOqDU3oHfV8OzuTDn0Ye2YORkQ68RGtrVUVg+YM3mm2nVKci6wFRKcb0ZsPAGLhjakGR5whJvnLKcj7+bPDpE+ld2EOxeD+fC2iUHg1z8RqqSLTPOQgIKtRsun7ZueVX6Hn7ZTuiwVuj/YDqcr44A5cyce9/ux8/567kxEfpQDtyIGBrXINhMH1494LMjQ7umHAsV8yEd38EM3vWVbY1LvOWKrVVJLOkEBDQUNgbFpc1PoJjoRSQPy7ybqKjPpcT2Xlyj6PmWldDAV2kS32R593e+NDnaBW8RrUka1y4My5gnV3d3WZDIhDwiE7hph5aMuTiFem2YRntQ7Ag4p9nOUnaYltze+JOL4CLnp/W38aHjOWRoZYZF8/eqG2miSTJt5nZZgOkLGF6xnMqIKkxMxe9bHSaKcM9L7kNVetUOMY+bAgduauW27cup9urSCcymzo9H3oiN7JOTiDS4q9RCf/8dx91wApbnmbz5gkbW9M5+TQH43xMBkbprYkAkqKm5/LrQ5OmahvSIeo9DQJWsfup0qq1HAMCqEHF+vCD5Y+zRgqoVUXa0yT8ymK1p+xyNgeR9MU9KvL8cDjMMO7OjNvlKdTnn26vbz6vbi44pBfA4hzAv58tko313aCelPntGXl1PaVjC/QUcluj0pw+wuzS+KzhcQECipcX8WmCylGva+i6DXr619V9z+ZvLTnWU3kaiaguqTyvJRRbrD2dYXq+jODNMl1qbzMQP8aajKiPcfLqlr9AwP90fPV69CWPFqEkF2EMHtdDsYt7znPKcHYL9mKMuKoqsuGnvuXkLrr7srpn/aeXpzGSYxwe+AnDw4DWRPJxrKKtgxr1rsUd+w45+fcdirSMaA==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},f=void 0,j={},v=[];function C(e){const a={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Create dashboard for specified project"}),"\n",(0,i.jsx)(n(),{method:"post",path:"/v1/{projectName}/dashboard",context:"endpoint"}),"\n",(0,i.jsx)(a.p,{children:"Create dashboard for specified project"}),"\n",(0,i.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(c(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,i.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{required:["name"],type:"object",properties:{description:{maxLength:1500,minLength:0,type:"string"},name:{type:"string"}},title:"CreateDashboardRQ"}}},required:!0}}),"\n",(0,i.jsx)(b(),{id:void 0,label:void 0,responses:{201:{description:"Created",content:{"application/json":{schema:{type:"object",properties:{id:{type:"integer",format:"int64"}},title:"EntryCreatedRS"}}}}}})]})}function M(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}}}]);