import{u as p,r as h,s as w,j as e,L as b}from"./main-Bbx2KXsb.js";import{C as l}from"./Highlight-N3fjPXQz.js";import{S as t}from"./sweetalert2.esm.all-BGf-Fe8G.js";const C=()=>{const x=p();h.useEffect(()=>{x(w("Sweet Alerts"))});const[i,u]=h.useState([]),n=s=>{i.includes(s)?u(r=>r.filter(o=>o!==s)):u([...i,s])},a=async s=>{if(s===1)t.fire({title:"Saved succesfully",padding:"2em",customClass:"sweet-alerts"});else if(s===2)t.fire({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em",customClass:"sweet-alerts"});else if(s===3){const r="https://api.ipify.org?format=json";t.fire({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,customClass:"sweet-alerts",preConfirm:async()=>{try{const d=await(await fetch(r)).json();t.fire({title:d.ip,customClass:"sweet-alerts"})}catch{t.fire({icon:"error",title:"Unable to get your public IP",customClass:"sweet-alerts"})}}})}else if(s===4)t.fire({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em",customClass:"sweet-alerts"});else if(s===5){const r=["1","2","3"],o=t.mixin({confirmButtonText:"Next →",showCancelButton:!0,progressSteps:r,input:"text",inputAttributes:{required:"true"},validationMessage:"This field is required",padding:"2em",customClass:"sweet-alerts"}),d=[];let c;for(c=0;c<r.length;){const m=await o.fire({title:`Question ${r[c]}`,text:c===0?"Chaining swal modals is easy.":"",inputValue:d[c],showCancelButton:c>0,currentProgressStep:c,customClass:"sweet-alerts"});if(m.value)d[c]=m.value,c++;else if(m.dismiss===t.DismissReason.cancel)c--;else break}c===r.length&&t.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(d)+"</pre>",confirmButtonText:"Lovely!",customClass:"sweet-alerts"})}else if(s===6)t.fire({title:"Custom animation with Animate.css",showClass:{popup:"animate__animated animate__flip"},hideClass:{popup:"animate__animated animate__fadeOutUp"},padding:"2em",customClass:"sweet-alerts"});else if(s===7){let r;t.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{var d;const o=(d=t.getHtmlContainer())==null?void 0:d.querySelector("b");r=setInterval(()=>{o.textContent=t.getTimerLeft()},100)},willClose:()=>{clearInterval(r)}}).then(o=>{o.dismiss===t.DismissReason.timer&&console.log("I was closed by the timer")})}else if(s===8)t.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/custom-swal.svg",imageWidth:224,imageHeight:"auto",imageAlt:"Custom image",padding:"2em",customClass:"sweet-alerts"});else if(s===9)t.fire({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i className="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i className="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em",customClass:"sweet-alerts"});else if(s===10)t.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(r=>{r.value&&t.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})});else if(s===11){const r=t.mixin({customClass:{confirmButton:"btn btn-secondary",cancelButton:"btn btn-dark ltr:mr-3 rtl:ml-3",popup:"sweet-alerts"},buttonsStyling:!1});r.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(o=>{o.value?r.fire("Deleted!","Your file has been deleted.","success"):o.dismiss===t.DismissReason.cancel&&r.fire("Cancelled","Your imaginary file is safe :)","error")})}else s===12?t.fire({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal sweet-alerts",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):s===13?t.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:;">Why do I have this issue?</a>',padding:"2em",customClass:"sweet-alerts"}):s===14?t.fire({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,padding:"2em",customClass:"sweet-alerts"}):s===15&&t.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Signed in successfully",padding:"10px 20px"})};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e.jsx("li",{children:e.jsx(b,{to:"/components/sweetalert",className:"text-primary hover:underline",children:"Components"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Sweet Alerts"})})]}),e.jsxs("div",{className:"sweet-alerts space-y-8 pt-5",children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Basic message"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>a(1),children:"Basic message"})})}),i.includes("code1")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 1) {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
<div className="flex items-center justify-center">
    <button type="button" className="btn btn-primary" onClick={() => showAlert(1)}>
        Basic message
    </button>
</div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Success message"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a(2),children:"Success message!"})})}),i.includes("code2")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 2) {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
<div className="flex items-center justify-center">
    <button type="button" className="btn btn-primary" onClick={() => showAlert(1)}>
        Basic message
    </button>
</div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Dynamic queue"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-success",onClick:()=>a(3),children:"Dynamic queue"})})}),i.includes("code3")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 3) {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: async () => {
                try {
                    const response = await fetch(ipAPI);
                    const data = await response.json();
                    Swal.fire({
                        title: data.ip,
                        customClass: 'sweet-alerts',
                    });
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unable to get your public IP',
                        customClass: 'sweet-alerts',
                    });
                }
            },
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert(3)}>
            Dynamic queue
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"A title with a text under"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>a(4),children:"Title & text"})})}),i.includes("code4")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 4) {
        Swal.fire({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-danger" onClick={() => showAlert(4)}>
            Title & text
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Chaining modals (queue)"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-warning",onClick:()=>a(5),children:"Chaining modals (queue)"})})}),i.includes("code5")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

