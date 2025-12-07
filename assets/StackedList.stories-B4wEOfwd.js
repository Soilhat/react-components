import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-zLDVJhYU.js";import{C as r}from"./Card-DIn0jlbj.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-Cae_zCKo.js";import"./index-CvglTX43.js";const i=({children:s,onEmptyClick:a,emptyMessage:n})=>{if(!s)return e.jsx("div",{className:"px-4 py-12 ",children:e.jsx("div",{className:"mx-auto max-w-lg",children:e.jsx("button",{onClick:a,className:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 dark:text-white p-12 text-center cursor-pointer",children:n??"Add an item"})})});const c=l.Children.toArray(s);return e.jsx("ul",{className:"list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6",children:c.map(o=>e.jsx("li",{className:"py-4",children:o},o?.key??void 0))})};i.__docgenInfo={description:"",methods:[],displayName:"StackedList",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onEmptyClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},emptyMessage:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Lists/StackedList",component:i,parameters:{layout:"fullscreen"}},t={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 1"}),e.jsx("div",{children:"This is the first item."}),e.jsx(r.Footer,{children:"Card.Footer 1"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 2"}),e.jsx("div",{children:"This is the second item."}),e.jsx(r.Footer,{children:"Card.Footer 2"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 3"}),e.jsx("div",{children:"This is the third item."}),e.jsx(r.Footer,{children:"Card.Footer 3"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 4"}),e.jsx("div",{children:"This is the forth item."}),e.jsx(r.Footer,{children:"Card.Footer 4"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 5"}),e.jsx("div",{children:"This is the fifth item."}),e.jsx(r.Footer,{children:"Card.Footer 5"})]}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Item 6"}),e.jsx("div",{children:"This is the sixth item."}),e.jsx(r.Footer,{children:"Card.Footer 6"})]})]})},d={render:()=>e.jsx(i,{})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <StackedList></StackedList>
}`,...d.parameters?.docs?.source}}};const u=["Default","Empty"];export{t as Default,d as Empty,u as __namedExportsOrder,F as default};
