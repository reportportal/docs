"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84600],{15251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(85893),a=n(11151);const r={sidebar_label:"Okta SAML"},o="Okta SAML",s={id:"reportportal-configuration/authorization/SamlProviders/OktaSaml",title:"Okta SAML",description:"Before starting, please read about the SAML provider.",source:"@site/docs/reportportal-configuration/authorization/SamlProviders/OktaSaml.mdx",sourceDirName:"reportportal-configuration/authorization/SamlProviders",slug:"/reportportal-configuration/authorization/SamlProviders/OktaSaml",permalink:"/docs/reportportal-configuration/authorization/SamlProviders/OktaSaml",draft:!1,unlisted:!1,editUrl:"https://github.com/reportportal/docs/blob/develop/docs/reportportal-configuration/authorization/SamlProviders/OktaSaml.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Okta SAML"},sidebar:"docs",previous:{title:"Azure SAML",permalink:"/docs/reportportal-configuration/authorization/SamlProviders/AzureSaml"},next:{title:"User account",permalink:"/docs/user-account/"}},l={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration Okta",id:"configuration-okta",level:2},{value:"Step 1: Create a new App Integration",id:"step-1-create-a-new-app-integration",level:3},{value:"Go to the Okta dashboard",id:"go-to-the-okta-dashboard",level:4},{value:"Choose integration type",id:"choose-integration-type",level:4},{value:"Fill the general settings",id:"fill-the-general-settings",level:4},{value:"Step 2: Configure SAML",id:"step-2-configure-saml",level:3},{value:"Fill in the SAML settings",id:"fill-in-the-saml-settings",level:4},{value:"Fill in the Attribute Statements",id:"fill-in-the-attribute-statements",level:4},{value:"Provide feedback",id:"provide-feedback",level:4},{value:"Copy metadata URL",id:"copy-metadata-url",level:4},{value:"Step 3: Assign users",id:"step-3-assign-users",level:3},{value:"ReportPortal configuration",id:"reportportal-configuration",level:2},{value:"Step 1: Open the SAML plugin",id:"step-1-open-the-saml-plugin",level:3},{value:"Step 2: Add a new integration",id:"step-2-add-a-new-integration",level:3},{value:"Step 3: Fill in the form",id:"step-3-fill-in-the-form",level:3},{value:"Identity provider name ID",id:"identity-provider-name-id",level:4},{value:"Provider name",id:"provider-name",level:4},{value:"Metadata URL",id:"metadata-url",level:4},{value:"Attribute mapping",id:"attribute-mapping",level:4},{value:"RP callback URL",id:"rp-callback-url",level:4},{value:"Create the integration",id:"create-the-integration",level:4},{value:"Step 4: Test the integration",id:"step-4-test-the-integration",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{MediaViewer:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("MediaViewer",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"okta-saml",children:"Okta SAML"}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["Before starting, please read about the ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/authorization/SamlProviders/Overview",children:"SAML provider"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"This guide will help you to configure the connection between ReportPortal and Okta."}),"\n",(0,i.jsxs)(t.p,{children:["You can use it as high-level steps for reference. To get more information about Okta configuration, read the ",(0,i.jsx)(t.a,{href:"https://developer.okta.com/docs/guides/saml-application-setup/overview/",children:"official documentation"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"SAML plugin is available in ReportPortal on the Plugins page."}),"\n",(0,i.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Okta account"}),"\n",(0,i.jsx)(t.li,{children:"ReportPortal instance"}),"\n",(0,i.jsx)(t.li,{children:"Access to the ReportPortal instance and Okta account"}),"\n",(0,i.jsx)(t.li,{children:"Available connection between Okta and ReportPortal"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configuration-okta",children:"Configuration Okta"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-create-a-new-app-integration",children:"Step 1: Create a new App Integration"}),"\n",(0,i.jsx)(t.h4,{id:"go-to-the-okta-dashboard",children:"Go to the Okta dashboard"}),"\n",(0,i.jsx)(r,{src:n(67305),alt:"Create a new App Integreation"}),"\n",(0,i.jsxs)(t.p,{children:["Click on the ",(0,i.jsx)(t.code,{children:"Applications"})," in the sidebar menu and click on the\n",(0,i.jsx)(t.code,{children:"Create App Integration"})," button."]}),"\n",(0,i.jsx)(t.h4,{id:"choose-integration-type",children:"Choose integration type"}),"\n",(0,i.jsx)(r,{src:n(52967),alt:"Pick SAML 2.0"}),"\n",(0,i.jsxs)(t.p,{children:["Pick ",(0,i.jsx)(t.code,{children:"SAML 2.0"})," and click ",(0,i.jsx)(t.code,{children:"Next"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"fill-the-general-settings",children:"Fill the general settings"}),"\n",(0,i.jsx)(r,{src:n(76268),alt:"Fill in the App Integration form"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"App name"})," field, enter the application's name. Click ",(0,i.jsx)(t.code,{children:"Next"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-configure-saml",children:"Step 2: Configure SAML"}),"\n",(0,i.jsx)(t.h4,{id:"fill-in-the-saml-settings",children:"Fill in the SAML settings"}),"\n",(0,i.jsx)(r,{src:n(3131),alt:"Fill in the SAML settings"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Single sign-on URL"})," field, enter the following URL:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-url",children:"https://<host>/uat/saml/sp/SSO/alias/report-portal-sp\n"})}),"\n",(0,i.jsx)(t.p,{children:"In the example below, ReportPortal was deployed on the local machine using the following URL:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-url",children:"http://192.168.49.2/uat/saml/sp/SSO/alias/report-portal-sp\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Audience URI (SP Entity ID)"})," field, enter the following identifier:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"report.portal.sp.id\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can change this identifier when you deploy ReportPortal. More information\nabout the identifier you can find in the ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/authorization/SamlProviders/Overview#identifier",children:"SAML Overview"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Name ID format"})," field, select ",(0,i.jsx)(t.code,{children:"EmailAddress"}),". You can use the UNSPECIFIED format as well.\nMore information about the Name ID format you can find in the ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/authorization/SamlProviders/Overview#reportportal-configuration",children:"SAML Overview"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"fill-in-the-attribute-statements",children:"Fill in the Attribute Statements"}),"\n",(0,i.jsx)(r,{src:n(10772),alt:"Fill in the Attribute Statements"}),"\n",(0,i.jsx)(t.p,{children:"Add the following attributes:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"user.email"})," with the value ",(0,i.jsx)(t.code,{children:"email"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"user.firstName"})," with the value ",(0,i.jsx)(t.code,{children:"firstName"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"user.lastName"})," with the value ",(0,i.jsx)(t.code,{children:"lastName"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Next"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"provide-feedback",children:"Provide feedback"}),"\n",(0,i.jsx)(r,{src:n(90689),alt:"Provide feedback"}),"\n",(0,i.jsxs)(t.p,{children:["In this case, the 'I'm an Okta customer adding an internal app' option was selected, along with the 'This is an internal app that we have created' option in the ",(0,i.jsx)(t.code,{children:"App type"})," field."]}),"\n",(0,i.jsxs)(t.p,{children:["Click ",(0,i.jsx)(t.code,{children:"Finish"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"copy-metadata-url",children:"Copy metadata URL"}),"\n",(0,i.jsx)(r,{src:n(24679),alt:"Copy metadata URL"}),"\n",(0,i.jsxs)(t.p,{children:["After the App Integration is created, you will see the ",(0,i.jsx)(t.code,{children:"Settings"})," tab with the\n",(0,i.jsx)(t.code,{children:"Sign on methods"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["Copy the ' Metadata URL ' in the ",(0,i.jsx)(t.code,{children:"SAML 2.0"})," section. You will need it to\nconfigure the ReportPortal SAML plugin."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-assign-users",children:"Step 3: Assign users"}),"\n",(0,i.jsx)(r,{src:n(62369),alt:"Assign users to the Okta application"}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["You can't provision a user from Okta to ReportPortal if you already have\na pre-created internal user in ReportPortal with the same email and a different\nlogin. Read more about ",(0,i.jsx)(t.a,{href:"/reportportal-configuration/authorization/SamlProviders/Overview#user-jit-provisioning",children:"JIT provisioning"})]})}),"\n",(0,i.jsxs)(t.p,{children:["You can add a user by clicking on the ",(0,i.jsx)(t.code,{children:"Assignments"})," tab and then clicking on\nthe ",(0,i.jsx)(t.code,{children:"Assign"})," button."]}),"\n",(0,i.jsxs)(t.p,{children:["In the case above, a user with the email ",(0,i.jsx)(t.a,{href:"mailto:baba_yaga@continental.com",children:"baba_yaga@continental.com"})," doesn't exist in the deployed ReportPortal instance."]}),"\n",(0,i.jsx)(t.h2,{id:"reportportal-configuration",children:"ReportPortal configuration"}),"\n",(0,i.jsx)(t.h3,{id:"step-1-open-the-saml-plugin",children:"Step 1: Open the SAML plugin"}),"\n",(0,i.jsx)(r,{src:n(14824),alt:"Open the SAML plugin"}),"\n",(0,i.jsxs)(t.p,{children:["Log-in to the ReportPortal by Admin account and go to the ",(0,i.jsx)(t.code,{children:"Administrate"})," -> ",(0,i.jsx)(t.code,{children:"Plugins"})," -> ",(0,i.jsx)(t.code,{children:"SAML"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-2-add-a-new-integration",children:"Step 2: Add a new integration"}),"\n",(0,i.jsx)(r,{src:n(6288),alt:"Add a new integration"}),"\n",(0,i.jsxs)(t.p,{children:["Click on the ",(0,i.jsx)(t.code,{children:"Add integration"})," button."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-fill-in-the-form",children:"Step 3: Fill in the form"}),"\n",(0,i.jsx)(r,{src:n(53027),alt:"Fill in the form"}),"\n",(0,i.jsx)(t.h4,{id:"identity-provider-name-id",children:"Identity provider name ID"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Identity provider name ID"})," field, enter the\n",(0,i.jsx)(t.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," if you chose the\n",(0,i.jsx)(t.code,{children:"EmailAddress"})," format for the ",(0,i.jsx)(t.code,{children:"Name ID format"})," in the Okta configuration.\nIf you choose the ",(0,i.jsx)(t.code,{children:"UNSPECIFIED"})," format, keep this field empty."]}),"\n",(0,i.jsxs)(t.p,{children:["You can find more information about the Name ID format in the\n",(0,i.jsx)(t.a,{href:"/reportportal-configuration/authorization/SamlProviders/Overview#reportportal-configuration",children:"SAML Overview"})]}),"\n",(0,i.jsx)(t.h4,{id:"provider-name",children:"Provider name"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Provider name"})," field, enter any name you want, for example ",(0,i.jsx)(t.code,{children:"Okta"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"metadata-url",children:"Metadata URL"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Metadata URL"})," field, paste the copied Okta metadata URL."]}),"\n",(0,i.jsx)(t.h4,{id:"attribute-mapping",children:"Attribute mapping"}),"\n",(0,i.jsx)(t.p,{children:"You need to map the attributes from the Okta configuration to the ReportPortal."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Enter the ",(0,i.jsx)(t.code,{children:"email"})," attribute name in the 'Email' field."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.code,{children:"First name"})," field, enter the ",(0,i.jsx)(t.code,{children:"firstName"})," attribute name."]}),"\n",(0,i.jsxs)(t.li,{children:["In the ",(0,i.jsx)(t.code,{children:"Last name"})," field, enter the ",(0,i.jsx)(t.code,{children:"lastName"})," attribute name."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"rp-callback-url",children:"RP callback URL"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"RP callback URL"})," field, enter the URL:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-url",children:"https://<host>/uat\n"})}),"\n",(0,i.jsxs)(t.p,{children:["In the case below, the following URL was used: ",(0,i.jsx)(t.code,{children:"http://192.168.49.2/uat"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"create-the-integration",children:"Create the integration"}),"\n",(0,i.jsx)(r,{src:n(57882),alt:"Create the integration"}),"\n",(0,i.jsxs)(t.p,{children:["After you fill in the form and clicked on the ",(0,i.jsx)(t.code,{children:"Create"})," button, you will see the\nnew integration in the list."]}),"\n",(0,i.jsx)(t.h3,{id:"step-4-test-the-integration",children:"Step 4: Test the integration"}),"\n",(0,i.jsx)(r,{src:n(21295),alt:"Test the integration"}),"\n",(0,i.jsxs)(t.p,{children:["Log-out from the ReportPortal and go to login page. You will see the\n",(0,i.jsx)(t.code,{children:"Login with SAML"})," button."]}),"\n",(0,i.jsx)(r,{src:n(44733),alt:"Login with SAML"}),"\n",(0,i.jsx)(t.p,{children:"Click on the button, and you will be redirected to the Okta login page."}),"\n",(0,i.jsx)(r,{src:n(69096),alt:"User JIT provisioning"}),"\n",(0,i.jsxs)(t.p,{children:["After successful login, SAML plugin will create the user to the ReportPortal\nand you can see the user in the ",(0,i.jsx)(t.code,{children:"Users"})," section on the ",(0,i.jsx)(t.code,{children:"Administrate"})," page."]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},67305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-1.0-b46391ca80278fc6f81e6236d5510e44.jpg"},52967:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-1.1-6e649b481b94fc8c2f7c225a7f2963af.jpg"},76268:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-1.2-52080b60b5f0cff1d7691178e4d074ab.jpg"},3131:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-2.0-56c8e31b71179b0e6b24405a268039a1.jpg"},10772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-2.1-2acf9165da7d5b279fc00bc6580de960.jpg"},90689:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-2.2-7dfa864b691821ddd27afd2576f38f20.jpg"},24679:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-2.3-75778474e4534ed4b5c8c43fd3e3e91c.jpg"},62369:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-3.0-cdfc72d042d01674f7f3242c6fb0e0f3.jpg"},14824:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.0-cc7d310f72a35d143a94e4ea42883eec.png"},6288:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.1-459a3db73b671419be16349196ba9013.png"},53027:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.2-e5ee69abded0f36a275fd68d11096a71.png"},57882:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.3-c5f6ce08307a80d274fae9f2fbd31e19.png"},21295:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.4-390e156b8589420df0c5d1350fe4d409.png"},44733:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.5-4be3a0006211dac2b373a28b8e524290.png"},69096:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const i=n.p+"assets/images/okta-step-4.6-b9e90263c51613f831e6f216b1256bab.png"}}]);