// Browser events
// event
// respond
// data stored
// stop
// lifecycle


// Events
// Events are nothing but the actions or occurrences happen in the browser.
// eg. click, key press, scroll, etc.

// for eg
{/*
    we have a page in that page we have a button, when we click on the button some video is playing

    event = 'click'
    event-target = 'button'
    video run/play = 'action/behaviour'
    we write this in the event-listener

    To handle the events what actions need to take that we can write in the event-listener.

*/}

// elements
// addEventListener()     removeEventListener()

// syntax
// <event-target>(dot)addEventListener(<event-type>, <function->action>)

function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Nayan Sonawane";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// note: the function of addEventListener and removeEventListener should be same
// otherwise it is not working (because the entity/object should be same)

// Phases of events
// 1. Capturing phase
// In this phase the event goes through HTML DOM and searches for the target element.

// 2. Target phase
// In this phase where the event reaches the target element- the element on which the event 
// was originally triggered.  

// 3. Bubbling phase  
// Following the target phase, the event bubbles up from the target element through its parent.

const outer = document.getElementById('outer');
const middle = document.getElementById('middle');
const inner = document.getElementById('inner');

outer.addEventListener('click', () => {
    console.log("Capturing phase: Outer")
},true);    // 'true' specifies the capturing phase 

middle.addEventListener('click', () => {
    console.log("Capturing phase: middle")
}, true);

inner.addEventListener('click', () => {
    console.log("Target phase: inner")
});

outer.addEventListener('click', () => {
    console.log("Bubbling phase: outer")
});

middle.addEventListener('click', () => {
    console.log("Bubbling phase: middle")
});

inner.addEventListener('click', () => {
    console.log("Bubbling phase: inner")
}, true);   // 'true' spcifies the capturing phase

// when we click on 'Click Me' button, the event goes through capturing, target and bubbling phase.



// Event Object
// Event object is an in-built object which gives information about the events occured.
function changeText(event){
    console.log(event);
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Nayan Sonawane";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// Prevent Default behaviour 

let anchorElement = document.getElementById('fanchor');
anchorElement.addEventListener('click', function(event){
    event.preventDefault();
    anchorElement.textContent("Click done here");
});



// Avoiding too many listeners
let paras = document.querySelectorAll('p');

for(let i=0; i < paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', function(){
        alert("You have clicked on para: ", (i+1));
    })
}

// Here listener is same for all still we created four instance
// we have to create only one instance and all are mapped with it

let paras = document.querySelectorAll('p');
function alertPara(){
        alert("You have clicked on para: " + event.target.textContent);
    };

for(let i=0; i < paras.length; i++){
    let para = paras[i];
    para.addEventListener('click', alertPara)
}

// By the div
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);

// If I want that for only span tag the code gonna work
function alertPara(){
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on para: " + event.target.textContent);
    }
};
let mydiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);