import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-CoFqp-Hz.js";import{B as x}from"./Button-Bt03qQjO.js";import"./preload-helper-Bni5rfja.js";function P(e){return e<10?`0${e}`:`${e}`}function b(e){return`${e.getFullYear()}-${P(e.getMonth()+1)}-${P(e.getDate())}`}function ne(e,t){const s=new Date(e,t,1),l=new Date(e,t+1,0),n=[],r=new Date(s);r.setDate(s.getDate()-r.getDay());const i=new Date(l);i.setDate(l.getDate()+(6-i.getDay()));for(let c=new Date(r);c<=i;c.setDate(c.getDate()+1))n.push(new Date(c));const d=[];for(let c=0;c<n.length;c+=7)d.push(n.slice(c,c+7));return d}function ae(e){if(typeof e!="object"||e===null)return null;const t=e;return Array.isArray(t.items)?t.items:Array.isArray(t.events)?t.events:null}function F(e){if(e!=null){if(typeof e=="string"||typeof e=="number")return String(e);if(typeof e=="object"){const t=e;if(typeof t.title=="string")return t.title;if(typeof t.name=="string")return t.name}}}function re(e){const t=[];if(!Array.isArray(e)||e.length===0)return t;function s(l,n,r){for(const[i,d]of n.entries()){const c=l?.id?`${l.id}-${i}`:`evt-${r}-${i}`;t.push({id:l?.id,title:F(d)??`item-${i}`,key:c})}}for(const[l,n]of e.entries()){if(n==null)continue;const r=ae(n);if(r?.length){s(n??void 0,r,l);continue}if(typeof n=="object"){const d=n,c=d.id??`evt-${l}`,m=d.title??d.name??F(d)??c;t.push({id:c,title:m,key:c});continue}const i=`evt-${l}`;t.push({id:i,title:F(n)??i,key:i})}return t}const oe=({dayEvents:e,onEventClick:t})=>{const s=re(e??[]);if(s.length===0)return null;const l=(n,r)=>{n.dataTransfer.setData("eventId",r),n.dataTransfer.effectAllowed="move",n.currentTarget instanceof HTMLElement&&(n.currentTarget.style.opacity="0.4")};return a.jsx("div",{className:"flex flex-col gap-1.5 w-full",children:s.map(n=>a.jsx("div",{draggable:!0,onDragStart:r=>l(r,n.key),onDragEnd:r=>{r.currentTarget.style.opacity="1"},className:"group relative cursor-grab active:cursor-grabbing",children:a.jsx(x,{type:"button",onClick:r=>{r.stopPropagation(),n.id&&t?.(n.id)},variant:"ghost",className:"text-left text-xs p-1.5 w-full h-auto min-h-fit border-none bg-primary/10 hover:bg-primary/20",children:a.jsx("div",{className:"line-clamp-2 pointer-events-none",children:n.title})})},n.key))})},se=({d:e,isCurrentMonth:t,dayEvents:s,actionLabel:l,onAction:n,onEventClick:r,onEventDrop:i,containerClass:d,id:c})=>{const[m,h]=f.useState(!1),u=b(e),y=e.toLocaleDateString(void 0,{weekday:"short"}),g=b(new Date)===u,M=D=>{D.preventDefault(),h(!0)},$=D=>{D.preventDefault(),h(!1);const E=D.dataTransfer.getData("eventId");E&&i&&i(E,e)};let k="text-muted-foreground";g?k="text-primary":t&&(k="text-foreground");let v="bg-background/50 opacity-60";return m?v="ring-4 ring-primary/30 border-primary bg-primary/10 scale-[1.02]":g?v="ring-2 ring-primary border-primary bg-primary/5 shadow-md":t&&(v="bg-card shadow-sm"),a.jsxs("div",{id:c,onDragOver:M,onDragLeave:()=>h(!1),onDrop:$,className:`${d} border rounded-xl p-3 transition-all ${v} border-border flex flex-col gap-2 relative z-0`,children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-baseline gap-2",children:[a.jsx("span",{className:`text-lg font-bold ${k}`,children:e.getDate()}),a.jsx("span",{className:"sm:hidden text-xs font-medium uppercase tracking-wider text-muted-foreground",children:y})]}),a.jsx(x,{type:"button",onClick:()=>n?.(e),variant:"primary",className:"py-1 px-3 text-[10px] h-7 w-auto!",children:l})]}),a.jsx("div",{className:"flex-1",children:a.jsx(oe,{dayEvents:s,onEventClick:r})})]})},V=({days:e,isMobile:t=!1,view:s,currentDate:l,eventsByDate:n,actionLabel:r,onAction:i,onEventClick:d,onEventDrop:c})=>a.jsx(a.Fragment,{children:e.map(m=>{let h="min-h-[8rem]";return t?h="min-h-[5rem]":s==="week"&&(h="min-h-[12rem]"),a.jsx(se,{id:t?`mob-${b(m)}`:`dt-${b(m)}`,d:m,isCurrentMonth:m.getMonth()===l.getMonth(),dayEvents:n[b(m)]??[],actionLabel:r,onAction:i,onEventClick:d,onEventDrop:c,containerClass:h},`${t?"mob":"dt"}-${b(m)}`)})});function R({year:e,month:t,title:s,onPrev:l,onNext:n,onAction:r,onEventDrop:i,onEventClick:d,eventsByDate:c={},actionLabel:m="Plan",initialView:h}){const[u,y]=f.useState(new Date(e,t,1)),[g,M]=f.useState(h??"month"),[$,k]=f.useState(!1),[v,D]=f.useState(null),[E,A]=f.useState(null),G=50;f.useEffect(()=>{const o=()=>{window.innerWidth<640&&k(window.scrollY>300)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const O=()=>{if(g==="month")y(new Date(u.getFullYear(),u.getMonth()-1,1));else{const o=new Date(u);o.setDate(o.getDate()-7),y(o)}l?.()},_=()=>{if(g==="month")y(new Date(u.getFullYear(),u.getMonth()+1,1));else{const o=new Date(u);o.setDate(o.getDate()+7),y(o)}n?.()},K=o=>{A(null),D(o.targetTouches[0].clientX)},X=o=>A(o.targetTouches[0].clientX),U=()=>{if(!v||!E)return;const o=v-E,T=o>G,w=o<-G;T&&_(),w&&O()},q=()=>{const o=new Date;(u.getMonth()!==o.getMonth()||u.getFullYear()!==o.getFullYear())&&y(new Date(o.getFullYear(),o.getMonth(),1)),setTimeout(()=>{const T=`mob-${b(o)}`,w=document.getElementById(T);if(w){const ee=document.body.getBoundingClientRect().top,te=w.getBoundingClientRect().top-ee-100;window.scrollTo({top:te,behavior:"smooth"})}},100)},J=ne(u.getFullYear(),u.getMonth()).flat(),B=new Date(u);B.setDate(u.getDate()-u.getDay());const Q=Array.from({length:7},(o,T)=>{const w=new Date(B);return w.setDate(B.getDate()+T),w}),I=g==="month"?J:Q,Z=g==="month"?I.filter(o=>o.getMonth()===u.getMonth()):I;return a.jsxs("div",{className:"w-full max-w-full overflow-hidden relative touch-pan-y",onTouchStart:K,onTouchMove:X,onTouchEnd:U,children:[$&&a.jsx("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden",children:a.jsx(x,{onClick:q,variant:"primary",className:"shadow-2xl px-6 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-4",children:"Go to Today"})}),a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("h2",{className:"text-2xl font-bold tracking-tight",children:s??`${u.toLocaleString(void 0,{month:"long",year:"numeric"})}`}),a.jsx(x,{onClick:q,variant:"ghost",className:"hidden sm:flex text-[10px] px-2 h-7 py-0 uppercase font-bold tracking-wider",children:"Today"})]}),a.jsxs("div",{className:"flex items-center justify-between sm:justify-end gap-2",children:[a.jsxs("div",{className:"flex bg-card p-1 rounded-lg border border-border",role:"group","aria-label":"Calendar view switcher",children:[a.jsx("button",{type:"button",onClick:()=>M("month"),"aria-pressed":g==="month",className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-primary ${g==="month"?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:bg-muted/50"}`,children:"Month"}),a.jsx("button",{type:"button",onClick:()=>M("week"),"aria-pressed":g==="week",className:`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-primary ${g==="week"?"bg-primary text-primary-foreground shadow-md":"text-muted-foreground hover:bg-muted/50"}`,children:"Week"})]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx(x,{onClick:O,variant:"ghost",className:"px-3",children:"Prev"}),a.jsx(x,{onClick:_,variant:"ghost",className:"px-3",children:"Next"})]})]})]}),a.jsx("div",{className:"hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1 text-center",children:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(o=>a.jsx("div",{className:"text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-70",children:o},o))}),a.jsxs("div",{className:"grid gap-3 grid-cols-1 sm:grid-cols-7",children:[a.jsx("div",{className:"contents sm:hidden",children:a.jsx(V,{days:Z,isMobile:!0,view:g,currentDate:u,eventsByDate:c,actionLabel:m,onAction:r,onEventClick:d,onEventDrop:i})}),a.jsx("div",{className:"hidden sm:contents",children:a.jsx(V,{days:I,isMobile:!1,view:g,currentDate:u,eventsByDate:c,actionLabel:m,onAction:r,onEventClick:d,onEventDrop:i})})]})]})}R.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{eventsByDate:{defaultValue:{value:"{}",computed:!1},required:!1},actionLabel:{defaultValue:{value:"'Plan'",computed:!1},required:!1}}};const{within:L,expect:W,waitFor:H,fn:ie,userEvent:le}=__STORYBOOK_MODULE_TEST__,we={title:"Data Display/Calendar",component:R,parameters:{layout:"fullscreen",docs:{description:{component:"A versatile calendar supporting drag-and-drop event rescheduling and responsive layouts."}}}},p=new Date,Y=new Date(p);Y.setDate(p.getDate()+1);const N=e=>{const t=s=>s<10?`0${s}`:`${s}`;return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`},z={[N(p)]:[{id:"drag-me",title:"Drag This Meal"}],[N(Y)]:[]},ce=(e,t)=>{const s={...e};let l=null;for(const n of Object.keys(s)){const r=s[n].findIndex(i=>i.id===t);if(r!==-1){[l]=s[n].splice(r,1);break}}return{next:s,foundItem:l}},de=()=>{const[e,t]=f.useState(z),s=(l,n)=>{const r=N(n);t(i=>{const{next:d,foundItem:c}=ce(i,l);return c&&(d[r]=[...d[r]||[],c]),d})};return a.jsx("div",{className:"p-8 bg-background min-h-screen",children:a.jsx(R,{year:p.getFullYear(),month:p.getMonth(),eventsByDate:e,onEventDrop:s,actionLabel:"Plan"})})},S={render:()=>a.jsx(de,{}),play:async({canvasElement:e})=>{const t=e.querySelector(String.raw`.hidden.sm\:contents`);if(!t)throw new Error("Desktop grid not found");const n=(await L(t).findByText("Drag This Meal")).closest('[draggable="true"]'),r=N(Y),i=t.querySelector(`[id="dt-${r}"]`);if(!n||!i)throw new Error("Could not find source or target elements in the desktop view");const d=new DataTransfer;n.dispatchEvent(new DragEvent("dragstart",{bubbles:!0,cancelable:!0,dataTransfer:d})),i.dispatchEvent(new DragEvent("dragover",{bubbles:!0,cancelable:!0,dataTransfer:d})),i.dispatchEvent(new DragEvent("drop",{bubbles:!0,cancelable:!0,dataTransfer:d})),n.dispatchEvent(new DragEvent("dragend",{bubbles:!0,cancelable:!0,dataTransfer:d})),await H(()=>{const c=L(i).queryByText("Drag This Meal");W(c).toBeInTheDocument()},{timeout:2e3})}},j={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:z,initialView:"month"}},C={args:{year:p.getFullYear(),month:p.getMonth(),eventsByDate:{[N(p)]:[{id:"test-meal-123",title:"Clickable Recipe"}]},onEventClick:ie()},play:async({canvasElement:e,args:t})=>{const s=e.querySelector(String.raw`.hidden.sm\:contents`);if(!s)throw new Error("Desktop grid not found");const l=await L(s).findByRole("button",{name:/Clickable Recipe/i});if(globalThis.getComputedStyle(l).pointerEvents==="none")throw new Error("Test failed: Button still has pointer-events: none");await le.click(l),await H(()=>{W(t.onEventClick).toHaveBeenCalledWith("test-meal-123")})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <DragAndDropWrapper />,
  play: async ({
    canvasElement
  }) => {
    // 1. Identify Desktop Scope
    const desktopGrid = canvasElement.querySelector(String.raw\`.hidden.sm\\:contents\`);
    if (!desktopGrid) throw new Error('Desktop grid not found');
    const desktopCanvas = within(desktopGrid as HTMLElement);

    // 2. Locate Source and Target
    const draggableEvent = await desktopCanvas.findByText('Drag This Meal');
    const sourceElement = draggableEvent.closest('[draggable="true"]');
    const tomorrowDateStr = iso(tomorrow);
    const targetDay = desktopGrid.querySelector(\`[id="dt-\${tomorrowDateStr}"]\`);
    if (!sourceElement || !targetDay) {
      throw new Error('Could not find source or target elements in the desktop view');
    }

    // 3. Native Event Simulation
    const dataTransfer = new DataTransfer();
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
    await waitFor(() => {
      const eventInNewLocation = within(targetDay as HTMLElement).queryByText('Drag This Meal');
      expect(eventInNewLocation).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`## Drag and DropInteraction Test (Automated)
* This story demonstrates the "Real" interaction flow. It uses a \`play\` function to
simulate a user dragging an event from today to tomorrow.
* **Technical Note on Testing:**
Since the component renders two versions of the grid (Mobile/Desktop), the test
specifically targets the \`.sm:contents\` container to avoid "Multiple elements found" errors.`,...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    year: today.getFullYear(),
    month: today.getMonth(),
    eventsByDate: initialEvents,
    initialView: 'month'
  }
}`,...j.parameters?.docs?.source},description:{story:`## Static Month View
Standard usage with predefined events to test layout and color schemes.`,...j.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    const desktopGrid = canvasElement.querySelector(String.raw\`.hidden.sm\\:contents\`);
    if (!desktopGrid) throw new Error('Desktop grid not found');
    const mealButton = await within(desktopGrid as HTMLElement).findByRole('button', {
      name: /Clickable Recipe/i
    });
    const style = globalThis.getComputedStyle(mealButton);
    if (style.pointerEvents === 'none') {
      throw new Error('Test failed: Button still has pointer-events: none');
    }
    await userEvent.click(mealButton);
    await waitFor(() => {
      expect(args.onEventClick).toHaveBeenCalledWith('test-meal-123');
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`## Click Interaction Test
This test ensures that meal items are "clickable" and navigate correctly.
It specifically checks that pointer-events are not blocked and that
the onEventClick callback receives the clean ID (without the index suffix).`,...C.parameters?.docs?.description}}};const be=["DragAndDropInteractionTest","StaticMonthView","ClickInteractionTest"];export{C as ClickInteractionTest,S as DragAndDropInteractionTest,j as StaticMonthView,be as __namedExportsOrder,we as default};
