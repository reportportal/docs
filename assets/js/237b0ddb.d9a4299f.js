"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67919],{96570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>j,frontMatter:()=>h,metadata:()=>a,toc:()=>k});const a=JSON.parse('{"id":"api/service-api/bulk-update","title":"Bulk update attributes and description","description":"Bulk update attributes and description","source":"@site/docs/api/service-api/bulk-update.api.mdx","sourceDirName":"api/service-api","slug":"/api/service-api/bulk-update","permalink":"/docs/api/service-api/bulk-update","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"bulk-update","title":"Bulk update attributes and description","description":"Bulk update attributes and description","sidebar_label":"Bulk update attributes and description","hide_title":true,"hide_table_of_contents":true,"api":"eJzVVsFy2zYQ/RXOnpIZWLRcN+nwVMVWp2o9iSvb04OGB4hcSYhJgAFAyxoO/z2zACjSkhzn0Et9EbzYXbzFvn1gA5avDSQLKHgts81ZpqTVqihQQ8pAVai5FUrOckhgWRePD1XOLQKDimteokVN0Q1IXiIkUGn1FTP7mf5jICSZuN0AA43faqExh8TqGhmYbIMlh6QBu6so1Fgt5BraNvXOaOwnle/Ig0ChtLTkVVWIzGGKvxolydan6g9ZgMgNlRCyqyXhItyairICDQWQU9JAyZ9nFksDycX48uPlb798uPzIoBQyWMf7PFxrvqPS/MYevZAW16iBwUrpkltv+nAJbcsgR5NpURHoQcgrkDJVlqHYg5thwLODHGGLAcq6pKqvpzfT+ykweLi9nrjF1XxKi5SAWGELCrseAKK01mqxrC0OK3qt0ldgr7QqD1vwxIsa327CI+5OVuvDfXtuUK7t5qg/nblv0J5GfbXUxElX4hyNqnWGdIBV/zfE/xUB/Bi/POYfaIcun+ricSZXyrt2uy/H2BlMpaTx93Jxfk4/L/gOX/4G9vMj/OOLL9EYvsZTstEj/9Kp1pUqqwJpNb8j+Eez6IqMaldh1E9BxGUeDR0ZlGg3ikSwqh0qErUE4qdx3Aw0r429jMZCrhQwMKifOoWsdQEJNK5SbJM4bjbK2DbmlYBDWHOslLa3SlteRJPbWeQTATFMC74s/G34XLTqur+xtgLmfpz65bjidUFq5HZaBnTocY/+VMZGpOGudDo8eidWkUTMMX8fqVXkIUUB0x5Pf0COpRpp51U5p5FQdOkpXUNWa2F37h6WyDXqSU0XuEiH23euHFfZ0Gnf6lBcV3VwAhYWf3TC+9e/944PRK55/5JMnznRYS/7i/P0SJr34tsPVjdy3WQd6OWilz6nCn1gEIOBPHi9edPt6MS0pbd05aI7kg8p8jZ/cpXVVBgPdKZx5JkjQni57+qKYkhJSi6IqsZbfj/qKYNCZCgNDsInFc82GF2MzoEFqlO7kjjebrcj7nZHSq/jEGrim9nV9PPd9IxCSDpRGw/+19E42CplbMnl4JifntfTT67FZxtXBRfu2XMwmzDLC3gaA4Pk5ReMH2cI159247OApllygw+6aFsyf6tRE73TfkIdNXJhaJ1DsuKFwRN8C7II7+ZBWd9HwE7j7R5muRvQBlgg1BC4Y8wGeY7awfAeV/6ws3vK02c40uOWdRGTLMPK/tA3HWjj7cM9TWP4aitVTiGab+nzj289WOVqd0PubA0UXK5rJ+rgU9LfdxYgm60=","sidebar_class_name":"put api-method","info_path":"api/service-api/reportportal","custom_edit_url":null},"sidebar":"serviceApi","previous":{"title":"Force finish launch","permalink":"/docs/api/service-api/bulk-force-finish"},"next":{"title":"Get list of project launches by filter","permalink":"/docs/api/service-api/get-project-launches"}}');var n=i(74848),p=i(28453),r=i(57742),s=i.n(r),d=i(78178),l=i.n(d),u=i(19624),o=i.n(u),c=i(96226),b=i.n(c),g=(i(77675),i(19365),i(51107));const h={id:"bulk-update",title:"Bulk update attributes and description",description:"Bulk update attributes and description",sidebar_label:"Bulk update attributes and description",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVsFy2zYQ/RXOnpIZWLRcN+nwVMVWp2o9iSvb04OGB4hcSYhJgAFAyxoO/z2zACjSkhzn0Et9EbzYXbzFvn1gA5avDSQLKHgts81ZpqTVqihQQ8pAVai5FUrOckhgWRePD1XOLQKDimteokVN0Q1IXiIkUGn1FTP7mf5jICSZuN0AA43faqExh8TqGhmYbIMlh6QBu6so1Fgt5BraNvXOaOwnle/Ig0ChtLTkVVWIzGGKvxolydan6g9ZgMgNlRCyqyXhItyairICDQWQU9JAyZ9nFksDycX48uPlb798uPzIoBQyWMf7PFxrvqPS/MYevZAW16iBwUrpkltv+nAJbcsgR5NpURHoQcgrkDJVlqHYg5thwLODHGGLAcq6pKqvpzfT+ykweLi9nrjF1XxKi5SAWGELCrseAKK01mqxrC0OK3qt0ldgr7QqD1vwxIsa327CI+5OVuvDfXtuUK7t5qg/nblv0J5GfbXUxElX4hyNqnWGdIBV/zfE/xUB/Bi/POYfaIcun+ricSZXyrt2uy/H2BlMpaTx93Jxfk4/L/gOX/4G9vMj/OOLL9EYvsZTstEj/9Kp1pUqqwJpNb8j+Eez6IqMaldh1E9BxGUeDR0ZlGg3ikSwqh0qErUE4qdx3Aw0r429jMZCrhQwMKifOoWsdQEJNK5SbJM4bjbK2DbmlYBDWHOslLa3SlteRJPbWeQTATFMC74s/G34XLTqur+xtgLmfpz65bjidUFq5HZaBnTocY/+VMZGpOGudDo8eidWkUTMMX8fqVXkIUUB0x5Pf0COpRpp51U5p5FQdOkpXUNWa2F37h6WyDXqSU0XuEiH23euHFfZ0Gnf6lBcV3VwAhYWf3TC+9e/944PRK55/5JMnznRYS/7i/P0SJr34tsPVjdy3WQd6OWilz6nCn1gEIOBPHi9edPt6MS0pbd05aI7kg8p8jZ/cpXVVBgPdKZx5JkjQni57+qKYkhJSi6IqsZbfj/qKYNCZCgNDsInFc82GF2MzoEFqlO7kjjebrcj7nZHSq/jEGrim9nV9PPd9IxCSDpRGw/+19E42CplbMnl4JifntfTT67FZxtXBRfu2XMwmzDLC3gaA4Pk5ReMH2cI159247OApllygw+6aFsyf6tRE73TfkIdNXJhaJ1DsuKFwRN8C7II7+ZBWd9HwE7j7R5muRvQBlgg1BC4Y8wGeY7awfAeV/6ws3vK02c40uOWdRGTLMPK/tA3HWjj7cM9TWP4aitVTiGab+nzj289WOVqd0PubA0UXK5rJ+rgU9LfdxYgm60=",sidebar_class_name:"put api-method",info_path:"api/service-api/reportportal",custom_edit_url:null},f=void 0,m={},k=[];function q(e){const t={p:"p",...(0,p.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Bulk update attributes and description"}),"\n",(0,n.jsx)(s(),{method:"put",path:"/v1/{projectName}/launch/info",context:"endpoint"}),"\n",(0,n.jsx)(t.p,{children:"Bulk update attributes and description"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(l(),{parameters:[{name:"projectName",in:"path",required:!0,schema:{type:"string"}}]}),"\n",(0,n.jsx)(o(),{title:"Body",body:{content:{"application/json":{schema:{required:["ids"],type:"object",properties:{ids:{maxItems:2147483647,minItems:1,type:"array",items:{type:"integer",format:"int64"}},description:{type:"object",properties:{comment:{type:"string"},action:{type:"string",enum:["DELETE","UPDATE","CREATE"]}},title:"Description"},attributes:{type:"array",items:{type:"object",properties:{from:{required:["value"],type:"object",properties:{key:{type:"string"},value:{maxLength:2147483647,minLength:1,type:"string"}},title:"ItemAttributeResource"},to:{required:["value"],type:"object",properties:{key:{type:"string"},value:{maxLength:2147483647,minLength:1,type:"string"}},title:"ItemAttributeResource"},action:{type:"string",enum:["DELETE","UPDATE","CREATE"]}},title:"UpdateItemAttributeRQ"}}},title:"BulkInfoUpdateRQ"}}},required:!0}}),"\n",(0,n.jsx)(b(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"}},title:"OperationCompletionRS"}}}}}})]})}function j(e={}){const{wrapper:t}={...(0,p.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(q,{...e})}):q(e)}}}]);