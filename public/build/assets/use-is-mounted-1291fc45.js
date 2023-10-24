import{r as s,a2 as b}from"./main-abaca463.js";var A=Object.defineProperty,P=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t,n)=>(P(e,typeof t!="symbol"?t+"":t,n),n);let I=class{constructor(){g(this,"current",this.detect()),g(this,"handoffState","pending"),g(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},v=new I,N=(e,t)=>{v.isServer?s.useEffect(e,t):s.useLayoutEffect(e,t)};function T(e){let t=s.useRef(e);return N(()=>{t.current=e},[e]),t}function ne(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let k=function(e){let t=T(e);return b.useCallback((...n)=>t.current(...n),[t])};function D(){let[e,t]=s.useState(v.isHandoffComplete);return e&&v.isHandoffComplete===!1&&t(!1),s.useEffect(()=>{e!==!0&&t(!0)},[e]),s.useEffect(()=>v.handoff(),[]),e}var O;let re=(O=b.useId)!=null?O:function(){let e=D(),[t,n]=b.useState(e?()=>v.nextId():null);return N(()=>{t===null&&n(v.nextId())},[t]),t!=null?""+t:void 0};function S(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,S),r}function M(e){return v.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let E=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(R||{}),L=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(L||{}),H=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(H||{});function U(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(E)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var C=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(C||{});function oe(e,t=0){var n;return e===((n=M(e))==null?void 0:n.body)?!1:S(t,{0(){return e.matches(E)},1(){let r=e;for(;r!==null;){if(r.matches(E))return!0;r=r.parentElement}return!1}})}var _=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(_||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ie(e){e==null||e.focus({preventScroll:!0})}let K=["textarea","input"].join(",");function W(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,K))!=null?n:!1}function G(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),c=t(r);if(o===null||c===null)return 0;let i=o.compareDocumentPosition(c);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ae(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?G(e):e:U(e);o.length>0&&i.length>1&&(i=i.filter(m=>!o.includes(m))),r=r??c.activeElement;let a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=t&32?{preventScroll:!0}:{},d=0,u=i.length,f;do{if(d>=u||d+u<=0)return 0;let m=p+d;if(t&16)m=(m+u)%u;else{if(m<0)return 3;if(m>=u)return 1}f=i[m],f==null||f.focus(l),d+=a}while(f!==c.activeElement);return t&6&&W(f)&&f.select(),2}let $=Symbol();function se(e,t=!0){return Object.assign(e,{[$]:t})}function ue(...e){let t=s.useRef(e);s.useEffect(()=>{t.current=e},[e]);let n=k(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[$]))?void 0:n}function F(...e){return e.filter(Boolean).join(" ")}var V=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(V||{}),q=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(q||{});function B({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:c=!0,name:i}){let a=x(t,e);if(c)return y(a,n,r,i);let p=o??0;if(p&2){let{static:l=!1,...d}=a;if(l)return y(d,n,r,i)}if(p&1){let{unmount:l=!0,...d}=a;return S(l?0:1,{0(){return null},1(){return y({...d,hidden:!0,style:{display:"none"}},n,r,i)}})}return y(a,n,r,i)}function y(e,t={},n,r){let{as:o=n,children:c,refName:i="ref",...a}=w(e,["unmount","static"]),p=e.ref!==void 0?{[i]:e.ref}:{},l=typeof c=="function"?c(t):c;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(t));let d={};if(t){let u=!1,f=[];for(let[m,h]of Object.entries(t))typeof h=="boolean"&&(u=!0),h===!0&&f.push(m);u&&(d["data-headlessui-state"]=f.join(" "))}if(o===s.Fragment&&Object.keys(j(a)).length>0){if(!s.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let u=l.props,f=typeof(u==null?void 0:u.className)=="function"?(...h)=>F(u==null?void 0:u.className(...h),a.className):F(u==null?void 0:u.className,a.className),m=f?{className:f}:{};return s.cloneElement(l,Object.assign({},x(l.props,j(w(a,["ref"]))),d,p,X(l.ref,p.ref),m))}return s.createElement(o,Object.assign({},w(a,["ref"]),o!==s.Fragment&&p,o!==s.Fragment&&d),l)}function X(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function x(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...c){let i=n[r];for(let a of i){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;a(o,...c)}}});return t}function Y(e){var t;return Object.assign(s.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function j(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function w(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let z="div";var J=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(J||{});function Q(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return B({ourProps:o,theirProps:r,slot:{},defaultTag:z,name:"Hidden"})}let le=Y(Q);var Z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Z||{});function ce(){let e=s.useRef(!1);return N(()=>(e.current=!0,()=>{e.current=!1}),[]),e}export{Y as D,re as I,R as M,L as N,ae as O,V as S,C as T,B as X,se as a,v as b,N as c,le as d,M as e,ce as f,F as g,oe as h,ie as i,q as j,Z as k,D as l,U as m,G as n,k as o,J as p,T as s,ne as t,S as u,ue as y};
