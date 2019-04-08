import Swiper from "swiper";
let sec = 0;
let min = 0;
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
  min = Number(currentSlide);
  sec = 0;
  console.log(currentSlide);
  timer();
});

//variables
let m = document.querySelector("#minute");
let s = document.querySelector("#seconds");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let imgPause = document.querySelector(".pause__img");
let round = document.querySelector(".tracker .round p");
//turn it into an array
let roundy = round.innerHTML.split("");
console.log(roundy);

//convert roundy into a number
let numRound = Number(roundy[0]);

let id;
// STATE to track the counter.
let isCounting = false;

//Pause and Play button
pause.addEventListener("click", () => {
  //change the status of isCounting.
  isCounting = !isCounting;
  imgPause.classList.toggle("clicked");

  if (isCounting) {
    id = setInterval(timer, 999);
  } else {
    clearInterval(id);
  }
});

function timer() {
  if (min === 0 && sec === 0) {
    clearInterval(id);
    s.innerHTML = "00";
    m.innerHTML = "00";
    isCounting = false;

    imgPause.classList.toggle("clicked");

    numRound++;
    if (numRound > 4) {
      numRound = "0";
      round.innerHTML = numRound + "/4";
    } else {
      round.innerHTML = numRound + "/4";
    }
  } else if (sec === 0) {
    sec = 59;
    min--;
  } else {
    sec--;
  }
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
}

//Stop button
stop.addEventListener("click", () => {
  clearInterval(id);
  //need to set the value back to false.
  isCounting = false;
  if (imgPause.classList.contains("clicked")) {
    imgPause.classList.remove("clicked");
  }

  s.innerHTML = "00";
  m.innerHTML = "00";
});

//Using the time slider
