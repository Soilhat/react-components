import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BLwkVyny.js";import{M as n}from"./Modal-DEj4W1vm.js";import{B as s}from"./Button-C9riIvTf.js";import{T as d}from"./Text-CgfKlekJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsc9mi44.js";const g={title:"Overlays/Modal",component:n,parameters:{layout:"fullscreen"}},a=()=>{const[o,t]=i.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Simple Modal"}),e.jsx(n,{open:o,onClose:()=>t(!1),children:e.jsx(d,{children:"Simple text content"})})]})},l=()=>{const[o,t]=i.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Long Content Modal"}),e.jsxs(n,{open:o,onClose:()=>t(!1),children:[e.jsx(n.Body,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Privacy Policy & Terms"}),[...Array(15)].map((m,c)=>e.jsxs("p",{className:"text-text-secondary dark:text-text-secondary-dark",children:["Paragraph ",c+1,": This is a demonstration of how the modal handles a significant amount of content. On mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action buttons below stay pinned to the bottom."]},c))]})}),e.jsxs(n.Footer,{children:[e.jsx(s,{onClick:()=>t(!1),children:"Accept All"}),e.jsx(s,{variant:"ghost",onClick:()=>t(!1),children:"Decline"})]})]})]})},r=()=>{const[o,t]=i.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Standard Modal"}),e.jsxs(n,{open:o,onClose:()=>t(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-red-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold dark:text-white",children:"Deactivate Account"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."})})]})]}),e.jsxs(n.Footer,{children:[e.jsx(s,{onClick:()=>t(!1),className:"bg-red-500 text-white hover:bg-red-400",children:"Deactivate"}),e.jsx(s,{variant:"ghost",onClick:()=>t(!1),children:"Cancel"})]})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Simple"};l.__docgenInfo={description:"",methods:[],displayName:"LongContent"};r.__docgenInfo={description:"",methods:[],displayName:"StandardModal"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content</Text>
      </ModalEl>
    </div>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <ModalEl.Body>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Privacy Policy & Terms</h3>
            {[...Array(15)].map((_, i) => <p key={i} className="text-text-secondary dark:text-text-secondary-dark">
                Paragraph {i + 1}: This is a demonstration of how the modal handles a significant amount of content. On
                mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action
                buttons below stay pinned to the bottom.
              </p>)}
          </div>
        </ModalEl.Body>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)}>Accept All</Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Decline
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Standard Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-base font-semibold dark:text-white">Deactivate Account</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-400">
                Are you sure you want to deactivate your account? All of your data will be permanently removed.
              </p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="bg-red-500 text-white hover:bg-red-400">
            Deactivate
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...r.parameters?.docs?.source}}};const j=["Simple","LongContent","StandardModal"];export{l as LongContent,a as Simple,r as StandardModal,j as __namedExportsOrder,g as default};
