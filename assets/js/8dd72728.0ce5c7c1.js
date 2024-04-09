"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42611],{61501:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>w,contentTitle:()=>f,default:()=>Y,frontMatter:()=>y,metadata:()=>N,toc:()=>_});var i=a(85893),d=a(11151),r=a(58219),t=a.n(r),n=(a(62316),a(51039)),l=a.n(n),c=(a(82723),a(9487)),o=a.n(c),m=a(41429),p=a.n(m),h=a(5397),x=a.n(h),j=a(4667),u=a.n(j),g=a(9472),b=a.n(g),v=(a(1176),a(12005),a(85162));const y={id:"add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",sidebar_label:"Add widget to specified dashboard",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v4zYQ/SvCnHYXtOWkHwed6gYBGrTdGPYG3YXXB1ocW9xKIkNScVxB/70YStaHlcbp+mRRjzNvhm+eWILjewvRGgS3yVZxIyaxyp1RaYoGNgyURsOdVPmdgAi4EH9JsUf3YGW+Xzx8AgaaG56hQ0NxSsh5hhB18e4EMJA5RKC5S4CBQBsbqSnmCGfwsZAGBUTOFMjAxglmHKIS3FFTWJk73KMBBjtlMu7qpZ9/hKpibW5t1DeM3Ud6ei33EHcxt3VG5nuoqk0NRut+VeJIiGHctkvLR2BA/cTcEYxrncrYtzP8Zglb9tNIl1Ke+WB7k1xtiSq129CROInWRzxh+wHqlXu/408lML0Y5uB30BG/odOsgfu+jdtzen3v22F7iJeTV+2OhbKybmFXS7t2qQTdAD9frOGHayJ5wn95E74juZL/YJ+gf75ELkG5T9wbmR2kcMn/ZPXJQ8dS9b9zbfsFq1Vua3bXs9lYxPe/D7X7IfzwslzvTw5xozKdIv1bri52JENr+f41zgK1wZg7Yr3jqUUGz5NYCdxjPmnmb7JV4jhpxn44dsNq5kIEdacCpwKrMZY7iSJo7QcY4LPD3NaaXZfwNx4hejUlgyeeFuepyR4ydIkiw9SFL53cJ4Lw6Sose6ZThW36sOwZYRVyQYQsmqeTrRYmhQhot1OxSqsoDEteuEQZ6Y5VyLUc1bxErYxbKON4GtSxPGUj+TZthqYJVx//jhcpqStxTttRuMUJywDzIqOPBgGBNfhNxaBlNNbTb8q6gNoW8FwExCx4J3dBjihQvA/ULqj5BueEO14CMzU1HqU9aCoV6WVDrYqLOu+6hC1yg2ZeUNPXm/7rFam3Lr0PajXYFORFTs81iD4uQH697Fz/9pmT2kce3DnpbOiTJ32P7fFF/+vZ2WxgVrORE53MZdZax+zMF7rZos/hTvXHt6+S/5DQ6Ujmi7tAqLjIMHe8MWVyCB770psxXBWaNpFMMi5JtbZe+WV0dAxSGWNusbd9rnmcYHA9nQFrVE+nEoXh4XCYcv92qsw+bLba8I+7m9uPq9sJbakY0MjU7H+aXs2mV43Zu4zn/TRvMIRBL1qNOHx2oU65zCmyZ1g2E76GpytgEA0vFv2Q0fC+Q3O+YZAo62h3WW65xQeTVhUtPxZoSNGbbmq9voW09L/zxTOirWvDu2Vj/O+DYeIXa2kWeX7sWRuwxgn7Aeiy9V0shp35Dhb9ABVZToJcoOk59k2dd+Kl37Po87sX1VDvmMcxatfD0rduYOP1TXfb3PYyJQhl+IGujfwAEXyFr8RRdXcev15CyvN94T90UGel378zgfPv",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},f=void 0,N={id:"api/service-api/versions/5.10/add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",source:"@site/docs/api/service-api/versions/5.10/add-widget-using-put.api.mdx",sourceDirName:"api/service-api/versions/5.10",slug:"/api/service-api/versions/5.10/add-widget-using-put",permalink:"/docs/api/service-api/versions/5.10/add-widget-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-widget-using-put",title:"Add widget to specified dashboard",description:"Add widget to specified dashboard",sidebar_label:"Add widget to specified dashboard",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v4zYQ/SvCnHYXtOWkHwed6gYBGrTdGPYG3YXXB1ocW9xKIkNScVxB/70YStaHlcbp+mRRjzNvhm+eWILjewvRGgS3yVZxIyaxyp1RaYoGNgyURsOdVPmdgAi4EH9JsUf3YGW+Xzx8AgaaG56hQ0NxSsh5hhB18e4EMJA5RKC5S4CBQBsbqSnmCGfwsZAGBUTOFMjAxglmHKIS3FFTWJk73KMBBjtlMu7qpZ9/hKpibW5t1DeM3Ud6ei33EHcxt3VG5nuoqk0NRut+VeJIiGHctkvLR2BA/cTcEYxrncrYtzP8Zglb9tNIl1Ke+WB7k1xtiSq129CROInWRzxh+wHqlXu/408lML0Y5uB30BG/odOsgfu+jdtzen3v22F7iJeTV+2OhbKybmFXS7t2qQTdAD9frOGHayJ5wn95E74juZL/YJ+gf75ELkG5T9wbmR2kcMn/ZPXJQ8dS9b9zbfsFq1Vua3bXs9lYxPe/D7X7IfzwslzvTw5xozKdIv1bri52JENr+f41zgK1wZg7Yr3jqUUGz5NYCdxjPmnmb7JV4jhpxn44dsNq5kIEdacCpwKrMZY7iSJo7QcY4LPD3NaaXZfwNx4hejUlgyeeFuepyR4ydIkiw9SFL53cJ4Lw6Sose6ZThW36sOwZYRVyQYQsmqeTrRYmhQhot1OxSqsoDEteuEQZ6Y5VyLUc1bxErYxbKON4GtSxPGUj+TZthqYJVx//jhcpqStxTttRuMUJywDzIqOPBgGBNfhNxaBlNNbTb8q6gNoW8FwExCx4J3dBjihQvA/ULqj5BueEO14CMzU1HqU9aCoV6WVDrYqLOu+6hC1yg2ZeUNPXm/7rFam3Lr0PajXYFORFTs81iD4uQH697Fz/9pmT2kce3DnpbOiTJ32P7fFF/+vZ2WxgVrORE53MZdZax+zMF7rZos/hTvXHt6+S/5DQ6Ujmi7tAqLjIMHe8MWVyCB770psxXBWaNpFMMi5JtbZe+WV0dAxSGWNusbd9rnmcYHA9nQFrVE+nEoXh4XCYcv92qsw+bLba8I+7m9uPq9sJbakY0MjU7H+aXs2mV43Zu4zn/TRvMIRBL1qNOHx2oU65zCmyZ1g2E76GpytgEA0vFv2Q0fC+Q3O+YZAo62h3WW65xQeTVhUtPxZoSNGbbmq9voW09L/zxTOirWvDu2Vj/O+DYeIXa2kWeX7sWRuwxgn7Aeiy9V0shp35Dhb9ABVZToJcoOk59k2dd+Kl37Po87sX1VDvmMcxatfD0rduYOP1TXfb3PYyJQhl+IGujfwAEXyFr8RRdXcev15CyvN94T90UGel378zgfPv",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},sidebar:"service-api-5.10",previous:{title:"Delete specified dashboard by ID for specified project",permalink:"/docs/api/service-api/versions/5.10/delete-dashboard-using-delete"},next:{title:"Remove widget from specified dashboard",permalink:"/docs/api/service-api/versions/5.10/remove-widget-using-delete"}},w={},_=[{value:"Request",id:"request",level:2}];function q(e){const s={h2:"h2",p:"p",...(0,d.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Add widget to specified dashboard"})}),"\n",(0,i.jsx)(l(),{method:"put",path:"/v1/{projectName}/dashboard/{dashboardId}/add"}),"\n",(0,i.jsx)(s.p,{children:"Add widget to specified dashboard"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"dashboardId",in:"path",description:"dashboardId",required:!0,schema:{type:"integer",format:"int64"}}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"addWidgetRq"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"addWidget"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"widgetId",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"}}),(0,i.jsx)(u(),{collapsible:!1,name:"widgetName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetOptions"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"}})]})}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetPosition"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"positionX",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(u(),{collapsible:!1,name:"positionY",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}})]})]})}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"widgetSize"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"height",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}}),(0,i.jsx)(u(),{collapsible:!1,name:"width",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"}})]})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"widgetType",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(t(),{label:void 0,id:void 0,children:(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,i.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "message": "string"\n}',language:"json"})})]})})})})]})})})})]})}function Y(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);