// form-bridge.js — Gigantes de Azapa Salta 2026
// Este archivo lo cargan todas las páginas. Aquí inyectamos logo, topbar y fotos.

const GIGANTES = {
  LOGO: "https://lh3.googleusercontent.com/d/1xXGqa0I_sw6C6QPcD_G-1fblDQlr9-Ae",
  BASE: "https://gigantesazapasalta2026-sudo.github.io/gigantes-salta-2026/APP_PUBLICA_GIGANTES_AZAPA/",
  FOTOS: {
    m10m12:      "https://lh3.googleusercontent.com/d/1KIAs8jwr5kv6XfsfcRulr6jjIvHaeU37",
    entrenamiento:"https://lh3.googleusercontent.com/d/1kkrcFg-Xgh9OoItl5VuZq-Plf5Sfr6AL",
    entrenadores: "https://lh3.googleusercontent.com/d/1_Q_4Sx1NBksBFpPNEA2wYMusz5OHFUlM",
    ninos2:       "https://lh3.googleusercontent.com/d/1xV3V7SsFf0vFQHFeZyYR-QaQU3P6SWHs",
    ninos:        "https://lh3.googleusercontent.com/d/12gdAbF7-b2U368QWZl-wkn_452w9i91G",
    m14:          "https://lh3.googleusercontent.com/d/148VaNKj5RitxyA_-vt367D95yzbqgdQr",
    tercer:       "https://lh3.googleusercontent.com/d/1AUJVv1Vs_PxBHsQXWy2IaOaePhIZSZm2",
    fogata:       "https://lh3.googleusercontent.com/d/1pe5-hfPw4Ed5PkoRGg80pBlzWmoaN1UK",
    estadio:      "https://lh3.googleusercontent.com/d/1sM21bwM6ecxiCzx0hsn8qhnjPctsQcuJ",
    playa:        "https://lh3.googleusercontent.com/d/1GwljunkxpOP0Er6a6IkRmC5AgFL7u9Ss",
    video:        "https://lh3.googleusercontent.com/d/1gWdHZ5Kzy02qj6sXE5jR7t2-3oJqkET0"
  }
};

