//............................................
//.......JavaScript basics- Loops.............
//............................................

//--For Loop--
for(var i=0; i<10; i++){
    console.log(i);
}

var students =['Namal','Kumara','Dasun','Sachini','John'];

for(var i=0; i<students.length;i++){
    console.log(students[i]);
}

//---For/In Loop---

var person = {
    fname: "Chamara",
    lname: "Silva",
    age: 25
};
var i;
for(i in person){
    console.log(person[i]);
}

//---For/of Loop---

var fullName = "Chamara Perera";
var j;
for(j of fullName){
    console.log(j);
}

for(i of students){
    console.log(i);
}

//--While Loop--
var marks = [33,55,66,77,22];
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
}

//--Do While Lopp--
var l = 10;
do{
    console.log(l);
    l--;
}while(l >= 1);

//--Continue & Break--

var data = ['saman','Galle',1996, 'Maths',true,'Choclate'];

//Continue
for(var i=0;i<data.length;i++){
    if(typeof(data[i]) !== 'string') continue;
    console.log(data[i]);
}

//Break
for (var i=0; i < data.length; i++) {
    if(typeof(data[i]) !== 'string') break;
    console.log(data[i]);
    
}