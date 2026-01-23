import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-B67UeQ2-.js";import{B as a}from"./Button-BLmy9for.js";import{M as r}from"./Modal-HPZmkLNR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-cLpXHo54.js";const u={title:"Overlays/Modal",parameters:{layout:"centered"},play:async({canvas:s,userEvent:t})=>{await t.click(s.getByRole("button",{name:"Open modal"}))}},n=()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(r,{open:s,onClose:()=>t(!1),children:["Simple text"," "]})]})},o=()=>{const[s,t]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(r,{open:s,onClose:()=>t(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-red-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold dark:text-white",children:"Testing Modal"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Some text to inform user about anything."})})]})]}),e.jsxs(r.Footer,{children:[e.jsx(a,{onClick:()=>t(!1),className:"inline-flex justify-center bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-400 sm:ml-3 sm:w-auto",children:"Deactivate"}),e.jsx(a,{"data-autofocus":!0,onClick:()=>t(!1),className:"mt-3 inline-flex justify-center bg-white/10 px-3 py-2 text-sm dark:text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto",children:"Cancel"})]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Simple"};o.__docgenInfo={description:"",methods:[],displayName:"Modal"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        Simple text{' '}
      </ModalEl>
    </div>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-base font-semibold dark:text-white">Testing Modal</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-400">Some text to inform user about anything.</p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="inline-flex justify-center bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-400 sm:ml-3 sm:w-auto">
            Deactivate
          </Button>
          <Button data-autofocus onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center bg-white/10 px-3 py-2 text-sm dark:text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto">
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...o.parameters?.docs?.source}}};const h=["Simple","Modal"];export{o as Modal,n as Simple,h as __namedExportsOrder,u as default};
