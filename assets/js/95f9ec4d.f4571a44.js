"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26134],{54266:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>y,contentTitle:()=>h,default:()=>E,frontMatter:()=>m,metadata:()=>t,toc:()=>f});const t=JSON.parse('{"id":"api/service-api/versions/5.10/find-users-using-get","title":"findUsers","description":"findUsers","source":"@site/docs/api/service-api/versions/5.10/find-users-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/find-users-using-get","permalink":"/docs/api/service-api/versions/5.10/find-users-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"find-users-using-get","title":"findUsers","description":"findUsers","sidebar_label":"findUsers","hide_title":true,"hide_table_of_contents":true,"api":"eJzFVs1y4zYMfhUOTskOV0rS6UWnZtpMm2mbZpLmlPGBpmCLrURyQchZV9UT7SP0tk/WgSQ7yn+7PfRij0kQ+D7gA+AO2KwTFLfQJqT3NnimUNdIsNAQIpJhF/x5CQWsnC9vElK6Sc6vvz/7FTREQ6ZBRhIXHXjTIBQQzRoz+QANzkMBH1qkLWgoMVlyUVxCAVeY2pqTEku1Da26M54VB0XI5HCD6uAoyy4OQUOyFTYGig54GyWE84xrJNCwCtQYHo++OoG+1w9xJPfHGzgu2maJpMJKEdpAZVIRSU34/0vkQPx65OtA7PxaWXKM5IxyXnGFavRcqEhSAt5qdWCS/VMeH2bqO1yZtmYl/lWgEkm5pEyy6Evn15n6ua3ZxRpHi71zQ6hSG2MgxjITbrytBa2EAw34MdahRCiYWnyGuSEywsExNml2npicX0M/TwDj4PIV7pMF4YfWEZYvRt17X4hxisEnHKKfHB3J10Ovv/wIGkTF6Flu3+Xv5Gvm1fHA+ZyRzLLGz59E01eYQksWP/8Fehc4LH9Dy0Kr7wV8JLSGBenK1Akf89m3B2hokKsgPbNGHrqEKygg3xzn0mV5QkO2kgIgbXa901INBXSRAgcb6r7I8860XAVyvO1zE90zDSS1vAzEplajL9CwMeSE2ZCknbsxU4NuoICKOaYn7i53thrQt40MBTEEPdkveg17RE9T/0NIrKT8yvhSCTJ14FbKI5ZYHkp7jXjVY8D3uEpsQkaDVRyMMhekAAtJlW3HuLcdLNEQ0mkrab1dzK+vpdAj9bnRXk0ToUEP8ns0kt4F51dhrpB5dl9I/Y7K6eW5KoNtG/Q8DMxJhMYOIpx64nrsPUlvY5xUe+rGb55Q1lA7iz7h7PlpNLZCdZIdgZ7UImyKPL+7u8vMcJsFWufT05T/dP7t2cX12Xt50msQqY3ov86Oj7JjOYshcWP8LMxcxw8473PI+JHzWBvnxcOApJs0fgubY0GXhsJOOl9oqEJiue26pUl4Q3Xfy/E4GaSipUui2Reaq7tv6X+zNZ7F+ztuH62ojalbsQOZX/8cyKtr463Q01b6wtD/8954k9yo8i8kd3A1rYRDNe2IV+JNFvehFvcDcJgNGio0JdKgsvHNqbUY5wBlScjD/diWPzd9/zdBbCFm","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"validateInfo","permalink":"/docs/api/service-api/versions/5.10/validate-info-using-get"},"next":{"title":"Delete specified user","permalink":"/docs/api/service-api/versions/5.10/delete-user-using-delete"}}');var r=i(74848),n=i(28453),a=i(57742),p=i.n(a),d=i(78178),o=i.n(d),c=i(19624),l=i.n(c),u=i(96226),v=i.n(u),g=(i(77675),i(19365),i(51107));const m={id:"find-users-using-get",title:"findUsers",description:"findUsers",sidebar_label:"findUsers",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVs1y4zYMfhUOTskOV0rS6UWnZtpMm2mbZpLmlPGBpmCLrURyQchZV9UT7SP0tk/WgSQ7yn+7PfRij0kQ+D7gA+AO2KwTFLfQJqT3NnimUNdIsNAQIpJhF/x5CQWsnC9vElK6Sc6vvz/7FTREQ6ZBRhIXHXjTIBQQzRoz+QANzkMBH1qkLWgoMVlyUVxCAVeY2pqTEku1Da26M54VB0XI5HCD6uAoyy4OQUOyFTYGig54GyWE84xrJNCwCtQYHo++OoG+1w9xJPfHGzgu2maJpMJKEdpAZVIRSU34/0vkQPx65OtA7PxaWXKM5IxyXnGFavRcqEhSAt5qdWCS/VMeH2bqO1yZtmYl/lWgEkm5pEyy6Evn15n6ua3ZxRpHi71zQ6hSG2MgxjITbrytBa2EAw34MdahRCiYWnyGuSEywsExNml2npicX0M/TwDj4PIV7pMF4YfWEZYvRt17X4hxisEnHKKfHB3J10Ovv/wIGkTF6Flu3+Xv5Gvm1fHA+ZyRzLLGz59E01eYQksWP/8Fehc4LH9Dy0Kr7wV8JLSGBenK1Akf89m3B2hokKsgPbNGHrqEKygg3xzn0mV5QkO2kgIgbXa901INBXSRAgcb6r7I8860XAVyvO1zE90zDSS1vAzEplajL9CwMeSE2ZCknbsxU4NuoICKOaYn7i53thrQt40MBTEEPdkveg17RE9T/0NIrKT8yvhSCTJ14FbKI5ZYHkp7jXjVY8D3uEpsQkaDVRyMMhekAAtJlW3HuLcdLNEQ0mkrab1dzK+vpdAj9bnRXk0ToUEP8ns0kt4F51dhrpB5dl9I/Y7K6eW5KoNtG/Q8DMxJhMYOIpx64nrsPUlvY5xUe+rGb55Q1lA7iz7h7PlpNLZCdZIdgZ7UImyKPL+7u8vMcJsFWufT05T/dP7t2cX12Xt50msQqY3ov86Oj7JjOYshcWP8LMxcxw8473PI+JHzWBvnxcOApJs0fgubY0GXhsJOOl9oqEJiue26pUl4Q3Xfy/E4GaSipUui2Reaq7tv6X+zNZ7F+ztuH62ojalbsQOZX/8cyKtr463Q01b6wtD/8954k9yo8i8kd3A1rYRDNe2IV+JNFvehFvcDcJgNGio0JdKgsvHNqbUY5wBlScjD/diWPzd9/zdBbCFm",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},h=void 0,y={},f=[];function k(e){const s={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"findUsers"}),"\n",(0,r.jsx)(p(),{method:"get",path:"/v1/user/search",context:"endpoint"}),"\n",(0,r.jsx)(s.p,{children:"findUsers"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(o(),{parameters:[{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}},{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}},{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}},{name:"term",in:"query",description:"term",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(l(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(v(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"Iterable\xabUserResource\xbb",type:"object"}}}}}})]})}function E(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(k,{...e})}):k(e)}}}]);