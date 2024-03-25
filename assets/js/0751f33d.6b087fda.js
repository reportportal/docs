"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92560],{55728:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>x,metadata:()=>b,toc:()=>q});var a=s(85893),i=s(11151),r=s(58219),n=s.n(r),l=(s(62316),s(51039)),d=s.n(l),p=(s(82723),s(9487)),o=s.n(p),u=s(41429),c=s.n(u),m=s(5397),h=s.n(m),j=(s(4667),s(9472)),f=s.n(j),g=(s(1176),s(12005),s(85162));const x={id:"get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",sidebar_label:"Get all unique attribute values of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zAM/RWBT2uh2m2BvfhpwVB0RYeu6GUvRTCoNhNrsyVVotMFhv99oOzc2zW75MWIRPIckodUC6SmAbIHIAx0pAnro9wa8raq0MNYgnXoFWlrLgrIYIo0IvL6sSH8qqoGw33QZnp+dvftFCQ45VWNhJ5DtmBUjZDBRFeEPskNJWrDGSRoAxk8NejnIKHAkHvtGO0NN49PjfZYQEa+QQkhL7FWkLVAc8eYgbw2U+g6uU0Dn1bhLnG+F4ddnz8DjAd7Ag22+wA4b79jTldr0Z2icif4pt3+tRuzcXDWBAx8f3p8zJ/N4F8uQQJrBg3x7WF6yJ+dqMp7FatNWIeX0PjHzJ3HXBHzm6gq4HYy50hCVZVojH5qUCz7ImZRj8JORCB0IuKIxhToRXCY64nGQgylAAk1UmkHTUfpUgkZpLOTtF2rV5dynJQjpkuotIfiLqGfLdTe+AoyYGeyua26LE1b1VBpvaZ5lyqndxpzg856uraeVCX6WCBhprxWj1Vf80W4vvAT1VQEGZRELuyEu17YSkDT1DzWbAhysB93EpaMdjv5yQYSLC2hTCGYmXinJ8IgFlgccGF7vmKb8IpXgbVNfLRy0SjRlls75lLlTY/70MIjKo9+1HDNH8br17esmz71daOlXIaEorz4f2/EYwHaTGy01FThVnVfKf0ildH1hShs3tRoKG67QdMqj5oe5u22cezE5a2V5m6H/uTDTsoSKp2jCbjmPnIqL1GcJscgB7VwNlmaPj8/JyreJtZP08E1pJ8vPp5d3Z4dsUsngaXWs3+fnBwnJ3zmbKBamTWY/zUgG/Va1p/wJ6WuUtowesyiHYbnAWYnICHbWkuENTeMkPu2ZBN1HqdoLKG0gdi/bR9VwHtfdR0f96uS9VLowBPxyk5oV/sH3t0M6+1A/O4BeTGbHzh/492JlCED4C28P6lXn5G3aez6/DOH4YXZC3uwXWGOV/vp7zuzqZAXiSxeDbOR8oLgeoCO11qJqkAfGfUWozxHR2u+/C4x++XePz+7g677BXEoIPk=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},v=void 0,b={id:"api/service-api/5.10/get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",source:"@site/docs/api/service-api/5.10/get-attribute-values-using-get-2.api.mdx",sourceDirName:"api/service-api/5.10",slug:"/api/service-api/5.10/get-attribute-values-using-get-2",permalink:"/docs/api/service-api/5.10/get-attribute-values-using-get-2",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-attribute-values-using-get-2",title:"Get all unique attribute values of step items under specified project",description:"Get all unique attribute values of step items under specified project",sidebar_label:"Get all unique attribute values of step items under specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zAM/RWBT2uh2m2BvfhpwVB0RYeu6GUvRTCoNhNrsyVVotMFhv99oOzc2zW75MWIRPIckodUC6SmAbIHIAx0pAnro9wa8raq0MNYgnXoFWlrLgrIYIo0IvL6sSH8qqoGw33QZnp+dvftFCQ45VWNhJ5DtmBUjZDBRFeEPskNJWrDGSRoAxk8NejnIKHAkHvtGO0NN49PjfZYQEa+QQkhL7FWkLVAc8eYgbw2U+g6uU0Dn1bhLnG+F4ddnz8DjAd7Ag22+wA4b79jTldr0Z2icif4pt3+tRuzcXDWBAx8f3p8zJ/N4F8uQQJrBg3x7WF6yJ+dqMp7FatNWIeX0PjHzJ3HXBHzm6gq4HYy50hCVZVojH5qUCz7ImZRj8JORCB0IuKIxhToRXCY64nGQgylAAk1UmkHTUfpUgkZpLOTtF2rV5dynJQjpkuotIfiLqGfLdTe+AoyYGeyua26LE1b1VBpvaZ5lyqndxpzg856uraeVCX6WCBhprxWj1Vf80W4vvAT1VQEGZRELuyEu17YSkDT1DzWbAhysB93EpaMdjv5yQYSLC2hTCGYmXinJ8IgFlgccGF7vmKb8IpXgbVNfLRy0SjRlls75lLlTY/70MIjKo9+1HDNH8br17esmz71daOlXIaEorz4f2/EYwHaTGy01FThVnVfKf0ildH1hShs3tRoKG67QdMqj5oe5u22cezE5a2V5m6H/uTDTsoSKp2jCbjmPnIqL1GcJscgB7VwNlmaPj8/JyreJtZP08E1pJ8vPp5d3Z4dsUsngaXWs3+fnBwnJ3zmbKBamTWY/zUgG/Va1p/wJ6WuUtowesyiHYbnAWYnICHbWkuENTeMkPu2ZBN1HqdoLKG0gdi/bR9VwHtfdR0f96uS9VLowBPxyk5oV/sH3t0M6+1A/O4BeTGbHzh/492JlCED4C28P6lXn5G3aez6/DOH4YXZC3uwXWGOV/vp7zuzqZAXiSxeDbOR8oLgeoCO11qJqkAfGfUWozxHR2u+/C4x++XePz+7g677BXEoIPk=",sidebar_class_name:"get api-method",info_path:"api/service-api/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Get all unique attribute keys of step items under specified project",permalink:"/docs/api/service-api/5.10/get-attribute-keys-using-get-2"},next:{title:"Handle user choice from suggested items",permalink:"/docs/api/service-api/5.10/handle-suggest-choose-using-put"}},y={},q=[{value:"Request",id:"request",level:2}];function G(e){const t={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(t.p,{children:"Get all unique attribute values of step items under specified project"})}),"\n",(0,a.jsx)(d(),{method:"get",path:"/v1/{projectName}/item/step/attribute/values"}),"\n",(0,a.jsx)(t.p,{children:"Get all unique attribute values of step items under specified project"}),"\n",(0,a.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(c(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(t.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(c(),{className:"paramsItem",param:{name:"filter.cnt.attributeValue",in:"query",description:"filter.cnt.attributeValue",required:!0,schema:{type:"string"}}}),(0,a.jsx)(c(),{className:"paramsItem",param:{name:"filter.eq.attributeKey",in:"query",description:"filter.eq.attributeKey",schema:{type:"string"}}}),(0,a.jsx)(c(),{className:"paramsItem",param:{name:"filter.eq.name",in:"query",description:"filter.eq.name",schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(g.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(t.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(t.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(t.p,{children:"Array ["})})}),(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,a.jsx)(t.p,{children:"string"})}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(t.p,{children:"]"})})})]})]})}),(0,a.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(h(),{responseExample:'[\n  "string"\n]',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(G,{...e})}):G(e)}}}]);