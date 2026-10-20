import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-CNdoC-A8.js";import{I as m}from"./Input-BbBjLfDG.js";import{T as o}from"./Textarea-DFK8V7xo.js";import{B as s}from"./Button-Dx7rVLlD.js";import"./iframe-xkFI9XeD.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DSctVnGB.js";const f={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx(s,{type:"submit",children:"Submit"})]})},x=["Default"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <Button type="submit">Submit</Button>
    </Form>
}`,...r.parameters?.docs?.source}}};export{r as Default,x as __namedExportsOrder,f as default};
