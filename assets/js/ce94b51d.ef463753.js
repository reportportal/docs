"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60076],{72187:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>A,frontMatter:()=>y,metadata:()=>s,toc:()=>j});const s=JSON.parse('{"id":"api/service-api/versions/5.10/delete-test-item-using-delete","title":"Delete test item","description":"Delete test item","source":"@site/docs/api/service-api/versions/5.10/delete-test-item-using-delete.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/delete-test-item-using-delete","permalink":"/docs/api/service-api/versions/5.10/delete-test-item-using-delete","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"delete-test-item-using-delete","title":"Delete test item","description":"Delete test item","sidebar_label":"Delete test item","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v4jAQ/SvRnNrKJVDt7iGnRS3Soq3aqrQnxMEkA/GuY7v2hC6K8t9XkwQIpd2VyiWJ/fzm4z0PFZBcB0jmQBjoUhEWl6k15K3W6GEhwDr0kpQ10wwSyFAj4RMGmhIWz0GZ9c3kdvI0AQFOelkgoWe+CowsEBJgymkGApSBBJykHARkGFKvHNP2IR5fSuUxg4R8iQJCmmMhIamAtq4hM4Rr9CBgZX0hqV369gXqWuwjOm9/YUp3/PWvsMe4/8YO5JVZQ10vGBycNQED718Nh/w4Jr//CQK4k2iIdy/iC370WBVppr3f9ffaFk4jvz3OQOyi2iXnyN31rASpNmaBIcg1vpde8+NancdUEle0kjrg2/JvGikj1j1iBUBAgZTbg8yNppRDAvFmFFe9ftUxn4irVrkaBAT0m53ypdeQAOPJplbXSRxXsqTcekXbOpZOnWjxiM56erCepI5aLhCwkV7JpW5L3tG1vV7JUrP8OZELJ3QPO6wANGXB/mYgiA6/qAXsMzoV74cNFLGbImmyiDOLztQqMogZZueRXUVtvtHbhA95ZVjYgW9QrgENlGVxFtyqtGzjzitYovToxyW3eb7ob8/YKm3pfdBe8K6gxlH83YL4JoAyK9v3WL+7H7R+V8r4YRplNi0LNNTYsrOxTBsbd1dsVjo+xO0tpGK1Q7vy/aRkAVqlaAL2jo+dTHOMrgZDEJ1buJokjl9fXwey2R1Yv467oyG+nV5P7maTSz5SC2Crtdl/HYyGgxGvORuokKYX5h2HH5W+byXhH4qdlsowUZNQ1Vl/DpsRCEjeDJWWLekm10JAbgMxuqqWMuCz13XNyy8lehZ6cTBzI3umAr9/cDerw+SAs8duMJ1H+zn5btrdojTb5ubokr9AwG/cHmYsj8lPxT6u/xMJ9Alqvn85ygx9040WMU5TdNQ7yzOTb8R+LHV/NXX9F5yyTFw=","sidebar_class_name":"delete api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Find test item by ID","permalink":"/docs/api/service-api/versions/5.10/get-test-item-using-get"},"next":{"title":"Update test item","permalink":"/docs/api/service-api/versions/5.10/update-test-item-using-put"}}');var r=i(74848),n=i(28453),a=i(57742),o=i.n(a),p=i(78178),d=i.n(p),l=i(19624),m=i.n(l),c=i(96226),u=i.n(c),v=(i(77675),i(19365),i(51107));const y={id:"delete-test-item-using-delete",title:"Delete test item",description:"Delete test item",sidebar_label:"Delete test item",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v4jAQ/SvRnNrKJVDt7iGnRS3Soq3aqrQnxMEkA/GuY7v2hC6K8t9XkwQIpd2VyiWJ/fzm4z0PFZBcB0jmQBjoUhEWl6k15K3W6GEhwDr0kpQ10wwSyFAj4RMGmhIWz0GZ9c3kdvI0AQFOelkgoWe+CowsEBJgymkGApSBBJykHARkGFKvHNP2IR5fSuUxg4R8iQJCmmMhIamAtq4hM4Rr9CBgZX0hqV369gXqWuwjOm9/YUp3/PWvsMe4/8YO5JVZQ10vGBycNQED718Nh/w4Jr//CQK4k2iIdy/iC370WBVppr3f9ffaFk4jvz3OQOyi2iXnyN31rASpNmaBIcg1vpde8+NancdUEle0kjrg2/JvGikj1j1iBUBAgZTbg8yNppRDAvFmFFe9ftUxn4irVrkaBAT0m53ypdeQAOPJplbXSRxXsqTcekXbOpZOnWjxiM56erCepI5aLhCwkV7JpW5L3tG1vV7JUrP8OZELJ3QPO6wANGXB/mYgiA6/qAXsMzoV74cNFLGbImmyiDOLztQqMogZZueRXUVtvtHbhA95ZVjYgW9QrgENlGVxFtyqtGzjzitYovToxyW3eb7ob8/YKm3pfdBe8K6gxlH83YL4JoAyK9v3WL+7H7R+V8r4YRplNi0LNNTYsrOxTBsbd1dsVjo+xO0tpGK1Q7vy/aRkAVqlaAL2jo+dTHOMrgZDEJ1buJokjl9fXwey2R1Yv467oyG+nV5P7maTSz5SC2Crtdl/HYyGgxGvORuokKYX5h2HH5W+byXhH4qdlsowUZNQ1Vl/DpsRCEjeDJWWLekm10JAbgMxuqqWMuCz13XNyy8lehZ6cTBzI3umAr9/cDerw+SAs8duMJ1H+zn5btrdojTb5ubokr9AwG/cHmYsj8lPxT6u/xMJ9Alqvn85ygx9040WMU5TdNQ7yzOTb8R+LHV/NXX9F5yyTFw=",sidebar_class_name:"delete api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},g=void 0,h={},j=[];function k(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Delete test item"}),"\n",(0,r.jsx)(o(),{method:"delete",path:"/v1/{projectName}/item/{itemId}",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Delete test item"}),"\n",(0,r.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{name:"itemId",in:"path",description:"itemId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(m(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function A(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}}}]);