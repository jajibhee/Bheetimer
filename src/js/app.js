import "@glidejs/glide/dist/glide.min.js";

//GLIDEjs
const glide = new Glide(".glide", {
  type: "slider",
  gap: "10px",
  startAt: 0,
  perView: 4.5
});

glide.mount();

//counter
let m = document.querySelector("#minute");
let s = document.querySelector("#seconds");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let imgPause = document.querySelector(".pause__img");
//PAUSE BUTTON

let sec = 0;
let min = 0;
let id;

// STATE
let isCounting = false;

//play
pause.addEventListener("click", () => {
  isCounting = !isCounting;
  imgPause.classList.toggle("clicked");

  if (isCounting) {
    //if it has already been initialized, dont do it again.

    id = setInterval(timer, 100);
  } else {
    clearInterval(id);
  }
});

function timer() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
}

//stop will reset the timer.
stop.addEventListener("click", () => {
  clearInterval(id);
  sec = 0;
  min = 0;
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
});
