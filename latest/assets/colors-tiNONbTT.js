import{j as e}from"./jsx-runtime-u17CrQMm.js";import{u as a,M as c,C as n,a as t}from"./blocks-Cf-nIUh6.js";import"./preload-helper-Bni5rfja.js";import"./iframe-DHZ9nfwl.js";import"./index-Czj4uKgd.js";import"./index-BLrqDxjI.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Design System/Colors"}),`
`,e.jsx(r.h1,{id:"color-palette-architecture",children:"Color Palette Architecture"}),`
`,`
`,e.jsxs("div",{className:"bg-background text-foreground p-6 rounded-xl border border-border transition-colors duration-200",children:[e.jsx(r.h2,{id:"architectural-layout-surfaces",children:"Architectural Layout Surfaces"}),e.jsx(r.p,{children:"These tokens manage the layout structure blocks and global text content containers."}),e.jsxs(n,{children:[e.jsx(t,{title:"Global Canvas",subtitle:"background & foreground",colors:{"bg-background":"var(--color-background)","text-foreground":"var(--color-foreground)"}}),e.jsx(t,{title:"Panel Surface Assets",subtitle:"card & popover structures",colors:{"bg-card":"var(--color-card)","bg-popover":"var(--color-popover)"}})]}),e.jsx(r.h2,{id:"brand-layer-contexts",children:"Brand Layer Contexts"}),e.jsx(r.p,{children:"These tokens define interactive states and actionable visual weights."}),e.jsx(n,{children:e.jsx(t,{title:"Primary Branding",subtitle:"Deep Blue Accent Group",colors:{"bg-primary":"var(--color-primary)",hover:"var(--color-primary-hover)",text:"var(--color-primary-foreground)"}})})]}),`
`,e.jsxs(r.p,{children:["Our system uses a dual-layer theme structure mapped to semantic tokens via ",e.jsx(r.strong,{children:"HSL Channels"}),". This ensures consistent theme variations across personal and professional environments without modifying individual component style layers."]}),`
`,e.jsx(r.hr,{}),`
`,e.jsx(r.h3,{id:"core-architectural-layout-surfaces",children:"Core Architectural Layout Surfaces"}),`
`,e.jsx(r.p,{children:"These tokens manage the layout structure blocks and global text content containers."}),`
`,e.jsxs(n,{children:[e.jsx(t,{title:"Global Canvas",subtitle:"background & foreground",colors:{"bg-background":"var(--color-background)","text-foreground":"var(--color-foreground)"}}),e.jsx(t,{title:"Panel Surface Assets",subtitle:"card & popover structures",colors:{"bg-card":"var(--color-card)","bg-popover":"var(--color-popover)"}})]}),`
`,e.jsx(r.h3,{id:"brand-layer-contexts-1",children:"Brand Layer Contexts"}),`
`,e.jsx(r.p,{children:"These tokens define interactive states and actionable visual weights."}),`
`,e.jsxs(n,{children:[e.jsx(t,{title:"Primary Branding",subtitle:"Deep Blue Accent Group",colors:{"bg-primary":"var(--color-primary)",hover:"var(--color-primary-hover)",text:"var(--color-primary-foreground)"}}),e.jsx(t,{title:"Secondary Branding",subtitle:"Lime Green Accent Group",colors:{"bg-secondary":"var(--color-secondary)",hover:"var(--color-secondary-hover)",text:"var(--color-secondary-foreground)"}})]}),`
`,e.jsx(r.h3,{id:"structural-utility-states",children:"Structural Utility States"}),`
`,e.jsx(r.p,{children:"Use these tokens for secondary content blocks, interactive tables, overlays, or selection contexts."}),`
`,e.jsxs(n,{children:[e.jsx(t,{title:"Muted Actions",subtitle:"Subdued layouts and subtle context labels",colors:{"bg-muted":"var(--color-muted)","text-muted":"var(--color-muted-foreground)"}}),e.jsx(t,{title:"Accent Highlights",subtitle:"Dropdown row hovers and selection matrices",colors:{"bg-accent":"var(--color-accent)","text-accent":"var(--color-accent-foreground)"}})]}),`
`,e.jsx(r.h3,{id:"system-boundaries",children:"System Boundaries"}),`
`,e.jsx(r.p,{children:"Feedback layout rules for error checking and confirmation states."}),`
`,e.jsxs(n,{children:[e.jsx(t,{title:"Success Feedback",subtitle:"success",colors:{"state-success":"var(--color-success)"}}),e.jsx(t,{title:"Warning Flag",subtitle:"warning",colors:{"state-warning":"var(--color-warning)"}}),e.jsx(t,{title:"Danger Action",subtitle:"danger",colors:{"state-danger":"var(--color-danger)"}})]}),`
`,e.jsx(r.h2,{id:"developer-usage-guide",children:"Developer Usage Guide"}),`
`,e.jsxs(r.p,{children:["When building or contributing a new component to ",e.jsx(r.code,{children:"@soilhat/react-components"}),", ",e.jsxs(r.strong,{children:["never write raw primitives or explicit ",e.jsx(r.code,{children:"dark:"})," sub-variants"]})," unless handling highly specialized custom visualizations."]}),`
`,e.jsx(r.h3,{id:"-what-not-to-do",children:"❌ What NOT to do"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`// This creates technical debt and prevents automated variable swapping across environments
<div className="bg-white dark:bg-[#161b22] border-gray-300 dark:border-gray-700">
  <p className="text-[#0d1117] dark:text-[#f0f2f5]">Content Block</p>
</div>
`})}),`
`,e.jsx(r.p,{children:"🎯 The Correct Approach"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-TypeScript",children:`// The semantic engine handles the dark mode variation transition seamlessly under the hood!
<div className="bg-card border border-border p-4 rounded-xl">
  <p className="text-foreground text-sm">Content Block</p>
  <p className="text-muted-foreground text-xs">Secondary metadata context indicator</p>
</div>
`})})]})}function g(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{g as default};
