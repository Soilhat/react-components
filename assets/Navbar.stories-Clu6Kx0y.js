import{j as a}from"./jsx-runtime-u17CrQMm.js";import{N as c,M as d,F as l,a as m}from"./ThemeToggle-PO26sd9o.js";import{T as p}from"./Text-C005xpyg.js";import{B as u}from"./Button-BtK1OYc1.js";import{r as e}from"./iframe-DObK1DMn.js";import"./ChevronRightIcon-DcovAXiR.js";import"./Modal-Ds8HEr_d.js";import"./index-D8W8VawQ.js";import"./preload-helper-PPVm8Dsz.js";function g({title:r,titleId:t,...i},n){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},i),r?e.createElement("title",{id:t},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"}))}const b=e.forwardRef(g),R={title:"Navigation/Navbar",component:c,parameters:{layout:"fullscreen"},argTypes:{layout:{control:"radio",options:["sidebar","topbar"]}},decorators:[r=>a.jsx(d,{children:a.jsx(r,{})})]},h=[{label:"Dashboard",to:"/",icon:a.jsx(l,{className:"size-5"})},{label:"Transactions",to:"/transactions",icon:a.jsx(b,{className:"size-5"})},{label:"Account",to:"/account",icon:a.jsx(m,{className:"size-5"})}],x=a.jsx("img",{src:"https://soilhat.github.io/react-components/assets/soilhat-logo.png",alt:"Logo",className:"size-6 rounded-full"}),o={args:{layout:"sidebar",brandName:"Components",logo:x,links:h,actions:a.jsx(u,{className:"w-full",children:"Sign Out"}),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(p,{variant:"h1",children:"Dashboard"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[1,2,3].map(r=>a.jsx("div",{className:"h-32 bg-card border border-border rounded-xl"},r))})]})}},s={args:{...o.args,layout:"topbar"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: 'sidebar',
    brandName: 'Components',
    logo: logo,
    links: demoLinks,
    actions: <Button className="w-full">Sign Out</Button>,
    children: <div className="space-y-4">
        <Text variant="h1">Dashboard</Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => <div key={i} className="h-32 bg-card border border-border rounded-xl" />)}
        </div>
      </div>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...SidebarLayout.args,
    layout: 'topbar'
  }
}`,...s.parameters?.docs?.source}}};const S=["SidebarLayout","TopbarLayout"];export{o as SidebarLayout,s as TopbarLayout,S as __namedExportsOrder,R as default};
