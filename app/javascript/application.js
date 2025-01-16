// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

// Responsiveness

const heroSectionExpandsVH = () => {
  const hero = document.querySelector('.intro').parentNode;
  console.log(hero.scrollHeight, hero.clientHeight);
  return hero.scrollHeight > hero.clientHeight;
}

const responsiveness = () => {
  console.log("checking for responsiveness");
  if (window.innerWidth < 1400 && window.innerHeight > window.innerWidth) {
    // Remove the bootstrap modal toggle attribute
    document.querySelectorAll('.carousel-inner').forEach((element) => {
      element.removeAttribute('data-bs-toggle');
    });
  } else {
    // Add the bootstrap modal toggle attribute
    document.querySelectorAll('.carousel-inner').forEach((element) => {
      element.setAttribute('data-bs-toggle', 'modal');
    });
  }
  // If the screen is too small, move the cta-links to the top of the hero-section
  if (heroSectionExpandsVH()) {
    // Put cta-links on top of intro text and make hero-section height 100%
    const cta = document.querySelector('.cta-links');
    const intro = document.querySelector('.intro');
    const hero = document.querySelector('.intro').parentNode;
    document.querySelector('.cta-links').remove();
    hero.insertBefore(cta, intro);
    hero.style.height = 'fit-content';
  } else {
    // Put cta-links below intro text and make hero-section height 100vh
    const cta = document.querySelector('.cta-links');
    const intro = document.querySelector('.intro');
    const hero = document.querySelector('.intro').parentNode;
    document.querySelector('.cta-links').remove();
    hero.appendChild(cta);
    hero.style.removeProperty('height');
  }
};

window.addEventListener('load', () => {
  responsiveness();
});

window.addEventListener('resize', () => {
  responsiveness();
});
// Listen for orientation changes
screen.orientation.addEventListener('change', () => {
  responsiveness();
});
