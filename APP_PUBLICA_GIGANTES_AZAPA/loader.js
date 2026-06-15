// loader.js — Autoinyecta form-bridge.js en páginas que no lo cargan
(function() {
  if (window.__GB_LOADED__) return;
  window.__GB_LOADED__ = true;
  var s = document.createElement('script');
  s.src = 'form-bridge.js';
  document.head.appendChild(s);
  
  // También cargar config.js si no está
  if (!window.GIGANTES_APPS_SCRIPT_URL) {
    var c = document.createElement('script');
    c.src = 'config.js';
    document.head.appendChild(c);
  }
})();
