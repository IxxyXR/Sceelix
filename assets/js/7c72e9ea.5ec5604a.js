(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[5270],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6089:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={},s={unversionedId:"Unity/ConnectingEditors",id:"Unity/ConnectingEditors",isDocsHomePage:!1,title:"Connecting the Editors",description:"Once you have installed the plugin in your unity project, you can have it connect to Sceelix. Click the option in the top menu \u201cTools\u201d -> \u201cSceelix\u201d.",source:"@site/docs/08-Unity/03-ConnectingEditors.md",sourceDirName:"08-Unity",slug:"/Unity/ConnectingEditors",permalink:"/docs/Unity/ConnectingEditors",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/docs/08-Unity/03-ConnectingEditors.md",version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing the Plugin",permalink:"/docs/Unity/InstallingPlugin"},next:{title:"The Sceelix SDK",permalink:"/docs/SDK/Introduction"}},l=[{value:"Behind the scenes",id:"behind-the-scenes",children:[]},{value:"Exploring the options",id:"exploring-the-options",children:[]}],c={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you have installed the plugin in your unity project, you can have it connect to Sceelix. Click the option in the top menu \u201cTools\u201d -> \u201cSceelix\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6512).Z})),(0,r.kt)("p",null,"This will bring up a window with several options. Dock it somewhere on your layout. Unity requires this window to remain open in order for all its refresh and update functions to be called."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2657).Z})),(0,r.kt)("p",null,"Let\u2019s take it for a quick test. Toggle the first checkbox that says \u201cOn\u201d. This will turn on the receptor on the unity side. If Sceelix is running, the connection will be established and the status will switch from \u201cNOT CONNECTED\u201d to \u201cCONNECTED\u201c."),(0,r.kt)("p",null,"Let\u2019s go back to Sceelix and execute a graph. Open a graph and run it. In the example below, the sample graph \u201cCity.slxg\u201d is being executed."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5433).Z})),(0,r.kt)("p",null,"After a few seconds (depending on the size of the result) you should see a progress bar inside Unity, indicating that data is being processed. If everything goes well, the outcome of the graph should not only appear on the 3D Viewer, but inside Unity, too! No extra work needed!"),(0,r.kt)("h3",{id:"behind-the-scenes"},"Behind the scenes"),(0,r.kt)("p",null,"What\u2019s happening here, exactly?"),(0,r.kt)("p",null,"Basically the Sceelix plugin for Unity that you\u2019ve installed allows Sceelix to communicate Unity directly via Sockets. So as long as Unity has its toggle button \u201cOn\u201d switched on, Sceelix will send its data to Unity, which will interpret the Sceelix data, create Game Objects and add them to the current scene. These results are grouped under an empty parent object with the name of the executed graph."),(0,r.kt)("h2",{id:"exploring-the-options"},"Exploring the options"),(0,r.kt)("p",null,"Note that if you make a change to the graph and re-execute it, the new result will be sent to Unity again and will replace the previous result. If you would prefer to keep the result, you can do so by selecting the parent game object with the graph name, going to the inspector and disabling the checkbox called \u201cRemove on Regeneration\u201d under the \u201cSceelix Designer Component\u201d. Doing so means that on the next graph regeneration, these objects will be kept."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8301).Z})),(0,r.kt)("p",null,"If you would prefer every next graph results to be kept, you can change this in the plugin options window."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4456).Z})),(0,r.kt)("p",null,"Let\u2019s take a look at the other options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connection Options"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host:")," The address of machine hosting Sceelix. 127.0.0.1 means that Sceelix is running on the same machine."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port:")," The connection port to the Sceelix Designer. It should match the configuration set in the Sceelix Designer Settings -> Unity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Log:")," If enabled, events and statuses of the connection will be logged to the Unity console."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ping Period:")," The interval of time between server pings, so as to try to automatically connect."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generation Options"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Frame Result:")," If enabled, the generated result will be zoomed in the 3D View."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asset Generation"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Store Physical Assets:")," Indicates if, when transferring textures, materials and meshes, if these should be persisted to disk (will be stored under \u2018SceelixAssets\u2019). Doing this takes more time but may be useful in some cases. If disabled, these assets will only be stored in memory and directly in the project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assets Folder:")," Indicates where to store the physical assets (if the previous option is enabled)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Clear Unused:")," Removes all generated physical assets that are not being referenced in any scene.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A note about the connection:")," Unity is not very stable when using socket connections from within the editor, and it would crash when entering play mode or when compiling the project. To avoid such a behavior, the plugin will automatically turn off the connection during such occasions and then resume afterwards, as long as the \u201cOn\u201d checkbox is enabled and according to the indicated \u201cPing Period\u201d."))}u.isMDXComponent=!0},8301:function(e,t,n){"use strict";t.Z=n.p+"assets/images/RemoveOnRegeneration-e49f8875ffd6c415869523ea2ee951ad.png"},5433:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SceelixToUnity-a45fbba845caadee307d57d55c12f50c.png"},6512:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UnityPluginToolMenu-0e84fa11f7fca654cd696d3464ccb5f0.png"},2657:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UnityPluginWindow-cec85aca74e0c10fde199d23a846df0a.png"},4456:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UnityPluginWindowDefaultRemove-ae65b581ade57d39d284afd23a8a7ecb.png"}}]);