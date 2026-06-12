import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./Input-c0uf9bxC.js";import"./iframe-DhWUdF5I.js";import"./preload-helper-Bni5rfja.js";const u={title:"Forms/Input",component:c,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["text","password","email","number","checkbox"]}}},r={args:{label:"Name",placeholder:"Enter your name"}},o={args:{label:"Password",type:"password",placeholder:"Enter your password"}},a={args:{label:"Checkbox",type:"checkbox",placeholder:"Click to select value"}},s={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},t={args:{label:"Search",placeholder:"Type to search...",leadingIcon:e.jsx("svg",{className:"h-4 w-4 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}},n={args:{label:"Password",type:"password",placeholder:"Enter your password",trailingIcon:e.jsxs("svg",{className:"h-4 w-4 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),onTrailingIconClick:()=>alert("Trailing icon clicked!")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    type: 'checkbox',
    placeholder: 'Click to select value'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    leadingIcon: <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    trailingIcon: <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>,
    onTrailingIconClick: () => alert('Trailing icon clicked!')
  }
}`,...n.parameters?.docs?.source}}};const m=["Default","Password","Checkbox","Disabled","WithLeadingIcon","WithTrailingIcon"];export{a as Checkbox,r as Default,s as Disabled,o as Password,t as WithLeadingIcon,n as WithTrailingIcon,m as __namedExportsOrder,u as default};
