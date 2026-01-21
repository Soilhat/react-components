import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r,R as k}from"./iframe-D4mNC2yH.js";import"./preload-helper-PPVm8Dsz.js";const p=({label:a,active:t=!1,onClick:s,icon:e,variant:u="primary",className:m="",disabled:c=!1})=>{const g={primary:"bg-primary dark:bg-primary-dark text-text-on-primary dark:text-text-on-primary-dark border-primary dark:border-primary-dark shadow-lg shadow-primary/20 dark:shadow-primary-dark/40",success:"bg-state-success dark:bg-state-success-dark text-text-on-primary dark:text-text-on-primary-dark border-state-success dark:border-state-success-dark shadow-lg shadow-state-success/20 dark:shadow-state-success-dark/40",danger:"bg-state-danger dark:bg-state-danger-dark text-text-on-primary dark:text-text-on-primary-dark border-state-danger dark:border-state-danger-dark shadow-lg shadow-state-danger/20 dark:shadow-state-danger-dark/40",warning:"bg-state-warning dark:bg-state-warning-dark text-text-on-primary dark:text-text-on-primary-dark border-state-warning dark:border-state-warning-dark shadow-lg shadow-state-warning/20 dark:shadow-state-warning-dark/40",ghost:"bg-text-primary dark:bg-text-primary-dark text-text-on-primary dark:text-text-on-primary-dark border-text-primary dark:border-text-primary-dark"};return n.jsxs("button",{onClick:c?void 0:s,disabled:c,className:`
        flex-none inline-flex items-center justify-center gap-1.5 
        px-4 py-1.5 rounded-full text-xs font-bold transition-all border capitalize
        ${c?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${t?g[u]:"bg-surface-panel dark:bg-surface-panel-dark text-text-secondary border-border hover:border-primary/50 hover:text-primary"}
        ${m}
      `.trim(),children:[e&&n.jsx("span",{className:"h-3.5 w-3.5 shrink-0",children:e}),a.replaceAll("_"," ")]})};p.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{label:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'danger' | 'warning' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function f({title:a,titleId:t,...s},e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":t},s),a?r.createElement("title",{id:t},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"}))}const y=r.forwardRef(f);function b({title:a,titleId:t,...s},e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":t},s),a?r.createElement("title",{id:t},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"}))}const x=r.forwardRef(b),S={title:"Elements/Pill",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","danger","warning","ghost"]}}},i={args:{label:"Housing",active:!1}},d={args:{label:"Subscription",active:!0,variant:"primary"}},l={args:{label:"Critical",active:!0,variant:"danger",icon:n.jsx(y,{})}},o={render:()=>{const[a,t]=k.useState("all"),s=["all","shopping","health","travel","food"];return n.jsx("div",{className:"flex items-center gap-2 bg-surface-panel dark:bg-surface-panel-dark p-4 rounded-xl",children:s.map(e=>n.jsx(p,{label:e,active:a===e,onClick:()=>t(e),icon:e==="all"?n.jsx(x,{}):void 0},e))})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Housing',
    active: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscription',
    active: true,
    variant: 'primary'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Critical',
    active: true,
    variant: 'danger',
    icon: <FireIcon />
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('all');
    const categories = ['all', 'shopping', 'health', 'travel', 'food'];
    return <div className="flex items-center gap-2 bg-surface-panel dark:bg-surface-panel-dark p-4 rounded-xl">
        {categories.map(cat => <Pill key={cat} label={cat} active={selected === cat} onClick={() => setSelected(cat)} icon={cat === 'all' ? <TagIcon /> : undefined} />)}
      </div>;
  }
}`,...o.parameters?.docs?.source},description:{story:"Common use case: A horizontal filter bar",...o.parameters?.docs?.description}}};const E=["Default","Active","WithIcon","FilterBar"];export{d as Active,i as Default,o as FilterBar,l as WithIcon,E as __namedExportsOrder,S as default};
