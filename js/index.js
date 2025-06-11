//////SLIDESHOW///////

const slides = document.querySelectorAll('.slideshow img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

///////HAMBURGER MENU////////

const hamburger = document.querySelector('.hamburgerBtn');
const menu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () => {
   menu.classList.toggle('show');
   hamburger.classList.toggle('rotate');
})
