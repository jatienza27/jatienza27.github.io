const y = new Date();
document.getElementById("year").innerHTML = "Year: " + y.getFullYear();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date();
let month = months[m.getMonth()];
document.getElementById("month").innerHTML = "Month: " + month;

const d = new Date();
document.getElementById("date").innerHTML = "Date: " + d.getDate();

setInterval(hrTimer, 1000);

function hrTimer() {
  const d = new Date();
  document.getElementById("hours").innerHTML = "Hour: " + d.getHours();
}

setInterval(minTimer, 1000);

function minTimer() {
  const d = new Date();
  document.getElementById("minutes").innerHTML = "Minutes: " + d.getMinutes();
}

setInterval(secTimer, 1000);

function secTimer() {
  const d = new Date();
  document.getElementById("seconds").innerHTML = "Seconds: " + d.getSeconds();
}

