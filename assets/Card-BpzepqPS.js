import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-Bj9APFbg.js";import{H as u}from"./Heading-XkaBiMmO.js";import{a as t,b}from"./index-hok_722F.js";const s=({children:e,className:a="",...m})=>{const c=t(e,"Card.Header"),p=t(e,"Card.Footer"),d=t(e,"Card.Body"),o=b(e,["Card.Header","Card.Footer"]);return r.jsxs("div",{className:`
        ${a} 
        /* 1. Use Semantic Theme Variables */
        bg-surface-panel dark:bg-surface-panel-dark
        text-text-primary dark:text-text-primary-dark
        border border-border dark:border-border-dark
        
        /* 2. Visual Polish */
        rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md
        
        /* 3. Responsive Width Logic */
        w-full mx-auto
        sm:max-w-md    /* Tablet/Small screen */
        lg:max-w-2xl   /* Large screen (wider) */
        xl:max-w-4xl   /* Ultra wide screens */
      `,...m,children:[c,d&&d.length>0?d:o&&o.length>0&&r.jsx(l,{children:o}),p]})},n=({title:e,children:a})=>r.jsx(u,{title:e,variant:"card",children:a});n.displayName="Card.Header";s.Header=n;const l=({children:e,className:a=""})=>r.jsx("div",{className:`p-4 sm:p-6 space-y-4 ${a}`,children:e});l.displayName="Card.Body";s.Body=l;const i=({children:e,className:a=""})=>r.jsx("div",{className:`p-4 sm:p-6 border-t border-border dark:border-border-dark bg-surface-base/50 dark:bg-surface-base-dark/50 ${a}`,children:e});i.displayName="Card.Footer";s.Footer=i;s.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ title, children }",optional:!1,type:null}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className = '' }: { children: ReactNode; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode; className?: string }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className = '' }: { children: ReactNode; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ children: ReactNode; className?: string }",signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null}],displayName:"Card",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{s as C};
