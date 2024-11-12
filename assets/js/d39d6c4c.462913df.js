(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61197],{58356:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"api/service-api/versions/5.11/reportportal","title":"ReportPortal","description":"Report Portal API documentation","source":"@site/docs/api/service-api/versions/5.11/reportportal.info.mdx","sourceDirName":"api/service-api/versions/5.11","slug":"/api/service-api/versions/5.11/reportportal","permalink":"/docs/api/service-api/versions/5.11/reportportal","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"reportportal","title":"ReportPortal","description":"Report Portal API documentation","sidebar_label":"Introduction","sidebar_position":0,"hide_title":true,"custom_edit_url":null},"sidebar":"service-api-5.11","previous":{"title":"Service API","permalink":"/docs/category/api/service-api-5.11"},"next":{"title":"activity-controller","permalink":"/docs/api/service-api/versions/5.11/activity-controller"}}');var r=o(74848),a=o(28453),i=(o(43905),o(51107));o(23397),o(19365),o(69016);const s={id:"reportportal",title:"ReportPortal",description:"Report Portal API documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},l=void 0,c={},d=[];function p(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 5.11.0"}),"\n",(0,r.jsx)(i.default,{as:"h1",className:"openapi__heading",children:"ReportPortal"}),"\n",(0,r.jsx)(t.p,{children:"Report Portal API documentation"}),"\n",(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,r.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,r.jsx)(t.p,{children:"Contact"})}),(0,r.jsx)("span",{children:(0,r.jsxs)(t.p,{children:["Support: ",(0,r.jsx)(t.a,{href:"mailto:support@reportportal.io",children:"support@reportportal.io"})]})})]}),"\n",(0,r.jsxs)("div",{style:{marginBottom:"var(--ifm-paragraph-margin-bottom)"},children:[(0,r.jsx)("h3",{style:{marginBottom:"0.25rem"},children:(0,r.jsx)(t.p,{children:"License"})}),(0,r.jsx)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0",children:(0,r.jsx)(t.p,{children:"Apache 2.0"})})]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},69016:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(96540)),a=n(o(4213));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(96540)),a=o(20239),i=n(o(86025)),s=n(o(15626));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,l=()=>"dark"===t?n?.altText??o?.altText:o?.altText,c=(0,i.default)(o?.url),d=(0,i.default)(n?.url);return o&&n?r.default.createElement(s.default,{alt:l(),sources:{light:c,dark:d},className:"openapi__logo"}):o||n?r.default.createElement(s.default,{alt:l(),sources:{light:c??d,dark:c??d},className:"openapi__logo"}):void 0}},4213:function(e,t,o){var n,r,a,i=o(96763);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){c(n.response,t,o)},n.onerror=function(){i.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var i=s.URL||s.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):r(l.href)?n(e,t,o):a(l,l.target="_blank")):(l.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(r(e))n(e,o,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){a(s)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,i=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||a&&i||l)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},d.readAsDataURL(e)}else{var p=s.URL||s.webkitURL,u=p.createObjectURL(e);r?r.location=u:location.href=u,r=null,setTimeout((function(){p.revokeObjectURL(u)}),4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?n.apply(t,r):n)||(e.exports=a)}}]);