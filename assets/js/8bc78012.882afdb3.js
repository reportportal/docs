"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26349],{110:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>X,contentTitle:()=>k,default:()=>V,frontMatter:()=>y,metadata:()=>N,toc:()=>q});var t=i(85893),a=i(11151),n=i(58219),r=i.n(n),l=(i(62316),i(51039)),d=i.n(l),m=(i(82723),i(9487)),p=i.n(m),c=i(41429),o=i.n(c),u=i(5397),h=i.n(u),x=i(4667),j=i.n(x),f=i(9472),g=i.n(f),v=(i(1176),i(12005),i(85162));const y={id:"unlink-external-issues-using-put",title:"Unlink external issue for specified test items",description:"Unlink external issue for specified test items",sidebar_label:"Unlink external issue for specified test items",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v2zgQ/SvEnNqCtpJidw86NRsEWKNFm3Wak+sDLY1tNhLJkKM4hqD/Xgwpx7LVtLu6WB7Nx3vDN8MWSG0C5AsgDDTRhPWksIa8rSr0sJRgHXpF2ppZCTk0ptLm4eaZ0BtVzUJoMNwHbTa3919BglNe1UjoOWULRtUIOThvv2NBn/mfBG3YpGgLEkoMhdeO04/8PD422mMJOfkGJYRii7WCvAXaO04byGuzga5bJmcM9Lct9+xxmtc/ggRmhYb4q3Ku0kUklX0P7NIOs2uqOP39mOr8X5CH6nbFWJmz5xaRxhCjMdCMsJ6VYQBVea/2zJ2wHtq1IdygBwlr62tFyfTXH9B1EkgXD0j/LdFLL/g57100BGdNSBjfX1yMm/Tl42mT3mXvzvryGoK+X18OQrm2tauQ3+Z3v+1XjSGoDb5GhcmU6DwWipjOWlUBJTxPClviBs2kP/jJypb7Sa+3eN6n7NJhCuxPU2g+TrG2XgSHhV5rLAUfnUi0JLCnCdqapOQH3EP+y7ISnlTV9OVZkjXS1vLMuCbSZsXnkD1dZu1A6F3GFbOIJ0vTBRIC+qfDEDW+ghw4hmxhqy7PslY1tLVe077LlNMjtnN01tOt9aQqkXJFfF6rVZX6fkiXhLBWTcXi2xK5MEp3e/CVgKapeVuwI8jef9lJeEE0VtY/NpDgHgllSsHIxBu9FgaxxPKtsGuR8IpzwEdcJdZ26qOXi05TbVkhS25V0aS6ixZWqDz6q4ZbvVjyZ57v+XE53DwrFudoUhcXy5OBWxxkyNy0Wduh0oftfaX3By5XtzNR2qKp0VAcjn7IVBGHrBfsXeM4iPtbK83HHZLlw4izhEoXaAIOwq+cKrYo3k8vQPZy4YPJs2y3201V/Dq1fpP1oSH7NLu++Xx3M+GQTgJrLaH/c3p5mWzOBqqVGZT53zN00piX+SZ8psxVShsuE+G2/XQs4OkSJORnFwZhzT9cjgmmIVlK2NpAHNS2KxXw3lddx+bHBj3LYXmUfBRHqQO/H7fIGb6X5Qdv5v3+fCtOofyUwmExmv1gCYDsd8YwQcdq2qIq0Q+2ynWqO/nKeY4ZRrdUJw8RV0WBjga+vKxPdk66jlf9dVjbMi4mteN7Ve0gh2/wjTHayD5uhGhvoVJm08SNDKkqPz8AjTvSxQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},k=void 0,N={id:"api/service-api/unlink-external-issues-using-put",title:"Unlink external issue for specified test items",description:"Unlink external issue for specified test items",source:"@site/docs/api/service-api/unlink-external-issues-using-put.api.mdx",sourceDirName:"api/service-api",slug:"/api/service-api/unlink-external-issues-using-put",permalink:"/docs/api/service-api/unlink-external-issues-using-put",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"unlink-external-issues-using-put",title:"Unlink external issue for specified test items",description:"Unlink external issue for specified test items",sidebar_label:"Unlink external issue for specified test items",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v2zgQ/SvEnNqCtpJidw86NRsEWKNFm3Wak+sDLY1tNhLJkKM4hqD/Xgwpx7LVtLu6WB7Nx3vDN8MWSG0C5AsgDDTRhPWksIa8rSr0sJRgHXpF2ppZCTk0ptLm4eaZ0BtVzUJoMNwHbTa3919BglNe1UjoOWULRtUIOThvv2NBn/mfBG3YpGgLEkoMhdeO04/8PD422mMJOfkGJYRii7WCvAXaO04byGuzga5bJmcM9Lct9+xxmtc/ggRmhYb4q3Ku0kUklX0P7NIOs2uqOP39mOr8X5CH6nbFWJmz5xaRxhCjMdCMsJ6VYQBVea/2zJ2wHtq1IdygBwlr62tFyfTXH9B1EkgXD0j/LdFLL/g57100BGdNSBjfX1yMm/Tl42mT3mXvzvryGoK+X18OQrm2tauQ3+Z3v+1XjSGoDb5GhcmU6DwWipjOWlUBJTxPClviBs2kP/jJypb7Sa+3eN6n7NJhCuxPU2g+TrG2XgSHhV5rLAUfnUi0JLCnCdqapOQH3EP+y7ISnlTV9OVZkjXS1vLMuCbSZsXnkD1dZu1A6F3GFbOIJ0vTBRIC+qfDEDW+ghw4hmxhqy7PslY1tLVe077LlNMjtnN01tOt9aQqkXJFfF6rVZX6fkiXhLBWTcXi2xK5MEp3e/CVgKapeVuwI8jef9lJeEE0VtY/NpDgHgllSsHIxBu9FgaxxPKtsGuR8IpzwEdcJdZ26qOXi05TbVkhS25V0aS6ixZWqDz6q4ZbvVjyZ57v+XE53DwrFudoUhcXy5OBWxxkyNy0Wduh0oftfaX3By5XtzNR2qKp0VAcjn7IVBGHrBfsXeM4iPtbK83HHZLlw4izhEoXaAIOwq+cKrYo3k8vQPZy4YPJs2y3201V/Dq1fpP1oSH7NLu++Xx3M+GQTgJrLaH/c3p5mWzOBqqVGZT53zN00piX+SZ8psxVShsuE+G2/XQs4OkSJORnFwZhzT9cjgmmIVlK2NpAHNS2KxXw3lddx+bHBj3LYXmUfBRHqQO/H7fIGb6X5Qdv5v3+fCtOofyUwmExmv1gCYDsd8YwQcdq2qIq0Q+2ynWqO/nKeY4ZRrdUJw8RV0WBjga+vKxPdk66jlf9dVjbMi4mteN7Ve0gh2/wjTHayD5uhGhvoVJm08SNDKkqPz8AjTvSxQ==",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},sidebar:"serviceApi",previous:{title:"Attach external issue for specified test items",permalink:"/docs/api/service-api/link-external-issues-using-put"},next:{title:"Get test items by specified ids",permalink:"/docs/api/service-api/get-test-items-using-get"}},X={},q=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,a.a)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Unlink external issue for specified test items"})}),"\n",(0,t.jsx)(d(),{method:"put",path:"/v1/{projectName}/item/issue/unlink"}),"\n",(0,t.jsx)(s.p,{children:"Unlink external issue for specified test items"}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(o(),{className:"paramsItem",param:{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(p(),{className:"openapi-tabs__mime",children:(0,t.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,t.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,t.jsx)(s.p,{children:"rq"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!1,name:"testItemIds",required:!1,schemaName:"int64[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int64"}}}),(0,t.jsx)(j(),{collapsible:!1,name:"ticketIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(r(),{label:void 0,id:void 0,children:(0,t.jsxs)(v.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(v.default,{label:"*/*",value:"*/*",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(s.p,{children:"Array ["})})}),(0,t.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(s.p,{children:"]"})})})]})]})}),(0,t.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(h(),{responseExample:'[\n  {\n    "message": "string"\n  }\n]',language:"json"})})]})})})})]})})})})]})}function V(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);