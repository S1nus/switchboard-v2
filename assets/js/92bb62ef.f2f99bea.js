"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2801],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5654:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(5773),a=r(808),i=(r(7378),r(5318)),o=["components"],l={sidebar_position:40,slug:"/oracle/gcp/grafana"},c="Grafana",u={unversionedId:"oracle/gcp/grafana",id:"oracle/gcp/grafana",title:"Grafana",description:"Grafana is a visualization tool to view your cluster's metrics. While this step is optional, it is recommended if you have no other monitoring or metric suite in place.",source:"@site/docs/oracle/gcp/grafana.mdx",sourceDirName:"oracle/gcp",slug:"/oracle/gcp/grafana",permalink:"/oracle/gcp/grafana",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,slug:"/oracle/gcp/grafana"},sidebar:"tutorialSidebar",previous:{title:"Manual Setup",permalink:"/oracle/gcp/manual-setup"},next:{title:"Deploy",permalink:"/oracle/gcp/deploy"}},p={},s=[{value:"Domain Name",id:"domain-name",level:2},{value:"TLS Certificate",id:"tls-certificate",level:2},{value:"Wrapping Up",id:"wrapping-up",level:2}],f={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grafana"},"Grafana"),(0,i.kt)("p",null,"Grafana is a visualization tool to view your cluster's metrics. While this step is optional, it is recommended if you have no other monitoring or metric suite in place."),(0,i.kt)("h2",{id:"domain-name"},"Domain Name"),(0,i.kt)("p",null,"You will need a domain name to host your grafana instance. In your domain management tool, add a DNS A record with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"$EXTERNAL_IP"),"."),(0,i.kt)("p",null,"This value will be your ",(0,i.kt)("inlineCode",{parentName:"p"},"$GRAFANA_HOSTNAME")," (i.e. grafana.switchboard.com) and will be used to provision a TLS certificate."),(0,i.kt)("h2",{id:"tls-certificate"},"TLS Certificate"),(0,i.kt)("p",null,"The following steps will walk you through provisioning a TLS certificate for your domain from letsencrypt. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/helm-manifests"},"helm-manifest repo")," contains a script to walk through creating the neccessary keys and certificate signing request (CSR)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./setup-grafana.sh PROJECTNAME DOMAIN EMAIL\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PROJECTNAME is the name of the env file to store variables"),(0,i.kt)("li",{parentName:"ul"},"DOMAIN is your $GRAFANA_HOSTNAME from above"),(0,i.kt)("li",{parentName:"ul"},"EMAIL is the email you will use for your certificate signing request")),(0,i.kt)("p",null,"When the necessary keys and CSR are generated, head over to ",(0,i.kt)("a",{parentName:"p",href:"https://gethttpsforfree.com.com"},"gethttpsforfree.com")," and walk through their steps to sign your certificate. Save the final output to the filename given by the script, then rerun the script. The script will save the env variables to ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," and also output them to the console."),(0,i.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file should now contain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,i.kt)("li",{parentName:"ul"},"GRAFANA_PASSWORD (You can set this to whatever value you want)"),(0,i.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,i.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY")))}m.isMDXComponent=!0}}]);