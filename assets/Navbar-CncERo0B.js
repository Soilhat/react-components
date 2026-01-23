import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-BT5IGBd6.js";import{M as t,A as o,S as c}from"./blocks-5ggcwx5G.js";import{N as s}from"./Navbar.stories-D880pLan.js";import"./iframe-B67UeQ2-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ZZBWC3aZ.js";import"./index-CymLTYjh.js";import"./Text-p-koTfv-.js";import"./Button-BLmy9for.js";function r(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Navigation/Navbar",component:s}),`
`,e.jsx(n.h1,{id:"navbar",children:"Navbar"}),`
`,e.jsx(n.p,{children:"A responsive navigation bar component for React applications, supporting branding, navigation links, and custom actions. Designed for use with React Router."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Navbar } from '@soilhat/react-components/Navigation';

<Navbar
  logoURl="https://soilhat.github.io/logo192.png"
  brandName="BrandName"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]}
  actions={<button className="px-4 py-2 bg-accent text-white rounded">Action</button>}
/>;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{of:s}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx(c,{of:void 0}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Uses semantic HTML elements (",e.jsx(n.code,{children:"<header>"}),", ",e.jsx(n.code,{children:"<nav>"}),", ",e.jsx(n.code,{children:"<ul>"}),", ",e.jsx(n.code,{children:"<li>"}),")"]}),`
`,e.jsx(n.li,{children:"All interactive elements have accessible labels"}),`
`,e.jsxs(n.li,{children:["Mobile menu button uses ",e.jsx(n.code,{children:"aria-label"})," and ",e.jsx(n.code,{children:"aria-expanded"})]}),`
`,e.jsx(n.li,{children:"Keyboard and screen reader friendly"}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use with React Router for navigation (",e.jsx(n.code,{children:"NavLink"})," is used internally)"]}),`
`,e.jsxs(n.li,{children:["Provide descriptive ",e.jsx(n.code,{children:"brandName"})," and ",e.jsx(n.code,{children:"logoURl"})," for branding"]}),`
`,e.jsx(n.li,{children:"Pass custom actions as React elements for flexibility"}),`
`]})]})}function g(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{g as default};
