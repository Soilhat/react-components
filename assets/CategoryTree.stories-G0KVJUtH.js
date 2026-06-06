import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as y}from"./iframe-DObK1DMn.js";import{S as C}from"./SwipeableRow-XoXwMtLh.js";import{B as _}from"./Button-BtK1OYc1.js";import{F as I}from"./ChevronRightIcon-DcovAXiR.js";import"./preload-helper-PPVm8Dsz.js";function f({items:r,parentId:a=null,level:t=0,renderItem:s,leftSwipeActions:d=[],rightSwipeActions:g=[]}){const[j,k]=o.useState(new Set),N=n=>{k(h=>{const l=new Set(h);return l.has(n)?l.delete(n):l.add(n),l})},x=r.filter(n=>n.parent_id===a);return x.length===0?null:e.jsx("div",{className:`
        ${t>0?"ml-2.5 pl-3 border-l border-border/60 sm:ml-6 sm:pl-4 transition-all":"space-y-1.5 sm:space-y-2"}
      `,children:x.map(n=>{const h=r.some(i=>i.parent_id===n.id),l=!j.has(n.id),v=e.jsx("div",{className:"w-full min-h-11 sm:min-h-12 flex items-center",children:s(n,t,{isExpanded:l,toggle:()=>N(n.id),hasChildren:h})});return e.jsxs(y.Fragment,{children:[d.length>0||g.length>0?e.jsx(C,{leftActions:d.map(i=>({...i,onClick:()=>i.onClick(n)})),rightActions:g.map(i=>({...i,onClick:()=>i.onClick(n)})),children:v}):v,l&&e.jsx(f,{items:r,parentId:n.id,level:t+1,renderItem:s,leftSwipeActions:d,rightSwipeActions:g})]},n.id)})})}f.__docgenInfo={description:"",methods:[],displayName:"CategoryTree",props:{parentId:{defaultValue:{value:"null",computed:!1},required:!1},level:{defaultValue:{value:"0",computed:!1},required:!1},leftSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1},rightSwipeActions:{defaultValue:{value:"[]",computed:!1},required:!1}}};function R({title:r,titleId:a,...t},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},t),r?o.createElement("title",{id:a},r):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"}))}const E=o.forwardRef(R);function L({title:r,titleId:a,...t},s){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":a},t),r?o.createElement("title",{id:a},r):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"}))}const F=o.forwardRef(L),O={title:"Layout/CategoryTree",component:f,parameters:{layout:"centered"},tags:["autodocs"]},b=[{id:"1",name:"Housing",parent_id:null,color:"#f87171"},{id:"2",name:"Rent",parent_id:"1",color:"#f87171"},{id:"3",name:"Utilities",parent_id:"1",color:"#f87171"},{id:"4",name:"Internet",parent_id:"3",color:"#f87171"},{id:"5",name:"Food",parent_id:null,color:"#fbbf24"},{id:"6",name:"Groceries",parent_id:"5",color:"#fbbf24"},{id:"7",name:"Dining Out",parent_id:"5",color:"#fbbf24"}],w=(r,a)=>e.jsxs("div",{className:"flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors cursor-pointer",children:[e.jsx("div",{className:"h-3 w-3 rounded-full",style:{backgroundColor:r.color}}),e.jsx("span",{className:`${a===0?"font-bold":"text-muted-foreground"} text-sm`,children:r.name})]}),c={args:{items:b,renderItem:w},render:r=>e.jsx(f,{...r})},m={args:{items:[{id:"1",name:"Root Level",parent_id:null,color:"#3b82f6"},{id:"2",name:"Level 1",parent_id:"1",color:"#3b82f6"},{id:"3",name:"Level 2",parent_id:"2",color:"#3b82f6"},{id:"4",name:"Level 3",parent_id:"3",color:"#3b82f6"}],renderItem:w}},u={args:{items:b,renderItem:(r,a)=>e.jsxs("div",{className:"flex items-center justify-between group p-2 hover:bg-background rounded-md",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a>0&&e.jsx("span",{className:"text-muted-foreground",children:"↳"}),r.name]}),e.jsx(_,{variant:"ghost",children:"Edit"})]})}},p={args:{items:b,renderItem:(r,a,{isExpanded:t,toggle:s,hasChildren:d})=>e.jsxs("div",{onClick:d?s:void 0,className:`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          ${a===0?"bg-card font-bold":"hover:bg-background"}
        `,children:[d&&e.jsx(I,{className:`h-4 w-4 transition-transform duration-200 ${t?"rotate-90":""}`}),d?t?e.jsx(E,{className:"h-4 w-4 text-primary"}):e.jsx(F,{className:"h-4 w-4 text-primary"}):e.jsx("div",{className:"h-4 w-4 ml-1 border-b-2 border-l-2 border-border rounded-bl-sm"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:r.name})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    }) => <div onClick={hasChildren ? toggle : undefined} className={\`
          flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer
          \${level === 0 ? 'bg-card font-bold' : 'hover:bg-background'}
        \`}>
        {/* Chevron Icon */}
        {hasChildren && <ChevronRightIcon className={\`h-4 w-4 transition-transform duration-200 \${isExpanded ? 'rotate-90' : ''}\`} />}

        {/* Folder Icon */}
        {hasChildren ? isExpanded ? <FolderOpenIcon className="h-4 w-4 text-primary" /> : <FolderIcon className="h-4 w-4 text-primary" /> : <div className="h-4 w-4 ml-1 border-b-2 border-l-2 border-border rounded-bl-sm" />}

        <span className="text-sm text-muted-foreground">{item.name}</span>
      </div>
  }
}`,...p.parameters?.docs?.source}}};const q=["Default","DeeplyNested","Interactive","Expandable"];export{m as DeeplyNested,c as Default,p as Expandable,u as Interactive,q as __namedExportsOrder,O as default};
