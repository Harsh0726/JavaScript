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
var tip = new Array(0.2 , 0.15 , 0.1 );
var pAmount = new Array();

for (let i = 0; i < 3; i++) {
   pAmount[i] = parseInt(prompt("Bill "+ (i+1) +" amount is Rs."));   
}

for (let i = 0; i < 3; i++) {
    if (pAmount[i]<1000) {
        pAmount[i] += pAmount[i]*tip[0];
    }
    else if (1000<=pAmount[i]&&pAmount[i]<=1500){
        pAmount[i] += pAmount[i]*tip[1] ;
    }
    else{
        pAmount[i] += pAmount[i]*tip[2]  ;
    }
}

console.log(tip);
console.log(pAmount);


            