import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as j,r as g}from"./iframe-CkJjnvYH.js";import{C as c}from"./Card-BXkEZ1u-.js";import{B as o}from"./Button-OKByqS9U.js";import{H as E}from"./Heading-Cv8qBTuR.js";import{T as p}from"./Text-BMu0YGbW.js";import"./preload-helper-Bni5rfja.js";import"./createLucideIcon-DTRdMYHR.js";class l extends j.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,a){this.props.onError?.(t,a),this.setState({errorInfo:a})}handleReset=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null,errorInfo:null})};render(){const{hasError:t,error:a,errorInfo:s}=this.state,{children:v,fallback:d,fullPage:b=!0,supportEmail:f}=this.props;if(t){if(typeof d=="function")return d(a,this.handleReset);if(d)return d;const T=!1,B=f?`mailto:${f}?subject=App Error Report&body=Error: ${a?.message}%0A%0AStack: ${s?.componentStack?.slice(0,500)}`:null;return e.jsx("div",{className:`flex items-center justify-center p-5 ${b?"min-h-screen bg-linear-to-br from-primary/30 to-secondary/30":"w-full py-10"}`,children:e.jsxs(c,{className:"max-w-xl w-full",children:[e.jsx(c.Header,{children:e.jsx(c.Title,{children:"⚠️ Something Went Wrong"})}),e.jsx(c.Body,{children:e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"mb-4 text-muted-foreground",children:"An unexpected error occurred. Please try again or return to the home page."}),B&&e.jsxs("p",{className:"mb-6 text-sm",children:["Need help?"," ",e.jsx("a",{href:B,className:"text-primary hover:underline font-bold",children:"Contact Support"})]}),T]})}),e.jsxs(c.Footer,{className:"flex gap-4",children:[e.jsx(o,{onClick:this.handleReset,className:"flex-1",children:"Try Again"}),e.jsx(o,{onClick:()=>globalThis.location.href="/",variant:"secondary",className:"flex-1",children:"Go Home"})]})]})})}return v}}l.__docgenInfo={description:"",methods:[{name:"handleReset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!1,tsType:{name:"union",raw:"ReactNode | ((error: Error, reset: () => void) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fullPage:{required:!1,tsType:{name:"boolean"},description:""},supportEmail:{required:!1,tsType:{name:"string"},description:""}}};const{expect:n,userEvent:i,within:x}=__STORYBOOK_MODULE_TEST__,P={title:"Feedback/ErrorBoundary",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"A robust error handling wrapper for React component trees."}}},argTypes:{fullPage:{control:"boolean"},supportEmail:{control:"text"}}},y=({shouldCrash:r})=>{if(r)throw new Error("🚀 Simulation: The component has crashed!");return e.jsx("div",{className:"p-6 bg-success/10 border border-success/20 rounded-xl text-center",children:e.jsx(p,{className:"text-success font-bold","data-testid":"healthy-status",children:"Everything is running smoothly."})})},w=()=>{const[r,t]=g.useState(!1);return e.jsx(l,{onReset:()=>t(!1),supportEmail:"dev-team@example.com",children:e.jsxs("div",{className:"p-10 flex flex-col items-center gap-6",children:[e.jsx(E,{title:"Main Application Shell"}),e.jsx(y,{shouldCrash:r}),e.jsx(o,{variant:"danger",onClick:()=>t(!0),children:"Trigger Fatal Error"})]})})},m={render:()=>e.jsx(w,{}),play:async({canvasElement:r})=>{const t=x(r);await n(t.getByTestId("healthy-status")).toBeInTheDocument();const a=t.getByRole("button",{name:/trigger fatal error/i});await i.click(a),await n(t.getByText("⚠️ Something Went Wrong")).toBeInTheDocument();const s=t.getByRole("button",{name:/try again/i});await i.click(s),await n(t.getByTestId("healthy-status")).toBeInTheDocument()}},k=()=>{const[r,t]=g.useState(!1);return e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("div",{className:"bg-card p-4 rounded-lg border border-border",children:e.jsx("h2",{className:"font-bold",children:"Global Navigation (Always Safe)"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{className:"font-bold uppercase text-xs",children:"Analytics Module"}),e.jsx(l,{fullPage:!1,onReset:()=>t(!1),children:e.jsxs("div",{className:"border-2 border-dashed border-border p-4 rounded-2xl",children:[e.jsx(y,{shouldCrash:r}),!r&&e.jsx(o,{className:"mt-4",onClick:()=>t(!0),children:"Crash Module"})]})})]}),e.jsx("div",{className:"p-4 rounded-2xl",children:e.jsx(p,{"data-testid":"isolated-sibling",children:"Secondary content remains interactive even if the primary module crashes."})})]})]})},u={render:()=>e.jsx(k,{}),play:async({canvasElement:r})=>{const t=x(r),a=t.getByRole("button",{name:/crash module/i});await i.click(a),await n(t.getByText("⚠️ Something Went Wrong")).toBeInTheDocument(),await n(t.getByTestId("isolated-sibling")).toBeInTheDocument()}},C=()=>{const[r,t]=g.useState(!1);return e.jsx("div",{className:"p-10",children:e.jsx(l,{onReset:()=>t(!1),fallback:(a,s)=>e.jsxs("div",{className:"p-4 bg-danger text-danger-foreground rounded-lg flex justify-between items-center shadow-lg","data-testid":"custom-banner",children:[e.jsxs("span",{className:"font-mono text-sm",children:["Critical Error: ",a.message]}),e.jsx(o,{onClick:s,variant:"danger",children:"RETRY"})]}),children:e.jsxs("div",{className:"p-8 bg-card rounded-2xl shadow-xl border border-border",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Stock Ticker Widget"}),e.jsx(y,{shouldCrash:r}),!r&&e.jsx(o,{variant:"ghost",className:"mt-4",onClick:()=>t(!0),children:"Simulate API Failure"})]})})})},h={render:()=>e.jsx(C,{}),play:async({canvasElement:r})=>{const t=x(r),a=t.getByRole("button",{name:/simulate api failure/i});await i.click(a),await n(t.getByTestId("custom-banner")).toBeInTheDocument(),await n(t.getByText(/Critical Error:/)).toBeInTheDocument();const s=t.getByRole("button",{name:/retry/i});await i.click(s),await n(t.getByText("Stock Ticker Widget")).toBeInTheDocument()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <FullPageCrashStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('healthy-status')).toBeInTheDocument();
    const triggerBtn = canvas.getByRole('button', {
      name: /trigger fatal error/i
    });
    await userEvent.click(triggerBtn);
    await expect(canvas.getByText('⚠️ Something Went Wrong')).toBeInTheDocument();
    const tryAgainBtn = canvas.getByRole('button', {
      name: /try again/i
    });
    await userEvent.click(tryAgainBtn);
    await expect(canvas.getByTestId('healthy-status')).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <WidgetCrashStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const crashBtn = canvas.getByRole('button', {
      name: /crash module/i
    });
    await userEvent.click(crashBtn);
    await expect(canvas.getByText('⚠️ Something Went Wrong')).toBeInTheDocument();
    await expect(canvas.getByTestId('isolated-sibling')).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CustomFallbackStory />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const triggerBtn = canvas.getByRole('button', {
      name: /simulate api failure/i
    });
    await userEvent.click(triggerBtn);
    await expect(canvas.getByTestId('custom-banner')).toBeInTheDocument();
    await expect(canvas.getByText(/Critical Error:/)).toBeInTheDocument();
    const retryBtn = canvas.getByRole('button', {
      name: /retry/i
    });
    await userEvent.click(retryBtn);
    await expect(canvas.getByText('Stock Ticker Widget')).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};const _=["FullPageCrash","WidgetLevelCrash","CustomFallback"];export{h as CustomFallback,m as FullPageCrash,u as WidgetLevelCrash,_ as __namedExportsOrder,P as default};
