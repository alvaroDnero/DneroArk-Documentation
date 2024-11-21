"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[5948],{3410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"Unity Web Request/0 Interceptor Service","title":"InterceptorService","description":"Overview","source":"@site/docs/Unity Web Request/0 Interceptor Service.md","sourceDirName":"Unity Web Request","slug":"/Unity Web Request/0 Interceptor Service","permalink":"/DneroArk-Documentation/docs/Unity Web Request/0 Interceptor Service","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Unity Web Request/0 Interceptor Service.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Unity Web Request","permalink":"/DneroArk-Documentation/docs/category/unity-web-request"},"next":{"title":"AuthService","permalink":"/DneroArk-Documentation/docs/Unity Web Request/1 Auth Services"}}');var t=s(4848),i=s(8453);const o={},c="InterceptorService",d={},l=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Attributes</strong>",id:"attributes",level:2},{value:"Constants",id:"constants",level:3},{value:"Private Variables",id:"private-variables",level:3},{value:"<strong>Methods</strong>",id:"methods",level:2},{value:"<strong>Constructor</strong>",id:"constructor",level:3},{value:"<strong>Function SendRequest</strong>",id:"function-sendrequest",level:3},{value:"Par\xe1metros",id:"par\xe1metros",level:4},{value:"Functionality",id:"functionality",level:4}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"interceptorservice",children:"InterceptorService"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:(0,t.jsx)(n.strong,{children:"Overview"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"InterceptorService"})," is an abstract class designed to handle HTTP requests in applications. It provides a coroutine-based implementation for sending requests and processing responses, including support for authorization headers and timeout handling."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:(0,t.jsx)(n.strong,{children:"Attributes"})}),"\n",(0,t.jsx)(n.h3,{id:"constants",children:"Constants"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"POST_METHOD"})})," (string): Represents the HTTP method ",(0,t.jsx)(n.code,{children:'"POST"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"GET_METHOD"})})," (string): Represents the HTTP method ",(0,t.jsx)(n.code,{children:'"GET"'}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"TIMEOUT_DURATION"})})," (float): Maximum allowed time for a request to complete, in seconds (default: 45s)."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"private-variables",children:"Private Variables"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"_sessionOperations"})})," (",(0,t.jsx)(n.code,{children:"ISessionOperations"}),"): Interface that provides session-related operations, such as retrieving authorization tokens."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:(0,t.jsx)(n.strong,{children:"Methods"})}),"\n",(0,t.jsx)(n.h3,{id:"constructor",children:(0,t.jsx)(n.strong,{children:"Constructor"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected InterceptorService(ISessionOperations sessionOperations)\r\n\r\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"function-sendrequest",children:(0,t.jsx)(n.strong,{children:"Function SendRequest"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"protected IEnumerator SendRequest(string url, string method, bool attachesHeader = false, string jsonData = null, Action<string> onSuccess = null, Action<string> onError = null)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"url"})}),": URL to which the request will be sent."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"method"})}),': HTTP method such as "GET" or "POST".']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"attachesHeader"})}),":  Indicates whether authorization headers should be added to the request. Default is false."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"jsonData"})}),":  (Optional) JSON-formatted data for POST requests (body)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onSuccess"})}),":  Callback executed in case of success. Receives the server's response as a parameter."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"onError"})}),":  Callback executed in case of error. Receives the error message as a parameter."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"functionality",children:"Functionality"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Internet connection validation:"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If no connection is available, invokes the onError callback with the corresponding message and terminates execution."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the method is POST, configures the request body with the JSON data and adjusts the headers."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the method is GET, initializes the request with the appropriate method."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);