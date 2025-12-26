import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BL-KU8J_.js";import{g as C}from"./index-BTxmV0E0.js";import"./preload-helper-PPVm8Dsz.js";function j({title:n,titleId:o,...t},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":o},t),n?i.createElement("title",{id:o},n):null,i.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const z=i.forwardRef(j),v=({label:n,placeholder:o,tags:t,suggestions:r=[],onChange:c,className:w=""})=>{const[l,E]=i.useState(""),[B,p]=i.useState(!1),[h,m]=i.useState(0),I=i.useMemo(()=>C(),[]),T=i.useRef(null),g=i.useMemo(()=>{const e=l.toLowerCase().trim();return e?r.filter(a=>a.toLowerCase().includes(e)&&!t.includes(a)).slice(0,5):[]},[l,r,t]),b=e=>{const a=e.trim().replace(/,$/,"");a&&!t.includes(a)&&c([...t,a]),E(""),p(!1)},V=e=>{c(t.filter(a=>a!==e))},A=e=>{e.key==="ArrowDown"?(e.preventDefault(),p(!0),m(a=>a<g.length-1?a+1:a)):e.key==="ArrowUp"?(e.preventDefault(),m(a=>a>0?a-1:0)):e.key==="Enter"||e.key===","?(e.preventDefault(),B&&g[h]?b(g[h]):b(l)):e.key==="Escape"?p(!1):e.key==="Backspace"&&!l&&t.length>0&&V(t[t.length-1])};return i.useEffect(()=>{const e=a=>{T.current&&!T.current.contains(a.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),s.jsxs("div",{className:`flex flex-col gap-1.5 relative ${w}`,ref:T,children:[n&&s.jsx("label",{htmlFor:I,className:"text-sm font-bold text-text-primary dark:text-text-primary-dark",children:n}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all",children:[t.map(e=>s.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md bg-primary text-text-on-primary dark:bg-primary-dark dark:text-text-on-primary-dark animate-in fade-in zoom-in duration-200",children:[e,s.jsx("button",{type:"button",onClick:()=>V(e),className:"hover:text-white/80 transition-colors",children:s.jsx(z,{className:"h-3.5 w-3.5"})})]},e)),s.jsx("input",{id:I,type:"text",value:l,onChange:e=>{E(e.target.value),p(!0),m(0)},onFocus:()=>p(!0),onKeyDown:A,placeholder:t.length===0?o:"",autoComplete:"off",className:"flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-text-primary dark:text-text-primary-dark"})]}),B&&g.length>0&&s.jsx("ul",{className:"absolute z-50 top-full left-0 right-0 mt-1 bg-surface-panel dark:bg-surface-panel-dark border border-border dark:border-border-dark shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200",children:g.map((e,a)=>s.jsx("li",{children:s.jsx("button",{type:"button",onClick:()=>b(e),onMouseEnter:()=>m(a),className:`w-full text-left px-4 py-2 text-sm transition-colors ${a===h?"bg-primary text-text-on-primary dark:bg-primary-dark dark:text-text-on-primary-dark":"text-text-primary hover:bg-surface-base dark:hover:bg-surface-base-dark dark:text-text-primary-dark"}`,children:e})},e))})]})};v.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const{userEvent:u,within:D,expect:d,fn:N}=__STORYBOOK_MODULE_TEST__,_={title:"Forms/TagInput",component:v,parameters:{layout:"centered"},args:{onChange:N()}},k=n=>{const[o,t]=i.useState(n.tags||[]);return s.jsx("div",{className:"w-96",children:s.jsx(v,{...n,tags:o,onChange:r=>{t(r),n.onChange?.(r)}})})},y={args:{label:"Recipe Tags",placeholder:"Add a tag and press Enter...",tags:["Dinner","Quick"]},render:n=>s.jsx(k,{...n})},f={args:{label:"Automated Test",placeholder:"Testing...",tags:[]},render:n=>s.jsx(k,{...n}),play:async({canvasElement:n,step:o})=>{const t=D(n),r=t.getByLabelText("Automated Test");await o("Add a new tag",async()=>{await u.type(r,"Pizza{enter}");const c=await t.findByText("Pizza");d(c).toBeInTheDocument()}),await o("Add another tag via comma",async()=>{await u.type(r,"Pasta,");const c=await t.findByText("Pasta");d(c).toBeInTheDocument()}),await o("Check placeholder disappearance",async()=>{d(r).not.toHaveAttribute("placeholder","Testing...")})}},x={args:{label:"Categorize Recipe",placeholder:'Type "ve" for suggestions...',suggestions:["Vegan","Vegetarian","Veggies","Meat","Fish","Dessert"],tags:[]},render:n=>s.jsx(k,{...n}),play:async({canvasElement:n,step:o})=>{const t=D(n),r=t.getByLabelText("Categorize Recipe");await o("Type to trigger suggestions",async()=>{await u.type(r,"ve");const c=await t.findByText("Vegan");d(c).toBeInTheDocument()}),await o("Navigate suggestions with keyboard",async()=>{await u.keyboard("{ArrowDown}"),await u.keyboard("{Enter}");const c=await t.findByText("Vegetarian");d(c).toBeInTheDocument(),d(r).toHaveValue("")}),await o("Verify filtered suggestions",async()=>{await u.type(r,"ve");const w=t.queryAllByRole("button").some(l=>l.textContent==="Vegetarian");d(w).toBe(!1)})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recipe Tags',
    placeholder: 'Add a tag and press Enter...',
    tags: ['Dinner', 'Quick']
  },
  render: args => <TagInputTemplate {...args} />
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Categorize Recipe',
    placeholder: 'Type "ve" for suggestions...',
    suggestions: ['Vegan', 'Vegetarian', 'Veggies', 'Meat', 'Fish', 'Dessert'],
    tags: []
  },
  render: args => <TagInputTemplate {...args} />,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Categorize Recipe');
    await step('Type to trigger suggestions', async () => {
      await userEvent.type(input, 've');
      const suggestion = await canvas.findByText('Vegan');
      expect(suggestion).toBeInTheDocument();
    });
    await step('Navigate suggestions with keyboard', async () => {
      await userEvent.keyboard('{ArrowDown}');
      await userEvent.keyboard('{Enter}');
      const badge = await canvas.findByText('Vegetarian');
      expect(badge).toBeInTheDocument();
      expect(input).toHaveValue('');
    });
    await step('Verify filtered suggestions', async () => {
      await userEvent.type(input, 've');
      const dropdownOptions = canvas.queryAllByRole('button');
      const hasVegetarian = dropdownOptions.some(opt => opt.textContent === 'Vegetarian');
      expect(hasVegetarian).toBe(false);
    });
  }
}`,...x.parameters?.docs?.source}}};const q=["Default","InteractionTest","WithSuggestions"];export{y as Default,f as InteractionTest,x as WithSuggestions,q as __namedExportsOrder,_ as default};
