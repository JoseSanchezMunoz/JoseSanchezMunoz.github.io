// Selección de elementos
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abrir / cerrar menú al hacer click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Cerrar menú al hacer click en un link
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
