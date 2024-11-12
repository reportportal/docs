"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52634],{52640:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>q,contentTitle:()=>m,default:()=>v,frontMatter:()=>y,metadata:()=>s,toc:()=>k});const s=JSON.parse('{"id":"api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get","title":"Get list of fields required for posting ticket","description":"Get list of fields required for posting ticket","source":"@site/docs/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get","permalink":"/docs/api/service-api/versions/5.10/get-set-of-integration-system-fields-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-set-of-integration-system-fields-using-get","title":"Get list of fields required for posting ticket","description":"Get list of fields required for posting ticket","sidebar_label":"Get list of fields required for posting ticket","hide_title":true,"hide_table_of_contents":true,"api":"eJylVk2P0zwQ/ivRnAClzS4CDjlRoQUqEKwovJeqBzeZJGYd29iTXaoo//3VOGmbNl0+xCmS58PPPDPPOC2QKD2ka9g25YycyO6kLmd+5wnrWWY0OaMUOtjEYCw6QdLoZQ4plEgrpM/FUhOW/fkqRL2VqHL/zUtdvrv5CjFY4USNhI7vaUGLGiEFeYxb5hCD1JCCFVRBDDn6zEnLtgueDn800mEOKbkGY/BZhbWAtAXa2UNqdBBDYVwtqD969QK6Lj7e732DXzlguPtHg243vXzk9tuLPTmpS+i6DTt7a7RHz/bnV1f8OU39+QPEwBSjJrY+S57xZ5JVOCcYmCSsQzaSpNhwazy9Na5n/ATfGuTJQQz3QjXIXRySmu13zIi747ivJHugORZSY/4fe/s/wbBQyjwMAfC77AEET8+EsQHgp9CbKZ9dF0PBVT7iMFhDny5Z5eU7j4QdjFtjFAp9QPRLDiYoux5qjtZhJogzF0J5PJ+qd0iRkp4iU0QBuY/2WKLCuMgaT1KXEcnsDpnHGqkyg+yCpKiCFJL762RLPmlPJNIlfcqZD74e3f1ee41TkEJrnSGTGdWlSdKKhirjJO26RFg5EcAXtMbRrXEkVNTnCuPkpNiqvq37dMMAiUax5Coi6yfpbve+MaBuah5VdoR48N90MRwQTTXz3niKWMGR0HnEyKInsog0Yo75U6azxxudAz7iyrE2cxe8bHCaS8PN2zBVWdPfu25hi8KhWzTM9HozNq9YoX3pY6fDQAwFBSGHmQpOvH1A6sKM5TNm9xHq96UsbpdRbrKmRk2h08P2EFnYHsNaWzWWg5jeWkjutu9PXk9KjkHJDLXHUfjCiqzC6Pn8CuJhWriaNEkeHh7mIljnxpXJEOqTj8s3N59WNzMOYdGg8z36l/Prq/k1n/E010KPrvnr+T8h5kA04U9KrBIy6DXAbQdtrOH+GmLYEo9gev6EjASyiaEynjiibbfC4zenuo6P+weBRyGXnof9ETW3xyUOT74MZTyNxi/HRbx3uDt7YIaNA8DTtpfYPyA4q/oiiv1y07sxgAO6kxQdq7NCkaMLqHqfRZahpVE0P2RcwWFp8X9A1/0PrnjoXA==","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"bug-tracking-system-controller","permalink":"/docs/api/service-api/versions/5.10/bug-tracking-system-controller"},"next":{"title":"Get list of existed issue types in bts","permalink":"/docs/api/service-api/versions/5.10/get-allowable-issue-types-using-get"}}');var n=t(74848),r=t(28453),o=t(57742),a=t.n(o),d=t(78178),p=t.n(d),l=t(19624),u=t.n(l),f=t(96226),g=t.n(f),c=(t(77675),t(19365),t(51107));const y={id:"get-set-of-integration-system-fields-using-get",title:"Get list of fields required for posting ticket",description:"Get list of fields required for posting ticket",sidebar_label:"Get list of fields required for posting ticket",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk2P0zwQ/ivRnAClzS4CDjlRoQUqEKwovJeqBzeZJGYd29iTXaoo//3VOGmbNl0+xCmS58PPPDPPOC2QKD2ka9g25YycyO6kLmd+5wnrWWY0OaMUOtjEYCw6QdLoZQ4plEgrpM/FUhOW/fkqRL2VqHL/zUtdvrv5CjFY4USNhI7vaUGLGiEFeYxb5hCD1JCCFVRBDDn6zEnLtgueDn800mEOKbkGY/BZhbWAtAXa2UNqdBBDYVwtqD969QK6Lj7e732DXzlguPtHg243vXzk9tuLPTmpS+i6DTt7a7RHz/bnV1f8OU39+QPEwBSjJrY+S57xZ5JVOCcYmCSsQzaSpNhwazy9Na5n/ATfGuTJQQz3QjXIXRySmu13zIi747ivJHugORZSY/4fe/s/wbBQyjwMAfC77AEET8+EsQHgp9CbKZ9dF0PBVT7iMFhDny5Z5eU7j4QdjFtjFAp9QPRLDiYoux5qjtZhJogzF0J5PJ+qd0iRkp4iU0QBuY/2WKLCuMgaT1KXEcnsDpnHGqkyg+yCpKiCFJL762RLPmlPJNIlfcqZD74e3f1ee41TkEJrnSGTGdWlSdKKhirjJO26RFg5EcAXtMbRrXEkVNTnCuPkpNiqvq37dMMAiUax5Coi6yfpbve+MaBuah5VdoR48N90MRwQTTXz3niKWMGR0HnEyKInsog0Yo75U6azxxudAz7iyrE2cxe8bHCaS8PN2zBVWdPfu25hi8KhWzTM9HozNq9YoX3pY6fDQAwFBSGHmQpOvH1A6sKM5TNm9xHq96UsbpdRbrKmRk2h08P2EFnYHsNaWzWWg5jeWkjutu9PXk9KjkHJDLXHUfjCiqzC6Pn8CuJhWriaNEkeHh7mIljnxpXJEOqTj8s3N59WNzMOYdGg8z36l/Prq/k1n/E010KPrvnr+T8h5kA04U9KrBIy6DXAbQdtrOH+GmLYEo9gev6EjASyiaEynjiibbfC4zenuo6P+weBRyGXnof9ETW3xyUOT74MZTyNxi/HRbx3uDt7YIaNA8DTtpfYPyA4q/oiiv1y07sxgAO6kxQdq7NCkaMLqHqfRZahpVE0P2RcwWFp8X9A1/0PrnjoXA==",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},m=void 0,q={},k=[];function h(e){const i={p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.default,{as:"h1",className:"openapi__heading",children:"Get list of fields required for posting ticket"}),"\n",(0,n.jsx)(a(),{method:"get",path:"/v1/bts/{integrationId}/fields-set",context:"endpoint"}),"\n",(0,n.jsx)(i.p,{children:"Get list of fields required for posting ticket"}),"\n",(0,n.jsx)(c.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(p(),{parameters:[{name:"integrationId",in:"path",description:"integrationId",required:!0,schema:{type:"integer",format:"int64"}},{name:"issueType",in:"query",description:"issueType",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"PostFormField",required:["id","required","value"],type:"object",properties:{definedValues:{type:"array",items:{title:"AllowedValue",type:"object",properties:{valueId:{type:"string"},valueName:{type:"string"}}}},fieldName:{type:"string"},fieldType:{type:"string"},id:{type:"string"},required:{type:"boolean"},value:{type:"array",items:{type:"string"}}}}}}}}}})]})}function v(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);