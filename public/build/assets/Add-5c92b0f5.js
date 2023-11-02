import{u as N,e as S,a as C,b as e,F as w,l as y,_ as Q,w as R,W as U,k as Y,m as L,Z as m,$ as H,T as $,r as j,j as _,V,B as W,c as z,s as G,a0 as M,d as Z}from"./main-a3f9880b.js";import{G as F,R as J,A as K}from"./GenerateFields-48686241.js";import{S as k}from"./react-select.esm-90327a01.js";import{F as q}from"./index-515e3b5a.js";import{F as X}from"./FileUploadComponent-98db9fd7.js";/* empty css                  */import"./index-ade49a0a.js";import"./ClearButtonComponent-28dfd920.js";const ee=()=>{const d=N();new S,C(a=>a.purchaseOrderForm);const t=(a,l)=>{d(m({[a]:l}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:{Header:{"Vendor Name":e(y,{defaultOptions:!0,isMulti:!1,required:!0,id:"vendor_id",placeholder:"Type at least 2 characters to search...",name:"vendor_id",loadOptions:Q,onChange:({value:a})=>{t("vendor_id",a)},className:"flex-1"}),"Contact Name":e(y,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:R,onChange:({value:a})=>{t("contact_id",a)},className:"flex-1"}),"Availability No":e(y,{defaultOptions:!0,isMulti:!1,id:"availability_id",placeholder:"Type at least 2 characters to search...",name:"availability_id",loadOptions:U,onChange:({value:a})=>{t("availability_id",a)},className:"flex-1"}),Currency:e(k,{options:Y,name:"currency",id:"currency",onChange:({value:a})=>{t("currency",a)},className:"flex-1"}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})},"":{"PO Date":e(q,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"po_date",value:"",className:"form-input flex-1",onChange:(a,l)=>t("po_date",l)}),"PurchaseOrders Owner":e(y,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:L,onChange:({value:a})=>{t("owner_id",a)},className:"flex-1"}),"Approved By":e(y,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:L,onChange:({value:a})=>{t("approved_by_id",a)},className:"flex-1"})}}})})})},ae=()=>{const d=N();new S;const t=C(o=>o.purchaseOrderForm),n=(o,b)=>{d(m({[o]:b}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:{"PurchaseOrders Information":{"PO Type":e(k,{options:[{value:"none",label:"-None-"},{value:"single",label:"Single PO"},{value:"frame",label:"Frame PO"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast PO"}],name:"po_type",id:"po_type",onChange:({value:o})=>{n("po_type",o)},className:"flex-1"}),"Parent PO No.":e(y,{defaultOptions:!0,isMulti:!1,id:"parent_po_id",placeholder:"Type at least 2 characters to search...",name:"parent_po_id",loadOptions:H,onChange:({value:o})=>{n("parent_po_id",o)},className:"flex-1"}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value)})},"":{Subject:e("input",{id:"subject",required:!0,name:"subject",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value)}),Status:e(k,{options:$,name:"status",id:"status",onChange:({value:o})=>{n("status",o)},className:"flex-1"}),Carrier:e(k,{options:[{value:"vendor_forwarder",label:"Vendor Forwarder"},{value:"ups",label:"UPS"},{value:"usps",label:"USPS"},{value:"dhl",label:"DHL"},{value:"blue_dart",label:"BlueDart"}],name:"carrier",id:"carrier",onChange:({value:o})=>{n("carrier",o)},className:"flex-1"}),AWB:e("input",{id:"awb",name:"awb",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value)}),"Confirmation Vendor":e(X,{id:"confirmation_vendor",modelName:"purchaseOrder",formState:t,formAttribute:"confirmation_vendor",updateFormData:m})}}})})})},te=()=>{C(r=>r.purchaseOrderForm);const d=N(),t=new S,[n,a]=j.useState([{id:1,amount:0,list_price:0}]),l=(r,i,c)=>{const p=n.find(f=>f.id===c),v=n.findIndex(f=>f.id===c),g={...p,[r]:i},u={...g,amount:parseInt(g.quantity??0)*parseFloat(g.list_price??0)},h={...n,[v]:u};a(Object.values(h)),d(m({items:h}))},O=async(r,i)=>{const c=await t.fetchSingleProduct(r);if(c.status!==200)return;const p=c.data.data.product,v=n.find(x=>x.id===i),g=n.findIndex(x=>x.id===i),u={...v,product_id:r,list_price:p.unit_price??0,description:p.description},h={...u,amount:parseInt(u.quantity??0)*parseFloat(u.list_price??0)},f={...n,[g]:h};a(Object.values(f)),d(m({items:f}))},o=()=>{let r;r=n!=null&&n.length?n.reduce((c,p)=>p.id>c?p.id:c,n[0].id):0;let i=[...n,{id:r+1,amount:0,list_price:0}];a(i),d(m({items:i}))},b=(r=null)=>{const i=n.filter(c=>c.id!=r.id);a(i),d(m({items:i}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:_("div",{className:"",children:[_("div",{className:"text-lg",children:["Purchase Items ",e(J,{})," :"]}),_("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:_("table",{className:"table-auto w-5",children:[e("thead",{children:_("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Amount"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Delivery Date"}),e("th",{className:"w-1",children:"Estimated Delivery Date"})]})}),e("tbody",{children:n.map(r=>_("tr",{className:"align-top",children:[_("td",{children:[e(y,{defaultOptions:!0,isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:V,onChange:({value:i})=>{O(i,r.id)},className:"flex-1  min-w-[200px]"}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:i=>l(i.target.name,i.target.value,r.id),defaultValue:r.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:i=>l(i.target.name,i.target.value,r.id),defaultValue:r.quantity})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,value:r.list_price,onChange:i=>l(i.target.name,i.target.value,r.id)})}),e("td",{children:e("input",{type:"number",className:"w-32 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",name:"amount",min:0,value:r.amount,disabled:!0,onChange:i=>l(i.target.name,i.target.value,r.id)})}),e("td",{children:e("textarea",{name:"comment",className:"form-textarea  min-w-[200px]",placeholder:"Enter comment",onChange:i=>l(i.target.name,i.target.value,r.id),defaultValue:r.comment})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:r.date_code,onChange:i=>l(i.target.name,i.target.value,r.id)})}),e("td",{children:e(q,{name:"requested_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},className:"form-input min-w-[200px]",onChange:(i,c)=>l("requested_delivery_date",c,r.id)})}),e("td",{children:e(q,{name:"estimated_delivery_date",options:{dateFormat:"Y-m-d",position:"auto left"},className:"form-input flex-1 min-w-[200px]",onChange:(i,c)=>l("estimated_delivery_date",c,r.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>b(r),children:_("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},r.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>o(),children:"Add Item"})})})]})]},"Purchase Items")})})})},ne=()=>{const d=N();new S,C(a=>a.purchaseOrderForm);const t=(a,l)=>{d(m({[a]:l}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:{"PO line":{"Requested Delivery Date":e(q,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"requested_delivery_date",value:"",className:"form-input flex-1",onChange:(a,l)=>t("requested_delivery_date",l)}),"Product Name":e(y,{defaultOptions:!0,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",name:"product_id",loadOptions:V,onChange:({value:a})=>{t("product_id",a)},className:"flex-1"}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",type:"number",onChange:a=>t(a.target.name,a.target.value)}),Cost:e("input",{type:"number",id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})},"":{"Confirmed Delivery Date":e(q,{options:{dateFormat:"Y-m-d ",position:"auto left"},name:"confirmed_delivery_date",value:"",className:"form-input flex-1",onChange:(a,l)=>t("confirmed_delivery_date",l)}),"Date Code":e("input",{id:"date_code",name:"date_code",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),comment:e("input",{id:"comment",name:"comment",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}}})})})},ie=()=>{var o,b,r,i,c,p,v,g;const d=N(),t=new S,n=C(u=>u.purchaseOrderForm),a=(u,h)=>{d(m({[u]:h}))},l=async u=>{const h=await t.fetchSingleSalesOrder(u);if(h.status!=200)return;const f=h.data.data.salesOrder;d(m({sales_order:f}));const x=f.account;if(x==null)return;const D=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],P={};D.forEach(I=>{P[I]=x[I]??null}),d(m(P))},O={"Linked SO":{"SO Number":e(y,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:W,onChange:({value:u})=>{a("sales_order_id",u),l(u)},className:"flex-1"}),"Account Name":e("input",{id:"account_id",name:"account_id",value:(b=(o=n.sales_order)==null?void 0:o.account)==null?void 0:b.account_name,className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0}),"Quantity SO":e("input",{id:"quantity_so",name:"quantity_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(r=n.sales_order)==null?void 0:r.quantity}),Resale:e("input",{id:"resale",name:"resale",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(i=n.sales_order)==null?void 0:i.resale_price}),"SO Status":e("input",{id:"so_status",name:"so_status",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(c=n.sales_order)==null?void 0:c.status})},"":{"Requested D.D.":e("input",{id:"so_requested_d_d",name:"so_requested_d_d",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(p=n.sales_order)==null?void 0:p.requested_delivery_date}),"Confirmed D.D.":e("input",{id:"so_confirmed_d_d",name:"so_confirmed_d_d",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0}),"D/C":e("input",{id:"dc_so",name:"dc_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(v=n.sales_order)==null?void 0:v.dc}),"SPQ SO":e("input",{id:"spq_so",name:"spq_so",className:"form-input disabled:pointer-events-none bg-[#eee] flex-1 ",disabled:!0,value:(g=n.sales_order)==null?void 0:g.spq})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:O})})})},re=()=>{var l,O,o,b,r,i,c,p,v,g,u,h,f,x,D,P,I,A,T,B;const d=N(),t=C(s=>s.purchaseOrderForm),n=(s,E)=>{d(m({[s]:E}))},a={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,value:t.billing_street||((O=(l=t.sales_order)==null?void 0:l.account)==null?void 0:O.billing_street)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:t.billing_city||((b=(o=t.sales_order)==null?void 0:o.account)==null?void 0:b.billing_city)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:t.billing_state||((i=(r=t.sales_order)==null?void 0:r.account)==null?void 0:i.billing_state)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:t.billing_code||((p=(c=t.sales_order)==null?void 0:c.account)==null?void 0:p.billing_code)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:t.billing_country||((g=(v=t.sales_order)==null?void 0:v.account)==null?void 0:g.billing_country)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:t.shipping_street||((h=(u=t.sales_order)==null?void 0:u.account)==null?void 0:h.shipping_street)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:t.shipping_city||((x=(f=t.sales_order)==null?void 0:f.account)==null?void 0:x.shipping_city)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:t.shipping_state||((P=(D=t.sales_order)==null?void 0:D.account)==null?void 0:P.shipping_state)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:t.shipping_code||((A=(I=t.sales_order)==null?void 0:I.account)==null?void 0:A.shipping_code)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:t.shipping_country||((B=(T=t.sales_order)==null?void 0:T.account)==null?void 0:B.shipping_country)||"",onChange:s=>n(s.target.name,s.target.value),className:"form-input flex-1"})}};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:a})})})},se=()=>{C(a=>a.purchaseOrderForm);const d=N();new S;const t=(a,l)=>{d(m({[a]:l}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:{"Terms and Conditions":{"Terms and Conditions":e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},le=()=>{C(a=>a.purchaseOrderForm);const d=N();new S;const t=(a,l)=>{d(m({[a]:l}))};return e(w,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(F,{fields:{"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:a=>t(a.target.name,a.target.value)})},"":{}}})})})},oe=()=>_("div",{className:"mt-8 px-4",children:[e(ee,{},"HeaderSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{},"PurchaseOrderInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(te,{},"PurchaseItemsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ne,{},"POLineSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{},"LinkedSOSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(re,{},"AddressInformationSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{},"TermsConditionsSection"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(le,{},"DescriptionInformationSection")]}),_e=()=>{const{hasPermission:d}=z(),t=C(a=>a.purchaseOrderForm),n=N();return j.useEffect(()=>{n(G("Purchase Order Add"))}),j.useEffect(()=>{n(M())},[]),d("create-purchase-order")?_("div",{className:"px-4",children:[e(K,{formState:t,resetForm:M}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(oe,{})})})]}):e(Z,{})};export{_e as default};
