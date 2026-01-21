import{T as o}from"./Toast-CdPsWRuD.js";const a={title:"Feedback/Toast",component:o,parameters:{layout:"centered"},args:{message:"This is a toast message!",onClose:()=>alert("Toast closed!")}},e={args:{type:"success",message:"Operation successful!"}},s={args:{type:"error",message:"Something went wrong!"}},r={args:{type:"info",message:"Here is some information."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'success',
    message: 'Operation successful!'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: 'Something went wrong!'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    message: 'Here is some information.'
  }
}`,...r.parameters?.docs?.source}}};const t=["Success","ErrorToast","Info"],c=Object.freeze(Object.defineProperty({__proto__:null,ErrorToast:s,Info:r,Success:e,__namedExportsOrder:t,default:a},Symbol.toStringTag,{value:"Module"}));export{s as E,r as I,e as S,c as T};
