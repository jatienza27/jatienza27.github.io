//Not sure why functions are not displaying.
const months = 12;
const days = 365;
const hours = 8760;
const minutes = 525600;
const seconds = 31536000;

main();

function main() {
    let numOfYears = getYears;
    let numOfMonths = getMonths;
    let numOfDays = getDays;
    let numOfHours = getHours;
    let numOfMinutes = getMinutes;
    let numOfSeconds = getSeconds
    displayResults(numOfYears, numOfMonths, numOfDays, numOfHours, numOfMinutes, numOfSeconds)
}

function getYears() {
    let numOfYears = window.prompt("Enter Number of Years");
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

function displayResults(numOfMiles, numOfYards, numOfFeet, numberOfInches, numOfKilometers, numOfMeters, numOfCentimeters) {
    numOfYards = numOfYards.toFixed(1);
    numOfFeet = numOfFeet.toFixed(1);
    numOfInches = numOfInches.toFixed(1);
    numOfKilometers = numOfKilometers.toFixed(1);
    numOfMeters = numOfMeters.toFixed(1);
    numOfCentimeters = numOfCentimeters.toFixed(1);
    document.getElementById("numOfMiles").innerText = numOfMiles;
    document.getElementById("numOfYards").innerText = numOfYards;
    document.getElementById("numOfFeet").innerText = numOfFeet;
    document.getElementById("numOfFeet").innerText = numOfFeet;
    document.getElementById("numOfInches").innerText = numOfInches;
    document.getElementById("numOfKilometers").innerText = numOfKilometers;
    document.getElementById("numOfMeters").innerText = numOfMeters;
    document.getElementById("numOfCentimeters").innerText = numOfCentimeters;
}
