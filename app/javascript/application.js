// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

// Responsiveness

const heroSectionExpandsVH = () => {
  const hero = document.querySelector('.intro').parentNode;
  return hero.scrollHeight > hero.clientHeight;
}

const moveLinks = (where) => {
  const cta = document.querySelector('.cta-links');
  const intro = document.querySelector('.intro');
  const hero = document.querySelector('.intro').parentNode;
  document.querySelector('.cta-links').remove();
  if (where === 'beforeIntro') {
    hero.insertBefore(cta, intro);
  } else if (where === 'afterIntro') {
    hero.appendChild(cta);
  }
  return hero;
};


const responsiveness = () => {
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
    moveLinks('beforeIntro').style.height = 'fit-content';
  } else {
    // Put cta-links below intro text and make hero-section height 100vh
    moveLinks('afterIntro').style.removeProperty('height');
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

// Rearraange DOM for Print
window.addEventListener("beforeprint", () => {
  // const head = document.createElement('div');
  // head.classList.add('print-head');
  // const start = document.querySelector('.column-start');
  // const title = start.querySelector('.title').cloneNode(true);
  // const links = start.querySelector('.cta-links').cloneNode(true);
  // start.querySelector('.title').remove();
  // start.querySelector('.cta-links').remove();
  // head.appendChild(title);
  // head.appendChild(links);
  // start.querySelector('.hero-section').insertBefore(head, document.querySelector('.intro'));


});

// Rearraange DOM for Screen again
// window.addEventListener("afterprint", () => {
//   const title = document.querySelector('.title');
//   const links = document.querySelector('.cta-links');
//   document.querySelector('.print-head').remove();
//   const start = document.querySelector('.column-start');
//   start.querySelector('.hero-section').insertBefore(title, document.querySelector('.intro'));
//   start.querySelector('.hero-section').appendChild(links);
//   responsiveness();
// });
