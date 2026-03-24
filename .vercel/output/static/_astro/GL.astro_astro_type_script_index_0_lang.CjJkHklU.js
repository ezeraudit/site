import{S as ae,O as se,W as le,I as ce,V as F,G as Z,c as h,d as ue,R as ve,L as Y,e as de,E as fe,f as me,g as ee,a as oe,C as te,h as pe,i as he}from"./three.module.7MF0zYqA.js";import{g as v}from"./index.DDlvirwQ.js";import{a as ge}from"./observers.Dpnmwwyi.js";import{S as xe}from"./ScrollTrigger.CB6UHAJl.js";v.registerPlugin(xe);const ye=document.querySelector("sy-gl"),q=new ae,i=5;let C=window.innerWidth/window.innerHeight;const a=new se(-i*C/2,i*C/2,i/2,-i/2,0,10.6);a.position.set(0,0,10);a.lookAt(0,0,0);a.updateProjectionMatrix();const c=new le({antialias:!0}),_=c.domElement;c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));c.setSize(window.innerWidth,window.innerHeight);ye.appendChild(_);c.setClearColor("#fff");c.setClearAlpha(0);const we=1,be=2,Ce=new ce(we,be),k=Ce.attributes.position,A={uTime:{value:0},uVel:{value:0},uResolution:{value:new F(window.innerWidth,window.innerHeight)}},J={vertexShader:`
precision mediump float;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying vec2 vUv;

uniform float uTime;
uniform float uVel;
uniform float uRand;
uniform float uDisplacement;
uniform vec3 uDirection;

void main() {
  vec3 pos = position;
  pos += uDirection * uVel * 0.005 * uRand;
  pos += uDirection * uDisplacement;
  pos += uDirection * sin(uTime * 0.002 * uRand) * 0.015;
  vNormal = normalMatrix * normal;
  vPosition = pos;
  vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  vViewDirection = -mvPosition.xyz;

  // Generate UVs for extruded geometry
  vUv = uv;

  gl_Position = projectionMatrix * mvPosition;
}
    `,fragmentShader:`
precision mediump float;

uniform sampler2D uBackground;
uniform vec2 uResolution;
uniform float uTime;
uniform float uRefraction;
uniform float uBevelDepth;
uniform float uBevelWidth;
uniform bool uSpecular;
uniform float uRand;
uniform float uAlpha;
uniform float uActive;

varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying vec3 vViewDirection;
varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Edge detection based on normal angle (for triangular shape)
float triangleEdgeFactor(vec2 uv) {
  // Distance from center
  vec2 p = uv - 0.5;
  float centerDist = length(p);

  // Create smooth edge falloff
  float edgeDist = min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y));
  float bevelSize = uBevelWidth * 0.5;

  return smoothstep(0.0, bevelSize, edgeDist);
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewDirection);

  // Calculate screen UV for background sampling
  vec2 screenUV = gl_FragCoord.xy / uResolution;

  // Edge factor for beveling
  float edge = 1.0 - triangleEdgeFactor(vUv);

  // Refraction offset calculation
  float offsetAmt = (edge * uRefraction + pow(edge, 10.0) * uBevelDepth);

  // Use view direction and normal for refraction direction
  vec3 refractDir = refract(viewDir, normal, 0.9); // Glass-like IOR
  vec2 refractOffset = refractDir.xy * offsetAmt;

  // Center blend to reduce distortion in the middle
  vec2 p = vUv - 0.5;
  float centreBlend = smoothstep(0.15, 0.45, length(p));

  // Additional offset based on geometry orientation
  vec2 normalOffset = normalize(p) * offsetAmt * centreBlend;

  // Combine offsets
  vec2 offset = refractOffset + normalOffset * 0.5;

  // Calculate refracted UV
  vec2 refractedUV = screenUV + offset;

  // Clamp to screen bounds with smooth fallback
  float oob = max(
    max(-refractedUV.x, refractedUV.x - 1.0),
    max(-refractedUV.y, refractedUV.y - 1.0)
  );
  float blend = 1.0 - smoothstep(0.0, 0.01, oob);
  vec2 sampleUV = mix(screenUV, refractedUV, blend);

  // Sample background
  vec4 baseCol = texture2D(uBackground, screenUV);
  vec2 texel = 1.0 / vec2(textureSize(uBackground, 0));
  vec4 refrCol;

  if (baseCol.a < 0.01) {
    baseCol = vec4(0.9, 0.9, 0.9, 0.3);
  }

  // baseCol = mix(vec4(0.9, 0.9, 0.9, 0.3));

  // Simple blur for smoothness
  refrCol = texture2D(uBackground, sampleUV);
  // refrCol += texture2D(uBackground, sampleUV + vec2(texel.x, 0.0));
  // refrCol += texture2D(uBackground, sampleUV + vec2(-texel.x, 0.0));
  // refrCol += texture2D(uBackground, sampleUV + vec2(0.0, texel.y));
  // refrCol += texture2D(uBackground, sampleUV + vec2(0.0, -texel.y));
  // refrCol /= 5.0;

  // Fallback to base color if refraction fails
  if (refrCol.a < 0.01) {
    refrCol = baseCol;
  }

  // refrCol = mix(refrCol, vec4(1., 1., 0.0, 0.2) * refrCol.a, uActive);
  refrCol.rgb += vec3(0.25, 0.25, 0.15) * uActive;

  vec4 final = refrCol;

  // Specular highlights (animated)
  if (uSpecular) {
    vec2 lp1 = vec2(sin(uTime * 0.002 * uRand), cos(uTime * 0.003 * uRand)) * 0.6 + 0.5;
    vec2 lp2 = vec2(sin(uTime * -0.004 * uRand + 1.5), cos(uTime * 0.0025 * uRand - 0.5)) * 0.6 + 0.5;

    float highlight = 0.0;
    highlight += smoothstep(0.4, 0.0, distance(vUv, lp1)) * 0.15;
    highlight += smoothstep(0.5, 0.0, distance(vUv, lp2)) * 0.12;

    // Modulate by edge for realistic glass shine
    highlight *= (1.0 - edge * 0.5);
    final.rgb += highlight;
  }

  // Fresnel effect for glass edges
  float fresnel = pow(1.0 - abs(dot(viewDir, normal)), 3.0);
  final.rgb += fresnel * 0.1 * edge;

  // Edge darkening for depth
  final.rgb *= mix(1.0, 0.85, edge);

  // Alpha for transparency
  final.a = mix(0.7, 0.95, edge) * final.a * uAlpha;

  gl_FragColor = final;
}
    `},p=new Z,y=new Z;q.add(p);p.add(y);const Se=k.count/3,W=[],T=new h,x=new h,M=new h,V=new h,P=new h,ze=.9,De=.02,K=.02,Ve=2,H=new ue(1,1,{minFilter:Y,magFilter:Y,format:ve,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1});for(let r=0;r<Se;r++){const t=r*3;T.fromBufferAttribute(k,t+0),x.fromBufferAttribute(k,t+1),M.fromBufferAttribute(k,t+2),V.copy(M).sub(x).cross(T.clone().sub(x)).normalize(),P.copy(T).add(x).add(M).multiplyScalar(1/3);const e=D=>P.clone().lerp(D,ze),o=e(T),s=e(x),g=e(M),l=new de;l.moveTo(0,0);const n=D=>{const U=x.clone().sub(o).normalize(),N=V.clone(),ie=new h().crossVectors(N,U),X=D.clone().sub(o);return new F(X.dot(U),X.dot(ie))};l.moveTo(n(o).x,n(o).y),l.lineTo(n(s).x,n(s).y),l.lineTo(n(g).x,n(g).y),l.lineTo(n(o).x,n(o).y);const d={steps:2,depth:De,bevelEnabled:!1,bevelThickness:K,bevelSize:K,bevelSegments:Ve},m=new fe(l,d),f=new me,u=x.clone().sub(o).normalize(),w=V.clone(),b=new h().crossVectors(w,u);f.makeBasis(u,b,w),f.setPosition(o),m.applyMatrix4(f),m.computeVertexNormals();const S=new ee({vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,uniforms:{...A,uRand:{value:Math.random()+.1},uDirection:{value:new h(0).copy(V)},uDisplacement:{value:Math.random()*-1.7-.1},uActive:{value:0},uAlpha:{value:0},uBackground:{value:H.texture},uRefraction:{value:.001+Math.random()*.001},uBevelDepth:{value:.008+Math.random()*.002},uBevelWidth:{value:1+Math.random()*.2},uFrost:{value:0},uSpecular:{value:!0}},transparent:!0}),z=new oe(m,S);y.add(z),W.push({mesh:z,normal:V.clone(),center:P.clone(),originalOffset:0})}const Re="#fe03a2",E=["#FC85AE","#8d73f5"],Ae=Math.random()*10,ne=E.map((r,t)=>{const e=t+1;return{color:new te(r),noiseFreq:[2+e/(E.length+1),3+e/(E.length+1)],noiseSpeed:11+.3*e,noiseFlow:6.5+.3*e,noiseSeed:Ae+10*e,noiseFloor:.1,noiseCeil:.63+.07*e}}),Ue=`
  vec3 blendNormal(vec3 base, vec3 blend) {
    return blend;
  }

  vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
    return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
  }
  `,Te=`
  //	Simplex 3D Noise
  //	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
  //
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //  x0 = x0 - 0. + 0.0 * C
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  // Permutations
    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  // ( N*N points uniformly over a square, mapped onto an octahedron.)
    float n_ = 1.0/7.0; // N=7
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

  // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }
  `,Me=`
  precision highp float;
  ${Te}
  ${Ue}

  #define WAVES ${ne.length}

  struct WaveLayer {
    vec3 color;
    vec2 noiseFreq;
    float noiseSpeed;
    float noiseFlow;
    float noiseSeed;
    float noiseFloor;
    float noiseCeil;
  };

  uniform float uTime;
  uniform float uNoiseSpeed;
  uniform float uVel;
  uniform vec2 uResolution;
  uniform vec2 uNoiseFreq;
  uniform vec3 uBaseColor;
  uniform WaveLayer uWaveLayers[WAVES];

  varying vec3 vColor;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    float sp = uTime * uNoiseSpeed + uVel * 0.0007;
    vec3 pos = position;
    vec3 color = uBaseColor;
    vec2 uvNorm = uv * 2.0 - 1.0;
    vec2 noiseCoord = uResolution * uvNorm * uNoiseFreq;


    for (int i = 0; i < WAVES; i++) {
      WaveLayer layer = uWaveLayers[i];
      float noiseVal = smoothstep(
        layer.noiseFloor,
        layer.noiseCeil,
        snoise(vec3(
          noiseCoord.x * layer.noiseFreq.x + sp * layer.noiseFlow,
          noiseCoord.y * layer.noiseFreq.y,
          sp * layer.noiseSpeed + layer.noiseSeed
        )) * 0.5 + 0.5
      );

      color = blendNormal(color, layer.color, pow(noiseVal, 4.0));
    }

    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,ke=`
  precision highp float;

  uniform float uAlpha;

  varying vec2 vUv;
  varying vec3 vColor;
  void main() {
    float dist = distance(vUv, vec2(0.5, 0.5));

    if (dist > 0.5) {
        discard;
    }

    gl_FragColor = vec4(vColor * uAlpha, 1.0 * uAlpha);
  }
  `,I={...A,uBaseColor:{value:new te(Re)},uNoiseFreq:{value:new F(1e-4,1e-4).divideScalar(window.devicePixelRatio)},uNoiseSpeed:{value:5e-6},uWaveLayers:{value:ne},uAlpha:{value:0}},Be=new ee({vertexShader:Me,fragmentShader:ke,uniforms:I}),Fe=new pe(1.7,1.7,100,100),$=new oe(Fe,Be);p.add($);const j=new F,O=new Set;document.addEventListener("pointermove",r=>{r.preventDefault(),j.x=r.clientX/window.innerWidth*2-1,j.y=-(r.clientY/window.innerHeight)*2+1});window.addEventListener("pointerdown",()=>{Q.setFromCamera(j,a);const r=Q.intersectObjects(y.children,!1)[0];if(r){const t=r.object,e=W.findIndex(o=>o.mesh===t);e>=0&&We(e)}});function We(r){const e=W[r].mesh,o=O.has(r);o?O.delete(r):O.add(r),v.fromTo(e.material.uniforms.uDisplacement,{value:o?.1:0},{value:o?0:.1}),v.fromTo(e.material.uniforms.uActive,{value:o?1:0},{value:o?0:1})}const Q=new he;window.scrollVelocity=0;window.scrollDirection=1;window.scrollCurrent=0;window.scrollStickyOffsets=window.scrollStickyOffsets||[];let G=0,re=-i/window.innerHeight,B=!0;function Ne(r){I.uTime.value=r*1e3;const t=B?0:window.scrollVelocity,e=Math.abs(t),o=window.scrollDirection;y.rotation.y+=(.002+e*.001)*o,y.rotation.x+=(.002+e*.001)*-o,G+=(e-G)*.05,A.uVel.value=G,a.position.y=window.scrollCurrent*re,y.visible=!1,c.setRenderTarget(H),c.render(q,a),c.setRenderTarget(null),y.visible=!0,c.render(q,a)}v.ticker.fps(60);v.ticker.add(Ne);const L=[],R=[];$.scale.setScalar(0);function Pe(){const r="elastic.out(1.3, 0.7)";W.forEach(e=>{const o=e.mesh.material.uniforms;R.push(o.uDisplacement),L.push(o.uAlpha)}),v.to(R,{value:0,duration:.7,ease:r}),v.to(L,{value:1,duration:.5,delay:"random(0, 0.2)"}),v.to(I.uAlpha,{value:1,duration:.5}),R.splice(0,R.length),L.splice(0,R.length);const t={scale:0};v.to(t,{duration:.7,ease:r,scale:1,onUpdate(){$.scale.setScalar(t.scale)}})}setTimeout(Pe,200);class Ee extends HTMLElement{height=0;width=0;tl=null;connectedCallback(){const t=Array.from(document.querySelectorAll("[data-gl-place]")),e=n=>{if(!o.has(n)){const{top:d,left:m,width:f,height:u}=n.getBoundingClientRect(),w=d+window.scrollY,b=m+f/2,S=w+u/2,z=i*C/this.width,D=i/this.height,U=parseFloat(n.getAttribute("data-gl-place-factor")||"1"),N=n.hasAttribute("data-gl-place-sticky");o.set(n,{x:(b-this.width/2)*z,y:-(S-this.height/2)*D,scale:f*z*.5,factor:U,sticky:N})}return o.get(n)};let o=new WeakMap;const s=v.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:this,scrub:!0,invalidateOnRefresh:!0,fastScrollEnd:!0,onRefresh:()=>{o=new WeakMap,g()},start:()=>`${Math.round(window.innerHeight/2)}px center`,end:()=>{const n=t[t.length-1].getBoundingClientRect();return`+=${Math.round(n.top+window.scrollY)}px bottom`}}}),g=()=>{const n=t[0],d=e(n);p.position.x=d.x,p.position.y=d.y,p.scale.setScalar(d.scale)};s.add(()=>{g()}),t.forEach((n,d)=>{const m=t[d-1];if(!m)return;const f=()=>{const u=e(m),w=e(n);var b=u.y-w.y,S=Math.round(Math.sqrt(b*b)*10);return S*u.factor};s.to(p.position,{duration:f,x:()=>e(n).x,y:()=>e(n).y}),s.to(p.scale,{duration:f,x:()=>e(n).scale,y:()=>e(n).scale,z:()=>e(n).scale,onUpdate(){const u=this.progress();u===0||u===1?B=!0:B&&(B=!1)}},"<")}),this.tl=s,new ResizeObserver(()=>{s.scrollTrigger?.refresh()}).observe(document.body)}constructor(){super(),ge(this),this.onResize()}onResize=()=>{const t=window.innerWidth,e=window.innerHeight;this.width=t,this.height=e,re=-i/e,c.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),c.setSize(t,e),A.uResolution.value.x=_.width,A.uResolution.value.y=_.height,H.setSize(t,e),C=t/e,a.left=-i*C/2,a.right=i*C/2,a.top=i/2,a.bottom=-i/2,a.updateProjectionMatrix(),this.tl?.scrollTrigger?.refresh()};getTotalStickyOffset(t){let e=0,o=0;return window.scrollStickyOffsets.forEach(([s,g,l])=>{t<s||(t>=s&&t<=g?(e+=l,o-=l):e=l)}),[e,o]}}customElements.define("sy-gl",Ee);
