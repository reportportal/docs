"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6517],{43880:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>T,default:()=>m,frontMatter:()=>x,metadata:()=>i,toc:()=>f});const i=JSON.parse('{"id":"api/service-api/get-allowable-issue-types-1","title":"Get list of existed issue types in bts","description":"Get list of existed issue types in bts","source":"@site/docs/api/service-api/get-allowable-issue-types-1.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/get-allowable-issue-types-1","permalink":"/docs/api/service-api/get-allowable-issue-types-1","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-allowable-issue-types-1","title":"Get list of existed issue types in bts","description":"Get list of existed issue types in bts","sidebar_label":"Get list of existed issue types in bts","hide_title":true,"hide_table_of_contents":true,"api":"eJyNVE1v2zAM/SsCTy2gxG2x7eDTgqHrsg1bsXbYIQgKxWYSrbakinTawPB/H6g4btoM2HKxIvHj8fGRLbBZEeQzWDSrEUdT3Fu3GtGWGOtR4R1HX1UYYa7BB4yGrXfTEnJYIU+qyj+aRYVTogZvtwHp7hw0BBNNjYxRArfgTI2Qg3WMqyGABusgh2B4DRoiPjQ2Ygk5xwY1ULHG2kDeAm/D4IwRNCx9rA3vrt69ga6bizsF7whJPC7OzuRTIhXRBkkHOXz/AhqkHHQsryaEyhYJTPabxKQ9TmpiNFtByljTwT1xtG4FXfrpV5mukFVliZVfKnyyxFgqK/wo8SZlnVowgYYaee17JhNpvIYcss15tmDK2hd0dVkKcZdCgAbCuNnT28QKcmgTeuzyLGvXnrjLTLDwGtwPDD7ytY9sKjW5nqpdINCwMdFKK2lgAuWErqlFHWvmADp9SLRQ4tI0lbQhvXQaJOkx7588sRIBKONKJcnViV0qh1hieSoc7SCpHtOA5zlBibUfx2QVktHYeuF+LjQUTbS8TTws0ESMk0ZonM0Pn29SOamyQ6Ohn31x+6p7I9D94eNecZ9/3YI03LqlT+6WK3zF6r8pL33R1Og4tbZXpSkSd/2k3DRBfEAD1sZKd2l38/6IBg2VLdARHrhPginWqC7GZ6B7dUiFeZY9Pj6OTXod+7jKelfKvk4/XH67uRyJS6dBpLUD/3Z83t8FT1wbd5Dmv4X+go+BdMYnzkJlrJPwCWbbD8EMNrJGdt750d44mIT5XnczaNuFIfwZq66T64cGo+hi/iztpJLSkpxLyJemIjxCN+wIOPnRL6VTBfrvqPd7wm3TBFWN/AMN97g9WnjdXIYETYkxAdnZTIoCAx94Hy0mEfKwKq4uRYF/ALTo904=","sidebar_class_name":"get api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Get ticket from the bts integration","permalink":"/docs/api/service-api/get-ticket"},"next":{"title":"Get list of fields required for posting ticket","permalink":"/docs/api/service-api/get-set-of-integration-system-fields-1"}}');var n=s(74848),a=s(28453),r=s(57742),o=s.n(r),p=s(78178),d=s.n(p),l=s(19624),c=s.n(l),u=s(96226),g=s.n(u),b=(s(77675),s(19365),s(51107));const x={id:"get-allowable-issue-types-1",title:"Get list of existed issue types in bts",description:"Get list of existed issue types in bts",sidebar_label:"Get list of existed issue types in bts",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVE1v2zAM/SsCTy2gxG2x7eDTgqHrsg1bsXbYIQgKxWYSrbakinTawPB/H6g4btoM2HKxIvHj8fGRLbBZEeQzWDSrEUdT3Fu3GtGWGOtR4R1HX1UYYa7BB4yGrXfTEnJYIU+qyj+aRYVTogZvtwHp7hw0BBNNjYxRArfgTI2Qg3WMqyGABusgh2B4DRoiPjQ2Ygk5xwY1ULHG2kDeAm/D4IwRNCx9rA3vrt69ga6bizsF7whJPC7OzuRTIhXRBkkHOXz/AhqkHHQsryaEyhYJTPabxKQ9TmpiNFtByljTwT1xtG4FXfrpV5mukFVliZVfKnyyxFgqK/wo8SZlnVowgYYaee17JhNpvIYcss15tmDK2hd0dVkKcZdCgAbCuNnT28QKcmgTeuzyLGvXnrjLTLDwGtwPDD7ytY9sKjW5nqpdINCwMdFKK2lgAuWErqlFHWvmADp9SLRQ4tI0lbQhvXQaJOkx7588sRIBKONKJcnViV0qh1hieSoc7SCpHtOA5zlBibUfx2QVktHYeuF+LjQUTbS8TTws0ESMk0ZonM0Pn29SOamyQ6Ohn31x+6p7I9D94eNecZ9/3YI03LqlT+6WK3zF6r8pL33R1Og4tbZXpSkSd/2k3DRBfEAD1sZKd2l38/6IBg2VLdARHrhPginWqC7GZ6B7dUiFeZY9Pj6OTXod+7jKelfKvk4/XH67uRyJS6dBpLUD/3Z83t8FT1wbd5Dmv4X+go+BdMYnzkJlrJPwCWbbD8EMNrJGdt750d44mIT5XnczaNuFIfwZq66T64cGo+hi/iztpJLSkpxLyJemIjxCN+wIOPnRL6VTBfrvqPd7wm3TBFWN/AMN97g9WnjdXIYETYkxAdnZTIoCAx94Hy0mEfKwKq4uRYF/ALTo904=",sidebar_class_name:"get api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},T=void 0,y={},f=[];function h(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get list of existed issue types in bts"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/v1/bts/{integrationId}/issue_types",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Get list of existed issue types in bts"}),"\n",(0,n.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(d(),{parameters:[{name:"integrationId",in:"path",required:!0,schema:{type:"integer",format:"int64"}}]}),"\n",(0,n.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,n.jsx)(g(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"array",items:{type:"string"}}}}}}})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);