"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[72971],{39126:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>_,contentTitle:()=>y,default:()=>X,frontMatter:()=>N,metadata:()=>b,toc:()=>q});var a=i(85893),r=i(11151),n=i(58219),t=i.n(n),l=(i(62316),i(51039)),c=i.n(l),d=(i(82723),i(9487)),o=i.n(d),p=i(41429),m=i.n(p),h=i(5397),f=i.n(h),j=i(4667),u=i.n(j),x=i(9472),g=i.n(x),v=(i(1176),i(12005),i(85162));const N={id:"get-user-filters-using-get",title:"Get list of specified user filters",description:"Get list of specified user filters",sidebar_label:"Get list of specified user filters",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v0zAQ/leiewLkNRsCHvJENQ2YQDAN9lT1wU2ujcGxjX3ZqKL87+jipE3bTGw8tT3fj8/f3X1uAyQ3AbIF1AH92VppQn+WW0Peao0elgKsQy9JWXNdQAYbpLuA/kPnGe6CMpuPVz9AgJNeVshGyBYNGFkhZKCKAAKUgQx+1+i3IKDAkHvlOOPOwePvWnksICNfo4BAW83ha+srEIB/nLYF7k7zEisJWQO0dewmvZecWhFWYWRXhnCDHkSXSFI0vXsDbduKHUbn7U/M6Sv/6rE6SeUJ1EO/E8jHoAJ5ZTbQtkt2Ds6agB241+fn/HGY/NtnEMDEoyE+fZW+4o8nXFVRR9W+K7cYbO3zQ5ALTl4ortZ1pAAR7y/A+oK7JsA+mI6srtRSDCXtiq/NLfY8C6TiNUb5ngXvcoh7DB+3q/NUZvNBoWao91LXz8E00YeTrFMusc5EE9v2aBwmglXxpNnriZ/K0LfiCXx+Y88jBlWYhxwEBOtJmc2l1XVl/k1aDNvXXFmrURrGc5jpEVri2ExdJxqmogZCncdcEsNfSx3weOU+IiVaBUrsOgkOc7VWWCSsVUlsJo9thVTaXps6IaISMkjvL9JmtLJtGiPSfWBAfz/oVe01ZMABZHOr2yxNG1lTab2ibZtKp0704Bad9XRjPUmdxFzdpHolVzpSO6SL+76WteY5KIlcOEl3M/gKQFNX3FB2BNH7L1sBO0SnAvLJBkp4sBJpioSRJS/UOjGIBRYvmcCINzkGvMdVYGVnvvNyndNMWe7WkqnK61h30cAKpUc/r5nnxZKPlVnb8XSOqXmEtwHH/OY6KWxeV2hI9uvPOijzTgd7jf5eOw5ibiqpuFUhWt6f4BWgVY4m4Ch87mReYvJ6dg6ibzWTmqXpw8PDTHanM+s3aR8a0i/Xl1dfv1+dcQjrAvoQ0b+dXVxEm7OBKmlGZZ40rtMqQviHUqel6vaug9j0o7yA+wsQkB2+PzHh7kvgPS9tIPZvmpUMeOd127I5vrzcuUIFns1H1q3ZP0Dw4rYXlpdJfKIncf7C7e4N76UTgAdi2IL/r3p428nqg0aa7bj8gGqcoOXlKVGyZjKi6DHPc3Q0iuVHl9HvFIX/2rTtX/d9JD4=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},y=void 0,b={id:"api/service-api/get-user-filters-using-get",title:"Get list of specified user filters",description:"Get list of specified user filters",source:"@site/docs/api/service-api/get-user-filters-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-user-filters-using-get",permalink:"/docs/api/service-api/get-user-filters-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user-filters-using-get",title:"Get list of specified user filters",description:"Get list of specified user filters",sidebar_label:"Get list of specified user filters",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt9v0zAQ/leiewLkNRsCHvJENQ2YQDAN9lT1wU2ujcGxjX3ZqKL87+jipE3bTGw8tT3fj8/f3X1uAyQ3AbIF1AH92VppQn+WW0Peao0elgKsQy9JWXNdQAYbpLuA/kPnGe6CMpuPVz9AgJNeVshGyBYNGFkhZKCKAAKUgQx+1+i3IKDAkHvlOOPOwePvWnksICNfo4BAW83ha+srEIB/nLYF7k7zEisJWQO0dewmvZecWhFWYWRXhnCDHkSXSFI0vXsDbduKHUbn7U/M6Sv/6rE6SeUJ1EO/E8jHoAJ5ZTbQtkt2Ds6agB241+fn/HGY/NtnEMDEoyE+fZW+4o8nXFVRR9W+K7cYbO3zQ5ALTl4ortZ1pAAR7y/A+oK7JsA+mI6srtRSDCXtiq/NLfY8C6TiNUb5ngXvcoh7DB+3q/NUZvNBoWao91LXz8E00YeTrFMusc5EE9v2aBwmglXxpNnriZ/K0LfiCXx+Y88jBlWYhxwEBOtJmc2l1XVl/k1aDNvXXFmrURrGc5jpEVri2ExdJxqmogZCncdcEsNfSx3weOU+IiVaBUrsOgkOc7VWWCSsVUlsJo9thVTaXps6IaISMkjvL9JmtLJtGiPSfWBAfz/oVe01ZMABZHOr2yxNG1lTab2ibZtKp0704Bad9XRjPUmdxFzdpHolVzpSO6SL+76WteY5KIlcOEl3M/gKQFNX3FB2BNH7L1sBO0SnAvLJBkp4sBJpioSRJS/UOjGIBRYvmcCINzkGvMdVYGVnvvNyndNMWe7WkqnK61h30cAKpUc/r5nnxZKPlVnb8XSOqXmEtwHH/OY6KWxeV2hI9uvPOijzTgd7jf5eOw5ibiqpuFUhWt6f4BWgVY4m4Ch87mReYvJ6dg6ibzWTmqXpw8PDTHanM+s3aR8a0i/Xl1dfv1+dcQjrAvoQ0b+dXVxEm7OBKmlGZZ40rtMqQviHUqel6vaug9j0o7yA+wsQkB2+PzHh7kvgPS9tIPZvmpUMeOd127I5vrzcuUIFns1H1q3ZP0Dw4rYXlpdJfKIncf7C7e4N76UTgAdi2IL/r3p428nqg0aa7bj8gGqcoOXlKVGyZjKi6DHPc3Q0iuVHl9HvFIX/2rTtX/d9JD4=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create user filter",permalink:"/docs/api/service-api/create-filter-using-post"},next:{title:"Get available filter names",permalink:"/docs/api/service-api/get-all-filters-names-using-get"}},_={},q=[{value:"Request",id:"request",level:2}];function A(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Get list of specified user filters"})}),"\n",(0,a.jsx)(c(),{method:"get",path:"/v1/{projectName}/filter/filters"}),"\n",(0,a.jsx)(s.p,{children:"Get list of specified user filters"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Query Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{name:"ids",in:"query",description:"ids",required:!0,style:"form",explode:!0,schema:{type:"array",items:{type:"integer",format:"int64"}}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(t(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"conditions"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(u(),{collapsible:!1,name:"condition",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(u(),{collapsible:!1,name:"filteringField",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(u(),{collapsible:!1,name:"value",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(u(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(u(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,a.jsx)(u(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"orders"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(u(),{collapsible:!1,name:"isAsc",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,a.jsx)(u(),{collapsible:!1,name:"sortingColumn",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(u(),{collapsible:!1,name:"owner",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(u(),{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(f(),{responseExample:'[\n  {\n    "conditions": [\n      {\n        "condition": "string",\n        "filteringField": "string",\n        "value": "string"\n      }\n    ],\n    "description": "string",\n    "id": 0,\n    "name": "string",\n    "orders": [\n      {\n        "isAsc": true,\n        "sortingColumn": "string"\n      }\n    ],\n    "owner": "string",\n    "type": "string"\n  }\n]',language:"json"})})]})})})})]})})})})]})}function X(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}}}]);