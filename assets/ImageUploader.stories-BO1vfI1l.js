import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-BUqkNVfX.js";import{C as p}from"./Card-CQdNgOod.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-XkaBiMmO.js";import"./index-CNQAKSpY.js";function h({title:a,titleId:r,...s},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),a?n.createElement("title",{id:r},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"}))}const y=n.forwardRef(h);function w({title:a,titleId:r,...s},t){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},s),a?n.createElement("title",{id:r},a):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"}))}const b=n.forwardRef(w),m=({initialImageUrl:a,placeholderImageUrl:r,uploadImage:s,isUploading:t=!1})=>{const[l,d]=n.useState(a||r),o=n.useRef(null),u=()=>{t||o.current?.click()},f=n.useCallback(g=>{const c=g.target.files?.[0];if(c){const x=URL.createObjectURL(c);d(x),s(c),o.current&&(o.current.value="")}},[s]);return n.useEffect(()=>{d(a||r)},[a,r]),e.jsxs("div",{className:"w-full max-w-sm mx-auto",children:[e.jsx(p,{className:`
          group relative overflow-hidden transition-all duration-300
          ${t?"cursor-not-allowed":"cursor-pointer hover:border-primary dark:hover:border-primary-dark"}
          /* Using border variable and adding a dashed effect for UX */
          border-2 border-dashed border-border dark:border-border-dark
          focus-within:ring-2 focus-within:ring-state-focus
        `,onClick:u,children:e.jsxs(p.Body,{className:"p-0 sm:p-0 flex flex-col items-center justify-center min-h-64 bg-surface-base/30 dark:bg-surface-base-dark/30",children:[e.jsx("img",{src:l,alt:"Upload preview",className:`
              w-full h-64 object-cover transition-all duration-500
              ${t?"opacity-30 blur-[2px] scale-95":"opacity-100 scale-100"}
            `}),e.jsx("div",{className:`
            absolute inset-0 flex flex-col items-center justify-center transition-all duration-300
            ${t?"bg-surface-panel/40 dark:bg-surface-panel-dark/40 opacity-100":"bg-primary/10 dark:bg-primary-dark/10 opacity-0 group-hover:opacity-100"}
          `,children:t?e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(y,{className:"h-10 w-10 animate-spin text-primary dark:text-primary-dark"}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark",children:"Uploading..."})]}):e.jsxs("div",{className:"flex flex-col items-center gap-2 scale-90 group-hover:scale-100 transition-transform",children:[e.jsx("div",{className:"p-4 rounded-full bg-surface-panel dark:bg-surface-panel-dark shadow-xl text-primary dark:text-primary-dark",children:e.jsx(b,{className:"h-6 w-6"})}),e.jsx("span",{className:"bg-primary text-text-on-primary px-3 py-1 rounded-full text-xs font-bold shadow-lg",children:"Change Image"})]})})]})}),e.jsx("input",{type:"file",ref:o,onChange:f,className:"sr-only",accept:"image/*",disabled:t,"data-testid":"inputImageUploader"}),e.jsx("p",{className:"mt-2 text-center text-xs text-text-secondary dark:text-text-secondary-dark",children:"JPG, PNG or GIF. Max 5MB."})]})};m.__docgenInfo={description:"",methods:[],displayName:"ImageUploader",props:{initialImageUrl:{required:!1,tsType:{name:"string"},description:""},placeholderImageUrl:{required:!0,tsType:{name:"string"},description:""},uploadImage:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => unknown",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"unknown"}}},description:""},isUploading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:k}=__STORYBOOK_MODULE_TEST__,T={title:"Forms/ImageUploader",component:m,parameters:{layout:"centered"}},i={args:{placeholderImageUrl:"https://images.unsplash.com/photo-1544724759-e2e242adb0db",uploadImage:k(async a=>(await new Promise(r=>setTimeout(r,2e3)),a.name))},play:async({args:a,canvas:r,userEvent:s})=>{const t=new File(["(⌐□_□)"],"cool-image.png",{type:"image/png"}),l=r.getByTestId("inputImageUploader");await s.upload(l,t),await a.uploadImage}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholderImageUrl: 'https://images.unsplash.com/photo-1544724759-e2e242adb0db',
    uploadImage: fn(async (file: File) => {
      // Simulate an upload delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Return a mock URL for the uploaded image
      return file.name;
    })
  },
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    // Simulate user uploading an image
    const file = new File(['(⌐□_□)'], 'cool-image.png', {
      type: 'image/png'
    });
    const input = canvas.getByTestId('inputImageUploader') as HTMLInputElement;
    await userEvent.upload(input, file);
    // Wait for the uploadImage function to be called
    await args.uploadImage;
  }
}`,...i.parameters?.docs?.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,T as default};
