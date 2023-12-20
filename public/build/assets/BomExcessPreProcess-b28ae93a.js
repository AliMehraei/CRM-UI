import{u as H,c as Q,r,d as q,h as G,S as J,bb as K,s as L,ad as h,j as e,e as X,F as y,b as a,f as Z,a6 as v,q as T,a as ee}from"./main-d8a5bb6c.js";const de=()=>{const c=H();Q();const[N,j]=r.useState(""),[x,M]=r.useState(""),[_,B]=r.useState({}),[$,I]=r.useState({}),[te,D]=r.useState(""),[ae,R]=r.useState("");r.useState([]);const[se,E]=r.useState(""),[F,i]=r.useState(!0),n=q(t=>t.contactForm),m=new ee,k=G(),l=k.contactId,o=k.id,[p,W]=r.useState("contact");r.useState(null);const[re,z]=r.useState([]),u=J.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:5e3}),O=K(),{pathname:f}=O;r.useEffect(()=>{c(L(N))},[c]),r.useEffect(()=>{V()},[]);const V=async()=>{i(!0);const s=f.split("/");W(s[1]=="availability-vendor"?"vendor":"contact"),j(h(s[1])+" - Process"),M(s[1]),D("Add Your "+h(s[1])+" List"),R("Your "+h(s[1])+" List"),E("You don't have any"+h(s[1])+" List"),c(L(h(s[1])+" - Process")),i(!1)},S=async()=>{i(!0);const t=await m.bomItemSaveProcess(l,p,o,{id:o});i(!1),t.status==200?window.location.href=`/${x}/complete/${l}/${o}`:t.status==302&&(u.fire({icon:"error",title:t.data.message,padding:"10px 20px"}),setTimeout(()=>{const d=f.split("/");window.location.href=`/${d[1]}/list/${l}`},1e3))},Y=async()=>{if(f.split("/")[1]!="availability-vendor"){const t=await m.fetchSingleContact(l);if(t.status!=200)return;const s=t.data.data.contact;c(T(s))}else{const t=await m.fetchSingleVendor(l);if(t.status!=200)return;const s=t.data.data.vendor;c(T(s))}};r.useEffect(()=>{Y()},[l]);const A=async()=>{i(!0);const t=await m.bomItemProcess(l,p,o);i(!1),t.status==302&&(u.fire({icon:"error",title:t.data.message,padding:"10px 20px"}),setTimeout(()=>{const P=f.split("/");window.location.href=`/${P[1]}/list/${l}`},1e3));const s=t.data.data;B(s.configHeaders),I(s.BOMItemDetails)};r.useEffect(()=>{A()},[]);const C=t=>{switch(t.process_status){case"incorrect_data":return"text-red-600";case"without_product_name":return"text-red-400";case"not_found":return"text-yellow-500";case"found":return"text-green-500";default:return"p-1 rounded font-bold"}},U=async(t,s)=>{const d=t.target.selectedIndex,g={product_id:t.target.value,selected_product_index:d,bom_item_id:o,contact_id:l,bom_item_detail_id:s};z(w=>w.includes(g)?w:[...w,g]);const b=await m.bomItemUpdateProduct(l,p,o,g);b.status==200?u.fire({icon:"success",title:b.data.message,padding:"10px 20px"}):u.fire({icon:"error",title:b.data.message,padding:"10px 20px"})};return F?e(X,{}):e(y,{children:a("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:[a("div",{className:"flex justify-end flex-wrap gap-4 px-4",children:[e("div",{className:"flex",children:a("div",{children:[a("div",{className:"text-sm font-semibold mt-5",children:[n.first_name," ",n.last_name," | ",n.vendor_name]}),e("div",{className:"text-s font-semibold ",children:n.email}),e("div",{className:"text-s font-semibold ",children:n.phone})]})}),a("div",{className:"shrink-0",children:[e("img",{src:Z(n.image_data),alt:"Contact image",className:"w-20 ltr:ml-auto rtl:mr-auto"}),a("a",{className:"text-sm font-semibold mt-5  text-primary ",target:"_blank",href:`/${p}/preview/${l}`,children:["View ",p]})]})]}),e("hr",{className:"border-white-light dark:border-[#849bbc] my-6"}),e("div",{className:"px-4 sm:px-6 lg:px-8",children:e("section",{className:"border-b border-gray-200 pb-4",children:e("div",{className:"sm:flex sm:items-center sm:justify-between",children:e("h3",{className:"title-1",children:e("b",{children:N})})})})}),a("div",{className:"my-4",children:[e("section",{className:" mx-auto px-4 sm:px-6 lg:px-8 pt-4",children:a("div",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4",children:[e("h3",{className:"title-1",children:" "}),a("div",{className:"mt-3 sm:mt-0 sm:ml-4 flex space-x-2",children:[a("a",{href:`/${x}/list/${l}`,className:"flex btn btn-primary-outline pulse-primary",children:[e("svg",{className:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})}),"Back                "]}),a("button",{onClick:S,className:"flex btn btn-primary pulse-primary",children:["Submit                    ",e("svg",{className:"w-5 h-5 ml-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]}),a("form",{className:"hidden",id:"process-form",method:"post",children:[" ",e("input",{type:"hidden",name:"_token",value:"GV9WLKTU9cEFE02rzpmifMJBxdjWYQPMdMCWYhps"})," "]})]})]})}),e("section",{className:"dashboard-item-view-page  mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-6",children:e("div",{className:"rounded-lg bg-white overflow-hidden shadow p-6",children:e("div",{className:"",children:e("div",{className:"overflow-x-scroll mt-4",children:e("div",{className:"flex flex-col",children:e("div",{className:"flex-grow",children:e("div",{id:"DataTables_Table_0_wrapper",className:"dataTables_wrapper dt-bootstrap4 no-footer",children:a("table",{className:"datatable relative min-w-full border-collapse dataTable no-footer",id:"DataTables_Table_0","aria-describedby":"DataTables_Table_0_info",children:[e("thead",{className:"bg-gray-200 sticky z-30 top-0",children:a("tr",{className:"header-row",children:[e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500 sorting sorting_asc",tabIndex:"0","aria-controls":"DataTables_Table_0",rowSpan:"1",colSpan:"1","aria-label":"#: activate to sort column descending","aria-sort":"ascending",children:"#"}),Object.keys(_).map((t,s)=>e(v.Fragment,{children:s===3?a(y,{children:[e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500",children:e("div",{className:"flex flex-row justify-between items-center space-x-3",children:e("span",{children:"Suggestions"})})}),e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500",children:"Status"})]}):e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500",children:_[t]})},s))]})}),e("tbody",{children:Object.values($).map((t,s)=>e(v.Fragment,{children:a("tr",{title:t.process_status,"data-row-id":t.id,className:"detail-row",children:[e("td",{className:"border p-2 text-sm text-gray-500",children:e("span",{className:C(t),children:s+1})}),e("td",{className:"border p-2 text-sm text-gray-500",children:t.processed_data.Product_Name}),e("td",{className:"border p-2 text-sm text-gray-500",children:t.processed_data.Manufacture}),e("td",{className:"border p-2 text-sm text-gray-500",children:t.processed_data.Quantity}),e("td",{className:"border p-2 text-sm text-gray-500",children:t.process_status==="found"?e("div",{className:"flex flex-col p-2",children:a("select",{name:"manufacture_name",className:"manufacture-name w-full h-8 rounded border-gray-300",onChange:d=>U(d,t.id),children:[e("option",{value:"",children:"Select or Ignore"}),t.matched_data.products.map(d=>e(v.Fragment,{children:a("option",{selected:t.selected&&t.selected.product_id==d.id,value:d.id,children:[d.product_name," | ",d.manufacturer_name]})},s))]})}):e(y,{})}),e("td",{className:"border p-2 text-sm text-gray-500",children:e("span",{className:C(t),children:t.process_status})})]},s)},s))})]})})})})})})})}),e("section",{className:" mx-auto px-4 sm:px-6 lg:px-8",children:e("div",{className:"sm:flex sm:items-center sm:justify-end border-b border-gray-200 pb-4",children:a("div",{className:"mt-3 sm:mt-0 sm:ml-4 flex space-x-2",children:[a("a",{href:`/${x}/list/${l}`,className:"flex btn btn-primary-outline pulse-primary",children:[e("svg",{className:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})}),"Back                "]}),a("button",{onClick:S,className:"flex btn btn-primary pulse-primary",children:["Submit                    ",e("svg",{className:"w-5 h-5 ml-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]})]})})}),e("div",{className:"page-loader justify-center items-center h-screen w-screen fixed top-0 left-0 cursor-wait bg-white bg-opacity-80 hidden",children:e("img",{src:"https://alpynelectronics.com/front-assets/alpyn/images/loader.gif",alt:"loader"})}),a("div",{id:"modal-edit-product",className:"hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",role:"dialog","aria-modal":"true",children:[e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity","aria-hidden":"true"}),a("div",{className:"mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:[e("input",{type:"hidden",id:"modal-edit-product-search-bom-item-detail-id"}),e("div",{className:"p-4 text-gray-400 text-center",children:"Please type the product name and select the founded item            "}),a("div",{className:"relative",children:[e("svg",{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),a("span",{className:"twitter-typeahead",children:[e("input",{type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint",readOnly:"",autoComplete:"off",spellCheck:"false",tabIndex:"-1",dir:"ltr"}),e("input",{id:"modal-edit-product-search",type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input",placeholder:"Search...",autoComplete:"off",spellCheck:"false",dir:"auto"}),e("pre",{"aria-hidden":"true"})]})]}),e("ul",{className:"max-h-80 divide-y divide-gray-100 overflow-y-auto",children:e("li",{className:"",children:e("ul",{className:"text-sm text-gray-700",id:"modal-edit-product-search-result",children:e("div",{className:"tt-dataset tt-dataset-product_search"})})})})]})]}),a("div",{id:"modal-edit-alternative-product",className:"hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",role:"dialog","aria-modal":"true",children:[e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity","aria-hidden":"true"}),a("div",{className:"mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:[e("input",{type:"hidden",id:"modal-edit-alternative-product-search-bom-item-detail-id"}),e("div",{className:"p-4 text-gray-400 text-center",children:"Please type the product name and select the founded item                "}),a("div",{className:"relative",children:[e("svg",{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),a("span",{className:"twitter-typeahead",children:[e("input",{type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint",readOnly:"",autoComplete:"off",spellCheck:"false",tabIndex:"-1",dir:"ltr"}),e("input",{id:"modal-edit-alternative-product-search",type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input",placeholder:"Search...",autoComplete:"off",spellCheck:"false",dir:"auto"}),e("pre",{"aria-hidden":"true"})]})]}),e("ul",{className:"max-h-80 divide-y divide-gray-100 overflow-y-auto",children:e("li",{className:"",children:e("ul",{className:"text-sm text-gray-700",id:"modal-edit-alternative-product-search-result",children:e("div",{className:"tt-dataset tt-dataset-product_search"})})})})]})]})]})]})})};export{de as default};
