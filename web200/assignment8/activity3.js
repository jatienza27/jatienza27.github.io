function avgScore() {
   let score = 0;
   let totalScore = 0;
   let i = 0;
   let array = [];
   let avgScore = 0;
   
   const numOfScores = Number(prompt("How many scores would you like to enter?"));
  
   while (i < numOfScores) {
      score = Number(prompt("Please enter you score:"));
      array.push(score);
      i++;
   }


  for (j = 0; j < array.length; j++){
   totalScore +=[j];
  }

  avgScore = totalScore / numOfScores;

  avgScore = Math.round(avgScore * 100) / 100

  return avgScore;
}

document.getElementById("arrays").innerHTML = "Your average score is: " + avgScore;

//Calculated average still does not come out correctly for some reason.