import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as d}from"./SwipeableRow-CDwWF6bt.js";import{T as w,A as g}from"./trash-2-Byq3QK6K.js";import{C as x}from"./check-yK3ZDST_.js";import{c as v}from"./createLucideIcon-DJI1T-Cn.js";import"./iframe-DhWUdF5I.js";import"./preload-helper-Bni5rfja.js";const b=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],y=v("mail",b),{expect:m,fn:p,within:u,fireEvent:r}=__STORYBOOK_MODULE_TEST__,N={title:"Lists/SwipeableRow",component:d,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{threshold:{control:{type:"number",min:20,max:200,step:10},description:"The swipe drag distance (in pixels) required to trigger the corresponding action hook.",defaultValue:80},children:{control:!1,description:"The primary row element container surface."},leftActions:{control:!1},rightActions:{control:!1}}},l=({title:t,description:s})=>e.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-border select-none w-full",children:[e.jsxs("div",{className:"flex gap-3 items-center min-w-0",children:[e.jsx("div",{className:"size-10 rounded-full bg-muted flex items-center justify-center shrink-0",children:e.jsx(y,{className:"size-5 text-foreground"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-bold text-foreground truncate",children:t}),e.jsx("p",{className:"text-xs text-muted-foreground truncate",children:s})]})]}),e.jsx("span",{className:"text-[10px] text-muted-foreground font-medium shrink-0",children:"12:45 PM"})]}),n={args:{threshold:80,leftActions:[{label:"Archive",icon:e.jsx(g,{className:"size-5 text-primary-foreground"}),color:"var(--color-primary)",onClick:p()}],rightActions:[{label:"Delete",icon:e.jsx(w,{className:"size-5 text-danger-foreground"}),color:"var(--color-danger)",onClick:p()}],children:e.jsx(l,{title:"Weekly Financial Summary",description:"Your Plan d'Épargne en Actions (PEA) performance report is ready."})},decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs",children:e.jsx(t,{})})],play:async({canvasElement:t,args:s})=>{const o=u(t).getByText("Weekly Financial Summary").closest(".relative");m(o).toBeInTheDocument();const i=s.leftActions?.[0],f=s.rightActions?.[0];if(!i||!f)throw new Error("SwipeableRow story requires configured left and right actions for interaction tests.");o&&(r.mouseDown(o,{clientX:100}),r.mouseMove(o,{clientX:150}),r.mouseUp(o)),m(i.onClick).not.toHaveBeenCalled(),o&&(r.mouseDown(o,{clientX:100}),r.mouseMove(o,{clientX:220}),r.mouseUp(o)),m(i.onClick).toHaveBeenCalledTimes(1)}},a={args:{threshold:60,leftActions:[{label:"Complete",icon:e.jsx(x,{className:"size-5 text-success-foreground"}),color:"var(--color-success)",onClick:p()}],children:e.jsx(l,{title:"Montessori Activity Plan",description:"Set up morning motor skill toy rotation sequences."})},decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs",children:e.jsx(t,{})})],play:async({canvasElement:t,args:s})=>{const o=u(t).getByText("Montessori Activity Plan").closest(".relative");o&&(r.mouseDown(o,{clientX:100}),r.mouseMove(o,{clientX:170}),r.mouseUp(o));const i=s.leftActions?.[0];if(!i)throw new Error("This SwipeableRow story requires configured left actions for interaction tests.");m(i.onClick).toHaveBeenCalledTimes(1)}},c={render:t=>e.jsxs("div",{className:"max-w-md mx-auto border border-border rounded-2xl bg-card overflow-hidden shadow-xs divide-y divide-border",children:[e.jsx(d,{...t,children:e.jsx(l,{title:"Sourcing Update",description:"Deadstock merino wool lot shipment has cleared logistics borders."})}),e.jsx(d,{threshold:t.threshold,leftActions:t.leftActions,rightActions:t.rightActions,children:e.jsx(l,{title:"Cookibud Deployment Pipeline",description:"GitHub Actions build succeeded. Production container assets updated."})}),e.jsx(d,{threshold:t.threshold,leftActions:t.leftActions,rightActions:t.rightActions,children:e.jsx(l,{title:"Structural Preservation Note",description:"Review masonry inspection scheduling options for stone properties."})})]}),args:{...n.args}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    threshold: 80,
    leftActions: [{
      label: 'Archive',
      icon: <Archive className="size-5 text-primary-foreground" />,
      color: 'var(--color-primary)',
      onClick: fn()
    }],
    rightActions: [{
      label: 'Delete',
      icon: <Trash2 className="size-5 text-danger-foreground" />,
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
    if (swipeableElement) {
      fireEvent.mouseDown(swipeableElement, {
        clientX: 100
      });
      fireEvent.mouseMove(swipeableElement, {
        clientX: 150
      });
      fireEvent.mouseUp(swipeableElement);
    }
    expect(leftAction.onClick).not.toHaveBeenCalled();

    // --- Test Case 2: Swipe Right past threshold (Triggers Left Action) ---
    if (swipeableElement) {
      fireEvent.mouseDown(swipeableElement, {
        clientX: 100
      });
      fireEvent.mouseMove(swipeableElement, {
        clientX: 220
      });
      fireEvent.mouseUp(swipeableElement);
    }
    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...n.parameters?.docs?.source},description:{story:"Standard setup containing typical transactional choices (Archive on swipe-right, Delete on swipe-left).",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    threshold: 60,
    leftActions: [{
      label: 'Complete',
      icon: <Check className="size-5 text-success-foreground" />,
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
    if (row) {
      fireEvent.mouseDown(row, {
        clientX: 100
      });
      fireEvent.mouseMove(row, {
        clientX: 170
      });
      fireEvent.mouseUp(row);
    }
    const leftAction = args.leftActions?.[0];
    if (!leftAction) {
      throw new Error('This SwipeableRow story requires configured left actions for interaction tests.');
    }
    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  }
}`,...a.parameters?.docs?.source},description:{story:"Demonstrates a confirmation workflow style layout (e.g., ticking off an educational checklist tracking node).",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Full structural wrapper showing how multiple rows stack and behave together inside an interactive list container view.",...c.parameters?.docs?.description}}};const R=["Default","SuccessAction","StackingListContext"];export{n as Default,c as StackingListContext,a as SuccessAction,R as __namedExportsOrder,N as default};
