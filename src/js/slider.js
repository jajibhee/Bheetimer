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
  grabCursor: true,
  slidesOffsetAfter: 0
});

let currentSlide;
//grabbing the value
mySwiper.on("click", () => {
  currentSlide = mySwiper.slides[mySwiper.activeIndex].innerHTML;
  console.log(currentSlide);
});
