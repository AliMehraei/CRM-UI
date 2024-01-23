import{u as b,a as C,d as v,j as e,F as x,A as _,v as L,G as M,J as E,t as B,$ as Y,n as T,Z as p,r as S,b as u,a0 as P,a1 as Q,c as R,s as V,a2 as j,e as U}from"./main-47e64be7.js";import{G as N,R as $}from"./GenerateFields-ecaae248.js";import{S as A}from"./react-select.esm-a7d99c23.js";import{S as G,r as H,s as z,t as W}from"./SelectOptions-3a2c6409.js";import{F as k}from"./index-c90cb229.js";import{F as Z}from"./FileUploadComponent-86656e61.js";import{A as J}from"./ActionButtonsComponent-b1e33665.js";/* empty css                  */import"./ClearButtonComponent-9216c711.js";import"./index-2a8dd478.js";const K=()=>{const d=b(),i=new C;v(o=>o.salesOrderForm);const t=(o,m)=>{d(p({[o]:m}))},a=async o=>{const m=await i.fetchSingleAccount(o);if(m.status!=200)return;const h=m.data.data.account;d(p({account:h}));const y=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],g={};y.forEach(f=>{g[f]=h[f]??null}),d(p(g))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{Header:{"Account Name":e(_,{defaultOptions:!0,isMulti:!1,required:!0,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:L,onChange:({value:o})=>{t("account_id",o),a(o)},className:"flex-1"}),"Contact Name":e(_,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:M,onChange:({value:o})=>{t("contact_id",o)},className:"flex-1"}),"Quote Name":e(_,{defaultOptions:!0,isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:E,onChange:({value:o})=>{t("quote_id",o)},className:"flex-1"}),Currency:e(A,{options:B,name:"currency",id:"currency",onChange:({value:o})=>{t("currency",o)},className:"flex-1"})},"":{"Deals Name":e(_,{defaultOptions:!0,isMulti:!1,id:"deal_id",placeholder:"Type at least 2 characters to search...",name:"deal_id",loadOptions:Y,onChange:({value:o})=>{t("deal_id",o)},className:"flex-1"}),"Deal Stage":e(A,{options:G,name:"deal_stage",id:"deal_stage",onChange:({value:o})=>{t("deal_stage",o)},className:"flex-1"}),"SalesOrders Owner":e(_,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:T,onChange:({value:o})=>{t("owner_id",o)},className:"flex-1"}),"Sales Person":e(_,{defaultOptions:!0,isMulti:!1,id:"sales_person_id",placeholder:"Type at least 2 characters to search...",name:"sales_person_id",loadOptions:T,onChange:({value:o})=>{t("sales_person_id",o)},className:"flex-1"}),"Approved By":e(_,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:T,onChange:({value:o})=>{t("approved_by_id",o)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},X=()=>{const d=b();new C;const i=v(l=>l.salesOrderForm),t=(l,o)=>{d(p({[l]:o}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{"Sales Orders Information":{"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),"Customer PO Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"customer_po_date",value:"",className:"form-input flex-1",onChange:(l,o)=>t("customer_po_date",o)}),"PO Upload":e(Z,{id:"po_upload",modelName:"salesOrder",formState:i,formAttribute:"po_upload",updateFormData:p}),"SO Type":e(A,{options:H,name:"so_type",id:"so_type",onChange:({value:l})=>{t("so_type",l)},className:"flex-1"}),"Parent SO Nr.":e("input",{id:"parent_so_nr",name:"parent_so_nr",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),Pending:e("input",{id:"pending",name:"pending",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)}),Status:e(A,{options:z,name:"status",id:"status",onChange:({value:l})=>{t("status",l)},className:"flex-1"}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value)})}}})})})},ee=()=>{v(n=>n.salesOrderForm);const[d,i]=S.useState({total:0}),[t,a]=S.useState([{id:1,amount:0,list_price:0,quantity:0,description:null,customer_part_id:null,date_code:null,requested_delivery_date:null,estimated_delivery_date:null}]),l=b(),o=new C,m=(n,s,c)=>{const r={...t.find(w=>w.id===c)},O=t.findIndex(w=>w.id===c),F={...r,[n]:s},I={...F,amount:parseInt(F.quantity??0)*parseFloat(F.list_price??0)},D={...t,[O]:I};a(Object.values(D)),l(p({items:D}))},h=async(n,s)=>{const c=await o.fetchSingleProduct(n);if(c.status!==200)return;const r=c.data.data.product,O=t.find(q=>q.id===s),F=t.findIndex(q=>q.id===s),I={...O,product_id:n,list_price:r.unit_price??0,description:r.description},D={...I,amount:parseInt(I.quantity??0)*parseFloat(I.list_price??0)},w={...t,[F]:D};a(Object.values(w)),l(p({items:w}))},y=()=>{let n;n=t!=null&&t.length?t.reduce((c,r)=>r.id>c?r.id:c,t[0].id):0;let s=[...t,{id:n+1,amount:0,list_price:0}];a(s),l(p({items:s}))};S.useEffect(()=>{l(p({summary:d}))},[d]);const g=(n=null)=>{const s=t.filter(c=>c.id!=n.id);a(s),l(p({items:s}))},f=()=>{const n=t.reduce((s,c)=>s+(parseFloat(c.amount)||0),0);i({total:n})};return S.useEffect(()=>{f()},[t]),e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:u("div",{className:"",children:[u("div",{className:"text-lg",children:["Ordered Items",e($,{})," :"]}),u("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:u("table",{className:"table-auto w-5",children:[e("thead",{children:u("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Requested Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:t.map(n=>u("tr",{className:"align-top",children:[u("td",{children:[e(_,{defaultOptions:!1,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:s})=>{h(s,n.id)},className:"flex-1  min-w-[200px]"}),e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:s=>m(s.target.name,s.target.value,n.id)})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:s=>m(s.target.name,s.target.value,n.id)})}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:s=>m(s.target.name,s.target.value,n.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,onChange:s=>m(s.target.name,s.target.value,n.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",onChange:s=>m(s.target.name,s.target.value,n.id)})}),e("td",{children:e("input",{name:"amount",type:"text",value:n.amount,className:"flex-1 form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,onChange:s=>m(s.target.name,s.target.value,n.id)})}),e("td",{children:e(k,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",value:n.requested_delivery_date,onChange:(s,c)=>m("requested_delivery_date",c,n.id)})}),e("td",{children:e(k,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},placeholder:"Y-m-d",className:"form-input flex-1 min-w-[200px]",value:n.estimated_delivery_date,onChange:(s,c)=>m("estimated_delivery_date",c,n.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>g(n),children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n.id))})]})}),u("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>y(),children:"Add Item"})}),e("div",{className:"sm:w-2/5",children:u("div",{className:"flex items-center justify-between",children:[e("div",{children:"Total(€)"}),e("input",{id:"total",name:"total",type:"text",value:d.total,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed",disabled:!0})]})})]})]})]},"Quote Items")})})})},ae=()=>{const d=b(),i=(a,l)=>{d(p({[a]:l}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{"SO line":{"Requested Delivery Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left"},placeholder:"Y-m-d",name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(a,l)=>i("requested_delivery_date",l)}),"Product Name":e(_,{defaultOptions:!1,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:P,onChange:({value:a})=>{i("product_id",a)},className:"flex-1"}),"Customer part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:a=>i(a.target.name,a.target.value)}),"List Price":e("input",{type:"number",id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),"Estimated Delivery Date":e(k,{options:{dateFormat:"Y-m-d ",position:"auto left"},placeholder:"Y-m-d",name:"estimated_delivery_date",value:"",className:"form-input flex-1",onChange:(a,l)=>i("estimated_delivery_date",l)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)})}}})})})},te=()=>{var m,h,y,g,f;const d=b(),i=new C,t=v(n=>n.salesOrderForm),a=(n,s)=>{d(p({[n]:s}))},l=async n=>{const s=await i.fetchSingleAvailability(n);if(s.status!=200)return;const c=s.data.data.availability;d(p({availability:c}))},o={"Linked Availability":{"Availability Name":e(_,{defaultOptions:!1,isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:Q,onChange:({value:n})=>{a("availability_id",n),l(n)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",disabled:!0,onChange:n=>a(n.target.name,n.target.value),defaultValue:(m=t.availability)==null?void 0:m.availability_no}),"Availability Cost":e("input",{type:"number",id:"availability_cost",name:"availability_cost",className:"form-input flex-1  disabled:pointer-events-none bg-[#eee]",disabled:!0,onChange:n=>a(n.target.name,n.target.value),defaultValue:(h=t.availability)==null?void 0:h.cost})},"":{"Availability Quantity":e("input",{type:"number",disabled:!0,id:"availability_quantity",name:"availability_quantity",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:n=>a(n.target.name,n.target.value),defaultValue:(y=t.availability)==null?void 0:y.quantity}),"Availability LT":e("input",{id:"availability_lt",name:"availability_lt",disabled:!0,className:"form-input flex-1 disabled:pointer-events-none bg-[#eee] ",onChange:n=>a(n.target.name,n.target.value),defaultValue:(g=t.availability)==null?void 0:g.lead_time}),"Availability DC":e("input",{disabled:!0,id:"availability_dc",name:"availability_dc",className:"form-input flex-1 disabled:pointer-events-none bg-[#eee]",onChange:n=>a(n.target.name,n.target.value),defaultValue:(f=t.availability)==null?void 0:f.date_code})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:o})})})},ne=()=>{var l,o,m,h,y,g,f,n,s,c;const d=b();new C;const i=v(r=>r.salesOrderForm),t=(r,O)=>{d(p({[r]:O}))},a={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",value:i.billing_street||((l=i.account)==null?void 0:l.billing_street)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",value:i.billing_city||((o=i.account)==null?void 0:o.billing_city)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:i.billing_state||((m=i.account)==null?void 0:m.billing_state)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",value:i.billing_code||((h=i.account)==null?void 0:h.billing_code)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",value:i.billing_country||((y=i.account)==null?void 0:y.billing_country)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:i.shipping_street||((g=i.account)==null?void 0:g.shipping_street)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:i.shipping_city||((f=i.account)==null?void 0:f.shipping_city)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:i.shipping_state||((n=i.account)==null?void 0:n.shipping_state)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:i.shipping_code||((s=i.account)==null?void 0:s.shipping_code)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:i.shipping_country||((c=i.account)==null?void 0:c.shipping_country)||"",onChange:r=>t(r.target.name,r.target.value),className:"form-input flex-1"})}};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:a})})})},ie=()=>{v(a=>a.salesOrderForm);const d=b();new C;const i=(a,l)=>{d(p({[a]:l}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:a=>i(a.target.name,a.target.value)})},"":{}}})})})},le=()=>{v(a=>a.salesOrderForm);const d=b();new C;const i=(a,l)=>{d(p({[a]:l}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>i(a.target.name,a.target.value)})},"":{}}})})})},se=()=>{const d=b();v(a=>a.salesOrderForm);const i=(a,l)=>{d(p({[a]:l}))};return e(x,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{"Technical information":{"Waiting for approval":e("input",{id:"waiting_approval",type:"checkbox",name:"waiting_approval",className:"form-checkbox",onChange:a=>i(a.target.name,a.target.checked)}),Approval:e("input",{id:"approval",type:"checkbox",name:"approval",className:"form-checkbox",onChange:a=>i(a.target.name,a.target.checked)}),"Approve Changes":e(A,{options:W,name:"approval_changes",id:"approval_changes",onChange:({value:a})=>{i("approval_changes",a)},className:"flex-1"}),Tech:e("input",{id:"tech",type:"checkbox",name:"tech",className:"form-checkbox",onChange:a=>i(a.target.name,a.target.checked)})},"":{"Technical info":e("textarea",{id:"tech_info",rows:2,name:"tech_info",className:"form-textarea flex-1",placeholder:"",onChange:a=>i(a.target.name,a.target.value)}),Subform:e("textarea",{id:"subform",rows:2,name:"subform",className:"form-textarea flex-1",placeholder:"",onChange:a=>i(a.target.name,a.target.value)})}}})})})},re=()=>u("div",{className:"mt-8 px-4",children:[e(K,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{},"SalesOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{},"SalesItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{},"SOLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(te,{},"LinkedAvailabilitySection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ne,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(le,{},"DescriptionInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{},"TechnicalInformationSection")]}),be=()=>{const{hasPermission:d}=R(),i=v(a=>a.salesOrderForm),t=b();return S.useEffect(()=>{t(V("Sales Order Add"))}),S.useEffect(()=>{t(j())},[]),d("create-sales-order")?u("div",{className:"px-4",children:[e(J,{formState:i,resetForm:j}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(re,{})})})]}):e(U,{})};export{be as default};
