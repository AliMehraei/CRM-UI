import{u as G,r as t,j as e,F as H,b as r,A as J,aB as se,aL as ne,L as re,d as K,c as U,a as oe,e as ie,S as le,N as X,s as ce}from"./main-d4fc42fd.js";import{F as Y}from"./index-5d06864f.js";/* empty css                  */import{s as ee,Q as de}from"./sortBy-2459fd2b.js";import"./_baseIsEqual-b22a5610.js";const me=({setDateRfqStartFilter:l,setDateRfqEndFilter:k,setDateVendorRfqStartFilter:f,setDateVendorRfqEndFilter:g,setDateAvailabilityStartFilter:b,setDateAvailabilityEndFilter:_,setVendorNameFilter:x,setManufacturerNameFilter:m})=>{G();const[d,R]=t.useState([]),[F,S]=t.useState([]),[s,u]=t.useState([]),[I,v]=t.useState([]),[C,w]=t.useState(""),[N,E]=t.useState(""),[q,V]=t.useState(""),[D,L]=t.useState(""),[z,M]=t.useState(""),[B,$]=t.useState(""),[h,O]=t.useState(""),[P,A]=t.useState(""),[W,n]=t.useState(""),c=a=>{S(a);const o=a.map(i=>i.value);R(o)},y=a=>{v(a);const o=a.map(i=>i.value);u(o)},j=a=>{if(Array.isArray(a)&&a.length===2){const o=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],i=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],p=`${o} to ${i}`;w(p)}},Q=a=>{if(Array.isArray(a)&&a.length===2){const o=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],i=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],p=`${o} to ${i}`;L(p)}},Z=a=>{if(Array.isArray(a)&&a.length===2){const o=new Date(a[0].getTime()-a[0].getTimezoneOffset()*6e4).toISOString().split("T")[0],i=new Date(a[1].getTime()-a[1].getTimezoneOffset()*6e4).toISOString().split("T")[0],p=`${o} to ${i}`;O(p)}},T=()=>{x(d),m(s),l(N),k(q),f(z),g(B),b(P),_(W)};return t.useEffect(()=>{const[a,o]=C.split(" to "),[i,p]=D.split(" to "),[te,ae]=h.split(" to ");E(a),V(o),M(i),$(p),A(te),n(ae)},[C,D,h]),e(H,{children:e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:r("div",{className:"grid sm:grid-cols-12 md:grid-cols-6 gap-3 mb-10",children:[r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Vendor Name :"}),e(J,{defaultOptions:!0,isMulti:!0,loadOptions:se,name:"vendor_name",id:"vendor_name",onChange:c,className:"sm:col-span-8 lg:col-span-2 z-50",placeholder:"Select Vendor Name"})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Manufacturer Name :"}),e(J,{defaultOptions:!0,isMulti:!0,id:"manufacturer_name",placeholder:"Select Manufacturer Name",loadOptions:ne,onChange:y,className:"sm:col-span-8 lg:col-span-2 z-50"})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date Rfq:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:C,className:"sm:col-span-8 form-input w-56",onChange:a=>j(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{w(""),E(""),V("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date VendorRfq:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:D,className:"sm:col-span-8 form-input w-56",onChange:a=>Q(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{L(""),M(""),$("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block gap-3",children:[e("label",{className:"sm:col-span-4 mt-2 block text-[16px] font-semibold text-gray-800",children:"Select Date Availability:"}),r("div",{className:"inline-flex",children:[e(Y,{options:{mode:"range",dateFormat:"Y-m-d",position:"auto left"},value:h,className:"sm:col-span-8 form-input w-56",onChange:a=>Z(a)}),e("a",{className:"input-button ml-2 cursor-pointer",title:"Clear",onClick:()=>{O(""),A(""),n("")},children:r("svg",{width:"35",height:"35",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z",stroke:"#1C274C",strokeWidth:"1.5"}),e("path",{d:"M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5",stroke:"#1C274C",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]}),r("div",{className:"inline-block lg:justify-end  lg:mt-9",children:[e("button",{type:"button",onClick:T,className:"sm:col-span-12 lg:col-span-2 float-right block items-center  px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:" Filter"}),e(re,{type:"button",className:"sm:col-span-12 lg:col-span-2 float-right block items-center  mx-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",to:"/admin-analytics/vendor",reloadDocument:!0,children:"Reset"})]})]})})})},ue=({permissionName:l,tableColumns:k,frontRoute:f,filterParam:g})=>{G(),K(n=>n.filters);const{hasPermission:b,isLoading:_,isLoggedIn:x}=U(),[m,d]=t.useState(!0);t.useState(!1);const R=new oe,F=K(n=>n.themeConfig.theme)==="dark",[S,s]=t.useState([]);t.useState([]),t.useState([]),t.useState("");const[u,I]=t.useState([]),[v,C]=t.useState(1),w=[50,100],[N,E]=t.useState(w[0]),[q,V]=t.useState(ee(S,"id")),[D,L]=t.useState(q),[z,M]=t.useState([]),[B,$]=t.useState(0),[h,O]=t.useState({columnAccessor:"id",direction:"asc"}),P=(n="",c="success")=>{le.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:c,title:n,padding:"10px 20px"})},A=async(n=1,c=w[0],y=[],j={})=>{d(!0);const{columnAccessor:Q="",direction:Z=""}=j;try{await R[f]({page:n,pageSize:c,sortField:Q,sortDirection:Z,filterParam:g}).then(T=>{var a,o,i,p;s((o=(a=T.data)==null?void 0:a.data)==null?void 0:o.data),$((p=(i=T.data)==null?void 0:i.data)==null?void 0:p.total),d(!1)}).catch(T=>{console.error("Error fetching data: ",T),d(!1),P(`Error fetching  ${l} data.`,"error")})}catch(T){P(`Error fetching ${l} data.`,"error"),console.error("Error fetching data: ",T),d(!1)}},W=n=>{const{columnAccessor:c,direction:y="asc"}=n;O({columnAccessor:c,direction:y}),C(1),A(v,N,u,{columnAccessor:c,direction:y})};return t.useEffect(()=>{const n=ee(S,h.columnAccessor),c=h.direction!=="asc"?n.reverse():n;V(c)},[S,h]),t.useEffect(()=>{C(1)},[N]),t.useEffect(()=>{L([...q.slice(0,N)])},[v,N,q]),t.useEffect(()=>{A(v,N,u,h)},[v,N,h,g]),!b(`${l}`)||m?e(ie,{}):e(H,{children:e("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:e("div",{className:`${l}-table`,children:e("div",{className:"grid grid-cols-1 gap-6 mb-6",children:e("div",{className:"panel col-span-12",children:e("div",{className:"datatables pagination-padding",children:m?e("div",{className:"flex justify-center",children:e("span",{className:"animate-spin border-4 my-4 border-success border-l-transparent rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"})}):e(de,{className:`${F} whitespace-nowrap table-hover`,records:D,columns:k,highlightOnHover:!0,totalRecords:B,recordsPerPage:N,page:v,onPageChange:C,recordsPerPageOptions:w,onRecordsPerPageChange:E,sortStatus:h,onSortStatusChange:W,selectedRecords:z,onSelectedRecordsChange:M,paginationText:({from:n,to:c,totalRecords:y})=>`Showing ${n} to ${c} of ${y} entries`})})})})})})})},he=({dateRfqStartFilter:l,dateRfqEndFilter:k,dateVendorRfqStartFilter:f,dateVendorRfqEndFilter:g,dateAvailabilityStartFilter:b,dateAvailabilityEndFilter:_,vendorNameFilter:x,manufacturerNameFilter:m})=>{const{hasPermission:d}=U(),[R,F]=t.useState({manufacturer_name:m,date_start_vrfq:f??"",date_end_vrfq:g??"",date_start_rfq:l??"",date_end_rfq:k??"",date_start_ava:b??"",date_end_ava:_??"",vendor_name:x}),S=[{accessor:"id",sortable:!0,render:({vendor_id:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"vendor Name",sortable:!0,render:({vendor_name:s,vendor_id:u})=>d("update-vendor")?e(X,{to:`/vendor/edit/${u}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${s}`})}):e("div",{className:"font-semibold",children:`#${s}`})},{accessor:"Manufacturer Name",title:"Manufacturer Name",sortable:!0,render:({manufacturer_name:s,manufacturer_id:u})=>d("update-manufacturer")?e(X,{to:`/manufacturer/edit/${u}`,children:e("div",{className:"text-primary underline hover:no-underline font-semibold",children:`#${s}`})}):e("div",{className:"font-semibold",children:`#${s}`})},{accessor:"sent_rfqs_count",title:"Sent RFQs count",sortable:!1,render:({sent_rfqs_count:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"sent_v_rfqs_count",title:"Sent VRFQs Count",sortable:!0,render:({sent_v_rfqs_count:s})=>e("div",{className:"font-semibold",children:s})},{accessor:"received_avas_count",title:"Received AVAs Count",sortable:!0,render:({received_avas_count:s})=>e("div",{className:"font-semibold",children:s})}];return t.useEffect(()=>{F({manufacturer_name:m,date_start_vrfq:f??"",date_end_vrfq:g??"",date_start_rfq:l??"",date_end_rfq:k??"",date_start_ava:b??"",date_end_ava:_??"",vendor_name:x})},[x,m,l,f,b]),e("div",{className:"pt-5 flex-1",children:e("div",{className:"grid  gap-6 mb-6",children:e("div",{className:"panel h-full xl:col-span-2",children:r("div",{className:"relative",children:[e("h5",{className:"font-semibold text-lg",children:"List Vendor"}),e("div",{className:"bg-white dark:bg-black rounded-lg",children:e(ue,{permissionName:"admin-vendor-list-analytics",tableColumns:S,frontRoute:"reportVendorList",filterParam:R})})]})})})})},ve=()=>{const l=G(),{hasPermission:k}=U();t.useEffect(()=>{l(ce("Vendor Performance Analytics"))},[l]);const[f,g]=t.useState(""),[b,_]=t.useState(""),[x,m]=t.useState(""),[d,R]=t.useState(""),[F,S]=t.useState(""),[s,u]=t.useState(""),[I,v]=t.useState([]),[C,w]=t.useState([]);return e("div",{className:"panel  border-white-light dark:border-[#1b2e4b]",children:k("admin-vendor-list-analytics")?r(H,{children:[e(me,{setDateRfqStartFilter:g,setDateRfqEndFilter:_,setDateVendorRfqStartFilter:m,setDateVendorRfqEndFilter:R,setDateAvailabilityStartFilter:S,setDateAvailabilityEndFilter:u,setVendorNameFilter:v,setManufacturerNameFilter:w}),e(he,{dateRfqStartFilter:f,dateRfqEndFilter:b,dateVendorRfqStartFilter:x,dateVendorRfqEndFilter:d,dateAvailabilityStartFilter:F,dateAvailabilityEndFilter:s,vendorNameFilter:I,manufacturerNameFilter:C})]}):null})};export{ve as default};