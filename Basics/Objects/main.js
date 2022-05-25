//.........................................
//............Objects...................
//............................................

/*
 In Javascripts objects are variables that has many values.
 Those values written as name:value pairs called properties or methods.
 */

//Object Literals ---> comma-seperated list of name-value pairs wrapped in curly braces.

var nimal = {
    firstName: 'Nimal',
    lastName: 'Perera',
    age: 25,
    isMarried: false,
    job: 'Developer',
    subjects: ['Java Programing','Web Development','Graphic Design','Database Management'],
    //inner object
    degree: {
        name: 'software Eng.',
        duration: '4 years',
        credits: 120
    },
    //array in objects
    projects: [
        {
            name: 'Ecormerce App',
            technology: 'Flutter',
            version: 1.1
        },
        {
            name: 'Music Player',
            technology: 'Java',
            version: 1.2
        },
        {
            name: 'POS',
            technology: 'c#',
            version: 2.0
        }
    ],
    //function
    yearOfBirth: function(year){
        return (year-this.age);
    }
}

//Get values
console.log(nimal);
console.log(nimal.age);
console.log(nimal['lastName']);


var x = 'age';
console.log(nimal[x]);

console.log(nimal.subjects);
console.log(nimal.subjects[2]);
console.log(nimal['subjects'][3]);
nimal.subjects.push('Agile Coach');
console.log(nimal.subjects);
nimal.subjects.shift();
console.log(nimal.subjects);

//acess of inner object degree
console.log(nimal.degree);
console.log(nimal.degree.credits);
console.log(nimal.degree['name']);
console.log(nimal['degree'].duration);

//acess of object array
console.log(nimal.projects[1].technology);

//function call
console.log('Year of birth '+ nimal.yearOfBirth(2022));

//Modify values
nimal.job = 'Engineer';
nimal.isMarried = true;

console.log(nimal);

// ----new Object syntax----

var kasun = new Object();

//add properties
kasun.firstName = "Kasun";
kasun.lastName = 'Fernando';
kasun['age'] = 30;

console.log(kasun); 