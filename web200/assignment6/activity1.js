let numOfScores = prompt("How many scores would you like to enter?");
let i = 0;
let score = 0;
let avgScore = score / numOfScores;

do {
    score = prompt("Please enter you score:");
    i++;
}

while ( i < numOfScores);

document.getElementById ("dowhileloops").innerHTML = "Your average score is: " + avgScore;