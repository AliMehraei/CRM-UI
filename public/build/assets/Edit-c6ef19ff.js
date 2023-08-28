import{a as g,u as v,b as e,j as u,F as b,S as f,r as N,d as J,s as K}from"./main-7587a7bd.js";import{A as p,a as X}from"./react-select-async.esm-4f8c9a58.js";import{S as q}from"./react-select.esm-d562fb5f.js";import{b as Z,c as ee,e as ae,s as S,a as G,k as te,h as le,G as w,l as z,o as ne,r as ie,R as re}from"./CommonFunctions-21e80599.js";import{F as se}from"./index-59d3072a.js";/* empty css                  */import{A as de}from"./ActionButtonsComponent-f183376c.js";import{L as oe}from"./LoadingAlpyn-2fedd844.js";import"./Select-aecb2a80.esm-0cf48af5.js";import"./sweetalert2.all-85428551.js";const ce=()=>{var h,l,m,i,d,x,C,V,_,F,k,Q,D,I,T,j,A,O,M,P,L,E,R,B,U,Y,$,H,W;const a=g(r=>r.quoteForm),o=v(),n=[{value:"none",label:"-None-"},{value:"high",label:"High"},{value:"unknown",label:"Unknown"},{value:"low",label:"Low"}],s=[{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],t=(r,y)=>{o(f({[r]:y}))},c={Header:{"Account Name":e(p,{isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:Z,onChange:({value:r})=>{t("account_id",r)},defaultValue:{value:(h=a.account)==null?void 0:h.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(l=a.account)==null?void 0:l.image,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:(m=a.account)==null?void 0:m.name}),e("div",{className:"text-xs text-gray-500",children:(i=a.account)==null?void 0:i.email})]})]},(d=a.account)==null?void 0:d.id)},className:"flex-1"}),"Contact Name":e(p,{isMulti:!1,id:"contact_id",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:ee,onChange:({value:r})=>{t("contact_id",r)},defaultValue:{value:(x=a.contact)==null?void 0:x.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(C=a.contact)==null?void 0:C.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:(V=a.contact)==null?void 0:V.name}),e("div",{className:"text-xs text-gray-500",children:(_=a.contact)==null?void 0:_.email})]})]},(F=a.contact)==null?void 0:F.id)},className:"flex-1"}),RFQ:e(p,{isMulti:!1,id:"rfq_id",name:"rfq_id",placeholder:"Type at least 2 characters to search...",loadOptions:ae,onChange:({value:r})=>{t("rfq_id",r)},defaultValue:{value:(k=a.rfq)==null?void 0:k.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(Q=a.rfq)==null?void 0:Q.rfq_name})})},(D=a.rfq)==null?void 0:D.id)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",type:"text",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value),defaultValue:a.customer_rfq_no}),Subject:e("input",{required:!0,id:"subject",name:"subject",type:"text",className:"form-input flex-1 ",onChange:r=>t(r.target.name,r.target.value),defaultValue:a.subject}),"Converted by":e(p,{isMulti:!1,id:"converted_by_id",name:"converted_by_id",placeholder:"Type at least 2 characters to search...",loadOptions:S,className:"flex-1",onChange:({value:r})=>{t("converted_by_id",r)},defaultValue:{value:(I=a.converted_by)==null?void 0:I.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(T=a.converted_by)==null?void 0:T.name})},(j=a.converted_by)==null?void 0:j.id)}}),"Quote Chance":e(q,{name:"quote_chance",required:!0,options:n,className:"flex-1",onChange:({value:r})=>{t("chance",r)},defaultValue:n.find(r=>r.value==a.quote_chance)}),Currency:e(q,{name:"currency",options:G,className:"flex-1",onChange:({value:r})=>{t("currency",r)},defaultValue:G.find(r=>r.value==a.currency)})},"":{"Quote Owner":e(p,{isMulti:!1,id:"owner_id",name:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:S,onChange:({value:r})=>{t("owner_id",r)},defaultValue:{value:(A=a.owner)==null?void 0:A.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(O=a.owner)==null?void 0:O.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:(M=a.owner)==null?void 0:M.name}),e("div",{className:"text-xs text-gray-500",children:(P=a.owner)==null?void 0:P.email})]})]},(L=a.owner)==null?void 0:L.id)},className:"flex-1"}),"PM User":e(p,{required:!0,isMulti:!1,id:"pm_user_id",name:"pm_user_id",placeholder:"Type at least 2 characters to search...",loadOptions:S,onChange:({value:r})=>{t("pm_user_id",r)},defaultValue:{value:(E=a.pm)==null?void 0:E.id,label:u("div",{className:"flex items-center",children:[e("img",{src:(R=a.owner)==null?void 0:R.avatar,alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),u("div",{children:[e("div",{className:"text-sm font-bold",children:(B=a.owner)==null?void 0:B.name}),e("div",{className:"text-xs text-gray-500",children:(U=a.owner)==null?void 0:U.email})]})]},(Y=a.owner)==null?void 0:Y.id)},className:"flex-1"}),"Deals Name":e(p,{isMulti:!1,id:"deal_id",name:"deal_id",placeholder:"Type at least 2 characters to search...",loadOptions:te,onChange:({value:r})=>{t("deal_id",r)},defaultValue:{value:($=a.deal)==null?void 0:$.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(H=a.deal)==null?void 0:H.deal_name})},(W=a.deal)==null?void 0:W.id)},className:"flex-1"}),"Quote Stage":e(q,{name:"quote_stage",required:!0,options:s,className:"flex-1",onChange:({value:r})=>{t("quote_stage",r)},defaultValue:s.find(r=>r.value==a.quote_stage)}),"Quote File(Excel)":e("input",{type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*,.zip,.pdf,.xls,.xlsx,.txt.doc,.docx",onChange:r=>le(r,y=>{o(f({field:"image",value:`${y==null?void 0:y.data.data.file_url}`}))})}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(w,{fields:c})})})},me=()=>{const a=v(),o=g(c=>c.quoteForm),n=(c,h)=>{a(f({[c]:h}))},s=[{value:"none",label:"-None-"},{value:"1_day",label:"1 Day"},{value:"3_day",label:"3 Days"},{value:"1_week",label:"1 Week"}],t={Status:{"Quote valid":e(q,{options:s,name:"quote_valid",id:"quote_valid",onChange:({value:c})=>{n("converted_by_id",c)},defaultValue:s.find(c=>c.value==o.quote_valid),className:"flex-1"}),"Proactive Offer":e("input",{id:"proactive_offer",type:"checkbox",name:"proactive_offer",className:"form-checkbox",onChange:c=>n(c.target.name,c.target.checked),checked:o.proactive_offer})},"":{Rating:e("input",{id:"rating",name:"rating",className:"form-input flex-1 ",onChange:c=>n(c.target.name,c.target.value),defaultValue:o.rating})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(w,{fields:t})})})},ue=()=>{var t,c,h;const a=v(),o=g(l=>l.quoteForm),n=(l,m)=>{a(f({[l]:m}))},s={"Quote Line":{"Product Name":e(p,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:z,onChange:({value:l})=>{n("product_id",l)},defaultValue:{value:(t=o.product)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(c=o.product)==null?void 0:c.product_name})})},(h=o.product)==null?void 0:h.id)},className:"flex-1"}),"Customer part ID":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:l=>n(l.target.name,l.target.value),defaultValue:o.customer_part_id})},"":{Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",defaultValue:o.quantity,onChange:l=>n(l.target.name,l.target.value)}),"List Price":e("input",{id:"list_price",name:"list_price",className:"form-input flex-1 ",defaultValue:o.list_price,onChange:l=>n(l.target.name,l.target.value)}),"Lead Time":e("input",{id:"lead_time",name:"lead_time",className:"form-input flex-1 ",defaultValue:o.lead_time,onChange:l=>n(l.target.name,l.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(w,{fields:s})})})},he=()=>{var t,c,h,l,m,i;const a=g(d=>d.quoteForm),o=v(),n=(d,x)=>{o(f({[d]:x}))},s={Source:{Vendor:e(p,{isMulti:!1,id:"vendor_id",name:"vendor_id",placeholder:"Type at least 2 characters to search...",loadOptions:ne,onChange:({value:d})=>{n("vendor_id",d)},defaultValue:{value:(t=a.vendor)==null?void 0:t.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(c=a.vendor)==null?void 0:c.vendor_name})},(h=a.vendor)==null?void 0:h.id)},className:"flex-1"}),"Availability No":e("input",{id:"availability_no",name:"availability_no",className:"form-input flex-1 ",defaultValue:a.availability_no,onChange:d=>n(d.target.name,d.target.value)}),"Availability Date":e(se,{name:"availability_date",options:{dateFormat:"d-m-Y",defaultDate:`${a.availability_date?new Date(a.availability_date):""}`},defaultValue:a.availability_date,className:"form-input flex-1",placeholder:"MM DD YYYY",onChange:(d,x)=>n("availability_date",x)}),Availability:e(p,{isMulti:!1,id:"availability_id",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:ie,onChange:({value:d})=>{n("availability_id",d)},defaultValue:{value:(l=a.availability)==null?void 0:l.id,label:e("div",{className:"flex items-center",children:e("div",{className:"text-sm font-bold",children:(m=a.availability)==null?void 0:m.availability_name})},(i=a.availability)==null?void 0:i.id)},className:"flex-1"})},"":{Cost:e("input",{id:"cost",name:"cost",className:"form-input flex-1 ",defaultValue:a.cost,onChange:d=>n(d.target.name,d.target.value)}),"LT vendor":e("input",{id:"lt_vendor",name:"lt_vendor",className:"form-input flex-1 ",defaultValue:a.lt_vendor,onChange:d=>n(d.target.name,d.target.value)}),SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",defaultValue:a.spq,onChange:d=>n(d.target.name,d.target.value)}),"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",defaultValue:a.quantity_in_stock,className:"form-input flex-1 ",onChange:d=>n(d.target.name,d.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(w,{fields:s})})})},fe=()=>{const a=g(t=>t.quoteForm),o=v(),n=(t,c)=>{o(f({[t]:c}))},s={"Address Information":{"Billing Street":e("input",{id:"billing_street",name:"billing_street",className:"form-input flex-1",defaultValue:a.billing_street,onChange:t=>n(t.target.name,t.target.value)}),"Billing City":e("input",{id:"billing_city",name:"billing_city",className:"form-input flex-1",defaultValue:a.billing_city,onChange:t=>n(t.target.name,t.target.value)}),"Billing State":e("input",{id:"billing_state",name:"billing_state",className:"form-input flex-1",defaultValue:a.billing_state,onChange:t=>n(t.target.name,t.target.value)}),"Billing Code":e("input",{id:"billing_code",name:"billing_code",className:"form-input flex-1",defaultValue:a.billing_code,onChange:t=>n(t.target.name,t.target.value)}),"Billing Country":e("input",{id:"billing_country",name:"billing_country",className:"form-input flex-1",defaultValue:a.billing_country,onChange:t=>n(t.target.name,t.target.value)})},"":{"Shipping Street":e("input",{id:"shipping_street",name:"shipping_street",className:"form-input flex-1",defaultValue:a.shipping_street,onChange:t=>n(t.target.name,t.target.value)}),"Shipping City":e("input",{id:"shipping_city",name:"shipping_city",className:"form-input flex-1",defaultValue:a.shipping_city,onChange:t=>n(t.target.name,t.target.value)}),"Shipping State":e("input",{id:"shipping_state",name:"shipping_state",className:"form-input flex-1",defaultValue:a.shipping_state,onChange:t=>n(t.target.name,t.target.value)}),"Shipping Code":e("input",{id:"shipping_code",name:"shipping_code",className:"form-input flex-1",defaultValue:a.shipping_code,onChange:t=>n(t.target.name,t.target.value)}),"Shipping Country":e("input",{id:"shipping_country",name:"shipping_country",className:"form-input flex-1",defaultValue:a.shipping_country,onChange:t=>n(t.target.name,t.target.value)})}};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(w,{fields:s})})})},pe=()=>{const a=g(s=>s.quoteForm),o=v(),n=(s,t)=>{o(f({[s]:t}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:u("div",{className:"",children:[e("div",{className:"text-lg",children:"Terms and Conditions :"}),u("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Terms and Conditions"}),e("textarea",{id:"terms_conditions",rows:3,name:"terms_conditions",className:"form-textarea flex-1",defaultValue:a.terms_conditions,placeholder:"",onChange:s=>n(s.target.name,s.target.value)})]},"terms_conditions")]},"Terms and Conditions")})})})},ge=()=>{const a=g(s=>s.quoteForm),o=v(),n=(s,t)=>{o(f({[s]:t}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:u("div",{className:"",children:[e("div",{className:"text-lg",children:"Description Information :"}),u("div",{className:"mt-4 flex items-center",children:[e("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Description"}),e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>n(s.target.name,s.target.value),defaultValue:a.description})]},"description")]},"Terms and Conditions")})})})},ve=()=>{const a=g(l=>l.quoteForm),o=v(),[n,s]=N.useState([]),t=(l,m,i)=>{const d=n.find(_=>_.id===i),x=n.findIndex(_=>_.id===i),C={...d,[l]:m},V={...n,[x]:C};o(f({items:V}))};N.useEffect(()=>{s(Object.values(a.items))},[]);const c=()=>{let l;l=n!=null&&n.length?n.reduce((i,d)=>d.id>i?d.id:i,n[0].id):0;let m=[...n,{id:l+1,name:"",part_id:"",quantity:1,SPQ:"",list_price:"",lead_time:"",date_code:"",comment:"",amount:0}];s(m),o(f({items:m}))},h=(l=null)=>{const m=n.filter(i=>i.id!=l.id);s(m),o(f({items:m}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e("div",{className:" w-full ltr:lg:mr-12 rtl:lg:ml-12 mb-12",children:u("div",{className:"",children:[u("div",{className:"text-lg",children:["Quote Items ",e(re,{})," :"]}),u("div",{className:"mt-8",children:[e("div",{className:"overflow-x-auto	w-11/12",children:u("table",{className:"table-auto",children:[e("thead",{children:u("tr",{children:[e("th",{className:"w-1",children:"Product Name"}),e("th",{className:"w-1",children:"Customer Part ID"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"SPQ"}),e("th",{className:"w-1",children:"List Price"}),e("th",{className:"w-1",children:"Lead Time"}),e("th",{className:"w-1",children:"Date Code"}),e("th",{className:"w-1",children:"Comment"}),e("th",{className:"w-1",children:"Amount"})]})}),e("tbody",{children:n==null?void 0:n.map(l=>{var m;return u("tr",{className:"align-top",children:[u("td",{children:[e(p,{isMulti:!1,id:"product_id",name:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:z,onChange:({value:i})=>{t("product_id",i,l.id)},className:"flex-1  min-w-[200px]",defaultValue:{value:l.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(m=l.product)==null?void 0:m.product_name})})},l.id)}}),",",e("textarea",{name:"description",className:"form-textarea mt-4",placeholder:"Enter Description",onChange:i=>t(i.target.name,i.target.value,l.id),defaultValue:l.description})]}),e("td",{children:e("input",{name:"customer_part_id",type:"text",className:"form-input min-w-[200px]",onChange:i=>t(i.target.name,i.target.value,l.id),defaultValue:l.customer_part_id})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",name:"quantity",min:0,onChange:i=>t(i.target.name,i.target.value,l.id),defaultValue:l.quantity})}),e("td",{children:e("input",{name:"spq",type:"text",className:"form-input min-w-[200px]",onChange:i=>t(i.target.name,i.target.value,l.id),defaultValue:l.spq})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",name:"list_price",min:0,defaultValue:l.list_price,onChange:i=>t(i.target.name,i.target.value,l.id)})}),e("td",{children:e("input",{name:"lead_time",type:"text",className:"form-input min-w-[200px]",defaultValue:l.lead_time,onChange:i=>t(i.target.name,i.target.value,l.id)})}),e("td",{children:e("input",{name:"date_code",type:"text",className:"form-input min-w-[200px]",defaultValue:l.date_code,onChange:i=>t(i.target.name,i.target.value,l.id)})}),e("td",{children:e("input",{name:"comment",type:"text",className:"form-input min-w-[200px]",defaultValue:l.comment,onChange:i=>t(i.target.name,i.target.value,l.id)})}),e("td",{children:e("input",{name:"amount",type:"text",className:"form-input min-w-[200px]",defaultValue:l.amount,onChange:i=>t(i.target.name,i.target.value,l.id)})}),e("td",{children:e("button",{type:"button",onClick:()=>h(l),children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},l.id)})})]})}),e("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>c(),children:"Add Item"})})})]})]},"Quote Items")})})})},xe=()=>u("div",{className:"mt-8 px-4",children:[e(ce,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(me,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ve,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ue,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(he,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(fe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(pe,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ge,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"})]}),ke=()=>{const a=v(),o=g(m=>m.quoteForm),[n,s]=N.useState(!0),c=J().id,h=new X;N.useEffect(()=>{a(K("Quotes Edit"))}),N.useEffect(()=>{l().then(()=>{s(!1)})},[c]),N.useEffect(()=>{a(f({api:"updateSingleQuote",redirectTo:"/quotes/edit/:id",action:"edit"}))},[]);const l=async()=>{const m=await h.fetchSingleQuote(c);if(m.status!=200)return;const i=m.data.data.quote;a(f(i))};return n?e(oe,{}):u("div",{className:"px-4",children:[e(de,{formState:o}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(xe,{})})})]})};export{ke as default};
