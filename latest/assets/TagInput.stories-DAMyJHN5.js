import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DhWUdF5I.js";import{g as C}from"./index-COAXpdd_.js";import{X as j}from"./x-BVc4f7vm.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DJI1T-Cn.js";const b=({label:n,placeholder:o,tags:t,suggestions:r=[],onChange:i,className:h=""})=>{const[l,E]=c.useState(""),[I,p]=c.useState(!1),[x,m]=c.useState(0),V=c.useMemo(()=>C(),[]),T=c.useRef(null),g=c.useMemo(()=>{const e=l.toLowerCase().trim();return e?r.filter(a=>a.toLowerCase().includes(e)&&!t.includes(a)).slice(0,5):[]},[l,r,t]),v=e=>{const a=e.trim().replace(/,$/,"");a&&!t.includes(a)&&i([...t,a]),E(""),p(!1)},D=e=>{i(t.filter(a=>a!==e))},A=e=>{e.key==="ArrowDown"?(e.preventDefault(),p(!0),m(a=>a<g.length-1?a+1:a)):e.key==="ArrowUp"?(e.preventDefault(),m(a=>a>0?a-1:0)):e.key==="Enter"||e.key===","?(e.preventDefault(),I&&g[x]?v(g[x]):v(l)):e.key==="Escape"?p(!1):e.key==="Backspace"&&!l&&t.length>0&&D(t.at(-1))};return c.useEffect(()=>{const e=a=>{T.current&&!T.current.contains(a.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),s.jsxs("div",{className:`flex flex-col gap-1.5 relative ${h}`,ref:T,children:[n&&s.jsx("label",{htmlFor:V,className:"text-sm font-bold text-foreground",children:n}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border bg-card focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all",children:[t.map(e=>s.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md bg-primary text-primary-foreground animate-in fade-in zoom-in duration-200",children:[e,s.jsx("button",{type:"button",onClick:()=>D(e),className:"hover:text-popover/80 transition-colors",children:s.jsx(j,{className:"h-3.5 w-3.5"})})]},e)),s.jsx("input",{id:V,type:"text",value:l,onChange:e=>{E(e.target.value),p(!0),m(0)},onFocus:()=>p(!0),onKeyDown:A,placeholder:t.length===0?o:"",autoComplete:"off",className:"flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-foreground placeholder:text-muted-foreground focus:placeholder:text-muted-foreground focus:placeholder:opacity-100 transition-opacity"})]}),I&&g.length>0&&s.jsx("ul",{className:"absolute z-50 top-full left-0 right-0 mt-1 bg-card border border-border shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200",children:g.map((e,a)=>s.jsx("li",{children:s.jsx("button",{type:"button",onClick:()=>v(e),onMouseEnter:()=>m(a),className:`w-full text-left px-4 py-2 text-sm transition-colors ${a===x?"bg-primary text-primary-foreground":"text-foreground hover:bg-background/50"}`,children:e})},e))})]})};b.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const{userEvent:u,within:k,expect:d,fn:z}=__STORYBOOK_MODULE_TEST__,L={title:"Forms/TagInput",component:b,parameters:{layout:"centered"},args:{onChange:z()}},B=n=>{const[o,t]=c.useState(n.tags||[]);return s.jsx("div",{className:"w-96",children:s.jsx(b,{...n,tags:o,onChange:r=>{t(r),n.onChange?.(r)}})})},y={args:{label:"Recipe Tags",placeholder:"Add a tag and press Enter...",tags:["Dinner","Quick"]},render:n=>s.jsx(B,{...n})},f={args:{label:"Automated Test",placeholder:"Testing...",tags:[]},render:n=>s.jsx(B,{...n}),play:async({canvasElement:n,step:o})=>{const t=k(n),r=t.getByLabelText("Automated Test");await o("Add a new tag",async()=>{await u.type(r,"Pizza{enter}");const i=await t.findByText("Pizza");d(i).toBeInTheDocument()}),await o("Add another tag via comma",async()=>{await u.type(r,"Pasta,");const i=await t.findByText("Pasta");d(i).toBeInTheDocument()}),await o("Check placeholder disappearance",async()=>{d(r).not.toHaveAttribute("placeholder","Testing...")})}},w={args:{label:"Categorize Recipe",placeholder:'Type "ve" for suggestions...',suggestions:["Vegan","Vegetarian","Veggies","Meat","Fish","Dessert"],tags:[]},render:n=>s.jsx(B,{...n}),play:async({canvasElement:n,step:o})=>{const t=k(n),r=t.getByLabelText("Categorize Recipe");await o("Type to trigger suggestions",async()=>{await u.type(r,"ve");const i=await t.findByText("Vegan");d(i).toBeInTheDocument()}),await o("Navigate suggestions with keyboard",async()=>{await u.keyboard("{ArrowDown}"),await u.keyboard("{Enter}");const i=await t.findByText("Vegetarian");d(i).toBeInTheDocument(),d(r).toHaveValue("")}),await o("Verify filtered suggestions",async()=>{await u.type(r,"ve");const h=t.queryAllByRole("button").some(l=>l.textContent==="Vegetarian");d(h).toBe(!1)})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const P=["Default","InteractionTest","WithSuggestions"];export{y as Default,f as InteractionTest,w as WithSuggestions,P as __namedExportsOrder,L as default};
