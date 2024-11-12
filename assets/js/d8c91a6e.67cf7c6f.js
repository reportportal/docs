"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41678],{94057:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>v,contentTitle:()=>m,default:()=>h,frontMatter:()=>y,metadata:()=>i,toc:()=>U});const i=JSON.parse('{"id":"api/service-api/versions/5.10/get-users-api-keys-using-get","title":"Get List of users Api Keys","description":"Get List of users Api Keys","source":"@site/docs/api/service-api/versions/5.10/get-users-api-keys-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-users-api-keys-using-get","permalink":"/docs/api/service-api/versions/5.10/get-users-api-keys-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-users-api-keys-using-get","title":"Get List of users Api Keys","description":"Get List of users Api Keys","sidebar_label":"Get List of users Api Keys","hide_title":true,"hide_table_of_contents":true,"api":"eJyVVU1v2zgQ/SvCXPoB2kqK3R50WqMImqDtbpA0lxpGwEhji61EssNRUkHQfy+GlB2lbne7vsgi5+PNmzejAVjvAhRr6ALSonSWyTUNEmwUOI+k2Th7UUEBO+SbgBRW3rzDPtwEY3dvzz6CAq9Jt8hIEmgAq1uEIga8qECBsVCA11yDggpDScZL0LkJ4dfOEFZQMHWoIJQ1thqKAbj3EsxYxh0SKNg6ajWno9d/wDhuxD14ZwMG8Xh1ciKPp5n+eQcKpDq0LLcv85fymOUx3Eiiqbqr6yeo1mAY2yCkTIDc3WcsWYonoYlNSp7MHnFrIt0LB4fzJ3mO0wgbkUAV2bk11X8n1d7cfsF+ljYwGbuDUUFJqBmrW83H1wrwm259xNP3fb/48GFRVc8+Pjs/L9q2COGTRDDVb/VBQaMD33bhfyUTv6SXn2DfE/BbMtj/RGOesJSqodjqJuCPsnuLnL03gTO3zSRHyFbeZNJ2UNAi127Se9Q211BAfn+ai2k+JM2OufZm8SW5BKT7vfg7aqCAwZNjV7pmLPJ80B3Xjgz30etoCq7QO+JLR6ybLMUCBfeajL5rUof34ZKwt7prpPSa2YejcJd7WwVou1ZUJYagJvvNqOCA6HhSzl3gTFqSaVtlgix7braZRayweiGUJbzZj4AfcVXYuiVFKx+NlsZJhzZCVdmlvOsB7lAT0qoThteb+fW1zGUqfW500MFUUBxfeU9GIN03duvmgzZn9xfU70tZXV5klSu7Fi3HvTftDF1GPU977brz4iT0ttpIt0M6+euoZAWNKdEGnLmvvC5rzF4tT2TEo1qkmiLPHx4eljreLh3t8sk15O8v3pz9fX22EJdRgUgtof9zeXqyPJUz7wK32s7S/KvGn5BwIJXxG+e+0cbG4aOotqT/NdyfThsJFBSHvX0Ygo2C2gUWy2G40wFvqBlHOf7aIUm7N4+Sjs2vTJD/v5jR4XFZw/OraUG+yA6Jfwp5v3NtH+en6eQNFMTduP/YjKL/GnWFFHGky1VZoueZm3wgRJGHdSCfunH8Dme/cOg=","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Edit specified user","permalink":"/docs/api/service-api/versions/5.10/edit-user-using-put"},"next":{"title":"Create new Api Key for current user","permalink":"/docs/api/service-api/versions/5.10/create-api-key-using-post"}}');var r=t(74848),n=t(28453),a=t(57742),p=t.n(a),o=t(78178),d=t.n(o),u=t(19624),c=t.n(u),f=t(96226),l=t.n(f),g=(t(77675),t(19365),t(51107));const y={id:"get-users-api-keys-using-get",title:"Get List of users Api Keys",description:"Get List of users Api Keys",sidebar_label:"Get List of users Api Keys",hide_title:!0,hide_table_of_contents:!0,api:"eJyVVU1v2zgQ/SvCXPoB2kqK3R50WqMImqDtbpA0lxpGwEhji61EssNRUkHQfy+GlB2lbne7vsgi5+PNmzejAVjvAhRr6ALSonSWyTUNEmwUOI+k2Th7UUEBO+SbgBRW3rzDPtwEY3dvzz6CAq9Jt8hIEmgAq1uEIga8qECBsVCA11yDggpDScZL0LkJ4dfOEFZQMHWoIJQ1thqKAbj3EsxYxh0SKNg6ajWno9d/wDhuxD14ZwMG8Xh1ciKPp5n+eQcKpDq0LLcv85fymOUx3Eiiqbqr6yeo1mAY2yCkTIDc3WcsWYonoYlNSp7MHnFrIt0LB4fzJ3mO0wgbkUAV2bk11X8n1d7cfsF+ljYwGbuDUUFJqBmrW83H1wrwm259xNP3fb/48GFRVc8+Pjs/L9q2COGTRDDVb/VBQaMD33bhfyUTv6SXn2DfE/BbMtj/RGOesJSqodjqJuCPsnuLnL03gTO3zSRHyFbeZNJ2UNAi127Se9Q211BAfn+ai2k+JM2OufZm8SW5BKT7vfg7aqCAwZNjV7pmLPJ80B3Xjgz30etoCq7QO+JLR6ybLMUCBfeajL5rUof34ZKwt7prpPSa2YejcJd7WwVou1ZUJYagJvvNqOCA6HhSzl3gTFqSaVtlgix7braZRayweiGUJbzZj4AfcVXYuiVFKx+NlsZJhzZCVdmlvOsB7lAT0qoThteb+fW1zGUqfW500MFUUBxfeU9GIN03duvmgzZn9xfU70tZXV5klSu7Fi3HvTftDF1GPU977brz4iT0ttpIt0M6+euoZAWNKdEGnLmvvC5rzF4tT2TEo1qkmiLPHx4eljreLh3t8sk15O8v3pz9fX22EJdRgUgtof9zeXqyPJUz7wK32s7S/KvGn5BwIJXxG+e+0cbG4aOotqT/NdyfThsJFBSHvX0Ygo2C2gUWy2G40wFvqBlHOf7aIUm7N4+Sjs2vTJD/v5jR4XFZw/OraUG+yA6Jfwp5v3NtH+en6eQNFMTduP/YjKL/GnWFFHGky1VZoueZm3wgRJGHdSCfunH8Dme/cOg=",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},m=void 0,v={},U=[];function b(e){const s={p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get List of users Api Keys"}),"\n",(0,r.jsx)(p(),{method:"get",path:"/v1/user/{userId}/api-keys",context:"endpoint"}),"\n",(0,r.jsx)(s.p,{children:"Get List of users Api Keys"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(d(),{parameters:[{name:"userId",in:"path",description:"userId",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,r.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,r.jsx)(l(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"ApiKeysRS",required:["items"],type:"object",properties:{items:{type:"array",items:{title:"ApiKeyRS",required:["id","name","user_id"],type:"object",properties:{api_key:{type:"string"},created_at:{type:"string",example:"yyyy-MM-dd'T'HH:mm:ssZ"},id:{type:"integer",format:"int64"},last_used_at:{type:"string",example:"yyyy-MM-dd"},name:{type:"string"},user_id:{type:"integer",format:"int64"}}}}}}}}}}})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);