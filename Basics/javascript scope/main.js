//.....................................
//.......JavaScripts Scope..........
//................................

//---Local Variables---
function sum(){
    var a = 2;
    var b =8;
    console.log(a+b);
}

//call
sum();
//console.log(a);

var sub = "Maths";
function mySub(){
    console.log("My subject is "+sub);
    sub = "Art";
}


mySub();
mySub();
