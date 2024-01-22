import{u as x,a as M,r as u,b as n,F as b,j as e,aS as f,A as p,a0 as C,a1 as P,aT as k,S as Y,d as F,v as j,G as V,n as W,t as $,aD as L,c as H,s as I,aU as S,e as B}from"./main-47e64be7.js";/* empty css                  */import{G as N}from"./GenerateFields-ecaae248.js";import{F as g}from"./index-c90cb229.js";import{T as G}from"./tippy-react.esm-9757d5d5.js";import{S as h}from"./react-select.esm-a7d99c23.js";import{F as U}from"./FileUploadComponent-86656e61.js";import{R as z,M as J,N as K,O as X}from"./SelectOptions-3a2c6409.js";import{A as Z}from"./ActionButtonsComponent-b1e33665.js";import"./ClearButtonComponent-9216c711.js";import"./index-2a8dd478.js";const _=i=>{const c=new Date(i),r=c.getFullYear(),o=String(c.getMonth()+1).padStart(2,"0"),t=String(c.getDate()).padStart(2,"0");return`${r}:${o}:${t}`},ee=()=>{const i=x(),c=new M,r=(s="",a="success")=>{Y.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:a,title:s,padding:"10px 20px"})},[o,t]=u.useState({web:[],nonWeb:[]}),[d,w]=u.useState({matched:[]}),[re,q]=u.useState(null),v=(s,a)=>{navigator.clipboard.writeText(s),q(a),r("Copied to clipboard!")},A=({suggestions:s})=>n(b,{children:[e("h3",{className:"text-xl",children:"Availability Suggestions :"}),n("table",{className:"min-w-full bg-white border border-gray-300",children:[e("thead",{children:n("tr",{children:[e("th",{className:"py-2 px-4 border-b",children:"Availability"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Source"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Cost"}),e("th",{className:"py-2 px-4 border-b",children:"Availability Created Date"}),e("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),n("tbody",{children:[s.web.map((a,l)=>n("tr",{className:l%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:a.availability_name}),e("td",{className:"py-2 px-4 border-b",children:a.availability_source}),n("td",{className:"py-2 px-4 border-b",children:[a.cost," ",a.currency]}),e("td",{className:"py-2 px-4 border-b",children:_(a.created_at)}),e("td",{className:"py-2 px-4 border-b",children:e("button",{className:"btn btn-sm",onClick:()=>v(a.availability_name,l),children:"Copy to Clipboard"})})]},l)),s.nonWeb.map((a,l)=>n("tr",{className:l%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:a.availability_name}),e("td",{className:"py-2 px-4 border-b",children:a.availability_source}),n("td",{className:"py-2 px-4 border-b",children:[a.cost," ",a.currency]}),e("td",{className:"py-2 px-4 border-b",children:_(a.created_at)})]},l))]})]})]}),O=({suggestions:s})=>n(b,{children:[e("h3",{className:"text-xl mt-4",children:"Excess Suggestions :"}),n("table",{className:"min-w-full bg-white border border-gray-300",children:[e("thead",{children:n("tr",{children:[e("th",{className:"py-2 px-4 border-b",children:"Excess Name"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Source"}),e("th",{className:"py-2 px-4 border-b",children:"Excess No"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Cost"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Type"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Quantity"}),e("th",{className:"py-2 px-4 border-b",children:"Excess Created Date"}),e("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),e("tbody",{children:s.matched.map((a,l)=>n("tr",{className:l%2===0?"bg-gray-100":"",children:[e("td",{className:"py-2 px-4 border-b",children:a.excess_name}),e("td",{className:"py-2 px-4 border-b",children:a.excess_source}),e("td",{className:"py-2 px-4 border-b",children:a.excess_no}),n("td",{className:"py-2 px-4 border-b",children:[a.cost," ",a.currency]}),e("td",{className:"py-2 px-4 border-b",children:a.excess_type}),e("td",{className:"py-2 px-4 border-b",children:a.quantity}),e("td",{className:"py-2 px-4 border-b",children:_(a.created_at)}),e("td",{className:"py-2 px-4 border-b",children:e("button",{className:"btn btn-sm",onClick:()=>v(a.excess_name,l),children:"Copy to Clipboard"})})]},l))})]})]}),m=(s,a)=>{i(f({[s]:a})),s==="product_id"&&(E(a),R(a))},D=s=>{i(f({availability_id:s}))},T={"RFQ Line":{"Product Name":e(p,{defaultOptions:!0,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:s})=>{m("product_id",s)},className:"flex-1",required:!0}),"Customer Part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:s=>m(s.target.name,s.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:s=>m(s.target.name,s.target.value),required:!0}),"Target Price":e("input",{id:"target_price",name:"target_price",onChange:s=>m(s.target.name,s.target.value),className:"form-input flex-1 "})},"":{"Alternative Products":e(p,{defaultOptions:!0,id:"alternative_products",name:"alternative_products",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:s=>{m("alternative_products",s.map(a=>a.value))},isMulti:!0,className:"flex-1"}),Availability:e(p,{defaultOptions:!0,isMulti:!1,id:"availability",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:P,onChange:({value:s})=>{m("availability_id",s)},className:"flex-1"}),Excess:e(p,{defaultOptions:!0,isMulti:!1,id:"excess_id",name:"excess_id",placeholder:"Type at least 2 characters to search...",loadOptions:k,onChange:({value:s})=>{m("excess_id",s)},className:"flex-1"}),"Special Instructions":e("textarea",{id:"special_instructions",name:"special_instructions",rows:3,onChange:s=>m(s.target.name,s.target.value),className:"form-textarea flex-1"}),comment:e("textarea",{id:"comment",rows:3,name:"comment",className:"form-textarea flex-1",onChange:s=>m(s.target.name,s.target.value),placeholder:""})}},E=async s=>{try{const a=await c.fetchSuggestedAvailability(s);if(a.status===200){const l=a.data.data,y=l.web?[l.web]:[],Q=l.nonWeb?[l.nonWeb]:[];t({web:y,nonWeb:Q})}}catch(a){console.error("Error fetching availability suggestions:",a)}},R=async s=>{try{const a=await c.fetchSuggestedExcess(s);if(a.status===200){const l=a.data.data,y=l.matched?[l.matched]:[];w({matched:y})}}catch(a){console.error("Error fetching excess suggestions:",a)}};return n(b,{children:[e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:T})}),e(A,{suggestions:o,onAvailabilitySelect:D}),e(O,{suggestions:d})]})},ae=()=>{const i=x(),c=(o,t)=>{i(f({[o]:t}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{Development:{"Processed for VRFQ round 1":e(G,{content:"Please do not change the value",className:"red",children:e("input",{id:"processed_for_vrfq_round_1",type:"checkbox",name:"processed_for_vrfq_round_1",className:"form-checkbox",onChange:o=>c(o.target.name,o.target.checked)})}),"Processed for VRFQ round 2":e("label",{className:"flex items-center cursor-pointer",children:e("input",{id:"processed_for_vrfq_round_2",type:"checkbox",name:"processed_for_vrfq_round_2",className:"form-checkbox",onChange:o=>c(o.target.name,o.target.checked)})}),"Open Status Time":e(g,{name:"open_status_timestamp","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left"},onChange:(o,t)=>c("open_status_timestamp",t),className:"form-input flex-1"})}}})})})},te=()=>{const i=x(),c=F(t=>t.rfqFormSlice),r=(t,d)=>{i(f({[t]:d}))};return e(b,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(N,{fields:{Header:{"Account Name":e(p,{defaultOptions:!0,required:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:j,onChange:({value:t})=>{r("account_id",t)},className:"flex-1"}),Contact:e(p,{defaultOptions:!0,required:!0,isMulti:!1,id:"contact",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:V,onChange:({value:t})=>{r("contact_id",t)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"Project Name / Application":e("input",{id:"project_name",name:"project_name",className:"form-input flex-1 ",onChange:t=>r(t.target.name,t.target.value)}),"RFQ Source":e(h,{name:"rfq_source",required:!0,options:z,onChange:({value:t})=>{r("rfq_source",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),"RFQ Type":e(h,{name:"rfq_type",required:!0,options:J,onChange:({value:t})=>{r("rfq_type",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),Status:e(h,{name:"status",options:K,onChange:({value:t})=>{r("status",t)},defaultValue:{value:"Open",label:"Open"},className:"flex-1"}),"Date History":e(g,{name:"date_history",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,d)=>r("date_history",d)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"readOnly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Portal BOM id":e("input",{id:"portal_bom_id",name:"portal_bom_id",onChange:t=>r(t.target.name,t.target.value),className:"form-input flex-1 "})},"":{"RFQ Owner":e(p,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:W,onChange:({value:t})=>{r("owner_id",t)},className:"flex-1"}),"Deal Stage":e(h,{name:"deal_stage",options:X,onChange:({value:t})=>{r("deal_stage",t)},className:"flex-1"}),"Customer RFQ File":e(U,{id:"customer_rfq_file",modelName:"rfq",formState:c,formAttribute:"customer_rfq_file",updateFormData:f}),"RFQ Dead Line":e(g,{name:"rfq_dead_line",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,d)=>r("rfq_dead_line",d)}),Currency:e(h,{name:"currency",id:"currency",options:$,className:"flex-1",onChange:({value:t})=>{r("currency",t)}}),"Vendor RFQs Line":e(p,{defaultOptions:!0,id:"vendor_rfqs_line",name:"vendor_rfqs_line",placeholder:"Type at least 2 characters to search...",loadOptions:L,onChange:t=>{r("vendor_rfqs_line",t.map(d=>d.value))},isMulti:!0,className:"flex-1"})}}})})})},se=()=>n("div",{className:"mt-8 px-4",children:[e(te,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ee,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ae,{})]}),fe=()=>{const{hasPermission:i}=H(),c=F(o=>o.rfqFormSlice),r=x();return u.useEffect(()=>{r(I("RFQ Add"))}),u.useEffect(()=>{r(S())},[]),i("create-rfq")?n("div",{className:"px-4",children:[e(Z,{formState:c,resetForm:S}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(se,{})})})]}):e(B,{})};export{fe as default};
