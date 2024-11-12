"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41414],{6285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>j,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>s,toc:()=>b});const s=JSON.parse('{"id":"api/service-api/versions/5.10/update-test-item-using-put","title":"Update test item","description":"Update test item","source":"@site/docs/api/service-api/versions/5.10/update-test-item-using-put.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/update-test-item-using-put","permalink":"/docs/api/service-api/versions/5.10/update-test-item-using-put","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"update-test-item-using-put","title":"Update test item","description":"Update test item","sidebar_label":"Update test item","hide_title":true,"hide_table_of_contents":true,"api":"eJydVk1v2zgQ/SvCnNqCtpJi24NO9QYB1thFmzrJKfCBlsY2uxLJkKM4hqD/XgwpyfJHG6A+WdR8vnlvqAZIbjxkT0DoaaIIq0luNDlTluhgKcBYdJKU0fMCMqhtIQkf0NOcsHr0Sm/uHh9AgJVOVkjoOFgDWlYIGXC8eQEClIYMrKQtCCjQ505Zjjk2cfhcK4cFZORqFODzLVYSsgZob0MwTbhBBwLWxlWS4tHnv6BtxZDROvMDc/rKT79Le2z3Zm5PTukNtO0yGqOnv02xZ4vjuO4ZBDCCqInfSmtLlQcA0x+eTZpxdEUlh388gnXxHUSf2Ky4TAbY8SRIoQ9hiZxa1RSfOlvpnNxz14SVH4fnoLPeY4He1C7HN3P8j/sLCAh4kWWNl7Bp2xOULzh7klT7y97t6SDCgbdG+1jRx6urc8S//XuM+If0w2WQv/VMvjGVLZH/Le7fRKFC7+XmF/12LVuHuSSuei1LjwJeJ7kpcIN60pFlsjLFftJxNHDkuIlIgIRFmPD4QAC+EmqvjI6KCtP4beBhMpyAiVohbQ2r1tahL9ZBBunLddqM6N+mnDBtohDbNEocBHh0L72ea1dCBuxGJjdlm6VpI2vaGqdo36bSqrOWFmiNozvjSJZJjBVKdEquyohtHy4OdS3rkkW9JbL+LNxdbysAdV3xymJDEJ39shUwVHTOkn+Mp4RhSqQuEq4seafWiUYssHifmHUS601OCz7UVWBlpi5Y2WA0VYZZsGSo8jrmfWpghdKhm9WM9tNy/PqeORlbHxsNzOoaCtTl52jE+w14dywOi+f2VTKHT1fBwJOOowdK9KRdnuI6WPbKHIlV6bUZK2g80l/Mu8dvdjdPCpPXFWoKoutEKvMg0k4J97VlJ55pJRVTzMeTL2c4CyhVjtrjyH1mZb7F5OP0CkRHUYYwS9PdbjeV4e3UuE3aufr0v/nN7df72wm78CpD52P1n6bXV9NrPrPGUyX1KM0FcV5ec4SvlNpSKs2BQkFNJ7sneLkGAdnJ/RSjZcMl2IlvKWBrPLFb06ykx0dXti0fP9fomGbLg5TC2Avl+f9hBZ1UOCxIeLfoduz7ZEh7sf7+VtH7EY9AdAzrfPnq/aPcx0D8QQHjAC2rf4uyQDcSwU3MO3ngOIcIZ1cy9xA9ZnmOlka2fJkcrdL4tbPq7v7KFGHfyh1/RMhdrM+EzoPMw1kDpdSbOtwiEDPy7ychnkVc","sidebar_class_name":"put api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Delete test item","permalink":"/docs/api/service-api/versions/5.10/delete-test-item-using-delete"},"next":{"title":"Start a child test item","permalink":"/docs/api/service-api/versions/5.10/start-child-item-using-post-1"}}');var n=i(74848),p=i(28453),r=i(57742),a=i.n(r),d=i(78178),o=i.n(d),l=i(19624),c=i.n(l),u=i(96226),m=i.n(u),h=(i(77675),i(19365),i(51107));const f={id:"update-test-item-using-put",title:"Update test item",description:"Update test item",sidebar_label:"Update test item",hide_title:!0,hide_table_of_contents:!0,api:"eJydVk1v2zgQ/SvCnNqCtpJi24NO9QYB1thFmzrJKfCBlsY2uxLJkKM4hqD/XgwpyfJHG6A+WdR8vnlvqAZIbjxkT0DoaaIIq0luNDlTluhgKcBYdJKU0fMCMqhtIQkf0NOcsHr0Sm/uHh9AgJVOVkjoOFgDWlYIGXC8eQEClIYMrKQtCCjQ505Zjjk2cfhcK4cFZORqFODzLVYSsgZob0MwTbhBBwLWxlWS4tHnv6BtxZDROvMDc/rKT79Le2z3Zm5PTukNtO0yGqOnv02xZ4vjuO4ZBDCCqInfSmtLlQcA0x+eTZpxdEUlh388gnXxHUSf2Ky4TAbY8SRIoQ9hiZxa1RSfOlvpnNxz14SVH4fnoLPeY4He1C7HN3P8j/sLCAh4kWWNl7Bp2xOULzh7klT7y97t6SDCgbdG+1jRx6urc8S//XuM+If0w2WQv/VMvjGVLZH/Le7fRKFC7+XmF/12LVuHuSSuei1LjwJeJ7kpcIN60pFlsjLFftJxNHDkuIlIgIRFmPD4QAC+EmqvjI6KCtP4beBhMpyAiVohbQ2r1tahL9ZBBunLddqM6N+mnDBtohDbNEocBHh0L72ea1dCBuxGJjdlm6VpI2vaGqdo36bSqrOWFmiNozvjSJZJjBVKdEquyohtHy4OdS3rkkW9JbL+LNxdbysAdV3xymJDEJ39shUwVHTOkn+Mp4RhSqQuEq4seafWiUYssHifmHUS601OCz7UVWBlpi5Y2WA0VYZZsGSo8jrmfWpghdKhm9WM9tNy/PqeORlbHxsNzOoaCtTl52jE+w14dywOi+f2VTKHT1fBwJOOowdK9KRdnuI6WPbKHIlV6bUZK2g80l/Mu8dvdjdPCpPXFWoKoutEKvMg0k4J97VlJ55pJRVTzMeTL2c4CyhVjtrjyH1mZb7F5OP0CkRHUYYwS9PdbjeV4e3UuE3aufr0v/nN7df72wm78CpD52P1n6bXV9NrPrPGUyX1KM0FcV5ec4SvlNpSKs2BQkFNJ7sneLkGAdnJ/RSjZcMl2IlvKWBrPLFb06ykx0dXti0fP9fomGbLg5TC2Avl+f9hBZ1UOCxIeLfoduz7ZEh7sf7+VtH7EY9AdAzrfPnq/aPcx0D8QQHjAC2rf4uyQDcSwU3MO3ngOIcIZ1cy9xA9ZnmOlka2fJkcrdL4tbPq7v7KFGHfyh1/RMhdrM+EzoPMw1kDpdSbOtwiEDPy7ychnkVc",sidebar_class_name:"put api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},v=void 0,j={},b=[];function y(e){const t={p:"p",...(0,p.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Update test item"}),"\n",(0,n.jsx)(a(),{method:"put",path:"/v1/{projectName}/item/{itemId}/update",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Update test item"}),"\n",(0,n.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(o(),{parameters:[{name:"itemId",in:"path",description:"itemId",required:!0,schema:{type:"integer",format:"int64"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(c(),{title:"Body",body:{description:"rq",content:{"application/json":{schema:{title:"UpdateTestItemRQ",type:"object",properties:{attributes:{type:"array",items:{title:"ItemAttributeResource",type:"object",properties:{key:{type:"string"},value:{type:"string"}}}},description:{type:"string"},status:{type:"string"}}}}},required:!0}}),"\n",(0,n.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"OperationCompletionRS",type:"object",properties:{message:{type:"string"}}}}}}}})]})}function O(e={}){const{wrapper:t}={...(0,p.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}}}]);