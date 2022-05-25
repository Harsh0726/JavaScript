//........................................
//.......BMI with objects................
//..........................................

var chamal = {
    fullName: 'Chamal Mendis',
    mass: 50,
    height: 1.23,
    bmi: function(){
        this.bmiValue = this.mass/(this.height**2);
        return this.bmiValue;
    }
}

var kasun = {
    fullName: 'Kasun Silva',
    mass: 63,
    height: 1.45,
    bmi: function(){
        this.bmiValue = this.mass/(this.height**2);
        return this.bmiValue;
    }
}

var cBMI = chamal.bmi();
console.log("Chamal bmi "+ cBMI);
var kBMI = kasun.bmi();
console.log("Kasun bmi "+ kBMI);

console.log(chamal);

if (cBMI > kBMI) {
    console.log("Heighst BMI was "+chamal.fullName+ "'s BMI,it is "+cBMI);
}
else if(kBMI > cBMI){
    console.log("Heighst BMI was "+kasun.fullName+ "'s BMI,it is "+kBMI);
}
else{
    console.log("Both has same BMI, it is "+ cBMI);
}
