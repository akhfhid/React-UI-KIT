import{u as J,r as F,s as K,a as Q,j as e,L as U}from"./main-Bbx2KXsb.js";import{g as P,S as f,N as S,P as j,a as u}from"./pagination-aXbME_b5.js";import{C as N}from"./Highlight-N3fjPXQz.js";function R(E){let{swiper:t,extendParams:l,on:i,emit:o,params:n}=E;t.autoplay={running:!1,paused:!1,timeLeft:0},l({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let s,a,w=n&&n.autoplay?n.autoplay.delay:3e3,k=n&&n.autoplay?n.autoplay.delay:3e3,p,v=new Date().getTime(),M,L,h,B,T,c,I;function z(r){!t||t.destroyed||!t.wrapperEl||r.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",z),!(I||r.detail&&r.detail.bySwiperTouchMove)&&x())}const W=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?M=!0:M&&(k=p,M=!1);const r=t.autoplay.paused?p:v+k-new Date().getTime();t.autoplay.timeLeft=r,o("autoplayTimeLeft",r,r/w),a=requestAnimationFrame(()=>{W()})},_=()=>{let r;return t.virtual&&t.params.virtual.enabled?r=t.slides.filter(d=>d.classList.contains("swiper-slide-active"))[0]:r=t.slides[t.activeIndex],r?parseInt(r.getAttribute("data-swiper-autoplay"),10):void 0},C=r=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(a),W();let m=typeof r>"u"?t.params.autoplay.delay:r;w=t.params.autoplay.delay,k=t.params.autoplay.delay;const d=_();!Number.isNaN(d)&&d>0&&typeof r>"u"&&(m=d,w=d,k=d),p=m;const y=t.params.speed,$=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(y,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,y,!0,!0),o("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(y,!0,!0),o("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,y,!0,!0),o("autoplay")),t.params.cssMode&&(v=new Date().getTime(),requestAnimationFrame(()=>{C()})))};return m>0?(clearTimeout(s),s=setTimeout(()=>{$()},m)):requestAnimationFrame(()=>{$()}),m},D=()=>{v=new Date().getTime(),t.autoplay.running=!0,C(),o("autoplayStart")},b=()=>{t.autoplay.running=!1,clearTimeout(s),cancelAnimationFrame(a),o("autoplayStop")},g=(r,m)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(s),r||(c=!0);const d=()=>{o("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",z):x()};if(t.autoplay.paused=!0,m){T&&(p=t.params.autoplay.delay),T=!1,d();return}p=(p||t.params.autoplay.delay)-(new Date().getTime()-v),!(t.isEnd&&p<0&&!t.params.loop)&&(p<0&&(p=0),d())},x=()=>{t.isEnd&&p<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(v=new Date().getTime(),c?(c=!1,C(p)):C(),t.autoplay.paused=!1,o("autoplayResume"))},A=()=>{if(t.destroyed||!t.autoplay.running)return;const r=P();r.visibilityState==="hidden"&&(c=!0,g(!0)),r.visibilityState==="visible"&&x()},V=r=>{r.pointerType==="mouse"&&(c=!0,I=!0,!(t.animating||t.autoplay.paused)&&g(!0))},O=r=>{r.pointerType==="mouse"&&(I=!1,t.autoplay.paused&&x())},q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",V),t.el.addEventListener("pointerleave",O))},H=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",V),t.el.removeEventListener("pointerleave",O))},Z=()=>{P().addEventListener("visibilitychange",A)},G=()=>{P().removeEventListener("visibilitychange",A)};i("init",()=>{t.params.autoplay.enabled&&(q(),Z(),D())}),i("destroy",()=>{H(),G(),t.autoplay.running&&b()}),i("_freeModeStaticRelease",()=>{(h||c)&&x()}),i("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?b():g(!0,!0)}),i("beforeTransitionStart",(r,m,d)=>{t.destroyed||!t.autoplay.running||(d||!t.params.autoplay.disableOnInteraction?g(!0,!0):b())}),i("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){b();return}L=!0,h=!1,c=!1,B=setTimeout(()=>{c=!0,h=!0,g(!0)},200)}}),i("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!L)){if(clearTimeout(B),clearTimeout(s),t.params.autoplay.disableOnInteraction){h=!1,L=!1;return}h&&t.params.cssMode&&x(),h=!1,L=!1}}),i("slideChange",()=>{t.destroyed||!t.autoplay.running||(T=!0)}),Object.assign(t.autoplay,{start:D,stop:b,pause:g,resume:x})}const te=()=>{const E=J();F.useEffect(()=>{E(K("Carousel"))});const t=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],l=Q(s=>s.themeConfig),[i,o]=F.useState([]),n=s=>{i.includes(s)?o(a=>a.filter(w=>w!==s)):o([...i,s])};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(U,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Carousel"})})]}),e.jsxs("div",{className:"pt-5 space-y-8",children:[e.jsxs("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e.jsx("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://swiperjs.com/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://swiperjs.com/react"})]}),e.jsxs("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e.jsx("button",{onClick:()=>n("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsxs(f,{modules:[S,j],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},className:"swiper max-w-3xl mx-auto mb-5",id:"slider1",dir:l.rtlClass,children:[e.jsx("div",{className:"swiper-wrapper",children:t.map((s,a)=>e.jsx(u,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"})},a))}),e.jsx("button",{className:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e.jsx("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{className:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e.jsx("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code1")&&e.jsx(N,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Autopaly"}),e.jsx("button",{onClick:()=>n("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsxs(f,{modules:[S,R,j],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},pagination:{clickable:!0},autoplay:{delay:2e3},className:"swiper max-w-3xl mx-auto mb-5",id:"slider2",dir:l.rtlClass,children:[e.jsx("div",{className:"swiper-wrapper",children:t.map((s,a)=>e.jsxs(u,{children:[e.jsx("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"}),e.jsxs("div",{className:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12",children:[e.jsx("div",{className:"sm:text-3xl text-base font-bold",children:"This is blog Image"}),e.jsx("div",{className:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}),e.jsx("button",{type:"button",className:"mt-4 btn btn-primary",children:"Learn more"})]})]},a))}),e.jsx("button",{className:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e.jsx("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{className:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e.jsx("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code2")&&e.jsx(N,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider2"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                        <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                        <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                        <button type="button" className="mt-4 btn btn-primary">
                            Learn more
                        </button>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),e.jsxs("div",{className:"panel relative",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e.jsx("button",{onClick:()=>n("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsx(f,{modules:[j,R],pagination:{clickable:!0},autoplay:{delay:2e3},direction:"vertical",className:"max-w-3xl mx-auto mb-5",id:"slider3",dir:l.rtlClass,children:e.jsx("div",{className:"swiper-wrapper",children:t.map((s,a)=>e.jsxs(u,{children:[e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImage"}),e.jsx("div",{className:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center",children:e.jsx("div",{className:"sm:text-xl text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})})]},a))})},l.rtlClass==="rtl"?"true":"false"),i.includes("code3")&&e.jsx(N,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loop"}),e.jsx("button",{onClick:()=>n("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e.jsxs("div",{className:"swiper max-w-3xl mx-auto mb-5",id:"slider4",children:[e.jsx("div",{className:"swiper-wrapper",children:e.jsxs(f,{modules:[S,j],slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},dir:l.rtlClass,children:[e.jsxs(u,{children:[e.jsx("img",{src:"/assets/images/carousel1.jpeg",className:"w-full",alt:"slide1"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 1"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),e.jsxs(u,{children:[e.jsx("img",{src:"/assets/images/carousel2.jpeg",className:"w-full",alt:"slide2"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 2"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),e.jsxs(u,{children:[e.jsx("img",{src:"/assets/images/carousel3.jpeg",className:"w-full",alt:"slide3"}),e.jsxs("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e.jsx("div",{className:"text-3xl font-bold",children:"Slide 3"}),e.jsx("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]})]},l.rtlClass==="rtl"?"true":"false")}),e.jsx("button",{className:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e.jsx("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{className:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e.jsx("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),i.includes("code4")&&e.jsx(N,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

<div className="swiper max-w-3xl mx-auto mb-5" id="slider4">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            <SwiperSlide>
                <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 1</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 2</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 3</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]}),e.jsxs("div",{className:"panel lg:col-span-2",children:[e.jsxs("div",{className:"flex items-center justify-between mb-5",children:[e.jsx("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple Slides"}),e.jsx("button",{onClick:()=>n("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsxs("div",{className:"swiper",id:"slider5",children:[e.jsx("div",{className:"swiper-wrapper",children:e.jsxs(f,{modules:[S,j],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},dir:l.rtlClass,children:[t.map((s,a)=>e.jsx(u,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},a)),t.map((s,a)=>e.jsx(u,{children:e.jsx("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},a))]},l.rtlClass==="rtl"?"true":"false")}),e.jsx("button",{className:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e.jsx("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("button",{className:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e.jsx("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),i.includes("code5")&&e.jsx(N,{children:e.jsx("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

<div className="swiper" id="slider5">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next-ex5',
                prevEl: '.swiper-button-prev-ex5',
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]})]})]})]})};export{te as default};
