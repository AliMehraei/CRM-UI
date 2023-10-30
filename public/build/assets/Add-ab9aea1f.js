import{u,b as e,F as p,U as h,V as x,aH as N,aG as d,a as v,m as C,v as y,l as F,k as q,Z as S,j as b,c as O,r as _,s as w,aI as g,d as R}from"./main-0a556f10.js";/* empty css                  */import{A as r}from"./react-select-async.esm-cf6509b4.js";import{G as f,A as Q}from"./GenerateFields-4e27003b.js";import{F as m}from"./index-aeabfab4.js";import{T}from"./tippy-react.esm-fd6f1d23.js";import{S as c}from"./react-select.esm-03d9b7c7.js";import{F as D}from"./FileUploadComponent-125c2597.js";import"./Select-aecb2a80.esm-8205e217.js";import"./index-7d74c683.js";import"./ClearButtonComponent-21fa295a.js";const M=()=>{const n=u(),o=(a,s)=>{n(d({[a]:s}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{"RFQ Line":{"Product Name":e(r,{defaultOptions:!0,isMulti:!1,id:"product_id",placeholder:"Type at least 2 characters to search...",loadOptions:h,onChange:({value:a})=>{o("product_id",a)},className:"flex-1",required:!0}),"Customer Part Id":e("input",{id:"customer_part_id",name:"customer_part_id",className:"form-input flex-1 ",onChange:a=>o(a.target.name,a.target.value)}),Quantity:e("input",{id:"quantity",name:"quantity",className:"form-input flex-1 ",onChange:a=>o(a.target.name,a.target.value),required:!0}),"Target Price":e("input",{id:"target_price",name:"target_price",onChange:a=>o(a.target.name,a.target.value),className:"form-input flex-1 "})},"":{"Alternative Products":e(r,{defaultOptions:!0,id:"alternative_products",name:"alternative_products",placeholder:"Type at least 2 characters to search...",loadOptions:h,onChange:a=>{o("alternative_products",a.map(s=>s.value))},isMulti:!0,className:"flex-1"}),Availability:e(r,{defaultOptions:!0,isMulti:!1,id:"availability",name:"availability_id",placeholder:"Type at least 2 characters to search...",loadOptions:x,onChange:({value:a})=>{o("availability_id",a)},className:"flex-1"}),Excess:e(r,{defaultOptions:!0,isMulti:!1,id:"excess_id",name:"excess_id",placeholder:"Type at least 2 characters to search...",loadOptions:N,onChange:({value:a})=>{o("excess_id",a)},className:"flex-1"}),"Special Instructions":e("textarea",{id:"special_instructions",name:"special_instructions",rows:3,onChange:a=>o(a.target.name,a.target.value),className:"form-textarea flex-1"}),comment:e("textarea",{id:"comment",rows:3,name:"comment",className:"form-textarea flex-1",onChange:a=>o(a.target.name,a.target.value),placeholder:""})}}})})})},P=()=>{const n=u(),o=(a,s)=>{n(d({[a]:s}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Development:{"Processed for VRFQ round 1":e(T,{content:"Please do not change the value",className:"red",children:e("input",{id:"processed_for_vrfq_round_1",type:"checkbox",name:"processed_for_vrfq_round_1",className:"form-checkbox",onChange:a=>o(a.target.name,a.target.checked)})}),"Processed for VRFQ round 2":e("label",{className:"flex items-center cursor-pointer",children:e("input",{id:"processed_for_vrfq_round_2",type:"checkbox",name:"processed_for_vrfq_round_2",className:"form-checkbox",onChange:a=>o(a.target.name,a.target.checked)})}),"Open Status Time":e(m,{name:"open_status_timestamp","data-enable-time":!0,options:{enableTime:!0,dateFormat:"Y-m-d H:i",position:"auto left"},onChange:(a,s)=>o("open_status_timestamp",s),className:"form-input flex-1"})}}})})})},k=()=>{const n=u(),o=v(t=>t.rfqFormSlice),l=(t,i)=>{n(d({[t]:i}))};return e(p,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(f,{fields:{Header:{"Account Name":e(r,{defaultOptions:!0,isMulti:!1,id:"account_id",name:"account_id",placeholder:"Type at least 2 characters to search...",loadOptions:C,onChange:({value:t})=>{l("account_id",t)},className:"flex-1"}),Contact:e(r,{defaultOptions:!0,isMulti:!1,id:"contact",name:"contact_id",placeholder:"Type at least 2 characters to search...",loadOptions:y,onChange:({value:t})=>{l("contact_id",t)},className:"flex-1"}),"Customer RFQ No":e("input",{id:"customer_rfq_no",name:"customer_rfq_no",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"Project Name / Application":e("input",{id:"project_name",name:"project_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value)}),"RFQ Source":e(c,{name:"rfq_source",required:!0,options:[{value:"none",label:"-None-"},{value:"email",label:"Email"},{value:"telephone",label:"Telephone"},{value:"web_portal",label:"Web portal"},{value:"history",label:"History"}],onChange:({value:t})=>{l("rfq_source",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),"RFQ Type":e(c,{name:"rfq_type",required:!0,options:[{value:"none",label:"-None-"},{value:"cost_saving",label:"Cost Saving"},{value:"shortage",label:"Shortage"},{value:"eol",label:"EOL"},{value:"proactive",label:"Proactive"},{value:"calculation",label:"Calculation"}],onChange:({value:t})=>{l("rfq_type",t)},defaultValue:{value:"none",label:"-None-"},className:"flex-1"}),Status:e(c,{name:"status",required:!0,options:[{value:"none",label:"-None-"},{value:"open",label:"Open"},{value:"open_without_routing",label:"Open without routing"},{value:"quoted",label:"Quoted"},{value:"closed",label:"Closed"},{value:"in_review",label:"In review"}],onChange:({value:t})=>{l("status",t)},defaultValue:{value:"open",label:"Open"},className:"flex-1"}),"Date History":e(m,{name:"date_history",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>l("date_history",i)}),"Exchange Rate":e("input",{id:"exchangeRate",type:"text",value:"1",placeholder:"Readonly input here…",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Portal BOM id":e("input",{id:"portal_bom_id",name:"portal_bom_id",onChange:t=>l(t.target.name,t.target.value),className:"form-input flex-1 "})},"":{"RFQ Owner":e(r,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",loadOptions:F,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1"}),"Deal Stage":e(c,{name:"deal_stage",options:[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],onChange:({value:t})=>{l("deal_stage",t)},className:"flex-1"}),"Customer RFQ File":e(D,{id:"customer_rfq_file",modelName:"rfq",formState:o,formAttribute:"customer_rfq_file",updateFormData:d}),"RFQ Dead Line":e(m,{name:"rfq_dead_line",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>l("rfq_dead_line",i)}),Currency:e(c,{name:"currency",id:"currency",options:q,className:"flex-1",onChange:({value:t})=>{l("currency",t)}}),"Vendor RFQs Line":e(r,{defaultOptions:!0,id:"vendor_rfqs_line",name:"vendor_rfqs_line",placeholder:"Type at least 2 characters to search...",loadOptions:S,onChange:t=>{l("vendor_rfqs_line",t.map(i=>i.value))},isMulti:!0,className:"flex-1"})}}})})})},A=()=>b("div",{className:"mt-8 px-4",children:[e(k,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(M,{}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(P,{})]}),J=()=>{const{hasPermission:n}=O(),o=v(a=>a.rfqFormSlice),l=u();return _.useEffect(()=>{l(w("RFQ Add"))}),_.useEffect(()=>{l(g())},[]),n("create-rfq")?b("div",{className:"px-4",children:[e(Q,{formState:o,resetForm:g}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6",children:e(A,{})})})]}):e(R,{})};export{J as default};
