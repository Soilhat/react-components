import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CoFqp-Hz.js";import{T as k}from"./Text-BCClgbWX.js";import"./preload-helper-Bni5rfja.js";const m=d.forwardRef(function({label:p,description:l,className:u="",containerClassName:b="",id:f,indeterminate:i,...h},x){const g=d.useRef(null),r=x||g,c=f||`checkbox-${Math.random().toString(36).slice(2,9)}`;return d.useEffect(()=>{r&&"current"in r&&r.current&&(r.current.indeterminate=!!i)},[r,i]),e.jsxs("div",{className:`group relative flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-muted/50 cursor-pointer ${b}`,children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{id:c,ref:r,type:"checkbox",className:`
            /* 1. RESET CRITICAL: Strips native OS styling so rounded-md works 🎯 */
            appearance-none shrink-0 
            
            /* 2. Layout & Shape Layouts */
            h-5 w-5 rounded-md border border-border bg-card
            
            /* 3. Smooth Transitions & Interactive Cursors */
            transition-all cursor-pointer relative
            
            /* 4. Automated Checkmark Layout via CSS Pseudo-elements */
            checked:bg-primary checked:border-primary
            checked:after:content-[''] checked:after:absolute checked:after:left-[6px] checked:after:top-[2px]
            checked:after:w-[6px] checked:after:h-[10px] 
            checked:after:border-r-2 checked:after:border-b-2 checked:after:border-primary-foreground
            checked:after:rotate-45
            
            /* 5. Indeterminate States Layout Rules */
            ${i?"bg-primary border-primary after:content-[''] after:absolute after:left-[4px] after:top-[8px] after:w-[10px] after:h-[2px] after:bg-primary-foreground":""}
            
            /* 6. Interaction Ring Highlights */
            focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none
            group-hover:border-primary/50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${u}
          `,...h})}),e.jsxs("div",{className:"text-sm leading-6 flex-1 select-none",children:[e.jsx("label",{htmlFor:c,className:"block font-bold text-foreground cursor-pointer",children:p}),l&&e.jsx("label",{htmlFor:c,className:"block text-muted-foreground mt-0.5 text-xs font-normal cursor-pointer",children:l})]})]})});m.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const R={title:"Forms/Checkbox",component:m,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{label:"Accepter les conditions"}},s={args:{label:"Notifications Flash",description:"Recevez des alertes en temps réel pour vos recettes favorites.",containerClassName:"max-w-sm border border-border rounded-xl"}},o={args:{label:"Ingrédients (Sélection partielle)",description:"4 articles sur 10 sélectionnés",indeterminate:!0,checked:!1}},a={args:{label:"Option Premium",description:e.jsx("div",{className:"mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs",children:e.jsx(k,{variant:"small",children:"Inclus : Recettes illimitées, mode hors-ligne et export PDF."})}),containerClassName:"w-80 border-2 border-primary/20 shadow-sm"}},n={args:{label:"Option indisponible",disabled:!0,description:"Cette option nécessite un abonnement actif."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accepter les conditions'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications Flash',
    description: 'Recevez des alertes en temps réel pour vos recettes favorites.',
    containerClassName: 'max-w-sm border border-border rounded-xl'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ingrédients (Sélection partielle)',
    description: '4 articles sur 10 sélectionnés',
    indeterminate: true,
    checked: false
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option Premium',
    description: <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs">
        <Text variant="small">Inclus : Recettes illimitées, mode hors-ligne et export PDF.</Text>
      </div>,
    containerClassName: 'w-80 border-2 border-primary/20 shadow-sm'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option indisponible',
    disabled: true,
    description: 'Cette option nécessite un abonnement actif.'
  }
}`,...n.parameters?.docs?.source}}};const I=["Default","WithDescription","Indeterminate","ComplexCard","Disabled"];export{a as ComplexCard,t as Default,n as Disabled,o as Indeterminate,s as WithDescription,I as __namedExportsOrder,R as default};
