const CACHE_NAME = "gigantes-salta-2026-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./accesos_publicos.html",
  "./admin_maestro.html",
  "./ruta_familias.html",
  "./ruta_comunidad.html",
  "./ruta_empresas.html",
  "./galeria_club.html",
  "./material_difusion.html",
  "./propuesta_sponsors.html",
  "./inscripcion.html",
  "./actividades.html",
  "./merchandising.html",
  "./control_merchandising.html",
  "./validacion_merchandising.html",
  "./catalogo_merchandising.html",
  "./espacios_sponsor_merchandising.html",
  "./compromiso_sponsor_merchandising.html",
  "./sponsors.html",
  "./album_visual.html",
  "./bingos.html",
  "./avance.html",
  "./revision_directiva.html",
  "./acta_validacion_directiva.html",
  "./panel_lanzamiento.html",
  "./presentacion_presidenta.html",
  "./publicar_en_netlify.html",
  "./despues_de_publicar.html",
  "./orden_medios_publicacion.html",
  "./cierre_para_publicar.html",
  "./simulacion_piloto.html",
  "./faltantes_finales.html",
  "./correos_automaticos.html",
  "./prueba_correos.html",
  "./manual_uso.html",
  "./manual_presentacion_app.html",
  "./manual_merchandising_sponsors.html",
  "./auditoria_general_20260604.html",
  "./auditoria_final_piloto.html",
  "./documentos.html",
  "./app.css",
  "./app.js",
  "./manifest.json",
  "./logo-gigantes.jpg",
  "./campana-experiencia.jpg",
  "./campana-rugby-familia.jpg",
  "../09_DISENO_MERCHANDISING/Polera de Juego.png",
  "../09_DISENO_MERCHANDISING/Polera de salida.png",
  "../09_DISENO_MERCHANDISING/Jockey oficial.png",
  "../09_DISENO_MERCHANDISING/Gorro invierno.png",
  "../09_DISENO_MERCHANDISING/Vaso Termico.png",
  "../09_DISENO_MERCHANDISING/Tazon.png",
  "../09_DISENO_MERCHANDISING/Pulsera.png",
  "../09_DISENO_MERCHANDISING/Llavero.png",
  "../09_DISENO_MERCHANDISING/Banderin.png",
  "../09_DISENO_MERCHANDISING/Mochila.png",
  "../09_DISENO_MERCHANDISING/Botella Aluminio.png",
  "../09_DISENO_MERCHANDISING/1780547050260.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(() => null))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
