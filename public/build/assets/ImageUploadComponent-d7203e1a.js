import{u as h,r as v,f as _,j as g,b as p,as as $,at as w}from"./main-8d5d8e48.js";import{C as f}from"./ClearButtonComponent-5efdd64a.js";const I=({formState:a,modelName:d,id:s,formAttribute:e,updateFormData:i})=>{const c=h();return v.useEffect(()=>{a[`${e}_data`]&&c(i({[`${e}_preview`]:_(a[`${e}_data`])}))},[]),g("div",{className:"",children:[g("div",{className:"flex",children:[p("input",{id:s??e,type:"file",className:"form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file:ml-5 file:text-white file:hover:bg-primary flex-1",accept:"image/*",onChange:l=>$(l,d,"images",n=>{c(i({[`${e}_preview`]:l.target.files&&URL.createObjectURL(l.target.files[0])})),c(i({[`${e}`]:`${n==null?void 0:n.data.data.file_asset_path}`}))}),name:s??e},s??e),p(f,{callBack:()=>{const l=document.getElementById(s??e);l&&(l.value="",l.dispatchEvent(new Event("change",{bubbles:!0}))),c(i({[e]:null})),c(i({[`${e}_preview`]:null}))}})]}),p("img",{id:`${s??e}_preview`,src:a[`${e}_preview`]?a[`${e}_preview`]:w(a.oldImage),alt:"img",className:"mt-4 w-20 h-20 rounded"})]})};export{I};