import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as a}from"./Container-C-cTcGSZ.js";import{H as i}from"./Heading-Cv8qBTuR.js";import{C as e}from"./Card-DV2wD6-I.js";import"./iframe-CoFqp-Hz.js";import"./preload-helper-Bni5rfja.js";const m={title:"Layout/Card",parameters:{layout:"fullscreen"}},n={render:()=>r.jsxs(a,{children:[r.jsx(i,{title:"Card with header, content, and footer"}),r.jsxs(e,{children:[r.jsxs(e.Header,{children:[r.jsx(e.Title,{children:"Card Title"}),r.jsx(e.Description,{children:"This is a description for the card."})]}),r.jsx(e.Body,{children:r.jsx("div",{children:"This is the card content."})}),r.jsx(e.Footer,{children:"Footer Content"})]})]})},t={render:()=>r.jsxs(a,{children:[r.jsx(i,{title:"Card with only content"}),r.jsx(e,{children:r.jsx(e.Body,{children:r.jsx("div",{children:"Card without header or footer."})})})]})},d={render:()=>r.jsxs(a,{children:[r.jsx(i,{title:"Card with header only"}),r.jsxs(e,{children:[r.jsx(e.Header,{children:r.jsx(e.Title,{children:"Card Title"})}),r.jsx(e.Body,{children:r.jsx("div",{children:"Content goes here."})})]})]})},o={render:()=>r.jsxs(a,{children:[r.jsx(i,{title:"Card with footer only"}),r.jsx(e,{children:r.jsx(e.Footer,{children:"Footer Only"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with header, content, and footer" />
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>This is a description for the card.</Card.Description>
        </Card.Header>
        <Card.Body>
          <div>This is the card content.</div>
        </Card.Body>
        <Card.Footer>Footer Content</Card.Footer>
      </Card>
    </Container>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with only content" />
      <Card>
        <Card.Body>
          <div>Card without header or footer.</div>
        </Card.Body>
      </Card>
    </Container>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with header only" />
      <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
          <div>Content goes here.</div>
        </Card.Body>
      </Card>
    </Container>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Container>
      <Heading title="Card with footer only" />
      <Card>
        <Card.Footer>Footer Only</Card.Footer>
      </Card>
    </Container>
}`,...o.parameters?.docs?.source}}};const x=["CardWithHeaderContentFooter","CardWithOnlyContent","CardWithHeaderOnly","CardWithFooterOnly"];export{o as CardWithFooterOnly,n as CardWithHeaderContentFooter,d as CardWithHeaderOnly,t as CardWithOnlyContent,x as __namedExportsOrder,m as default};
