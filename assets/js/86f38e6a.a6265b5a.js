"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5043],{5318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(5773),o=r(808),l=(r(7378),r(5318)),a=["components"],i={sidebar_position:80,slug:"/oracle/gcp/deploy"},c="Deploy",p={unversionedId:"oracle/gcp/deploy",id:"oracle/gcp/deploy",title:"Deploy",description:"Build Helm Charts",source:"@site/docs/oracle/gcp/deploy.mdx",sourceDirName:"oracle/gcp",slug:"/oracle/gcp/deploy",permalink:"/oracle/gcp/deploy",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,slug:"/oracle/gcp/deploy"},sidebar:"tutorialSidebar",previous:{title:"Grafana",permalink:"/oracle/gcp/grafana"},next:{title:"Monitoring",permalink:"/oracle/monitor"}},u={},s=[{value:"Build Helm Charts",id:"build-helm-charts",level:2},{value:"Deploy Helm Charts",id:"deploy-helm-charts",level:2},{value:"Update",id:"update",level:2}],d={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy"},"Deploy"),(0,l.kt)("h2",{id:"build-helm-charts"},"Build Helm Charts"),(0,l.kt)("p",null,"After completing the steps in the previous pages, you should have a ",(0,l.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file with each of the required variables defined. See ",(0,l.kt)("a",{parentName:"p",href:"./env"},"Google Cloud / Environment")," for a list of all required variables that must be set."),(0,l.kt)("p",null,"Run the following command to build the helm charts with your environment variables injected into the manifests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,l.kt)("h2",{id:"deploy-helm-charts"},"Deploy Helm Charts"),(0,l.kt)("p",null,"Run the command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")),(0,l.kt)("p",null,"When complete, you should see your cluster running in the Google Cloud Console."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/stackdriver/docs/solutions/gke/observing"},"Google - Observing your GKE clusters")),(0,l.kt)("h2",{id:"update"},"Update"),(0,l.kt)("p",null,"If necessary, rebuild the charts to update any environment variables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,l.kt)("p",null,"then redeploy the helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")))}m.isMDXComponent=!0}}]);