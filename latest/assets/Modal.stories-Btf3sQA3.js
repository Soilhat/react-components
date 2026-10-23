import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-7GhjllcE.js";import{M as t}from"./Modal-BBg-7RQh.js";import{B as o}from"./Button-CeV3tL6t.js";import{B as x,N as f,H as g}from"./ThemeToggle-DIC9gC9e.js";import{T as h}from"./Text-BDoP_VSl.js";import{M as v}from"./message-circle-DcTWMMVS.js";import{U as b}from"./user-CR13im8G.js";import"./preload-helper-Bni5rfja.js";import"./x-CaH0EdgK.js";import"./createLucideIcon-CjadqX4M.js";import"./chevron-right-DHi0GCFZ.js";const T={title:"Overlays/Modal",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"An adaptive overlay that balances desktop dialogs with mobile bottom-sheet ergonomics."}}}},r=()=>{const[a,n]=c.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Simple Modal"}),e.jsx(t,{open:a,onClose:()=>n(!1),children:e.jsx(h,{children:"Simple text content without specific structural components."})})]})},l=()=>{const[a,n]=c.useState(!1),u=c.useMemo(()=>Array.from({length:15},(m,s)=>({id:`paragraph-id-${s+1}`,number:s+1})),[]);return e.jsxs("div",{className:"p-8",children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Long Content Modal"}),e.jsxs(t,{open:a,onClose:()=>n(!1),children:[e.jsx(t.Header,{children:e.jsx("h3",{className:"text-xl font-bold",children:"Privacy Policy & Terms"})}),e.jsx(t.Body,{children:e.jsx("div",{className:"space-y-4",children:u.map(m=>e.jsxs("p",{className:"text-muted-foreground leading-relaxed",children:["Paragraph ",m.number,": This is a demonstration of how the modal handles a significant amount of content. On mobile, this will behave like a bottom sheet, allowing you to scroll through this text while the action buttons below stay pinned to the bottom."]},m.id))})}),e.jsx(t.Footer,{children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full",children:[e.jsx(o,{onClick:()=>n(!1),className:"flex-1",children:"Accept All"}),e.jsx(o,{variant:"ghost",onClick:()=>n(!1),className:"flex-1",children:"Decline"})]})})]})]})},i=()=>{const[a,n]=c.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Standard Modal"}),e.jsxs(t,{open:a,onClose:()=>n(!1),children:[e.jsxs("div",{className:"sm:flex sm:items-start p-2",children:[e.jsx("div",{className:"mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-danger/10 sm:mx-0 sm:size-10",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6 text-danger",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),e.jsxs("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Deactivate Account"}),e.jsx("div",{className:"mt-2",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers."})})]})]}),e.jsxs(t.Footer,{children:[e.jsx(o,{onClick:()=>n(!1),className:"bg-danger text-danger-foreground hover:bg-danger",children:"Deactivate"}),e.jsx(o,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"})]})]})]})},d=()=>{const[a,n]=c.useState(!1),u=[{label:"Home",to:"/",icon:e.jsx(g,{})},{label:"Messages",to:"/messages",icon:e.jsx(v,{})},{label:"Profile",to:"/profile",icon:e.jsx(b,{})}],m=c.useMemo(()=>Array.from({length:5},(s,p)=>({key:`legal-section-key-${p+2}`,sectionNumber:p+2})),[]);return e.jsx(x,{children:e.jsx(f,{brandName:"Testing App",links:u,layout:"sidebar",actions:e.jsx(o,{onClick:()=>n(!0),className:"w-full lg:w-auto",children:"View Legal Terms"}),children:e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"text-3xl uppercase italic",children:"Dashboard Overview"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"This dashboard uses a sidebar on desktop and a fixed bottom bar on mobile. The Modal is configured to sit above all navigation elements."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["analytics","reports","settings","logs"].map((s,p)=>e.jsxs("div",{className:"p-6 rounded-2xl border border-border bg-card shadow-sm",children:[e.jsxs("h4",{className:"font-bold mb-2",children:["Feature Card ",p+1]}),e.jsx(h,{children:"Placeholder content to demonstrate page depth and scrolling context."})]},`feature-${s}`))}),e.jsxs(t,{open:a,onClose:()=>n(!1),children:[e.jsx(t.Header,{children:"Privacy Policy & Terms of Service"}),e.jsx(t.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("section",{children:[e.jsx("h4",{className:"font-bold mb-2 underline decoration-primary",children:"1. Introduction"}),e.jsx(h,{children:'Welcome to our platform. On mobile devices, notice how this modal slides from the bottom and features a pull-handle. It respects the "Safe Area" of modern smartphones.'})]}),m.map(s=>e.jsxs("section",{children:[e.jsxs("h4",{className:"font-bold mb-2 text-sm uppercase",children:["Legal Section ",s.sectionNumber]}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed italic",children:"Standard placeholder text to verify the scroll container within the modal body. The header and footer remain pinned during this scroll action."})]},s.key))]})}),e.jsxs(t.Footer,{children:[e.jsx(o,{onClick:()=>n(!1),className:"w-full sm:w-auto",children:"I Accept"}),e.jsx(o,{variant:"ghost",onClick:()=>n(!1),className:"w-full sm:w-auto",children:"Cancel"})]})]})]})})})};r.__docgenInfo={description:"**Simple Usage**",methods:[],displayName:"Simple"};l.__docgenInfo={description:"**Structured Content (Sticky Actions)**",methods:[],displayName:"LongContent"};i.__docgenInfo={description:"**Complex Layout / Destructive Actions**",methods:[],displayName:"StandardModal"};d.__docgenInfo={description:"**Full Mobile Interaction Flow**",methods:[],displayName:"MobileBottomSheetFlow"};const L=["Simple","LongContent","StandardModal","MobileBottomSheetFlow"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content without specific structural components.</Text>
      </ModalEl>
    </div>;
}`,...r.parameters?.docs?.source},description:{story:"**Simple Usage**",...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);

  // Generate an array of objects containing a static, unique identifier string
  const paragraphs = useMemo(() => {
    return Array.from({
      length: 15
    }, (_, i) => ({
      id: \`paragraph-id-\${i + 1}\`,
      number: i + 1
    }));
  }, []);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <ModalEl.Header>
          <h3 className="text-xl font-bold">Privacy Policy & Terms</h3>
        </ModalEl.Header>
        <ModalEl.Body>
          <div className="space-y-4">
            {paragraphs.map(para => <p key={para.id} className="text-muted-foreground leading-relaxed">
                Paragraph {para.number}: This is a demonstration of how the modal handles a significant amount of
                content. On mobile, this will behave like a bottom sheet, allowing you to scroll through this text while
                the action buttons below stay pinned to the bottom.
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
}`,...l.parameters?.docs?.source},description:{story:"**Structured Content (Sticky Actions)**",...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Standard Modal</Button>
      <ModalEl open={open} onClose={() => setOpen(false)}>
        <div className="sm:flex sm:items-start p-2">
          <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-danger/10 sm:mx-0 sm:size-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-danger">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg font-bold">Deactivate Account</h3>
            <div className="mt-2">
              <p className="text-sm text-muted-foreground">
                Are you sure you want to deactivate your account? All of your data will be permanently removed from our
                servers.
              </p>
            </div>
          </div>
        </div>
        <ModalEl.Footer>
          <Button onClick={() => setOpen(false)} className="bg-danger text-danger-foreground hover:bg-danger">
            Deactivate
          </Button>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </ModalEl.Footer>
      </ModalEl>
    </div>;
}`,...i.parameters?.docs?.source},description:{story:"**Complex Layout / Destructive Actions**",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navLinks = [{
    label: 'Home',
    to: '/',
    icon: <Home />
  }, {
    label: 'Messages',
    to: '/messages',
    icon: <MessageCircle />
  }, {
    label: 'Profile',
    to: '/profile',
    icon: <User />
  }];

  // Map numbers to distinct layout section data entities containing unique, non-index key strings
  const legalSections = useMemo(() => {
    return Array.from({
      length: 5
    }, (_, i) => ({
      key: \`legal-section-key-\${i + 2}\`,
      sectionNumber: i + 2
    }));
  }, []);
  return <BrowserRouter>
      <Navbar brandName="Testing App" links={navLinks} layout="sidebar" actions={<Button onClick={() => setIsModalOpen(true)} className="w-full lg:w-auto">
            View Legal Terms
          </Button>}>
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl uppercase italic">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">
              This dashboard uses a sidebar on desktop and a fixed bottom bar on mobile. The Modal is configured to sit
              above all navigation elements.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Swapped numerical loop keys for semantic feature identifiers */}
            {['analytics', 'reports', 'settings', 'logs'].map((feature, index) => <div key={\`feature-\${feature}\`} className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <h4 className="font-bold mb-2">Feature Card {index + 1}</h4>
                <Text>Placeholder content to demonstrate page depth and scrolling context.</Text>
              </div>)}
          </div>

          <ModalEl open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalEl.Header>Privacy Policy & Terms of Service</ModalEl.Header>

            <ModalEl.Body>
              <div className="space-y-6">
                <section>
                  <h4 className="font-bold mb-2 underline decoration-primary">1. Introduction</h4>
                  <Text>
                    Welcome to our platform. On mobile devices, notice how this modal slides from the bottom and
                    features a pull-handle. It respects the "Safe Area" of modern smartphones.
                  </Text>
                </section>

                {legalSections.map(section => <section key={section.key}>
                    <h4 className="font-bold mb-2 text-sm uppercase">Legal Section {section.sectionNumber}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      Standard placeholder text to verify the scroll container within the modal body. The header and
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
}`,...d.parameters?.docs?.source},description:{story:"**Full Mobile Interaction Flow**",...d.parameters?.docs?.description}}};export{l as LongContent,d as MobileBottomSheetFlow,r as Simple,i as StandardModal,L as __namedExportsOrder,T as default};
