// alert("I am in  bruv");
import "@glidejs/glide/dist/glide.min.js";

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let controls = document.querySelector(".pause");
let imgPause = document.querySelector(".pause__img");

function setTime() {
  var start = new Date();
  let currentHour = start.getHours();
  let currentMinute = start.getMinutes();

  // if (currentHour.length <= 1) {
  //   currentHour = "0" + currentHour;
  // }
  // if (currentMinute.length <= 1) {
  //   currentMinute = "0" + currentMinute;
  // }
  hour.innerHTML = ("0" + currentHour).slice(-2);
  minute.innerHTML = ("0" + currentMinute).slice(-2);
  // console.log(start.getSeconds());
}

setInterval(() => {
  setTime();
}, 1000);

//GLIDE
const glide = new Glide(".glide", {
  type: "slider",
  gap: "10px",
  startAt: 0,
  perView: 4.5
});

glide.mount();

//PAUSE BUTTON
controls.addEventListener("click", () => {
  imgPause.classList.toggle("clicked");
});
