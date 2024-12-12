// script.js
document.addEventListener('DOMContentLoaded', () => {
    const secciones = document.querySelectorAll('section'); // Selecciona todas las secciones

    const mostrarSecciones = () => {
        const scrollY = window.scrollY + window.innerHeight; // Determina la posición de la ventana de visualización

        secciones.forEach(seccion => {
            const seccionTop = seccion.offsetTop; // Obtiene la posición de la parte superior de la sección

            // Verifica si la sección está en el área visible del viewport
            if (scrollY > seccionTop) {
                seccion.classList.add('visible'); // Añade la clase visible
            } else {
                seccion.classList.remove('visible'); // Elimina la clase visible si la sección ya no está en la vista
            }
        });
    };

    // Ejecutar al hacer scroll
    window.addEventListener('scroll', mostrarSecciones);

    // También ejecutar al cargar la página para ver si alguna sección debe mostrarse desde el inicio
    mostrarSecciones();
});
