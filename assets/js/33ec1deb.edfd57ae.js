"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[7139],{3273:(e,n,r)=>{r.r(n),r.d(n,{apiPath:()=>o,assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,method:()=>h,toc:()=>x});const s=JSON.parse('{"id":"endpoints/transactions/TransactionsAllPaginator","title":"Title","description":"Receives a list of transactions, starting from the most recent to the oldest, with pagination support.","source":"@site/docs/endpoints/transactions/TransactionsAllPaginator.mdx","sourceDirName":"endpoints/transactions","slug":"/endpoints/transactions/TransactionsAllPaginator","permalink":"/DneroArk-Documentation/docs/endpoints/transactions/TransactionsAllPaginator","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/endpoints/transactions/TransactionsAllPaginator.mdx","tags":[],"version":"current","frontMatter":{"id":"TransactionsAllPaginator"}}');var t=r(4848),i=r(8453),d=r(2097);const c={id:"TransactionsAllPaginator"},a="Title",l={},o=" /DneroArk/transactions",h="GET",x=[{value:"Header",id:"header",level:3},{value:"Parameter",id:"parameter",level:3},{value:"JSON Response: Success (200)",id:"json-response-success-200",level:3},{value:"JSON Response: Error",id:"json-response-error",level:3}];function j(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"title",children:"Title"})}),"\n",(0,t.jsxs)("div",{className:"highlight-box",children:[(0,t.jsx)(d.A,{method:h}),o]}),"\n",(0,t.jsx)(n.p,{children:"Receives a list of transactions, starting from the most recent to the oldest, with pagination support."}),"\n",(0,t.jsx)(n.p,{children:"If no parameters are provided, it returns all notifications from the most recent to the oldest. If we want to use the paginator, we can include the parameters."}),"\n",(0,t.jsx)(n.h3,{id:"header",children:"Header"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Accept"})}),(0,t.jsx)(n.td,{children:"application/json"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Authorization"})}),(0,t.jsx)(n.td,{children:"Bearer key"})]})]})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"parameter",children:"Parameter"}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"Paginator parameters"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pageSize"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"The number of items to include in each page of the results. Required if using the paginator."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"page"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"The page number to retrieve, starting from 1 for the first page. Required if using the paginator."})]})]})]}),"\n",(0,t.jsxs)("div",{className:"examples-style",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Query parameters example"})}),(0,t.jsxs)(n.p,{children:[o,(0,t.jsx)(n.code,{children:"?pageSize=10&page=2"})]})]}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"Status and Paginator parameters"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"statuses"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int[]"})}),(0,t.jsxs)(n.td,{children:["An array of statuses to filter the transactions. If ",(0,t.jsx)(n.code,{children:"null"})," or ",(0,t.jsx)(n.code,{children:"0"}),", all statuses are returned. Multiple statuses can be provided."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pageSize"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"The number of items to include in each page of the results. Required if using the paginator."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"page"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"The page number to retrieve, starting from 1 for the first page. Required if using the paginator."})]})]})]}),"\n",(0,t.jsxs)("div",{className:"examples-style",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Query parameters example"})}),(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:[o,(0,t.jsx)(n.code,{children:"?statuses=1,2&pageSize=10&page=3"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"json-response-success-200",children:"JSON Response: Success (200)"}),"\n",(0,t.jsx)("div",{className:"table-title",children:(0,t.jsx)(n.p,{children:"List of notifications with pagination"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"currentPage"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"The current page number being returned (starting from 1 for the first page)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"totalPages"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsxs)(n.td,{children:["The total number of pages available based on the ",(0,t.jsx)(n.code,{children:"pageSize"})," and total records."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pageSize"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"The number of items per page in the paginated results."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"totalTransactions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"The total number of transactions available based on the provided filters."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"transactions"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Array"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"A list containing all the transactions for the requested page."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"Unique identifier of the transaction notification."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsxs)(n.td,{children:["Possible values: ",(0,t.jsx)(n.code,{children:"sent"})," or ",(0,t.jsx)(n.code,{children:"received"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"userName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.code,{children:"sent"}),", it\u2019s the recipient's name; if ",(0,t.jsx)(n.code,{children:"received"}),", it\u2019s the sender's name."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"userImgUrl"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsxs)(n.td,{children:["If ",(0,t.jsx)(n.code,{children:"type"})," is ",(0,t.jsx)(n.code,{children:"sent"}),", it\u2019s the recipient's image Url; if ",(0,t.jsx)(n.code,{children:"received"}),", it\u2019s the sender's image Url."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"The date and time when the transaction was created."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"amount"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsx)(n.td,{children:"The amount of money involved in the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"coinStatus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"int"})}),(0,t.jsx)(n.td,{children:"\u2705"}),(0,t.jsxs)(n.td,{children:["Coin status must not be zero. For detailed information, see the ",(0,t.jsx)(n.a,{href:"/docs/coinsStatuses",children:"Status Codes page."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"expirationDate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"Expiration date of the coin; if it does not expire, it should be null."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"capturedDate"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"\u274c"}),(0,t.jsx)(n.td,{children:"Date when the coin was captured; if it has not been captured, it should be null."})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "currentPage": 2,\r\n  "totalPages": 5,\r\n  "pageSize": 10,\r\n  "totalTransactions": 45,\r\n  "transactions": [\r\n    {\r\n    "id": 123456789,\r\n    "type": "sent",\r\n    "userName": "Alice Smith",\r\n    "userImgUrl": "https://example.com/images/alice.jpg",\r\n    "date": "2023-11-24T15:30:00Z",\r\n    "amount": "150.75",\r\n    "coinStatus": 1,\r\n    "expirationDate": "2023-12-01T23:59:59Z",\r\n    "capturedDate": null\r\n  },\r\n  {\r\n    "id": 987654321,\r\n    "type": "received",\r\n    "userName": "Bob Johnson",\r\n    "userImgUrl": "https://example.com/images/bob.jpg",\r\n    "date": "2023-11-23T12:00:00Z",\r\n    "amount": "200.00",\r\n    "coinStatus": 2,\r\n    "expirationDate": null,\r\n    "capturedDate": "2023-11-24T10:00:00Z"\r\n  },\r\n  {\r\n    "id": 192837465,\r\n    "type": "sent",\r\n    "userName": "Charlie Brown",\r\n    "userImgUrl": "https://example.com/images/charlie.jpg",\r\n    "date": "2023-11-22T08:15:00Z",\r\n    "amount": "300.25",\r\n    "coinStatus": 3,\r\n    "expirationDate": "2023-12-05T23:59:59Z",\r\n    "capturedDate": "2023-11-24T10:00:00Z"\r\n  }\r\n  ]\r\n}\r\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"json-response-error",children:"JSON Response: Error"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"400 Bad Request"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_STATUSES",\r\n  "message": "The provided statuses are invalid or malformed."\r\n}\r\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "MISSING_PAGINATION",\r\n  "message": "Both \'pageSize\' and \'page\' are required when using the paginator."\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"401 Unauthorized"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "UNAUTHORIZED",\r\n  "message": "You are not authorized to access this resource. Please provide a valid authentication token."\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"403 Forbidden"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "ACCESS_FORBIDDEN",\r\n  "message": "You do not have permission to access these transactions."\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"404 Not Found"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "TRANSACTIONS_NOT_FOUND",\r\n  "message": "No transactions were found for the given criteria."\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"422 Unprocessable Entity"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_PAGE",\r\n  "message": "The page number must be a positive integer starting from 1."\r\n}\r\n\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INVALID_PAGE_SIZE",\r\n  "message": "The page size must be a positive integer."\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"500 Internal Server Error"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-JSON",children:'{\r\n  "code": "INTERNAL_SERVER_ERROR",\r\n  "message": "An unexpected error occurred while processing your request. Please try again later."\r\n}\r\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},2097:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var s=r(4848);const t=e=>{let{method:n}=e;const r={GET:"green",POST:"blue",PUT:"orange",PATCH:"orange",DELETE:"red"};return(0,s.jsx)("span",{style:{backgroundColor:r[n]||"black",color:"white",fontWeight:"bold",padding:"0.2em 0.4em",border:`1px solid ${r[n]||"black"}`,borderRadius:"4px"},children:n})}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(6540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);