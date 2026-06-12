import{B as o}from"./Button-DPC5yEI0.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-DhWUdF5I.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DJI1T-Cn.js";const{fn:s,expect:c}=__STORYBOOK_MODULE_TEST__,m={title:"Elements/Button",component:o,parameters:{layout:"centered"},args:{onClick:s(),isLoading:!1,variant:"primary"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","danger","ghost"]}}},t={args:{children:"Button"},play:async({args:a,canvas:n,userEvent:r})=>{await r.click(n.getByRole("button")),await c(a.onClick).toHaveBeenCalled()}},e={args:{children:"Button",isLoading:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    isLoading: true
  }
}`,...e.parameters?.docs?.source}}};const g=["Button","Loading"];export{t as Button,e as Loading,g as __namedExportsOrder,m as default};
