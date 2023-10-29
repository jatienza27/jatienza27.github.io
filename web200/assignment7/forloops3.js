let numOfScores = prompt("How many scores would you like to enter?");
let score = 0;

for (let i = 0; i < numOfScores; i++) {
    score = prompt("Please enter you score:");
    document.getElementById ("forloops").innerHTML = "Your average score is: " + avgScore;
}