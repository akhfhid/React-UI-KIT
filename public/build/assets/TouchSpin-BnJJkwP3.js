import{u as F,r as t,s as T,j as e,L as _}from"./main-Bbx2KXsb.js";import{C as n}from"./Highlight-N3fjPXQz.js";const A=()=>{const W=F();t.useEffect(()=>{W(T("TouchSpin"))});const[r,y]=t.useState([]),s=l=>{r.includes(l)?y(O=>O.filter(z=>z!==l)):y([...r,l])},[o,h]=t.useState(0),[i,v]=t.useState(0),[d,j]=t.useState(0),[a,f]=t.useState(0),[c,k]=t.useState(0),[u,g]=t.useState(0),[m,N]=t.useState(0),[x,w]=t.useState(0),[b,S]=t.useState(0),[p,C]=t.useState(0),V=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],[B,M]=t.useState(""),L=l=>(S(l),M(V[l]));return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(_,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"TouchSpin"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Button Spin"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>h(o>0?o-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:0,max:100,readOnly:!0,value:o,onWheel:()=>h(o>0?o-1:0)}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>h(o<100?o+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code1")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value1, setValue1] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input
        type="number"
        placeholder="55"
        className="form-input rounded-none text-center"
        min={0}
        max={100}
        readOnly
        value={value1}
        onWheel={() => setValue1(value1 > 0 ? value1 - 1 : 0)}
    />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue1(value1 < 100 ? value1 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Spin button with step of 5"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>v(i>0?i-5:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"5",step:"5",min:"0",max:"50",readOnly:!0,className:"form-input rounded-none text-center",value:i}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>v(i<100?i+5:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code2")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value2, setValue2] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue2(value2 > 0 ? value2 - 5 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="5" step="5" min="0" max="50" readOnly className="form-input rounded-none text-center" value={value2} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue2(value2 < 100 ? value2 + 5 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Wrapping value spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>j(d>0?d-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"_ _",className:"form-input rounded-none text-center",min:"0",max:"20",readOnly:!0,value:d}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>j(d<100?d+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code3")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value3, setValue3] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue3(value3 > 0 ? value3 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="_ _" className="form-input rounded-none text-center" min="0" max="20" readOnly value={value3} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue3(value3 < 100 ? value3 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel lg:row-span-2",id:"size",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Size"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"sizeLarge",children:"Large size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>f(a>0?a-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{id:"sizeLarge",type:"number",placeholder:"55",className:"form-input form-input-lg rounded-none text-center",min:"0",max:"25",readOnly:!0,value:a}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>f(a<100?a+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("label",{htmlFor:"sizeDefault",children:"Default size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>k(c>0?c-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:c}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>k(c<100?c+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"sizeSmall",children:"Small size"}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>g(u>0?u-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{id:"sizeSmall",type:"number",placeholder:"55",className:"form-input form-input-sm rounded-none text-center",min:"0",max:"25",readOnly:!0,value:u}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>g(u<100?u+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})]})]}),r.includes("code4")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value4, setValue4] = useState<any>(0);
const [value5, setValue5] = useState<any>(0);
const [value6, setValue6] = useState<any>(0);

{/*large*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue4(value4 > 0 ? value4 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeLarge" type="number" placeholder="55" className="form-input form-input-lg rounded-none text-center" min="0" max="25" readOnly value={value4} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue4(value4 < 100 ? value4 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*default*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue5(value5 > 0 ? value5 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value5} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue5(value5 < 100 ? value5 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>

{/*small*/}
<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue6(value6 > 0 ? value6 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input id="sizeSmall" type="number" placeholder="55" className="form-input form-input-sm rounded-none text-center" min="0" max="25" readOnly value={value6} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue6(value6 < 100 ? value6 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"inline_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>N(m>0?m-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:m}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>N(m<100?m+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code5")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value7, setValue7] = useState<any>(0);

<div className="inline-flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => setValue7(value7 > 0 ? value7 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value7} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => setValue7(value7 < 100 ? value7 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",id:"vertical_buttons",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"inline-flex flex-col w-[50px]",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary",onClick:()=>w(x>0?x-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"text",placeholder:"55",className:"form-input rounded-none text-center px-2",min:"0",max:"25",readOnly:!0,value:x}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary",onClick:()=>w(x<100?x+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code6")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';

const [value8, setValue8] = useState<any>(0);

<div className="inline-flex flex-col w-[50px]">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary"
        onClick={() => setValue8(value8 > 0 ? value8 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="55" className="form-input rounded-none text-center px-2" min="0" max="25" readOnly value={value8} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary"
        onClick={() => setValue8(value8 < 100 ? value8 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"space-y-8",id:"change_button_color",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Text with spin button"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:()=>L(b>0?b-1:6),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"text",placeholder:"Sunday",className:"form-input rounded-none text-center",min:"0",max:"6",readOnly:!0,value:B}),e.jsx("button",{type:"button",className:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:()=>L(b<6?b+1:0),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code7")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value9, setValue9] = useState<any>(0);
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const [day, setDay] = useState('');

const dayFormatter = (day: number) => {
    setValue9(day);
    return setDay(days[day]);
};

<div className="flex">
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
        onClick={() => dayFormatter(value9 > 0 ? value9 - 1 : 6)}
    >
        <svg> ... </svg>
    </button>
    <input type="text" placeholder="Sunday" className="form-input rounded-none text-center" min="0" max="6" readOnly value={day} />
    <button
        type="button"
        className="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
        onClick={() => dayFormatter(value9 < 6 ? value9 + 1 : 0)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Change button class"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>s("code8"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{type:"button",className:"bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger",onClick:()=>C(p>0?p-1:0),children:e.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),e.jsx("input",{type:"number",placeholder:"55",className:"form-input rounded-none text-center",min:"0",max:"25",readOnly:!0,value:p}),e.jsx("button",{type:"button",className:"bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning",onClick:()=>C(p<100?p+1:100),children:e.jsxs("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]})})}),r.includes("code8")&&e.jsx(n,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState } from 'react';
const [value10, setValue10] = useState<any>(0);

<div className="flex">
    <button
        type="button"
        className="bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger"
        onClick={() => setValue10(value10 > 0 ? value10 - 1 : 0)}
    >
        <svg> ... </svg>
    </button>
    <input type="number" placeholder="55" className="form-input rounded-none text-center" min="0" max="25" readOnly value={value10} />
    <button
        type="button"
        className="bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning"
        onClick={() => setValue10(value10 < 100 ? value10 + 1 : 100)}
    >
        <svg> ... </svg>
    </button>
</div>`})})]})]})]})]})};export{A as default};
