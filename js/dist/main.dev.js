"use strict";

$(document).ready(function () {
  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: 'ease-out',
    autoplay: true,
    autoplaySpeed: 5000
  });
});