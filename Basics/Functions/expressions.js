//.................................
//......Functiion Expressions............
//....................................

//function declaration
//  function profession(job, firstName){}

//.....function expression...
var profession = function(job, firstName){
    switch (job){
        case 'doctor':
            return firstName+ " is treating patients.";
        case 'teacher':
            return firstName+ " is teaching students.";
        case 'engineer':
            return firstName+ " is working with buildings.";
        default:
            return firstName+ " is doing something else.";
    }
}

//calling
console.log(profession('doctor','Kasun'));
console.log(profession('engineer','Sashini'));
console.log(profession('Professor','Waruan'));