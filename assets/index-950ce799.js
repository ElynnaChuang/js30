import{d as p,r as c,a as s,b as a,j as o,c as q,i as B,e as C,I as N}from"./index-180d8661.js";const S=({timezone:r})=>{const t=g=>g.toString().padStart(2,0),l=p().tz(r),[x,d]=c.useState(()=>t(l.hour())),[n,_]=c.useState(()=>t(l.minute())),[b,D]=c.useState(()=>t(l.second())),j=c.useRef(0),v=c.useRef(0),w=c.useRef(0),H=(x/12+j.current)*360+n/60*30,M=(n/60+v.current)*360+b/60*6,z=(b/60+w.current)*360;return c.useEffect(()=>{const O=setInterval(()=>{const i=p().tz(r),Z=t(i.hour()),h=t(i.minute()),m=t(i.second());(i.format("HH:mm:ss")==="00:00:00"||i.format("HH:mm:ss")==="12:00:00")&&(j.current+=1),h==="00"&&m==="00"&&(v.current+=1),m==="00"&&(w.current+=1),d(Z),_(h),D(m)},1e3);return function(){clearInterval(O)}},[r]),s("div",{className:a.clock,children:o("div",{className:a.clock_face,children:[o("div",{className:a.scales,children:[s("span",{className:a.hour_scale}),s("span",{className:a.hour_scale}),s("span",{className:a.hour_scale}),s("span",{className:a.hour_scale}),s("span",{className:a.hour_scale}),s("span",{className:a.hour_scale})]}),s("div",{className:a.sec_pointer,style:{transform:`rotate(${z}deg)`}}),s("div",{className:a.min_pointer,style:{transform:`rotate(${M}deg)`}}),s("div",{className:a.hour_pointer,style:{transform:`rotate(${H}deg)`}})]})})};var f={},F=B;Object.defineProperty(f,"__esModule",{value:!0});var A=f.default=void 0,P=F(q()),J=C,U=(0,P.default)((0,J.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");A=f.default=U;const Y="_page_vsu50_1",G="_container_vsu50_14",K="_bg_vsu50_43",Q="_text_container_vsu50_49",V="_select_container_vsu50_77",W="_dropArrow_vsu50_101",X="_select_vsu50_77",ss="_clock_container_vsu50_126",es="_clock_vsu50_126",e={page:Y,container:G,bg:K,text_container:Q,select_container:V,dropArrow:W,select:X,clock_container:ss,clock:es},as="/js30/assets/default_base-1d81d38b.jpg",k="/js30/assets/default_l1x-05c7903a.webp",L="/js30/assets/default_l2x-bfb1d376.webp",ts="/js30/assets/default_s1x-30b29cd6.webp",ns="/js30/assets/default_s2x-27387627.webp",cs="/js30/assets/default_s3x-84658cf8.webp",os="/js30/assets/taiwan_base-0a190a16.jpg",T="/js30/assets/taiwan_l1x-13f1b989.webp",$="/js30/assets/taiwan_l2x-677cb515.webp",rs="/js30/assets/taiwan_s1x-aca13f21.webp",ls="/js30/assets/taiwan_s2x-e77bf04c.webp",is="/js30/assets/taiwan_s3x-17ddff3d.webp",ds="/js30/assets/japan_base-605aa19f.jpg",y="/js30/assets/japan_l1x-fb8787e0.webp",I="/js30/assets/japan_l2x-cfd65ab4.webp",us="/js30/assets/japan_s1x-9d34199d.webp",xs="/js30/assets/japan_s2x-b7de13a8.webp",_s="/js30/assets/japan_s3x-385edf6e.webp",ms="/js30/assets/london_base-3175277d.jpg",R="/js30/assets/london_l1x-52a7e817.webp",E="/js30/assets/london_l2x-c7fa3c95.webp",ps="/js30/assets/london_s1x-caeb9728.webp",fs="/js30/assets/london_s2x-2261d485.webp",bs="/js30/assets/london_s3x-ebda35cf.webp",js={base:as,l1x:k,l2x:L,m1x:k,m2x:L,s1x:ts,s2x:ns,s3x:cs},vs={base:os,l1x:T,l2x:$,m1x:T,m2x:$,s1x:rs,s2x:ls,s3x:is},ws={base:ds,l1x:y,l2x:I,m1x:y,m2x:I,s1x:us,s2x:xs,s3x:_s},gs={base:ms,l1x:R,l2x:E,m1x:R,m2x:E,s1x:ps,s2x:fs,s3x:bs},u={"Europe/London":{name:"London",images:gs},"Asia/Taipei":{name:"Taiwan",images:vs},"Asia/Tokyo":{name:"Japan",images:ws}},Ns=()=>{var d;const r=n=>`${p().tz(n).offsetName()}`,t=Intl.DateTimeFormat().resolvedOptions().timeZone,[l,x]=c.useState("Europe/London");return o("section",{className:e.page,children:[o("div",{className:e.container,children:[s(N,{images:((d=u[t])==null?void 0:d.images)||{base:js.base},className:e.bg}),s("div",{className:e.clock_container,children:s("div",{className:e.clock,children:s(S,{timezone:t})})}),o("div",{className:e.text_container,children:[s("div",{children:"You're now in"}),s("span",{children:`${u[t].name} ${r(t)}`})]})]}),o("div",{className:e.container,children:[s(N,{images:u[l].images,className:e.bg}),s("div",{className:e.clock_container,children:s("div",{className:e.clock,children:s(S,{timezone:l})})}),o("div",{className:e.select_container,htmlFor:"country",children:[s("select",{name:"country",id:"country",className:e.select,onChange:n=>x(n.target.value),children:Object.entries(u).map(([n,_])=>s("option",{value:n,children:`${_.name} ${r(n)}`},n))}),s(A,{className:e.dropArrow,sx:{fontSize:20}})]})]})]})};export{Ns as default};
