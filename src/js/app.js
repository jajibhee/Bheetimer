// alert("I am in  bruv");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");

function setTime() {
  var start = new Date();
  let currentHour = start.getHours();
  let currentMinute = start.getMinutes();

  hour.innerHTML = currentHour;
  minute.innerHTML = currentMinute;
  console.log(start.getSeconds());
}

setInterval(() => {
  setTime();
}, 1000);
