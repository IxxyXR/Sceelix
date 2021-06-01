(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[9212],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4791:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={},s={unversionedId:"Graph Concepts/Entities",id:"Graph Concepts/Entities",isDocsHomePage:!1,title:"Entities",description:"The data that flows between nodes is organized in the form of objects called entities.",source:"@site/docs/04-Graph Concepts/03-Entities.md",sourceDirName:"04-Graph Concepts",slug:"/Graph Concepts/Entities",permalink:"/docs/Graph Concepts/Entities",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/docs/04-Graph Concepts/03-Entities.md",version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Graph Basics",permalink:"/docs/Graph Concepts/GraphBasics"},next:{title:"Ports",permalink:"/docs/Graph Concepts/Ports"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Available Types",id:"available-types",children:[]}],l={toc:p};function c(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The data that flows between nodes is organized in the form of objects called ",(0,r.kt)("inlineCode",{parentName:"p"},"entities"),"."),(0,r.kt)("p",null,"Entities are meant to represent independent and self-contained objects, carrying their own, specific semantics and used for specific purposes. They are the content that you want to generate, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Meshes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Surfaces"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Game Objects"),"."),(0,r.kt)("p",null,"Each entity has its own specific data model, which aggregate the necessary properties in the most adequate and optimal structure. In other words, the difference between entities help us create and manipulate data in the easiest and most efficient way through the nodes."),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("p",null,"The many entity types are organized in a hierarchy. This means that an entity of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," (a derived type) is also considered to be an ",(0,r.kt)("inlineCode",{parentName:"p"},"Actor")," (both a base and derived type), and, in turn, both are considered to be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity")," (the base type). This is useful, because it allows nodes that handle entities of a base type to accept entities of a derived type. For instance, the node ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy"),", which copies entities of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Entity"),", is capable of copying any kind of entity. If you did not have this possibility, you would need to have different nodes to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"Meshes"),", other to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths"),", and other to copy ",(0,r.kt)("inlineCode",{parentName:"p"},"Game Entities"),", for instance."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3080).Z})),(0,r.kt)("p",null,"Entities can also enclose other entities. For instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Group Entity")," can store other entities inside it, which is useful to organize data and carry it around. Another example is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mesh")," that has subentities, like ",(0,r.kt)("inlineCode",{parentName:"p"},"Faces"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Vertices")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Edges"),"."),(0,r.kt)("h2",{id:"available-types"},"Available Types"),(0,r.kt)("p",null,"At this moment, Sceelix provides the following entity types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity:")," The base type of all entities. Although it does not have a visual representation, it is useful to carry attributes (link) and trigger impulse ports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Group:")," Groups any kind of entities. Useful to organize entities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Actor:")," The base type of all 3D entities. It can be translated, rotated and scaled in 3D space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Actor Group:")," Groups any kind of actors. Useful to organize actors and perform transformations on whole sets of 3D entities."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SubEntity:")," Entities that are, in fact, inside of other entities (e.g. Mesh faces, Path vertices)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mesh:")," Set of polygonal faces, connected by vertices. The main entity to where standard 3D modeling is performed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mesh Instance:")," A reference to a mesh, but that has a distinct translation, rotation or scale. Used to create multiple copies of the same 3d model, in a way that is more CPU and GPU efficient to handle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Surface:")," A grid-based polygonal mesh, optimized for terrain generation and 2D layer sampling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Billboard:")," An image with a 3D positioning which always faces the camera. Useful for creating grass, trees and other objects at distances where geometric detail is not important, but a sheer number of instances is."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path:")," Line-based entity, connected by vertices. Used to describe ways, paths, roads, etc. before they are transformed into meshes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Unity Entity:")," A component-based entity with properties and behaviors for use inside Unity-based games. When created in the Sceelix Designer, they are automatically sent to a connected ",(0,r.kt)("a",{parentName:"li",href:"../Unity/Introduction"},"Unity Editor"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prop:")," An entity that has a visual representation, useful to set up an environment in the Sceelix Designer only (like an Ocean plane or Fire effect).")))}c.isMDXComponent=!0},3080:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Hierarchy-060fcfc11b66cff996520dcc8e8094d3.png"}}]);