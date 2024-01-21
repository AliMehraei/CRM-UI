import{c as G,u as J,r as c,h as K,d as X,s as Y,aw as Z,aO as I,j as t,e as R,b as s,f as ee,i as T,S as L,W as l,V as u,a as te}from"./main-763a01a7.js";import{I as ae}from"./InfoListComponent-4af22fb1.js";import{A as ie,I as o}from"./InformationSectionPreview-139737e5.js";import{M}from"./MultipleLineSectionPreview-1d7090f6.js";import{A as le}from"./AttachmentSection-7a4759e3.js";import{A as se}from"./AttachmentDownloadButton-c04d7269.js";import{a as oe,b as ne}from"./CommonIcons-0598faa2.js";const ge=()=>{var y,_,$,S,j,w,O,q,C,N,E,P,B,D,x,Q,A,k;const{hasPermission:d}=G(),m=J(),[b,F]=c.useState(!0),i=K().id,n=new te,e=X(a=>a.quoteForm);c.useEffect(()=>{m(Y("Quote Preview"))});const W=()=>{window.print()},H=async()=>{const a=await n.fetchSingleQuote(i);if(a.status!=200)return;const r=a.data.data.quote;m(I(r))},U=async()=>{L.fire({icon:"info",title:"Are you sure?",showCancelButton:!0,showDenyButton:!0,confirmButtonText:"Send",denyButtonText:"Send With Attachment",denyButtonColor:"#000000",padding:"2em",customClass:{container:"sweet-alerts",denyButton:"btn btn-info "}}).then(async a=>{a.isConfirmed&&(l("Processing Sending Email"),(await n.quotationEmail(i)).status!=200&&u("Problem on sending email"),l("Email sent successfully")),a.isDenied&&(l("Processing Sending Email"),(await n.quotationEmail(i,!0)).status!=200&&u("Problem on sending email"),l("Email sent successfully"))})},V=async()=>{L.fire({icon:"info",title:"Are you sure?",showCancelButton:!0,showDenyButton:!0,confirmButtonText:"Send",denyButtonText:"Send With Attachment",denyButtonColor:"#000000",padding:"2em",customClass:{container:"sweet-alerts",denyButton:"btn btn-info "}}).then(async a=>{a.isConfirmed&&(l("Processing Sending Email"),(await n.quotationEmailProactive(i)).status!=200&&u("Problem on sending email"),l("Email sent successfully")),a.isDenied&&(l("Processing Sending Email"),(await n.quotationEmailProactive(i,!0)).status!=200&&u("Problem on sending email"),l("Email sent successfully"))})};c.useEffect(()=>{H().then(()=>{F(!1)})},[i]),c.useEffect(()=>{e.quote_file&&Z("quote","quote_file",e.quote_file).then(a=>{m(I({quote_file_preview:a}))})},[]);const f={leftObjects:[{label:"Converted By",value:`${e.converted_by?((y=e.converted_by)==null?void 0:y.first_name)+" "+((_=e.converted_by)==null?void 0:_.last_name):""}`},{label:"Customer RFQ No",value:e.customer_rfq_no},{label:"Quote Chance",value:`${e.quote_chance}`},{label:"Currency",value:`${e.currency}`}],rightObjects:[{label:"PM User",value:`${(($=e.pm_user)==null?void 0:$.first_name)??""} ${((S=e.pm_user)==null?void 0:S.last_name)??""}`},{label:"Deals Name",value:`${(j=e.deal)==null?void 0:j.deal_name}`},{label:"Quote Stage",value:`${e.quote_stage}`},{label:"Quote File(Excel)",value:t(se,{formAttribute:"quote_file",modelName:"quote",formState:e})},{label:"Exchange Rate ",value:`${e.exchange_rate}`}]},h={leftObjects:[{label:"Quote valid",value:`${e.quote_valid}`},{label:"Proactive Offer",value:`${e.proactive_offer}`}],rightObjects:[{label:"Rating",value:`${e.rating}`}]},g={leftObjects:[{label:"Product Name",value:`${(w=e.product)==null?void 0:w.product_name}`},{label:"Customer part ID",value:`${e.customer_part_id}`}],rightObjects:[{label:"Quantity",value:`${e.quantity}`},{label:"List Price",value:`${e.list_price}`},{label:"Lead Time",value:`${e.lead_time}`}]},p={leftObjects:[{label:"Vendor",value:`${(O=e.vendor)==null?void 0:O.vendor_name}`},{label:"Availability No",value:`${e.availability_no}`},{label:"Availability Date",value:`${e.availability_date}`},{label:"Availability",value:`${(q=e.availability)==null?void 0:q.availability_name}`}],rightObjects:[{label:"Cost",value:`${e.cost}`},{label:"LT vendor",value:`${e.lt_vendor}`},{label:"SPQ",value:`${e.spq}`},{label:"Quantity in Stock",value:`${e.quantity_in_stock}`}]},v={leftObjects:[{label:"Billing Street",value:`${e.billing_street}`},{label:"Billing City",value:`${e.billing_city}`},{label:"Billing State",value:`${e.billing_state}`},{label:"Billing Code",value:`${e.billing_code}`},{label:"Billing Country",value:`${e.billing_country}`}],rightObjects:[{label:"Shipping Street",value:`${e.shipping_street}`},{label:"Shipping City",value:`${e.shipping_city}`},{label:"Shipping State",value:`${e.shipping_state}`},{label:"Shipping Code",value:`${e.shipping_code}`},{label:"Shipping Country",value:`${e.shipping_country}`}]},z=[{label:"Account Name",value:`${((C=e.account)==null?void 0:C.account_name)??""} `},{label:"Contact Name",value:`${((N=e.contact)==null?void 0:N.first_name)??""} ${((E=e.contact)==null?void 0:E.last_name)??""} `},{label:"RFQ Name",value:`${((P=e.rfq)==null?void 0:P.rfq_name)??""} `},{label:"Subject",value:`${e.subject??""} `},{label:"Quote Owner",value:`${((B=e.owner)==null?void 0:B.first_name)??""} ${((D=e.owner)==null?void 0:D.last_name)??""}`},{label:"Created By",value:`${((x=e.creator)==null?void 0:x.first_name)??""} ${((Q=e.creator)==null?void 0:Q.last_name)??""}`},{label:"Modified By",value:`${((A=e.modifier)==null?void 0:A.first_name)??""} ${((k=e.modifier)==null?void 0:k.last_name)??""}`}];return b?t(R,{}):!d("read-quote")||b?t(R,{}):s("div",{children:[s("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:[t(ie,{loading:b,hasPermission:d,modelId:i,exportTable:W,routeModel:"quotes",permissionModel:"quote"}),s("button",{type:"button",className:"btn btn-info gap-2",onClick:U,children:[t(oe,{}),"Quotation Email"]}),s("button",{type:"button",className:"btn btn-info gap-2",onClick:V,children:[t(ne,{}),"Quotation Proactive Email"]})]}),s("div",{className:"panel",children:[s("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[t("div",{className:"text-2xl font-semibold uppercase",children:"Quote"}),t("div",{className:"shrink-0",children:t("img",{src:ee(e.image_data),alt:"Quote image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),t(ae,{data:z}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Header",leftObjects:f.leftObjects,rightObjects:f.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Status",leftObjects:h.leftObjects,rightObjects:h.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Quote Line",leftObjects:g.leftObjects,rightObjects:g.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Source",leftObjects:p.leftObjects,rightObjects:p.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Address Information",leftObjects:v.leftObjects,rightObjects:v.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(M,{sectionTitle:"Terms And Conditions",data:[{label:"Terms and Conditions",value:e.terms_and_conditions}]}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(M,{sectionTitle:"Description ",data:[{label:"Description",value:e.description}]}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(o,{title:"Date information",leftObjects:[{label:"Created Date",value:T(e.created_at)}],rightObjects:[{label:"Modified Date",value:T(e.updated_at)}]}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(le,{modelId:i,modelName:"quote"})]})]})};export{ge as default};
