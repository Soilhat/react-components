import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DBFgpt-p.js";import{M as a,S as t,A as c}from"./blocks-64gVVAT3.js";import{T as n,B as d,C as h}from"./ToastProvider.stories-CajCCLUS.js";import"./iframe-go1DUnsW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ckEsAMHc.js";import"./Toast-Cv_YbKLm.js";import"./index-CqkOF6Rx.js";import"./Button-DANKhb8e.js";function r(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(a,{title:"Feedback/ToastProvider",component:n}),`
`,s.jsx(o.h1,{id:"toastprovider",children:"ToastProvider"}),`
`,s.jsxs(o.p,{children:[s.jsx(o.code,{children:"ToastProvider"})," is a React context provider that enables global toast notifications in your app. Wrap your app with ",s.jsx(o.code,{children:"ToastProvider"})," to allow any component to show toasts using the ",s.jsx(o.code,{children:"useToast"})," hook."]}),`
`,s.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-tsx",children:`import { ToastProvider } from '@soilhat/react-components/Feedback';

function App() {
  return <ToastProvider>{/* your app */}</ToastProvider>;
}
`})}),`
`,s.jsx(o.h2,{id:"showing-toasts",children:"Showing Toasts"}),`
`,s.jsxs(o.p,{children:["Use the ",s.jsx(o.code,{children:"useToast"})," hook inside your components to show toasts:"]}),`
`,s.jsx(o.pre,{children:s.jsx(o.code,{className:"language-tsx",children:`import { useToast } from '@soilhat/react-components/Feedback';

function Example() {
  const toast = useToast();
  return <button onClick={() => toast.success('Saved!')}>Show Toast</button>;
}
`})}),`
`,s.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,s.jsx(t,{of:d}),`
`,s.jsx(t,{of:h}),`
`,s.jsx(o.h2,{id:"api",children:"API"}),`
`,s.jsx(o.h3,{id:"toastprovider-props",children:"ToastProvider Props"}),`
`,s.jsx(c,{of:n}),`
`,s.jsx(o.h3,{id:"usetoast-api",children:"useToast API"}),`
`,s.jsxs(o.ul,{children:[`
`,s.jsxs(o.li,{children:[s.jsx(o.code,{children:"showToast(message, options?)"}),": Show a toast with custom message and options."]}),`
`,s.jsxs(o.li,{children:[s.jsx(o.code,{children:"success(message, duration?)"}),": Show a success toast."]}),`
`,s.jsxs(o.li,{children:[s.jsx(o.code,{children:"error(message, duration?)"}),": Show an error toast."]}),`
`,s.jsxs(o.li,{children:[s.jsx(o.code,{children:"info(message, duration?)"}),": Show an info toast."]}),`
`,s.jsxs(o.li,{children:[s.jsx(o.code,{children:"dismiss(id?)"}),": Dismiss a toast by id or all toasts."]}),`
`]}),`
`,s.jsx(o.h2,{id:"best-practices",children:"Best Practices"}),`
`,s.jsxs(o.ul,{children:[`
`,s.jsxs(o.li,{children:["Place ",s.jsx(o.code,{children:"ToastProvider"})," at the root of your app."]}),`
`,s.jsx(o.li,{children:"Use concise, actionable messages."}),`
`,s.jsx(o.li,{children:"Use the correct toast type for the context."}),`
`,s.jsx(o.li,{children:"Avoid overusing toasts to prevent user fatigue."}),`
`]})]})}function P(e={}){const{wrapper:o}={...i(),...e.components};return o?s.jsx(o,{...e,children:s.jsx(r,{...e})}):r(e)}export{P as default};
