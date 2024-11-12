"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58898],{24447:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>G,frontMatter:()=>f,metadata:()=>i,toc:()=>N});const i=JSON.parse('{"id":"api/service-api/versions/5.11/get-clusters-using-get","title":"Get all index clusters of the launch","description":"Get all index clusters of the launch","source":"@site/docs/api/service-api/versions/5.11/get-clusters-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/get-clusters-using-get","permalink":"/docs/api/service-api/versions/5.11/get-clusters-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-clusters-using-get","title":"Get all index clusters of the launch","description":"Get all index clusters of the launch","sidebar_label":"Get all index clusters of the launch","hide_title":true,"hide_table_of_contents":true,"api":"eJzFVs1u4zYQfhViTsmCKyUpetGpwTbYGm3TIOmeDB8YaWyxlUjucOTEVfVE+wi97ZMVI8mOnP9sD71YMDU/33wzH0ctsFlFyOZQmcbl5fvcOyZfVUiw0OADkmHr3ayADFbIH6omMlL8FK1bfTz7HTQEQ6ZGOYRs3oIzNUI2hpsVoME6yCAYLkFDgTEnGyTkvhHh58YSFpAxNagh5iXWBrIWeBMkYGSybgVdp3c5gllhIj/bJJ8bpM2DLJcYm4qjEku18Y26MY4Ve0XIZHGN6uAoSc4P4ZGs1jGukEDD0lNteDj67uQhjmj/egHHeVNfIym/VIS5pyKqgKRG/P8lsyd+PvOVJ7ZupXKyjGSNsk5xiWqInKlA0mjeaHVgYv63OB8m6kdcmqZiJfGVpwJJ2ahMzNEV1q0S9WtTsQ0VDha74IZQxSYET4xFIrXxphK0kg404G2ofIFPdtoQGanBMtbxsQmYEkD+D8z5XP49N2n7dq8ftoUYx+BdxB7KydGRPPaD//YzaBDhoGN5+y59J49JVMs9ATNGMtcVfv0y6mjmlv4So28ox6//gN7m99eCVkrtOiklEOaGBfDSVBHvV/cRWZmqUtYVeKvyUaMyadLlQWWgoUYu/SjkXrhcQgbp+jhtJ/x06eCQjnHSdivTTnqJtN5KvaEKMhBf9rmvuixNW9Nw6cnypktNsI9oUcbiwhObSg2xQMPakBVeeoq34Qae+xGEDErmEB+Eu9jaakDX1HKPiSHo0X7Radgheti4n3xkJZOkjCuUIFMHdqkcYoHFofA34FX3Ad/hKrD2CfVWoTdKrJe+LYSqvBnyzlu4RkNIp41QPl/Ia+uWfjocU2qe4G2L4/RipgqfNzU67q/ncf5M3s/fqI2rQYPCTW2stGpU5Q8P8GqobI4u4sT9NJi8RHWSHIEeWy2kZml6c3OTmP5t4mmVjq4x/WX24ez86uy9uHQaZE4G9N8nx8fDWfCRa+MmaV45u3t07HTKeMtpqIx1ErwH2Y5zPYf1MWjI9pW/izcmEovdFlpoKH1k8W3baxPxE1VdJ8fDtSp9LGyUSX1Cie3dNfCWtfNoNX/i5t6OW5uqETuQC/D1QJ7dOy+lHtfaN6b+nxfPi8UN8rgrbnF3F72x2weX4045VJOvmkcBbNec20xzb4HtvN/G9CT//sR/A4RpgE6u0BJNgdQzMlic5jmGKXWy8oS93YqRb8Ou+xc/FpHN","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.11/reportportal","custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Create launch clusters","permalink":"/docs/api/service-api/versions/5.11/create-clusters-using-post"},"next":{"title":"Compare launches","permalink":"/docs/api/service-api/versions/5.11/compare-launches-using-get"}}');var a=s(74848),n=s(28453),r=s(57742),c=s.n(r),o=s(78178),l=s.n(o),p=s(19624),u=s.n(p),d=s(96226),m=s.n(d),h=(s(77675),s(19365),s(51107));const f={id:"get-clusters-using-get",title:"Get all index clusters of the launch",description:"Get all index clusters of the launch",sidebar_label:"Get all index clusters of the launch",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVs1u4zYQfhViTsmCKyUpetGpwTbYGm3TIOmeDB8YaWyxlUjucOTEVfVE+wi97ZMVI8mOnP9sD71YMDU/33wzH0ctsFlFyOZQmcbl5fvcOyZfVUiw0OADkmHr3ayADFbIH6omMlL8FK1bfTz7HTQEQ6ZGOYRs3oIzNUI2hpsVoME6yCAYLkFDgTEnGyTkvhHh58YSFpAxNagh5iXWBrIWeBMkYGSybgVdp3c5gllhIj/bJJ8bpM2DLJcYm4qjEku18Y26MY4Ve0XIZHGN6uAoSc4P4ZGs1jGukEDD0lNteDj67uQhjmj/egHHeVNfIym/VIS5pyKqgKRG/P8lsyd+PvOVJ7ZupXKyjGSNsk5xiWqInKlA0mjeaHVgYv63OB8m6kdcmqZiJfGVpwJJ2ahMzNEV1q0S9WtTsQ0VDha74IZQxSYET4xFIrXxphK0kg404G2ofIFPdtoQGanBMtbxsQmYEkD+D8z5XP49N2n7dq8ftoUYx+BdxB7KydGRPPaD//YzaBDhoGN5+y59J49JVMs9ATNGMtcVfv0y6mjmlv4So28ox6//gN7m99eCVkrtOiklEOaGBfDSVBHvV/cRWZmqUtYVeKvyUaMyadLlQWWgoUYu/SjkXrhcQgbp+jhtJ/x06eCQjnHSdivTTnqJtN5KvaEKMhBf9rmvuixNW9Nw6cnypktNsI9oUcbiwhObSg2xQMPakBVeeoq34Qae+xGEDErmEB+Eu9jaakDX1HKPiSHo0X7Radgheti4n3xkJZOkjCuUIFMHdqkcYoHFofA34FX3Ad/hKrD2CfVWoTdKrJe+LYSqvBnyzlu4RkNIp41QPl/Ia+uWfjocU2qe4G2L4/RipgqfNzU67q/ncf5M3s/fqI2rQYPCTW2stGpU5Q8P8GqobI4u4sT9NJi8RHWSHIEeWy2kZml6c3OTmP5t4mmVjq4x/WX24ez86uy9uHQaZE4G9N8nx8fDWfCRa+MmaV45u3t07HTKeMtpqIx1ErwH2Y5zPYf1MWjI9pW/izcmEovdFlpoKH1k8W3baxPxE1VdJ8fDtSp9LGyUSX1Cie3dNfCWtfNoNX/i5t6OW5uqETuQC/D1QJ7dOy+lHtfaN6b+nxfPi8UN8rgrbnF3F72x2weX4045VJOvmkcBbNec20xzb4HtvN/G9CT//sR/A4RpgE6u0BJNgdQzMlic5jmGKXWy8oS93YqRb8Ou+xc/FpHN",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.11/reportportal",custom_edit_url:null},g=void 0,x={},N=[];function y(e){const t={p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.default,{as:"h1",className:"openapi__heading",children:"Get all index clusters of the launch"}),"\n",(0,a.jsx)(c(),{method:"get",path:"/v1/{projectName}/launch/cluster/{launchId}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Get all index clusters of the launch"}),"\n",(0,a.jsx)(h.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"launchId",in:"path",description:"launchId",required:!0,schema:{type:"string"}},{name:"page.page",in:"query",description:"Results page you want to retrieve (0..N)",schema:{type:"integer",format:"int32"}},{name:"page.size",in:"query",description:"Number of records per page",schema:{type:"integer",format:"int32"}},{name:"page.sort",in:"query",description:"Sorting criteria in the format: property, (asc|desc). Default sort order is ascending. Multiple sort criteria are supported.",style:"form",explode:!0,schema:{type:"array",items:{type:"string"}}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(u(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{title:"Iterable\xabClusterInfoResource\xbb",type:"object"}}}}}})]})}function G(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(y,{...e})}):y(e)}}}]);