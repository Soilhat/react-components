import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BAutRjJ-.js";import"./preload-helper-PPVm8Dsz.js";const p=c.forwardRef(function({label:m,description:d,className:u="",containerClassName:b="",id:f,indeterminate:i,...x},g){const h=c.useRef(null),r=g||h,l=f||`checkbox-${Math.random().toString(36).slice(2,9)}`;return c.useEffect(()=>{"current"in r&&r.current&&(r.current.indeterminate=!!i)},[r,i]),e.jsxs("div",{className:`relative flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-surface-base/50 dark:hover:bg-surface-base-dark/30 ${b}`,children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{id:l,ref:r,type:"checkbox",className:`
            h-5 w-5 rounded border-border dark:border-border-dark
            bg-surface-panel dark:bg-surface-panel-dark
            text-primary focus:ring-primary/20 focus:ring-offset-0
            transition-all cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            ${i?"bg-primary border-primary":""}
            ${u}
          `,...x})}),e.jsxs("div",{className:"text-sm leading-6 flex-1 cursor-pointer",children:[e.jsx("label",{htmlFor:l,className:"font-bold text-text-primary dark:text-text-primary-dark cursor-pointer select-none",children:m}),d&&e.jsx("div",{className:"text-text-secondary dark:text-text-secondary-dark mt-0.5",children:d})]})]})});p.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const C={title:"Forms/Checkbox",component:p,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{label:"Accepter les conditions"}},a={args:{label:"Notifications Flash",description:"Recevez des alertes en temps réel pour vos recettes favorites.",containerClassName:"max-w-sm border border-border rounded-xl"}},t={args:{label:"Ingrédients (Sélection partielle)",description:"4 articles sur 10 sélectionnés",indeterminate:!0,checked:!1}},o={args:{label:"Option Premium",description:e.jsx("div",{className:"mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs",children:e.jsx("p",{children:"Inclus : Recettes illimitées, mode hors-ligne et export PDF."})}),containerClassName:"w-80 border-2 border-primary/20 shadow-sm"}},n={args:{label:"Option indisponible",disabled:!0,description:"Cette option nécessite un abonnement actif."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accepter les conditions'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications Flash',
    description: 'Recevez des alertes en temps réel pour vos recettes favorites.',
    containerClassName: 'max-w-sm border border-border rounded-xl'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ingrédients (Sélection partielle)',
    description: '4 articles sur 10 sélectionnés',
    indeterminate: true,
    checked: false
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option Premium',
    description: <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs">
        <p>Inclus : Recettes illimitées, mode hors-ligne et export PDF.</p>
      </div>,
    containerClassName: 'w-80 border-2 border-primary/20 shadow-sm'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option indisponible',
    disabled: true,
    description: 'Cette option nécessite un abonnement actif.'
  }
}`,...n.parameters?.docs?.source}}};const R=["Default","WithDescription","Indeterminate","ComplexCard","Disabled"];export{o as ComplexCard,s as Default,n as Disabled,t as Indeterminate,a as WithDescription,R as __namedExportsOrder,C as default};
