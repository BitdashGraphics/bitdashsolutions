(() => {
 const targets=[...document.querySelectorAll('.brand-symbol canvas')];if(!targets.length)return;
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;let gl;try{gl=canvas.getContext('webgl',{alpha:true,antialias:true,powerPreference:'low-power'});}catch{}if(!gl)return;
 const ctx=null,width=256,height=256,mouseX=0,mouseY=0;let time=0;
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
    const vertex=`attribute vec3 position;attribute vec3 normal;uniform mat3 rotation;uniform vec2 size;uniform float scale;varying vec3 vN;varying vec3 vP;void main(){vec3 p=rotation*position;vP=p;vN=rotation*normal;gl_Position=vec4(p.x*scale*2.0/size.x,-p.y*scale*2.0/size.y,-p.z/8.0,1.0);}`;
    const fragment=`precision mediump float;varying vec3 vN;varying vec3 vP;void main(){vec3 n=normalize(vN);vec3 eye=normalize(vec3(0.,0.,8.)-vP);vec3 r=reflect(-eye,n);float strip=pow(max(0.,1.-abs(r.y+.24)),17.);float strip2=pow(max(0.,1.-abs(r.x-.5)),24.);float diffuse=max(0.,dot(n,normalize(vec3(-.55,-.9,1.))));float spec=pow(max(0.,dot(n,normalize(normalize(vec3(-.5,-.7,1.))+eye))),65.);float rim=pow(1.-max(0.,dot(n,eye)),3.);vec3 base=vec3(.11,.105,.15)+vec3(.20,.18,.27)*diffuse;vec3 color=base+vec3(.52,.49,.61)*strip+vec3(.13,.17,.22)*strip2+vec3(.8,.77,.86)*spec+vec3(.22,.19,.29)*rim;float ao=.8+.2*smoothstep(-2.,2.,vP.z);gl_FragColor=vec4(color*ao,1.);}`;
    const shader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
    program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);gl.useProgram(program);
    const data=[];faces.forEach(f=>[f[0],f[1],f[2],f[0],f[2],f[3]].forEach(i=>data.push(...verts[i].p,...verts[i].n)));vertexCount=data.length/6;
    const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(data),gl.STATIC_DRAW);const pos=gl.getAttribLocation(program,'position'),normal=gl.getAttribLocation(program,'normal');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(normal);gl.vertexAttribPointer(normal,3,gl.FLOAT,false,24,12);
    rotationLoc=gl.getUniformLocation(program,'rotation');sizeLoc=gl.getUniformLocation(program,'size');scaleLoc=gl.getUniformLocation(program,'scale');gl.enable(gl.DEPTH_TEST);gl.clearColor(0,0,0,0);
  }
  function draw(){
    if(!width||!height)return;
    const cx=width*.53,cy=height*.49,scale=Math.min(width*.14,height*.14),ax=.65+time*.10,ay=.3+time*.16,az=-.35+time*.08;
    if(gl){gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);const mat=[...rotate([1,0,0],ax,ay,az),...rotate([0,1,0],ax,ay,az),...rotate([0,0,1],ax,ay,az)];gl.uniformMatrix3fv(rotationLoc,false,new Float32Array(mat));gl.uniform2f(sizeLoc,width,height);gl.uniform1f(scaleLoc,scale);gl.drawArrays(gl.TRIANGLES,0,vertexCount);return}ctx.clearRect(0,0,width,height);
    const projected=verts.map(v=>{const p=rotate(v.p,ax,ay,az),n=rotate(v.n,ax,ay,az),perspective=8/(8-p[2]);return {x:cx+p[0]*scale*perspective,y:cy+p[1]*scale*perspective,z:p[2],n}});
    const ordered=faces.map(f=>({f,z:f.reduce((s,i)=>s+projected[i].z,0)/4})).sort((a,b)=>a.z-b.z);
    for(const {f} of ordered){const a=projected[f[0]],b=projected[f[1]],c=projected[f[2]],d=projected[f[3]];const n=norm([0,1,2].map(k=>(a.n[k]+b.n[k]+c.n[k]+d.n[k])/4));const diffuse=Math.max(0,n.reduce((s,v,i)=>s+v*light[i],0)),spec=Math.pow(Math.max(0,n[0]*-.25+n[1]*-.42+n[2]*.87),20),rim=Math.pow(1-Math.abs(n[2]),3);let r=39+diffuse*87+spec*126+rim*31,g=36+diffuse*83+spec*120+rim*25,bl=51+diffuse*105+spec*127+rim*47;const sheen=Math.pow(Math.max(0,Math.sin(n[1]*6+n[2]*3)),12)*30;r+=sheen;g+=sheen*.92;bl+=sheen;ctx.fillStyle=ctx.strokeStyle=`rgb(${Math.min(255,r)},${Math.min(255,g)},${Math.min(255,bl)})`;ctx.lineWidth=.55;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineTo(c.x,c.y);ctx.lineTo(d.x,d.y);ctx.closePath();ctx.fill();ctx.stroke()}

  }

 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),entries=targets.map(target=>{target.width=target.height=256;return {target,ctx:target.getContext('2d'),visible:false}});let raf=0,last=0,lastPaint=0;
 function paint(){draw();for(const e of entries){if(!e.visible)continue;e.ctx.clearRect(0,0,256,256);e.ctx.drawImage(canvas,0,0);e.target.dataset.ready='true';e.target.dataset.frame=String(Math.round(time*1000));e.target.parentElement.classList.add('logo-rendered')}}
 function enabled(){return !reduced.matches&&!document.hidden&&!document.body.classList.contains('motion-paused')&&entries.some(e=>e.visible)}
 function tick(now){raf=0;if(!enabled())return;time+=Math.min((now-last)/1000,.06);last=now;if(now-lastPaint>40){paint();lastPaint=now}raf=requestAnimationFrame(tick)}
 function sync(){cancelAnimationFrame(raf);raf=0;if(document.hidden)return;paint();if(enabled()){last=performance.now();raf=requestAnimationFrame(tick)}}
 const observer=new IntersectionObserver(list=>{for(const item of list)entries.find(e=>e.target===item.target).visible=item.isIntersecting;sync()});targets.forEach(t=>observer.observe(t));
 reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);targets.forEach(t=>t.parentElement.classList.remove('logo-rendered'));});
})();