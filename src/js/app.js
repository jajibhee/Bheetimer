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

//play
pause.addEventListener("click", () => {
  imgPause.classList.toggle("clicked");
  //if it has already been initialized, dont do it again.
  if (!id) {
    id = setInterval(timer, 1000);
  }
});

function timer() {
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
  if (sec == 59) {
    sec = 0;
    min++;
  } else {
    sec++;
  }
}

//stop will reset the timer.
stop.addEventListener("click", () => {
  clearInterval(id);
  //once its stopped, set the id back to false
  id = false;
  sec = 0;
  min = 0;
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
});

//alternating pause
