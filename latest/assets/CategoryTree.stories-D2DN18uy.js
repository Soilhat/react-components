import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as s,R as C}from"./iframe-CoFqp-Hz.js";import{S as N}from"./SwipeableRow-FWzaVtnr.js";import{F as _}from"./ChevronRightIcon-DMSWlU3_.js";import{B as I}from"./Button-Bt03qQjO.js";import"./preload-helper-Bni5rfja.js";function f({items:e,parentId:n=null,level:a=0,renderItem:o,leftSwipeActions:d=[],rightSwipeActions:g=[]}){const[j,k]=s.useState(new Set),y=t=>{k(h=>{const l=new Set(h);return l.has(t)?l.delete(t):l.add(t),l})},b=e.filter(t=>t.parent_id===n);return b.length===0?null:r.jsx("div",{className:`
        ${a>0?"ml-2.5 pl-3 border-l border-border/60 sm:ml-6 sm:pl-4 transition-all":"space-y-1.5 sm:space-y-2"}
      `,children:b.map(t=>{const h=e.some(i=>i.parent_id===t.id),l=!j.has(t.id),v=r.jsx("div",{className:"w-full min-h-11 sm:min-h-12 flex items-center",children:o(t,a,{isExpanded:l,toggle:()=>y(t.id),hasChildren:h})});return r.jsxs(C.Fragment,{children:[d.length>0||g.length>0?r.jsx(N,{leftActions:d.map(i=>({...i,onClick:()=>i.onClick(t)})),rightActions:g.map(i=>({...i,onClick:()=>i.onClick(t)})),children:v}):v,l&&r.jsx(f,{items:e,parentId:t.id,level:a+1,renderItem:o,leftSwipeActions:d,rightSwipeActions:g})]},t.id)})})}f.__docgenInfo={description:"",methods:[],displayName:"CategoryTree",props:{parentId:{defaultValue:{value:"null",computed:!1},required:!1},level:{defaultValue:{value:"0",computed:!1},required:!1},leftSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1},rightSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1}}};function R({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"}))}const E=s.forwardRef(R);function L({title:e,titleId:n,...a},o){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":n},a),e?s.createElement("title",{id:n},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"}))}const F=s.forwardRef(L),q={title:"Layout/CategoryTree",component:f,parameters:{layout:"centered"},tags:["autodocs"]},x=[{id:"1",name:"Housing",parent_id:null,color:"#f87171"},{id:"2",name:"Rent",parent_id:"1",color:"#f87171"},{id:"3",name:"Utilities",parent_id:"1",color:"#f87171"},{id:"4",name:"Internet",parent_id:"3",color:"#f87171"},{id:"5",name:"Food",parent_id:null,color:"#fbbf24"},{id:"6",name:"Groceries",parent_id:"5",color:"#fbbf24"},{id:"7",name:"Dining Out",parent_id:"5",color:"#fbbf24"}],w=(e,n)=>r.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors cursor-pointer",children:[r.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:e.color}}),r.jsx("span",{className:`${n===0?"font-bold":"text-muted-foreground"} text-sm`,children:e.name})]}),c={args:{items:x,renderItem:w},render:e=>r.jsx(f,{...e})},m={args:{items:[{id:"1",name:"Root Level",parent_id:null,color:"#3b82f6"},{id:"2",name:"Level 1",parent_id:"1",color:"#3b82f6"},{id:"3",name:"Level 2",parent_id:"2",color:"#3b82f6"},{id:"4",name:"Level 3",parent_id:"3",color:"#3b82f6"}],renderItem:w}},u={args:{items:x,renderItem:(e,n)=>r.jsxs("div",{className:"flex items-center justify-between group p-2 hover:bg-background rounded-md",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[n>0&&r.jsx("span",{className:"text-muted-foreground",children:"↳"}),e.name]}),r.jsx(I,{variant:"ghost",children:"Edit"})]})}},D=({isExpanded:e,hasChildren:n})=>n?e?r.jsx(E,{className:"h-4 w-4 text-primary"}):r.jsx(F,{className:"h-4 w-4 text-primary"}):r.jsx("div",{className:"h-4 w-4 ml-1 border-b-2 border-l-2 border-border rounded-bl-sm"}),p={args:{items:x,renderItem:(e,n,{isExpanded:a,toggle:o,hasChildren:d})=>r.jsxs("button",{onClick:d?o:void 0,className:`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          ${n===0?"bg-card font-bold":"hover:bg-background"}
        `,onKeyDown:o,children:[d&&r.jsx(_,{className:`h-4 w-4 transition-transform duration-200 ${a?"rotate-90":""}`}),r.jsx(D,{isExpanded:a,hasChildren:d}),r.jsx("span",{className:"text-sm text-muted-foreground",children:e.name})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockCategories,
    renderItem: defaultRender
  },
  render: args => <CategoryTree {...args} />
}`,...c.parameters?.docs?.source},description:{story:"Default view showing a standard financial category hierarchy.",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:"Demonstrates deep nesting to test the recursive indentation and border-left lines.",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:"Visualizing how it looks with custom interactive elements (like edit buttons).",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        {hasChildren && <ChevronRightIcon className={\`h-4 w-4 transition-transform duration-200 \${isExpanded ? 'rotate-90' : ''}\`} />}

        {/* Folder Icon */}
        <FolderIconRender isExpanded={isExpanded} hasChildren={hasChildren} />

        <span className="text-sm text-muted-foreground">{item.name}</span>
      </button>
  }
}`,...p.parameters?.docs?.source}}};const H=["Default","DeeplyNested","Interactive","Expandable"];export{m as DeeplyNested,c as Default,p as Expandable,u as Interactive,H as __namedExportsOrder,q as default};
