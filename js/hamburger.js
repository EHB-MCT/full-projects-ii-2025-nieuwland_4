///////HAMBURGER MENU////////

const hamburger = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
   menu.classList.toggle('show');

   if (hamburger.textContent === '\u2630') {
      hamburger.textContent = '\u2715'; // X character
   } else {
      hamburger.textContent = '\u2630'; // Hamburger character
   }
});