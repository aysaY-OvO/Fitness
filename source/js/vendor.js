// Swiper 8.4.7
import {Navigation, Swiper} from './vendor/swiper.js';
import './vendor/focus-visible-polyfill.js';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
});
swiper();
