//.......................................
//......Tip Calculator.................
//.....................................

/*
............................................................
Dasun and his friends went on a picnic. To get food they went to 3 different resturants
for each meal. The bills are Rs.1230, Rs.982, Rs.1640.

To tip the waiter a fair amount, Dasun created a simple tip calculator
(as a function). He likes to tip
1) 20% of the bill when the bill is less than Rs.1000,
2) 15% when the bill is between Rs 1000 and Rs 1500, and the
3) 10% if the bill is more than Rs 1500.

In the end, Dasun would like to have 2 arrays:

1 Containing all 3 tips</li>
2 Containing all three final paid amount(bill+tip)
..............................................................
*/

var tips = new Array();
var amount = new Array();

//Function
function tipCalculator(bill){
    var tip;
    if(bill < 1000){
        //Calculate
        tip = bill*(20/100);
    }
    else if(1000<=bill&&bill<1500){
        tip = bill*(15/100);
    }
    else{
        tip = bill*(10/100);
    }
    //store in array
    tips.push(tip);
    amount.push(bill+tip);

    return tip;
}

//call
console.log("1 - Tip :"+ tipCalculator(1230));
console.log("2 - Tip :"+ tipCalculator(982));
console.log("3 - Tip :"+ tipCalculator(1640));

console.log(tips);
console.log(amount);