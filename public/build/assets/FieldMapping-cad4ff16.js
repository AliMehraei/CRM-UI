import{u as o,h as m,r as i,s as p,d as c,b as r,j as e}from"./main-957414d0.js";import{r as t}from"./tabs-6c91e3e5.js";import"./use-is-mounted-4a4e106f.js";import"./use-resolve-button-type-eda66c31.js";const x=()=>{const s=o(),d=m().module,[n,h]=i.useState("");i.useState("create"),i.useEffect(()=>{h(d.charAt(0).toUpperCase()+d.slice(1)),s(p("Import "+n))},[]),c(l=>l.themeConfig.theme),c(l=>l.themeConfig.rtlClass),i.useState(!1);const a=[{id:1,field_in_file:"Contact ID",field_in_system:null,column_3:"input",column_4:"input",sample_data_1:"zcrm_538281000039706083",sample_data_2:"zcrm_538281000039706084"},{id:2,field_in_file:"Contact Owner",field_in_system:null,column_3:"input",column_4:null,sample_data_1:"Petra Hacker",sample_data_2:"Mohammad Alaeerad"},{id:3,field_in_file:"Contact Name",field_in_system:null,column_3:"input",column_4:null,sample_data_1:"Petra Hacker",sample_data_2:"Mohammad Alaeerad"},{id:4,field_in_file:"Contact Email",field_in_system:null,column_3:null,column_4:"input",sample_data_1:"Petra Hacker",sample_data_2:"Mohammad Alaeerad"},{id:5,field_in_file:"Contact Test",field_in_system:null,column_3:"input",column_4:null,sample_data_1:"Petra Hacker",sample_data_2:"Mohammad Alaeerad"}];return r("div",{children:[e("section",{className:"sm:flex sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-400/20 pb-4",children:r("h3",{className:"text-xl font-bold dark:text-white-dark",children:["Import "+n," - Field Mapping"]})}),e("section",{className:"",children:r(t.Group,{children:[r(t.List,{className:"flex flex-wrap",children:[e(t,{as:i.Fragment,children:({selected:l})=>e("button",{className:`${l?"border-b !border-primary text-primary !outline-none":""} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary hover:text-primary`,children:"Fields Mapping"})}),e(t,{as:i.Fragment,children:({selected:l})=>e("button",{className:`${l?"border-b !border-primary text-primary !outline-none":""} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-primary hover:text-primary`,children:"Assign Default Value"})})]}),r(t.Panels,{children:[e(t.Panel,{children:e("div",{className:"active pt-4",children:r(t.Group,{children:[e("div",{className:"flex",children:e("div",{className:"bg-white p-2 rounded-full border",children:r(t.List,{className:"flex flex-wrap justify-start space-x-2 rtl:space-x-reverse",children:[e(t,{as:i.Fragment,children:({selected:l})=>e("button",{className:`${l?"bg-primary text-white font-bold !outline-none":""}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`,children:"All"})}),e(t,{as:i.Fragment,children:({selected:l})=>e("button",{className:`${l?"bg-primary text-white font-bold !outline-none":""}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`,children:"Mapped (38)"})}),e(t,{as:i.Fragment,children:({selected:l})=>e("button",{className:`${l?"bg-primary text-white font-bold !outline-none":""}  -mb-[1px] block rounded-full p-2 py-1 hover:bg-primary hover:text-white`,children:"Unmapped (27)"})})]})})}),r(t.Panels,{children:[e(t.Panel,{children:e("div",{className:"active",children:e("div",{className:"table-responsive my-4",children:r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})}),e("tbody",{children:a.map(l=>(console.log(l),r("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:l.field_in_file})}),e("td",{children:r("select",{id:"ctnSelect1",className:"form-select text-white-dark dark:text-white-light",required:!0,children:[e("option",{children:"--None--"}),r("option",{children:[n," Id"]}),r("option",{children:[n," Name"]})]})}),e("td",{children:l.column_3?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:l.column_4?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_1})}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_2})})]},l.id)))}),e("tfoot",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})})]})})})}),e(t.Panel,{children:e("div",{children:e("div",{className:"table-responsive my-4",children:r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})}),e("tbody",{children:a.map(l=>(console.log(l),r("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:l.field_in_file})}),e("td",{children:r("select",{id:"ctnSelect1",className:"form-select text-white-dark dark:text-white-light",required:!0,children:[e("option",{children:"--None--"}),r("option",{children:[n," Id"]}),r("option",{children:[n," Name"]})]})}),e("td",{children:l.column_3?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:l.column_4?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_1})}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_2})})]},l.id)))}),e("tfoot",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})})]})})})}),e(t.Panel,{children:e("div",{className:"",children:e("div",{className:"table-responsive my-4",children:r("table",{children:[e("thead",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})}),e("tbody",{children:a.map(l=>(console.log(l),r("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:l.field_in_file})}),e("td",{children:r("select",{id:"ctnSelect1",className:"form-select text-white-dark dark:text-white-light",required:!0,children:[e("option",{children:"--None--"}),r("option",{children:[n," Id"]}),r("option",{children:[n," Name"]})]})}),e("td",{children:l.column_3?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:l.column_4?e("input",{type:"text",placeholder:"Some Text...",className:"form-input",required:!0}):""}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_1})}),e("td",{children:e("div",{className:"whitespace-nowrap",children:l.sample_data_2})})]},l.id)))}),e("tfoot",{children:r("tr",{children:[e("th",{children:"FIELDS IN FILE"}),e("th",{children:"FIELDS IN OUR SYSTEM"}),e("th",{}),e("th",{}),e("th",{children:"SAMPLE DATA FROM FILE"}),e("th",{})]})})]})})})})]})]})})}),e(t.Panel,{children:e("div",{children:r("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),r("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})})]})]})})]})};export{x as default};
