import{u as le,r as o,s as ce,a as _,b as t,j as a,L as I,D as ie,F as j,N as E}from"./main-fcf5e4ad.js";import{s as Q,Q as de}from"./sortBy-63434a00.js";import{S as he}from"./react-select.esm-cf3be803.js";import{S as M}from"./sweetalert2.all-b010eac4.js";import{a as ue}from"./react-select-async.esm-8b244106.js";import{r as me}from"./FilterValueFiled-72a9ce9f.js";import"./Select-aecb2a80.esm-5ec404e0.js";import"./_baseIsEqual-3dfbd0dd.js";const xe=()=>{const Z=le();o.useEffect(()=>{Z(ce("Account List"))});const[z,i]=o.useState(!1),[V,A]=o.useState(!1),k=new ue,Y=_(e=>e.themeConfig.theme)==="dark",[v,D]=o.useState([]),[x,q]=o.useState([]),[w,N]=o.useState([]),[R,W]=o.useState(""),[d,f]=o.useState([]),[p,C]=o.useState(1),S=[50,100],[h,G]=o.useState(S[0]),[y,P]=o.useState(Q(v,"id")),[J,O]=o.useState(y),[$,L]=o.useState([]),[U,K]=o.useState(0),[m,X]=o.useState({columnAccessor:"id",direction:"asc"}),ee=async()=>{i(!0);try{const s=(await k.filterOptionAccount()).data.data.map(r=>{const c=r.condition;return{...r,conditions:Object.entries(c).map(([n,l])=>({value:n,label:l.value,input:l.input,type:l.type,model:r.model}))}});q(s)}catch(e){b("Error fetching filter options.","error"),console.error("Error fetching data:",e)}i(!1)};o.useEffect(()=>{ee()},[]);const B=()=>{window.scrollTo({top:0,behavior:"smooth"})},te=()=>{A(!1),B(),F(p,h,d,m)};let T=[];x&&x.length>0&&(T=x.filter(e=>e.label.toLowerCase().includes(R.toLowerCase())));const b=(e="",s="success")=>{M.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:e,padding:"10px 20px"})},H=(e=null)=>{M.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(s=>{if(s.value){const r=async c=>{try{i(!0),k.deleteSingleAccount(c).then(n=>{const l=n.data;if(l.status){const g=v.filter(u=>u.id!==c);O(g),P(g),D(g)}else b("Error deleting the account: "+l.message,"error"),console.error("Error deleting the account",l.message)}),i(!1)}catch(n){b("Error making delete request","error"),console.error("Error making delete request",n),i(!1)}};e?(r(e),L([])):(($||[]).map(l=>l.id).forEach(l=>r(l)),L([]),C(1)),M.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},F=async(e=1,s=S[0],r=[],c={})=>{i(!0);const{columnAccessor:n="",direction:l=""}=c,g=encodeURIComponent(JSON.stringify(r));try{k.fetchDataAccount({page:e,pageSize:s,sortField:n,sortDirection:l,filterParam:g}).then(u=>{D(u.data.data.data),K(u.data.data.total),i(!1)}).catch(u=>{console.error("Error fetching data:",u),i(!1),b("Error fetching account data.","error")})}catch(u){b("Error fetching account data.","error"),console.error("Error fetching data:",u),i(!1)}};o.useEffect(()=>{const e=Q(v,m.columnAccessor),s=m.direction!=="asc"?e.reverse():e;P(s)},[v,m]),o.useEffect(()=>{C(1)},[h]),o.useEffect(()=>{const e=h;O([...y.slice(0,e)])},[p,h,y]),o.useEffect(()=>{F(p,h,d,m)},[p,h,m,V]);const re=()=>{N([]),f([]),W(""),C(1),A(!0),B()},se=(e,s)=>{const{value:r,checked:c}=e.target;c?(f(n=>({...n,[r]:{field:r,condition:"",value:"",model:s.model,type:s.type}})),N(n=>[...n,r])):(f(n=>{const l={...n};return delete l[r],l}),N(n=>n.filter(l=>l!==r)))},oe=e=>{const{columnAccessor:s,direction:r="asc"}=e;X({columnAccessor:s,direction:r}),C(1),F(p,h,d,{columnAccessor:s,direction:r})},ae=(e,s)=>{const r=["between","in_the_last","due_in"];let c={...d[e],condition:s.value};r.includes(c.condition)&&(c.value="");const n={...d,[e]:c};f(n)},ne=_(e=>e.themeConfig.rtlClass)==="rtl";return t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:a("div",{className:"account-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:a("div",{className:"flex items-center gap-2",children:[a("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>H(),children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),a("div",{className:"inline-flex",children:[t(I,{to:"/account/add",className:"btn btn-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Add New"}),t("div",{className:"dropdown",children:t(ie,{placement:`${ne?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full",button:t("span",{className:"sr-only",children:"Toggle dropdown"}),children:t("ul",{className:"!min-w-[170px]",children:t("li",{children:t(I,{to:"/import/account",children:"Import Accounts"})})})})})]})]})}),a("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[a("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:R,onChange:e=>W(e.target.value)})}),a("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),T.map((e,s)=>a("div",{children:[t("div",{className:"mb-2",children:a("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:r=>se(r,e),checked:w.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),w.length>0&&t(j,{children:w.includes(e.value)?a("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),a("div",{className:"mb-4",children:[a("div",{className:"mb-2",children:[a("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(he,{onChange:r=>ae(e.value,r),placeholder:"Select an include",options:e.conditions})]}),d[e.value]!=null&&t(j,{children:t("div",{className:"mb-2",children:me(d[e.value],e,f,d)})})]})]},e.value):null})]},e.value+s))]}),w.length>0&&a("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>te(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:re,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:z?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(de,{className:`${Y} whitespace-nowrap table-hover`,records:J,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"account_name",sortable:!0,render:({account_name:e})=>t(E,{to:"/account/preview",children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"business_account",title:"Business Account",sortable:!0,render:({business_account:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"owner",title:"Account Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),r=`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`;return t("div",{className:"font-semibold",children:r})}},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>a("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(E,{to:`/account/edit/${e}`,className:"flex hover:text-info",children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t(E,{to:"/account/preview",className:"flex hover:text-primary",children:a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:s=>H(e),children:a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:U,recordsPerPage:h,page:p,onPageChange:e=>C(e),recordsPerPageOptions:S,onRecordsPerPageChange:G,sortStatus:m,onSortStatusChange:oe,selectedRecords:$,onSelectedRecordsChange:L,paginationText:({from:e,to:s,totalRecords:r})=>`Showing  ${e} to ${s} of ${r} entries`})})})]})]})})};export{xe as default};
