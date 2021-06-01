(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[8069],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6372:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},c={unversionedId:"SDK/Introduction",id:"SDK/Introduction",isDocsHomePage:!1,title:"The Sceelix SDK",description:"One of the major design goals in Sceelix's development was to make it modular, extensible and accessible for all kinds of uses.",source:"@site/docs/09-SDK/01-Introduction.md",sourceDirName:"09-SDK",slug:"/SDK/Introduction",permalink:"/docs/SDK/Introduction",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/docs/09-SDK/01-Introduction.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting the Editors",permalink:"/docs/Unity/ConnectingEditors"},next:{title:"Extending the Engine",permalink:"/docs/SDK/Engine"}},l=[],s={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the major design goals in Sceelix's development was to make it modular, extensible and accessible for all kinds of uses."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9309).Z})),(0,i.kt)("p",null,"Making use of the power of the Mono/.NET Framework, Sceelix provides a development API, which allows the following: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Engine Extensibility"),": The Sceelix generation Engine, which provides the base framework for loading, managing and executing generation algorithms, can be extended with new procedures/algorithms, functions, data types, entities and other features. This brings not only new ways to manipulate the existing entities, but also to the possibility to create completely new types of content using the graph-based workflow.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"External Application Use"),": The Sceelix Generation Engine can be accessed outside the Sceelix Designer, by incorporating the libraries inside any Mono/.NET compatible application, service or game. Among other things, this could allow procedural generation workflows to be executed during runtime in a game or upon an event/request."))),(0,i.kt)("p",null,"The programming language for development is C#, much like the language that Sceelix itself was developed."))}u.isMDXComponent=!0},9309:function(e,t,n){"use strict";t.Z=n.p+"assets/images/APISampleCode-7e6cce278f955ebef86952e1cac6beb6.png"}}]);