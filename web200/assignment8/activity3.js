let numOfScores = prompt("How many scores would you like to enter?");
let i = 0;
let score = 0;

while (i < numOfScores) {
   score = prompt("Please enter you score:");
   i++;
}

let avgScore = score / numOfScores;

document.getElementById ("arrays").innerHTML = "Your average score is: " + avgScore;
