(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[9797],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(n),d=o,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3406:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={},s={unversionedId:"Working With Sceelix/Interface",id:"Working With Sceelix/Interface",isDocsHomePage:!1,title:"Interface, Layouts and Settings",description:"Sceelix is a highly modular system, whereas each module (or plugin) contains a set of windows, each containing specific features.",source:"@site/docs/03-Working With Sceelix/01-Interface.md",sourceDirName:"03-Working With Sceelix",slug:"/Working With Sceelix/Interface",permalink:"/docs/Working With Sceelix/Interface",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/docs/03-Working With Sceelix/01-Interface.md",version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging and Troubleshooting",permalink:"/docs/Setting Up/Logging"},next:{title:"Project Explorer",permalink:"/docs/Working With Sceelix/ProjectExplorer"}},c=[{value:"Layouts",id:"layouts",children:[]},{value:"Settings",id:"settings",children:[]}],l={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sceelix is a highly modular system, whereas each module (or plugin) contains a set of windows, each containing specific features."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9240).Z})),(0,i.kt)("p",null,"The type of windows available at this point are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"ProjectExplorer"},"Project Window"),":")," Here is where you can create, load and navigate through resources, which are organized in the form of folders and files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"DocumentArea"},"Document Window"),":")," When you double-click a project resource (images, graphs, text files\u2026), this is where the content will be displayed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"3DViewer"},"3D Viewer"),":")," This is where the generated 3D objects will be displayed when you execute a graph."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"Inspector"},"Inspector"),":")," When you click on graph nodes or 3D objects, their properties will be shown in the window, allowing you to change them."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"LogViewer"},"Log"),":")," Error, Warning and Informative messages are listed here."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"DataExplorer"},"Data Explorer"),":")," Lists all the data that were generated through graphs.")),(0,i.kt)("p",null,"More details about the purpose and functioning of each window are described in further sections."),(0,i.kt)("h2",{id:"layouts"},"Layouts"),(0,i.kt)("p",null,"You are free to move and resize the existing windows by dragging them with the left mouse button. You can also open/close them and check for other available windows via the top menu -> Window option. Finally, you can load existing window layouts (via top menu ->Window->Layouts) and save your custom layout (via top menu ->Window->Layouts -> Save Layout), which allow you to switch between different window configurations easily."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3448).Z})),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"Most configurable options are accessible in the top menu, via \u201cApplication->Settings\u201d. Settings are usually organized per category/module/window and changes only take effect after pressing OK. Hovering each property will show a corresponding description of their function."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8736).Z})))}u.isMDXComponent=!0},8736:function(e,t,n){"use strict";t.Z=n.p+"assets/images/DesignerSettings-4bb8eed1b5ef5fb1565d20c75353c19e.png"},3448:function(e,t,n){"use strict";t.Z=n.p+"assets/images/LayoutMenu-721af2d44cdfadebb269474292e2db6b.png"},9240:function(e,t,n){"use strict";t.Z=n.p+"assets/images/MainScreen-977e60535b718c8dccd5c88e04184c2e.png"}}]);