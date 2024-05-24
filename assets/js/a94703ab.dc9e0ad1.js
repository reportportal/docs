"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94368],{3394:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(67294),s=a(90512),o=a(71667),i=a(35281),l=a(53438),r=a(1116),c=a(95999),d=a(2730);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=a(85893);function b(){const{shown:e,scrollToTop:t}=(0,d.a)({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.Z)("clean-btn",i.k.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var h=a(91442),p=a(16550),x=a(87524),f=a(86668),j=a(21327);function k(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const C={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function _(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.Z)("button button--secondary button--outline",C.collapseSidebarButton),onClick:t,children:(0,m.jsx)(k,{className:C.collapseSidebarButtonIcon})})}var v=a(59689),g=a(12466),S=a(14353),I=a(902),N=a(86043),B=a(48596),T=a(33692),y=a(72389);function A(e){let{collapsed:t,categoryLabel:a,onClick:n}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.translate)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:a}):(0,c.translate)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:a}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:a,activePath:o,level:r,index:c,...d}=e;const{items:u,label:b,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,f.L)(),k=function(e){const t=(0,y.default)();return(0,n.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),C=(0,l._F)(t,o),_=(0,B.Mg)(x,o),{collapsed:v,setCollapsed:g}=(0,N.u)({initialState:()=>!!h&&(!C&&t.collapsed)}),{expandedItem:L,setExpandedItem:Z}=(0,S.f)(),w=function(e){void 0===e&&(e=!v),Z(e?null:c),g(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:s}=e;const o=(0,I.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&s(!1)}),[t,o,a,s])}({isActive:C,collapsed:v,updateCollapsed:w}),(0,n.useEffect)((()=>{h&&null!=L&&L!==c&&j&&g(!0)}),[h,L,c,g,j]),(0,m.jsxs)("li",{className:(0,s.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,m.jsxs)("div",{className:(0,s.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,m.jsx)(T.default,{className:(0,s.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":C}),onClick:h?e=>{a?.(t),x?w(!1):(e.preventDefault(),w())}:()=>{a?.(t)},"aria-current":_?"page":void 0,role:h&&!x?"button":void 0,"aria-expanded":h&&!x?!v:void 0,href:h?k??"#":k,...d,children:b}),x&&h&&(0,m.jsx)(A,{collapsed:v,categoryLabel:b,onClick:e=>{e.preventDefault(),w()}})]}),(0,m.jsx)(N.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,m.jsx)(W,{items:u,tabIndex:v?-1:0,onItemClick:a,activePath:o,level:r+1})})]})}var Z=a(13919),w=a(39471);const M={menuExternalLink:"menuExternalLink_NmtK"};function H(e){let{item:t,onItemClick:a,activePath:n,level:o,index:r,...c}=e;const{href:d,label:u,className:b,autoAddBaseUrl:h}=t,p=(0,l._F)(t,n),x=(0,Z.Z)(d);return(0,m.jsx)("li",{className:(0,s.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",b),children:(0,m.jsxs)(T.default,{className:(0,s.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:a?()=>a(t):void 0},...c,children:[u,!x&&(0,m.jsx)(w.Z,{})]})},u)}const P={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:a,index:n}=e;const{value:o,defaultStyle:l,className:r}=t;return(0,m.jsx)("li",{className:(0,s.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),l&&[P.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:o}},n)}function E(e){let{item:t,...a}=e;switch(t.type){case"category":return(0,m.jsx)(L,{item:t,...a});case"html":return(0,m.jsx)(R,{item:t,...a});default:return(0,m.jsx)(H,{item:t,...a})}}function F(e){let{items:t,...a}=e;const n=(0,l.f)(t,a.activePath);return(0,m.jsx)(S.D,{children:n.map(((e,t)=>(0,m.jsx)(E,{item:e,index:t,...a},t)))})}const W=(0,n.memo)(F),D={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function V(e){let{path:t,sidebar:a,className:o}=e;const l=function(){const{isActive:e}=(0,v.nT)(),[t,a]=(0,n.useState)(e);return(0,g.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,s.Z)("menu thin-scrollbar",D.menu,l&&D.menuWithAnnouncementBar,o),children:(0,m.jsx)("ul",{className:(0,s.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(W,{items:a,activePath:t,level:1})})})}const U="sidebar_njMd",K="sidebarWithHideableNavbar_wUlq",Y="sidebarHidden_VK0M",z="sidebarLogo_isFc";function G(e){let{path:t,sidebar:a,onCollapse:n,isHidden:o}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:l}}}=(0,f.L)();return(0,m.jsxs)("div",{className:(0,s.Z)(U,i&&K,o&&Y),children:[i&&(0,m.jsx)(j.Z,{tabIndex:-1,className:z}),(0,m.jsx)(V,{path:t,sidebar:a}),l&&(0,m.jsx)(_,{onClick:n})]})}const O=n.memo(G);var q=a(13102),J=a(93163);const Q=e=>{let{sidebar:t,path:a}=e;const n=(0,J.e)();return(0,m.jsx)("ul",{className:(0,s.Z)(i.k.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(W,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1})})};function X(e){return(0,m.jsx)(q.Zo,{component:Q,props:e})}const $=n.memo(X);function ee(e){const t=(0,x.i)(),a="desktop"===t||"ssr"===t,n="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[a&&(0,m.jsx)(O,{...e}),n&&(0,m.jsx)($,{...e})]})}const te={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function ae(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:te.expandButton,title:(0,c.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(k,{className:te.expandButtonIcon})})}const ne={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function se(e){let{children:t}=e;const a=(0,r.V)();return(0,m.jsx)(n.Fragment,{children:t},a?.name??"noSidebar")}function oe(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:l}=(0,p.TH)(),[r,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{r&&c(!1),!r&&(0,h.n)()&&c(!0),o((e=>!e))}),[o,r]);return(0,m.jsx)("aside",{className:(0,s.Z)(i.k.docs.docSidebarContainer,ne.docSidebarContainer,a&&ne.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ne.docSidebarContainer)&&a&&c(!0)},children:(0,m.jsx)(se,{children:(0,m.jsxs)("div",{className:(0,s.Z)(ne.sidebarViewport,r&&ne.sidebarViewportHidden),children:[(0,m.jsx)(ee,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,m.jsx)(ae,{toggleSidebar:d})]})})})}const ie={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function le(e){let{hiddenSidebarContainer:t,children:a}=e;const n=(0,r.V)();return(0,m.jsx)("main",{className:(0,s.Z)(ie.docMainContainer,(t||!n)&&ie.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced),children:a})})}const re={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ce(e){let{children:t}=e;const a=(0,r.V)(),[s,o]=(0,n.useState)(!1);return(0,m.jsxs)("div",{className:re.docsWrapper,children:[(0,m.jsx)(b,{}),(0,m.jsxs)("div",{className:re.docRoot,children:[a&&(0,m.jsx)(oe,{sidebar:a.items,hiddenSidebarContainer:s,setHiddenSidebarContainer:o}),(0,m.jsx)(le,{hiddenSidebarContainer:s,children:t})]})]})}var de=a(40674);function ue(e){const t=(0,l.SN)(e);if(!t)return(0,m.jsx)(de.Z,{});const{docElement:a,sidebarName:n,sidebarItems:c}=t;return(0,m.jsx)(o.FG,{className:(0,s.Z)(i.k.page.docsDocPage),children:(0,m.jsx)(r.b,{name:n,items:c,children:(0,m.jsx)(ce,{children:a})})})}},40674:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(71667),s=a(67294),o=a(92503);const i="not-found-content_BtrZ",l="not-found-title_K9jB",r="not-found-text_yyzJ",c="not-found-img__KqI",d="search-button-wrapper_Mh6v";var u=a(73935),m=a(57052),b=a(26731),h=a(33692),p=a(16550),x=a(66177),f=a(98022),j=a(239),k=a(37006),C=a(95999),_=a(52263),v=a(28364),g=a(45697),S=a.n(g);const I="button_IjDh";var N=a(85893);const B=(0,s.forwardRef)(((e,t)=>{let{children:a,ariaLabel:n,onClick:s}=e;return(0,N.jsx)("button",{type:"button","aria-label":n,onClick:s,className:I,ref:t,children:a})}));B.propTypes={children:S().node,ariaLabel:S().string,onClick:S().func},B.defaultProps={children:null,ariaLabel:"",onClick:()=>{}};const T={"search-icon":"search-icon_u_mf"};function y(e){let{hit:t,children:a}=e;return(0,N.jsx)(h.default,{to:t.url,children:a})}function A(e){let{state:t,onClose:a}=e;const n=(0,x.M)();return(0,N.jsx)(h.default,{to:n(t.query),onClick:a,children:(0,N.jsx)(C.default,{id:"theme.SearchBar.seeAll",values:{count:t.context.nbHits},children:"See all {count} results"})})}function L(){const{siteConfig:e}=(0,_.default)(),t=e.themeConfig.algolia,{siteMetadata:a}=(0,_.default)(),n=(0,j.l)(),o=(0,k.r)(),i=t.searchParameters?.facetFilters??[],l=t.contextualSearch?function(e,t){const a=e=>"string"==typeof e?[e]:e;return[...a(e),...a(t)]}(o,i):i,r={...t.searchParameters,facetFilters:l},c=(0,p.k6)(),d=(0,s.useRef)(null),h=(0,s.useRef)(null),[x,C]=(0,s.useState)(!1),[g,S]=(0,s.useState)(void 0),I=(0,s.useCallback)((()=>{C(!0)}),[C]),L=(0,s.useCallback)((()=>{C(!1),d.current?.remove()}),[C]),Z=(0,s.useCallback)((e=>{C(!0),S(e.key)}),[C,S]),w=(0,s.useRef)({navigate(e){let{itemUrl:a}=e;(0,f.F)(t.externalUrlRegex,a)?window.location.href=a:c.push(a)}}).current,M=(0,s.useRef)((e=>t.transformItems?t.transformItems(e):e.map((e=>({...e,url:n(e.url)}))))).current,H=(0,s.useMemo)((()=>function(e){return(0,N.jsx)(A,{...e,onClose:L})}),[L]),P=(0,s.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",a.docusaurusVersion),e)),[a.docusaurusVersion]);(0,m.D)({isOpen:x,onOpen:I,onClose:L,onInput:Z,searchButtonRef:h});const{buttonText:R="Search",buttonAriaLabel:E="Search"}=v.default.button;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(B,{ref:h,onClick:I,ariaLabel:E,children:[(0,N.jsx)("i",{className:T["search-icon"]}),R]}),x&&(0,u.createPortal)((0,N.jsx)(b.H,{onClose:L,initialScrollY:window.scrollY,initialQuery:g,navigator:w,transformItems:M,hitComponent:y,transformSearchClient:P,...t.searchPagePath&&{resultsFooterComponent:H},...t,searchParameters:r,placeholder:v.default.placeholder,translations:v.default.modal}),document.body)]})}const Z=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.d,{title:"Page Not Found"}),(0,N.jsxs)("div",{className:i,children:[(0,N.jsx)("div",{className:c}),(0,N.jsx)(o.default,{as:"h1",className:l,children:"Page Not Found"}),(0,N.jsx)("p",{className:r,children:"You may have used an outdated link as there have been some changes in the structure of documentation."}),(0,N.jsxs)("p",{className:r,children:["But it/'s clearly here somewhere! ",(0,N.jsx)("br",{}),"Please, use the ",(0,N.jsx)("strong",{children:"keyword search"})," to find it!"]}),(0,N.jsx)("div",{className:d,children:(0,N.jsx)(L,{})})]})]})}}}]);