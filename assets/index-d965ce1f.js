import{r as g,a as o}from"./index-9c3751fa.js";const f="_page_2morb_1",y="_container_2morb_6",s={page:f,container:y},v=()=>{const[t,n]=g.useState({x:0,y:0}),r={textShadow:`
    ${-t.x}px ${-t.y}px 0px rgba(0, 255, 229, 0.8),
    ${t.x}px ${-t.y}px 0px rgba(255, 247, 0, 0.8),
    ${-t.x}px ${t.y}px 0px rgba(255, 55, 178, 0.8),
    ${t.x}px ${t.y}px 0px rgba(67, 255, 108, 0.8)`},x=a=>{const{offsetWidth:c,offsetHeight:p}=a.nativeEvent.toElement,{offsetX:h,offsetY:i}=a.nativeEvent,e=100,d=Math.round(h/c*e-e/2),l=Math.round(i/p*e-e/2);n({x:d,y:l})};return o("section",{className:s.page,children:o("div",{className:s.container,onMouseMove:x,children:o("h1",{style:r,children:"🔥Move Your Mouse!"})})})};export{v as default};
