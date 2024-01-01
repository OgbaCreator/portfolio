// const headerHome = document.querySelector('.js-home');
// const headerAbout = document.querySelector('.js-about');
// const headerService = document.querySelector('.js-service');
// const headerReviews = document.querySelector('.js-reviews');
// const headerWork = document.querySelector('.js-work');
// const headerContact = document.querySelector('.js-contact');


// // =========== header link is clicked ===========
// headerHome.classList.add('clicked');
// headerHome.addEventListener('click', () => {
//   headerHome.classList.add('clicked');
//   headerAbout.classList.remove('clicked');
//   headerService.classList.remove('clicked');
//   headerWork.classList.remove('clicked');
//   headerReviews.classList.remove('clicked');
//   headerContact.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');
// });

// headerAbout.addEventListener('click', () => {
//   headerAbout.classList.add('clicked');
//   headerHome.classList.remove('clicked');
//   headerService.classList.remove('clicked');
//   headerWork.classList.remove('clicked');
//   headerContact.classList.remove('clicked');
//   headerReviews.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');
// });

// headerService.addEventListener('click', () => {
//   headerService.classList.add('clicked');
//   headerHome.classList.remove('clicked');
//   headerAbout.classList.remove('clicked');
//   headerWork.classList.remove('clicked');
//   headerReviews.classList.remove('clicked');
//   headerContact.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');});

// headerWork.addEventListener('click', () => {
//   headerWork.classList.add('clicked');
//   headerHome.classList.remove('clicked');
//   headerAbout.classList.remove('clicked');
//   headerService.classList.remove('clicked');
//   headerReviews.classList.remove('clicked');
//   headerContact.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');
// });

// headerReviews.addEventListener('click', () => {
//   headerReviews.classList.add('clicked');
//   headerHome.classList.remove('clicked');
//   headerAbout.classList.remove('clicked');
//   headerService.classList.remove('clicked');
//   headerContact.classList.remove('clicked');
//   headerWork.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');
// });

// headerContact.addEventListener('click', () => {
//   headerContact.classList.add('clicked');
//   headerHome.classList.remove('clicked');
//   headerAbout.classList.remove('clicked');
//   headerService.classList.remove('clicked');
//   headerReviews.classList.remove('clicked');
//   headerWork.classList.remove('clicked');
//   icons.classList.remove('active');
//   header2.classList.remove('active');
//   html.classList.remove('active');
// });

// ========== menu sidebar ===========
const html = document.querySelector('.js-html');
const header2 = document.querySelector('.js-header-2');
const icons = document.querySelector('.js-icons');

icons.addEventListener('click', () => {
  icons.classList.toggle('active');
  html.classList.toggle('active');
  header2.classList.toggle('active');
})

document.onclick = (e) => {
  if (!icons.contains(e.target) && !header2.contains(e.target)) {
    icons.classList.remove('active');
    header2.classList.remove('active');
    html.classList.remove('active');
  }

}