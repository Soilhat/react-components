import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-B67UeQ2-.js";import"./preload-helper-PPVm8Dsz.js";const m=({value:u,max:i=100,label:a,showValue:c=!1,size:p="md",className:g="",variant:f="primary"})=>{const d=y.useMemo(()=>{const h=u/i*100;return Math.min(100,Math.max(0,h))},[u,i]),v={sm:"h-1.5",md:"h-2.5",lg:"h-4"},b={primary:"bg-primary dark:bg-primary-dark",success:"bg-state-success dark:bg-state-success-dark",info:"bg-state-info dark:bg-state-info-dark"};return e.jsxs("div",{className:`w-full ${g}`,children:[(a||c)&&e.jsxs("div",{className:"flex justify-between items-end mb-1.5 px-1",children:[a&&e.jsx("span",{className:"text-xs font-bold text-text-secondary uppercase tracking-wider",children:a}),c&&e.jsxs("span",{className:"text-xs font-mono font-bold text-text-primary",children:[Math.round(d),"%"]})]}),e.jsx("div",{className:`w-full ${v[p]} bg-surface-base dark:bg-surface-base-dark rounded-full overflow-hidden border border-border/50 dark:border-border-dark/50`,children:e.jsx("div",{className:`h-full ${b[f]} transition-all duration-500 ease-out rounded-full`,style:{width:`${d}%`},role:"progressbar","aria-label":a,"aria-valuenow":u,"aria-valuemin":0,"aria-valuemax":i})})]})};m.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!0,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'info'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const k={title:"Feedback/Progress",component:m,parameters:{layout:"padded"},argTypes:{value:{control:{type:"range",min:0,max:100},description:"The current progress value"},variant:{control:"select",options:["primary","success","info"]},size:{control:"inline-radio",options:["sm","md","lg"]}}},r={args:{value:45,label:"Loading Ingredients",showValue:!0}},s={args:{value:70,size:"sm",label:"Compact Progress"}},t={args:{value:30,size:"lg",label:"Storage space",showValue:!0}},n={args:{value:100,variant:"success",label:"Grocery List Status",showValue:!0}},o={args:{value:60,variant:"info",label:"Current Month Budget",showValue:!0}},l={args:{value:50,size:"md"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    label: 'Loading Ingredients',
    showValue: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: 'success',
    label: 'Grocery List Status',
    showValue: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: 'info',
    label: 'Current Month Budget',
    showValue: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}};const S=["Default","Small","Large","Completed","InfoVariant","WithoutLabel"];export{n as Completed,r as Default,o as InfoVariant,t as Large,s as Small,l as WithoutLabel,S as __namedExportsOrder,k as default};
