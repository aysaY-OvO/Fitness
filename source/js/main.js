import {iosVhFix} from './utils/ios-vh-fix.js';
import {Form} from './modules/form-validate/form.js';
import {initTabs} from './modules/tabs/init-tabs.js';

// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  const aboutVideo = document.querySelector('[data-video="about-video"]');
  const aboutPlayVideo = document.querySelector('[data-button="play-video"]');
  const aboutVideoPreview = document.querySelector('[data-video-preview]');

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    aboutPlayVideo.addEventListener('click', () => {
      aboutVideoPreview.style.display = 'none';
      const videoSrc = aboutVideo.getAttribute('src');
      aboutVideo.setAttribute('src', videoSrc + '&autoplay=1');
      aboutVideo.style.display = 'block';
    });
    initTabs();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
