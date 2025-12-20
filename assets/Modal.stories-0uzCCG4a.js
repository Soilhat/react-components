import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DxUM99tB.js";import{B as i}from"./Button-BBUnPc2W.js";import{a as f,b as h}from"./index-VMkfjaEo.js";import"./preload-helper-PPVm8Dsz.js";const o=({open:s,children:t,onClose:a})=>{const u=f(t,"Modal.Footer"),p=h(t,["Modal.Header","Modal.Footer"]);return l.useEffect(()=>{if(!s)return;const x=()=>{if(typeof a=="function")return a()},d=c=>{c.key==="Escape"&&(c.preventDefault(),x())};return globalThis.addEventListener("keydown",d),()=>globalThis.removeEventListener("keydown",d)},[s,a]),e.jsxs("dialog",{open:s,className:"relative z-10",children:[e.jsx("button",{type:"button",className:"fixed inset-0 bg-gray-50 dark:bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in",onClick:()=>{if(typeof a=="function")return a()},"aria-label":"Close dialog"}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e.jsxs("div",{className:"relative transform overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-gray-900/10 dark:outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95",children:[e.jsx("button",{type:"button",onClick:()=>{if(typeof a=="function")return a()},"aria-label":"Close dialog",className:"absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"h-4 w-4","aria-hidden":!0,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("div",{className:"px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-black dark:text-white",children:p}),u]})})})]})},m=({children:s})=>e.jsx("div",{className:"bg-gray-300/25 dark:bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:s});m.displayName="Modal.Footer";o.Footer=m;o.__docgenInfo={description:"",methods:[{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children }: { children: ReactNode }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"Modal"};const b={title:"Overlays/Modal",parameters:{layout:"centered"},play:async({canvas:s,userEvent:t})=>{await t.click(s.getByRole("button",{name:"Open modal"}))}},n=()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(o,{open:s,onClose:()=>t(!1),children:["Simple text"," "]})]})},r=()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{children:[e.jsx(i,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(o,{open:s,onClose:()=>t(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-red-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold dark:text-white",children:"Testing Modal"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Some text to inform user about anything."})})]})]}),e.jsxs(o.Footer,{children:[e.jsx(i,{onClick:()=>t(!1),className:"inline-flex justify-center bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-400 sm:ml-3 sm:w-auto",children:"Deactivate"}),e.jsx(i,{"data-autofocus":!0,onClick:()=>t(!1),className:"mt-3 inline-flex justify-center bg-white/10 px-3 py-2 text-sm dark:text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto",children:"Cancel"})]})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"Simple"};r.__docgenInfo={description:"",methods:[],displayName:"Modal"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        Simple text{' '}
      </ModalEl>
    </div>;
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const j=["Simple","Modal"];export{r as Modal,n as Simple,j as __namedExportsOrder,b as default};
