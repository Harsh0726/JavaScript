//---------------------------
//----------Event-------------
//---------------------------

/*
 An HTML event can be something of HTML events:
 
 Here are some examples of HTML events:
 1.An HTML web page has finished loading
 2.An HTML input field was changed
 3.An HTML button was clicked

 Often, when events happen, you may want to do something.
 JavaScript Lets you execute code when events are detected.

 */

 //------Using Internal Events------
 //HTML allows event handler attributes, with javaScript cde,
 //to be added to HTML elements.
 //<elememt event = 'sme JavaScript'>

/*function btnClick(x){
    alert(x);
}
*/

//-----------------------------------
//--Using Event Listeners---
/*
    The addEventListeners() method attaches an event handler to 
    an elemnt without overwriting existing event handlers.

    You can add many event handlers to one element.

    you can add many event handlers of the same to one element, i.e two "click" events.

    You can add event listeners to any DOM object nt only HTML elemnts.
    i.e the window object.
    
    When using the addEventListener() method, the JavaScript is 
    seperated from the HTML markup, for better readability and
    allows you to add event listeners even when you do not 
    control the HTML markup.

    you can easily remve an event listener by using the
     removeEventListener() method.

     */

//--Intergrated Function--
/*var button1 =  document.getElementById('c-btn').addEventListener
('click', function() {
    alert("Button Clicked!");
});

//-------------------------------------------------------

// --Named Function--
document.getElementById('c-btn').addEventListener('mouseout', txtChange)

function txtChange(){
    alert("Mouse Out!");
    document.getElementById('hdt').textContent = 'Mouse Out!';
}
*/

//-----------------------------------------

//--Parameterized  Function
/*document.getElementById('i-btn').addEventListener('click',
function() {
    changeListBack("Helooo");
});

function changeListBack(x) {
    document.getElementById('li-item').style.backgroundColor = '#ebca14';
    document.getElementById('li-item').firstElementChild.textContent = x;
}
*/

//-----------------------------------------

//--Event Parameter--
/*var button2 = document.getElementById('e-btn').addEventListener
('click', clickBtn);

function clickBtn(e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);

    //output
    var output = document.getElementById('output');
    output.innerHTML = "<h4>Class name : " + e.target.classList[0] + "</h4>";

    //Clicking position
    console.log(e.clientX);
    //document.getElementById('output').innerHTML = "<h3>Clicking x position : " + e.clientX + "</h3>";

    console.log(e.offsetX);
    console.log(e.offsetY);

    //Check key press
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    
}
*/

//-----------------------------------------------

// ---Bubbling and Capturing--

/*

    Event propagation is a way of definning the element order when an event occurs,
    If you have a <p> element inside a <div> element, and the user clicks on the p element ,
    which element's 'click' be handled firt?
    
    In Bubbling the inner most element's click event is handled first and then the outer.
    , the <p> element click event is  handled fisrt, then the <div>
    elemnt's click event.

    In capturing the outer most element's  event is handled first and then the inner:
    the <div> element's click event will be handled first, then the
    <p> element click event.

    The default valule is false, which is use the bubbling propagation, when the value is set to true,
    the event uses the capturing propagation.

*/ 

//Bubbling
document.getElementById('myP1').addEventListener('click',function(){
    alert('you clicked the white element!');
}, false);

document.getElementById('myDiv1').addEventListener('click',function(){
    alert('you clicked the orange element!');
}, false);

//Capturing
document.getElementById('myP2').addEventListener('click',function(){
    alert('you clicked the white element!');
}, true);

document.getElementById('myDiv2').addEventListener('click',function(){
    alert('you clicked the orange element!');
}, true);

//----------------------------------------

//--Remove event Listners----
function myFunc() {
    alert('Button has clicked');
}

//Add
document.getElementById('ev-btn').addEventListener('click',
myFunc);

//Remove
document.getElementById('rm-btn').addEventListener('click',
function () {
    document.getElementById('ev-btn').removeEventListener('click',myFunc);
    console.log("Event has removed");
})

//------------------------------------

//--Differnt types of events for mouse-----

var btn = document.getElementById('t-btn');
var box = document.getElementById('box');

//btn.addEventListener('click', typeOfEvent1);
//btn.addEventListener('dblclick', typeOfEvent1);
//btn.addEventListener('mousedown', typeOfEvent1);
//btn.addEventListener('mouseup', typeOfEvent1);

//box.addEventListener('mouseenter', typeOfEvent1);
//box.addEventListener('mouseleave', typeOfEvent1);

//box.addEventListener('mouseover', typeOfEvent1);
//box.addEventListener('mouseout', typeOfEvent1);

box.addEventListener('mousemove', typeOfEvent1);

function typeOfEvent1(e) {
    console.log("Event Type: "+e.type);

    document.querySelector('#box h2').textContent = 'Mouse X: '+e.offsetX+ ' | Y: ' +e.offsetY;

    document.getElementById('box').style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+')';
}

//-------------------------------------

//---Different types of events for keyboard---

var keyInput = document.querySelector('input[type="text"]');

//keyInput.addEventListener('keydown', typeOfEvent2);
//keyInput.addEventListener('keyup', typeOfEvent2);
//keyInput.addEventListener('keypress', typeOfEvent2);

//keyInput.addEventListener('focus', typeOfEvent2);
//keyInput.addEventListener('blur', typeOfEvent2);

//keyInput.addEventListener('copy', typeOfEvent2);
//keyInput.addEventListener('paste', typeOfEvent2);
//keyInput.addEventListener('cut', typeOfEvent2);

//----------cut,paste,keypress--->input--------
keyInput.addEventListener('input', typeOfEvent2);

function typeOfEvent2(e) {
    console.log("Event Type: "+e.type);
    //console.log('value : '+e.target.value);
    //document.getElementById('out').textContent = e.target.value;
}

//-----------------------------------------------------

//---Other differnt types of events---

//select

var select = document.querySelector('select');

select.addEventListener('change',typeOfEvent3);
//select.addEventListener('input',typeOfEvent3);

function typeOfEvent3(e) {
    console.log("Event Type: "+e.type);
    console.log('value : '+e.target.value);
    //document.getElementById('out').textContent = e.target.value;
}

//Form

var form = document.querySelector('form');

form.addEventListener('submit',typeOfEvent4);

function typeOfEvent4(e){
    //deafault subbimit stopping
    e.preventDefault();
    console.log("Event Type: "+e.type);
}