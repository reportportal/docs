"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79356],{46764:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>q,contentTitle:()=>b,default:()=>P,frontMatter:()=>v,metadata:()=>C,toc:()=>N});var i=s(85893),r=s(11151),t=s(58219),l=s.n(t),n=(s(62316),s(51039)),o=s.n(n),c=(s(82723),s(9487)),p=s.n(c),d=s(41429),m=s.n(d),h=s(5397),u=s.n(h),g=s(4667),j=s.n(g),y=s(9472),x=s.n(y),f=(s(1176),s(12005),s(85162));const v={id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVlGPmzgQ/itontrKhGWVvvB0ub093UpVby/ZvFwanRyYgFtjU9skGyH+ezWGBLKk1zwFM575Zvx9n2nA8dxCsgGp8zDVyhktJRrYMtAVGu6EVk8ZJJAa5A4/6fxROXNaW6Hy579XL//FwKDihpfo0FCmBhQvERKojP6KqftMTwyEoiXuCmCQoU2NqCj3JM7g91oYzCBxpkYGNi2w5JA04E4VpbXOCJVD2267YLTud52dKOI67wXx8h9gQL2hchTGq0qK1LcWfbUU24zLCCepzoofLpsHUBuQvFZpsa5FBgycKJFm1WPTO+qEJmJoek6gpZR7QRmH1H/S8682dVOctt0yEA5LD2Dy+u1s1+unPwK9DxxaF9C2QB8VZoErhA2kzqFl44am5RhIPKC8VQlVXdJA0BhtgMGRG+UPeq89jl1NUc7wlJrdc8clMKjVN6WPCrYtgxKt5fmtLvvJ3qi616bkDhLIuMPQR7UM6tvoWz+ua0r5BVtpZbs539/FU+48eO5k17z5EH24TRUviX7Lwp5Uulz98nh/ipcQZ1gZTD2CZM+lRQavYaozzFGFPenDnc5OYa+1a67f6sWfNgN8dais0KqT6jc8QfK/uRkcuKzf1iDxlegKTdZQaev7I3EnEB3iqBlpuo2kziOkEQEDi+Zw9onaSEiAYp1OtWyTKGp47QpthDu1Ea/EpJclVtq4Z20cl0GXyyM0gu9kN9hzuu5Q97yWxJbCucpO0j2fYwc2UyCwPp5IekE0Zclf2rqAphRwlQWELHgn9oFCzDB7T7rr8AZvAQ+4Miz1zPioygfNhCYebGlUad3V3TSwQ27QLGoa8WZLr8m5loP/Pb7ysups5mw3PTcGTQ2+MehprP7Raif6i7YvSh1COoHC/d39PIzvwjh+iefJ/GMyn8/m8fxfOItyXJ+sYaSb8Wn+5KjPo1s8PwWZTusSlfPO3UuTp27U6qquaBMdZ8kFNWC7ld8mI2YgRYrKjie1qHhaYHA/uyP0np3EgySKjsfjjPu3M23yqN9qo09PD4+fV48hbWkZELU79B9ncdytkTpKrkZlrgR51fTFEBy+uqiSXCjvbsazuRPYBg505ybX12avbq+yLYOCJJlsoGl23OLayLal5e81GuLTdtCMZ1cmLP0f3OYNqosJwrtlb6bvg2sAN4H3i1ydRj4CrLedcYKWpFYgz9CMjOmhqxu+UJ4hw+QCb9l5xyJNsXKjWDLtK7eirxZgsOu/GUqdUZjhR7rn+RES+AJfCKT27XtP8esNSK7yupNBV5Z+PwBjpijr",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,C={id:"api/service-api/create-log-entry-using-post-1",title:"Create log",description:"Create log",source:"@site/docs/api/service-api/create-log-entry-using-post-1.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/create-log-entry-using-post-1",permalink:"/docs/api/service-api/create-log-entry-using-post-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-log-entry-using-post-1",title:"Create log",description:"Create log",sidebar_label:"Create log",hide_title:!0,hide_table_of_contents:!0,api:"eJyFVlGPmzgQ/itontrKhGWVvvB0ub093UpVby/ZvFwanRyYgFtjU9skGyH+ezWGBLKk1zwFM575Zvx9n2nA8dxCsgGp8zDVyhktJRrYMtAVGu6EVk8ZJJAa5A4/6fxROXNaW6Hy579XL//FwKDihpfo0FCmBhQvERKojP6KqftMTwyEoiXuCmCQoU2NqCj3JM7g91oYzCBxpkYGNi2w5JA04E4VpbXOCJVD2267YLTud52dKOI67wXx8h9gQL2hchTGq0qK1LcWfbUU24zLCCepzoofLpsHUBuQvFZpsa5FBgycKJFm1WPTO+qEJmJoek6gpZR7QRmH1H/S8682dVOctt0yEA5LD2Dy+u1s1+unPwK9DxxaF9C2QB8VZoErhA2kzqFl44am5RhIPKC8VQlVXdJA0BhtgMGRG+UPeq89jl1NUc7wlJrdc8clMKjVN6WPCrYtgxKt5fmtLvvJ3qi616bkDhLIuMPQR7UM6tvoWz+ua0r5BVtpZbs539/FU+48eO5k17z5EH24TRUviX7Lwp5Uulz98nh/ipcQZ1gZTD2CZM+lRQavYaozzFGFPenDnc5OYa+1a67f6sWfNgN8dais0KqT6jc8QfK/uRkcuKzf1iDxlegKTdZQaev7I3EnEB3iqBlpuo2kziOkEQEDi+Zw9onaSEiAYp1OtWyTKGp47QpthDu1Ea/EpJclVtq4Z20cl0GXyyM0gu9kN9hzuu5Q97yWxJbCucpO0j2fYwc2UyCwPp5IekE0Zclf2rqAphRwlQWELHgn9oFCzDB7T7rr8AZvAQ+4Miz1zPioygfNhCYebGlUad3V3TSwQ27QLGoa8WZLr8m5loP/Pb7ysups5mw3PTcGTQ2+MehprP7Raif6i7YvSh1COoHC/d39PIzvwjh+iefJ/GMyn8/m8fxfOItyXJ+sYaSb8Wn+5KjPo1s8PwWZTusSlfPO3UuTp27U6qquaBMdZ8kFNWC7ld8mI2YgRYrKjie1qHhaYHA/uyP0np3EgySKjsfjjPu3M23yqN9qo09PD4+fV48hbWkZELU79B9ncdytkTpKrkZlrgR51fTFEBy+uqiSXCjvbsazuRPYBg505ybX12avbq+yLYOCJJlsoGl23OLayLal5e81GuLTdtCMZ1cmLP0f3OYNqosJwrtlb6bvg2sAN4H3i1ydRj4CrLedcYKWpFYgz9CMjOmhqxu+UJ4hw+QCb9l5xyJNsXKjWDLtK7eirxZgsOu/GUqdUZjhR7rn+RES+AJfCKT27XtP8esNSK7yupNBV5Z+PwBjpijr",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Create log (batching operation)",permalink:"/docs/api/service-api/create-log-using-post-1"},next:{title:"Get next or previous log in test item",permalink:"/docs/api/service-api/get-error-page-using-get"}},q={},N=[{value:"Request",id:"request",level:2}];function w(e){const a={h2:"h2",p:"p",...(0,r.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(a.p,{children:"Create log"})}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v1/{projectName}/log/entry"}),"\n",(0,i.jsx)(a.p,{children:"Create log"}),"\n",(0,i.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"createLogRQ"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"file"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"itemUuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"UUID of test item owned this log"}}),(0,i.jsx)(j(),{collapsible:!1,name:"launchUuid",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"level",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`error`, `warn`, `info`, `debug`, `trace`, `fatal`, `unknown`]",schema:{type:"string",enum:["error","warn","info","debug","trace","fatal","unknown"]}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"time",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(j(),{collapsible:!1,name:"uuid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"201",value:"201",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Created"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "id": "string"\n}',language:"json"})})]})})})})]})})})})]})}function P(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(w,{...e})}):w(e)}}}]);