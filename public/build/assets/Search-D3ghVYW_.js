import{r as a,R as A,u as E,s as W,j as e,L as M}from"./main-Bbx2KXsb.js";import{C as k}from"./Highlight-N3fjPXQz.js";function j(s,r,l){return r in s?Object.defineProperty(s,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[r]=l,s}var C={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},S=function(s){var r,l=s.children,d=s.onClickAway,g=s.focusEvent,h=g===void 0?"focusin":g,v=s.mouseEvent,c=v===void 0?"click":v,u=s.touchEvent,m=u===void 0?"touchend":u,p=a.useRef(null),b=a.useRef(null),t=a.useRef(!1);a.useEffect(function(){return setTimeout(function(){t.current=!0},0),function(){t.current=!1}},[]);var f=function(n){return function(o){b.current=o.target;var i=l==null?void 0:l.props[n];i&&i(o)}};a.useEffect(function(){var n,o,i=(n=(o=p.current)===null||o===void 0?void 0:o.ownerDocument)!==null&&n!==void 0?n:document,x=function(y){t.current&&(p.current&&p.current.contains(y.target)||b.current===y.target||!i.contains(y.target)||d(y))};return i.addEventListener(c,x),i.addEventListener(m,x),i.addEventListener(h,x),function(){i.removeEventListener(c,x),i.removeEventListener(m,x),i.removeEventListener(h,x)}},[h,c,d,m]);var w=C[c],L=C[m],N=C[h];return A.Children.only(a.cloneElement(l,(j(r={ref:function(n){p.current=n;var o=l.ref;typeof o=="function"?o(n):o&&(o.current=n)}},N,f(N)),j(r,w,f(w)),j(r,L,f(L)),r)))};S.displayName="ClickAwayListener";const _=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],$=()=>{const s=E();a.useEffect(()=>{s(W("Search"))});const[r,l]=a.useState([]),[d,g]=a.useState(""),[h,v]=a.useState(_),c=t=>{r.includes(t)?l(f=>f.filter(w=>w!==t)):l([...r,t])};a.useEffect(()=>{v(()=>_.filter(t=>t.name.toLowerCase().includes(d.toLowerCase())||t.email.toLowerCase().includes(d.toLowerCase())))},[d]);const[u,m]=a.useState(!1),p=()=>{m(!0)},b=()=>{m(!1)};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(M,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Search"})})]}),e.jsxs("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel lg:row-span-2",id:"live",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Live Search"}),e.jsx("button",{onClick:()=>{c("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsxs("div",{className:"mb-5 space-y-5",children:[e.jsx("form",{className:"mx-auto w-full sm:w-1/2 mb-5",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:d,placeholder:"Search Attendees...",className:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11",onChange:t=>g(t.target.value)}),e.jsx("button",{type:"button",className:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e.jsx("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})}),e.jsx("div",{className:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block",children:h.map(t=>e.jsxs("div",{className:`bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                                         text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]`,children:[e.jsx("div",{className:"user-profile",children:e.jsx("img",{src:`/assets/images/${t.thumb}`,alt:"img",className:"w-8 h-8 rounded-md object-cover"})}),e.jsx("div",{children:t.name}),e.jsx("div",{children:t.email}),e.jsx("div",{className:`badge ${t.statusClass} border-2 border-dashed`,children:t.status}),e.jsx("div",{className:"cursor-pointer",children:e.jsxs("svg",{className:"w-6 h-6 opacity-70",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"5",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{opacity:"0.5",cx:"12",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("circle",{cx:"19",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"})]})})]},t.email))})]}),r.includes("code1")&&e.jsx(k,{children:e.jsx("pre",{children:`import { useState, useEffect } from 'react';

const items = [
    {
        thumb: 'profile-5.jpeg',
        name: 'Alan Green',
        email: 'alan@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-11.jpeg',
        name: 'Linda Nelson',
        email: 'Linda@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
    {
        thumb: 'profile-12.jpeg',
        name: 'Lila Perry',
        email: 'Lila@mail.com',
        status: 'Closed',
        statusClass: 'badge badge-outline-warning',
    },
    {
        thumb: 'profile-3.jpeg',
        name: 'Andy King',
        email: 'Andy@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-15.jpeg',
        name: 'Jesse Cory',
        email: 'Jesse@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
];

const [search, setSearch] = useState<string>('');
const [filteredItems, setFilteredItems] = useState<any>(items);

useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
}, [search]);


<div className="mb-5 space-y-5">
    <form className="mx-auto w-full sm:w-1/2 mb-5">
        <div className="relative">
            <input
                type="text"
                value={search}
                placeholder="Search Attendees..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                <svg>...</svg>
            </button>
        </div>
    </form>
    <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
        {filteredItems.map((item: any) => {
            return (
                <div
                    key={item.email}
                    className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                        text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"
                >
                    <div className="user-profile">
                        <img src={\`/assets/images/\${item.thumb}\`} alt="img" className="w-8 h-8 rounded-md object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div className={\`badge \${item.statusClass} border-2 border-dashed\`}>{item.status}</div>
                    <div className="cursor-pointer">
                        <svg>...</svg>
                    </div>
                </div>
            );
        })}
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Overlay"}),e.jsx("button",{onClick:()=>{c("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsx("div",{className:"mb-5 space-y-5",children:e.jsx("form",{children:e.jsx(S,{onClickAway:b,children:e.jsxs("div",{className:"search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",onClick:p,children:[e.jsx("input",{type:"text",placeholder:"Search...",className:`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${u?"!block":""}`}),e.jsx("button",{type:"button",className:`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${u?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}`,children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e.jsx("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})})})}),r.includes("code2")&&e.jsx(k,{children:e.jsx("pre",{children:`import { useState} from 'react';

const [focus, setFocus] = useState(false);

const overlayClickAway = () => {
    setFocus(false);
};

<form>
    <ClickAwayListener onClickAway={overlayClickAway}>
        <div className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" onClick={overlaySearchClick}>
            <input
                type="text"
                placeholder="Search..."
                className={\`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${u?"!block":""}\`}
            />
            <button
                type="button"
                className={\`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${u?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}\`}
            >
                <svg>...</svg>
            </button>
        </div>
    </ClickAwayListener>
</form>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Search Box"}),e.jsx("button",{onClick:()=>{c("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsx("div",{className:"mb-5 space-y-5",children:e.jsx("form",{children:e.jsxs("div",{className:"relative border border-white-dark/20  w-full flex",children:[e.jsx("button",{type:"submit",placeholder:"Let's find your question in fast way",className:"text-primary m-auto p-3 flex items-center justify-center",children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e.jsx("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("input",{type:"text",placeholder:"Let's find your question in fast way",className:"form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"})]})})}),r.includes("code3")&&e.jsx(k,{children:e.jsx("pre",{children:`import { useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';

const [focus, setFocus] = useState(false);

const overlaySearchClick = () => {
        setFocus(true);
};

<form>
    <div className="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center">
            <svg>...</svg>
        </button>
        <input
            type="text"
            placeholder="Let's find your question in fast way"
            className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
        />
    </div>
</form>`})})]})]})]})};export{$ as default};
