(window.webpackJsonp=window.webpackJsonp||[]).push([[10,54],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(112),r=a(113),o=a(23),i=a(117),s=a(2),m=a(115),u=a(142),b=a(146),d=a(147),h=a(148),p=a(145),E=a(114),k=a(121),f=a(61),v=a.n(f);const g=(e,t)=>"link"===e.type?((e,t)=>{const a=e=>e.endsWith("/")?e:e+"/";return a(e)===a(t)})(e.href,t):"category"===e.type&&e.items.some((e=>g(e,t)));function O({item:e,onItemClick:t,collapsible:a,activePath:c,...r}){const{items:o,label:i}=e,u=g(e,c),b=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(u),[d,h]=Object(n.useState)((()=>!!a&&(!u&&e.collapsed)));Object(n.useEffect)((()=>{u&&!b&&d&&h(!1)}),[u,b,d]);const p=Object(n.useCallback)((e=>{e.preventDefault(),h((e=>!e))}),[h]);return 0===o.length?null:l.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:i},l.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&u,[v.a.menuLinkText]:!a}),onClick:a?p:void 0,href:a?"#!":void 0},r),i),l.a.createElement("ul",{className:"menu__list"},o.map((e=>l.a.createElement(_,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:c})))))}function j({item:e,onItemClick:t,activePath:a,collapsible:n,...c}){const{href:r,label:o}=e,i=g(e,a);return l.a.createElement("li",{className:"menu__list-item",key:o},l.a.createElement(E.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:r},Object(k.a)(r)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),o))}function _(e){switch(e.item.type){case"category":return l.a.createElement(O,e);case"link":default:return l.a.createElement(j,e)}}var C=function({path:e,sidebar:t,sidebarCollapsible:a=!0}){const[c,o]=Object(n.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:i="",hideOnScroll:k=!1}={}}={}}={},isClient:f}=Object(r.a)(),{logoLink:g,logoLinkProps:O,logoImageUrl:j,logoAlt:C}=Object(h.a)(),{isAnnouncementBarClosed:N}=Object(u.a)(),{scrollY:w}=Object(p.a)();Object(b.a)(c);const y=Object(d.a)();return Object(n.useEffect)((()=>{y===d.b.desktop&&o(!1)}),[y]),l.a.createElement("div",{className:Object(m.a)(v.a.sidebar,{[v.a.sidebarWithHideableNavbar]:k})},k&&l.a.createElement(E.a,Object(s.a)({tabIndex:-1,className:v.a.sidebarLogo,to:g},O),null!=j&&l.a.createElement("img",{key:f,src:j,alt:C}),null!=i&&l.a.createElement("strong",null,i)),l.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",v.a.menu,{"menu--show":c,[v.a.menuWithAnnouncementBar]:!N&&0===w})},l.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{o(!c)}},c?l.a.createElement("span",{className:Object(m.a)(v.a.sidebarMenuIcon,v.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{"aria-label":"Menu",className:v.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},t.map((t=>l.a.createElement(_,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),o(!1)},collapsible:a,activePath:e}))))))},N=a(127),w=a(139),y=a(119),M=a(118),I=a(67),L=a.n(I);function P({version:e,isLast:t}){const a=t?[e,"latest"]:[e];return l.a.createElement(M.a,null,l.a.createElement("meta",{name:"docsearch:version",content:a.join(",")}))}function x({currentDocRoute:e,versionMetadata:t,children:a}){var n,o;const{siteConfig:s,isClient:m}=Object(r.a)(),{permalinkToSidebar:u,docsSidebars:b,version:d,isLast:h}=t,p=u[e.path],E=b[p];return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,{version:d,isLast:h}),l.a.createElement(i.a,{key:m},l.a.createElement("div",{className:L.a.docPage},E&&l.a.createElement("div",{className:L.a.docSidebarContainer,role:"complementary"},l.a.createElement(C,{key:p,sidebar:E,path:e.path,sidebarCollapsible:null===(n=null===(o=s.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===n||n})),l.a.createElement("main",{className:L.a.docMainContainer},l.a.createElement(c.a,{components:N.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,c=t.find((e=>Object(y.matchPath)(n.pathname,e)));return c?l.a.createElement(x,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):l.a.createElement(w.default,e)}},139:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(117);t.default=function(){return l.a.createElement(c.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);