// Animaciones con ScrollReveal
ScrollReveal().reveal('h1, form, footer, .social-buttons, .proyecto', {
  delay: 200,
  distance: '30px',
  duration: 800,
  easing: 'ease-out'
});

// Toggle del menú hamburguesa
function toggleMenu() {
  document.getElementById('navbar').classList.toggle('active');
}

// Envío del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('respuesta').style.display = 'block';
      form.reset();
    });
  }
});




