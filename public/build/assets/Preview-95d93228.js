import{c as k,u as O,r as i,h as C,d as B,s as D,j as a,e as x,b as o,f as I,aB as A,a as P}from"./main-cfd27acf.js";import{I as $}from"./InfoListComponent-401c9034.js";import{A as M,I as l}from"./InformationSectionPreview-8fb7776a.js";import{M as T}from"./MultipleLineSectionPreview-926932f3.js";import{A as L}from"./AttachmentSection-3760d3c6.js";import{A as R}from"./AttachmentDownloadButton-78fcb620.js";import"./CommonIcons-8a302a15.js";const Z=()=>{var m,u,b,d,p,h,v,g,f,_;const{hasPermission:n}=k(),c=O(),[r,y]=i.useState(!0),t=C().id,w=new P,e=B(s=>s.excessForm);i.useEffect(()=>{c(D("Excess Preview"))});const N=()=>{window.print()},S=async()=>{const s=await w.fetchSingleExcess(t);if(s.status!=200)return;const j=s.data.data.excess;c(A(j))},E=[{label:"Account Name",value:`${((m=e.account)==null?void 0:m.account_name)??""}`},{label:"Excess Name",value:e.excess_name},{label:"Contact",value:`${((u=e.contact)==null?void 0:u.first_name)??""} ${((b=e.contact)==null?void 0:b.last_name)??""}`},{label:"Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.email,children:e.email})},{label:"Excess Owner",value:`${((d=e.owner)==null?void 0:d.first_name)??""} ${((p=e.owner)==null?void 0:p.last_name)??""}`},{label:"Created By",value:`${((h=e.creator)==null?void 0:h.first_name)??""} ${((v=e.creator)==null?void 0:v.last_name)??""}`},{label:"Modified By",value:`${((g=e.modifier)==null?void 0:g.first_name)??""} ${((f=e.modifier)==null?void 0:f.last_name)??""}`}];return i.useEffect(()=>{S().then(()=>{y(!1)})},[t]),r?a(x,{}):!n("read-excess")||r?a(x,{}):o("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(M,{loading:r,hasPermission:n,modelId:t,exportTable:N,routeModel:"excess",permissionModel:"excess"})}),o("div",{className:"panel",children:[o("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Excess"}),a("div",{className:"shrink-0",children:a("img",{src:I(e.image_data),alt:"account image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a($,{data:E}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"General Information",leftObjects:[{label:"Portal Excess Id",value:e.portal_excess_id},{label:"Excess Source",value:e.excess_source},{label:"Secondary Email",value:a("a",{className:"text-primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:"+e.secondary_email,children:e.secondary_email})},{label:"Currency",value:e.currency}],rightObjects:[{label:"Excess File",value:a(R,{formAttribute:"excess_file",modelName:"excess",formState:e})},{label:"Exchange Rate",value:e.exchange_rate},{label:"Email Opt Out",value:e.email_opt_out?"Yes":"No"}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Status",leftObjects:[{label:"Excess Type",value:e.excess_type}],rightObjects:[{label:"Excess No",value:e.excess_no}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Excess Line",leftObjects:[{label:"Product name",value:((_=e.product)==null?void 0:_.product_name)??""},{label:"Customer Internal No.",value:e.customer_internal_no??""},{label:"Quantity",value:e.quantity}],rightObjects:[{label:"Cost",value:e.cost},{label:"Date Code",value:e.date_code},{label:"SPQ",value:e.spq},{label:"MOQ",value:e.moq},{label:"Comment",value:e.comment}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Address Information",leftObjects:[{label:"Billing Street",value:e.billing_street},{label:"Billing City",value:e.billing_city},{label:"Billing Code",value:e.billing_code},{label:"Billing State",value:e.billing_state},{label:"Billing Country",value:e.billing_country}],rightObjects:[{label:"Shipping Street",value:e.shipping_street},{label:"Shipping City",value:e.shipping_city},{label:"Shipping Code",value:e.shipping_code},{label:"Shipping State",value:e.shipping_state},{label:"Shipping Country",value:e.shipping_country}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(T,{sectionTitle:"Description Information",data:[{label:"Description",value:e.description},{label:"Last Activity Date",value:e.last_activity_date}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Technical information",leftObjects:[{label:"ZohoBooksID",value:e.zoho_books_id},{label:"BooksID EUR",value:e.books_id_eur},{label:"BooksID USD",value:e.books_id_usd}],rightObjects:[{label:"BOM/Excess Total Uploading Rows",value:e.bom_total_row},{label:"Account Margin",value:e.account_margin}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Unused information",leftObjects:[{label:"Purchasing Volume Current",value:e.purchasing_volume_current}],rightObjects:[{label:"Annual Revenue",value:e.annual_revenue}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(L,{modelId:t,modelName:"excess"})]})]})};export{Z as default};
