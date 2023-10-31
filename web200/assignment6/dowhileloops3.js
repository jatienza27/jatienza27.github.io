let numOfScores = Number(prompt("How many scores would you like to enter?"));
let i = 0;
let score = 0;
let totalScore = 0;

do {
    score = Number(prompt("Please enter you score:"));
    totalScore += score;
    i++;
} while ( i < numOfScores);

let avgScore = totalScore / numOfScores;

document.getElementById ("dowhileloops").innerHTML = "Your average score is: " + avgScore;