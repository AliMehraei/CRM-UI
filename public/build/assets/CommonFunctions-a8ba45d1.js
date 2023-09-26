import{e as x,b as i,j as d}from"./main-8c659d75.js";var p={exports:{}},f=typeof Reflect=="object"?Reflect:null,y=f&&typeof f.apply=="function"?f.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)},m;f&&typeof f.ownKeys=="function"?m=f.ownKeys:Object.getOwnPropertySymbols?m=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:m=function(e){return Object.getOwnPropertyNames(e)};function C(n){console&&console.warn&&console.warn(n)}var w=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}p.exports=o;p.exports.once=S;o.EventEmitter=o;o.prototype._events=void 0;o.prototype._eventsCount=0;o.prototype._maxListeners=void 0;var g=10;function h(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return g},set:function(n){if(typeof n!="number"||n<0||w(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");g=n}});o.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};o.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||w(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function N(n){return n._maxListeners===void 0?o.defaultMaxListeners:n._maxListeners}o.prototype.getMaxListeners=function(){return N(this)};o.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var r=e==="error",l=this._events;if(l!==void 0)r=r&&l.error===void 0;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var u=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw u.context=a,u}var v=l[e];if(v===void 0)return!1;if(typeof v=="function")y(v,this,t);else for(var b=v.length,j=E(v,b),s=0;s<b;++s)y(j[s],this,t);return!0};function _(n,e,t,s){var r,l,a;if(h(t),l=n._events,l===void 0?(l=n._events=Object.create(null),n._eventsCount=0):(l.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),l=n._events),a=l[e]),a===void 0)a=l[e]=t,++n._eventsCount;else if(typeof a=="function"?a=l[e]=s?[t,a]:[a,t]:s?a.unshift(t):a.push(t),r=N(n),r>0&&a.length>r&&!a.warned){a.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=n,u.type=e,u.count=a.length,C(u)}return n}o.prototype.addListener=function(e,t){return _(this,e,t,!1)};o.prototype.on=o.prototype.addListener;o.prototype.prependListener=function(e,t){return _(this,e,t,!0)};function R(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function L(n,e,t){var s={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=R.bind(s);return r.listener=t,s.wrapFn=r,r}o.prototype.once=function(e,t){return h(t),this.on(e,L(this,e,t)),this};o.prototype.prependOnceListener=function(e,t){return h(t),this.prependListener(e,L(this,e,t)),this};o.prototype.removeListener=function(e,t){var s,r,l,a,u;if(h(t),r=this._events,r===void 0)return this;if(s=r[e],s===void 0)return this;if(s===t||s.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,s.listener||t));else if(typeof s!="function"){for(l=-1,a=s.length-1;a>=0;a--)if(s[a]===t||s[a].listener===t){u=s[a].listener,l=a;break}if(l<0)return this;l===0?s.shift():M(s,l),s.length===1&&(r[e]=s[0]),r.removeListener!==void 0&&this.emit("removeListener",e,u||t)}return this};o.prototype.off=o.prototype.removeListener;o.prototype.removeAllListeners=function(e){var t,s,r;if(s=this._events,s===void 0)return this;if(s.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):s[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete s[e]),this;if(arguments.length===0){var l=Object.keys(s),a;for(r=0;r<l.length;++r)a=l[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=s[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function F(n,e,t){var s=n._events;if(s===void 0)return[];var r=s[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?P(r):E(r,r.length)}o.prototype.listeners=function(e){return F(this,e,!0)};o.prototype.rawListeners=function(e){return F(this,e,!1)};o.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):O.call(n,e)};o.prototype.listenerCount=O;function O(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}o.prototype.eventNames=function(){return this._eventsCount>0?m(this._events):[]};function E(n,e){for(var t=new Array(e),s=0;s<e;++s)t[s]=n[s];return t}function M(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function P(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function S(n,e){return new Promise(function(t,s){function r(a){n.removeListener(e,l),s(a)}function l(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}A(n,e,l,{once:!0}),e!=="error"&&I(n,r,{once:!0})})}function I(n,e,t){typeof n.on=="function"&&A(n,"error",e,t)}function A(n,e,t,s){if(typeof n.on=="function")s.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(l){s.once&&n.removeEventListener(e,r),t(l)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var T=p.exports;const c=new x,U=[{value:"none",label:"-None-"},{value:"waiting",label:"Waiting"},{value:"confirmed",label:"Confirmed"},{value:"rejected",label:"Rejected"}],q=[{value:"EUR",label:"EUR"},{value:"USD",label:"USD"}],W=[{value:"none",label:"-None-"},{value:"yes",label:"Yes"},{value:"no",label:"No"}],K=[{value:"draft",label:"Draft"},{value:"approved",label:"Approved"},{value:"confirmed",label:"Confirmed"},{value:"closed",label:"Closed"}],Q=[{value:"none",label:"-None-"},{value:"draft",label:"Draft"},{value:"no_feedback",label:"No Feedback"},{value:"negotiation_price",label:"Negotiation Price"},{value:"negotiation_conditions",label:"Negotiation Conditions"},{value:"open",label:"Open"},{value:"lost",label:"Lost"},{value:"won",label:"Won"}],k=(n,e)=>{n.target.files&&n.target.files.length>0&&c.uploadFile(n.target.files[0]).then(t=>{e(t)}).catch()},V=[{value:"none",label:"-None-"},{value:"ems",label:"EMS"},{value:"odm",label:"ODM(EMS + Development)"},{value:"oem",label:"OEM"},{value:"reseller",label:"Reseller"},{value:"systemintegrator_it",label:"System-Integrator It"},{value:"other",label:"Other"}],H=[{value:"none",label:"-None-"},{value:"herr",label:"Herr"},{value:"frau",label:"Frau"},{value:"fr.",label:"Fr."},{value:"dr.",label:"Dr."},{value:"prof.",label:"Prof."}],z=[{value:"nda",label:"NDA"},{value:"quality_agreement",label:"Quality Agreement"},{value:"logistic_agreement",label:"Logistic Agreement"},{value:"other_agreement",label:"Other Agreement"}],Y=async n=>{const e=await c.searchProduct({query:n});if(e.status){const t="id",s="product_name";return e.data.data.map(r=>({value:r[t],label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:r[s]})},r[t])}))}},$=async n=>{const e=await c.searchRfq({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.rfq_name})},t.id)}))},B=async n=>{const e=await c.searchVendorRfq({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.vendor_rfq_name})},t.id)}))},G=async n=>{const e=await c.searchDeal({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.deal_name})},t.id)}))},J=async n=>{const e=await c.searchVendor({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.vendor_name})},t.id)}))},X=async n=>{const e=await c.searchAvailability({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.availability_name})},t.id)}))},Z=async n=>{const e=await c.searchQuote({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.subject})},t.id)}))},ee=async n=>{const e=await c.searchInvoice({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.subject})},t.id)}))},te=async n=>{const e=await c.searchPurchaseOrder({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.subject})},t.id)}))},ne=async n=>{const e=await c.searchAvailability({query:n});if(e.status)return e.data.data.map(t=>({value:t.id,label:i("div",{className:"flex items-center",children:i("div",{className:"text-sm font-bold",children:t.availability_name})},t.id)}))},se=async n=>{const e=await c.loadAdminUsers(n),t="userId",s="first_name",r="avatar",l="email";if(e.status)return e.data.map(a=>({value:a[t],label:d("div",{className:"flex items-center",children:[i("img",{src:a[r]??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[i("div",{className:"text-sm font-bold",children:a[s]+" "+a.last_name}),i("div",{className:"text-xs text-gray-500",children:a[l]})]})]},a[t])}))},re=async n=>{const e=await c.searchAccount({query:n}),t="id",s="account_name",r="image",l="email";if(e.status===200)return e.data.data.map(a=>({value:a[t],label:d("div",{className:"flex items-center",children:[i("img",{src:a[r]??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[i("div",{className:"text-sm font-bold",children:a[s]}),i("div",{className:"text-xs text-gray-500",children:a[l]})]})]},a[t])}))},ae=async n=>{const e=await c.searchLead({query:n}),t="id";if(e.status===200)return e.data.data.map(s=>({value:s[t],label:d("div",{className:"flex items-center",children:[i("img",{src:s.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[i("div",{className:"text-sm font-bold",children:s.company}),i("div",{className:"text-xs text-gray-500",children:s.email})]})]},s[t])}))},ie=async n=>{const e=await c.searchContact({query:n}),t="id";if(e.status===200)return e.data.data.map(s=>({value:s[t],label:d("div",{className:"flex items-center",children:[i("img",{src:s.image??"/assets/images/user-profile.jpeg",alt:"avatar",className:"w-8 h-8 mr-2 rounded-full"}),d("div",{children:[d("div",{className:"text-sm font-bold",children:[s.first_name," ",s.last_name]}),i("div",{className:"text-xs text-gray-500",children:s.email})]})]},s[t])}))},le=async n=>{const e="id",t="name",s=await c.searchManufacturer({query:n});if(s.status)return s.data.data.map(r=>({value:r[e],label:i("div",{className:"flex items-center",children:i("div",{children:i("div",{className:"text-sm font-bold",children:r[t]})})},r[e])}))},oe=async n=>{const e="id",t="subject",s=await c.searchSalesOrder({query:n});if(s.status)return s.data.data.map(r=>({value:r[e],label:i("div",{className:"flex items-center",children:i("div",{children:i("div",{className:"text-sm font-bold",children:r[t]})})},r[e])}))},ce=n=>n&&n!==""?n:"https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png",ue=async n=>{const e="id",t="excess_name",s=await c.searchExcess({query:n});if(s.status)return s.data.data.map(r=>({value:r[e],label:i("div",{className:"flex items-center",children:i("div",{children:i("div",{className:"text-sm font-bold",children:r[t]})})},r[e])}))},de=async n=>{const e="id",t="name",s=await c.searchRoles({query:n});if(s.status)return s.data.data.map(r=>({value:r[e],label:i("div",{className:"flex items-center",children:i("div",{children:i("div",{className:"text-sm font-bold",children:r[t]})})},r[e])}))},fe=n=>{const t=new x()[n];if(typeof t!="function")throw new Error(`API not found : ${n}`);return t},ve=n=>n.replace(/^./,n[0].toUpperCase()),me=async(n,e)=>{if(n.length<2)return[];const t=e.type_info.api,s=e.type_info.method,r=e.type_info.value_field,l=e.type_info.label_filed;try{const a=await c.loadApiModelsPost(n,t,s);return a.status?a.data.data.map(u=>({value:u[r],label:i("div",{className:"flex items-center",children:i("div",{children:i("div",{className:"text-sm font-bold",children:u[l]})})},u[r])})):(console.error("An error occurred while fetching data ",a.message),[])}catch(a){return console.error("An error occurred while fetching data : ",a),[]}};new T.EventEmitter;export{V as A,z as C,H as F,U as P,K as S,q as a,re as b,ie as c,ae as d,$ as e,Z as f,ce as g,k as h,oe as i,ee as j,G as k,Y as l,X as m,W as n,J as o,te as p,fe as q,me as r,se as s,le as t,ve as u,ne as v,ue as w,Q as x,de as y,B as z};
