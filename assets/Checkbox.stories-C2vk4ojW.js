import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CK3y_YTs.js";import"./preload-helper-PPVm8Dsz.js";const N={h1:"text-3xl font-bold tracking-tight",h2:"text-2xl font-semibold",h3:"text-xl font-medium",body:"text-base leading-relaxed",small:"text-sm",detail:"text-xs uppercase tracking-wider opacity-70"},x=({as:b,variant:d="body",bold:t=!1,className:c="",children:m,...p})=>{const r=b??"p";return e.jsx(r,{className:`
        ${N[d]} 
        ${t?"font-bold":""} 
        ${c}
      `.trim(),...p,children:m})};x.__docgenInfo={description:"",methods:[],displayName:"Text",props:{as:{required:!1,tsType:{name:"T"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'h1' | 'h2' | 'h3' | 'body' | 'small' | 'detail'",elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'body'"},{name:"literal",value:"'small'"},{name:"literal",value:"'detail'"}]},description:"",defaultValue:{value:"'body'",computed:!1}},bold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const h=u.forwardRef(function({label:d,description:t,className:c="",containerClassName:m="",id:p,indeterminate:r,...g},y){const v=u.useRef(null),a=y||v,f=p||`checkbox-${Math.random().toString(36).slice(2,9)}`;return u.useEffect(()=>{"current"in a&&a.current&&(a.current.indeterminate=!!r)},[a,r]),e.jsxs("div",{className:`relative flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-surface-base/50 dark:hover:bg-surface-base-dark/30 ${m}`,children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{id:f,ref:a,type:"checkbox",className:`
            h-5 w-5 rounded border-border dark:border-border-dark
            bg-surface-panel dark:bg-surface-panel-dark
            text-primary focus:ring-primary/20 focus:ring-offset-0
            transition-all cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            ${r?"bg-primary border-primary":""}
            ${c}
          `,...g})}),e.jsxs("div",{className:"text-sm leading-6 flex-1 cursor-pointer",children:[e.jsx("label",{htmlFor:f,className:"font-bold text-text-primary dark:text-text-primary-dark cursor-pointer select-none",children:d}),t&&e.jsx("div",{className:"text-text-secondary dark:text-text-secondary-dark mt-0.5",children:t})]})]})});h.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactNode"},description:""},containerClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const T={title:"Forms/Checkbox",component:h,parameters:{layout:"centered"},argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{label:"Accepter les conditions"}},o={args:{label:"Notifications Flash",description:"Recevez des alertes en temps réel pour vos recettes favorites.",containerClassName:"max-w-sm border border-border rounded-xl"}},n={args:{label:"Ingrédients (Sélection partielle)",description:"4 articles sur 10 sélectionnés",indeterminate:!0,checked:!1}},i={args:{label:"Option Premium",description:e.jsx("div",{className:"mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs",children:e.jsx(x,{variant:"small",children:"Inclus : Recettes illimitées, mode hors-ligne et export PDF."})}),containerClassName:"w-80 border-2 border-primary/20 shadow-sm"}},l={args:{label:"Option indisponible",disabled:!0,description:"Cette option nécessite un abonnement actif."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accepter les conditions'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notifications Flash',
    description: 'Recevez des alertes en temps réel pour vos recettes favorites.',
    containerClassName: 'max-w-sm border border-border rounded-xl'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Ingrédients (Sélection partielle)',
    description: '4 articles sur 10 sélectionnés',
    indeterminate: true,
    checked: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option Premium',
    description: <div className="mt-2 p-2 bg-primary/10 rounded border border-primary/20 text-xs">
        <Text variant="small">Inclus : Recettes illimitées, mode hors-ligne et export PDF.</Text>
      </div>,
    containerClassName: 'w-80 border-2 border-primary/20 shadow-sm'
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option indisponible',
    disabled: true,
    description: 'Cette option nécessite un abonnement actif.'
  }
}`,...l.parameters?.docs?.source}}};const w=["Default","WithDescription","Indeterminate","ComplexCard","Disabled"];export{i as ComplexCard,s as Default,l as Disabled,n as Indeterminate,o as WithDescription,w as __namedExportsOrder,T as default};
