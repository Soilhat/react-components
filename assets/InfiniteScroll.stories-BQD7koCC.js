import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BG6SSSvD.js";import"./preload-helper-PPVm8Dsz.js";function l({onReachBottom:e,hasMore:a,loading:t}){const s=n.useRef(null);return n.useEffect(()=>{const o=new IntersectionObserver(m=>{m[0].isIntersecting&&a&&!t&&e()},{threshold:1});return s.current&&o.observe(s.current),()=>o.disconnect()},[a,t,e]),r.jsx("div",{ref:s,className:"h-10 w-full flex items-center justify-center",children:t&&r.jsx("span",{className:"text-sm text-muted-foreground animate-pulse",children:"Loading more..."})})}l.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{onReachBottom:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasMore:{required:!0,tsType:{name:"boolean"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};const c=(e,a)=>Array.from({length:a},(t,s)=>`Item #${e+s+1}`),x={title:"Navigation/InfiniteScroll",component:l,parameters:{layout:"fullscreen"}},d={render:()=>{const[e,a]=n.useState(c(0,20)),[t,s]=n.useState(!1),[o,m]=n.useState(!0),u=n.useCallback(()=>{t||!o||(s(!0),setTimeout(()=>{a(i=>[...i,...c(i.length,10)]),s(!1),e.length>=30&&m(!1)},1500))},[t,o,e.length]);return r.jsxs("div",{className:"p-4 max-w-md mx-auto",children:[r.jsx("h1",{className:"text-xl font-bold mb-4",children:"Infinite Scroll Demo"}),r.jsx("div",{className:"space-y-2 mb-4",children:e.map((i,f)=>r.jsx("div",{className:"p-4 bg-card border border-border rounded shadow-sm",children:i},f))}),r.jsx(l,{onReachBottom:u,hasMore:o,loading:t}),!o&&r.jsx("p",{className:"text-center text-muted-foreground text-sm mt-4",children:"— You've reached the end —"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<string[]>(generateItems(0, 20));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = useCallback(() => {
      if (loading || !hasMore) return;
      setLoading(true);

      // Simulate API latency
      setTimeout(() => {
        setItems(prev => [...prev, ...generateItems(prev.length, 10)]);
        setLoading(false);

        // Stop after 30 items for demonstration
        if (items.length >= 30) {
          setHasMore(false);
        }
      }, 1500);
    }, [loading, hasMore, items.length]);
    return <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Infinite Scroll Demo</h1>
        <div className="space-y-2 mb-4">
          {items.map((item, index) => <div key={index} className="p-4 bg-card border border-border rounded shadow-sm">
              {item}
            </div>)}
        </div>

        <InfiniteScroll onReachBottom={loadMore} hasMore={hasMore} loading={loading} />

        {!hasMore && <p className="text-center text-muted-foreground text-sm mt-4">— You've reached the end —</p>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const b=["Default"];export{d as Default,b as __namedExportsOrder,x as default};
