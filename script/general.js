// import { icons, header2, html } from "./header";

// ============== scroll reveal ================
ScrollReveal({
  reset: false,
  distance: '80px',
  duration: 2000,
  delay: 100
});

ScrollReveal().reveal('.page, .about-me p, .about-me-adjust p, .picture-box, .vision-box, .mission-box, .service-header p, .service-grid1 p, .grid2-ii div, .section-4-container, .work-header p, .reviews-header p, .reviews-grid', { origin: 'top' });

ScrollReveal().reveal('.page h2, .my-pic-div, .js-bxv, .grid2-ii p, .work-grid2 h1, .work-grid1, .work-grid3', { origin: 'left' });
ScrollReveal().reveal('.my-portfolio, .about-me-div, .js-bxm, .grid2-i li, .work-grid1 h1, .work-grid2, .work-grid3 h1', { origin: 'right' });


ScrollReveal({
  reset: true,
  distance: '35px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('.section-5', { origin: 'bottom' });


// ============== typed js ================

const typed = new Typed('.multiple-text', {
  strings: ['Social Media Manager', 'Social Media Marketer', 'Digital Marketer', 'Content Creator'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Section link active on scroll

const sectionEls = document.querySelectorAll('.js-section');
const sectionLinkEls = document.querySelectorAll('.js-section-link');

let currentSection = 'home';
window.addEventListener('scroll', () => {
  sectionEls.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop) {
      currentSection = sectionEl.id;
    }
  });

  sectionLinkEls.forEach((sectionLinkEl) => {
    if (sectionLinkEl.href.includes(currentSection)) {
      document.querySelector('.clicked').classList.remove('clicked');
      sectionLinkEl.classList.add('clicked');
    }

  });
});

// ========== menu sidebar ===========
const html = document.querySelector('.js-html');
const header2 = document.querySelector('.js-header-2');
const icons = document.querySelector('.js-icons');

icons.addEventListener('click', () => {
  icons.classList.toggle('active');
  html.classList.toggle('active');
  header2.classList.toggle('active');
});

sectionLinkEls.forEach((sectionLinkEl) => {

  sectionLinkEl.addEventListener('click', () => {
    icons.classList.remove('active');
    header2.classList.remove('active');
    html.classList.remove('active');
  });

});

document.onclick = (e) => {
  if (!icons.contains(e.target) && !header2.contains(e.target)) {
    icons.classList.remove('active');
    header2.classList.remove('active');
    html.classList.remove('active');
  }

}
