import{u as le,r as a,s as ce,a as H,b as t,j as l,L as _,D as ie,F as I,N as j,c as de}from"./main-9b0342c2.js";import{s as Q,Q as ue}from"./sortBy-24e2c5cd.js";import{S as he}from"./react-select.esm-1dd62acb.js";import{S as E}from"./sweetalert2.all-1b2d968f.js";import{r as me}from"./FilterValueFiled-d7093f9a.js";import"./Select-aecb2a80.esm-73074169.js";import"./_baseIsEqual-c2216e17.js";import"./react-select-async.esm-2234b8d6.js";const Ne=()=>{const z=le();a.useEffect(()=>{z(ce("Account List"))});const[V,i]=a.useState(!1),[Y,A]=a.useState(!1),k=new de,q=H(e=>e.themeConfig.theme)==="dark",[v,M]=a.useState([]),[N,Z]=a.useState([]),[w,x]=a.useState([]),[D,R]=a.useState(""),[d,f]=a.useState([]),[p,b]=a.useState(1),S=[50,100],[u,G]=a.useState(S[0]),[y,W]=a.useState(Q(v,"id")),[J,P]=a.useState(y),[$,L]=a.useState([]),[U,K]=a.useState(0),[m,X]=a.useState({columnAccessor:"id",direction:"asc"}),ee=async()=>{i(!0);try{const r=(await k.filterOptionAccount()).data.data.map(s=>{const c=s.condition;return{...s,conditions:Object.entries(c).map(([o,n])=>({value:o,label:n.value,input:n.input,type:n.type,model:s.model}))}});Z(r)}catch(e){g("Error fetching filter options.","error"),console.error("Error fetching data:",e)}i(!1)};a.useEffect(()=>{ee()},[]);const O=()=>{window.scrollTo({top:0,behavior:"smooth"})},te=()=>{A(!1),O(),F(p,u,d,m)};let B=[];N&&N.length>0&&(B=N.filter(e=>e.label.toLowerCase().includes(D.toLowerCase())));const g=(e="",r="success")=>{E.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:r,title:e,padding:"10px 20px"})},T=(e=null)=>{E.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(r=>{if(r.value){const s=async c=>{try{i(!0),k.deleteSingleAccount(c).then(o=>{const n=o.data;if(n.status){const C=v.filter(h=>h.id!==c);P(C),W(C),M(C)}else g("Error deleting the account: "+n.message,"error"),console.error("Error deleting the account",n.message)}),i(!1)}catch(o){g("Error making delete request","error"),console.error("Error making delete request",o),i(!1)}};e?(s(e),L([])):(($||[]).map(n=>n.id).forEach(n=>s(n)),L([]),b(1)),E.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},F=async(e=1,r=S[0],s=[],c={})=>{i(!0);const{columnAccessor:o="",direction:n=""}=c,C=encodeURIComponent(JSON.stringify(s));try{k.fetchDataAccount({page:e,pageSize:r,sortField:o,sortDirection:n,filterParam:C}).then(h=>{M(h.data.data.data),K(h.data.data.total),i(!1)}).catch(h=>{console.error("Error fetching data:",h),i(!1),g("Error fetching account data.","error")})}catch(h){g("Error fetching account data.","error"),console.error("Error fetching data:",h),i(!1)}};a.useEffect(()=>{const e=Q(v,m.columnAccessor),r=m.direction!=="asc"?e.reverse():e;W(r)},[v,m]),a.useEffect(()=>{b(1)},[u]),a.useEffect(()=>{const e=u;P([...y.slice(0,e)])},[p,u,y]),a.useEffect(()=>{F(p,u,d,m)},[p,u,m,Y]);const re=()=>{x([]),f([]),R(""),b(1),A(!0),O()},se=(e,r)=>{const{value:s,checked:c}=e.target;c?(f(o=>({...o,[s]:{field:s,condition:"",value:"",model:r.model,type:r.type}})),x(o=>[...o,s])):(f(o=>{const n={...o};return delete n[s],n}),x(o=>o.filter(n=>n!==s)))},ae=e=>{const{columnAccessor:r,direction:s="asc"}=e;X({columnAccessor:r,direction:s}),b(1),F(p,u,d,{columnAccessor:r,direction:s})},oe=(e,r)=>{const s=["between","in_the_last","due_in"];let c={...d[e],condition:r.value};s.includes(c.condition)&&(c.value="");const o={...d,[e]:c};f(o)},ne=H(e=>e.themeConfig.rtlClass)==="rtl";return t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:l("div",{className:"account-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:l("div",{className:"flex items-center gap-2",children:[l("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>T(),children:[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),l("div",{className:"inline-flex",children:[t(_,{to:"/account/add",className:"btn btn-primary ltr:rounded-r-none rtl:rounded-l-none",children:"Add New"}),t("div",{className:"dropdown",children:t(ie,{placement:`${ne?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-primary ltr:rounded-l-none rtl:rounded-r-none border-l-[#4468fd] before:border-[5px] before:border-l-transparent before:border-r-transparent before:border-t-inherit before:border-b-0 before:inline-block before:border-t-white-light h-full",button:t("span",{className:"sr-only",children:"Toggle dropdown"}),children:t("ul",{className:"!min-w-[170px]",children:t("li",{children:t(_,{to:"/import/account",children:"Import Accounts"})})})})})]})]})}),l("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[l("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:D,onChange:e=>R(e.target.value)})}),l("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),B.map((e,r)=>l("div",{children:[t("div",{className:"mb-2",children:l("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:s=>se(s,e),checked:w.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),w.length>0&&t(I,{children:w.includes(e.value)?l("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),l("div",{className:"mb-4",children:[l("div",{className:"mb-2",children:[l("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(he,{onChange:s=>oe(e.value,s),placeholder:"Select an include",options:e.conditions})]}),d[e.value]!=null&&t(I,{children:t("div",{className:"mb-2",children:me(d[e.value],e,f,d)})})]})]},e.value):null})]},e.value+r))]}),w.length>0&&l("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>te(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:re,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:V?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(ue,{className:`${q} whitespace-nowrap table-hover`,records:J,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"account_name",sortable:!0,render:({account_name:e,id:r})=>t(j,{to:`/account/edit/${r}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"business_account",title:"Business Account",sortable:!0,render:({business_account:e})=>t("div",{className:"flex items-center font-semibold",children:e===1?"✔":""})},{accessor:"owner",title:"Account Owner",sortable:!1,render:({owner:e})=>t("div",{className:"font-semibold",children:e?e.name:"No Owner"})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const r=new Date(e),s=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`;return t("div",{className:"font-semibold",children:s})}},{accessor:"phone",sortable:!0,render:({phone:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>l("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(j,{to:`/account/edit/${e}`,className:"flex hover:text-info",children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:r=>T(e),children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:U,recordsPerPage:u,page:p,onPageChange:e=>b(e),recordsPerPageOptions:S,onRecordsPerPageChange:G,sortStatus:m,onSortStatusChange:ae,selectedRecords:$,onSelectedRecordsChange:L,paginationText:({from:e,to:r,totalRecords:s})=>`Showing  ${e} to ${r} of ${s} entries`})})})]})]})})};export{Ne as default};
