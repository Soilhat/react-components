import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-DxUM99tB.js";import{C as y}from"./Card-oYoazOIG.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-sworPYf4.js";import"./index-VMkfjaEo.js";const u=({initialImageUrl:e,placeholderImageUrl:a,uploadImage:s,isUploading:n=!1})=>{const[l,p]=o.useState(e||a),r=o.useRef(null),d=()=>{r.current?.click()},m=o.useCallback(g=>{const c=g.target.files?.[0];if(c){const f=URL.createObjectURL(c);p(f),s(c),r.current&&(r.current.value="")}},[s]);return o.useEffect(()=>{p(e||a)},[e,a]),t.jsxs("div",{className:"relative w-full max-w-sm mx-auto shadow-md rounded-lg overflow-hidden",children:[t.jsxs(y,{className:"cursor-pointer group relative",onClick:d,children:[t.jsx("img",{src:l,alt:"uploaded",className:`
            w-full h-64 object-contain mb-4 rounded-lg transition-opacity duration-300 
            ${n?"opacity-50 blur-sm":"opacity-100"}
          `}),t.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",children:n?t.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-white"}):t.jsx("span",{className:"text-white text-sm font-semibold p-2 border border-white rounded-full",children:"Upload"})})]}),t.jsx("input",{type:"file",ref:r,onChange:m,className:"hidden",accept:"image/*",disabled:n,"data-testid":"inputImageUploader"})]})};u.__docgenInfo={description:"",methods:[],displayName:"ImageUploader",props:{initialImageUrl:{required:!1,tsType:{name:"string"},description:""},placeholderImageUrl:{required:!0,tsType:{name:"string"},description:""},uploadImage:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => unknown",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"unknown"}}},description:""},isUploading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{fn:h}=__STORYBOOK_MODULE_TEST__,T={title:"Forms/ImageUploader",component:u,parameters:{layout:"centered"}},i={args:{placeholderImageUrl:"https://images.unsplash.com/photo-1544724759-e2e242adb0db",uploadImage:h(async e=>(await new Promise(a=>setTimeout(a,2e3)),e.name))},play:async({args:e,canvas:a,userEvent:s})=>{const n=new File(["(⌐□_□)"],"cool-image.png",{type:"image/png"}),l=a.getByTestId("inputImageUploader");await s.upload(l,n),await e.uploadImage}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const U=["Default"];export{i as Default,U as __namedExportsOrder,T as default};
