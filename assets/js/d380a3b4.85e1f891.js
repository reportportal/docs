"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16010],{73308:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>j,frontMatter:()=>f,metadata:()=>n,toc:()=>O});const n=JSON.parse('{"id":"api/service-api/versions/5.11/update-global-integration-using-put","title":"Update global Report Portal integration instance","description":"Update global Report Portal integration instance","source":"@site/docs/api/service-api/versions/5.11/update-global-integration-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/update-global-integration-using-put","permalink":"/docs/api/service-api/versions/5.11/update-global-integration-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-global-integration-using-put","title":"Update global Report Portal integration instance","description":"Update global Report Portal integration instance","sidebar_label":"Update global Report Portal integration instance","hide_title":true,"hide_table_of_contents":true,"api":"eJydVU1v2zgQ/SvCnNqCtpKi3YNOTYNg19jF1us0p8CHsTS22aVIlqTiGIL+ezGkbEt20gLVcTQfb968GbYQcOOheASpA20cBmn0pDQ6OKMUOVgKMJaSfVZBAY2tMNCfyqxQzU4xD17qzfzhKwiw6LCmQI7ztqCxJiiG+WcVCJAaCrAYtiCgIl86afnfC56OvjfSUQVFcA0J8OWWaoSihbC3x9TkQMDauBpDMv3xAbpumcLJh8+m2nPMuFbqZpFcQAB3TjqwI1qrZBlh5N88e7fD0jIorj2gYPEfiAMks/pGJSe0jukLkjxHkcaV4k6O2FfGKEINnRj2PR9Q2P48Z9eJnuKjow9O6g10/J3TFw3eGu0TovdXV5esfPl7TMW7/N3L3X85SOPW1FZRZOH+lyzU5D1uXkPMmCuyjkoMjHqNypOA50lpKtqQnvQDnaxMtZ/06jqf47ifh/g320TRZguyxoVsblxAlQ1Yz6T2AXVJIICeA2kvjU4i/p/2UPwUg4AnVM0lFpZgTWFreHlsE9lg1ReQP13ng+p5OxJ+BwI8uafDGjVOQQGtdSaY0qiuyPMWm7A1ToZ9l6OVF22nRvs+U64I00lWYRzFIV3SwBobxduzDcH6i3Tzg68A0k3NR4MdQfT+y07AEdGlqP4yPmRMVYa6yuII3sh1pokqqt5mZn02mCPgE66KajN10ctGp6k0LJolU1U2qe5jCytCR+6mYZofl/ybF3hxOgR3z8h6Ha1kOi6vLeFxy45aZd+1GW7DkO9XhnFo7mY+yypTNjXpEIv1C4dlXLi+1H1jOYgJr1Hy/H2yfLogQYCSJWlPg/Abi+WWsvfTKxC9fnhSRZ7vdrspxr9T4zZ5H+rzf2a3d//e3004pBPA4kvoP06vr5PNGh9q1IMyv7FdI2qOVyDQc8itQhnPYQTc9svyCE/XMJoOCCjGL8VSwNb4wM5tu0JPD051HZu/N+RYGcuT+qNOKun74fdH5gzX8QTCm0V/Rd9m58/Ti+B7I+r94DCA6O/IOEXHi7MlrMgNbs1tqj35yplOOS5epU4cIm7KkmwY+PLZHp2f9D6v+pewNhV7OdzxI4u7hNDE7uNxiLYWFOpNE+81pIr8/QDcx9+f","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Get global Report Portal integration instance","permalink":"/docs/api/service-api/versions/5.11/get-global-integration-using-get"},"next":{"title":"Delete global integration instance","permalink":"/docs/api/service-api/versions/5.11/delete-global-integration-using-delete"}}');var a=i(74848),o=i(28453),r=i(57742),p=i.n(r),s=i(78178),l=i.n(s),g=i(19624),d=i.n(g),c=i(96226),u=i.n(c),b=(i(77675),i(19365),i(51107));const f={id:"update-global-integration-using-put",title:"Update global Report Portal integration instance",description:"Update global Report Portal integration instance",sidebar_label:"Update global Report Portal integration instance",hide_title:!0,hide_table_of_contents:!0,api:"eJydVU1v2zgQ/SvCnNqCtpKi3YNOTYNg19jF1us0p8CHsTS22aVIlqTiGIL+ezGkbEt20gLVcTQfb968GbYQcOOheASpA20cBmn0pDQ6OKMUOVgKMJaSfVZBAY2tMNCfyqxQzU4xD17qzfzhKwiw6LCmQI7ztqCxJiiG+WcVCJAaCrAYtiCgIl86afnfC56OvjfSUQVFcA0J8OWWaoSihbC3x9TkQMDauBpDMv3xAbpumcLJh8+m2nPMuFbqZpFcQAB3TjqwI1qrZBlh5N88e7fD0jIorj2gYPEfiAMks/pGJSe0jukLkjxHkcaV4k6O2FfGKEINnRj2PR9Q2P48Z9eJnuKjow9O6g10/J3TFw3eGu0TovdXV5esfPl7TMW7/N3L3X85SOPW1FZRZOH+lyzU5D1uXkPMmCuyjkoMjHqNypOA50lpKtqQnvQDnaxMtZ/06jqf47ifh/g320TRZguyxoVsblxAlQ1Yz6T2AXVJIICeA2kvjU4i/p/2UPwUg4AnVM0lFpZgTWFreHlsE9lg1ReQP13ng+p5OxJ+BwI8uafDGjVOQQGtdSaY0qiuyPMWm7A1ToZ9l6OVF22nRvs+U64I00lWYRzFIV3SwBobxduzDcH6i3Tzg68A0k3NR4MdQfT+y07AEdGlqP4yPmRMVYa6yuII3sh1pokqqt5mZn02mCPgE66KajN10ctGp6k0LJolU1U2qe5jCytCR+6mYZofl/ybF3hxOgR3z8h6Ha1kOi6vLeFxy45aZd+1GW7DkO9XhnFo7mY+yypTNjXpEIv1C4dlXLi+1H1jOYgJr1Hy/H2yfLogQYCSJWlPg/Abi+WWsvfTKxC9fnhSRZ7vdrspxr9T4zZ5H+rzf2a3d//e3004pBPA4kvoP06vr5PNGh9q1IMyv7FdI2qOVyDQc8itQhnPYQTc9svyCE/XMJoOCCjGL8VSwNb4wM5tu0JPD051HZu/N+RYGcuT+qNOKun74fdH5gzX8QTCm0V/Rd9m58/Ti+B7I+r94DCA6O/IOEXHi7MlrMgNbs1tqj35yplOOS5epU4cIm7KkmwY+PLZHp2f9D6v+pewNhV7OdzxI4u7hNDE7uNxiLYWFOpNE+81pIr8/QDcx9+f",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},m=void 0,v={},O=[];function h(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Update global Report Portal integration instance"}),"\n",(0,a.jsx)(p(),{method:"put",path:"/v1/integration/{integrationId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Update global Report Portal integration instance"}),"\n",(0,a.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,a.jsx)(d(),{title:"Body",body:{description:"updateRequest",content:{"application/json":{schema:{title:"IntegrationRQ",type:"object",properties:{enabled:{type:"boolean"},integrationParameters:{type:"object",properties:{}},name:{type:"string"}}}}},required:!0}}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);