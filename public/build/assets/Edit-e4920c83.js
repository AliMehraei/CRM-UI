import{u as v,e as _,a as b,b as e,l as i,m as z,j as d,f as P,n as H,w as K,x as Y,y as J,z as W,B as X,E as Z,k as R,F as U,G as h,h as B,c as ee,r as m,s as ae,H as G,d as Q}from"./main-a3f9880b.js";import{G as $,A as te}from"./GenerateFields-48686241.js";import{S as f}from"./react-select.esm-90327a01.js";import{F as le}from"./index-515e3b5a.js";import{A as se}from"./AttachmentSection-d44c5f12.js";/* empty css                  */import"./index-ade49a0a.js";const ne=()=>{var n,p,y,w,C,O,S,V,D,F,q,E,T,M,I,j,A,k,L;const c=v();new _;const a=b(t=>t.dealForm),l=(t,g)=>{c(h({[t]:g}))},u=[{value:"none",label:"-None-"},{value:"unangemeldeter",label:"Unangemeldeter Anruf/Besuch"},{value:"mitarbeitervermittlung",label:"Mitarbeitervermittlung"},{value:"kunden",label:"Kunden Vermittlung"},{value:"teilnehmer",label:"Teilnehmer"},{value:"mess",label:"Mess"}],s=[{value:"none",label:"-None-"},{value:"existierendes",label:"Existierendes Geschäft"},{value:"neues",label:"Neues Geschäft"}],r=[{value:"deal",label:"Deal"},{value:"excess",label:"Excess"}];let o=[{value:"qualification",label:"Qualifikation"}];const x={"Deals Information":{"Deals Owner":e(i,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:z,onChange:({value:t})=>{l("owner_id",t)},className:"flex-1",defaultValue:{value:(n=a.owner)==null?void 0:n.id,label:d("div",{className:"flex items-center",children:[a.owner?e("img",{src:P(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((p=a.owner)==null?void 0:p.first_name)+" "+((y=a.owner)==null?void 0:y.last_name)}),e("div",{className:"text-xs text-gray-500",children:(w=a.owner)==null?void 0:w.email})]})]},(C=a.owner)==null?void 0:C.id)}}),"Deals Name":e("input",{id:"deal_name",name:"deal_name",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.deal_name}),"Account Name":e(i,{defaultOptions:!0,isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:H,onChange:({value:t})=>{l("account_id",t)},className:"flex-1",defaultValue:{value:(O=a.account)==null?void 0:O.id,label:d("div",{className:"flex items-center",children:[a.account?e("img",{src:P(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:(S=a.account)==null?void 0:S.account_name}),e("div",{className:"text-xs text-gray-500",children:(V=a.account)==null?void 0:V.email})]})]},(D=a.account)==null?void 0:D.id)}}),Type:e(f,{options:s,name:"deal_type",id:"deal_type",onChange:({value:t})=>{l("deal_type",t)},className:"flex-1",defaultValue:s.find(t=>t.value==a.deal_type)}),"Expected Revenue":e("input",{id:"expected_revenue",name:"expected_revenue",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.expected_revenue??1}),"Lead Source":e(f,{options:u,name:"lead_source",id:"lead_source",onChange:({value:t})=>{l("lead_source",t)},className:"flex-1",defaultValue:u.find(t=>t.value==a.lead_source)}),"Contact Name":e(i,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:K,onChange:({value:t})=>{l("contact_id",t)},className:"flex-1",defaultValue:{value:(F=a.contact)==null?void 0:F.id,label:d("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((q=a.contact)==null?void 0:q.first_name)+" "+((E=a.account)==null?void 0:E.last_name)}),e("div",{className:"text-xs text-gray-500",children:(T=a.contact)==null?void 0:T.email})]})]},(M=a.contact)==null?void 0:M.id)}}),Lead:e(i,{defaultOptions:!0,isMulti:!1,id:"lead_id",placeholder:"Type at least 2 characters to search...",name:"lead_id",loadOptions:Y,onChange:({value:t})=>{l("lead_id",t)},className:"flex-1",defaultValue:{value:a.lead_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(I=a.lead)==null?void 0:I.company})})},a.lead_id)}}),RFQ:e(i,{defaultOptions:!0,isMulti:!1,id:"rfq_id",placeholder:"Type at least 2 characters to search...",name:"rfq_id",loadOptions:J,onChange:({value:t})=>{l("rfq_id",t)},className:"flex-1",defaultValue:{value:a.rfq_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(j=a.rfq)==null?void 0:j.rfq_name})})},a.rfq_id)}}),Quote:e(i,{defaultOptions:!0,isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:W,onChange:({value:t})=>{l("quote_id",t)},className:"flex-1",defaultValue:{value:a.quote_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(A=a.quote)==null?void 0:A.subject})})},a.quote_id)}}),"Sales Order":e(i,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:X,onChange:({value:t})=>{l("sales_order_id",t)},className:"flex-1",defaultValue:{value:a.sales_order_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(k=a.sales_order)==null?void 0:k.subject})})},a.sales_order_id)}}),Invoice:e(i,{defaultOptions:!0,isMulti:!1,id:"invoice_id",placeholder:"Type at least 2 characters to search...",name:"invoice_id",loadOptions:Z,onChange:({value:t})=>{l("invoice_id",t)},className:"flex-1",defaultValue:{value:a.invoice_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(L=a.invoice)==null?void 0:L.subject})})},a.invoice_id)}}),Currency:e(f,{options:R,name:"currency",id:"currency",onChange:({value:t})=>{l("currency",t)},className:"flex-1",defaultValue:R.find(t=>t.value==a.currency)})},"":{Amount:e("input",{id:"amount",type:"number",name:"amount",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.amount}),"Closing Date":e(le,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.closing_date?new Date(a.closing_date):null},name:"closing_date",value:a.closing_date?new Date(a.closing_date):"",className:"form-input flex-1",onChange:(t,g)=>l("closing_date",g)}),Pipeline:e(f,{options:r,name:"deal_pipeline",id:"deal_pipeline",onChange:({value:t})=>{l("deal_pipeline",t)},className:"flex-1",defaultValue:r.find(t=>t.value==a.deal_pipeline)}),Stage:e(f,{options:o,name:"deal_stage",id:"deal_stage",onChange:({value:t})=>{l("deal_stage",t)},className:"flex-1",defaultValue:o.find(t=>t.value==a.deal_stage)}),"Probability (%)":e("input",{id:"probability",name:"probability",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.probability}),"Next Step":e("input",{id:"next_step",name:"next_step",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.next_step}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:t=>l(t.target.name,t.target.value),defaultValue:a.lead_reference})}};return e(U,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e($,{fields:x})})})},ie=()=>{const c=b(s=>s.dealForm),a=v();new _;const l=(s,r)=>{a(h({[s]:r}))},u={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>l(s.target.name,s.target.value),defaultValue:c.description})},"":{}};return e(U,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e($,{fields:u})})})},de=()=>{const a=B().id;return d("div",{className:"mt-8 px-4",children:[e(ne,{},"lealInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(ie,{},"description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{modelId:a,modelName:"deal"})]})},he=()=>{const{hasPermission:c}=ee(),a=b(n=>n.dealForm),[l,u]=m.useState(!0),r=B().id,N=new _,o=v();m.useEffect(()=>{o(ae("Deal Edit"))}),m.useEffect(()=>{o(G())},[]);const x=async()=>{const n=await N.fetchSingleDeal(r);if(n.status!=200)return;const p=n.data.data.deal;o(h(p))};return m.useEffect(()=>{x().then(()=>{u(!1)})},[r]),m.useEffect(()=>{o(h({api:"updateSingleDeal",redirectTo:"/deal/edit/:id",action:"edit"}))},[]),l?e(Q,{}):!c("update-deal")||l?e(Q,{}):d("div",{className:"px-4",children:[e(te,{formState:a,resetForm:G}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(de,{})})})]})};export{he as default};