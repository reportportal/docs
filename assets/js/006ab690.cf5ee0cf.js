"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50659],{77238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>f,frontMatter:()=>g,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"api/service-api/create-log","title":"Create Log","description":"Create log (batching operation)","source":"@site/docs/api/service-api/create-log.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/create-log","permalink":"/docs/api/service-api/create-log","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"create-log","title":"Create Log","description":"Create log (batching operation)","sidebar_label":"Create Log","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVt9P4zgQ/leseQLJbVike8nTsRyr5W61cBR0D6haTZNp68Wxs/akvarK/34aJ6WBFri+xHHm5zffzHQLjIsI+SNYvxhh3LhiVHjHwVtLAaYaSopFMDUb7yCHy0DIpKxfqJMZcrE0bqF8TQFF4BQ0PL9cl5BDkeS/+QVoqDFgRUxB/G3BYUWQQx38Tyr4u7xpMOKkRl6ChkC/GhOohJxDQxpisaQKId8Cb2pRjRyMW0DbTjthivzZlxuRkBzIsRyrxrKpMXA296EalcjJxt7a3s8j/Ize/eht/RAlgaB352cSqCQSJEk2FEX9UGUfIYaAG0mLqYqvfVlsXLF8aEwJGthU9LEvsZMUDkB4XaiHh+s/lJ8rpshK1JRfOyoVL02U8kGroTlqqdXDyI59TrEeiUDwRYYcSmQaJalWQ0Ux4uKIgjiiFdljpsg1lWBEIfig1RqD08q4udeqpFmz0IoDFqTVHBmtVo17cn7tYNpqmBs79PYGlB39Drkk6bEYgC9iZ3gxwZVQ+e5vaLuf0C7W3sXO5PnZmTxeFuLmL9BDOmJdW1OkDsmEOi+5+H7ML7y9RbEPGHS8pO8VKTIWT/cC9/t4fZZ5cGWpIsfdnCjvJtAeiAiMN92UcItOok0h8NLLzKh9THHLFMghW51n28GQaDObpkmksNqNkiZYyGGbYKQ2z7Lt0kduM6zNQWPcUe0D3/rAaNXF7bXqDIGGFQaDM9vh1NmS046KS+YadHrEbjDOsbFC9/Sl1SBODwnw1UdWwjaFrlTiXJ2YuXJEJZWn0qNdSKqP6TmevYOSKj8OSapOQmPjBbapwFA0wfAm4TAjDBQuGgHucTr8PEnppMyGQs/l7JPbZd0Lge4PX3ad/ec/96nm0opJvS/sENWPIS990QhLUhf07YEF79sSJk0tOjIJKjRS3djd/H4AgwZrCnKRBuoXNRZLUufjM9A9OyTDPMvW6/UY09exD4usV43Zt+vLq++Tq5GotBqEWl3wv40/9XfCywrdwE2/Dbv19iLnwQb6HzuzLwLTv5zVFo1L0zmkydi1wSOszkFD/nJbSidMd7x7hO12hpEegm1buf7VUBBeTPfUTiwpTZRzCfkcbaR3Ij+569fVqXoryt0UcpvUQbaRN9DwRJtXy72V2bwkLCmkMDqJy87Z6F7s7C0cW9qt3ildFAXVPBA/GKrC/eeBcnszuRcq9/8NKl+KjhhOdvX+KF3Ttv8BwikgWQ==","sidebar_class_name":"post api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"log-async-controller","permalink":"/docs/api/service-api/log-async-controller"},"next":{"title":"Create Log Entry","permalink":"/docs/api/service-api/create-log-entry"}}');var r=a(74848),s=a(28453),p=a(57742),o=a.n(p),n=a(78178),c=a.n(n),l=a(19624),d=a.n(l),m=a(96226),h=a.n(m),u=(a(77675),a(19365),a(51107));const g={id:"create-log",title:"Create Log",description:"Create log (batching operation)",sidebar_label:"Create Log",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVt9P4zgQ/leseQLJbVike8nTsRyr5W61cBR0D6haTZNp68Wxs/akvarK/34aJ6WBFri+xHHm5zffzHQLjIsI+SNYvxhh3LhiVHjHwVtLAaYaSopFMDUb7yCHy0DIpKxfqJMZcrE0bqF8TQFF4BQ0PL9cl5BDkeS/+QVoqDFgRUxB/G3BYUWQQx38Tyr4u7xpMOKkRl6ChkC/GhOohJxDQxpisaQKId8Cb2pRjRyMW0DbTjthivzZlxuRkBzIsRyrxrKpMXA296EalcjJxt7a3s8j/Ize/eht/RAlgaB352cSqCQSJEk2FEX9UGUfIYaAG0mLqYqvfVlsXLF8aEwJGthU9LEvsZMUDkB4XaiHh+s/lJ8rpshK1JRfOyoVL02U8kGroTlqqdXDyI59TrEeiUDwRYYcSmQaJalWQ0Ux4uKIgjiiFdljpsg1lWBEIfig1RqD08q4udeqpFmz0IoDFqTVHBmtVo17cn7tYNpqmBs79PYGlB39Drkk6bEYgC9iZ3gxwZVQ+e5vaLuf0C7W3sXO5PnZmTxeFuLmL9BDOmJdW1OkDsmEOi+5+H7ML7y9RbEPGHS8pO8VKTIWT/cC9/t4fZZ5cGWpIsfdnCjvJtAeiAiMN92UcItOok0h8NLLzKh9THHLFMghW51n28GQaDObpkmksNqNkiZYyGGbYKQ2z7Lt0kduM6zNQWPcUe0D3/rAaNXF7bXqDIGGFQaDM9vh1NmS046KS+YadHrEbjDOsbFC9/Sl1SBODwnw1UdWwjaFrlTiXJ2YuXJEJZWn0qNdSKqP6TmevYOSKj8OSapOQmPjBbapwFA0wfAm4TAjDBQuGgHucTr8PEnppMyGQs/l7JPbZd0Lge4PX3ad/ec/96nm0opJvS/sENWPIS990QhLUhf07YEF79sSJk0tOjIJKjRS3djd/H4AgwZrCnKRBuoXNRZLUufjM9A9OyTDPMvW6/UY09exD4usV43Zt+vLq++Tq5GotBqEWl3wv40/9XfCywrdwE2/Dbv19iLnwQb6HzuzLwLTv5zVFo1L0zmkydi1wSOszkFD/nJbSidMd7x7hO12hpEegm1buf7VUBBeTPfUTiwpTZRzCfkcbaR3Ij+569fVqXoryt0UcpvUQbaRN9DwRJtXy72V2bwkLCmkMDqJy87Z6F7s7C0cW9qt3ildFAXVPBA/GKrC/eeBcnszuRcq9/8NKl+KjhhOdvX+KF3Ttv8BwikgWQ==",sidebar_class_name:"post api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},b=void 0,y={},j=[];function L(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"Create Log"}),"\n",(0,r.jsx)(o(),{method:"post",path:"/v2/{projectName}/log",context:"endpoint"}),"\n",(0,r.jsx)(t.p,{children:"Create log (batching operation)"}),"\n",(0,r.jsx)(u.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsx)(c(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,r.jsx)(d(),{title:"Body",body:{content:{"multipart/form-data":{schema:{required:["json_request_part"],type:"object",properties:{json_request_part:{type:"array",items:{required:["launchUuid","time"],type:"object",properties:{itemUuid:{type:"string",description:"UUID of test item owned this log"},uuid:{type:"string"},launchUuid:{type:"string"},time:{type:"string",format:"date-time"},message:{type:"string"},level:{type:"string",enum:["error, warn, info, debug, trace, fatal, unknown"]},file:{type:"object",properties:{name:{type:"string"}},title:"File"}},title:"SaveLogRQ"}}}}}}}}),"\n",(0,r.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{responses:{type:"array",items:{type:"object",properties:{id:{type:"string"},message:{type:"string"},stackTrace:{type:"string"}},title:"BatchElementCreatedRS"}}},title:"BatchSaveOperatingRS"}}}}}})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(L,{...e})}):L(e)}}}]);