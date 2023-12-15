import{u as G,r as t,j as e,F as H,b as r,l as J,$ as ee,aH as te,L as ae,d as K,c as U,a as se,e as ne,S as re,N as oe,s as ie}from"./main-d68524cb.js";import{F as Y}from"./index-a893b67a.js";/* empty css                  */import{s as X,Q as le}from"./sortBy-e149e031.js";import"./_baseIsEqual-f596d1d7.js";const ce=({setDateRfqStartFilter:c,setDateRfqEndFilter:v,setDateVendorRfqStartFilter:N,setDateVendorRfqEndFilter:C,setDateAvailabilityStartFilter:F,setDateAvailabilityEndFilter:w,setVendorNameFilter:y,setManufacturerNameFilter:p})=>{G();const[d,R]=t.useState([]),[s,m]=t.useState([]),[q,T]=t.useState([]),[M,u]=t.useState([]),[k,f]=t.useState(""),[h,L]=t.useState(""),[A,$]=t.useState(""),[O,E]=t.useState(""),[P,I]=t.useState(""),[z,W]=t.useState(""),[g,V]=t.useState(""),[_,D]=t.useState(""),[j,n]=t.useState(""),o=a=>{m(a);const i=a.map(l=>l.value);R(i)},S=a=>{u(a);const i=a.map(l=>l.value);T(i)},B=a=>{if(Array.isArray(a)&&a.length===2){const i=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],l=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],b=`${i} to ${l}`;f(b)}},Q=a=>{if(Array.isArray(a)&&a.length===2){const i=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],l=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],b=`${i} to ${l}`;E(b)}},Z=a=>{if(Array.isArray(a)&&a.length===2){const i=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],l=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],b=`${i} to ${l}`;V(b)}};return e(H,{children:e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:r("div",{className:"grid sm:grid-cols-12 md:grid-cols-6 gap-3 mb-10",children:[r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Vendor Name :"}),e(J,{defaultOptions:!0,isMulti:!0,loadOptions:ee,name:"vendor_name",id:"vendor_name",onChange:o,className:"sm:col-span-8 lg:col-span-2",placeholder:"Select Vendor Name"})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Manufacturer Name :"}),e(J,{defaultOptions:!0,isMulti:!0,id:"manufacturer_name",placeholder:"Select Manufacturer Name",loadOptions:te,onChange:S,className:"sm:col-span-8 lg:col-span-2"})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date Rfq:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:k,className:"sm:col-span-8 form-input w-56",onChange:a=>B(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{f(""),L(""),$("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date VendorRfq:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:O,className:"sm:col-span-8 form-input w-56",onChange:a=>Q(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{E(""),I(""),W("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date Availability:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:g,className:"sm:col-span-8 form-input w-56",onChange:a=>Z(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{V(""),D(""),n("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block lg:justify-end  lg:mt-9",children:[e("button",{type:"button",onClick:()=>{y(d),p(q),c(h),v(A),N(P),C(z),F(_),w(j)},className:"sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:" Filter"}),e(ae,{type:"button",className:"sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",to:"/admin-analytics/sales-order",reloadDocument:!0,children:"Reset"})]})]})})})},de=({permissionName:c,tableColumns:v,frontRoute:N,filterParam:C})=>{G(),K(n=>n.filters);const{hasPermission:F,isLoading:w,isLoggedIn:y}=U(),[p,d]=t.useState(!0);t.useState(!1);const R=new se,s=K(n=>n.themeConfig.theme)==="dark",[m,q]=t.useState([]);t.useState([]),t.useState([]),t.useState("");const[T,M]=t.useState([]),[u,k]=t.useState(1),f=[50,100],[h,L]=t.useState(f[0]),[A,$]=t.useState(X(m,"id")),[O,E]=t.useState(A),[P,I]=t.useState([]),[z,W]=t.useState(0),[g,V]=t.useState({columnAccessor:"id",direction:"asc"}),_=(n="",o="success")=>{re.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:o,title:n,padding:"10px 20px"})},D=async(n=1,o=f[0],S=[],B={})=>{d(!0);const{columnAccessor:Q="",direction:Z=""}=B;try{await R[N]({page:n,pageSize:o,sortField:Q,sortDirection:Z,filterParam:C}).then(x=>{var a,i,l,b;q((i=(a=x.data)==null?void 0:a.data)==null?void 0:i.data),W((b=(l=x.data)==null?void 0:l.data)==null?void 0:b.total),d(!1)}).catch(x=>{console.error("Error fetching data: ",x),d(!1),_(`Error fetching  ${c} data.`,"error")})}catch(x){_(`Error fetching ${c} data.`,"error"),console.error("Error fetching data: ",x),d(!1)}},j=n=>{const{columnAccessor:o,direction:S="asc"}=n;V({columnAccessor:o,direction:S}),k(1),D(u,h,T,{columnAccessor:o,direction:S})};return t.useEffect(()=>{const n=X(m,g.columnAccessor),o=g.direction!=="asc"?n.reverse():n;$(o)},[m,g]),t.useEffect(()=>{k(1)},[h]),t.useEffect(()=>{E([...A.slice(0,h)])},[u,h,A]),t.useEffect(()=>{D(u,h,T,g)},[u,h,g]),!F(`${c}`)||p?e(ne,{}):e(H,{children:e("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:e("div",{className:`${c}-table`,children:e("div",{className:"grid grid-cols-1 gap-6 mb-6",children:e("div",{className:"panel col-span-12",children:e("div",{className:"datatables pagination-padding",children:p?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e(le,{className:`${s} whitespace-nowrap table-hover`,records:O,columns:v,highlightOnHover:!0,totalRecords:z,recordsPerPage:h,page:u,onPageChange:k,recordsPerPageOptions:f,onRecordsPerPageChange:L,sortStatus:g,onSortStatusChange:j,selectedRecords:P,onSelectedRecordsChange:I,paginationText:({from:n,to:o,totalRecords:S})=>`Showing ${n} to ${o} of ${S} entries`})})})})})})})},me=({dateRfqStartFilter:c,dateRfqEndFilter:v,dateVendorRfqStartFilter:N,dateVendorRfqEndFilter:C,dateAvailabilityStartFilter:F,dateAvailabilityEndFilter:w,vendorNameFilter:y,manufacturerNameFilter:p})=>{const{hasPermission:d}=U();return e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:r("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:"List Vendor"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:e(de,{permissionName:"admin-vendor-list-analytics",tableColumns:[{accessor:"id",sortable:!0,render:({id:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"vendor Name",sortable:!0,render:({vendor_name:s,id:m})=>d("update-vendor")?e(oe,{to:`/vendor/edit/${m}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${s}`})}):e("div",{className:"font-semibold",children:`#${s}`})},{accessor:"Manufacturer Name",title:"Manufacturer Name",sortable:!0,render:({manufacturer_name:s})=>e("div",{className:"font-semibold",children:`${s}`})},{accessor:"sent_rfqs_count",title:"Sent RFQs count",sortable:!1,render:({sent_rfqs_count:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"sent_v_rfqs_count",title:"Sent VRFQs Count",sortable:!0,render:({sent_v_rfqs_count:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"received_avas_count",title:"Received AVAs Count",sortable:!0,render:({received_avas_count:s})=>e("div",{className:"font-semibold",children:s})}],frontRoute:"reportVendorList",filterParam:{manufacturer_name:p,date_start_vrfq:N??"",date_end_vrfq:C??"",date_start_rfq:c??"",date_end_rfq:v??"",date_start_ava:F??"",date_end_ava:w??"",vendor_name:y}})})]})})})})},Se=()=>{const c=G(),{hasPermission:v}=U();t.useEffect(()=>{c(ie("Vendor Performance Analytics"))},[c]);const[N,C]=t.useState(""),[F,w]=t.useState(""),[y,p]=t.useState(""),[d,R]=t.useState(""),[s,m]=t.useState(""),[q,T]=t.useState(""),[M,u]=t.useState([]),[k,f]=t.useState([]);return e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:v("admin-vendor-list-analytics")?r(H,{children:[e(ce,{setDateRfqStartFilter:C,setDateRfqEndFilter:w,setDateVendorRfqStartFilter:p,setDateVendorRfqEndFilter:R,setDateAvailabilityStartFilter:m,setDateAvailabilityEndFilter:T,setVendorNameFilter:u,setManufacturerNameFilter:f}),e(me,{dateRfqStartFilter:N,dateRfqEndFilter:F,dateVendorRfqStartFilter:y,dateVendorRfqEndFilter:d,dateAvailabilityStartFilter:s,dateAvailabilityEndFilter:q,vendorNameFilter:M,manufacturerNameFilter:k})]}):null})};export{Se as default};