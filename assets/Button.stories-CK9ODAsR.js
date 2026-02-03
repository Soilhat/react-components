import{B as o}from"./Button-C9riIvTf.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-BLwkVyny.js";import"./preload-helper-PPVm8Dsz.js";const{fn:r,expect:s}=__STORYBOOK_MODULE_TEST__,u={title:"Elements/Button",component:o,parameters:{layout:"centered"},args:{onClick:r()}},t={args:{children:"Button"},play:async({args:e,canvas:n,userEvent:a})=>{await a.click(n.getByRole("button")),await s(e.onClick).toHaveBeenCalled()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const m=["Button"];export{t as Button,m as __namedExportsOrder,u as default};
