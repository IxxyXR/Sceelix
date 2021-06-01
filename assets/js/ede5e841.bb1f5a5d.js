(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[8319],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},354:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={},s={unversionedId:"Graph Concepts/Flow",id:"Graph Concepts/Flow",isDocsHomePage:!1,title:"Flow",description:"In Sceelix\u2019s Graphs, the order of execution of the nodes is dictated by the way that the entity data flows between them.",source:"@site/docs/04-Graph Concepts/05-Flow.md",sourceDirName:"04-Graph Concepts",slug:"/Graph Concepts/Flow",permalink:"/docs/Graph Concepts/Flow",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/docs/04-Graph Concepts/05-Flow.md",version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ports",permalink:"/docs/Graph Concepts/Ports"},next:{title:"Parameters",permalink:"/docs/Graph Concepts/Parameters"}},c=[{value:"Parallelization",id:"parallelization",children:[]},{value:"Convergence and Divergence",id:"convergence-and-divergence",children:[]},{value:"Handling Loops",id:"handling-loops",children:[]}],l={toc:c};function u(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Sceelix\u2019s Graphs, the order of execution of the nodes is dictated by the way that the entity data flows between them."),(0,a.kt)("p",null,"A node can only be executed after it has data in its input ports. This means that the nodes that precede that node (the parent nodes) must be executed before it (the child node) can. This goes on until the process reaches nodes without predecessors \u2013 the source nodes. If there is more than one source node in the graph, they will be executed without any particular order."),(0,a.kt)("p",null,"If a node has several children nodes, they will be executed according to their connections to the parent output order, from left to right, whereas the children of the first child will also be executed even before the second child. The following figure illustrates this idea:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8548).Z})),(0,a.kt)("p",null,"In the graph editor, if you choose the option at the top menu->Graph->Execute (Step by Step), you can observe the order of execution of the graph nodes."),(0,a.kt)("p",null,"Understanding the logic of node execution order is usually not very important, since it follows the standard logic of flow diagrams that comes naturally. If you controlling references (coming soon), then managing order becomes more relevant."),(0,a.kt)("h2",{id:"parallelization"},"Parallelization"),(0,a.kt)("p",null,"In most cases, the execution of a branch of nodes is independent from one another, since they are handling different entities. Because of this, a frequent question is why does not happen in parallel, rather than in sequence, and why doesn\u2019t a node process its data once it arrives."),(0,a.kt)("p",null,"In Sceelix, nodes are executed as late as possible, so as to make sure that all their dependencies have been executed first. When it is their turn, they will handle their input queues, depending on the ",(0,a.kt)("a",{parentName:"p",href:"Ports#inputs-natures"},"nature of input port"),". The ideia for collective inputs is that they should wait to collect as much data as possible, before they execute. If, in the above figure, node \u2018E\u2019 would be a node with a collective input for merging, for instance, meshes, then it should try to wait for all the meshes it is expected to get before actually doing the merge."),(0,a.kt)("p",null,"Another reason for sequencing is the need for order, when handling references of objects. This will be explained further ahead."),(0,a.kt)("h2",{id:"convergence-and-divergence"},"Convergence and Divergence"),(0,a.kt)("p",null,"Although one edge can only make one connection between an input and an output port, ports can actually have several incoming or outgoing edges, as long as they are connected to different ports."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When an output port features many outgoing ports, there's data ",(0,a.kt)("inlineCode",{parentName:"p"},"divergence"),". In these cases, the output entities are copied to each destination input. Note that the above rule of children node order does not apply, since there is no left and right. So there\u2019s no guaranteed order of the children.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When an input features many incoming ports, there's data ",(0,a.kt)("inlineCode",{parentName:"p"},"convergence"),". In these cases, the input data is queued, also without any guaranteed order."))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9708).Z})),(0,a.kt)("h2",{id:"handling-loops"},"Handling Loops"),(0,a.kt)("p",null,"Very often, there is the need to go over several elements of a list, to execute a node several times or even repeat a couple of actions until a certain condition is met. In order to make this possible, you can connect an output port back to an input port of a parent node, creating a loop."),(0,a.kt)("p",null,"In practice, the rules for ordering and execution are the same. The only difference is that the sequence of nodes inside that loop will be repeated as many times as the data is sent back. Only then will the nodes after the loop follow their usual course. The figure below demonstrates the process."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4824).Z})))}u.isMDXComponent=!0},9708:function(e,t,n){"use strict";t.Z=n.p+"assets/images/GraphConvergenceDivergence-240370ad65cfd441776c2e688274c57e.png"},8548:function(e,t,n){"use strict";t.Z=n.p+"assets/images/GraphOrder-677741d2f7e89b86f9926cda1064588b.png"},4824:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Recursion-af233e43479b6306372062b321dc1301.png"}}]);