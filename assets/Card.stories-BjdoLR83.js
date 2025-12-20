import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as d}from"./Container-Bw0gaiBc.js";import{H as i}from"./Heading-sworPYf4.js";import{C as r}from"./Card-oYoazOIG.js";import"./iframe-DxUM99tB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VMkfjaEo.js";const x={title:"Layout/Card",parameters:{layout:"fullscreen"}},t={render:()=>e.jsxs(d,{children:[e.jsx(i,{title:"Card with header, content, and footer"}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Card Title"}),e.jsx("div",{children:"This is the card content."}),e.jsx(r.Footer,{children:"Footer Content"})]})]})},n={render:()=>e.jsxs(d,{children:[e.jsx(i,{title:"Card with only content"}),e.jsx(r,{children:e.jsx("div",{children:"Card without header or footer."})})]})},o={render:()=>e.jsxs(d,{children:[e.jsx(i,{title:"Card with header only"}),e.jsxs(r,{children:[e.jsx(r.Header,{title:"Card Title"}),e.jsx("div",{children:"Content goes here."})]})]})},a={render:()=>e.jsxs(d,{children:[e.jsx(i,{title:"Card with footer only"}),e.jsxs(r,{children:[e.jsx(r.Footer,{children:"Footer Only"}),e.jsx("div",{children:"Content goes here."})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with header, content, and footer" />
      <Card>
        <Card.Header title="Card Title" />
        <div>This is the card content.</div>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    </Container>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with only content" />
      <Card>
        <div>Card without header or footer.</div>
      </Card>
    </Container>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with header only" />
      <Card>
        <Card.Header title="Card Title" />
        <div>Content goes here.</div>
      </Card>
    </Container>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with footer only" />
      <Card>
        <Card.Footer>Footer Only</Card.Footer>
        <div>Content goes here.</div>
      </Card>
    </Container>
}`,...a.parameters?.docs?.source}}};const j=["CardWithHeaderContentFooter","CardWithOnlyContent","CardWithHeaderOnly","CardWithFooterOnly"];export{a as CardWithFooterOnly,t as CardWithHeaderContentFooter,o as CardWithHeaderOnly,n as CardWithOnlyContent,j as __namedExportsOrder,x as default};
