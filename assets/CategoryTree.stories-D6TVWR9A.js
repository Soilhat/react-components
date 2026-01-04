import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as t,R as w}from"./iframe-C6EgHmsB.js";import{B as y}from"./Button-CJ5sytPp.js";import"./preload-helper-PPVm8Dsz.js";function u({items:e,parentId:a=null,level:n=0,renderItem:o}){const[l,h]=t.useState(new Set),k=s=>{h(f=>{const d=new Set(f);return d.has(s)?d.delete(s):d.add(s),d})},b=e.filter(s=>s.parent_id===a);return b.length===0?null:r.jsx("div",{className:n>0?"ml-6 border-l border-border dark:border-border-dark pl-4":"space-y-2",children:b.map(s=>{const f=e.some(v=>v.parent_id===s.id),d=!l.has(s.id);return r.jsxs(w.Fragment,{children:[o(s,n,{isExpanded:d,toggle:()=>k(s.id),hasChildren:f}),d&&r.jsx(u,{items:e,parentId:s.id,level:n+1,renderItem:o})]},s.id)})})}u.__docgenInfo={description:"",methods:[],displayName:"CategoryTree",props:{parentId:{defaultValue:{value:"null",computed:!1},required:!1},level:{defaultValue:{value:"0",computed:!1},required:!1}}};function j({title:e,titleId:a,...n},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},n),e?t.createElement("title",{id:a},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"}))}const N=t.forwardRef(j);function _({title:e,titleId:a,...n},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},n),e?t.createElement("title",{id:a},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"}))}const C=t.forwardRef(_);function I({title:e,titleId:a,...n},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},n),e?t.createElement("title",{id:a},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"}))}const E=t.forwardRef(I),D={title:"Layout/CategoryTree",component:u,parameters:{layout:"centered"},tags:["autodocs"]},g=[{id:"1",name:"Housing",parent_id:null,color:"#f87171"},{id:"2",name:"Rent",parent_id:"1",color:"#f87171"},{id:"3",name:"Utilities",parent_id:"1",color:"#f87171"},{id:"4",name:"Internet",parent_id:"3",color:"#f87171"},{id:"5",name:"Food",parent_id:null,color:"#fbbf24"},{id:"6",name:"Groceries",parent_id:"5",color:"#fbbf24"},{id:"7",name:"Dining Out",parent_id:"5",color:"#fbbf24"}],x=(e,a)=>r.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-surface-base dark:hover:bg-surface-base-dark transition-colors cursor-pointer",children:[r.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:e.color}}),r.jsx("span",{className:`${a===0?"font-bold":"text-text-secondary dark:text-text-secondary-dark"} text-sm`,children:e.name})]}),i={args:{items:g,renderItem:x},render:e=>r.jsx("div",{className:"w-100 border p-4 rounded-xl bg-surface-panel dark:bg-surface-panel-dark shadow-sm",children:r.jsx(u,{...e})})},c={args:{items:[{id:"1",name:"Root Level",parent_id:null,color:"#3b82f6"},{id:"2",name:"Level 1",parent_id:"1",color:"#3b82f6"},{id:"3",name:"Level 2",parent_id:"2",color:"#3b82f6"},{id:"4",name:"Level 3",parent_id:"3",color:"#3b82f6"}],renderItem:x}},m={args:{items:g,renderItem:(e,a)=>r.jsxs("div",{className:"flex items-center justify-between group p-2 hover:bg-surface-panel dark:hover:bg-surface-panel-dark rounded-md",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a>0&&r.jsx("span",{className:"text-text-secondary dark:text-text-secondary-dark",children:"↳"}),e.name]}),r.jsx(y,{color_name:"light",children:"Edit"})]})}},p={args:{items:g,renderItem:(e,a,{isExpanded:n,toggle:o,hasChildren:l})=>r.jsxs("div",{onClick:l?o:void 0,className:`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          ${a===0?"bg-surface-panel dark:bg-surface-panel-dark font-bold":"hover:bg-surface-base dark:hover:bg-surface-base-dark"}
        `,children:[l&&r.jsx(N,{className:`h-4 w-4 transition-transform duration-200 ${n?"rotate-90":""}`}),l?n?r.jsx(C,{className:"h-4 w-4 text-primary dark:text-primary-dark"}):r.jsx(E,{className:"h-4 w-4 text-primary dark:text-primary-dark"}):r.jsx("div",{className:"h-4 w-4 ml-1 border-b-2 border-l-2 border-border dark:border-border-dark rounded-bl-sm"}),r.jsx("span",{className:"text-sm text-text-secondary dark:text-text-secondary-dark",children:e.name})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: defaultRender
  },
  render: args => <div className="w-100 border p-4 rounded-xl bg-surface-panel dark:bg-surface-panel-dark shadow-sm">
      <CategoryTree {...args} />
    </div>
}`,...i.parameters?.docs?.source},description:{story:"Default view showing a standard financial category hierarchy.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'Root Level',
      parent_id: null,
      color: '#3b82f6'
    }, {
      id: '2',
      name: 'Level 1',
      parent_id: '1',
      color: '#3b82f6'
    }, {
      id: '3',
      name: 'Level 2',
      parent_id: '2',
      color: '#3b82f6'
    }, {
      id: '4',
      name: 'Level 3',
      parent_id: '3',
      color: '#3b82f6'
    }],
    renderItem: defaultRender
  }
}`,...c.parameters?.docs?.source},description:{story:"Demonstrates deep nesting to test the recursive indentation and border-left lines.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: (item, level) => <div className="flex items-center justify-between group p-2 hover:bg-surface-panel dark:hover:bg-surface-panel-dark rounded-md">
        <div className="flex items-center gap-2 text-sm font-medium">
          {level > 0 && <span className="text-text-secondary dark:text-text-secondary-dark">↳</span>}
          {item.name}
        </div>
        <Button color_name="light">Edit</Button>
      </div>
  }
}`,...m.parameters?.docs?.source},description:{story:"Visualizing how it looks with custom interactive elements (like edit buttons).",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: (item, level, {
      isExpanded,
      toggle,
      hasChildren
    }) => <div onClick={hasChildren ? toggle : undefined} className={\`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          \${level === 0 ? 'bg-surface-panel dark:bg-surface-panel-dark font-bold' : 'hover:bg-surface-base dark:hover:bg-surface-base-dark'}
        \`}>
        {/* Chevron Icon */}
        {hasChildren && <ChevronRightIcon className={\`h-4 w-4 transition-transform duration-200 \${isExpanded ? 'rotate-90' : ''}\`} />}

        {/* Folder Icon */}
        {hasChildren ? isExpanded ? <FolderOpenIcon className="h-4 w-4 text-primary dark:text-primary-dark" /> : <FolderIcon className="h-4 w-4 text-primary dark:text-primary-dark" /> : <div className="h-4 w-4 ml-1 border-b-2 border-l-2 border-border dark:border-border-dark rounded-bl-sm" />}

        <span className="text-sm text-text-secondary dark:text-text-secondary-dark">{item.name}</span>
      </div>
  }
}`,...p.parameters?.docs?.source}}};const O=["Default","DeeplyNested","Interactive","Expandable"];export{c as DeeplyNested,i as Default,p as Expandable,m as Interactive,O as __namedExportsOrder,D as default};
