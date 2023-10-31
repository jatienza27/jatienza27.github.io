let numOfScores = Number(prompt("How many scores would you like to enter?"));
let score = 0;
let totalScore = 0;


for (let i = 0; i < numOfScores; i++) {
    score = Number(prompt("Please enter you score:"));
    totalScore += score;
}

let avgScore = totalScore / numOfScores;

document.getElementById ("forloops").innerHTML = "Your average score is: " + avgScore;
