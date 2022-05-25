//print
console.log("Hope you are fine");

//variables
/*Primitive data types

Number,String,Boolean,Undefined,Null

variable name start witha a letter, undersore or dollar sign.
cant use key words

*/
//create varibles
var firstName = "Harshani"; //variable define
var lastName = "neranjana";
var age = 25; //integer value
var isOk = true; //boolean value
var job, height; //variable declaration


//print only variable
console.log(firstName);
//print the variable with a string
console.log('my name is '+lastName)
//type coercion
console.log('My age is '+age); 
console.log('It is '+isOk);
console.log('I am a '+job);

//Get variable type
console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));

//define
job = 'Doctor';
//variable Mutation
lastName = 'fernando';
console.log('I am '+lastName+'. I am a'+job);

//--Display an alert--

//alert('My name is '+firstName+'. I am '+age+' years old. And am I ok? '+isOk+'.');

//--get user input--

//height = prompt('What is your height');
//alert('My height is '+height+'cm.');

//--Single Operators--

var myAge,yourAge,year,result;
myAge =25;
yourAge = 20;
year = 2022;

//Substaraction
result = year - myAge;
console.log('I was born in '+result);

//Addition
result = year + 10;
console.log('After 10 years, It will be '+result);

//Multilication
result = myAge * yourAge;
console.log('Product of our ages '+result);

//Devision
console.log('Division of our ages '+(myAge/yourAge));

//Modules
console.log('Modulus of our ages '+(myAge%yourAge));

//Exponentiation
console.log('Exponentiation of my age '+(myAge**2));

//Increment
console.log(myAge++);
console.log('Post Increment of my age '+myAge);

console.log(++myAge);
console.log('pre Increment of My Age '+myAge);

//Decrement
console.log(yourAge--);
console.log('Post Decrement of yourAge '+yourAge);

console.log(--yourAge);
console.log('pre Increment of your age '+yourAge);

// -- Operator Precedence--
var cal = (20+30)/10+4.5-2*4**2;
console.log(cal);

//--Multiple operators--
var ans1, ans2;
ans1 = ans2 = 4;
console.log(ans1+' '+ans2);

//--Assigment Operators--

//equal operator
var myNm = "Shama";
console.log(myNm);

//Addition with equal
var age = 24;
age +- 10; // age = age +10;
console.log(age);