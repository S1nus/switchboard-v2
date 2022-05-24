"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9411],{5318:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,k=c["".concat(o,".").concat(s)]||c[s]||d[s]||l;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u.mdxType="string"==typeof t?t:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1387:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(2685),a=n(1244),l=(n(7378),n(5318)),i=["components"],u={},o=void 0,p={unversionedId:"instructions/leaseWithdraw",id:"instructions/leaseWithdraw",title:"leaseWithdraw",description:"Accounts",source:"@site/idl/instructions/leaseWithdraw.md",sourceDirName:"instructions",slug:"/instructions/leaseWithdraw",permalink:"/idl/instructions/leaseWithdraw",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"leaseSetAuthority",permalink:"/idl/instructions/leaseSetAuthority"},next:{title:"oracleHeartbeat",permalink:"/idl/instructions/oracleHeartbeat"}},m={},d=[{value:"Accounts",id:"accounts",level:2},{value:"Params",id:"params",level:2}],c={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"accounts"},"Accounts"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"isMut"),(0,l.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lease"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"escrow"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregator"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queue"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withdrawAuthority"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withdrawAccount"),(0,l.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenProgram"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"The Solana token program account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"programState"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"The Switchboard ",(0,l.kt)("a",{parentName:"td",href:"/idl/accounts/SbState"},"SbState")," account.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stateBump"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"/idl/accounts/SbState"},"SbState")," bump used to derive its public key.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"leaseBump"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"u64"),(0,l.kt)("td",{parentName:"tr",align:null},"Token amount to withdraw from the lease escrow")))))}s.isMDXComponent=!0}}]);