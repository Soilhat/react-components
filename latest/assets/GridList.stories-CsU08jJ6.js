import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CkJjnvYH.js";import{C as t}from"./Card-BXkEZ1u-.js";import"./preload-helper-Bni5rfja.js";const f={sm:"gap-3",md:"gap-4 sm:gap-5",lg:"gap-6 sm:gap-8",xl:"gap-8 sm:gap-12"},h={1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",5:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",6:"grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"};function l({items:s,renderItem:n,emptyState:c,className:m="",columns:p=3,gap:g="md"}){return s&&s.length>0?e.jsx("div",{className:`
                grid w-full auto-rows-fr transition-all duration-300
                ${h[p]}
                ${f[g]}
                ${m}
            `,children:s.map((r,d)=>{const u=typeof r=="object"&&r!==null&&"id"in r?String(r.id):d;return e.jsx("div",{className:"group/grid-item relative flex flex-col focus-within:ring-2 focus-within:ring-primary/40 rounded-xl transition-transform duration-200",children:n(r,d)},u)})}):c??e.jsx("div",{className:"flex flex-col items-center justify-center p-12 text-center rounded-2xl border-2 border-dashed border-border/60 bg-muted/5",children:e.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground/60",children:"No entries to display"})})}l.__docgenInfo={description:"",methods:[],displayName:"GridList",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},columns:{defaultValue:{value:"3",computed:!1},required:!1},gap:{defaultValue:{value:"'md'",computed:!1},required:!1}}};const N={title:"Lists/GridList",component:l,parameters:{layout:"fullscreen"},argTypes:{items:{control:"object"},columns:{control:"number"},gap:{control:"select",options:["sm","md","lg","xl"]}}},x=[{id:1,title:"Item 1",description:"This is the first item."},{id:2,title:"Item 2",description:"This is the second item."},{id:3,title:"Item 3",description:"This is the third item."},{id:4,title:"Item 4",description:"This is the forth item."},{id:5,title:"Item 5",description:"This is the fifth item."},{id:6,title:"Item 6",description:"This is the sixth item."}],a=s=>e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:s.title})}),e.jsx(t.Body,{children:s.description}),e.jsxs(t.Footer,{children:["Card.Footer ",s.id]})]}),i={args:{items:x,renderItem:a,columns:3,gap:"md"}},o={args:{items:[],renderItem:a,columns:3,gap:"md"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    renderItem,
    columns: 3,
    gap: 'md'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    renderItem,
    columns: 3,
    gap: 'md'
  }
}`,...o.parameters?.docs?.source}}};const w=["Default","Empty"];export{i as Default,o as Empty,w as __namedExportsOrder,N as default};
