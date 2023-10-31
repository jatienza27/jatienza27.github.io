let numOfScores = Number(prompt("How many scores would you like to enter?"));
let i = 0;
let score = 0;
let totalScore = 0;

while (i < numOfScores) {
   score = Number(prompt("Please enter you score:"));
   totalScore += score;
   i++;
}

let avgScore = totalScore / numOfScores;

document.getElementById ("whileloops").innerHTML = "Your average score is: " + avgScore;
