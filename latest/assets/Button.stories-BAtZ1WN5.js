import{j as r}from"./jsx-runtime-u17CrQMm.js";import{B as e}from"./Button-DJmvwKvo.js";import{c as m}from"./createLucideIcon-BZyXd7Gj.js";import{T as h}from"./trash-2-DwWAcU_B.js";import"./iframe-C5BChebZ.js";import"./preload-helper-Bni5rfja.js";const v=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],y=m("arrow-right",v);const x=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],B=m("plus",x),{fn:E,expect:b}=__STORYBOOK_MODULE_TEST__,z={title:"Elements/Button",component:e,parameters:{layout:"centered"},args:{onClick:E(),isLoading:!1,variant:"primary",size:"md"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","danger","ghost","link"]},size:{control:{type:"select"},options:["sm","md","lg","icon"]}}},a={args:{children:"Primary Action",variant:"primary"},play:async({args:u,canvas:p,userEvent:g})=>{await g.click(p.getByRole("button")),await b(u.onClick).toHaveBeenCalled()}},n={args:{children:"Secondary Action",variant:"secondary"}},t={args:{children:"Outline Action",variant:"outline"}},s={args:{children:"Delete Account",variant:"danger",leftIcon:r.jsx(h,{className:"h-4 w-4"})}},o={args:{children:"Cancel",variant:"ghost"}},i={args:{children:"Read Documentation",variant:"link",rightIcon:r.jsx(y,{className:"h-4 w-4"})}},c={args:{children:"Saving Changes",isLoading:!0}},l={render:()=>r.jsxs("div",{className:"flex flex-wrap items-center gap-4 bg-background p-6 rounded-xl border border-border",children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"danger",children:"Danger"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"link",children:"Link"})]})},d={render:()=>r.jsxs("div",{className:"flex items-center gap-4 bg-background p-6 rounded-xl border border-border",children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"}),r.jsx(e,{size:"icon","aria-label":"Add item",children:r.jsx(B,{className:"h-4 w-4"})})]})},L=["Primary","Secondary","Outline","Danger","Ghost","Link","Loading","AllVariants","AllSizes"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Action',
    variant: 'primary'
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Action',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Action',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Account',
    variant: 'danger',
    leftIcon: <Trash2 className="h-4 w-4" />
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'ghost'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Read Documentation',
    variant: 'link',
    rightIcon: <ArrowRight className="h-4 w-4" />
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Saving Changes',
    isLoading: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4 bg-background p-6 rounded-xl border border-border">
      <ButtonEl variant="primary">Primary</ButtonEl>
      <ButtonEl variant="secondary">Secondary</ButtonEl>
      <ButtonEl variant="outline">Outline</ButtonEl>
      <ButtonEl variant="danger">Danger</ButtonEl>
      <ButtonEl variant="ghost">Ghost</ButtonEl>
      <ButtonEl variant="link">Link</ButtonEl>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 bg-background p-6 rounded-xl border border-border">
      <ButtonEl size="sm">Small</ButtonEl>
      <ButtonEl size="md">Medium</ButtonEl>
      <ButtonEl size="lg">Large</ButtonEl>
      <ButtonEl size="icon" aria-label="Add item">
        <Plus className="h-4 w-4" />
      </ButtonEl>
    </div>
}`,...d.parameters?.docs?.source}}};export{d as AllSizes,l as AllVariants,s as Danger,o as Ghost,i as Link,c as Loading,t as Outline,a as Primary,n as Secondary,L as __namedExportsOrder,z as default};
