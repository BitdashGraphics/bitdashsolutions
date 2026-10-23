(() => {
 const paths={'↗':'M5 19 19 5M5 5h14v14','↘':'M5 5 19 19M5 19h14V5','→':'M4 12h16m-7-7 7 7-7 7','←':'M20 12H4m7-7-7 7 7 7','↑':'M12 20V4m-7 7 7-7 7 7','↓':'M12 4v16m-7-7 7 7 7-7','▶':'M8 5 19 12 8 19Z','Ⅱ':'M8 5v14M16 5v14'};
 function upgrade(root){
  if(root.nodeType===1&&root.closest('script,style,textarea,select,svg,[contenteditable]'))return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
  if(root.nodeType===3)nodes.push(root);
  else while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
   if(!/[↗↘→←↑↓▶Ⅱ]/.test(node.data)||node.parentElement?.closest('script,style,textarea,select,svg,[contenteditable]'))return;
   const fragment=document.createDocumentFragment();
   node.data.split(/([↗↘→←↑↓▶Ⅱ])/).forEach(part=>{
    if(!paths[part]){fragment.append(document.createTextNode(part));return;}
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),path=document.createElementNS(svg.namespaceURI,'path');
    svg.classList.add(part==='▶'?'ui-play':part==='Ⅱ'?'ui-pause':'ui-arrow');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
    path.setAttribute('d',paths[part]);svg.append(path);fragment.append(svg);
   });node.replaceWith(fragment);
  });
 }
 upgrade(document.body);
 new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(upgrade))).observe(document.body,{childList:true,subtree:true});
})();
