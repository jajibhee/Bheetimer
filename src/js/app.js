import "./slider";
//variables
let m = document.querySelector("#minute");
let s = document.querySelector("#seconds");
let pause = document.querySelector(".pause");
let stop = document.querySelector(".stop");
let imgPause = document.querySelector(".pause__img");

let sec = 0;
let min = 0;
let id;

// STATE to track the counter.
let isCounting = false;

//Pause and Play button
pause.addEventListener("click", () => {
  isCounting = !isCounting;
  imgPause.classList.toggle("clicked");

  if (isCounting) {
    id = setInterval(timer, 999);
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

//Stop button
stop.addEventListener("click", () => {
  clearInterval(id);
  //need to set the value back to false.
  isCounting = false;
  sec = 0;
  min = 0;
  s.innerHTML = ("0" + sec).slice(-2);
  m.innerHTML = ("0" + min).slice(-2);
});
