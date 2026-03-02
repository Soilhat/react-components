import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-tfuTwO3R.js";import{M as a}from"./Modal-TMSXBMcM.js";import{B as s}from"./Button-2nzR3UlG.js";import{T as h}from"./Text-PVrUtsbo.js";import{B as u,N as x,F as f,a as g}from"./Navbar-BdMd1yhr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2_G3gVy.js";function b({title:o,titleId:t,...m},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},m),o?r.createElement("title",{id:t},o):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"}))}const v=r.forwardRef(b),S={title:"Overlays/Modal",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"An adaptive overlay that balances desktop dialogs with mobile bottom-sheet ergonomics."}}}},l=()=>{const[o,t]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Simple Modal"}),e.jsx(a,{open:o,onClose:()=>t(!1),children:e.jsx(h,{children:"Simple text content without specific structural components."})})]})},d=()=>{const[o,t]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Long Content Modal"}),e.jsxs(a,{open:o,onClose:()=>t(!1),children:[e.jsx(a.Header,{children:e.jsx("h3",{className:"text-xl font-bold",children:"Privacy Policy & Terms"})}),e.jsx(a.Body,{children:e.jsx("div",{className:"space-y-4",children:[...Array(15)].map((m,n)=>e.jsxs("p",{className:"text-text-secondary dark:text-text-secondary-dark leading-relaxed",children:["Paragraph ",n+1,": This is a demonstration of how the modal handles a significant amount of content. On mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action buttons below stay pinned to the bottom."]},n))})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full",children:[e.jsx(s,{onClick:()=>t(!1),className:"flex-1",children:"Accept All"}),e.jsx(s,{variant:"ghost",onClick:()=>t(!1),className:"flex-1",children:"Decline"})]})})]})]})},i=()=>{const[o,t]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(s,{onClick:()=>t(!0),children:"Open Standard Modal"}),e.jsxs(a,{open:o,onClose:()=>t(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start p-2",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-state-danger/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-state-danger dark:text-state-danger-dark",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Deactivate Account"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-text-secondary dark:text-text-secondary-dark",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers."})})]})]}),e.jsxs(a.Footer,{children:[e.jsx(s,{onClick:()=>t(!1),className:"bg-state-danger text-white hover:bg-state-danger dark:bg-state-danger-dark dark:hover:bg-state-danger-dark/90",children:"Deactivate"}),e.jsx(s,{variant:"ghost",onClick:()=>t(!1),children:"Cancel"})]})]})]})},c=()=>{const[o,t]=r.useState(!1),m=[{label:"Home",to:"/",icon:e.jsx(f,{})},{label:"Messages",to:"/messages",icon:e.jsx(v,{})},{label:"Profile",to:"/profile",icon:e.jsx(g,{})}];return e.jsx(u,{children:e.jsx(x,{brandName:"Testing App",links:m,layout:"sidebar",actions:e.jsx(s,{onClick:()=>t(!0),className:"w-full lg:w-auto",children:"View Legal Terms"}),children:e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"text-3xl uppercase italic",children:"Dashboard Overview"}),e.jsx("p",{className:"text-text-secondary dark:text-text-secondary-dark mt-2",children:"This dashboard uses a sidebar on desktop and a fixed bottom bar on mobile. The Modal is configured to sit above all navigation elements."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[1,2,3,4].map(n=>e.jsxs("div",{className:"p-6 rounded-2xl border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark shadow-sm",children:[e.jsxs("h4",{className:"font-bold mb-2",children:["Feature Card ",n]}),e.jsx(h,{children:"Placeholder content to demonstrate page depth and scrolling context."})]},n))}),e.jsxs(a,{open:o,onClose:()=>t(!1),children:[e.jsx(a.Header,{children:"Privacy Policy & Terms of Service"}),e.jsx(a.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("section",{children:[e.jsx("h4",{className:"font-bold mb-2 underline decoration-primary dark:decoration-primary-dark",children:"1. Introduction"}),e.jsx(h,{children:'Welcome to our platform. On mobile devices, notice how this modal slides from the bottom and features a pull-handle. It respects the "Safe Area" of modern smartphones.'})]}),[...Array(5)].map((n,p)=>e.jsxs("section",{children:[e.jsxs("h4",{className:"font-bold mb-2 text-sm uppercase",children:["Legal Section ",p+2]}),e.jsx("p",{className:"text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed italic",children:"Standard placeholder text for verifying the scroll container within the modal body. The header and footer remain pinned during this scroll action."})]},p))]})}),e.jsxs(a.Footer,{children:[e.jsx(s,{onClick:()=>t(!1),className:"w-full sm:w-auto",children:"I Accept"}),e.jsx(s,{variant:"ghost",onClick:()=>t(!1),className:"w-full sm:w-auto",children:"Cancel"})]})]})]})})})};l.__docgenInfo={description:"**Simple Usage**\n* Use this for quick alerts or short messages. If you don't use the sub-components (`Header`, `Body`),\nthe Modal will wrap your children in a default padding container.",methods:[],displayName:"Simple"};d.__docgenInfo={description:"**Structured Content (Sticky Actions)**\n* Using `Modal.Header`, `Modal.Body`, and `Modal.Footer` ensures that the header and footer\nstay visible while the body area becomes scrollable if the content is too long.",methods:[],displayName:"LongContent"};i.__docgenInfo={description:`**Complex Layout / Destructive Actions**
* You can combine standard HTML/Tailwind structures inside the Modal for more complex
designs like account deactivation confirmations.`,methods:[],displayName:"StandardModal"};c.__docgenInfo={description:"**Full Mobile Interaction Flow**\n* This story demonstrates how the Modal interacts with the `Navbar` and `BottomBar`.\n**Switch to Mobile View** to see how the Modal appears as a bottom sheet over the navigation.",methods:[],displayName:"MobileBottomSheetFlow"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content without specific structural components.</Text>
      </ModalEl>
    </div>;
}`,...l.parameters?.docs?.source},description:{story:"**Simple Usage**\n* Use this for quick alerts or short messages. If you don't use the sub-components (`Header`, `Body`),\nthe Modal will wrap your children in a default padding container.",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <ModalEl.Header>
          <h3 className="text-xl font-bold">Privacy Policy & Terms</h3>
        </ModalEl.Header>
        <ModalEl.Body>
          <div className="space-y-4">
            {[...Array(15)].map((_, i) => <p key={i} className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                Paragraph {i + 1}: This is a demonstration of how the modal handles a significant amount of content. On
                mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action
                buttons below stay pinned to the bottom.
              </p>)}
          </div>
        </ModalEl.Body>
        <ModalEl.Footer>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button onClick={() => setOpen(false)} className="flex-1">
              Accept All
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)} className="flex-1">
              Decline
            </Button>
          </div>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...d.parameters?.docs?.source},description:{story:"**Structured Content (Sticky Actions)**\n* Using `Modal.Header`, `Modal.Body`, and `Modal.Footer` ensures that the header and footer\nstay visible while the body area becomes scrollable if the content is too long.",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Standard Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start p-2">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-state-danger/10 sm:mx-0 sm:size-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-state-danger dark:text-state-danger-dark">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-bold">Deactivate Account</h3>
            <div className="mt-2">
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                Are you sure you want to deactivate your account? All of your data will be permanently removed from our
                servers.
              </p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="bg-state-danger text-white hover:bg-state-danger dark:bg-state-danger-dark dark:hover:bg-state-danger-dark/90">
            Deactivate
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...i.parameters?.docs?.source},description:{story:`**Complex Layout / Destructive Actions**
* You can combine standard HTML/Tailwind structures inside the Modal for more complex
designs like account deactivation confirmations.`,...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = [{
    label: 'Home',
    to: '/',
    icon: <HomeIcon />
  }, {
    label: 'Messages',
    to: '/messages',
    icon: <ChatBubbleLeftRightIcon />
  }, {
    label: 'Profile',
    to: '/profile',
    icon: <UserIcon />
  }];
  return <BrowserRouter>
      <Navbar brandName="Testing App" links={navLinks} layout="sidebar" actions={<Button onClick={() => setIsModalOpen(true)} className="w-full lg:w-auto">
            View Legal Terms
          </Button>}>
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl uppercase italic">Dashboard Overview</h1>
            <p className="text-text-secondary dark:text-text-secondary-dark mt-2">
              This dashboard uses a sidebar on desktop and a fixed bottom bar on mobile. The Modal is configured to sit
              above all navigation elements.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => <div key={i} className="p-6 rounded-2xl border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark shadow-sm">
                <h4 className="font-bold mb-2">Feature Card {i}</h4>
                <Text>Placeholder content to demonstrate page depth and scrolling context.</Text>
              </div>)}
          </div>

          <ModalEl open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalEl.Header>Privacy Policy & Terms of Service</ModalEl.Header>

            <ModalEl.Body>
              <div className="space-y-6">
                <section>
                  <h4 className="font-bold mb-2 underline decoration-primary dark:decoration-primary-dark">
                    1. Introduction
                  </h4>
                  <Text>
                    Welcome to our platform. On mobile devices, notice how this modal slides from the bottom and
                    features a pull-handle. It respects the "Safe Area" of modern smartphones.
                  </Text>
                </section>

                {[...Array(5)].map((_, i) => <section key={i}>
                    <h4 className="font-bold mb-2 text-sm uppercase">Legal Section {i + 2}</h4>
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed italic">
                      Standard placeholder text for verifying the scroll container within the modal body. The header and
                      footer remain pinned during this scroll action.
                    </p>
                  </section>)}
              </div>
            </ModalEl.Body>

            <ModalEl.Footer>
              <Button onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
                I Accept
              </Button>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
            </ModalEl.Footer>
          </ModalEl>
        </div>
      </Navbar>
    </BrowserRouter>;
}`,...c.parameters?.docs?.source},description:{story:"**Full Mobile Interaction Flow**\n* This story demonstrates how the Modal interacts with the `Navbar` and `BottomBar`.\n**Switch to Mobile View** to see how the Modal appears as a bottom sheet over the navigation.",...c.parameters?.docs?.description}}};const O=["Simple","LongContent","StandardModal","MobileBottomSheetFlow"];export{d as LongContent,c as MobileBottomSheetFlow,l as Simple,i as StandardModal,O as __namedExportsOrder,S as default};
