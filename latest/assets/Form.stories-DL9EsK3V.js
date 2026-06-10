import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as t}from"./Form-BryjSgsM.js";import{I as m}from"./Input-Dukctw0E.js";import{T as o}from"./Textarea-Cklm5HRz.js";import{B as s}from"./Button-OKByqS9U.js";import"./iframe-CkJjnvYH.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DTRdMYHR.js";const f={title:"Forms/Form",component:t,parameters:{layout:"centered"}},r={render:()=>e.jsxs(t,{onSubmit:a=>{a.preventDefault(),alert("Submitted!")},children:[e.jsx(m,{label:"Name",name:"name",placeholder:"Enter your name"}),e.jsx(o,{label:"Message",name:"message",placeholder:"Type your message..."}),e.jsx(s,{type:"submit",children:"Submit"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Form onSubmit={e => {
    e.preventDefault();
    alert('Submitted!');
  }}>
      <Input label="Name" name="name" placeholder="Enter your name" />
      <Textarea label="Message" name="message" placeholder="Type your message..." />
      <Button type="submit">Submit</Button>
    </Form>
}`,...r.parameters?.docs?.source}}};const x=["Default"];export{r as Default,x as __namedExportsOrder,f as default};
