(self.webpackChunkbananasign=self.webpackChunkbananasign||[]).push([[342],{4319:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var i=a(7294);function n(e){let{children:t,bg:a}=e;return i.createElement("span",{style:{padding:"3px 10px",color:"rgb(255, 255, 255)",backgroundColor:a,lineHeight:"20px",textTransform:"uppercase",boxSizing:"border-box"}},t)}},3741:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),o=a(1574),r=a(814),s=a(4319);const l={title:"Implicit Flow",sidebar_position:2},c=void 0,p={unversionedId:"authorization/get-token/implicit",id:"authorization/get-token/implicit",title:"Implicit Flow",description:"Implicit grant as the way JavaScript code can obtain bearer token and call APIs directly from a browser.",source:"@site/docs/authorization/get-token/implicit.mdx",sourceDirName:"authorization/get-token",slug:"/authorization/get-token/implicit",permalink:"/bananasign-docs/docs/authorization/get-token/implicit",draft:!1,editUrl:"https://github.com/luminpdf/bananasign-docs/blob/main/docs/authorization/get-token/implicit.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Implicit Flow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authorization Code Flow",permalink:"/bananasign-docs/docs/authorization/get-token/authorization-code"},next:{title:"API Reference",permalink:"/bananasign-docs/docs/category/api-reference"}},d={},u=[{value:"Obtaining bearer token",id:"obtaining-bearer-token",level:2},{value:"Query parameters:",id:"query-parameters",level:4},{value:"Make a simple call with bearer token",id:"make-a-simple-call-with-bearer-token",level:2}],k={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Implicit grant as the way JavaScript code can obtain bearer token and call APIs directly from a browser."),(0,n.kt)("h2",{id:"obtaining-bearer-token"},"Obtaining bearer token"),(0,n.kt)("p",null,"The client app makes an authorization request by redirecting user to a page with an authorization proposal."),(0,n.kt)(r.Z,{mdxType:"CodeBlock"},(0,n.kt)(s.Z,{bg:"rgb(47, 129, 50)",mdxType:"Badge"},"GET")," ","https://kratos-auth-test.luminpdf.com/oauth2/auth?client_id=YOUR_CLIENT_ID&response_type=token id_token&redirect_uri=YOUR_REDIRECT_URI&scope=openid bananasign:document.create&state=5a7a4c98-40e2-4e2a-a0d5-979fb639b5b5&nonce=11101998"),(0,n.kt)("h4",{id:"query-parameters"},"Query parameters:"),(0,n.kt)(o.Z,{id:"oauth2-yml",pointer:"#/components/schemas/Implicit",mdxType:"ApiSchema"}),(0,n.kt)("p",null,"After authentication succeeds, you will be redirected to ",(0,n.kt)("inlineCode",{parentName:"p"},"redirect_uri")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"id_token"),", ex:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"https://YOUR_REDIRECT_URI#access_token=ory_...&id_token=ey...\n")),(0,n.kt)("h2",{id:"make-a-simple-call-with-bearer-token"},"Make a simple call with bearer token"),(0,n.kt)("p",null,"You can now make requests to the Lumin Sign API with bearer token:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET \\\n  --url https://app-auth-staging.bananasign.co/api/web/oauth2/version \\\n  --header 'Authorization: Bearer $access_token' \\\n  --header 'Content-Type: application/json'\n")))}m.isMDXComponent=!0},5101:()=>{},2116:()=>{},4904:()=>{},6918:()=>{},4819:()=>{},3197:()=>{},996:()=>{}}]);