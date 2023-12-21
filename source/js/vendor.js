// Swiper 8.4.7
import Swiper from './vendor/swiper.js';
import './vendor/focus-visible-polyfill.js';

const trainerSwiper = new Swiper('.trainers__swiper', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.trainers__button-next',
    prevEl: '.trainers__button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    280: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const reviewSwiper = new Swiper('.review__swiper', {
  loop: false,
  autoHeight: true,
  navigation: {
    nextEl: '.review__button-prev',
    prevEl: '.review__button-next',
  },
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  spaceBetween: 40,
});

export {trainerSwiper, reviewSwiper};
