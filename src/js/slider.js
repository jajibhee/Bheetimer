import Swiper from "swiper";

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    clickable: true
  },
  centeredSlides: true,
  slideToClickedSlide: true,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  grabCursor: true
});

mySwiper.on("click", () => console.log("slide changed"));
