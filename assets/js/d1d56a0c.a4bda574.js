"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2710],{5318:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return g}});var n=r(7378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=c(r),g=a,d=m["".concat(u,".").concat(g)]||m[g]||p[g]||i;return r?n.createElement(d,l(l({ref:e},s),{},{components:r})):n.createElement(d,l({ref:e},s))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2495:function(t,e,r){r.r(e),r.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(2685),a=r(1244),i=(r(7378),r(5318)),l=["components"],o={},u=void 0,c={unversionedId:"instructions/aggregatorSetMinOracles",id:"instructions/aggregatorSetMinOracles",title:"aggregatorSetMinOracles",description:"Set the minimum number of oracle responses required before a round is validated.",source:"@site/idl/instructions/aggregatorSetMinOracles.md",sourceDirName:"instructions",slug:"/instructions/aggregatorSetMinOracles",permalink:"/idl/instructions/aggregatorSetMinOracles",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aggregatorSetMinJobs",permalink:"/idl/instructions/aggregatorSetMinJobs"},next:{title:"aggregatorSetQueue",permalink:"/idl/instructions/aggregatorSetQueue"}},s={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Params",id:"params",level:2}],m={toc:p};function g(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Set the minimum number of oracle responses required before a round is validated."),(0,i.kt)("h2",{id:"accounts"},"Accounts"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"isMut"),(0,i.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authority"),(0,i.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"params"},"Params"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minOracleResults"),(0,i.kt)("td",{parentName:"tr",align:null},"u32"),(0,i.kt)("td",{parentName:"tr",align:null},"Minimum number of oracle responses required before a round is validated.")))))}g.isMDXComponent=!0}}]);