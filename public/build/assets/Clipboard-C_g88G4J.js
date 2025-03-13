import{r as C,u as S,s as W,j as e,L as D}from"./main-Bbx2KXsb.js";import{C as y}from"./Highlight-N3fjPXQz.js";import{S as H}from"./sweetalert2.esm.all-BGf-Fe8G.js";var g={},E=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var t=document.activeElement,s=[],o=0;o<r.rangeCount;o++)s.push(r.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||s.forEach(function(a){r.addRange(a)}),t&&t.focus()}},R=E,N={"text/plain":"Text","text/html":"Url",default:"Text"},V="Copy to clipboard: #{key}, Enter";function B(r){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return r.replace(/#{\s*key\s*}/g,t)}function I(r,t){var s,o,a,l,d,n,u=!1;t||(t={}),s=t.debug||!1;try{a=R(),l=document.createRange(),d=document.getSelection(),n=document.createElement("span"),n.textContent=r,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),typeof c.clipboardData>"u"){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=N[t.format]||N.default;window.clipboardData.setData(i,r)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,r);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))}),document.body.appendChild(n),l.selectNodeContents(n),d.addRange(l);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");u=!0}catch(c){s&&console.error("unable to copy using execCommand: ",c),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",r),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(i){s&&console.error("unable to copy using clipboardData: ",i),s&&console.error("falling back to prompt"),o=B("message"in t?t.message:V),window.prompt(o,r)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(l):d.removeAllRanges()),n&&document.body.removeChild(n),a()}return u}var A=I;function v(r){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(r)}Object.defineProperty(g,"__esModule",{value:!0});g.CopyToClipboard=void 0;var x=M(C),Z=M(A),U=["text","onCopy","options","children"];function M(r){return r&&r.__esModule?r:{default:r}}function L(r,t){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),s.push.apply(s,o)}return s}function T(r){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?L(Object(s),!0).forEach(function(o){k(r,o,s[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(s,o))})}return r}function $(r,t){if(r==null)return{};var s=q(r,t),o,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(a=0;a<l.length;a++)o=l[a],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(s[o]=r[o])}return s}function q(r,t){if(r==null)return{};var s={},o=Object.keys(r),a,l;for(l=0;l<o.length;l++)a=o[l],!(t.indexOf(a)>=0)&&(s[a]=r[a]);return s}function z(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function F(r,t){for(var s=0;s<t.length;s++){var o=t[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function K(r,t,s){return t&&F(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function X(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&w(r,t)}function w(r,t){return w=Object.setPrototypeOf||function(o,a){return o.__proto__=a,o},w(r,t)}function G(r){var t=Q();return function(){var o=b(r),a;if(t){var l=b(this).constructor;a=Reflect.construct(o,arguments,l)}else a=o.apply(this,arguments);return J(this,a)}}function J(r,t){if(t&&(v(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O(r)}function O(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function b(r){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},b(r)}function k(r,t,s){return t in r?Object.defineProperty(r,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[t]=s,r}var P=function(r){X(s,r);var t=G(s);function s(){var o;z(this,s);for(var a=arguments.length,l=new Array(a),d=0;d<a;d++)l[d]=arguments[d];return o=t.call.apply(t,[this].concat(l)),k(O(o),"onClick",function(n){var u=o.props,f=u.text,c=u.onCopy,i=u.children,p=u.options,h=x.default.Children.only(i),_=(0,Z.default)(f,p);c&&c(f,_),h&&h.props&&typeof h.props.onClick=="function"&&h.props.onClick(n)}),o}return K(s,[{key:"render",value:function(){var a=this.props;a.text,a.onCopy,a.options;var l=a.children,d=$(a,U),n=x.default.Children.only(l);return x.default.cloneElement(n,T(T({},d),{},{onClick:this.onClick}))}}]),s}(x.default.PureComponent);g.CopyToClipboard=P;k(P,"defaultProps",{onCopy:void 0,options:void 0});var Y=g,j=Y.CopyToClipboard;j.CopyToClipboard=j;var m=j;const oe=()=>{const r=S();C.useEffect(()=>{r(W("Clipboard"))});const[t,s]=C.useState([]),o=i=>{t.includes(i)?s(p=>p.filter(h=>h!==i)):s([...t,i])},[a,l]=C.useState("http://www.admin-dashboard.com"),[d,n]=C.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit..."),u="22991",f="http://www.admin-dashboard.com/code",c=(i="")=>{H.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:i||"Copied successfully.",padding:"10px 20px"})};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(D,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Clipboard"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/react-copy-to-clipboard",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-copy-to-clipboard"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",id:"copy_from_input",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy from input"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsx("input",{type:"text",value:a,className:"form-input",onChange:i=>l(i.target.value)}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(m.CopyToClipboard,{text:a,onCopy:(i,p)=>{p&&c()},children:e.jsxs("button",{type:"button",className:"btn btn-primary",children:[e.jsxs("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Input"]})}),e.jsx(m.CopyToClipboard,{text:a,onCopy:(i,p)=>{p&&c("Cut successfully.")},children:e.jsxs("button",{type:"button",className:"btn btn-dark",value:a,onClick:()=>l(""),children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015",stroke:"currentColor",strokeWidth:"1.5"})]}),"Cut from Input"]})})]})]})})}),t.includes("code1")&&e.jsx(y,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');

<form>
    <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"copy_from_textarea",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy form Textarea"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsx("textarea",{rows:3,wrap:"soft",className:"form-textarea",value:d,id:"message2",onChange:i=>n(i.target.value)}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(m.CopyToClipboard,{text:d,onCopy:(i,p)=>{p&&c()},children:e.jsxs("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#message2",children:[e.jsxs("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Input"]})}),e.jsx(m.CopyToClipboard,{text:d,onCopy:(i,p)=>{p&&c("Cut successfully.")},children:e.jsxs("button",{type:"button",className:"btn btn-dark ",onClick:()=>n(""),children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015",stroke:"currentColor",strokeWidth:"1.5"})]}),"Cut from Input"]})})]})]})})}),t.includes("code2")&&e.jsx(y,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

<form>
    <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"copy_from_paragraph",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Text from Paragraph"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsxs("p",{className:"mb-3 font-semibold",children:["Here is your OTP",e.jsx("span",{className:"text-2xl",id:"copyOTP",defaultValue:u,children:"22991"}),"."]}),e.jsx("p",{className:"font-semibold",children:"Please do not share it to anyone"}),e.jsx("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:e.jsx(m.CopyToClipboard,{text:u,onCopy:(i,p)=>{p&&c()},children:e.jsxs("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#copyOTP",children:[e.jsxs("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Paragraph"]})})})]})})}),t.includes("code3")&&e.jsx(y,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message3}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                <svg>...</svg>
                Copy from Paragraph
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),e.jsxs("div",{className:"panel",id:"advanced",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Hidden Text (Advanced)"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:e.jsxs("form",{children:[e.jsxs("p",{className:"mb-3 font-semibold",children:[e.jsxs("span",{children:[" ","Link -> "," "]}),e.jsx("span",{id:"copyLink",children:" http://www.admin-dashboard.com/code"})]}),e.jsx("span",{className:"absolute opacity-0",id:"copyHiddenCode",children:"2291"}),e.jsxs("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[e.jsx(m.CopyToClipboard,{text:f,onCopy:(i,p)=>{p&&c()},children:e.jsxs("button",{type:"button",className:"btn btn-primary",children:[e.jsxs("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy Link"]})}),e.jsx(m.CopyToClipboard,{text:"2291",onCopy:(i,p)=>{p&&c()},children:e.jsxs("button",{type:"button",className:"btn btn-dark ",children:[e.jsxs("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy Hidden Code"]})})]})]})})}),t.includes("code4")&&e.jsx(y,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message4}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy Link
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={'2291'}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-dark ">
                <svg>...</svg>
                Copy Hidden Code
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]})]})]})]})};export{oe as default};
