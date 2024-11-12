"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[34499],{86350:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>g,frontMatter:()=>j,metadata:()=>i,toc:()=>y});const i=JSON.parse('{"id":"api/service-api/versions/5.10/update-launches-using-put","title":"Updates launches for specified project","description":"Updates launches for specified project","source":"@site/docs/api/service-api/versions/5.10/update-launches-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/update-launches-using-put","permalink":"/docs/api/service-api/versions/5.10/update-launches-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-launches-using-put","title":"Updates launches for specified project","description":"Updates launches for specified project","sidebar_label":"Updates launches for specified project","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVsGS2jgQ/RVXn5KUwDOp2otPy0zY3amdSggTThQHYTegRJY0kjwzlMtflE/YW75sqyUbbCCZcAK51f26+71navB86yBbguSVynejXCtvtZRoYcVAG7TcC63uCsigMgX3eB8C0S2cUNvZ4gswMNzyEj1aylSD4iVCBsbqr5j7j/SLgVB0xP0OGBTocisMJT6Ls/hYCYsFZN5WyMDlOyw5ZDX4vaG0zluhttA0qxiMzt/oYk8Rw7z2ERhQP6g8PeXGSJGHdtKvjkLqfnbhJaW/qeS3+ecf36VWW7bodTz//OO/Ab4loPLCC3Q0qhadXlMvNBNLwwtPs/oYeezjEMmLQhAoLmeDOx2iIQh4rRT33op15QfFuLV8T1vwWA6S33ksJ92NOTpd2RxfrfEN9xc2wuCJywov7appTrZ+4XKpiwt3GaCqSpr2h+lfk8U98e3D9GbxN6ya9nNKmnDgjFYuon1/dXXOjk//DtnxLn13QohXJvep08atLo1E+jZ/eHVyJTrHtz+ZUTcnYzHnntrZcOmQwcso1wVuUY1axo/WutiPWqEFog+7i5xxiWzFmmy0TZzBXGwEFkkrORrui0flhFZRumGxvyx3WDKVJQ2W6Hea7MFUoV2SeAbp03Va95TdpBFKGk0EGDi0T51jVFZCBhTvda5lk6VpzSu/01b4fZNyI846nKPR1s+09VwmMVfAZgVfyzjrLl1c/oZX0kMGO++NO0s362KPfKNAYG38qmFwQHTOpn+08wnNJ+GqSAhZ8kZsEoVYYPE20Zsk4k1OAR9xFVjqsQ1RJgSNhSZWrGhUeRXrLmtYI7doJxWNebnqP34g7sbW+0EHprUNBYrT7xgExDnyw/nRTKcvnDh94lwUKNRG91XQX8NPdtT1PJndJYXOqxKVD8JpBcjzIMCWzA+VoUu0h5ILooWLJ3+ezYaBFDkqh73rE8PzHSbvx1fAWlpR21maPj8/j3l4OtZ2m7ZXXXp/dzv9+DAd0RWyMLQuov9jfH01vqYzo50vueqV+W19XTY9jy8+NZILRekDzLpVzhKeroFBNnwrxjrUUpTPisFOO0/hdb3mDhdWNg0dP1ZoiSiroxgCbQrh6PvRU06QHawQ3sxbN32bDEFcBN/ZpNr3rAFY6yT9BA1paIe8QNvzmttYd/SF8hwznL2sG9bdmOQ5Gt+LJeseOFH8V7Ju/xXE9wpY/kyvb/4c8enQeRBLOKtBcrWtgjdDrEif/wFWyStk","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Force finish launch","permalink":"/docs/api/service-api/versions/5.10/bulk-force-finish-using-put"},"next":{"title":"Get specified launch by UUID","permalink":"/docs/api/service-api/versions/5.10/get-launch-by-uuid-using-get"}}');var p=s(74848),n=s(28453),r=s(57742),a=s.n(r),o=s(78178),c=s.n(o),d=s(19624),u=s.n(d),l=s(96226),h=s.n(l),f=(s(77675),s(19365),s(51107));const j={id:"update-launches-using-put",title:"Updates launches for specified project",description:"Updates launches for specified project",sidebar_label:"Updates launches for specified project",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVsGS2jgQ/RVXn5KUwDOp2otPy0zY3amdSggTThQHYTegRJY0kjwzlMtflE/YW75sqyUbbCCZcAK51f26+71navB86yBbguSVynejXCtvtZRoYcVAG7TcC63uCsigMgX3eB8C0S2cUNvZ4gswMNzyEj1aylSD4iVCBsbqr5j7j/SLgVB0xP0OGBTocisMJT6Ls/hYCYsFZN5WyMDlOyw5ZDX4vaG0zluhttA0qxiMzt/oYk8Rw7z2ERhQP6g8PeXGSJGHdtKvjkLqfnbhJaW/qeS3+ecf36VWW7bodTz//OO/Ab4loPLCC3Q0qhadXlMvNBNLwwtPs/oYeezjEMmLQhAoLmeDOx2iIQh4rRT33op15QfFuLV8T1vwWA6S33ksJ92NOTpd2RxfrfEN9xc2wuCJywov7appTrZ+4XKpiwt3GaCqSpr2h+lfk8U98e3D9GbxN6ya9nNKmnDgjFYuon1/dXXOjk//DtnxLn13QohXJvep08atLo1E+jZ/eHVyJTrHtz+ZUTcnYzHnntrZcOmQwcso1wVuUY1axo/WutiPWqEFog+7i5xxiWzFmmy0TZzBXGwEFkkrORrui0flhFZRumGxvyx3WDKVJQ2W6Hea7MFUoV2SeAbp03Va95TdpBFKGk0EGDi0T51jVFZCBhTvda5lk6VpzSu/01b4fZNyI846nKPR1s+09VwmMVfAZgVfyzjrLl1c/oZX0kMGO++NO0s362KPfKNAYG38qmFwQHTOpn+08wnNJ+GqSAhZ8kZsEoVYYPE20Zsk4k1OAR9xFVjqsQ1RJgSNhSZWrGhUeRXrLmtYI7doJxWNebnqP34g7sbW+0EHprUNBYrT7xgExDnyw/nRTKcvnDh94lwUKNRG91XQX8NPdtT1PJndJYXOqxKVD8JpBcjzIMCWzA+VoUu0h5ILooWLJ3+ezYaBFDkqh73rE8PzHSbvx1fAWlpR21maPj8/j3l4OtZ2m7ZXXXp/dzv9+DAd0RWyMLQuov9jfH01vqYzo50vueqV+W19XTY9jy8+NZILRekDzLpVzhKeroFBNnwrxjrUUpTPisFOO0/hdb3mDhdWNg0dP1ZoiSiroxgCbQrh6PvRU06QHawQ3sxbN32bDEFcBN/ZpNr3rAFY6yT9BA1paIe8QNvzmttYd/SF8hwznL2sG9bdmOQ5Gt+LJeseOFH8V7Ju/xXE9wpY/kyvb/4c8enQeRBLOKtBcrWtgjdDrEif/wFWyStk",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},m=void 0,v={},y=[];function b(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Updates launches for specified project"}),"\n",(0,p.jsx)(a(),{method:"put",path:"/v1/{projectName}/launch/update",context:"endpoint"}),"\n",(0,p.jsx)(t.p,{children:"Updates launches for specified project"}),"\n",(0,p.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,p.jsx)(c(),{parameters:[{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,p.jsx)(u(),{title:"Body",body:{description:"rq",content:{"application/json":{schema:{title:"BulkRQ\xablong,UpdateLaunchRQ\xbb",required:["entities"],type:"object",properties:{entities:{type:"object",additionalProperties:{title:"UpdateLaunchRQ",type:"object",properties:{attributes:{type:"array",items:{title:"ItemAttributeResource",type:"object",properties:{key:{type:"string"},value:{type:"string"}}}},description:{type:"string"},mode:{type:"string",enum:["DEFAULT","DEBUG"]}}}}}}}},required:!0}}),"\n",(0,p.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}}})]})}function g(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(b,{...e})}):b(e)}}}]);