"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6027],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,u(u({ref:t},p),{},{components:r})):n.createElement(f,u({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<l;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1672:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var n=r(2685),a=r(1244),l=(r(7378),r(5318)),u=["components"],i={},o=void 0,c={unversionedId:"types/OracleMetrics",id:"types/OracleMetrics",title:"OracleMetrics",description:"| Field | Type | Description |",source:"@site/idl/types/OracleMetrics.md",sourceDirName:"types",slug:"/types/OracleMetrics",permalink:"/idl/types/OracleMetrics",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lanes",permalink:"/idl/types/Lanes"},next:{title:"OracleResponseType",permalink:"/idl/types/OracleResponseType"}},p={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consecutiveSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive successful update request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consecutiveError"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in an error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consecutiveDisagreement"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a disagreement with the accepted median result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consecutiveLateResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that were posted on-chain late and not included in an accepted result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"consecutiveFailure"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of consecutive update request that resulted in a failure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalSuccess"),(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of successful update request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalError"),(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in an error")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalDisagreement"),(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of update request that resulted in a disagreement with the accepted median result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalLateResponse"),(0,l.kt)("td",{parentName:"tr",align:null},"u128"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of update request that were posted on-chain late and not included in an accepted result")))))}m.isMDXComponent=!0}}]);