///////HAMBURGER MENU////////

const hamburger = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () => {
   menu.classList.toggle('show');
   hamburger.classList.toggle('rotate');
})