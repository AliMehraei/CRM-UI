import{r as s}from"./main-22663fbf.js";import{c as o}from"./use-is-mounted-c3675a90.js";function u(t){var r;if(t.type)return t.type;let n=(r=t.as)!=null?r:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function p(t,r){let[n,e]=s.useState(()=>u(t));return o(()=>{e(u(t))},[t.type,t.as]),o(()=>{n||r.current&&r.current instanceof HTMLButtonElement&&!r.current.hasAttribute("type")&&e("button")},[n,r]),n}export{p as s};
