import{u as c,d as p,a as d,b as a,F as u,l as f,j as h,c as x,r as _,s as b,f as v,m as N}from"./main-8a69f85c.js";import{A as s}from"./react-select-async.esm-a4ef796e.js";import{G as g,A as y}from"./GenerateFields-2d27b3d4.js";import{S as i}from"./react-select.esm-bac11f38.js";import{s as C,b as O,c as S,d as w,e as F,f as D,i as M,j as T,a as A}from"./CommonFunctions-3dfebde0.js";import{F as E}from"./index-f68b55f7.js";/* empty css                  */import"./Select-aecb2a80.esm-5c135cbc.js";import"./sweetalert2.all-d4d85d58.js";const q=()=>{const n=c();new p,d(e=>e.dealForm);const t=(e,r)=>{n(f({[e]:r}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(g,{fields:{"Deals Information":{"Deals Owner":a(s,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:C,onChange:({value:e})=>{t("owner_id",e)},className:"flex-1"}),"Deals Name":a("input",{id:"deal_name",name:"deal_name",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Account Name":a(s,{isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:O,onChange:({value:e})=>{t("account_id",e)},className:"flex-1"}),Type:a(i,{options:[{value:"none",label:"-None-"},{value:"existierendes",label:"Existierendes Geschäft"},{value:"neues",label:"Neues Geschäft"}],name:"deal_type",id:"deal_type",onChange:({value:e})=>{t("deal_type",e)},className:"flex-1"}),"Expected Revenue":a("input",{id:"expected_revenue",name:"expected_revenue",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Source":a(i,{options:[{value:"none",label:"-None-"},{value:"unangemeldeter",label:"Unangemeldeter Anruf/Besuch"},{value:"mitarbeitervermittlung",label:"Mitarbeitervermittlung"},{value:"kunden",label:"Kunden Vermittlung"},{value:"teilnehmer",label:"Teilnehmer"},{value:"mess",label:"Mess"}],name:"lead_source",id:"lead_source",onChange:({value:e})=>{t("lead_source",e)},className:"flex-1"}),"Contact Name":a(s,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:S,onChange:({value:e})=>{t("contact_id",e)},className:"flex-1"}),Lead:a(s,{isMulti:!1,id:"lead_id",placeholder:"Type at least 2 characters to search...",name:"lead_id",loadOptions:w,onChange:({value:e})=>{t("lead_id",e)},className:"flex-1"}),RFQ:a(s,{isMulti:!1,id:"rfq_id",placeholder:"Type at least 2 characters to search...",name:"rfq_id",loadOptions:F,onChange:({value:e})=>{t("rfq_id",e)},className:"flex-1"}),Quote:a(s,{isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:D,onChange:({value:e})=>{t("quote_id",e)},className:"flex-1"}),"Sales Order":a(s,{isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:M,onChange:({value:e})=>{t("sales_order_id",e)},className:"flex-1"}),Invoice:a(s,{isMulti:!1,id:"invoice_id",placeholder:"Type at least 2 characters to search...",name:"invoice_id",loadOptions:T,onChange:({value:e})=>{t("invoice_id",e)},className:"flex-1"}),Currency:a(i,{options:A,name:"currency",id:"currency",onChange:({value:e})=>{t("currency",e)},className:"flex-1"})},"":{Amount:a("input",{id:"amount",type:"number",name:"amount",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Closing Date":a(E,{name:"closing_date",options:{dateFormat:"Y-m-d "},className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(e,r)=>t("closing_date",r)}),Pipeline:a(i,{options:[{value:"deal",label:"Deal"},{value:"excess",label:"Excess"}],name:"deal_pipeline",id:"deal_pipeline",onChange:({value:e})=>{t("deal_pipeline",e)},className:"flex-1"}),Stage:a(i,{options:[{value:"qualification",label:"Qualifikation"}],name:"deal_stage",id:"deal_stage",onChange:({value:e})=>{t("deal_stage",e)},className:"flex-1"}),"Probability (%)":a("input",{id:"probability",name:"probability",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Next Step":a("input",{id:"next_step",name:"next_step",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)}),"Exchange Rate":a("input",{id:"exchange_rate",name:"exchange_rate",type:"text",value:"1",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0}),"Lead Reference":a("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:e=>t(e.target.name,e.target.value)})}}})})})},I=()=>{d(l=>l.dealForm);const n=c();new p;const t=(l,m)=>{n(f({[l]:m}))};return a(u,{children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:a(g,{fields:{"Description Information":{Description:a("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:l=>t(l.target.name,l.target.value)})},"":{}}})})})},L=()=>h("div",{className:"mt-8 px-4",children:[a(q,{},"lealInfo"),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(I,{},"description")]}),z=()=>{const{hasPermission:n}=x(),t=d(l=>l.dealForm),o=c();return _.useEffect(()=>{o(b("Deal Add"))}),n("create-deal")?h("div",{className:"px-4",children:[a(y,{formState:t,resetForm:N}),a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:a(L,{})})})]}):a(v,{})};export{z as default};