import{u,r as s,s as p,c as x,j as r,b as e,L as l,d as f,e as _}from"./main-147692d0.js";const S=()=>{const n=u();s.useEffect(()=>{n(p("Setting"))});const[d,c]=s.useState([]),[o,i]=s.useState(!1),{hasPermission:g,isLoading:b,isLoggedIn:v}=x(),h=new _,m=async()=>{i(!0);const t=await h.fetchDataSetting();i(!1),t.status&&c(t.data.data)};return s.useEffect(()=>{m()},[]),r("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:e("li",{children:e(l,{to:"/setting/list",className:"text-primary hover:underline",children:"Setting"})})}),e("div",{className:"pt-5",children:!g("read-setting-group")||o?e(f,{}):e("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 mb-6 text-white",children:d.map(t=>e("div",{className:"h-full flex-wrap w-full justify-center mb-5 ",children:r("div",{className:"h-full border border-gray-500/20 rounded-md shadow-[rgb(31_45_61_/_10%)_0px_2px_10px_1px] dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 pt-12 mt-8 relative",children:[e("div",{className:"bg-primary absolute text-white-light ltr:left-6 rtl:right-6 -top-8 w-16 h-16 rounded-md flex items-center justify-center mb-5 mx-auto",children:e("div",{dangerouslySetInnerHTML:{__html:t.icon}})}),e("h5",{className:"text-dark text-lg font-semibold mb-3.5  dark:text-white-light",children:t.label}),t.items.map(a=>e("div",{className:"text-black  hover:underline",id:"general_accountInfo",migrationid:"","data-permission":"true","data-cid":"permission",children:e(l,{to:`/${a.uri}`,children:a.label})},a.id))]})},t.id))})})]})};export{S as default};
