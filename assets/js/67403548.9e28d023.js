"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62718],{18983:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>k,frontMatter:()=>g,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"api/service-api/delete-project-index","title":"Delete project index from ML","description":"Delete project index from ML","source":"@site/docs/api/service-api/delete-project-index.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/delete-project-index","permalink":"/docs/api/service-api/delete-project-index","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-project-index","title":"Delete project index from ML","description":"Delete project index from ML","sidebar_label":"Delete project index from ML","hide_title":true,"hide_table_of_contents":true,"api":"eJyFVMFu2zAM/RWBpxZQ47bALj4taDMsW9cWTYcdAh8Um0nUyZIqyWkDw/8+UFYSLylQXyxRpPj49MgWglh5yOdgnXnBMlyURgdnlEIHBQdj0YkgjZ5WkEOFCgM+9p5TXeE7cLDCiRoDOrqmBS1qhHx33T3tOEhNJhHWwMHhayMdVpAH1yAHX66xFpC3ELaWQn1wUq+g6wpy9tZoj57Ory8v6VehL520hApyePgJHAg06kCnwloly4g5e/Hk0p6mMAsCR+AdVRhkn6BG78UKP8LCIcigyPSwo+TG1FYhrZ5m0NHHj7DdRr5Y4oJJYowtnanZrzvgUGNYmwOvkcuwhhyyzVWWgrJ2wGSXyUS6R7fZMd44BTm0sUjs8ixr18aHLhNWwjGiJ7TGhUfjglBs/Dhl/UXAYSOcFAvVE9HfRSvUTU3yWIdggcefJ2FUuBSNCpD3Jx0HSnr6PN+ND4w0wYSuGCVnZ3LJNGKF1TkzS9ZDYgnTHs8hQYW1GbnoZaPTSBriuyAaysbJsI08LFA4dOOGKJwXw+NZLCdWNnTav3Iqbld1cgKeFt+MqwUh+fHnOUpB6qWJ4UkSQ1Y/p7wyZVOjDlFESbyijNyl5pk1lmKAA9ZC0uv63vL1hAYOSpaoPQ7Cx1aUa2TXo0vgSR1UYZ5lb29vIxFPR8atshTqs7vpzeR+NrmgkI4DSasH/2V0lWzW+FALPUjzibr/Y2FPdcD3kFklpKZLI7g2yX4Om6u+JVNz5sdDhLRf7JQ2h7ZdCI+/neo6Mr826EgJxUHMUReV9LSuIF8K5fEE2X54wNlTmk3nDPjHiJNR6G3sGdXQDjj8xe3R1OsKagoUFboIo/cYlyXaMIg9mVck3P1kuJ3cTZ4n0HX/AI218lk=","sidebar_class_name":"delete api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Starts reindex all project data in ML","permalink":"/docs/api/service-api/index-project-data"},"next":{"title":"Assign users","permalink":"/docs/api/service-api/assign-project-users"}}');var r=i(74848),a=i(28453),s=i(57742),o=i.n(s),p=i(78178),d=i.n(p),l=i(19624),c=i.n(l),h=i(96226),j=i.n(h),m=(i(77675),i(19365),i(51107));const g={id:"delete-project-index",title:"Delete project index from ML",description:"Delete project index from ML",sidebar_label:"Delete project index from ML",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVMFu2zAM/RWBpxZQ47bALj4taDMsW9cWTYcdAh8Um0nUyZIqyWkDw/8+UFYSLylQXyxRpPj49MgWglh5yOdgnXnBMlyURgdnlEIHBQdj0YkgjZ5WkEOFCgM+9p5TXeE7cLDCiRoDOrqmBS1qhHx33T3tOEhNJhHWwMHhayMdVpAH1yAHX66xFpC3ELaWQn1wUq+g6wpy9tZoj57Ory8v6VehL520hApyePgJHAg06kCnwloly4g5e/Hk0p6mMAsCR+AdVRhkn6BG78UKP8LCIcigyPSwo+TG1FYhrZ5m0NHHj7DdRr5Y4oJJYowtnanZrzvgUGNYmwOvkcuwhhyyzVWWgrJ2wGSXyUS6R7fZMd44BTm0sUjs8ixr18aHLhNWwjGiJ7TGhUfjglBs/Dhl/UXAYSOcFAvVE9HfRSvUTU3yWIdggcefJ2FUuBSNCpD3Jx0HSnr6PN+ND4w0wYSuGCVnZ3LJNGKF1TkzS9ZDYgnTHs8hQYW1GbnoZaPTSBriuyAaysbJsI08LFA4dOOGKJwXw+NZLCdWNnTav3Iqbld1cgKeFt+MqwUh+fHnOUpB6qWJ4UkSQ1Y/p7wyZVOjDlFESbyijNyl5pk1lmKAA9ZC0uv63vL1hAYOSpaoPQ7Cx1aUa2TXo0vgSR1UYZ5lb29vIxFPR8atshTqs7vpzeR+NrmgkI4DSasH/2V0lWzW+FALPUjzibr/Y2FPdcD3kFklpKZLI7g2yX4Om6u+JVNz5sdDhLRf7JQ2h7ZdCI+/neo6Mr826EgJxUHMUReV9LSuIF8K5fEE2X54wNlTmk3nDPjHiJNR6G3sGdXQDjj8xe3R1OsKagoUFboIo/cYlyXaMIg9mVck3P1kuJ3cTZ4n0HX/AI218lk=",sidebar_class_name:"delete api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,x={},u=[];function U(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete project index from ML"}),"\n",(0,r.jsx)(o(),{method:"delete",path:"/v1/project/{projectName}/index",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Delete project index from ML"}),"\n",(0,r.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(j(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function k(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(U,{...e})}):U(e)}}}]);