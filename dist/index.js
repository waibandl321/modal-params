"use strict";

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.search");

var images = document.querySelectorAll('.main__image');
var modal = document.querySelector('.modal');
var modalInner = document.querySelector('.modal__inner');
var modalImage = document.querySelector('.modal__image');

function paramsId() {
  var _loop = function _loop(i) {
    images[i].addEventListener('click', function () {
      var data = images[i].getAttribute('src');
      modalImage.setAttribute('src', data);
      modal.classList.add('active');
    });
    modal.addEventListener('click', function (e) {
      if (!e.target.modalInner) {
        modal.classList.remove('active');
        document.body.classList.remove('is-active');
      } else {
        return;
      }
    });
  };

  for (var i = 0; i < images.length; i++) {
    _loop(i);
  }
}

paramsId();

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

index = getUrlParameter('id'); //?id=数字を取得

$('.main__image').eq(index - 1).trigger('click');
