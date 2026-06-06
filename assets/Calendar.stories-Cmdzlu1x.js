import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-DObK1DMn.js";import{B as b}from"./Button-BtK1OYc1.js";import"./preload-helper-PPVm8Dsz.js";function G(e){return e<10?`0${e}`:`${e}`}function D(e){return`${e.getFullYear()}-${G(e.getMonth()+1)}-${G(e.getDate())}`}function ne(e,t){const d=new Date(e,t,1),c=new Date(e,t+1,0),n=[],o=new Date(d);o.setDate(d.getDate()-o.getDay());const l=new Date(c);l.setDate(c.getDate()+(6-l.getDay()));for(let i=new Date(o);i<=l;i.setDate(i.getDate()+1))n.push(new Date(i));const s=[];for(let i=0;i<n.length;i+=7)s.push(n.slice(i,i+7));return s}function ae(e){if(typeof e!="object"||e===null)return null;const t=e;return Array.isArray(t.items)?t.items:Array.isArray(t.events)?t.events:null}function $(e){if(e!=null){if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e=="object"){const t=e;if(typeof t.title=="string")return t.title;if(typeof t.name=="string")return t.name}}}function re(e){const t=[];if(!Array.isArray(e)||e.length===0)return t;function d(c,n,o){for(const[l,s]of n.entries()){const i=c?.id?`${c.id}-${l}`:`evt-${o}-${l}`;t.push({id:c?.id,title:$(s)??`item-${l}`,key:i})}}for(const[c,n]of e.entries()){if(n==null)continue;const o=ae(n);if(o?.length){d(n??void 0,o,c);continue}if(typeof n=="object"){const s=n,i=s.id??`evt-${c}`,f=s.title??s.name??$(s)??i;t.push({id:i,title:f,key:i});continue}const l=`evt-${c}`;t.push({id:l,title:$(n)??l,key:l})}return t}const oe=({dayEvents:e,onEventClick:t})=>{const d=re(e??[]);if(d.length===0)return null;const c=(n,o)=>{n.dataTransfer.setData("eventId",o),n.dataTransfer.effectAllowed="move",n.currentTarget instanceof HTMLElement&&(n.currentTarget.style.opacity="0.4")};return a.jsx("div",{className:"flex flex-col gap-1.5 w-full",children:d.map(n=>a.jsx("div",{draggable:!0,onDragStart:o=>c(o,n.key),onDragEnd:o=>{o.currentTarget.style.opacity="1"},className:"group relative cursor-grab active:cursor-grabbing",children:a.jsx(b,{type:"button",onClick:o=>{o.stopPropagation(),n.id&&t?.(n.id)},variant:"ghost",className:"text-left text-xs p-1.5 w-full h-auto min-h-fit border-none bg-primary/10 hover:bg-primary/20",children:a.jsx("div",{className:"line-clamp-2 pointer-events-none",children:n.title})})},n.key))})},se=({d:e,isCurrentMonth:t,dayEvents:d,actionLabel:c,onAction:n,onEventClick:o,onEventDrop:l,containerClass:s,id:i})=>{const[f,v]=y.useState(!1),u=D(e),w=e.toLocaleDateString(void 0,{weekday:"short"}),g=D(new Date)===u,C=x=>{x.preventDefault(),v(!0)},N=x=>{x.preventDefault(),v(!1);const E=x.dataTransfer.getData("eventId");E&&l&&l(E,e)};return a.jsxs("div",{id:i,onDragOver:C,onDragLeave:()=>v(!1),onDrop:N,className:`${s} border rounded-xl p-3 transition-all ${f?"ring-4 ring-primary/30 border-primary bg-primary/10 scale-[1.02]":""} ${g?"ring-2 ring-primary border-primary bg-primary/5 shadow-md":t?"bg-card shadow-sm":"bg-background/50 opacity-60"} border-border flex flex-col gap-2 relative z-0`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-baseline gap-2",children:[a.jsx("span",{className:`text-lg font-bold ${g?"text-primary":t?"text-foreground":"text-muted-foreground"}`,children:e.getDate()}),a.jsx("span",{className:"sm:hidden text-xs font-medium uppercase tracking-wider text-muted-foreground",children:w})]}),a.jsx(b,{type:"button",onClick:()=>n?.(e),variant:"primary",className:"py-1 px-3 text-[10px] h-7 w-auto!",children:c})]}),a.jsx("div",{className:"flex-1",children:a.jsx(oe,{dayEvents:d,onEventClick:o})})]})};function L({year:e,month:t,title:d,onPrev:c,onNext:n,onAction:o,onEventDrop:l,onEventClick:s,eventsByDate:i={},actionLabel:f="Plan",initialView:v}){const[u,w]=y.useState(new Date(e,t,1)),[g,C]=y.useState(v??"month"),[N,x]=y.useState(!1),[E,z]=y.useState(null),[Y,R]=y.useState(null),A=50;y.useEffect(()=>{const r=()=>{window.innerWidth<640&&x(window.scrollY>300)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const O=()=>{if(g==="month")w(new Date(u.getFullYear(),u.getMonth()-1,1));else{const r=new Date(u);r.setDate(r.getDate()-7),w(r)}c?.()},q=()=>{if(g==="month")w(new Date(u.getFullYear(),u.getMonth()+1,1));else{const r=new Date(u);r.setDate(r.getDate()+7),w(r)}n?.()},K=r=>{R(null),z(r.targetTouches[0].clientX)},X=r=>R(r.targetTouches[0].clientX),U=()=>{if(!E||!Y)return;const r=E-Y,h=r>A,m=r<-A;h&&q(),m&&O()},P=()=>{const r=new Date;(u.getMonth()!==r.getMonth()||u.getFullYear()!==r.getFullYear())&&w(new Date(r.getFullYear(),r.getMonth(),1)),setTimeout(()=>{const h=`mob-${D(r)}`,m=document.getElementById(h);if(m){const ee=document.body.getBoundingClientRect().top,te=m.getBoundingClientRect().top-ee-100;window.scrollTo({top:te,behavior:"smooth"})}},100)},J=ne(u.getFullYear(),u.getMonth()).flat(),I=new Date(u);I.setDate(u.getDate()-u.getDay());const Q=Array.from({length:7},(r,h)=>{const m=new Date(I);return m.setDate(I.getDate()+h),m}),_=(r,h=!1)=>r.map(m=>a.jsx(se,{id:h?`mob-${D(m)}`:`dt-${D(m)}`,d:m,isCurrentMonth:m.getMonth()===u.getMonth(),dayEvents:i[D(m)]??[],actionLabel:f,onAction:o,onEventClick:s,onEventDrop:l,containerClass:h?"min-h-[5rem]":g==="week"?"min-h-[12rem]":"min-h-[8rem]"},`${h?"mob":"dt"}-${D(m)}`)),M=g==="month"?J:Q,Z=g==="month"?M.filter(r=>r.getMonth()===u.getMonth()):M;return a.jsxs("div",{className:"w-full max-w-full overflow-hidden relative touch-pan-y",onTouchStart:K,onTouchMove:X,onTouchEnd:U,children:[N&&a.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden",children:a.jsx(b,{onClick:P,variant:"primary",className:"shadow-2xl px-6 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-4",children:"Go to Today"})}),a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:d??`${u.toLocaleString(void 0,{month:"long",year:"numeric"})}`}),a.jsx(b,{onClick:P,variant:"ghost",className:"hidden sm:flex text-[10px] px-2 h-7 py-0 uppercase font-bold tracking-wider",children:"Today"})]}),a.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-2",children:[a.jsxs("div",{className:"flex bg-card p-1 rounded-lg border border-border",children:[a.jsx("button",{onClick:()=>C("month"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="month"?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground"}`,children:"Month"}),a.jsx("button",{onClick:()=>C("week"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="week"?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground"}`,children:"Week"})]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx(b,{onClick:O,variant:"ghost",className:"px-3",children:"Prev"}),a.jsx(b,{onClick:q,variant:"ghost",className:"px-3",children:"Next"})]})]})]}),a.jsx("div",{className:"hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1 text-center",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(r=>a.jsx("div",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-70",children:r},r))}),a.jsxs("div",{className:"grid gap-3 grid-cols-1 sm:grid-cols-7",children:[a.jsx("div",{className:"contents sm:hidden",children:_(Z,!0)}),a.jsx("div",{className:"hidden sm:contents",children:_(M)})]})]})}L.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{eventsByDate:{defaultValue:{value:"{}",computed:!1},required:!1},actionLabel:{defaultValue:{value:"'Plan'",computed:!1},required:!1}}};const{within:B,expect:V,waitFor:W,fn:ie,userEvent:le}=__STORYBOOK_MODULE_TEST__,ve={title:"Data Display/Calendar",component:L,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile calendar supporting drag-and-drop event rescheduling and responsive layouts."}}}},p=new Date,F=new Date(p);F.setDate(p.getDate()+1);const j=e=>{const t=d=>d<10?`0${d}`:`${d}`;return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},H={[j(p)]:[{id:"drag-me",title:"Drag This Meal"}],[j(F)]:[]},k={render:()=>{const[e,t]=y.useState(H),d=(c,n)=>{const o=j(n);t(l=>{const s={...l};let i=null;return Object.keys(s).forEach(f=>{const v=s[f].findIndex(u=>u.id===c);v!==-1&&([i]=s[f].splice(v,1))}),i&&(s[o]=[...s[o]||[],i]),{...s}})};return a.jsx("div",{className:"p-8 bg-background min-h-screen",children:a.jsx(L,{year:p.getFullYear(),month:p.getMonth(),eventsByDate:e,onEventDrop:d,actionLabel:"Plan"})})},play:async({canvasElement:e})=>{const t=e.querySelector(".hidden.sm\\:contents");if(!t)throw new Error("Desktop grid not found");const n=(await B(t).findByText("Drag This Meal")).closest('[draggable="true"]'),o=j(F),l=t.querySelector(`[id="dt-${o}"]`);if(!n||!l)throw new Error("Could not find source or target elements in the desktop view");const s=new DataTransfer;n.dispatchEvent(new DragEvent("dragstart",{bubbles:!0,cancelable:!0,dataTransfer:s})),l.dispatchEvent(new DragEvent("dragover",{bubbles:!0,cancelable:!0,dataTransfer:s})),l.dispatchEvent(new DragEvent("drop",{bubbles:!0,cancelable:!0,dataTransfer:s})),n.dispatchEvent(new DragEvent("dragend",{bubbles:!0,cancelable:!0,dataTransfer:s})),await W(()=>{const i=B(l).queryByText("Drag This Meal");V(i).toBeInTheDocument()},{timeout:2e3})}},T={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:H,initialView:"month"}},S={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:{[j(p)]:[{id:"test-meal-123",title:"Clickable Recipe"}]},onEventClick:ie()},play:async({canvasElement:e,args:t})=>{const d=e.querySelector(".hidden.sm\\:contents");if(!d)throw new Error("Desktop grid not found");const c=await B(d).findByRole("button",{name:/Clickable Recipe/i});if(window.getComputedStyle(c).pointerEvents==="none")throw new Error("Test failed: Button still has pointer-events: none");await le.click(c),await W(()=>{V(t.onEventClick).toHaveBeenCalledWith("test-meal-123")})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<Record<string, {
      id: string;
      title: string;
    }[]>>(initialEvents);
    const handleEventDrop = (eventId: string, targetDate: Date) => {
      const targetIso = iso(targetDate);
      setEvents(prev => {
        const next = {
          ...prev
        };
        let foundItem: {
          id: string;
          title: string;
        } | null = null;

        // Logic to find and pluck the event from its original date
        Object.keys(next).forEach(dateKey => {
          const index = next[dateKey].findIndex(e => e.id === eventId);
          if (index !== -1) [foundItem] = next[dateKey].splice(index, 1);
        });

        // Push the item into the new date array
        if (foundItem) {
          next[targetIso] = [...(next[targetIso] || []), foundItem];
        }
        return {
          ...next
        };
      });
    };
    return <div className="p-8 bg-background min-h-screen">
        <Calendar year={today.getFullYear()} month={today.getMonth()} eventsByDate={events} onEventDrop={handleEventDrop} actionLabel="Plan" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    // 1. Identify Desktop Scope
    // We target .hidden.sm:contents to ignore the mobile-hidden DOM nodes
    const desktopGrid = canvasElement.querySelector('.hidden.sm\\\\:contents');
    if (!desktopGrid) throw new Error('Desktop grid not found');
    const desktopCanvas = within(desktopGrid as HTMLElement);

    // 2. Locate Source and Target
    const draggableEvent = await desktopCanvas.findByText('Drag This Meal');
    const sourceElement = draggableEvent.closest('[draggable="true"]');
    const tomorrowDateStr = iso(tomorrow);
    // Specifically looking for the Desktop ID 'dt-YYYY-MM-DD'
    const targetDay = desktopGrid.querySelector(\`[id="dt-\${tomorrowDateStr}"]\`);
    if (!sourceElement || !targetDay) {
      throw new Error('Could not find source or target elements in the desktop view');
    }

    // 3. Native Event Simulation
    // DataTransfer is required for the HTML5 Drag/Drop API to function
    const dataTransfer = new DataTransfer();

    // Sequence: Start -> Over -> Drop -> End
    sourceElement.dispatchEvent(new DragEvent('dragstart', {
      bubbles: true,
      cancelable: true,
      dataTransfer
    }));
    targetDay.dispatchEvent(new DragEvent('dragover', {
      bubbles: true,
      cancelable: true,
      dataTransfer
    }));
    targetDay.dispatchEvent(new DragEvent('drop', {
      bubbles: true,
      cancelable: true,
      dataTransfer
    }));
    sourceElement.dispatchEvent(new DragEvent('dragend', {
      bubbles: true,
      cancelable: true,
      dataTransfer
    }));

    // 4. Assert Results
    // We wait for the state update and re-render to reflect the item in the new cell
    await waitFor(() => {
      const eventInNewLocation = within(targetDay as HTMLElement).queryByText('Drag This Meal');
      expect(eventInNewLocation).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
}`,...k.parameters?.docs?.source},description:{story:`## Drag and DropInteraction Test (Automated)
* This story demonstrates the "Real" interaction flow. It uses a \`play\` function to
simulate a user dragging an event from today to tomorrow.
* **Technical Note on Testing:**
Since the component renders two versions of the grid (Mobile/Desktop), the test
specifically targets the \`.sm:contents\` container to avoid "Multiple elements found" errors.`,...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    year: today.getFullYear(),
    month: today.getMonth(),
    eventsByDate: initialEvents,
    initialView: 'month'
  }
}`,...T.parameters?.docs?.source},description:{story:`## Static Month View
Standard usage with predefined events to test layout and color schemes.`,...T.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    year: today.getFullYear(),
    month: today.getMonth(),
    eventsByDate: {
      [iso(today)]: [{
        id: 'test-meal-123',
        title: 'Clickable Recipe'
      }]
    },
    onEventClick: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const desktopGrid = canvasElement.querySelector('.hidden.sm\\\\:contents');
    if (!desktopGrid) throw new Error('Desktop grid not found');
    const mealButton = await within(desktopGrid as HTMLElement).findByRole('button', {
      name: /Clickable Recipe/i
    });
    const style = window.getComputedStyle(mealButton);
    if (style.pointerEvents === 'none') {
      throw new Error('Test failed: Button still has pointer-events: none');
    }
    await userEvent.click(mealButton);
    await waitFor(() => {
      expect(args.onEventClick).toHaveBeenCalledWith('test-meal-123');
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`## Click Interaction Test
This test ensures that meal items are "clickable" and navigate correctly.
It specifically checks that pointer-events are not blocked and that
the onEventClick callback receives the clean ID (without the index suffix).`,...S.parameters?.docs?.description}}};const ye=["DragAndDropInteractionTest","StaticMonthView","ClickInteractionTest"];export{S as ClickInteractionTest,k as DragAndDropInteractionTest,T as StaticMonthView,ye as __namedExportsOrder,ve as default};
