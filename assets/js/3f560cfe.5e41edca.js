"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[81105],{757:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>n,toc:()=>y});const n=JSON.parse('{"id":"api/service-api/execute-import-plugin-command","title":"Send report to the specified plugin for importing","description":"Send report to the specified plugin for importing","source":"@site/docs/api/service-api/execute-import-plugin-command.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/execute-import-plugin-command","permalink":"/docs/api/service-api/execute-import-plugin-command","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"execute-import-plugin-command","title":"Send report to the specified plugin for importing","description":"Send report to the specified plugin for importing","sidebar_label":"Send report to the specified plugin for importing","hide_title":true,"hide_table_of_contents":true,"api":"eJy9Vt9v2zYQ/leEe2oBxoqztB30VDdNt2xBm+UH+mD4gZbOMTuRVMhTYkPQ/14cSdtK7K3DBswvJqW7j99994PqgOS9h2IKTd3eK3NUWkPO1jU6mAmwDTpJypqLCgrAFZYt4YVurKOrYH9mtZamAgGNdFIjoWO0DozUCEVC/cwbAcrwE0lLEODwoVUOKyjItSjAl0vUEooOaN2wpyenzD30vdiBOfsNS/pPaLNojJ4+2GrNFhwxGuKlbmtSjXSUL6zTR5WkgLFD250zhYWqkTVKJ9g5c2MhHKtGCj17BKs9HgL4AElQwFwZ6dbQC6hla8plVPf6YeD0F9CepKNbpf8ev5KER8RWvUhCdqDl6hLNPS2hOHnzVoBWZrMfi5eaCajQl041XAgHNBUgiZyatxR5abm6INR+h522xwJaox5aTPuYq4QmnZNrTmt891zrR1m3/0DsP3F9kF90fxH3+PTd6c8/vT1998Pw/doT6gHy3NoapQEBuJK64QwvZO2x7wWQIt4DxzjZ6nL9B1cyaFsdzBaaVnOcH88/Te4ub0HAx/MPd7/AbIh4OawPxuMfl7NvrPFRgZPjY/57ljD48juIYZnLpqlVGfo6/+ZjTvc6JkmcDnkOeIOmyhwykYxsRkvMfIOlWiisstjy2cK6TAWuMUSNtLQ8RRrrQ+a4cwvIH8d59Mi7QX/3ebcbHX0egUCAR/e4GTGtq6GALjDHvsjzbmk99blsFLxkfB3IXllHss4mVxdZBAKuDafkvE4tFbB4tcnIkqgBEf48F2CFC9nW3FjhTS+AD93X/FfrKeN2y6SpsqDUK7XIDGKF1evMLrJIKUuctnx2B1So7Siq3ASjkbKcjxnLULZO0TroMEfp0E1a1nM6G76+CeGEyIZG2xyn4DZRJyMQafFpM0N++3obyleZhQ3uqSKHqv5Y8sqWrUZDofBSRcoyaJcG/E3bpDyjloqz6+OT93syCKhVicbjwH3SyHKJ2cnoGESqDo6wyPOnp6eRDG9H1t3nydXnlxdn559vzo/YhecEOh/JvxmN0zMuVy3NkOW/qP7DE5RwRXlTS2X4pMC4S40xhccxd0mAAwHF88uveH6xxvaYbYpxCl03lx7vXN33/PihRcfFMtvVeyidSnleV2l+7fHcDg14dZ3G8esMxGH+m0Fu1rAduQAiTuXhlwBf6f/nyQPl+hl3LMoKXRAgWpzFw45uGWeHcOhzgLlHp0lZYkMD872xyq24HXtXX254rs/TV0e8CcI1HXDFbslN3PffAZPuS4A=","sidebar_class_name":"post api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Upload new ReportPortal plugin","permalink":"/docs/api/service-api/upload-plugin"},"next":{"title":"plugin-public-controller","permalink":"/docs/api/service-api/plugin-public-controller"}}');var p=i(74848),r=i(28453),o=i(57742),a=i.n(o),s=i(78178),l=i.n(s),c=i(19624),d=i.n(c),m=i(96226),u=i.n(m),h=(i(77675),i(19365),i(51107));const f={id:"execute-import-plugin-command",title:"Send report to the specified plugin for importing",description:"Send report to the specified plugin for importing",sidebar_label:"Send report to the specified plugin for importing",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vt9v2zYQ/leEe2oBxoqztB30VDdNt2xBm+UH+mD4gZbOMTuRVMhTYkPQ/14cSdtK7K3DBswvJqW7j99994PqgOS9h2IKTd3eK3NUWkPO1jU6mAmwDTpJypqLCgrAFZYt4YVurKOrYH9mtZamAgGNdFIjoWO0DozUCEVC/cwbAcrwE0lLEODwoVUOKyjItSjAl0vUEooOaN2wpyenzD30vdiBOfsNS/pPaLNojJ4+2GrNFhwxGuKlbmtSjXSUL6zTR5WkgLFD250zhYWqkTVKJ9g5c2MhHKtGCj17BKs9HgL4AElQwFwZ6dbQC6hla8plVPf6YeD0F9CepKNbpf8ev5KER8RWvUhCdqDl6hLNPS2hOHnzVoBWZrMfi5eaCajQl041XAgHNBUgiZyatxR5abm6INR+h522xwJaox5aTPuYq4QmnZNrTmt891zrR1m3/0DsP3F9kF90fxH3+PTd6c8/vT1998Pw/doT6gHy3NoapQEBuJK64QwvZO2x7wWQIt4DxzjZ6nL9B1cyaFsdzBaaVnOcH88/Te4ub0HAx/MPd7/AbIh4OawPxuMfl7NvrPFRgZPjY/57ljD48juIYZnLpqlVGfo6/+ZjTvc6JkmcDnkOeIOmyhwykYxsRkvMfIOlWiisstjy2cK6TAWuMUSNtLQ8RRrrQ+a4cwvIH8d59Mi7QX/3ebcbHX0egUCAR/e4GTGtq6GALjDHvsjzbmk99blsFLxkfB3IXllHss4mVxdZBAKuDafkvE4tFbB4tcnIkqgBEf48F2CFC9nW3FjhTS+AD93X/FfrKeN2y6SpsqDUK7XIDGKF1evMLrJIKUuctnx2B1So7Siq3ASjkbKcjxnLULZO0TroMEfp0E1a1nM6G76+CeGEyIZG2xyn4DZRJyMQafFpM0N++3obyleZhQ3uqSKHqv5Y8sqWrUZDofBSRcoyaJcG/E3bpDyjloqz6+OT93syCKhVicbjwH3SyHKJ2cnoGESqDo6wyPOnp6eRDG9H1t3nydXnlxdn559vzo/YhecEOh/JvxmN0zMuVy3NkOW/qP7DE5RwRXlTS2X4pMC4S40xhccxd0mAAwHF88uveH6xxvaYbYpxCl03lx7vXN33/PihRcfFMtvVeyidSnleV2l+7fHcDg14dZ3G8esMxGH+m0Fu1rAduQAiTuXhlwBf6f/nyQPl+hl3LMoKXRAgWpzFw45uGWeHcOhzgLlHp0lZYkMD872xyq24HXtXX254rs/TV0e8CcI1HXDFbslN3PffAZPuS4A=",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},g=void 0,x={},y=[];function v(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Send report to the specified plugin for importing"}),"\n",(0,p.jsx)(a(),{method:"post",path:"/v1/plugin/{projectName}/{pluginName}/import",context:"endpoint"}),"\n",(0,p.jsx)(t.p,{children:"Send report to the specified plugin for importing"}),"\n",(0,p.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,p.jsx)(l(),{parameters:[{name:"pluginName",in:"path",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,p.jsx)(d(),{title:"Body",body:{content:{"multipart/form-data":{schema:{required:["file"],type:"object",properties:{file:{type:"string",format:"binary"},launchImportRq:{type:"object",properties:{startTime:{type:"string",format:"date-time"},name:{maxLength:256,minLength:1,type:"string"},description:{type:"string"},attributes:{maxItems:256,minItems:0,uniqueItems:!0,type:"array",items:{required:["value"],type:"object",properties:{key:{type:"string"},value:{maxLength:2147483647,minLength:1,type:"string"},system:{type:"boolean",example:!1}},title:"ItemAttributesRQ"}},mode:{type:"string",enum:["DEFAULT","DEBUG"]}},title:"LaunchImportRQ"}}}}}}}),"\n",(0,p.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object"}}}}}})]})}function b(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(v,{...e})}):v(e)}}}]);