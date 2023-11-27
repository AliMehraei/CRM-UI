import{r as b,d as g,j as e,F as h,b as t,u as E,J as y,ax as f,a as j,S as C,ad as O,K as A}from"./main-0b302a62.js";import{A as F}from"./index-ad146f50.js";const T=()=>{const[i,n]=b.useState("0"),r=g(a=>a.formErrors),c=a=>{n(s=>s===a?"":a)};return r.hasError?e("div",{className:"mb-5",children:e("div",{className:"space-y-2 font-semibold",children:t("div",{className:"border border-danger rounded dark:border-danger",children:[t("button",{type:"button",className:"p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] !text-danger",onClick:()=>c("1"),children:[r.titleMessage??"You have error on submitting form ,Click here to show",e("div",{className:"ltr:ml-auto rtl:mr-auto rotate-180"})]}),e("div",{children:e(F,{duration:700,height:i==="1"?"auto":0,children:e("div",{className:"space-y-2 p-4 text-white-dark text-[13px] border-t border-danger dark:border-danger",children:Object.entries(r).filter(([a])=>a!=="hasError").map(([a,s])=>e("div",{className:"flex items-center p-3.5 rounded text-danger bg-danger-light dark:bg-danger-dark-light",children:t("span",{className:"ltr:pr-2 rtl:pl-2",children:[t(h,{children:[" ",s," "]}),"."]})},a))})})})]})})}):e(h,{})},R=({formState:i,resetForm:n,disabled:r=!1})=>{const c=E(),a=g(d=>d.themeConfig),s=y(),o=new j,u=async(d="save")=>{c(f());const m=C.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:5e3}),v=await O(i.api);try{const l=await v.call(o,i);if(l.isOk){if(i.action==="create"&&c(n()),m.fire({icon:"success",timer:2e3,title:"Form submitted successfully",padding:"10px 20px"}),d==="save"){const p=i.redirectTo.replace(":id",`${l.data.data.id}`);s(p,{replace:!0})}else if(i.action!=="create"){const p=i.createRoute;s(p,{replace:!0})}}else if(l.status===422){const p=l.data.data,N={hasError:!0,...Object.fromEntries(Object.entries(p).map(([k,w])=>[k,w[0]]))};c(A(N)),m.fire({icon:"error",html:`<h5>Form Validation Error</h5>
                        <span style="font-size: 12px">Please Check fields</span>
                        `,padding:"10px 20px"})}else l.status===400?m.fire({icon:"error",title:l.data.message,padding:"10px 20px"}):m.fire({icon:"error",title:"Internal Server Error ,submitting form failed",padding:"10px 20px"})}catch(l){console.error(l),m.fire({icon:"error",title:"Internal Server Error ,submitting form failed",padding:"10px 20px"})}},x=()=>{const d=location.pathname.replace("/add","/list");i.action=="edit"?s(-1):s(d,{replace:!0})};return b.useEffect(()=>{c(f())},[]),t(h,{children:[e("div",{className:" sticky top-0 z-10 px-0 flex-1 py-2 ltr:xl:mr-6 rtl:xl:ml-6 px-10",children:e("div",{className:" ",children:t("div",{className:"flex justify-between items-center mb-6",children:[e("div",{className:"flex items-center",children:t("span",{className:"text-xl font-bold",children:[a.pageTitle," : "]})}),t("div",{className:"flex items-center gap-2",children:[e("button",{onClick:x,className:"btn btn-danger gap-2",children:"Back"}),e("button",{disabled:r,onClick:()=>u("new"),className:"btn btn-primary gap-2",children:"Save and new"}),e("button",{disabled:r,onClick:()=>u("save"),className:"btn btn-success gap-2",children:"Save"})]})]})})}),e("div",{className:"",children:e("div",{className:"item-center",children:e(T,{})})})]})},P=()=>e("span",{className:"text-red-500",children:" *"}),S=({fields:i})=>{const n=g(r=>r.formErrors);return e(h,{children:Object.entries(i).map(([r,c],a)=>e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:t("div",{className:"",children:[e("div",{className:"text-lg",children:r?`${r}:`:e("div",{className:"mt-10"})}),Object.entries(c).map(([s,o])=>e("div",{className:Object.keys(n).length>1&&n[o.props.name]?"mt-4 items-center has-error":"mt-4 items-center",children:t("div",{className:"flex",children:[t("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2",children:[s,o.props.required&&e(P,{})]},s),t("div",{className:"w-full",children:[o,Object.keys(n).length>1&&n[o.props.name]&&t("div",{className:"text-danger mt-1",children:[" ",n[o.props.name]]})]})]})},s))]},r)},`${r}_${a}`))})};export{R as A,S as G,P as R};
