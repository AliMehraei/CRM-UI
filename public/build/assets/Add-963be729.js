import{e as Q,u as h,b as e,F as _,a7 as m,a as w,j as c,r as C,c as T,s as A,a8 as S,g as D}from"./main-c04bb166.js";import{A as p}from"./react-select-async.esm-a7c7d1e9.js";import{S as y}from"./react-select.esm-a460a2c5.js";import{G as v,R as I,A as j}from"./GenerateFields-302fde9a.js";import{b as O,c as P,e as M,s as N,a as V,l as L,h as R,m as k,q as B,y as E}from"./CommonFunctions-90d107b8.js";import{F as U}from"./index-3c565ae9.js";/* empty css                  */import"./Select-aecb2a80.esm-e774644f.js";import"./sweetalert2.all-9d5da798.js";const Y=()=>{const o=new Q,t=[{value:"none",label:"-None-"},{value:"high",label:"High"},{value:"unknown",label:"Unknown"},{value:"low",label:"Low"}],s=[{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],n=h(),i=(a,l)=>{n(m({[a]:l}))},g=async a=>{const l=await o.fetchSingleAccount(a);if(l.status!=200)return;const d=l.data.data.account;n(m({account:d}));const u=["billing_street","billing_city","billing_state","billing_code","billing_country","shipping_street","shipping_city","shipping_state","shipping_code","shipping_country"],b={};u.forEach(f=>{b[f]=d[f]??null}),n(m(b))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Header:{"Account Name":e(p,{isMulti:!1,id:"account_id",required:!0,name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:O,onChange:({value:a})=>{i("account_id",a),g(a)},className:"flex-1"}),"Contact Name":e(p,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:a})=>{i("contact_id",a)},className:"flex-1"}),RFQ:e(p,{isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:M,onChange:({value:a})=>{i("rfq_id",a)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",type:"text",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),Subject:e("input",{required:!0,id:"subject",name:"subject",type:"text",className:"form-input flex-1 ",onChange:a=>i(a.target.name,a.target.value)}),"Converted by":e(p,{isMulti:!1,id:"converted_by_id",name:"converted_by_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,className:"flex-1",onChange:({value:a})=>{i("converted_by_id",a)}}),"Quote Chance":e(y,{name:"quote_chance",required:!0,options:t,className:"flex-1",onChange:({value:a})=>{i("quote_chance",a)},defaultValue:{value:"unknown",label:"Unknown"}}),Currency:e(y,{name:"currency",options:V,className:"flex-1",onChange:({value:a})=>{i("currency",a)}})},"":{"Quote Owner":e(p,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{i("owner_id",a)},className:"flex-1"}),"PM User":e(p,{required:!0,isMulti:!1,id:"pm_user_id",name:"pm_user_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{i("pm_user_id",a)},className:"flex-1"}),"Deals Name":e(p,{isMulti:!1,id:"deal_id",name:"deal_id",placeholder:"Type at least 2 characters to search...",loadOptions:L,onChange:({value:a})=>{i("deal_id",a)},className:"flex-1"}),"Quote Stage":e(y,{name:"quote_stage",required:!0,options:s,className:"flex-1",onChange:({value:a})=>{i("quote_stage",a)},defaultValue:{value:"draft",label:"Draft"}}),"Quote File(Excel)":e("input",{type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",onChange:a=>R(a,l=>{n(m({quote_file:`${l==null?void 0:l.data.data.file_url}`}))})}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}}})})})},H=()=>{const o=h(),t=(i,g)=>{o(m({[i]:g}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Status:{"Quote valid":e(y,{options:[{value:"none",label:"-None-"},{value:"1_day",label:"1 Day"},{value:"3_day",label:"3 Days"},{value:"1_week",label:"1 Week"}],name:"quote_valid",id:"quote_valid",onChange:({value:i})=>{t("quote_valid",i)},className:"flex-1"}),"Proactive Offer":e("input",{id:"proactive_offer",type:"checkbox",name:"proactive_offer",className:"form-checkbox",onChange:i=>t(i.target.name,i.target.checked)})},"":{Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:i=>t(i.target.name,i.target.value)})}}})})})},W=()=>{const o=h(),t=(n,i)=>{o(m({[n]:i}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{"Quote Line":{"Product Name":e(p,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:n})=>{t("product_id",n)},className:"flex-1"}),"Customer part ID":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})},"":{Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"List Price":e("input",{id:"list_price",name:"list_price",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},$=()=>{const o=h(),t=(n,i)=>{o(m({[n]:i}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:{Source:{Vendor:e(p,{isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:B,onChange:({value:n})=>{t("vendor_id",n)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Availability Date":e(U,{name:"availability_date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(n,i)=>t("availability_date",i)}),Availability:e(p,{isMulti:!1,id:"availability_id",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:E,onChange:({value:n})=>{t("availability_id",n)},className:"flex-1"})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"LT vendor":e("input",{id:"lt_vendor",name:"lt_vendor",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)}),"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",className:"form-input flex-1 ",onChange:n=>t(n.target.name,n.target.value)})}}})})})},G=()=>{var i,g,x,a,l,d,u,b,f,q;const o=h(),t=w(r=>r.quoteForm),s=(r,F)=>{o(m({[r]:F}))},n={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",required:!0,value:t.billing_street||((i=t.account)==null?void 0:i.billing_street)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing City":e("input",{id:"billing_city",name:"billing_city",required:!0,value:t.billing_city||((g=t.account)==null?void 0:g.billing_city)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing State":e("input",{id:"billing_state",name:"billing_state",value:t.billing_state||((x=t.account)==null?void 0:x.billing_state)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",required:!0,value:t.billing_code||((a=t.account)==null?void 0:a.billing_code)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",required:!0,value:t.billing_country||((l=t.account)==null?void 0:l.billing_country)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",value:t.shipping_street||((d=t.account)==null?void 0:d.shipping_street)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",value:t.shipping_city||((u=t.account)==null?void 0:u.shipping_city)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",value:t.shipping_state||((b=t.account)==null?void 0:b.shipping_state)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",value:t.shipping_code||((f=t.account)==null?void 0:f.shipping_code)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",value:t.shipping_country||((q=t.account)==null?void 0:q.shipping_country)||"",onChange:r=>s(r.target.name,r.target.value),className:"form-input flex-1"})}};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(v,{fields:n})})})},z=()=>{const o=h(),t=(s,n)=>{o(m({[s]:n}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:c("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),c("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",placeholder:"",onChange:s=>t(s.target.name,s.target.value)})]},"terms_and_conditions")]},"Terms and Conditions")})})})},J=()=>{const o=h(),t=(s,n)=>{o(m({[s]:n}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:c("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),c("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>t(s.target.name,s.target.value)})]},"description")]},"Terms and Conditions")})})})},K=()=>{const o=w(a=>a.quoteForm),[t,s]=C.useState([{id:0,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}]),n=h(),i=(a,l,d)=>{const u={...o.items[d],[a]:l},b=(parseFloat(u.quantity)||0)*(parseFloat(u.list_price)||0);u.amount=b;const f={...o.items,[d]:u};s(Object.values(f)),n(m({items:f}))},g=()=>{let a;a=t!=null&&t.length?t.reduce((d,u)=>u.id>d?u.id:d,t[0].id):0;let l=[...t,{id:a+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];s(l),n(m({items:l}))},x=(a=null)=>{const l=t.filter(d=>d.id!=a.id);s(l),n(m({items:l}))};return e(_,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12 ",children:c("div",{className:"",children:[c("div",{className:"text-lg",children:["Quote Items ",e(I,{})," :"]}),c("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:c("table",{className:"table-auto w-5",children:[e("thead",{children:c("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"SPQ"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Lead Time"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Amount"})]})}),e("tbody",{children:t.map(a=>c("tr",{className:"align-top",children:[c("td",{children:[e(p,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:l})=>{i("product_id",l,a.id)},className:"flex-1  min-w-[200px]"}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:l=>i(l.target.name,l.target.value,a.id),defaultValue:a.description})]}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:l=>i(l.target.name,l.target.value,a.id),defaultValue:a.part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:l=>i(l.target.name,l.target.value,a.id),defaultValue:a.quantity})}),e("td",{children:e("input",{name:"spq",type:"text",className:"form-input min-w-[200px]",onChange:l=>i(l.target.name,l.target.value,a.id),defaultValue:a.spq})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:a.list_price,onChange:l=>i(l.target.name,l.target.value,a.id)})}),e("td",{children:e("input",{name:"lead_time",type:"text",className:"form-input min-w-[200px]",defaultValue:a.lead_time,onChange:l=>i(l.target.name,l.target.value,a.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:a.date_code,onChange:l=>i(l.target.name,l.target.value,a.id)})}),e("td",{children:e("input",{name:"comment",type:"text",className:"form-input min-w-[200px]",defaultValue:a.comment,onChange:l=>i(l.target.name,l.target.value,a.id)})}),e("td",{children:e("input",{disabled:!0,name:"amount",type:"text",className:"form-input min-w-[200px] disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",value:a.amount,onChange:l=>i(l.target.name,l.target.value,a.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>x(a),children:c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},a.id))})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>g(),children:"Add Item"})})})]})]},"Quote Items")})})})},X=()=>c("div",{className:"mt-8 px-4",children:[e(Y,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),oe=()=>{const{hasPermission:o}=T(),t=h(),s=w(n=>n.quoteForm);return C.useEffect(()=>{t(A("Quotes Add"))}),C.useEffect(()=>{t(S())},[]),o("create-quote")?c("div",{className:"px-4",children:[e(j,{formState:s,resetForm:S}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(X,{})})})]}):e(D,{})};export{oe as default};
