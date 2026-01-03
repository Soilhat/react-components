import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-stPSHJbF.js";import{I as m}from"./Input-BhvcxOb1.js";import{T as o}from"./Textarea-C9SVZhCC.js";import"./iframe-Bj9APFbg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-hok_722F.js";const d={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx("button",{type:"submit",children:"Submit"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <button type="submit">Submit</button>
    </Form>
}`,...r.parameters?.docs?.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,d as default};
