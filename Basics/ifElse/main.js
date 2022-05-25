//..............................
//..........comparition...............
//..................................

var a= 20;
var b = '20';
var c = 5;
var d = 15;

//Equal to
if(a == b){
    //equal value and equal type
    if(a===b){
    console.log('Both value and type of a is equal to b');
    }
    //Not equal value or not equal type
    else if(a !==b){
        console.log('only value or type of a is equal to b');
    }
}

//Greater than or equal 
c <= 2 ? console.log('c is less than or equal to 5'):console.log('c is greater than 5');
