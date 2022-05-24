"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6736],{5318:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return k}});var n=l(7378);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(l),k=a,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||r;return l?n.createElement(m,o(o({ref:t},c),{},{components:l})):n.createElement(m,o({ref:t},c))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<r;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},8286:function(e,t,l){l.r(t),l.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var n=l(2685),a=l(1244),r=(l(7378),l(5318)),o=["components"],u={sidebar_position:20,title:"Google Cloud Platform"},i=void 0,s={unversionedId:"oracle/service/gcp",id:"oracle/service/gcp",title:"Google Cloud Platform",description:"Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.",source:"@site/docs/oracle/service/gcp.mdx",sourceDirName:"oracle/service",slug:"/oracle/service/gcp",permalink:"/oracle/service/gcp",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Google Cloud Platform"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/oracle/service/docker"},next:{title:"Monitoring",permalink:"/oracle/service/monitoring"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Switchboard Helm Charts",id:"switchboard-helm-charts",level:3},{value:"gcloud SDK",id:"gcloud-sdk",level:3},{value:"Grafana Domain Name",id:"grafana-domain-name",level:3},{value:"Environment",id:"environment",level:2},{value:"Setup",id:"setup",level:2},{value:"Grafana",id:"grafana",level:2},{value:"Domain Name",id:"domain-name",level:3},{value:"TLS Certificate",id:"tls-certificate",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Deploy Helm Charts",id:"deploy-helm-charts",level:3},{value:"Update",id:"update",level:3}],d={toc:p};function k(e){var t=e.components,l=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue."),(0,r.kt)("p",null,"A Switchboard oracle can be run on any cloud provider who offers kubernetes services but this guide will currently be focused on Google Cloud. Feel free to contribute to our documentation if you are running an oracle on another provider. Here's some extra reading to learn more about kubernetes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/learn/what-is-kubernetes"},"What is Kubernetes?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"Kubernetes Engine Quickstart"))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("h3",{id:"switchboard-helm-charts"},"Switchboard Helm Charts"),(0,r.kt)("p",null,"The repo below contains the kubernetes manifest to streamline the deployment. Clone the repo below to get started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/switchboard-v2\ncd switchboard-v2/oracles/helm-deployment\n")),(0,r.kt)("h3",{id:"gcloud-sdk"},"gcloud SDK"),(0,r.kt)("p",null,"You will need to install the google cloud SDK and have a Google Cloud Platform account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"Install gcloud SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/freetrial/signup/tos"},"Google Cloud Platform Registration"))),(0,r.kt)("p",null,"Verify it installed correctly with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud --version\n")),(0,r.kt)("h3",{id:"grafana-domain-name"},"Grafana Domain Name"),(0,r.kt)("p",null,"You will need a domain name to point your grafana instance at to monitor your oracle's metrics. During setup, you will create an external IP, which you will need to add to your domains DNS records. Finally we will provision a TLS certificate for your domain for enhanced security."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"You will need to collect the following environment variables to inject into the helm charts before deploying to Google Cloud Project. If you chose to use the automated deployment, an env file will be populated with most of these variables populated."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"GCP Environment Variables")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Env Variable"),(0,r.kt)("th",null,"Definition"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"CLUSTER"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String (devnet / mainnet-beta)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana cluster you will be running an oracle on (mainnet-beta/devnet)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RPC_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Solana RPC URL that must be capable of supporting websockets. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"WS_URL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - RPC_URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Websocket URL to connect to a Solana RPC server. If not provided, oracle will fallback to RPC_URL")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"BACKUP_MAINNET_RPC"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - URL",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - https://api.mainnet-beta.solana.com",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Backup RPC URL in case of network congestion")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ORACLE_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Public Key",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Number (seconds)",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - 15",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SERVICE_ACCOUNT_BASE64"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Base64 encoded JSON file",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Base64 encoded JSON file containing the private key for your service account that has access to your google secret keypair and config bucket")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - GCP Resource Path",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - oracle-configs:configs.json",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Contains API keys for private API endpoints")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"EXTERNAL_IP"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - IPv4 Address",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - IP Address where your grafana instance will be hosted to view metrics and oracle operating status")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GRAFANA_HOSTNAME"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Fully Qualified Domain Name",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Hostname where your grafana instance will point to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GRAFANA_PASSWORD"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Optional")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - String / Password",(0,r.kt)("br",null),(0,r.kt)("b",null,"Default")," - Sbv2K8sPassword123@",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Password to admin account that allows access to your grafana instance. You can set this to whatever value you want.",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GRAFANA_TLS_CRT"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Base64 encoded CRT file",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Base64 encoded string of your TLS certificate to secure your grafana instance")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GRAFANA_TLS_KEY"),(0,r.kt)("td",null,(0,r.kt)("b",null,(0,r.kt)("u",null,"Required")),(0,r.kt)("br",null),(0,r.kt)("b",null,"Type")," - Base64 encoded private key file",(0,r.kt)("br",null),(0,r.kt)("b",null,"Description")," - Base64 encoded string of the private key used to create your TLS certificate"))))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"oracles/helm-deployment")," directory in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2"},"Switchboard-V2 SDK")," contains a bash script to walk through the GCP setup and output the required variables to an env file. This script is provided as a convenience tool, you should understand all of the commands in the script before running. To automate the GCP setup, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./setup-gcloud.sh PROJECTNAME\n\n# ./setup-gcloud.sh Sbv2-Devnet-Oracle\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PROJECTNAME")," will be the name of your GCP project and must contain no spaces or special characters")),(0,r.kt)("p",null,"The script will walk-through the google cloud setup, create your gcp project, add your oracle keypair as a secret, create a service account and give it access to your keypair, then spin up a kubernetes cluster. The script will periodically prompt you for more information."),(0,r.kt)("p",null,"Upon completion you will have a file ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PROJECT"),(0,r.kt)("li",{parentName:"ul"},"DEFAULT_REGION"),(0,r.kt)("li",{parentName:"ul"},"DEFAULT_ZONE"),(0,r.kt)("li",{parentName:"ul"},"CLUSTER_NAME"),(0,r.kt)("li",{parentName:"ul"},"EXTERNAL_IP"),(0,r.kt)("li",{parentName:"ul"},"SECRET_NAME"),(0,r.kt)("li",{parentName:"ul"},"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("li",{parentName:"ul"},"GCP_CONFIG_BUCKET"),(0,r.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_EMAIL"),(0,r.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_BASE64")),(0,r.kt)("p",null,"You will need to manually add:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLUSTER"),(0,r.kt)("li",{parentName:"ul"},"RPC_URL"),(0,r.kt)("li",{parentName:"ul"},"BACKUP_MAINNET_RPC"),(0,r.kt)("li",{parentName:"ul"},"ORACLE_KEY"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Manual GCP Setup Steps")),(0,r.kt)("b",null,"Login"),(0,r.kt)("p",null,"Login to your google cloud account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud auth login\n")),(0,r.kt)("b",null,"Project"),(0,r.kt)("p",null,"Create a new project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud projects create switchboard-oracle-cluster --name="Switchboard Oracle"\n')),(0,r.kt)("p",null,"Set it as your default project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set project switchboard-oracle-cluster\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/projects/create"},"Google - gcloud projects create")),(0,r.kt)("b",null,"gCloud Conifg"),(0,r.kt)("p",null,"Set the default zone using ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"list of regions and zones")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/zone us-west1-a # replace with your closest region\n")),(0,r.kt)("p",null,"Set the default region using ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/regions-zones#available"},"list of regions and zones")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud config set compute/region us-west1 # replace with your closest region\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart#autopilot"},"Google - Set default settings for the gcloud tool")),(0,r.kt)("b",null,"Billing"),(0,r.kt)("p",null,"You will need to enable billing for the project before enabling any services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/billing/enable?project=switchboard-oracle-cluster"},"https://console.cloud.google.com/billing/enable?project=switchboard-oracle-cluster"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/googleapi/answer/6158867?hl=en"},"Google - APIs and billing")),(0,r.kt)("b",null,"Services"),(0,r.kt)("p",null,"Enable the relevant services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud services enable compute.googleapis.com\ngcloud services enable container.googleapis.com\ngcloud services enable iamcredentials.googleapis.com\ngcloud services enable secretmanager.googleapis.com\n")),(0,r.kt)("b",null,"External IP"),(0,r.kt)("p",null,"You will need to reserve a static IP address for your grafana instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute addresses create load-balancer --project=switchboard-oracle-cluster\ngcloud compute addresses list\n# NAME           ADDRESS/RANGE\n# load-balancer  123.123.123.123 ($LOADBALANCER_IP)\n")),(0,r.kt)("p",null,"This will be your ",(0,r.kt)("inlineCode",{parentName:"p"},"$EXTERNAL_IP")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#reserve_new_static"},"Google - Reserve a new static external IP address")),(0,r.kt)("b",null,"Service Account"),(0,r.kt)("p",null,"You will need to create a service account to access our resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud iam service-accounts create svc-account --display-name="Oracle Service Account"\ngcloud iam service-accounts list\n')),(0,r.kt)("p",null,"Now save it to our filesystem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud iam service-accounts keys create secrets/svc-account.json  --iam-account=svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com\n")),(0,r.kt)("p",null,"Now convert the json file to a base64 string to store in ",(0,r.kt)("inlineCode",{parentName:"p"},"$SERVICE_ACCOUNT_BASE64")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"base64 secrets/svc-account.json\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"Google - Creating service account keys")),(0,r.kt)("b",null,"OraclePayerSecret"),(0,r.kt)("p",null,"You will need to store your solana keypair in Google Secret Manager for enhanced security. If you are using another keypair replace ",(0,r.kt)("inlineCode",{parentName:"p"},"--data-file")," with your relevant path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gcloud secrets create oracle-payer-secret --replication-policy="automatic"  --data-file=secrets/authority-keypair.json\n')),(0,r.kt)("p",null,"You can view your ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOOGLE_PAYER_SECRET_PATH")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/security/secret-manager/secret/oracle-payer-secret/versions&project=switchboard-oracle-cluster"},"GCP console")," or by running the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"$(gcloud secrets list --uri --filter=oracle-payer-secret | \\\ncut -c41- | tr -d '\\n')/versions/latest\"\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager/docs/creating-and-accessing-secrets"},"Google - Creating a secret")),(0,r.kt)("b",null,"Storage Bucket"),(0,r.kt)("p",null,"You can create a GCP storage bucket to store API keys. The following command will create a new storage bucket and give your service account permissions to read from it. You will need to use a unique name as storage bucket names are global to the entire GCP platform."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gsutil mb -p switchboard-oracle-cluster -l us-west1 gs://switchboard-oracle-cluster-bucket\ngsutil iam ch serviceAccount:svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com:legacyBucketReader gs://switchboard-oracle-cluster-bucket\ngsutil ls\n# gs://switchboard-oracle-cluster-bucket/\n")),(0,r.kt)("p",null,"You can view your ",(0,r.kt)("inlineCode",{parentName:"p"},"$GCP_CONFIG_BUCKET")," by running the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"$(gsutil ls | grep 'switchboard-oracle-cluster-bucket' | \\\nsed -e 's/.*gs:\\/\\/\\(.*\\)\\/.*/\\1/' ):configs.json\"\n# switchboard-oracle-cluster-bucket:configs.json\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/creating-buckets#storage-create-bucket-gsutil"},"Google - Create storage buckets")),(0,r.kt)("b",null,"Kubernetes Cluster"),(0,r.kt)("p",null,"Finally you will need to create a new kubernetes cluster"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters create-auto switchboard-cluster \\\n--service-account=svc-account@switchboard-oracle-cluster.iam.gserviceaccount.com \\\n--region us-west1\n")),(0,r.kt)("p",null,"then connect to it and store your credentials in your gCloud config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials switchboard-cluster \\\n--project switchboard-oracle-cluster \\\n--region us-west1\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Remember to update the region to the same region you used for your static IP."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart#autopilot"},"Google - Create a GKE cluster")),(0,r.kt)("b",null,"Wrapping Up"),(0,r.kt)("p",null,"You should now have an ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file containing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EXTERNAL_IP"),(0,r.kt)("li",{parentName:"ul"},"GOOGLE_PAYER_SECRET_PATH"),(0,r.kt)("li",{parentName:"ul"},"GCP_CONFIG_BUCKET"),(0,r.kt)("li",{parentName:"ul"},"SERVICE_ACCOUNT_BASE64")),(0,r.kt)("p",null,"You will need to manually add:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLUSTER"),(0,r.kt)("li",{parentName:"ul"},"RPC_URL"),(0,r.kt)("li",{parentName:"ul"},"BACKUP_MAINNET_RPC"),(0,r.kt)("li",{parentName:"ul"},"ORACLE_KEY"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY"))),(0,r.kt)("h2",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Grafana is a visualization tool to view your cluster's metrics. While this step is optional, it is recommended if you have no other monitoring or metric suite in place."),(0,r.kt)("h3",{id:"domain-name"},"Domain Name"),(0,r.kt)("p",null,"You will need a domain name to host your grafana instance. In your domain management tool, add a DNS A record with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"$EXTERNAL_IP"),"."),(0,r.kt)("p",null,"This value will be your ",(0,r.kt)("inlineCode",{parentName:"p"},"$GRAFANA_HOSTNAME")," (i.e. grafana.switchboard.com) and will be used to provision a TLS certificate."),(0,r.kt)("h3",{id:"tls-certificate"},"TLS Certificate"),(0,r.kt)("p",null,"The following steps will walk you through provisioning a TLS certificate for your domain from letsencrypt. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/helm-manifests"},"helm-manifest repo")," contains a script to walk through creating the neccessary keys and certificate signing request (CSR)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./setup-grafana.sh PROJECTNAME DOMAIN EMAIL\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PROJECTNAME is the name of the env file to store variables"),(0,r.kt)("li",{parentName:"ul"},"DOMAIN is your $GRAFANA_HOSTNAME from above"),(0,r.kt)("li",{parentName:"ul"},"EMAIL is the email you will use for your certificate signing request")),(0,r.kt)("p",null,"When the necessary keys and CSR are generated, head over to ",(0,r.kt)("a",{parentName:"p",href:"https://gethttpsforfree.com.com"},"gethttpsforfree.com")," and walk through their steps to sign your certificate. Save the final output to the filename given by the script, then rerun the script. The script will save the env variables to ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," and also output them to the console."),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file should now contain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GRAFANA_HOSTNAME"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_PASSWORD (You can set this to whatever value you want)"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_CRT"),(0,r.kt)("li",{parentName:"ul"},"GRAFANA_TLS_KEY")),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"After completing the steps on this page you should have a ",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECTNAME.env")," file with each of the required variables defined. See ",(0,r.kt)("a",{parentName:"p",href:"#environment"},"Google Cloud / Environment")," for a list of all required variables that must be set."),(0,r.kt)("p",null,"Run the following command to build the helm charts with your environment variables injected into the manifests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,r.kt)("h3",{id:"deploy-helm-charts"},"Deploy Helm Charts"),(0,r.kt)("p",null,"Run the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")),(0,r.kt)("p",null,"When complete, you should see your cluster running in the Google Cloud Console."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/stackdriver/docs/solutions/gke/observing"},"Google - Observing your GKE clusters")),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"If necessary, rebuild the charts to update any environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./build-helm.sh PROJECTNAME\n")),(0,r.kt)("p",null,"then redeploy the helm charts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./deploy-helm.sh PROJECTNAME\n")))}k.isMDXComponent=!0}}]);