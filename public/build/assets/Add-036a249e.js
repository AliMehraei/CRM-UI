import{u as x,r as t,s as f,b as l,F as N,j as e,L as i}from"./main-fb19eb09.js";import{S as n}from"./react-select.esm-8668e882.js";import{R as j}from"./quill.snow-e8626259.js";import{_}from"./index-dfb886a9.js";import"./_baseIsEqual-c7aa4403.js";const R=()=>{const r=x();t.useEffect(()=>{r(f("Ticket Add"))});const o=[{value:"1",label:"Example Client 1"},{value:"2",label:"Example Client 2"},{value:"3",label:"Example Client 3"},{value:"4",label:"Example Client 4"},{value:"5",label:"Example Client 5"},{value:"6",label:"Example Client 6"},{value:"7",label:"Example Client 7"}],m=[{value:"1",label:"Example Poroject 1"},{value:"2",label:"Example Poroject 2"},{value:"3",label:"Example Poroject 3"},{value:"4",label:"Example Poroject 4"},{value:"5",label:"Example Poroject 5"},{value:"6",label:"Example Poroject 6"},{value:"7",label:"Example Poroject 7"}],[d,c]=t.useState([]),p=69,u=(a,s)=>{c(a)},[h,b]=t.useState("");return l(N,{children:[e("div",{className:"flex items-center lg:justify-end justify-center flex-wrap gap-4 mb-6",children:l("div",{className:"flex items-center gap-2",children:[e(i,{to:"/support/list",className:"btn btn-danger gap-2",children:"Cancel"}),e(i,{to:"/support/add",className:"btn btn-primary gap-2",children:"Save and new"}),e(i,{to:"/support/add",className:"btn btn-success gap-2",children:"Save"})]})}),l("div",{className:"flex xl:flex-row flex-col gap-2.5 panel",children:[l("div",{className:"xl:w-96 w-full xl:mt-0 ",children:[e("label",{htmlFor:"ticket-options",children:"Ticket Option"}),l("div",{className:"panel mb-5",children:[e("label",{htmlFor:"Clinet",children:"Clinet"}),e(n,{placeholder:"Select an Clinet",options:o}),l("div",{className:"mt-4",children:[e("label",{htmlFor:"peoject",children:"Peoject"}),e(n,{placeholder:"Select an Project",options:m})]}),l("div",{className:"mt-4",children:[e("label",{htmlFor:"payment-method",children:"Priority"}),l("select",{id:"priority",name:"priority",className:"form-select",children:[e("option",{value:" ",children:"Select Priority"}),e("option",{value:"normal",children:"Noraml"}),e("option",{value:"high",children:"High"}),e("option",{value:"urgent",children:"Urgent"})]})]})]})]}),e("div",{className:"panel px-0 flex-1 py-1 ltr:xl:mr-6 rtl:xl:ml-6",children:e("div",{className:"mt-2 px-4",children:e("div",{className:"flex justify-between lg:flex-row flex-col",children:l("div",{className:" w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-3",children:[l("div",{className:"mt-2  items-center",children:[e("label",{htmlFor:"subject",children:"Subject"}),e("input",{id:"subject",type:"text",name:"subject",className:"form-input flex-1",placeholder:"Enter Subject"})]}),l("div",{className:"mt-4",children:[e("label",{htmlFor:"massage",children:"Massage"}),e(j,{theme:"snow",value:h,onChange:b})]}),l("div",{className:"custom-file-container mt-4","data-upload-id":"myFirstImage",children:[l("div",{className:"label-containe",children:[e("label",{className:"!text-black",children:"Upload "}),e("button",{type:"button",className:"custom-file-container__image-clear",title:"Clear Image",onClick:()=>{c([])},children:"×"})]}),e("label",{className:"custom-file-container__custom-file"}),e("input",{type:"file",className:"custom-file-container__custom-file__custom-file-input",accept:"image/*"}),e("input",{type:"hidden",name:"MAX_FILE_SIZE",value:"10485760"}),e(_,{value:d,onChange:u,maxNumber:p,children:({imageList:a,onImageUpload:s,onImageRemoveAll:E,onImageUpdate:C,onImageRemove:y,isDragging:P,dragProps:S})=>l("div",{className:"upload__image-wrapper",children:[e("button",{className:"custom-file-container__custom-file__custom-file-control",onClick:s,children:"Choose Image..."})," ",a.map((v,g)=>e("div",{className:"custom-file-container__image-preview relative",children:e("img",{src:v.dataURL,alt:"img",className:"m-auto"})},g))]})})]})]})})})})]})]})};export{R as default};