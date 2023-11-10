import{u as k,e as F,b as U,a as e,l as I,m as X,j as s,f as B,n as Z,E as H,aW as z,x as J,k as L,F as w,aV as _,r as b,V as K,h as Q,c as ee,s as te,aX as M,L as G}from"./main-22663fbf.js";import{G as W,A as ae}from"./GenerateFields-d6e292b2.js";import{F as $}from"./index-008d6758.js";import{S as D}from"./react-select.esm-d04eef86.js";import{k as T,E as ne}from"./EditPencilIcon-fc4917f1.js";import{$ as le}from"./transition-9e65620e.js";import{A as ie}from"./AttachmentSection-2f8be997.js";/* empty css                  */import"./index-f85a6b97.js";import"./use-is-mounted-c3675a90.js";import"./use-resolve-button-type-dbe5aa6f.js";const se=()=>{var h,x,p,g,v,n,c,t,f,N,C,S,j,E,O,A;const d=k(),a=F(l=>l.invoiceForm),r=new U,i=(l,y)=>{d(_({[l]:y}))},o=async l=>{const y=await r.fetchSingleAccount(l);if(y.status!=200)return;const P=y.data.data.account;d(_({account:P}));const Y=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],R={};Y.forEach(q=>{R[q]=P[q]??null}),d(_(R))},m=[{value:"erzeugt",label:"Erzeugt"},{value:"genehmigt",label:"Genehmigt"},{value:"geliefert",label:"Geliefert"},{value:"abgesagt",label:"Abgesagt"}],u={"Invoice Information":{"Invoice Owner":e(I,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:X,className:"flex-1",onChange:({value:l})=>{i("owner_id",l)},defaultValue:{value:(h=a.owner)==null?void 0:h.id,label:s("div",{className:"flex items-center",children:[a.owner?e("img",{src:B(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,s("div",{children:[e("div",{className:"text-sm font-bold",children:((x=a.owner)==null?void 0:x.first_name)+" "+((p=a.owner)==null?void 0:p.last_name)}),e("div",{className:"text-xs text-gray-500",children:(g=a.owner)==null?void 0:g.email})]})]},(v=a.owner)==null?void 0:v.id)}}),Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:l=>i(l.target.name,l.target.value),defaultValue:a.subject}),"Invoice Date":e($,{options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:a.invoice_date?new Date(a.invoice_date):null},value:a.invoice_date,className:"form-input flex-1",name:"invoice_date",onChange:(l,y)=>i("invoice_date",y)}),"Due Date":e($,{options:{dateFormat:"Y-m-d",position:"auto left",defaultDate:a.due_date?new Date(a.due_date):null},value:a.invoice_date,name:"due_date",className:"form-input flex-1",onChange:(l,y)=>i("due_date",y)}),"Sales Commission":e("input",{id:"sales_commission",name:"sales_commission",defaultValue:a.sales_commission,className:"form-input flex-1 ",onChange:l=>i(l.target.name,l.target.value)}),"Account Name":e(I,{defaultOptions:!0,isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:Z,onChange:({value:l})=>{i("account_id",l),o(l)},className:"flex-1",defaultValue:{value:(n=a.account)==null?void 0:n.id,label:s("div",{className:"flex items-center",children:[a.account?e("img",{src:B(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,s("div",{children:[e("div",{className:"text-sm font-bold",children:(c=a.account)==null?void 0:c.account_name}),e("div",{className:"text-xs text-gray-500",children:(t=a.account)==null?void 0:t.email})]})]},(f=a.account)==null?void 0:f.id)}}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",defaultValue:a.zoho_books_id,className:"form-input flex-1 ",onChange:l=>i(l.target.name,l.target.value)})},"":{"Sales Order":e(I,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:H,onChange:({value:l})=>{i("sales_order_id",l)},defaultValue:{value:(N=a.sales_order)==null?void 0:N.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(C=a.sales_order)==null?void 0:C.subject})},(S=a.sales_order)==null?void 0:S.id)},className:"flex-1"}),"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",defaultValue:a.purchase_order,onChange:l=>i(l.target.name,l.target.value)}),"Deal Stage":e(D,{name:"deal_stage",id:"deal_stage",placeholder:"",options:z,defaultValue:z.find(l=>l.value==a.deal_stage),onChange:({value:l})=>{i("deal_stage",l)}}),"Excise Duty":e("input",{id:"excise_duty",name:"excise_duty",className:"form-input flex-1 ",defaultValue:a.excise_duty,onChange:l=>i(l.target.name,l.target.value)}),Status:e(D,{name:"status",id:"status",placeholder:"",options:m,onChange:({value:l})=>{i("status",l)},defaultValue:m.find(l=>l.value==a.status)}),"Contact Name":e(I,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:J,onChange:({value:l})=>{i("contact_id",l)},defaultValue:{value:(j=a.contact)==null?void 0:j.id,label:e("div",{className:"flex items-center",children:s("div",{className:"text-sm font-bold",children:[(E=a.contact)==null?void 0:E.first_name," ",(O=a.contact)==null?void 0:O.last_name]})},(A=a.contact)==null?void 0:A.id)},className:"flex-1"}),Currency:e(D,{id:"currency",name:"currency",options:L,defaultValue:L.find(l=>l.value==a.currency),className:"flex-1"})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(W,{fields:u})})})},re=()=>{var o,m,u,h,x,p,g,v,n,c;const d=k(),a=F(t=>t.invoiceForm),r=(t,f)=>{d(_({[t]:f}))},i={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,onChange:t=>r(t.target.name,t.target.value),value:a.billing_street||((o=a.account)==null?void 0:o.billing_street)||"",defaultValue:a.billing_street,className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:a.billing_city||((m=a.account)==null?void 0:m.billing_city)||"",defaultValue:a.billing_city,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:a.billing_state||((u=a.account)==null?void 0:u.billing_state)||"",defaultValue:a.billing_state,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:a.billing_code||((h=a.account)==null?void 0:h.billing_code)||"",defaultValue:a.billing_code,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:a.billing_country||((x=a.account)==null?void 0:x.billing_country)||"",defaultValue:a.billing_country,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",defaultValue:a.shipping_street,value:a.shipping_street||((p=a.account)==null?void 0:p.shipping_street)||"",onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",defaultValue:a.shipping_city,value:a.shipping_city||((g=a.account)==null?void 0:g.shipping_city)||"",onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:a.shipping_state||((v=a.account)==null?void 0:v.shipping_state)||"",defaultValue:a.shipping_state,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:a.shipping_code||((n=a.account)==null?void 0:n.shipping_code)||"",defaultValue:a.shipping_code,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:a.shipping_country||((c=a.account)==null?void 0:c.shipping_country)||"",defaultValue:a.shipping_country,onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1"})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(W,{fields:i})})})},V=({item:d,field:a,handleChangeField:r})=>{const[i,o]=b.useState(!0),m=b.useRef(null),u=b.useRef(null),h=b.useRef(null),x=()=>{o(g=>!g)},p=()=>{var v,n,c;let g;i?g=(u.current?parseFloat((v=u.current)==null?void 0:v.value):0)/100*d.amount:g=h.current?parseFloat((n=h.current)==null?void 0:n.value):0,r(a,g,d.id),(c=m.current)==null||c.click()};return e(w,{children:e(T,{className:"relative",children:({open:g})=>s(w,{children:[e(T.Button,{ref:m,className:"btn w-5 h-5 p-0 rounded-full ml-1",children:e(ne,{})}),e(le,{as:b.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(T.Panel,{className:"absolute left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-80",children:e("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ",children:s("div",{className:"relative grid gap-8 bg-white p-7 w-full",children:[s("div",{className:"flex gap-3",children:[s("label",{className:"inline-block",children:[e("input",{checked:i,type:"radio",name:"type",className:"form-radio",onChange:x}),e("span",{children:"Percentage"})]}),e("input",{name:"total",ref:u,hidden:!i,className:"form-input mx-2 w-20  h-8  cursor-text"})]}),s("div",{className:"block gap-3",children:[s("label",{className:"inline-block",children:[e("input",{checked:!i,type:"radio",name:"type",className:"form-radio",onChange:x}),e("span",{className:"",children:"Direct Price Reduction"})]}),e("input",{ref:h,name:"total",hidden:i,className:"form-input mx-2 w-20 h-8 cursor-text"})]}),s("div",{className:"flex gap-3",children:[e("button",{className:"btn btn-primary",onClick:p,children:"Submit"}),e("button",{className:"btn btn-warning",onClick:()=>{var v;return(v=m.current)==null?void 0:v.click()},children:"Cancel"})]})]})})})})]})})})},ce=()=>{const d=F(n=>n.invoiceForm),a=k(),[r,i]=b.useState({amount:0,subtotal:0,discount:0,tax:0,adjustment:0,grandTotal:0,...d.summary,...d.tax,...d.discount,...d.adjustment}),[o,m]=b.useState([]);b.useEffect(()=>{m(Object.values(d.items))},[]);const u=(n,c,t)=>{const f={...o.find(S=>S.id===t)};f[n]=c;const N=(parseFloat(f.quantity)||0)*(parseFloat(f.list_price)||0),C=N-((parseFloat(f.discount)||0)+(parseFloat(f.tax)||0));f.amount=N,f.total=C,h(f)},h=n=>{const c=o.map(t=>t.id===n.id?{...t,...n}:t);m(c),a(_({items:c}))},x=()=>{let n;n=o!=null&&o.length?o.reduce((c,t)=>t.id>c?t.id:c,o[0].id):0,m([...o,{id:n+1,product_id:null,description:null,quantity:null,list_price:null,amount:null,discount:null,tax:null,total:null}])},p=(n,c)=>{const t={...r};t[n]=parseFloat(c),t.grandTotal=t.subtotal-t.discount+t.tax+t.adjustment,i(t)};b.useEffect(()=>{a(_({summary:r}))},[r]);const g=(n=null)=>{m(o.filter(c=>c.id!==n.id))},v=()=>{const n=o.reduce((S,j)=>S+(parseFloat(j.total)||0),0),c=n,t=r.discount,f=r.tax,N=r.adjustment,C=n-t+f+N;i({amount:c,subtotal:n,discount:t,tax:f,adjustment:N,grandTotal:C})};return b.useEffect(()=>{v()},[o]),e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Invoice Items :"}),s("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:s("table",{className:"table-auto overflow-scroll w-full",children:[e("thead",{children:s("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-full",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Discount"}),e("th",{className:"w-1",children:"Tax"}),e("th",{className:"w-1",children:"Total"})]})}),e("tbody",{children:o.map(n=>{var c;return s("tr",{className:"align-top",children:[e("td",{children:n.id}),s("td",{children:[e(I,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:K,onChange:({value:t})=>{u("product_id",t,n.id)},className:"flex-1  min-w-[200px]",defaultValue:{value:n.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(c=n.product)==null?void 0:c.product_name})})},n.id)}}),e("textarea",{name:"description",className:"form-textarea mt-4 flex-1",placeholder:"Enter Description",defaultValue:n.description,onChange:t=>u(t.target.name,t.target.value,n.id)})]}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",defaultValue:n.quantity,onChange:t=>u(t.target.name,t.target.value,n.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:n.list_price,onChange:t=>u(t.target.name,t.target.value,n.id)})}),e("td",{children:e("input",{name:"amount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.amount,disabled:!0,onChange:t=>u(t.target.name,t.target.value,n.id)})}),e("td",{children:s("div",{className:"flex",children:[e("input",{name:"discount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.discount,disabled:!0,onChange:t=>u(t.target.name,t.target.value,n.id)}),e(V,{item:n,handleChangeField:u,field:"discount"})]})}),e("td",{children:s("div",{className:"flex",children:[e("input",{name:"tax",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.tax,disabled:!0,onChange:t=>u(t.target.name,t.target.value,n.id)}),e(V,{item:n,handleChangeField:u,field:"tax"})]})}),e("td",{children:e("input",{name:"total",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:n.total,disabled:!0,onChange:t=>u(t.target.name,t.target.value,n.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>g(n),children:s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},n.id)})})]})}),s("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>x(),children:"Add Item"})}),s("div",{className:"sm:w-2/5",children:[s("div",{className:"flex items-center justify-between",children:[e("div",{children:"Subtotal(€)"}),e("input",{id:"subtotal",name:"subtotal",type:"text",value:r.subtotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed",disabled:!0})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Discount(€)"}),s("div",{className:"flex",children:[e("input",{id:"discount",name:"discount",type:"text",value:r.discount,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b] cursor-text"}),e(V,{item:r,handleChangeField:p,field:"discount"})]})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Tax(€)"}),s("div",{className:"flex",children:[e("input",{id:"tax",name:"tax",type:"text",value:r.tax,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"}),e(V,{item:r,handleChangeField:p,field:"tax"})]})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Adjustment(€)"}),e("input",{id:"adjustment",name:"adjustment",type:"text",value:r.adjustment,onChange:n=>p(n.target.name,n.target.value),className:"w-64 form-input "})]}),s("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e("div",{className:"flex-1",children:"Grand Total(€)"}),e("input",{id:"grand_total",name:"grand_total",type:"text",value:r.grandTotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})]})]})]})]})]},"Quote Items")})})})},oe=()=>{const d=k(),a=F(i=>i.invoiceForm),r=(i,o)=>{d(_({[i]:o}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),s("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_and_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",onChange:i=>r(i.target.name,i.target.value),value:a.terms_conditions,placeholder:""})]},"terms_and_conditions")]},"Terms and Conditions")})})})},de=()=>{const d=k(),a=F(i=>i.invoiceForm),r=(i,o)=>{d(_({[i]:o}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),s("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",onChange:i=>r(i.target.name,i.target.value),value:a.description,placeholder:""})]},"description")]},"Terms and Conditions")})})})},ue=()=>{const a=Q().id;return s("div",{className:"mt-8 px-4",children:[e(se,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(re,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ce,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(de,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{modelId:a,modelName:"invoice"})]})},we=()=>{const{hasPermission:d}=ee(),a=F(p=>p.invoiceForm),[r,i]=b.useState(!0),m=Q().id,u=new U,h=k();b.useEffect(()=>{h(te("Invoice Edit"))}),b.useEffect(()=>{h(M())},[]);const x=async()=>{const p=await u.fetchSingleInvoice(m);if(p.status!=200)return;const g=p.data.data.invoice;h(_(g))};return b.useEffect(()=>{x().then(()=>{i(!1)})},[m]),b.useEffect(()=>{h(_({api:"updateSingleInvoice",redirectTo:"/invoice/edit/:id",action:"edit"}))},[]),r?e(G,{}):!d("update-invoice")||r?e(G,{}):s("div",{className:"px-4",children:[e(ae,{formState:a,resetForm:M}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ue,{})})})]})};export{we as default};
