import{bf as n,r as i,j as e,b as t,a as r}from"./main-d4fc42fd.js";const m=()=>{const s=new r,c=n(),a=new URLSearchParams(c.search).get("quoteId"),l=async()=>{await s.sendQuotationRelatedEmail(a,{type:"negotiate"})};return i.useEffect(()=>{l()},[a]),e("div",{className:"",children:e("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-36 py-8 lg:py-10 bg-frosted-2 rounded",children:t("div",{className:"text-center h-full flex flex-col space-y-4 text-black",children:[e("div",{className:""}),e("h2",{className:"title-1",children:"Thank you for your feedback!                                            "}),e("h2",{className:"font-light text-xl tracking-wider",children:"We will contact you for the further negotiations and hopefully we can find the win-win situation.                                            "}),t("p",{className:"flex flex-col space-y-2 description-2 text-black mt-6",children:[e("span",{children:"Warm greetings,                                                    "}),e("span",{children:"ALPYN electronics team                    "})]}),e("div",{className:"flex items-center justify-center flex-col",children:e("a",{href:"/",className:"btn btn-primary pulse-primary btn-sm",children:"back to the website                    "})})]})})})};export{m as default};
