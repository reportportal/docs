"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61847],{55592:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>g,default:()=>S,frontMatter:()=>v,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"api/service-api/versions/5.11/search-project-names-using-get","title":"searchProjectNames","description":"searchProjectNames","source":"@site/docs/api/service-api/versions/5.11/search-project-names-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/search-project-names-using-get","permalink":"/docs/api/service-api/versions/5.11/search-project-names-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"search-project-names-using-get","title":"searchProjectNames","description":"searchProjectNames","sidebar_label":"searchProjectNames","hide_title":true,"hide_table_of_contents":true,"api":"eJx1VE1v2zAM/SsGT22hxk2BXXxaUBRbsKEL2vUU5KDITKzNllSKThcY/kX7Cbv1lw20nY82rS8GJPLp8fGRDbBeR8jmEMj/QsOXxjsmX5ZIsFDgA5Jm6900hwwiajLFrI+80xXGx2jd+svtT1AQNOkKGUngGnC6QsiAkSpQYB1k8FQjbUFBjtGQDQJ7iCB8qi1hDhlTjQqiKbDSkDXA2yBIkcm6NbTtQoJj8C5ilPvrqyv5vUb98Q0USC3oWG4v0gv5HaFaLgV2ykh6WeLL3/6Bl3+gdk/6pRQKrXxCOxAazcJxpcuIbys5lQcUVMiFF/HWyJ1KXEAG6WacDoqnolRM+2RQEJE2OxFrKiGDJpBnb3zZZmna6JoLT5a3baqDPZHzHoMnnnliXSY9FijYaLJSZSfYDq5XbaXrkiGDgjnEE7jZLlYBuroSp0ggqCF+0SrYMzptw1cfOZECE+3yRJglZ3aVOMQc8/PEr5Keb/KW8IFXjpUfURcVuqCR9dKShUhl6v7deQNL1IQ0qUXf+UKurVv541YfS/OBbjsek9k0yb2pK3Tc+X9wkzadmwZzP9RBkkSbSltpVexPPp/wVVBagy7iUfokaFNgcj26AjW0WkTN0vT5+Xmku9uRp3U6pMb0+/Tm9u7h9lJSWgXik579p9F43J8FH7nS7uiZd235qvj9jDH+4TSU2jqB6ig1g2XnsBmLf3sYUB167PzaGXehoPCRJbBpljriI5VtK8f92EuLchvFhB/MT3OYVzi7H9bBeTLsh3cZ/sbtYYNsdFlLCEjvd4bvvKCgQJ0jdST6nIkxGPgoSxaEJO7nVbZa2/4Hwj3Ecw==","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"getAllProjectNames","permalink":"/docs/api/service-api/versions/5.11/get-all-project-names-using-get"},"next":{"title":"Delete project","permalink":"/docs/api/service-api/versions/5.11/delete-project-using-delete"}}');var t=a(74848),r=a(28453),n=a(57742),c=a.n(n),o=a(78178),p=a.n(o),l=a(19624),j=a.n(l),d=a(96226),h=a.n(d),m=(a(77675),a(19365),a(51107));const v={id:"search-project-names-using-get",title:"searchProjectNames",description:"searchProjectNames",sidebar_label:"searchProjectNames",hide_title:!0,hide_table_of_contents:!0,api:"eJx1VE1v2zAM/SsGT22hxk2BXXxaUBRbsKEL2vUU5KDITKzNllSKThcY/kX7Cbv1lw20nY82rS8GJPLp8fGRDbBeR8jmEMj/QsOXxjsmX5ZIsFDgA5Jm6900hwwiajLFrI+80xXGx2jd+svtT1AQNOkKGUngGnC6QsiAkSpQYB1k8FQjbUFBjtGQDQJ7iCB8qi1hDhlTjQqiKbDSkDXA2yBIkcm6NbTtQoJj8C5ilPvrqyv5vUb98Q0USC3oWG4v0gv5HaFaLgV2ykh6WeLL3/6Bl3+gdk/6pRQKrXxCOxAazcJxpcuIbys5lQcUVMiFF/HWyJ1KXEAG6WacDoqnolRM+2RQEJE2OxFrKiGDJpBnb3zZZmna6JoLT5a3baqDPZHzHoMnnnliXSY9FijYaLJSZSfYDq5XbaXrkiGDgjnEE7jZLlYBuroSp0ggqCF+0SrYMzptw1cfOZECE+3yRJglZ3aVOMQc8/PEr5Keb/KW8IFXjpUfURcVuqCR9dKShUhl6v7deQNL1IQ0qUXf+UKurVv541YfS/OBbjsek9k0yb2pK3Tc+X9wkzadmwZzP9RBkkSbSltpVexPPp/wVVBagy7iUfokaFNgcj26AjW0WkTN0vT5+Xmku9uRp3U6pMb0+/Tm9u7h9lJSWgXik579p9F43J8FH7nS7uiZd235qvj9jDH+4TSU2jqB6ig1g2XnsBmLf3sYUB167PzaGXehoPCRJbBpljriI5VtK8f92EuLchvFhB/MT3OYVzi7H9bBeTLsh3cZ/sbtYYNsdFlLCEjvd4bvvKCgQJ0jdST6nIkxGPgoSxaEJO7nVbZa2/4Hwj3Ecw==",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},g=void 0,b={},u=[];function k(e){const s={p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"searchProjectNames"}),"\n",(0,t.jsx)(c(),{method:"get",path:"/v1/project/names/search",context:"endpoint"}),"\n",(0,t.jsx)(s.p,{children:"searchProjectNames"}),"\n",(0,t.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsx)(p(),{parameters:[{name:"term",in:"query",description:"term",required:!0,schema:{type:"string"}}]}),"\n",(0,t.jsx)(j(),{title:"Body",body:void 0}),"\n",(0,t.jsx)(h(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"Iterable\xabstring\xbb",type:"object"}}}}}})]})}function S(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(k,{...e})}):k(e)}}}]);