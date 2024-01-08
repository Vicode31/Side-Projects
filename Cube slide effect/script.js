// View Swiper.js demos
// https://swiperjs.com/demos

var swiper = new Swiper(".cubeSwiper", {
  effect: "cube",
  grabCursor: true,
  pauseOnMouseEnter: true,
  speed: 3000,
  autoplay: {
    delay: 200,
    disableOnInteraction: false,
  },
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
