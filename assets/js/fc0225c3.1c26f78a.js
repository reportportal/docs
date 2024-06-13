"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[57168],{51313:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>G,frontMatter:()=>v,metadata:()=>q,toc:()=>N});var i=a(85893),r=a(11151),n=a(58219),t=a.n(n),l=(a(62316),a(51039)),o=a.n(l),d=(a(82723),a(9487)),m=a.n(d),c=a(41429),p=a.n(c),h=a(5397),u=a.n(h),g=a(4667),j=a.n(g),x=a(9472),f=a.n(x),y=(a(1176),a(12005),a(85162));const v={id:"get-logs-under-using-post",title:"Get logs under items",description:"Get logs under items",sidebar_label:"Get logs under items",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Vk1v2zgQ/SvCnNqCtpJidw86bVoEXWOD1kiak+vDWBxLbClSISk7hqH/vhhKjiXbKXJZnxJqPh/fvOEeAhYesgVoW0xya4KzWpODpQBbk8OgrJlJyKCgcGcL/2gkuUevTDH/9vAdBNTosKJAjqPswWBFkEHt7E/Kw1f+T4AyfIShBAGSfO5UzXHP7Bw9NcqRhCy4hgT4vKQKIdtD2NUc1genTAFtu+yMyYdPVu7YYhxXH0q9fwIB3BeZwGZY11rlsa30p2fb/TCNCprzfBk0GyP0+e2Kq+WuHaMTFHl2U4GqmfSDQtE53HHngarhuTKBCnIgYG1dhaE7+usPaFvBRd/RhvR5wwLINBVfEzln2X2LzkRk1zaCumrYKjjMGcg1BtQgoDG/jN0aWLb8OwU4HvjaGt+18fHq6hzJb/+OAfyQfjjB7AQalFKxL+r5CKRXkekxv7PFPXnbuHxMhQUoya00SjIrf38TK2XQ7T4fyz1E/zT6MI7fd/edI4suWyibamVQ6dkbkg79z7kaI146Hua4QPFTx9epI3oCvtFYY2Py8u3m/xclBVTkPRaXQXtB5/JXVV1wG5QvMdAkWrU9dy5B3PZzIal2lGNgPqxRexLwPMmtpILMpBeaycrK3aTXt7G+jCfmC4WEvycNGyQd0QXQcyDjlTWdUP6iHWS/zSJgg7o5zcbSV1EoLYtybX2kI0trBunmOt0PFLVNtS3SWAUI8OQ2B5VunIYM2DbY3Oo2S9M9NqG0ToVdm2Ktzrq6p9q6MLcuoE66WLFCp3Cluzk4hOtEZI2N5psoQ6j9Wbj5wfbIIzYE0dszPV4qOlelf6wPCaOUoJEJV5a8U+vEEEmS7xO7Trp6k9OCj3VJquzURas6Gk2VZU4sGaq86fIu9rAidORuGoZ4seTPvDfuj9vn9hmrWtNoESyulkM972ek7adjoEtDWF/B/NDDzXyWSJs3FZkQF1gvzJhHpeuZ+dDU7MS4VnF6wHcnf5/1KkCrnIyngftNjXlJycfpFc9qpAlfSJam2+12ivHr1Loi7V19ejf7fPv14XbCLq0A5lhX/Z/T6+vujGlaoRmkeWVGRu2/zGug55DWGpWJw+wiwTrOL2BzDQKy8TtC2yIqjeweMiVPSbaA/X6Fnh6dbls+fmrI8RUvjzSOFy6V57+PUnBS1csyhHf3/RZ5n4wLuFj4YQGa3WC0QfRKMAzQMvtLQq7/qBX98pr0e+oQ4exF04qDx02eUx0Gtry8RwLSP+JW/SOqspLNHG55ReIWMvgBP7hIG9uPYx7P96DRFE1Ub+jS8u8/x1aHqg==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,q={id:"api/service-api/get-logs-under-using-post",title:"Get logs under items",description:"Get logs under items",source:"@site/docs/api/service-api/get-logs-under-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/get-logs-under-using-post",permalink:"/docs/api/service-api/get-logs-under-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-logs-under-using-post",title:"Get logs under items",description:"Get logs under items",sidebar_label:"Get logs under items",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Vk1v2zgQ/SvCnNqCtpJidw86bVoEXWOD1kiak+vDWBxLbClSISk7hqH/vhhKjiXbKXJZnxJqPh/fvOEeAhYesgVoW0xya4KzWpODpQBbk8OgrJlJyKCgcGcL/2gkuUevTDH/9vAdBNTosKJAjqPswWBFkEHt7E/Kw1f+T4AyfIShBAGSfO5UzXHP7Bw9NcqRhCy4hgT4vKQKIdtD2NUc1genTAFtu+yMyYdPVu7YYhxXH0q9fwIB3BeZwGZY11rlsa30p2fb/TCNCprzfBk0GyP0+e2Kq+WuHaMTFHl2U4GqmfSDQtE53HHngarhuTKBCnIgYG1dhaE7+usPaFvBRd/RhvR5wwLINBVfEzln2X2LzkRk1zaCumrYKjjMGcg1BtQgoDG/jN0aWLb8OwU4HvjaGt+18fHq6hzJb/+OAfyQfjjB7AQalFKxL+r5CKRXkekxv7PFPXnbuHxMhQUoya00SjIrf38TK2XQ7T4fyz1E/zT6MI7fd/edI4suWyibamVQ6dkbkg79z7kaI146Hua4QPFTx9epI3oCvtFYY2Py8u3m/xclBVTkPRaXQXtB5/JXVV1wG5QvMdAkWrU9dy5B3PZzIal2lGNgPqxRexLwPMmtpILMpBeaycrK3aTXt7G+jCfmC4WEvycNGyQd0QXQcyDjlTWdUP6iHWS/zSJgg7o5zcbSV1EoLYtybX2kI0trBunmOt0PFLVNtS3SWAUI8OQ2B5VunIYM2DbY3Oo2S9M9NqG0ToVdm2Ktzrq6p9q6MLcuoE66WLFCp3Cluzk4hOtEZI2N5psoQ6j9Wbj5wfbIIzYE0dszPV4qOlelf6wPCaOUoJEJV5a8U+vEEEmS7xO7Trp6k9OCj3VJquzURas6Gk2VZU4sGaq86fIu9rAidORuGoZ4seTPvDfuj9vn9hmrWtNoESyulkM972ek7adjoEtDWF/B/NDDzXyWSJs3FZkQF1gvzJhHpeuZ+dDU7MS4VnF6wHcnf5/1KkCrnIyngftNjXlJycfpFc9qpAlfSJam2+12ivHr1Loi7V19ejf7fPv14XbCLq0A5lhX/Z/T6+vujGlaoRmkeWVGRu2/zGug55DWGpWJw+wiwTrOL2BzDQKy8TtC2yIqjeweMiVPSbaA/X6Fnh6dbls+fmrI8RUvjzSOFy6V57+PUnBS1csyhHf3/RZ5n4wLuFj4YQGa3WC0QfRKMAzQMvtLQq7/qBX98pr0e+oQ4exF04qDx02eUx0Gtry8RwLSP+JW/SOqspLNHG55ReIWMvgBP7hIG9uPYx7P96DRFE1Ub+jS8u8/x1aHqg==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Search test items with similar error logs",permalink:"/docs/api/service-api/search-logs-using-post"},next:{title:"Get log by UUID (Will be removed in version 6.0)",permalink:"/docs/api/service-api/get-log-by-uuid-using-get"}},k={},N=[{value:"Request",id:"request",level:2}];function w(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get logs under items"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v1/{projectName}/log/under"}),"\n",(0,i.jsx)(s.p,{children:"Get logs under items"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(m(),{className:"openapi-tabs__mime",children:(0,i.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"logsUnderRq"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"itemIds",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"logLevel",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(y.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"property name*"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"binaryContent"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"contentType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"thumbnailId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!1,name:"itemId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!1,name:"launchId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(j(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"thumbnail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"uuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function G(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);