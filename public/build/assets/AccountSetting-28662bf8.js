import{u as c,r as a,s as n,j as r,b as e,L as o}from"./main-0c6ea3e6.js";const m=()=>{const i=c();a.useEffect(()=>{i(n("Account Setting"))});const[l,s]=a.useState("home"),t=d=>{s(d)};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(o,{to:"#",className:"text-primary hover:underline",children:"Users"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Account Settings"})})]}),r("div",{className:"pt-5",children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Settings"})}),e("div",{children:r("ul",{className:"sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto",children:[e("li",{className:"inline-block",children:r("button",{onClick:()=>t("home"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${l==="home"?"!border-primary text-primary":""}`,children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e("li",{className:"inline-block",children:r("button",{onClick:()=>t("payment-details"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${l==="payment-details"?"!border-primary text-primary":""}`,children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",children:[e("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 6V18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Payment Details"]})}),e("li",{className:"inline-block",children:r("button",{onClick:()=>t("preferences"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${l==="preferences"?"!border-primary text-primary":""}`,children:[r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Preferences"]})}),e("li",{className:"inline-block",children:r("button",{onClick:()=>t("danger-zone"),className:`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${l==="danger-zone"?"!border-primary text-primary":""}`,children:[r("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Danger Zone"]})})]})}),l==="home"?r("div",{children:[r("form",{className:"border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black",children:[e("h6",{className:"text-lg font-bold mb-5",children:"General Information"}),r("div",{className:"flex flex-col sm:flex-row",children:[e("div",{className:"ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5",children:e("img",{src:"/assets//images/profile-34.jpeg",alt:"img",className:"w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto"})}),r("div",{className:"flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5",children:[r("div",{children:[e("label",{htmlFor:"name",children:"Full Name"}),e("input",{id:"name",type:"text",placeholder:"Jimmy Turner",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"profession",children:"Profession"}),e("input",{id:"profession",type:"text",placeholder:"Web Developer",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"country",children:"Country"}),r("select",{defaultValue:"United States",id:"country",className:"form-select text-white-dark",children:[e("option",{value:"All Countries",children:"All Countries"}),e("option",{value:"United States",children:"United States"}),e("option",{value:"India",children:"India"}),e("option",{value:"Japan",children:"Japan"}),e("option",{value:"China",children:"China"}),e("option",{value:"Brazil",children:"Brazil"}),e("option",{value:"Norway",children:"Norway"}),e("option",{value:"Canada",children:"Canada"})]})]}),r("div",{children:[e("label",{htmlFor:"address",children:"Address"}),e("input",{id:"address",type:"text",placeholder:"New York",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"location",children:"Location"}),e("input",{id:"location",type:"text",placeholder:"Location",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"phone",children:"Phone"}),e("input",{id:"phone",type:"text",placeholder:"+1 (530) 555-12121",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"email",children:"Email"}),e("input",{id:"email",type:"email",placeholder:"Jimmy@gmail.com",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"web",children:"Website"}),e("input",{id:"web",type:"text",placeholder:"Enter URL",className:"form-input"})]}),e("div",{children:r("label",{className:"inline-flex cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark relative checked:bg-none",children:"Make this my default address"})]})}),e("div",{className:"sm:col-span-2 mt-3",children:e("button",{type:"button",className:"btn btn-primary",children:"Save"})})]})]})]}),r("form",{className:"border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 bg-white dark:bg-black",children:[e("h6",{className:"text-lg font-bold mb-5",children:"Social"}),r("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2",children:r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:[e("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),e("rect",{x:"2",y:"9",width:"4",height:"12"}),e("circle",{cx:"4",cy:"4",r:"2"})]})}),e("input",{type:"text",placeholder:"jimmy_turner",className:"form-input"})]}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:e("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}),e("input",{type:"text",placeholder:"jimmy_turner",className:"form-input"})]}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:e("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),e("input",{type:"text",placeholder:"jimmy_turner",className:"form-input"})]}),r("div",{className:"flex",children:[e("div",{className:"bg-[#eee] flex justify-center items-center rounded px-3 font-semibold dark:bg-[#1b2e4b] ltr:mr-2 rtl:ml-2",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"w-5 h-5",children:e("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})}),e("input",{type:"text",placeholder:"jimmy_turner",className:"form-input"})]})]})]})]}):"",l==="payment-details"?r("div",{children:[r("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5",children:[r("div",{className:"panel",children:[r("div",{className:"mb-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Billing Address"}),r("p",{children:["Changes to your ",e("span",{className:"text-primary",children:"Billing"})," information will take effect starting with scheduled payment and will be refelected on your next invoice."]})]}),r("div",{className:"mb-5",children:[e("div",{className:"border-b border-[#ebedf2] dark:border-[#1b2e4b]",children:r("div",{className:"flex items-start justify-between py-3",children:[r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["Address #1",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"2249 Caynor Circle, New Brunswick, New Jersey"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})}),e("div",{className:"border-b border-[#ebedf2] dark:border-[#1b2e4b]",children:r("div",{className:"flex items-start justify-between py-3",children:[r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["Address #2",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"4262 Leverton Cove Road, Springfield, Massachusetts"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})}),e("div",{children:r("div",{className:"flex items-start justify-between py-3",children:[r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["Address #3",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"2692 Berkshire Circle, Knoxville, Tennessee"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})})]}),e("button",{className:"btn btn-primary",children:"Add Address"})]}),r("div",{className:"panel",children:[r("div",{className:"mb-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Payment History"}),r("p",{children:["Changes to your ",e("span",{className:"text-primary",children:"Payment Method"})," information will take effect starting with scheduled payment and will be refelected on your next invoice."]})]}),r("div",{className:"mb-5",children:[e("div",{className:"border-b border-[#ebedf2] dark:border-[#1b2e4b]",children:r("div",{className:"flex items-start justify-between py-3",children:[e("div",{className:"flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/card-americanexpress.svg",alt:"img"})}),r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["Mastercard",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"XXXX XXXX XXXX 9704"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})}),e("div",{className:"border-b border-[#ebedf2] dark:border-[#1b2e4b]",children:r("div",{className:"flex items-start justify-between py-3",children:[e("div",{className:"flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/card-mastercard.svg",alt:"img"})}),r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["American Express",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"XXXX XXXX XXXX 310"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})}),e("div",{children:r("div",{className:"flex items-start justify-between py-3",children:[e("div",{className:"flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/card-visa.svg",alt:"img"})}),r("h6",{className:"text-[#515365] font-bold dark:text-white-dark text-[15px]",children:["Visa",e("span",{className:"block text-white-dark dark:text-white-light font-normal text-xs mt-1",children:"XXXX XXXX XXXX 5264"})]}),e("div",{className:"flex items-start justify-between ltr:ml-auto rtl:mr-auto",children:e("button",{className:"btn btn-dark",children:"Edit"})})]})})]}),e("button",{className:"btn btn-primary",children:"Add Payment Method"})]})]}),r("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5",children:[r("div",{className:"panel",children:[r("div",{className:"mb-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Add Billing Address"}),r("p",{children:["Changes your New ",e("span",{className:"text-primary",children:"Billing"})," Information."]})]}),e("div",{className:"mb-5",children:r("form",{children:[r("div",{className:"mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"billingName",children:"Name"}),e("input",{id:"billingName",type:"text",placeholder:"Enter Name",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"billingEmail",children:"Email"}),e("input",{id:"billingEmail",type:"email",placeholder:"Enter Email",className:"form-input"})]})]}),r("div",{className:"mb-5",children:[e("label",{htmlFor:"billingAddress",children:"Address"}),e("input",{id:"billingAddress",type:"text",placeholder:"Enter Address",className:"form-input"})]}),r("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5",children:[r("div",{className:"md:col-span-2",children:[e("label",{htmlFor:"billingCity",children:"City"}),e("input",{id:"billingCity",type:"text",placeholder:"Enter City",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"billingState",children:"State"}),r("select",{id:"billingState",className:"form-select text-white-dark",children:[e("option",{children:"Choose..."}),e("option",{children:"..."})]})]}),r("div",{children:[e("label",{htmlFor:"billingZip",children:"Zip"}),e("input",{id:"billingZip",type:"text",placeholder:"Enter Zip",className:"form-input"})]})]}),e("button",{type:"button",className:"btn btn-primary",children:"Add"})]})})]}),r("div",{className:"panel",children:[r("div",{className:"mb-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Add Payment Method"}),r("p",{children:["Changes your New ",e("span",{className:"text-primary",children:"Payment Method "}),"Information."]})]}),e("div",{className:"mb-5",children:r("form",{children:[r("div",{className:"mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"payBrand",children:"Card Brand"}),r("select",{id:"payBrand",className:"form-select text-white-dark",children:[e("option",{value:"Mastercard",children:"Mastercard"}),e("option",{value:"American Express",children:"American Express"}),e("option",{value:"Visa",children:"Visa"}),e("option",{value:"Discover",children:"Discover"})]})]}),r("div",{children:[e("label",{htmlFor:"payNumber",children:"Card Number"}),e("input",{id:"payNumber",type:"text",placeholder:"Card Number",className:"form-input"})]})]}),r("div",{className:"mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:[r("div",{children:[e("label",{htmlFor:"payHolder",children:"Holder Name"}),e("input",{id:"payHolder",type:"text",placeholder:"Holder Name",className:"form-input"})]}),r("div",{children:[e("label",{htmlFor:"payCvv",children:"CVV/CVV2"}),e("input",{id:"payCvv",type:"text",placeholder:"CVV",className:"form-input"})]})]}),e("div",{className:"mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4",children:r("div",{children:[e("label",{htmlFor:"payExp",children:"Card Expiry"}),e("input",{id:"payExp",type:"text",placeholder:"Card Expiry",className:"form-input"})]})}),e("button",{type:"button",className:"btn btn-primary",children:"Add"})]})})]})]})]}):"",l==="preferences"?r("div",{className:"switch",children:[r("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5",children:[r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Choose Theme"}),r("div",{className:"flex justify-around",children:[e("div",{className:"flex",children:r("label",{className:"inline-flex cursor-pointer",children:[e("input",{className:"form-radio ltr:mr-4 rtl:ml-4 cursor-pointer",type:"radio",name:"flexRadioDefault",defaultChecked:!0}),e("span",{children:e("img",{className:"ms-3",width:"100",height:"68",alt:"settings-dark",src:"/assets/images/settings-light.svg"})})]})}),r("label",{className:"inline-flex cursor-pointer",children:[e("input",{className:"form-radio ltr:mr-4 rtl:ml-4 cursor-pointer",type:"radio",name:"flexRadioDefault"}),e("span",{children:e("img",{className:"ms-3",width:"100",height:"68",alt:"settings-light",src:"/assets/images/settings-dark.svg"})})]})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Activity data"}),e("p",{children:"Download your Summary, Task and Payment History Data"}),e("button",{type:"button",className:"btn btn-primary",children:"Download Data"})]})]}),r("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Public Profile"}),r("p",{children:["Your ",e("span",{className:"text-primary",children:"Profile"})," will be visible to anyone on the network."]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox1"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Show my email"}),r("p",{children:["Your ",e("span",{className:"text-primary",children:"Email"})," will be visible to anyone on the network."]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox2"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Enable keyboard shortcuts"}),r("p",{children:["When enabled, press ",e("span",{className:"text-primary",children:"ctrl"})," for help"]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox3"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Hide left navigation"}),r("p",{children:["Sidebar will be ",e("span",{className:"text-primary",children:"hidden"})," by default"]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox4"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Advertisements"}),r("p",{children:["Display ",e("span",{className:"text-primary",children:"Ads"})," on your dashboard"]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox5"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Social Profile"}),r("p",{children:["Enable your ",e("span",{className:"text-primary",children:"social"})," profiles on this network"]}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox6"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]})]})]}):"",l==="danger-zone"?e("div",{className:"switch",children:r("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Purge Cache"}),e("p",{children:"Remove the active resource from the cache without waiting for the predetermined cache expiry time."}),e("button",{className:"btn btn-secondary",children:"Clear"})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Deactivate Account"}),e("p",{children:"You will not be able to receive messages, notifications for up to 24 hours."}),r("label",{className:"w-12 h-6 relative",children:[e("input",{type:"checkbox",className:"custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer",id:"custom_switch_checkbox7"}),e("span",{className:"bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"})]})]}),r("div",{className:"panel space-y-5",children:[e("h5",{className:"font-semibold text-lg mb-4",children:"Delete Account"}),e("p",{children:"Once you delete the account, there is no going back. Please be certain."}),e("button",{className:"btn btn-danger btn-delete-account",children:"Delete my account"})]})]})}):""]})]})};export{m as default};
