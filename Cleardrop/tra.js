/* ═══════════════════════════════════════════════════════════
   translate.js — ES ↔ EN toggle for ClearDrop
   ═══════════════════════════════════════════════════════════ */

// ── Translation map ───────────────────────────────────────
const TRANSLATIONS = {

  // NAVBAR
  "Inicio":         "Home",
  "Mapas":          "Maps",
  "Reportes":       "Reports",
  "Educación":      "Education",
  "Comunidad":      "Community",
  "Noticias":       "News",
  "Tienda":         "Store",
  "Sobre nosotros": "About Us",
  "Abrir menú":     "Open menu",

  // HERO
  "azul":           "blue",
  "verde":          "green",
  "para un futuro":      
  "for a future",
  "Conecta a personas con soluciones de agua. Reporta fugas, explora el mapa interactivo y únete a la comunidad ambiental de Panamá.":
    "Connect people with water solutions. Report leaks, explore the interactive map, and join Panama's environmental community.",
  "Reportar problema": "Report issue",
  "Explorar mapa":     "Explore map",

  // QUICK ACTIONS
  "Acciones rápidas":       "Quick actions",
  "¿Qué deseas hacer hoy?": "What would you like to do today?",
  "Reportar fuga":          "Report a leak",
  "Informa sobre una fuga de agua en tu comunidad para una solución rápida.":
    "Report a water leak in your community for a quick fix.",
  "Ver mapa interactivo":   "View interactive map",
  "Explora el mapa de Panamá con reportes en tiempo real y puntos de atención.":
    "Explore the Panama map with real-time reports and service points.",
  "Aprender sobre el agua": "Learn about water",
  "Accede a recursos educativos sobre el cuidado del agua y medio ambiente.":
    "Access educational resources on water care and the environment.",
  "Unirse como voluntario": "Join as a volunteer",
  "Únete a nuestra red de voluntarios y contribuye al uso responsable del agua.":
    "Join our volunteer network and contribute to responsible water use.",

  // STATS STRIP
  "En la provincia de Chiriquí": "In the province of Chiriqui",
  "Datos recolectados":          "Collected data",
  "Personas encuestadas":        "People surveyed",
  "Tienen afectaciones con el servicio del agua":
    "Have issues with water service",
  "Corregimientos abarcados":    "Districts covered",
  "Exige una solución":          "Demand a solution",

  // MAP SECTION
  "Mapa interactivo":  "Interactive map",
  "Reportes en tiempo real en Panamá": "Real-time reports across Panama",
  "Visualiza el estado del agua en todo el país. Los marcadores muestran fugas activas, zonas en reparación y puntos de distribución de agua potable.":
    "View the water status across the country. Markers show active leaks, repair zones, and drinking water distribution points.",
  "Ver mapa completo": "View full map",
  "Panamá":            "Panama",
  "Fuga activa":       "Active leak",
  "En proceso":        "In progress",
  "Resuelto":          "Resolved",
  "Distribución":      "Distribution",

  // NEWS / ALERTS
  "Alertas & Noticias":      "Alerts & News",
  "Últimas actualizaciones": "Latest updates",
  "Ver todas":               "View all",
  "En vivo":                 "Live",

  // Ticker
  "Corte de agua programado en David – 12:45 AM":
    "Scheduled water outage in David – 12:45 AM",
  "Fuga reparada en Av. Balboa, Panamá Ciudad":
    "Leak repaired on Av. Balboa, Panama City",
  "Campaña de ahorro de agua activa en Chiriquí":
    "Water-saving campaign active in Chiriqui",
  "Nuevo punto de distribución en Colón":
    "New distribution point in Colon",
  "Taller de educación ambiental – Registro abierto":
    "Environmental education workshop – Registration open",

  // Alert 1
  "Corte de agua programado en David": "Scheduled water outage in David",
  "Interrupción del servicio entre las 10 PM y las 4 AM por mantenimiento de tubería principal.":
    "Service interruption from 10 PM to 4 AM due to main pipeline maintenance.",
  "12:45 AM – Hoy": "12:45 AM – Today",
  "Urgente":        "Urgent",

  // Alert 2
  "Fuga detectada en Penonomé": "Leak detected in Penonome",
  "Equipo técnico ya fue despachado. Se estima reparación en 3 horas.":
    "Technical team has been dispatched. Repair estimated within 3 hours.",
  "2:10 AM – Hoy": "2:10 AM – Today",

  // Alert 3
  "Taller de Educación Ambiental": "Environmental Education Workshop",
  "Únete al taller virtual \"Agua para Todos\" el próximo viernes. Registro gratuito.":
    "Join the virtual workshop \"Water for All\" next Friday. Free registration.",
  "Vie, 5 Jun — 6:00 PM": "Fri, Jun 5 — 6:00 PM",
  "Evento": "Event",

  // Alert 4
  "Fuga en Av. Balboa reparada": "Leak on Av. Balboa repaired",
  "El servicio fue restaurado con éxito. Gracias a los 14 reportes de la comunidad.":
    "Service successfully restored. Thanks to 14 community reports.",
  "Ayer – 11:30 PM": "Yesterday – 11:30 PM",

  // Alert 5
  "Campaña de ahorro en Chiriquí": "Water-saving campaign in Chiriqui",
  "Se solicita reducir consumo en horario pico (7–9 AM) durante la próxima semana.":
    "Residents are asked to reduce consumption during peak hours (7–9 AM) for the next week.",
  "28 May – 3 Jun": "May 28 – Jun 3",
  "Aviso":          "Notice",

  // Alert 6
  "Nuevo punto de distribución en Colón": "New distribution point in Colon",
  "Disponible desde hoy en el Parque Bolívar. Horario: 8 AM – 4 PM de lunes a viernes.":
    "Available today at Parque Bolívar. Hours: 8 AM – 4 PM, Monday to Friday.",
  "Hoy – 8:00 AM": "Today – 8:00 AM",
  "Nuevo":         "New",

  // FOOTER
  "Conectando comunidades con soluciones de agua limpia para un Panamá sostenible.":
    "Connecting communities with clean water solutions for a sustainable Panama.",
  "Plataforma":      "Platform",
  "Mapa interactivo": "Interactive map",
  "Voluntariado":    "Volunteering",
  "Foros":           "Forums",
  "Eventos":         "Events",
  "Blog ambiental":  "Environmental blog",
  "Legal":           "Legal",
  "Términos de uso": "Terms of use",
  "Privacidad":      "Privacy",
  "Contacto":        "Contact",
  "© 2026 ClearDrop. Todos los derechos reservados.":
    "© 2026 ClearDrop. All rights reserved.",
  "Hecho con 💧 para Panamá": "Made with 💧 for Panama",

  // FAB
  "Reportar ahora": "Report now",
};

