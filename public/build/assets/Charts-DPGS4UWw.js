import{u as R,r as L,s as W,a as M,j as e,L as z}from"./main-Bbx2KXsb.js";import{C as i}from"./Highlight-N3fjPXQz.js";import{_ as l}from"./react-apexcharts.min-B_P65Ruu.js";const J=()=>{const A=R();L.useEffect(()=>{A(W("Charts"))});const[s,c]=L.useState([]),o=r=>{s.includes(r)?c(d=>d.filter(n=>n!==r)):c([...s,r])},t=M(r=>r.themeConfig.theme==="dark"||r.themeConfig.isDarkMode),a=M(r=>r.themeConfig.rtlClass)==="rtl",h={series:[{name:"Sales",data:[45,55,75,25,45,110]}],options:{chart:{height:300,type:"line",toolbar:!1},colors:["#4361EE"],tooltip:{marker:!1,y:{formatter(r){return"$"+r}}},stroke:{width:2,curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","June"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!a,labels:{offsetX:a?-20:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}}}},p={series:[{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]}],options:{chart:{type:"area",height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!a,labels:{offsetX:a?-40:0}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],legend:{horizontalAlign:"left"},grid:{borderColor:t?"#191E3A":"#E0E6ED",xaxis:{lines:{show:!1}}},tooltip:{theme:t?"dark":"light"}}},m={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}],options:{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca","#e7515a"],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!a,labels:{offsetX:a?-10:0}},tooltip:{theme:t?"dark":"light",y:{formatter:function(r){return r}}}}},x={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]}],options:{chart:{height:300,type:"bar",stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#3b3f5c"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!a,labels:{offsetX:a?-20:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},legend:{position:"right",offsetY:40},tooltip:{theme:t?"dark":"light"},fill:{opacity:.8}}},b={series:[{name:"Sales",data:[44,55,41,67,22,43,21,70]}],options:{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:1},colors:["#4361ee"],xaxis:{categories:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!a,reversed:!!a},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},plotOptions:{bar:{horizontal:!0}},fill:{opacity:.8}}},g={series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],options:{chart:{height:300,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#2196f3","#00ab55","#4361ee"],stroke:{width:[0,2,2],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[1,.25,1]},labels:["01/01/2022","02/01/2022","03/01/2022","04/01/2022","05/01/2022","06/01/2022","07/01/2022","08/01/2022","09/01/2022","10/01/2022","11/01/2022"],markers:{size:0},xaxis:{type:"datetime",axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{title:{text:"Points"},min:0,opposite:!!a,labels:{offsetX:a?-10:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},tooltip:{shared:!0,intersect:!1,theme:t?"dark":"light"},legend:{itemMargin:{horizontal:4,vertical:8}}}},f={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],options:{chart:{height:300,type:"radar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee"],xaxis:{categories:["January","February","March","April","May","June"]},plotOptions:{radar:{polygons:{strokeColors:t?"#191e3a":"#e0e6ed",connectorColors:t?"#191e3a":"#e0e6ed"}}},tooltip:{theme:t?"dark":"light"}}},u={series:[44,55,13,43,22],options:{chart:{height:300,type:"pie",zoom:{enabled:!1},toolbar:{show:!1}},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],stroke:{show:!1},legend:{position:"bottom"}}},k={series:[44,55,13],options:{chart:{height:300,type:"donut",zoom:{enabled:!1},toolbar:{show:!1}},stroke:{show:!1},labels:["Team A","Team B","Team C"],colors:["#4361ee","#805dca","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],legend:{position:"bottom"}}},C={series:[14,23,21,17,15,10,12,17,21],options:{chart:{height:300,type:"polarArea",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f","#2196f3","#3b3f5c"],stroke:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:200}}}],plotOptions:{polarArea:{rings:{strokeColor:t?"#191e3a":"#e0e6ed"},spokes:{connectorColors:t?"#191e3a":"#e0e6ed"}}},legend:{position:"bottom"},fill:{opacity:.85}}},w={series:[44,55,41],options:{chart:{height:300,type:"radialBar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#e2a03f"],grid:{borderColor:t?"#191e3a":"#e0e6ed"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(r){return 249}}}}},labels:["Apples","Oranges","Bananas"],fill:{opacity:.85}}},y=(r,d,n)=>{let v=0;const N=[];for(;v<d;){var B=Math.floor(Math.random()*750)+1,T=Math.floor(Math.random()*(n.max-n.min+1))+n.min,D=Math.floor(Math.random()*61)+15;N.push([B,T,D]),v++}return N},j={series:[{name:"Bubble1",data:y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:y(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],options:{chart:{height:300,type:"bubble",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#00ab55"],dataLabels:{enabled:!1},xaxis:{tickAmount:12,type:"category",axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{max:70,opposite:!!a,labels:{offsetX:a?-10:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},tooltip:{theme:t?"dark":"light"},stroke:{colors:t?["#191e3a"]:["#e0e6ed"]},fill:{opacity:.85}}};return e.jsxs("div",{children:[e.jsxs("ul",{className:"flex space-x-2 rtl:space-x-reverse mb-6",children:[e.jsx("li",{children:e.jsx(z,{to:"#",className:"text-primary hover:underline",children:"Dashboard"})}),e.jsx("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e.jsx("span",{children:"Charts"})})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[e.jsxs("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary lg:col-span-2",children:[e.jsx("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e.jsx("a",{href:"https://www.npmjs.com/package/react-apexcharts",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-apexcharts"})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Simple Line"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code1"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:h.series,options:h.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"line",height:300})}),s.includes("code1")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={lineChart.series} options={lineChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={300} />

// lineChartOptions
const lineChart: any = {
    series: [
        {
            name: 'Sales',
            data: [45, 55, 75, 25, 45, 110],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'line',
            toolbar: false,
        },
        colors: ['#4361EE'],
        tooltip: {
            marker: false,
            y: {
                formatter(number: number) {
                    return '$' + number;
                },
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
    },
};
`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Area"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code2"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:p.series,options:p.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"area",height:300})}),s.includes("code2")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="area" height={300} />

// areaChartOptions
const areaChart: any = {
    series: [
        {
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
        },
    ],
    options: {
        chart: {
            type: 'area',
            height: 300,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -40 : 0,
            },
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: {
            horizontalAlign: 'left',
        },
        grid: {
            borderColor: isDark ? '#191E3A' : '#E0E6ED',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Column"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code3"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:m.series,options:m.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code3")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// columnChartOptions
const columnChart: any = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca', '#e7515a'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: function (val: any) {
                    return val;
                },
            },
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Column Stacked"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code4"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:x.series,options:x.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300,width:"100%"})}),s.includes("code4")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={simpleColumnStacked.series} options={simpleColumnStacked.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// simpleColumnStackedOptions
const simpleColumnStacked: any = {
    series: [
        {
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            stacked: true,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#2196f3', '#3b3f5c'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 5,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        legend: {
            position: 'right',
            offsetY: 40,
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        fill: {
            opacity: 0.8,
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Bar"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code5"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:b.series,options:b.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code5")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={barChart.series} options={barChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// barChartOptions
const barChart: any = {
    series: [
        {
            name: 'Sales',
            data: [44, 55, 41, 67, 22, 43, 21, 70],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            reversed: isRtl ? true : false,
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        fill: {
            opacity: 0.8,
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Mixed"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code6"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:g.series,options:g.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code6")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={mixedChart.series} options={mixedChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// mixedChartOptions
const mixedChart: any = {
    series: [
        {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    ],
    options: {
        chart: {
            height: 300,
            // stacked: false,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#2196f3', '#00ab55', '#4361ee'],
        stroke: {
            width: [0, 2, 2],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        fill: {
            opacity: [1, 0.25, 1],
        },

        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: isDark ? 'dark' : 'light',
        },
        legend: {
            itemMargin: {
                horizontal: 4,
                vertical: 8,
            },
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Radar"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code7"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:f.series,options:f.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"radar",height:300})}),s.includes("code7")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={radarChart.series} options={radarChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="radar" height={300} />

// radarChartOptions
const radarChart: any = {
    series: [
        {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'radar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: isDark ? '#191e3a' : '#e0e6ed',
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Pie"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code8"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:u.series,options:u.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"pie",height:300})}),s.includes("code8")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="pie" height={300} />

// pieChartOptions
const pieChart: any = {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            height: 300,
            type: 'pie',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        stroke: {
            show: false,
        },
        legend: {
            position: 'bottom',
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Donut"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code9"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:k.series,options:k.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"donut",height:300})}),s.includes("code9")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={donutChart.series} options={donutChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="donut" height={300} />

// donutChartOptions
const donutChart: any = {
    series: [44, 55, 13],
    options: {
        chart: {
            height: 300,
            type: 'donut',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            show: false,
        },
        labels: ['Team A', 'Team B', 'Team C'],
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        legend: {
            position: 'bottom',
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Polar Area"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code10"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:C.series,options:C.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"polarArea",height:300})}),s.includes("code10")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={polarAreaChart.series} options={polarAreaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="polarArea" height={300} />

// polarAreaChartOptions
const polarAreaChart: any = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            height: 300,
            type: 'polarArea',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3', '#3b3f5c'],
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        plotOptions: {
            polarArea: {
                rings: {
                    strokeColor: isDark ? '#191e3a' : '#e0e6ed',
                },
                spokes: {
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 0.85,
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Radial Bar"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code11"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:w.series,options:w.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"radialBar",height:300})}),s.includes("code11")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={radialBarChart.series} options={radialBarChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="radialBar" height={300} />

// radialBarChartOptions
const radialBarChart: any = {
    series: [44, 55, 41],
    options: {
        chart: {
            height: 300,
            type: 'radialBar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w: any) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas'],
        fill: {
            opacity: 0.85,
        },
    },
};`})})]}),e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"mb-5 flex items-center justify-between",children:[e.jsx("h5",{className:"text-lg font-semibold dark:text-white",children:"Bubble Chart"}),e.jsx("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>o("code12"),children:e.jsxs("span",{className:"flex items-center",children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e.jsx("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e.jsx("div",{className:"mb-5",children:e.jsx(l,{series:j.series,options:j.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bubble",height:300})}),s.includes("code12")&&e.jsx(i,{children:e.jsx("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={bubbleChart.series} options={bubbleChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bubble" height={300} />

// bubbleChartOptions
const bubbleChart: any = {
    series: [
        {
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bubble',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#00ab55'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            max: 70,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        stroke: {
            colors: isDark ? ['#191e3a'] : ['#e0e6ed'],
        },
        fill: {
            opacity: 0.85,
        },
    },
};`})})]})]})]})};export{J as default};
