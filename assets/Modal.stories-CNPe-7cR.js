import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-BUqkNVfX.js";import{B as l}from"./Button-Cgk7QQ7m.js";import{a as x,b as f}from"./index-CNQAKSpY.js";import"./preload-helper-PPVm8Dsz.js";function h({title:s,titleId:t,...n},d){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":t},n),s?r.createElement("title",{id:t},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const b=r.forwardRef(h),i=({open:s,children:t,onClose:n})=>{const d=x(t,"Modal.Footer"),p=f(t,["Modal.Header","Modal.Footer"]);return r.useEffect(()=>{if(!s)return;const c=m=>{m.key==="Escape"&&(m.preventDefault(),n?.())};return document.body.style.overflow="hidden",globalThis.addEventListener("keydown",c),()=>{document.body.style.overflow="unset",globalThis.removeEventListener("keydown",c)}},[s,n]),s?e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",children:[e.jsx("div",{className:"fixed inset-0 bg-surface-base/60 dark:bg-surface-base-dark/60 backdrop-blur-sm transition-opacity",onClick:n,"aria-hidden":"true"}),e.jsxs("div",{className:`
        relative w-full max-w-lg transform overflow-hidden rounded-2xl
        bg-surface-panel dark:bg-surface-panel-dark
        text-text-primary dark:text-text-primary-dark
        shadow-2xl border border-border dark:border-border-dark
        transition-all animate-in fade-in zoom-in-95 duration-200
      `,children:[e.jsx("button",{type:"button",onClick:n,className:"absolute top-4 right-4 z-10 p-1 rounded-full text-text-secondary hover:bg-surface-base dark:hover:bg-surface-base-dark hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-state-focus","aria-label":"Close modal",children:e.jsx(b,{className:"h-5 w-5"})}),e.jsx("div",{className:"px-6 pt-8 pb-6 text-base",children:p}),d]})]}):null},u=({children:s})=>e.jsx("div",{className:"bg-surface-base/50 dark:bg-surface-base-dark/50 px-6 py-4 flex flex-row-reverse gap-3 border-t border-border dark:border-border-dark",children:s});u.displayName="Modal.Footer";i.Footer=u;i.__docgenInfo={description:"",methods:[{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children }: { children: ReactNode }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"Modal"};const j={title:"Overlays/Modal",parameters:{layout:"centered"},play:async({canvas:s,userEvent:t})=>{await t.click(s.getByRole("button",{name:"Open modal"}))}},a=()=>{const[s,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(i,{open:s,onClose:()=>t(!1),children:["Simple text"," "]})]})},o=()=>{const[s,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{onClick:()=>t(!0),children:"Open modal"}),e.jsxs(i,{open:s,onClose:()=>t(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-red-400",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-base font-semibold dark:text-white",children:"Testing Modal"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-gray-400",children:"Some text to inform user about anything."})})]})]}),e.jsxs(i.Footer,{children:[e.jsx(l,{onClick:()=>t(!1),className:"inline-flex justify-center bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-400 sm:ml-3 sm:w-auto",children:"Deactivate"}),e.jsx(l,{"data-autofocus":!0,onClick:()=>t(!1),className:"mt-3 inline-flex justify-center bg-white/10 px-3 py-2 text-sm dark:text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto",children:"Cancel"})]})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Simple"};o.__docgenInfo={description:"",methods:[],displayName:"Modal"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        Simple text{' '}
      </ModalEl>
    </div>;
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const N=["Simple","Modal"];export{o as Modal,a as Simple,N as __namedExportsOrder,j as default};
