import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-CkJjnvYH.js";import{C as d}from"./Card-BXkEZ1u-.js";import{c as m}from"./createLucideIcon-DTRdMYHR.js";import"./preload-helper-Bni5rfja.js";const y=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],w=m("rotate-cw",y);const b=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],v=m("upload",b),u=({initialImageUrl:t,placeholderImageUrl:r,uploadImage:n,isUploading:a=!1})=>{const[l,p]=o.useState(t||r),s=o.useRef(null),f=()=>{a||s.current?.click()},g=o.useCallback(h=>{const c=h.target.files?.[0];if(c){const x=URL.createObjectURL(c);p(x),n(c),s.current&&(s.current.value="")}},[n]);return o.useEffect(()=>{p(t||r)},[t,r]),e.jsxs("div",{className:"w-full max-w-sm mx-auto",children:[e.jsx(d,{className:`
          group relative overflow-hidden transition-all duration-300
          ${a?"cursor-not-allowed":"cursor-pointer hover:border-primary"}
          border-2 border-dashed border-border
          focus-within:ring-2 focus-within:ring-ring
        `,onClick:f,children:e.jsxs(d.Body,{className:"p-0 sm:p-0 flex flex-col items-center justify-center min-h-64 bg-background/30",children:[e.jsx("img",{src:l,alt:"Upload preview",className:`
              w-full h-64 object-cover transition-all duration-500
              ${a?"opacity-30 blur-[2px] scale-95":"opacity-100 scale-100"}
            `}),e.jsx("div",{className:`
            absolute inset-0 flex flex-col items-center justify-center transition-all duration-300
            ${a?"bg-card/40 opacity-100":"bg-primary/10 opacity-0 group-hover:opacity-100"}
          `,children:a?e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(w,{className:"h-10 w-10 animate-spin text-primary"}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-widest text-primary",children:"Uploading..."})]}):e.jsxs("div",{className:"flex flex-col items-center gap-2 scale-90 group-hover:scale-100 transition-transform",children:[e.jsx("div",{className:"p-4 rounded-full bg-card shadow-xl text-primary",children:e.jsx(v,{className:"h-6 w-6"})}),e.jsx("span",{className:"bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg",children:"Change Image"})]})})]})}),e.jsx("input",{type:"file",ref:s,onChange:g,className:"sr-only",accept:"image/*",disabled:a,"data-testid":"inputImageUploader"}),e.jsx("p",{className:"mt-2 text-center text-xs text-muted-foreground",children:"JPG, PNG or GIF. Max 5MB."})]})};u.__docgenInfo={description:"",methods:[],displayName:"ImageUploader",props:{initialImageUrl:{required:!1,tsType:{name:"string"},description:""},placeholderImageUrl:{required:!0,tsType:{name:"string"},description:""},uploadImage:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => unknown",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"unknown"}}},description:""},isUploading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:j}=__STORYBOOK_MODULE_TEST__,U={title:"Forms/ImageUploader",component:u,parameters:{layout:"centered"}},i={args:{placeholderImageUrl:"https://images.unsplash.com/photo-1544724759-e2e242adb0db",uploadImage:j(async t=>(await new Promise(r=>setTimeout(r,2e3)),t.name))},play:async({args:t,canvas:r,userEvent:n})=>{const a=new File(["(⌐□_□)"],"cool-image.png",{type:"image/png"}),l=r.getByTestId("inputImageUploader");await n.upload(l,a),await t.uploadImage}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,U as default};
