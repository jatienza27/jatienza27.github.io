const numOfScores = Number(prompt("How many scores would you like to enter?"));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function avgScore(array) {
   var score = 0;
   var totalScore = 0;
   var i = 0;

   score = Number(prompt("Please enter you score:"));

   array.forEach(function (score) {
      totalScore += score;
      i++;
   });

   return avgScore = totalScore / numOfScores;
}

document.getElementById("array").innerHTML = "Your average score is: " + avgScore;
