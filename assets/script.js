// script.js - menú lateral y formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menuContainer = document.querySelector(".menu-container");
  const closeBtn = document.querySelector(".menu-close");

  // Mostrar menú
  if (toggle && menuContainer) {
    toggle.addEventListener("click", () => {
      menuContainer.classList.add("show");
    });
  }

  // Ocultar menú
  if (closeBtn && menuContainer) {
    closeBtn.addEventListener("click", () => {
      menuContainer.classList.remove("show");
    });
  }

  // Formulario
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por tu mensaje. Te responderé pronto.");
      form.reset();
    });
  }

  // Scroll suave para anclas
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
