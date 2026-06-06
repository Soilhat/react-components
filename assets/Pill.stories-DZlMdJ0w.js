import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r,R as h}from"./iframe-DObK1DMn.js";import"./preload-helper-PPVm8Dsz.js";const p=({label:a,active:t=!1,onClick:n,icon:e,variant:m="primary",className:g="",disabled:d=!1})=>{const u=!!n,f=u?"button":"div",v={primary:"bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20",success:"bg-success text-success-foreground border-success shadow-lg shadow-success/20",danger:"bg-danger text-danger-foreground border-danger shadow-lg shadow-danger/20",warning:"bg-warning text-warning-foreground border-warning shadow-lg shadow-warning/20",ghost:"bg-muted text-muted-foreground border-muted hover:bg-muted/50 hover:text-muted-foreground/80"},b=u?"bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary cursor-pointer":"bg-card text-muted-foreground border-border cursor-default";return o.jsxs(f,{...u?{onClick:d?void 0:n,disabled:d}:{},className:`
        flex-none inline-flex items-center justify-center gap-1.5 
        px-4 py-1.5 rounded-full text-xs font-bold transition-all border capitalize
        ${d?"opacity-50 cursor-not-allowed":""}
        ${t?v[m]:b}
        ${g}
      `.trim(),children:[e&&o.jsx("span",{className:"h-3.5 w-3.5 shrink-0",children:e}),a.replaceAll("_"," ")]})};p.__docgenInfo={description:"",methods:[],displayName:"Pill",props:{label:{required:!0,tsType:{name:"string"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'danger' | 'warning' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function w({title:a,titleId:t,...n},e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":t},n),a?r.createElement("title",{id:t},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"}))}const y=r.forwardRef(w);function x({title:a,titleId:t,...n},e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":t},n),a?r.createElement("title",{id:t},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"}))}const k=r.forwardRef(x),R={title:"Elements/Pill",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","success","danger","warning","ghost"]}}},i={args:{label:"Housing",active:!1}},l={args:{label:"Subscription",active:!0,variant:"primary"}},c={args:{label:"Critical",active:!0,variant:"danger",icon:o.jsx(y,{})}},s={render:()=>{const[a,t]=h.useState("all"),n=["all","shopping","health","travel","food"];return o.jsx("div",{className:"flex items-center gap-2 bg-background p-4 rounded-xl",children:n.map(e=>o.jsx(p,{label:e,active:a===e,onClick:()=>t(e),icon:e==="all"?o.jsx(k,{}):void 0},e))})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Housing',
    active: false
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Subscription',
    active: true,
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Critical',
    active: true,
    variant: 'danger',
    icon: <FireIcon />
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState('all');
    const categories = ['all', 'shopping', 'health', 'travel', 'food'];
    return <div className="flex items-center gap-2 bg-background p-4 rounded-xl">
        {categories.map(cat => <Pill key={cat} label={cat} active={selected === cat} onClick={() => setSelected(cat)} icon={cat === 'all' ? <TagIcon /> : undefined} />)}
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:"Common use case: A horizontal filter bar",...s.parameters?.docs?.description}}};const T=["Default","Active","WithIcon","FilterBar"];export{l as Active,i as Default,s as FilterBar,c as WithIcon,T as __namedExportsOrder,R as default};
