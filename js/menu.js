const menuIcon = document.querySelector('.hamburger-open');
const menu = document.querySelector('.header__links--menu');
const closeBtn = document.querySelector('.hamburger-close');
const nav = document.querySelector('.header__links');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  closeBtn.classList.toggle('close');
  nav.classList.toggle('change-width');
});

menu.addEventListener('click', () => {
  menu.classList.toggle('show');
  menuIcon.classList.toggle('show-icon');
  closeBtn.classList.toggle('close');
  nav.classList.toggle('change-width');
});