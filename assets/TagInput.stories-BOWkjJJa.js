import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-Bmen8Hma.js";import{g as b}from"./index-jE1CSfG0.js";import"./preload-helper-PPVm8Dsz.js";function k({title:t,titleId:s,...e},n){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},e),t?o.createElement("title",{id:s},t):null,o.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const E=o.forwardRef(k),u=({label:t,placeholder:s,tags:e,onChange:n,className:i=""})=>{const[p,g]=o.useState(""),x=o.useMemo(()=>b(),[]),y=a=>{const c=a.trim().replace(/,$/,"");c&&!e.includes(c)&&n([...e,c]),g("")},h=a=>{n(e.filter(c=>c!==a))},w=a=>{a.key==="Enter"||a.key===","?(a.preventDefault(),y(p)):a.key==="Backspace"&&!p&&e.length>0&&h(e[e.length-1])},v=a=>{y(a.target.value)};return r.jsxs("div",{className:`flex flex-col gap-1.5 ${i}`,children:[t&&r.jsx("label",{className:"text-sm font-bold text-text-primary dark:text-text-primary-dark",htmlFor:x,children:t}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all",children:[e.map(a=>r.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 animate-in fade-in zoom-in duration-200",children:[a,r.jsx("button",{type:"button",onClick:()=>h(a),className:"hover:text-primary-hover transition-colors",children:r.jsx(E,{className:"h-3 w-3"})})]},a)),r.jsx("input",{type:"text",id:x,value:p,onChange:a=>g(a.target.value),onKeyDown:w,onBlur:v,placeholder:e.length===0?s:"",className:"flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50"})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const{userEvent:T,within:I,expect:m,fn:B}=__STORYBOOK_MODULE_TEST__,_={title:"Forms/TagInput",component:u,parameters:{layout:"centered"},args:{onChange:B()}},f=t=>{const[s,e]=o.useState(t.tags||[]);return r.jsx("div",{className:"w-96",children:r.jsx(u,{...t,tags:s,onChange:n=>{e(n),t.onChange?.(n)}})})},l={args:{label:"Recipe Tags",placeholder:"Add a tag and press Enter...",tags:["Dinner","Quick"]},render:t=>r.jsx(f,{...t})},d={args:{label:"Automated Test",placeholder:"Testing...",tags:[]},render:t=>r.jsx(f,{...t}),play:async({canvasElement:t,step:s})=>{const e=I(t),n=e.getByLabelText("Automated Test");await s("Add a new tag",async()=>{await T.type(n,"Pizza{enter}");const i=await e.findByText("Pizza");m(i).toBeInTheDocument()}),await s("Add another tag via comma",async()=>{await T.type(n,"Pasta,");const i=await e.findByText("Pasta");m(i).toBeInTheDocument()}),await s("Check placeholder disappearance",async()=>{m(n).not.toHaveAttribute("placeholder","Testing...")})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recipe Tags',
    placeholder: 'Add a tag and press Enter...',
    tags: ['Dinner', 'Quick']
  },
  render: args => <TagInputTemplate {...args} />
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Automated Test',
    placeholder: 'Testing...',
    tags: []
  },
  render: args => <TagInputTemplate {...args} />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Automated Test');
    await step('Add a new tag', async () => {
      await userEvent.type(input, 'Pizza{enter}');
      const newTag = await canvas.findByText('Pizza');
      expect(newTag).toBeInTheDocument();
    });
    await step('Add another tag via comma', async () => {
      await userEvent.type(input, 'Pasta,');
      const pastaTag = await canvas.findByText('Pasta');
      expect(pastaTag).toBeInTheDocument();
    });
    await step('Check placeholder disappearance', async () => {
      expect(input).not.toHaveAttribute('placeholder', 'Testing...');
    });
  }
}`,...d.parameters?.docs?.source}}};const z=["Default","InteractionTest"];export{l as Default,d as InteractionTest,z as __namedExportsOrder,_ as default};
