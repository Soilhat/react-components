import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C,R as k}from"./iframe-DhWUdF5I.js";import{S as I}from"./SwipeableRow-CDwWF6bt.js";import{C as w}from"./chevron-right-DiVDwwYs.js";import{B as R}from"./Button-DPC5yEI0.js";import{c as v}from"./createLucideIcon-DJI1T-Cn.js";import"./preload-helper-Bni5rfja.js";const E=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],L=v("folder-open",E);const D=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],F=v("folder",D);function u({items:r,parentId:t=null,level:d=0,renderItem:l,leftSwipeActions:a=[],rightSwipeActions:f=[]}){const[N,_]=C.useState(new Set),j=n=>{_(g=>{const o=new Set(g);return o.has(n)?o.delete(n):o.add(n),o})},x=r.filter(n=>n.parent_id===t);return x.length===0?null:e.jsx("div",{className:`
        ${d>0?"ml-2.5 pl-3 border-l border-border/60 sm:ml-6 sm:pl-4 transition-all":"space-y-1.5 sm:space-y-2"}
      `,children:x.map(n=>{const g=r.some(s=>s.parent_id===n.id),o=!N.has(n.id),b=e.jsx("div",{className:"w-full min-h-11 sm:min-h-12 flex items-center",children:l(n,d,{isExpanded:o,toggle:()=>j(n.id),hasChildren:g})});return e.jsxs(k.Fragment,{children:[a.length>0||f.length>0?e.jsx(I,{leftActions:a.map(s=>({...s,onClick:()=>s.onClick(n)})),rightActions:f.map(s=>({...s,onClick:()=>s.onClick(n)})),children:b}):b,o&&e.jsx(u,{items:r,parentId:n.id,level:d+1,renderItem:l,leftSwipeActions:a,rightSwipeActions:f})]},n.id)})})}u.__docgenInfo={description:"",methods:[],displayName:"CategoryTree",props:{parentId:{defaultValue:{value:"null",computed:!1},required:!1},level:{defaultValue:{value:"0",computed:!1},required:!1},leftSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1},rightSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1}}};const A={title:"Layout/CategoryTree",component:u,parameters:{layout:"centered"},tags:["autodocs"]},h=[{id:"1",name:"Housing",parent_id:null,color:"#f87171"},{id:"2",name:"Rent",parent_id:"1",color:"#f87171"},{id:"3",name:"Utilities",parent_id:"1",color:"#f87171"},{id:"4",name:"Internet",parent_id:"3",color:"#f87171"},{id:"5",name:"Food",parent_id:null,color:"#fbbf24"},{id:"6",name:"Groceries",parent_id:"5",color:"#fbbf24"},{id:"7",name:"Dining Out",parent_id:"5",color:"#fbbf24"}],y=(r,t)=>e.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors cursor-pointer",children:[e.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:r.color}}),e.jsx("span",{className:`${t===0?"font-bold":"text-muted-foreground"} text-sm`,children:r.name})]}),i={args:{items:h,renderItem:y},render:r=>e.jsx(u,{...r})},c={args:{items:[{id:"1",name:"Root Level",parent_id:null,color:"#3b82f6"},{id:"2",name:"Level 1",parent_id:"1",color:"#3b82f6"},{id:"3",name:"Level 2",parent_id:"2",color:"#3b82f6"},{id:"4",name:"Level 3",parent_id:"3",color:"#3b82f6"}],renderItem:y}},m={args:{items:h,renderItem:(r,t)=>e.jsxs("div",{className:"flex items-center justify-between group p-2 hover:bg-background rounded-md",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[t>0&&e.jsx("span",{className:"text-muted-foreground",children:"↳"}),r.name]}),e.jsx(R,{variant:"ghost",children:"Edit"})]})}},S=({isExpanded:r,hasChildren:t})=>t?r?e.jsx(L,{className:"h-4 w-4 text-primary"}):e.jsx(F,{className:"h-4 w-4 text-primary"}):e.jsx("div",{className:"h-4 w-4 ml-1 border-b-2 border-l-2 border-border rounded-bl-sm"}),p={args:{items:h,renderItem:(r,t,{isExpanded:d,toggle:l,hasChildren:a})=>e.jsxs("button",{onClick:a?l:void 0,className:`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          ${t===0?"bg-card font-bold":"hover:bg-background"}
        `,onKeyDown:l,children:[a&&e.jsx(w,{className:`h-4 w-4 transition-transform duration-200 ${d?"rotate-90":""}`}),e.jsx(S,{isExpanded:d,hasChildren:a}),e.jsx("span",{className:"text-sm text-muted-foreground",children:r.name})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: defaultRender
  },
  render: args => <CategoryTree {...args} />
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
    renderItem: (item, level) => <div className="flex items-center justify-between group p-2 hover:bg-background rounded-md">
        <div className="flex items-center gap-2 text-sm font-medium">
          {level > 0 && <span className="text-muted-foreground">↳</span>}
          {item.name}
        </div>
        <Button variant="ghost">Edit</Button>
      </div>
  }
}`,...m.parameters?.docs?.source},description:{story:"Visualizing how it looks with custom interactive elements (like edit buttons).",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: (item, level, {
      isExpanded,
      toggle,
      hasChildren
    }) => <button onClick={hasChildren ? toggle : undefined} className={\`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          \${level === 0 ? 'bg-card font-bold' : 'hover:bg-background'}
        \`} onKeyDown={toggle}>
        {/* Chevron Icon */}
        {hasChildren && <ChevronRight className={\`h-4 w-4 transition-transform duration-200 \${isExpanded ? 'rotate-90' : ''}\`} />}

        {/* Folder Icon */}
        <FolderIconRender isExpanded={isExpanded} hasChildren={hasChildren} />

        <span className="text-sm text-muted-foreground">{item.name}</span>
      </button>
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","DeeplyNested","Interactive","Expandable"];export{c as DeeplyNested,i as Default,p as Expandable,m as Interactive,K as __namedExportsOrder,A as default};
