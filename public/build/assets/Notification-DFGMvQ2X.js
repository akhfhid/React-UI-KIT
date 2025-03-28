import{R as w,c as M,u as L,r as k,s as S,a as T,j as t,L as E}from"./main-Bbx2KXsb.js";import{C as p}from"./Highlight-N3fjPXQz.js";import{S as b}from"./sweetalert2.esm.all-BGf-Fe8G.js";const j=[{key:"title",getter:e=>e.getTitle()},{key:"html",getter:e=>e.getHtmlContainer()},{key:"confirmButtonText",getter:e=>e.getConfirmButton()},{key:"denyButtonText",getter:e=>e.getDenyButton()},{key:"cancelButtonText",getter:e=>e.getCancelButton()},{key:"footer",getter:e=>e.getFooter()},{key:"closeButtonHtml",getter:e=>e.getCloseButton()},{key:"iconHtml",getter:e=>e.getIconContent()},{key:"loaderHtml",getter:e=>e.getLoader()}],C=()=>{};function R(e){function r(o){const s={},n={},i=j.map(c=>c.key);return Object.entries(o).forEach(c=>{let[d,m]=c;i.includes(d)&&w.isValidElement(m)?(s[d]=m,n[d]=" "):n[d]=m}),[s,n]}function x(o,s){Object.entries(s).forEach(n=>{let[i,c]=n;const m=j.find(f=>f.key===i).getter(e),a=M(m);a.render(c),o.__roots.push(a)})}function l(o){o.__roots.forEach(s=>{s.unmount()}),o.__roots=[]}return class extends e{static argsToParams(o){if(w.isValidElement(o[0])||w.isValidElement(o[1])){const s={};return["title","html","icon"].forEach((n,i)=>{o[i]!==void 0&&(s[n]=o[i])}),s}else return e.argsToParams(o)}_main(o,s){this.__roots=[],this.__params=Object.assign({},s,o);const[n,i]=r(this.__params),c=i.willOpen||C,d=i.didOpen||C,m=i.didDestroy||C;return super._main(Object.assign({},i,{willOpen:a=>{x(this,n),c(a)},didOpen:a=>{setTimeout(()=>{d(a)})},didDestroy:a=>{m(a),l(this)}}))}update(o){Object.assign(this.__params,o),l(this);const[s,n]=r(this.__params);super.update(n),x(this,s)}}}const P=()=>{const e=L();k.useEffect(()=>{e(S("Notifications"))});const[r,x]=k.useState([]),l=h=>{r.includes(h)?x(g=>g.filter(B=>B!==h)):x([...r,h])},o=T(h=>h.themeConfig.rtlClass)==="rtl",s=R(b),n=()=>{s.fire({title:"Hello, world! This is a toast message.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},i=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"top-end":"top-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},c=()=>{s.fire({title:"Example notification text.",toast:!0,position:"top",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},d=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"top-start":"top-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},m=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"bottom-end":"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},a=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},f=()=>{s.fire({title:"Example notification text.",toast:!0,position:o?"bottom-start":"bottom-end",showConfirmButton:!1,timer:3e3,showCloseButton:!0})},y=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!1})},v=()=>{s.fire({title:"Example notification text.",toast:!0,position:"bottom-start",showConfirmButton:!1,timer:5e3,showCloseButton:!0})},N=()=>{b.fire({toast:!0,position:"bottom-start",text:"Custom callback when action button is clicked.",showCloseButton:!0,showConfirmButton:!1}).then(h=>{b.fire({toast:!0,position:"bottom-start",text:"Thanks for clicking the Dismiss button!",showCloseButton:!0,showConfirmButton:!1})})},u=h=>{b.mixin({toast:!0,position:"bottom-start",showConfirmButton:!1,timer:3e3,showCloseButton:!0,customClass:{popup:`color-${h}`}}).fire({title:"Example notification text."})};return t.jsxs("div",{children:[t.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t.jsx("li",{children:t.jsx(E,{to:"#",className:"text-primary hover:underline",children:"Components"})}),t.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t.jsx("span",{children:"Notifications"})})]}),t.jsxs("div",{className:"pt-5 space-y-8",children:[t.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:t.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),t.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t.jsx("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),t.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-primary",onClick:n,children:"Open Toast"})})}),r.includes("code1")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage = () => {
    MySwal.fire({
        title: 'Hello, world! This is a toast message.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
    });
};
<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={showMessage}>
            Open Toast
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel lg:row-span-2",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Position"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsxs("div",{className:"mb-5",children:[t.jsx("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Top Position"}),t.jsxs("div",{className:"flex items-center justify-center mb-10 gap-2",children:[t.jsx("button",{type:"button",className:"btn btn-success",onClick:i,children:"Top Left"}),t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:c,children:"Top Center"}),t.jsx("button",{type:"button",className:"btn btn-info",onClick:d,children:"Top Right"})]}),t.jsx("h6",{className:"font-semibold text-base dark:text-white-light mb-3 text-center",children:"Bottom Position"}),t.jsxs("div",{className:"flex items-center justify-center gap-2",children:[t.jsx("button",{type:"button",className:"btn btn-dark",onClick:m,children:"Bottom Left"}),t.jsx("button",{type:"button",className:"btn btn-primary",onClick:a,children:"Bottom Center"}),t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:f,children:"Bottom Right"})]})]}),r.includes("code2")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

    const showMessage1 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-end' : 'top-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };
    const showMessage2 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage3 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'top-start' : 'top-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage4 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-end' : 'bottom-start',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage5 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

    const showMessage6 = () => {
        MySwal.fire({
            title: 'Example notification text.',
            toast: true,
            position: isRtl ? 'bottom-start' : 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            showCloseButton: true,
        });
    };

