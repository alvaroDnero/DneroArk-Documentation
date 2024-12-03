"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[6539],{9552:(e,r,n)=>{n.r(r),n.d(r,{apiPath:()=>h,assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,method:()=>x,toc:()=>u});const s=JSON.parse('{"id":"endpoints/user/profile","title":"User","description":"Get user profile information.","source":"@site/docs/endpoints/user/HomeProfile.mdx","sourceDirName":"endpoints/user","slug":"/endpoints/user/profile","permalink":"/DneroArk-Documentation/docs/endpoints/user/profile","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/user/HomeProfile.mdx","tags":[],"version":"current","frontMatter":{"id":"profile"},"sidebar":"apiSidebar","previous":{"title":"Logout","permalink":"/DneroArk-Documentation/docs/endpoints/login/logout"},"next":{"title":"Transactions","permalink":"/DneroArk-Documentation/docs/endpoints/transactions/TransactionsAll"}}');var i=n(4848),d=n(8453),o=n(2097),t=n(4203);const c={id:"profile"},l="User",a={},h=t.y.user,x="GET",u=[{value:"Header",id:"header",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function j(e){const r={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components},{Details:n}=r;return n||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"user",children:"User"})}),"\n",(0,i.jsxs)("div",{className:"highlight-box",children:[(0,i.jsx)(o.A,{method:x}),h]}),"\n",(0,i.jsx)(r.p,{children:"Get user profile information."}),"\n",(0,i.jsx)(r.h3,{id:"header",children:"Header"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Key"}),(0,i.jsx)(r.th,{children:"Value"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Authorization"})}),(0,i.jsxs)(r.td,{children:["Bearer ",(0,i.jsx)(r.code,{children:"{{accessToken}}"})]})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"userId"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"long"})}),(0,i.jsx)(r.td,{children:"Unique identifier of the user."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"imgProfileUrl"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"URL where the profile image is hosted."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"firstName"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"User's first name."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"lastName"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"User's last name."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"phone"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"User's phone number."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"dolarBalance"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"double"})}),(0,i.jsx)(r.td,{children:"Total dollar balance specific to ARK."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"cryptoBalance"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"double"})}),(0,i.jsx)(r.td,{children:"Total cryptocurrency balance for ARK."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"pendingCoins"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"int"})}),(0,i.jsx)(r.td,{children:"Number of pending Coins to collect."})]})]})]}),"\n",(0,i.jsxs)(n,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"200 OK"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "userId": 123456789,\r\n  "imgProfileUrl": "https://example.com/profile-images/user123.jpg",\r\n  "firstName": "John",\r\n  "lastName": "Doe",\r\n  "phone": "1234567890",\r\n  "dolarCash": 1500.75,\r\n  "cryptoBalance": 2.356\r\n}\r\n\n'})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h3,{id:"json-response-error",children:"JSON Response: Error"}),"\n",(0,i.jsxs)(n,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"400 Bad Request"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_REQUEST",\r\n  "message": "The authorization token is required."\r\n}\r\n\n'})}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_USER_ID",\r\n  "message": "The provided user ID is invalid."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(n,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"401 Unauthorized"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "code": "UNAUTHORIZED",\r\n  "message": "The provided token is invalid or has expired. Please log in again."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(n,{className:"details-custom",children:[(0,i.jsx)("summary",{children:"404 Not Found"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "code": "USER_NOT_FOUND",\r\n  "message": "The user with the provided ID does not exist."\r\n}\r\n\n'})})]}),"\n",(0,i.jsxs)(n,{className:"details-custom",children:[(0,i.jsx)("summary",{children:" 500 Internal Server Error"}),(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-JSON",children:'{\r\n  "code": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\n'})})]})]})}function p(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},2097:(e,r,n)=>{n.d(r,{A:()=>i});n(6540);var s=n(4848);const i=e=>{let{method:r}=e;const n={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:n[r]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${n[r]||"black"}`,borderRadius:"4px"},children:r})}},4203:(e,r,n)=>{n.d(r,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{int}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{int}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{int}"}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>t});var s=n(6540);const i={},d=s.createContext(i);function o(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);