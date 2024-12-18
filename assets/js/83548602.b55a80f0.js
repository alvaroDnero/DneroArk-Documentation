"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[6539],{9552:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>h,assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,method:()=>u,toc:()=>x});const s=JSON.parse('{"id":"endpoints/user/profile","title":"User","description":"Get user profile information.","source":"@site/docs/endpoints/user/HomeProfile.mdx","sourceDirName":"endpoints/user","slug":"/endpoints/user/profile","permalink":"/DneroArk-Documentation/docs/endpoints/user/profile","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/user/HomeProfile.mdx","tags":[],"version":"current","frontMatter":{"id":"profile"},"sidebar":"apiSidebar","previous":{"title":"Logout","permalink":"/DneroArk-Documentation/docs/endpoints/login/logout"},"next":{"title":"Validate Phones","permalink":"/DneroArk-Documentation/docs/endpoints/user/contacts"}}');var o=r(4848),i=r(8453),t=r(2097),d=r(4203);const c={id:"profile"},l="User",a={},h=d.y.user,u="GET",x=[{value:"Header",id:"header",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function j(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"user",children:"User"})}),"\n",(0,o.jsxs)("div",{className:"highlight-box",children:[(0,o.jsx)(t.A,{method:u}),h]}),"\n",(0,o.jsx)(n.p,{children:"Get user profile information."}),"\n",(0,o.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Key"}),(0,o.jsx)(n.th,{children:"Value"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Authorization"})}),(0,o.jsxs)(n.td,{children:["Bearer ",(0,o.jsx)(n.code,{children:"{accessToken}"})]})]})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"userId"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"long"})}),(0,o.jsx)(n.td,{children:"Unique identifier of the user."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"imgUrl"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"URL where the profile image is hosted."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"firstName"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"User's first name."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"lastName"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"User's last name."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"deviceInfo"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"object"})}),(0,o.jsxs)(n.td,{children:["Information about the user's device. For detailed information, see the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/Objects/phoneObject",children:"Device Info"})})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"balance"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"object"})}),(0,o.jsxs)(n.td,{children:["Information about Balance. For detailed information, see the ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"/docs/Objects/balanceObject",children:"balance info"})})]})]})]})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",open:!0,children:[(0,o.jsx)("summary",{children:"200 OK"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "userId": 123456789,\r\n  "imgProfileUrl": "https://example.com/profile-images/user123.jpg",\r\n  "firstName": "John",\r\n  "lastName": "Doe",\r\n  "phone": {...},\r\n  "deviceInfo": {...},\r\n}\n'})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h3,{id:"json-response-error",children:[(0,o.jsx)(n.a,{href:"/docs/Objects/genericResponse",children:"JSON Response"}),": Error"]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"400 Bad Request"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INVALID_REQUEST",\r\n  "message": "The authorization token is required."\r\n}\r\n\n'})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INVALID_USER_ID",\r\n  "message": "The provided user ID is invalid."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"401 Unauthorized"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "UNAUTHORIZED",\r\n  "message": "The provided token is invalid or has expired. Please log in again."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"404 Not Found"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "USER_NOT_FOUND",\r\n  "message": "The user with the provided ID does not exist."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:" 500 Internal Server Error"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "event": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(j,{...e})}):j(e)}},2097:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var s=r(4848);const o=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,r)=>{r.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",contact:"/DneroArk/user/contacts",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{transactionId}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{notificationId}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{coinId}",coinsDrop:"/DneroArk/coins/Drop",coinsRedeem:"/DneroArk/coins/redeem/{coinId}",coinsPending:"/DneroArk/coins/pending",coinsNumberToCollect:"/DneroArk/coins/pending/count",coinRecieveWebhook:"/DneroArk/coins/CoinRecieveWebhook"}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>d});var s=r(6540);const o={},i=s.createContext(o);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);