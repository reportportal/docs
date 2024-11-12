"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91873],{47208:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>D,frontMatter:()=>h,metadata:()=>s,toc:()=>y});const s=JSON.parse('{"id":"api/service-api/handle-suggest-choose","title":"Handle user choice from suggested items","description":"Handle user choice from suggested items","source":"@site/docs/api/service-api/handle-suggest-choose.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/handle-suggest-choose","permalink":"/docs/api/service-api/handle-suggest-choose","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"handle-suggest-choose","title":"Handle user choice from suggested items","description":"Handle user choice from suggested items","sidebar_label":"Handle user choice from suggested items","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVk1v2zgQ/SvCnFqAsZTux0GnzQYpmt20DeJ09xD4QEtjiV2KVPmR1DD03xdDSrZsuantiylyZvj4OPOGG3C8spA/gUPrLoTD5qLQyhktJRpYMNAtGu6EVrcl5FBzVUqc+6pC665rrS0Cg5Yb3qBDQ5E2oHiDkENr9Fcs3Cf6YiAUTXFXAwOD37wwWELujEcGtqix4ZBvwK1bcrXOCFVB1y2iMVr3py7XZEHoUDka8raVogjg0q9WK5qbhOLG8DXt77Cxo3m9JHAE3tARncCw2oMeGQrlsEIDDFbaNNzFqd9/hY4F0m4dNmea3+mK2DzJR3KvivpM88D5lM7tsm+WaE6MKKz1+BjsjgQ0KPGZq3NYGFzOYUHYj2gqLO90NfJYai2RKzJouCvqeaHNGKaK5xwFXEnNXQRhvXT32gpKn5+i+OUdOaE9Ywe0Z0ZvdInyPXLnDdIF2qOEj63+4dK/ZnarVvroqreByjuh9txfRSfUvNZelh+J6ROdWqMLtBbLR9GcSJu3aK5rLQo8FRi6Wpc/zPhCeuvQnJhpVKTCSTLqRS5w2HVddyhbMYlarWzk8F2W0V+JtjCijfcOn/8GdrZk/UCaGrSWV8dOOUL9eZDra920Emn0MA/4O3aA7UPQ8oQIT4rAeLIyuklsPDiWSdTMgWLSbx9gkYrnkD5fppuRyHcp2ae9expDAgOL5nloDd5IyGETjoxdnqabWlvXpbwVcIjvAVtt3L02jsvk6v42iYGAwTM3gi9lpCXGohEq31Arq51rgYU/Sy2sxBX3km45rHQMaNPpZX3Q1iXUvBKuyoQ2T96IVaIQSyzfJnqVREhJj2mLZ7dBiY2emWDVBqOZCNmzIBoKb4RbBx6WyA2aK09EPi3Gy/NwnHCysdH2zvvDDafujYD1g/dDQv/172NIDMqyh10LvfnOKS8CiG2vy8adLJv0qWzchbL9HjPk4GFryfYax85qv19kk26QHWh9fCCM1T2binc2kuZsX3mzo7q6w3NMTg9Wo4ruJvfFM5tKYzYRvmxf17J91dqFHolVRkkhBgHvq3tcEj+vl1IXvkHlgh70OsTj26Z/os19Sz7AABsuqDRtnPljksMMpChQWRy5X7W8qDF5N8uIllDalJ55mr68vMx4WJ1pU6W9q03vbq9vPs1vLsilY0C6EMH/Nrvs51ptXcPVaJvThWqPkG3JOPzu0lZyEV4KAeemF7EneL4EBvnBW5WSk0Efn5iLF7cYlOMJNpslt/jFyK6j6W8eDVX2YidOocRKYWlcQr7i0uIE4bY1wJuHvru8TYAdRz68aNU6aKD09AUM/sP1wXO7W5DIIS+pFJ82vcV13Owi1OQuwqQndWzwuCoKbN2rtotRe7j/8khC1L/UqXggB8NfqO75SwSrw9mDvoW5DUiuKh8aG8SQ9Psf7KtRrQ==","sidebar_class_name":"put api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Update test item","permalink":"/docs/api/service-api/update-test-item"},"next":{"title":"Unlink external issue for specified test items","permalink":"/docs/api/service-api/unlink-external-issues"}}');var r=i(74848),a=i(28453),n=i(57742),o=i.n(n),p=i(78178),d=i.n(p),c=i(19624),l=i.n(c),u=i(96226),m=i.n(u),g=(i(77675),i(19365),i(51107));const h={id:"handle-suggest-choose",title:"Handle user choice from suggested items",description:"Handle user choice from suggested items",sidebar_label:"Handle user choice from suggested items",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVk1v2zgQ/SvCnFqAsZTux0GnzQYpmt20DeJ09xD4QEtjiV2KVPmR1DD03xdDSrZsuantiylyZvj4OPOGG3C8spA/gUPrLoTD5qLQyhktJRpYMNAtGu6EVrcl5FBzVUqc+6pC665rrS0Cg5Yb3qBDQ5E2oHiDkENr9Fcs3Cf6YiAUTXFXAwOD37wwWELujEcGtqix4ZBvwK1bcrXOCFVB1y2iMVr3py7XZEHoUDka8raVogjg0q9WK5qbhOLG8DXt77Cxo3m9JHAE3tARncCw2oMeGQrlsEIDDFbaNNzFqd9/hY4F0m4dNmea3+mK2DzJR3KvivpM88D5lM7tsm+WaE6MKKz1+BjsjgQ0KPGZq3NYGFzOYUHYj2gqLO90NfJYai2RKzJouCvqeaHNGKaK5xwFXEnNXQRhvXT32gpKn5+i+OUdOaE9Ywe0Z0ZvdInyPXLnDdIF2qOEj63+4dK/ZnarVvroqreByjuh9txfRSfUvNZelh+J6ROdWqMLtBbLR9GcSJu3aK5rLQo8FRi6Wpc/zPhCeuvQnJhpVKTCSTLqRS5w2HVddyhbMYlarWzk8F2W0V+JtjCijfcOn/8GdrZk/UCaGrSWV8dOOUL9eZDra920Emn0MA/4O3aA7UPQ8oQIT4rAeLIyuklsPDiWSdTMgWLSbx9gkYrnkD5fppuRyHcp2ae9expDAgOL5nloDd5IyGETjoxdnqabWlvXpbwVcIjvAVtt3L02jsvk6v42iYGAwTM3gi9lpCXGohEq31Arq51rgYU/Sy2sxBX3km45rHQMaNPpZX3Q1iXUvBKuyoQ2T96IVaIQSyzfJnqVREhJj2mLZ7dBiY2emWDVBqOZCNmzIBoKb4RbBx6WyA2aK09EPi3Gy/NwnHCysdH2zvvDDafujYD1g/dDQv/172NIDMqyh10LvfnOKS8CiG2vy8adLJv0qWzchbL9HjPk4GFryfYax85qv19kk26QHWh9fCCM1T2binc2kuZsX3mzo7q6w3NMTg9Wo4ruJvfFM5tKYzYRvmxf17J91dqFHolVRkkhBgHvq3tcEj+vl1IXvkHlgh70OsTj26Z/os19Sz7AABsuqDRtnPljksMMpChQWRy5X7W8qDF5N8uIllDalJ55mr68vMx4WJ1pU6W9q03vbq9vPs1vLsilY0C6EMH/Nrvs51ptXcPVaJvThWqPkG3JOPzu0lZyEV4KAeemF7EneL4EBvnBW5WSk0Efn5iLF7cYlOMJNpslt/jFyK6j6W8eDVX2YidOocRKYWlcQr7i0uIE4bY1wJuHvru8TYAdRz68aNU6aKD09AUM/sP1wXO7W5DIIS+pFJ82vcV13Owi1OQuwqQndWzwuCoKbN2rtotRe7j/8khC1L/UqXggB8NfqO75SwSrw9mDvoW5DUiuKh8aG8SQ9Psf7KtRrQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,f={},y=[];function q(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Handle user choice from suggested items"}),"\n",(0,r.jsx)(o(),{method:"put",path:"/v1/{projectName}/item/suggest/choice",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Handle user choice from suggested items"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(l(),{title:"Body",body:{content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{project:{type:"integer",format:"int64"},testItem:{type:"integer",format:"int64"},testItemLogId:{type:"integer",format:"int64"},launchId:{type:"integer",format:"int64"},launchName:{type:"string"},launchNumber:{type:"integer",format:"int64"},issueType:{type:"string"},relevantItem:{type:"integer",format:"int64"},relevantLogId:{type:"integer",format:"int64"},isMergedLog:{type:"boolean"},matchScore:{type:"number",format:"float"},resultPosition:{type:"integer",format:"int32"},esScore:{type:"number",format:"float"},esPosition:{type:"integer",format:"int32"},modelFeatureNames:{type:"string"},modelFeatureValues:{type:"string"},modelInfo:{type:"string"},usedLogLines:{type:"integer",format:"int32"},minShouldMatch:{type:"integer",format:"int32"},processedTime:{type:"number",format:"float"},userChoice:{type:"integer",format:"int32"},methodName:{type:"string"},clusterId:{type:"integer",format:"int64"}},title:"SuggestInfo"}}}},required:!0}}),"\n",(0,r.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function D(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(q,{...e})}):q(e)}}}]);