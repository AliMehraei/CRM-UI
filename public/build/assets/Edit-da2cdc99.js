import{u as x,a as _,d as N,r as m,j as e,l as i,m as K,b as d,f as j,n as z,w as Y,x as J,y as X,z as Z,B as ee,E as ae,k as U,F as W,v as h,h as B,c as le,s as te,G as P,e as G}from"./main-378d85af.js";import{G as $}from"./GenerateFields-aa49606d.js";import{S as p}from"./react-select.esm-c6c6ac7a.js";import{F as ne}from"./index-3b697400.js";import{A as se}from"./AttachmentSection-af0a7154.js";import{A as ie}from"./ActionButtonsComponent-1e4b0b64.js";/* empty css                  */import"./index-a7fc5899.js";const de=()=>{var C,w,y,L,Q,O,S,D,F,V,A,q,M,I,E,k,T,R,H;const c=x();new _;const a=N(l=>l.dealForm),t=(l,g)=>{c(h({[l]:g}))},u=[{value:"none",label:"-None-"},{value:"Unangemeldeter Anruf/Besuch",label:"Unangemeldeter Anruf/Besuch"},{value:"Mitarbeitervermittlung",label:"Mitarbeitervermittlung"},{value:"Kunden Vermittlung",label:"Kunden Vermittlung"},{value:"Teilnehmer",label:"Teilnehmer"},{value:"Messe",label:"Mess"},{value:"Internes Seminar",label:"Mess"},{value:"Internetrecherche",label:"Mess"}],n=[{value:"none",label:"-None-"},{value:"Existierendes Geschäft",label:"Existierendes Geschäft"},{value:"Neues Geschäft",label:"Neues Geschäft"}],o=[{value:"Deal",label:"Deal"},{value:"Excess",label:"Excess"}],f=[{value:"Qualifikation",label:"Qualifikation"}],s=[{value:"0.0 Cold lead unqualified (CLU)",label:"0.0 Cold lead / unqualified (CLU)"},{value:"1.0 Cold lead qualified (CLQ)",label:"1.0 Cold lead qualified (CLQ)"},{value:"2.0 First contact made (FCM)",label:"2.0 First contact made (FCM)"},{value:"3.0 warm lead qualified (WLQ)",label:"3.0 warm lead qualified (WLQ)"},{value:"4.0 Hot lead (HLQ)",label:"4.0 Hot lead (HLQ)"},{value:"Lost Lead",label:"Close Lead / Lost Lead"},{value:"10.0 Invoice got paid",label:"C10.0 Invoice got paid"},{value:"9.0 Invoice sent",label:"9.0 Invoice sent"},{value:"9.1 Lost Invoice",label:"9.1 Lost Invoice"},{value:"8.1 Lost SO",label:"8.1 Lost SO"},{value:"8.0 Sales Order (SO) sent",label:"8.0 Sales Order (SO) sent"},{value:"7.1 Lost Quote",label:"7.1 Lost Quote"},{value:"7.0 Quote sent",label:"7.0 Quote sent"},{value:"7.2 Quote Low Chance",label:"7.2 Quote Low Chance"},{value:"7.3 Quote High Chance",label:"7.3 Quote High Chance"},{value:"6.1 Lost RFQ",label:"6.1 Lost RFQ"},{value:"6.0 RFQ received",label:"6.0 RFQ received"},{value:"5.0 Lead transferred to Account & Contact",label:"5.0 Lead transferred to Account & Contact"},{value:"HLQ Hot Lead Qualified",label:"HLQ Hot Lead Qualified"},{value:"WLQ Warm Lead Qualified",label:"WLQ Warm Lead Qualified"},{value:"Abgeschlossen – An Mitbewerber verloren",label:"Abgeschlossen – An Mitbewerber verloren"},{value:"Abgeschlossen, verloren",label:"Abgeschlossen, verloren"},{value:"Abgeschlossen, gewonnen",label:"Abgeschlossen, gewonnen"},{value:"Unterhandlung/Rückblick",label:"Unterhandlung/Rückblick"},{value:"Vorschlag/Preis Angebot",label:"Vorschlag/Preis Angebot"},{value:"Analyse erforderlich",label:"Analyse erforderlich"},{value:"Qualifikation",label:"Qualifikation"}],[v,r]=m.useState(a.deal_pipeline=="Deal"?s:f),b={"Deals Information":{"Deals Owner":e(i,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:K,onChange:({value:l})=>{t("owner_id",l)},className:"flex-1",defaultValue:{value:(C=a.owner)==null?void 0:C.id,label:d("div",{className:"flex items-center",children:[a.owner?e("img",{src:j(a.owner.avatar_data),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((w=a.owner)==null?void 0:w.first_name)+" "+((y=a.owner)==null?void 0:y.last_name)}),e("div",{className:"text-xs text-gray-500",children:(L=a.owner)==null?void 0:L.email})]})]},(Q=a.owner)==null?void 0:Q.id)}}),"Deals Name":e("input",{id:"deal_name",name:"deal_name",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.deal_name}),"Account Name":e(i,{defaultOptions:!0,isMulti:!1,id:"account_id",placeholder:"Type at least 2 characters to search...",name:"account_id",loadOptions:z,onChange:({value:l})=>{t("account_id",l)},className:"flex-1",defaultValue:{value:(O=a.account)==null?void 0:O.id,label:d("div",{className:"flex items-center",children:[a.account?e("img",{src:j(a.account.image),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:(S=a.account)==null?void 0:S.account_name}),e("div",{className:"text-xs text-gray-500",children:(D=a.account)==null?void 0:D.email})]})]},(F=a.account)==null?void 0:F.id)}}),Type:e(p,{options:n,name:"deal_type",id:"deal_type",onChange:({value:l})=>{t("deal_type",l)},className:"flex-1",defaultValue:n.find(l=>l.value==a.deal_type)}),"Expected Revenue":e("input",{id:"expected_revenue",name:"expected_revenue",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.expected_revenue??1}),"Lead Source":e(p,{options:u,name:"lead_source",id:"lead_source",onChange:({value:l})=>{t("lead_source",l)},className:"flex-1",defaultValue:u.find(l=>l.value==a.lead_source)}),"Contact Name":e(i,{defaultOptions:!0,isMulti:!1,id:"contact_id",placeholder:"Type at least 2 characters to search...",name:"contact_id",loadOptions:Y,onChange:({value:l})=>{t("contact_id",l)},className:"flex-1",defaultValue:{value:(V=a.contact)==null?void 0:V.id,label:d("div",{className:"flex items-center",children:[a.contact?e("img",{src:a.contact.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,d("div",{children:[e("div",{className:"text-sm font-bold",children:((A=a.contact)==null?void 0:A.first_name)+" "+((q=a.account)==null?void 0:q.last_name)}),e("div",{className:"text-xs text-gray-500",children:(M=a.contact)==null?void 0:M.email})]})]},(I=a.contact)==null?void 0:I.id)}}),Lead:e(i,{defaultOptions:!0,isMulti:!1,id:"lead_id",placeholder:"Type at least 2 characters to search...",name:"lead_id",loadOptions:J,onChange:({value:l})=>{t("lead_id",l)},className:"flex-1",defaultValue:{value:a.lead_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(E=a.lead)==null?void 0:E.company})})},a.lead_id)}}),RFQ:e(i,{defaultOptions:!0,isMulti:!1,id:"rfq_id",placeholder:"Type at least 2 characters to search...",name:"rfq_id",loadOptions:X,onChange:({value:l})=>{t("rfq_id",l)},className:"flex-1",defaultValue:{value:a.rfq_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(k=a.rfq)==null?void 0:k.rfq_name})})},a.rfq_id)}}),Quote:e(i,{defaultOptions:!0,isMulti:!1,id:"quote_id",placeholder:"Type at least 2 characters to search...",name:"quote_id",loadOptions:Z,onChange:({value:l})=>{t("quote_id",l)},className:"flex-1",defaultValue:{value:a.quote_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(T=a.quote)==null?void 0:T.subject})})},a.quote_id)}}),"Sales Order":e(i,{defaultOptions:!0,isMulti:!1,id:"sales_order_id",placeholder:"Type at least 2 characters to search...",name:"sales_order_id",loadOptions:ee,onChange:({value:l})=>{t("sales_order_id",l)},className:"flex-1",defaultValue:{value:a.sales_order_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(R=a.sales_order)==null?void 0:R.subject})})},a.sales_order_id)}}),Invoice:e(i,{defaultOptions:!0,isMulti:!1,id:"invoice_id",placeholder:"Type at least 2 characters to search...",name:"invoice_id",loadOptions:ae,onChange:({value:l})=>{t("invoice_id",l)},className:"flex-1",defaultValue:{value:a.invoice_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(H=a.invoice)==null?void 0:H.subject})})},a.invoice_id)}}),Currency:e(p,{options:U,name:"currency",id:"currency",onChange:({value:l})=>{t("currency",l)},className:"flex-1",defaultValue:U.find(l=>l.value==a.currency)})},"":{Amount:e("input",{id:"amount",type:"number",name:"amount",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.amount}),"Closing Date":e(ne,{options:{dateFormat:"Y-m-d ",position:"auto left",defaultDate:a.closing_date?new Date(a.closing_date):null},name:"closing_date",value:a.closing_date?new Date(a.closing_date):"",className:"form-input flex-1",onChange:(l,g)=>t("closing_date",g)}),Pipeline:e(p,{options:o,name:"deal_pipeline",id:"deal_pipeline",onChange:({value:l})=>{t("deal_pipeline",l),r(l=="Deal"?s:f)},className:"flex-1",defaultValue:o.find(l=>l.value==a.deal_pipeline)}),Stage:e(p,{options:v,name:"deal_stage",id:"deal_stage",onChange:({value:l})=>{t("deal_stage",l)},className:"flex-1",defaultValue:a.deal_pipeline=="Deal"?s.find(l=>l.value==a.deal_stage):f.find(l=>l.value==a.deal_stage)}),"Probability (%)":e("input",{id:"probability",name:"probability",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.probability}),"Next Step":e("input",{id:"next_step",name:"next_step",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.next_step}),"Exchange Rate":e("input",{id:"exchange_rate",name:"exchange_rate",type:"text",className:"flex-1 form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed",disabled:!0,defaultValue:a.exchange_rate??1}),"Lead Reference":e("input",{id:"lead_reference",name:"lead_reference",className:"form-input flex-1 ",onChange:l=>t(l.target.name,l.target.value),defaultValue:a.lead_reference})}};return e(W,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e($,{fields:b})})})},oe=()=>{const c=N(n=>n.dealForm),a=x();new _;const t=(n,o)=>{a(h({[n]:o}))},u={"Description Information":{Description:e("textarea",{id:"description",rows:3,name:"description",className:"form-textarea flex-1",placeholder:"",onChange:n=>t(n.target.name,n.target.value),defaultValue:c.description})},"":{}};return e(W,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e($,{fields:u})})})},re=()=>{const a=B().id;return d("div",{className:"mt-8 px-4",children:[e(de,{},"lealInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(oe,{},"description"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(se,{modelId:a,modelName:"deal"})]})},ge=()=>{const{hasPermission:c}=le(),a=N(r=>r.dealForm),[t,u]=m.useState(!0),o=B().id,f=new _,s=x();m.useEffect(()=>{s(te("Deal Edit"))}),m.useEffect(()=>{s(P())},[]);const v=async()=>{const r=await f.fetchSingleDeal(o);if(r.status!=200)return;const b=r.data.data.deal;s(h(b))};return m.useEffect(()=>{v().then(()=>{u(!1)})},[o]),m.useEffect(()=>{s(h({api:"updateSingleDeal",redirectTo:"/deal/edit/:id",action:"edit"}))},[]),t?e(G,{}):!c("update-deal")||t?e(G,{}):d("div",{className:"px-4",children:[e(ie,{formState:a,resetForm:P}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(re,{})})})]})};export{ge as default};
