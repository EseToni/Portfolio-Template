import{p as a,_ as h}from"./hooks.module.D9Sbrd7S.js";import{u as e}from"./jsxRuntime.module.DffJabvY.js";import{P as w}from"./Pages.B9CgRcb3.js";import{a as m}from"./index.287a6ed1.HcUQ2kFr.js";import{p}from"./projects.CQqHZWgg.js";import"./preact.module.5IcniKGG.js";const y=({image:n,title:l,description:r,link:c,name:d,color_1:s,color_2:o})=>e("article",{class:"flex flex-col gap-3 max-w-80 h-72 transition-all ",children:[e("picture",{class:"relative h-44 w-80 group/picture cursor-pointer transition-all hover:scale-105 hover:shadow-md rounded-xl",children:e("a",{href:c,target:"_blank",children:[e("div",{class:"absolute overflow-hidden rounded-xl ",children:[e("h3",{class:"font-bold text-3xl  transition-all absolute text-white opacity-95 z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover/picture:opacity-0",children:d}),e("div",{style:{backgroundColor:s,clipPath:"polygon(0 0, 0 100%, 100% 0)"},class:"h-44 w-80 group-hover/picture:-translate-y-28 group-hover/picture:-translate-x-28 group-hover/picture:-translate-full  absolute opacity-90 rounded-xl transition-all "}),e("div",{style:{backgroundColor:o,clipPath:"polygon(100% 0, 0 100%, 100% 100%)"},class:`bg-[${o}] h-44 w-80 group-hover/picture:translate-y-28 group-hover/picture:translate-x-28  opacity-80 rounded-xl transition-all  `})]}),e("img",{src:n,alt:l,class:"h-44 w-80 rounded-xl"})]})}),e("div",{children:[e("h3",{class:"font-bold text-[#0D141C]",children:l}),e("p",{class:"text-[#4F7396] text-sm text-wrap",children:r})]})]}),F=()=>{const[n,l]=a(0),[r,c]=a(1),[d,s]=a(!1),[o,f]=a(p),[i,x]=a(1),u=r*i,g=u-i,P=()=>{const t=window.innerWidth;return t>1024?3:t>768?2:1};return h(()=>{x(P())},[]),h(()=>{f(p.slice(g,u))},[r,i]),e("div",{class:"flex flex-col relative gap-4 lg:gap-8 items-center ",children:[e("div",{class:`flex flex-row gap-8 transition-all ${d?r>n?m.translate_x_right:m.translate_x_left:""}`,children:o.slice(g,u).map((t,v)=>e(y,{title:t.title,description:t.description,image:t.image,name:t.name,color_1:t.color_1,color_2:t.color_2,link:t.link},v))}),e(w,{pages:Math.ceil(p.length/i),currentPage:r,setCurrentPage:t=>{r!==t&&(l(r),c(t),s(!0),setTimeout(()=>{s(!1)},500))}})]})};export{F as default};
