import{u as p,h as u,r as s,s as k,a as n,j as t,b as e,L as o}from"./main-c04bb166.js";const b=()=>{const c=p(),l=u().module,[a,d]=s.useState(""),[h,i]=s.useState("create");s.useEffect(()=>{d(l.charAt(0).toUpperCase()+l.slice(1)),c(k("Import "+a))},[]),n(r=>r.themeConfig.theme),n(r=>r.themeConfig.rtlClass),s.useState(!1);const m=()=>{switch(h){case"create":return e("div",{className:"bg-primary-light dark:bg-primary-dark-light p-5 rounded-md my-4",children:t("div",{className:"flex items-center justify-between space-x-4",children:[e("label",{htmlFor:"ctnSelect1",className:"dark:text-dark-light w-full whitespace-nowrap",children:"Skip existing contacts based on"}),t("select",{id:"ctnSelect1",className:"form-select text-white-dark dark:text-white-light",required:!0,children:[e("option",{children:"--None--"}),t("option",{children:[a," Id"]})]})]})});case"update":case"create_update":return t("div",{className:"bg-primary-light dark:bg-primary-dark-light p-5 rounded-md my-4 space-y-4",children:[t("div",{className:"flex items-center justify-between space-x-4",children:[e("label",{htmlFor:"ctnSelect1",className:"dark:text-dark-light w-full whitespace-nowrap",children:"Find existing contacts based on"}),t("select",{id:"ctnSelect1",className:"form-select text-white-dark dark:text-white-light",required:!0,children:[e("option",{children:"--None--"}),t("option",{children:[a," Id"]})]})]}),e("div",{children:t("label",{className:"inline-flex cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox bg-white dark:bg-dark-dark-light"}),e("span",{className:"dark:text-dark-light",children:"Don't update empty values for existing contacts "})]})})]})}};return t("div",{children:[e("section",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-400/20 pb-4",children:t("h3",{className:"text-xl font-bold dark:text-white-dark",children:["Import "+a," - Operation"]})}),e("section",{className:"mt-6",children:e("div",{className:" mb-5 space-y-6",children:t("div",{className:"border border-gray-500/20 dark:border-gray-400/20 rounded-md shadow-sm dark:shadow-[0_2px_11px_0_rgb(6_8_24_/_39%)] p-6 bg-white dark:bg-black",children:[e("h5",{className:"text-lg font-semibold mb-3.5 dark:text-white-light",children:"What do you want to do with the records in the file?"}),t("div",{className:"flex flex-col md:flex-row gap-4 items-center",children:[e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"radio",name:"operation",className:"form-radio",defaultChecked:!0,value:"create",onChange:r=>i(r.target.value)}),t("span",{className:"text-dark dark:text-white",children:["Add as new ",a]})]})}),e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"radio",name:"operation",className:"form-radio",value:"update",onChange:r=>i(r.target.value)}),t("span",{className:"text-dark dark:text-white",children:["Update existing ",a," only"]})]})}),e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"radio",name:"operation",className:"form-radio",value:"create_update",onChange:r=>i(r.target.value)}),e("span",{className:"text-dark dark:text-white",children:"Both"})]})})]}),e("div",{className:"flex",children:m()}),t("div",{className:"flex items-center space-x-3 border-t",children:[t(o,{to:"/import/account/",type:"submit",className:"group btn btn-dark !mt-4",children:[t("svg",{className:"w-4 h-4 mr-1 group-hover:-translate-x-1 transition",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M13 19L7 12L13 5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{opacity:"0.5",d:"M16.9998 19L10.9998 12L16.9998 5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),"Back"]}),t(o,{to:"/import/account/field-mapping",type:"submit",className:"group btn btn-primary !mt-4",children:["Next",t("svg",{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M11 19L17 12L11 5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{opacity:"0.5",d:"M6.99976 19L12.9998 12L6.99976 5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]})]})]})]})})})]})};export{b as default};
