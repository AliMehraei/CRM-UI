import{c as x,u as A,r as s,h as I,d as T,s as R,j as a,e as O,b as i,f as L,aF as U,a as B}from"./main-cfd27acf.js";import{I as $}from"./InfoListComponent-401c9034.js";import{A as F,I as l}from"./InformationSectionPreview-8fb7776a.js";import{M as H}from"./MultipleLineSectionPreview-926932f3.js";import{A as z}from"./AttachmentSection-3760d3c6.js";import"./CommonIcons-8a302a15.js";const G=()=>{var c,b,m,d,p,v,_,h,f,g,y,N,C,P;const{hasPermission:u}=x(),n=A(),[o,w]=s.useState(!0),t=I().id,k=new B,e=T(r=>r.productForm);s.useEffect(()=>{n(R("Product Preview"))});const M=()=>{window.print()},j=async()=>{const r=await k.fetchSingleProduct(t);if(r.status!=200)return;const D=r.data.data.product;n(U(D))},S=[{label:"Manufacture",value:((c=e.manufacturer)==null?void 0:c.name)??""},{label:"Part Description",value:e.part_description},{label:"Product Owner",value:`${((b=e.owner)==null?void 0:b.first_name)??""} ${((m=e.owner)==null?void 0:m.last_name)??""}`},{label:"Created By",value:`${((d=e.creator)==null?void 0:d.first_name)??""} ${((p=e.creator)==null?void 0:p.last_name)??""}`},{label:"Modified By",value:`${((v=e.modifier)==null?void 0:v.first_name)??""} ${((_=e.modifier)==null?void 0:_.last_name)??""}`},{label:"Approved By",value:`${((h=e.approvedBy)==null?void 0:h.first_name)??""} ${((f=e.approvedBy)==null?void 0:f.last_name)??""}`}];return s.useEffect(()=>{j().then(()=>{w(!1)})},[t]),o?a(O,{}):!u("read-product")||o?a(O,{}):i("div",{children:[a("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:a(F,{loading:o,hasPermission:u,modelId:t,exportTable:M,routeModel:"product",permissionModel:"product"})}),i("div",{className:"panel",children:[i("div",{className:"flex justify-between flex-wrap gap-4 px-4",children:[a("div",{className:"text-2xl font-semibold uppercase",children:"Product"}),a("div",{className:"shrink-0",children:a("img",{src:L(e.image_data),alt:"product image",className:"w-20 ltr:ml-auto rtl:mr-auto"})})]}),a($,{data:S}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Product Information",leftObjects:[{label:"Datasheet URL",value:a("a",{className:"text-primary",target:"_blank",href:e.datasheet_url,children:e.datasheet_url})},{label:"Product Type",value:e.product_type},{label:"Lost Reason Comment",value:e.lost_reason_comment},{label:"Lead Source",value:e.lead_source}],rightObjects:[{label:"Mpn",value:e.mpn_id},{label:"Business Product",value:e.business_product?"Yes":"No"},{label:"Product Active",value:e.product_active?"Yes":"No"},{label:"Company",value:e.company},{label:"Company Type",value:e.company_type}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Supply Chain",leftObjects:[],rightObjects:[{label:"Lifecylce Status",value:e.lifecycle_status}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Physical Properties",leftObjects:[{label:"Package",value:e.city},{label:"Case/Package",value:e.address},{label:"Packaging",value:e.zip_code},{label:"Number of Pins",value:e.zip_code}],rightObjects:[{label:"Weight",value:e.country},{label:"Case Code (Imperial)",value:e.state},{label:"Case Code (Metric)",value:e.state}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Tech Data",leftObjects:[{label:"Category",value:(g=e.category)==null?void 0:g.name},{label:"Average Lead Time",value:e.average_lead_time},{label:"Capacitance",value:e.capacitance},{label:"Dielectric",value:e.dielectric},{label:"Flash Memory Size",value:e.flash_memory_size},{label:"Frequency",value:e.frequency},{label:"Halogen Free",value:e.halogen_free},{label:"Lead Free",value:e.lead_free},{label:"Max Operating Temperature",value:e.max_operating_temperature},{label:"Max Supply Voltage",value:e.max_supply_voltage},{label:"Number of A/D Converters",value:e.number_of_ad_converters},{label:"Number of D/A Converters",value:e.number_of_da_converters},{label:"Number of I2C Channels",value:e.number_of_i2c_channels},{label:"Number of Timers/Counters",value:e.number_of_timers_counters},{label:"Number of USART Channels",value:e.number_of_usart_channels},{label:"Mount",value:e.mount},{label:"Radiation Hardening",value:e.radiation_hardening},{label:"Schedule B",value:e.schedule_b},{label:"Termination",value:e.termination},{label:"Voltage",value:e.voltage},{label:"Voltage Rating",value:e.voltage_rating}],rightObjects:[{label:"SPQ",value:e.spq},{label:"Weight in kg",value:e.weight_in_kg},{label:"Composition",value:e.composition},{label:"Core Architecture",value:e.core_architecture},{label:"RAM Size",value:e.ram_size},{label:"Material",value:e.material},{label:"Usage Unit",value:e.usage_unit},{label:"Unit Price",value:e.unit_price},{label:"Min Operating Temperature",value:e.min_operating_temperature},{label:"Min Supply Voltage",value:e.min_supply_voltage},{label:"Nominal Supply Current",value:e.nominal_supply_current},{label:"Number of Channels",value:e.number_of_channels},{label:"Number of I/Os",value:e.number_of_ios},{label:"Number of SPI Channels",value:e.number_of_spi_channels},{label:"Number of UART Channels",value:e.number_of_uart_channels},{label:"Resistance",value:e.resistance},{label:"Temperature Coefficient",value:e.temperature_coefficient},{label:"Tolerance",value:e.tolerance},{label:"Duplicated Status",value:e.duplicated_status},{label:"Voltage Rating (DC)",value:e.voltage_rating_dc}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Dimensions information",leftObjects:[{label:"Length",value:e.length},{label:"Depth",value:e.depth},{label:"Thickness",value:e.thickness}],rightObjects:[{label:"Width",value:e.width},{label:"Height",value:e.height}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Compliance information",leftObjects:[{label:"RoHs",value:e.rohs?"Yes":"No"},{label:"Reach",value:e.reach?"Yes":"No"}],rightObjects:[{label:"RoHs Status",value:e.rohs_status},{label:"REACH SVHC",value:e.reach_svhc}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Stock Information",leftObjects:[{label:"Quantity in Stock",value:e.quantity_in_stock}],rightObjects:[{label:"QTY Ordered",value:e.quantity_ordered},{label:"Quantity in Demand",value:e.quantity_in_demand}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Alternatives",leftObjects:[{label:"Alternative MPN 1",value:((y=e.alternative_mpn1)==null?void 0:y.product_name)??""},{label:"Alternative MPN 2",value:((N=e.alternative_mpn2)==null?void 0:N.product_name)??""}],rightObjects:[{label:"Alternative MPN 3",value:((C=e.alternative_mpn3)==null?void 0:C.product_name)??""},{label:"Alternative MPN 4",value:((P=e.alternative_mpn4)==null?void 0:P.product_name)??""}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"Export / Import Data",leftObjects:[{label:"Tariff Code",value:e.tariff_code}],rightObjects:[{label:"ECCN",value:e.eccn}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(l,{title:"API Data",leftObjects:[{label:"Octopart ID",value:e.octopart_id},{label:"Octopart URL",value:a("a",{className:"text-primary",target:"_blank",href:e.octopart_url,children:e.octopart_url})},{label:"updateByMouser",value:e.update_by_mouser?"Yes":"No"},{label:"ZohoBooksID",value:e.zoho_books_id},{label:"OP Last Update",value:e.op_last_update},{label:"OP Failure Message",value:e.op_failure_message}],rightObjects:[{label:"Mouser URL",value:a("a",{className:"text-primary",target:"_blank",href:e.mouser_url,children:e.mouser_url})},{label:"Mouser ID",value:e.mouser_id},{label:"Mouser Category",value:e.mouser_category},{label:"M Last Update",value:e.m_last_update},{label:"Product Margin",value:e.product_margin}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(H,{sectionTitle:"Communication Details / History",data:[{label:"Octopart Datasheets",value:e.octopart_datasheets},{label:"Octopart Compliance Documents",value:e.octopart_compliance_documents},{label:"Octopart Images",value:e.octopart_images}]}),a("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),a(z,{modelId:t,modelName:"product"})]})]})};export{G as default};
