//............................................
//.......BMI problems with user inputs...........
//...............................................

//Declare Objects
var kasun = new Object();
var chamal = new Object();

//add properties
kasun.fullName = prompt("Kasun's full name : ");
kasun.mass = prompt("Kasun's Mass : ");
kasun.height = prompt("Kasun's height : ");

chamal.fullName = prompt("Chamal's full name : ");
chamal.mass = prompt("Chamal's mass : ");
chamal.height = prompt("Chamal's height name : ");

//Add bmi() method for both
kasun.bmi = chamal.bmi = function(){
    this.bmiVal = this.mass / (this.height**2);
    return this.bmiVal;
}

console.log(kasun);
console.log(chamal);

//find the highest BMI
if (kasun.bmi() > chamal.bmi()) {
    alert(kasun.fullName+ " has the highests BMI, "+kasun.bmi());
}
else if (kasun.bmi() < chamal.bmi()){
    alert(chamal.fullName+ " has the highests BMI, "+chamal.bmi());
}
else{
    alert("Both BMI have same value!");
}