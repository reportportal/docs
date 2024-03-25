"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22671],{14303:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>w,contentTitle:()=>v,default:()=>k,frontMatter:()=>N,metadata:()=>b,toc:()=>_});var a=i(85893),n=i(11151),r=i(58219),l=i.n(r),t=(i(62316),i(51039)),c=i.n(t),m=(i(82723),i(9487)),d=i.n(m),p=i(41429),o=i.n(p),h=i(5397),u=i.n(h),j=i(4667),x=i.n(j),f=i(9472),g=i.n(f),y=(i(1176),i(12005),i(85162));const N={id:"bulk-force-finish-using-put",title:"Force finish launch",description:"Force finish launch",sidebar_label:"Force finish launch",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsFu2zgQ/RVhTm1BW0mBvei0btbBGg0c13awh9QHWhrbbCRSIUdJDEFftJ+wt37ZYijJlmy30YkihzNvZt48qQSSWwfRI6Sy0PFuEBtN1qQpWlgJMDlaScroSQIRrIv06dbYGG+VVm734JTezh6WICCXVmZIaNlVCVpmCBHk1vzAmKb8JkBp3pK0AwEJutiqnD2f2Vl8LpTFBCKyBQpw8Q4zCVEJtM/ZrSOr9BaqalUbo6MvJtmzRd+vfQYBnBBq4lOZ56mKfT7hD8cmZde7opTdfynSp/m3n/+mRm9Fnen4DeOCr82//fyvB/ERUJMihY7L1QA0a06Hy2K5gP40Ko+Wx1QOljJJFAeQ6ax3pwV1huMMRbJUGb4PQhJZtS6oB0NaK/fcIsKsF3ZCmI0ON3zU37t/wv2FTglwe0eYdY7WxqQoNQjAN5nlHG0jU4eVgBeZFnip31V1wpwLgdpCnJ0J2BibSYIIEkk4ILZiZCSpcJfsURcZ13Y2WizGf4GA29Hkzi8Wy/vZrF59nTSryXQ5ns8fZkv/djOa3ozv7pqT23sQ8M9oPoVV1TynPPcbLjfa1YX8fHV1Tuj7r31Cfwo/nXD4nX7et/N8Y7jmnkqLd5uaoXNy+4uWtG3JLcaSOB3fRwFvg9gkuEU9aIZ0sDbJftBog5/NfnZeWoKNZ3pQy5GnB6F2yuhaWjzBfuv7QCCOwRqRIe0M61de+NxYgiIIX67DsqM8VViHDB2ZHAQ4tC+tnhU2hQjYmkxs0ioKw1IWtDNW0b4KZa7OkpljbizNjCWZBrUvj8wquU7rsrbu6j5vZJEyOXdEuTtzN2ttj7RkQxCN/aoScEB0Tpy/jaOAqxNInQSMLPigNoFGTDD5GJhNUOMNTgEfcSWYmaH1Vrk3GirDBFhxqeKijvtYwhqlRTsquMiPKz5mqZ0fdXrczntPEZlESm9Ml63dGv6iwC3g0WwSJCYuMtTkCd4Mioz9oDSkWxQ5X+IiZlJxT1298+dZYgJSFaN22Lk+ymW8w+Dz8ApEwwmufhSGr6+vQ+lPh8Zuw+aqC+8mN+PpYjzgK6xsaF2N/o/h9XW9lxtHmdSdMJfn4LLwEb5RmKdSafblMZUNwx/h5RoERP2v68Gfp/lKwM44YuOyXEuHDzatKt5+LtByQ1dH0vr2Jsrx+jjmJ7gO6gQf5o3AfQz6EC5Cb5VL7zsDDKKZ966Dirm+Q5mg7SjCTR13sGQ/Rw9nn/xKtDdGcYw5dWxZTXt6Uf/brJt/i8wkXlTkK3975StE8B2+M0bjs/cz7fdLSKXeFl4yoY7Kz/+njTzw",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,b={id:"api/service-api/bulk-force-finish-using-put",title:"Force finish launch",description:"Force finish launch",source:"@site/docs/api/service-api/bulk-force-finish-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/bulk-force-finish-using-put",permalink:"/docs/api/service-api/bulk-force-finish-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"bulk-force-finish-using-put",title:"Force finish launch",description:"Force finish launch",sidebar_label:"Force finish launch",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsFu2zgQ/RVhTm1BW0mBvei0btbBGg0c13awh9QHWhrbbCRSIUdJDEFftJ+wt37ZYijJlmy30YkihzNvZt48qQSSWwfRI6Sy0PFuEBtN1qQpWlgJMDlaScroSQIRrIv06dbYGG+VVm734JTezh6WICCXVmZIaNlVCVpmCBHk1vzAmKb8JkBp3pK0AwEJutiqnD2f2Vl8LpTFBCKyBQpw8Q4zCVEJtM/ZrSOr9BaqalUbo6MvJtmzRd+vfQYBnBBq4lOZ56mKfT7hD8cmZde7opTdfynSp/m3n/+mRm9Fnen4DeOCr82//fyvB/ERUJMihY7L1QA0a06Hy2K5gP40Ko+Wx1QOljJJFAeQ6ax3pwV1huMMRbJUGb4PQhJZtS6oB0NaK/fcIsKsF3ZCmI0ON3zU37t/wv2FTglwe0eYdY7WxqQoNQjAN5nlHG0jU4eVgBeZFnip31V1wpwLgdpCnJ0J2BibSYIIEkk4ILZiZCSpcJfsURcZ13Y2WizGf4GA29Hkzi8Wy/vZrF59nTSryXQ5ns8fZkv/djOa3ozv7pqT23sQ8M9oPoVV1TynPPcbLjfa1YX8fHV1Tuj7r31Cfwo/nXD4nX7et/N8Y7jmnkqLd5uaoXNy+4uWtG3JLcaSOB3fRwFvg9gkuEU9aIZ0sDbJftBog5/NfnZeWoKNZ3pQy5GnB6F2yuhaWjzBfuv7QCCOwRqRIe0M61de+NxYgiIIX67DsqM8VViHDB2ZHAQ4tC+tnhU2hQjYmkxs0ioKw1IWtDNW0b4KZa7OkpljbizNjCWZBrUvj8wquU7rsrbu6j5vZJEyOXdEuTtzN2ttj7RkQxCN/aoScEB0Tpy/jaOAqxNInQSMLPigNoFGTDD5GJhNUOMNTgEfcSWYmaH1Vrk3GirDBFhxqeKijvtYwhqlRTsquMiPKz5mqZ0fdXrczntPEZlESm9Ml63dGv6iwC3g0WwSJCYuMtTkCd4Mioz9oDSkWxQ5X+IiZlJxT1298+dZYgJSFaN22Lk+ymW8w+Dz8ApEwwmufhSGr6+vQ+lPh8Zuw+aqC+8mN+PpYjzgK6xsaF2N/o/h9XW9lxtHmdSdMJfn4LLwEb5RmKdSafblMZUNwx/h5RoERP2v68Gfp/lKwM44YuOyXEuHDzatKt5+LtByQ1dH0vr2Jsrx+jjmJ7gO6gQf5o3AfQz6EC5Cb5VL7zsDDKKZ966Dirm+Q5mg7SjCTR13sGQ/Rw9nn/xKtDdGcYw5dWxZTXt6Uf/brJt/i8wkXlTkK3975StE8B2+M0bjs/cz7fdLSKXeFl4yoY7Kz/+njTzw",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"getStatuses",permalink:"/docs/api/service-api/get-statuses-using-get"},next:{title:"Updates launches for specified project",permalink:"/docs/api/service-api/update-launches-using-put"}},w={},_=[{value:"Request",id:"request",level:2}];function S(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(s.p,{children:"Force finish launch"})}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v1/{projectName}/launch/stop"}),"\n",(0,a.jsx)(s.p,{children:"Force finish launch"}),"\n",(0,a.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)(d(),{className:"openapi-tabs__mime",children:(0,a.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(s.p,{children:"rq"})})}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"entities"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object"})}),(0,a.jsx)("span",{className:"openapi-schema__divider"}),(0,a.jsx)("span",{className:"openapi-schema__required",children:(0,a.jsx)(s.p,{children:"required"})})]})}),(0,a.jsx)("div",{style:{marginLeft:"1rem"},children:(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"property name*"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"FinishExecutionRQ"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(s.p,{children:"attributes"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(s.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,a.jsx)(x(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"endTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,a.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSED`, `FAILED`, `STOPPED`, `SKIPPED`, `INTERRUPTED`, `CANCELLED`, `INFO`, `WARN`]",schema:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}})]})]})})})]})})})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(y.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(s.p,{children:"]"})})})]})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'[\n  {\n    "message": "string"\n  }\n]',language:"json"})})]})})})})]})})})})]})}function k(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}}}]);