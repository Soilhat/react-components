import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-DKwqfg6U.js";import{B as b}from"./Button-DpXVQkBT.js";import"./preload-helper-PPVm8Dsz.js";function R(e){return e<10?`0${e}`:`${e}`}function x(e){return`${e.getFullYear()}-${R(e.getMonth()+1)}-${R(e.getDate())}`}function Z(e,n){const u=new Date(e,n,1),d=new Date(e,n+1,0),t=[],i=new Date(u);i.setDate(u.getDate()-i.getDay());const c=new Date(d);c.setDate(d.getDate()+(6-c.getDay()));for(let o=new Date(i);o<=c;o.setDate(o.getDate()+1))t.push(new Date(o));const s=[];for(let o=0;o<t.length;o+=7)s.push(t.slice(o,o+7));return s}function ee(e){if(typeof e!="object"||e===null)return null;const n=e;return Array.isArray(n.items)?n.items:Array.isArray(n.events)?n.events:null}function $(e){if(e!=null){if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e=="object"){const n=e;if(typeof n.title=="string")return n.title;if(typeof n.name=="string")return n.name}}}function te(e){const n=[];if(!Array.isArray(e)||e.length===0)return n;function u(d,t,i){for(const[c,s]of t.entries()){const o=d?.id?`${d.id}-${c}`:`evt-${i}-${c}`;n.push({id:d?.id,title:$(s)??`item-${c}`,key:o})}}for(const[d,t]of e.entries()){if(t==null)continue;const i=ee(t);if(i?.length){u(t??void 0,i,d);continue}if(typeof t=="object"){const s=t,o=s.id??`evt-${d}`,f=s.title??s.name??$(s)??o;n.push({id:o,title:f,key:o});continue}const c=`evt-${d}`;n.push({id:c,title:$(t)??c,key:c})}return n}const ne=({dayEvents:e,onEventClick:n})=>{const u=te(e??[]);if(u.length===0)return null;const d=(t,i)=>{t.dataTransfer.setData("eventId",i),t.dataTransfer.effectAllowed="move",t.currentTarget instanceof HTMLElement&&(t.currentTarget.style.opacity="0.5")};return a.jsx("div",{className:"flex flex-col gap-1.5 w-full",children:u.map(t=>a.jsx("div",{draggable:!0,onDragStart:i=>d(i,t.key),onDragEnd:i=>{i.currentTarget.style.opacity="1"},className:"cursor-grab active:cursor-grabbing",children:a.jsx(b,{onClick:()=>t.id&&n?.(t.id),title:t.title,"aria-label":t.title,color_name:"light",className:"text-left text-xs p-1.5 w-full h-auto min-h-fit leading-tight border-none bg-primary/10 hover:bg-primary/20 text-primary-dark dark:text-primary pointer-events-none",children:a.jsx("div",{className:"line-clamp-2 break-words overflow-hidden",children:t.title})})},t.key))})},ae=({d:e,isCurrentMonth:n,dayEvents:u,actionLabel:d,onAction:t,onEventClick:i,onEventDrop:c,containerClass:s,id:o})=>{const[f,p]=v.useState(!1),l=x(e),y=e.toLocaleDateString(void 0,{weekday:"short"}),g=x(new Date)===l,j=D=>{D.preventDefault(),p(!0)},N=D=>{D.preventDefault(),p(!1);const k=D.dataTransfer.getData("eventId");k&&c&&c(k,e)};return a.jsxs("div",{id:o,onDragOver:j,onDragLeave:()=>p(!1),onDrop:N,className:`${s} border rounded-xl p-3 transition-all ${f?"ring-4 ring-primary/30 border-primary bg-primary/10 scale-[1.02]":""} ${g?"ring-2 ring-primary border-primary bg-primary/5 shadow-md":n?"bg-surface-panel dark:bg-surface-panel-dark shadow-sm":"bg-surface-base/50 dark:bg-surface-base-dark/50 opacity-60"} border-border dark:border-border-dark flex flex-col gap-2 relative z-0`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-baseline gap-2",children:[a.jsx("span",{className:`text-lg font-bold ${g?"text-primary":n?"text-text-primary dark:text-text-primary-dark":"text-text-secondary"}`,children:e.getDate()}),a.jsx("span",{className:"sm:hidden text-xs font-medium uppercase tracking-wider text-text-secondary",children:y})]}),a.jsx(b,{type:"button",onClick:()=>t?.(e),color_name:"primary",className:"py-1 px-3 text-[10px] h-7 w-auto!",children:d})]}),a.jsx("div",{className:"flex-1",children:a.jsx(ne,{dayEvents:u,onEventClick:i})})]})};function C({year:e,month:n,title:u,onPrev:d,onNext:t,onAction:i,onEventDrop:c,onEventClick:s,eventsByDate:o={},actionLabel:f="Plan",initialView:p}){const[l,y]=v.useState(new Date(e,n,1)),[g,j]=v.useState(p??"month"),[N,D]=v.useState(!1),[k,G]=v.useState(null),[Y,B]=v.useState(null),F=50;v.useEffect(()=>{const r=()=>{window.innerWidth<640&&D(window.scrollY>300)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const _=()=>{if(g==="month")y(new Date(l.getFullYear(),l.getMonth()-1,1));else{const r=new Date(l);r.setDate(r.getDate()-7),y(r)}d?.()},O=()=>{if(g==="month")y(new Date(l.getFullYear(),l.getMonth()+1,1));else{const r=new Date(l);r.setDate(r.getDate()+7),y(r)}t?.()},W=r=>{B(null),G(r.targetTouches[0].clientX)},H=r=>B(r.targetTouches[0].clientX),z=()=>{if(!k||!Y)return;const r=k-Y,h=r>F,m=r<-F;h&&O(),m&&_()},A=()=>{const r=new Date;(l.getMonth()!==r.getMonth()||l.getFullYear()!==r.getFullYear())&&y(new Date(r.getFullYear(),r.getMonth(),1)),setTimeout(()=>{const h=`mob-${x(r)}`,m=document.getElementById(h);if(m){const J=document.body.getBoundingClientRect().top,Q=m.getBoundingClientRect().top-J-100;window.scrollTo({top:Q,behavior:"smooth"})}},100)},K=Z(l.getFullYear(),l.getMonth()).flat(),M=new Date(l);M.setDate(l.getDate()-l.getDay());const X=Array.from({length:7},(r,h)=>{const m=new Date(M);return m.setDate(M.getDate()+h),m}),P=(r,h=!1)=>r.map(m=>a.jsx(ae,{id:h?`mob-${x(m)}`:`dt-${x(m)}`,d:m,isCurrentMonth:m.getMonth()===l.getMonth(),dayEvents:o[x(m)]??[],actionLabel:f,onAction:i,onEventClick:s,onEventDrop:c,containerClass:h?"min-h-[5rem]":g==="week"?"min-h-[12rem]":"min-h-[8rem]"},`${h?"mob":"dt"}-${x(m)}`)),I=g==="month"?K:X,U=g==="month"?I.filter(r=>r.getMonth()===l.getMonth()):I;return a.jsxs("div",{className:"w-full max-w-full overflow-hidden relative touch-pan-y",onTouchStart:W,onTouchMove:H,onTouchEnd:z,children:[N&&a.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden",children:a.jsx(b,{onClick:A,color_name:"primary",className:"shadow-2xl px-6 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-4",children:"Go to Today"})}),a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:u??`${l.toLocaleString(void 0,{month:"long",year:"numeric"})}`}),a.jsx(b,{onClick:A,color_name:"light",className:"hidden sm:flex text-[10px] px-2 h-7 py-0 uppercase font-bold tracking-wider",children:"Today"})]}),a.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-2",children:[a.jsxs("div",{className:"flex bg-surface-panel dark:bg-surface-panel-dark p-1 rounded-lg border border-border dark:border-border-dark",children:[a.jsx("button",{onClick:()=>j("month"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="month"?"bg-primary text-white shadow-md":"text-text-secondary"}`,children:"Month"}),a.jsx("button",{onClick:()=>j("week"),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${g==="week"?"bg-primary text-white shadow-md":"text-text-secondary"}`,children:"Week"})]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx(b,{onClick:_,color_name:"light",className:"px-3",children:"Prev"}),a.jsx(b,{onClick:O,color_name:"light",className:"px-3",children:"Next"})]})]})]}),a.jsx("div",{className:"hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1 text-center",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(r=>a.jsx("div",{className:"text-xs font-bold uppercase tracking-widest text-text-secondary opacity-70",children:r},r))}),a.jsxs("div",{className:"grid gap-3 grid-cols-1 sm:grid-cols-7",children:[a.jsx("div",{className:"contents sm:hidden",children:P(U,!0)}),a.jsx("div",{className:"hidden sm:contents",children:P(I)})]})]})}C.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{eventsByDate:{defaultValue:{value:"{}",computed:!1},required:!1},actionLabel:{defaultValue:{value:"'Plan'",computed:!1},required:!1}}};const{within:q,expect:re,waitFor:se}=__STORYBOOK_MODULE_TEST__,he={title:"Data Display/Calendar",component:C,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile calendar supporting drag-and-drop event rescheduling and responsive layouts."}}}},w=new Date,L=new Date(w);L.setDate(w.getDate()+1);const S=e=>{const n=u=>u<10?`0${u}`:`${u}`;return`${e.getFullYear()}-${n(e.getMonth()+1)}-${n(e.getDate())}`},V={[S(w)]:[{id:"drag-me",title:"Drag This Meal"}],[S(L)]:[]},E={render:()=>{const[e,n]=v.useState(V),u=(d,t)=>{const i=S(t);n(c=>{const s={...c};let o=null;return Object.keys(s).forEach(f=>{const p=s[f].findIndex(l=>l.id===d);p!==-1&&([o]=s[f].splice(p,1))}),o&&(s[i]=[...s[i]||[],o]),{...s}})};return a.jsx("div",{className:"p-8 bg-surface-base dark:bg-surface-base-dark min-h-screen",children:a.jsx(C,{year:w.getFullYear(),month:w.getMonth(),eventsByDate:e,onEventDrop:u,actionLabel:"Plan"})})},play:async({canvasElement:e})=>{const n=e.querySelector(".hidden.sm\\:contents");if(!n)throw new Error("Desktop grid not found");const t=(await q(n).findByText("Drag This Meal")).closest('[draggable="true"]'),i=S(L),c=n.querySelector(`[id="dt-${i}"]`);if(!t||!c)throw new Error("Could not find source or target elements in the desktop view");const s=new DataTransfer;t.dispatchEvent(new DragEvent("dragstart",{bubbles:!0,cancelable:!0,dataTransfer:s})),c.dispatchEvent(new DragEvent("dragover",{bubbles:!0,cancelable:!0,dataTransfer:s})),c.dispatchEvent(new DragEvent("drop",{bubbles:!0,cancelable:!0,dataTransfer:s})),t.dispatchEvent(new DragEvent("dragend",{bubbles:!0,cancelable:!0,dataTransfer:s})),await se(()=>{const o=q(c).queryByText("Drag This Meal");re(o).toBeInTheDocument()},{timeout:2e3})}},T={args:{year:w.getFullYear(),month:w.getMonth(),eventsByDate:V,initialView:"month"}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`## Interaction Test (Automated)
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
Standard usage with predefined events to test layout and color schemes.`,...T.parameters?.docs?.description}}};const fe=["InteractionTest","StaticMonthView"];export{E as InteractionTest,T as StaticMonthView,fe as __namedExportsOrder,he as default};
