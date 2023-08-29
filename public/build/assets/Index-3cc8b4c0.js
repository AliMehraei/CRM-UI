import{u as ae,r as a,s as oe,a as le,b as t,j as n,L as ne,F as _,N as E}from"./main-70e7db21.js";import{s as M,Q as ce}from"./sortBy-d76723e3.js";import{S as ie}from"./react-select.esm-0c44ab4b.js";import{S as R}from"./sweetalert2.all-c4511f2b.js";import{a as de}from"./react-select-async.esm-c6b80654.js";import{r as he}from"./FilterValueFiled-996c9464.js";import"./Select-aecb2a80.esm-0d454593.js";import"./_baseIsEqual-16e08f11.js";const we=()=>{const Q=ae();a.useEffect(()=>{Q(oe("Sales Order List"))});const[Z,d]=a.useState(!1),[W,P]=a.useState(!1),x=new de,z=le(e=>e.themeConfig.theme)==="dark",[f,A]=a.useState([]),[S,V]=a.useState([]),[k,N]=a.useState([]),[D,B]=a.useState(""),[h,C]=a.useState([]),[u,g]=a.useState(1),y=[50,100],[i,q]=a.useState(y[0]),[L,F]=a.useState(M(f,"id")),[Y,j]=a.useState(L),[H,O]=a.useState([]),[G,J]=a.useState(0),[m,U]=a.useState({columnAccessor:"id",direction:"asc"}),K=async()=>{d(!0);try{const s=(await x.filterOptionSalesOrder()).data.data.map(r=>{const c=r.condition;return{...r,conditions:Object.entries(c).map(([o,l])=>({value:o,label:l.value,input:l.input,type:l.type,model:r.model}))}});V(s)}catch(e){b("Error fetching filter options.","error"),console.error("Error fetching data:",e)}d(!1)};a.useEffect(()=>{K()},[]);const T=()=>{window.scrollTo({top:0,behavior:"smooth"})},X=()=>{P(!1),T(),v(u,i,h)};let $=[];S&&S.length>0&&($=S.filter(e=>e.label.toLowerCase().includes(D.toLowerCase())));const b=(e="",s="success")=>{R.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:e,padding:"10px 20px"})},I=(e=null)=>{R.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(s=>{if(s.value){const r=async c=>{try{d(!0),x.deleteSingleSalesOrder(c).then(o=>{const l=o.data;if(l.status){const w=f.filter(p=>p.id!==c);j(w),F(w),A(w)}else b("Error deleting the salesOrder: "+l.message,"error"),console.error("Error deleting the salesOrder",l.message)}),d(!1)}catch(o){b("Error making delete request","error"),console.error("Error making delete request",o),d(!1)}};e?(r(e),O([])):((H||[]).map(l=>l.id).forEach(l=>r(l)),O([]),g(1)),R.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},v=async(e=1,s=y[0],r=[],c={})=>{d(!0);const{columnAccessor:o="",direction:l=""}=c,w=encodeURIComponent(JSON.stringify(r));try{x.fetchDataSalesOrder({page:e,pageSize:s,sortField:o,sortDirection:l,filterParam:w}).then(p=>{A(p.data.data.data),J(p.data.data.total),d(!1)}).catch(p=>{console.error("Error fetching data:",p),d(!1),b("Error fetching salesOrder data.","error")})}catch(p){b("Error fetching salesOrder data.","error"),console.error("Error fetching data:",p),d(!1)}};a.useEffect(()=>{const e=M(f,m.columnAccessor),s=m.direction!=="asc"?e.reverse():e;F(s)},[f,m]),a.useEffect(()=>{v(u,i),F(M(f,m.columnAccessor))},[u,i]),a.useEffect(()=>{g(1)},[i]),a.useEffect(()=>{const e=i;j([...L.slice(0,e)])},[u,i,L]),a.useEffect(()=>{v(u,i,h,m)},[u,i,m]),a.useEffect(()=>{W&&v(u,i,h,m)},[W]);const ee=()=>{N([]),C([]),B(""),g(1),P(!0),T()},te=(e,s)=>{const{value:r,checked:c}=e.target;c?(C(o=>({...o,[r]:{field:r,condition:"",value:"",model:s.model,type:s.type}})),N(o=>[...o,r])):(C(o=>{const l={...o};return delete l[r],l}),N(o=>o.filter(l=>l!==r)))},se=e=>{const{columnAccessor:s,direction:r="asc"}=e;U({columnAccessor:s,direction:r}),g(1),v(u,i,h,{columnAccessor:s,direction:r})},re=(e,s)=>{const r=["between","in_the_last","due_in"];let c={...h[e],condition:s.value};r.includes(c.condition)&&(c.value="");const o={...h,[e]:c};C(o)};return t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:n("div",{className:"salesOrder-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:n("div",{className:"flex items-center gap-2",children:[n("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>I(),children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),t(ne,{to:"/sales/add",className:"btn btn-primary gap-2",children:"Add New"})]})}),n("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[n("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:D,onChange:e=>B(e.target.value)})}),n("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),$.map(e=>n("div",{children:[t("div",{className:"mb-2",children:n("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:s=>te(s,e),checked:k.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),k.length>0&&t(_,{children:k.includes(e.value)?n("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),n("div",{className:"mb-4",children:[n("div",{className:"mb-2",children:[n("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(ie,{onChange:s=>re(e.value,s),placeholder:"Select an include",options:e.conditions})]}),h[e.value]!=null&&t(_,{children:t("div",{className:"mb-2",children:he(h[e.value],e,C,h)})})]})]},e.value):null})]}))]}),k.length>0&&n("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>X(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:ee,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:Z?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(ce,{className:`${z} whitespace-nowrap table-hover`,records:Y,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"subject",title:"Sales Order subject",sortable:!0,render:({subject:e})=>t(E,{to:"/sales/preview",children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},{accessor:"status",sortable:!0,render:({status:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"owner",title:"Sale Order Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.name:"No Owner"})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>n("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(E,{to:`/sales/edit/${e}`,className:"flex hover:text-info",children:n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t(E,{to:"/sales/preview",className:"flex hover:text-primary",children:n("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:s=>I(e),children:n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:G,recordsPerPage:i,page:u,onPageChange:e=>g(e),recordsPerPageOptions:y,onRecordsPerPageChange:q,sortStatus:m,onSortStatusChange:se,selectedRecords:H,onSelectedRecordsChange:O,paginationText:({from:e,to:s,totalRecords:r})=>`Showing  ${e} to ${s} of ${r} entries`})})})]})]})})};export{we as default};