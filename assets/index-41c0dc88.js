import{r as y,a as o}from"./index-36b453bc.js";const g="_page_1vk1y_1",f="_container_1vk1y_6",s={page:g,container:f},u=()=>{const[t,n]=y.useState({x:0,y:0}),x={textShadow:`
    ${-t.x}px ${-t.y}px 0px rgba(0, 255, 229, 0.8),
    ${t.x}px ${-t.y}px 0px rgba(255, 247, 0, 0.8),
    ${-t.x}px ${t.y}px 0px rgba(255, 55, 178, 0.8),
    ${t.x}px ${t.y}px 0px rgba(67, 255, 108, 0.8)`},c=a=>{const{offsetWidth:r,offsetHeight:p}=a.nativeEvent.toElement,{offsetX:h,offsetY:i}=a.nativeEvent,e=100,d=Math.round(h/r*e-e/2),l=Math.round(i/p*e-e/2);n({x:d,y:l})};return o("section",{className:s.page,children:o("div",{className:s.container,onMouseMove:c,children:o("h1",{style:x,children:"🔥Move Your Mouse!"})})})};export{u as default};
