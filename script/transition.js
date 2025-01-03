// Asegúrate de haber cargado GSAP y el plugin ScrollTo en tu proyecto
gsap.registerPlugin(ScrollToPlugin);

// Selecciona todos los enlaces dentro del header
document.querySelectorAll('header a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    // Obtén el destino del desplazamiento del atributo href del enlace
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      // Desplaza la ventana hacia el destino con un desplazamiento suave
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 100}, // Puedes ajustar el offsetY según sea necesario
        duration: .8, // Ajusta la duración del desplazamiento para mayor suavidad
        ease: "power2.out" // Utiliza una función de ease para suavizar el movimiento
      });
    }
  });
});
// Resaltar enlace activo según la sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header a');

const setActiveLink = () => {
  let currentSectionIndex = sections.length;

  // Encuentra la sección visible más cercana
  while (--currentSectionIndex && window.scrollY + window.innerHeight / 3 < sections[currentSectionIndex].offsetTop) {}

  // Remueve la clase activa de todos los enlaces
  navLinks.forEach(link => link.classList.remove('active'));

  // Agrega la clase activa al enlace correspondiente
  navLinks[currentSectionIndex]?.classList.add('active');
};

// Escuchar evento de scroll
window.addEventListener('scroll', setActiveLink);


