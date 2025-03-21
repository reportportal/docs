"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7443],{61159:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>I,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"external-integrations/UserProvisioning/Scim/azure","title":"SCIM Azure","description":"This feature is available in ReportPortal with a managed services subscription.","source":"@site/docs/external-integrations/UserProvisioning/Scim/azure.mdx","sourceDirName":"external-integrations/UserProvisioning/Scim","slug":"/external-integrations/UserProvisioning/Scim/azure","permalink":"/docs/external-integrations/UserProvisioning/Scim/azure","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/external-integrations/UserProvisioning/Scim/azure.mdx","tags":[],"version":"current","frontMatter":{"sidebar_label":"SCIM Azure"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/external-integrations/UserProvisioning/Scim/overview"},"next":{"title":"SCIM Okta","permalink":"/docs/external-integrations/UserProvisioning/Scim/okta"}}');var t=n(74848),r=n(28453);const l={sidebar_label:"SCIM Azure"},c="SCIM Azure",o={},a=[{value:"Creating a SCIM provisioning",id:"creating-a-scim-provisioning",level:2},{value:"Set up Attribute mapping",id:"set-up-attribute-mapping",level:2},{value:"Admin role synchronization",id:"admin-role-synchronization",level:2}];function d(i){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...i.components},{MediaViewer:s}=e;return s||function(i,e){throw new Error("Expected "+(e?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"scim-azure",children:"SCIM Azure"})}),"\n",(0,t.jsx)(e.admonition,{type:"important",children:(0,t.jsxs)(e.p,{children:["This feature is available in ReportPortal with a ",(0,t.jsx)(e.a,{href:"https://reportportal.io/pricing/on-premises",children:"managed services subscription"}),"."]})}),"\n",(0,t.jsx)(e.p,{children:"ReportPortal allows you to synchronize users and groups from Azure Microsoft Entra ID\nto ReportPortal via SCIM."}),"\n",(0,t.jsx)(e.h2,{id:"creating-a-scim-provisioning",children:"Creating a SCIM provisioning"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Log in to ",(0,t.jsx)(e.a,{href:"https://portal.azure.com",children:"Azure portal"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Go to the ",(0,t.jsx)(e.code,{children:"Azure Enterprise Applications"})," section and click ",(0,t.jsx)(e.code,{children:"New application"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(91506),alt:"New application"}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.code,{children:"Create your own application"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(56649),alt:"Create your own application"}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["Enter the name of your application.\nChoose the ",(0,t.jsx)(e.code,{children:"Integrate any other application you don't find in the gallery (Non-gallery)"})," bullet\nand click the ",(0,t.jsx)(e.code,{children:"Create"})," button."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(1824),alt:"Fill application fields"}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsxs)(e.li,{children:["After creating an application, go to the ",(0,t.jsx)(e.code,{children:"Provisioning"})," section and click ",(0,t.jsx)(e.code,{children:"New configuration"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(60479),alt:"Provisioning"}),"\n",(0,t.jsx)(s,{src:n(82390),alt:"New configuration"}),"\n",(0,t.jsxs)(e.ol,{start:"6",children:["\n",(0,t.jsx)(e.li,{children:"Fill in the following fields:"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Tenant URL: ",(0,t.jsx)(e.code,{children:"https://{your_scim_server_host}?aadOptscim062020"})]}),"\n",(0,t.jsxs)(e.li,{children:["Secret Token: ",(0,t.jsx)(e.code,{children:"your_admin_api_key"})]}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"?aadOptscim062020"})," is a special parameter that allows you to use the a ",(0,t.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/entra/identity/app-provisioning/application-provisioning-config-problem-scim-compatibility#flags-to-alter-the-scim-behavior",children:"SCIM compatible protocol"}),"."]})}),"\n",(0,t.jsx)(s,{src:n(73069),alt:"Admin credentials"}),"\n",(0,t.jsxs)(e.ol,{start:"7",children:["\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.code,{children:"Test Connection"})," to check the connection and click ",(0,t.jsx)(e.code,{children:"Create"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(30564),alt:"Test connection"}),"\n",(0,t.jsx)(e.h2,{id:"set-up-attribute-mapping",children:"Set up Attribute mapping"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Go to the ",(0,t.jsx)(e.code,{children:"Attribute mapping"})," section and click ",(0,t.jsx)(e.code,{children:"Provision Microsoft Entra ID Users"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(90787),alt:"Attribute mapping"}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["In the ",(0,t.jsx)(e.code,{children:"Attribute Mappings"})," section, find and delete the ",(0,t.jsx)(e.code,{children:"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager"})," attribute.\nFor some reason, Azure sends this attribute with the wrong SCIM format. This attribute is not used in ReportPortal."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(69210),alt:"Delete attribute"}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.code,{children:"Save"})," to save the changes."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"admin-role-synchronization",children:"Admin role synchronization"}),"\n",(0,t.jsxs)(e.p,{children:["For proper synchronization of the admin role, you need to create a new ",(0,t.jsx)(e.code,{children:"App-role"})," in Azure."]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["Go to the ",(0,t.jsx)(e.code,{children:"Provisioning"})," -> ",(0,t.jsx)(e.code,{children:"Users and groups"})," section and click ",(0,t.jsx)(e.code,{children:"application registration"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(53288),alt:"Application registration"}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsxs)(e.li,{children:["Click to ",(0,t.jsx)(e.code,{children:"Create app role"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(67505),alt:"Create app role"}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Fill in the following fields:"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Display name: ",(0,t.jsx)(e.code,{children:"Administrator"})]}),"\n",(0,t.jsxs)(e.li,{children:["Value: ",(0,t.jsx)(e.code,{children:"Administrator"})]}),"\n",(0,t.jsxs)(e.li,{children:["Description: ",(0,t.jsx)(e.code,{children:"Administrator role"})]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(37338),alt:"Fill app role fields"}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.code,{children:"Apply"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Select the ",(0,t.jsx)(e.code,{children:"User"})," role and fill the Value field with ",(0,t.jsx)(e.code,{children:"User"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.code,{children:"Apply"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Return to the configured enterprise application and go to the ",(0,t.jsx)(e.code,{children:"Provisioning"})," -> ",(0,t.jsx)(e.code,{children:"Attribute mapping"})," -> ",(0,t.jsx)(e.code,{children:"Provision Microsoft Entra ID Users"})," section."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(54915),alt:"Attribute mapping"}),"\n",(0,t.jsxs)(e.ol,{start:"8",children:["\n",(0,t.jsxs)(e.li,{children:["Select the ",(0,t.jsx)(e.code,{children:"Show advanced options"})," checkbox at the bottom and click the ",(0,t.jsx)(e.code,{children:"Edit attribute list for customappsso"})," link."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(24748),alt:"Advanced options"}),"\n",(0,t.jsxs)(e.ol,{start:"9",children:["\n",(0,t.jsxs)(e.li,{children:["You will see the ",(0,t.jsx)(e.code,{children:"Edit Attribute List"}),". At the bottom of the list, fill in the empty fields with the name ",(0,t.jsx)(e.code,{children:"roles"})," and type ",(0,t.jsx)(e.code,{children:"String"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(93845),alt:"Edit attribute list"}),"\n",(0,t.jsxs)(e.ol,{start:"10",children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.code,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Return to the ",(0,t.jsx)(e.code,{children:"Provision Microsoft Entra ID Users"})," and click ",(0,t.jsx)(e.code,{children:"Add New Mapping"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s,{src:n(26494),alt:"Add new mapping"}),"\n",(0,t.jsxs)(e.ol,{start:"12",children:["\n",(0,t.jsx)(e.li,{children:"Fill in the following fields:"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Mapping type: ",(0,t.jsx)(e.code,{children:"Expression"})]}),"\n",(0,t.jsxs)(e.li,{children:["Expression: ",(0,t.jsx)(e.code,{children:"AppRoleAssignmentsComplex([appRoleAssignments])"})]}),"\n",(0,t.jsxs)(e.li,{children:["Target attribute: ",(0,t.jsx)(e.code,{children:"roles"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Keep default values for other fields."}),"\n",(0,t.jsx)(s,{src:n(44807),alt:"Fill new mapping fields"}),"\n",(0,t.jsxs)(e.ol,{start:"13",children:["\n",(0,t.jsxs)(e.li,{children:["Click ",(0,t.jsx)(e.code,{children:"Ok"})," and then ",(0,t.jsx)(e.code,{children:"Save"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["After these steps, when you add users or groups to the Azure project you can select\nan application role for them: ",(0,t.jsx)(e.code,{children:"User"})," or ",(0,t.jsx)(e.code,{children:"Administrator"}),"."]}),"\n",(0,t.jsx)(s,{src:n(576),alt:"Select role"}),"\n",(0,t.jsx)(e.p,{children:"This role will be synchronized with the ReportPortal user instance role."})]})}function I(i={}){const{wrapper:e}={...(0,r.R)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},91506:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/1-58ea3644487ea461041f7404456d1e51.png"},53288:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/10-0fb1fb32b990665f5c7e689e0b790cbe.png"},67505:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/11-7be075cd09170809899028075babdf0f.png"},37338:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/12-87b20875f0f8ee9d7cb80119a9844571.png"},54915:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/13-132ce071d067948de3f1f6a8adca3cae.png"},24748:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/14-62a9457b3e90e4f27e45d857f8bfe0b3.png"},93845:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s="data:image/png;base64,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"},26494:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/16-1de4a07e7219bd50d889659904472b4c.png"},44807:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/17-b6ac8a2f0478d18bef28fc9ac8e5d2a7.png"},576:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/18-15fb01c403c5662556bf3c9a0ff1328f.png"},56649:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/2-b596b8905713d6eeb997b1ebe0929718.png"},1824:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/3-d6df0fc60306f0d78f6ffad524508db2.png"},60479:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/4-531ca46ed56bced6e290b2cfc3720560.png"},82390:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/5-7a143750d7f7a7c1327607d220fb93db.png"},73069:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/6-67c79d8922a5f209ad577725bb9fd49e.png"},30564:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/7-00f3e57033771370ded87c18c040e342.png"},90787:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/8-10b85102b84a53f896256a9ad82e1022.png"},69210:(i,e,n)=>{n.r(e),n.d(e,{default:()=>s});const s=n.p+"assets/images/9-73fa2625c83b4efa319cd5a302e4d639.png"},28453:(i,e,n)=>{n.d(e,{R:()=>l,x:()=>c});var s=n(96540);const t={},r=s.createContext(t);function l(i){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:l(i.components),s.createElement(r.Provider,{value:e},i.children)}}}]);