import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-BFbzuqoR.js";import{B as g}from"./Button-KiRdRT1U.js";import{I as i}from"./Input-CAzOEaXD.js";import{F as x}from"./Form-CWTWv8LM.js";import{C as y}from"./Card-YphZEPaT.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-DRsD5iMS.js";import"./index-ClbDeghZ.js";function m({onSubmit:n}){const[t,a]=u.useState({username:" ",password:" "}),l=s=>{s.preventDefault(),n?n(t):console.log(t)},o=s=>{const{name:p,value:c}=s.target;a(d=>({...d,[p]:c}))};return e.jsxs(y,{className:"max-w-sm",children:[e.jsx("h2",{className:"text-secondary-700 dark:text-primary-300 text-2xl font-bold text-center mb-6",children:"Hello"}),e.jsxs(x,{id:"loginForm",onSubmit:l,children:[e.jsx(i,{name:"username",type:"string",label:"Username",placeholder:"Username",autoComplete:"off",size:"md",variant:"outline",onChange:o}),e.jsx(i,{type:"password",id:"password",name:"password",placeholder:"••••••••",label:"Password",size:"md",variant:"outline",onChange:o}),e.jsx(g,{type:"submit",children:"Login"})]}),e.jsx("p",{className:"text-center text-sm",children:e.jsx("a",{className:"text-accent/100 dark:text-accent/100 hover:underline",href:"/auth/register",children:"Create Account"})})]})}m.__docgenInfo={description:"",methods:[],displayName:"Login",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(login: loginInfo) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  username: string;
  password: string;
}`,signature:{properties:[{key:"username",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!0}}]}},name:"login"}],return:{name:"void"}}},description:""}}};const{fn:w,expect:f}=__STORYBOOK_MODULE_TEST__,E={title:"Pages/Login",component:m,parameters:{layout:"centered"},args:{onSubmit:w()}},r={play:async({args:n,canvas:t,userEvent:a})=>{await a.type(t.getByLabelText("Username"),"email@provider.com"),await a.type(t.getByLabelText("Password"),"a-random-password"),await a.click(t.getByRole("button",{name:"Login"})),await f(n.onSubmit).toHaveBeenCalled()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas,
    userEvent
  }) => {
    await userEvent.type(canvas.getByLabelText('Username'), 'email@provider.com');
    await userEvent.type(canvas.getByLabelText('Password'), 'a-random-password');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Login'
    }));

    // 👇 Now we can assert that the onSubmit arg was called
    await expect(args.onSubmit).toHaveBeenCalled();
  }
}`,...r.parameters?.docs?.source}}};const T=["Login"];export{r as Login,T as __namedExportsOrder,E as default};
