//REFACTORED CODE
import Swiper from "swiper";

const minEl = document.querySelector("#minute");
const secEl = document.querySelector("#seconds");
const runBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");

// alert("Welcome o"); fix with modal

let sec = 0;
let min;
let timer;
let isRunning = false;

let user = prompt("Please enter your name").toUpperCase();

const format = val => `0${val}`.slice(-2);

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

//Get the current/active value;
const currentSlideEl = document.querySelector(".swiper-slide-active");
let currentSlide = currentSlideEl.innerHTML;

const audio = document.querySelector("#audio");

const count = state => {
  if (secEl.innerHTML === "00" && min > 0) {
    sec = 60;
  }

  if (sec === 0 && min === 0) {
    clearInterval(timer);
    secEl.innerHTML = "00";
    min = Number(currentSlide);
    minEl.innerHTML = format(min);
    runImg.classList.toggle("clicked");
    //its currently true cause count runs when its true but it changes it back to false
    isRunning = !isRunning;
    audio.play();
    setTimeout(() => {
      audio.pause();
    }, 3000);
    numRound++;
    round.innerHTML = `${numRound}/4`;

    if (numRound > 4) {
      numRound = 0;
      round.innerHTML = `0/4`;
      numGoal++;
      goal.innerHTML = `${numGoal}/3`;
    }

    if (numRound == 0 && numGoal > 3) {
      round.innerHTML = "Congratulations";
      goal.innerHTML = user.toUpperCase();
      numGoal = 0;
      numRound = 0;
      // tracker.forEach(item => {
      //   item.style.display = "none";
      // });
      isRunning = false;
    } else {
      round.innerHTML = `${numRound}/4`;
    }
    return;
  }

  if (sec === 60) {
    sec--;
    secEl.innerHTML = format(sec);
    min--;
    minEl.innerHTML = format(min);
  } else {
    sec--;
    secEl.innerHTML = format(sec);
  }
};

const run = () => {
  isRunning = !isRunning;
  runImg.classList.toggle("clicked");
  //if secEl  =0, use sec as 60 else... dont do anything.
  secEl.innerHTML === "00" ? (sec = 60) : null;

  if (isRunning) {
    timer = setInterval(count, 999);
  } else {
    clearInterval(timer);
  }
};

const reset = () => {
  isRunning = false;
  if (runImg.classList.contains("clicked")) {
    runImg.classList.remove("clicked");
  }
  clearInterval(timer);
  secEl.innerHTML = "00";
  minEl.innerHTML = format(currentSlide);
  numGoal = 0;
  numRound = 0;
  goal.innerHTML = `0/3`;
  round.innerHTML = `0/4`;
};

//grabbing the value
mySwiper.on("click", e => {
  currentSlide = e.target.innerText;
  reset();
  sec = 0;
  secEl.innerHTML = format(sec);
  min = Number(e.target.innerHTML);
  minEl.innerHTML = format(min);
});

min = Number(currentSlide);
minEl.innerHTML = `0${min}`.slice(-2);

const runImg = document.querySelector(".play__img");
const round = document.querySelector(".tracker .round p");
const goal = document.querySelector(".tracker .goal p");
const tracker = document.querySelectorAll(".tracker h4");

let rounds = round.innerHTML.split("");
let goals = goal.innerHTML.split("");

let numRound = Number(rounds[0]);
let numGoal = Number(goals[0]);
console.log(typeof numRound);

stopBtn.addEventListener("click", reset);
runBtn.addEventListener("click", run);
