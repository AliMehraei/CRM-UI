import{u as f,a as _,b as e,F as m,aB as d,aC as A,y as q,m as F,j as g,f as U,e as S,V as w,h as T,c as j,r as C,s as L,aD as M,d as O}from"./main-14f615f5.js";import{G as h,A as R}from"./GenerateFields-622759ee.js";import{S as y}from"./react-select.esm-f82d134e.js";import{A as x}from"./react-select-async.esm-fa6aa9d3.js";import{I as E}from"./ImageUploadComponent-b994b13c.js";import{F as I}from"./index-82fb8980.js";import{A as z}from"./AttachmentSection-b44113f0.js";/* empty css                  */import"./Select-aecb2a80.esm-a628f797.js";import"./ClearButtonComponent-f1847924.js";const Y=()=>{const s=f(),l=_(i=>i.productForm),n=(i,c)=>{s(d({[i]:c}))},r=[{label:"-None-",value:"none"},{label:"Production",value:"production"},{label:"Phase out",value:"phase_out"},{label:"EOL",value:"eol"},{label:"Unknown",value:"unknown"}],t={"Supply Chain":{"Manufacturer Name":e("input",{id:"manufacturer_name",name:"manufacturer_name",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.manufacturer_name})},"":{"Lifecylce Status":e(y,{options:r,name:"lifecycle_status",id:"lifecycle_status",onChange:({value:i})=>{n("lifecycle_status",i)},className:"flex-1",defaultValue:r.find(i=>i.value==l.lifecycle_status)})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:t})})})},B=()=>{var i,c,p,u,a,v,V,N,b,D,P;const s=f(),l=_(o=>o.productForm),n=(o,k)=>{s(d({[o]:k}))},r=[{label:"-None-",value:"none"},{label:"Goods",value:"goods"},{label:"Service",value:"service"}],t={"Product Information":{"Product Image":e(E,{formState:l,modelName:"product",id:"image",formAttribute:"image",updateFormData:d}),"Product Name":e("input",{id:"product_name",required:!0,name:"product_name",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value),defaultValue:l.product_name}),"Part Description":e("input",{id:"part_description",name:"part_description",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value),defaultValue:l.part_description}),Manufacturer:e(x,{defaultOptions:!0,isMulti:!1,required:!0,id:"manufacturer_id",placeholder:"Type at least 2 characters to search...",name:"manufacturer_id",loadOptions:A,onChange:({value:o})=>{n("manufacturer_id",o)},className:"flex-1",defaultValue:{value:l.manufacturer_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(i=l.manufacturer)==null?void 0:i.name})})},l.manufacturer_id)}}),"RFQ (Alternative)":e(x,{defaultOptions:!0,isMulti:!0,id:"rfqs_id",placeholder:"Type at least 2 characters to search...",name:"rfqs_id",loadOptions:q,onChange:o=>{n("rfqs_id",o.map(k=>k.value))},className:"flex-1",defaultValue:l.rfqs?l.rfqs.map(o=>({value:o.id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:o.rfq_name})})},o.id)})):[]}),"Business Product":e("input",{id:"business_product",type:"checkbox",name:"business_product",className:"form-checkbox",onChange:o=>n(o.target.name,o.target.checked),defaultChecked:l.business_product}),"Approved By":e(x,{defaultOptions:!0,isMulti:!1,id:"approved_by_id",placeholder:"Type at least 2 characters to search...",name:"approved_by_id",loadOptions:F,onChange:({value:o})=>{n("approved_by_id",o)},className:"flex-1",defaultValue:{value:(c=l.approved_by)==null?void 0:c.id,label:g("div",{className:"flex items-center",children:[l.approved_by?e("img",{src:l.approved_by.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((p=l.approved_by)==null?void 0:p.first_name)+" "+((u=l.approved_by)==null?void 0:u.last_name)}),e("div",{className:"text-xs text-gray-500",children:(a=l.approved_by)==null?void 0:a.email})]})]},(v=l.approved_by)==null?void 0:v.id)}})},"":{"Product Active":e("input",{id:"product_active",type:"checkbox",name:"product_active",className:"form-checkbox",onChange:o=>n(o.target.name,o.target.checked),defaultChecked:l.product_active}),"Product Owner":e(x,{defaultOptions:!0,isMulti:!1,id:"owner_id",placeholder:"Type at least 2 characters to search...",name:"owner_id",loadOptions:F,onChange:({value:o})=>{n("owner_id",o)},className:"flex-1",defaultValue:{value:(V=l.owner)==null?void 0:V.id,label:g("div",{className:"flex items-center",children:[l.owner?e("img",{src:U(l.owner.avatar),alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}):null,g("div",{children:[e("div",{className:"text-sm font-bold",children:((N=l.owner)==null?void 0:N.first_name)+" "+((b=l.owner)==null?void 0:b.last_name)}),e("div",{className:"text-xs text-gray-500",children:(D=l.owner)==null?void 0:D.email})]})]},(P=l.owner)==null?void 0:P.id)}}),"Datasheet URL":e("input",{id:"datasheet_url",name:"datasheet_url",className:"form-input flex-1 ",onChange:o=>n(o.target.name,o.target.value),defaultValue:l.datasheet_url}),"Product Type":e(y,{options:r,name:"product_type",id:"product_type",onChange:({value:o})=>{n("product_type",o)},className:"flex-1",defaultValue:r.find(o=>o.value==l.product_type)})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:t})})})},Q=()=>{const s=f(),l=_(t=>t.productForm),n=(t,i)=>{s(d({[t]:i}))},r={"Stock Information":{"Quantity in Stock":e("input",{id:"quantity_in_stock",name:"quantity_in_stock",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.quantity_in_stock})},"":{"Quantity Ordered":e("input",{id:"quantity_ordered",name:"quantity_ordered",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.quantity_ordered}),"Quantity in Demand":e("input",{id:"quantity_in_demand",name:"quantity_in_demand",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.quantity_in_demand})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},H=()=>{const s=f(),l=_(i=>i.productForm),n=(i,c)=>{s(d({[i]:c}))},r=[{label:"-None-",value:"none"},{label:"SMD",value:"smd"},{label:"THT",value:"tht"},{label:"Peripheral",value:"peripheral"},{label:"Other",value:"other"}],t={"Physical Properties":{Package:e(y,{options:r,name:"package",id:"package",onChange:({value:i})=>{n("package",i)},className:"flex-1",defaultValue:r.find(i=>i.value==l.package)}),"Case/Package":e("input",{id:"case_package",name:"case_package",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.case_package}),Packaging:e("input",{id:"packaging",name:"packaging",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.packaging}),"Number of Pins":e("input",{id:"number_of_pins",name:"number_of_pins",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.number_of_pins})},"":{Weight:e("input",{id:"weight",name:"weight",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.weight}),"Case Code (Imperial)":e("input",{id:"case_code_imperial",name:"case_code_imperial",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.case_code_imperial}),"Case Code (Metric)":e("input",{id:"case_code_metric",name:"case_code_metric",className:"form-input flex-1 ",onChange:i=>n(i.target.name,i.target.value),defaultValue:l.case_code_metric})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:t})})})},G=()=>{var u;const s=f(),l=new S,n=_(a=>a.productForm),r=(a,v)=>{s(d({[a]:v}))},t=async a=>{const v="id",V="name",N=await l.searchCategoryProduct({query:a});if(N.status)return N.data.data.map(b=>({value:b[v],label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:b[V]})})},b[v])}))},i=[{label:"-None-",value:"none"},{label:g(m,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-500 rounded-full"}),"Must be deleted"]}),value:"must_be_deleted"},{label:g(m,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-yellow-500 rounded-full"}),"Must be merged"]}),value:"must_be_merged"},{label:g(m,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-blue-500 rounded-full"}),"Must be renamed"]}),value:"must_be_renamed"},{label:g(m,{children:[e("span",{className:"inline-block w-4 h-4 mr-2 bg-red-800 rounded-full"}),"Delete confirmed"]}),value:"delete_confirmed"}],c=[{label:"PCS",value:"pcs"}],p={"Tech Data":{Category:e(x,{defaultOptions:!0,isMulti:!1,required:!0,id:"product_category_id",placeholder:"Type at least 2 characters to search...",name:"product_category_id",loadOptions:t,onChange:({value:a})=>{r("product_category_id",a)},className:"flex-1",defaultValue:{value:n.product_category_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(u=n.category)==null?void 0:u.name})})},n.product_category_id)}}),"Average Lead Time":e("input",{id:"average_lead_time",name:"average_lead_time",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.average_lead_time}),Capacitance:e("input",{id:"capacitance",name:"capacitance",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.capacitance}),Dielectric:e("input",{id:"dielectric",name:"dielectric",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.dielectric}),"Flash Memory Size":e("input",{id:"flash_memory_size",name:"flash_memory_size",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.flash_memory_size}),Frequency:e("input",{id:"frequency",name:"frequency",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.frequency}),"Halogen Free":e("input",{id:"halogen_free",name:"halogen_free",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.halogen_free}),"Lead Free":e("input",{id:"lead_free",name:"lead_free",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.lead_free}),"Max Operating Temperature":e("input",{id:"max_operating_temperature",name:"max_operating_temperature",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.max_operating_temperature}),"Max Supply Voltage":e("input",{id:"max_supply_voltage",name:"max_supply_voltage",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.max_supply_voltage}),"Number of A/D Converters":e("input",{id:"number_of_ad_converters",name:"number_of_ad_converters",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_ad_converters}),"Number of D/A Converters":e("input",{id:"number_of_da_converters",name:"number_of_da_converters",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_da_converters}),"Number of I2C Channels":e("input",{id:"number_of_i2c_channels",name:"number_of_i2c_channels",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_i2c_channels}),"Number of Timers/Counters":e("input",{id:"number_of_timers_counters",name:"number_of_timers_counters",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_timers_counters}),"Number of USART Channels":e("input",{id:"number_of_usart_channels",name:"number_of_usart_channels",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_usart_channels}),Mount:e("input",{id:"mount",name:"mount",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.mount}),"Radiation Hardening":e("input",{id:"radiation_hardening",name:"radiation_hardening",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.radiation_hardening}),"Schedule B":e("input",{id:"schedule_b",name:"schedule_b",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.schedule_b}),Termination:e("input",{id:"termination",name:"termination",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.termination}),"Voltage ":e("input",{id:"voltage",name:"voltage",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.voltage}),"Voltage Rating":e("input",{id:"voltage_rating",name:"voltage_rating",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.voltage_rating})},"":{SPQ:e("input",{id:"spq",name:"spq",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.spq}),"Weight in kg":e("input",{id:"weight_in_kg",name:"weight_in_kg",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.weight_in_kg}),Composition:e("input",{id:"composition",name:"composition",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.composition}),"Core Architecture":e("input",{id:"core_architecture",name:"core_architecture",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.core_architecture}),"RAM Size":e("input",{id:"ram_size",name:"ram_size",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.ram_size}),Material:e("input",{id:"material",name:"material",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.material}),"Usage Unit":e(y,{options:c,name:"usage_unit",id:"usage_unit",onChange:({value:a})=>{r("usage_unit",a)},className:"flex-1",defaultValue:c.find(a=>a.value==n.usage_unit)}),"Unit Price":e("input",{id:"unit_price",name:"unit_price",type:"number",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.unit_price}),"Min Operating Temperature":e("input",{id:"min_operating_temperature",name:"min_operating_temperature",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.min_operating_temperature}),"Min Supply Voltage":e("input",{id:"min_supply_voltage",name:"min_supply_voltage",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.min_supply_voltage}),"Nominal Supply Current":e("input",{id:"nominal_supply_current",name:"nominal_supply_current",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.nominal_supply_current}),"Number of Channels":e("input",{id:"number_of_channels",name:"number_of_channels",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_channels}),"Number of I/Os":e("input",{id:"number_of_ios",name:"number_of_ios",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_ios}),"Number of SPI Channels":e("input",{id:"number_of_spi_channels",name:"number_of_spi_channels",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_spi_channels}),"Number of UART Channels":e("input",{id:"number_of_uart_channels",name:"number_of_uart_channels",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.number_of_uart_channels}),Resistance:e("input",{id:"resistance",name:"resistance",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.resistance}),"Temperature Coefficient ":e("input",{id:"temperature_coefficient",name:"temperature_coefficient",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.temperature_coefficient}),Tolerance:e("input",{id:"tolerance",name:"tolerance",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.tolerance}),"Duplicated Status":e(y,{options:i,name:"duplicated_status",id:"duplicated_status",onChange:({value:a})=>{r("duplicated_status",a)},className:"flex-1",defaultValue:i.find(a=>a.value==n.duplicated_status)}),"Voltage Rating (DC)":e("input",{id:"voltage_rating_dc",name:"voltage_rating_dc",className:"form-input flex-1 ",onChange:a=>r(a.target.name,a.target.value),defaultValue:n.voltage_rating_dc})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:p})})})},W=()=>{const s=f();new S;const l=_(t=>t.productForm),n=(t,i)=>{s(d({[t]:i}))},r={Dimensions:{Length:e("input",{id:"length",name:"length",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.length}),Depth:e("input",{id:"depth",name:"depth",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.depth}),Thickness:e("input",{id:"thickness",name:"thickness",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.thickness})},"":{Width:e("input",{id:"width",name:"width",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.width}),Height:e("input",{id:"height",name:"height",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.height})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},$=()=>{var t,i,c,p;const s=f(),l=_(u=>u.productForm),n=(u,a)=>{s(d({[u]:a}))},r={Alternatives:{"Alternative MPN 1":e(x,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_1_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_1_id",loadOptions:w,onChange:({value:u})=>{n("alternative_mpn_1_id",u)},className:"flex-1",defaultValue:{value:l.alternative_mpn_1_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(t=l.alternative_mpn1)==null?void 0:t.product_name})})},l.alternative_mpn_1_id)}}),"Alternative MPN 2":e(x,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_2_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_2_id",loadOptions:w,onChange:({value:u})=>{n("alternative_mpn_2_id",u)},className:"flex-1",defaultValue:{value:l.alternative_mpn_2_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(i=l.alternative_mpn2)==null?void 0:i.product_name})})},l.alternative_mpn_2_id)}})},"":{"Alternative MPN 3":e(x,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_3_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_3_id",loadOptions:w,onChange:({value:u})=>{n("alternative_mpn_3_id",u)},className:"flex-1",defaultValue:{value:l.alternative_mpn_3_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(c=l.alternative_mpn3)==null?void 0:c.product_name})})},l.alternative_mpn_3_id)}}),"Alternative MPN 4":e(x,{defaultOptions:!0,isMulti:!1,id:"alternative_mpn_4_id",placeholder:"Type at least 2 characters to search...",name:"alternative_mpn_4_id",loadOptions:w,onChange:({value:u})=>{n("alternative_mpn_4_id",u)},className:"flex-1",defaultValue:{value:l.alternative_mpn_4_id,label:e("div",{className:"flex items-center",children:e("div",{children:e("div",{className:"text-sm font-bold",children:(p=l.alternative_mpn4)==null?void 0:p.product_name})})},l.alternative_mpn_4_id)}})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},Z=()=>{const s=f(),l=_(t=>t.productForm),n=(t,i)=>{s(d({[t]:i}))},r={"Export / Import Data":{"Tariff Code":e("input",{id:"tariff_code",name:"tariff_code",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.tariff_code})},"":{ECCN:e("input",{id:"eccn",name:"eccn",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.eccn})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},J=()=>{const s=f(),l=_(t=>t.productForm),n=(t,i)=>{s(d({[t]:i}))},r={"API Data":{"Octopart ID":e("input",{id:"octopart_id",name:"octopart_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.octopart_id}),"Octopart URL":e("input",{id:"octopart_url",name:"octopart_url",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.octopart_url}),updateByMouser:e("input",{id:"update_by_mouser",type:"checkbox",name:"update_by_mouser",className:"form-checkbox",onChange:t=>n(t.target.name,t.target.checked),defaultChecked:l.update_by_mouser}),ZohoBooksID:e("input",{id:"zoho_books_id",name:"zoho_books_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.zoho_books_id}),"OP Last Update":e(I,{name:"last_activity_date",options:{dateFormat:"Y-m-d ",defaultDate:l.last_activity_date?new Date(l.last_activity_date):null},defaultValue:l.last_activity_date,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>n("last_activity_date",i)}),"OP Failure Message":e("input",{id:"op_failure_message",name:"op_failure_message",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.op_failure_message}),"Octopart Images":e("textarea",{id:"octopart_images",rows:2,name:"octopart_images",className:"form-textarea flex-1",placeholder:"",defaultValue:l.octopart_images,onChange:t=>n(t.target.name,t.target.value)}),"Octopart Datasheets":e("textarea",{id:"octopart_datasheets",rows:2,name:"octopart_datasheets",className:"form-textarea flex-1",placeholder:"",defaultValue:l.octopart_datasheets,onChange:t=>n(t.target.name,t.target.value)}),"Octopart Compliance Documents":e("textarea",{id:"octopart_compliance_documents",rows:2,name:"octopart_compliance_documents",className:"form-textarea flex-1",placeholder:"",defaultValue:l.octopart_compliance_documents,onChange:t=>n(t.target.name,t.target.value)})},"":{"Mouser URL":e("input",{id:"mouser_url",name:"mouser_url",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.mouser_url}),"Mouser ID":e("input",{id:"mouser_id",name:"mouser_id",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.mouser_id}),"Mouser Category":e("input",{id:"mouser_category",name:"mouser_category",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.mouser_category}),"M Last Update":e(I,{name:"m_last_update",options:{dateFormat:"Y-m-d ",defaultDate:l.m_last_update?new Date(l.m_last_update):null},defaultValue:l.m_last_update,className:"form-input flex-1",placeholder:"YYYY-MM-DD",onChange:(t,i)=>n("m_last_update",i)}),"Product Margin":e("input",{id:"product_margin",name:"product_margin",className:"form-input flex-1 ",onChange:t=>n(t.target.name,t.target.value),defaultValue:l.product_margin})}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},K=()=>{const s=f(),l=_(t=>t.productForm),n=(t,i)=>{s(d({[t]:i}))},r={"Description Information":{Description:e("textarea",{id:"description",rows:2,name:"description",className:"form-textarea flex-1",placeholder:"",defaultValue:l.description,onChange:t=>n(t.target.name,t.target.value)}),"Octopart Short Description":e("textarea",{id:"octopart_short_description",rows:2,name:"octopart_short_description",className:"form-textarea flex-1",placeholder:"",defaultValue:l.octopart_short_description,onChange:t=>n(t.target.name,t.target.value)})},"":{}};return e(m,{children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:e(h,{fields:r})})})},X=()=>{const l=T().id;return g("div",{className:"mt-8 px-4",children:[e(B,{},"productInfo"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Y,{},"SupplyChain"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(H,{},"PhysicalProperties"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(G,{},"TechData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(W,{},"Dimensions"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Q,{},"StockInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e($,{},"Alternatives"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(Z,{},"ExportImportData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(J,{},"APIData"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(K,{},"DescriptionInformation"),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e(z,{modelId:l,modelName:"product"})]})},ce=()=>{const{hasPermission:s}=j(),l=_(a=>a.productForm),[n,r]=C.useState(!0),i=T().id,c=new S,p=f();C.useEffect(()=>{p(L("Product Edit"))}),C.useEffect(()=>{p(M())},[]);const u=async()=>{const a=await c.fetchSingleProduct(i);if(a.status!=200)return;const v=a.data.data.product;p(d(v))};return C.useEffect(()=>{u().then(()=>{r(!1)})},[i]),C.useEffect(()=>{p(d({api:"updateSingleProduct",redirectTo:"/product/edit/:id",action:"edit"}))},[]),n?e(O,{}):!s("update-product")||n?e(O,{}):g("div",{className:"px-4",children:[e(R,{formState:l,resetForm:M}),e("div",{className:"flex xl:flex-row flex-col gap-2.5",children:e("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:e(X,{})})})]})};export{ce as default};
