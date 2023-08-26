import{u as M,r,s as I,j as a,b as e,L}from"./main-b604cebc.js";const T=()=>{const s=M();r.useEffect(()=>{s(I("Invoice Edit"))});const h=["USD - US Dollar","GBP - British Pound","IDR - Indonesian Rupiah","INR - Indian Rupee","BRL - Brazilian Real","EUR - Germany (Euro)","TRY - Turkish Lira"],[m,p]=r.useState(0),[v,b]=r.useState(0),[g,f]=r.useState(0),[N,y]=r.useState("bank"),[t,d]=r.useState([{id:1,title:"Calendar App Customization",description:"Make Calendar App Dynamic",quantity:2,amount:120,isTax:!1},{id:2,title:"Chat App Customization",description:"Customized Chat Application to resolve some Bug Fixes",quantity:1,amount:25,isTax:!1}]),[C,w]=r.useState("USD - US Dollar"),[n,x]=r.useState({title:"Tailwind",invoiceNo:"#0001",to:{name:"Jesse Cory",email:"redq@company.com",address:"405 Mulberry Rd. Mc Grady, NC, 28649",phone:"(128) 666 070"},invoiceDate:"",dueDate:"",bankInfo:{no:"1234567890",name:"Bank of America",swiftCode:"VS70134",country:"United States",ibanNo:"K456G"},notes:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"});r.useEffect(()=>{let i=new Date;const l=i.getMonth()+1<10?"0"+(i.getMonth()+1):i.getMonth()+1;let o=i.getDate()<10?"0"+i.getDate():i.getDate();x({...n,invoiceDate:i.getFullYear()+"-"+l+"-"+o,dueDate:i.getFullYear()+"-"+l+"-"+o})},[]);const k=()=>{let i=0;i=t!=null&&t.length?t.reduce((l,o)=>o.id>l?o.id:l,t[0].id):0,d([...t,{id:i+1,title:"",description:"",rate:0,quantity:0,amount:0}])},S=(i=null)=>{d(t.filter(l=>l.id!==i.id))},c=(i,l,o)=>{const u=t.find(B=>B.id===o);i==="quantity"&&(u.quantity=Number(l)),i==="price"&&(u.amount=Number(l)),d([...t])};return a("div",{className:"flex xl:flex-row flex-col gap-2.5",children:[a("div",{className:"panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden",children:[a("div",{className:"flex justify-between flex-wrap px-4",children:[a("div",{className:"mb-6 lg:w-1/2 w-full",children:[e("div",{className:"flex items-center text-black dark:text-white shrink-0",children:e("img",{src:"/assets/images/logo.svg",alt:"img",className:"w-14"})}),a("div",{className:"space-y-1 mt-6 text-gray-500 dark:text-gray-400",children:[e("div",{children:"13 Tetrick Road, Cypress Gardens, Florida, 33884, US"}),e("div",{children:"vristo@gmail.com"}),e("div",{children:"+1 (070) 123-4567"})]})]}),a("div",{className:"lg:w-1/2 w-full lg:max-w-fit",children:[a("div",{className:"flex items-center",children:[e("label",{htmlFor:"number",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Number"}),e("input",{id:"number",type:"text",name:"inv-num",className:"form-input lg:w-[250px] w-2/3",placeholder:"#8801",defaultValue:n.invoiceNo})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"invoiceLabel",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Label"}),e("input",{id:"invoiceLabel",type:"text",name:"inv-label",className:"form-input lg:w-[250px] w-2/3",placeholder:"Enter Invoice Label",defaultValue:n.title})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"startDate",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Invoice Date"}),e("input",{id:"startDate",type:"date",name:"inv-date",className:"form-input lg:w-[250px] w-2/3",defaultValue:n.invoiceDate})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"dueDate",className:"flex-1 ltr:mr-2 rtl:ml-2 mb-0",children:"Due Date"}),e("input",{id:"dueDate",type:"date",name:"due-date",className:"form-input lg:w-[250px] w-2/3",defaultValue:n.dueDate})]})]})]}),e("hr",{className:"border-white-light dark:border-[#1b2e4b] my-6"}),e("div",{className:"mt-8 px-4",children:a("div",{className:"flex justify-between lg:flex-row flex-col",children:[a("div",{className:"lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6",children:[e("div",{className:"text-lg",children:"Bill To :-"}),a("div",{className:"mt-4 flex items-center",children:[e("label",{htmlFor:"reciever-name",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Name"}),e("input",{id:"reciever-name",type:"text",name:"reciever-name",className:"form-input flex-1",defaultValue:n.to.name,placeholder:"Enter Name"})]}),a("div",{className:"mt-4 flex items-center",children:[e("label",{htmlFor:"reciever-email",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Email"}),e("input",{id:"reciever-email",type:"email",name:"reciever-email",className:"form-input flex-1",defaultValue:n.to.email,placeholder:"Enter Email"})]}),a("div",{className:"mt-4 flex items-center",children:[e("label",{htmlFor:"reciever-address",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Address"}),e("input",{id:"reciever-address",type:"text",name:"reciever-address",className:"form-input flex-1",defaultValue:n.to.address,placeholder:"Enter Address"})]}),a("div",{className:"mt-4 flex items-center",children:[e("label",{htmlFor:"reciever-number",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Phone Number"}),e("input",{id:"reciever-number",type:"text",name:"reciever-number",className:"form-input flex-1",defaultValue:n.to.phone,placeholder:"Enter Phone number"})]})]}),a("div",{className:"lg:w-1/2 w-full",children:[e("div",{className:"text-lg",children:"Payment Details:"}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"acno",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Account Number"}),e("input",{id:"acno",type:"text",name:"acno",className:"form-input flex-1",defaultValue:n.bankInfo.no,placeholder:"Enter Account Number"})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"bank-name",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Bank Name"}),e("input",{id:"bank-name",type:"text",name:"bank-name",className:"form-input flex-1",defaultValue:n.bankInfo.name,placeholder:"Enter Bank Name"})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"swift-code",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"SWIFT Number"}),e("input",{id:"swift-code",type:"text",name:"swift-code",className:"form-input flex-1",defaultValue:n.bankInfo.swiftCode,placeholder:"Enter SWIFT Number"})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"iban-code",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"IBAN Number"}),e("input",{id:"iban-code",type:"text",name:"iban-code",className:"form-input flex-1",defaultValue:n.bankInfo.ibanNo,placeholder:"Enter IBAN Number"})]}),a("div",{className:"flex items-center mt-4",children:[e("label",{htmlFor:"country",className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0",children:"Country"}),a("select",{id:"country",name:"country",className:"form-select flex-1",defaultValue:n.bankInfo.country,children:[e("option",{value:"",children:"Choose Country"}),e("option",{value:"United States",children:"United States"}),e("option",{value:"United Kingdom",children:"United Kingdom"}),e("option",{value:"Canada",children:"Canada"}),e("option",{value:"Australia",children:"Australia"}),e("option",{value:"Germany",children:"Germany"}),e("option",{value:"Sweden",children:"Sweden"}),e("option",{value:"Denmark",children:"Denmark"}),e("option",{value:"Norway",children:"Norway"}),e("option",{value:"New-Zealand",children:"New Zealand"}),e("option",{value:"Afghanistan",children:"Afghanistan"}),e("option",{value:"Albania",children:"Albania"}),e("option",{value:"Algeria",children:"Algeria"}),e("option",{value:"American-Samoa",children:"Andorra"}),e("option",{value:"Angola",children:"Angola"}),e("option",{value:"Antigua Barbuda",children:"Antigua & Barbuda"}),e("option",{value:"Argentina",children:"Argentina"}),e("option",{value:"Armenia",children:"Armenia"}),e("option",{value:"Aruba",children:"Aruba"}),e("option",{value:"Austria",children:"Austria"}),e("option",{value:"Azerbaijan",children:"Azerbaijan"}),e("option",{value:"Bahamas",children:"Bahamas"}),e("option",{value:"Bahrain",children:"Bahrain"}),e("option",{value:"Bangladesh",children:"Bangladesh"}),e("option",{value:"Barbados",children:"Barbados"}),e("option",{value:"Belarus",children:"Belarus"}),e("option",{value:"Belgium",children:"Belgium"}),e("option",{value:"Belize",children:"Belize"}),e("option",{value:"Benin",children:"Benin"}),e("option",{value:"Bermuda",children:"Bermuda"}),e("option",{value:"Bhutan",children:"Bhutan"}),e("option",{value:"Bolivia",children:"Bolivia"}),e("option",{value:"Bosnia",children:"Bosnia & Herzegovina"}),e("option",{value:"Botswana",children:"Botswana"}),e("option",{value:"Brazil",children:"Brazil"}),e("option",{value:"British",children:"British Virgin Islands"}),e("option",{value:"Brunei",children:"Brunei"}),e("option",{value:"Bulgaria",children:"Bulgaria"}),e("option",{value:"Burkina",children:"Burkina Faso"}),e("option",{value:"Burundi",children:"Burundi"}),e("option",{value:"Cambodia",children:"Cambodia"}),e("option",{value:"Cameroon",children:"Cameroon"}),e("option",{value:"Cape",children:"Cape Verde"}),e("option",{value:"Cayman",children:"Cayman Islands"}),e("option",{value:"Central-African",children:"Central African Republic"}),e("option",{value:"Chad",children:"Chad"}),e("option",{value:"Chile",children:"Chile"}),e("option",{value:"China",children:"China"}),e("option",{value:"Colombia",children:"Colombia"}),e("option",{value:"Comoros",children:"Comoros"}),e("option",{value:"Costa-Rica",children:"Costa Rica"}),e("option",{value:"Croatia",children:"Croatia"}),e("option",{value:"Cuba",children:"Cuba"}),e("option",{value:"Cyprus",children:"Cyprus"}),e("option",{value:"Czechia",children:"Czechia"}),e("option",{value:"Côte",children:"Côte d'Ivoire"}),e("option",{value:"Djibouti",children:"Djibouti"}),e("option",{value:"Dominica",children:"Dominica"}),e("option",{value:"Dominican",children:"Dominican Republic"}),e("option",{value:"Ecuador",children:"Ecuador"}),e("option",{value:"Egypt",children:"Egypt"}),e("option",{value:"El-Salvador",children:"El Salvador"}),e("option",{value:"Equatorial-Guinea",children:"Equatorial Guinea"}),e("option",{value:"Eritrea",children:"Eritrea"}),e("option",{value:"Estonia",children:"Estonia"}),e("option",{value:"Ethiopia",children:"Ethiopia"}),e("option",{value:"Fiji",children:"Fiji"}),e("option",{value:"Finland",children:"Finland"}),e("option",{value:"France",children:"France"}),e("option",{value:"Gabon",children:"Gabon"}),e("option",{value:"Georgia",children:"Georgia"}),e("option",{value:"Ghana",children:"Ghana"}),e("option",{value:"Greece",children:"Greece"}),e("option",{value:"Grenada",children:"Grenada"}),e("option",{value:"Guatemala",children:"Guatemala"}),e("option",{value:"Guernsey",children:"Guernsey"}),e("option",{value:"Guinea",children:"Guinea"}),e("option",{value:"Guinea-Bissau",children:"Guinea-Bissau"}),e("option",{value:"Guyana",children:"Guyana"}),e("option",{value:"Haiti",children:"Haiti"}),e("option",{value:"Honduras",children:"Honduras"}),e("option",{value:"Hong-Kong",children:"Hong Kong SAR China"}),e("option",{value:"Hungary",children:"Hungary"}),e("option",{value:"Iceland",children:"Iceland"}),e("option",{value:"India",children:"India"}),e("option",{value:"Indonesia",children:"Indonesia"}),e("option",{value:"Iran",children:"Iran"}),e("option",{value:"Iraq",children:"Iraq"}),e("option",{value:"Ireland",children:"Ireland"}),e("option",{value:"Israel",children:"Israel"}),e("option",{value:"Italy",children:"Italy"}),e("option",{value:"Jamaica",children:"Jamaica"}),e("option",{value:"Japan",children:"Japan"}),e("option",{value:"Jordan",children:"Jordan"}),e("option",{value:"Kazakhstan",children:"Kazakhstan"}),e("option",{value:"Kenya",children:"Kenya"}),e("option",{value:"Kuwait",children:"Kuwait"}),e("option",{value:"Kyrgyzstan",children:"Kyrgyzstan"}),e("option",{value:"Laos",children:"Laos"}),e("option",{value:"Latvia",children:"Latvia"}),e("option",{value:"Lebanon",children:"Lebanon"}),e("option",{value:"Lesotho",children:"Lesotho"}),e("option",{value:"Liberia",children:"Liberia"}),e("option",{value:"Libya",children:"Libya"}),e("option",{value:"Liechtenstein",children:"Liechtenstein"}),e("option",{value:"Lithuania",children:"Lithuania"}),e("option",{value:"Luxembourg",children:"Luxembourg"}),e("option",{value:"Macedonia",children:"Macedonia"}),e("option",{value:"Madagascar",children:"Madagascar"}),e("option",{value:"Malawi",children:"Malawi"}),e("option",{value:"Malaysia",children:"Malaysia"}),e("option",{value:"Maldives",children:"Maldives"}),e("option",{value:"Mali",children:"Mali"}),e("option",{value:"Malta",children:"Malta"}),e("option",{value:"Mauritania",children:"Mauritania"}),e("option",{value:"Mauritius",children:"Mauritius"}),e("option",{value:"Mexico",children:"Mexico"}),e("option",{value:"Moldova",children:"Moldova"}),e("option",{value:"Monaco",children:"Monaco"}),e("option",{value:"Mongolia",children:"Mongolia"}),e("option",{value:"Montenegro",children:"Montenegro"}),e("option",{value:"Morocco",children:"Morocco"}),e("option",{value:"Mozambique",children:"Mozambique"}),e("option",{value:"Myanmar",children:"Myanmar (Burma)"}),e("option",{value:"Namibia",children:"Namibia"}),e("option",{value:"Nepal",children:"Nepal"}),e("option",{value:"Netherlands",children:"Netherlands"}),e("option",{value:"Nicaragua",children:"Nicaragua"}),e("option",{value:"Niger",children:"Niger"}),e("option",{value:"Nigeria",children:"Nigeria"}),e("option",{value:"North-Korea",children:"North Korea"}),e("option",{value:"Oman",children:"Oman"}),e("option",{value:"Pakistan",children:"Pakistan"}),e("option",{value:"Palau",children:"Palau"}),e("option",{value:"Palestinian",children:"Palestinian Territories"}),e("option",{value:"Panama",children:"Panama"}),e("option",{value:"Papua",children:"Papua New Guinea"}),e("option",{value:"Paraguay",children:"Paraguay"}),e("option",{value:"Peru",children:"Peru"}),e("option",{value:"Philippines",children:"Philippines"}),e("option",{value:"Poland",children:"Poland"}),e("option",{value:"Portugal",children:"Portugal"}),e("option",{value:"Puerto",children:"Puerto Rico"}),e("option",{value:"Qatar",children:"Qatar"}),e("option",{value:"Romania",children:"Romania"}),e("option",{value:"Russia",children:"Russia"}),e("option",{value:"Rwanda",children:"Rwanda"}),e("option",{value:"Réunion",children:"Réunion"}),e("option",{value:"Samoa",children:"Samoa"}),e("option",{value:"San-Marino",children:"San Marino"}),e("option",{value:"Saudi-Arabia",children:"Saudi Arabia"}),e("option",{value:"Senegal",children:"Senegal"}),e("option",{value:"Serbia",children:"Serbia"}),e("option",{value:"Seychelles",children:"Seychelles"}),e("option",{value:"Sierra-Leone",children:"Sierra Leone"}),e("option",{value:"Singapore",children:"Singapore"}),e("option",{value:"Slovakia",children:"Slovakia"}),e("option",{value:"Slovenia",children:"Slovenia"}),e("option",{value:"Solomon-Islands",children:"Solomon Islands"}),e("option",{value:"Somalia",children:"Somalia"}),e("option",{value:"South-Africa",children:"South Africa"}),e("option",{value:"South-Korea",children:"South Korea"}),e("option",{value:"Spain",children:"Spain"}),e("option",{value:"Sri-Lanka",children:"Sri Lanka"}),e("option",{value:"Sudan",children:"Sudan"}),e("option",{value:"Suriname",children:"Suriname"}),e("option",{value:"Swaziland",children:"Swaziland"}),e("option",{value:"Switzerland",children:"Switzerland"}),e("option",{value:"Syria",children:"Syria"}),e("option",{value:"Sao-Tome-and-Principe",children:"São Tomé & Príncipe"}),e("option",{value:"Tajikistan",children:"Tajikistan"}),e("option",{value:"Tanzania",children:"Tanzania"}),e("option",{value:"Thailand",children:"Thailand"}),e("option",{value:"Timor-Leste",children:"Timor-Leste"}),e("option",{value:"Togo",children:"Togo"}),e("option",{value:"Tonga",children:"Tonga"}),e("option",{value:"Trinidad-and-Tobago",children:"Trinidad & Tobago"}),e("option",{value:"Tunisia",children:"Tunisia"}),e("option",{value:"Turkey",children:"Turkey"}),e("option",{value:"Turkmenistan",children:"Turkmenistan"}),e("option",{value:"Uganda",children:"Uganda"}),e("option",{value:"Ukraine",children:"Ukraine"}),e("option",{value:"UAE",children:"United Arab Emirates"}),e("option",{value:"Uruguay",children:"Uruguay"}),e("option",{value:"Uzbekistan",children:"Uzbekistan"}),e("option",{value:"Vanuatu",children:"Vanuatu"}),e("option",{value:"Venezuela",children:"Venezuela"}),e("option",{value:"Vietnam",children:"Vietnam"}),e("option",{value:"Yemen",children:"Yemen"}),e("option",{value:"Zambia",children:"Zambia"}),e("option",{value:"Zimbabwe",children:"Zimbabwe"})]})]})]})]})}),a("div",{className:"mt-8",children:[e("div",{className:"table-responsive",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Item"}),e("th",{className:"w-1",children:"Quantity"}),e("th",{className:"w-1",children:"Price"}),e("th",{children:"Total"}),e("th",{className:"w-1"})]})}),a("tbody",{children:[t.length<=0&&e("tr",{children:e("td",{colSpan:5,className:"!text-center font-semibold",children:"No Item Available"})}),t.map((i,l)=>a("tr",{className:"align-top",children:[a("td",{children:[e("input",{type:"text",className:"form-input min-w-[200px]",placeholder:"Enter Item Name",defaultValue:i.title}),e("textarea",{className:"form-textarea mt-4",placeholder:"Enter Description",defaultValue:i.description})]}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Quantity",min:0,defaultValue:i.quantity,onChange:o=>c("quantity",o.target.value,i.id)})}),e("td",{children:e("input",{type:"number",className:"form-input w-32",placeholder:"Price",min:0,defaultValue:i.amount,onChange:o=>c("price",o.target.value,i.id)})}),a("td",{children:["$",i.quantity*i.amount]}),e("td",{children:e("button",{type:"button",onClick:()=>S(i),children:a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})})]},i.id))]})]})}),a("div",{className:"flex justify-between sm:flex-row flex-col mt-6 px-4",children:[e("div",{className:"sm:mb-0 mb-6",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>k(),children:"Add Item"})}),a("div",{className:"sm:w-2/5",children:[a("div",{className:"flex items-center justify-between",children:[e("div",{children:"Subtotal"}),e("div",{children:"$265.00"})]}),a("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Tax(%)"}),e("div",{children:"0%"})]}),a("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Shipping Rate($)"}),e("div",{children:"$0.00"})]}),a("div",{className:"flex items-center justify-between mt-4",children:[e("div",{children:"Discount(%)"}),e("div",{children:"0%"})]}),a("div",{className:"flex items-center justify-between mt-4 font-semibold",children:[e("div",{children:"Total"}),e("div",{children:"$265.00"})]})]})]})]}),a("div",{className:"mt-8 px-4",children:[e("label",{htmlFor:"notes",children:"Notes"}),e("textarea",{id:"notes",name:"notes",className:"form-textarea min-h-[130px]",placeholder:"Notes....",defaultValue:n.notes})]})]}),a("div",{className:"xl:w-96 w-full xl:mt-0 mt-6",children:[a("div",{className:"panel mb-5",children:[e("label",{htmlFor:"currency",children:"Currency"}),e("select",{id:"currency",name:"currency",className:"form-select",value:C,onChange:i=>w(i.target.value),children:h.map((i,l)=>e("option",{value:i,children:i},l))}),e("div",{className:"mt-4",children:a("div",{className:"grid sm:grid-cols-2 grid-cols-1 gap-4",children:[a("div",{children:[e("label",{htmlFor:"tax",children:"Tax(%) "}),e("input",{id:"tax",type:"number",name:"tax",className:"form-input",placeholder:"Tax",value:m,onChange:i=>p(i.target.value)})]}),a("div",{children:[e("label",{htmlFor:"discount",children:"Discount(%) "}),e("input",{id:"discount",type:"number",name:"discount",className:"form-input",placeholder:"Discount",value:v,onChange:i=>b(i.target.value)})]})]})}),a("div",{className:"mt-4",children:[e("label",{htmlFor:"shipping-charge",children:"Shipping Charge($) "}),e("input",{id:"shipping-charge",type:"number",name:"shipping-charge",className:"form-input",placeholder:"Shipping Charge",value:g,onChange:i=>f(i.target.value)})]}),a("div",{className:"mt-4",children:[e("label",{htmlFor:"payment-method",children:"Accept Payment Via"}),a("select",{id:"payment-method",name:"payment-method",className:"form-select",defaultValue:N,onChange:i=>y(i.target.value),children:[e("option",{value:" ",children:"Select Payment"}),e("option",{value:"bank",children:"Bank Account"}),e("option",{value:"paypal",children:"Paypal"}),e("option",{value:"upi",children:"UPI Transfer"})]})]})]}),e("div",{className:"panel",children:a("div",{className:"grid xl:grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4",children:[a("button",{type:"button",className:"btn btn-success w-full gap-2",children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.6585 22 11.4878 21.9848 11.3142C21.9142 10.5049 21.586 9.71257 21.0637 9.09034C20.9516 8.95687 20.828 8.83317 20.5806 8.58578L15.4142 3.41944C15.1668 3.17206 15.0431 3.04835 14.9097 2.93631C14.2874 2.414 13.4951 2.08581 12.6858 2.01515C12.5122 2 12.3415 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M17 22V21C17 19.1144 17 18.1716 16.4142 17.5858C15.8284 17 14.8856 17 13 17H11C9.11438 17 8.17157 17 7.58579 17.5858C7 18.1716 7 19.1144 7 21V22",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7 8H13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Save"]}),a("button",{type:"button",className:"btn btn-info w-full gap-2",children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17.4975 18.4851L20.6281 9.09373C21.8764 5.34874 22.5006 3.47624 21.5122 2.48782C20.5237 1.49939 18.6511 2.12356 14.906 3.37189L5.57477 6.48218C3.49295 7.1761 2.45203 7.52305 2.13608 8.28637C2.06182 8.46577 2.01692 8.65596 2.00311 8.84963C1.94433 9.67365 2.72018 10.4495 4.27188 12.0011L4.55451 12.2837C4.80921 12.5384 4.93655 12.6658 5.03282 12.8075C5.22269 13.0871 5.33046 13.4143 5.34393 13.7519C5.35076 13.9232 5.32403 14.1013 5.27057 14.4574C5.07488 15.7612 4.97703 16.4131 5.0923 16.9147C5.32205 17.9146 6.09599 18.6995 7.09257 18.9433C7.59255 19.0656 8.24576 18.977 9.5522 18.7997L9.62363 18.79C9.99191 18.74 10.1761 18.715 10.3529 18.7257C10.6738 18.745 10.9838 18.8496 11.251 19.0285C11.3981 19.1271 11.5295 19.2585 11.7923 19.5213L12.0436 19.7725C13.5539 21.2828 14.309 22.0379 15.1101 21.9985C15.3309 21.9877 15.5479 21.9365 15.7503 21.8474C16.4844 21.5244 16.8221 20.5113 17.4975 18.4851Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M6 18L21 3",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Send Invoice"]}),a(L,{to:"/apps/invoice/preview",className:"btn btn-primary w-full gap-2",children:[a("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z",stroke:"currentColor",strokeWidth:"1.5"})]}),"Preview"]}),a("button",{type:"button",className:"btn btn-secondary w-full gap-2",children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M12 2L12 15M12 15L9 11.5M12 15L15 11.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Download"]})]})})]})]})};export{T as default};
