import{at as d,r as p,a5 as mr,O as ee,b as N,j,a as gr,S as vr}from"./main-378d85af.js";function K(e,r,t,n){function i(o){return o instanceof t?o:new t(function(l){l(o)})}return new(t||(t=Promise))(function(o,l){function s(v){try{u(n.next(v))}catch(y){l(y)}}function m(v){try{u(n.throw(v))}catch(y){l(y)}}function u(v){v.done?o(v.value):i(v.value).then(s,m)}u((n=n.apply(e,r||[])).next())})}function $(e,r){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(v){return m([u,v])}}function m(u){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(t=0)),t;)try{if(n=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,i=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1],o=u;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(u);break}o[2]&&t.ops.pop(),t.trys.pop();continue}u=r.call(e,t)}catch(v){u=[6,v],i=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Ke(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var n=t.call(e),i,o=[],l;try{for(;(r===void 0||r-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(s){l={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(l)throw l.error}}return o}function $e(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var br=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Y(e,r){var t=yr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function yr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),i=br.get(n);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var hr=[".DS_Store","Thumbs.db"];function Dr(e){return K(this,void 0,void 0,function(){return $(this,function(r){return te(e)&&wr(e.dataTransfer)?[2,Or(e.dataTransfer,e.type)]:xr(e)?[2,Ar(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Er(e)]:[2,[]]})})}function wr(e){return te(e)}function xr(e){return te(e)&&te(e.target)}function te(e){return typeof e=="object"&&e!==null}function Ar(e){return he(e.target.files).map(function(r){return Y(r)})}function Er(e){return K(this,void 0,void 0,function(){var r;return $(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Y(n)})]}})})}function Or(e,r){return K(this,void 0,void 0,function(){var t,n;return $(this,function(i){switch(i.label){case 0:return e.items?(t=he(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Fr))]):[3,2];case 1:return n=i.sent(),[2,We(Qe(n))];case 2:return[2,We(he(e.files).map(function(o){return Y(o)}))]}})})}function We(e){return e.filter(function(r){return hr.indexOf(r.name)===-1})}function he(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Fr(e){if(typeof e.webkitGetAsEntry!="function")return Be(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?Xe(r):Be(e)}function Qe(e){return e.reduce(function(r,t){return $e($e([],Ke(r),!1),Ke(Array.isArray(t)?Qe(t):[t]),!1)},[])}function Be(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Y(r);return Promise.resolve(t)}function _r(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,e.isDirectory?Xe(e):jr(e)]})})}function Xe(e){var r=e.createReader();return new Promise(function(t,n){var i=[];function o(){var l=this;r.readEntries(function(s){return K(l,void 0,void 0,function(){var m,u,v;return $(this,function(y){switch(y.label){case 0:if(s.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return m=y.sent(),t(m),[3,4];case 3:return u=y.sent(),n(u),[3,4];case 4:return[3,6];case 5:v=Promise.all(s.map(_r)),i.push(v),o(),y.label=6;case 6:return[2]}})})},function(s){n(s)})}o()})}function jr(e){return K(this,void 0,void 0,function(){return $(this,function(r){return[2,new Promise(function(t,n){e.file(function(i){var o=Y(i,e.fullPath);t(o)},function(i){n(i)})})]})})}var Sr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return t.some(function(l){var s=l.trim().toLowerCase();return s.charAt(0)==="."?n.toLowerCase().endsWith(s):s.endsWith("/*")?o===s.replace(/\/.*$/,""):i===s})}return!0};function He(e){return kr(e)||Pr(e)||er(e)||Cr()}function Cr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kr(e){if(Array.isArray(e))return De(e)}function Ne(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function Ue(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ne(Object(t),!0).forEach(function(n){Ze(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ne(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ze(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function U(e,r){return Ir(e)||Rr(e,r)||er(e,r)||Tr()}function Tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function er(e,r){if(e){if(typeof e=="string")return De(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return De(e,r)}}function De(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Rr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,l,s;try{for(t=t.call(e);!(i=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw s}}return n}}function Ir(e){if(Array.isArray(e))return e}var Lr="file-invalid-type",Mr="file-too-large",zr="file-too-small",Kr="too-many-files",$r=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Lr,message:"File type must be ".concat(t)}},Ye=function(r){return{code:Mr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ge=function(r){return{code:zr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Wr={code:Kr,message:"Too many files"};function rr(e,r){var t=e.type==="application/x-moz-file"||Sr(e,r);return[t,t?null:$r(r)]}function tr(e,r,t){if(R(e.size))if(R(r)&&R(t)){if(e.size>t)return[!1,Ye(t)];if(e.size<r)return[!1,Ge(r)]}else{if(R(r)&&e.size<r)return[!1,Ge(r)];if(R(t)&&e.size>t)return[!1,Ye(t)]}return[!0,null]}function R(e){return e!=null}function Br(e){var r=e.files,t=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,l=e.maxFiles,s=e.validator;return!o&&r.length>1||o&&l>=1&&r.length>l?!1:r.every(function(m){var u=rr(m,t),v=U(u,1),y=v[0],S=tr(m,n,i),C=U(S,1),P=C[0],f=s?s(m):null;return y&&P&&!f})}function ne(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function re(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function qe(e){e.preventDefault()}function Hr(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Nr(e){return e.indexOf("Edge/")!==-1}function Ur(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Hr(e)||Nr(e)}function _(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var i=arguments.length,o=new Array(i>1?i-1:0),l=1;l<i;l++)o[l-1]=arguments[l];return r.some(function(s){return!ne(n)&&s&&s.apply(void 0,[n].concat(o)),ne(n)})}}function Yr(){return"showOpenFilePicker"in window}function Gr(e){if(R(e)){var r=Object.entries(e).filter(function(t){var n=U(t,2),i=n[0],o=n[1],l=!0;return nr(i)||(console.warn('Skipped "'.concat(i,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(o)||!o.every(or))&&(console.warn('Skipped "'.concat(i,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(t,n){var i=U(n,2),o=i[0],l=i[1];return Ue(Ue({},t),{},Ze({},o,l))},{});return[{description:"Files",accept:r}]}return e}function qr(e){if(R(e))return Object.entries(e).reduce(function(r,t){var n=U(t,2),i=n[0],o=n[1];return[].concat(He(r),[i],He(o))},[]).filter(function(r){return nr(r)||or(r)}).join(",")}function Jr(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function Vr(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function nr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function or(e){return/^.*\.[\w]+$/.test(e)}var Qr=["children"],Xr=["open"],Zr=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],et=["refKey","onChange","onClick"];function rt(e){return ot(e)||nt(e)||ir(e)||tt()}function tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ot(e){if(Array.isArray(e))return we(e)}function ye(e,r){return ct(e)||at(e,r)||ir(e,r)||it()}function it(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ir(e,r){if(e){if(typeof e=="string")return we(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return we(e,r)}}function we(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function at(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],i=!0,o=!1,l,s;try{for(t=t.call(e);!(i=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));i=!0);}catch(m){o=!0,s=m}finally{try{!i&&t.return!=null&&t.return()}finally{if(o)throw s}}return n}}function ct(e){if(Array.isArray(e))return e}function Je(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Je(Object(t),!0).forEach(function(n){xe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function xe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function oe(e,r){if(e==null)return{};var t=lt(e,r),n,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function lt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var Ee=p.forwardRef(function(e,r){var t=e.children,n=oe(e,Qr),i=cr(n),o=i.open,l=oe(i,Xr);return p.useImperativeHandle(r,function(){return{open:o}},[o]),mr.createElement(p.Fragment,null,t(g(g({},l),{},{open:o})))});Ee.displayName="Dropzone";var ar={disabled:!1,getFilesFromEvent:Dr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ee.defaultProps=ar;Ee.propTypes={children:d.func,accept:d.objectOf(d.arrayOf(d.string)),multiple:d.bool,preventDropOnDocument:d.bool,noClick:d.bool,noKeyboard:d.bool,noDrag:d.bool,noDragEventsBubbling:d.bool,minSize:d.number,maxSize:d.number,maxFiles:d.number,disabled:d.bool,getFilesFromEvent:d.func,onFileDialogCancel:d.func,onFileDialogOpen:d.func,useFsAccessApi:d.bool,autoFocus:d.bool,onDragEnter:d.func,onDragLeave:d.func,onDragOver:d.func,onDrop:d.func,onDropAccepted:d.func,onDropRejected:d.func,onError:d.func,validator:d.func};var Ae={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function cr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=g(g({},ar),e),t=r.accept,n=r.disabled,i=r.getFilesFromEvent,o=r.maxSize,l=r.minSize,s=r.multiple,m=r.maxFiles,u=r.onDragEnter,v=r.onDragLeave,y=r.onDragOver,S=r.onDrop,C=r.onDropAccepted,P=r.onDropRejected,f=r.onFileDialogCancel,h=r.onFileDialogOpen,O=r.useFsAccessApi,F=r.autoFocus,ie=r.preventDropOnDocument,Oe=r.noClick,ae=r.noKeyboard,Fe=r.noDrag,k=r.noDragEventsBubbling,ce=r.onError,W=r.validator,B=p.useMemo(function(){return qr(t)},[t]),_e=p.useMemo(function(){return Gr(t)},[t]),le=p.useMemo(function(){return typeof h=="function"?h:Ve},[h]),G=p.useMemo(function(){return typeof f=="function"?f:Ve},[f]),w=p.useRef(null),E=p.useRef(null),lr=p.useReducer(ut,Ae),je=ye(lr,2),ue=je[0],x=je[1],ur=ue.isFocused,Se=ue.isFileDialogActive,q=p.useRef(typeof window<"u"&&window.isSecureContext&&O&&Yr()),Ce=function(){!q.current&&Se&&setTimeout(function(){if(E.current){var c=E.current.files;c.length||(x({type:"closeDialog"}),G())}},300)};p.useEffect(function(){return window.addEventListener("focus",Ce,!1),function(){window.removeEventListener("focus",Ce,!1)}},[E,Se,G,q]);var I=p.useRef([]),Pe=function(c){w.current&&w.current.contains(c.target)||(c.preventDefault(),I.current=[])};p.useEffect(function(){return ie&&(document.addEventListener("dragover",qe,!1),document.addEventListener("drop",Pe,!1)),function(){ie&&(document.removeEventListener("dragover",qe),document.removeEventListener("drop",Pe))}},[w,ie]),p.useEffect(function(){return!n&&F&&w.current&&w.current.focus(),function(){}},[w,F,n]);var T=p.useCallback(function(a){ce?ce(a):console.error(a)},[ce]),ke=p.useCallback(function(a){a.preventDefault(),a.persist(),X(a),I.current=[].concat(rt(I.current),[a.target]),re(a)&&Promise.resolve(i(a)).then(function(c){if(!(ne(a)&&!k)){var b=c.length,D=b>0&&Br({files:c,accept:B,minSize:l,maxSize:o,multiple:s,maxFiles:m,validator:W}),A=b>0&&!D;x({isDragAccept:D,isDragReject:A,isDragActive:!0,type:"setDraggedFiles"}),u&&u(a)}}).catch(function(c){return T(c)})},[i,u,T,k,B,l,o,s,m,W]),Te=p.useCallback(function(a){a.preventDefault(),a.persist(),X(a);var c=re(a);if(c&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return c&&y&&y(a),!1},[y,k]),Re=p.useCallback(function(a){a.preventDefault(),a.persist(),X(a);var c=I.current.filter(function(D){return w.current&&w.current.contains(D)}),b=c.indexOf(a.target);b!==-1&&c.splice(b,1),I.current=c,!(c.length>0)&&(x({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),re(a)&&v&&v(a))},[w,v,k]),J=p.useCallback(function(a,c){var b=[],D=[];a.forEach(function(A){var H=rr(A,B),z=ye(H,2),fe=z[0],pe=z[1],de=tr(A,l,o),Z=ye(de,2),me=Z[0],ge=Z[1],ve=W?W(A):null;if(fe&&me&&!ve)b.push(A);else{var be=[pe,ge];ve&&(be=be.concat(ve)),D.push({file:A,errors:be.filter(function(dr){return dr})})}}),(!s&&b.length>1||s&&m>=1&&b.length>m)&&(b.forEach(function(A){D.push({file:A,errors:[Wr]})}),b.splice(0)),x({acceptedFiles:b,fileRejections:D,type:"setFiles"}),S&&S(b,D,c),D.length>0&&P&&P(D,c),b.length>0&&C&&C(b,c)},[x,s,B,l,o,m,S,C,P,W]),V=p.useCallback(function(a){a.preventDefault(),a.persist(),X(a),I.current=[],re(a)&&Promise.resolve(i(a)).then(function(c){ne(a)&&!k||J(c,a)}).catch(function(c){return T(c)}),x({type:"reset"})},[i,J,T,k]),L=p.useCallback(function(){if(q.current){x({type:"openDialog"}),le();var a={multiple:s,types:_e};window.showOpenFilePicker(a).then(function(c){return i(c)}).then(function(c){J(c,null),x({type:"closeDialog"})}).catch(function(c){Jr(c)?(G(c),x({type:"closeDialog"})):Vr(c)?(q.current=!1,E.current?(E.current.value=null,E.current.click()):T(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):T(c)});return}E.current&&(x({type:"openDialog"}),le(),E.current.value=null,E.current.click())},[x,le,G,O,J,T,_e,s]),Ie=p.useCallback(function(a){!w.current||!w.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),L())},[w,L]),Le=p.useCallback(function(){x({type:"focus"})},[]),Me=p.useCallback(function(){x({type:"blur"})},[]),ze=p.useCallback(function(){Oe||(Ur()?setTimeout(L,0):L())},[Oe,L]),M=function(c){return n?null:c},se=function(c){return ae?null:M(c)},Q=function(c){return Fe?null:M(c)},X=function(c){k&&c.stopPropagation()},sr=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,b=c===void 0?"ref":c,D=a.role,A=a.onKeyDown,H=a.onFocus,z=a.onBlur,fe=a.onClick,pe=a.onDragEnter,de=a.onDragOver,Z=a.onDragLeave,me=a.onDrop,ge=oe(a,Zr);return g(g(xe({onKeyDown:se(_(A,Ie)),onFocus:se(_(H,Le)),onBlur:se(_(z,Me)),onClick:M(_(fe,ze)),onDragEnter:Q(_(pe,ke)),onDragOver:Q(_(de,Te)),onDragLeave:Q(_(Z,Re)),onDrop:Q(_(me,V)),role:typeof D=="string"&&D!==""?D:"presentation"},b,w),!n&&!ae?{tabIndex:0}:{}),ge)}},[w,Ie,Le,Me,ze,ke,Te,Re,V,ae,Fe,n]),fr=p.useCallback(function(a){a.stopPropagation()},[]),pr=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,b=c===void 0?"ref":c,D=a.onChange,A=a.onClick,H=oe(a,et),z=xe({accept:B,multiple:s,type:"file",style:{display:"none"},onChange:M(_(D,V)),onClick:M(_(A,fr)),tabIndex:-1},b,E);return g(g({},z),H)}},[E,t,s,V,n]);return g(g({},ue),{},{isFocused:ur&&!n,getRootProps:sr,getInputProps:pr,rootRef:w,inputRef:E,open:M(L)})}function ut(e,r){switch(r.type){case"focus":return g(g({},e),{},{isFocused:!0});case"blur":return g(g({},e),{},{isFocused:!1});case"openDialog":return g(g({},Ae),{},{isFileDialogActive:!0});case"closeDialog":return g(g({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return g(g({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return g(g({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return g({},Ae);default:return e}}function Ve(){}const st={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},ft={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},pt={display:"inline-block",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},dt={display:"flex",minWidth:0,overflow:"hidden"},mt={display:"block",width:"auto",height:"100%"},vt=({modelName:e,modelId:r})=>{const[t,n]=p.useState([]),[i,o]=p.useState(null),{getRootProps:l,getInputProps:s}=cr({accept:{"image/*":[".png",".gif",".jpeg",".jpg"],"application/pdf":[".pdf"],"text/plain":[".txt"],"text/csv":[".csv"],"application/msword":[".doc",".docx"],"application/vnd.ms-excel":[".xls",".xlsx"],"application/vnd.ms-powerpoint":[".ppt",".pptx"]},onDrop:(f,h)=>{h.length>0&&ee("Some files did not upload"),y(f)}}),m=new gr,u=f=>{o(f)},v=()=>{o(null)},y=f=>{m.uploadAttachments(f,e,r).then(h=>{if(h.status!=200)throw Error(h);n(O=>{var F;return[...O,...(F=h.data)==null?void 0:F.data]})}).catch(h=>{ee("Files did not upload"),console.error(h)})},S=f=>{vr.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(h=>{h.value&&m.deleteAttachments(f).then(()=>{n(O=>O.filter(F=>F.id!=f))}).catch(O=>{ee("Error deleting attachment"),console.error(O)})})},C=f=>{m.downloadAttachment(f.id,f.original_name)};p.useEffect(()=>{m.fetchAttachments({modelId:r,modelName:e}).then(f=>{f.status==200&&n(f.data.attachments)}).catch(f=>{ee("Error Fetching attachments"),console.error(f)})},[r,e]),p.useEffect(()=>()=>t.forEach(f=>URL.revokeObjectURL(f.preview)),[]);const P=t.map((f,h)=>{var O,F;return N("div",{style:pt,className:"relative",children:[N("div",{style:dt,onMouseEnter:()=>u(h),onMouseLeave:v,children:[j("img",{alt:f.original_name,src:"/assets/images/filethumbnail.png",style:{...mt,filter:i===h?"blur(8px)":"none"},onLoad:()=>{URL.revokeObjectURL(f.preview)}}),i===h&&j("div",{onClick:()=>S(f.id),className:"cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-center text-red-700 bg-opacity-70 p-2 rounded",children:"✖ Delete"}),j("div",{className:"absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-filter backdrop-blur-md text-white text-center text-blue-950",children:((O=f.original_name)==null?void 0:O.length)>10?((F=f.original_name)==null?void 0:F.substring(0,10))+"...":f.original_name})]}),j("button",{onClick:()=>{C(f)},className:"cursor-pointer mt-3 text-center btn btn-primary w-20 h-7",children:"Download"})]},f.id)});return N("div",{className:"flex justify-between lg:flex-row flex-col mb-10",children:[j("label",{className:"ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2",children:"Attachment"},"Attachment"),N("section",{className:"container",children:[N("div",{...l({className:"dropzone"}),style:ft,children:[j("input",{...s()}),j("p",{children:"Drag 'n' drop some files here, or click to select files"})]}),j("aside",{style:st,children:P})]})]})};export{vt as A};
