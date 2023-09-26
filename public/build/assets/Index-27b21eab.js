import{u as ce,r as a,s as ie,c as de,b as t,d as I,a as ue,j as n,L as he,F as _,N as j,e as me}from"./main-8c659d75.js";import{s as z,Q as pe}from"./sortBy-d2774c25.js";import{S as fe}from"./react-select.esm-9af9e55b.js";import{S as q}from"./sweetalert2.all-120fb9f5.js";import{r as Ce}from"./FilterValueFiled-80e07293.js";import"./Select-aecb2a80.esm-4b2d5e83.js";import"./_baseIsEqual-bc772c33.js";import"./react-select-async.esm-e686b623.js";const Le=()=>{const V=ce();a.useEffect(()=>{V(ie("Quote List"))});const{hasPermission:d,isLoading:M,isLoggedIn:U}=de(),[R,i]=a.useState(!1);a.useEffect(()=>{if(!M&&!d("filter-quote")&&!d("read-quote"))return i(!0),t(I,{});i(!1)},[M,U,d]);const[Y,P]=a.useState(!1),N=new me,Z=ue(e=>e.themeConfig.theme)==="dark",[k,W]=a.useState([]),[x,G]=a.useState([]),[w,S]=a.useState([]),[A,D]=a.useState(""),[u,C]=a.useState([]),[f,g]=a.useState(1),L=[50,100],[h,J]=a.useState(L[0]),[y,O]=a.useState(z(k,"id")),[K,Q]=a.useState(y),[$,F]=a.useState([]),[X,ee]=a.useState(0),[p,te]=a.useState({columnAccessor:"id",direction:"asc"}),se=async()=>{i(!0);try{const r=(await N.filterOptionQuote()).data.data.map(s=>{const c=s.condition;return{...s,conditions:Object.entries(c).map(([o,l])=>({value:o,label:l.value,input:l.input,type:l.type,model:s.model}))}});G(r)}catch(e){b("Error fetching filter options.","error"),console.error("Error fetching data:",e)}i(!1)};a.useEffect(()=>{se()},[]);const B=()=>{window.scrollTo({top:0,behavior:"smooth"})},re=()=>{P(!1),B(),E(f,h,u,p)};let H=[];x&&x.length>0&&(H=x.filter(e=>e.label.toLowerCase().includes(A.toLowerCase())));const b=(e="",r="success")=>{q.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:r,title:e,padding:"10px 20px"})},T=(e=null)=>{q.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(r=>{if(r.value){const s=async c=>{try{i(!0),N.deleteSingleQuote(c).then(o=>{const l=o.data;if(l.status){const v=k.filter(m=>m.id!==c);Q(v),O(v),W(v)}else b("Error deleting the quote: "+l.message,"error"),console.error("Error deleting the quote",l.message)}),i(!1)}catch(o){b("Error making delete request","error"),console.error("Error making delete request",o),i(!1)}};e?(s(e),F([])):(($||[]).map(l=>l.id).forEach(l=>s(l)),F([]),g(1)),q.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},E=async(e=1,r=L[0],s=[],c={})=>{i(!0);const{columnAccessor:o="",direction:l=""}=c,v=encodeURIComponent(JSON.stringify(s));try{N.fetchDataQuote({page:e,pageSize:r,sortField:o,sortDirection:l,filterParam:v}).then(m=>{W(m.data.data.data),ee(m.data.data.total),i(!1)}).catch(m=>{console.error("Error fetching data:",m),i(!1),b("Error fetching quote data.","error")})}catch(m){b("Error fetching quote data.","error"),console.error("Error fetching data:",m),i(!1)}};a.useEffect(()=>{const e=z(k,p.columnAccessor),r=p.direction!=="asc"?e.reverse():e;O(r)},[k,p]),a.useEffect(()=>{g(1)},[h]),a.useEffect(()=>{const e=h;Q([...y.slice(0,e)])},[f,h,y]),a.useEffect(()=>{E(f,h,u,p)},[f,h,p,Y]);const ae=()=>{S([]),C([]),D(""),g(1),P(!0),B()},oe=(e,r)=>{const{value:s,checked:c}=e.target;c?(C(o=>({...o,[s]:{field:s,condition:"",value:"",model:r.model,type:r.type}})),S(o=>[...o,s])):(C(o=>{const l={...o};return delete l[s],l}),S(o=>o.filter(l=>l!==s)))},le=e=>{const{columnAccessor:r,direction:s="asc"}=e;te({columnAccessor:r,direction:s}),g(1),E(f,h,u,{columnAccessor:r,direction:s})},ne=(e,r)=>{const s=["between","in_the_last","due_in"];let c={...u[e],condition:r.value};s.includes(c.condition)&&(c.value="");const o={...u,[e]:c};C(o)};return!d("read-quote")||R?t(I,{}):t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:n("div",{className:"quote-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:n("div",{className:"flex items-center gap-2",children:[d("delete-quote")&&n("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>T(),children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),d("create-quote")&&t(he,{to:"/quotes/add",className:"btn btn-primary gap-2",children:"Add New"})]})}),n("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[d("filter-quote")&&n("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:A,onChange:e=>D(e.target.value)})}),n("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),H.map((e,r)=>n("div",{children:[t("div",{className:"mb-2",children:n("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:s=>oe(s,e),checked:w.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),w.length>0&&t(_,{children:w.includes(e.value)?n("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),n("div",{className:"mb-4",children:[n("div",{className:"mb-2",children:[n("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(fe,{onChange:s=>ne(e.value,s),placeholder:"Select an include",options:e.conditions})]}),u[e.value]!=null&&t(_,{children:t("div",{className:"mb-2",children:Ce(u[e.value],e,C,u)})})]})]},e.value):null})]},e.value+r))]}),w.length>0&&n("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>re(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:ae,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:R?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(pe,{className:`${Z} whitespace-nowrap table-hover`,records:K,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"Subject",sortable:!0,render:({subject:e,id:r})=>d("update-quote")?t(j,{to:`/quotes/edit/${r}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"quote_stage",title:"Quote Stage",sortable:!0,render:({quote_stage:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Quote Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.name:"No Owner"})},{accessor:"account",title:"Account Name",sortable:!1,render:({account:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.account_name:"No Account"})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>n("div",{className:"flex gap-4 items-center w-max mx-auto",children:[d("delete-quote")&&t(j,{to:`/quotes/edit/${e}`,className:"flex hover:text-info",children:n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),d("delete-quote")&&t("button",{type:"button",className:"flex hover:text-danger",onClick:r=>T(e),children:n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:X,recordsPerPage:h,page:f,onPageChange:e=>g(e),recordsPerPageOptions:L,onRecordsPerPageChange:J,sortStatus:p,onSortStatusChange:le,selectedRecords:$,onSelectedRecordsChange:F,paginationText:({from:e,to:r,totalRecords:s})=>`Showing  ${e} to ${r} of ${s} entries`})})})]})]})})};export{Le as default};
