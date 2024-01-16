import{u as p,K as g,c as f,r as h,s as x,j as e,e as b,b as a,b0 as w,b1 as N,S as v,a as y}from"./main-38fe5343.js";const E=()=>{const c=new y,d=p(),l=g(),{isLoggedIn:r,isLoading:m}=f();h.useEffect(()=>{if(r){l("/");return}d(x("Login Cover"))},[r]);const u=async t=>{t.preventDefault();const i=t.target.email.value,n=t.target.password.value;try{const s=await c.login({email:i,password:n});s.data.isOk&&s.status===200?(w(s.data.token,"token"),N(s.data.user),l("/")):(o(`Login failed : ${s.data.message}`,"error"),console.error("Login failed:",s.data.message))}catch(s){console.error("Error during API call:",s),o("An error occurred. Please try again later.","error")}},o=(t="",i="success")=>{v.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:i,title:t,padding:"10px 20px"})};return m||r?e(b,{}):a("div",{className:"flex min-h-screen",children:[a("div",{className:"bg-gradient-to-t from-[#001F3F] to-[#3b82f6] w-1/2 min-h-screen hidden lg:flex flex-col items-center justify-center text-white dark:text-black p-4",children:[e("div",{className:"w-full mx-auto mb-5",children:e("img",{src:"/assets/images/sascrm-cover.png",alt:"SasCrm",className:"lg:max-w-[370px] xl:max-w-[400px] mx-auto"})}),e("h3",{className:"text-3xl font-bold mb-4 text-center",children:"Your Gateway to CRM Success."}),e("p",{children:"Streamline, Simplify, Succeed."})]}),e("div",{className:"w-full lg:w-1/2 relative flex justify-center items-center",children:a("div",{className:"max-w-[480px] p-5 md:p-10",children:[a("h2",{className:"font-bold text-3xl mb-3 text-center",children:[e("span",{className:"text-blue-500",children:"BLUE"}),e("span",{className:"text-[#001F3F]"})," CRM"]}),e("p",{className:"mb-7",children:"Enter your email and password to login"}),a("form",{className:"space-y-5",onSubmit:u,children:[a("div",{children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",className:"form-input",placeholder:"Enter Email"})]}),a("div",{children:[e("label",{htmlFor:"password",children:"Password"}),e("input",{id:"password",type:"password",className:"form-input",placeholder:"Enter Password"})]}),e("div",{}),e("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-blue-200 active:bg-blue-800",children:"SIGN IN"})]})]})})]})};export{E as default};
