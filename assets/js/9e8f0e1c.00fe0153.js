"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60369],{36275:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>C,frontMatter:()=>v,metadata:()=>k,toc:()=>N});var i=a(85893),r=a(11151),l=a(58219),t=a.n(l),n=(a(62316),a(51039)),c=a.n(n),o=(a(82723),a(9487)),d=a.n(o),m=a(41429),p=a.n(m),h=a(5397),j=a.n(h),u=a(4667),x=a.n(u),g=a(9472),y=a.n(g),f=(a(1176),a(12005),a(85162));const v={id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2jgQ/RVXn5KUjIFJqjY+LTs7WztVqeyEmbks4dDYjVEiS44kw1CU/32rZYPNQDacoN3qft1675kDeCwcpAtQpojR7XUWZ0Z7a5QiC0sBpiKLXhp9n0MKmSX09MkUd9rb/bOTunj45/EJBFRosSRPlqsdQGNJkEJlzTfK/Gf+JUBqDqHfgICcXGZlxZUv8iz9qKWlHFJvaxLgsg2VCOkB/L7iss5bqQtommWbTM7/YfI9Z5zXPeGdfwEBPBlpz2lYVUpmYbDkm+Pcw7CN9Ir7POL2dLgHtQCFtc42z7XMQYCXJfGmOmxmxZPwRizvzktyXHItuWJf+i/+/atD7RYvx24ESE9lAHDx+PVun5/v/4zMOvLkfMTHIrPTlEd+I12kTAGNGA502U6Aoi2pa51I1yUvhKw1FgTs0Opw0WsTcKxqzvIWMx52jR4VCKj1d212GpaNgJKcw+LalN1mr3RdG1uihxRy9BSHrEZAfR19E9Z1TqkQcJXRrt3zdDy55M5t4E5+zpt3ybvrVAmC6I7MWEfzx19e70/xMuKcKktZQJCuUTkS8BJnJqeCdNyRPl6ZfB93Wjvn+rVZwm0LoBdP2kmjW6l+pz2k/1tbwBZV/boHi68kvzFsDJVxYT4WdwrJdpocBppuEmWKhHhFIMCR3R59orYKUuBcbzKjmjRJDlj7jbHS75sEK3kxy5wqY/2DsR5V1NYKCK3ElWoXeyzXXuoaa8Vs2XhfuYtyD8fcns2cCKLLZ5KeEF2y5G/jfMRbilDnESOL3sh1pIlyyt+y7lq80WvAPa6cSjOyIasKSSNpmAdLXlVWt30XB1gRWrKzmle8WPJjdq557393L1hWrc0c7abjRq+p3jd6PQ3VP4i2oj9p+6TUPqUVKEzH0/fxZBzfTJ4mN+n7cXrz2+jjxw//wlGUw/5sDQPdDG/zJ1d9XN3s4T7KTVaXpH1w7k6amPnBqI91xYf4OkuUPIBrI79frFiAkhlpN9zUrMJsQ9F0NGb0gZ3MgzRJdrvdCMPTkbFF0h11yaf727vPj3cxH2kEMLVb9B9Gk0kbY3WUqAdtzgR5NvTJEDy9+KRSKHVwNxvY3ApsAdspCEjPX5uduoPKlgI2LMl0AYfDCh09W9U0HP5Rk2U+LXvNBHbl0vH33m1eoTqZILyZd2b6NjoHcBV4F0S9H/gIiM52hgUaltqGMCc7MKbbtm/8xHX6Chcv8EYcT8yyjCo/yGXTPnOr7j/LqvvPUJqc0yzu+D2PO0jhK3xlkCaMHzwlxA+gUBd1K4O2LX/+A40GKrU=",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,k={id:"api/service-api/create-log-entry-using-post",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post",permalink:"/docs/api/service-api/create-log-entry-using-post",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVsGS2jgQ/RVXn5KUjIFJqjY+LTs7WztVqeyEmbks4dDYjVEiS44kw1CU/32rZYPNQDacoN3qft1675kDeCwcpAtQpojR7XUWZ0Z7a5QiC0sBpiKLXhp9n0MKmSX09MkUd9rb/bOTunj45/EJBFRosSRPlqsdQGNJkEJlzTfK/Gf+JUBqDqHfgICcXGZlxZUv8iz9qKWlHFJvaxLgsg2VCOkB/L7iss5bqQtommWbTM7/YfI9Z5zXPeGdfwEBPBlpz2lYVUpmYbDkm+Pcw7CN9Ir7POL2dLgHtQCFtc42z7XMQYCXJfGmOmxmxZPwRizvzktyXHItuWJf+i/+/atD7RYvx24ESE9lAHDx+PVun5/v/4zMOvLkfMTHIrPTlEd+I12kTAGNGA502U6Aoi2pa51I1yUvhKw1FgTs0Opw0WsTcKxqzvIWMx52jR4VCKj1d212GpaNgJKcw+LalN1mr3RdG1uihxRy9BSHrEZAfR19E9Z1TqkQcJXRrt3zdDy55M5t4E5+zpt3ybvrVAmC6I7MWEfzx19e70/xMuKcKktZQJCuUTkS8BJnJqeCdNyRPl6ZfB93Wjvn+rVZwm0LoBdP2kmjW6l+pz2k/1tbwBZV/boHi68kvzFsDJVxYT4WdwrJdpocBppuEmWKhHhFIMCR3R59orYKUuBcbzKjmjRJDlj7jbHS75sEK3kxy5wqY/2DsR5V1NYKCK3ElWoXeyzXXuoaa8Vs2XhfuYtyD8fcns2cCKLLZ5KeEF2y5G/jfMRbilDnESOL3sh1pIlyyt+y7lq80WvAPa6cSjOyIasKSSNpmAdLXlVWt30XB1gRWrKzmle8WPJjdq557393L1hWrc0c7abjRq+p3jd6PQ3VP4i2oj9p+6TUPqUVKEzH0/fxZBzfTJ4mN+n7cXrz2+jjxw//wlGUw/5sDQPdDG/zJ1d9XN3s4T7KTVaXpH1w7k6amPnBqI91xYf4OkuUPIBrI79frFiAkhlpN9zUrMJsQ9F0NGb0gZ3MgzRJdrvdCMPTkbFF0h11yaf727vPj3cxH2kEMLVb9B9Gk0kbY3WUqAdtzgR5NvTJEDy9+KRSKHVwNxvY3ApsAdspCEjPX5uduoPKlgI2LMl0AYfDCh09W9U0HP5Rk2U+LXvNBHbl0vH33m1eoTqZILyZd2b6NjoHcBV4F0S9H/gIiM52hgUaltqGMCc7MKbbtm/8xHX6Chcv8EYcT8yyjCo/yGXTPnOr7j/LqvvPUJqc0yzu+D2PO0jhK3xlkCaMHzwlxA+gUBd1K4O2LX/+A40GKrU=",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post"},next:{title:"log-controller",permalink:"/docs/api/service-api/log-controller"}},q={},N=[{value:"Request",id:"request",level:2}];function K(e){const s={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Create log"})}),"\n",(0,i.jsx)(c(),{method:"post",path:"/v2/{projectName}/log/entry"}),"\n",(0,i.jsx)(s.p,{children:"Create log"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(x(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(x(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function C(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(K,{...e})}):K(e)}}}]);