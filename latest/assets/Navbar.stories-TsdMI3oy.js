import{j as a}from"./jsx-runtime-u17CrQMm.js";import{N as d,F as l,a as m,M as u}from"./ThemeToggle-Ky6zuV16.js";import{T as p}from"./Text-BCClgbWX.js";import{B as i}from"./Button-Bt03qQjO.js";import{r as e}from"./iframe-CoFqp-Hz.js";import"./ChevronRightIcon-DMSWlU3_.js";import"./Modal-KqwFNaUO.js";import"./preload-helper-Bni5rfja.js";function g({title:r,titleId:t,...n},c){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":t},n),r?e.createElement("title",{id:t},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"}))}const b=e.forwardRef(g),S={title:"Navigation/Navbar",component:d,parameters:{layout:"fullscreen"},argTypes:{layout:{control:"radio",options:["sidebar","topbar"]}},decorators:[r=>a.jsx(u,{children:a.jsx(r,{})})]},h=[{label:"Dashboard",to:"/",icon:a.jsx(l,{className:"size-5"})},{label:"Transactions",to:"/transactions",icon:a.jsx(b,{className:"size-5"})},{label:"Account",to:"/account",icon:a.jsx(m,{className:"size-5"})}],x=a.jsx("img",{src:"https://soilhat.github.io/react-components/assets/soilhat-logo.png",alt:"Logo",className:"size-6 rounded-full"}),o={args:{layout:"sidebar",brandName:"Components",logo:x,links:h,actions:a.jsx(i,{className:"w-full",children:"Sign Out"}),children:a.jsxs("div",{className:"space-y-4",children:[a.jsx(p,{variant:"h1",children:"Dashboard"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[1,2,3].map(r=>a.jsx("div",{className:"h-32 bg-card border border-border rounded-xl"},r))})]})}},s={args:{...o.args,layout:"topbar",actions:a.jsx(i,{variant:"secondary",children:"Sign Out"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    layout: 'topbar',
    actions: <Button variant="secondary">Sign Out</Button>
  }
}`,...s.parameters?.docs?.source}}};const T=["SidebarLayout","TopbarLayout"];export{o as SidebarLayout,s as TopbarLayout,T as __namedExportsOrder,S as default};
