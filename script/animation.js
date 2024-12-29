window.addEventListener('load', function() {
    var imagen = document.getElementById('imagen-logo');

    imagen.style.opacity = '0';

    // Inicia la animación al recargar la página
    setTimeout(function() {
        imagen.style.transition = 'opacity 1s';
        imagen.style.opacity = '1';
    }, 100); // Pequeño retraso para asegurar que se renderiza correctamente

    // Limpia los estilos después de la animación
    imagen.addEventListener('transitionend', function() {
        imagen.style.transition = '';
    });
});
