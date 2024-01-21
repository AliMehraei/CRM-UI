import{u as C,a as E,j as e,F as w,A as I,n as B,t as $,J as M,E as L,q as z,a_ as v,d as R,r as f,b as l,$ as G,c as Q,s as U,a$ as D,e as V}from"./main-763a01a7.js";import{A as Y}from"./ActionButtonsComponent-03224dd6.js";import{G as q}from"./GenerateFields-7f03a8d7.js";import{F as P}from"./index-8f26f279.js";import{S as T}from"./react-select.esm-1d97a747.js";import{Z,_ as J}from"./SelectOptions-dd1a6c70.js";import{k as O,E as W}from"./EditPencilIcon-96531cdb.js";import{$ as H}from"./transition-0886e6a5.js";/* empty css                  */import"./index-1f1c1c47.js";import"./use-is-mounted-4d040f41.js";import"./use-resolve-button-type-f0b759c9.js";const K=()=>{const s=C(),p=new E,a=(i,r)=>{s(v({[i]:r}))},u=async i=>{const r=await p.fetchSingleAccount(i);if(r.status!=200)return;const h=r.data.data.account;s(v({account:h}));const x=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],g={};x.forEach(m=>{g[m]=h[m]??null}),s(v(g))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:{"Invoice Information":{"Invoice Owner":e(I,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:B,className:"flex-1",onChange:({value:i})=>{a("owner_id",i)}}),Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:i=>a(i.target.name,i.target.value)}),"Invoice Date":e(P,{options:{dateFormat:"Y-m-d",position:"auto left"},value:"",className:"form-input flex-1",name:"invoice_date",onChange:(i,r)=>a("invoice_date",r)}),"Due Date":e(P,{options:{dateFormat:"Y-m-d",position:"auto left"},value:"",name:"due_date",className:"form-input flex-1",onChange:(i,r)=>a("due_date",r)}),"Sales Commission":e("input",{id:"sales_commission",name:"sales_commission",className:"form-input flex-1 ",onChange:i=>a(i.target.name,i.target.value)}),"Account Name":e(I,{defaultOptions:!0,isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:$,onChange:({value:i})=>{a("account_id",i),u(i)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"readOnly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:i=>a(i.target.name,i.target.value)})},"":{"Sales Order":e(I,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:M,onChange:({value:i})=>{a("sales_order_id",i)},className:"flex-1"}),"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:i=>a(i.target.name,i.target.value)}),"Deal Stage":e(T,{name:"deal_stage",id:"deal_stage",placeholder:"",options:Z,onChange:({value:i})=>{a("deal_stage",i)}}),"Excise Duty":e("input",{id:"excise_duty",name:"excise_duty",className:"form-input flex-1 ",onChange:i=>a(i.target.name,i.target.value)}),Status:e(T,{name:"status",id:"status",placeholder:"",options:J,onChange:({value:i})=>{a("status",i)}}),"Contact Name":e(I,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:L,onChange:({value:i})=>{a("contact_id",i)},className:"flex-1"}),Currency:e(T,{id:"currency",name:"currency",options:z,className:"flex-1"})}}})})})},X=()=>{var c,i,r,h,x,g,m,b,N,n;const s=R(t=>t.invoiceForm),p=C(),a=(t,o)=>{p(v({[t]:o}))},u={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",value:s.billing_street||((c=s.account)==null?void 0:c.billing_street)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",value:s.billing_city||((i=s.account)==null?void 0:i.billing_city)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:s.billing_state||((r=s.account)==null?void 0:r.billing_state)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",value:s.billing_code||((h=s.account)==null?void 0:h.billing_code)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",value:s.billing_country||((x=s.account)==null?void 0:x.billing_country)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:s.shipping_street||((g=s.account)==null?void 0:g.shipping_street)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:s.shipping_city||((m=s.account)==null?void 0:m.shipping_city)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:s.shipping_state||((b=s.account)==null?void 0:b.shipping_state)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:s.shipping_code||((N=s.account)==null?void 0:N.shipping_code)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:s.shipping_country||((n=s.account)==null?void 0:n.shipping_country)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:u})})})},k=({item:s,field:p,handleChangeField:a})=>{const[u,c]=f.useState(!0),i=f.useRef(null),r=f.useRef(null),h=f.useRef(null),x=()=>{c(m=>!m)},g=()=>{var b,N,n;let m;u?m=(r.current?parseFloat((b=r.current)==null?void 0:b.value):0)/100*s.amount:m=h.current?parseFloat((N=h.current)==null?void 0:N.value):0,a(p,m,s.id),(n=i.current)==null||n.click()};return e(w,{children:e(O,{className:"relative",children:({open:m})=>l(w,{children:[e(O.Button,{ref:i,className:"btn w-5 h-5 p-0 rounded-full ml-1",children:e(W,{})}),e(H,{as:f.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(O.Panel,{className:"absolute left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-80",children:e("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ",children:l("div",{className:"relative grid gap-8 bg-white p-7 w-full",children:[l("div",{className:"flex gap-3",children:[l("label",{className:"inline-block",children:[e("input",{checked:u,type:"radio",name:"type",className:"form-radio",onChange:x}),e("span",{children:"Percentage"})]}),e("input",{name:"total",ref:r,hidden:!u,className:"form-input mx-2 w-20  h-8  cursor-text"})]}),l("div",{className:"block gap-3",children:[l("label",{className:"inline-block",children:[e("input",{checked:!u,type:"radio",name:"type",className:"form-radio",onChange:x}),e("span",{className:"",children:"Direct Price Reduction"})]}),e("input",{ref:h,name:"total",hidden:u,className:"form-input mx-2 w-20 h-8 cursor-text"})]}),l("div",{className:"flex gap-3",children:[e("button",{className:"btn btn-primary",onClick:g,children:"Submit"}),e("button",{className:"btn btn-warning",onClick:()=>{var b;return(b=i.current)==null?void 0:b.click()},children:"Cancel"})]})]})})})})]})})})},ee=()=>{const s=C(),p=new E,[a,u]=f.useState({amount:0,subtotal:0,discount:0,tax:0,adjustment:0,grandTotal:0}),[c,i]=f.useState([{id:1,product_id:null,description:null,quantity:0,list_price:0,amount:0,discount:0,tax:0,total:0}]),r=(n,t,o)=>{const d={...c.find(y=>y.id===o)};d[n]=t;const _=(parseFloat(d.quantity)||0)*(parseFloat(d.list_price)||0),S=_-((parseFloat(d.discount)||0)+(parseFloat(d.tax)||0));d.amount=_,d.total=S,h(d)},h=n=>{const t=c.map(o=>o.id===n.id?{...o,...n}:o);i(t),s(v({items:t}))},x=()=>{let n;n=c!=null&&c.length?c.reduce((t,o)=>o.id>t?o.id:t,c[0].id):0,i([...c,{id:n+1,product_id:null,description:null,quantity:0,list_price:0,amount:0,discount:0,tax:0,total:0}])},g=(n,t)=>{const o={...a};o[n]=parseFloat(t),o.grandTotal=o.subtotal-o.discount+o.tax+o.adjustment,u(o)};f.useEffect(()=>{s(v({summary:a}))},[a]);const m=(n=null)=>{i(c.filter(t=>t.id!==n.id))},b=()=>{const n=c.reduce((y,F)=>y+(parseFloat(F.total)||0),0),t=n,o=a.discount,d=a.tax,_=a.adjustment,S=n-o+d+_;u({amount:t,subtotal:n,discount:o,tax:d,adjustment:_,grandTotal:S})},N=async(n,t)=>{const o=await p.fetchSingleProduct(n);if(o.status!==200)return;const d=o.data.data.product,_=c.find(j=>j.id===t),S=c.findIndex(j=>j.id===t),y={..._,product_id:n,list_price:d.unit_price!=null&&d.unit_price!=""?d.unit_price:0,tax:d.tax!=null&&d.tax!=""?d.tax:0,description:d.description},F={...y,amount:parseInt(y.quantity??0)*parseFloat(y.list_price??0)},A={...c,[S]:F};i(Object.values(A)),s(v({items:A}))};return f.useEffect(()=>{b()},[c]),e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:l("div",{className:"",children:[e("div",{className:"text-lg",children:"Invoice Items :"}),l("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:l("table",{className:"table-auto overflow-scroll w-full",children:[e("thead",{children:l("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-full",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Discount"}),e("th",{className:"w-1",children:"Tax"}),e("th",{className:"w-1",children:"Total"})]})}),e("tbody",{children:c.map(n=>l("tr",{className:"align-top",children:[e("td",{children:n.id}),l("td",{children:[e(I,{defaultOptions:!0,isMulti:!1,placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:G,onChange:({value:t})=>{N(t,n.id)},className:"flex-1"}),e("textarea",{name:"description",className:"form-textarea mt-4 flex-1",placeholder:"Enter Description",defaultValue:n.description,onChange:t=>r(t.target.name,t.target.value,n.id)})]}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",defaultValue:n.quantity,onChange:t=>r(t.target.name,t.target.value,n.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,value:n.list_price,onChange:t=>r(t.target.name,t.target.value,n.id)})}),e("td",{children:e("input",{name:"amount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.amount,disabled:!0,onChange:t=>r(t.target.name,t.target.value,n.id)})}),e("td",{children:l("div",{className:"flex",children:[e("input",{name:"discount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.discount,disabled:!0,onChange:t=>r(t.target.name,t.target.value,n.id)}),e(k,{item:n,handleChangeField:r,field:"discount"})]})}),e("td",{children:l("div",{className:"flex",children:[e("input",{name:"tax",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.tax,disabled:!0,onChange:t=>r(t.target.name,t.target.value,n.id)}),e(k,{item:n,handleChangeField:r,field:"tax"})]})}),e("td",{children:e("input",{name:"total",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.total,disabled:!0,onChange:t=>r(t.target.name,t.target.value,n.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>m(n),children:l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n.id))})]})}),l("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>x(),children:"Add Item"})}),l("div",{className:"sm:w-2/5",children:[l("div",{className:"flex items-center justify-between",children:[e("div",{children:"Subtotal(€)"}),e("input",{id:"subtotal",name:"subtotal",type:"text",value:a.subtotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed",disabled:!0})]}),l("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Discount(€)"}),l("div",{className:"flex",children:[e("input",{id:"discount",name:"discount",type:"text",value:a.discount,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b] cursor-text"}),e(k,{item:a,handleChangeField:g,field:"discount"})]})]}),l("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Tax(€)"}),l("div",{className:"flex",children:[e("input",{id:"tax",name:"tax",type:"text",value:a.tax,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"}),e(k,{item:a,handleChangeField:g,field:"tax"})]})]}),l("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Adjustment(€)"}),e("input",{id:"adjustment",name:"adjustment",type:"text",value:a.adjustment,onChange:n=>g(n.target.name,n.target.value),className:"w-64 form-input "})]}),l("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e("div",{className:"flex-1",children:"Grand Total(€)"}),e("input",{id:"approved_by",name:"approved_by_id",type:"text",value:a.grandTotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})]})]})]})]})]},"Quote Items")})})})},te=()=>{const s=C(),p=(a,u)=>{s(v({[a]:u}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:l("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),l("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_and_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",onChange:a=>p(a.target.name,a.target.value),placeholder:""})]},"terms_and_conditions")]},"Terms and Conditions")})})})},ae=()=>{const s=C(),p=(a,u)=>{s(v({[a]:u}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:l("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),l("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",onChange:a=>p(a.target.name,a.target.value),placeholder:""})]},"description")]},"Terms and Conditions")})})})},ne=()=>l("div",{className:"mt-8 px-4",children:[e(K,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(te,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{})]}),fe=()=>{const{hasPermission:s}=Q(),p=R(u=>u.invoiceForm),a=C();return f.useEffect(()=>{a(U("Invoice Add"))}),f.useEffect(()=>{a(D())},[]),s("create-invoice")?l("div",{className:"px-4",children:[e(Y,{formState:p,resetForm:D}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ne,{})})})]}):e(V,{})};export{fe as default};
