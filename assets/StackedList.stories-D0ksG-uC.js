import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o,R as m}from"./iframe-CK3y_YTs.js";import{C as r}from"./Card-BdVakoY0.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-XkaBiMmO.js";import"./index-CLhN-sY5.js";function p({title:t,titleId:s,...n},l){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:l,"aria-labelledby":s},n),t?o.createElement("title",{id:s},t):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))}const u=o.forwardRef(p),a=({children:t,onEmptyClick:s,emptyMessage:n="Add a new item",gridCols:l})=>{if(!t||m.Children.count(t)===0)return e.jsx("div",{className:"px-4 py-12",children:e.jsx("div",{className:"mx-auto max-w-lg",children:e.jsxs("button",{type:"button",onClick:s,className:`
              relative block w-full rounded-xl p-12 text-center transition-all duration-200
              border-2 border-dashed border-border dark:border-border-dark
              hover:border-primary dark:hover:border-primary-dark
              hover:bg-surface-panel/50 dark:hover:bg-surface-panel-dark/50
              focus:outline-none focus:ring-2 focus:ring-state-focus focus:ring-offset-2
              group
            `,children:[e.jsx(u,{className:"mx-auto h-12 w-12 text-text-secondary group-hover:text-primary dark:group-hover:text-primary-dark transition-colors"}),e.jsx("span",{className:"mt-4 block text-sm font-semibold text-text-primary dark:text-text-primary-dark",children:n})]})})});const h=m.Children.toArray(t);return e.jsx("ul",{className:`
      list-none gap-6 grid 
      ${l||"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"}
    `,children:h.map((c,x)=>e.jsx("li",{className:"flex flex-col h-full",children:c},c?.key||x))})};a.__docgenInfo={description:"",methods:[],displayName:"StackedList",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onEmptyClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Add a new item'",computed:!1}},gridCols:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Lists/StackedList",component:a,parameters:{layout:"fullscreen"}},d={render:()=>e.jsxs(a,{children:[e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 1"}),e.jsx("div",{children:"This is the first item."}),e.jsx(r.Footer,{children:"Card.Footer 1"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 2"}),e.jsx("div",{children:"This is the second item."}),e.jsx(r.Footer,{children:"Card.Footer 2"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 3"}),e.jsx("div",{children:"This is the third item."}),e.jsx(r.Footer,{children:"Card.Footer 3"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 4"}),e.jsx("div",{children:"This is the forth item."}),e.jsx(r.Footer,{children:"Card.Footer 4"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 5"}),e.jsx("div",{children:"This is the fifth item."}),e.jsx(r.Footer,{children:"Card.Footer 5"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 6"}),e.jsx("div",{children:"This is the sixth item."}),e.jsx(r.Footer,{children:"Card.Footer 6"})]})]})},i={render:()=>e.jsx(a,{})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <StackedList>
      <Card>
        <Card.Header title="Item 1" />
        <div>This is the first item.</div>
        <Card.Footer>Card.Footer 1</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 2" />
        <div>This is the second item.</div>
        <Card.Footer>Card.Footer 2</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 3" />
        <div>This is the third item.</div>
        <Card.Footer>Card.Footer 3</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 4" />
        <div>This is the forth item.</div>
        <Card.Footer>Card.Footer 4</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 5" />
        <div>This is the fifth item.</div>
        <Card.Footer>Card.Footer 5</Card.Footer>
      </Card>
      <Card>
        <Card.Header title="Item 6" />
        <div>This is the sixth item.</div>
        <Card.Footer>Card.Footer 6</Card.Footer>
      </Card>
    </StackedList>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <StackedList></StackedList>
}`,...i.parameters?.docs?.source}}};const y=["Default","Empty"];export{d as Default,i as Empty,y as __namedExportsOrder,k as default};
