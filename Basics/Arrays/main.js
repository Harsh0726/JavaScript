//.......................................
//.........Array.................
//......................................

//Ways to define an array
var students = ['ruwan','kasuni','saman','danushka','sachini'];
var marks = new Array(60, 44, 66 ,44 ,78);

//print array
console.log(students);

//length
console.log(students.length);

console.log(students[3]+' got '+marks[3]+ ' marks for Maths');

//Array mutation
students[3] = 'Saduni';
students[5] = 'Perera';
console.log(students);

//array muation to last element
students[students.length] = "denuwan";
students[students.length] = "Mahesh";
console.log(students);

//Different data types in array
var std1 = ["kamal","Perera",26,5.24364,"Agri","Panadura",true];
console.log(std1);
console.log(typeof(std1[3]));

//Add elements
std1.push('green');
std1.unshift('Mr.');
console.log(std1);

//Remove element
std1.pop();
std1.pop();
std1.shift();
console.log(std1);

//get index of an elemnent
console.log(std1.indexOf(26));

var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0] + ' is not a Agri student' : std1[0]+' is Agri Student';
console.log(isAgriStudent);

var myId = [977260,24,"Harsh",true,0.123, "O+","University Student"];
