import{u as C,e as E,b as e,F as w,k as B,l as z,z as M,aQ as G,v as $,i as L,aR as v,a as R,r as f,j as s,T as Q,c as U,s as V,aS as D,d as Y}from"./main-147692d0.js";import{A as W}from"./ActionButtonsComponent-4e967826.js";import{A as k}from"./react-select-async.esm-b9121d10.js";import{G as q}from"./GenerateFields-c60abd43.js";import{F as P}from"./index-3577889e.js";import{S as T}from"./react-select.esm-70d620c0.js";import{k as A,E as Z}from"./EditPencilIcon-c46d62fd.js";import{$ as H}from"./transition-46e5460f.js";/* empty css                  */import"./Select-aecb2a80.esm-623bc0fb.js";import"./use-is-mounted-5f45f032.js";import"./use-resolve-button-type-a7597640.js";const J=()=>{const l=C(),p=new E,a=(n,u)=>{l(v({[n]:u}))},d=async n=>{const u=await p.fetchSingleAccount(n);if(u.status!=200)return;const b=u.data.data.account;l(v({account:b}));const x=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],m={};x.forEach(h=>{m[h]=b[h]??null}),l(v(m))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:{"Invoice Information":{"Invoice Owner":e(k,{defaultOptions:!0,isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:B,className:"flex-1",onChange:({value:n})=>{a("owner_id",n)}}),Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),"Invoice Date":e(P,{options:{dateFormat:"Y-m-d",position:"auto left"},value:"",className:"form-input flex-1",name:"invoice_date",onChange:(n,u)=>a("invoice_date",u)}),"Due Date":e(P,{options:{dateFormat:"Y-m-d",position:"auto left"},value:"",name:"due_date",className:"form-input flex-1",onChange:(n,u)=>a("due_date",u)}),"Sales Commission":e("input",{id:"sales_commission",name:"sales_commission",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),"Account Name":e(k,{defaultOptions:!0,isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:z,onChange:({value:n})=>{a("account_id",n),d(n)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)})},"":{"Sales Order":e(k,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:M,onChange:({value:n})=>{a("sales_order_id",n)},className:"flex-1"}),"Purchase Order":e("input",{id:"purchase_order",name:"purchase_order",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),"Deal Stage":e(T,{name:"deal_stage",id:"deal_stage",placeholder:"",options:G,onChange:({value:n})=>{a("deal_stage",n)}}),"Excise Duty":e("input",{id:"excise_duty",name:"excise_duty",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),Status:e(T,{name:"status",id:"status",placeholder:"",options:[{value:"erzeugt",label:"Erzeugt"},{value:"genehmigt",label:"Genehmigt"},{value:"geliefert",label:"Geliefert"},{value:"abgesagt",label:"Abgesagt"}],onChange:({value:n})=>{a("status",n)}}),"Contact Name":e(k,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:$,onChange:({value:n})=>{a("contact_id",n)},className:"flex-1"}),Currency:e(T,{id:"currency",name:"currency",options:L,className:"flex-1"})}}})})})},K=()=>{var o,g,n,u,b,x,m,h,N,i;const l=R(t=>t.invoiceForm),p=C(),a=(t,r)=>{p(v({[t]:r}))},d={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,value:l.billing_street||((o=l.account)==null?void 0:o.billing_street)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:l.billing_city||((g=l.account)==null?void 0:g.billing_city)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:l.billing_state||((n=l.account)==null?void 0:n.billing_state)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:l.billing_code||((u=l.account)==null?void 0:u.billing_code)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:l.billing_country||((b=l.account)==null?void 0:b.billing_country)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:l.shipping_street||((x=l.account)==null?void 0:x.shipping_street)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:l.shipping_city||((m=l.account)==null?void 0:m.shipping_city)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:l.shipping_state||((h=l.account)==null?void 0:h.shipping_state)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:l.shipping_code||((N=l.account)==null?void 0:N.shipping_code)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:l.shipping_country||((i=l.account)==null?void 0:i.shipping_country)||"",onChange:t=>a(t.target.name,t.target.value),className:"form-input flex-1"})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(q,{fields:d})})})},I=({item:l,field:p,handleChangeField:a})=>{const[d,o]=f.useState(!0),g=f.useRef(null),n=f.useRef(null),u=f.useRef(null),b=()=>{o(m=>!m)},x=()=>{var h,N,i;let m;d?m=(n.current?parseFloat((h=n.current)==null?void 0:h.value):0)/100*l.amount:m=u.current?parseFloat((N=u.current)==null?void 0:N.value):0,a(p,m,l.id),(i=g.current)==null||i.click()};return e(w,{children:e(A,{className:"relative",children:({open:m})=>s(w,{children:[e(A.Button,{ref:g,className:"btn w-5 h-5 p-0 rounded-full ml-1",children:e(Z,{})}),e(H,{as:f.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:e(A.Panel,{className:"absolute left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-80",children:e("div",{className:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ",children:s("div",{className:"relative grid gap-8 bg-white p-7 w-full",children:[s("div",{className:"flex gap-3",children:[s("label",{className:"inline-block",children:[e("input",{checked:d,type:"radio",name:"type",className:"form-radio",onChange:b}),e("span",{children:"Percentage"})]}),e("input",{name:"total",ref:n,hidden:!d,className:"form-input mx-2 w-20  h-8  cursor-text"})]}),s("div",{className:"block gap-3",children:[s("label",{className:"inline-block",children:[e("input",{checked:!d,type:"radio",name:"type",className:"form-radio",onChange:b}),e("span",{className:"",children:"Direct Price Reduction"})]}),e("input",{ref:u,name:"total",hidden:d,className:"form-input mx-2 w-20 h-8 cursor-text"})]}),s("div",{className:"flex gap-3",children:[e("button",{className:"btn btn-primary",onClick:x,children:"Submit"}),e("button",{className:"btn btn-warning",onClick:()=>{var h;return(h=g.current)==null?void 0:h.click()},children:"Cancel"})]})]})})})})]})})})},X=()=>{const l=C(),p=new E,[a,d]=f.useState({amount:0,subtotal:0,discount:0,tax:0,adjustment:0,grandTotal:0}),[o,g]=f.useState([{id:1,product_id:null,description:null,quantity:0,list_price:0,amount:0,discount:0,tax:0,total:0}]),n=(i,t,r)=>{const c={...o.find(y=>y.id===r)};c[i]=t;const _=(parseFloat(c.quantity)||0)*(parseFloat(c.list_price)||0),S=_-((parseFloat(c.discount)||0)+(parseFloat(c.tax)||0));c.amount=_,c.total=S,u(c)},u=i=>{const t=o.map(r=>r.id===i.id?{...r,...i}:r);g(t),l(v({items:t}))},b=()=>{let i;i=o!=null&&o.length?o.reduce((t,r)=>r.id>t?r.id:t,o[0].id):0,g([...o,{id:i+1,product_id:null,description:null,quantity:0,list_price:0,amount:0,discount:0,tax:0,total:0}])},x=(i,t)=>{const r={...a};r[i]=parseFloat(t),r.grandTotal=r.subtotal-r.discount+r.tax+r.adjustment,d(r)};f.useEffect(()=>{l(v({summary:a}))},[a]);const m=(i=null)=>{g(o.filter(t=>t.id!==i.id))},h=()=>{const i=o.reduce((y,F)=>y+(parseFloat(F.total)||0),0),t=i,r=a.discount,c=a.tax,_=a.adjustment,S=i-r+c+_;d({amount:t,subtotal:i,discount:r,tax:c,adjustment:_,grandTotal:S})},N=async(i,t)=>{const r=await p.fetchSingleProduct(i);if(r.status!==200)return;const c=r.data.data.product,_=o.find(j=>j.id===t),S=o.findIndex(j=>j.id===t),y={..._,product_id:i,list_price:c.unit_price!=null&&c.unit_price!=""?c.unit_price:0,tax:c.tax!=null&&c.tax!=""?c.tax:0,description:c.description},F={...y,amount:parseInt(y.quantity??0)*parseFloat(y.list_price??0)},O={...o,[S]:F};g(Object.values(O)),l(v({items:O}))};return f.useEffect(()=>{h()},[o]),e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Invoice Items :"}),s("div",{className:"mt-8",children:[e("div",{className:"overflow-x",children:s("table",{className:"table-auto overflow-scroll w-full",children:[e("thead",{children:s("tr",{children:[e("th",{className:"w-1",children:"S.NO"}),e("th",{className:"w-full",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Discount"}),e("th",{className:"w-1",children:"Tax"}),e("th",{className:"w-1",children:"Total"})]})}),e("tbody",{children:o.map(i=>s("tr",{className:"align-top",children:[e("td",{children:i.id}),s("td",{children:[e(k,{defaultOptions:!0,isMulti:!1,placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:Q,onChange:({value:t})=>{N(t,i.id)},className:"flex-1"}),e("textarea",{name:"description",className:"form-textarea mt-4 flex-1",placeholder:"Enter Description",defaultValue:i.description,onChange:t=>n(t.target.name,t.target.value,i.id)})]}),e("td",{children:e("input",{name:"quantity",type:"text",className:"form-input min-w-[200px]",defaultValue:i.quantity,onChange:t=>n(t.target.name,t.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,value:i.list_price,onChange:t=>n(t.target.name,t.target.value,i.id)})}),e("td",{children:e("input",{name:"amount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:i.amount,disabled:!0,onChange:t=>n(t.target.name,t.target.value,i.id)})}),e("td",{children:s("div",{className:"flex",children:[e("input",{name:"discount",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:i.discount,disabled:!0,onChange:t=>n(t.target.name,t.target.value,i.id)}),e(I,{item:i,handleChangeField:n,field:"discount"})]})}),e("td",{children:s("div",{className:"flex",children:[e("input",{name:"tax",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:i.tax,disabled:!0,onChange:t=>n(t.target.name,t.target.value,i.id)}),e(I,{item:i,handleChangeField:n,field:"tax"})]})}),e("td",{children:e("input",{name:"total",type:"number",className:"form-input min-w-[200px]  form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text",value:i.total,disabled:!0,onChange:t=>n(t.target.name,t.target.value,i.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>m(i),children:s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},i.id))})]})}),s("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>b(),children:"Add Item"})}),s("div",{className:"sm:w-2/5",children:[s("div",{className:"flex items-center justify-between",children:[e("div",{children:"Subtotal(€)"}),e("input",{id:"subtotal",name:"subtotal",type:"text",value:a.subtotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] disabled:cursor-not-allowed",disabled:!0})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Discount(€)"}),s("div",{className:"flex",children:[e("input",{id:"discount",name:"discount",type:"text",value:a.discount,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b] cursor-text"}),e(I,{item:a,handleChangeField:x,field:"discount"})]})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Tax(€)"}),s("div",{className:"flex",children:[e("input",{id:"tax",name:"tax",type:"text",value:a.tax,disabled:!0,className:"w-56 form-input disabled:pointer-events-none bg-[#eee] dark:bg-[#1b2e4b]  cursor-text"}),e(I,{item:a,handleChangeField:x,field:"tax"})]})]}),s("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Adjustment(€)"}),e("input",{id:"adjustment",name:"adjustment",type:"text",value:a.adjustment,onChange:i=>x(i.target.name,i.target.value),className:"w-64 form-input "})]}),s("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e("div",{className:"flex-1",children:"Grand Total(€)"}),e("input",{id:"approved_by",name:"approved_by_id",type:"text",value:a.grandTotal,className:"w-64 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})]})]})]})]})]},"Quote Items")})})})},ee=()=>{const l=C(),p=(a,d)=>{l(v({[a]:d}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),s("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_and_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",onChange:a=>p(a.target.name,a.target.value),placeholder:""})]},"terms_and_conditions")]},"Terms and Conditions")})})})},te=()=>{const l=C(),p=(a,d)=>{l(v({[a]:d}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:s("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),s("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",onChange:a=>p(a.target.name,a.target.value),placeholder:""})]},"description")]},"Terms and Conditions")})})})},ae=()=>s("div",{className:"mt-8 px-4",children:[e(J,{},"invoiceInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(X,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(te,{})]}),ge=()=>{const{hasPermission:l}=U(),p=R(d=>d.invoiceForm),a=C();return f.useEffect(()=>{a(V("Invoice Add"))}),f.useEffect(()=>{a(D())},[]),l("create-invoice")?s("div",{className:"px-4",children:[e(W,{formState:p,resetForm:D}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ae,{})})})]}):e(Y,{})};export{ge as default};
