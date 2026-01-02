import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-CK3y_YTs.js";import{C as g}from"./Card-BdVakoY0.js";import{F as x}from"./Form-sRZxG9is.js";import{I as i}from"./Input-Cji2MrZR.js";import{B as y}from"./Button-1zoXEist.js";import"./preload-helper-PPVm8Dsz.js";import"./Heading-XkaBiMmO.js";import"./index-CLhN-sY5.js";function m({onSubmit:t}){const[a,n]=c.useState({username:void 0,password:void 0}),d=s=>{s.preventDefault(),t?t(a):console.log(a)},o=s=>{const{name:l,value:p}=s.target;n(u=>({...u,[l]:p}))};return e.jsxs(g,{className:"max-w-sm",children:[e.jsx("h2",{className:"text-primary dark:text-primary-dark text-2xl font-bold text-center mb-6",children:"Hello"}),e.jsxs(x,{id:"loginForm",onSubmit:d,children:[e.jsx(i,{name:"username",type:"string",label:"Username",placeholder:"Username",autoComplete:"off",size:"md",variant:"outline",onChange:o}),e.jsx(i,{type:"password",id:"password",name:"password",placeholder:"••••••••",label:"Password",size:"md",variant:"outline",onChange:o}),e.jsx(y,{type:"submit",children:"Login"})]}),e.jsx("p",{className:"text-center text-sm",children:e.jsx("a",{className:"text-primary dark:text-primary-dark hover:underline",href:"/auth/register",children:"Create Account"})})]})}m.__docgenInfo={description:"",methods:[],displayName:"Login",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(login: loginInfo) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  username: string | undefined;
  password: string | undefined;
}`,signature:{properties:[{key:"username",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"password",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}},name:"login"}],return:{name:"void"}}},description:""}}};const{fn:w,expect:f}=__STORYBOOK_MODULE_TEST__,C={title:"Pages/Login",component:m,parameters:{layout:"centered"},args:{onSubmit:w()}},r={play:async({args:t,canvas:a,userEvent:n})=>{await n.type(a.getByLabelText("Username"),"email@provider.com"),await n.type(a.getByLabelText("Password"),"a-random-password"),await n.click(a.getByRole("button",{name:"Login"})),await f(t.onSubmit).toHaveBeenCalled()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const E=["Login"];export{r as Login,E as __namedExportsOrder,C as default};
