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