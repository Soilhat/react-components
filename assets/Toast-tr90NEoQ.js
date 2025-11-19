import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Qxa1s-Nz.js";import{M as i,S as r,A as a}from"./blocks-ClzjCVY3.js";import{T as c}from"./Toast-Br8pMeHa.js";import{T as l,S as d,E as h,I as p}from"./Toast.stories-rdLsr3ou.js";import"./iframe-BFbzuqoR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DNtaTUxS.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"Feedback/Toast",of:l}),`
`,s.jsx(e.h1,{id:"toast",children:"Toast"}),`
`,s.jsxs(e.p,{children:["The ",s.jsx(e.code,{children:"Toast"})," component displays brief messages to the user. It is typically used for feedback such as success, error, or informational messages. Toasts are usually triggered by user actions or system events and disappear automatically after a short duration."]}),`
`,s.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import { Toast } from 'lib/Feedback/Toast';

<Toast
  message="Your changes have been saved!"
  type="success"
  onClose={() => {
    /* handle close */
  }}
/>;
`})}),`
`,s.jsx(e.h2,{id:"types",children:"Types"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"success"}),": Indicates a successful or positive action."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"error"}),": Indicates an error or something went wrong."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"info"}),": Provides neutral information."]}),`
`]}),`
`,s.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,s.jsx(r,{of:d}),`
`,s.jsx(r,{of:h}),`
`,s.jsx(r,{of:p}),`
`,s.jsx(e.h2,{id:"props",children:"Props"}),`
`,s.jsx(a,{of:c}),`
`,s.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:"Use concise and clear messages."}),`
`,s.jsx(e.li,{children:"Use the appropriate type for the context."}),`
`,s.jsx(e.li,{children:"Toasts should not interrupt the user’s workflow."}),`
`,s.jsxs(e.li,{children:["Use with a provider (see ",s.jsx(e.code,{children:"ToastProvider"}),") for global toasts."]}),`
`]})]})}function b(n={}){const{wrapper:e}={...t(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(o,{...n})}):o(n)}export{b as default};
