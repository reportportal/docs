"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22712],{23057:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>x,frontMatter:()=>y,metadata:()=>a,toc:()=>k});const a=JSON.parse('{"id":"api/service-api/versions/5.10/get-all-dashboards-using-get","title":"Get all permitted dashboard resources for specified project","description":"Get all permitted dashboard resources for specified project","source":"@site/docs/api/service-api/versions/5.10/get-all-dashboards-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-all-dashboards-using-get","permalink":"/docs/api/service-api/versions/5.10/get-all-dashboards-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-all-dashboards-using-get","title":"Get all permitted dashboard resources for specified project","description":"Get all permitted dashboard resources for specified project","sidebar_label":"Get all permitted dashboard resources for specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJzFV81y20YMfpUdXGJnGNJ2fw481dO4qaet67Gbk0eHFQmJ25K7aywoR1H5RH2E3vJkHZAUTUWyLTuZ6UUcLb/F9wELYMEVsJ4HSG8g16GYOk35m8xZJleWSDCJwHkkzcbZ8xxSmCOfluXbNTa8D8bO3539ARF4TbpCRhJzK7C6QkhhZkpGivE2NjlEYCykcFsjLSGCHENGxotxSOGnFhnUdKlemfwVRBCyAisN6Qp46cWYsYxzJIhg5qjS3C19/y00TbSDsV3Ym1PQO1kDk7HzBzjcnW0F7UnSwp/P4sn9iRmfPyOEw5aXR9LrOcby8zjrFYa65KAEqZauVnfasmKnCJkMLlAdHMXxxeH+Or452dYRzMcndFzU1RRJuZkizBzlQXkk1ev/EmZH/DjztSM2dq4yMoxktDJWcYGqs5wqT1JFvIzUgQ7Z37L5MFZvcabrkpXYV45yJGWC0iFDmxs7j9VvdcnGl9ghBuOaUIXae0eMeSy+8bJs88VRBRHgB1+6HCFlqnGH55pIiw+GsQq7MnAcgC6LLkaV5DUXWxHYxBHe1oYwf1DCQDURcPDOBmylnBwdyWPT+O+/QATSldCyvH2dvJbHyKrhNgDnjKSnJX76Z+hQVxhcTRl++heiNbubilZxtGnEEU+YaRa5M10G/Ny3d8hKl6VkU2WYMVdDr1TUmw9y1ip4zMzMYK76eEAEFXLh+tbZdkkuIIVkcZysRkFrksGmHCjSYt1HayohBcGyy1zZpEmy0jUXjgwvm0R7s6MgJTcuHbEuVWcLIlhoMhKcNs5rc12w2zyEFApmH7bMXa6xEaCtK7ksBAhRj580EQyKtk/vZxdYSTopbXMlytSBmSmLmGN+KOXa6VWfC77XlWPlYmpRvgXFxsnxTSRUWd3x3qxgipqQTmsJ8c1k/PpacqVzfQwaErJ3qE0p+d+BpBeAsTM3TrJxdB8I/dqV08tzlbusrtBye4f2eayzNo/7GrvualnCW2kjp91X9w9bLkdQmgxtwNH2U6+zAtVJfARRny3iTZokd3d3sW7fxo7mSb81JL+e/3h2cX32RrY0EUiqdeq/i4+P4mNZ8y5wpe2I5suqYCNKQ9QZP3DiS22scLbaV32F3MDiGCJINxvLfZFMIihcYAGuVlMd8D2VTSPLXYuWdMhNkIR/oK5X9y1lx+yxU+FfuNweaRa6rAUK0jZfRrkePfYi7aear0A7DCN78a4nna9AvDGb7EU+HoBeKOAZY8ojksYz0QuFPDqnPEXdj0EvpP6fB5Unneva4L1zk/tr65kVfXDVzyCHarOF7NSwnozsckw/aBsZaOS2K1DnSK2iDnGaZejH0mVEEfXD7S/fSE3zH+HcnQ8=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"dashboard-controller","permalink":"/docs/api/service-api/versions/5.10/dashboard-controller"},"next":{"title":"Create dashboard for specified project","permalink":"/docs/api/service-api/versions/5.10/create-dashboard-using-post"}}');var t=s(74848),i=s(28453),n=s(57742),o=s.n(n),d=s(78178),c=s.n(d),p=s(19624),l=s.n(p),m=s(96226),u=s.n(m),h=(s(77675),s(19365),s(51107));const y={id:"get-all-dashboards-using-get",title:"Get all permitted dashboard resources for specified project",description:"Get all permitted dashboard resources for specified project",sidebar_label:"Get all permitted dashboard resources for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJzFV81y20YMfpUdXGJnGNJ2fw481dO4qaet67Gbk0eHFQmJ25K7aywoR1H5RH2E3vJkHZAUTUWyLTuZ6UUcLb/F9wELYMEVsJ4HSG8g16GYOk35m8xZJleWSDCJwHkkzcbZ8xxSmCOfluXbNTa8D8bO3539ARF4TbpCRhJzK7C6QkhhZkpGivE2NjlEYCykcFsjLSGCHENGxotxSOGnFhnUdKlemfwVRBCyAisN6Qp46cWYsYxzJIhg5qjS3C19/y00TbSDsV3Ym1PQO1kDk7HzBzjcnW0F7UnSwp/P4sn9iRmfPyOEw5aXR9LrOcby8zjrFYa65KAEqZauVnfasmKnCJkMLlAdHMXxxeH+Or452dYRzMcndFzU1RRJuZkizBzlQXkk1ev/EmZH/DjztSM2dq4yMoxktDJWcYGqs5wqT1JFvIzUgQ7Z37L5MFZvcabrkpXYV45yJGWC0iFDmxs7j9VvdcnGl9ghBuOaUIXae0eMeSy+8bJs88VRBRHgB1+6HCFlqnGH55pIiw+GsQq7MnAcgC6LLkaV5DUXWxHYxBHe1oYwf1DCQDURcPDOBmylnBwdyWPT+O+/QATSldCyvH2dvJbHyKrhNgDnjKSnJX76Z+hQVxhcTRl++heiNbubilZxtGnEEU+YaRa5M10G/Ny3d8hKl6VkU2WYMVdDr1TUmw9y1ip4zMzMYK76eEAEFXLh+tbZdkkuIIVkcZysRkFrksGmHCjSYt1HayohBcGyy1zZpEmy0jUXjgwvm0R7s6MgJTcuHbEuVWcLIlhoMhKcNs5rc12w2zyEFApmH7bMXa6xEaCtK7ksBAhRj580EQyKtk/vZxdYSTopbXMlytSBmSmLmGN+KOXa6VWfC77XlWPlYmpRvgXFxsnxTSRUWd3x3qxgipqQTmsJ8c1k/PpacqVzfQwaErJ3qE0p+d+BpBeAsTM3TrJxdB8I/dqV08tzlbusrtBye4f2eayzNo/7GrvualnCW2kjp91X9w9bLkdQmgxtwNH2U6+zAtVJfARRny3iTZokd3d3sW7fxo7mSb81JL+e/3h2cX32RrY0EUiqdeq/i4+P4mNZ8y5wpe2I5suqYCNKQ9QZP3DiS22scLbaV32F3MDiGCJINxvLfZFMIihcYAGuVlMd8D2VTSPLXYuWdMhNkIR/oK5X9y1lx+yxU+FfuNweaRa6rAUK0jZfRrkePfYi7aear0A7DCN78a4nna9AvDGb7EU+HoBeKOAZY8ojksYz0QuFPDqnPEXdj0EvpP6fB5Unneva4L1zk/tr65kVfXDVzyCHarOF7NSwnozsckw/aBsZaOS2K1DnSK2iDnGaZejH0mVEEfXD7S/fSE3zH+HcnQ8=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},f=void 0,b={},k=[];function g(e){const r={p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get all permitted dashboard resources for specified project"}),"\n",(0,t.jsx)(o(),{method:"get",path:"/v1/{projectName}/dashboard",context:"endpoint"}),"\n",(0,t.jsx)(r.p,{children:"Get all permitted dashboard resources for specified project"}),"\n",(0,t.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsx)(c(),{parameters:[{name:"filter.eq.id",in:"query",description:"Filters by 'id'",schema:{type:"integer",format:"int64"}},{name:"filter.eq.name",in:"query",description:"Filters by 'name'",schema:{type:"string"}},{name:"filter.eq.owner",in:"query",description:"Filters by 'owner'",schema:{type:"string"}},{name:"filter.eq.projectId",in:"query",description:"Filters by 'projectId'",schema:{type:"integer",format:"int64"}},{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}},{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}},{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,t.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,t.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"Iterable\xabDashboardResource\xbb",type:"object"}}}}}})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}}}]);