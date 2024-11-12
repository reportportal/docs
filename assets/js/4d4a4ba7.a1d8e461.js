"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16128],{75615:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>j,contentTitle:()=>y,default:()=>T,frontMatter:()=>m,metadata:()=>n,toc:()=>v});const n=JSON.parse('{"id":"api/service-api/versions/5.10/get-project-integrations-using-get","title":"Get available project integrations for plugin","description":"Get available project integrations for plugin","source":"@site/docs/api/service-api/versions/5.10/get-project-integrations-using-get.api.mdx","sourceDirName":"api/service-api/versions/5.10","slug":"/api/service-api/versions/5.10/get-project-integrations-using-get","permalink":"/docs/api/service-api/versions/5.10/get-project-integrations-using-get","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-project-integrations-using-get","title":"Get available project integrations for plugin","description":"Get available project integrations for plugin","sidebar_label":"Get available project integrations for plugin","hide_title":true,"hide_table_of_contents":true,"api":"eJydVktz0zAQ/iuePQGjxi0DHHwiQIEM0Gb6OHVyUOxNLJAlI61TMh7/d2ZlJ7abUAq5eKJ9f7v7STWQXHtI7kAZwrWTpKw5Sa0hZ7VGBwsBtsT2fJZBAmukubPfMaVZb+FvvTLrT+c3IKCUThZI6NhtDUYWCAmUulorc8F/BCjDJ5JyEJChT50q2ctDNYc/K+Uwg4RchQJ8mmMhIamBtiU79eSUWUPTiD5Om9vfA430nh5pwcq+tMajZ/nL01P+jJ1ffgEBDCIaYumL+AV/DrxK5+SW0yQsgjdSpFkwgPYKva1cyll2VnbJmTPSjltDqs0kdRgMPkjCw8wFrKwrJEECmSQ8IVUgNKK1su5IqQLQyKVmUPaypbUapWGhGp6H4UE3jKIMvXkVFPta5oPRqB8vpxlb3gTdowCx6MkgyYryj9reHwMITVXwJlxOb28+g4B30+vZexBwc/nl/AIEfLy8+gYCvn6YzmGxg+6fAc+QpNJPA+DRBqydrco9Lg97167DEQGNLf7cueYxL936zJ42BN2Piy8dppK4ppXUHh+u5SekSG6k0lx41EWJBoPgo5V1UUsTIKBAym1HS4F7KIcE4s1ZPLCJOz9xPdj6JpZax3VPOA0I8Og2O+KqnIYE2IRsanWTxHHN42Odom0Ty1IdkMoVltbR3DqSOmp9gYCNdIrLCT3fuWtJYyUrzTjlRKU/cDff6fazyYogOn0ewn1Ghyz02XqKuIORNFnEmUXP1CoyiBlmzyO7itp8o4cJ93llWNiJC1plUJooy+1cMFRp1ca9q2GJ0qGbVoz+3WIovmbOa0sfKu2HpisoUGMY8KAE7fqv7HDnh+j+AfpdKdP5LMpsWhVoKIxAx8cyDXzc3RXXVclGDG8hFXfbtydvD0oWoFWKxuPAfFrKNMfo5eQURDctXE0Sx/f39xMZpBPr1nFn6uOvs/fnF9fnJ2zSCOBRa7N/PTk7nZyFxbKeCmkGYf51JUa47HEm/EVxqaUK3BGyrbt1uYPNGYzYFvYLDgKS8VUptQ6H/UW9EJBbT+yorpfS463TTcPHPyt0PCCLfgnCuGTKd8R2jATq/uqEZ1fdzfw8Gj0Njla1u1XNNmydrvgfCPiB2/HTgt8L/5fDCIr/SWLgoOH9zVFm6AIqrcY0TbGkgS0/Hnij9lTHz6ym+Q0OnVkr","sidebar_class_name":"get api-method","info_path":"api/service-api/versions/5.10/reportportal","custom_edit_url":null},"sidebar":"service-api-5.10","previous":{"title":"Get available project integrations","permalink":"/docs/api/service-api/versions/5.10/get-project-integrations-using-get-1"},"next":{"title":"Get global Report Portal integration instance","permalink":"/docs/api/service-api/versions/5.10/get-global-integration-using-get"}}');var a=i(74848),r=i(28453),o=i(57742),p=i.n(o),s=i(78178),l=i.n(s),c=i(19624),g=i.n(c),d=i(96226),u=i.n(d),f=(i(77675),i(19365),i(51107));const m={id:"get-project-integrations-using-get",title:"Get available project integrations for plugin",description:"Get available project integrations for plugin",sidebar_label:"Get available project integrations for plugin",hide_title:!0,hide_table_of_contents:!0,api:"eJydVktz0zAQ/iuePQGjxi0DHHwiQIEM0Gb6OHVyUOxNLJAlI61TMh7/d2ZlJ7abUAq5eKJ9f7v7STWQXHtI7kAZwrWTpKw5Sa0hZ7VGBwsBtsT2fJZBAmukubPfMaVZb+FvvTLrT+c3IKCUThZI6NhtDUYWCAmUulorc8F/BCjDJ5JyEJChT50q2ctDNYc/K+Uwg4RchQJ8mmMhIamBtiU79eSUWUPTiD5Om9vfA430nh5pwcq+tMajZ/nL01P+jJ1ffgEBDCIaYumL+AV/DrxK5+SW0yQsgjdSpFkwgPYKva1cyll2VnbJmTPSjltDqs0kdRgMPkjCw8wFrKwrJEECmSQ8IVUgNKK1su5IqQLQyKVmUPaypbUapWGhGp6H4UE3jKIMvXkVFPta5oPRqB8vpxlb3gTdowCx6MkgyYryj9reHwMITVXwJlxOb28+g4B30+vZexBwc/nl/AIEfLy8+gYCvn6YzmGxg+6fAc+QpNJPA+DRBqydrco9Lg97167DEQGNLf7cueYxL936zJ42BN2Piy8dppK4ppXUHh+u5SekSG6k0lx41EWJBoPgo5V1UUsTIKBAym1HS4F7KIcE4s1ZPLCJOz9xPdj6JpZax3VPOA0I8Og2O+KqnIYE2IRsanWTxHHN42Odom0Ty1IdkMoVltbR3DqSOmp9gYCNdIrLCT3fuWtJYyUrzTjlRKU/cDff6fazyYogOn0ewn1Ghyz02XqKuIORNFnEmUXP1CoyiBlmzyO7itp8o4cJ93llWNiJC1plUJooy+1cMFRp1ca9q2GJ0qGbVoz+3WIovmbOa0sfKu2HpisoUGMY8KAE7fqv7HDnh+j+AfpdKdP5LMpsWhVoKIxAx8cyDXzc3RXXVclGDG8hFXfbtydvD0oWoFWKxuPAfFrKNMfo5eQURDctXE0Sx/f39xMZpBPr1nFn6uOvs/fnF9fnJ2zSCOBRa7N/PTk7nZyFxbKeCmkGYf51JUa47HEm/EVxqaUK3BGyrbt1uYPNGYzYFvYLDgKS8VUptQ6H/UW9EJBbT+yorpfS463TTcPHPyt0PCCLfgnCuGTKd8R2jATq/uqEZ1fdzfw8Gj0Njla1u1XNNmydrvgfCPiB2/HTgt8L/5fDCIr/SWLgoOH9zVFm6AIqrcY0TbGkgS0/Hnij9lTHz6ym+Q0OnVkr",sidebar_class_name:"get api-method",info_path:"api/service-api/versions/5.10/reportportal",custom_edit_url:null},y=void 0,j={},v=[];function b(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get available project integrations for plugin"}),"\n",(0,a.jsx)(p(),{method:"get",path:"/v1/integration/project/{projectName}/all/{pluginName}",context:"endpoint"}),"\n",(0,a.jsx)(t.p,{children:"Get available project integrations for plugin"}),"\n",(0,a.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsx)(l(),{parameters:[{name:"pluginName",in:"path",description:"pluginName",required:!0,schema:{type:"string"}},{name:"projectName",in:"path",description:"projectName",required:!0,schema:{type:"string"}}]}),"\n",(0,a.jsx)(g(),{title:"Body",body:void 0}),"\n",(0,a.jsx)(u(),{id:void 0,label:void 0,responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{title:"IntegrationResource",type:"object",properties:{creationDate:{type:"string",format:"date-time"},creator:{type:"string"},enabled:{type:"boolean"},id:{type:"integer",format:"int64"},integrationParameters:{type:"object",properties:{}},integrationType:{title:"IntegrationTypeResource",type:"object",properties:{authFlow:{type:"string",enum:["OAUTH","BASIC","TOKEN","FORM","LDAP"]},creationDate:{type:"string",format:"date-time"},details:{type:"object",properties:{}},enabled:{type:"boolean"},groupType:{type:"string"},name:{type:"string"},type:{type:"integer",format:"int64"}}},name:{type:"string"},projectId:{type:"integer",format:"int64"}}}}}}}}})]})}function T(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}}}]);