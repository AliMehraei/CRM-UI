import{u as D,c as P,r as a,d as B,h as j,s as g,ad as d,j as e,F as E,b as t,f as L,q as A,a as W}from"./main-d68524cb.js";const O=()=>{const o=D();P();const[c,f]=a.useState(""),[b,w]=a.useState(""),[m,y]=a.useState({}),[z,v]=a.useState({}),[I,N]=a.useState(""),[F,k]=a.useState("");a.useState([]);const[H,_]=a.useState(""),[Y,n]=a.useState(!0),r=B(l=>l.contactForm),p=new W,h=j(),i=h.contactId,u=h.id,S="contact";a.useEffect(()=>{o(g(c))},[o]);const M=[{header:"Material",sampleData:"476577",rows:["468423","468405","468398"]}];a.useEffect(()=>{const s=window.location.pathname.split("/");f(d(s[1])+" - Process"),w(s[1]),N("Add Your "+d(s[1])+" List"),k("Your "+d(s[1])+" List"),_("You don't have any"+d(s[1])+" List"),o(g(d(s[1])+" - Process"))},[]),a.useState({}),a.useState(M);const x=()=>{window.location.href=`/${b}/complete/${i}/${u}`},T=async()=>{n(!0);const l=await p.fetchSingleContact(i);if(n(!1),l.status!=200)return;const s=l.data.data.contact;o(A(s))};a.useEffect(()=>{T()},[i]);const C=async()=>{n(!0);const l=await p.bomItemProcess(i,S,u);if(n(!1),l.status!=200)return;const s=l.data.data;console.log(s),y(s.configHeaders),v(s.BOMItemDetails.data)};return a.useEffect(()=>{C()},[]),e(E,{children:t("div",{className:"panel px-0 border-white-light dark:border-[#1b2e4b]",children:[t("div",{className:"flex justify-end flex-wrap gap-4 px-4",children:[e("div",{className:"flex",children:t("div",{children:[t("div",{className:"text-sm font-semibold mt-5",children:[r.first_name," ",r.last_name]}),e("div",{className:"text-s font-semibold ",children:r.email}),e("div",{className:"text-s font-semibold ",children:r.phone})]})}),t("div",{className:"shrink-0",children:[e("img",{src:L(r.image_data),alt:"Contact image",className:"w-20 ltr:ml-auto rtl:mr-auto"}),e("a",{className:"text-sm font-semibold mt-5  text-primary ",target:"_blank",href:`/contact/preview/${i}`,children:"View Contact"})]})]}),e("hr",{className:"border-white-light dark:border-[#849bbc] my-6"}),e("div",{className:"px-4 sm:px-6 lg:px-8",children:e("section",{className:"border-b border-gray-200 pb-4",children:e("div",{className:"sm:flex sm:items-center sm:justify-between",children:e("h3",{className:"title-1",children:e("b",{children:c})})})})}),t("div",{className:"my-4",children:[e("section",{className:" mx-auto px-4 sm:px-6 lg:px-8 pt-4",children:t("div",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-200 pb-4",children:[e("h3",{className:"title-1",children:" "}),t("div",{className:"mt-3 sm:mt-0 sm:ml-4 flex space-x-2",children:[t("a",{href:"https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom",className:"flex btn btn-primary-outline pulse-primary",children:[e("svg",{className:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})}),"Back                "]}),t("button",{onClick:x,className:"flex btn btn-primary pulse-primary",children:["Submit                    ",e("svg",{className:"w-5 h-5 ml-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]}),t("form",{className:"hidden",id:"process-form",method:"post",children:[" ",e("input",{type:"hidden",name:"_token",value:"GV9WLKTU9cEFE02rzpmifMJBxdjWYQPMdMCWYhps"})," "]})]})]})}),e("section",{className:"dashboard-item-view-page  mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-6",children:e("div",{className:"rounded-lg bg-white overflow-hidden shadow p-6",children:t("div",{className:"",children:[e("div",{className:"flex flex-row justify-between h-full",children:t("div",{className:"flex items-center space-x-4",children:[e("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Please select the unmatched items                        "}),t("div",{className:"flex flex-wrap space-x-3 header-status-statistics",children:[t("span",{className:"px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-green-300",children:["Selected: ",e("strong",{children:"0"})]}),t("span",{className:"px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-yellow-200",children:["Nothing Selected: ",e("strong",{children:"0"})]}),t("span",{className:"px-2 py-0.5 text-xs text-gray-600 rounded-full whitespace-nowrap bg-red-200",children:["Nothing Matched: ",e("strong",{children:"11"})]})]})]})}),e("div",{className:"overflow-x-scroll mt-4",children:e("div",{className:"flex flex-col",children:e("div",{className:"flex-grow",children:t("div",{id:"DataTables_Table_0_wrapper",className:"dataTables_wrapper dt-bootstrap4 no-footer",children:[t("div",{className:"grid grid-cols-12 gap-6",children:[e("div",{className:"dt-buttons btn-group flex col-span-10"}),e("div",{id:"DataTables_Table_0_filter",className:"flex col-span-2",children:t("label",{className:"text-sm font-medium text-gray-700 flex items-baseline space-x-2",children:[e("span",{children:"Search:"}),e("input",{type:"search",className:"form-control form-control-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"","aria-controls":"DataTables_Table_0"})]})})]}),t("table",{className:"datatable relative min-w-full border-collapse dataTable no-footer",id:"DataTables_Table_0","aria-describedby":"DataTables_Table_0_info",children:[e("thead",{className:"bg-gray-200 sticky z-30 top-0",children:t("tr",{className:"header-row",children:[e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500 sorting sorting_asc",tabindex:"0","aria-controls":"DataTables_Table_0",rowspan:"1",colspan:"1","aria-label":"#: activate to sort column descending","aria-sort":"ascending",children:"#"}),Object.keys(m).map(l=>e("th",{className:"p-2 whitespace-nowrap text-left text-sm text-gray-500",children:m[l]}))]})}),e("tbody",{children:t("tr",{title:"Not found","data-row-id":"66075",className:"detail-row odd",children:[e("td",{className:"border p-2 text-sm text-gray-500 sorting_1",children:e("span",{className:"!text-yellow-500 p-1 rounded font-bold",children:"1"})}),e("td",{className:"border p-2 text-sm text-gray-500",children:t("button",{className:"flex space-x-2 group items-center",onclick:"openEditProductModal('66075', 'ME D-SWITCH 200V 200mA 250mW SOD-323/G8')",children:[e("span",{className:"group-hover:underline text-left",children:"ME D-SWITCH 200V 200mA 250mW SOD-323/G8"}),e("span",{className:"opacity-0 group-hover:opacity-100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-4 h-4",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"})})})]})}),e("td",{className:"border p-2 text-sm text-gray-500",children:e("span",{children:"10001"})}),e("td",{className:"border text-sm text-gray-500",children:e("strong",{className:"nothing-matched-text p-2",children:"Nothing matched"})})]})})]}),e("div",{className:"dataTables_info",id:"DataTables_Table_0_info",role:"status","aria-live":"polite",children:"Showing 1 to 11 of 11 entries"})]})})})})]})})}),e("section",{className:" mx-auto px-4 sm:px-6 lg:px-8",children:e("div",{className:"sm:flex sm:items-center sm:justify-end border-b border-gray-200 pb-4",children:t("div",{className:"mt-3 sm:mt-0 sm:ml-4 flex space-x-2",children:[t("a",{href:"https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom",className:"flex btn btn-primary-outline pulse-primary",children:[e("svg",{className:"w-5 h-5 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})}),"Back                "]}),t("button",{onClick:x,className:"flex btn btn-primary pulse-primary",children:["Submit                    ",e("svg",{className:"w-5 h-5 ml-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})]}),t("form",{className:"hidden",id:"process-form",action:"https://alpynelectronics.com/en/panel/excess-bom/25/customer/bom/process/BOMItem?240",method:"post",children:[" ",e("input",{type:"hidden",name:"_token",value:"GV9WLKTU9cEFE02rzpmifMJBxdjWYQPMdMCWYhps"})," "]})]})})}),e("div",{className:"page-loader justify-center items-center h-screen w-screen fixed top-0 left-0 cursor-wait bg-white bg-opacity-80 hidden",children:e("img",{src:"https://alpynelectronics.com/front-assets/alpyn/images/loader.gif",alt:"loader"})}),t("div",{id:"modal-edit-product",className:"hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",role:"dialog","aria-modal":"true",children:[e("div",{onclick:"closeEditProductModal()",className:"fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity","aria-hidden":"true"}),t("div",{className:"mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:[e("input",{type:"hidden",id:"modal-edit-product-search-bom-item-detail-id"}),e("div",{className:"p-4 text-gray-400 text-center",children:"Please type the product name and select the founded item            "}),t("div",{className:"relative",children:[e("svg",{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})}),t("span",{className:"twitter-typeahead",children:[e("input",{type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint",readonly:"",autocomplete:"off",spellcheck:"false",tabindex:"-1",dir:"ltr"}),e("input",{id:"modal-edit-product-search",type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input",placeholder:"Search...",autocomplete:"off",spellcheck:"false",dir:"auto"}),e("pre",{"aria-hidden":"true"})]})]}),e("ul",{className:"max-h-80 divide-y divide-gray-100 overflow-y-auto",children:e("li",{className:"",children:e("ul",{className:"text-sm text-gray-700",id:"modal-edit-product-search-result",children:e("div",{className:"tt-dataset tt-dataset-product_search"})})})})]})]}),t("div",{id:"modal-edit-alternative-product",className:"hidden search-modal fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20",role:"dialog","aria-modal":"true",children:[e("div",{onclick:"closeEditAlternativeProductModal()",className:"fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity","aria-hidden":"true"}),t("div",{className:"mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all",children:[e("input",{type:"hidden",id:"modal-edit-alternative-product-search-bom-item-detail-id"}),e("div",{className:"p-4 text-gray-400 text-center",children:"Please type the product name and select the founded item                "}),t("div",{className:"relative",children:[e("svg",{className:"pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})}),t("span",{className:"twitter-typeahead",children:[e("input",{type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-hint",readonly:"",autocomplete:"off",spellcheck:"false",tabindex:"-1",dir:"ltr"}),e("input",{id:"modal-edit-alternative-product-search",type:"text",className:"h-12 w-full border-0 bg-transparent pl-11 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:ring-0 tt-input",placeholder:"Search...",autocomplete:"off",spellcheck:"false",dir:"auto"}),e("pre",{"aria-hidden":"true"})]})]}),e("ul",{className:"max-h-80 divide-y divide-gray-100 overflow-y-auto",children:e("li",{className:"",children:e("ul",{className:"text-sm text-gray-700",id:"modal-edit-alternative-product-search-result",children:e("div",{className:"tt-dataset tt-dataset-product_search"})})})})]})]})]})]})})};export{O as default};