// La función que obtiene la fecha y hora y actualiza los elementos HTML
function updateDateTime() {
    const now = new Date();

    // Opciones para el formato de fecha en español (ej: mié, 19 nov 2025)
    const optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', optionsDate);

    // Opciones para el formato de hora (ej: 17:35:00)
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('es-ES', optionsTime);

    // Obtener los elementos HTML
    const dateElement = document.getElementById('dateDisplay');
    const clockElement = document.getElementById('clockDisplay');

    // Si los elementos existen, actualizar su contenido
    if (dateElement && clockElement) {
        dateElement.textContent = dateString.toUpperCase();
        clockElement.textContent = timeString;
    }
}

// 1. Ejecutar la función inmediatamente
updateDateTime(); 

// 2. Configurar la ejecución para que se repita cada 1000 milisegundos (1 segundo)
setInterval(updateDateTime, 1000);

function initLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = lightbox?.querySelector('.lightbox-close');

    if (!lightbox || !lightboxImg || !lightboxCaption) {
        return;
    }

    const openLightbox = (imgElement) => {
        lightboxImg.src = imgElement.src;
        lightboxImg.alt = imgElement.alt;
        const captionText = imgElement.closest('.side-image')?.querySelector('figcaption')?.textContent || imgElement.alt;
        lightboxCaption.textContent = captionText;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
    };

    const closeLightbox = () => {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
    };

    document.querySelectorAll('.side-image img').forEach((img) => {
        img.addEventListener('click', () => openLightbox(img));
    });

    closeBtn?.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeLightbox();
        }
    });
}

initLightbox();