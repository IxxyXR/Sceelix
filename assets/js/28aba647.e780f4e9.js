(self.webpackChunksceelix=self.webpackChunksceelix||[]).push([[5677],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9313:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={slug:"sceelix-open-source",title:"Sceelix is now open source!",author:"Pedro Silva",author_title:"Sceelix Creator",author_url:"https://github.com/pabsilva",author_image_url:"https://github.com/pabsilva.png",tags:["news"]},s={permalink:"/blog/sceelix-open-source",editUrl:"https://github.com/Sceelix/Sceelix/edit/master/website/blog/blog/2021-05-30-sceelix-open-source.md",source:"@site/blog/2021-05-30-sceelix-open-source.md",title:"Sceelix is now open source!",description:"Is has been a long journey developing Sceelix.",date:"2021-05-30T00:00:00.000Z",formattedDate:"May 30, 2021",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:1.765,truncated:!1},l=[{value:"A New Version",id:"a-new-version",children:[]},{value:"Moving forward!",id:"moving-forward",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Is has been a long journey developing Sceelix."),(0,i.kt)("p",null,"Sceelix started out as a Portuguese Startup company by three founders: Andr\xe9 Cardoso, Francisco Andrade and, myself, Pedro Silva. With Francisco handling the business side and Andr\xe9 the infrastructure, I focused on developing the Sceelix system."),(0,i.kt)("p",null,"Sceelix was first launched in April 2016 as a commercial product. Our intent was to grow organically with our user community. By selling an Early Access version for a lower price, we hoped to gather support and feedback from the users, keeping development in the right path and focusing on what the community really wanted. Despite having learned much in this process, our sales haven\u2019t allowed us to achieve the necessary financial sustainability to keep it going as it was."),(0,i.kt)("p",null,"In January 2018 we had to close down the business, but decided to distribute Sceelix for free, and my intention was to keep working on it on my spare time, while being available for hire for related development, support and consultancy services. But as other job opportunities arose, it became harder and harder to keep working on it. But it felt like a waste not to make more of it, given its potential."),(0,i.kt)("p",null,'As the popular saying goes "If you love something, set it free".'),(0,i.kt)("p",null," ",(0,i.kt)("em",{parentName:"p"},"And so Sceelix goes open source.")),(0,i.kt)("h3",{id:"a-new-version"},"A New Version"),(0,i.kt)("p",null,"In the scope of this change, Sceelix has officially moved from Early Access to version (1.0.0) to a new versioning nature. The login/account system has been dropped, libraries and resources were updated to match open source licenses and old, deprecated nodes were removed. You can grab it from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sceelix/Sceelix/releases/tag/v1.0.0"},"downloads page"),"."),(0,i.kt)("p",null,"The website/forum parts has been switched to open source alternatives as well, namely GitHub and GitHub Pages. The license server is soon to be disabled, so the login and registration for older versions will no longer be functional."),(0,i.kt)("h3",{id:"moving-forward"},"Moving forward!"),(0,i.kt)("p",null,"If you ever wondered how Sceelix works, this is your chance!",(0,i.kt)("br",null),"\nIf you ever want to add this or that feature, this is the time!",(0,i.kt)("br",null),"\nIf you ever wished to fix some of its nasty bugs, come help out!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Everyone is invited!")))}u.isMDXComponent=!0}}]);