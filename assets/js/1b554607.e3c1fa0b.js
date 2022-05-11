"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4713],{5318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3072:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=t(5773),o=t(808),r=(t(7378),t(5318)),s=["components"],i={sidebar_position:65,title:"Private Queues"},l=void 0,c={unversionedId:"private-queues",id:"private-queues",title:"Private Queues",description:"Switchboard is architected to route off-chain data to an on-chain account. A publisher is responsible for building the job definition, which defines the task(s) the oracles must perform to fetch and transform external data. Sometimes a publisher may wish to bring private data on-chain using an API key which poses a set of challenges. In order for the oracle to retrieve the data, they need access to the publisher's API key. Blockchains are public so there is no easy way to conceal the API key on-chain.",source:"@site/docs/private-queues.mdx",sourceDirName:".",slug:"/private-queues",permalink:"/private-queues",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,title:"Private Queues"},sidebar:"tutorialSidebar",previous:{title:"Randomness",permalink:"/randomness"},next:{title:"Developer Resources",permalink:"/developers"}},u={},p=[{value:"Variable Expansion",id:"variable-expansion",level:2},{value:"Example",id:"example",level:2},{value:"Create a Queue",id:"create-a-queue",level:3},{value:"Start Oracle",id:"start-oracle",level:3},{value:"Create WHEAT Aggregator",id:"create-wheat-aggregator",level:3},{value:"Other Aggregator Definitions",id:"other-aggregator-definitions",level:3},{value:"Crude",id:"crude",level:4},{value:"Gold",id:"gold",level:4},{value:"Silver",id:"silver",level:4},{value:"Nickel",id:"nickel",level:4},{value:"Coffee",id:"coffee",level:4}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Switchboard is architected to route off-chain data to an on-chain account. A publisher is responsible for building the job definition, which defines the task(s) the oracles must perform to fetch and transform external data. Sometimes a publisher may wish to bring private data on-chain using an API key which poses a set of challenges. In order for the oracle to retrieve the data, they need access to the publisher's API key. Blockchains are public so there is no easy way to conceal the API key on-chain."),(0,r.kt)("p",null,"Switchboard provides the ability to create your own queue with your own set of oracles, allowing the oracles access to your API key so they can resolve the private endpoints."),(0,r.kt)("h2",{id:"variable-expansion"},"Variable Expansion"),(0,r.kt)("p",null,"Oracles can be provided a ",(0,r.kt)("inlineCode",{parentName:"p"},"configs.json")," file to store various configurations needed to execute job definitions. If an oracle encounters a job definition with a variable, it will parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"configs.json")," and embed the value in the job definition."),(0,r.kt)("p",null,"Oracles can embed API Keys on a per job basis by specifying the jobAccount public key or by using an asterik character to use the variable for multiple job definitions. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Wildcard variables should use a unique name to prevent incorrect substitution."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="configs.json"',title:'"configs.json"'},'{\n  "jobVariables": {\n    // Pubkey of the Job account for which this variable expansion applies\n    "HtB62K71H49RJbATYpmB6UCMBXLK6G3Q5JtGveTMR8Mt": {\n      "VARIABLE_NAME": "abc123"\n    },\n    // Global variable expansion that applies to any Job account. SEE CAUTION BELOW\n    "*": {\n      "GLOBAL_VARIABLE_NAME": "abc123"\n    }\n  }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Private queue's should ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ALWAYS"))," have ",(0,r.kt)("inlineCode",{parentName:"p"},"unpermissionedFeedsEnabled")," set to false. Allowing unpermitted feeds could result in a malicous actor creating a job definition that leaks your sensitive API keys."))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"We'll be using ",(0,r.kt)("a",{parentName:"p",href:"https://www.commodities-api.com"},"commodities-api")," to resolve our data for this example. You will need to signup for an account to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMODITIES_API_KEY"),"."),(0,r.kt)("h3",{id:"create-a-queue"},"Create a Queue"),(0,r.kt)("p",null,"First, we will need to create our own queue. The following command will create a queue with a single oracle and crank."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 queue:create \\\n    --name "Private Queue" \\\n    --keypair ../payer-keypair.json \\\n    --authority ../payer-keypair.json \\\n    --numOracles 1 \\\n    --reward 0 \\\n    --outputFile "Private_Queue.json"\n')),(0,r.kt)("h3",{id:"start-oracle"},"Start Oracle"),(0,r.kt)("p",null,"Create a docker-compose file, replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"ORACLE_KEY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RPC_URL"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"PAYER_KEYPAIR")," with the appropriate values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3.3"\nservices:\n  oracle:\n    image: "switchboardlabs/node:dev-v2-3-7-22"\n    network_mode: host\n    restart: always\n    secrets:\n      - PAYER_SECRETS\n    environment:\n      - LIVE=1\n      - CLUSTER=devnet\n      - HEARTBEAT_INTERVAL=30 # Seconds\n      - ORACLE_KEY=${ORACLE_KEY}\n      - RPC_URL=${RPC_URL}\n    volumes:\n      - ./configs.json:/configs.json\nsecrets:\n  PAYER_SECRETS:\n    file: ${PAYER_KEYPAIR}\n')),(0,r.kt)("p",null,"We need to embed the commodities-api key in our oracle's configs.json file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="configs.json"',title:'"configs.json"'},'{\n  "jobVariables": {\n    // Pubkey of the OracleJob account for which this variable expansion applies or *.\n    "*": {\n      "COMMODITIES_API_KEY": "YOUR_API_KEY_HERE"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Start the oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,r.kt)("h3",{id:"create-wheat-aggregator"},"Create WHEAT Aggregator"),(0,r.kt)("p",null,"Looking at their docs, we'll need to fetch data from the following endpoint and take the inverse. The aggregator definition will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Wheat.json"',title:'"Wheat.json"'},'{\n  "name": "WHEAT",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api WHEAT",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=WHEAT"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.WHEAT"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Now we need to create an aggregator and add this job definition to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:create:json wheat.json \\\n    --keypair ../payer-keypair.json \\\n    --queueKey QUEUE_KEY_OUTPUTTED_ABOVE \\\n    --outputFile Wheat_Aggregator.json\n")),(0,r.kt)("p",null,"Now we can request an update from our running oracle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:update AGGREGATORKEY --keypair PAYERKEYPAIR\n")),(0,r.kt)("p",null,"We should see the oracle respond to the job and update the on-chain value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sbv2 aggregator:print AGGREGATORKEY\n")),(0,r.kt)("h3",{id:"other-aggregator-definitions"},"Other Aggregator Definitions"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"crude"},"Crude")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Crude.json"',title:'"Crude.json"'},'{\n  "name": "Crude WTIOIL",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api WTIOIL",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=WTIOIL"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.WTIOIL"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"gold"},"Gold")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Gold.json"',title:'"Gold.json"'},'{\n  "name": "Gold",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api XAU",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=XAU"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.XAU"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"silver"},"Silver")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Silver.json"',title:'"Silver.json"'},'{\n  "name": "Silver",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api XAG",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=XAG"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.XAG"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"nickel"},"Nickel")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Nickel.json"',title:'"Nickel.json"'},'{\n  "name": "Nickel",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api NI",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=NI"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.NI"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h4",{id:"coffee"},"Coffee")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Coffee.json"',title:'"Coffee.json"'},'{\n  "name": "Coffee",\n  "metadata": "",\n  "oracleRequestBatchSize": 1,\n  "minOracleResults": 1,\n  "minJobResults": 1,\n  "minUpdateDelaySeconds": 900,\n  "jobs": [\n    {\n      "name": "commodities-api COFFEE",\n      "tasks": [\n        {\n          "httpTask": {\n            "url": "https://www.commodities-api.com/api/latest?access_key=${COMMODITIES_API_KEY}&base=USD&symbols=COFFEE"\n          }\n        },\n        {\n          "jsonParseTask": {\n            "path": "$.data.rates.COFFEE"\n          }\n        },\n        {\n          "powTask": {\n            "scalar": -1\n          }\n        }\n      ]\n    }\n  ]\n}\n'))))}m.isMDXComponent=!0}}]);