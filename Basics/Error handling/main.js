//......................................
//.....Error Handling.....................
//......................................


//---Try Catch---

function findLargest(a, b, c) {
    try {
        if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
            throw "Error: Enter only numbers!";
        }
        else if(a == b || a == c || b == c){
            throw "Error: Enter differnt numbers!";
        }
        else{
            if(a > b && a > c){
                console.log("a is the largest number");
            }
            else if(b > c && b > a){
                console.log("b is the largest number");
            }
            else if(c > a && c > b){
                console.log("c is the largest number");
            }
            else{
                console.log("Invalid inputs!")
            }
        }
    } catch (err) {
        console.log(err);
    }
    finally {
        console.log("input numbers are, a : "+a+", b : "+b+", c : "+c);
    }
}

//calling
findLargest(7, 5, 2);