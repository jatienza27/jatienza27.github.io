const months = 12;
const days = 365;
const hours = 8760;
const minutes = 525600;
const seconds = 31536000;

main();

function main() {
    let numOfYears = getYears();
    let numOfMonths = getMonths(numOfYears, months);
    let numOfDays = getDays(numOfYears, days);
    let numOfHours = getHours(numOfYears, hours);
    let numOfMinutes = getMinutes(numOfYears, minutes);
    let numOfSeconds = getSeconds(numOfYears, seconds);
    displayResults(numOfYears, numOfMonths, numOfDays, numOfHours, numOfMinutes, numOfSeconds)
}

function getYears() {
    let numOfYears = window.prompt("Please enter how old you are in years:");
    numOfYears = Number(numOfYears);
    return numOfYears;

}

function getMonths(numOfYears, months) {
    let numOfMonths = (numOfYears * months);
    return numOfMonths;

}

function getDays(numOfYears, days) {
    let numOfDays = (numOfYears * days);
    return numOfDays;
}

function getHours(numOfYears, hours) {
    let numOfHours = (numOfYears * hours);
    return numOfHours;
}

function getMinutes(numOfYears, minutes) {
    let numOfMinutes = (numOfYears * minutes);
    return numOfYears;
}

function getSeconds(numOfYears, seconds) {
    let numOfSeconds = (numOfYears * seconds);
    return numOfSeconds;
}

function displayResults(numOfYears, numOfMonths, numOfDays, numOfHours, numOfMinutes, numOfSeconds) {
    let results = prompt ("Would you like to know how old you are in Months, Days, Hours, Minutes, or Seconds");
    if (results == "Months") {
        numOfYears = numOfYears.toFixed(1);
        numOfMonths = numOfMonths.toFixed(1);
        document.getElementById("numOfYears").innerText = numOfYears;
        document.getElementById("numOfMonths").innerText = numOfMonths;
    } else if (results == "Days") {
        numOfYears = numOfYears.toFixed(1);
        numOfDays = numOfDays.toFixed(1);
        document.getElementById("numOfYears").innerText = numOfYears;
        document.getElementById("numOfDays").innerText = numOfDays;
    } else if (results == "Hours") {
        numOfYears = numOfYears.toFixed(1);
        numOfHours = numOfHours.toFixed(1);
        document.getElementById("numOfYears").innerText = numOfYears;
        document.getElementById("numOfHours").innerText = numOfHours;
    } else if (results == "Minutes") {
        numOfYears = numOfYears.toFixed(1);
        numOfMinutes = numOfMinutes.toFixed(1);
        document.getElementById("numOfYears").innerText = numOfYears;
        document.getElementById("numOfMinutes").innerText = numOfMinutes;
    } else if (results == "Seconds") {
    numOfYears = numOfYears.toFixed(1);
    numOfSeconds = numOfSeconds.toFixed(1);
    document.getElementById("numOfYears").innerText = numOfYears;
    document.getElementById("numOfSeconds").innerText = numOfSeconds;
    }
}

function myFunction() {
    alert("Congratulations! 🥳 You've calculated how old you are in various values! 👏");
  }