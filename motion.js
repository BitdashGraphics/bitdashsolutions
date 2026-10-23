(() => {
  const hero=document.querySelector('.hero'),canvas=document.querySelector('#engineering-core'),gl=canvas.getContext('webgl',{alpha:true,antialias:true,powerPreference:'low-power'}),ctx=gl?null:canvas.getContext('2d');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)'),toggle=document.querySelector('#motion-toggle');
  let paused=reduced.matches,visible=true,raf=0,last=0,time=0,width=0,height=0,targetX=0,targetY=0,mouseX=0,mouseY=0;
  const N=180,M=32,verts=[],faces=[];
  const point=t=>{const r=1.9+.68*Math.cos(3*t);return [r*Math.cos(2*t),r*Math.sin(2*t),.88*Math.sin(3*t)]};
  const norm=a=>{const l=Math.hypot(...a)||1;return a.map(v=>v/l)};
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  for(let i=0;i<N;i++){
    const t=i/N*Math.PI*2,p=point(t),q=point(t+.001),tangent=norm(q.map((v,j)=>v-p[j])),n=norm(cross(tangent,[0,0,1])),b=cross(tangent,n);
    for(let j=0;j<M;j++){const a=j/M*Math.PI*2,d=n.map((v,k)=>v*Math.cos(a)+b[k]*Math.sin(a));verts.push({p:p.map((v,k)=>v+d[k]*.36),n:d});faces.push([i*M+j,((i+1)%N)*M+j,((i+1)%N)*M+(j+1)%M,i*M+(j+1)%M])}
  }
  const light=norm([-.5,-.75,1]);
  function rotate(p,ax,ay,az){let [x,y,z]=p;let c=Math.cos(ax),s=Math.sin(ax);[y,z]=[y*c-z*s,y*s+z*c];c=Math.cos(ay);s=Math.sin(ay);[x,z]=[x*c+z*s,-x*s+z*c];c=Math.cos(az);s=Math.sin(az);return [x*c-y*s,x*s+y*c,z]}
  let program,rotationLoc,sizeLoc,scaleLoc,vertexCount=0;
  if(gl){
    const vertex=`attribute vec3 position;attribute vec3 normal;uniform mat3 rotation;uniform vec2 size;uniform float scale;varying vec3 vN;varying vec3 vP;void main(){vec3 p=rotation*position;vP=p;vN=rotation*normal;float w=8.0-p.z;gl_Position=vec4(p.x*scale*16.0/size.x+.06*w,-p.y*scale*16.0/size.y+.02*w,(4.0-p.z)*.08*w,w);}`;
    const fragment=`precision mediump float;varying vec3 vN;varying vec3 vP;void main(){vec3 n=normalize(vN);vec3 eye=normalize(vec3(0.,0.,8.)-vP);vec3 r=reflect(-eye,n);float strip=pow(max(0.,1.-abs(r.y+.24)),17.);float strip2=pow(max(0.,1.-abs(r.x-.5)),24.);float diffuse=max(0.,dot(n,normalize(vec3(-.55,-.9,1.))));float spec=pow(max(0.,dot(n,normalize(normalize(vec3(-.5,-.7,1.))+eye))),65.);float rim=pow(1.-max(0.,dot(n,eye)),3.);vec3 base=vec3(.11,.105,.15)+vec3(.20,.18,.27)*diffuse;vec3 color=base+vec3(.52,.49,.61)*strip+vec3(.13,.17,.22)*strip2+vec3(.8,.77,.86)*spec+vec3(.22,.19,.29)*rim;float ao=.8+.2*smoothstep(-2.,2.,vP.z);gl_FragColor=vec4(color*ao,1.);}`;
    const shader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
    program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);gl.useProgram(program);
    const data=[];faces.forEach(f=>[f[0],f[1],f[2],f[0],f[2],f[3]].forEach(i=>data.push(...verts[i].p,...verts[i].n)));vertexCount=data.length/6;
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);const pos=gl.getAttribLocation(program,'position'),normal=gl.getAttribLocation(program,'normal');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(normal);gl.vertexAttribPointer(normal,3,gl.FLOAT,false,24,12);
    rotationLoc=gl.getUniformLocation(program,'rotation');sizeLoc=gl.getUniformLocation(program,'size');scaleLoc=gl.getUniformLocation(program,'scale');gl.enable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  }
  function draw(){
    if(!width||!height)return;
    const cx=width*.53,cy=height*.49,scale=Math.min(width*.143,height*.176),ax=.65+mouseY*.36,ay=.3+mouseX*.5,az=-.35+time*.065;
    if(gl){gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);const mat=[...rotate([1,0,0],ax,ay,az),...rotate([0,1,0],ax,ay,az),...rotate([0,0,1],ax,ay,az)];gl.uniformMatrix3fv(rotationLoc,false,new Float32Array(mat));gl.uniform2f(sizeLoc,width,height);gl.uniform1f(scaleLoc,scale);gl.drawArrays(gl.TRIANGLES,0,vertexCount);return}ctx.clearRect(0,0,width,height);
    const aura=ctx.createRadialGradient(cx,cy,0,cx,cy,scale*3.2);aura.addColorStop(0,'rgba(132,108,187,.08)');aura.addColorStop(.65,'rgba(132,108,187,.04)');aura.addColorStop(1,'rgba(132,108,187,0)');ctx.fillStyle=aura;ctx.fillRect(0,0,width,height);
    // Orbital construction lines anchor the sculpture in an engineering drawing.
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-.22+mouseX*.08);ctx.strokeStyle='rgba(177,165,201,.11)';ctx.lineWidth=.6;ctx.beginPath();ctx.ellipse(0,0,scale*3.08,scale*2.75,0,0,Math.PI*2);ctx.stroke();ctx.setLineDash([2,9]);ctx.beginPath();ctx.ellipse(0,0,scale*3.22,scale*2.88,0,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);for(let i=0;i<4;i++){const a=i*Math.PI/2+time*.08;ctx.fillStyle='#d7b6a8';ctx.beginPath();ctx.arc(Math.cos(a)*scale*3.08,Math.sin(a)*scale*2.75,1.8,0,7);ctx.fill()}ctx.restore();
    const projected=verts.map(v=>{const p=rotate(v.p,ax,ay,az),n=rotate(v.n,ax,ay,az),perspective=8/(8-p[2]);return {x:cx+p[0]*scale*perspective,y:cy+p[1]*scale*perspective,z:p[2],n}});
    const ordered=faces.map(f=>({f,z:f.reduce((s,i)=>s+projected[i].z,0)/4})).sort((a,b)=>a.z-b.z);
    for(const {f} of ordered){const a=projected[f[0]],b=projected[f[1]],c=projected[f[2]],d=projected[f[3]];const n=norm([0,1,2].map(k=>(a.n[k]+b.n[k]+c.n[k]+d.n[k])/4));const diffuse=Math.max(0,n.reduce((s,v,i)=>s+v*light[i],0)),spec=Math.pow(Math.max(0,n[0]*-.25+n[1]*-.42+n[2]*.87),20),rim=Math.pow(1-Math.abs(n[2]),3);let r=39+diffuse*87+spec*126+rim*31,g=36+diffuse*83+spec*120+rim*25,bl=51+diffuse*105+spec*127+rim*47;const sheen=Math.pow(Math.max(0,Math.sin(n[1]*6+n[2]*3)),12)*30;r+=sheen;g+=sheen*.92;bl+=sheen;ctx.fillStyle=ctx.strokeStyle=`rgb(${Math.min(255,r)},${Math.min(255,g)},${Math.min(255,bl)})`;ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(d.x,d.y);ctx.closePath();ctx.fill();ctx.stroke()}
    // Fine surface meridians give the metal a restrained technical texture.
    ctx.lineWidth=.45;for(let j=0;j<M;j+=3){for(let i=0;i<N;i++){const a=projected[i*M+j],b=projected[((i+1)%N)*M+j];if(a.n[2]>.65&&a.z>.5){ctx.strokeStyle='rgba(232,220,255,.16)';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}}
  }
  function frame(now){raf=0;if(paused||!visible||document.hidden)return;if(now-last>30){time+=Math.min((now-last)/1000,.04);last=now;mouseX+=(targetX-mouseX)*.065;mouseY+=(targetY-mouseY)*.065;draw()}raf=requestAnimationFrame(frame)}
  function start(){if(!raf&&!paused&&visible&&!document.hidden){last=performance.now();raf=requestAnimationFrame(frame)}}
  function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);if(gl)gl.viewport(0,0,canvas.width,canvas.height);else ctx.setTransform(dpr,0,0,dpr,0,0);draw();start()}
  function setPause(value){paused=value;document.body.classList.toggle('motion-paused',value);toggle.setAttribute('aria-pressed',String(value));toggle.setAttribute('aria-label',value?'Resume visual motion':'Pause visual motion');toggle.innerHTML=value?'<span>▶</span> RESUME MOTION':'<span>Ⅱ</span> PAUSE MOTION';if(value){cancelAnimationFrame(raf);raf=0;targetX=targetY=mouseX=mouseY=0;draw()}else start()}
  toggle.addEventListener('click',()=>setPause(!paused));reduced.addEventListener('change',e=>setPause(e.matches));
  hero.addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const r=hero.getBoundingClientRect();targetX=(e.clientX-r.left)/r.width*2-1;targetY=(e.clientY-r.top)/r.height*2-1;hero.style.setProperty('--mx',`${(targetX+1)*50}%`);hero.style.setProperty('--my',`${(targetY+1)*50}%`)});
  hero.addEventListener('pointerleave',()=>{targetX=targetY=0});
  new ResizeObserver(resize).observe(canvas);new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)start();else{cancelAnimationFrame(raf);raf=0}},{threshold:.01}).observe(hero);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else start()});setPause(paused);
  const header=document.querySelector('header'),progress=document.querySelector('.reading-progress');let scrollQueued=false;
  function onScroll(){const range=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${range>0?scrollY/range:0})`;header.classList.toggle('scrolled',scrollY>200);scrollQueued=false}
  addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();
  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  document.querySelectorAll('.intro-statement,.section-heading,.service-layout,.demo,.steps article,.contact-copy,.faq>div:first-child').forEach((el,i)=>{el.classList.add('reveal-ready');if(el.matches('.steps article'))el.style.transitionDelay=`${i%4*80}ms`;reveal.observe(el)});
  document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('pointermove',e=>{if(paused||!fine.matches)return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.14}px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
})();
