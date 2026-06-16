// form-bridge.js — Gigantes de Azapa Salta 2026 — REVISION FINAL
const GIGANTES = {
  LOGO: "https://lh3.googleusercontent.com/d/1xXGqa0I_sw6C6QPcD_G-1fblDQlr9-Ae",
  BASE: "https://gigantesazapasalta2026-sudo.github.io/gigantes-salta-2026/APP_PUBLICA_GIGANTES_AZAPA/",
  FOTOS: {
    video:"https://lh3.googleusercontent.com/d/1gWdHZ5Kzy02qj6sXE5jR7t2-3oJqkET0",
    m10m12:"https://lh3.googleusercontent.com/d/1KIAs8jwr5kv6XfsfcRulr6jjIvHaeU37",
    m10m12b:"https://lh3.googleusercontent.com/d/1udE1rXMtgwCiLoupCF_QVo9ICkGuDCaE",
    entrenamiento:"https://lh3.googleusercontent.com/d/1kkrcFg-Xgh9OoItl5VuZq-Plf5Sfr6AL",
    entrenadores:"https://lh3.googleusercontent.com/d/1_Q_4Sx1NBksBFpPNEA2wYMusz5OHFUlM",
    entrenador1:"https://lh3.googleusercontent.com/d/1U6bC9wFFLcp6Y3SQeMySRBPlo8sh4Wh3",
    entrenador2:"https://lh3.googleusercontent.com/d/1KizLAGY__bH-DDvyytFe04_T9vL8HgbF",
    entrenador3:"https://lh3.googleusercontent.com/d/1kYRvTdeB8VAmIh0Pj8M6OwulU3SRMw_3",
    ninos2:"https://lh3.googleusercontent.com/d/1xV3V7SsFf0vFQHFeZyYR-QaQU3P6SWHs",
    ninos:"https://lh3.googleusercontent.com/d/12gdAbF7-b2U368QWZl-wkn_452w9i91G",
    m14:"https://lh3.googleusercontent.com/d/148VaNKj5RitxyA_-vt367D95yzbqgdQr",
    tercer:"https://lh3.googleusercontent.com/d/1AUJVv1Vs_PxBHsQXWy2IaOaePhIZSZm2",
    fogata:"https://lh3.googleusercontent.com/d/1pe5-hfPw4Ed5PkoRGg80pBlzWmoaN1UK",
    estadio:"https://lh3.googleusercontent.com/d/1sM21bwM6ecxiCzx0hsn8qhnjPctsQcuJ",
    playa:"https://lh3.googleusercontent.com/d/1GwljunkxpOP0Er6a6IkRmC5AgFL7u9Ss"
  },
  PAGINA_FOTO:{
    "inscripcion":"ninos2","documentos_carga":"entrenadores","mi_estado":"m10m12",
    "actividades":"tercer","bingos":"fogata","aportes":"estadio","sponsors":"playa",
    "avance":"estadio","galeria_club":"entrenadores","manual_uso":"m10m12",
    "itinerario":"ninos2","merchandising":"m10m12","default":"ninos2"
  }
};
function injectTopbar(){
  if(document.getElementById('gb-topbar'))return;
  const css=document.createElement('style');
  css.textContent=`#gb-topbar{position:fixed;top:0;left:0;right:0;z-index:9000;display:flex;align-items:center;justify-content:space-between;padding:10px 18px;background:rgba(11,15,20,.96);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,255,255,.15);box-shadow:0 2px 20px rgba(0,0,0,.4);font-family:Arial,sans-serif}#gb-topbar .gb-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:#fff;font-weight:900}#gb-topbar .gb-brand img{width:42px;height:42px;border-radius:50%;object-fit:cover;background:#fff;padding:2px;flex-shrink:0}#gb-topbar .gb-brand small{display:block;color:#f36b21;font-size:.62rem;text-transform:uppercase;letter-spacing:.5px}#gb-topbar .gb-brand span{font-size:.88rem}#gb-topbar .gb-btn{width:42px;height:42px;border:1px solid rgba(255,255,255,.2);border-radius:8px;background:rgba(255,255,255,.08);color:#fff;font-size:1.4rem;cursor:pointer;flex-shrink:0}#gb-drawer{display:none;position:fixed;top:0;right:0;z-index:9999;width:min(320px,90vw);height:100vh;background:#fff;color:#111;padding:18px;box-shadow:-20px 0 60px rgba(0,0,0,.5);overflow-y:auto;font-family:Arial,sans-serif}#gb-drawer.open{display:block}#gb-drawer .gb-dh{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}#gb-drawer .gb-x{width:38px;height:38px;border:0;border-radius:8px;background:#111;color:#fff;font-size:1.2rem;cursor:pointer}#gb-drawer a{display:flex;align-items:center;gap:10px;color:#111;text-decoration:none;border-left:4px solid #f36b21;background:#fef3ec;border-radius:0 8px 8px 0;padding:11px 14px;margin:6px 0;font-weight:700;font-size:.88rem}#gb-drawer a:hover{background:#fee4cc}body{padding-top:62px!important}`;
  document.head.appendChild(css);
  const B=GIGANTES.BASE;
  const bar=document.createElement('header');
  bar.id='gb-topbar';
  bar.innerHTML=`<a class="gb-brand" href="${B}index.html"><img src="${GIGANTES.LOGO}" alt="Gigantes de Azapa" onerror="this.src='https://placehold.co/42/f36b21/fff?text=G'"><div><small>Gigantes de Azapa</small><span>Salta 2026</span></div></a><button class="gb-btn" onclick="document.getElementById('gb-drawer').classList.toggle('open')">☰</button>`;
  document.body.insertBefore(bar,document.body.firstChild);
  const nav=document.createElement('nav');
  nav.id='gb-drawer';
  nav.innerHTML=`<div class="gb-dh"><strong>Menú</strong><button class="gb-x" onclick="document.getElementById('gb-drawer').classList.remove('open')">✕</button></div><a href="${B}inscripcion.html">🏉 Inscribir jugador</a><a href="${B}documentos_carga.html">📄 Subir documentos</a><a href="${B}mi_estado.html">🔍 Mi estado</a><a href="${B}itinerario.html">🗓 Itinerario</a><a href="${B}actividades.html">🤝 Actividades</a><a href="${B}aportes.html">💛 Hacer un aporte</a><a href="${B}merchandising.html">👕 Merchandising</a><a href="${B}bingos.html">🎰 Bingos</a><a href="${B}sponsors.html">🏢 Sponsors</a><a href="${B}avance.html">📊 Avance de meta</a><a href="${B}galeria_club.html">📸 Galería</a><a href="${B}index.html">🏠 Portada</a>`;
  document.body.appendChild(nav);
  document.addEventListener('click',e=>{const d=document.getElementById('gb-drawer');if(d&&!d.contains(e.target)&&!e.target.classList.contains('gb-btn'))d.classList.remove('open');});
}
function injectHeroBg(){
  const hero=document.querySelector('.hero,header.hero,.hero-header');
  if(!hero)return;
  const page=location.pathname.split('/').pop().replace(/\.html?$/,'');
  const fotoKey=GIGANTES.PAGINA_FOTO[page]||'default';
  const fotoUrl=GIGANTES.FOTOS[GIGANTES.PAGINA_FOTO[fotoKey]]||GIGANTES.FOTOS.ninos2;
  hero.style.position='relative';hero.style.overflow='hidden';
  if(!hero.querySelector('.gb-video-wrap')){
    const wrap=document.createElement('div');wrap.className='gb-video-wrap';
    wrap.style.cssText='position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none';
    const vid=document.createElement('video');
    vid.autoplay=true;vid.muted=true;vid.loop=true;vid.playsInline=true;
    vid.style.cssText='width:100%;height:100%;object-fit:cover;opacity:.4';
    vid.innerHTML=`<source src="${GIGANTES.FOTOS.video}" type="video/mp4">`;
    vid.onerror=()=>{wrap.style.backgroundImage=`url("${fotoUrl}")`;wrap.style.backgroundSize='cover';vid.remove();};
    const ov=document.createElement('div');
    ov.style.cssText='position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,15,20,.3) 0%,rgba(11,15,20,.65) 55%,rgba(11,15,20,.97) 100%)';
    wrap.appendChild(vid);wrap.appendChild(ov);hero.insertBefore(wrap,hero.firstChild);
    Array.from(hero.children).forEach(c=>{if(c!==wrap&&!c.style.zIndex){c.style.position='relative';c.style.zIndex='1';}});
  }
  hero.style.color='#fff';
}
function fixLogos(){
  const F={'m10m12.jpg':GIGANTES.FOTOS.m10m12,'entrenamiento.jpg':GIGANTES.FOTOS.entrenamiento,'Entrenadores.jpg':GIGANTES.FOTOS.entrenadores,'Niños reunidos 2.jpg':GIGANTES.FOTOS.ninos2,'Niños reunidos.jpg':GIGANTES.FOTOS.ninos,'m14.jpg':GIGANTES.FOTOS.m14,'3er tiempo.jpg':GIGANTES.FOTOS.tercer,'fogata formando club.jpg':GIGANTES.FOTOS.fogata,'Rugby estadio.jpg':GIGANTES.FOTOS.estadio,'rugby playa.jpg':GIGANTES.FOTOS.playa};
  document.querySelectorAll('img').forEach(img=>{
    const src=img.getAttribute('src')||'';
    if(src.includes('01_APP_SITIO_WEB')||src.includes('logo-gigantes')){img.src=GIGANTES.LOGO;img.style.cssText+=';width:42px;height:42px;border-radius:50%;object-fit:cover;background:#fff;padding:2px';return;}
    const fn=decodeURIComponent(src.split('/').pop());
    if(F[fn]&&!src.startsWith('https://lh3'))img.src=F[fn];
  });
}
async function sendToGigantes(data){
  const url=window.GIGANTES_APPS_SCRIPT_URL;
  if(!url||url.includes('PEGAR'))return{ok:false,configured:false};
  return new Promise(resolve=>{
    const cb='gCb_'+Date.now(),s=document.createElement('script'),u=new URL(url);
    Object.entries(data).forEach(([k,v])=>u.searchParams.set(k,String(v)));
    u.searchParams.set('callback',cb);
    const t=setTimeout(()=>{cleanup();resolve({ok:false,configured:true});},12000);
    function cleanup(){clearTimeout(t);delete window[cb];s.remove();}
    window[cb]=r=>{cleanup();resolve({ok:true,configured:true,...r});};
    s.onerror=()=>{cleanup();resolve({ok:false,configured:true});};
    s.src=u.toString();document.body.appendChild(s);
  });
}
function init(){injectTopbar();injectHeroBg();fixLogos();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
window.addEventListener('load',fixLogos);
