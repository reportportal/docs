"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85297],{93774:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>y,frontMatter:()=>f,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/service-api/versions/5.11/get-attribute-values-using-get-2","title":"Get all unique attribute values of step items under specified project","description":"Get all unique attribute values of step items under specified project","source":"@site/docs/api/service-api/versions/5.11/get-attribute-values-using-get-2.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-attribute-values-using-get-2","permalink":"/docs/api/service-api/versions/5.11/get-attribute-values-using-get-2","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-attribute-values-using-get-2","title":"Get all unique attribute values of step items under specified project","description":"Get all unique attribute values of step items under specified project","sidebar_label":"Get all unique attribute values of step items under specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJytVctu2zAQ/BViT03ASHGAXnSqUQRpkCIN8ujFMApaWltsJZImV04NQf9erCS/k8Z96CKA3N0Zzg6XNZCaBUhGQBjoTBOWZ6k15G1RoIexBOvQK9LWXGeQwAxpSOT1pCL8qooKw1PQZnZ1+fjtAiQ45VWJhJ5L1mBUiZDAVBeEPkoNRWonGSRoAwnMK/RLkJBhSL12jPZGmsd5pT1mkJCvUEJIcywVJDXQ0jFmIK/NDJpG7tPA+abcDS6P4nCY82eA7cKRQH3sMQDO2++Y0u1WdacoPyi+G3e8dmMODs6agIH3L87P+bdb/MsNSGDPoCHePY1P+XdQVXmvWrUJy/ASGn/M3HlMFTG/qSoC7h/mCkmoohCV0fMKxbovYtH6UdipCIROtDiiMhl6ERymeqoxE70UIKFEym3v6da6lEMC8WIQ11t6NTHXiblivIaKOyjuEvrFyu2VLyABTiab2qJJ4rhWFeXWa1o2sXL6oDH36KynO+tJFaKrBRIWyms1KTrNV+U64aeqKggSyIlcOCh3t4qVgKYq+VpzIMg+ftxIWDM67OQnG0iwtYQymWBm4p2eCoOYYXbCwnZ8xT7hDa8MSxv5Nsq1QZG23NoxS5VWHe6ohgkqj35YseajMW9rM7WtKzQVuCfNK7qteAzvrkVm06pEQ+2o6g2p0taQ/WV5qBwnsTal0tyq0K18OOArodApmoBb6UOn0hzFRXQOsm81i5rE8fPzc6Ta3cj6Wdynhvjz9cfL24fLM05pJLBPOvbvo8GgW3M2UKnMFsz/cveOXuu7RviTYlcobRi9PUXdO38EiwFISPZmCmHJNidkF63ZtCZtr8BYQm4DcX5dT1TAJ180DS93c46bnenAdn7lQteb4QHv7vvZdCJ+N/1fPM0PXL7xaLSUIQHgEXo8qVffgLdpHOb8M4f+eTgKu4/dYI43w+XvO7PrkBeJrEa+2TnyiuB2gYZnUo4qQ98y6iKGaYqOtnL5UWH266F9dfkITfMLghcJhg==","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get all unique attribute keys of step items under specified project","permalink":"/docs/api/service-api/versions/5.11/get-attribute-keys-using-get-2"},"next":{"title":"Handle user choice from suggested items","permalink":"/docs/api/service-api/versions/5.11/handle-suggest-choose-using-put"}}');var a=i(74848),r=i(28453),n=i(57742),o=i.n(n),u=i(78178),p=i.n(u),c=i(19624),d=i.n(c),l=i(96226),m=i.n(l),v=(i(77675),i(19365),i(51107));const f={id:"get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",sidebar_label:"Get all unique attribute values of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVctu2zAQ/BViT03ASHGAXnSqUQRpkCIN8ujFMApaWltsJZImV04NQf9erCS/k8Z96CKA3N0Zzg6XNZCaBUhGQBjoTBOWZ6k15G1RoIexBOvQK9LWXGeQwAxpSOT1pCL8qooKw1PQZnZ1+fjtAiQ45VWJhJ5L1mBUiZDAVBeEPkoNRWonGSRoAwnMK/RLkJBhSL12jPZGmsd5pT1mkJCvUEJIcywVJDXQ0jFmIK/NDJpG7tPA+abcDS6P4nCY82eA7cKRQH3sMQDO2++Y0u1WdacoPyi+G3e8dmMODs6agIH3L87P+bdb/MsNSGDPoCHePY1P+XdQVXmvWrUJy/ASGn/M3HlMFTG/qSoC7h/mCkmoohCV0fMKxbovYtH6UdipCIROtDiiMhl6ERymeqoxE70UIKFEym3v6da6lEMC8WIQ11t6NTHXiblivIaKOyjuEvrFyu2VLyABTiab2qJJ4rhWFeXWa1o2sXL6oDH36KynO+tJFaKrBRIWyms1KTrNV+U64aeqKggSyIlcOCh3t4qVgKYq+VpzIMg+ftxIWDM67OQnG0iwtYQymWBm4p2eCoOYYXbCwnZ8xT7hDa8MSxv5Nsq1QZG23NoxS5VWHe6ohgkqj35YseajMW9rM7WtKzQVuCfNK7qteAzvrkVm06pEQ+2o6g2p0taQ/WV5qBwnsTal0tyq0K18OOArodApmoBb6UOn0hzFRXQOsm81i5rE8fPzc6Ta3cj6Wdynhvjz9cfL24fLM05pJLBPOvbvo8GgW3M2UKnMFsz/cveOXuu7RviTYlcobRi9PUXdO38EiwFISPZmCmHJNidkF63ZtCZtr8BYQm4DcX5dT1TAJ180DS93c46bnenAdn7lQteb4QHv7vvZdCJ+N/1fPM0PXL7xaLSUIQHgEXo8qVffgLdpHOb8M4f+eTgKu4/dYI43w+XvO7PrkBeJrEa+2TnyiuB2gYZnUo4qQ98y6iKGaYqOtnL5UWH266F9dfkITfMLghcJhg==",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},g=void 0,b={},h=[];function q(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Get all unique attribute values of step items under specified project"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/v1/{projectName}/item/step/attribute/values",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Get all unique attribute values of step items under specified project"}),"\n",(0,a.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(p(),{parameters:[{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}},{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}},{name:"filter.eq.name",in:"query",description:"filter.eq.name",schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(d(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function y(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}}}]);