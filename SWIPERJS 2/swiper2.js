var swiper = new Swiper(".on-sale-content", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 60,
  centerSlide: 'true',
  fade:  'true',
  grabCursor: 'true',
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