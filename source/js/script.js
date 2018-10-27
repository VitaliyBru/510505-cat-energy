'use strict';

(function () {
  var button = document.querySelector('.page-header__btn');
  if (!button) {
    return;
  }
  var navElem = document.querySelector('.page-header__nav');
  var iconClose = button.querySelector('.page-header__icon-close');
  var iconMenu = button.querySelector('.page-header__icon-menu');

  var onButtonClick = function () {
    navElem.classList.toggle('page-header__nav--off');
    iconMenu.classList.toggle('page-header__icon-menu--off');
    iconClose.classList.toggle('page-header__icon-close--on');
  };

  button.classList.add('page-header__btn--on');
  navElem.classList.add('page-header__nav--off');
  button.addEventListener('click', onButtonClick);
})();

ymaps.ready(function () {
  var mapCenter = [59.939119, 30.319326];
  var pinCenter = [59.938780, 30.323161];
  var pinSize = [124, 106];
  var pinOffset = [-62, -103];
  if (window.screen.width < 1440) {
    mapCenter = pinCenter;
  }
  if (window.screen.width < 768) {
    pinSize = [62, 53];
    pinOffset = [-31, -51];
  }

  var myMap = new ymaps.Map('map', {
      center: mapCenter,
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

    myPlacemark = new ymaps.Placemark(pinCenter, {
      hintContent: 'Cat Energy',
      balloonContent: 'ул. Большая Конюшенная, д. 19/8'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-pin.png',
      // Размеры метки.
      iconImageSize: pinSize,
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: pinOffset
    });

  myMap.geoObjects
    .add(myPlacemark);
});
