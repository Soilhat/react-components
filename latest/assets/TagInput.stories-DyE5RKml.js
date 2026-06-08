import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-CbiNbsDA.js";import{g as C}from"./index-Ce9F33Qo.js";import"./preload-helper-Bni5rfja.js";function j({title:n,titleId:o,...t},s){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":o},t),n?i.createElement("title",{id:o},n):null,i.createElement("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"}))}const z=i.forwardRef(j),b=({label:n,placeholder:o,tags:t,suggestions:s=[],onChange:c,className:h=""})=>{const[l,B]=i.useState(""),[I,p]=i.useState(!1),[x,m]=i.useState(0),V=i.useMemo(()=>C(),[]),T=i.useRef(null),g=i.useMemo(()=>{const e=l.toLowerCase().trim();return e?s.filter(a=>a.toLowerCase().includes(e)&&!t.includes(a)).slice(0,5):[]},[l,s,t]),v=e=>{const a=e.trim().replace(/,$/,"");a&&!t.includes(a)&&c([...t,a]),B(""),p(!1)},D=e=>{c(t.filter(a=>a!==e))},A=e=>{e.key==="ArrowDown"?(e.preventDefault(),p(!0),m(a=>a<g.length-1?a+1:a)):e.key==="ArrowUp"?(e.preventDefault(),m(a=>a>0?a-1:0)):e.key==="Enter"||e.key===","?(e.preventDefault(),I&&g[x]?v(g[x]):v(l)):e.key==="Escape"?p(!1):e.key==="Backspace"&&!l&&t.length>0&&D(t[t.length-1])};return i.useEffect(()=>{const e=a=>{T.current&&!T.current.contains(a.target)&&p(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),r.jsxs("div",{className:`flex flex-col gap-1.5 relative ${h}`,ref:T,children:[n&&r.jsx("label",{htmlFor:V,className:"text-sm font-bold text-foreground",children:n}),r.jsxs("div",{className:"flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border bg-card focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all",children:[t.map(e=>r.jsxs("span",{className:"flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md bg-primary text-primary-foreground animate-in fade-in zoom-in duration-200",children:[e,r.jsx("button",{type:"button",onClick:()=>D(e),className:"hover:text-popover/80 transition-colors",children:r.jsx(z,{className:"h-3.5 w-3.5"})})]},e)),r.jsx("input",{id:V,type:"text",value:l,onChange:e=>{B(e.target.value),p(!0),m(0)},onFocus:()=>p(!0),onKeyDown:A,placeholder:t.length===0?o:"",autoComplete:"off",className:"flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-foreground placeholder:text-muted-foreground focus:placeholder:text-muted-foreground focus:placeholder:opacity-100 transition-opacity"})]}),I&&g.length>0&&r.jsx("ul",{className:"absolute z-50 top-full left-0 right-0 mt-1 bg-card border border-border shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200",children:g.map((e,a)=>r.jsx("li",{children:r.jsx("button",{type:"button",onClick:()=>v(e),onMouseEnter:()=>m(a),className:`w-full text-left px-4 py-2 text-sm transition-colors ${a===x?"bg-primary text-primary-foreground":"text-foreground hover:bg-background/50"}`,children:e})},e))})]})};b.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const{userEvent:u,within:k,expect:d,fn:N}=__STORYBOOK_MODULE_TEST__,_={title:"Forms/TagInput",component:b,parameters:{layout:"centered"},args:{onChange:N()}},E=n=>{const[o,t]=i.useState(n.tags||[]);return r.jsx("div",{className:"w-96",children:r.jsx(b,{...n,tags:o,onChange:s=>{t(s),n.onChange?.(s)}})})},f={args:{label:"Recipe Tags",placeholder:"Add a tag and press Enter...",tags:["Dinner","Quick"]},render:n=>r.jsx(E,{...n})},y={args:{label:"Automated Test",placeholder:"Testing...",tags:[]},render:n=>r.jsx(E,{...n}),play:async({canvasElement:n,step:o})=>{const t=k(n),s=t.getByLabelText("Automated Test");await o("Add a new tag",async()=>{await u.type(s,"Pizza{enter}");const c=await t.findByText("Pizza");d(c).toBeInTheDocument()}),await o("Add another tag via comma",async()=>{await u.type(s,"Pasta,");const c=await t.findByText("Pasta");d(c).toBeInTheDocument()}),await o("Check placeholder disappearance",async()=>{d(s).not.toHaveAttribute("placeholder","Testing...")})}},w={args:{label:"Categorize Recipe",placeholder:'Type "ve" for suggestions...',suggestions:["Vegan","Vegetarian","Veggies","Meat","Fish","Dessert"],tags:[]},render:n=>r.jsx(E,{...n}),play:async({canvasElement:n,step:o})=>{const t=k(n),s=t.getByLabelText("Categorize Recipe");await o("Type to trigger suggestions",async()=>{await u.type(s,"ve");const c=await t.findByText("Vegan");d(c).toBeInTheDocument()}),await o("Navigate suggestions with keyboard",async()=>{await u.keyboard("{ArrowDown}"),await u.keyboard("{Enter}");const c=await t.findByText("Vegetarian");d(c).toBeInTheDocument(),d(s).toHaveValue("")}),await o("Verify filtered suggestions",async()=>{await u.type(s,"ve");const h=t.queryAllByRole("button").some(l=>l.textContent==="Vegetarian");d(h).toBe(!1)})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recipe Tags',
    placeholder: 'Add a tag and press Enter...',
    tags: ['Dinner', 'Quick']
  },
  render: args => <TagInputTemplate {...args} />
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const q=["Default","InteractionTest","WithSuggestions"];export{f as Default,y as InteractionTest,w as WithSuggestions,q as __namedExportsOrder,_ as default};
