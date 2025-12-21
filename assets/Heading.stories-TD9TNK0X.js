import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Container-yZO2oDXv.js";import{H as r}from"./Heading-XkaBiMmO.js";import{B as i}from"./Button-LuKBj8-e.js";import"./iframe-BAutRjJ-.js";import"./preload-helper-PPVm8Dsz.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,u={title:"Layout/Heading",parameters:{layout:"fullscreen"},args:{meta:[{value:"Meta Info",key:"meta"},{value:"More Info",key:"more"}],title:"Heading Example",filters:[{value:"Filter 1",key:"filter1"},{value:"Filter 2",key:"filter2"}]},argTypes:{title:{control:"text"},meta:{control:"object"}},play:async({canvas:o,userEvent:n})=>{await n.click(o.getByRole("button",{name:"Action"}))}},e=(o={})=>{const n=s();return t.jsxs(a,{children:[t.jsx(r,{...o,children:t.jsx(i,{size:"small",onClick:n,children:"Action"})}),t.jsx("div",{children:"Some content below the heading."})]})};e.__docgenInfo={description:"",methods:[],displayName:"Heading"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: Meta<typeof HeadingEl>['args'] = {}) => {
  // Provide a default action button with Storybook's fn for action logging
  const handleAction = fn();
  return <Container>
      <HeadingEl {...args}>
        <Button size="small" onClick={handleAction}>
          Action
        </Button>
      </HeadingEl>
      <div>Some content below the heading.</div>
    </Container>;
}`,...e.parameters?.docs?.source}}};const f=["Heading"];export{e as Heading,f as __namedExportsOrder,u as default};
