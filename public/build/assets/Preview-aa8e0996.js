import{c as L,u as E,r as i,h as M,d as q,s as Q,at as F,aV as O,j as a,e as I,b as r,f as R,a as H}from"./main-cfd27acf.js";import{I as V}from"./InfoListComponent-401c9034.js";import{A as z,I as x}from"./InformationSectionPreview-8fb7776a.js";import{M as k}from"./MultipleLineSectionPreview-926932f3.js";import{T as U}from"./TableSectionPreview-6951b7a7.js";import{A as Z}from"./AttachmentSection-3760d3c6.js";import"./CommonIcons-8a302a15.js";const te=()=>{var d,u,m,v,p,h,f,g,_,$,y,S,j,w;const{hasPermission:n}=L(),s=E(),[o,N]=i.useState(!0),l=M().id,D=new H,e=q(t=>t.invoiceForm);i.useEffect(()=>{s(Q("Invoice Preview"))});const C=()=>{window.print()},P=async()=>{const t=await D.fetchSingleInvoice(l);if(t.status!=200)return;const B=t.data.data.invoice;s(O(B))};i.useEffect(()=>{P().then(()=>{N(!1)})},[l]),i.useEffect(()=>{e.invoice_file&&F("invoice","invoice_file",e.invoice_file).then(t=>{s(O({invoice_file_preview:t}))})},[]);const c={leftObjects:[{label:"Due Date",value:`${e.due_date??""}`},{label:"Sales Commission",value:e.sales_commission},{label:"Exchange Rate",value:`${e.exchange_rate}`},{label:"ZohoBooksID",value:`${e.zoho_books_id}`}],rightObjects:[{label:"Deal Stage",value:`${e.deal_stage??""} `},{label:"Excise Duty",value:`${e.excise_duty}`},{label:"Invoice Stage",value:`${e.invoice_stage}`},{label:"Status",value:`${e.status}`},{label:"Currency",value:`${e.currency}`}]};`${e.invoice_valid}`,`${e.proactive_offer}`,`${e.rating}`,`${(d=e.product)==null?void 0:d.product_name}`,`${e.customer_part_id}`,`${e.quantity}`,`${e.list_price}`,`${e.lead_time}`,`${(u=e.vendor)==null?void 0:u.vendor_name}`,`${e.availability_no}`,`${e.availability_date}`,`${(m=e.availability)==null?void 0:m.availability_name}`,`${e.cost}`,`${e.lt_vendor}`,`${e.spq}`,`${e.quantity_in_stock}`;const b={leftObjects:[{label:"Billing Street",value:`${e.billing_street}`},{label:"Billing City",value:`${e.billing_city}`},{label:"Billing State",value:`${e.billing_state}`},{label:"Billing Code",value:`${e.billing_code}`},{label:"Billing Country",value:`${e.billing_country}`}],rightObjects:[{label:"Shipping Street",value:`${e.shipping_street}`},{label:"Shipping City",value:`${e.shipping_city}`},{label:"Shipping State",value:`${e.shipping_state}`},{label:"Shipping Code",value:`${e.shipping_code}`},{label:"Shipping Country",value:`${e.shipping_country}`}]},T=[{key:"id",label:"S.NO"},{key:"product_name",label:"Product Name",model:"product"},{key:"quantity",label:"Quantity"},{key:"list_price",label:"List Price"},{key:"amount",label:"Amount"},{key:"discount",label:"Discount"},{key:"tax",label:"Tax"},{key:"total",label:"Total"}],A=[{label:"Account Name",value:`${((v=e.account)==null?void 0:v.account_name)??""} `},{label:"Contact Name",value:`${((p=e.owner)==null?void 0:p.first_name)??""} ${((h=e.owner)==null?void 0:h.last_name)??""}`},{label:"Sales Order",value:`${((f=e.sales_order)==null?void 0:f.subject)??""} ${((g=e.contact)==null?void 0:g.last_name)??""} `},{label:"Purchase Order",value:`${e.purchase_order??""} `},{label:"Subject",value:`${e.subject??""} `},{label:"Invoice Date",value:`${e.invoice_date??""} `},{label:"Invoice Owner",value:`${((_=e.owner)==null?void 0:_.first_name)??""} ${(($=e.owner)==null?void 0:$.last_name)??""}`},{label:"Created By",value:`${((y=e.creator)==null?void 0:y.first_name)??""} ${((S=e.creator)==null?void 0:S.last_name)??""}`},{label:"Modified By",value:`${((j=e.modifier)==null?void 0:j.first_name)??""} ${((w=e.modifier)==null?void 0:w.last_name)??""}`}];return o?a(I,{}):!n("read-invoice")||o?a(I,{}):r("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(z,{loading:o,hasPermission:n,modelId:l,exportTable:C,routeModel:"invoice",permissionModel:"invoice"})}),r("div",{className:"panel",children:[r("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Invoice"}),a("div",{className:"shrink-0",children:a("img",{src:R(e.image_data),alt:"Invoice image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(V,{data:A}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(x,{title:"Header",leftObjects:c.leftObjects,rightObjects:c.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(x,{title:"Address Information",leftObjects:b.leftObjects,rightObjects:b.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(U,{title:"Invoice Items",items:e.items,columns:T,total:e.total,subtotal:e.subtotal,discount:e.discount,tax:e.tax,adjustment:e.adjustment}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(k,{sectionTitle:"Terms And Conditions",data:[{label:"Terms and Conditions",value:e.terms_and_conditions}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(k,{sectionTitle:"Description ",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(Z,{modelId:l,modelName:"contact"})]})]})};export{te as default};
