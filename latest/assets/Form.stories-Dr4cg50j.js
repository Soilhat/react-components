import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-CVaL4OM-.js";import{I as m}from"./Input-c0uf9bxC.js";import{T as o}from"./Textarea-BGlTZKvg.js";import{B as s}from"./Button-DPC5yEI0.js";import"./iframe-DhWUdF5I.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DJI1T-Cn.js";const f={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx(s,{type:"submit",children:"Submit"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <Button type="submit">Submit</Button>
    </Form>
}`,...r.parameters?.docs?.source}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,f as default};
