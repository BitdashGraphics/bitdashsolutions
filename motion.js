(() => {
 const hero=document.querySelector('.hero'),toggle=document.querySelector('#motion-toggle');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)');let paused=reduced.matches;
 function setPause(value){paused=value;document.body.classList.toggle('motion-paused',value);toggle.setAttribute('aria-pressed',String(value));toggle.setAttribute('aria-label',value?'Resume visual motion':'Pause visual motion');toggle.innerHTML=value?'<span>▶</span> RESUME MOTION':'<span>Ⅱ</span> PAUSE MOTION'}
 toggle.addEventListener('click',()=>setPause(!paused));reduced.addEventListener('change',e=>setPause(e.matches));setPause(paused);
 hero.addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');hero.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')});
  const header=document.querySelector('header'),progress=document.querySelector('.reading-progress');let scrollQueued=false;
  function onScroll(){const range=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${range>0?scrollY/range:0})`;header.classList.toggle('scrolled',scrollY>200);scrollQueued=false}
  addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.intro-statement,.section-heading,.service-layout,.demo,.steps article,.contact-copy,.faq>div:first-child').forEach((el,i)=>{el.classList.add('reveal-ready');if(el.matches('.steps article'))el.style.transitionDelay=`${i%4*80}ms`;reveal.observe(el)});
  document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.14}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
})();
