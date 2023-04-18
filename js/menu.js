const menuIcon = document.querySelector('.hamburger-open');
const menu = document.querySelector('.header__links--menu');
// const logo = document.querySelector('.logo-header');
const closeBtn = document.querySelector('.hamburger-close');
// const email = document.querySelector('.email-icon');
const nav = document.querySelector('.header__links');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  // logo.classList.toggle('visible');
  closeBtn.classList.toggle('close');
  // email.classList.toggle('visible');
  nav.classList.toggle('change-width');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  // logo.classList.toggle('visible');
  closeBtn.classList.toggle('close');
  // email.classList.toggle('visible');
  nav.classList.toggle('change-width');
});