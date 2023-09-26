import{u as ne,r,s as ce,c as de,b as t,f as j,a as ue,j as o,L as he,F as J,N as Q,d as me}from"./main-d50c1b5f.js";import{s as z,Q as pe}from"./sortBy-515493b8.js";import{S as fe}from"./react-select.esm-979cfe87.js";import{S as E}from"./sweetalert2.all-3ffe5e63.js";import{r as be}from"./FilterValueFiled-22d71aef.js";import"./Select-aecb2a80.esm-ecfd9304.js";import"./_baseIsEqual-4cfeb0d6.js";import"./react-select-async.esm-e52329c5.js";const Se=()=>{const V=ne();r.useEffect(()=>{V(ce("Availability List"))});const{hasPermission:d,isLoading:A,isLoggedIn:Y}=de(),[D,c]=r.useState(!1);r.useEffect(()=>{if(!A&&!d("filter-availability")&&!d("read-availability"))return c(!0),t(j,{});c(!1)},[A,Y,d]);const[q,R]=r.useState(!1),N=new me,U=ue(e=>e.themeConfig.theme)==="dark",[y,$]=r.useState([]),[w,Z]=r.useState([]),[k,x]=r.useState([]),[P,W]=r.useState(""),[u,g]=r.useState([]),[b,v]=r.useState(1),S=[50,100],[h,G]=r.useState(S[0]),[L,O]=r.useState(z(y,"id")),[K,_]=r.useState(L),[H,F]=r.useState([]),[X,ee]=r.useState(0),[p,te]=r.useState({columnAccessor:"id",direction:"asc"}),ae=async()=>{c(!0);try{const a=(await N.filterOptionAvailability()).data.data.map(s=>{const n=s.condition;return{...s,conditions:Object.entries(n).map(([l,i])=>({value:l,label:i.value,input:i.input,type:i.type,model:s.model}))}});Z(a)}catch(e){C("Error fetching filter options.","error"),console.error("Error fetching data:",e)}c(!1)};r.useEffect(()=>{ae()},[]);const T=()=>{window.scrollTo({top:0,behavior:"smooth"})},se=()=>{R(!1),T(),M(b,h,u,p)};let B=[];w&&w.length>0&&(B=w.filter(e=>e.label.toLowerCase().includes(P.toLowerCase())));const C=(e="",a="success")=>{E.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:a,title:e,padding:"10px 20px"})},I=(e=null)=>{E.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(a=>{if(a.value){const s=async n=>{try{c(!0),N.deleteSingleAvailability(n).then(l=>{const i=l.data;if(i.status){const f=y.filter(m=>m.id!==n);_(f),O(f),$(f)}else C("Error deleting the availability: "+i.message,"error"),console.error("Error deleting the availability",i.message)}),c(!1)}catch(l){C("Error making delete request","error"),console.error("Error making delete request",l),c(!1)}};e?(s(e),F([])):((H||[]).map(i=>i.id).forEach(i=>s(i)),F([]),v(1)),E.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},M=async(e=1,a=S[0],s=[],n={})=>{c(!0);const{columnAccessor:l="",direction:i=""}=n,f=encodeURIComponent(JSON.stringify(s));try{N.fetchDataAvailability({page:e,pageSize:a,sortField:l,sortDirection:i,filterParam:f}).then(m=>{$(m.data.data.data),ee(m.data.data.total),c(!1)}).catch(m=>{console.error("Error fetching data:",m),c(!1),C("Error fetching availability data.","error")})}catch(m){C("Error fetching availability data.","error"),console.error("Error fetching data:",m),c(!1)}};r.useEffect(()=>{const e=z(y,p.columnAccessor),a=p.direction!=="asc"?e.reverse():e;O(a)},[y,p]),r.useEffect(()=>{v(1)},[h]),r.useEffect(()=>{const e=h;_([...L.slice(0,e)])},[b,h,L]),r.useEffect(()=>{M(b,h,u,p)},[b,h,p,q]);const re=()=>{x([]),g([]),W(""),v(1),R(!0),T()},le=(e,a)=>{const{value:s,checked:n}=e.target;n?(g(l=>({...l,[s]:{field:s,condition:"",value:"",model:a.model,type:a.type}})),x(l=>[...l,s])):(g(l=>{const i={...l};return delete i[s],i}),x(l=>l.filter(i=>i!==s)))},ie=e=>{const{columnAccessor:a,direction:s="asc"}=e;te({columnAccessor:a,direction:s}),v(1),M(b,h,u,{columnAccessor:a,direction:s})},oe=(e,a)=>{const s=["between","in_the_last","due_in"];let n={...u[e],condition:a.value};s.includes(n.condition)&&(n.value="");const l={...u,[e]:n};g(l)};return!d("read-availability")||D?t(j,{}):t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:o("div",{className:"availability-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:o("div",{className:"flex items-center gap-2",children:[d("delete-availability")&&o("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>I(),children:[o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),d("create-availability")&&t(he,{to:"/availability/add",className:"btn btn-primary gap-2",children:"Add New"})]})}),o("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[d("filter-availability")&&o("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:P,onChange:e=>W(e.target.value)})}),o("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),B.map((e,a)=>o("div",{children:[t("div",{className:"mb-2",children:o("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:s=>le(s,e),checked:k.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),k.length>0&&t(J,{children:k.includes(e.value)?o("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),o("div",{className:"mb-4",children:[o("div",{className:"mb-2",children:[o("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(fe,{onChange:s=>oe(e.value,s),placeholder:"Select an include",options:e.conditions})]}),u[e.value]!=null&&t(J,{children:t("div",{className:"mb-2",children:be(u[e.value],e,g,u)})})]})]},e.value):null})]},e.value+a))]}),k.length>0&&o("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>se(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:re,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:D?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(pe,{className:`${U} whitespace-nowrap table-hover`,records:K,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"created_at",title:"Created time",sortable:!0,render:({created_at:e})=>{const a=new Date(e),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=a.getHours(),l=String(a.getMinutes()).padStart(2,"0"),i=n>=12?"PM":"AM",f=`${s[a.getMonth()]} ${a.getDate()}, ${a.getFullYear()} ${n%12||12}:${l} ${i}`;return t("div",{className:"font-semibold",children:f})}},{accessor:"availability_name",sortable:!0,render:({availability_name:e,id:a})=>d("update-availability")?t(Q,{to:`/availability/edit/${a}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})}):t("div",{className:"font-semibold",children:`#${e}`})},{accessor:"vendor",sortable:!1,render:({vendor:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.vendor_name:"-No vendor-"})},{accessor:"owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.first_name+" "+e.last_name:"-No owner-"})},{accessor:"product",sortable:!1,render:({product:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.product_name:"-No product-"})},{accessor:"Availability Type",sortable:!0,render:({availability_type:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>o("div",{className:"flex gap-4 items-center w-max mx-auto",children:[d("update-availability")&&t(Q,{to:`/availability/edit/${e}`,className:"flex hover:text-info",children:o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),d("delete-availability")&&t("button",{type:"button",className:"flex hover:text-danger",onClick:a=>I(e),children:o("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:X,recordsPerPage:h,page:b,onPageChange:e=>v(e),recordsPerPageOptions:S,onRecordsPerPageChange:G,sortStatus:p,onSortStatusChange:ie,selectedRecords:H,onSelectedRecordsChange:F,paginationText:({from:e,to:a,totalRecords:s})=>`Showing  ${e} to ${a} of ${s} entries`})})})]})]})})};export{Se as default};
