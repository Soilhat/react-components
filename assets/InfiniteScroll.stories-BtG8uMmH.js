import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-tfuTwO3R.js";import"./preload-helper-PPVm8Dsz.js";function m({onReachBottom:e,hasMore:o,loading:t}){const s=n.useRef(null);return n.useEffect(()=>{const a=new IntersectionObserver(l=>{l[0].isIntersecting&&o&&!t&&e()},{threshold:1});return s.current&&a.observe(s.current),()=>a.disconnect()},[o,t,e]),r.jsx("div",{ref:s,className:"h-10 w-full flex items-center justify-center",children:t&&r.jsx("span",{className:"text-sm text-text-secondary animate-pulse",children:"Loading more..."})})}m.__docgenInfo={description:"",methods:[],displayName:"InfiniteScroll",props:{onReachBottom:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasMore:{required:!0,tsType:{name:"boolean"},description:""},loading:{required:!0,tsType:{name:"boolean"},description:""}}};const c=(e,o)=>Array.from({length:o},(t,s)=>`Item #${e+s+1}`),x={title:"Navigation/InfiniteScroll",component:m,parameters:{layout:"fullscreen"}},d={render:()=>{const[e,o]=n.useState(c(0,20)),[t,s]=n.useState(!1),[a,l]=n.useState(!0),u=n.useCallback(()=>{t||!a||(s(!0),setTimeout(()=>{o(i=>[...i,...c(i.length,10)]),s(!1),e.length>=50&&l(!1)},1500))},[t,a,e.length]);return r.jsxs("div",{className:"p-4 max-w-md mx-auto",children:[r.jsx("h1",{className:"text-xl font-bold mb-4",children:"Infinite Scroll Demo"}),r.jsx("div",{className:"space-y-2 mb-4",children:e.map((i,p)=>r.jsx("div",{className:"p-4 bg-white dark:bg-gray-800 border border-border rounded shadow-sm",children:i},p))}),r.jsx(m,{onReachBottom:u,hasMore:a,loading:t}),!a&&r.jsx("p",{className:"text-center text-text-secondary text-sm mt-4",children:"— You've reached the end —"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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

        // Stop after 50 items for demonstration
        if (items.length >= 50) {
          setHasMore(false);
        }
      }, 1500);
    }, [loading, hasMore, items.length]);
    return <div className="p-4 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Infinite Scroll Demo</h1>
        <div className="space-y-2 mb-4">
          {items.map((item, index) => <div key={index} className="p-4 bg-white dark:bg-gray-800 border border-border rounded shadow-sm">
              {item}
            </div>)}
        </div>

        <InfiniteScroll onReachBottom={loadMore} hasMore={hasMore} loading={loading} />

        {!hasMore && <p className="text-center text-text-secondary text-sm mt-4">— You've reached the end —</p>}
      </div>;
  }
}`,...d.parameters?.docs?.source}}};const b=["Default"];export{d as Default,b as __namedExportsOrder,x as default};
