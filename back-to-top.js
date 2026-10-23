(() => {
 const button=document.createElement('button');button.type='button';button.className='back-to-top';button.setAttribute('aria-label','Back to top');button.title='Back to top';button.hidden=true;button.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 12 6-6 6 6M12 6v13" stroke-linecap="round" stroke-linejoin="round"/></svg>';document.body.append(button);
 let queued=false;function update(){queued=false;button.hidden=scrollY<300;}addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});update();
 button.addEventListener('click',()=>{document.querySelector('header .logo')?.focus({preventScroll:true});scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
})();
