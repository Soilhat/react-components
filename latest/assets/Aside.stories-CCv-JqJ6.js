import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as c}from"./iframe-C5BChebZ.js";import{X as H}from"./x-QmGpRmLb.js";import{B as d}from"./Button-DJmvwKvo.js";import{I as S}from"./Input-B6Zf3HXO.js";import{B as T,N as M,H as _}from"./ThemeToggle-DJZOtSoH.js";import{T as E}from"./Text-utYcVYrC.js";import{M as L}from"./message-circle-Cedx7ntO.js";import{U as V}from"./user-Bub-mKmx.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-BZyXd7Gj.js";import"./chevron-right-B4F6wYXD.js";import"./Modal-DQDCbjlN.js";const s=({open:t,children:n,onClose:o,position:i="right",stickyHeader:r=!1,stickyFooter:u=!1})=>{const p=l.useRef(null),w=l.useRef(null),y=c.Children.toArray(n),A=y.find(a=>c.isValidElement(a)&&a.type===N),k=y.find(a=>c.isValidElement(a)&&a.type===j),C=y.find(a=>c.isValidElement(a)&&a.type===b),B=y.filter(a=>c.isValidElement(a)&&a.type!==N&&a.type!==j&&a.type!==b);if(l.useEffect(()=>{if(!t)return;w.current=document.activeElement;const a=document.body.style.overflow;if(document.body.style.overflow="hidden",p.current){const m=p.current.querySelector('button, [href], input, select, textarea, [tabindex="0"]');m instanceof HTMLElement?m.focus():p.current.focus()}const O=m=>{if(m.key==="Escape"){o?.();return}if(m.key==="Tab"&&p.current){const v=p.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');if(v.length===0)return;const F=v[0],D=v[v.length-1];m.shiftKey?document.activeElement===F&&(D.focus(),m.preventDefault()):document.activeElement===D&&(F.focus(),m.preventDefault())}};return globalThis.addEventListener("keydown",O),()=>{globalThis.removeEventListener("keydown",O),document.body.style.overflow=a,w.current&&w.current.focus()}},[t,o]),!t)return null;const I=i==="right";return e.jsx("div",{className:"fixed inset-0 z-1000 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",role:"presentation",children:e.jsxs("div",{ref:p,role:"dialog","aria-modal":"true",className:`
          relative flex flex-col h-full w-full max-w-xl
          bg-card text-foreground shadow-2xl border-l border-border
          transform-gpu transition-all duration-300 ease-out
          ${I?"animate-in slide-in-from-right":"animate-in slide-in-from-left"}
          outline-none
        `,children:[e.jsx("button",{type:"button",onClick:o,className:"absolute top-4 right-4 z-1010 p-2 rounded-full hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none cursor-pointer","aria-label":"Close panel",children:e.jsx(H,{className:"h-5 w-5"})}),A&&c.isValidElement(A)?c.cloneElement(A,{sticky:r}):null,C,B.length>0&&!C&&e.jsx(b,{children:B}),k&&c.isValidElement(k)?c.cloneElement(k,{sticky:u}):null]})})},N=({children:t,sticky:n=!1})=>e.jsx("div",{className:`shrink-0 px-6 py-5 border-b border-border/50 pr-14 ${n?"sticky top-0 bg-card z-10":""}`,children:e.jsx("h2",{className:"text-lg font-semibold text-foreground",children:t})});N.displayName="Aside.Header";const b=({children:t})=>e.jsx("div",{className:"flex-1 overflow-y-auto min-h-0 px-6 py-4 scrollbar-thin",style:{scrollbarGutter:"stable",WebkitOverflowScrolling:"touch"},children:e.jsx("div",{className:"pb-4",children:t})});b.displayName="Aside.Body";const j=({children:t,sticky:n=!1})=>e.jsx("div",{className:`shrink-0 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 border-t border-border pb-safe ${n?"sticky bottom-0 bg-card z-10":"bg-transparent"}`,children:t});j.displayName="Aside.Footer";s.Header=N;s.Body=b;s.Footer=j;s.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, sticky = false }",optional:!1,type:null}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children }",optional:!1,type:null}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, sticky = false }",optional:!1,type:null}],returns:null}],displayName:"Aside",props:{position:{defaultValue:{value:"'right'",computed:!1},required:!1},stickyHeader:{defaultValue:{value:"false",computed:!1},required:!1},stickyFooter:{defaultValue:{value:"false",computed:!1},required:!1}}};const Z={title:"Overlays/Aside",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile slide-over drawer overlay providing focused context without losing main-screen continuity."}}}},f=()=>{const[t,n]=l.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(d,{onClick:()=>n(!0),children:"Open Simple Aside"}),e.jsx(s,{open:t,onClose:()=>n(!1),children:e.jsx(E,{children:"Simple text content rendered inside a slide-over panel."})})]})},h=()=>{const[t,n]=l.useState(!1),o=l.useMemo(()=>Array.from({length:15},(i,r)=>({id:`aside-paragraph-id-${r+1}`,number:r+1})),[]);return e.jsxs("div",{className:"p-8",children:[e.jsx(d,{onClick:()=>n(!0),children:"Open Long Content Aside"}),e.jsxs(s,{open:t,onClose:()=>n(!1),children:[e.jsx(s.Header,{children:"Privacy Policy & Terms"}),e.jsx(s.Body,{children:e.jsx("div",{className:"space-y-4",children:o.map(i=>e.jsxs("p",{className:"text-muted-foreground leading-relaxed",children:["Paragraph ",i.number,": Demonstrating scrollable content handling inside the Aside panel. The header and footer remain locked while this body area scrolls smoothly."]},i.id))})}),e.jsx(s.Footer,{children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 w-full",children:[e.jsx(d,{onClick:()=>n(!1),className:"flex-1",children:"Accept All"}),e.jsx(d,{variant:"ghost",onClick:()=>n(!1),className:"flex-1",children:"Decline"})]})})]})]})},x=()=>{const[t,n]=l.useState(!1),[o,i]=l.useState(!1),r=u=>{u.preventDefault(),i(!0),setTimeout(()=>{i(!1),n(!1)},800)};return e.jsxs("div",{className:"p-8",children:[e.jsx(d,{onClick:()=>n(!0),children:"Open Edit Student Drawer"}),e.jsxs(s,{open:t,onClose:()=>n(!1),children:[e.jsx(s.Header,{children:e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-normal text-muted-foreground",children:"Editing Student Profile"}),e.jsx("span",{className:"mt-0.5 block",children:"Soilhat Monteiro"})]})}),e.jsx(s.Body,{children:e.jsxs("form",{id:"student-form",onSubmit:r,className:"space-y-4 pt-2",children:[e.jsx("div",{children:e.jsx(S,{label:"First name",defaultValue:"Soilhat",required:!0})}),e.jsx("div",{children:e.jsx(S,{label:"Last name",defaultValue:"Monteiro",required:!0})}),e.jsx("div",{children:e.jsx(S,{label:"Date of birth",type:"date",defaultValue:"1997-07-15",required:!0})})]})}),e.jsxs(s.Footer,{children:[e.jsx(d,{type:"button",variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(d,{type:"submit",form:"student-form",isLoading:o,disabled:o,children:"Save Changes"})]})]})]})},g=()=>{const[t,n]=l.useState(!1),o=[{label:"Home",to:"/",icon:e.jsx(_,{})},{label:"Messages",to:"/messages",icon:e.jsx(L,{})},{label:"Profile",to:"/profile",icon:e.jsx(V,{})}],i=l.useMemo(()=>Array.from({length:5},(r,u)=>({key:`aside-section-key-${u+1}`,sectionNumber:u+1})),[]);return e.jsx(T,{children:e.jsx(M,{brandName:"Testing App",links:o,layout:"sidebar",actions:e.jsx(d,{onClick:()=>n(!0),className:"w-full lg:w-auto",children:"Open Drawer"}),children:e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs("header",{children:[e.jsx("h1",{className:"text-3xl uppercase italic",children:"Dashboard Overview"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"The Aside drawer layer smoothly slides in over page content while keeping backdrop interactivity clean and accessible."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:["analytics","reports","settings","logs"].map((r,u)=>e.jsxs("div",{className:"p-6 rounded-2xl border border-border bg-card shadow-sm",children:[e.jsxs("h4",{className:"font-bold mb-2",children:["Feature Card ",u+1]}),e.jsx(E,{children:"Placeholder content to demonstrate page depth and background layout scroll context."})]},`feature-${r}`))}),e.jsxs(s,{open:t,onClose:()=>n(!1),children:[e.jsx(s.Header,{children:"System Settings & Configuration"}),e.jsx(s.Body,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("section",{children:[e.jsx("h4",{className:"font-bold mb-2 underline decoration-primary",children:"Drawer Navigation"}),e.jsx(E,{children:"Slide-over panels excel at deep workflows, detailed inspect views, and multi-field resource updates."})]}),i.map(r=>e.jsxs("section",{children:[e.jsxs("h4",{className:"font-bold mb-2 text-sm uppercase",children:["Config Section ",r.sectionNumber]}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed italic",children:"Standard placeholder text to verify the scroll container within the Aside body. Headers and footers remain pinned."})]},r.key))]})}),e.jsxs(s.Footer,{children:[e.jsx(d,{onClick:()=>n(!1),className:"w-full sm:w-auto",children:"Save Settings"}),e.jsx(d,{variant:"ghost",onClick:()=>n(!1),className:"w-full sm:w-auto",children:"Cancel"})]})]})]})})})};f.__docgenInfo={description:"**Simple Usage**",methods:[],displayName:"Simple"};h.__docgenInfo={description:"**Structured Content (Sticky Actions)**",methods:[],displayName:"LongContent"};x.__docgenInfo={description:"**Form / Edit Drawer Workflow (Entity Creation & Updates)**",methods:[],displayName:"FormDrawer"};g.__docgenInfo={description:"**Full Mobile & Desktop Application Interaction Flow**",methods:[],displayName:"FullAppInteractionFlow"};const ee=["Simple","LongContent","FormDrawer","FullAppInteractionFlow"];f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Simple Aside</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <Text>Simple text content rendered inside a slide-over panel.</Text>
      </AsideEl>
    </div>;
}`,...f.parameters?.docs?.source},description:{story:"**Simple Usage**",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);

  // Generate an array of objects containing a static, unique identifier string
  const paragraphs = useMemo(() => {
    return Array.from({
      length: 15
    }, (_, i) => ({
      id: \`aside-paragraph-id-\${i + 1}\`,
      number: i + 1
    }));
  }, []);
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content Aside</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <AsideEl.Header>Privacy Policy & Terms</AsideEl.Header>
        <AsideEl.Body>
          <div className="space-y-4">
            {paragraphs.map(para => <p key={para.id} className="text-muted-foreground leading-relaxed">
                Paragraph {para.number}: Demonstrating scrollable content handling inside the Aside panel. The header
                and footer remain locked while this body area scrolls smoothly.
              </p>)}
          </div>
        </AsideEl.Body>
        <AsideEl.Footer>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button onClick={() => setOpen(false)} className="flex-1">
              Accept All
            </Button>
            <Button variant="ghost" onClick={() => setOpen(false)} className="flex-1">
              Decline
            </Button>
          </div>
        </AsideEl.Footer>
      </AsideEl>
    </div>;
}`,...h.parameters?.docs?.source},description:{story:"**Structured Content (Sticky Actions)**",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setOpen(false);
    }, 800);
  };
  return <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Edit Student Drawer</Button>
      <AsideEl open={open} onClose={() => setOpen(false)}>
        <AsideEl.Header>
          <div>
            <p className="text-sm font-normal text-muted-foreground">Editing Student Profile</p>
            <span className="mt-0.5 block">Soilhat Monteiro</span>
          </div>
        </AsideEl.Header>
        <AsideEl.Body>
          <form id="student-form" onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <Input label="First name" defaultValue="Soilhat" required />
            </div>
            <div>
              <Input label="Last name" defaultValue="Monteiro" required />
            </div>
            <div>
              <Input label="Date of birth" type="date" defaultValue="1997-07-15" required />
            </div>
          </form>
        </AsideEl.Body>
        <AsideEl.Footer>
          <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" form="student-form" isLoading={isSaving} disabled={isSaving}>
            Save Changes
          </Button>
        </AsideEl.Footer>
      </AsideEl>
    </div>;
}`,...x.parameters?.docs?.source},description:{story:"**Form / Edit Drawer Workflow (Entity Creation & Updates)**",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
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
  const sections = useMemo(() => {
    return Array.from({
      length: 5
    }, (_, i) => ({
      key: \`aside-section-key-\${i + 1}\`,
      sectionNumber: i + 1
    }));
  }, []);
  return <BrowserRouter>
      <Navbar brandName="Testing App" links={navLinks} layout="sidebar" actions={<Button onClick={() => setIsAsideOpen(true)} className="w-full lg:w-auto">
            Open Drawer
          </Button>}>
        <div className="max-w-2xl mx-auto space-y-6">
          <header>
            <h1 className="text-3xl uppercase italic">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">
              The Aside drawer layer smoothly slides in over page content while keeping backdrop interactivity clean and
              accessible.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['analytics', 'reports', 'settings', 'logs'].map((feature, index) => <div key={\`feature-\${feature}\`} className="p-6 rounded-2xl border border-border bg-card shadow-sm">
                <h4 className="font-bold mb-2">Feature Card {index + 1}</h4>
                <Text>Placeholder content to demonstrate page depth and background layout scroll context.</Text>
              </div>)}
          </div>

          <AsideEl open={isAsideOpen} onClose={() => setIsAsideOpen(false)}>
            <AsideEl.Header>System Settings & Configuration</AsideEl.Header>

            <AsideEl.Body>
              <div className="space-y-6">
                <section>
                  <h4 className="font-bold mb-2 underline decoration-primary">Drawer Navigation</h4>
                  <Text>
                    Slide-over panels excel at deep workflows, detailed inspect views, and multi-field resource updates.
                  </Text>
                </section>

                {sections.map(section => <section key={section.key}>
                    <h4 className="font-bold mb-2 text-sm uppercase">Config Section {section.sectionNumber}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed italic">
                      Standard placeholder text to verify the scroll container within the Aside body. Headers and
                      footers remain pinned.
                    </p>
                  </section>)}
              </div>
            </AsideEl.Body>

            <AsideEl.Footer>
              <Button onClick={() => setIsAsideOpen(false)} className="w-full sm:w-auto">
                Save Settings
              </Button>
              <Button variant="ghost" onClick={() => setIsAsideOpen(false)} className="w-full sm:w-auto">
                Cancel
              </Button>
            </AsideEl.Footer>
          </AsideEl>
        </div>
      </Navbar>
    </BrowserRouter>;
}`,...g.parameters?.docs?.source},description:{story:"**Full Mobile & Desktop Application Interaction Flow**",...g.parameters?.docs?.description}}};export{x as FormDrawer,g as FullAppInteractionFlow,h as LongContent,f as Simple,ee as __namedExportsOrder,Z as default};
