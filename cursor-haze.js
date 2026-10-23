(() => {
  const fine=matchMedia('(hover: hover) and (pointer: fine)'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const surfaces=new Map();
  document.querySelectorAll('main section:not(.hero):not(.intro),footer').forEach(section=>{
    section.classList.add('haze-surface');
    const layer=document.createElement('span');layer.className='cursor-haze';layer.setAttribute('aria-hidden','true');section.append(layer);surfaces.set(section,layer);
  });
  let active=null,x=0,y=0,frame=0,hasPointer=false;
  function clear(){if(active)active.classList.remove('is-lit');active=null;}
  function paint(){
    frame=0;
    if(!hasPointer||!fine.matches||reduced.matches||document.body.classList.contains('motion-paused')){clear();return;}
    const target=document.elementFromPoint(x,y),section=target?.closest('section,footer');
    const layer=target?.closest('dialog,header')?null:surfaces.get(section);
    if(active!==layer){clear();active=layer||null;}
    if(!active)return;
    const bounds=section.getBoundingClientRect();
    active.style.setProperty('--haze-x',`${x-bounds.left}px`);active.style.setProperty('--haze-y',`${y-bounds.top}px`);active.classList.add('is-lit');
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(paint);}
  document.addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;x=event.clientX;y=event.clientY;hasPointer=true;schedule();},{passive:true});
  document.addEventListener('pointerleave',()=>{hasPointer=false;clear();});
  addEventListener('blur',()=>{hasPointer=false;clear();});
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule,{passive:true});fine.addEventListener('change',schedule);reduced.addEventListener('change',schedule);
  new MutationObserver(schedule).observe(document.body,{attributes:true,attributeFilter:['class']});
})();
