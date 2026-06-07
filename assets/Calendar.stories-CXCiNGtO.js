import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-D60bBnKF.js";import{B as x}from"./Button-YL2ZvSd0.js";import"./preload-helper-PPVm8Dsz.js";function G(e){return e<10?`0${e}`:`${e}`}function D(e){return`${e.getFullYear()}-${G(e.getMonth()+1)}-${G(e.getDate())}`}function ne(e,t){const d=new Date(e,t,1),l=new Date(e,t+1,0),n=[],o=new Date(d);o.setDate(d.getDate()-o.getDay());const c=new Date(l);c.setDate(l.getDate()+(6-c.getDay()));for(let i=new Date(o);i<=c;i.setDate(i.getDate()+1))n.push(new Date(i));const s=[];for(let i=0;i<n.length;i+=7)s.push(n.slice(i,i+7));return s}function ae(e){if(typeof e!="object"||e===null)return null;const t=e;return Array.isArray(t.items)?t.items:Array.isArray(t.events)?t.events:null}function $(e){if(e!=null){if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e=="object"){const t=e;if(typeof t.title=="string")return t.title;if(typeof t.name=="string")return t.name}}}function re(e){const t=[];if(!Array.isArray(e)||e.length===0)return t;function d(l,n,o){for(const[c,s]of n.entries()){const i=l?.id?`${l.id}-${c}`:`evt-${o}-${c}`;t.push({id:l?.id,title:$(s)??`item-${c}`,key:i})}}for(const[l,n]of e.entries()){if(n==null)continue;const o=ae(n);if(o?.length){d(n??void 0,o,l);continue}if(typeof n=="object"){const s=n,i=s.id??`evt-${l}`,f=s.title??s.name??$(s)??i;t.push({id:i,title:f,key:i});continue}const c=`evt-${l}`;t.push({id:c,title:$(n)??c,key:c})}return t}const oe=({dayEvents:e,onEventClick:t})=>{const d=re(e??[]);if(d.length===0)return null;const l=(n,o)=>{n.dataTransfer.setData("eventId",o),n.dataTransfer.effectAllowed="move",n.currentTarget instanceof HTMLElement&&(n.currentTarget.style.opacity="0.4")};return a.jsx("div",{className:"flex flex-col gap-1.5 w-full",children:d.map(n=>a.jsx("div",{draggable:!0,onDragStart:o=>l(o,n.key),onDragEnd:o=>{o.currentTarget.style.opacity="1"},className:"group relative cursor-grab active:cursor-grabbing",children:a.jsx(x,{type:"button",onClick:o=>{o.stopPropagation(),n.id&&t?.(n.id)},color_name:"light",className:"text-left text-xs p-1.5 w-full h-auto min-h-fit border-none bg-primary/10 hover:bg-primary/20",children:a.jsx("div",{className:"line-clamp-2 pointer-events-none",children:n.title})})},n.key))})},se=({d:e,isCurrentMonth:t,dayEvents:d,actionLabel:l,onAction:n,onEventClick:o,onEventDrop:c,containerClass:s,id:i})=>{const[f,y]=v.useState(!1),u=D(e),w=e.toLocaleDateString(void 0,{weekday:"short"}),g=D(new Date)===u,C=b=>{b.preventDefault(),y(!0)},N=b=>{b.preventDefault(),y(!1);const k=b.dataTransfer.getData("eventId");k&&c&&c(k,e)};return a.jsxs("div",{id:i,onDragOver:C,onDragLeave:()=>y(!1),onDrop:N,className:`${s} border rounded-xl p-3 transition-all ${f?"ring-4 ring-primary/30 border-primary bg-primary/10 scale-[1.02]":""} ${g?"ring-2 ring-primary border-primary bg-primary/5 shadow-md":t?"bg-surface-panel dark:bg-surface-panel-dark shadow-sm":"bg-surface-base/50 dark:bg-surface-base-dark/50 opacity-60"} border-border dark:border-border-dark flex flex-col gap-2 relative z-0`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-baseline gap-2",children:[a.jsx("span",{className:`text-lg font-bold ${g?"text-primary":t?"text-text-primary dark:text-text-primary-dark":"text-text-secondary"}`,children:e.getDate()}),a.jsx("span",{className:"sm:hidden text-xs font-medium uppercase tracking-wider text-text-secondary",children:w})]}),a.jsx(x,{type:"button",onClick:()=>n?.(e),color_name:"primary",className:"py-1 px-3 text-[10px] h-7 w-auto!",children:l})]}),a.jsx("div",{className:"flex-1",children:a.jsx(oe,{dayEvents:d,onEventClick:o})})]})};function L({year:e,month:t,title:d,onPrev:l,onNext:n,onAction:o,onEventDrop:c,onEventClick:s,eventsByDate:i={},actionLabel:f="Plan",initialView:y}){const[u,w]=v.useState(new Date(e,t,1)),[g,C]=v.useState(y??"month"),[N,b]=v.useState(!1),[k,z]=v.useState(null),[Y,R]=v.useState(null),_=50;v.useEffect(()=>{const r=()=>{window.innerWidth<640&&b(window.scrollY>300)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const A=()=>{if(g==="month")w(new Date(u.getFullYear(),u.getMonth()-1,1));else{const r=new Date(u);r.setDate(r.getDate()-7),w(r)}l?.()},O=()=>{if(g==="month")w(new Date(u.getFullYear(),u.getMonth()+1,1));else{const r=new Date(u);r.setDate(r.getDate()+7),w(r)}n?.()},K=r=>{R(null),z(r.targetTouches[0].clientX)},X=r=>R(r.targetTouches[0].clientX),U=()=>{if(!k||!Y)return;const r=k-Y,h=r>_,m=r<-_;h&&O(),m&&A()},q=()=>{const r=new Date;(u.getMonth()!==r.getMonth()||u.getFullYear()!==r.getFullYear())&&w(new Date(r.getFullYear(),r.getMonth(),1)),setTimeout(()=>{const h=`mob-${D(r)}`,m=document.getElementById(h);if(m){const ee=document.body.getBoundingClientRect().top,te=m.getBoundingClientRect().top-ee-100;window.scrollTo({top:te,behavior:"smooth"})}},100)},J=ne(u.getFullYear(),u.getMonth()).flat(),I=new Date(u);I.setDate(u.getDate()-u.getDay());const Q=Array.from({length:7},(r,h)=>{const m=new Date(I);return m.setDate(I.getDate()+h),m}),P=(r,h=!1)=>r.map(m=>a.jsx(se,{id:h?`mob-${D(m)}`:`dt-${D(m)}`,d:m,isCurrentMonth:m.getMonth()===u.getMonth(),dayEvents:i[D(m)]??[],actionLabel:f,onAction:o,onEventClick:s,onEventDrop:c,containerClass:h?"min-h-[5rem]":g==="week"?"min-h-[12rem]":"min-h-[8rem]"},`${h?"mob":"dt"}-${D(m)}`)),M=g==="month"?J:Q,Z=g==="month"?M.filter(r=>r.getMonth()===u.getMonth()):M;return a.jsxs("div",{className:"w-full max-w-full overflow-hidden relative touch-pan-y",onTouchStart:K,onTouchMove:X,onTouchEnd:U,children:[N&&a.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden",children:a.jsx(x,{onClick:q,color_name:"primary",className:"shadow-2xl px-6 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-4",children:"Go to Today"})}),a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:d??`${u.toLocaleString(void 0,{month:"long",year:"numeric"})}`}),a.jsx(x,{onClick:q,color_name:"light",className:"hidden sm:flex text-[10px] px-2 h-7 py-0 uppercase font-bold tracking-wider",children:"Today"})]}),a.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-2",children:[a.jsxs("div",{className:"flex bg-surface-panel dark:bg-surface-panel-dark p-1 rounded-lg border border-border dark:border-border-dark",children:[a.jsx("button",{onClick:()=>C("month"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="month"?"bg-primary text-white shadow-md":"text-text-secondary"}`,children:"Month"}),a.jsx("button",{onClick:()=>C("week"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="week"?"bg-primary text-white shadow-md":"text-text-secondary"}`,children:"Week"})]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx(x,{onClick:A,color_name:"light",className:"px-3",children:"Prev"}),a.jsx(x,{onClick:O,color_name:"light",className:"px-3",children:"Next"})]})]})]}),a.jsx("div",{className:"hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1 text-center",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(r=>a.jsx("div",{className:"text-xs font-bold uppercase tracking-widest text-text-secondary opacity-70",children:r},r))}),a.jsxs("div",{className:"grid gap-3 grid-cols-1 sm:grid-cols-7",children:[a.jsx("div",{className:"contents sm:hidden",children:P(Z,!0)}),a.jsx("div",{className:"hidden sm:contents",children:P(M)})]})]})}L.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{eventsByDate:{defaultValue:{value:"{}",computed:!1},required:!1},actionLabel:{defaultValue:{value:"'Plan'",computed:!1},required:!1}}};const{within:B,expect:V,waitFor:W,fn:ie,userEvent:ce}=__STORYBOOK_MODULE_TEST__,ye={title:"Data Display/Calendar",component:L,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile calendar supporting drag-and-drop event rescheduling and responsive layouts."}}}},p=new Date,F=new Date(p);F.setDate(p.getDate()+1);const j=e=>{const t=d=>d<10?`0${d}`:`${d}`;return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},H={[j(p)]:[{id:"drag-me",title:"Drag This Meal"}],[j(F)]:[]},E={render:()=>{const[e,t]=v.useState(H),d=(l,n)=>{const o=j(n);t(c=>{const s={...c};let i=null;return Object.keys(s).forEach(f=>{const y=s[f].findIndex(u=>u.id===l);y!==-1&&([i]=s[f].splice(y,1))}),i&&(s[o]=[...s[o]||[],i]),{...s}})};return a.jsx("div",{className:"p-8 bg-surface-base dark:bg-surface-base-dark min-h-screen",children:a.jsx(L,{year:p.getFullYear(),month:p.getMonth(),eventsByDate:e,onEventDrop:d,actionLabel:"Plan"})})},play:async({canvasElement:e})=>{const t=e.querySelector(".hidden.sm\\:contents");if(!t)throw new Error("Desktop grid not found");const n=(await B(t).findByText("Drag This Meal")).closest('[draggable="true"]'),o=j(F),c=t.querySelector(`[id="dt-${o}"]`);if(!n||!c)throw new Error("Could not find source or target elements in the desktop view");const s=new DataTransfer;n.dispatchEvent(new DragEvent("dragstart",{bubbles:!0,cancelable:!0,dataTransfer:s})),c.dispatchEvent(new DragEvent("dragover",{bubbles:!0,cancelable:!0,dataTransfer:s})),c.dispatchEvent(new DragEvent("drop",{bubbles:!0,cancelable:!0,dataTransfer:s})),n.dispatchEvent(new DragEvent("dragend",{bubbles:!0,cancelable:!0,dataTransfer:s})),await W(()=>{const i=B(c).queryByText("Drag This Meal");V(i).toBeInTheDocument()},{timeout:2e3})}},T={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:H,initialView:"month"}},S={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:{[j(p)]:[{id:"test-meal-123",title:"Clickable Recipe"}]},onEventClick:ie()},play:async({canvasElement:e,args:t})=>{const d=e.querySelector(".hidden.sm\\:contents");if(!d)throw new Error("Desktop grid not found");const l=await B(d).findByRole("button",{name:/Clickable Recipe/i});if(window.getComputedStyle(l).pointerEvents==="none")throw new Error("Test failed: Button still has pointer-events: none");await ce.click(l),await W(()=>{V(t.onEventClick).toHaveBeenCalledWith("test-meal-123")})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<Record<string, unknown[]>>(initialEvents);
    const handleEventDrop = (eventId: string, targetDate: Date) => {
      const targetIso = iso(targetDate);
      setEvents(prev => {
        const next = {
          ...prev
        };
        let foundItem: unknown = null;

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
    return <div className="p-8 bg-surface-base dark:bg-surface-base-dark min-h-screen">
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
}`,...E.parameters?.docs?.source},description:{story:`## Drag and DropInteraction Test (Automated)
* This story demonstrates the "Real" interaction flow. It uses a \`play\` function to
simulate a user dragging an event from today to tomorrow.
* **Technical Note on Testing:**
Since the component renders two versions of the grid (Mobile/Desktop), the test
specifically targets the \`.sm:contents\` container to avoid "Multiple elements found" errors.`,...E.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
the onEventClick callback receives the clean ID (without the index suffix).`,...S.parameters?.docs?.description}}};const ve=["DragAndDropInteractionTest","StaticMonthView","ClickInteractionTest"];export{S as ClickInteractionTest,E as DragAndDropInteractionTest,T as StaticMonthView,ve as __namedExportsOrder,ye as default};
