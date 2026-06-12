import{j as a}from"./jsx-runtime-u17CrQMm.js";import{N as t,H as i,M as c}from"./ThemeToggle-po0yMRIU.js";import{T as n}from"./Text-DJmn-_YR.js";import{B as e}from"./Button-DPC5yEI0.js";import{c as d}from"./createLucideIcon-DJI1T-Cn.js";import{U as l}from"./user-CDQ-mTKa.js";import"./iframe-DhWUdF5I.js";import"./preload-helper-Bni5rfja.js";import"./chevron-right-DiVDwwYs.js";import"./Modal-BX21cXaf.js";import"./x-BVc4f7vm.js";const m=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],p=d("arrow-left-right",m),T={title:"Navigation/Navbar",component:t,parameters:{layout:"fullscreen"},argTypes:{layout:{control:"radio",options:["sidebar","topbar"]}},decorators:[s=>a.jsx(c,{children:a.jsx(s,{})})]},u=[{label:"Dashboard",to:"/",icon:a.jsx(i,{className:"size-5"})},{label:"Transactions",to:"/transactions",icon:a.jsx(p,{className:"size-5"})},{label:"Account",to:"/account",icon:a.jsx(l,{className:"size-5"})}],g=a.jsx("img",{src:"https://soilhat.github.io/react-components/assets/soilhat-logo.png",alt:"Logo",className:"size-6 rounded-full"}),o={args:{layout:"sidebar",brandName:"Components",logo:g,links:u,actions:a.jsx(e,{className:"w-full",children:"Sign Out"}),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(n,{variant:"h1",children:"Dashboard"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[1,2,3].map(s=>a.jsx("div",{className:"h-32 bg-card border border-border rounded-xl"},s))})]})}},r={args:{...o.args,layout:"topbar",actions:a.jsx(e,{variant:"secondary",children:"Sign Out"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...SidebarLayout.args,
    layout: 'topbar',
    actions: <Button variant="secondary">Sign Out</Button>
  }
}`,...r.parameters?.docs?.source}}};const B=["SidebarLayout","TopbarLayout"];export{o as SidebarLayout,r as TopbarLayout,B as __namedExportsOrder,T as default};
