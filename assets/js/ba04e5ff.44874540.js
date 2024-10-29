"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90095],{58143:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>U,contentTitle:()=>v,default:()=>T,frontMatter:()=>N,metadata:()=>y,toc:()=>q});var a=s(85893),n=s(11151),r=s(58219),l=s.n(r),t=(s(62316),s(51039)),c=s.n(t),d=(s(82723),s(9487)),p=s.n(d),m=s(41429),o=s.n(m),h=s(5397),u=s.n(h),j=s(4667),x=s.n(j),f=s(9472),b=s.n(f),g=(s(1176),s(12005),s(85162));const N={id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt+P2jgQ/leieWqrQID2qrs8HbfH6lBXuxRYnXRbHkwygNvEdm1nd1GU//00tgNh4faq8hTsb374m5nPrsGyrYH0AQpWiWzXY2Yvsl4mhdWyKFDDKgapUDPLpZjmkMKGC252Nw5+b7jYzu6XEINimpVoUZO3GgQrEdLgdZpDDFxACorZHcSQo8k0V+TzFKTxe8U15pBaXWEMJtthySCtwe4VOTRWc7GFpokPMZSWXzGzt/TvtTCnuB+PtPJgNPYPme8Jceq3S8j8M8RA7KGwhGRKFTxz5CVfDcHrbiRuCwp17TxMnjGrCOmcHPN7ABT5kpdItQjJyTUdhWjXVB3L0bhw1mq+rqz/F7BMa7YnZiyWpht2arEcHyxc1Nfdf8P9BYJiMHtjsexsraUskAmIAZ9ZqSjahhUGmxgeWVHhJZqb5kXBLgRqiTjbi2EjdckspJAziz1LKMrMMluZS3gUVUnczsaLxeRPiOF6PL1xH4vl3Wzmvz5Nw9f0djmZz+9nS/fvanx7Nbm5CTvXdxDD3+P5Lawaf4zT3nILRklhPIujweC8ie4+nTbOu+Tda70Sum3xvyXj+UUiCy6+XdwQVblG3dniwuIWdZdhLuzHD65ioWhKY8YsnddVOYbnXiZz3KLohcnprWW+74WBPRuYUyr8CSOvCtFG6sgozPiGYx6FGXaNZVEYLoXXG9ear8Y9tN7L+DTgJdqdJHVTleOQ9COF5HGU1B3ZaBKfVFK3ktUk3hnEYFA/tupX6QJSIFMrM1k0aZLUrLI7qbndNwlT/OzUc1RS25nUlhWR9+VS1pytC1/L1p3vng2rCqrGzlplztzNWuyx0wkIccCvmhgOGZ2341/S2Ihoi5jII8osesM3kUDMMX8byU3k841eJnzMK8dS9rVDKQfqc0lNsyKqssrHfahhjUyjHlfE+MOKtkko50fFnbQScqpvh6IfRrqVodCEbbnb5l695KijBUFWYDQYfegNB73Rb8vhx3T0Pn0/6A9/Hf4DRylpFaOhu2Yju7PZreF/FLglbDybRrnMqhKFdddDGH+WufEPk7KoFBlRiiXj1FPGr/x+RizNdIbCYMd8rFi2w2jUH0AcepKqnybJ09NTn7ndvtTbJJia5GZ6NbldTHpkQmKN2vjsf+kPh35NSWNLJjphfmxgL2u7xWebqIJxQb5djnUYvwd4HEEM6em97aPQeufZEIZwFcNOGkumdb1mBu910TS0/L1CTe22Oo6U66CcG/o+KteLLA+KDG/mQdTfRp3AF0/R3rti3xEdiEO7HqzpCfNT8U8J+YkUug4aUoIdspxU/zBTVz5ub0l+jh7OnjN0Bm8xzjJUtoOlG+xEWv07cR3eUKXMCaXZEz122BOk8AW+UI7Snd4pnluvoWBiW7Et4X1U+v0Ltz6nrQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},v=void 0,y={id:"api/service-api/finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",source:"@site/docs/api/service-api/finish-launch-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/finish-launch-using-put",permalink:"/docs/api/service-api/finish-launch-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"finish-launch-using-put",title:"Finish launch for specified project",description:"Finish launch for specified project",sidebar_label:"Finish launch for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJydVt+P2jgQ/leieWqrQID2qrs8HbfH6lBXuxRYnXRbHkwygNvEdm1nd1GU//00tgNh4faq8hTsb374m5nPrsGyrYH0AQpWiWzXY2Yvsl4mhdWyKFDDKgapUDPLpZjmkMKGC252Nw5+b7jYzu6XEINimpVoUZO3GgQrEdLgdZpDDFxACorZHcSQo8k0V+TzFKTxe8U15pBaXWEMJtthySCtwe4VOTRWc7GFpokPMZSWXzGzt/TvtTCnuB+PtPJgNPYPme8Jceq3S8j8M8RA7KGwhGRKFTxz5CVfDcHrbiRuCwp17TxMnjGrCOmcHPN7ABT5kpdItQjJyTUdhWjXVB3L0bhw1mq+rqz/F7BMa7YnZiyWpht2arEcHyxc1Nfdf8P9BYJiMHtjsexsraUskAmIAZ9ZqSjahhUGmxgeWVHhJZqb5kXBLgRqiTjbi2EjdckspJAziz1LKMrMMluZS3gUVUnczsaLxeRPiOF6PL1xH4vl3Wzmvz5Nw9f0djmZz+9nS/fvanx7Nbm5CTvXdxDD3+P5Lawaf4zT3nILRklhPIujweC8ie4+nTbOu+Tda70Sum3xvyXj+UUiCy6+XdwQVblG3dniwuIWdZdhLuzHD65ioWhKY8YsnddVOYbnXiZz3KLohcnprWW+74WBPRuYUyr8CSOvCtFG6sgozPiGYx6FGXaNZVEYLoXXG9ear8Y9tN7L+DTgJdqdJHVTleOQ9COF5HGU1B3ZaBKfVFK3ktUk3hnEYFA/tupX6QJSIFMrM1k0aZLUrLI7qbndNwlT/OzUc1RS25nUlhWR9+VS1pytC1/L1p3vng2rCqrGzlplztzNWuyx0wkIccCvmhgOGZ2341/S2Ihoi5jII8osesM3kUDMMX8byU3k841eJnzMK8dS9rVDKQfqc0lNsyKqssrHfahhjUyjHlfE+MOKtkko50fFnbQScqpvh6IfRrqVodCEbbnb5l695KijBUFWYDQYfegNB73Rb8vhx3T0Pn0/6A9/Hf4DRylpFaOhu2Yju7PZreF/FLglbDybRrnMqhKFdddDGH+WufEPk7KoFBlRiiXj1FPGr/x+RizNdIbCYMd8rFi2w2jUH0AcepKqnybJ09NTn7ndvtTbJJia5GZ6NbldTHpkQmKN2vjsf+kPh35NSWNLJjphfmxgL2u7xWebqIJxQb5djnUYvwd4HEEM6em97aPQeufZEIZwFcNOGkumdb1mBu910TS0/L1CTe22Oo6U66CcG/o+KteLLA+KDG/mQdTfRp3AF0/R3rti3xEdiEO7HqzpCfNT8U8J+YkUug4aUoIdspxU/zBTVz5ub0l+jh7OnjN0Bm8xzjJUtoOlG+xEWv07cR3eUKXMCaXZEz122BOk8AW+UI7Snd4pnluvoWBiW7Et4X1U+v0Ltz6nrQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Merge set of specified launches in common one",permalink:"/docs/api/service-api/merge-launches-using-post"},next:{title:"launch-controller",permalink:"/docs/api/service-api/launch-controller"}},U={},q=[{value:"Request",id:"request",level:2}];function k(e){const i={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{className:"openapi__heading",children:(0,a.jsx)(i.p,{children:"Finish launch for specified project"})}),"\n",(0,a.jsx)(c(),{method:"put",path:"/v2/{projectName}/launch/{launchId}/finish"}),"\n",(0,a.jsx)(i.p,{children:"Finish launch for specified project"}),"\n",(0,a.jsx)(i.h2,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(i.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)(o(),{className:"paramsItem",param:{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}}}),(0,a.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,a.jsx)(p(),{className:"openapi-tabs__mime",children:(0,a.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(i.p,{children:"Body"})}),(0,a.jsx)("strong",{className:"openapi-schema__required",children:(0,a.jsx)(i.p,{children:"required"})})]}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,a.jsx)(i.p,{children:"finishLaunchRQ"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsxs)("span",{className:"openapi-schema__container",children:[(0,a.jsx)("strong",{className:"openapi-schema__property",children:(0,a.jsx)(i.p,{children:"attributes"})}),(0,a.jsx)("span",{className:"openapi-schema__name",children:(0,a.jsx)(i.p,{children:"object[]"})})]})}),(0,a.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,a.jsx)(i.p,{children:"Array ["})})}),(0,a.jsx)(x(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"system",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1}}),(0,a.jsx)(x(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)("li",{children:(0,a.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,a.jsx)(i.p,{children:"]"})})})]})]})}),(0,a.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"endTime",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,a.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PASSED`, `FAILED`, `STOPPED`, `SKIPPED`, `INTERRUPTED`, `CANCELLED`, `INFO`, `WARN`]",schema:{type:"string",enum:["PASSED","FAILED","STOPPED","SKIPPED","INTERRUPTED","CANCELLED","INFO","WARN"]}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(g.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(i.p,{children:"OK"})}),(0,a.jsx)("div",{children:(0,a.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(g.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(i.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"link",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,a.jsx)(x(),{collapsible:!1,name:"number",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}})]})]})}),(0,a.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "id": "string",\n  "link": "string",\n  "number": 0\n}',language:"json"})})]})})})})]})})})})]})}function T(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(k,{...e})}):k(e)}}}]);