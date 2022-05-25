//.........................................
//.........Select & Update DOM Element------------
//----------------------------------------------

//---------Examine the document object---------------
//console.dir(document);

//-----------Get Properties-------------
/*console.log(document.URL);
console.log(document.charset);
console.log(document.lastModified);
console.log(document.title);
console.log(document.doctype);

console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[12]);

console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

//----change values----
document.title = "Document Object Model";
 
//--Not the best way--
document.all[12].textContent = "Shopping Item List";
*/

//----------------------------------------------

//-----Select element using ID-----------
console.log(document.getElementById('frmt')); 
var formTitle = document.getElementById('frmt');
console.log(formTitle);

//-----tectContent, innerText & innerHTML---
/*formTitle.textContent = 'Add Shopping Items';
formTitle.innerText = 'Shopping Items '
console.log(formTitle.textContent); //text content support to styles
console.log(formTitle.innerText);

formTitle.innerHTML = '<i>Hello </i> Add Items';
console.log(formTitle.innerHTML );*/

/*var navigation = document.getElementById('navbar');
navigation.style.backgroundColor = '#090209';
navigation.style.color = '#fff';

//----------------------------------

//----Select element using class name

var items = document.getElementsByClassName('items');
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hand Bag';

// -- Styling--

items[2].style.fontFamily = 'sarif';
items[2].style.backgroundColor= '#ebca14';

// --change the background color of all the list items--

for(var i of items){
    i.style.backgroundColor = '#a7520c';
}

var li = document.getElementsByTagName('li');
li[2].textContent= 'Book';

li[2].style.backgroundColor = '#ebca14';
li[2].style.color = '#fff';

for(var i of li){
    i.style.backgroundColor = '#ebca14';
}


//---------------------------------
//--Select element using query selector

//  The querySelector() method returns the first element that matches a specified
//css selector (s) in the document

//ID
//var hd = document.querySelector('#navbar');
//hd.style.border = 'solid 6px #000';
document.querySelector('#navbar').style.border = 'solid 6px #000';

// --Tag --
var input = document.querySelector('option');
input.style.backgroundColor = 'red';
input.value = 'Paint Bucket';

//Class
document.querySelector('.items').style.backgroundColor = '#ebca14';
// only 1st element selected in this query Selector - items

// --mix selector
var item = document.querySelector('div .frm #frmt');
item.style.color = '#ebca14';
*/

// --Select elements using quary Selector all
//querySelectorAll(), as a static Nodelist object

//Id
var hd = document.querySelectorAll('#hdt');
console.log(hd);

var dv = document.querySelectorAll('div');
console.log(dv);

//class
var cl = document.querySelectorAll('.items');
console.log(cl[2]);

var mx = document.querySelectorAll('div .list li');
console.log(mx);

// -----------Pseudo Classes-------------
// Grab all the odd list items
/*var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
 for(var i of odd){
     i.style.backgroundColor = '#ebca14';
 }
 for (var i of even){
     i.style.backgroundColor = '#1422eb';
 }
 */