// ─── 1. TOPBAR CON LOGO Y MENÚ ───────────────────────────────────────────────
(function injectTopbar() {
  // No inyectar si ya existe la portada (index.html tiene su propio topbar)
  if (document.getElementById('gigantes-topbar')) return;

  const style = document.createElement('style');
  style.textContent = `
    #gigantes-topbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: space-between;
      padding: 10px 18px;
      background: rgba(11,15,20,.96);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,255,255,.15);
      box-shadow: 0 2px 20px rgba(0,0,0,.3);
    }
    #gigantes-topbar .gb-brand {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none; color: #fff; font-weight: 900;
      font-family: Arial, sans-serif;
    }
    #gigantes-topbar .gb-brand img {
      width: 42px; height: 42px; border-radius: 50%;
      object-fit: cover; background: #fff; padding: 2px; flex-shrink: 0;
    }
    #gigantes-topbar .gb-brand-text small {
      display: block; color: #f36b21;
      font-size: .62rem; text-transform: uppercase; letter-spacing: .5px;
    }
    #gigantes-topbar .gb-brand-text span {
      font-size: .88rem;
    }
    #gigantes-topbar .gb-menu-btn {
      width: 42px; height: 42px;
      border: 1px solid rgba(255,255,255,.2); border-radius: 8px;
      background: rgba(255,255,255,.08); color: #fff;
      font-size: 1.4rem; cursor: pointer; flex-shrink: 0;
    }
    #gigantes-drawer {
      display: none; position: fixed; top: 0; right: 0; z-index: 99999;
      width: min(320px,90vw); height: 100vh;
      background: #fff; color: #111;
      padding: 18px; box-shadow: -20px 0 60px rgba(0,0,0,.4);
      overflow-y: auto; font-family: Arial, sans-serif;
    }
    #gigantes-drawer.gb-open { display: block; }
    #gigantes-drawer .gb-dhead {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    #gigantes-drawer .gb-dhead strong { font-size: 1rem; }
    #gigantes-drawer .gb-close {
      width: 38px; height: 38px; border: 0; border-radius: 8px;
      background: #111; color: #fff; font-size: 1.2rem; cursor: pointer;
    }
    #gigantes-drawer a {
      display: flex; align-items: center; gap: 10px;
      color: #111; text-decoration: none;
      border-left: 4px solid #f36b21; background: #fef3ec;
      border-radius: 0 8px 8px 0; padding: 11px 14px;
      margin: 6px 0; font-weight: 700; font-size: .88rem;
    }
    #gigantes-drawer a:hover { background: #fee4cc; }
    body { padding-top: 62px !important; }
  `;
  document.head.appendChild(style);

  const B = GIGANTES.BASE;
  const topbar = document.createElement('header');
  topbar.id = 'gigantes-topbar';
  topbar.innerHTML = `
    <a class="gb-brand" href="${B}index.html">
      <img src="${GIGANTES.LOGO}" alt="Logo Gigantes de Azapa"
           onerror="this.src='https://placehold.co/42x42/f36b21/fff?text=G'">
      <div class="gb-brand-text">
        <small>Gigantes de Azapa</small>
        <span>Salta 2026</span>
      </div>
    </a>
    <button class="gb-menu-btn" onclick="document.getElementById('gigantes-drawer').classList.toggle('gb-open')" aria-label="Abrir menú">☰</button>
  `;
  document.body.insertBefore(topbar, document.body.firstChild);

  const drawer = document.createElement('nav');
  drawer.id = 'gigantes-drawer';
  drawer.innerHTML = `
    <div class="gb-dhead">
      <strong>Menú</strong>
      <button class="gb-close" onclick="document.getElementById('gigantes-drawer').classList.remove('gb-open')" aria-label="Cerrar menú">✕</button>
    </div>
    <a href="${B}inscripcion.html">🏉 Inscribir jugador</a>
    <a href="${B}documentos_carga.html">📄 Subir documentos</a>
    <a href="${B}mi_estado.html">🔍 Mi estado</a>
    <a href="${B}itinerario.html">🗓 Itinerario del viaje</a>
    <a href="${B}actividades.html">🤝 Actividades solidarias</a>
    <a href="${B}aportes.html">💛 Hacer un aporte</a>
    <a href="${B}merchandising.html">👕 Merchandising</a>
    <a href="${B}bingos.html">🎰 Bingos</a>
    <a href="${B}sponsors.html">🏢 Sponsors</a>
    <a href="${B}avance.html">📊 Avance de meta</a>
    <a href="${B}galeria_club.html">📸 Galería del club</a>
    <a href="${B}manual_uso.html">📋 Manual de uso</a>
    <a href="${B}index.html">🏠 Portada</a>
  `;
  document.body.appendChild(drawer);

  // Cerrar drawer al hacer clic fuera
  document.addEventListener('click', e => {
    const d = document.getElementById('gigantes-drawer');
    if (d && !d.contains(e.target) && !e.target.classList.contains('gb-menu-btn')) {
      d.classList.remove('gb-open');
    }
  });
})();

// ─── 2. VIDEO DE FONDO EN HERO ───────────────────────────────────────────────
(function injectHeroVideo() {
  // Solo en páginas que tienen .hero pero no tienen ya un video
  const hero = document.querySelector('.hero');
  if (!hero || hero.querySelector('video')) return;

  // Crear video de fondo
  const videoWrap = document.createElement('div');
  videoWrap.style.cssText = 'position:absolute;inset:0;z-index:0;overflow:hidden;';

  const video = document.createElement('video');
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.style.cssText = 'width:100%;height:100%;object-fit:cover;opacity:.45;';

  const source = document.createElement('source');
  source.src = GIGANTES.FOTOS.video;
  source.type = 'video/mp4';
  video.appendChild(source);

  // Fallback: si el video no carga, usa foto de niños
  video.onerror = () => {
    videoWrap.style.backgroundImage = `url("${GIGANTES.FOTOS.ninos2}")`;
    videoWrap.style.backgroundSize = 'cover';
    videoWrap.style.backgroundPosition = 'center';
    video.remove();
  };

  videoWrap.appendChild(video);

  // Overlay oscuro encima del video
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(11,15,20,.35) 0%,rgba(11,15,20,.7) 60%,rgba(11,15,20,.97) 100%);';

  // El hero necesita position relative y sus hijos z-index
  hero.style.position = 'relative';
  hero.style.overflow = 'hidden';

  // Poner todos los hijos actuales sobre el video
  Array.from(hero.children).forEach(child => {
    if (!child.style.position || child.style.position === 'static') {
      child.style.position = 'relative';
      child.style.zIndex = '2';
    }
  });

  hero.insertBefore(overlay, hero.firstChild);
  hero.insertBefore(videoWrap, hero.firstChild);
})();

