(() => {
 const viewport=document.querySelector('#ahu-viewport');
 if(!viewport)return;
 const buttons=[...document.querySelectorAll('.ahu-toolbar button,.ahu-parts button')];
 buttons.forEach(button=>button.disabled=true);
 viewport.setAttribute('aria-busy','true');
 async function load(){
  try {await import('./ahu.js?v=20261028-fahrenheit1');
   if(document.querySelector('#ahu-canvas').dataset.ready==='true')buttons.forEach(button=>button.disabled=false);
  } catch(error){const message=document.querySelector('#ahu-loading');message.hidden=false;message.textContent='The 3D view could not load. Please refresh to try again. The sequence controls remain available.';console.error('AHU loading:',error);}
  finally {viewport.setAttribute('aria-busy','false');}
 }
 if(!('IntersectionObserver' in window)){load();return;}
 const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){observer.disconnect();load();}},{rootMargin:'500px'});
 observer.observe(viewport);
})();
