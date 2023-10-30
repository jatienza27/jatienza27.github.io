const numOfScores = prompt("How many scores would you like to enter?");
const score = [0];

for (let i = 0; i < numOfScores; i++) {
   score = prompt("Please enter you score:");
   const avgScore = score / numOfScores;
   document.getElementById ("arrays").innerHTML = "Your average score is: " + avgScore;
}