if (type === 5) {
    const steps = ['1', '2', '3'];
    const swalQueueStep = Swal.mixin({
        confirmButtonText: 'Next →',
        showCancelButton: true,
        progressSteps: steps,
        input: 'text',
        inputAttributes: {
            required: 'true',
        },
        validationMessage: 'This field is required',
        padding: '2em',
        customClass: 'sweet-alerts',
    });
    const values: any = [];
    let currentStep;
    for (currentStep = 0; currentStep < steps.length; ) {
        const result = await swalQueueStep.fire({
            title: \`Question \${steps[currentStep]}\`,
            text: currentStep === 0 ? 'Chaining swal modals is easy.' : '',
            inputValue: values[currentStep],
            showCancelButton: currentStep > 0,
            currentProgressStep: currentStep,
            customClass: 'sweet-alerts',
        });
        if (result.value) {
            values[currentStep] = result.value;
            currentStep++;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            currentStep--;
        } else {
            break;
        }
    }
    if (currentStep === steps.length) {
        Swal.fire({
            title: 'All done!',
            padding: '2em',
            html: 'Your answers: <pre className='language-typescript'>' + JSON.stringify(values) + '</pre>',
            confirmButtonText: 'Lovely!',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-warning" onClick={() => showAlert(5)}>
            Chaining modals (queue)
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom animation"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-info",onClick:()=>a(6),children:"Custom animation"})}),e.jsx("div",{className:"fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300",children:e.jsxs("div",{className:"panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]",children:[e.jsx("h3",{className:"mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light",children:"Custom animation with Animate.css"}),e.jsx("button",{type:"button",className:"btn btn-info",children:"Ok"})]})})]}),i.includes("code6")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 6) {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__flip',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert(6)}>
            Custom animation
        </button>
    </div>
    <div className="fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300">
        <div className="panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]">
            <h3 className="mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light">Custom animation with Animate.css</h3>
            <button type="button" className="btn btn-info">
                Ok
            </button>
        </div>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Message with auto close timer"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>a(7),children:"Message timer"})})}),i.includes("code7")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 7) {
        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                //   Swal.showLoading();
                const b: any = Swal.getHtmlContainer()?.querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={() => showAlert(7)}>
            Message timer
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Message with custom image"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code8"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a(8),children:"Message with custom image"})})}),i.includes("code8")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 8) {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '/assets/images/custom-swal.svg',
            imageWidth: 224,
            imageHeight: 'auto',
            imageAlt: 'Custom image',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert(8)}>
            Message with custom image
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom HTML description and buttons"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code9"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-danger",onClick:()=>a(9),children:"Custom Description & buttons"})})}),i.includes("code9")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 9) {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i className="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-danger" onClick={() => showAlert(9)}>
            Custom Description & buttons
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:'Warning message, with "Confirm" button'}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code10"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-success",onClick:()=>a(10),children:"Confirm"})})}),i.includes("code10")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert(10)}>
            Confirm
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:'Execute something else for "Cancel".'}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code11"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-warning",onClick:()=>a(11),children:'Addition else for "Cancel".'})})}),i.includes("code11")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 11) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                popup: 'sweet-alerts',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
                padding: '2em',
            })
            .then((result) => {
                if (result.value) {
                    swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-warning" onClick={() => showAlert(11)}>
            Addition else for "Cancel".
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"A message with custom width, padding and background"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code12"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-info",onClick:()=>a(12),children:"Custom Message"})})}),i.includes("code12")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 12) {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert(12)}>
            Custom Message
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"With Footer"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code13"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{type:"button",className:"btn btn-dark",onClick:()=>a(13),children:"With Footer"})})}),i.includes("code13")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 13) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={() => showAlert(13)}>
            With Footer
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"RTL support"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code14"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",id:"rtl-container",children:e.jsx("button",{type:"button",className:"btn btn-primary",onClick:()=>a(14),children:"RTL"})})}),i.includes("code14")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 14) {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-primary" onClick={() => showAlert(14)}>
            RTL
        </button>
    </div>
</div>`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Mixin"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>n("code15"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx("div",{className:"flex items-center justify-center",id:"rtl-container",children:e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>a(15),children:"Mixin"})})}),i.includes("code15")&&e.jsx(l,{children:e.jsx("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 15) {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '10px 20px',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert(15)}>
            Mixin
        </button>
    </div>
</div>
    `})})]})]})]})]})};export{C as default};
