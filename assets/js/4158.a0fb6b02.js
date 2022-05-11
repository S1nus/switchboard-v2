"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4158],{5310:function(n,e,r){r.d(e,{Z:function(){return x}});var t=r(5773),i=r(808),a=r(7378),o=r(8944),s=r(5642),c=r(1652),m=r(3772),g=r(6206),p=r(4246);const l=["className","component"];var u=r(4907);const d=function(n={}){const{defaultTheme:e,defaultClassName:r="MuiBox-root",generateClassName:u,styleFunctionSx:d=c.Z}=n,x=(0,s.ZP)("div")(d);return a.forwardRef((function(n,a){const s=(0,g.Z)(e),c=(0,m.Z)(n),{className:d,component:f="div"}=c,S=(0,i.Z)(c,l);return(0,p.jsx)(x,(0,t.Z)({as:f,ref:a,className:(0,o.Z)(d,u?u(r):r),theme:s},S))}))}({defaultTheme:(0,r(2905).Z)(),defaultClassName:"MuiBox-root",generateClassName:u.Z.generate});var x=d},4384:function(n,e,r){r.d(e,{ZP:function(){return v}});var t=r(808),i=r(5773),a=r(7378),o=r(8944),s=r(2142),c=r(3772),m=r(3892),g=r(2709),p=r(2399);var l=a.createContext(),u=r(765);function d(n){return(0,u.Z)("MuiGrid",n)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,r(2897).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...x.map((n=>`grid-xs-${n}`)),...x.map((n=>`grid-sm-${n}`)),...x.map((n=>`grid-md-${n}`)),...x.map((n=>`grid-lg-${n}`)),...x.map((n=>`grid-xl-${n}`))]),S=r(4246);const $=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(n){const e=parseFloat(n);return`${e}${String(n).replace(String(e),"")||"px"}`}function h(n,e,r={}){if(!e||!n||n<=0)return[];if("string"==typeof n&&!Number.isNaN(Number(n))||"number"==typeof n)return[r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:t,sm:i,md:a,lg:o,xl:s}=n;return[Number(t)>0&&(r[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(a)>0&&(r[`spacing-md-${String(a)}`]||`spacing-md-${String(a)}`),Number(o)>0&&(r[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(s)>0&&(r[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const b=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,e)=>{const{container:r,direction:t,item:i,lg:a,md:o,sm:s,spacing:c,wrap:m,xl:g,xs:p,zeroMinWidth:l}=n.ownerState;return[e.root,r&&e.container,i&&e.item,l&&e.zeroMinWidth,...h(c,r,e),"row"!==t&&e[`direction-xs-${String(t)}`],"wrap"!==m&&e[`wrap-xs-${String(m)}`],!1!==p&&e[`grid-xs-${String(p)}`],!1!==s&&e[`grid-sm-${String(s)}`],!1!==o&&e[`grid-md-${String(o)}`],!1!==a&&e[`grid-lg-${String(a)}`],!1!==g&&e[`grid-xl-${String(g)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:e}){const r=(0,s.P$)({values:e.direction,breakpoints:n.breakpoints.values});return(0,s.k9)({theme:n},r,(n=>{const e={flexDirection:n};return 0===n.indexOf("column")&&(e[`& > .${f.item}`]={maxWidth:"none"}),e}))}),(function({theme:n,ownerState:e}){const{container:r,rowSpacing:t}=e;let i={};if(r&&0!==t){const e=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},e,(e=>{const r=n.spacing(e);return"0px"!==r?{marginTop:`-${w(r)}`,[`& > .${f.item}`]:{paddingTop:w(r)}}:{}}))}return i}),(function({theme:n,ownerState:e}){const{container:r,columnSpacing:t}=e;let i={};if(r&&0!==t){const e=(0,s.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,s.k9)({theme:n},e,(e=>{const r=n.spacing(e);return"0px"!==r?{width:`calc(100% + ${w(r)})`,marginLeft:`-${w(r)}`,[`& > .${f.item}`]:{paddingLeft:w(r)}}:{}}))}return i}),(function({theme:n,ownerState:e}){let r;return n.breakpoints.keys.reduce(((t,a)=>{let o={};if(e[a]&&(r=e[a]),!r)return t;if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,s.P$)({values:e.columns,breakpoints:n.breakpoints.values}),m="object"==typeof c?c[a]:c;if(null==m)return t;const g=Math.round(r/m*1e8)/1e6+"%";let p={};if(e.container&&e.item&&0!==e.columnSpacing){const r=n.spacing(e.columnSpacing);if("0px"!==r){const n=`calc(${g} + ${w(r)})`;p={flexBasis:n,maxWidth:n}}}o=(0,i.Z)({flexBasis:g,flexGrow:0,maxWidth:g},p)}return 0===n.breakpoints.values[a]?Object.assign(t,o):t[n.breakpoints.up(a)]=o,t}),{})}));var v=a.forwardRef((function(n,e){const r=(0,p.Z)({props:n,name:"MuiGrid"}),s=(0,c.Z)(r),{className:g,columns:u,columnSpacing:x,component:f="div",container:w=!1,direction:v="row",item:Z=!1,lg:k=!1,md:N=!1,rowSpacing:W,sm:M=!1,spacing:z=0,wrap:C="wrap",xl:P=!1,xs:G=!1,zeroMinWidth:y=!1}=s,B=(0,t.Z)(s,$),j=W||z,R=x||z,T=a.useContext(l),F=w?u||12:T,L=(0,i.Z)({},s,{columns:F,container:w,direction:v,item:Z,lg:k,md:N,sm:M,rowSpacing:j,columnSpacing:R,wrap:C,xl:P,xs:G,zeroMinWidth:y}),O=(n=>{const{classes:e,container:r,direction:t,item:i,lg:a,md:o,sm:s,spacing:c,wrap:g,xl:p,xs:l,zeroMinWidth:u}=n,x={root:["root",r&&"container",i&&"item",u&&"zeroMinWidth",...h(c,r),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==g&&`wrap-xs-${String(g)}`,!1!==l&&`grid-xs-${String(l)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==o&&`grid-md-${String(o)}`,!1!==a&&`grid-lg-${String(a)}`,!1!==p&&`grid-xl-${String(p)}`]};return(0,m.Z)(x,d,e)})(L);return(0,S.jsx)(l.Provider,{value:F,children:(0,S.jsx)(b,(0,i.Z)({ownerState:L,className:(0,o.Z)(O.root,g),as:f,ref:e},B))})}))}}]);