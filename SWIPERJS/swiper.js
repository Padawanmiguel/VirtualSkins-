var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 25,
  centerSlide: 'true',
  fade:  'true',
  grabCursor: 'true',
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: 'true',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

    },
});