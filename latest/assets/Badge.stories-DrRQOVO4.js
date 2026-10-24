import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-C5BChebZ.js";import{c as d}from"./createLucideIcon-BZyXd7Gj.js";import"./preload-helper-Bni5rfja.js";const f=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],v=d("circle-alert",f);const h=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],y=d("circle-check",h);const x=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],b=d("sparkles",x),r=({variant:l="default",icon:i,children:u,className:g="",...m})=>{const p=["inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{default:"bg-primary text-primary-foreground border-transparent hover:bg-primary/80",secondary:"bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80",outline:"text-foreground border-border bg-transparent",danger:"bg-danger text-danger-foreground border-transparent hover:bg-danger/80",warning:"bg-warning text-warning-foreground border-transparent hover:bg-warning/80",success:"bg-success text-success-foreground border-transparent hover:bg-success/80"}[l],g].filter(Boolean).join(" ");return e.jsxs("div",{className:p,...m,children:[i&&e.jsx("span",{className:"flex items-center justify-center h-3 w-3 shrink-0",children:i}),e.jsx("span",{children:u})]})};r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const S={title:"Elements/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","outline","danger","warning","success"]}}},a={args:{children:"Default Badge",variant:"default"}},n={args:{children:"Tenant Custom",variant:"secondary"}},s={args:{children:"Global (2021.1)",variant:"outline"}},t={args:{children:"Archived",variant:"danger"}},c={args:{children:"Featured Activity",variant:"default",icon:e.jsx(b,{className:"h-3 w-3"})}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 bg-background p-4 rounded-xl border border-border",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"outline",children:"Outline"}),e.jsx(r,{variant:"success",icon:e.jsx(y,{className:"h-3 w-3"}),children:"Active"}),e.jsx(r,{variant:"warning",children:"Pending"}),e.jsx(r,{variant:"danger",icon:e.jsx(v,{className:"h-3 w-3"}),children:"Error"})]})},_=["Default","Secondary","Outline","Danger","WithIcon","VariantShowcase"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Badge',
    variant: 'default'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Tenant Custom',
    variant: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Global (2021.1)',
    variant: 'outline'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Archived',
    variant: 'danger'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Featured Activity',
    variant: 'default',
    icon: <Sparkles className="h-3 w-3" />
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3 bg-background p-4 rounded-xl border border-border">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success" icon={<CheckCircle2 className="h-3 w-3" />}>
        Active
      </Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger" icon={<AlertCircle className="h-3 w-3" />}>
        Error
      </Badge>
    </div>
}`,...o.parameters?.docs?.source}}};export{t as Danger,a as Default,s as Outline,n as Secondary,o as VariantShowcase,c as WithIcon,_ as __namedExportsOrder,S as default};
