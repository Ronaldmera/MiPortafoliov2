document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de easing (transición)
      once: false, // Animar solo la primera vez
      mirror: true, // Permite que la animación ocurra al volver a hacer scroll
    });
  
    // Seleccionamos todos los elementos con la clase "skill"
    const skills = document.querySelectorAll('.skill');
  

    skills.forEach((skill, index) => {
      skill.setAttribute('data-aos', 'fade-up'); 
      skill.setAttribute('data-aos-duration', '500'); // Duración de la animación
      skill.setAttribute('data-aos-delay', `${index * 50}`); // Retraso progresivo basado en el índice
    });
  });
  