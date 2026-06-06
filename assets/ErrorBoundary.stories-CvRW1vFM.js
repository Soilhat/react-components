import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as y,r as p}from"./iframe-DObK1DMn.js";import{C as n}from"./Card-DZrwVEVT.js";import{B as t}from"./Button-BtK1OYc1.js";import{H as E}from"./Heading-Cv8qBTuR.js";import{T as m}from"./Text-C005xpyg.js";import"./preload-helper-PPVm8Dsz.js";class d extends y.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,a){this.props.onError?.(r,a),this.setState({errorInfo:a})}resetError=()=>{this.props.onReset?.(),this.setState({hasError:!1,error:null,errorInfo:null})};render(){const{hasError:r,error:a,errorInfo:u}=this.state,{children:x,fallback:c,fullPage:b=!0,supportEmail:f}=this.props;if(r){if(typeof c=="function")return c(a,this.resetError);if(c)return c;const v=!1,g=f?`mailto:${f}?subject=App Error Report&body=Error: ${a?.message}%0A%0AStack: ${u?.componentStack?.slice(0,500)}`:null;return e.jsx("div",{className:`flex items-center justify-center p-5 ${b?"min-h-screen bg-linear-to-br from-primary/30 to-secondary/30":"w-full py-10"}`,children:e.jsxs(n,{className:"max-w-xl w-full",children:[e.jsx(n.Header,{children:e.jsx(n.Title,{children:"⚠️ Something Went Wrong"})}),e.jsx(n.Body,{children:e.jsxs("div",{className:"p-6",children:[e.jsx("p",{className:"mb-4 text-muted-foreground",children:"An unexpected error occurred. Please try again or return to the home page."}),g&&e.jsxs("p",{className:"mb-6 text-sm",children:["Need help?"," ",e.jsx("a",{href:g,className:"text-primary hover:underline font-bold",children:"Contact Support"})]}),v]})}),e.jsxs(n.Footer,{className:"flex gap-4",children:[e.jsx(t,{onClick:this.resetError,className:"flex-1",children:"Try Again"}),e.jsx(t,{onClick:()=>window.location.href="/",variant:"secondary",className:"flex-1",children:"Go Home"})]})]})})}return x}}d.__docgenInfo={description:"",methods:[{name:"resetError",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!1,tsType:{name:"union",raw:"ReactNode | ((error: Error, reset: () => void) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},fullPage:{required:!1,tsType:{name:"boolean"},description:""},supportEmail:{required:!1,tsType:{name:"string"},description:""}}};const B={title:"Feedback/ErrorBoundary",component:d,parameters:{layout:"fullscreen",docs:{description:{component:"A robust error handling wrapper for React component trees."}}},argTypes:{fullPage:{control:"boolean"},supportEmail:{control:"text"}}},h=({shouldCrash:s})=>{if(s)throw new Error("🚀 Simulation: The component has crashed!");return e.jsx("div",{className:"p-6 bg-success/10 border border-success/20 rounded-xl text-center",children:e.jsx(m,{className:"text-success font-bold",children:"Everything is running smoothly."})})},o={render:()=>{const[s,r]=p.useState(!1);return e.jsx(d,{onReset:()=>r(!1),supportEmail:"dev-team@example.com",children:e.jsxs("div",{className:"p-10 flex flex-col items-center gap-6",children:[e.jsx(E,{title:"Main Application Shell"}),e.jsx(h,{shouldCrash:s}),e.jsx(t,{variant:"danger",onClick:()=>r(!0),children:"Trigger Fatal Error"})]})})}},l={render:()=>{const[s,r]=p.useState(!1);return e.jsxs("div",{className:"p-8 space-y-8",children:[e.jsx("div",{className:"bg-card p-4 rounded-lg border border-border",children:e.jsx("h2",{className:"font-bold",children:"Global Navigation (Always Safe)"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{className:"font-bold uppercase text-xs",children:"Analytics Module"}),e.jsx(d,{fullPage:!1,onReset:()=>r(!1),children:e.jsxs("div",{className:"border-2 border-dashed border-border p-4 rounded-2xl",children:[e.jsx(h,{shouldCrash:s}),!s&&e.jsx(t,{className:"mt-4",onClick:()=>r(!0),children:"Crash Module"})]})})]}),e.jsx("div",{className:"p-4 rounded-2xl",children:e.jsx(m,{children:"Secondary content remains interactive even if the primary module crashes."})})]})]})}},i={render:()=>{const[s,r]=p.useState(!1);return e.jsx("div",{className:"p-10",children:e.jsx(d,{onReset:()=>r(!1),fallback:(a,u)=>e.jsxs("div",{className:"p-4 bg-danger text-danger-foreground rounded-lg flex justify-between items-center shadow-lg animate-pulse",children:[e.jsxs("span",{className:"font-mono text-sm",children:["Critical Error: ",a.message]}),e.jsx(t,{onClick:u,variant:"danger",children:"RETRY"})]}),children:e.jsxs("div",{className:"p-8 bg-card rounded-2xl shadow-xl border border-border",children:[e.jsx("h3",{className:"text-xl font-bold mb-4",children:"Stock Ticker Widget"}),e.jsx(h,{shouldCrash:s}),!s&&e.jsx(t,{variant:"ghost",className:"mt-4",onClick:()=>r(!0),children:"Simulate API Failure"})]})})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [hasError, setHasError] = useState(false);
    return <ErrorBoundary onReset={() => setHasError(false)} supportEmail="dev-team@example.com">
        <div className="p-10 flex flex-col items-center gap-6">
          <Heading title="Main Application Shell" />
          <Crasher shouldCrash={hasError} />
          <Button variant="danger" onClick={() => setHasError(true)}>
            Trigger Fatal Error
          </Button>
        </div>
      </ErrorBoundary>;
  }
}`,...o.parameters?.docs?.source},description:{story:`**Default Full Page Error**
* Use this at the top level of your \`App.tsx\` or main routing file.
It ensures that if a major crash happens, the user sees a branded recovery page
rather than a white screen.`,...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [crashLeft, setCrashLeft] = useState(false);
    return <div className="p-8 space-y-8">
        <div className="bg-card p-4 rounded-lg border border-border">
          <h2 className="font-bold">Global Navigation (Always Safe)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Text className="font-bold uppercase text-xs">Analytics Module</Text>
            <ErrorBoundary fullPage={false} onReset={() => setCrashLeft(false)}>
              <div className="border-2 border-dashed border-border p-4 rounded-2xl">
                <Crasher shouldCrash={crashLeft} />
                {!crashLeft && <Button className="mt-4" onClick={() => setCrashLeft(true)}>
                    Crash Module
                  </Button>}
              </div>
            </ErrorBoundary>
          </div>
          <div className="p-4 rounded-2xl">
            <Text>Secondary content remains interactive even if the primary module crashes.</Text>
          </div>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source},description:{story:`**Widget Level (Local) Crash**
* By setting \`fullPage={false}\`, the boundary only occupies the space of its container.
This is ideal for dashboards where you want one failing widget to stay isolated
without breaking the rest of the navigation or UI.`,...l.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isCrashed, setIsCrashed] = useState(false);
    return <div className="p-10">
        <ErrorBoundary onReset={() => setIsCrashed(false)} fallback={(error, reset) => <div className="p-4 bg-danger text-danger-foreground rounded-lg flex justify-between items-center shadow-lg animate-pulse">
              <span className="font-mono text-sm">Critical Error: {error.message}</span>
              <Button onClick={reset} variant="danger">
                RETRY
              </Button>
            </div>}>
          <div className="p-8 bg-card rounded-2xl shadow-xl border border-border">
            <h3 className="text-xl font-bold mb-4">Stock Ticker Widget</h3>
            <Crasher shouldCrash={isCrashed} />
            {!isCrashed && <Button variant="ghost" className="mt-4" onClick={() => setIsCrashed(true)}>
                Simulate API Failure
              </Button>}
          </div>
        </ErrorBoundary>
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"**Custom Fallback UI**\n* If the default Card UI doesn't fit your design, use the `fallback` prop.\nYou can provide a custom component or a function that receives the `error` and `reset` trigger.",...i.parameters?.docs?.description}}};const R=["FullPageCrash","WidgetCrash","CustomFallback"];export{i as CustomFallback,o as FullPageCrash,l as WidgetCrash,R as __namedExportsOrder,B as default};
