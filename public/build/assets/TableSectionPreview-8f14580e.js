import{j as e,b as l}from"./main-14f615f5.js";const N=({title:h,items:m,columns:d,total:a=null,discount:t=null,tax:r=null,subtotal:c=null,adjustment:n=null})=>e("div",{className:" justify-between ",children:[l("h2",{className:"text-base",children:h}),e("div",{className:"justify-between ",children:[l("div",{className:"table-responsive mt-6",children:e("table",{className:"table-striped",children:[l("thead",{children:l("tr",{children:d.map(s=>l("th",{className:s==null?void 0:s.class,children:s.label},s.key))})}),l("tbody",{children:m.map(s=>l("tr",{children:d.map(i=>l("td",{children:i.model?s[i.model][i.key]:s[i.key]},i.key))},s.id))})]})}),e("div",{className:"grid sm:grid-cols-2 grid-cols-1 px-4 mt-6",children:[l("div",{}),e("div",{className:"ltr:text-right rtl:text-left space-y-2",children:[c!=null&&e("div",{className:"flex items-center font-semibold text-lg",children:[l("div",{className:"flex-1",children:"Subtotal"}),e("div",{className:"w-[37%]",children:["€",c]})]}),r!=null&&e("div",{className:"flex items-center font-semibold text-lg",children:[l("div",{className:"flex-1",children:"Tax"}),e("div",{className:"w-[37%]",children:["€",r]})]}),t!=null&&e("div",{className:"flex items-center font-semibold text-lg",children:[l("div",{className:"flex-1",children:"Discount"}),e("div",{className:"w-[37%]",children:["€",t]})]}),n!=null&&e("div",{className:"flex items-center font-semibold text-lg",children:[l("div",{className:"flex-1",children:"Adjustment"}),e("div",{className:"w-[37%]",children:["€",n]})]}),a!=null&&e("div",{className:"flex items-center font-semibold text-lg",children:[l("div",{className:"flex-1",children:"Total"}),e("div",{className:"w-[37%]",children:["€",a]})]})]})]})]})]});export{N as T};
