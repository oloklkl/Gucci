var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".slide-intro .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".studio-slide", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".studio-slide .swiper-pagination",
    clickable: true,
  },

  observer: true,
  observeParents: true,
});

var swiper = new Swiper(".mixSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 3 },
    480: { slidesPerView: 3 },
    0: { slidesPerView: 1 },
  },
});

var swiper = new Swiper(".gucci-recommend__swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
