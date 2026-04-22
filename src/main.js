import './scss/style.scss';

const body = document.body;
const header = body.querySelector('.header');
const burger = header.querySelector('.burger');
const burgerLine = burger.querySelector('.burger__line');
const pageMenu = body.querySelector('.page__menu');

window.addEventListener('scroll', () => {
  const headerClassName = 'header--active';
  const windowScroll = window.scrollY;
  const isScrolled = windowScroll !== 0;
  const headerHasClassName = header.className.includes(headerClassName);

  if (isScrolled && !headerHasClassName) {
    header.classList.add(headerClassName);
  }

  if (!isScrolled && headerHasClassName) {
    header.classList.remove(headerClassName)
  }
});

window.addEventListener('load', () => {
  pageMenu.classList.remove('page__menu--no-transition-duration');
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  burgerLine.classList.toggle('burger__line--active');
  pageMenu.classList.toggle('page__menu--active');
});
