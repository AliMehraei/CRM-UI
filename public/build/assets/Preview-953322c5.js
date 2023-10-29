import{c as H,u as U,r,h as V,a as z,s as G,ao as J,aE as A,b as t,d as D,j as n,f as K,e as W}from"./main-8d5d8e48.js";import{I as X}from"./InfoListComponent-5c490f80.js";import{A as Y,I as l}from"./InformationSectionPreview-6cb73669.js";import{M as I}from"./MultipleLineSectionPreview-6c8b0e0f.js";import{T as Z}from"./TableSectionPreview-63ffc504.js";import{A as ee}from"./AttachmentSection-31dcea65.js";import{A as te}from"./AttachmentDownloadButton-83975a74.js";import"./CommonIcons-710cb86d.js";const ue=()=>{var h,f,p,_,g,y,$,j,O,S,w,q,N,k,C,Q,P,x;const{hasPermission:c}=H(),o=U(),[s,T]=r.useState(!0),i=V().id,L=new W,e=z(a=>a.quoteForm);r.useEffect(()=>{o(G("Quote Preview"))});const B=()=>{window.print()},E=async()=>{const a=await L.fetchSingleQuote(i);if(a.status!=200)return;const R=a.data.data.quote;o(A(R))};r.useEffect(()=>{E().then(()=>{T(!1)})},[i]),r.useEffect(()=>{e.quote_file&&J("quote","quote_file",e.quote_file).then(a=>{o(A({quote_file_preview:a}))})},[]);const b={leftObjects:[{label:"Converted By",value:`${e.converted_by?((h=e.converted_by)==null?void 0:h.first_name)+" "+((f=e.converted_by)==null?void 0:f.last_name):""}`},{label:"Customer RFQ No",value:e.customer_rfq_no},{label:"Quote Chance",value:`${e.quote_chance}`},{label:"Currency",value:`${e.currency}`}],rightObjects:[{label:"PM User",value:`${((p=e.pm_user)==null?void 0:p.first_name)??""} ${((_=e.pm_user)==null?void 0:_.last_name)??""}`},{label:"Deals Name",value:`${(g=e.deal)==null?void 0:g.deal_name}`},{label:"Quote Stage",value:`${e.quote_stage}`},{label:"Quote File(Excel)",value:t(te,{formAttribute:"quote_file",modelName:"quote",formState:e})},{label:"Exchange Rate ",value:`${e.exchange_rate}`}]},u={leftObjects:[{label:"Quote valid",value:`${e.quote_valid}`},{label:"Proactive Offer",value:`${e.proactive_offer}`}],rightObjects:[{label:"Rating",value:`${e.rating}`}]},m={leftObjects:[{label:"Product Name",value:`${(y=e.product)==null?void 0:y.product_name}`},{label:"Customer part ID",value:`${e.customer_part_id}`}],rightObjects:[{label:"Quantity",value:`${e.quantity}`},{label:"List Price",value:`${e.list_price}`},{label:"Lead Time",value:`${e.lead_time}`}]},d={leftObjects:[{label:"Vendor",value:`${($=e.vendor)==null?void 0:$.vendor_name}`},{label:"Availability No",value:`${e.availability_no}`},{label:"Availability Date",value:`${e.availability_date}`},{label:"Availability",value:`${(j=e.availability)==null?void 0:j.availability_name}`}],rightObjects:[{label:"Cost",value:`${e.cost}`},{label:"LT vendor",value:`${e.lt_vendor}`},{label:"SPQ",value:`${e.spq}`},{label:"Quantity in Stock",value:`${e.quantity_in_stock}`}]},v={leftObjects:[{label:"Billing Street",value:`${e.billing_street}`},{label:"Billing City",value:`${e.billing_city}`},{label:"Billing State",value:`${e.billing_state}`},{label:"Billing Code",value:`${e.billing_code}`},{label:"Billing Country",value:`${e.billing_country}`}],rightObjects:[{label:"Shipping Street",value:`${e.shipping_street}`},{label:"Shipping City",value:`${e.shipping_city}`},{label:"Shipping State",value:`${e.shipping_state}`},{label:"Shipping Code",value:`${e.shipping_code}`},{label:"Shipping Country",value:`${e.shipping_country}`}]},F=[{key:"product_name",label:"Product Name",model:"product"},{key:"customer_part_id",label:"Customer Part ID"},{key:"quantity",label:"Quantity"},{key:"spq",label:"SPQ"},{key:"list_price",label:"List Price"},{key:"lead_time",label:"Lead Time"},{key:"date_code",label:"Date Code"},{key:"amount",label:"Amount"},{key:"comment",label:"Comment"}],M=[{label:"Account Name",value:`${((O=e.account)==null?void 0:O.account_name)??""} `},{label:"Contact Name",value:`${((S=e.contact)==null?void 0:S.first_name)??""} ${((w=e.contact)==null?void 0:w.last_name)??""} `},{label:"RFQ Name",value:`${((q=e.rfq)==null?void 0:q.rfq_name)??""} `},{label:"Subject",value:`${e.subject??""} `},{label:"Quote Owner",value:`${((N=e.owner)==null?void 0:N.first_name)??""} ${((k=e.owner)==null?void 0:k.last_name)??""}`},{label:"Created By",value:`${((C=e.creator)==null?void 0:C.first_name)??""} ${((Q=e.creator)==null?void 0:Q.last_name)??""}`},{label:"Modified By",value:`${((P=e.modifier)==null?void 0:P.first_name)??""} ${((x=e.modifier)==null?void 0:x.last_name)??""}`}];return s?t(D,{}):!c("read-quote")||s?t(D,{}):n("div",{children:[t("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:t(Y,{loading:s,hasPermission:c,modelId:i,exportTable:B,routeModel:"quotes",permissionModel:"quote"})}),n("div",{className:"panel",children:[n("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[t("div",{className:"text-2xl font-semibold uppercase",children:"Quote"}),t("div",{className:"shrink-0",children:t("img",{src:K(e.image_data),alt:"Quote image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),t(X,{data:M}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(l,{title:"Header",leftObjects:b.leftObjects,rightObjects:b.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(l,{title:"Status",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(Z,{title:"Quote Items",items:e.items,columns:F,total:e.quote_total}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(l,{title:"Quote Line",leftObjects:m.leftObjects,rightObjects:m.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(l,{title:"Source",leftObjects:d.leftObjects,rightObjects:d.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(l,{title:"Address Information",leftObjects:v.leftObjects,rightObjects:v.rightObjects}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(I,{sectionTitle:"Terms And Conditions",data:[{label:"Terms and Conditions",value:e.terms_and_conditions}]}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(I,{sectionTitle:"Description ",data:[{label:"Description",value:e.description}]}),t("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),t(ee,{modelId:i,modelName:"quote"})]})]})};export{ue as default};
