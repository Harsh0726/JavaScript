//.........................................
//..........Introduction of Functions.........
//.........................................

//Function is a re-usable peace of code that does specific thing

//define functions:

//without return
function addNumbers(num1, num2){
    var ans = num1 + num2;
    console.log("Addition is "+ans);
}

//with return
function subNumbers(num1, num2){
    //Return the value to where we called the function
    //exit the fuction
    return num1-num2;
}

//calling function
addNumbers(20, 32.5);

var sub = subNumbers(30, 12);
console.log("Substraction is "+sub);

//define a function for calculatig age
function calAge(birthYear){
    return 2022 - birthYear;
}

//calling
console.log("Shama is "+calAge(1996)+" years old");
console.log("Harsh is "+calAge(1997)+" years old");

// define a function for retiring year
function retiringYear(fName, birthYear){
    //calling calAge function to get age
    var age = calAge(birthYear)
    var retire = 60 - age;
    console.log(fName+" retires in "+retire+" years, in "+(birthYear+age+retire));

}

//calling
retiringYear("Namal",1990);
retiringYear("Dewmi",1997);
retiringYear("Kalum", 2000);