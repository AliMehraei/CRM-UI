import{u as ae,r as n,s as oe,a as ne,b as t,j as l,L as le,F as j,N as M,c as ce}from"./main-23791f1d.js";import{s as I,Q as ie}from"./sortBy-05442f70.js";import{S as de}from"./react-select.esm-6c13d46a.js";import{S as E}from"./sweetalert2.all-685335b3.js";import{r as he}from"./FilterValueFiled-bf491238.js";import"./Select-aecb2a80.esm-73517497.js";import"./_baseIsEqual-e315f5bb.js";import"./react-select-async.esm-ffb837fe.js";const ve=()=>{const _=ae();n.useEffect(()=>{_(oe("Task List"))});const[J,i]=n.useState(!1),[Q,D]=n.useState(!1),w=new ce,Z=ne(e=>e.themeConfig.theme)==="dark",[k,T]=n.useState([]),[x,z]=n.useState([]),[v,N]=n.useState([]),[R,W]=n.useState(""),[d,C]=n.useState([]),[f,g]=n.useState(1),S=[50,100],[h,V]=n.useState(S[0]),[y,$]=n.useState(I(k,"id")),[Y,A]=n.useState(y),[P,L]=n.useState([]),[q,G]=n.useState(0),[m,U]=n.useState({columnAccessor:"id",direction:"asc"}),K=async()=>{i(!0);try{const s=(await w.filterOptionTask()).data.data.map(r=>{const c=r.condition;return{...r,conditions:Object.entries(c).map(([a,o])=>({value:a,label:o.value,input:o.input,type:o.type,model:r.model}))}});z(s)}catch(e){b("Error fetching filter options.","error"),console.error("Error fetching data:",e)}i(!1)};n.useEffect(()=>{K()},[]);const O=()=>{window.scrollTo({top:0,behavior:"smooth"})},X=()=>{D(!1),O(),F(f,h,d,m)};let B=[];x&&x.length>0&&(B=x.filter(e=>e.label.toLowerCase().includes(R.toLowerCase())));const b=(e="",s="success")=>{E.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:s,title:e,padding:"10px 20px"})},H=(e=null)=>{E.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(s=>{if(s.value){const r=async c=>{try{i(!0),w.deleteSingleTask(c).then(a=>{const o=a.data;if(o.status){const p=k.filter(u=>u.id!==c);A(p),$(p),T(p)}else b("Error deleting the Task: "+o.message,"error"),console.error("Error deleting the Task",o.message)}),i(!1)}catch(a){b("Error making delete request","error"),console.error("Error making delete request",a),i(!1)}};e?(r(e),L([])):((P||[]).map(o=>o.id).forEach(o=>r(o)),L([]),g(1)),E.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})}})},F=async(e=1,s=S[0],r=[],c={})=>{i(!0);const{columnAccessor:a="",direction:o=""}=c,p=encodeURIComponent(JSON.stringify(r));try{w.fetchDataTask({page:e,pageSize:s,sortField:a,sortDirection:o,filterParam:p}).then(u=>{T(u.data.data.data),G(u.data.data.total),i(!1)}).catch(u=>{console.error("Error fetching data:",u),i(!1),b("Error fetching task data.","error")})}catch(u){b("Error fetching task data.","error"),console.error("Error fetching data:",u),i(!1)}};n.useEffect(()=>{const e=I(k,m.columnAccessor),s=m.direction!=="asc"?e.reverse():e;$(s)},[k,m]),n.useEffect(()=>{g(1)},[h]),n.useEffect(()=>{const e=h;A([...y.slice(0,e)])},[f,h,y]),n.useEffect(()=>{F(f,h,d,m)},[f,h,m,Q]);const ee=()=>{N([]),C([]),W(""),g(1),D(!0),O()},te=(e,s)=>{const{value:r,checked:c}=e.target;c?(C(a=>({...a,[r]:{field:r,condition:"",value:"",model:s.model,type:s.type}})),N(a=>[...a,r])):(C(a=>{const o={...a};return delete o[r],o}),N(a=>a.filter(o=>o!==r)))},se=e=>{const{columnAccessor:s,direction:r="asc"}=e;U({columnAccessor:s,direction:r}),g(1),F(f,h,d,{columnAccessor:s,direction:r})},re=(e,s)=>{const r=["between","in_the_last","due_in"];let c={...d[e],condition:s.value};r.includes(c.condition)&&(c.value="");const a={...d,[e]:c};C(a)};return t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:l("div",{className:"task-table",children:[t("div",{className:"mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5",children:l("div",{className:"flex items-center gap-2",children:[l("button",{type:"button",className:"btn btn-danger gap-2",onClick:()=>H(),children:[l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]}),"Delete"]}),t(le,{to:"/task/add",className:"btn btn-primary gap-2",children:"Add New"})]})}),l("div",{className:"grid grid-cols-5 gap-6 mb-6",children:[l("div",{className:"panel col-span-1",children:[t("h2",{className:"text-xl font-bold mb-4",children:"Filter By Fields"}),t("div",{className:"mb-4",children:t("input",{type:"text",placeholder:"Search fields...",className:"border p-2 w-full",value:R,onChange:e=>W(e.target.value)})}),l("div",{className:"mb-4",children:[t("label",{className:"block font-semibold",children:"Filter by:"}),B.map((e,s)=>l("div",{children:[t("div",{className:"mb-2",children:l("label",{className:"flex items-center cursor-pointer",children:[t("input",{type:"checkbox",value:e.value,onChange:r=>te(r,e),checked:v.includes(e.value),className:"form-checkbox"}),t("span",{className:" text-dark",children:e.label})]})},e.value),v.length>0&&t(j,{children:v.includes(e.value)?l("div",{children:[t("h3",{className:"text-lg font-semibold mt-4",children:"Search Options"}),l("div",{className:"mb-4",children:[l("div",{className:"mb-2",children:[l("label",{className:"block font-semibold",children:["Search include for ",e.value,":"]}),t(de,{onChange:r=>re(e.value,r),placeholder:"Select an include",options:e.conditions})]}),d[e.value]!=null&&t(j,{children:t("div",{className:"mb-2",children:he(d[e.value],e,C,d)})})]})]},e.value):null})]},e.value+s))]}),v.length>0&&l("div",{className:"flex flex-wrap justify-between space-x-2 md:space-x-4",children:[t("button",{onClick:e=>X(),className:"btn btn-sm btn-primary",children:"Apply Filter"}),t("button",{onClick:ee,className:"btn btn-sm btn-outline-primary",children:"Reset"})]})]}),t("div",{className:"panel col-span-4",children:t("div",{className:"datatables pagination-padding",children:J?t("div",{className:"flex justify-center",children:t("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):t(ie,{className:`${Z} whitespace-nowrap table-hover`,records:Y,columns:[{accessor:"id",sortable:!0,render:({id:e})=>t("div",{className:"font-semibold",children:e})},{accessor:"subject",title:"Task subject",sortable:!1,render:({subject:e,id:s})=>t(M,{to:`/task/edit/${s}`,children:t("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${e}`})})},,{accessor:"due_date",title:"Due Date",sortable:!0,render:({due_date:e})=>{const s=new Date(e),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=s.getHours(),a=String(s.getMinutes()).padStart(2,"0"),o=c>=12?"PM":"AM",p=`${r[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} ${c%12||12}:${a} ${o}`;return t("div",{className:"font-semibold",children:p})}},,{accessor:"owner",title:"Task Owner",sortable:!1,render:({owner:e})=>t("div",{className:"flex items-center font-semibold",children:e?e.name:"No Owner"})},{accessor:"status",sortable:!0,render:({status:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"priority",sortable:!0,render:({priority:e})=>t("div",{className:"flex items-center font-semibold",children:e})},{accessor:"action",title:"Actions",sortable:!1,textAlignment:"center",render:({id:e})=>l("div",{className:"flex gap-4 items-center w-max mx-auto",children:[t(M,{to:`/task/edit/${e}`,className:"flex hover:text-info",children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-4.5 h-4.5",children:[t("path",{opacity:"0.5",d:"M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9",stroke:"currentColor",strokeWidth:"1.5"})]})}),t(M,{to:"/task/preview",className:"flex hover:text-primary",children:l("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]})}),t("button",{type:"button",className:"flex hover:text-danger",onClick:s=>H(e),children:l("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[t("path",{d:"M20.5001 6H3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M9.5 11L10 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M14.5 11L14 16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6",stroke:"currentColor",strokeWidth:"1.5"})]})})]})}],highlightOnHover:!0,totalRecords:q,recordsPerPage:h,page:f,onPageChange:e=>g(e),recordsPerPageOptions:S,onRecordsPerPageChange:V,sortStatus:m,onSortStatusChange:se,selectedRecords:P,onSelectedRecordsChange:L,paginationText:({from:e,to:s,totalRecords:r})=>`Showing  ${e} to ${s} of ${r} entries`})})})]})]})})};export{ve as default};
