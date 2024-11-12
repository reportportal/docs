"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23278],{70999:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide","title":"Plugin UI development guide","description":"The described approach cover the UI part of the plugin engine starting from ReportPortal version 24.1.","source":"@site/docs/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide.md","sourceDirName":"developers-guides/PluginDevelopersGuide","slug":"/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide","permalink":"/docs/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide","draft":false,"unlisted":false,"editUrl":"https://github.com/reportportal/docs/blob/develop/docs/developers-guides/PluginDevelopersGuide/PluginUIDevelopersGuide.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Plugin UI development guide"},"sidebar":"docs","previous":{"title":"Plugin API development guide","permalink":"/docs/developers-guides/PluginDevelopersGuide/PluginAPIDevelopersGuide"},"next":{"title":"ReportPortal API","permalink":"/docs/developers-guides/ReportPortalAPI"}}');var s=t(74848),r=t(28453);const o={sidebar_label:"Plugin UI development guide"},d="Plugin UI development guide",l={},a=[{value:"The concept",id:"the-concept",level:2},{value:"From Service UI side",id:"from-service-ui-side",level:3},{value:"Libs sharing",id:"libs-sharing",level:4},{value:"Shared extension props",id:"shared-extension-props",level:5},{value:"Extension points",id:"extension-points",level:4}];function c(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"plugin-ui-development-guide",children:"Plugin UI development guide"})}),"\n",(0,s.jsx)(i.p,{children:"The described approach cover the UI part of the plugin engine starting from ReportPortal version 24.1."}),"\n",(0,s.jsxs)(i.p,{children:["To learn how deal with ReportPortal plugins from the Backend side, follow the ",(0,s.jsx)(i.a,{href:"/docs/developers-guides/PluginDevelopersGuide/PluginAPIDevelopersGuide",children:"separate guide"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"the-concept",children:"The concept"}),"\n",(0,s.jsxs)(i.p,{children:["The Service UI and Plugin UI are integrated in runtime using JavaScript and share the common dependencies via ",(0,s.jsx)(i.a,{href:"https://webpack.js.org/concepts/module-federation/",children:"Webpack Module Federation"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"from-service-ui-side",children:"From Service UI side"}),"\n",(0,s.jsxs)(i.p,{children:["The ReportPortal Service UI (the core UI - further in the text) is built with the React library and uses Redux for state management.\nIt has a list with extension points that can be used to extend the core UI with custom React components come from plugins. Extension points are described ",(0,s.jsx)(i.a,{href:"#",children:"here"}),".\nThe context (e.g. current user, project) from core UI is shared via Redux state and can be accessed in plugins. In addition to this, the core UI provides a set of common components and utils that can be used in plugins as well."]}),"\n",(0,s.jsxs)(i.p,{children:["After uploading the plugin to the ReportPortal (see ",(0,s.jsx)(i.a,{href:"#",children:"how"}),") and opening the application in browser, the core UI will load the descriptors file (",(0,s.jsx)(i.code,{children:"metadata.json"}),") from plugin to define the extension points implemented there."]}),"\n",(0,s.jsx)(i.p,{children:"Once the place with particular extension point opened in the application (e.g. Settings page), the core UI loads the React component from the Plugin UI files and render it in the appropriate place in application."}),"\n",(0,s.jsx)(i.h4,{id:"libs-sharing",children:"Libs sharing"}),"\n",(0,s.jsx)(i.p,{children:"The core UI shares its major dependencies via Webpack Module Federation plugin.\nThat means that libs can be safely reused in plugin without loading their duplicate to the browser if the version of the lib satisfies the plugin needs."}),"\n",(0,s.jsx)(i.p,{children:"The list with shared libs from core UI:"}),"\n",(0,s.jsx)(i.p,{children:"Create table."}),"\n",(0,s.jsx)(i.h5,{id:"shared-extension-props",children:"Shared extension props"}),"\n",(0,s.jsxs)(i.p,{children:["After embedding into the core UI, each Plugin UI extension component receives the rich set of components and utils via props.\nThe complete set of such a props can be found ",(0,s.jsx)(i.a,{href:"https://github.com/reportportal/service-ui/blob/develop/app/src/controllers/plugins/uiExtensions/createImportProps.js",children:"in the core UI"}),", some of them are described via TS definitions in the ",(0,s.jsx)(i.a,{href:"https://github.com/reportportal/plugin-template/tree/main/plugin/ui/src/types/extensionProps",children:"plugin template repo"}),"."]}),"\n",(0,s.jsx)(i.h4,{id:"extension-points",children:"Extension points"}),"\n",(0,s.jsx)(i.p,{children:"The list with supported extension points by core UI:"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Extension type"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"settingsTab"}),(0,s.jsxs)(i.td,{children:["Adds the new tab on project settings page (",(0,s.jsx)(i.em,{children:"https://your_server/ui/#(projectName)/settings/(tabName)"}),")."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"modal"}),(0,s.jsxs)(i.td,{children:["Adds the new modal component to the system (can be shown by calling ",(0,s.jsx)(i.code,{children:"showModalAction"})," with corresponding modal ",(0,s.jsx)(i.code,{children:"name"}),")."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"adminPage"}),(0,s.jsxs)(i.td,{children:["Adds the new page to the ",(0,s.jsx)(i.em,{children:"administrate"})," section."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"integrationFormFields"}),(0,s.jsxs)(i.td,{children:["Provides the fields to the integration creation modal on project integrations page (",(0,s.jsx)(i.em,{children:"https://your_server/ui/#(projectName)/settings/integrations"}),").",(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"IntegrationFormField"})," component from Core UI can be used here to simplify form building process.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Integration settings for the plugin will be available only if plugin provides ",(0,s.jsx)(i.code,{children:"embedded"})," property in its ",(0,s.jsx)(i.code,{children:"details"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"integrationSettings"}),(0,s.jsxs)(i.td,{children:["Provides the integration settings component on project integrations page (",(0,s.jsx)(i.em,{children:"https://your_server/ui/#(projectName)/settings/integrations"}),").",(0,s.jsx)("br",{})," ",(0,s.jsx)(i.code,{children:"IntegrationSettings"})," component from Core UI can be used here to reduce the time for building communication with API and follow common design and UX patterns as in other integrations.",(0,s.jsx)("br",{}),(0,s.jsx)(i.strong,{children:"Note:"})," Integration settings for the plugin will be available only if plugin provides ",(0,s.jsx)(i.code,{children:"embedded"})," property in its ",(0,s.jsx)(i.code,{children:"details"}),"."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sidebarComponent"}),(0,s.jsx)(i.td,{children:"Adds a component to the application sidebar."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"launchItemComponent"}),(0,s.jsx)(i.td,{children:"Adds a component to the every launch entity on launches page (component will be displayed under the launch name)."})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["projectPage (if ",(0,s.jsx)(i.code,{children:"icon"})," property exists, the link will be automatically added to the sidebar). Right now only SVG icons supported."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);