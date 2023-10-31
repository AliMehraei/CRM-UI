import{c as Y,u as ee,r,h as ae,a as le,s as te,O as Q,b as a,d as H,j as o,f as ie,Q as se,R as re,e as oe}from"./main-0a556f10.js";import{I as ne}from"./InfoListComponent-b31b6725.js";import{A as be,I as l}from"./InformationSectionPreview-18574664.js";import{M as z}from"./MultipleLineSectionPreview-79ebbd35.js";import{T as ce}from"./TableSectionPreview-a68f0dfa.js";import{A as de}from"./AttachmentSection-469c4fb8.js";import"./CommonIcons-e09c83e0.js";const fe=()=>{var p,h,y,_,g,f,O,$,S,j,w,N,k,C,P,A,D,I,x,T,L,B,F,R,M,q,E;const{hasPermission:n}=Y(),b=ee(),[s,G]=r.useState(!0),t=ae().id,U=new oe,e=le(i=>i.salesOrderForm);r.useEffect(()=>{b(te("Sales Preview"))});const V=()=>{window.print()},Z=async()=>{const i=await U.fetchSingleSalesOrder(t);if(i.status!=200)return;const X=i.data.data.salesOrder;b(se(X))};r.useEffect(()=>{Z().then(()=>{G(!1)})},[t]);const J=[{value:"none",label:"-None-"},{value:"single_order",label:"Single Order"},{value:"frame_contract",label:"Frame Contract"},{value:"call_off",label:"Call Off"},{value:"forecast",label:"Forecast"}],c={leftObjects:[{label:"Account Name",value:`${(p=e.account)==null?void 0:p.account_name}`},{label:"Contact Name",value:`${e.contact?((h=e.contact)==null?void 0:h.first_name)+" "+((y=e.contact)==null?void 0:y.last_name):""}`},{label:"Quote Name",value:(_=e.qoute)==null?void 0:_.subject},{label:"Currency",value:`${e.currency}`}],rightObjects:[{label:"SO Number",value:`${e.so_number}`},{label:"Deals Name",value:`${(g=e.deal)==null?void 0:g.deal_name}`},{label:"Deal Stage",value:`${(f=e.deal)==null?void 0:f.deal_stage}`},{label:"Lost Reason",value:`${(O=e.lead)==null?void 0:O.lost_reason}`},{label:"Lost Reason Comment",value:`${($=e.lead)==null?void 0:$.lost_reason}`},{label:"SO Date",value:`${e.so_date}`},{label:"Exchange Rate ",value:`${e.exchange_rate}`}]},d={leftObjects:[{label:"Purchase Order",value:`${e.purchase_order}`},{label:"Customer PO date",value:`${e.customer_po_date}`},{label:"PO upload",value:`${e.po_upload} `},{label:"SO Type",value:Q(e.so_type,J)},{label:"Parent SO Nr",value:e.parent_so_nr}],rightObjects:[{label:"Subject",value:`${e.subject}`},{label:"Pending",value:`${e.pending}`},{label:"Status",value:`${Q(e.status,re)}`},{label:"ZohoBooksId",value:`${e.zoho_books_id}`}]},u={leftObjects:[{label:"Sales Total",value:`${e.total}`},{label:"GP Total",value:parseFloat(e.list_price)-parseFloat((S=e.availability)==null?void 0:S.availability_cost)*parseFloat(e.Quantity)},{label:"Margin",value:(1-parseFloat((j=e.availability)==null?void 0:j.availability_cost)/parseFloat(e.list_price))*100}],rightObjects:[{label:"Resale Price",value:`${e.list_price}`},{label:"Cost Vendor",value:`${(w=e.availability)==null?void 0:w.availability_cost}`}]},m={leftObjects:[{label:"Availability Name",value:`${(N=e.availability)==null?void 0:N.name}`},{label:"Availability No",value:`${(k=e.availability)==null?void 0:k.availability_no}`},{label:"Availability Cost",value:`${(C=e.availability)==null?void 0:C.availability_cost}`}],rightObjects:[{label:"Availability Quantity",value:`${(P=e.availability)==null?void 0:P.quantity}`},{label:"Availability LT",value:`${(A=e.availability)==null?void 0:A.lead_time}`},{label:"Availability DC",value:`${(D=e.availability)==null?void 0:D.date_code}`}]},v={leftObjects:[{label:"Billing Street",value:`${e.billing_street}`},{label:"Billing City",value:`${e.billing_city}`},{label:"Billing State",value:`${e.billing_state}`},{label:"Billing Code",value:`${e.billing_code}`},{label:"Billing Country",value:`${e.billing_country}`}],rightObjects:[{label:"Shipping Street",value:`${e.shipping_street}`},{label:"Shipping City",value:`${e.shipping_city}`},{label:"Shipping State",value:`${e.shipping_state}`},{label:"Shipping Code",value:`${e.shipping_code}`},{label:"Shipping Country",value:`${e.shipping_country}`}]},K=[{key:"product_name",label:"Product Name",model:"product"},{key:"quantity",label:"Quantity"},{key:"customer_part_id",label:"Customer Part ID"},{key:"list_price",label:"List Price"},{key:"date_code",label:"Date Code"},{key:"amount",label:"Amount"},{key:"requested_delivery_date",label:"Requested Delivery Date"},{key:"estimated_delivery_date",label:"Estimated Delivery Date"}],W=[{label:"Sales Order Owner",value:`${((I=e.owner)==null?void 0:I.first_name)??""} ${((x=e.owner)==null?void 0:x.last_name)??""}`},{label:"Sales Person",value:`${((T=e.sales_person)==null?void 0:T.first_name)??""} ${((L=e.sales_person)==null?void 0:L.last_name)??""}`},{label:"Approved By",value:`${((B=e.approved_by)==null?void 0:B.first_name)??""} ${((F=e.approved_by)==null?void 0:F.last_name)??""}`},{label:"Created By",value:`${((R=e.creator)==null?void 0:R.first_name)??""} ${((M=e.creator)==null?void 0:M.last_name)??""}`},{label:"Modified By",value:`${((q=e.modifier)==null?void 0:q.first_name)??""} ${((E=e.modifier)==null?void 0:E.last_name)??""}`}];return s?a(H,{}):!n("read-sales-order")||s?a(H,{}):o("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(be,{loading:s,hasPermission:n,modelId:t,exportTable:V,routeModel:"sales",permissionModel:"sales-order"})}),o("div",{className:"panel",children:[o("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Sales Order"}),a("div",{className:"shrink-0",children:a("img",{src:ie(e.image_data),alt:"Sales Order image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a(ne,{data:W}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Header",leftObjects:c.leftObjects,rightObjects:c.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Sales Order Information",leftObjects:d.leftObjects,rightObjects:d.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(ce,{title:"Ordered Items",items:e.items,columns:K,total:e.sales_total}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"SO Line",leftObjects:u.leftObjects,rightObjects:u.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Linked Availability",leftObjects:m.leftObjects,rightObjects:m.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Address Information",leftObjects:v.leftObjects,rightObjects:v.rightObjects}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{sectionTitle:"Terms And Conditions",data:[{label:"Terms and Conditions",value:e.terms_and_conditions}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{sectionTitle:"Description ",data:[{label:"Description",value:e.description}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(de,{modelId:t,modelName:"salesOrder"})]})]})};export{fe as default};