// ── Reverse map (EN → ES) built automatically ─────────────
const TRANSLATIONS_REVERSE = Object.fromEntries(
  Object.entries(TRANSLATIONS).map(([es, en]) => [en, es])
);

// ── State ─────────────────────────────────────────────────
let isEnglish = false;

// ── Core walker ───────────────────────────────────────────
function applyTranslations(map) {
  const SKIP = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"]);

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (SKIP.has(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      },
    }
  );

  let node;
  while ((node = walker.nextNode())) {
    const trimmed = node.textContent.trim();
    if (map[trimmed] !== undefined) {
      node.textContent = node.textContent.replace(trimmed, map[trimmed]);
    }
  }

  // Attributes
  document.querySelectorAll("[placeholder],[title],[aria-label]").forEach(el => {
    ["placeholder", "title", "ariaLabel"].forEach(attr => {
      const val = el[attr];
      if (val && map[val]) el[attr] = map[val];
    });
  });
}

// ── Toggle handler ────────────────────────────────────────
function toggleLanguage() {
  isEnglish = !isEnglish;
  applyTranslations(isEnglish ? TRANSLATIONS : TRANSLATIONS_REVERSE);

  // Update both buttons (desktop + mobile)
  const labels = ["langLabel", "langLabelMobile"];
  labels.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = isEnglish ? "ES" : "EN";
  });

  const btns = ["langToggle", "langToggleMobile"];
  btns.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.classList.toggle("is-en", isEnglish);
    btn.setAttribute("aria-label", isEnglish ? "Cambiar a español" : "Switch to English");
  });

  // Persist preference
  localStorage.setItem("cleardrop-lang", isEnglish ? "en" : "es");
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Wire up both toggle buttons
  ["langToggle", "langToggleMobile"].forEach(id => {
    document.getElementById(id)?.addEventListener("click", toggleLanguage);
  });

  // Restore saved preference
  if (localStorage.getItem("cleardrop-lang") === "en") {
    toggleLanguage();
  }
});