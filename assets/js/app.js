// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});








window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  // Función para ajustar el diseño de las tarjetas
  const adjustCardLayout = () => {
    // Si hay más de tres tarjetas
    if (cards.length > 3) {
      cards.forEach((card, index) => {
        if (index >= 3) {
          card.style.marginTop = '20px'; // Agrega un margen superior a partir de la cuarta tarjeta
        }
      });
    }
  };

  // Llama a la función al cargar la página
  adjustCardLayout();

  // También puedes llamar a la función cuando el tamaño de la ventana cambia
  window.addEventListener('resize', adjustCardLayout);
});