// ===== MENU MOBILE TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a'); // Seleciona todos os links dentro do menu

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
      
})