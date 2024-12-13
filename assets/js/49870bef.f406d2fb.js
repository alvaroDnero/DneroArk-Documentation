"use strict";(self.webpackChunkdnero_ark_documentation=self.webpackChunkdnero_ark_documentation||[]).push([[1662],{7618:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"DTO/user/userProfile","title":"User Profile","description":"| Name            | Type     | Description                                     |","source":"@site/docs/DTO/user/userProfile.mdx","sourceDirName":"DTO/user","slug":"/DTO/user/userProfile","permalink":"/DneroArk-Documentation/docs/DTO/user/userProfile","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DTO/user/userProfile.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"apiSidebar","previous":{"title":"Response DTO","permalink":"/DneroArk-Documentation/docs/DTO/login/accessToken/response"},"next":{"title":"Body DTO","permalink":"/DneroArk-Documentation/docs/DTO/user/contacts/body"}}');var s=t(4848),a=t(8453),o=t(1517),l=t(5594);const i={},c="User Profile",u={},d=[];function h(e){const r={a:"a",code:"code",h1:"h1",header:"header",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"user-profile",children:"User Profile"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"userId"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"long"})}),(0,s.jsx)(r.td,{children:"Unique identifier of the user."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"imgUrl"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"URL where the profile image is hosted."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"firstName"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"User's first name."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"lastName"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"User's last name."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"deviceInfo"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"object"})}),(0,s.jsxs)(r.td,{children:["Information about the user's device. For detailed information, see the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"/docs/DTO/Objects/deviceInfoDto",children:"Device Info"})})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"balance"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"object"})}),(0,s.jsxs)(r.td,{children:["Information about Balance. For detailed information, see the ",(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"/docs/DTO/Objects/balanceDTO",children:"balance info"})})]})]})]})]}),"\n",(0,s.jsxs)(o.A,{children:[(0,s.jsx)(l.A,{value:"json",label:"Json",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\r\n  "userId": 123456789,\r\n  "imgProfileUrl": "https://example.com/profile-images/user123.jpg",\r\n  "firstName": "John",\r\n  "lastName": "Doe",\r\n  "phone": {...},\r\n  "deviceInfo": {...},\r\n}\n'})})}),(0,s.jsx)(l.A,{value:"c#",label:"C#",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c#"})})})]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5594:(e,r,t)=>{t.d(r,{A:()=>o});t(6540);var n=t(4164);const s={tabItem:"tabItem__kUE"};var a=t(4848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:t,children:r})}},1517:(e,r,t)=>{t.d(r,{A:()=>D});var n=t(6540),s=t(4164),a=t(3104),o=t(6347),l=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function f(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[p,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,u.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??p;return f({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2303);const x={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var j=t(4848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),s=l[t].value;s!==n&&(c(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=p(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...r,...e}),(0,j.jsx)(g,{...r,...e})]})}function D(e){const r=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(6540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);