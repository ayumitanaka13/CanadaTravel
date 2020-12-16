const mediaQuery = window.matchMedia('(min-width: 425px)');

var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // if(matchMedia('(min-width: 425px)').matches) {
      slidesPerView: 1,
      breakpoints: {
        // 425px以上の場合
        425: {
          slidesPerView: 2,
        },
        // 980px以上の場合
        980: {
          slidesPerView: 3,
        },
      },
      spaceBetween: 30,
      loop: true,
    // }





  });