<div className="mb-5">
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Top Position</h6>
    <div className="flex items-center justify-center mb-10 gap-2">
        <button type="button" className="btn btn-success" onClick={showMessage1}>
            Top Left
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage2}>
            Top Center
        </button>
        <button type="button" className="btn btn-info" onClick={showMessage3}>
            Top Right
        </button>
    </div>
    <h6 className="font-semibold text-base dark:text-white-light mb-3 text-center">Bottom Position</h6>
    <div className="flex items-center justify-center gap-2">
        <button type="button" className="btn btn-dark" onClick={showMessage4}>
            Bottom Left
        </button>
        <button type="button" className="btn btn-primary" onClick={showMessage5}>
            Bottom Center
        </button>
        <button type="button" className="btn btn-secondary" onClick={showMessage6}>
            Bottom Right
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"No Action"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-success",onClick:y,children:"No Action"})})}),r.includes("code3")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage7 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: false,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={showMessage7}>
            No Action
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Click Callback"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-info",onClick:N,children:"Click Callback"})})}),r.includes("code4")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const clickCallable = () => {
    Swal.fire({
        toast: true,
        position: 'bottom-start',
        text: 'Custom callback when action button is clicked.',
        showCloseButton: true,
        showConfirmButton: false,
    }).then((result) => {
        Swal.fire({
            toast: true,
            position: 'bottom-start',
            text: 'Thanks for clicking the Dismiss button!',
            showCloseButton: true,
            showConfirmButton: false,
        });
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={clickCallable}>
            Click Callback
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Duration"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsx("div",{className:"flex items-center justify-center",children:t.jsx("button",{type:"button",className:"btn btn-dark",onClick:v,children:"Duration"})})}),r.includes("code5")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const showMessage8 = () => {
    MySwal.fire({
        title: 'Example notification text.',
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 5000,
        showCloseButton: true,
    });
};

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={showMessage8}>
            Duration
        </button>
    </div>
</div>`})})]}),t.jsxs("div",{className:"panel lg:col-span-2",children:[t.jsxs("div",{className:"flex items-center justify-between mb-5",children:[t.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Background Color"}),t.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:t.jsxs("span",{className:"flex items-center",children:[t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),t.jsx("div",{className:"mb-5",children:t.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast",children:[t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>u("primary"),children:"Primary"}),t.jsx("div",{id:"primary-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>u("secondary"),children:"Secondary"}),t.jsx("div",{id:"secondary-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-success",onClick:()=>u("success"),children:"Success"}),t.jsx("div",{id:"success-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>u("danger"),children:"Danger"}),t.jsx("div",{id:"danger-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-warning",onClick:()=>u("warning"),children:"Warning"}),t.jsx("div",{id:"warning-toast"})]}),t.jsxs("div",{children:[t.jsx("button",{type:"button",className:"btn btn-info",onClick:()=>u("info"),children:"Info"}),t.jsx("div",{id:"info-toast"})]})]})}),r.includes("code6")&&t.jsx(p,{children:t.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const coloredToast = (color: any) => {
    const toast = Swal.mixin({
        toast: true,
        position: 'bottom-start',
        showConfirmButton: false,
        timer: 3000,
        showCloseButton: true,
        customClass: {
            popup: \`color-\${color}\`,
        },
    });
    toast.fire({
        title: 'Example notification text.',
    });
};

<div className="mb-5">
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:flex items-center justify-center gap-2 colored-toast">
        <div>
            <button type="button" className="btn btn-primary" onClick={() => coloredToast('primary')}>
                Primary
            </button>
            <div id="primary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-secondary" onClick={() => coloredToast('secondary')}>
                Secondary
            </button>
            <div id="secondary-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-success" onClick={() => coloredToast('success')}>
                Success
            </button>
            <div id="success-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-danger" onClick={() => coloredToast('danger')}>
                Danger
            </button>
            <div id="danger-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-warning" onClick={() => coloredToast('warning')}>
                Warning
            </button>
            <div id="warning-toast"></div>
        </div>
        <div>
            <button type="button" className="btn btn-info" onClick={() => coloredToast('info')}>
                Info
            </button>
            <div id="info-toast"></div>
        </div>
    </div>
</div>`})})]})]})]})]})};export{P as default};
