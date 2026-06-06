import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-DIE7sHwr.js";import{I as m}from"./Input-CWkPmsq1.js";import{T as o}from"./Textarea-COJk3YYR.js";import{B as s}from"./Button-Cny4Hn02.js";import"./iframe-BG6SSSvD.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx(s,{type:"submit",children:"Submit"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <Button type="submit">Submit</Button>
    </Form>
}`,...r.parameters?.docs?.source}}};const f=["Default"];export{r as Default,f as __namedExportsOrder,b as default};
