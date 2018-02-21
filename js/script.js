$(document).ready(function() {
  var mySwiper = new Swiper('#slider1', {
    speed: 600,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $('.btn-menu').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      close: function() {
        $('#menu').removeClass('mfp-hide');
      }
    }
  });

});