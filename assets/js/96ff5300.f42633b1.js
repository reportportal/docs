"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[19462],{42813:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>v,contentTitle:()=>g,default:()=>y,frontMatter:()=>x,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"api/service-api/versions/5.11/get-launch-report-using-get","title":"Export specified launch","description":"Only following formats are supported: pdf (by default), xls, html.","source":"@site/docs/api/service-api/versions/5.11/get-launch-report-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-launch-report-using-get","permalink":"/docs/api/service-api/versions/5.11/get-launch-report-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-launch-report-using-get","title":"Export specified launch","description":"Only following formats are supported: pdf (by default), xls, html.","sidebar_label":"Export specified launch","hide_title":true,"hide_table_of_contents":true,"api":"eJytVU2P3DYM/SsCT7uAMt4N0h586qIYNIsGySJpclnMQWvTY6WypEj0zA4M/feClj2f+UCCngzLJN/jexQ9AKl1hPIRjOpt1b6onKXgjMEAKwk1xipoT9pZKOGdNTvROGPcVtu1aFzoFEWhAorYe+8CYV0KXzfi6mknamxUb+haimcTpWipMwuQ4DwGxQXvayhhjfRmBH6PnP8xarv+a/kPSPAqqA4JA7MbwKoOoZxY3tcgQTMlr6iFc55HQQG/9DpgDSWFHiXEqsVOQTkA7TwX1JZwjQEk5Hby0e+vICW5R/XBfcaK3vLb94BP436IHSlouz5B2mjczhBfegy7C4wpQrELy87T7pMyPULZKBO/A8JlRj+YZt2ABLR9x8bnt2cTQQKbBKuUVsw+emcjRq718uaGH2fj8DdI4HlBS1AOKSUG8QErRdz1xKhDat3k9egrtVBCsbkthiO9UpFdK4bZvVSEcSZAQsSwmQehDwZK4FRylTOpLIpB9dS6oGmXCuX1hWR5th5cIGVErgUSNipo9WRyg3O53OUsVEvk40W5hzn2oCEHjvJx/CpJ2DO6lO21iyTYbqFsLZiZuNKNsIg11tfCNSLzFeeED7xq7Nwiq+PHoIV2kEbbIlZ9xn0c4AlVwHDXs+KPK/6sbePG4dBk8Eyab+g287h7uBe1q/oOLY0XeHJfVez+PMAf8iJgbTql2appNfxxwVeC0RXaiEfpd15VLYqXixuQk9UsalkU2+12ocavCxfWxZQaizf3fy7ffli+4JQkgecks/9tcXubz7yL1Cl7BLN8HjuLHivdaKxFHrpzBYbDeP8/y2+6k4TPVHijtGV6Y5vDdDEeYXMLEsrTVbKnV57stlHplYTWReLUYXhSET8GkxIf5wXCg1DryKN+uJTfbHNaL18l+i/uDhGbvHYAeKzmu/STYFfvpxV5LY76+ir2dKjs7hh75rTP5lX6S/inev8CheMCiVfAfu/x/yyl/wDSkIvX","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Finish launch for specified project","permalink":"/docs/api/service-api/versions/5.11/finish-launch-using-put-1"},"next":{"title":"Force finish launch for specified project","permalink":"/docs/api/service-api/versions/5.11/force-finish-launch-using-put"}}');var a=t(74848),n=t(28453),r=t(57742),p=t.n(r),l=t(78178),o=t.n(l),c=t(19624),u=t.n(c),d=t(96226),f=t.n(d),h=(t(77675),t(19365),t(51107));const x={id:"get-launch-report-using-get",title:"Export specified launch",description:"Only following formats are supported: pdf (by default), xls, html.",sidebar_label:"Export specified launch",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU2P3DYM/SsCT7uAMt4N0h586qIYNIsGySJpclnMQWvTY6WypEj0zA4M/feClj2f+UCCngzLJN/jexQ9AKl1hPIRjOpt1b6onKXgjMEAKwk1xipoT9pZKOGdNTvROGPcVtu1aFzoFEWhAorYe+8CYV0KXzfi6mknamxUb+haimcTpWipMwuQ4DwGxQXvayhhjfRmBH6PnP8xarv+a/kPSPAqqA4JA7MbwKoOoZxY3tcgQTMlr6iFc55HQQG/9DpgDSWFHiXEqsVOQTkA7TwX1JZwjQEk5Hby0e+vICW5R/XBfcaK3vLb94BP436IHSlouz5B2mjczhBfegy7C4wpQrELy87T7pMyPULZKBO/A8JlRj+YZt2ABLR9x8bnt2cTQQKbBKuUVsw+emcjRq718uaGH2fj8DdI4HlBS1AOKSUG8QErRdz1xKhDat3k9egrtVBCsbkthiO9UpFdK4bZvVSEcSZAQsSwmQehDwZK4FRylTOpLIpB9dS6oGmXCuX1hWR5th5cIGVErgUSNipo9WRyg3O53OUsVEvk40W5hzn2oCEHjvJx/CpJ2DO6lO21iyTYbqFsLZiZuNKNsIg11tfCNSLzFeeED7xq7Nwiq+PHoIV2kEbbIlZ9xn0c4AlVwHDXs+KPK/6sbePG4dBk8Eyab+g287h7uBe1q/oOLY0XeHJfVez+PMAf8iJgbTql2appNfxxwVeC0RXaiEfpd15VLYqXixuQk9UsalkU2+12ocavCxfWxZQaizf3fy7ffli+4JQkgecks/9tcXubz7yL1Cl7BLN8HjuLHivdaKxFHrpzBYbDeP8/y2+6k4TPVHijtGV6Y5vDdDEeYXMLEsrTVbKnV57stlHplYTWReLUYXhSET8GkxIf5wXCg1DryKN+uJTfbHNaL18l+i/uDhGbvHYAeKzmu/STYFfvpxV5LY76+ir2dKjs7hh75rTP5lX6S/inev8CheMCiVfAfu/x/yyl/wDSkIvX",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},g=void 0,v={},m=[];function b(e){const i={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Export specified launch"}),"\n",(0,a.jsx)(p(),{method:"get",path:"/v1/{projectName}/launch/{launchId}/report",context:"endpoint"}),"\n",(0,a.jsx)(i.p,{children:"Only following formats are supported: pdf (by default), xls, html."}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(o(),{parameters:[{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}},{name:"view",in:"query",description:"view",allowEmptyValue:!1,schema:{type:"string",default:"pdf",enum:["pdf","xls","html"]}}]}),"\n",(0,a.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(f(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{}}}})]})}function y(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);