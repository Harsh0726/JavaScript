//Q1

var mass, height, bmik, bmic, isKasun;

//kasun's bmi
mass = prompt("Kasun's mass");
height = prompt("Kasun's height");
bmik = mass/(height**2);

//chamal's bmi
mass = prompt("Chamal's mass");
height = prompt("Chamal's height");
bmic = mass/(height**2);

//boolean
isKasun = (bmik>bmic);

alert(isKasun);