// ─── 3. CORREGIR LOGOS ROTOS ─────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  // Reemplazar logos con rutas rotas
  document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src') || '';
    if (
      src.includes('01_APP_SITIO_WEB') ||
      src.includes('logo-gigantes') ||
      src.includes('logo-tigres') ||
      (img.alt && img.alt.toLowerCase().includes('logo gigantes'))
    ) {
      img.src = GIGANTES.LOGO;
      img.style.cssText += 'width:46px;height:46px;border-radius:50%;object-fit:cover;background:#fff;padding:3px;';
    }
    // Fotos del club con rutas locales rotas
    const fotoMap = {
      'm10m12.jpg': GIGANTES.FOTOS.m10m12,
      '1 m10m12.jpg': GIGANTES.FOTOS.m10m12,
      'entrenamiento.jpg': GIGANTES.FOTOS.entrenamiento,
      'Entrenadores.jpg': GIGANTES.FOTOS.entrenadores,
      'entrenador 1.jpg': GIGANTES.FOTOS.entrenadores,
      'entrenador 2.jpg': GIGANTES.FOTOS.entrenadores,
      'entrenador 3.jpg': GIGANTES.FOTOS.entrenadores,
      'Niños reunidos 2.jpg': GIGANTES.FOTOS.ninos2,
      'Niños reunidos.jpg': GIGANTES.FOTOS.ninos,
      'niños reunidos.jpg': GIGANTES.FOTOS.ninos,
      'm14.jpg': GIGANTES.FOTOS.m14,
      '3er tiempo.jpg': GIGANTES.FOTOS.tercer,
      'fogata formando club.jpg': GIGANTES.FOTOS.fogata,
      'Rugby estadio.jpg': GIGANTES.FOTOS.estadio,
      'rugby playa.jpg': GIGANTES.FOTOS.playa,
    };
    const filename = src.split('/').pop();
    if (fotoMap[filename] && !src.startsWith('https://lh3')) {
      img.src = fotoMap[filename];
    }
  });

  // Corregir background-image del hero que usa rutas locales
  document.querySelectorAll('.hero, header').forEach(el => {
    const bg = el.style.backgroundImage || '';
    if (bg.includes('01_APP_SITIO_WEB') || bg.includes('campana') || bg.includes('niños')) {
      el.style.backgroundImage = bg
        .replace(/url\(['""]?[^'""]*01_APP_SITIO_WEB[^'""]*['""]?\)/g,
          `url("${GIGANTES.FOTOS.m10m12}")`)
        .replace(/url\(['""]?[^'""]*campana[^'""]*['""]?\)/g,
          `url("${GIGANTES.FOTOS.m10m12}")`)
        .replace(/url\(['""]?[^'""]*niños[^'""]*['""]?\)/g,
          `url("${GIGANTES.FOTOS.ninos2}")`);
    }
  });
});

// ─── 3. FUNCIÓN SEND TO GIGANTES (formularios → Apps Script) ─────────────────
async function sendToGigantes(data) {
  const url = window.GIGANTES_APPS_SCRIPT_URL;
  if (!url || url.includes('PEGAR')) {
    console.warn('Apps Script URL no configurada.');
    return { ok: false, configured: false };
  }
  return new Promise((resolve) => {
    const cb = 'gigCb_' + Date.now();
    const s = document.createElement('script');
    const u = new URL(url);
    Object.entries(data).forEach(([k, v]) => u.searchParams.set(k, v));
    u.searchParams.set('callback', cb);
    const t = setTimeout(() => { cleanup(); resolve({ ok: false, configured: true }); }, 12000);
    function cleanup() { clearTimeout(t); delete window[cb]; s.remove(); }
    window[cb] = (res) => { cleanup(); resolve({ ok: true, configured: true, ...res }); };
    s.onerror = () => { cleanup(); resolve({ ok: false, configured: true }); };
    s.src = u.toString();
    document.body.appendChild(s);
  });
}
