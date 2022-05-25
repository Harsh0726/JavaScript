//-------------------------------------------
//-----------Traversing the DOM------------
//---------------------------------------------

var itemList = document.querySelector('#li-item');

// ---Parent Node----
console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#afafaf';
console.log(itemList.parentNode.parentNode);

//---------Parent Element-------------
//Most of the time simiar to parentNode
console.log(itemList.parentElement);
//itemList.parentElement.style.border = 'solid #6f6f6f 5px';
//console.log(itemList.parentElement.parentElement);

//------------------------------------------

//-----Child Nodes-------
//console.log(itemList.childNodes);
// text represent the line breaks

//-----Children----
//console.log(itemList.children);
//console.log(itemList.children[2].textContent);

//itemList.children[2].style.backgroundColor = '#ebca14';

//-------------------------------------------

// ----First Child----
//Work like childnodes
//console.log(itemList.firstChild);

//------first Element Child--------------
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.style.backgroundColor = '#ebca14';

//-----Last Child-------
//Work Like childnodes
//console.log(itemList.lastChild);

//----Last element child-------
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.style.backgroundColor = '#ebca14';

//------------------------------------------------------

//------------------Next sibling---------------
 //work like childnodes
//console.log(itemList.nextSibling);

//------next element sibling
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.backgroundColor = '#ebca14';

//-------Previous sibling----
// work like chilnodes
//console.log(itemList.previousSibling);

//-----Previous element sibling----
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.backgroundColor = '#ebca14';

//---Create an Element

//-----Create an Input------------
var input = document.createElement('input');

//--Add a class
input.className = 'test';

// --Add an ID
input.id = 'last';

// Add style
input.style.backgroundColor = '#ebca14';

//--Add an attribute
input.setAttribute('type','text');

console.log(input);

//---Create a Div
var newDiv = document.createElement('div');
//---Create a text node
var newText = document.createTextNode('How are you!');

//Add text to div
newDiv.appendChild(newText);

console.log(newDiv);

//------Insert created element to the document
var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

//add
form.insertBefore(input, button);


console.log(form);
console.log(button);