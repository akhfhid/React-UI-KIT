import{u as y,r as a,s as N,j as e,L as _}from"./main-Bbx2KXsb.js";import{C as h}from"./Highlight-N3fjPXQz.js";const M=()=>{const u=y();a.useEffect(()=>{u(N("Countdown"))});const[l,c]=a.useState([]),m=s=>{l.includes(s)?c(d=>d.filter(t=>t!==s)):c([...l,s])},[x,p]=a.useState({days:null,hours:null,minutes:null,seconds:null}),[b,f]=a.useState(null),w=()=>{const s=new Date;s.setDate(s.getDate()+3);const d=s.getTime();let t={};f(setInterval(()=>{const i=new Date().getTime(),r=d-i;t.days=Math.floor(r/(1e3*60*60*24)),t.hours=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),t.minutes=Math.floor(r%(1e3*60*60)/(1e3*60)),t.seconds=Math.floor(r%(1e3*60)/1e3),p(n=>({...n,...t})),r<0&&clearInterval(b)}))};a.useEffect(()=>{w(),k()},[]);const[o,g]=a.useState({days:null,hours:null,minutes:null,seconds:null}),[j,v]=a.useState(null),k=()=>{const s=new Date;s.setFullYear(s.getFullYear()+1);const d=s.getTime();let t={};v(setInterval(()=>{const i=new Date().getTime(),r=d-i;t.days=Math.floor(r/(1e3*60*60*24)),t.hours=Math.floor(r%(1e3*60*60*24)/(1e3*60*60)),t.minutes=Math.floor(r%(1e3*60*60)/(1e3*60)),t.seconds=Math.floor(r%(1e3*60)/1e3),g(n=>({...n,...t})),r<0&&clearInterval(j)}))};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(_,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Countdown"})})]}),e.jsxs("div",{className:"pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Countdown"}),e.jsx("button",{onClick:()=>m("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsxs("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.days})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.hours})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.minutes})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:x.seconds})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),l.includes("code1")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo1, setDemo1] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer1, setTimer1] = useState<any>(null);

    const setTimerDemo1 = () => {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        const countDownDate = date.getTime();

        let updatedValue: any = {};
        setTimer1(
            setInterval(() => {
                const now = new Date().getTime();

                const distance = countDownDate - now;

                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo1((demo1: any) => ({
                    ...demo1,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer1);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo1();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>
`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Circle Countdown"}),e.jsx("button",{onClick:()=>m("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsxs("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.days})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.hours})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.minutes})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e.jsx("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.seconds})}),e.jsx("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),l.includes("code2")&&e.jsx(h,{children:e.jsx("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo2, setDemo2] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer2, setTimer2] = useState<any>(null);

    const setTimerDemo2 = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const countDownDate = date.getTime();

        let updatedValue: any = {};

        setTimer2(
            setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo2((demo2: any) => ({
                    ...demo2,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer2);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo2();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>

`})})]})]})]})};export{M as default};
