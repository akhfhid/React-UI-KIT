import{W as b,H as v,a as p,u as N,n as F}from"./keyboard-BqC3K5VV.js";import{r as x}from"./main-Bbx2KXsb.js";let y="span";var A=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(A||{});function w(e,t){var r;let{features:n=1,...u}=e,l={ref:t,"aria-hidden":(n&2)===2?!0:(r=u["aria-hidden"])!=null?r:void 0,hidden:(n&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return v({ourProps:l,theirProps:u,slot:{},defaultTag:y,name:"Hidden"})}let $=b(w),f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),S=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var I=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(I||{}),M=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(M||{}),g=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(g||{});function O(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}function P(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(S)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});function K(e,t=0){var r;return e===((r=p(e))==null?void 0:r.body)?!1:N(t,{0(){return e.matches(f)},1(){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}var _=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(_||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function W(e){e==null||e.focus({preventScroll:!0})}let L=["textarea","input"].join(",");function D(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,L))!=null?r:!1}function G(e,t=r=>r){return e.slice().sort((r,n)=>{let u=t(r),l=t(n);if(u===null||l===null)return 0;let o=u.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function U(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:u=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?G(e):e:t&64?P(e):O(e);u.length>0&&o.length>1&&(o=o.filter(i=>!u.some(d=>d!=null&&"current"in d?(d==null?void 0:d.current)===i:d===i))),n=n??l.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(n))-1;if(t&4)return Math.max(0,o.indexOf(n))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),E=t&32?{preventScroll:!0}:{},c=0,s=o.length,a;do{if(c>=s||c+s<=0)return 0;let i=h+c;if(t&16)i=(i+s)%s;else{if(i<0)return 3;if(i>=s)return 1}a=o[i],a==null||a.focus(E),c+=m}while(a!==l.activeElement);return t&6&&D(a)&&a.select(),2}function X(){let e=x.useRef(!1);return F(()=>(e.current=!0,()=>{e.current=!1}),[]),e}export{K as A,I as F,W as I,U as P,$ as T,G as _,M as a,f as b,X as f,T as h,A as s};
