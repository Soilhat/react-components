import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-CoFqp-Hz.js";import"./preload-helper-Bni5rfja.js";const d=({value:u,max:i=100,label:r,showValue:c=!1,size:p="md",className:g="",variant:f="primary"})=>{const m=y.useMemo(()=>{const h=u/i*100;return Math.min(100,Math.max(0,h))},[u,i]),b={sm:"h-1.5",md:"h-2.5",lg:"h-4"},v={primary:"[&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary",success:"[&::-webkit-progress-value]:bg-success [&::-moz-progress-bar]:bg-success",info:"[&::-webkit-progress-value]:bg-info [&::-moz-progress-bar]:bg-info"};return e.jsxs("div",{className:`w-full ${g}`,children:[(r||c)&&e.jsxs("div",{className:"flex justify-between items-end mb-1.5 px-1",children:[r&&e.jsx("span",{className:"text-xs font-bold text-muted-foreground uppercase tracking-wider",children:r}),c&&e.jsxs("span",{className:"text-xs font-mono font-bold text-foreground",children:[Math.round(m),"%"]})]}),e.jsx("div",{className:`w-full ${b[p]} flex items-center`,children:e.jsxs("progress",{className:`
            w-full h-full appearance-none rounded-full overflow-hidden border border-border/50
            bg-muted text-primary
            [&::-webkit-progress-bar]:bg-muted
            ${v[f]}
            transition-all duration-500 ease-out
          `,"aria-label":r,value:u,max:i,children:[Math.round(m),"%"]})})]})};d.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const S={title:"Feedback/Progress",component:d,parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100},description:"The current progress value"},variant:{control:"select",options:["primary","success","info"]},size:{control:"inline-radio",options:["sm","md","lg"]}}},a={args:{value:45,label:"Loading Ingredients",showValue:!0}},s={args:{value:70,size:"sm",label:"Compact Progress"}},t={args:{value:30,size:"lg",label:"Storage space",showValue:!0}},o={args:{value:100,variant:"success",label:"Grocery List Status",showValue:!0}},n={args:{value:60,variant:"info",label:"Current Month Budget",showValue:!0}},l={args:{value:50,size:"md"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: 'Loading Ingredients',
    showValue: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    size: 'sm',
    label: 'Compact Progress'
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 30,
    size: 'lg',
    label: 'Storage space',
    showValue: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    label: 'Grocery List Status',
    showValue: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'info',
    label: 'Current Month Budget',
    showValue: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}};const z=["Default","Small","Large","Completed","InfoVariant","WithoutLabel"];export{o as Completed,a as Default,n as InfoVariant,t as Large,s as Small,l as WithoutLabel,z as __namedExportsOrder,S as default};
