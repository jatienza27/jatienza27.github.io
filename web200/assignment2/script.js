let foot = 12;
let yard = 3;
let mile = 1760;
let feet = 5280;
let inch = 63360;
let kilometer = 1.609344;
let meter = 1000;
let centimeter = 100;


let numberOfMiles = window.prompt("Enter Number of Miles");

console.log(`Input: ${typeof numberOfMiles}`);

numberOfMiles = Number(numberOfMiles);

let numberOfYards = (numberOfMiles * mile);
console.log(`Calculation: ${typeof numberOfYards}`);

numberOfYards = numberOfYards.toFixed(1);
console.log(`Fixed: ${typeof numberOfYards}`);

let numberOfFeet = (numberOfMiles * feet);
console.log(`Calculation: ${typeof numberOfFeet}`);

numberOfFeet = numberOfFeet.toFixed(1);
console.log(`Fixed: ${typeof numberOfFeet}`);

let numberOfInches = (numberOfMiles * inch);
console.log(`Calculation: ${typeof numberOfInches}`);

numberOfInches = numberOfInches.toFixed(1);
console.log(`Fixed: ${typeof numberOfInches}`);

let numberOfKilometers = (numberOfMiles * kilometer);
console.log(`Calculation: ${typeof numberOfKilometers}`);

numberOfKilometers = numberOfKilometers.toFixed(1);
console.log(`Fixed: ${typeof numberOfKilometers}`);

let numberOfMeters = ((numberOfMiles * kilometer) * meter);
console.log(`Calculation: ${typeof numberOfMeters}`);

numberOfMeters = numberOfMeters.toFixed(1);
console.log(`Fixed: ${typeof numberOfMeters}`);

let numberOfCentimeters = (((numberOfMiles * kilometer) * meter) * centimeter);
console.log(`Calculation: ${typeof numberOfCentimeters}`);

numberOfCentimeters = numberOfCentimeters.toFixed(1);
console.log(`Fixed: ${typeof numberOfCentimeters}`);

document.getElementById("numberOfMiles").innerText = numberOfMiles;
document.getElementById("numberOfYards").innerText = numberOfYards;
document.getElementById("numberOfFeet").innerText = numberOfFeet;
document.getElementById("numberOfFeet").innerText = numberOfFeet;
document.getElementById("numberOfInches").innerText = numberOfInches;
document.getElementById("numberOfKilometers").innerText = numberOfKilometers;
document.getElementById("numberOfMeters").innerText = numberOfMeters;
document.getElementById("numberOfCentimeters").innerText = numberOfCentimeters;

debugger;
