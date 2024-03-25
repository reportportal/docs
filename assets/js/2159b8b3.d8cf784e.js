"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53688],{65177:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>f,contentTitle:()=>g,default:()=>R,frontMatter:()=>v,metadata:()=>G,toc:()=>b});var r=i(85893),a=i(11151),t=i(58219),n=i.n(t),d=(i(62316),i(51039)),o=i.n(d),l=(i(82723),i(9487)),c=i.n(l),m=i(41429),p=i.n(m),u=i(5397),h=i.n(u),j=(i(4667),i(9472)),y=i.n(j),x=(i(1176),i(12005),i(85162));const v={id:"find-users-using-get",title:"Find users by term (DEPRECATED)",description:"Only for administrators",sidebar_label:"Find users by term (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVsFy4zYM/RUOTvEOIyXp9KJTPRu3zbRNM8nmlPGBlmCLrURyQchZV9UX9RN62y/rQJJj10mcdnvoxZohQbwH4AFwC2xWEbIHKDAQ5oaxOG0i0mnuHZOvKiSYaygw5mQDW+8gg59dtVFLT8oUtXU2Mhn2FEGDD0hGrK4KyGBpXXEfkeJ9tG713ewDaAiGTI2MJKgtOFMjZBDMChP5AQ1WID42SBs4BL7F2FQclViqjW/Uo3Gs2CtCJotrVCdnSXI9AQ0xL7E2kLXAmyAQ1jGukEDD0lNteDj66gK6Tv+dR7S/vcHjuqkXSMovFWHuqYgqIKmR/39B9sTHke88sXUrlZNlJGuUdYpLVIPnTAWSEvBGqxMT89/l8SRRl7g0TcVK/CtPBZKyUZmYoyusWyXqp6ZiGyocLJ6cG0IVmxA8MRaJxMabStgKHGjAT6HyBULG1OALkRsiIzFYxjrunUcm61bQ7SeAsXd5JPbRgvBjYwmLV1GfvM/FOAbvIvboF2dn8jkQ8w+gQdSOjuX2XfpOPnteLfcxXzGSWVT4+Q/R9C1G31COn/8EvQX2i18wZwmr6/ReR0G2NFVEDTVy6aUzVsh9L3AJGaTr81R6Lo1oKC8lzUjrbYc0VEEGbSDPPvdVl6VpaxouPVnedKkJ9oU2kYrdeGJTqcEXaFgbssK/T8XW3ZCPXh2QQckc4jN3N1tbDeiaWqaFGIIe7eedhidGzxP8vY+spMjKuEIJM3Vil8ohFlhMpIkGvuqQ8I5XgbVPqLcKvVFivaR5LqnKmwH3oYUFGkKaNpLWh7lcW7f0+0XcT80redvymN5cqcLnTY2O+5k26sTkvU5G2d4N7SG5qY2VUo0N880zvhoqm6OLuPd8GkxeorpIzkCPpZakZmn6+PiYmP428bRKx6cx/fHq/ez6bnYqTzoNopOB/dfJ+flwFnzk2rg9mG+tK5RoLKrFRkkjqZPL2c3t7P30w+xycpiJdtcQR4b9qHrGT5yGylgn2H0M7SjtB1ifS1yxr+co77mG0keW27ZdmIj3VHWdHA9tL4UsbBSp7jrnVXr/YiW8yPdX3Bzsn7WpGrEDGU7/nMjRnfAW9LhyvhD6f14KbwY39McXBndyO877iRoXwBG80WIHNd/NvX4kaCjRFEi9yoY30zzHsE9QNoA8fJrW8s+l6/4CamEm1g==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},g=void 0,G={id:"api/service-api/find-users-using-get",title:"Find users by term (DEPRECATED)",description:"Only for administrators",source:"@site/docs/api/service-api/find-users-using-get.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/find-users-using-get",permalink:"/docs/api/service-api/find-users-using-get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"find-users-using-get",title:"Find users by term (DEPRECATED)",description:"Only for administrators",sidebar_label:"Find users by term (DEPRECATED)",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVsFy4zYM/RUOTvEOIyXp9KJTPRu3zbRNM8nmlPGBlmCLrURyQchZV9UX9RN62y/rQJJj10mcdnvoxZohQbwH4AFwC2xWEbIHKDAQ5oaxOG0i0mnuHZOvKiSYaygw5mQDW+8gg59dtVFLT8oUtXU2Mhn2FEGDD0hGrK4KyGBpXXEfkeJ9tG713ewDaAiGTI2MJKgtOFMjZBDMChP5AQ1WID42SBs4BL7F2FQclViqjW/Uo3Gs2CtCJotrVCdnSXI9AQ0xL7E2kLXAmyAQ1jGukEDD0lNteDj66gK6Tv+dR7S/vcHjuqkXSMovFWHuqYgqIKmR/39B9sTHke88sXUrlZNlJGuUdYpLVIPnTAWSEvBGqxMT89/l8SRRl7g0TcVK/CtPBZKyUZmYoyusWyXqp6ZiGyocLJ6cG0IVmxA8MRaJxMabStgKHGjAT6HyBULG1OALkRsiIzFYxjrunUcm61bQ7SeAsXd5JPbRgvBjYwmLV1GfvM/FOAbvIvboF2dn8jkQ8w+gQdSOjuX2XfpOPnteLfcxXzGSWVT4+Q/R9C1G31COn/8EvQX2i18wZwmr6/ReR0G2NFVEDTVy6aUzVsh9L3AJGaTr81R6Lo1oKC8lzUjrbYc0VEEGbSDPPvdVl6VpaxouPVnedKkJ9oU2kYrdeGJTqcEXaFgbssK/T8XW3ZCPXh2QQckc4jN3N1tbDeiaWqaFGIIe7eedhidGzxP8vY+spMjKuEIJM3Vil8ohFlhMpIkGvuqQ8I5XgbVPqLcKvVFivaR5LqnKmwH3oYUFGkKaNpLWh7lcW7f0+0XcT80redvymN5cqcLnTY2O+5k26sTkvU5G2d4N7SG5qY2VUo0N880zvhoqm6OLuPd8GkxeorpIzkCPpZakZmn6+PiYmP428bRKx6cx/fHq/ez6bnYqTzoNopOB/dfJ+flwFnzk2rg9mG+tK5RoLKrFRkkjqZPL2c3t7P30w+xycpiJdtcQR4b9qHrGT5yGylgn2H0M7SjtB1ifS1yxr+co77mG0keW27ZdmIj3VHWdHA9tL4UsbBSp7jrnVXr/YiW8yPdX3Bzsn7WpGrEDGU7/nMjRnfAW9LhyvhD6f14KbwY39McXBndyO877iRoXwBG80WIHNd/NvX4kaCjRFEi9yoY30zzHsE9QNoA8fJrW8s+l6/4CamEm1g==",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Validate registration information (DEPRECATED)",permalink:"/docs/api/service-api/validate-info-using-get"},next:{title:"Delete specified user (DEPRECATED)",permalink:"/docs/api/service-api/delete-user-using-delete"}},f={},b=[{value:"Request",id:"request",level:2}];function E(e){const s={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"openapi__heading",children:(0,r.jsx)(s.p,{children:"Find users by term (DEPRECATED)"})}),"\n",(0,r.jsx)(o(),{method:"get",path:"/v1/user/search"}),"\n",(0,r.jsx)(s.p,{children:"Only for administrators"}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Query Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(p(),{className:"paramsItem",param:{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}}}),(0,r.jsx)(p(),{className:"paramsItem",param:{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}}}),(0,r.jsx)(p(),{className:"paramsItem",param:{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}}}),(0,r.jsx)(p(),{className:"paramsItem",param:{name:"term",in:"query",description:"term",required:!0,schema:{type:"string"}}})]})})]}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(n(),{label:void 0,id:void 0,children:(0,r.jsxs)(x.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(x.default,{label:"*/*",value:"*/*",children:(0,r.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(x.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",marginLeft:"1rem"},children:(0,r.jsx)(s.p,{children:"object"})})})]})}),(0,r.jsx)(x.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]})})})})]})}function R(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}}}]);