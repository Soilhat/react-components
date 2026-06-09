import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-zvmmblCn.js";import{I as m}from"./Input-DdLL7ld-.js";import{T as o}from"./Textarea-DIN1iZxS.js";import{B as s}from"./Button-0Aoe7CjV.js";import"./iframe-DHZ9nfwl.js";import"./preload-helper-Bni5rfja.js";const b={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx(s,{type:"submit",children:"Submit"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <Button type="submit">Submit</Button>
    </Form>
}`,...r.parameters?.docs?.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,b as default};
