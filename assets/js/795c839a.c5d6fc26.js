"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2135],{5318:function(t,e,r){r.d(e,{Zo:function(){return c},kt:function(){return s}});var n=r(7378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=p(r),s=a,d=g["".concat(u,".").concat(s)]||g[s]||m[s]||o;return r?n.createElement(d,l(l({ref:e},c),{},{components:r})):n.createElement(d,l({ref:e},c))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=g;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},800:function(t,e,r){r.r(e),r.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),l=["components"],i={},u=void 0,p={unversionedId:"instructions/aggregatorRemoveJob",id:"instructions/aggregatorRemoveJob",title:"aggregatorRemoveJob",description:"Remove a job from an aggregator.",source:"@site/idl/instructions/aggregatorRemoveJob.md",sourceDirName:"instructions",slug:"/instructions/aggregatorRemoveJob",permalink:"/idl/instructions/aggregatorRemoveJob",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aggregatorOpenRound",permalink:"/idl/instructions/aggregatorOpenRound"},next:{title:"aggregatorSaveResult",permalink:"/idl/instructions/aggregatorSaveResult"}},c={},m=[{value:"Accounts",id:"accounts",level:2},{value:"Params",id:"params",level:2}],g={toc:m};function s(t){var e=t.components,r=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Remove a job from an aggregator."),(0,o.kt)("h2",{id:"accounts"},"Accounts"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"isMut"),(0,o.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"authority"),(0,o.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"job"),(0,o.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,o.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"params"},"Params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobIdx"),(0,o.kt)("td",{parentName:"tr",align:null},"u32"),(0,o.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);