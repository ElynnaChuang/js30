import{r as t,a as o,j as p}from"./index-38e8c392.js";const m=()=>{const[i,d]=t.useState(!1),[n,y]=t.useState(null),[u,h]=t.useState({x:0,y:0}),[f,x]=t.useState({w:window.innerWidth,h:window.innerHeight}),[w,v]=t.useState(0),[s,_]=t.useState(1),[k,S]=t.useState(!0),g=t.useRef(null),C=e=>{if(e.stopPropagation(),!i)return!1;const{offsetX:r,offsetY:c}=e.nativeEvent;return h({x:r,y:c}),n.strokeStyle=`hsl(${w}, 100%, 50%)`,n.lineWidth=s,n.beginPath(),n.moveTo(u.x,u.y),n.lineTo(r,c),n.stroke(),s>=100?S(!1):s<=0&&S(!0),_(k?a=>a+1:a=>a-1),w>=360&&v(0),v(a=>a+2)},W=e=>{e.stopPropagation();const{offsetX:r,offsetY:c}=e.nativeEvent;d(!0),h({x:r,y:c})};return t.useEffect(()=>{const e=g.current.getContext("2d");e.strokeStyle="#e1e1e1",e.lineJoin="round",e.lineCap="round",e.lineWidth=s,y(e),window.addEventListener("resize",()=>{x({w:window.innerWidth,h:window.innerHeight})},!1)},[s]),o("canvas",{ref:g,width:f.w,height:f.h,style:{backgroundColor:"#fff"},onMouseMove:e=>C(e),onMouseDown:e=>W(e),onMouseUp:()=>d(!1)})},M="_page_l6ya0_2",E="_container_l6ya0_7",D="_title_l6ya0_15",N="_canvas_area_l6ya0_36",l={page:M,container:E,title:D,canvas_area:N},T=()=>{const i="Start painting what you want!";return o("section",{className:l.page,children:p("div",{className:l.container,children:[p("h2",{className:l.title,children:[i,o("div",{children:i})]}),o("div",{className:l.canvas_area,children:o(m,{})})]})})};export{T as default};