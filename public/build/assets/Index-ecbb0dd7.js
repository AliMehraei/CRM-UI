import{u as ae,r as n,s as oe,a as ne,b as t,j as c,L as ce,F as _,N as B,c as le}from"./main-9b0342c2.js";import{s as T,Q as ie}from"./sortBy-24e2c5cd.js";import{S as de}from"./react-select.esm-1dd62acb.js";import{S as M}from"./sweetalert2.all-1b2d968f.js";import{r as he}from"./FilterValueFiled-d7093f9a.js";import"./Select-aecb2a80.esm-73074169.js";import"./_baseIsEqual-c2216e17.js";import"./react-select-async.esm-2234b8d6.js";const we=()=>{const j=ae();n.useEffect(()=>{j(oe("Invoice List"))});const[J,i]=n.useState(!1),[Q,E]=n.useState(!1),k=new le,z=ne(e=>e.themeConfig.theme)==="dark",[b,I]=n.useState([]),[N,V]=n.useState([]),[w,x]=n.useState([]),[$,D]=n.useState(""),[d,C]=n.useState([]),[f,g]=n.useState(1),S=[50,100],[h,Y]=n.useState(S[0]),[y,R]=n.useState(T(b,"id")),[q,A]=n.useState(y),[O,L]=n.useState([]),[Z,G]=n.useState(0),[m,U]=n.useState({columnAccessor:"id",direction:"asc"}),K=async()=>{i(!0);try{const s=(await k.filterOptionInvoice()).data.data.map(r=>{const l=r.condition;return{...r,conditions:Object.entries(l).map(([a,o])=>({value:a,label:o.value,input:o.input,type:o.type,model:r.model}))}});V(s)}catch(e){v("Error fetching filter options.","error"),console.error("Error fetching data:",e)}i(!1)};n.useEffect(()=>{K()},[]);const P=()=>{window.scrollTo({top:0,behavior:"smooth"})},X=()=>{E(!1),P(),F(f,h,d,m)};let W=[];N&&N.length>0&&(W=N.filter(e=>e.label.toLowerCase().includes($.toLowerCase())));const v=(e="",s="success")=>{M.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:e,padding:"10px 20px"})},H=(e=null)=>{M.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(s=>{if(s.value){const r=async l=>{try{i(!0),k.deleteSingleInvoice(l).then(a=>{const o=a.data;if(o.status){const p=b.filter(u=>u.id!==l);A(p),R(p),I(p)}else v("Error deleting the Invoice: "+o.message,"error"),console.error("Error deleting the Invoice",o.message)}),i(!1)}catch(a){v("Error making delete request","error"),console.error("Error making delete request",a),i(!1)}};e?(r(e),L([])):((O||[]).map(o=>o.id).forEach(o=>r(o)),L([]),g(1)),M.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},F=async(e=1,s=S[0],r=[],l={})=>{i(!0);const{columnAccessor:a="",direction:o=""}=l,p=encodeURIComponent(JSON.stringify(r));try{k.fetchDataInvoice({page:e,pageSize:s,sortField:a,sortDirection:o,filterParam:p}).then(u=>{I(u.data.data.data),G(u.data.data.total),i(!1)}).catch(u=>{console.error("Error fetching data:",u),i(!1),v("Error fetching Invoice data.","error")})}catch(u){v("Error fetching Invoice data.","error"),console.error("Error fetching data:",u),i(!1)}};n.useEffect(()=>{const e=T(b,m.columnAccessor),s=m.direction!=="asc"?e.reverse():e;R(s)},[b,m]),n.useEffect(()=>{g(1)},[h]),n.useEffect(()=>{const e=h;A([...y.slice(0,e)])},[f,h,y]),n.useEffect(()=>{F(f,h,d,m)},[f,h,m,Q]);const ee=()=>{x([]),C([]),D(""),g(1),E(!0),P()},te=(e,s)=>{const{value:r,checked:l}=e.target;l?(C(a=>({...a,[r]:{field:r,condition:"",value:"",model:s.model,type:s.type}})),x(a=>[...a,r])):(C(a=>{const o={...a};return delete o[r],o}),x(a=>a.filter(o=>o!==r)))},se=e=>{const{columnAccessor:s,direction:r="asc"}=e;U({columnAccessor:s,direction:r}),g(1),F(f,h,d,{columnAccessor:s,direction:r})},re=(e,s)=>{const r=["between","in_the_last","due_in"];let l={...d[e],condition:s.value};r.includes(l.condition)&&(l.value="");const a={...d,[e]:l};C(a)};return t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:c("div",{className:"Invoice-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:c("div",{className:"flex items-center gap-2",children:[c("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>H(),children:[c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),t(ce,{to:"/invoice/add",className:"btn btn-primary gap-2",children:"Add New"})]})}),c("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[c("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:$,onChange:e=>D(e.target.value)})}),c("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),W.map(e=>c("div",{children:[t("div",{className:"mb-2",children:c("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:s=>te(s,e),checked:w.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),w.length>0&&t(_,{children:w.includes(e.value)?c("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),c("div",{className:"mb-4",children:[c("div",{className:"mb-2",children:[c("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(de,{onChange:s=>re(e.value,s),placeholder:"Select an include",options:e.conditions})]}),d[e.value]!=null&&t(_,{children:t("div",{className:"mb-2",children:he(d[e.value],e,C,d)})})]})]},e.value):null})]}))]}),w.length>0&&c("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>X(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:ee,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:J?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(ie,{className:`${z} whitespace-nowrap table-hover`,records:q,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const s=new Date(e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l=s.getHours(),a=String(s.getMinutes()).padStart(2,"0"),o=l>=12?"PM":"AM",p=`${r[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${l%12||12}:${a} ${o}`;return t("div",{className:"font-semibold",children:p})}},{accessor:"subject",sortable:!0,render:({subject:e,id:s})=>t(B,{to:`/invoice/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"owner",title:"Invoice Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.name:"-No owner-"})},{accessor:"contact",title:"Contact Owner",sortable:!1,render:({contact:e})=>t("div",{className:"flex items-center font-semibold",children:e?`${e.first_name} ${e.last_name}`:"-No contact-"})},{accessor:"account",title:"Account Owner",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"-No account-"})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>c("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(B,{to:`/invoice/edit/${e}`,className:"flex hover:text-info",children:c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:s=>H(e),children:c("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:Z,recordsPerPage:h,page:f,onPageChange:e=>g(e),recordsPerPageOptions:S,onRecordsPerPageChange:Y,sortStatus:m,onSortStatusChange:se,selectedRecords:O,onSelectedRecordsChange:L,paginationText:({from:e,to:s,totalRecords:r})=>`Showing  ${e} to ${s} of ${r} entries`})})})]})]})})};export{we as default};
