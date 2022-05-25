//............................
//........Winning Team........
//.............................

/*

Sri anka and England both played 3match one day cricket series. In last 3
games Sri Lanka scored 250, 277, 300 runs, while England scored 185, 244, 360 runs.

1.Calculate the average score for each team.
2.Deside which teams wind in average (highest average score), and display the winner with the average score.
3.Then change scores to show different winners. Don't forget to take into account there might be a draw(same average score).

*/

var score1, score2, score3;

score1 = parseInt(prompt("Sri Lanka 1st match score is "));
score2 = parseInt(prompt("Sri Lanka 2nd match score is "));
score3 = parseInt(prompt("Sri Lanka 3rd match score is "));

averageSri = (score1+score2+score3)/3

console.log("Sri Lankan's score average is "+averageSri);

score1 = parseInt(prompt("England 1st match score is "));
score2 = parseInt(prompt("England 2nd match score is "));
score3 = parseInt(prompt("England 3rd match score is "));

averageEng = (score1+score2+score3)/3

console.log("England's score average is "+averageEng);

if (averageSri>averageEng) {
    alert("Winning team is SriLanka");
    console.log("Winning team is Srilanka");
} 
else if(averageEng>averageSri){
    alert("Winning Team is England");
    console.log("Winning team is England");
}
else {
    alert("Match is draw!");
    console.log("Match was draw!");
}