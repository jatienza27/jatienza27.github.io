const foot = 12;
const yard = 3;
const mile = 1760;
const feet = 5280;
const inch = 63360;
const kilometer = 1.609344;
const meter = 1000;
const centimeter = 100;

main();

function main() {
    let numOfMiles = getMiles();
    let numOfYards = getYards(numOfMiles, mile);
    let numOfFeet = getFeet(numOfMiles, feet);
    let numOfInches = getInches(numOfMiles, inch);
    let numOfKilometers = getKilometers(numOfMiles, kilometer);
    let numOfMeters = getMeters(numOfMiles,kilometer, meter);
    let numOfCentimeters = getCentimeters(numOfMiles, kilometer, meter, centimeter);
    displayResults(numOfMiles, numOfYards, numOfFeet, numOfInches, numOfKilometers, numOfMeters, numOfCentimeters)
}

function getMiles() {
    let numOfMiles = window.prompt("Enter Number of Miles");
    numOfMiles = Number(numOfMiles);
    return numOfMiles;

}

function getYards(numOfMiles, mile) {
    let numOfYards = (numOfMiles * mile);
    return numOfYards;

}

function getFeet(numOfMiles, feet) {
    let numOfFeet = (numOfMiles * feet);
    return numOfFeet;
}

function getInches(numOfMiles, inch) {
    let numOfInches = (numOfMiles * inch);
    return numOfInches;
}

function getKilometers(numOfMiles, kilometer) {
    let numOfKilometers = (numOfMiles * kilometer);
    return numOfKilometers;
}

function getMeters (numOfMiles, kilometer, meter) {
    let numOfMeters = ((numOfMiles * kilometer) * meter);
    return numOfMeters;
}

function getCentimeters (numOfMiles, kilometer, meter, centimeter) {
    let numOfCentimeters = (((numOfMiles * kilometer) * meter) * centimeter);
    return numOfCentimeters;
}

function displayResults(numOfMiles, numOfYards, numOfFeet, numOfInches, numOfKilometers, numOfMeters, numOfCentimeters) {
    let results = prompt ("Would you like the results of your measurements be in US or Metric?");
    if (results == "US") {
        numOfYards = numOfYards.toFixed(1);
        numOfFeet = numOfFeet.toFixed(1);
        numOfInches = numOfInches.toFixed(1);
        document.getElementById("numOfMiles").innerText = numOfMiles;
        document.getElementById("numOfYards").innerText = numOfYards;
        document.getElementById("numOfFeet").innerText = numOfFeet;
        document.getElementById("numOfInches").innerText = numOfInches;
    } else {
        numOfKilometers = numOfKilometers.toFixed(1);
        numOfMeters = numOfMeters.toFixed(1);
        numOfCentimeters = numOfCentimeters.toFixed(1);
        document.getElementById("numOfMiles").innerText = numOfMiles;
        document.getElementById("numOfKilometers").innerText = numOfKilometers;
        document.getElementById("numOfMeters").innerText = numOfMeters;
        document.getElementById("numOfCentimeters").innerText = numOfCentimeters;
    }
    
}

function myFunction() {
    document.getElementById("numOfMiles").style.color = "red";
    document.getElementById("numOfYards").style.color = "orange";
    document.getElementById("numOfFeet").style.color = "yellow";
    document.getElementById("numOfInches").style.color = "green";
    document.getElementById("numOfKilometers").style.color = "blue";
    document.getElementById("numOfMeters").style.color = "indigo";
    document.getElementById("numOfCentimeters").style.color = "violet";
  }
