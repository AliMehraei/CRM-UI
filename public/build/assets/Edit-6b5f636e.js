import{u as v,d as _,a as b,b as e,j as d,F as Q,l as h,c as U,r as p,h as $,s as B,f as P,m as K}from"./main-d50c1b5f.js";import{A as i}from"./react-select-async.esm-e52329c5.js";import{G,A as Y}from"./GenerateFields-58c5ac0d.js";import{S as m}from"./react-select.esm-979cfe87.js";import{s as z,b as H,c as J,d as W,e as X,f as Z,i as ee,j as ae,a as R}from"./CommonFunctions-43750655.js";import{F as le}from"./index-628959de.js";/* empty css                  */import"./Select-aecb2a80.esm-ecfd9304.js";import"./sweetalert2.all-3ffe5e63.js";const te=()=>{var n,f,y,w,C,S,V,D,O,F,q,T,j,E,M,A,I,L,k;const u=v();new _;const a=b(l=>l.dealForm),t=(l,x)=>{u(h({[l]:x}))},c=[{value:"none",label:"-None-"},{value:"unangemeldeter",label:"Unangemeldeter Anruf/Besuch"},{value:"mitarbeitervermittlung",label:"Mitarbeitervermittlung"},{value:"kunden",label:"Kunden Vermittlung"},{value:"teilnehmer",label:"Teilnehmer"},{value:"mess",label:"Mess"}],s=[{value:"none",label:"-None-"},{value:"existierendes",label:"Existierendes Geschäft"},{value:"neues",label:"Neues Geschäft"}],r=[{value:"deal",label:"Deal"},{value:"excess",label:"Excess"}];let o=[{value:"qualification",label:"Qualifikation"}];const g={"Deals Information":{"Deals Owner":e(i,{isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:z,onChange:({value:l})=>{t("owner_id",l)},className:"flex-1",defaultValue:{value:(n=a.owner)==null?void 0:n.id,label:d("div",{className:"flex items-center",children:[a.owner?e("img",{src:a.owner.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((f=a.owner)==null?void 0:f.first_name)+" "+((y=a.owner)==null?void 0:y.last_name)}),e("div",{className:"text-xs text-gray-500",children:(w=a.owner)==null?void 0:w.email})]})]},(C=a.owner)==null?void 0:C.id)}}),"Deals Name":e("input",{id:"deal_name",name:"deal_name",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.deal_name}),"Account Name":e(i,{isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:H,onChange:({value:l})=>{t("account_id",l)},className:"flex-1",defaultValue:{value:(S=a.account)==null?void 0:S.id,label:d("div",{className:"flex items-center",children:[a.account?e("img",{src:a.account.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:(V=a.account)==null?void 0:V.account_name}),e("div",{className:"text-xs text-gray-500",children:(D=a.account)==null?void 0:D.email})]})]},(O=a.account)==null?void 0:O.id)}}),Type:e(m,{options:s,name:"deal_type",id:"deal_type",onChange:({value:l})=>{t("deal_type",l)},className:"flex-1",defaultValue:s.find(l=>l.value==a.deal_type)}),"Expected Revenue":e("input",{id:"expected_revenue",name:"expected_revenue",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.expected_revenue??1}),"Lead Source":e(m,{options:c,name:"lead_source",id:"lead_source",onChange:({value:l})=>{t("lead_source",l)},className:"flex-1",defaultValue:c.find(l=>l.value==a.lead_source)}),"Contact Name":e(i,{isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:J,onChange:({value:l})=>{t("contact_id",l)},className:"flex-1",defaultValue:{value:(F=a.contact)==null?void 0:F.id,label:d("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((q=a.contact)==null?void 0:q.first_name)+" "+((T=a.account)==null?void 0:T.last_name)}),e("div",{className:"text-xs text-gray-500",children:(j=a.contact)==null?void 0:j.email})]})]},(E=a.contact)==null?void 0:E.id)}}),Lead:e(i,{isMulti:!1,id:"lead_id",placeholder:"Type at least 2 characters to search...",name:"lead_id",loadOptions:W,onChange:({value:l})=>{t("lead_id",l)},className:"flex-1",defaultValue:{value:a.lead_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(M=a.lead)==null?void 0:M.company})})},a.lead_id)}}),RFQ:e(i,{isMulti:!1,id:"rfq_id",placeholder:"Type at least 2 characters to search...",name:"rfq_id",loadOptions:X,onChange:({value:l})=>{t("rfq_id",l)},className:"flex-1",defaultValue:{value:a.rfq_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(A=a.rfq)==null?void 0:A.rfq_name})})},a.rfq_id)}}),Quote:e(i,{isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:Z,onChange:({value:l})=>{t("quote_id",l)},className:"flex-1",defaultValue:{value:a.quote_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(I=a.quote)==null?void 0:I.subject})})},a.quote_id)}}),"Sales Order":e(i,{isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:ee,onChange:({value:l})=>{t("sales_order_id",l)},className:"flex-1",defaultValue:{value:a.sales_order_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(L=a.sales_order)==null?void 0:L.subject})})},a.sales_order_id)}}),Invoice:e(i,{isMulti:!1,id:"invoice_id",placeholder:"Type at least 2 characters to search...",name:"invoice_id",loadOptions:ae,onChange:({value:l})=>{t("invoice_id",l)},className:"flex-1",defaultValue:{value:a.invoice_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(k=a.invoice)==null?void 0:k.subject})})},a.invoice_id)}}),Currency:e(m,{options:R,name:"currency",id:"currency",onChange:({value:l})=>{t("currency",l)},className:"flex-1",defaultValue:R.find(l=>l.value==a.currency)})},"":{Amount:e("input",{id:"amount",type:"number",name:"amount",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.amount}),"Closing Date":e(le,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:`${a.closing_date?new Date(a.closing_date):""}`},name:"closing_date",value:a.closing_date?new Date(a.closing_date):"",className:"form-input flex-1",onChange:(l,x)=>t("closing_date",x)}),Pipeline:e(m,{options:r,name:"deal_pipeline",id:"deal_pipeline",onChange:({value:l})=>{t("deal_pipeline",l)},className:"flex-1",defaultValue:r.find(l=>l.value==a.deal_pipeline)}),Stage:e(m,{options:o,name:"deal_stage",id:"deal_stage",onChange:({value:l})=>{t("deal_stage",l)},className:"flex-1",defaultValue:o.find(l=>l.value==a.deal_stage)}),"Probability (%)":e("input",{id:"probability",name:"probability",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.probability}),"Next Step":e("input",{id:"next_step",name:"next_step",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.next_step}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.lead_reference})}};return e(Q,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(G,{fields:g})})})},se=()=>{const u=b(s=>s.dealForm),a=v();new _;const t=(s,r)=>{a(h({[s]:r}))},c={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:s=>t(s.target.name,s.target.value),defaultValue:u.description})},"":{}};return e(Q,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(G,{fields:c})})})},ne=()=>d("div",{className:"mt-8 px-4",children:[e(te,{},"lealInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{},"description")]}),he=()=>{const{hasPermission:u}=U(),a=b(n=>n.dealForm),[t,c]=p.useState(!0),r=$().id,N=new _,o=v();p.useEffect(()=>{o(B("Deal Edit"))});const g=async()=>{const n=await N.fetchSingleDeal(r);if(n.status!=200)return;const f=n.data.data.deal;o(h(f))};return p.useEffect(()=>{g().then(()=>{c(!1)})},[r]),p.useEffect(()=>{o(h({api:"updateSingleDeal",redirectTo:"/deal/edit/:id",action:"edit"}))},[]),t?e(P,{}):!u("update-deal")||t?e(P,{}):d("div",{className:"px-4",children:[e(Y,{formState:a,resetForm:K}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(ne,{})})})]})};export{he as default};
