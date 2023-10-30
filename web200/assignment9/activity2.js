const y = new Date();
document.getElementById("year").innerHTML = "Year: " + y.getUTCFullYear();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const m = new Date();
let month = months[m.getUTCMonth()];
document.getElementById("month").innerHTML = "Month: " + month;

const d = new Date();
document.getElementById("date").innerHTML = "Date: " + d.getUTCDay();
