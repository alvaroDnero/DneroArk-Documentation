"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[6158],{8448:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>h,assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>s,method:()=>u,toc:()=>p});const s=JSON.parse('{"id":"endpoints/login/phoneOTP","title":"Generate OTP","description":"Generate the OTP to log in.","source":"@site/docs/endpoints/login/LoginPhoneOTP.mdx","sourceDirName":"endpoints/login","slug":"/endpoints/login/phoneOTP","permalink":"/DneroArk-Documentation/docs/endpoints/login/phoneOTP","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/login/LoginPhoneOTP.mdx","tags":[],"version":"current","frontMatter":{"id":"phoneOTP"},"sidebar":"apiSidebar","previous":{"title":"Scopes","permalink":"/DneroArk-Documentation/docs/scopes"},"next":{"title":"login","permalink":"/DneroArk-Documentation/docs/endpoints/login/phone"}}');var o=r(4848),i=r(8453),d=r(2097),t=r(4203);const c={id:"phoneOTP"},a="Generate OTP",l={},h=t.y.otp,u="POST",p=[{value:"Header",id:"header",level:3},{value:"JSON Body",id:"json-body",level:3},{value:"JSON Response: Success",id:"json-response-success",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function x(e){const n={code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"generate-otp",children:"Generate OTP"})}),"\n",(0,o.jsxs)("div",{className:"highlight-box",children:[(0,o.jsx)(d.A,{method:u}),h]}),"\n",(0,o.jsx)(n.p,{children:"Generate the OTP to log in."}),"\n",(0,o.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Key"}),(0,o.jsx)(n.th,{children:"Value"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Content-Type"})}),(0,o.jsx)(n.td,{children:"application/json"})]})})]}),"\n",(0,o.jsx)(n.h3,{id:"json-body",children:"JSON Body"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Required"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"phone"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"User's phone number."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"countryCode"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"\u2705"}),(0,o.jsx)(n.td,{children:"Country code."})]})]})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"Body example"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "phone": "7149816149",\r\n  "countryCode": "1"\r\n}\r\n\n'})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"json-response-success",children:"JSON Response: Success"}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"200 OK"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "REQUEST_SUCCESS",\r\n  "message": "The request was successfully processed."\r\n}\n'})})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"json-response-error",children:"JSON Response: Error"}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"400 Bad Request"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'\r\n{\r\n  "code": "MISSING_FIELDS",\r\n  "message": "The fields \'phone\' and \'countryCode\' are required."\r\n}\r\n\n'})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'\r\n{\r\n  "code": "INVALID_PHONE",\r\n  "message": "The provided phone number is invalid."\r\n}\r\n\n'})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_COUNTRY_CODE",\r\n  "message": "The provided country code is invalid."\r\n}\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"404 Not Found"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "PHONE_NOT_FOUND",\r\n  "message": "The provided phone number does not exist in our records."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"409 Conflict"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "SESSION_CONFLICT",\r\n  "message": "Sesi\xf3n abierta en otro dispositivo, ci\xe9rrala y vuelve a intentarlo.",\r\n  "resolution": "Cierra sesi\xf3n desde el otro dispositivo para continuar."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"403 Forbidden"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "SESSION_FORBIDDEN",\r\n  "message": "Sesi\xf3n abierta en otro dispositivo, ci\xe9rrala y vuelve a intentarlo.",\r\n  "resolution": "Cierra sesi\xf3n desde el otro dispositivo para continuar."\r\n}\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"422 Unprocessable Entity"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "UNSUPPORTED_COUNTRY_CODE",\r\n  "message": "The provided country code is not supported."\r\n}\r\n\r\n\n'})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "PHONE_BLACKLISTED",\r\n  "message": "The provided phone number is blacklisted."\r\n}\r\n\r\n\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:"429 Too Many Requests"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "TOO_MANY_REQUESTS",\r\n  "message": "You have made too many requests in a short period. Please wait before trying again."\r\n}\n'})})]}),"\n",(0,o.jsxs)(r,{className:"details-custom",children:[(0,o.jsx)("summary",{children:" 500 Internal Server Error"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while validating the OTP. Please try again later."\r\n}\r\n\n'})})]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(x,{...e})}):x(e)}},2097:(e,n,r)=>{r.d(n,{A:()=>o});r(6540);var s=r(4848);const o=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},4203:(e,n,r)=>{r.d(n,{y:()=>s});const s={otp:"/DneroArk/login/otp",login:"/DneroArk/login",updateToken:"/DneroArk/login/updateToken",logout:"/DneroArk/logout",user:"/DneroArk/user",transactionsAll:"/DneroArk/transactions",transactionIndividual:"/DneroArk/transactions/{int}",notificationsAll:"/DneroArk/notifications",notificationsIndividual:"/DneroArk/notifications/{int}",coinsAll:"/DneroArk/coins",coinsIndividual:"/DneroArk/coins/{int}"}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var s=r(6540);const o={},i=s.createContext(o);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);