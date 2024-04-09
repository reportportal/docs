"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80194],{92653:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>y,contentTitle:()=>v,default:()=>_,frontMatter:()=>u,metadata:()=>f,toc:()=>N});var s=i(85893),n=i(11151),t=i(58219),l=i.n(t),r=(i(62316),i(51039)),o=i.n(r),c=(i(82723),i(9487)),d=i.n(c),m=(i(41429),i(5397)),p=i.n(m),g=i(4667),h=i.n(g),x=i(9472),b=i.n(x),j=(i(1176),i(12005),i(85162));const u={id:"get-global-integrations-using-get-1",title:"Get available global integrations",description:"Get available global integrations",sidebar_label:"Get available global integrations",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVdtu20gM/RWBT20xsZJitw96Wrd1U6OXGInzZBgLWqLt2R3NTGcoZwNB/15w5ItyaZHVi4QhD4c8PKRaYNxEKBagLdMmIGtnz0pnOThjKMBSgfPUn08rKGBDfGncCs30BIi3UdvN5WT+9wUoCBS9s5EiFC28PT+XV0WxDNqLMxRw9QUUyCVkWaxv8jfyiuWWapQvvvcEBWAIeA8KNFOdorFmI4bB3dcUXRNKAnVAudU/VDIo8EFSZ91nUgZKgI/INLgjctB2AwrWLtTIUECFTGesa4JO9SgXngI6BWRxZaga2FbOGUIrRj08T+RSGN6iLb/7IzmeaplhwJqYQhxgny+ne4icJ99nCRLTi0nChrefjLt7jiCyTS1KuRrfzj+Dgvfjm+kHUDC/+jL5Dgo+XV1/AwVfP45nsDxQ978Jr4hRm5cR8NsGbIJr/JGXx72zWD9v4IeIX3eu+10UH5wkPX2ZCPaPFO8DlchS0xpNJPVoci6JM9yhNlJ4tkmDmA10EEFBTbx1+1EV1pC3UEC+u8gHjnmPzdEYUBAp7JLqFi00wUABrQ+OXelMV+R5K7JwQfN9l6PX8Dira/Iu8MwFRpP1sUDBDoOWNFMvD+H6ZbDGxkj9W2Yfn4SbHXxPmhNHUHt/Edcxo6fb5bOLnElnMrRVJpllr/Q6s0QVVa8zt876fLPHCZ/yqqh2o5C8fHIaaSdtWgpVZdPfu2hhRRgojBtheLEcmm9kl/WlD52OYtgXlFZeEm5ygn6s1244y0N2f0H9oZTxbJpVrmxqspzavN+zWKY928sVbhovIKG3Ri3djv3JX09KVmB0STbSAD72WG4pezs6B7VXi1RT5Pnd3d0Ik3XkwibfQ2P+dfph8v1mciaQToFIrc/+z9HF+egiDYyLXKMdXPMSqT/g4sgt03+ce4M67YGUYbsfgwXs5Bc1CAMK+tigQIZhqWDrIotr264w0m0wXSfHPxoK0vblSdqp6wq2hBWFpIh/6V4oKkvynGbANJKS/OFEHsfZvJzMoet+ApASkrI=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},v=void 0,f={id:"api/service-api/versions/5.10/get-global-integrations-using-get-1",title:"Get available global integrations",description:"Get available global integrations",source:"@site/docs/api/service-api/versions/5.10/get-global-integrations-using-get-1.api.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/get-global-integrations-using-get-1",permalink:"/docs/api/service-api/versions/5.10/get-global-integrations-using-get-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-global-integrations-using-get-1",title:"Get available global integrations",description:"Get available global integrations",sidebar_label:"Get available global integrations",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVdtu20gM/RWBT20xsZJitw96Wrd1U6OXGInzZBgLWqLt2R3NTGcoZwNB/15w5ItyaZHVi4QhD4c8PKRaYNxEKBagLdMmIGtnz0pnOThjKMBSgfPUn08rKGBDfGncCs30BIi3UdvN5WT+9wUoCBS9s5EiFC28PT+XV0WxDNqLMxRw9QUUyCVkWaxv8jfyiuWWapQvvvcEBWAIeA8KNFOdorFmI4bB3dcUXRNKAnVAudU/VDIo8EFSZ91nUgZKgI/INLgjctB2AwrWLtTIUECFTGesa4JO9SgXngI6BWRxZaga2FbOGUIrRj08T+RSGN6iLb/7IzmeaplhwJqYQhxgny+ne4icJ99nCRLTi0nChrefjLt7jiCyTS1KuRrfzj+Dgvfjm+kHUDC/+jL5Dgo+XV1/AwVfP45nsDxQ978Jr4hRm5cR8NsGbIJr/JGXx72zWD9v4IeIX3eu+10UH5wkPX2ZCPaPFO8DlchS0xpNJPVoci6JM9yhNlJ4tkmDmA10EEFBTbx1+1EV1pC3UEC+u8gHjnmPzdEYUBAp7JLqFi00wUABrQ+OXelMV+R5K7JwQfN9l6PX8Dira/Iu8MwFRpP1sUDBDoOWNFMvD+H6ZbDGxkj9W2Yfn4SbHXxPmhNHUHt/Edcxo6fb5bOLnElnMrRVJpllr/Q6s0QVVa8zt876fLPHCZ/yqqh2o5C8fHIaaSdtWgpVZdPfu2hhRRgojBtheLEcmm9kl/WlD52OYtgXlFZeEm5ygn6s1244y0N2f0H9oZTxbJpVrmxqspzavN+zWKY928sVbhovIKG3Ri3djv3JX09KVmB0STbSAD72WG4pezs6B7VXi1RT5Pnd3d0Ik3XkwibfQ2P+dfph8v1mciaQToFIrc/+z9HF+egiDYyLXKMdXPMSqT/g4sgt03+ce4M67YGUYbsfgwXs5Bc1CAMK+tigQIZhqWDrIotr264w0m0wXSfHPxoK0vblSdqp6wq2hBWFpIh/6V4oKkvynGbANJKS/OFEHsfZvJzMoet+ApASkrI=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Delete all global integrations by type",permalink:"/docs/api/service-api/versions/5.10/delete-all-integrations-using-delete"},next:{title:"Get available global integrations for plugin",permalink:"/docs/api/service-api/versions/5.10/get-global-integrations-using-get"}},y={},N=[{value:"Request",id:"request",level:2}];function I(e){const a={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{className:"openapi__heading",children:(0,s.jsx)(a.p,{children:"Get available global integrations"})}),"\n",(0,s.jsx)(o(),{method:"get",path:"/v1/integration/global/all"}),"\n",(0,s.jsx)(a.p,{children:"Get available global integrations"}),"\n",(0,s.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(l(),{label:void 0,id:void 0,children:(0,s.jsxs)(j.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(a.p,{children:"OK"})}),(0,s.jsx)("div",{children:(0,s.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(j.default,{label:"*/*",value:"*/*",children:(0,s.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,s.jsx)(j.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(a.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,s.jsx)(a.p,{children:"Array ["})})}),(0,s.jsx)(h(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(h(),{collapsible:!1,name:"creator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(h(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationParameters"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"integrationType"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(h(),{collapsible:!1,name:"authFlow",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`OAUTH`, `BASIC`, `TOKEN`, `FORM`, `LDAP`]",schema:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]}}),(0,s.jsx)(h(),{collapsible:!1,name:"creationDate",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,s.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,s.jsxs)(i,{style:{},className:"openapi-markdown__details",children:[(0,s.jsx)("summary",{style:{},children:(0,s.jsxs)("span",{className:"openapi-schema__container",children:[(0,s.jsx)("strong",{className:"openapi-schema__property",children:(0,s.jsx)(a.p,{children:"details"})}),(0,s.jsx)("span",{className:"openapi-schema__name",children:(0,s.jsx)(a.p,{children:"object"})})]})}),(0,s.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,s.jsx)(h(),{collapsible:!1,name:"enabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,s.jsx)(h(),{collapsible:!1,name:"groupType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(h(),{collapsible:!1,name:"type",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,s.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,s.jsx)(h(),{collapsible:!1,name:"projectId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,s.jsx)("li",{children:(0,s.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,s.jsx)(a.p,{children:"]"})})})]})]})}),(0,s.jsx)(j.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,s.jsx)(p(),{responseExample:'[\n  {\n    "creationDate": "2024-04-09T14:23:32.963Z",\n    "creator": "string",\n    "enabled": true,\n    "id": 0,\n    "integrationParameters": {},\n    "integrationType": {\n      "authFlow": "OAUTH",\n      "creationDate": "2024-04-09T14:23:32.963Z",\n      "details": {},\n      "enabled": true,\n      "groupType": "string",\n      "name": "string",\n      "type": 0\n    },\n    "name": "string",\n    "projectId": 0\n  }\n]',language:"json"})})]})})})})]})})})})]})}function _(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(I,{...e})}):I(e)}}}]);