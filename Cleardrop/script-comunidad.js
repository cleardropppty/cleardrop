// Esperar a que el DOM esté completamente cargado antes de ejecutar
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.banner-principal');
  const contenido = document.querySelector('.contenido-banner');
  const boton = document.getElementById('botonBanner');

  // 1. Efecto Parallax y desvanecimiento en el scroll
  window.addEventListener('scroll', () => {
    const posicionScroll = window.scrollY;

    // Solo ejecuta efectos si el banner está visible en pantalla (rendimiento)
    if (posicionScroll <= banner.offsetHeight) {
      // Mueve suavemente la imagen de fondo hacia abajo
      banner.style.backgroundPositionY = `${posicionScroll * 0.4}px`;
      
      // Desvanece suavemente el texto y lo desplaza un poco al hacer scroll hacia abajo
      contenido.style.opacity = Math.max(1 - posicionScroll / 350, 0);
      contenido.style.transform = `translateY(${posicionScroll * 0.15}px)`;
    }
  });

  // 2. Interacción al hacer click en el botón (Scroll Suave)
  if (boton) {
    boton.addEventListener('click', (evento) => {
      const idDestino = boton.getAttribute('href');
      
      // Si el enlace apunta a un ancla (#), realiza un scroll suave
      if (idDestino.startsWith('#')) {
        evento.preventDefault();
        const elementoDestino = document.querySelector(idDestino);
        
        if (elementoDestino) {
          elementoDestino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }
});
/**
 * =======================================================
 * LÓGICA DE INTERACCIÓN: SECCIÓN DE COMUNIDAD (ClearDrop)
 * =======================================================
 * Implementación de filtros de categorías, buscador dinámico en 
 * tiempo real, reacción de "Likes" y comentarios instantáneos.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Referencias principales del DOM
    const buscadorInput = document.getElementById("communitySearchInput");
    const filtroBotones = document.querySelectorAll(".filter-pill");
    const postCards = document.querySelectorAll(".post-card");

    let filtroActivo = "todas";
    let textoBusqueda = "";

    // --- 1. Filtros y Búsqueda combinados ---
    function aplicarFiltros() {
        postCards.forEach(card => {
            const categoriaCard = card.getAttribute("data-category");
            const tituloCard = card.querySelector(".post-title")?.textContent.toLowerCase() || "";
            const descCard = card.querySelector(".post-text")?.textContent.toLowerCase() || "";
            const autorCard = card.querySelector(".post-author")?.textContent.toLowerCase() || "";

            // Debe coincidir tanto con la pestaña activa como con el buscador
            const coincideCategoria = (filtroActivo === "todas" || categoriaCard === filtroActivo);
            const coincideBusqueda = (
                tituloCard.includes(textoBusqueda) || 
                descCard.includes(textoBusqueda) || 
                autorCard.includes(textoBusqueda)
            );

            // Muestra u oculta la tarjeta con una animación sutil
            if (coincideCategoria && coincideBusqueda) {
                card.style.display = "";
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transition = "opacity 0.3s ease";
                }, 50);
            } else {
                card.style.display = "none";
            }
        });
    }

    // Buscador interactivo
    if (buscadorInput) {
        buscadorInput.addEventListener("input", (e) => {
            textoBusqueda = e.target.value.toLowerCase().trim();
            aplicarFiltros();
        });
    }

    // Filtros de pestaña
    filtroBotones.forEach(btn => {
        btn.addEventListener("click", () => {
            filtroBotones.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroActivo = btn.getAttribute("data-filter");
            aplicarFiltros();
        });
    });

    // --- 2. Sistema de Gotas de Agua (Likes) ---
    // El contador no es un span aparte: es un nodo de texto justo
    // después del <svg>, dentro del primer botón de post-actions-left.
    document.body.addEventListener("click", (e) => {
        const likeBtn = e.target.closest(".post-actions-left .post-action-btn:first-child");
        if (!likeBtn) return;
        e.preventDefault();

        const svg = likeBtn.querySelector("svg");
        const dandoLike = !likeBtn.classList.contains("liked");
        likeBtn.classList.toggle("liked");
        svg.style.fill = dandoLike ? "currentColor" : "none";

        for (const nodo of likeBtn.childNodes) {
            if (nodo.nodeType === Node.TEXT_NODE && nodo.textContent.trim() !== "") {
                const actual = parseInt(nodo.textContent.trim(), 10) || 0;
                nodo.textContent = ` ${actual + (dandoLike ? 1 : -1)} `;
                break;
            }
        }
    });

    // Botón "Comentar": lleva el foco a la caja de nuevo comentario
    document.body.addEventListener("click", (e) => {
        const comentarBtn = e.target.closest(".btn-comment");
        if (!comentarBtn) return;
        e.preventDefault();
        const postCard = comentarBtn.closest(".post-card");
        const input = postCard?.querySelector(".comment-input-field");
        if (input) {
            input.scrollIntoView({ behavior: "smooth", block: "center" });
            input.focus();
        }
    });

    // --- 3. Enviar comentario nuevo con Enter (arriba del comentario principal) ---
    document.body.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.target.classList.contains("comment-input-field")) {
            e.preventDefault();
            agregarComentario(e.target);
        }
    });

    function agregarComentario(input) {
        const texto = input.value.trim();

        if (texto === "") {
            input.style.borderColor = "red";
            setTimeout(() => (input.style.borderColor = ""), 1000);
            return;
        }

        const hilo = input.closest(".comment-thread");
        if (!hilo) return;

        const nuevoComentario = document.createElement("div");
        nuevoComentario.className = "comment-row";
        nuevoComentario.innerHTML = `
            <img class="comment-avatar" src="img/perfil incognito.png" alt="img.usuario">
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-author">@Tú</span>
                    <span class="comment-time">Ahora mismo</span>
                </div>
                <p class="comment-text">${escaparHTML(texto)}</p>
            </div>
        `;

        // Se inserta como primer elemento del hilo: queda ARRIBA
        // del comentario principal (@Dani.big47#) y de sus respuestas.
        hilo.insertBefore(nuevoComentario, hilo.firstElementChild);

        input.value = "";
    }

    // Prevención de ataques de inyección XSS
    function escaparHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});