import{j as t}from"./jsx-runtime-u17CrQMm.js";import{S as p}from"./SwipeableRow-BxUn6xxx.js";import{r as n}from"./iframe-CbiNbsDA.js";import"./preload-helper-Bni5rfja.js";function g({title:e,titleId:r,...s},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},s),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"}))}const v=n.forwardRef(g);function x({title:e,titleId:r,...s},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},s),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"}))}const b=n.forwardRef(x);function y({title:e,titleId:r,...s},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},s),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const A=n.forwardRef(y);function k({title:e,titleId:r,...s},o){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},s),e?n.createElement("title",{id:r},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const E=n.forwardRef(k),{expect:u,fn:h,within:w,fireEvent:i}=__STORYBOOK_MODULE_TEST__,T={title:"Lists/SwipeableRow",component:p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{threshold:{control:{type:"number",min:20,max:200,step:10},description:"The swipe drag distance (in pixels) required to trigger the corresponding action hook.",defaultValue:80},children:{control:!1,description:"The primary row element container surface."},leftActions:{control:!1},rightActions:{control:!1}}},m=({title:e,description:r})=>t.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border select-none w-full",children:[t.jsxs("div",{className:"flex gap-3 items-center min-w-0",children:[t.jsx("div",{className:"size-10 rounded-full bg-muted flex items-center justify-center shrink-0",children:t.jsx(A,{className:"size-5 text-foreground"})}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-sm font-bold text-foreground truncate",children:e}),t.jsx("p",{className:"text-xs text-muted-foreground truncate",children:r})]})]}),t.jsx("span",{className:"text-[10px] text-muted-foreground font-medium shrink-0",children:"12:45 PM"})]}),c={args:{threshold:80,leftActions:[{label:"Archive",icon:t.jsx(v,{className:"size-5 text-primary-foreground"}),color:"var(--color-primary)",onClick:h()}],rightActions:[{label:"Delete",icon:t.jsx(E,{className:"size-5 text-danger-foreground"}),color:"var(--color-danger)",onClick:h()}],children:t.jsx(m,{title:"Weekly Financial Summary",description:"Your Plan d'Épargne en Actions (PEA) performance report is ready."})},decorators:[e=>t.jsx("div",{className:"max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs",children:t.jsx(e,{})})],play:async({canvasElement:e,args:r})=>{const o=w(e).getByText("Weekly Financial Summary").closest(".relative");u(o).toBeInTheDocument();const a=r.leftActions?.[0],f=r.rightActions?.[0];if(!a||!f)throw new Error("SwipeableRow story requires configured left and right actions for interaction tests.");i.mouseDown(o,{clientX:100}),i.mouseMove(o,{clientX:150}),i.mouseUp(o),u(a.onClick).not.toHaveBeenCalled(),i.mouseDown(o,{clientX:100}),i.mouseMove(o,{clientX:220}),i.mouseUp(o),u(a.onClick).toHaveBeenCalledTimes(1)}},l={args:{threshold:60,leftActions:[{label:"Complete",icon:t.jsx(b,{className:"size-5 text-success-foreground"}),color:"var(--color-success)",onClick:h()}],children:t.jsx(m,{title:"Montessori Activity Plan",description:"Set up morning motor skill toy rotation sequences."})},decorators:[e=>t.jsx("div",{className:"max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs",children:t.jsx(e,{})})],play:async({canvasElement:e,args:r})=>{const o=w(e).getByText("Montessori Activity Plan").closest(".relative");i.mouseDown(o,{clientX:100}),i.mouseMove(o,{clientX:170}),i.mouseUp(o);const a=r.leftActions?.[0];if(!a)throw new Error("This SwipeableRow story requires configured left actions for interaction tests.");u(a.onClick).toHaveBeenCalledTimes(1)}},d={render:e=>t.jsxs("div",{className:"max-w-md mx-auto border border-border rounded-2xl bg-card overflow-hidden shadow-xs divide-y divide-border",children:[t.jsx(p,{...e,children:t.jsx(m,{title:"Sourcing Update",description:"Deadstock merino wool lot shipment has cleared logistics borders."})}),t.jsx(p,{threshold:e.threshold,leftActions:e.leftActions,rightActions:e.rightActions,children:t.jsx(m,{title:"Cookibud Deployment Pipeline",description:"GitHub Actions build succeeded. Production container assets updated."})}),t.jsx(p,{threshold:e.threshold,leftActions:e.leftActions,rightActions:e.rightActions,children:t.jsx(m,{title:"Structural Preservation Note",description:"Review masonry inspection scheduling options for stone properties."})})]}),args:{...c.args}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    threshold: 80,
    leftActions: [{
      label: 'Archive',
      icon: <ArchiveBoxIcon className="size-5 text-primary-foreground" />,
      color: 'var(--color-primary)',
      onClick: fn()
    }],
    rightActions: [{
      label: 'Delete',
      icon: <TrashIcon className="size-5 text-danger-foreground" />,
      color: 'var(--color-danger)',
      onClick: fn()
    }],
    children: <RowMockupTemplate title="Weekly Financial Summary" description="Your Plan d'Épargne en Actions (PEA) performance report is ready." />
  },
  decorators: [Story => <div className="max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs">
        <Story />
      </div>],
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const swipeableElement = canvas.getByText('Weekly Financial Summary').closest('.relative');
    expect(swipeableElement).toBeInTheDocument();
    const leftAction = args.leftActions?.[0];
    const rightAction = args.rightActions?.[0];
    if (!leftAction || !rightAction) {
      throw new Error('SwipeableRow story requires configured left and right actions for interaction tests.');
    }

    // --- Test Case 1: Swipe Right below threshold (Should NOT trigger action) ---
    fireEvent.mouseDown(swipeableElement!, {
      clientX: 100
    });
    fireEvent.mouseMove(swipeableElement!, {
      clientX: 150
    });
    fireEvent.mouseUp(swipeableElement!);
    expect(leftAction.onClick).not.toHaveBeenCalled();

    // --- Test Case 2: Swipe Right past threshold (Triggers Left Action) ---
    fireEvent.mouseDown(swipeableElement!, {
      clientX: 100
    });
    fireEvent.mouseMove(swipeableElement!, {
      clientX: 220
    });
    fireEvent.mouseUp(swipeableElement!);
    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...c.parameters?.docs?.source},description:{story:"Standard setup containing typical transactional choices (Archive on swipe-right, Delete on swipe-left).",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    threshold: 60,
    leftActions: [{
      label: 'Complete',
      icon: <CheckIcon className="size-5 text-success-foreground" />,
      color: 'var(--color-success)',
      onClick: fn()
    }],
    children: <RowMockupTemplate title="Montessori Activity Plan" description="Set up morning motor skill toy rotation sequences." />
  },
  decorators: [Story => <div className="max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs">
        <Story />
      </div>],
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByText('Montessori Activity Plan').closest('.relative');
    fireEvent.mouseDown(row!, {
      clientX: 100
    });
    fireEvent.mouseMove(row!, {
      clientX: 170
    });
    fireEvent.mouseUp(row!);
    const leftAction = args.leftActions?.[0];
    if (!leftAction) {
      throw new Error('This SwipeableRow story requires configured left actions for interaction tests.');
    }
    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...l.parameters?.docs?.source},description:{story:"Demonstrates a confirmation workflow style layout (e.g., ticking off an educational checklist tracking node).",...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-md mx-auto border border-border rounded-2xl bg-card overflow-hidden shadow-xs divide-y divide-border">
      <SwipeableRow {...args}>
        <RowMockupTemplate title="Sourcing Update" description="Deadstock merino wool lot shipment has cleared logistics borders." />
      </SwipeableRow>

      <SwipeableRow threshold={args.threshold} leftActions={args.leftActions} rightActions={args.rightActions}>
        <RowMockupTemplate title="Cookibud Deployment Pipeline" description="GitHub Actions build succeeded. Production container assets updated." />
      </SwipeableRow>

      <SwipeableRow threshold={args.threshold} leftActions={args.leftActions} rightActions={args.rightActions}>
        <RowMockupTemplate title="Structural Preservation Note" description="Review masonry inspection scheduling options for stone properties." />
      </SwipeableRow>
    </div>,
  args: {
    ...Default.args
  }
}`,...d.parameters?.docs?.source},description:{story:"Full structural wrapper showing how multiple rows stack and behave together inside an interactive list container view.",...d.parameters?.docs?.description}}};const N=["Default","SuccessAction","StackingListContext"];export{c as Default,d as StackingListContext,l as SuccessAction,N as __namedExportsOrder,T as default};
