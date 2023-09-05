import{u,b as e,F as h,a0 as m,j as d,a as N,r as y,s as w,a1 as S}from"./main-36d29c26.js";import{A as c}from"./react-select-async.esm-553a648f.js";import{S as b}from"./react-select.esm-6fdaacd5.js";import{G as f,b as q,d as k,f as Q,s as _,a as F,l as T,h as I,m as C,p as j,t as D,R as A,c as O}from"./CommonFunctions-dfef060c.js";import{F as M}from"./index-fefd8ff2.js";/* empty css                  */import"./Select-aecb2a80.esm-2944e309.js";import"./sweetalert2.all-8f337f8d.js";const P=()=>{const o=[{value:"none",label:"-None-"},{value:"high",label:"High"},{value:"unknown",label:"Unknown"},{value:"low",label:"Low"}],t=[{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],s=u(),a=(n,p)=>{s(m({[n]:p}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Header:{"Account Name":e(c,{isMulti:!1,id:"account_id",required:!0,name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:q,onChange:({value:n})=>{a("account_id",n)},className:"flex-1"}),"Contact Name":e(c,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:n})=>{a("contact_id",n)},className:"flex-1"}),RFQ:e(c,{isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:Q,onChange:({value:n})=>{a("rfq_id",n)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",type:"text",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),Subject:e("input",{required:!0,id:"subject",name:"subject",type:"text",className:"form-input flex-1 ",onChange:n=>a(n.target.name,n.target.value)}),"Converted by":e(c,{isMulti:!1,id:"converted_by_id",name:"converted_by_id",placeholder:"Type at least 2 characters to search...",loadOptions:_,className:"flex-1",onChange:({value:n})=>{a("converted_by_id",n)}}),"Quote Chance":e(b,{name:"quote_chance",required:!0,options:o,className:"flex-1",onChange:({value:n})=>{a("chance",n)}}),Currency:e(b,{name:"currency",options:F,className:"flex-1",onChange:({value:n})=>{a("currency",n)}})},"":{"Quote Owner":e(c,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:_,onChange:({value:n})=>{a("owner_id",n)},className:"flex-1"}),"PM User":e(c,{required:!0,isMulti:!1,id:"pm_user_id",name:"pm_user_id",placeholder:"Type at least 2 characters to search...",loadOptions:_,onChange:({value:n})=>{a("pm_user_id",n)},className:"flex-1"}),"Deals Name":e(c,{isMulti:!1,id:"deal_id",name:"deal_id",placeholder:"Type at least 2 characters to search...",loadOptions:T,onChange:({value:n})=>{a("deal_id",n)},className:"flex-1"}),"Quote Stage":e(b,{name:"quote_stage",required:!0,options:t,className:"flex-1",onChange:({value:n})=>{a("quote_stage",n)}}),"Quote File(Excel)":e("input",{type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",onChange:n=>I(n,p=>{s(m({image:`${p==null?void 0:p.data.data.file_url}`}))})}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},V=()=>{const o=u(),t=(r,n)=>{o(m({[r]:n}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Status:{"Quote valid":e(b,{options:[{value:"none",label:"-None-"},{value:"1_day",label:"1 Day"},{value:"3_day",label:"3 Days"},{value:"1_week",label:"1 Week"}],name:"quote_valid",id:"quote_valid",onChange:({value:r})=>{t("quote_valid",r)},className:"flex-1"}),"Proactive Offer":e("input",{id:"proactive_offer",type:"checkbox",name:"proactive_offer",className:"form-checkbox",onChange:r=>t(r.target.name,r.target.checked)})},"":{Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value)})}}})})})},L=()=>{const o=u(),t=(a,r)=>{o(m({[a]:r}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Quote Line":{"Product Name":e(c,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:a})=>{t("product_id",a)},className:"flex-1"}),"Customer part ID":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})},"":{Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"List Price":e("input",{id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}}})})})},R=()=>{const o=u(),t=(a,r)=>{o(m({[a]:r}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Source:{Vendor:e(c,{isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:j,onChange:({value:a})=>{t("vendor_id",a)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"Availability Date":e(M,{name:"availability_date",options:{dateFormat:"d-m-Y"},className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(a,r)=>t("availability_date",r)}),Availability:e(c,{isMulti:!1,id:"availability_id",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:D,onChange:({value:a})=>{t("availability_id",a)},className:"flex-1"})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"LT vendor":e("input",{id:"lt_vendor",name:"lt_vendor",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)}),"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",className:"form-input flex-1 ",onChange:a=>t(a.target.name,a.target.value)})}}})})})},B=()=>{const o=u(),t=(a,r)=>{o(m({[a]:r}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing City":e("input",{id:"billing_city",name:"billing_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",onChange:a=>t(a.target.name,a.target.value)})}}})})})},E=()=>{const o=u(),t=(s,a)=>{o(m({[s]:a}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:d("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),d("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:s=>t(s.target.name,s.target.value)})]},"terms_and_conditions")]},"Terms and Conditions")})})})},Y=()=>{const o=u(),t=(s,a)=>{o(m({[s]:a}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:d("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),d("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>t(s.target.name,s.target.value)})]},"description")]},"Terms and Conditions")})})})},H=()=>{const o=N(i=>i.quoteForm),[t,s]=y.useState([{id:0,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}]),a=u(),r=(i,l,g)=>{const x={...o.items[g],[i]:l},v={...o.items,[g]:x};s(Object.values(v)),a(m({items:v}))},n=()=>{let i;i=t!=null&&t.length?t.reduce((g,x)=>x.id>g?x.id:g,t[0].id):0;let l=[...t,{id:i+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];s(l),a(m({items:l}))},p=(i=null)=>{const l=t.filter(g=>g.id!=i.id);s(l),a(m({items:l}))};return e(h,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:d("div",{className:"",children:[d("div",{className:"text-lg",children:["Quote Items ",e(A,{})," :"]}),d("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:d("table",{className:"table-auto w-5",children:[e("thead",{children:d("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"SPQ"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Lead Time"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Amount"})]})}),e("tbody",{children:t.map(i=>d("tr",{className:"align-top",children:[d("td",{children:[e(c,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:l})=>{r("product_id",l,i.id)},className:"flex-1  min-w-[200px]"}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:l=>r(l.target.name,l.target.value,i.id),defaultValue:i.description})]}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:l=>r(l.target.name,l.target.value,i.id),defaultValue:i.part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:l=>r(l.target.name,l.target.value,i.id),defaultValue:i.quantity})}),e("td",{children:e("input",{name:"spq",type:"text",className:"form-input min-w-[200px]",onChange:l=>r(l.target.name,l.target.value,i.id),defaultValue:i.spq})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:i.list_price,onChange:l=>r(l.target.name,l.target.value,i.id)})}),e("td",{children:e("input",{name:"lead_time",type:"text",className:"form-input min-w-[200px]",defaultValue:i.lead_time,onChange:l=>r(l.target.name,l.target.value,i.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:i.date_code,onChange:l=>r(l.target.name,l.target.value,i.id)})}),e("td",{children:e("input",{name:"comment",type:"text",className:"form-input min-w-[200px]",defaultValue:i.comment,onChange:l=>r(l.target.name,l.target.value,i.id)})}),e("td",{children:e("input",{name:"amount",type:"text",className:"form-input min-w-[200px]",defaultValue:i.amount,onChange:l=>r(l.target.name,l.target.value,i.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>p(i),children:d("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},i.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>n(),children:"Add Item"})})})]})]},"Quote Items")})})})},U=()=>d("div",{className:"mt-8 px-4",children:[e(P,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(V,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(L,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(R,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(B,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(E,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),ee=()=>{const o=u(),t=N(s=>s.quoteForm);return y.useEffect(()=>{o(w("Quotes Add"))}),d("div",{className:"px-4",children:[e(O,{formState:t,resetForm:S}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(U,{})})})]})};export{ee as default};
